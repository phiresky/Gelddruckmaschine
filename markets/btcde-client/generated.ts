import { rawRequest, BitcoindeClient as Api } from "./bitcoin-de";

type integer = number;
type int = integer;
type float = number;

/**
 * Orders
 */
export namespace Orders {
	/**
    * showOrderbook
    */
	export namespace showOrderbook {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * type
          *
          * Angebots-Typ. 
          * “buy” liefert Verkaufsangebote , “sell” Kaufangebote
          */
			type: "buy" | "sell";
			/**
          * amount
          *
          * Menge der Bitcoins
          */
			amount?: float;
			/**
          * price
          *
          * Preis pro Bitcoin in Euro. 
          * 
          * Entspricht bei "buy" dem maximalen Kaufpreis und bei "sell" dem minimalen Verkaufspreis.
          */
			price?: float;
			/**
          * order_requirements_fullfilled
          *
          * Nur Angebote anzeigen, deren Anforderungen ich erfülle (bspw. Legitimationsstatus, Trust-Level, Sitz der Bank, Zahlungsart).
          *
          * default: 0
          */
			order_requirements_fullfilled?: integer;
			/**
          * only_kyc_full
          *
          * Nur Angebote von vollständig identifizierten Usern anzeigen.
          *
          * default: 0
          */
			only_kyc_full?: integer;
			/**
          * only_express_orders
          *
          * Nur Angebote anzeigen, die über Express-Handel gehandelt werden können.
          *
          * default: 1
          */
			only_express_orders?: integer;
			/**
          * only_same_bankgroup
          *
          * Nur Angebote von Handelspartner anzeigen, die ein Bankkonto bei derselben Bankgruppe (BIC-Nummernkreis) wie ich haben.
          *
          * default: 0
          */
			only_same_bankgroup?: integer;
			/**
          * only_same_bic
          *
          * Nur Angebote von Handelspartnern anzeigen, die ein Bankkonto bei derselben Bank wie ich haben.
          *
          * default: 0
          */
			only_same_bic?: integer;
			/**
          * seat_of_bank
          *
          * Nur Angebote mit bestimmtem Sitz der Bank anzeigen. (ISO 3166-2). s. Tabelle Bankenländerliste
          *
          * default: Alle möglichen Länder aus der Tabelle Bankenländerliste
          */
			seat_of_bank?: any[];
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * orders
             *
             * Gefundene Angebote
             */
				orders: Orders[];
			}

			/**
          * Orders
          */
			export interface Orders {
				/**
             * order_id
             *
             * ID des Angebots
             */
				order_id: string;
				/**
             * type
             *
             * Typ des Angebots
             */
				type: "buy" | "sell";
				/**
             * max_amount
             *
             * Maximal handelbare BTC-Menge
             */
				max_amount: float;
				/**
             * min_amount
             *
             * Mindestens handelbare BTC-Menge
             */
				min_amount: float;
				/**
             * price
             *
             * Preis pro BTC in Euro
             */
				price: float;
				/**
             * max_volume
             *
             * Max. Euro-Volumen der Order
             */
				max_volume: float;
				/**
             * min_volume
             *
             * Min. Euro-Volumen der Order
             */
				min_volume: float;
				/**
             * order_requirements_fullfilled
             *
             * Zeigt an, ob das Angebot bedient werden könnte oder nicht (Trust-Level, KYC-Full, Sitz der Bank etc.).
             */
				order_requirements_fullfilled: boolean;
				/**
             * trading_partner_information
             *
             * Infos zum User des Angebots (s.Tabelle Trading Partner Information)
             */
				trading_partner_information: Trading_Partner_Information[];
				/**
             * order_requirements
             *
             * Voraussetzungen zum Bedienen des Angebots (s. Tabelle Order Requirements)
             */
				order_requirements: Order_Requirements[];
			}

			/**
          * Trading-Partner-Information (beziehen sich auf den Ersteller des Angebots)
          */
			export interface Trading_Partner_Information {
				/**
             * username
             *
             * User-Name
             */
				username: string;
				/**
             * is_kyc_full
             *
             * Vollständig identifizierter User
             */
				is_kyc_full: boolean;
				/**
             * trust_level
             *
             * Trust-Level
             */
				trust_level: "bronze" | "silver" | "gold" | "platin";
				/**
             * bank_name
             *
             * Name der Bank
             */
				bank_name: string;
				/**
             * bic
             *
             * BIC der Bank
             */
				bic: string;
				/**
             * rating
             *
             * Prozentualer Anteil an positiven Bewertungen durch die Handelspartner
             */
				rating: integer;
				/**
             * amount_trades
             *
             * Anzahl bereits getätigten Trades
             */
				amount_trades: integer;
			}

			/**
          * Order Requirements
          */
			export interface Order_Requirements {
				/**
             * min_trust_level
             *
             * Mindest-Trust-Levels des Handelspartners
             */
				min_trust_level: "bronze" | "silver" | "gold" | "platin";
				/**
             * only_kyc_full
             *
             * Handelspartner muss vollständig identifiziert sein
             */
				only_kyc_full: boolean;
				/**
             * seat_of_bank
             *
             * Erlaubte Länder, in denen die Bank des Handelspartners ihren Sitz haben darf (ISO 3166-2) s. Tabelle Bankenländerliste
             * 
             * value: Bankenländerliste
             */
				seat_of_bank: any[];
				/**
             * payment_option
             *
             * 1 => Express-Only
             * 2 => SEPA-Only
             * 3 => Express & SEPA
             */
				payment_option: 1 | 2 | 3;
			}
		}
	}

	/**
    * createOrder
    */
	export namespace createOrder {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * type
          *
          * 
          */
			type: "buy" | "sell";
			/**
          * max_amount
          *
          * Maximale Menge der zu handelnden Bitcoins
          */
			max_amount: float;
			/**
          * price
          *
          * Preis pro Bitcoin in Euro
          */
			price: float;
			/**
          * min_amount
          *
          * Mindest-Menge der zu handelnden Bitcoins
          *
          * default: max_amount/2
          */
			min_amount?: float;
			/**
          * end_datetime
          *
          * Enddatum (mindestens 5 Tage in der Zukunft) des Angebots. 
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          * Zulässige Werte für die Minuten sind: 00, 15 , 30, 45
          *
          * default: akt. Datum + 5 Tage
          */
			end_datetime?: string;
			/**
          * new_order_for_remaining_amount
          *
          * Neues Angebot mit Restmenge anlegen, wenn nur eine Teilmenge aus dem Angebot bedient wurde.
          *
          * default: 0
          */
			new_order_for_remaining_amount?: integer;
			/**
          * min_trust_level
          *
          * Mindest-Trust-Level des Handelspartners
          *
          * default: Default-Einstellung im User-Profil
          */
			min_trust_level?: "bronze" | "silver" | "gold" | "platin";
			/**
          * only_kyc_full
          *
          * Handelspartner muss vollständig identifiziert sein.
          *
          * default: 0
          */
			only_kyc_full?: integer;
			/**
          * payment_option
          *
          * Diese Option wirkt sich nur bei type="sell" aus!
          * 
          * 1 => Express-Only
          * 2 => SEPA-Only 
          * 3 => Express & SEPA 
          * 
          * Bei type="buy" ist Ihre Vorgabe unter "Express-Handel-Einstellungen" (bei ausreichender Reservierung!) maßgeblich
          *
          * default: 1
          */
			payment_option?: 1 | 2 | 3;
			/**
          * seat_of_bank
          *
          * Erlaubte Länder, in denen die Bank des Handelspartners ihren Sitz haben darf (ISO 3166-2)
          *
          * default: Alle möglichen Länder aus der Tabelle Bankenländerliste
          */
			seat_of_bank?: any[];
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 201
          * 
          * 
          */
			export interface Success_201 {
				/**
             * order_id
             *
             * Die ID des angelegten Angebots.
             */
				order_id: string;
			}
		}
	}

	/**
    * deleteOrder
    */
	export namespace deleteOrder {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * order_id
          *
          * 
          */
			order_id: string;
		}

		/**
       * Response
       */
		export interface Response {}
	}

	/**
    * showMyOrders
    */
	export namespace showMyOrders {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * type
          *
          * Angebots-Typ
          */
			type?: "buy" | "sell";
			/**
          * state
          *
          * Aktueller Status (s. Tabelle Possible Order-State-Values)
          *
          * default: 0
          */
			state?: -2 | -1 | 0;
			/**
          * date_start
          *
          * Startzeitpunkt, ab dem die Orders zurückgeliefert werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          */
			date_start?: string;
			/**
          * date_end
          *
          * Endzeitpunkt, bis zu dem die Orders zurückgeliefert werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          */
			date_end?: string;
			/**
          * page
          *
          * Seitenzahl zum Blättern innerhalb der Ergebnisseiten
          *
          * default: 1
          */
			page?: integer;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * orders
             *
             * Max. 20 Angebote mit ihren Details (s.Tabelle Order-Details)
             */
				orders: showMyOrderDetails.Response.Order_Details[];
				/**
             * page
             *
             * Informationen zu den möglichen Ergebnisseiten (s.Tabelle Page-Details)
             */
				page: Page_Details[];
			}

			/**
          * Page Details
          */
			export interface Page_Details {
				/**
             * current
             *
             * Aktuell zurückgelieferte Seite
             */
				current: integer;
				/**
             * last
             *
             * Letzte verfügbare Seite zu den Suchkriterien
             */
				last: integer;
			}
		}
	}

	/**
    * showMyOrderDetails
    */
	export namespace showMyOrderDetails {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * order_id
          *
          * ID des abzufragenden Angebots
          */
			order_id: string;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * order
             *
             * Details zum Angebot (s.Tabelle Order-Details)
             */
				order: Order_Details[];
			}

			/**
          * Order Details
          */
			export interface Order_Details {
				/**
             * order_id
             *
             * ID des Angebots
             */
				order_id: string;
				/**
             * type
             *
             * Typ des Angebots
             */
				type: "buy" | "sell";
				/**
             * max_amount
             *
             * Maximal zu kaufende/verkaufende BTC-Menge
             */
				max_amount: float;
				/**
             * min_amount
             *
             * Minimal zu kaufende/verkaufende BTC-Menge
             */
				min_amount: float;
				/**
             * price
             *
             * Preis pro BTC in Euro
             */
				price: float;
				/**
             * max_volume
             *
             * Max. Euro-Volumen der Order
             */
				max_volume: float;
				/**
             * min_volume
             *
             * Min. Euro-Volumen der Order
             */
				min_volume: float;
				/**
             * end_datetime
             *
             * Ablaufzeitpunkt des Angebots. Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
             */
				end_datetime: string;
				/**
             * new_order_for_remaining_amount
             *
             * Neues Angebot mit Restmenge anlegen, wenn nur eine Teilmenge aus dem Angebot bedient wurde.
             */
				new_order_for_remaining_amount: boolean;
				/**
             * state
             *
             * Aktueller Status (s. Tabelle Possible Order-State-Values)
             */
				state: integer;
				/**
             * order_requirements
             *
             * Voraussetzungen zum Bedienen des Angebots (s. Tabelle Order Requirements)
             */
				order_requirements: Order_requirements[];
				/**
             * created_at
             *
             * Erstellzeitpunkt des Angebots. Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00)
             */
				created_at: string;
			}

			/**
          * Order requirements
          */
			export interface Order_requirements {
				/**
             * min_trust_level
             *
             * Mindest-Trust-Levels des Handelspartners
             */
				min_trust_level: "bronze" | "silver" | "gold" | "platin";
				/**
             * only_kyc_full
             *
             * Handelspartner muss vollständig identifiziert sein
             */
				only_kyc_full: boolean;
				/**
             * seat_of_bank
             *
             * Erlaubte Länder, in denen die Bank des Handelspartners ihren Sitz haben darf (ISO 3166-2)
             * 
             * value: Bankenländerliste
             */
				seat_of_bank: any[];
				/**
             * payment_option
             *
             * 1 => Express-Only
             * 2 => SEPA-Only
             * 3 => Express & SEPA
             */
				payment_option: integer;
			}
		}
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	2
   
    * 
    * Durchsuchen des Orderbooks nach passenden Angeboten
    */
	export function showOrderbook(
		api: Api,
		parameters: showOrderbook.Parameter,
	): Promise<showOrderbook.Response.Success_200> {
		return rawRequest(api, "GET", "orders", parameters);
	}

	/**
    * POST
    * 
    * 
    * 
    * Credits:	1
   
    * 
    * Anlegen einer neuen Order
    */
	export function createOrder(
		api: Api,
		parameters: createOrder.Parameter,
	): Promise<createOrder.Response.Success_201> {
		return rawRequest(api, "POST", "orders", parameters);
	}

	/**
    * DELETE
    * 
    * 
    * 
    * Credits:	2
   
    * 
    * Löschen einer Order
    */
	export function deleteOrder(api: Api, parameters: deleteOrder.Parameter): Promise<{}> {
		return rawRequest(api, "DELETE", "orders/:order_id", parameters);
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	2
   
    * 
    * Abrufen und Filtern meiner Orders
    */
	export function showMyOrders(
		api: Api,
		parameters: showMyOrders.Parameter,
	): Promise<showMyOrders.Response.Success_200> {
		return rawRequest(api, "GET", "orders/my_own", parameters);
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	2
   
    * 
    * Details zu einer meiner Order abrufen
    */
	export function showMyOrderDetails(
		api: Api,
		parameters: showMyOrderDetails.Parameter,
	): Promise<showMyOrderDetails.Response.Success_200> {
		return rawRequest(api, "GET", "orders/:order_id", parameters);
	}
}

/**
 * Trades
 */
export namespace Trades {
	/**
    * executeTrade
    */
	export namespace executeTrade {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * order_id
          *
          * ID des Angebots.
          */
			order_id: string;
			/**
          * type
          *
          * Angebots-Typ
          */
			type: "buy" | "sell";
			/**
          * amount
          *
          * Menge der Bitcoins
          */
			amount: float;
		}

		/**
       * Response
       */
		export interface Response {}
	}

	/**
    * showMyTrades
    */
	export namespace showMyTrades {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * type
          *
          * Trade-Typ
          */
			type?: "buy" | "sell";
			/**
          * state
          *
          * Aktueller Trade-Status (s. Tabelle Possible Trade-State-Values)
          *
          * default: 0
          */
			state?: -1 | 0 | 1;
			/**
          * date_start
          *
          * Startzeitpunkt, ab dem Trades zurückgeliefert werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          */
			date_start?: string;
			/**
          * date_end
          *
          * Endzeitpunkt, bis zu dem Trades zurückgeliefert werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          */
			date_end?: string;
			/**
          * page
          *
          * Seitenzahl zum Blättern innerhalb der Ergebnisseiten
          *
          * default: 1
          */
			page?: integer;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * trades
             *
             * Max. 20 Trades mit ihren Details (s.Tabelle Trade-Details)
             */
				trades: showMyTradeDetails.Response.Trade_Details[];
				/**
             * page
             *
             * Informationen zu den möglichen Ergebnisseiten (s.Tabelle Page-Details)
             */
				page: Page_Details[];
			}

			/**
          * Page Details
          */
			export interface Page_Details {
				/**
             * current
             *
             * Aktuell zurückgelieferte Seite
             */
				current: integer;
				/**
             * last
             *
             * Letzte verfügbare Seite zu den Suchkriterien
             */
				last: integer;
			}
		}
	}

	/**
    * showMyTradeDetails
    */
	export namespace showMyTradeDetails {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * trade_id
          *
          * ID des abzufragendenden Trades
          */
			trade_id: string;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * trade
             *
             * Details zum Trade (s.Tabelle Trade-Details)
             */
				trade: Trade_Details[];
			}

			/**
          * Trade-Details
          */
			export interface Trade_Details {
				/**
             * trade_id
             *
             * ID des Trades
             */
				trade_id: string;
				/**
             * type
             *
             * Typ des Trades
             */
				type: "buy" | "sell";
				/**
             * amount
             *
             * Gekaufe/verkaufte BTC-Menge
             */
				amount: float;
				/**
             * price
             *
             * Preis pro BTC in Euro
             */
				price: float;
				/**
             * volume
             *
             * Euro-Volumen des Trades
             */
				volume: float;
				/**
             * fee_eur
             *
             * Gebühr in Euro
             */
				fee_eur: float;
				/**
             * fee_btc
             *
             * Gebühr in BTC
             */
				fee_btc: float;
				/**
             * new_order_id_for_remaining_amount
             *
             * ID des neuen Angebots, das automatisch für die Rest-BTC-Menge erstellt wurde.
             */
				new_order_id_for_remaining_amount?: string;
				/**
             * state
             *
             * Aktueller Status (s. Tabelle Possible Trade-State-Values)
             */
				state: -1 | 0 | 1;
				/**
             * my_rating_for_trading_partner
             *
             * Bewertung vom Handelspartner
             */
				my_rating_for_trading_partner: "pending" | "negative" | "neutral" | "positive";
				/**
             * trading_partner_information
             *
             * Details über den Handelspartner (s.Tabelle Trading Partner Information)
             */
				trading_partner_information: Trading_Partner_Information[];
				/**
             * created_at
             *
             * Erstellzeitpunkt des Trades. Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00)
             */
				created_at: string;
				/**
             * successfully_finished_at
             *
             * Nur beim State 1 (Successful).
             * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00)
             */
				successfully_finished_at?: string;
				/**
             * cancelled_at
             *
             * Nur beim State -1 (Cancelled).
             * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00)
             */
				cancelled_at?: string;
				/**
             * payment_method
             *
             * s. Tabelle Possible payment method values
             */
				payment_method: 1 | 2;
			}

			/**
          * Trading Partner Information
          */
			export interface Trading_Partner_Information {
				/**
             * username
             *
             * User-Name
             */
				username: string;
				/**
             * is_kyc_full
             *
             * Vollständig identifizierter User
             */
				is_kyc_full: boolean;
				/**
             * trust_level
             *
             * Trust-Level
             */
				trust_level: "bronze" | "silver" | "gold" | "platin";
				/**
             * bank_name
             *
             * Name der Bank
             */
				bank_name: string;
				/**
             * bic
             *
             * BIC der Bank
             */
				bic: string;
				/**
             * seat_of_bank
             *
             * Sitz der Bank als Ländercode in ISO 3166-2
             * 
             * value: Bankenländerliste
             */
				seat_of_bank: string;
				/**
             * amount_trades
             *
             * Anzahl bereits getätigten Trades
             */
				amount_trades: integer;
				/**
             * rating
             *
             * Prozentualer Anteil an positiven Bewertungen durch die Handelspartner
             */
				rating: integer;
			}
		}
	}

	/**
    * POST
    * 
    * 
    * 
    * Credits:	1
   
    * 
    * Kaufen/Verkaufen einer konkreten Order
    */
	export function executeTrade(api: Api, parameters: executeTrade.Parameter): Promise<{}> {
		return rawRequest(api, "POST", "trades/:order_id", parameters);
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Abrufen und Filtern meiner getätigten Trades
    */
	export function showMyTrades(
		api: Api,
		parameters: showMyTrades.Parameter,
	): Promise<showMyTrades.Response.Success_200> {
		return rawRequest(api, "GET", "trades", parameters);
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Details eines meiner Trades abrufen
    */
	export function showMyTradeDetails(
		api: Api,
		parameters: showMyTradeDetails.Parameter,
	): Promise<showMyTradeDetails.Response.Success_200> {
		return rawRequest(api, "GET", "trades/:trade_id", parameters);
	}
}

/**
 * Sonstiges
 */
export namespace Sonstiges {
	/**
    * showAccountInfo
    */
	export namespace showAccountInfo {
		/**
       * Parameter
       */
		export interface Parameter {}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * data
             *
             * Account-Infos (s.Tabelle Data)
             */
				data: Data[];
			}

			/**
          * Data
          */
			export interface Data {
				/**
             * btc_balance
             *
             * Infos zur BTC-Balance (s.Tabelle BTC-Balance)
             */
				btc_balance: BTC_Balance[];
				/**
             * fidor_reservation
             *
             * Infos zur ggfs. vorhandenen Fidor-Reservierung (s.Tabelle Fidor-Reservation)
             */
				fidor_reservation?: Fidor_Reservation[];
				/**
             * encrypted_information
             *
             * Verschlüsselte Infos (s.Tabelle Encrypted-Information¹)
             */
				encrypted_information: Encrypted_Information_[];
			}

			/**
          * BTC-Balance
          */
			export interface BTC_Balance {
				/**
             * total_amount
             *
             * Aktuelles BTC-Guthaben
             */
				total_amount: string;
				/**
             * available_amount
             *
             * Aktuell verfügbares BTC-Guthaben
             */
				available_amount: string;
				/**
             * reserved_amount
             *
             * Aktuell reserviertes BTC-Guthaben
             */
				reserved_amount: string;
			}

			/**
          * Fidor-Reservation
          */
			export interface Fidor_Reservation {
				/**
             * total_amount
             *
             * Gesambetrag der Reservierung
             */
				total_amount: float;
				/**
             * available_amount
             *
             * Aktuell verfügbarer Betrag der Reservierung
             */
				available_amount: float;
				/**
             * reserved_at
             *
             * Erstelldatum der Reservierung (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339
             */
				reserved_at: string;
				/**
             * valid_until
             *
             * Reservierung gültig bis (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339)
             */
				valid_until: string;
			}

			/**
          * Encrypted-Information¹
          */
			export interface Encrypted_Information_ {
				/**
             * bic_short
             *
             * Verschlüsselte Bankengruppe aus der BIC (ersten 4 Zeichen)
             */
				bic_short?: string;
				/**
             * bic_full
             *
             * Verschlüsselte komplette BIC
             */
				bic_full?: string;
				/**
             * uid
             *
             * Verschlüsselte eigene User-Id
             */
				uid: string;
			}
		}
	}

	/**
    * showOrderbookCompact
    */
	export namespace showOrderbookCompact {
		/**
       * Parameter
       */
		export interface Parameter {}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * orders
             *
             * Array mit Bids / Asks
             */
				orders: Orders;
			}

			/**
          * Orders
          */
			export interface Orders {
				/**
             * bids
             *
             * Auflistung der Bids
             */
				bids: Bids[];
				/**
             * asks
             *
             * Auflistung der Asks
             */
				asks: Asks[];
			}

			/**
          * Bids
          */
			export interface Bids {
				/**
             * price
             *
             * Preis pro Bitcoin (Euro)
             */
				price: float;
				/**
             * amount
             *
             * Anzahl BTC
             */
				amount: float;
			}

			/**
          * Asks
          */
			export interface Asks {
				/**
             * price
             *
             * Preis pro Bitcoin (Euro)
             */
				price: float;
				/**
             * amount
             *
             * Anzahl BTC
             */
				amount: float;
			}
		}
	}

	/**
    * showPublicTradeHistory
    */
	export namespace showPublicTradeHistory {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * since_tid
          *
          * inkrementelle Daten ab einer bestimmten TID anzeigen.
          */
			since_tid?: integer;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * trades
             *
             * Erfolgreich abgeschlossene Trades
             */
				trades: Trade_Informationen[];
			}

			/**
          * Trades
          */
			export interface Trades {
				/**
             * 0
             *
             * s. Tabelle Trade Informationen
             */
				0: Trade_Informationen[];
			}

			/**
          * Trade Informationen
          */
			export interface Trade_Informationen {
				/**
             * date
             *
             * Datum (Unixtimestamp)
             */
				date: integer;
				/**
             * price
             *
             * Preis pro Bitcoin (Euro)
             */
				price: float;
				/**
             * amount
             *
             * Anzahl BTC
             */
				amount: float;
				/**
             * tid
             *
             * Eindeutige ID
             */
				tid: integer;
			}
		}
	}

	/**
    * showRates
    */
	export namespace showRates {
		/**
       * Parameter
       */
		export interface Parameter {}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * rates
             *
             * Rate-Infos (s.Tabelle Rates)
             */
				rates: Rates[];
			}

			/**
          * Rates
          */
			export interface Rates {
				/**
             * rate_weighted
             *
             * gibt in der Regel den gewichtete Durchschnittskurs der letzten 3 Stunden an. Wird eine kritische Masse an Trades in den letzten 3 Stunden unterschritten, dann wird hier der 12 Stunden Durchschnitt zurückgegeben.
             */
				rate_weighted: string;
				/**
             * rate_weighted_3h
             *
             * Durchschnittskurs der letzten 3 Stunden
             */
				rate_weighted_3h: string;
				/**
             * rate_weighted_12h
             *
             * Durchschnittskurs der letzten 12 Stunden
             */
				rate_weighted_12h: string;
			}
		}
	}

	/**
    * showAccountLedger
    */
	export namespace showAccountLedger {
		/**
       * Parameter
       */
		export interface Parameter {
			/**
          * type
          *
          * Positions-Typ
          *
          * default: all
          */
			type?:
				| "all"
				| "buy"
				| "sell"
				| "inpayment"
				| "payout"
				| "affiliate"
				| "welcome_btc"
				| "buy_yubikey"
				| "buy_goldshop"
				| "buy_diamondshop"
				| "kickback"
				| "outgoing_fee_voluntary";
			/**
          * datetime_start
          *
          * Buchungsdatum, ab dem die Positionen aufgelistet werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          *
          * default: akt. Datum -10 Tage
          */
			datetime_start?: string;
			/**
          * datetime_end
          *
          * Buchungsdatum, bis zu dem die Positionen aufgelistet werden.
          * Format gemäß RFC 3339 (Bsp: 2015-01-20T15:00:00+02:00).
          *
          * default: akt. Datum 
      -1 Tag
          */
			datetime_end?: string;
			/**
          * page
          *
          * Seitenzahl zum Blättern innerhalb der Ergebnisseiten
          *
          * default: 1
          */
			page?: integer;
		}

		/**
       * Response
       */
		export namespace Response {
			/**
          * Success 200
          * 
          * 
          */
			export interface Success_200 {
				/**
             * account_ledger
             *
             * Details zur Position (s.Tabelle Details zur Position)
             */
				account_ledger: Details_zur_Position[];
				/**
             * page
             *
             * Informationen zu den möglichen Ergebnisseiten (s.Tabelle Page-Details)
             */
				page: Page_Details[];
			}

			/**
          * Details zur Position
          */
			export interface Details_zur_Position {
				/**
             * date
             *
             * Buchungsdatum (Format: 2015-04-07T12:23:04+02:00 gemäß RFC 3339)
             */
				date: string;
				/**
             * type
             *
             * Typ der Position
             */
				type: string;
				/**
             * reference
             *
             * Referenz zu der Position (trade_id bei buy/sell oder txid bei einer Einzahlung/Auszahlung)
             */
				reference: string;
				/**
             * trade
             *
             * Tradedetails (nur bei Typ sell/buy) (s.Tabelle Tradedetails)
             */
				trade?: Tradedetails[];
				/**
             * cashflow
             *
             * Zu- / Abgang
             */
				cashflow: string;
				/**
             * balance
             *
             * Kontostand
             */
				balance: string;
			}

			/**
          * Tradedetails
          */
			export interface Tradedetails {
				/**
             * trade_id
             *
             * ID des Trades
             */
				trade_id: string;
				/**
             * price
             *
             * Preis pro Bitcoin in Euro
             */
				price: string;
				/**
             * btc
             *
             * BTC-Summen (s.Tabelle BTC-Summen)
             */
				btc: BTC_Summen[];
				/**
             * euro
             *
             * Euro-Summen (s.Tabelle Euro-Summen)
             */
				euro: Euro_Summen[];
			}

			/**
          * BTC-Summen
          */
			export interface BTC_Summen {
				/**
             * before_fee
             *
             * Summe in BTC vor Gebühr
             */
				before_fee: string;
				/**
             * after_fee
             *
             * Summe in BTC nach Gebühr
             */
				after_fee: string;
			}

			/**
          * Euro-Summen
          */
			export interface Euro_Summen {
				/**
             * before_fee
             *
             * Summe in Euro vor Gebühr
             */
				before_fee: string;
				/**
             * after_fee
             *
             * Summe in Euro nach Gebühr
             */
				after_fee: string;
			}

			/**
          * Page Details
          */
			export interface Page_Details {
				/**
             * current
             *
             * Aktuell zurückgelieferte Seite
             */
				current: integer;
				/**
             * last
             *
             * Letzte verfügbare Seite zu den Suchkriterien
             */
				last: integer;
			}
		}
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	2
   
    * 
    * Abruf von Account Infos
    */
	export function showAccountInfo(api: Api): Promise<showAccountInfo.Response.Success_200> {
		return rawRequest(api, "GET", "account", {});
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Kauf- und Verkaufsangebote (bids und asks) in kompakter Form.
    */
	export function showOrderbookCompact(api: Api): Promise<showOrderbookCompact.Response.Success_200> {
		return rawRequest(api, "GET", "orders/compact", {});
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Erfolgreich abgeschlossene Trades. Wenn kein Parameter gesetzt wird, werden alle erfolgreich abgeschlossenen Trades der letzten 7 Tage zurückgeliefert. Die Liste ist absteigend nach Datum sortiert.
    */
	export function showPublicTradeHistory(
		api: Api,
		parameters: showPublicTradeHistory.Parameter,
	): Promise<showPublicTradeHistory.Response.Success_200> {
		return rawRequest(api, "GET", "trades/history", parameters);
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Abfrage des gewichteten Durchschnittskurses der letzten 3 Stunden und der letzten 12 Stunden.
    */
	export function showRates(api: Api): Promise<showRates.Response.Success_200> {
		return rawRequest(api, "GET", "rates", {});
	}

	/**
    * GET
    * 
    * 
    * 
    * Credits:	3
   
    * 
    * Abruf des Kontoauszuges
   Bitte beachten Sie, dass im Kontoauzug nur Transaktionen aufgelistet werden, die bis zum Vortag ausgeführt wurden. Transaktionen von heute sind also erst morgen im Kontoauszug aufgeführt.
    */
	export function showAccountLedger(
		api: Api,
		parameters: showAccountLedger.Parameter,
	): Promise<showAccountLedger.Response.Success_200> {
		return rawRequest(api, "GET", "account/ledger", parameters);
	}
}

/**
 * Websocket-API
 */
export namespace Websocket_API {
	/**
    * remove_order
    * 
    * Dieses Event wird ausgelöst, sobald ein Angebot nicht mehr auf dem Marktplatz verfügbar ist.
    */
	export interface remove_order {
		/**
       * order_id*
       *
       * Id des nicht mehr handelbaren Angebots
       */
		order_id: string;
		/**
       * order_type
       *
       * Angebots-Typ. “buy” entspricht einem Kaufangebot und “sell” einem Verkaufsangebot.
       */
		order_type: string;
		/**
       * amount**
       *
       * Menge der gehandelten BTC
       */
		amount?: float;
		/**
       * price**
       *
       * Preis pro BTC in Euro
       */
		price?: float;
		/**
       * trading_pair
       *
       * Handelspaar
       */
		trading_pair: string;
	}

	/**
    * add_order
    * 
    * Dieses Event wird ausgelöst, sobald ein Angebot auf dem Marktplatz hinzugefügt wurde.
    */
	export interface add_order {
		/**
       * order_id
       *
       * Id des nicht mehr handelbaren Angebots
       */
		order_id: string;
		/**
       * order_type
       *
       * Angebots-Typ. “buy” entspricht einem Kaufangebot und “sell” einem Verkaufsangebot.
       */
		order_type: string;
		/**
       * amount
       *
       * Menge der BTC
       */
		amount: float;
		/**
       * min_amount
       *
       * Mindestmenge an BTC
       */
		min_amount: float;
		/**
       * price
       *
       * Preis pro BTC in Euro
       */
		price: float;
		/**
       * min_trust_level
       *
       * Mindest-Trust-Levels zur Annahme des Angebots
       */
		min_trust_level: string;
		/**
       * only_kyc_full
       *
       * Handelspartner muss vollständig identifiziert sein
       */
		only_kyc_full: int;
		/**
       * is_kyc_full
       *
       * Angebotsersteller ist vollständig identifiziert
       */
		is_kyc_full: int;
		/**
       * seat_of_bank_of_creator
       *
       * Sitz der Bank des Angebotserstellers als Ländercode in ISO 3166-2
       */
		seat_of_bank_of_creator: string;
		/**
       * bic_short*
       *
       * BIC der Bankengruppe des Angebotsersteller.
       */
		bic_short: string;
		/**
       * bic_full*
       *
       * Vollständige BIC des Angebotserstellers
       */
		bic_full: string;
		/**
       * trade_to_sepa_country
       *
       * s. Tabelle Bankenländerliste
       */
		trade_to_sepa_country: any[];
		/**
       * payment_option
       *
       * 1 => Express-Only
       * 2 => SEPA-Only
       * 3 => Express & SEPA
       */
		payment_option: 1 | 2 | 3;
		/**
       * trading_pair
       *
       * Handelspaar
       */
		trading_pair: string;
	}
}
