var mode = "module"; // = "module"
// parser for https://www.bitcoin.de/de/api/tapi/v1/docu
// copy this into chrome console while that url is open. generated ts code will be copied to clipboard
var myMappings = {
	"Sonstiges.showOrderbookCompact.Response.Success_200.orders": "Sonstiges.showOrderbookCompact.Response.Orders",
	"Sonstiges.showOrderbookCompact.Response.Orders.bids": "Sonstiges.showOrderbookCompact.Response.Bids[]",
	"Sonstiges.showOrderbookCompact.Response.Orders.asks": "Sonstiges.showOrderbookCompact.Response.Asks[]",
	"Orders.showOrderbook.Response.Success_200.orders": "Orders.showOrderbook.Response.Orders[]",
	"Sonstiges.showPublicTradeHistory.Response.Success_200.trades":
		"Sonstiges.showPublicTradeHistory.Response.Trade_Informationen[]",
	"Sonstiges.showAccountInfo.Response.Success_200.data": "Sonstiges.showAccountInfo.Response.Data",
	"Sonstiges.showAccountInfo.Response.Data.btc_balance": "Sonstiges.showAccountInfo.Response.BTC_Balance",
	"Sonstiges.showAccountInfo.Response.Data.fidor_reservation": "Sonstiges.showAccountInfo.Response.Fidor_Reservation",
	"Sonstiges.showAccountInfo.Response.Data.encrypted_information":
		"Sonstiges.showAccountInfo.Response.Encrypted_Information_",
};
var myRefs = {
	// "bankenländer": ,
	table_showAccount_fidor_reservation: "#table_showAccountInfo_fidor_reservation",
	table_showAccountStatement_account_ledger: "#table_showAccountLedger_account_ledger",
	table_showAccountStatement_page: "#table_showAccountLedger_page",
	table_showAccountStatement_trade: "#table_showAccountLedger_trade",
	table_showAccountStatement_btc: "#table_showAccountLedger_btc",
	table_showAccountStatement_euro: "#table_showAccountLedger_euro",
	table_showMyOrders_order: "#table_showMyOrderDetails_order",
};
function getValue(x) {
	if ($$("code", x).length > 1) {
		return { type: "enum", values: $$("code", x).map(v => v.textContent) };
	}
	const obj = {};
	if ($$("a", x).length > 0) {
		obj.hrefs = $$("a", x).map(a => ({ href: a.href, text: a.innerText }));
	}
	let value = x.innerText.trim();
	if (value === "--") value = "";
	return { ...obj, value };
}
function checkOptional(x) {
	if ($$(".optional_div", x).length > 0) {
		const c = x.cloneNode(true);
		const o = $$(".optional_div", c)[0];
		o.parentNode.removeChild(o);
		return { ...getValue(c), optional: true };
	}
	return getValue(x);
}

function parseHeader(ele) {
	const txt = ele.textContent.trim();
	let name;
	if (ele.previousSibling && ele.previousSibling.tagName === "A" && ele.previousSibling.name) {
		const x = new String(txt);
		x.name = ele.previousSibling.name;
		return x;
	}
	return txt;
}
function getMeta(tbl) {
	let ele = tbl;
	let description = [];
	let header = [];
	let addingDescription = true;
	while (true) {
		ele = ele.previousSibling || ele.parentNode;
		if (addingDescription && ele.tagName === "H3") {
			header.unshift(parseHeader(ele));
			addingDescription = false;
			/*return {
            header: ele.textContent,
            description
         };*/
		} else if (ele.tagName === "H2") {
			addingDescription = false;
			const txt = ele.textContent.trim();
			header.unshift(...txt.split(" - "));
			if (txt === "Error" || txt === "Response") {
			} else {
				break;
			}
		}
		if (addingDescription) description.push(ele.textContent);
	}
	return { header, description, $type: "interface" };
}

function makeIdentifier(x) {
	if (x.includes("(")) x = x.replace(/ ?\(.*$/, "");
	return x.replace(/[^a-z0-9ßüöä]/gi, "_");
}

function simplifyPath(x, y) {
	x = x.slice();
	y = y.slice();
	while (x[0] && y[0] && x[0].toString() === y[0].toString()) {
		x.shift();
		y.shift();
	}
	return y;
}
function tsPath(relativeTo, absolutePath) {
	if (mode === "interface") {
		return "Root" + absolutePath.map(x => `["${x}"]`).join("");
	} else return simplifyPath(relativeTo, absolutePath).join(".");
}
function makeType(x, { header, path }) {
	const v = x.Values || x.Value;
	const a = x.Type.value.toLowerCase();
	if (v) {
		if (v.type === "enum") return v.values.map(x => (a === "string" ? `"${x}"` : x)).join(" | ");
	}
	if (a === "array") {
		const k = [...path, header, x.Name.value].map(makeIdentifier).join(".");
		if (myMappings[k]) {
			const p = myMappings[k];
			if (p.endsWith("[]")) return tsPath(path, p.substring(0, p.length - 2).split(".")) + "[]";
			return tsPath(path, p.split("."));
		}

		if (x.Notes.hrefs) {
			const [{ text, href }, ...others] = x.Notes.hrefs;
			if (others.length > 0) console.warn("multiple hrefs?", x);
			let ref = decodeURIComponent(href.split("#")[1]);
			if (myRefs[ref]) ref = myRefs[ref].substr(1);
			const refTarget = allInterfaces.find(ele => ele.header.name === ref);
			if (refTarget) {
				const relpath = [...refTarget.path, refTarget.header];
				return tsPath(path, relpath.map(makeIdentifier)) + "[]";
			} else {
				console.warn("undefined ref", ref, x);
			}
		} else {
			console.warn("no ref", k);
		}
		return "any[]";
	}
	return a;
}
function makeField(x, iface) {
	if (!x.Name.value) return null;
	let str = [
		`/**
    * ${x.Name.value}`,
	];
	if (x.Notes)
		str.push(`
    *
    * ${x.Notes.value.split("\n").join("\n    * ")}`);
	if (x.Default && x.Default.value)
		str.push(`
    *
    * default: ${x.Default.value}`);
	if (x.Value && x.Value.value)
		str.push(`
    * 
    * value: ${x.Value.value}`);
	str.push(`
    */`);
	str.push(`
    ${x.Name.value.replace(/\*/g, "")}${(x.Required && x.Required.value && x.Required.value === "false") ||
	x.Name.optional
		? "?"
		: ""}: ${makeType(x, iface)}`);
	return str.join("");
}

function formatInterface(iface) {
	const { header, description, vals } = iface;
	const fields = vals.map(v => makeField(v, iface)).filter(x => x);
	const id = makeIdentifier(header);
	var str = `
/**
 * ${header}`;
	if (description && description.length > 0)
		str += `
 * 
 * ${description.join("\n * \n * ")}`;
	str += `
 */
${mode === "module" ? `export interface ${id}` : `${id}:`} {
    ${fields.join("\n    ")}
}
    `;
	return str;
}

function indentLine(str) {
	return line => str + line;
}
function indent(indent) {
	return str => str.split("\n").map(indentLine(indent)).join("\n");
}
function format(ele) {
	if (ele.$type === "module") return formatModule(ele);
	else if (ele.$type === "interface") return formatInterface(ele);
	else if (ele.$type === "method") return formatMethod(ele);
	else console.error("what is", ele);
}
function formatMethod({ kind, httppath, header, description, path }) {
	const path2 = [...path, header].join(".");
	const relevant = allInterfaces.filter(i => i.path.join(".").startsWith(path2));
	const resp = relevant.find(i => i.header.startsWith("Success"));
	const param = relevant.find(i => i.header.toString() === "Parameter");
	const needsParam = param && param.vals.some(p => p.Name && p.Name.value);
	console.log(path2, needsParam);
	const respName = resp ? tsPath(path.map(makeIdentifier), [...resp.path, resp.header].map(makeIdentifier)) : "{}";
	return `
/**
 * ${description.join("\n * \n * ")}
 */
export function ${header}(api: Api${needsParam
		? `, parameters: ${header}.Parameter`
		: ""}): CheckedPromise<${respName}> {
  return rawRequest<${respName}>(api, '${kind}', '${httppath}', ${needsParam ? `parameters` : "{}"});
}
  `;
}
function formatModule(mod) {
	const id = makeIdentifier(mod.header);
	return `
/**
 * ${mod.header}
 */
${mode === "module" ? `export namespace ${id}` : `${id}:`} {
   ${mod.children.map(format).map(indent("   ")).join("\n")}
}
    `;
}

function categorize(eles) {
	const tree = {
		$type: "module",
		header: "Root",
		children: [],
	};
	const allInterfaces = [];
	for (const ele of eles) {
		let target = tree;
		const path = ele.header.slice();
		const iface = path.pop();
		for (const part of path) {
			let p = target.children.find(e => e.header === part && e.$type === "module");
			if (!p) {
				p = { $type: "module", header: part, children: [] };
				target.children.push(p);
			}
			target = p;
		}
		const i = {
			...ele,
			header: iface,
			path,
		};
		allInterfaces.push(i);
		target.children.push(i);
	}
	return { tree, allInterfaces };
}
var docs = $$("table")
	.slice(11)
	.map(tbl => {
		var [header, ...lines] = $$("tr", tbl);
		var hm = $$("th", header).map(x => x.textContent);
		return {
			...getMeta(tbl),
			vals: lines
				.map(line =>
					Object.assign(
						{},
						...$$("td", line).map((x, i) => ({
							[hm[i]]: checkOptional(x),
						})),
					),
				)
				.filter(x => x.Name),
		};
	})
	.filter(x => x.vals.length > 0);
var apiLoc = "https://api.bitcoin.de/v1/";
var methods = $$("[class^='method_']").map(method => {
	const kind = method.textContent;
	let httppath = method.nextSibling.textContent;
	httppath = httppath.replace(/^https:\/\/api.bitcoin.de\/v1\//, "");
	let e = method;
	const description = [];
	while (e && e.tagName !== "H2") {
		description.push(e.innerText);
		e = e.previousSibling;
	}
	const name = e.textContent.split(" - ");
	return { $type: "method", header: name, kind, httppath, description };
});
var { tree, allInterfaces } = categorize([...docs, ...methods]);
res = `
import { rawRequest, BitcoindeClient as Api } from "./bitcoin-de";

type integer = number;
type int = integer;
type float = number;

${mode === "interface" ? "export default interface Root {" : ""}
${tree.children.map(format).join("\n\n")}
${mode === "interface" ? "}" : ""}
`;

copy(res);
