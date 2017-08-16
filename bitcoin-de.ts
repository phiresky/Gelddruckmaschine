import * as crypto from "crypto";
import * as request from "request-promise-native";
import * as querystring from "querystring";

import Gen from "./generated";

type FromGenerated<T extends any> = {
   request: T["Parameter"];
   response: T["Response"]["Success_200"];
};
type Methods = {
   "account": FromGenerated<Gen["Orders"]["showOrderbook"]>;
};

type Response<T> = {
   /** Liste mit Error-Meldungen und dazugehörigen Error-Codes. */
   errors: {
      /** Infotext */
      message: string;
      /** Fehlercode */
      code: number;
      /**Feld, auf den sich der Fehler bezieht. */
      field?: string;
   }[];
   /** Anzahl aktuell verbleibender Credits */
   credits: number;
   maintenance?: {
      /** Infotext */
      message: string;
      /** Start der Arbeiten (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339) */
      start: string;
      /** Voraussichtliches Ende der Arbeiten (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339) */
      end: string;
   }[];
} & T;
/**
 * BitcoindeClient connects to the bitcoin.de API
 * @param {String} key    API Key
 * @param {String} secret API Secret
 */
class BitcoindeClient {
   noncer = new Noncer();
   config: {
      url: string;
      version: string;
      agent: string;
      key: string;
      secret: string;
      timeoutMS: number;
   };
   constructor(key: string, secret: string) {
      this.config = {
         url: "https://api.bitcoin.de/v1/",
         version: "v1",
         agent: "Money Printer",
         key,
         secret,
         timeoutMS: 20000
      };
   }
   /**
     * Perform GET API request
     * @param  {String}   method   API method
     * @param  {Object}   params   Arguments to pass to the api call
     * @param  {Function} callback A callback function to be executed when the request is complete
     * @return {Object}            The request object
     */
   get<K extends keyof Methods>(
      method: K,
      params: Methods[K]["request"]
   ): Promise<Methods[K]["response"]> {
      var url = this.config.url + method;
      return this.rawRequest("get", url, params);
   }

   /**
     * Perform POST API request
     * @param  {String}   method   API method
     * @param  {Object}   params   Arguments to pass to the api call
     * @param  {Function} callback A callback function to be executed when the request is complete
     * @return {Object}            The request object
     */
   post(method, params, callback) {
      var url = this.config.url + method;
      return this.rawRequest("post", url, params);
   }

   /**
     * Perform DELETE API request
     * @param  {String}   method   API method
     * @param  {Object}   params   Arguments to pass to the api call
     * @param  {Function} callback A callback function to be executed when the request is complete
     * @return {Object}            The request object
     */
   delete(method, params, callback) {
      var url = this.config.url + method;
      return this.rawRequest("delete", url, params);
   }

   emptyHash = crypto.createHash("md5").digest("hex");
   /**
     * Send the actual HTTP request
     * @param    method   HTTP method
     * @param     url      URL to request
     * @param    params   POST body
     * @return {Object}            The request object
     */
   async rawRequest(
      method: "get" | "post" | "delete",
      url: string,
      params: any
   ) {
      var nonce = this.noncer.generate();
      let md5Query = this.emptyHash;
      const options = {
         // empty string hash
         url: url,
         timeout: this.config.timeoutMS,
         form: null as any,
         headers: {}
      };

      if (params) {
         switch (method) {
            case "post":
               var queryParams: { [name: string]: any } = {};
               Object.keys(params).sort().forEach(function(idx) {
                  queryParams[idx] = params[idx];
               });
               md5Query = crypto
                  .createHash("md5")
                  .update(querystring.stringify(queryParams))
                  .digest("hex");
               options.form = queryParams;
               break;
            case "get":
            case "delete":
               options.url += "?" + querystring.stringify(params);
               break;
            default:
               throw Error(method + " not defined");
         }
      }

      const signature = crypto
         .createHmac("sha256", this.config.secret)
         .update(
            method.toUpperCase() +
               "#" +
               options.url +
               "#" +
               this.config.key +
               "#" +
               nonce +
               "#" +
               md5Query
         )
         .digest("hex");

      options.headers = {
         "User-Agent": this.config.agent,
         "X-API-KEY": this.config.key,
         "X-API-NONCE": nonce,
         "X-API-SIGNATURE": signature
      };
      try {
         var response = await request[method](options);
      } catch (e) {
         console.error(url + ": failed: ", e);
      }
      try {
         var data = JSON.parse(response) as Response<any>;
      } catch (e) {
         throw new Error(
            url + ": Could not understand response from server: " + e
         );
      }

      if (data.errors && data.errors.length > 0) {
         throw new Error("Bitcoin.de API returned errors: " + data.errors);
      }
      return data;
   }
}

class Noncer {
   last = 0;
   counter = 0;
   // if you call Date.now() to fast it will generate
   // the same ms, helper to make sure the nonce is
   // truly unique (supports up to 999 calls per ms).
   generate() {
      var now = Date.now();

      this.counter = now === this.last ? this.counter + 1 : 0;
      this.last = now;

      // add padding to nonce
      var padding =
         this.counter < 10
            ? "000"
            : this.counter < 100 ? "00" : this.counter < 1000 ? "0" : "";

      return now + padding + this.counter;
   }
}
