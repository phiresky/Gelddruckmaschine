(function() {
	var aa = '" style="background-image:url(',
		ba = "-disabled",
		ca = "-document.getElementById('",
		da = "/translate_a/t",
		ea = "/translate_suggestion?client=",
		fa = '</button></div></div></td></tr><tr id="',
		ha =
			'</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
		ia =
			'<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
		ja = "Component already rendered",
		f = "DIV",
		ka = "Edge",
		la = "Google Website Translator",
		na = "IFRAME",
		oa = "INPUT",
		pa = "OPTION",
		qa = "Opera",
		ra = "POST",
		sa = "SCRIPT",
		ta = "SPAN",
		ua = "TEXTAREA",
		va = "TITLE",
		wa = "Unable to set parent component",
		xa = "[goog.net.IframeIo] Unable to send, already active.",
		ya = "about:blank",
		za = "absolute",
		Aa = "action",
		Ba = "activedescendant",
		Ca = "activity-form-container",
		Da = "alt-edited",
		Ea = "array",
		Fa = "auto",
		Ga = "backgroundImage",
		Ha = "backgroundPosition",
		Ia = "blur",
		Ja = "border-box",
		Ka = "button",
		La = "cancelled",
		Ma = "change",
		Na = "character",
		Oa = "checked",
		Pa = "chg_tgt_lang",
		Qa = "click",
		Ra = "clk_no_ap_site",
		Sa = "complete",
		Ta = "container",
		Ua = "contextmenu",
		Va = "dblclick",
		Wa = "direction",
		Xa = "finish",
		Ya = "finishSourceLang",
		Za = "finishTargetLang",
		$a = "focus",
		ab = "focusin",
		bb = "focusout",
		n = "function",
		cb = "goog-float-bottom",
		db = "goog-float-top",
		eb = "goog-inline-block ",
		fb = "goog-menuheader",
		gb = "goog-menuseparator",
		hb = "goog-option",
		ib = "goog-option-selected",
		jb = "goog-te-menu-value",
		kb = "goog-te-menu2-item-selected",
		lb = "goog-te-spinner-animation-show",
		mb = "goog-te-spinner-pos-show",
		nb = "hidden",
		ob = "hide",
		pb = "horizontal",
		qb = "https://translate.google.com",
		rb = "https://www.google.com/images/cleardot.gif",
		sb = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
		tb = "javascript:void(0)",
		ub = "keydown",
		vb = "keypress",
		wb = "load",
		xb = "mousedown",
		yb = "mousemove",
		zb = "mouseout",
		Ab = "mouseover",
		Bb = "mouseup",
		Cb = "move_offscreen",
		Db = "none",
		Eb = "number",
		Fb = "object",
		Gb = "opacity 1s linear",
		Hb = "paddingLeft",
		Ib = "paddingRight",
		Jb = "position",
		Kb = "progressSection",
		Lb = "promptSourceLang",
		Mb = "promptTargetLang",
		Nb = "ready",
		Ob = "readystatechange",
		Pb = "rtl",
		Qb = "selected",
		Rb = "skiptranslate",
		Sb = "status-message",
		Tb = "string",
		Ub = "submitted",
		Vb = "targetLanguage",
		Wb = "textarea-placeholder-input",
		Xb = "toggle_display",
		Yb = "trans-target-empty",
		Zb = "trans-target-highlight",
		$b = "transition",
		ac = "translate",
		bc = "vertical",
		cc = "visible",
		dc = "withCredentials";
	function ec() {
		return function() {};
	}
	function fc(a) {
		return function(b) {
			this[a] = b;
		};
	}
	function p(a) {
		return function() {
			return this[a];
		};
	}
	function r(a) {
		return function() {
			return a;
		};
	}
	var u,
		gc = gc || {},
		v = this;
	function x(a) {
		return void 0 !== a;
	}
	function y(a) {
		return typeof a == Tb;
	}
	function hc(a) {
		return typeof a == Eb;
	}
	function z() {}
	function ic(a) {
		a.Qe = void 0;
		a.$ = function() {
			return a.Qe ? a.Qe : (a.Qe = new a());
		};
	}
	function A(a) {
		var b = typeof a;
		if (b == Fb)
			if (a) {
				if (a instanceof Array) return Ea;
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return Fb;
				if (
					"[object Array]" == c ||
					(typeof a.length == Eb &&
						"undefined" != typeof a.splice &&
						"undefined" != typeof a.propertyIsEnumerable &&
						!a.propertyIsEnumerable("splice"))
				)
					return Ea;
				if (
					"[object Function]" == c ||
					("undefined" != typeof a.call &&
						"undefined" != typeof a.propertyIsEnumerable &&
						!a.propertyIsEnumerable("call"))
				)
					return n;
			} else return "null";
		else if (b == n && "undefined" == typeof a.call) return Fb;
		return b;
	}
	function B(a) {
		return A(a) == Ea;
	}
	function jc(a) {
		var b = A(a);
		return b == Ea || (b == Fb && typeof a.length == Eb);
	}
	function kc(a) {
		return A(a) == n;
	}
	function lc(a) {
		var b = typeof a;
		return (b == Fb && null != a) || b == n;
	}
	function mc(a) {
		return a[nc] || (a[nc] = ++oc);
	}
	var nc = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		oc = 0;
	function pc(a, b, c) {
		return a.call.apply(a.bind, arguments);
	}
	function qc(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c);
			};
		}
		return function() {
			return a.apply(b, arguments);
		};
	}
	function C(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code")
			? (C = pc)
			: (C = qc);
		return C.apply(null, arguments);
	}
	function rc(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this, b);
		};
	}
	var sc =
		Date.now ||
		function() {
			return +new Date();
		};
	function tc(a, b) {
		a = a.split(".");
		var c = v;
		a[0] in c || !c.execScript || c.execScript("var " + a[0]);
		for (var d; a.length && (d = a.shift()); )
			!a.length && x(b) ? (c[d] = b) : c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {});
	}
	function D(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.m = b.prototype;
		a.prototype = new c();
		a.prototype.constructor = a;
		a.Ak = function(a, c, g) {
			for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
			return b.prototype[c].apply(a, d);
		};
	}
	function uc(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, uc);
		else {
			var b = Error().stack;
			b && (this.stack = b);
		}
		a && (this.message = String(a));
	}
	D(uc, Error);
	uc.prototype.name = "CustomError";
	var vc,
		wc = { $j: 1, Pj: 2, qk: 3, Sj: 4, bk: 5, ak: 6, hk: 7, Uj: 8, Vj: 9, Xj: 10, Wj: 11, ek: 12 };
	function xc(a) {
		return a.replace(/\xa0|[ \t]+/g, " ");
	}
	function yc(a) {
		return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
	}
	var zc = String.prototype.trim
		? function(a) {
				return a.trim();
			}
		: function(a) {
				return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
			};
	function Ac(a) {
		return a.replace(/^[\s\xa0]+/, "");
	}
	function Bc(a) {
		return a.replace(/[\s\xa0]+$/, "");
	}
	function Cc(a) {
		return encodeURIComponent(String(a));
	}
	function Dc(a) {
		return decodeURIComponent(a.replace(/\+/g, " "));
	}
	function Ec(a) {
		if (!Fc.test(a)) return a;
		-1 != a.indexOf("&") && (a = a.replace(Gc, "&amp;"));
		-1 != a.indexOf("<") && (a = a.replace(Hc, "&lt;"));
		-1 != a.indexOf(">") && (a = a.replace(Ic, "&gt;"));
		-1 != a.indexOf('"') && (a = a.replace(Jc, "&quot;"));
		-1 != a.indexOf("'") && (a = a.replace(Kc, "&#39;"));
		-1 != a.indexOf("\x00") && (a = a.replace(Lc, "&#0;"));
		return a;
	}
	var Gc = /&/g,
		Hc = /</g,
		Ic = />/g,
		Jc = /"/g,
		Kc = /'/g,
		Lc = /\x00/g,
		Fc = /[\x00&<>"']/;
	function Mc(a) {
		return -1 != a.indexOf("&") ? ("document" in v ? Nc(a) : Oc(a)) : a;
	}
	function Nc(a) {
		var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
		var c = v.document.createElement("div");
		return a.replace(Pc, function(a, e) {
			var d = b[a];
			if (d) return d;
			"#" == e.charAt(0) && ((e = Number("0" + e.substr(1))), isNaN(e) || (d = String.fromCharCode(e)));
			d || ((c.innerHTML = a + " "), (d = c.firstChild.nodeValue.slice(0, -1)));
			return (b[a] = d);
		});
	}
	function Oc(a) {
		return a.replace(/&([^;]+);/g, function(a, c) {
			switch (c) {
				case "amp":
					return "&";
				case "lt":
					return "<";
				case "gt":
					return ">";
				case "quot":
					return '"';
				default:
					return "#" != c.charAt(0) || ((c = Number("0" + c.substr(1))), isNaN(c))
						? a
						: String.fromCharCode(c);
			}
		});
	}
	var Pc = /&([^;\s<&]+);?/g;
	function Qc(a, b) {
		var c = 0;
		a = zc(String(a)).split(".");
		b = zc(String(b)).split(".");
		for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
			var g = a[e] || "",
				h = b[e] || "";
			do {
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
				h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
				if (0 == g[0].length && 0 == h[0].length) break;
				c =
					Rc(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) ||
					Rc(0 == g[2].length, 0 == h[2].length) ||
					Rc(g[2], h[2]);
				g = g[3];
				h = h[3];
			} while (0 == c);
		}
		return c;
	}
	function Rc(a, b) {
		return a < b ? -1 : a > b ? 1 : 0;
	}
	function Sc(a) {
		return String(a).replace(/\-([a-z])/g, function(a, c) {
			return c.toUpperCase();
		});
	}
	function Tc(a) {
		var b = y(void 0)
			? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			: "\\s";
		return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
			return b + e.toUpperCase();
		});
	}
	function Uc(a) {
		return a[a.length - 1];
	}
	var Vc = Array.prototype.indexOf
			? function(a, b, c) {
					return Array.prototype.indexOf.call(a, b, c);
				}
			: function(a, b, c) {
					c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
					if (y(a)) return y(b) && 1 == b.length ? a.indexOf(b, c) : -1;
					for (; c < a.length; c++) if (c in a && a[c] === b) return c;
					return -1;
				},
		Wc = Array.prototype.forEach
			? function(a, b, c) {
					Array.prototype.forEach.call(a, b, c);
				}
			: function(a, b, c) {
					for (var d = a.length, e = y(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a);
				},
		Xc = Array.prototype.filter
			? function(a, b, c) {
					return Array.prototype.filter.call(a, b, c);
				}
			: function(a, b, c) {
					for (var d = a.length, e = [], g = 0, h = y(a) ? a.split("") : a, k = 0; k < d; k++)
						if (k in h) {
							var l = h[k];
							b.call(c, l, k, a) && (e[g++] = l);
						}
					return e;
				},
		Yc = Array.prototype.map
			? function(a, b, c) {
					return Array.prototype.map.call(a, b, c);
				}
			: function(a, b, c) {
					for (var d = a.length, e = Array(d), g = y(a) ? a.split("") : a, h = 0; h < d; h++)
						h in g && (e[h] = b.call(c, g[h], h, a));
					return e;
				},
		Zc = Array.prototype.some
			? function(a, b, c) {
					return Array.prototype.some.call(a, b, c);
				}
			: function(a, b, c) {
					for (var d = a.length, e = y(a) ? a.split("") : a, g = 0; g < d; g++)
						if (g in e && b.call(c, e[g], g, a)) return !0;
					return !1;
				},
		$c = Array.prototype.every
			? function(a, b, c) {
					return Array.prototype.every.call(a, b, c);
				}
			: function(a, b, c) {
					for (var d = a.length, e = y(a) ? a.split("") : a, g = 0; g < d; g++)
						if (g in e && !b.call(c, e[g], g, a)) return !1;
					return !0;
				};
	function ad(a, b) {
		a: {
			for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
				if (e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a;
				}
			b = -1;
		}
		return 0 > b ? null : y(a) ? a.charAt(b) : a[b];
	}
	function bd(a, b) {
		return 0 <= Vc(a, b);
	}
	function cd(a, b) {
		b = Vc(a, b);
		var c;
		(c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
		return c;
	}
	function dd(a) {
		return Array.prototype.concat.apply([], arguments);
	}
	function ed(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c;
		}
		return [];
	}
	function fd(a, b, c, d) {
		Array.prototype.splice.apply(a, gd(arguments, 1));
	}
	function gd(a, b, c) {
		return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
	}
	var hd;
	a: {
		var id = v.navigator;
		if (id) {
			var jd = id.userAgent;
			if (jd) {
				hd = jd;
				break a;
			}
		}
		hd = "";
	}
	function E(a) {
		return -1 != hd.indexOf(a);
	}
	function kd(a) {
		for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; (d = b.exec(a)); )
			c.push([d[1], d[2], d[3] || void 0]);
		return c;
	}
	function ld(a, b, c) {
		for (var d in a) b.call(c, a[d], d, a);
	}
	function md(a, b) {
		for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
		return !1;
	}
	function nd(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b;
	}
	function od(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b;
	}
	function pd(a, b) {
		return null !== a && b in a;
	}
	function qd() {
		var a = rd,
			b;
		for (b in a) return !1;
		return !0;
	}
	function sd(a, b, c) {
		if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
		a[b] = c;
	}
	function td(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	}
	var ud = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function vd(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var g = 0; g < ud.length; g++)
				(c = ud[g]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
		}
	}
	function wd(a) {
		var b = arguments.length;
		if (1 == b && B(arguments[0])) return wd.apply(null, arguments[0]);
		for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
		return c;
	}
	function xd() {
		return E("Trident") || E("MSIE");
	}
	function yd() {
		return (E("Chrome") || E("CriOS")) && !E(ka);
	}
	function zd() {
		function a(a) {
			a = ad(a, d);
			return c[a] || "";
		}
		var b = hd;
		if (xd()) return Ad(b);
		b = kd(b);
		var c = {};
		Wc(b, function(a) {
			c[a[0]] = a[1];
		});
		var d = rc(pd, c);
		return E(qa)
			? a(["Version", qa])
			: E(ka) ? a([ka]) : yd() ? a(["Chrome", "CriOS"]) : ((b = b[2]) && b[1]) || "";
	}
	function Ad(a) {
		var b = /rv: *([\d\.]*)/.exec(a);
		if (b && b[1]) return b[1];
		b = "";
		var c = /MSIE +([\d\.]+)/.exec(a);
		if (c && c[1])
			if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
				if (a && a[1])
					switch (a[1]) {
						case "4.0":
							b = "8.0";
							break;
						case "5.0":
							b = "9.0";
							break;
						case "6.0":
							b = "10.0";
							break;
						case "7.0":
							b = "11.0";
					}
				else b = "7.0";
			else b = c[1];
		return b;
	}
	function Bd() {
		return E("iPhone") && !E("iPod") && !E("iPad");
	}
	function Cd() {
		return Bd() || E("iPad") || E("iPod");
	}
	function Dd(a) {
		Dd[" "](a);
		return a;
	}
	Dd[" "] = z;
	function Ed(a, b) {
		try {
			return Dd(a[b]), !0;
		} catch (c) {}
		return !1;
	}
	function Fd(a, b) {
		var c = Gd;
		return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
	}
	var F = E(qa),
		G = xd(),
		Hd = E(ka),
		Id = Hd || G,
		H =
			E("Gecko") &&
			!(-1 != hd.toLowerCase().indexOf("webkit") && !E(ka)) &&
			!(E("Trident") || E("MSIE")) &&
			!E(ka),
		J = -1 != hd.toLowerCase().indexOf("webkit") && !E(ka),
		Jd = J && E("Mobile"),
		Kd = E("Macintosh"),
		Ld = E("Windows"),
		Md = E("Android"),
		Nd = Bd(),
		Od = E("iPad"),
		Pd = E("iPod"),
		Qd = Cd();
	function Rd() {
		var a = v.document;
		return a ? a.documentMode : void 0;
	}
	var Sd;
	a: {
		var Td = "",
			Ud = (function() {
				var a = hd;
				if (H) return /rv\:([^\);]+)(\)|;)/.exec(a);
				if (Hd) return /Edge\/([\d\.]+)/.exec(a);
				if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (J) return /WebKit\/(\S+)/.exec(a);
				if (F) return /(?:Version)[ \/]?(\S+)/.exec(a);
			})();
		Ud && (Td = Ud ? Ud[1] : "");
		if (G) {
			var Vd = Rd();
			if (null != Vd && Vd > parseFloat(Td)) {
				Sd = String(Vd);
				break a;
			}
		}
		Sd = Td;
	}
	var Wd = Sd,
		Gd = {};
	function K(a) {
		return Fd(a, function() {
			return 0 <= Qc(Wd, a);
		});
	}
	function Xd(a) {
		return Number(Yd) >= a;
	}
	var Zd;
	var $d = v.document;
	Zd = $d && G ? Rd() || ("CSS1Compat" == $d.compatMode ? parseInt(Wd, 10) : 5) : void 0;
	var Yd = Zd;
	var ae = E("Firefox"),
		be = Bd() || E("iPod"),
		ce = E("iPad"),
		de = E("Android") && !(yd() || E("Firefox") || E(qa) || E("Silk")),
		ee = yd(),
		fe = E("Safari") && !(yd() || E("Coast") || E(qa) || E(ka) || E("Silk") || E("Android")) && !Cd();
	function ge() {}
	var he = typeof Uint8Array == n,
		ie = [];
	function je(a) {
		var b = a.c + a.f;
		a.a[b] || (a.b = a.a[b] = {});
	}
	function ke(a, b) {
		if (b < a.c) {
			b += a.f;
			var c = a.a[b];
			return c === ie ? (a.a[b] = []) : c;
		}
		if (a.b) return (c = a.b[b]), c === ie ? (a.b[b] = []) : c;
	}
	function le(a, b, c) {
		b < a.c ? (a.a[b + a.f] = c) : (je(a), (a.b[b] = c));
	}
	function me(a) {
		if (a.g)
			for (var b in a.g) {
				var c = a.g[b];
				if (B(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].qc();
				else c && c.qc();
			}
	}
	ge.prototype.qc = function() {
		me(this);
		return this.a;
	};
	ge.prototype.toString = function() {
		me(this);
		return this.a.toString();
	};
	function ne(a) {
		if (a.classList) return a.classList;
		a = a.className;
		return (y(a) && a.match(/\S+/g)) || [];
	}
	function oe(a, b) {
		return a.classList ? a.classList.contains(b) : bd(ne(a), b);
	}
	function L(a, b) {
		a.classList ? a.classList.add(b) : oe(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
	}
	function pe(a, b) {
		if (a.classList)
			Wc(b, function(b) {
				L(a, b);
			});
		else {
			var c = {};
			Wc(ne(a), function(a) {
				c[a] = !0;
			});
			Wc(b, function(a) {
				c[a] = !0;
			});
			a.className = "";
			for (var d in c) a.className += 0 < a.className.length ? " " + d : d;
		}
	}
	function qe(a, b) {
		a.classList
			? a.classList.remove(b)
			: oe(a, b) &&
				(a.className = Xc(ne(a), function(a) {
					return a != b;
				}).join(" "));
	}
	function re(a, b) {
		a.classList
			? Wc(b, function(b) {
					qe(a, b);
				})
			: (a.className = Xc(ne(a), function(a) {
					return !bd(b, a);
				}).join(" "));
	}
	var se = !G || Xd(9),
		te = (!H && !G) || (G && Xd(9)) || (H && K("1.9.1")),
		ue = G && !K("9"),
		ve = G || F || J,
		we = G && !Xd(9);
	var xe = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	};
	function ye() {
		this.a = ze;
	}
	ye.prototype.qb = !0;
	ye.prototype.Ta = r("");
	ye.prototype.toString = r("Const{}");
	function Ae(a) {
		return a instanceof ye && a.constructor === ye && a.a === ze ? "" : "type_error:Const";
	}
	var ze = {};
	var Be = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
	function Ce() {
		this.a = "";
		this.b = De;
	}
	Ce.prototype.qb = !0;
	Ce.prototype.Ta = p("a");
	Ce.prototype.Ne = !0;
	Ce.prototype.Vb = r(1);
	function Ee(a) {
		if (a instanceof Ce && a.constructor === Ce && a.b === De) return a.a;
		A(a);
		return "type_error:TrustedResourceUrl";
	}
	var De = {};
	function Fe() {
		this.a = "";
		this.b = Ge;
	}
	Fe.prototype.qb = !0;
	Fe.prototype.Ta = p("a");
	Fe.prototype.Ne = !0;
	Fe.prototype.Vb = r(1);
	function He(a) {
		if (a instanceof Fe && a.constructor === Fe && a.b === Ge) return a.a;
		A(a);
		return "type_error:SafeUrl";
	}
	var Ie = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	function Je(a) {
		if (a instanceof Fe) return a;
		a = a.qb ? a.Ta() : String(a);
		Ie.test(a) || (a = "about:invalid#zClosurez");
		return Ke(a);
	}
	var Ge = {};
	function Ke(a) {
		var b = new Fe();
		b.a = a;
		return b;
	}
	Ke(ya);
	function Le() {
		this.a = "";
		this.b = Me;
	}
	Le.prototype.qb = !0;
	var Me = {};
	Le.prototype.Ta = p("a");
	function Ne(a) {
		if (a instanceof Le && a.constructor === Le && a.b === Me) return a.a;
		A(a);
		return "type_error:SafeStyle";
	}
	function Oe(a) {
		var b = new Le();
		b.a = a;
		return b;
	}
	var Pe = Oe("");
	function Qe(a) {
		if (a instanceof Fe) a = 'url("' + He(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
		else if (a instanceof ye) a = Ae(a);
		else {
			a = String(a);
			var b = a.replace(Re, "$1").replace(Se, "url");
			if ((b = Te.test(b))) {
				for (var c = (b = !0), d = 0; d < a.length; d++) {
					var e = a.charAt(d);
					"'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
				}
				b = b && c;
			}
			a = b ? Ue(a) : "zClosurez";
		}
		return a;
	}
	var Te = /^[-,."'%_!# a-zA-Z0-9]+$/,
		Se = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		Re = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
	function Ue(a) {
		return a.replace(Se, function(a, c, d, e) {
			var b = "";
			d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
				b = c;
				return d;
			});
			a = Je(d).Ta();
			return c + b + a + b + e;
		});
	}
	function Ve() {
		this.a = "";
		this.b = We;
	}
	Ve.prototype.qb = !0;
	var We = {};
	Ve.prototype.Ta = p("a");
	function Xe(a) {
		if (a instanceof Ve && a.constructor === Ve && a.b === We) return a.a;
		A(a);
		return "type_error:SafeStyleSheet";
	}
	function Ye(a) {
		var b = new Ve();
		b.a = a;
		return b;
	}
	Ye("");
	function Ze() {
		this.a = "";
		this.c = $e;
		this.b = null;
	}
	Ze.prototype.Ne = !0;
	Ze.prototype.Vb = p("b");
	Ze.prototype.qb = !0;
	Ze.prototype.Ta = p("a");
	function af(a) {
		if (a instanceof Ze && a.constructor === Ze && a.c === $e) return a.a;
		A(a);
		return "type_error:SafeHtml";
	}
	var bf = /^[a-zA-Z0-9-]+$/,
		cf = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
		df = {
			APPLET: !0,
			BASE: !0,
			EMBED: !0,
			IFRAME: !0,
			LINK: !0,
			MATH: !0,
			META: !0,
			OBJECT: !0,
			SCRIPT: !0,
			STYLE: !0,
			SVG: !0,
			TEMPLATE: !0,
		};
	function ef(a, b) {
		var c = String(a);
		if (!bf.test(c)) throw Error("Invalid tag name <" + c + ">.");
		if (c.toUpperCase() in df) throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
		a = String(a);
		c = null;
		var d = "<" + a,
			e = "";
		if (b)
			for (q in b) {
				if (!bf.test(q)) throw Error('Invalid attribute name "' + q + '".');
				var g = b[q];
				if (null != g) {
					var h = a;
					var k = q;
					var l = g;
					if (l instanceof ye) l = Ae(l);
					else if ("style" == k.toLowerCase()) {
						g = void 0;
						h = l;
						if (!lc(h))
							throw Error(
								'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
									typeof h +
									" given: " +
									h,
							);
						if (!(h instanceof Le)) {
							l = "";
							for (g in h) {
								if (!/^[-_a-zA-Z0-9]+$/.test(g))
									throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
								var m = h[g];
								null != m && ((m = B(m) ? Yc(m, Qe).join(" ") : Qe(m)), (l += g + ":" + m + ";"));
							}
							h = l ? Oe(l) : Pe;
						}
						l = Ne(h);
					} else {
						if (/^on/i.test(k))
							throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
						if (k.toLowerCase() in cf)
							if (l instanceof Ce) l = Ee(l);
							else if (l instanceof Fe) l = He(l);
							else if (y(l)) l = Je(l).Ta();
							else
								throw Error(
									'Attribute "' +
										k +
										'" on tag "' +
										h +
										'" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
										l +
										'" given.',
								);
					}
					l.qb && (l = l.Ta());
					k = k + '="' + Ec(String(l)) + '"';
					e += " " + k;
				}
			}
		var q = d + e;
		d = void 0;
		null != d ? B(d) || (d = [d]) : (d = []);
		!0 === xe[a.toLowerCase()] ? (q += ">") : ((c = ff(d)), (q += ">" + af(c) + "</" + a + ">"), (c = c.Vb()));
		(b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? (c = 0) : (c = null));
		return gf(q, c);
	}
	function ff(a) {
		function b(a) {
			if (B(a)) Wc(a, b);
			else {
				if (a instanceof Ze) var e = a;
				else (e = null), a.Ne && (e = a.Vb()), (a = Ec(a.qb ? a.Ta() : String(a))), (e = gf(a, e));
				d += af(e);
				e = e.Vb();
				0 == c ? (c = e) : 0 != e && c != e && (c = null);
			}
		}
		var c = 0,
			d = "";
		Wc(arguments, b);
		return gf(d, c);
	}
	var $e = {};
	function gf(a, b) {
		var c = new Ze();
		c.a = a;
		c.b = b;
		return c;
	}
	gf("<!DOCTYPE html>", 0);
	gf("", 0);
	var hf = gf("<br>", 0);
	function M(a, b) {
		this.x = x(a) ? a : 0;
		this.y = x(b) ? b : 0;
	}
	function jf(a) {
		return new M(a.x, a.y);
	}
	function kf(a, b) {
		return new M(a.x - b.x, a.y - b.y);
	}
	M.prototype.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	};
	M.prototype.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};
	M.prototype.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	};
	M.prototype.translate = function(a, b) {
		a instanceof M ? ((this.x += a.x), (this.y += a.y)) : ((this.x += Number(a)), hc(b) && (this.y += b));
		return this;
	};
	function lf(a, b) {
		this.width = a;
		this.height = b;
	}
	lf.prototype.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	lf.prototype.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	lf.prototype.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	function mf(a) {
		return a ? new nf(N(a)) : vc || (vc = new nf());
	}
	function of(a, b) {
		return y(b) ? a.getElementById(b) : b;
	}
	function pf(a, b) {
		return (b || document).getElementsByTagName(String(a));
	}
	function qf() {
		var a = document;
		return a.querySelectorAll && a.querySelector
			? a.querySelectorAll(".alt-edited")
			: rf(document, "*", Da, void 0);
	}
	function sf(a, b) {
		var c = b || document;
		if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
		else {
			c = document;
			var d = b || c;
			a =
				d.querySelectorAll && d.querySelector && a
					? d.querySelector("" + (a ? "." + a : ""))
					: rf(c, "*", a, b)[0] || null;
		}
		return a || null;
	}
	function rf(a, b, c, d) {
		a = d || a;
		var e = b && "*" != b ? String(b).toUpperCase() : "";
		if (a.querySelectorAll && a.querySelector && (e || c)) return a.querySelectorAll(e + (c ? "." + c : ""));
		if (c && a.getElementsByClassName) {
			d = a.getElementsByClassName(c);
			if (e) {
				a = {};
				for (var g = (b = 0), h; (h = d[g]); g++) e == h.nodeName && (a[b++] = h);
				a.length = b;
				return a;
			}
			return d;
		}
		d = a.getElementsByTagName(e || "*");
		if (c) {
			a = {};
			for (g = b = 0; (h = d[g]); g++)
				(e = h.className), typeof e.split == n && bd(e.split(/\s+/), c) && (a[b++] = h);
			a.length = b;
			return a;
		}
		return d;
	}
	function tf(a, b) {
		ld(b, function(b, d) {
			b && b.qb && (b = b.Ta());
			"style" == d
				? (a.style.cssText = b)
				: "class" == d
					? (a.className = b)
					: "for" == d
						? (a.htmlFor = b)
						: uf.hasOwnProperty(d)
							? a.setAttribute(uf[d], b)
							: 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
								? a.setAttribute(d, b)
								: (a[d] = b);
		});
	}
	var uf = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		nonce: "nonce",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width",
	};
	function vf(a) {
		a = a.document;
		a = wf(a) ? a.documentElement : a.body;
		return new lf(a.clientWidth, a.clientHeight);
	}
	function xf(a) {
		var b = yf(a);
		a = a.parentWindow || a.defaultView;
		return G && K("10") && a.pageYOffset != b.scrollTop
			? new M(b.scrollLeft, b.scrollTop)
			: new M(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
	}
	function yf(a) {
		return a.scrollingElement ? a.scrollingElement : !J && wf(a) ? a.documentElement : a.body || a.documentElement;
	}
	function zf(a) {
		return a ? a.parentWindow || a.defaultView : window;
	}
	function Af(a, b, c) {
		return Bf(document, arguments);
	}
	function Bf(a, b) {
		var c = String(b[0]),
			d = b[1];
		if (!se && d && (d.name || d.type)) {
			c = ["<", c];
			d.name && c.push(' name="', Ec(d.name), '"');
			if (d.type) {
				c.push(' type="', Ec(d.type), '"');
				var e = {};
				vd(e, d);
				delete e.type;
				d = e;
			}
			c.push(">");
			c = c.join("");
		}
		c = a.createElement(c);
		d && (y(d) ? (c.className = d) : B(d) ? (c.className = d.join(" ")) : tf(c, d));
		2 < b.length && Cf(a, c, b, 2);
		return c;
	}
	function Cf(a, b, c, d) {
		function e(c) {
			c && b.appendChild(y(c) ? a.createTextNode(c) : c);
		}
		for (; d < c.length; d++) {
			var g = c[d];
			!jc(g) || (lc(g) && 0 < g.nodeType) ? e(g) : Wc(Df(g) ? ed(g) : g, e);
		}
	}
	function Ef() {
		var a = ef("WBR"),
			b = document,
			c = b.createElement(f);
		G ? ((a = ff(hf, a)), (c.innerHTML = af(a)), c.removeChild(c.firstChild)) : (c.innerHTML = af(a));
		if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
		else {
			for (b = b.createDocumentFragment(); c.firstChild; ) b.appendChild(c.firstChild);
			c = b;
		}
		return c;
	}
	function wf(a) {
		return "CSS1Compat" == a.compatMode;
	}
	function Ff(a) {
		if (1 != a.nodeType) return !1;
		switch (a.tagName) {
			case "APPLET":
			case "AREA":
			case "BASE":
			case "BR":
			case "COL":
			case "COMMAND":
			case "EMBED":
			case "FRAME":
			case "HR":
			case "IMG":
			case oa:
			case na:
			case "ISINDEX":
			case "KEYGEN":
			case "LINK":
			case "NOFRAMES":
			case "NOSCRIPT":
			case "META":
			case "OBJECT":
			case "PARAM":
			case sa:
			case "SOURCE":
			case "STYLE":
			case "TRACK":
			case "WBR":
				return !1;
		}
		return !0;
	}
	function Gf(a, b) {
		Cf(N(a), a, arguments, 1);
	}
	function Hf(a) {
		for (var b; (b = a.firstChild); ) a.removeChild(b);
	}
	function If(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b);
	}
	function Jf(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
	}
	function Kf(a) {
		a && a.parentNode && a.parentNode.removeChild(a);
	}
	function Lf(a) {
		return te && void 0 != a.children
			? a.children
			: Xc(a.childNodes, function(a) {
					return 1 == a.nodeType;
				});
	}
	function Mf(a) {
		return x(a.firstElementChild) ? a.firstElementChild : Nf(a.firstChild, !0);
	}
	function Nf(a, b) {
		for (; a && 1 != a.nodeType; ) a = b ? a.nextSibling : a.previousSibling;
		return a;
	}
	function Of(a) {
		return lc(a) && 1 == a.nodeType;
	}
	function Pf(a, b) {
		if (!a || !b) return !1;
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
		for (; b && a != b; ) b = b.parentNode;
		return b == a;
	}
	function Qf(a, b) {
		if (a == b) return 0;
		if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
		if (G && !Xd(9)) {
			if (9 == a.nodeType) return -1;
			if (9 == b.nodeType) return 1;
		}
		if ("sourceIndex" in a || (a.parentNode && "sourceIndex" in a.parentNode)) {
			var c = 1 == a.nodeType,
				d = 1 == b.nodeType;
			if (c && d) return a.sourceIndex - b.sourceIndex;
			var e = a.parentNode,
				g = b.parentNode;
			return e == g
				? Rf(a, b)
				: !c && Pf(e, b)
					? -1 * Sf(a, b)
					: !d && Pf(g, a)
						? Sf(b, a)
						: (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex);
		}
		d = N(a);
		c = d.createRange();
		c.selectNode(a);
		c.collapse(!0);
		a = d.createRange();
		a.selectNode(b);
		a.collapse(!0);
		return c.compareBoundaryPoints(v.Range.START_TO_END, a);
	}
	function Sf(a, b) {
		var c = a.parentNode;
		if (c == b) return -1;
		for (; b.parentNode != c; ) b = b.parentNode;
		return Rf(b, a);
	}
	function Rf(a, b) {
		for (; (b = b.previousSibling); ) if (b == a) return -1;
		return 1;
	}
	function Tf(a) {
		var b,
			c = arguments.length;
		if (!c) return null;
		if (1 == c) return arguments[0];
		var d = [],
			e = Infinity;
		for (b = 0; b < c; b++) {
			for (var g = [], h = arguments[b]; h; ) g.unshift(h), (h = h.parentNode);
			d.push(g);
			e = Math.min(e, g.length);
		}
		g = null;
		for (b = 0; b < e; b++) {
			h = d[0][b];
			for (var k = 1; k < c; k++) if (h != d[k][b]) return g;
			g = h;
		}
		return g;
	}
	function N(a) {
		return 9 == a.nodeType ? a : a.ownerDocument || a.document;
	}
	function Uf(a) {
		return a.contentDocument || a.contentWindow.document;
	}
	function Vf(a) {
		try {
			return a.contentWindow || (a.contentDocument ? zf(a.contentDocument) : null);
		} catch (b) {}
		return null;
	}
	function Wf(a, b) {
		if ("textContent" in a) a.textContent = b;
		else if (3 == a.nodeType) a.data = String(b);
		else if (a.firstChild && 3 == a.firstChild.nodeType) {
			for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
			a.firstChild.data = String(b);
		} else Hf(a), a.appendChild(N(a).createTextNode(String(b)));
	}
	var Xf = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
		Yf = { IMG: " ", BR: "\n" };
	function Zf(a) {
		if (G && !K("9")) {
			var b = a.getAttributeNode("tabindex");
			b = null != b && b.specified;
		} else b = a.hasAttribute("tabindex");
		b && ((a = a.tabIndex), (b = hc(a) && 0 <= a && 32768 > a));
		return b;
	}
	function $f(a, b) {
		b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
	}
	function ag(a) {
		if (ue && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
		else {
			var b = [];
			bg(a, b, !0);
			a = b.join("");
		}
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		ue || (a = a.replace(/ +/g, " "));
		" " != a && (a = a.replace(/^\s*/, ""));
		return a;
	}
	function cg(a) {
		var b = [];
		bg(a, b, !1);
		return b.join("");
	}
	function bg(a, b, c) {
		if (!(a.nodeName in Xf))
			if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if (a.nodeName in Yf) b.push(Yf[a.nodeName]);
			else for (a = a.firstChild; a; ) bg(a, b, c), (a = a.nextSibling);
	}
	function Df(a) {
		if (a && typeof a.length == Eb) {
			if (lc(a)) return typeof a.item == n || typeof a.item == Tb;
			if (kc(a)) return typeof a.item == n;
		}
		return !1;
	}
	function nf(a) {
		this.a = a || v.document || document;
	}
	u = nf.prototype;
	u.j = function(a) {
		return of(this.a, a);
	};
	u.D = function(a, b, c) {
		return Bf(this.a, arguments);
	};
	function dg(a, b) {
		return a.a.createElement(String(b));
	}
	function eg(a) {
		a = a.a;
		return a.parentWindow || a.defaultView;
	}
	u.appendChild = function(a, b) {
		a.appendChild(b);
	};
	u.Qc = Hf;
	u.Wh = Lf;
	u.Xf = Mf;
	u.contains = Pf;
	u.hb = Wf;
	u.$f = ag;
	function fg(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d;
	}
	u = fg.prototype;
	u.contains = function(a) {
		return this && a
			? a instanceof fg
				? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
				: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
			: !1;
	};
	u.ceil = function() {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this;
	};
	u.floor = function() {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this;
	};
	u.round = function() {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this;
	};
	u.translate = function(a, b) {
		a instanceof M
			? ((this.left += a.x), (this.right += a.x), (this.top += a.y), (this.bottom += a.y))
			: ((this.left += a), (this.right += a), hc(b) && ((this.top += b), (this.bottom += b)));
		return this;
	};
	function gg(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d;
	}
	u = gg.prototype;
	u.contains = function(a) {
		return a instanceof M
			? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
			: this.left <= a.left &&
				this.left + this.width >= a.left + a.width &&
				this.top <= a.top &&
				this.top + this.height >= a.top + a.height;
	};
	u.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	u.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	u.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	u.translate = function(a, b) {
		a instanceof M ? ((this.left += a.x), (this.top += a.y)) : ((this.left += a), hc(b) && (this.top += b));
		return this;
	};
	function O(a, b, c) {
		if (y(b)) (b = hg(a, b)) && (a.style[b] = c);
		else
			for (var d in b) {
				c = a;
				var e = b[d],
					g = hg(c, d);
				g && (c.style[g] = e);
			}
	}
	var ig = {};
	function hg(a, b) {
		var c = ig[b];
		if (!c) {
			var d = Sc(b);
			c = d;
			void 0 === a.style[d] &&
				(
					(d = (J ? "Webkit" : H ? "Moz" : G ? "ms" : F ? "O" : null) + Tc(d)),
					void 0 !== a.style[d] && (c = d)
				);
			ig[b] = c;
		}
		return c;
	}
	function jg(a, b) {
		var c = N(a);
		return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
			? a[b] || a.getPropertyValue(b) || ""
			: "";
	}
	function kg(a, b) {
		return jg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
	}
	function lg(a, b, c) {
		if (b instanceof M) {
			var d = b.x;
			b = b.y;
		} else (d = b), (b = c);
		a.style.left = mg(d);
		a.style.top = mg(b);
	}
	function ng(a) {
		a = a ? N(a) : document;
		return !G || Xd(9) || wf(mf(a).a) ? a.documentElement : a.body;
	}
	function og(a) {
		try {
			var b = a.getBoundingClientRect();
		} catch (c) {
			return { left: 0, top: 0, right: 0, bottom: 0 };
		}
		G &&
			a.ownerDocument.body &&
			(
				(a = a.ownerDocument),
				(b.left -= a.documentElement.clientLeft + a.body.clientLeft),
				(b.top -= a.documentElement.clientTop + a.body.clientTop)
			);
		return b;
	}
	function pg(a) {
		if (G && !Xd(8)) return a.offsetParent;
		var b = N(a),
			c = kg(a, Jb),
			d = "fixed" == c || c == za;
		for (a = a.parentNode; a && a != b; a = a.parentNode)
			if (
				(
					11 == a.nodeType && a.host && (a = a.host),
					(c = kg(a, Jb)),
					(d = d && "static" == c && a != b.documentElement && a != b.body),
					!d &&
						(a.scrollWidth > a.clientWidth ||
							a.scrollHeight > a.clientHeight ||
							"fixed" == c ||
							c == za ||
							"relative" == c)
				)
			)
				return a;
		return null;
	}
	function qg(a) {
		for (
			var b = new fg(0, Infinity, Infinity, 0), c = mf(a), d = c.a.body, e = c.a.documentElement, g = yf(c.a);
			(a = pg(a));

		)
			if (
				!((G && 0 == a.clientWidth) || (J && 0 == a.clientHeight && a == d)) &&
				a != d &&
				a != e &&
				kg(a, "overflow") != cc
			) {
				var h = rg(a),
					k = new M(a.clientLeft, a.clientTop);
				h.x += k.x;
				h.y += k.y;
				b.top = Math.max(b.top, h.y);
				b.right = Math.min(b.right, h.x + a.clientWidth);
				b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
				b.left = Math.max(b.left, h.x);
			}
		d = g.scrollLeft;
		g = g.scrollTop;
		b.left = Math.max(b.left, d);
		b.top = Math.max(b.top, g);
		c = vf(eg(c) || window);
		b.right = Math.min(b.right, d + c.width);
		b.bottom = Math.min(b.bottom, g + c.height);
		return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
	}
	function rg(a) {
		var b = N(a),
			c = new M(0, 0),
			d = ng(b);
		if (a == d) return c;
		a = og(a);
		b = xf(mf(b).a);
		c.x = a.left + b.x;
		c.y = a.top + b.y;
		return c;
	}
	function sg(a, b) {
		var c = new M(0, 0),
			d = zf(N(a));
		if (!Ed(d, "parent")) return c;
		do {
			if (d == b) var e = rg(a);
			else (e = og(a)), (e = new M(e.left, e.top));
			c.x += e.x;
			c.y += e.y;
		} while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
		return c;
	}
	function mg(a) {
		typeof a == Eb && (a += "px");
		return a;
	}
	function tg(a) {
		var b = ug;
		if (kg(a, "display") != Db) return b(a);
		var c = a.style,
			d = c.display,
			e = c.visibility,
			g = c.position;
		c.visibility = nb;
		c.position = za;
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = g;
		c.visibility = e;
		return a;
	}
	function ug(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight,
			d = J && !b && !c;
		return (x(b) && !d) || !a.getBoundingClientRect
			? new lf(b, c)
			: ((a = og(a)), new lf(a.right - a.left, a.bottom - a.top));
	}
	function P(a, b) {
		a.style.display = b ? "" : Db;
	}
	function vg(a, b) {
		b = mf(b);
		var c = b.a;
		if (G && c.createStyleSheet) {
			var d = c.createStyleSheet();
			wg(d, a);
		} else
			(c = rf(b.a, "HEAD", void 0, void 0)[0]), c ||
				(
					(d = rf(b.a, "BODY", void 0, void 0)[0]),
					(c = b.D("HEAD")),
					d.parentNode.insertBefore(c, d)
				), (d = b.D("STYLE")), wg(d, a), b.appendChild(c, d);
	}
	function wg(a, b) {
		b = Xe(b);
		G && x(a.cssText) ? (a.cssText = b) : (a.innerHTML = b);
	}
	function xg(a) {
		return Pb == kg(a, Wa);
	}
	var yg = H ? "MozUserSelect" : J || Hd ? "WebkitUserSelect" : null;
	function zg(a, b, c) {
		c = c ? null : a.getElementsByTagName("*");
		if (yg) {
			if (((b = b ? Db : ""), a.style && (a.style[yg] = b), c)) {
				a = 0;
				for (var d; (d = c[a]); a++) d.style && (d.style[yg] = b);
			}
		} else if (G || F)
			if (((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
				for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
	}
	function Ag(a) {
		return new lf(a.offsetWidth, a.offsetHeight);
	}
	function Bg(a, b) {
		var c = wf(mf(N(a)).a);
		if (!G || K("10") || (c && K("8"))) Cg(a, b, "content-box");
		else {
			var d = a.style;
			c
				? ((d.pixelWidth = b.width), (d.pixelHeight = b.height))
				: (
						(c = Dg(a)),
						(a = Eg(a)),
						(d.pixelWidth = b.width + a.left + c.left + c.right + a.right),
						(d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
					);
		}
	}
	function Cg(a, b, c) {
		a = a.style;
		H ? (a.MozBoxSizing = c) : J ? (a.WebkitBoxSizing = c) : (a.boxSizing = c);
		a.width = Math.max(b.width, 0) + "px";
		a.height = Math.max(b.height, 0) + "px";
	}
	function Fg(a, b, c, d) {
		if (/^\d+px?$/.test(b)) return parseInt(b, 10);
		var e = a.style[c],
			g = a.runtimeStyle[c];
		a.runtimeStyle[c] = a.currentStyle[c];
		a.style[c] = b;
		b = a.style[d];
		a.style[c] = e;
		a.runtimeStyle[c] = g;
		return +b;
	}
	function Gg(a, b) {
		return (b = a.currentStyle ? a.currentStyle[b] : null) ? Fg(a, b, "left", "pixelLeft") : 0;
	}
	function Dg(a) {
		if (G) {
			var b = Gg(a, Hb);
			var c = Gg(a, Ib);
			var d = Gg(a, "paddingTop");
			a = Gg(a, "paddingBottom");
			return new fg(d, c, a, b);
		}
		b = jg(a, Hb);
		c = jg(a, Ib);
		d = jg(a, "paddingTop");
		a = jg(a, "paddingBottom");
		return new fg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
	}
	var Hg = { thin: 2, medium: 4, thick: 6 };
	function Ig(a, b) {
		if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == Db) return 0;
		b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
		return b in Hg ? Hg[b] : Fg(a, b, "left", "pixelLeft");
	}
	function Eg(a) {
		if (G && !Xd(9)) {
			var b = Ig(a, "borderLeft");
			var c = Ig(a, "borderRight");
			var d = Ig(a, "borderTop");
			a = Ig(a, "borderBottom");
			return new fg(d, c, a, b);
		}
		b = jg(a, "borderLeftWidth");
		c = jg(a, "borderRightWidth");
		d = jg(a, "borderTopWidth");
		a = jg(a, "borderBottomWidth");
		return new fg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
	}
	var Jg;
	wd([
		"A",
		"AREA",
		"BUTTON",
		"HEAD",
		oa,
		"LINK",
		"MENU",
		"META",
		"OPTGROUP",
		pa,
		"PROGRESS",
		"STYLE",
		"SELECT",
		"SOURCE",
		ua,
		va,
		"TRACK",
	]);
	function Kg(a, b) {
		b ? a.setAttribute("role", b) : a.removeAttribute("role");
	}
	function Lg(a, b, c) {
		B(c) && (c = c.join(" "));
		var d = "aria-" + b;
		"" === c || void 0 == c
			? (
					Jg ||
						(Jg = {
							atomic: !1,
							autocomplete: Db,
							dropeffect: Db,
							haspopup: !1,
							live: "off",
							multiline: !1,
							multiselectable: !1,
							orientation: bc,
							readonly: !1,
							relevant: "additions text",
							required: !1,
							sort: Db,
							busy: !1,
							disabled: !1,
							hidden: !1,
							invalid: "false",
						}),
					(c = Jg),
					b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)
				)
			: a.setAttribute(d, c);
	}
	function R() {
		this.ub = this.ub;
		this.ua = this.ua;
	}
	R.prototype.ub = !1;
	R.prototype.M = function() {
		this.ub || ((this.ub = !0), this.F());
	};
	function Mg(a, b) {
		a.ub ? (x(void 0) ? b.call(void 0) : b()) : (a.ua || (a.ua = []), a.ua.push(x(void 0) ? C(b, void 0) : b));
	}
	R.prototype.F = function() {
		if (this.ua) for (; this.ua.length; ) this.ua.shift()();
	};
	function Ng(a) {
		a && typeof a.M == n && a.M();
	}
	var Og = !G || Xd(9),
		Pg = !G || Xd(9),
		Qg = G && !K("9");
	!J || K("528");
	(H && K("1.9b")) || (G && K("8")) || (F && K("9.5")) || (J && K("528"));
	(H && !K("8")) || (G && K("9"));
	var Rg = (function() {
		if (!v.addEventListener || !Object.defineProperty) return !1;
		var a = !1,
			b = Object.defineProperty({}, "passive", {
				get: function() {
					a = !0;
				},
			});
		v.addEventListener("test", z, b);
		v.removeEventListener("test", z, b);
		return a;
	})();
	function Sg(a, b) {
		this.type = a;
		this.currentTarget = this.target = b;
		this.c = !1;
		this.Qg = !0;
	}
	Sg.prototype.stopPropagation = function() {
		this.c = !0;
	};
	Sg.prototype.b = function() {
		this.Qg = !1;
	};
	function Tg(a, b) {
		Sg.call(this, a ? a.type : "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.key = "";
		this.keyCode = 0;
		this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.a = null;
		if (a) {
			var c = (this.type = a.type),
				d = a.changedTouches ? a.changedTouches[0] : null;
			this.target = a.target || a.srcElement;
			this.currentTarget = b;
			(b = a.relatedTarget)
				? H && (Ed(b, "nodeName") || (b = null))
				: c == Ab ? (b = a.fromElement) : c == zb && (b = a.toElement);
			this.relatedTarget = b;
			null === d
				? (
						(this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
						(this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
						(this.screenX = a.screenX || 0),
						(this.screenY = a.screenY || 0)
					)
				: (
						(this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
						(this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
						(this.screenX = d.screenX || 0),
						(this.screenY = d.screenY || 0)
					);
			this.button = a.button;
			this.keyCode = a.keyCode || 0;
			this.key = a.key || "";
			this.ctrlKey = a.ctrlKey;
			this.altKey = a.altKey;
			this.shiftKey = a.shiftKey;
			this.metaKey = a.metaKey;
			this.f = Kd ? a.metaKey : a.ctrlKey;
			this.a = a;
			a.defaultPrevented && this.b();
		}
	}
	D(Tg, Sg);
	var Ug = [1, 4, 2];
	function Vg(a) {
		return Og ? 0 == a.a.button : a.type == Qa ? !0 : !!(a.a.button & Ug[0]);
	}
	Tg.prototype.stopPropagation = function() {
		Tg.m.stopPropagation.call(this);
		this.a.stopPropagation ? this.a.stopPropagation() : (this.a.cancelBubble = !0);
	};
	Tg.prototype.b = function() {
		Tg.m.b.call(this);
		var a = this.a;
		if (a.preventDefault) a.preventDefault();
		else if (((a.returnValue = !1), Qg))
			try {
				if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
			} catch (b) {}
	};
	var Wg = "closure_listenable_" + ((1e6 * Math.random()) | 0);
	function Xg(a) {
		return !(!a || !a[Wg]);
	}
	var Yg = 0;
	function Zg(a, b, c, d, e) {
		this.listener = a;
		this.a = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.Gd = e;
		this.key = ++Yg;
		this.oc = this.dd = !1;
	}
	function $g(a) {
		a.oc = !0;
		a.listener = null;
		a.a = null;
		a.src = null;
		a.Gd = null;
	}
	function ah(a) {
		this.src = a;
		this.a = {};
		this.b = 0;
	}
	ah.prototype.add = function(a, b, c, d, e) {
		var g = a.toString();
		a = this.a[g];
		a || ((a = this.a[g] = []), this.b++);
		var h = bh(a, b, d, e);
		-1 < h ? ((b = a[h]), c || (b.dd = !1)) : ((b = new Zg(b, this.src, g, !!d, e)), (b.dd = c), a.push(b));
		return b;
	};
	ah.prototype.remove = function(a, b, c, d) {
		a = a.toString();
		if (!(a in this.a)) return !1;
		var e = this.a[a];
		b = bh(e, b, c, d);
		return -1 < b
			? ($g(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0)
			: !1;
	};
	function ch(a, b) {
		var c = b.type;
		if (!(c in a.a)) return !1;
		var d = cd(a.a[c], b);
		d && ($g(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
		return d;
	}
	function dh(a, b) {
		b = b && b.toString();
		var c = 0,
			d;
		for (d in a.a)
			if (!b || d == b) {
				for (var e = a.a[d], g = 0; g < e.length; g++) ++c, $g(e[g]);
				delete a.a[d];
				a.b--;
			}
		return c;
	}
	ah.prototype.Ec = function(a, b, c, d) {
		a = this.a[a.toString()];
		var e = -1;
		a && (e = bh(a, b, c, d));
		return -1 < e ? a[e] : null;
	};
	ah.prototype.hasListener = function(a, b) {
		var c = x(a),
			d = c ? a.toString() : "",
			e = x(b);
		return md(this.a, function(a) {
			for (var g = 0; g < a.length; ++g) if (!((c && a[g].type != d) || (e && a[g].capture != b))) return !0;
			return !1;
		});
	};
	function bh(a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var g = a[e];
			if (!g.oc && g.listener == b && g.capture == !!c && g.Gd == d) return e;
		}
		return -1;
	}
	var eh = "closure_lm_" + ((1e6 * Math.random()) | 0),
		fh = {},
		gh = 0;
	function S(a, b, c, d, e) {
		if (d && d.once) return hh(a, b, c, d, e);
		if (B(b)) {
			for (var g = 0; g < b.length; g++) S(a, b[g], c, d, e);
			return null;
		}
		c = ih(c);
		return Xg(a) ? a.w(b, c, lc(d) ? !!d.capture : !!d, e) : jh(a, b, c, !1, d, e);
	}
	function jh(a, b, c, d, e, g) {
		if (!b) throw Error("Invalid event type");
		var h = lc(e) ? !!e.capture : !!e,
			k = kh(a);
		k || (a[eh] = k = new ah(a));
		c = k.add(b, c, d, h, g);
		if (c.a) return c;
		d = lh();
		c.a = d;
		d.src = a;
		d.listener = c;
		if (a.addEventListener) Rg || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
		else if (a.attachEvent) a.attachEvent(mh(b.toString()), d);
		else throw Error("addEventListener and attachEvent are unavailable.");
		gh++;
		return c;
	}
	function lh() {
		var a = nh,
			b = Pg
				? function(c) {
						return a.call(b.src, b.listener, c);
					}
				: function(c) {
						c = a.call(b.src, b.listener, c);
						if (!c) return c;
					};
		return b;
	}
	function hh(a, b, c, d, e) {
		if (B(b)) {
			for (var g = 0; g < b.length; g++) hh(a, b[g], c, d, e);
			return null;
		}
		c = ih(c);
		return Xg(a) ? a.Ab(b, c, lc(d) ? !!d.capture : !!d, e) : jh(a, b, c, !0, d, e);
	}
	function oh(a, b, c, d, e) {
		if (B(b)) for (var g = 0; g < b.length; g++) oh(a, b[g], c, d, e);
		else
			(d = lc(d) ? !!d.capture : !!d), (c = ih(c)), Xg(a)
				? a.ca(b, c, d, e)
				: a && (a = kh(a)) && (b = a.Ec(b, c, d, e)) && ph(b);
	}
	function ph(a) {
		if (hc(a) || !a || a.oc) return !1;
		var b = a.src;
		if (Xg(b)) return ch(b.Na, a);
		var c = a.type,
			d = a.a;
		b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(mh(c), d);
		gh--;
		(c = kh(b)) ? (ch(c, a), 0 == c.b && ((c.src = null), (b[eh] = null))) : $g(a);
		return !0;
	}
	function qh(a, b) {
		if (!a) return 0;
		if (Xg(a)) return a.Na ? dh(a.Na, b) : 0;
		a = kh(a);
		if (!a) return 0;
		var c = 0;
		b = b && b.toString();
		for (var d in a.a) if (!b || d == b) for (var e = a.a[d].concat(), g = 0; g < e.length; ++g) ph(e[g]) && ++c;
		return c;
	}
	function mh(a) {
		return a in fh ? fh[a] : (fh[a] = "on" + a);
	}
	function rh(a, b, c, d) {
		var e = !0;
		if ((a = kh(a)))
			if ((b = a.a[b.toString()]))
				for (b = b.concat(), a = 0; a < b.length; a++) {
					var g = b[a];
					g && g.capture == c && !g.oc && ((g = sh(g, d)), (e = e && !1 !== g));
				}
		return e;
	}
	function sh(a, b) {
		var c = a.listener,
			d = a.Gd || a.src;
		a.dd && ph(a);
		return c.call(d, b);
	}
	function nh(a, b) {
		if (a.oc) return !0;
		if (!Pg) {
			if (!b)
				a: {
					b = ["window", "event"];
					for (var c = v, d; (d = b.shift()); )
						if (null != c[d]) c = c[d];
						else {
							b = null;
							break a;
						}
					b = c;
				}
			d = b;
			b = new Tg(d, this);
			c = !0;
			if (!(0 > d.keyCode || void 0 != d.returnValue)) {
				a: {
					var e = !1;
					if (0 == d.keyCode)
						try {
							d.keyCode = -1;
							break a;
						} catch (h) {
							e = !0;
						}
					if (e || void 0 == d.returnValue) d.returnValue = !0;
				}
				d = [];
				for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
				e = a.type;
				for (var g = d.length - 1; !b.c && 0 <= g; g--)
					(b.currentTarget = d[g]), (a = rh(d[g], e, !0, b)), (c = c && a);
				for (g = 0; !b.c && g < d.length; g++) (b.currentTarget = d[g]), (a = rh(d[g], e, !1, b)), (c = c && a);
			}
			return c;
		}
		return sh(a, new Tg(b, this));
	}
	function kh(a) {
		a = a[eh];
		return a instanceof ah ? a : null;
	}
	var th = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
	function ih(a) {
		if (kc(a)) return a;
		a[th] ||
			(a[th] = function(b) {
				return a.handleEvent(b);
			});
		return a[th];
	}
	function uh(a) {
		R.call(this);
		this.b = a;
		this.a = {};
	}
	D(uh, R);
	var vh = [];
	u = uh.prototype;
	u.w = function(a, b, c, d) {
		return wh(this, a, b, c, d);
	};
	function xh(a, b, c, d) {
		wh(a, b, Qa, c, !1, d);
	}
	function wh(a, b, c, d, e, g) {
		B(c) || (c && (vh[0] = c.toString()), (c = vh));
		for (var h = 0; h < c.length; h++) {
			var k = S(b, c[h], d || a.handleEvent, e || !1, g || a.b || a);
			if (!k) break;
			a.a[k.key] = k;
		}
		return a;
	}
	u.Ab = function(a, b, c, d) {
		return yh(this, a, b, c, d);
	};
	function yh(a, b, c, d, e, g) {
		if (B(c)) for (var h = 0; h < c.length; h++) yh(a, b, c[h], d, e, g);
		else {
			b = hh(b, c, d || a.handleEvent, e, g || a.b || a);
			if (!b) return a;
			a.a[b.key] = b;
		}
		return a;
	}
	u.ca = function(a, b, c, d, e) {
		if (B(b)) for (var g = 0; g < b.length; g++) this.ca(a, b[g], c, d, e);
		else
			(c = c || this.handleEvent), (d = lc(d) ? !!d.capture : !!d), (e = e || this.b || this), (c = ih(
				c,
			)), (d = !!d), (b = Xg(a) ? a.Ec(b, c, d, e) : a ? ((a = kh(a)) ? a.Ec(b, c, d, e) : null) : null), b &&
				(ph(b), delete this.a[b.key]);
		return this;
	};
	function zh(a) {
		ld(
			a.a,
			function(a, c) {
				this.a.hasOwnProperty(c) && ph(a);
			},
			a,
		);
		a.a = {};
	}
	u.F = function() {
		uh.m.F.call(this);
		zh(this);
	};
	u.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};
	function Ah() {
		R.call(this);
		this.Na = new ah(this);
		this.Bh = this;
		this.gf = null;
	}
	D(Ah, R);
	Ah.prototype[Wg] = !0;
	u = Ah.prototype;
	u.md = p("gf");
	u.qf = fc("gf");
	u.addEventListener = function(a, b, c, d) {
		S(this, a, b, c, d);
	};
	u.removeEventListener = function(a, b, c, d) {
		oh(this, a, b, c, d);
	};
	u.dispatchEvent = function(a) {
		var b = this.md();
		if (b) {
			var c = [];
			for (var d = 1; b; b = b.md()) c.push(b), ++d;
		}
		b = this.Bh;
		d = a.type || a;
		if (y(a)) a = new Sg(a, b);
		else if (a instanceof Sg) a.target = a.target || b;
		else {
			var e = a;
			a = new Sg(d, b);
			vd(a, e);
		}
		e = !0;
		if (c)
			for (var g = c.length - 1; !a.c && 0 <= g; g--) {
				var h = (a.currentTarget = c[g]);
				e = Bh(h, d, !0, a) && e;
			}
		a.c || ((h = a.currentTarget = b), (e = Bh(h, d, !0, a) && e), a.c || (e = Bh(h, d, !1, a) && e));
		if (c) for (g = 0; !a.c && g < c.length; g++) (h = a.currentTarget = c[g]), (e = Bh(h, d, !1, a) && e);
		return e;
	};
	u.F = function() {
		Ah.m.F.call(this);
		this.Na && dh(this.Na, void 0);
		this.gf = null;
	};
	u.w = function(a, b, c, d) {
		return this.Na.add(String(a), b, !1, c, d);
	};
	u.Ab = function(a, b, c, d) {
		return this.Na.add(String(a), b, !0, c, d);
	};
	u.ca = function(a, b, c, d) {
		return this.Na.remove(String(a), b, c, d);
	};
	function Bh(a, b, c, d) {
		b = a.Na.a[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, g = 0; g < b.length; ++g) {
			var h = b[g];
			if (h && !h.oc && h.capture == c) {
				var k = h.listener,
					l = h.Gd || h.src;
				h.dd && ch(a.Na, h);
				e = !1 !== k.call(l, d) && e;
			}
		}
		return e && 0 != d.Qg;
	}
	u.Ec = function(a, b, c, d) {
		return this.Na.Ec(String(a), b, c, d);
	};
	u.hasListener = function(a, b) {
		return this.Na.hasListener(x(a) ? String(a) : void 0, b);
	};
	function Ch() {}
	ic(Ch);
	Ch.prototype.a = 0;
	function T(a) {
		Ah.call(this);
		this.b = a || mf();
		this.la = Dh;
		this.ja = null;
		this.V = !1;
		this.A = null;
		this.I = void 0;
		this.G = this.s = this.B = this.pa = null;
		this.ib = !1;
	}
	D(T, Ah);
	T.prototype.sb = Ch.$();
	var Dh = null;
	function Eh(a, b) {
		switch (a) {
			case 1:
				return b ? "disable" : "enable";
			case 2:
				return b ? "highlight" : "unhighlight";
			case 4:
				return b ? "activate" : "deactivate";
			case 8:
				return b ? "select" : "unselect";
			case 16:
				return b ? "check" : "uncheck";
			case 32:
				return b ? $a : Ia;
			case 64:
				return b ? "open" : "close";
		}
		throw Error("Invalid component state");
	}
	function Fh(a) {
		return a.ja || (a.ja = ":" + (a.sb.a++).toString(36));
	}
	function Gh(a, b) {
		if (a.B && a.B.G) {
			var c = a.B.G,
				d = a.ja;
			d in c && delete c[d];
			sd(a.B.G, b, a);
		}
		a.ja = b;
	}
	u = T.prototype;
	u.j = p("A");
	function Hh(a, b) {
		return a.A ? sf(b, a.A || a.b.a) : null;
	}
	function U(a) {
		a.I || (a.I = new uh(a));
		return a.I;
	}
	function Ih(a, b) {
		if (a == b) throw Error(wa);
		if (b && a.B && a.ja && Jh(a.B, a.ja) && a.B != b) throw Error(wa);
		a.B = b;
		T.m.qf.call(a, b);
	}
	u.wb = p("B");
	u.qf = function(a) {
		if (this.B && this.B != a) throw Error("Method not supported");
		T.m.qf.call(this, a);
	};
	u.D = function() {
		this.A = dg(this.b, f);
	};
	u.fa = function(a) {
		Kh(this, a);
	};
	function Kh(a, b, c) {
		if (a.V) throw Error(ja);
		a.A || a.D();
		b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
		(a.B && !a.B.V) || a.P();
	}
	function Lh(a, b) {
		if (a.V) throw Error(ja);
		if (b && a.xe(b)) {
			a.ib = !0;
			var c = N(b);
			(a.b && a.b.a == c) || (a.b = mf(b));
			a.T(b);
			a.P();
		} else throw Error("Invalid element to decorate");
	}
	u.xe = r(!0);
	u.T = fc("A");
	u.P = function() {
		this.V = !0;
		Mh(this, function(a) {
			!a.V && a.j() && a.P();
		});
	};
	u.Z = function() {
		Mh(this, function(a) {
			a.V && a.Z();
		});
		this.I && zh(this.I);
		this.V = !1;
	};
	u.F = function() {
		this.V && this.Z();
		this.I && (this.I.M(), delete this.I);
		Mh(this, function(a) {
			a.M();
		});
		!this.ib && this.A && Kf(this.A);
		this.B = this.pa = this.A = this.G = this.s = null;
		T.m.F.call(this);
	};
	function V(a, b) {
		return Fh(a) + "." + b;
	}
	u.sc = function(a, b, c) {
		if (a.V && (c || !this.V)) throw Error(ja);
		if (0 > b || b > Nh(this)) throw Error("Child component index out of bounds");
		(this.G && this.s) || ((this.G = {}), (this.s = []));
		if (a.wb() == this) {
			var d = Fh(a);
			this.G[d] = a;
			cd(this.s, a);
		} else sd(this.G, Fh(a), a);
		Ih(a, this);
		fd(this.s, b, 0, a);
		a.V && this.V && a.wb() == this
			? ((c = this.sd()), (b = c.childNodes[b] || null), b != a.j() && c.insertBefore(a.j(), b))
			: c
				? (this.A || this.D(), (b = Oh(this, b + 1)), Kh(a, this.sd(), b ? b.A : null))
				: this.V && !a.V && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.P();
	};
	u.sd = p("A");
	function Ph(a) {
		null == a.la && (a.la = xg(a.V ? a.A : a.b.a.body));
		return a.la;
	}
	function Nh(a) {
		return a.s ? a.s.length : 0;
	}
	function Jh(a, b) {
		a.G && b ? ((a = a.G), (b = (null !== a && b in a ? a[b] : void 0) || null)) : (b = null);
		return b;
	}
	function Oh(a, b) {
		return a.s ? a.s[b] || null : null;
	}
	function Mh(a, b, c) {
		a.s && Wc(a.s, b, c);
	}
	function Qh(a, b) {
		return a.s && b ? Vc(a.s, b) : -1;
	}
	u.removeChild = function(a, b) {
		if (a) {
			var c = y(a) ? a : Fh(a);
			a = Jh(this, c);
			if (c && a) {
				var d = this.G;
				c in d && delete d[c];
				cd(this.s, a);
				b && (a.Z(), a.A && Kf(a.A));
				Ih(a, null);
			}
		}
		if (!a) throw Error("Child is not in parent component");
		return a;
	};
	u.Qc = function(a) {
		for (var b = []; this.s && 0 != this.s.length; ) b.push(this.removeChild(Oh(this, 0), a));
		return b;
	};
	function Rh() {}
	var Sh;
	ic(Rh);
	var Th = {
		button: "pressed",
		checkbox: Oa,
		menuitem: Qb,
		menuitemcheckbox: Oa,
		menuitemradio: Oa,
		radio: Oa,
		tab: Qb,
		treeitem: Qb,
	};
	u = Rh.prototype;
	u.$b = ec();
	u.D = function(a) {
		return a.b.D(f, Uh(this, a).join(" "), a.da());
	};
	u.yb = function(a) {
		return a;
	};
	function Vh(a, b, c) {
		if ((a = a.j ? a.j() : a)) {
			var d = [b];
			G && !K("7") && ((d = Wh(ne(a), b)), d.push(b));
			(c ? pe : re)(a, d);
		}
	}
	u.vd = r(!0);
	u.Oa = function(a, b) {
		b.id && Gh(a, b.id);
		var c = this.yb(b);
		c && c.firstChild ? Xh(a, c.firstChild.nextSibling ? ed(c.childNodes) : c.firstChild) : (a.Lb = null);
		var d = 0,
			e = this.ea(),
			g = this.ea(),
			h = !1,
			k = !1,
			l = !1,
			m = ed(ne(b));
		Wc(
			m,
			function(a) {
				h || a != e ? (k || a != g ? (d |= this.od(a)) : (k = !0)) : ((h = !0), g == e && (k = !0));
				1 == this.od(a) && Zf(c) && $f(c, !1);
			},
			this,
		);
		a.W = d;
		h || (m.push(e), g == e && (k = !0));
		k || m.push(g);
		(a = a.se) && m.push.apply(m, a);
		if (G && !K("7")) {
			var q = Wh(m);
			0 < q.length && (m.push.apply(m, q), (l = !0));
		}
		if (!h || !k || a || l) b.className = m.join(" ");
		return b;
	};
	u.bg = function(a) {
		Ph(a) && this.Ce(a.j(), !0);
		a.isEnabled() && this.ac(a, a.N());
	};
	function Yh(a, b, c) {
		if ((a = c || a.$b())) (c = b.getAttribute("role") || null), a != c && Kg(b, a);
	}
	function Zh(a, b, c) {
		b.N() || Lg(c, nb, !b.N());
		b.isEnabled() || a.Za(c, 1, !b.isEnabled());
		b.ba & 8 && a.Za(c, 8, !!(b.W & 8));
		b.ba & 16 && a.Za(c, 16, !!(b.W & 16));
		b.ba & 64 && a.Za(c, 64, !!(b.W & 64));
	}
	u.wd = function(a, b) {
		zg(a, !b, !G && !F);
	};
	u.Ce = function(a, b) {
		Vh(a, this.ea() + "-rtl", b);
	};
	u.Be = function(a) {
		var b;
		return a.ba & 32 && (b = a.j()) ? Zf(b) : !1;
	};
	u.ac = function(a, b) {
		var c;
		if (a.ba & 32 && (c = a.j())) {
			if (!b && a.W & 32) {
				try {
					c.blur();
				} catch (d) {}
				a.W & 32 && a.cg();
			}
			Zf(c) != b && $f(c, b);
		}
	};
	u.L = function(a, b) {
		P(a, b);
		a && Lg(a, nb, !b);
	};
	u.Jc = function(a, b, c) {
		var d = a.j();
		if (d) {
			var e = this.Dc(b);
			e && Vh(a, e, c);
			this.Za(d, b, c);
		}
	};
	u.Za = function(a, b, c) {
		Sh || (Sh = { 1: "disabled", 8: Qb, 16: Oa, 64: "expanded" });
		b = Sh[b];
		var d = a.getAttribute("role") || null;
		d && ((d = Th[d] || b), (b = b == Oa || b == Qb ? d : b));
		b && Lg(a, b, c);
	};
	u.Ic = function(a, b) {
		var c = this.yb(a);
		c &&
			(
				Hf(c),
				b &&
					(y(b)
						? Wf(c, b)
						: (
								(a = function(a) {
									if (a) {
										var b = N(c);
										c.appendChild(y(a) ? b.createTextNode(a) : a);
									}
								}),
								B(b) ? Wc(b, a) : !jc(b) || "nodeType" in b ? a(b) : Wc(ed(b), a)
							))
			);
	};
	u.ea = r("goog-control");
	function Uh(a, b) {
		var c = a.ea(),
			d = [c],
			e = a.ea();
		e != c && d.push(e);
		c = b.W;
		for (e = []; c; ) {
			var g = c & -c;
			e.push(a.Dc(g));
			c &= ~g;
		}
		d.push.apply(d, e);
		(a = b.se) && d.push.apply(d, a);
		G && !K("7") && d.push.apply(d, Wh(d));
		return d;
	}
	function Wh(a, b) {
		var c = [];
		b && (a = dd(a, [b]));
		Wc([], function(d) {
			!$c(d, rc(bd, a)) || (b && !bd(d, b)) || c.push(d.join("_"));
		});
		return c;
	}
	u.Dc = function(a) {
		this.a || $h(this);
		return this.a[a];
	};
	u.od = function(a) {
		if (!this.c) {
			this.a || $h(this);
			var b = this.a,
				c = {},
				d;
			for (d in b) c[b[d]] = d;
			this.c = c;
		}
		a = parseInt(this.c[a], 10);
		return isNaN(a) ? 0 : a;
	};
	function $h(a) {
		var b = a.ea();
		b.replace(/\xa0|\s/g, " ");
		a.a = {
			1: b + ba,
			2: b + "-hover",
			4: b + "-active",
			8: b + "-selected",
			16: b + "-checked",
			32: b + "-focused",
			64: b + "-open",
		};
	}
	function ai() {}
	D(ai, Rh);
	ic(ai);
	u = ai.prototype;
	u.$b = r(Ka);
	u.Za = function(a, b, c) {
		switch (b) {
			case 8:
			case 16:
				Lg(a, "pressed", c);
				break;
			default:
			case 64:
			case 1:
				ai.m.Za.call(this, a, b, c);
		}
	};
	u.D = function(a) {
		var b = ai.m.D.call(this, a),
			c = a.l;
		b && (c ? (b.title = c) : b.removeAttribute("title"));
		(c = a.za()) && this.xa(b, c);
		a.ba & 16 && this.Za(b, 16, !!(a.W & 16));
		return b;
	};
	u.Oa = function(a, b) {
		b = ai.m.Oa.call(this, a, b);
		var c = this.za(b);
		a.g = c;
		a.l = b.title;
		a.ba & 16 && this.Za(b, 16, !!(a.W & 16));
		return b;
	};
	u.za = z;
	u.xa = z;
	u.ea = r("goog-button");
	function bi(a) {
		if ((a.altKey && !a.ctrlKey) || a.metaKey || (112 <= a.keyCode && 123 >= a.keyCode)) return !1;
		switch (a.keyCode) {
			case 18:
			case 20:
			case 93:
			case 17:
			case 40:
			case 35:
			case 27:
			case 36:
			case 45:
			case 37:
			case 224:
			case 91:
			case 144:
			case 12:
			case 34:
			case 33:
			case 19:
			case 255:
			case 44:
			case 39:
			case 145:
			case 16:
			case 38:
			case 252:
			case 224:
			case 92:
				return !1;
			case 0:
				return !H;
			default:
				return 166 > a.keyCode || 183 < a.keyCode;
		}
	}
	function ci(a, b, c, d, e, g) {
		if (!(G || Hd || (J && K("525")))) return !0;
		if (Kd && e) return di(a);
		if (e && !d) return !1;
		hc(b) && (b = ei(b));
		e = 17 == b || 18 == b || (Kd && 91 == b);
		if (((!c || Kd) && e) || (Kd && 16 == b && (d || g))) return !1;
		if ((J || Hd) && d && c)
			switch (a) {
				case 220:
				case 219:
				case 221:
				case 192:
				case 186:
				case 189:
				case 187:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
					return !1;
			}
		if (G && d && b == a) return !1;
		switch (a) {
			case 13:
				return !0;
			case 27:
				return !(J || Hd);
		}
		return di(a);
	}
	function di(a) {
		if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((J || Hd) && 0 == a)) return !0;
		switch (a) {
			case 32:
			case 43:
			case 63:
			case 64:
			case 107:
			case 109:
			case 110:
			case 111:
			case 186:
			case 59:
			case 189:
			case 187:
			case 61:
			case 188:
			case 190:
			case 191:
			case 192:
			case 222:
			case 219:
			case 220:
			case 221:
				return !0;
			default:
				return !1;
		}
	}
	function ei(a) {
		if (H) a = fi(a);
		else if (Kd && J)
			switch (a) {
				case 93:
					a = 91;
			}
		return a;
	}
	function fi(a) {
		switch (a) {
			case 61:
				return 187;
			case 59:
				return 186;
			case 173:
				return 189;
			case 224:
				return 91;
			case 0:
				return 224;
			default:
				return a;
		}
	}
	function gi(a, b) {
		Ah.call(this);
		a && hi(this, a, b);
	}
	D(gi, Ah);
	u = gi.prototype;
	u.A = null;
	u.Ld = null;
	u.Re = null;
	u.Md = null;
	u.Ja = -1;
	u.zb = -1;
	u.ge = !1;
	var ii = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45,
		},
		ji = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			"U+007F": 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45,
		},
		ki = G || Hd || (J && K("525")),
		li = Kd && H;
	u = gi.prototype;
	u.ni = function(a) {
		if (J || Hd)
			if ((17 == this.Ja && !a.ctrlKey) || (18 == this.Ja && !a.altKey) || (Kd && 91 == this.Ja && !a.metaKey))
				this.zb = this.Ja = -1;
		-1 == this.Ja &&
			(a.ctrlKey && 17 != a.keyCode
				? (this.Ja = 17)
				: a.altKey && 18 != a.keyCode ? (this.Ja = 18) : a.metaKey && 91 != a.keyCode && (this.Ja = 91));
		ki && !ci(a.keyCode, this.Ja, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
			? this.handleEvent(a)
			: ((this.zb = ei(a.keyCode)), li && (this.ge = a.altKey));
	};
	u.oi = function(a) {
		this.zb = this.Ja = -1;
		this.ge = a.altKey;
	};
	u.handleEvent = function(a) {
		var b = a.a,
			c = b.altKey;
		if (G && a.type == vb) var d = this.zb;
		else if ((J || Hd) && a.type == vb) d = this.zb;
		else if (F && !J) d = this.zb;
		else {
			d = b.keyCode || this.zb;
			var e = b.charCode || 0;
			li && (c = this.ge);
			Kd && 63 == e && 224 == d && (d = 191);
		}
		(e = d = ei(d))
			? 63232 <= d && d in ii ? (e = ii[d]) : 25 == d && a.shiftKey && (e = 9)
			: b.keyIdentifier && b.keyIdentifier in ji && (e = ji[b.keyIdentifier]);
		a = e == this.Ja;
		this.Ja = e;
		b = new mi(e, 0, a, b);
		b.altKey = c;
		this.dispatchEvent(b);
	};
	u.j = p("A");
	function hi(a, b, c) {
		a.Md && ni(a);
		a.A = b;
		a.Ld = S(a.A, vb, a, c);
		a.Re = S(a.A, ub, a.ni, c, a);
		a.Md = S(a.A, "keyup", a.oi, c, a);
	}
	function ni(a) {
		a.Ld && (ph(a.Ld), ph(a.Re), ph(a.Md), (a.Ld = null), (a.Re = null), (a.Md = null));
		a.A = null;
		a.Ja = -1;
		a.zb = -1;
	}
	u.F = function() {
		gi.m.F.call(this);
		ni(this);
	};
	function mi(a, b, c, d) {
		Tg.call(this, d);
		this.type = "key";
		this.keyCode = a;
		this.repeat = c;
	}
	D(mi, Tg);
	function oi(a, b) {
		if (!a) throw Error("Invalid class name " + a);
		if (!kc(b)) throw Error("Invalid decorator function " + b);
		pi[a] = b;
	}
	var qi = {},
		pi = {};
	function W(a, b, c) {
		T.call(this, c);
		if (!b) {
			b = this.constructor;
			for (var d; b; ) {
				d = mc(b);
				if ((d = qi[d])) break;
				b = b.m ? b.m.constructor : null;
			}
			b = d ? (kc(d.$) ? d.$() : new d()) : null;
		}
		this.a = b;
		this.Lb = x(a) ? a : null;
	}
	D(W, T);
	u = W.prototype;
	u.Lb = null;
	u.W = 0;
	u.ba = 39;
	u.jb = 255;
	u.Uc = 0;
	u.ga = !0;
	u.se = null;
	u.Je = !0;
	u.$c = !1;
	function ri(a, b) {
		a.V && b != a.Je && si(a, b);
		a.Je = b;
	}
	u.D = function() {
		var a = this.a.D(this);
		this.A = a;
		Yh(this.a, a, this.Fc());
		this.$c || this.a.wd(a, !1);
		this.N() || this.a.L(a, !1);
	};
	u.Fc = r(null);
	u.sd = function() {
		return this.a.yb(this.j());
	};
	u.xe = function(a) {
		return this.a.vd(a);
	};
	u.T = function(a) {
		this.A = a = this.a.Oa(this, a);
		Yh(this.a, a, this.Fc());
		this.$c || this.a.wd(a, !1);
		this.ga = a.style.display != Db;
	};
	u.P = function() {
		W.m.P.call(this);
		Zh(this.a, this, this.A);
		this.a.bg(this);
		if (this.ba & -2 && (this.Je && si(this, !0), this.ba & 32)) {
			var a = this.j();
			if (a) {
				var b = this.f || (this.f = new gi());
				hi(b, a);
				U(this).w(b, "key", this.Ha).w(a, $a, this.Yh).w(a, Ia, this.cg);
			}
		}
	};
	function si(a, b) {
		var c = U(a),
			d = a.j();
		b
			? (
					c.w(d, Ab, a.De).w(d, xb, a.Lc).w(d, Bb, a.dc).w(d, zb, a.Ke),
					a.Mc != z && c.w(d, Ua, a.Mc),
					G && (K(9) || c.w(d, Va, a.gg), a.h || ((a.h = new ti(a)), Mg(a, rc(Ng, a.h))))
				)
			: (
					c.ca(d, Ab, a.De).ca(d, xb, a.Lc).ca(d, Bb, a.dc).ca(d, zb, a.Ke),
					a.Mc != z && c.ca(d, Ua, a.Mc),
					G && (K(9) || c.ca(d, Va, a.gg), Ng(a.h), (a.h = null))
				);
	}
	u.Z = function() {
		W.m.Z.call(this);
		this.f && ni(this.f);
		this.N() && this.isEnabled() && this.a.ac(this, !1);
	};
	u.F = function() {
		W.m.F.call(this);
		this.f && (this.f.M(), delete this.f);
		delete this.a;
		this.h = this.se = this.Lb = null;
	};
	u.da = p("Lb");
	u.Mb = function(a) {
		this.a.Ic(this.j(), a);
		this.Lb = a;
	};
	function Xh(a, b) {
		a.Lb = b;
	}
	u.gb = function() {
		var a = this.da();
		if (!a) return "";
		a = y(a) ? a : B(a) ? Yc(a, cg).join("") : ag(a);
		return yc(a);
	};
	u.Ug = function(a) {
		this.Mb(a);
	};
	u.N = p("ga");
	u.L = function(a, b) {
		return b || (this.ga != a && this.dispatchEvent(a ? "show" : ob))
			? ((b = this.j()) && this.a.L(b, a), this.isEnabled() && this.a.ac(this, a), (this.ga = a), !0)
			: !1;
	};
	u.isEnabled = function() {
		return !(this.W & 1);
	};
	u.oa = function(a) {
		var b = this.wb();
		(b && typeof b.isEnabled == n && !b.isEnabled()) ||
			!ui(this, 1, !a) ||
			(a || (vi(this, !1), wi(this, !1)), this.N() && this.a.ac(this, a), xi(this, 1, !a, !0));
	};
	function wi(a, b) {
		ui(a, 2, b) && xi(a, 2, b);
	}
	u.fc = function() {
		return !!(this.W & 4);
	};
	function vi(a, b) {
		ui(a, 4, b) && xi(a, 4, b);
	}
	function yi(a, b) {
		ui(a, 64, b) && xi(a, 64, b);
	}
	function xi(a, b, c, d) {
		d || 1 != b ? a.ba & b && c != !!(a.W & b) && (a.a.Jc(a, b, c), (a.W = c ? a.W | b : a.W & ~b)) : a.oa(!c);
	}
	u.sa = function(a, b) {
		if (this.V && this.W & a && !b) throw Error(ja);
		!b && this.W & a && xi(this, a, !1);
		this.ba = b ? this.ba | a : this.ba & ~a;
	};
	function zi(a, b) {
		return !!(a.jb & b) && !!(a.ba & b);
	}
	function ui(a, b, c) {
		return !!(a.ba & b) && !!(a.W & b) != c && (!(a.Uc & b) || a.dispatchEvent(Eh(b, c))) && !a.ub;
	}
	u.De = function(a) {
		(!a.relatedTarget || !Pf(this.j(), a.relatedTarget)) &&
			this.dispatchEvent("enter") &&
			this.isEnabled() &&
			zi(this, 2) &&
			wi(this, !0);
	};
	u.Ke = function(a) {
		(a.relatedTarget && Pf(this.j(), a.relatedTarget)) ||
			!this.dispatchEvent("leave") ||
			(zi(this, 4) && vi(this, !1), zi(this, 2) && wi(this, !1));
	};
	u.Mc = z;
	u.Lc = function(a) {
		this.isEnabled() &&
			(
				zi(this, 2) && wi(this, !0),
				!Vg(a) ||
					(J && Kd && a.ctrlKey) ||
					(zi(this, 4) && vi(this, !0), this.a && this.a.Be(this) && this.j().focus())
			);
		this.$c || !Vg(a) || (J && Kd && a.ctrlKey) || a.b();
	};
	u.dc = function(a) {
		this.isEnabled() && (zi(this, 2) && wi(this, !0), this.fc() && this.mc(a) && zi(this, 4) && vi(this, !1));
	};
	u.gg = function(a) {
		this.isEnabled() && this.mc(a);
	};
	u.mc = function(a) {
		if (zi(this, 16)) {
			var b = !(this.W & 16);
			ui(this, 16, b) && xi(this, 16, b);
		}
		zi(this, 8) && ui(this, 8, !0) && xi(this, 8, !0);
		zi(this, 64) && yi(this, !(this.W & 64));
		b = new Sg(Aa, this);
		a &&
			(
				(b.altKey = a.altKey),
				(b.ctrlKey = a.ctrlKey),
				(b.metaKey = a.metaKey),
				(b.shiftKey = a.shiftKey),
				(b.f = a.f)
			);
		return this.dispatchEvent(b);
	};
	u.Yh = function() {
		zi(this, 32) && ui(this, 32, !0) && xi(this, 32, !0);
	};
	u.cg = function() {
		zi(this, 4) && vi(this, !1);
		zi(this, 32) && ui(this, 32, !1) && xi(this, 32, !1);
	};
	u.Ha = function(a) {
		return this.N() && this.isEnabled() && this.Kc(a) ? (a.b(), a.stopPropagation(), !0) : !1;
	};
	u.Kc = function(a) {
		return 13 == a.keyCode && this.mc(a);
	};
	if (!kc(W)) throw Error("Invalid component class " + W);
	if (!kc(Rh)) throw Error("Invalid renderer class " + Rh);
	var Ai = mc(W);
	qi[Ai] = Rh;
	oi("goog-control", function() {
		return new W(null);
	});
	function ti(a) {
		R.call(this);
		this.b = a;
		this.a = !1;
		this.c = new uh(this);
		Mg(this, rc(Ng, this.c));
		a = this.b.A;
		this.c.w(a, xb, this.g).w(a, Bb, this.h).w(a, Qa, this.f);
	}
	D(ti, R);
	var Bi = !G || Xd(9);
	ti.prototype.g = function() {
		this.a = !1;
	};
	ti.prototype.h = function() {
		this.a = !0;
	};
	function Ei(a, b) {
		if (!Bi) return (a.button = 0), (a.type = b), a;
		var c = document.createEvent("MouseEvents");
		c.initMouseEvent(
			b,
			a.bubbles,
			a.cancelable,
			a.view || null,
			a.detail,
			a.screenX,
			a.screenY,
			a.clientX,
			a.clientY,
			a.ctrlKey,
			a.altKey,
			a.shiftKey,
			a.metaKey,
			0,
			a.relatedTarget || null,
		);
		return c;
	}
	ti.prototype.f = function(a) {
		if (this.a) this.a = !1;
		else {
			var b = a.a,
				c = b.button,
				d = b.type,
				e = Ei(b, xb);
			this.b.Lc(new Tg(e, a.currentTarget));
			e = Ei(b, Bb);
			this.b.dc(new Tg(e, a.currentTarget));
			Bi || ((b.button = c), (b.type = d));
		}
	};
	ti.prototype.F = function() {
		this.b = null;
		ti.m.F.call(this);
	};
	function Fi() {}
	D(Fi, ai);
	ic(Fi);
	u = Fi.prototype;
	u.$b = ec();
	u.D = function(a) {
		ri(a, !1);
		a.jb &= -256;
		a.sa(32, !1);
		return a.b.D(
			"BUTTON",
			{ class: Uh(this, a).join(" "), disabled: !a.isEnabled(), title: a.l || "", value: a.za() || "" },
			a.gb() || "",
		);
	};
	u.vd = function(a) {
		return "BUTTON" == a.tagName || (a.tagName == oa && (a.type == Ka || "submit" == a.type || "reset" == a.type));
	};
	u.Oa = function(a, b) {
		ri(a, !1);
		a.jb &= -256;
		a.sa(32, !1);
		if (b.disabled) {
			var c = this.Dc(1);
			L(b, c);
		}
		return Fi.m.Oa.call(this, a, b);
	};
	u.bg = function(a) {
		U(a).w(a.j(), Qa, a.mc);
	};
	u.wd = z;
	u.Ce = z;
	u.Be = function(a) {
		return a.isEnabled();
	};
	u.ac = z;
	u.Jc = function(a, b, c) {
		Fi.m.Jc.call(this, a, b, c);
		(a = a.j()) && 1 == b && (a.disabled = c);
	};
	u.za = function(a) {
		return a.value;
	};
	u.xa = function(a, b) {
		a && (a.value = b);
	};
	u.Za = z;
	function Gi(a, b, c) {
		W.call(this, a, b || Fi.$(), c);
	}
	D(Gi, W);
	u = Gi.prototype;
	u.za = p("g");
	u.xa = function(a) {
		this.g = a;
		this.a.xa(this.j(), a);
	};
	u.F = function() {
		Gi.m.F.call(this);
		delete this.g;
		delete this.l;
	};
	u.P = function() {
		Gi.m.P.call(this);
		if (this.ba & 32) {
			var a = this.j();
			a && U(this).w(a, "keyup", this.Kc);
		}
	};
	u.Kc = function(a) {
		return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type)
			? this.mc(a)
			: 32 == a.keyCode;
	};
	oi("goog-button", function() {
		return new Gi(null);
	});
	function Hi() {}
	D(Hi, ai);
	ic(Hi);
	u = Hi.prototype;
	u.D = function(a) {
		var b = Uh(this, a);
		b = a.b.D(f, eb + b.join(" "), Ii(this, a.da(), a.b));
		a = a.l;
		b && (a ? (b.title = a) : b.removeAttribute("title"));
		return b;
	};
	u.$b = r(Ka);
	u.yb = function(a) {
		return a && a.firstChild && a.firstChild.firstChild;
	};
	function Ii(a, b, c) {
		return c.D(f, eb + (a.ea() + "-outer-box"), c.D(f, eb + (a.ea() + "-inner-box"), b));
	}
	u.vd = function(a) {
		return a.tagName == f;
	};
	u.Oa = function(a, b) {
		Ji(b, !0);
		Ji(b, !1);
		a: {
			var c = a.b.Xf(b);
			var d = this.ea() + "-outer-box";
			if (c && oe(c, d) && ((c = a.b.Xf(c)), (d = this.ea() + "-inner-box"), c && oe(c, d))) {
				c = !0;
				break a;
			}
			c = !1;
		}
		c || b.appendChild(Ii(this, b.childNodes, a.b));
		pe(b, ["goog-inline-block", this.ea()]);
		return Hi.m.Oa.call(this, a, b);
	};
	u.ea = r("goog-custom-button");
	function Ji(a, b) {
		if (a)
			for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
				d = b ? c.nextSibling : c.previousSibling;
				if (3 == c.nodeType) {
					var e = c.nodeValue;
					if ("" == zc(e)) a.removeChild(c);
					else {
						c.nodeValue = b ? Ac(e) : Bc(e);
						break;
					}
				} else break;
				c = d;
			}
	}
	function Ki(a, b, c) {
		Gi.call(this, a, b || Hi.$(), c);
		this.sa(16, !0);
	}
	D(Ki, Gi);
	oi("goog-toggle-button", function() {
		return new Ki(null);
	});
	var Li = "StopIteration" in v ? v.StopIteration : { message: "StopIteration", stack: "" };
	function Mi() {}
	Mi.prototype.next = function() {
		throw Li;
	};
	Mi.prototype.Ma = function() {
		return this;
	};
	function Ni(a) {
		if (a instanceof Mi) return a;
		if (typeof a.Ma == n) return a.Ma(!1);
		if (jc(a)) {
			var b = 0,
				c = new Mi();
			c.next = function() {
				for (;;) {
					if (b >= a.length) throw Li;
					if (b in a) return a[b++];
					b++;
				}
			};
			return c;
		}
		throw Error("Not implemented");
	}
	function Oi(a, b, c) {
		a = Ni(a);
		try {
			for (; b.call(c, a.next(), void 0, a); );
		} catch (d) {
			if (d !== Li) throw d;
		}
	}
	function Pi(a, b) {
		this.b = {};
		this.a = [];
		this.f = this.c = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
		} else if (a) {
			a instanceof Pi ? ((c = a.Sa()), (d = a.Aa())) : ((c = od(a)), (d = nd(a)));
			for (var e = 0; e < c.length; e++) this.set(c[e], d[e]);
		}
	}
	u = Pi.prototype;
	u.Aa = function() {
		Qi(this);
		for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
		return a;
	};
	u.Sa = function() {
		Qi(this);
		return this.a.concat();
	};
	function Ri(a, b) {
		return Si(a.b, b);
	}
	function Ti(a) {
		a.b = {};
		a.a.length = 0;
		a.c = 0;
		a.f = 0;
	}
	u.remove = function(a) {
		return Si(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && Qi(this), !0) : !1;
	};
	function Qi(a) {
		var b, c;
		if (a.c != a.a.length) {
			for (b = c = 0; c < a.a.length; ) {
				var d = a.a[c];
				Si(a.b, d) && (a.a[b++] = d);
				c++;
			}
			a.a.length = b;
		}
		if (a.c != a.a.length) {
			var e = {};
			for (b = c = 0; c < a.a.length; ) (d = a.a[c]), Si(e, d) || ((a.a[b++] = d), (e[d] = 1)), c++;
			a.a.length = b;
		}
	}
	u.get = function(a, b) {
		return Si(this.b, a) ? this.b[a] : b;
	};
	u.set = function(a, b) {
		Si(this.b, a) || (this.c++, this.a.push(a), this.f++);
		this.b[a] = b;
	};
	u.forEach = function(a, b) {
		for (var c = this.Sa(), d = 0; d < c.length; d++) {
			var e = c[d],
				g = this.get(e);
			a.call(b, g, e, this);
		}
	};
	u.Ma = function(a) {
		Qi(this);
		var b = 0,
			c = this.f,
			d = this,
			e = new Mi();
		e.next = function() {
			if (c != d.f) throw Error("The map has changed since the iterator was created");
			if (b >= d.a.length) throw Li;
			var e = d.a[b++];
			return a ? e : d.b[e];
		};
		return e;
	};
	function Si(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b);
	}
	function Ui(a) {
		if (a.Aa && typeof a.Aa == n) return a.Aa();
		if (y(a)) return a.split("");
		if (jc(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b;
		}
		return nd(a);
	}
	function Vi(a, b, c) {
		if (a.forEach && typeof a.forEach == n) a.forEach(b, c);
		else if (jc(a) || y(a)) Wc(a, b, c);
		else {
			if (a.Sa && typeof a.Sa == n) var d = a.Sa();
			else if (a.Aa && typeof a.Aa == n) d = void 0;
			else if (jc(a) || y(a)) {
				d = [];
				for (var e = a.length, g = 0; g < e; g++) d.push(g);
			} else d = od(a);
			e = Ui(a);
			g = e.length;
			for (var h = 0; h < g; h++) b.call(c, e[h], d && d[h], a);
		}
	}
	var Wi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	function Xi(a, b) {
		if (a) {
			a = a.split("&");
			for (var c = 0; c < a.length; c++) {
				var d = a[c].indexOf("="),
					e = null;
				if (0 <= d) {
					var g = a[c].substring(0, d);
					e = a[c].substring(d + 1);
				} else g = a[c];
				b(g, e ? Dc(e) : "");
			}
		}
	}
	function Yi(a, b) {
		this.f = this.s = this.c = "";
		this.l = null;
		this.g = this.h = "";
		this.b = !1;
		if (a instanceof Yi) {
			this.b = x(b) ? b : a.b;
			Zi(this, a.c);
			this.s = a.s;
			this.f = a.f;
			$i(this, a.l);
			this.h = a.h;
			b = a.a;
			var c = new aj();
			c.c = b.c;
			b.a && ((c.a = new Pi(b.a)), (c.b = b.b));
			bj(this, c);
			this.g = a.g;
		} else
			a && (c = String(a).match(Wi))
				? (
						(this.b = !!b),
						Zi(this, c[1] || "", !0),
						(this.s = cj(c[2] || "")),
						(this.f = cj(c[3] || "", !0)),
						$i(this, c[4]),
						(this.h = cj(c[5] || "", !0)),
						bj(this, c[6] || "", !0),
						(this.g = cj(c[7] || ""))
					)
				: ((this.b = !!b), (this.a = new aj(null, 0, this.b)));
	}
	Yi.prototype.toString = function() {
		var a = [],
			b = this.c;
		b && a.push(dj(b, ej, !0), ":");
		var c = this.f;
		if (c || "file" == b)
			a.push("//"), (b = this.s) && a.push(dj(b, ej, !0), "@"), a.push(
				Cc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
			), (c = this.l), null != c && a.push(":", String(c));
		if ((c = this.h)) this.f && "/" != c.charAt(0) && a.push("/"), a.push(dj(c, "/" == c.charAt(0) ? fj : gj, !0));
		(c = this.a.toString()) && a.push("?", c);
		(c = this.g) && a.push("#", dj(c, hj));
		return a.join("");
	};
	function Zi(a, b, c) {
		a.c = c ? cj(b, !0) : b;
		a.c && (a.c = a.c.replace(/:$/, ""));
	}
	function $i(a, b) {
		if (b) {
			b = Number(b);
			if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
			a.l = b;
		} else a.l = null;
	}
	function bj(a, b, c) {
		b instanceof aj ? ((a.a = b), ij(a.a, a.b)) : (c || (b = dj(b, jj)), (a.a = new aj(b, 0, a.b)));
	}
	function cj(a, b) {
		return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
	}
	function dj(a, b, c) {
		return y(a)
			? ((a = encodeURI(a).replace(b, kj)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a)
			: null;
	}
	function kj(a) {
		a = a.charCodeAt(0);
		return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
	}
	var ej = /[#\/\?@]/g,
		gj = /[\#\?:]/g,
		fj = /[\#\?]/g,
		jj = /[\#\?@]/g,
		hj = /#/g;
	function aj(a, b, c) {
		this.b = this.a = null;
		this.c = a || null;
		this.f = !!c;
	}
	function lj(a) {
		a.a ||
			(
				(a.a = new Pi()),
				(a.b = 0),
				a.c &&
					Xi(a.c, function(b, c) {
						a.add(Dc(b), c);
					})
			);
	}
	u = aj.prototype;
	u.add = function(a, b) {
		lj(this);
		this.c = null;
		a = mj(this, a);
		var c = this.a.get(a);
		c || this.a.set(a, (c = []));
		c.push(b);
		this.b = this.b + 1;
		return this;
	};
	u.remove = function(a) {
		lj(this);
		a = mj(this, a);
		return Ri(this.a, a) ? ((this.c = null), (this.b = this.b - this.a.get(a).length), this.a.remove(a)) : !1;
	};
	function nj(a, b) {
		lj(a);
		b = mj(a, b);
		return Ri(a.a, b);
	}
	u.forEach = function(a, b) {
		lj(this);
		this.a.forEach(function(c, d) {
			Wc(
				c,
				function(c) {
					a.call(b, c, d, this);
				},
				this,
			);
		}, this);
	};
	u.Sa = function() {
		lj(this);
		for (var a = this.a.Aa(), b = this.a.Sa(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
		return c;
	};
	u.Aa = function(a) {
		lj(this);
		var b = [];
		if (y(a)) nj(this, a) && (b = dd(b, this.a.get(mj(this, a))));
		else {
			a = this.a.Aa();
			for (var c = 0; c < a.length; c++) b = dd(b, a[c]);
		}
		return b;
	};
	u.set = function(a, b) {
		lj(this);
		this.c = null;
		a = mj(this, a);
		nj(this, a) && (this.b = this.b - this.a.get(a).length);
		this.a.set(a, [b]);
		this.b = this.b + 1;
		return this;
	};
	u.get = function(a, b) {
		a = a ? this.Aa(a) : [];
		return 0 < a.length ? String(a[0]) : b;
	};
	function oj(a, b, c) {
		a.remove(b);
		0 < c.length && ((a.c = null), a.a.set(mj(a, b), ed(c)), (a.b = a.b + c.length));
	}
	u.toString = function() {
		if (this.c) return this.c;
		if (!this.a) return "";
		for (var a = [], b = this.a.Sa(), c = 0; c < b.length; c++) {
			var d = b[c],
				e = Cc(d);
			d = this.Aa(d);
			for (var g = 0; g < d.length; g++) {
				var h = e;
				"" !== d[g] && (h += "=" + Cc(d[g]));
				a.push(h);
			}
		}
		return (this.c = a.join("&"));
	};
	function mj(a, b) {
		b = String(b);
		a.f && (b = b.toLowerCase());
		return b;
	}
	function ij(a, b) {
		b &&
			!a.f &&
			(
				lj(a),
				(a.c = null),
				a.a.forEach(function(a, b) {
					var c = b.toLowerCase();
					b != c && (this.remove(b), oj(this, c, a));
				}, a)
			);
		a.f = b;
	}
	u.Zf = function(a) {
		for (var b = 0; b < arguments.length; b++)
			Vi(
				arguments[b],
				function(a, b) {
					this.add(b, a);
				},
				this,
			);
	};
	var pj = {},
		qj = {},
		rj = {},
		sj = {},
		tj = {};
	function uj() {
		throw Error("Do not instantiate directly");
	}
	uj.prototype.tb = null;
	uj.prototype.da = p("a");
	uj.prototype.toString = p("a");
	function vj() {
		uj.call(this);
	}
	D(vj, uj);
	vj.prototype.Ea = pj;
	function wj() {
		uj.call(this);
	}
	D(wj, uj);
	wj.prototype.Ea = {};
	wj.prototype.tb = 1;
	function xj() {
		uj.call(this);
	}
	D(xj, uj);
	xj.prototype.Ea = qj;
	xj.prototype.tb = 1;
	function yj() {
		uj.call(this);
	}
	D(yj, uj);
	yj.prototype.Ea = rj;
	yj.prototype.tb = 1;
	function zj() {
		uj.call(this);
	}
	D(zj, uj);
	zj.prototype.Ea = {};
	zj.prototype.tb = 1;
	function Aj() {
		uj.call(this);
	}
	D(Aj, uj);
	Aj.prototype.Ea = sj;
	Aj.prototype.tb = 1;
	function Bj(a, b) {
		b = a(b || Cj, void 0, void 0);
		a = dg(mf(), f);
		b = Dj(b);
		a.innerHTML = b;
		1 == a.childNodes.length && ((b = a.firstChild), 1 == b.nodeType && (a = b));
		return a;
	}
	function Dj(a) {
		if (!lc(a)) return String(a);
		if (a instanceof uj) {
			if (a.Ea === pj) return a.da();
			if (a.Ea === tj) return Ec(a.da());
		}
		return "zSoyz";
	}
	var Cj = {};
	G && K(8);
	function Ej(a) {
		if (null != a)
			switch (a.tb) {
				case 1:
					return 1;
				case -1:
					return -1;
				case 0:
					return 0;
			}
		return null;
	}
	function Fj(a) {
		return null != a && a.Ea === pj ? a : a instanceof Ze ? Gj(af(a), a.Vb()) : Gj(Ec(String(String(a))), Ej(a));
	}
	function Hj(a) {
		function b(a) {
			this.a = a;
		}
		b.prototype = a.prototype;
		return function(a) {
			return new b(String(a));
		};
	}
	var Gj = (function(a) {
		function b(a) {
			this.a = a;
		}
		b.prototype = a.prototype;
		return function(a, d) {
			a = new b(String(a));
			void 0 !== d && (a.tb = d);
			return a;
		};
	})(vj);
	Hj(wj);
	Hj(xj);
	Hj(yj);
	Hj(zj);
	var Ij = Hj(Aj);
	(function(a) {
		function b(a) {
			this.a = a;
		}
		b.prototype = a.prototype;
		return function(a, d) {
			a = String(a);
			if (!a) return "";
			a = new b(a);
			void 0 !== d && (a.tb = d);
			return a;
		};
	})(vj);
	function Jj(a) {
		return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
	}
	function Kj(a) {
		return null != a && a.Ea === pj
			? String(String(a.da()).replace(Lj, "").replace(Mj, "&lt;")).replace(Nj, Oj)
			: Ec(String(a));
	}
	function Pj(a) {
		null != a && a.Ea === sj
			? (a = Jj(a.da()))
			: null == a
				? (a = "")
				: a instanceof Le
					? (a = Jj(Ne(a)))
					: a instanceof Ve ? (a = Jj(Xe(a))) : ((a = String(a)), (a = Qj.test(a) ? a : "zSoyz"));
		return a;
	}
	function X(a) {
		return null != a && a.Ea === tj ? "zSoyz" : a;
	}
	var Rj = {
		"\x00": "&#0;",
		"\t": "&#9;",
		"\n": "&#10;",
		"\x0B": "&#11;",
		"\f": "&#12;",
		"\r": "&#13;",
		" ": "&#32;",
		'"': "&quot;",
		"&": "&amp;",
		"'": "&#39;",
		"-": "&#45;",
		"/": "&#47;",
		"<": "&lt;",
		"=": "&#61;",
		">": "&gt;",
		"`": "&#96;",
		"\u0085": "&#133;",
		"\u00a0": "&#160;",
		"\u2028": "&#8232;",
		"\u2029": "&#8233;",
	};
	function Oj(a) {
		return Rj[a];
	}
	var Sj = {
		"\x00": "\\0 ",
		"\b": "\\8 ",
		"\t": "\\9 ",
		"\n": "\\a ",
		"\x0B": "\\b ",
		"\f": "\\c ",
		"\r": "\\d ",
		'"': "\\22 ",
		"&": "\\26 ",
		"'": "\\27 ",
		"(": "\\28 ",
		")": "\\29 ",
		"*": "\\2a ",
		"/": "\\2f ",
		":": "\\3a ",
		";": "\\3b ",
		"<": "\\3c ",
		"=": "\\3d ",
		">": "\\3e ",
		"@": "\\40 ",
		"\\": "\\5c ",
		"{": "\\7b ",
		"}": "\\7d ",
		"\u0085": "\\85 ",
		"\u00a0": "\\a0 ",
		"\u2028": "\\2028 ",
		"\u2029": "\\2029 ",
	};
	function Tj(a) {
		return Sj[a];
	}
	var Uj = {
		"\x00": "%00",
		"\u0001": "%01",
		"\u0002": "%02",
		"\u0003": "%03",
		"\u0004": "%04",
		"\u0005": "%05",
		"\u0006": "%06",
		"\u0007": "%07",
		"\b": "%08",
		"\t": "%09",
		"\n": "%0A",
		"\x0B": "%0B",
		"\f": "%0C",
		"\r": "%0D",
		"\u000e": "%0E",
		"\u000f": "%0F",
		"\u0010": "%10",
		"\u0011": "%11",
		"\u0012": "%12",
		"\u0013": "%13",
		"\u0014": "%14",
		"\u0015": "%15",
		"\u0016": "%16",
		"\u0017": "%17",
		"\u0018": "%18",
		"\u0019": "%19",
		"\u001a": "%1A",
		"\u001b": "%1B",
		"\u001c": "%1C",
		"\u001d": "%1D",
		"\u001e": "%1E",
		"\u001f": "%1F",
		" ": "%20",
		'"': "%22",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"<": "%3C",
		">": "%3E",
		"\\": "%5C",
		"{": "%7B",
		"}": "%7D",
		"\u007f": "%7F",
		"\u0085": "%C2%85",
		"\u00a0": "%C2%A0",
		"\u2028": "%E2%80%A8",
		"\u2029": "%E2%80%A9",
		"\uff01": "%EF%BC%81",
		"\uff03": "%EF%BC%83",
		"\uff04": "%EF%BC%84",
		"\uff06": "%EF%BC%86",
		"\uff07": "%EF%BC%87",
		"\uff08": "%EF%BC%88",
		"\uff09": "%EF%BC%89",
		"\uff0a": "%EF%BC%8A",
		"\uff0b": "%EF%BC%8B",
		"\uff0c": "%EF%BC%8C",
		"\uff0f": "%EF%BC%8F",
		"\uff1a": "%EF%BC%9A",
		"\uff1b": "%EF%BC%9B",
		"\uff1d": "%EF%BC%9D",
		"\uff1f": "%EF%BC%9F",
		"\uff20": "%EF%BC%A0",
		"\uff3b": "%EF%BC%BB",
		"\uff3d": "%EF%BC%BD",
	};
	function Vj(a) {
		return Uj[a];
	}
	var Nj = /[\x00\x22\x27\x3c\x3e]/g,
		Wj = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
		Xj = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
		Qj = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
		Yj = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
		Lj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
		Mj = /</g;
	function Zj(a, b, c) {
		this.g = c;
		this.c = a;
		this.f = b;
		this.b = 0;
		this.a = null;
	}
	Zj.prototype.get = function() {
		if (0 < this.b) {
			this.b--;
			var a = this.a;
			this.a = a.next;
			a.next = null;
		} else a = this.c();
		return a;
	};
	function ak(a, b) {
		a.f(b);
		a.b < a.g && (a.b++, (b.next = a.a), (a.a = b));
	}
	function bk(a) {
		v.setTimeout(function() {
			throw a;
		}, 0);
	}
	var ck;
	function dk() {
		var a = v.MessageChannel;
		"undefined" === typeof a &&
			"undefined" !== typeof window &&
			window.postMessage &&
			window.addEventListener &&
			!E("Presto") &&
			(a = function() {
				var a = document.createElement(na);
				a.style.display = Db;
				a.src = "";
				document.documentElement.appendChild(a);
				var b = a.contentWindow;
				a = b.document;
				a.open();
				a.write("");
				a.close();
				var c = "callImmediate" + Math.random(),
					d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
				a = C(function(a) {
					if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
				}, this);
				b.addEventListener("message", a, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function() {
						b.postMessage(c, d);
					},
				};
			});
		if ("undefined" !== typeof a && !xd()) {
			var b = new a(),
				c = {},
				d = c;
			b.port1.onmessage = function() {
				if (x(c.next)) {
					c = c.next;
					var a = c.Mf;
					c.Mf = null;
					a();
				}
			};
			return function(a) {
				d.next = { Mf: a };
				d = d.next;
				b.port2.postMessage(0);
			};
		}
		return "undefined" !== typeof document && "onreadystatechange" in document.createElement(sa)
			? function(a) {
					var b = document.createElement(sa);
					b.onreadystatechange = function() {
						b.onreadystatechange = null;
						b.parentNode.removeChild(b);
						b = null;
						a();
						a = null;
					};
					document.documentElement.appendChild(b);
				}
			: function(a) {
					v.setTimeout(a, 0);
				};
	}
	function ek() {
		this.b = this.a = null;
	}
	var gk = new Zj(
		function() {
			return new fk();
		},
		function(a) {
			a.reset();
		},
		100,
	);
	ek.prototype.add = function(a, b) {
		var c = gk.get();
		c.set(a, b);
		this.b ? (this.b.next = c) : (this.a = c);
		this.b = c;
	};
	ek.prototype.remove = function() {
		var a = null;
		this.a && ((a = this.a), (this.a = this.a.next), this.a || (this.b = null), (a.next = null));
		return a;
	};
	function fk() {
		this.next = this.b = this.a = null;
	}
	fk.prototype.set = function(a, b) {
		this.a = a;
		this.b = b;
		this.next = null;
	};
	fk.prototype.reset = function() {
		this.next = this.b = this.a = null;
	};
	function hk(a, b) {
		ik || jk();
		kk || (ik(), (kk = !0));
		lk.add(a, b);
	}
	var ik;
	function jk() {
		if (-1 != String(v.Promise).indexOf("[native code]")) {
			var a = v.Promise.resolve(void 0);
			ik = function() {
				a.then(mk);
			};
		} else
			ik = function() {
				var a = mk;
				!kc(v.setImmediate) ||
				(v.Window && v.Window.prototype && !E(ka) && v.Window.prototype.setImmediate == v.setImmediate)
					? (ck || (ck = dk()), ck(a))
					: v.setImmediate(a);
			};
	}
	var kk = !1,
		lk = new ek();
	function mk() {
		for (var a; (a = lk.remove()); ) {
			try {
				a.a.call(a.b);
			} catch (b) {
				bk(b);
			}
			ak(gk, a);
		}
		kk = !1;
	}
	function nk(a) {
		a.prototype.then = a.prototype.then;
		a.prototype.$goog_Thenable = !0;
	}
	function ok(a) {
		if (!a) return !1;
		try {
			return !!a.$goog_Thenable;
		} catch (b) {
			return !1;
		}
	}
	function pk(a, b) {
		this.a = 0;
		this.l = void 0;
		this.f = this.b = this.c = null;
		this.g = this.h = !1;
		if (a != z)
			try {
				var c = this;
				a.call(
					b,
					function(a) {
						qk(c, 2, a);
					},
					function(a) {
						qk(c, 3, a);
					},
				);
			} catch (d) {
				qk(this, 3, d);
			}
	}
	function rk() {
		this.next = this.c = this.b = this.f = this.a = null;
		this.g = !1;
	}
	rk.prototype.reset = function() {
		this.c = this.b = this.f = this.a = null;
		this.g = !1;
	};
	var sk = new Zj(
		function() {
			return new rk();
		},
		function(a) {
			a.reset();
		},
		100,
	);
	function tk(a, b, c) {
		var d = sk.get();
		d.f = a;
		d.b = b;
		d.c = c;
		return d;
	}
	pk.prototype.then = function(a, b, c) {
		return uk(this, kc(a) ? a : null, kc(b) ? b : null, c);
	};
	nk(pk);
	pk.prototype.cancel = function(a) {
		0 == this.a &&
			hk(function() {
				var b = new vk(a);
				wk(this, b);
			}, this);
	};
	function wk(a, b) {
		if (0 == a.a)
			if (a.c) {
				var c = a.c;
				if (c.b) {
					for (
						var d = 0, e = null, g = null, h = c.b;
						h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d)));
						h = h.next
					)
						e || (g = h);
					e &&
						(0 == c.a && 1 == d
							? wk(c, b)
							: (
									g ? ((d = g), d.next == c.f && (c.f = d), (d.next = d.next.next)) : xk(c),
									yk(c, e, 3, b)
								));
				}
				a.c = null;
			} else qk(a, 3, b);
	}
	function zk(a, b) {
		a.b || (2 != a.a && 3 != a.a) || Ak(a);
		a.f ? (a.f.next = b) : (a.b = b);
		a.f = b;
	}
	function uk(a, b, c, d) {
		var e = tk(null, null, null);
		e.a = new pk(function(a, h) {
			e.f = b
				? function(c) {
						try {
							var e = b.call(d, c);
							a(e);
						} catch (m) {
							h(m);
						}
					}
				: a;
			e.b = c
				? function(b) {
						try {
							var e = c.call(d, b);
							!x(e) && b instanceof vk ? h(b) : a(e);
						} catch (m) {
							h(m);
						}
					}
				: h;
		});
		e.a.c = a;
		zk(a, e);
		return e.a;
	}
	pk.prototype.o = function(a) {
		this.a = 0;
		qk(this, 2, a);
	};
	pk.prototype.B = function(a) {
		this.a = 0;
		qk(this, 3, a);
	};
	function qk(a, b, c) {
		if (0 == a.a) {
			a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
			a.a = 1;
			a: {
				var d = c,
					e = a.o,
					g = a.B;
				if (d instanceof pk) {
					zk(d, tk(e || z, g || null, a));
					var h = !0;
				} else if (ok(d)) d.then(e, g, a), (h = !0);
				else {
					if (lc(d))
						try {
							var k = d.then;
							if (kc(k)) {
								Bk(d, k, e, g, a);
								h = !0;
								break a;
							}
						} catch (l) {
							g.call(a, l);
							h = !0;
							break a;
						}
					h = !1;
				}
			}
			h || ((a.l = c), (a.a = b), (a.c = null), Ak(a), 3 != b || c instanceof vk || Ck(a, c));
		}
	}
	function Bk(a, b, c, d, e) {
		function g(a) {
			k || ((k = !0), d.call(e, a));
		}
		function h(a) {
			k || ((k = !0), c.call(e, a));
		}
		var k = !1;
		try {
			b.call(a, h, g);
		} catch (l) {
			g(l);
		}
	}
	function Ak(a) {
		a.h || ((a.h = !0), hk(a.s, a));
	}
	function xk(a) {
		var b = null;
		a.b && ((b = a.b), (a.b = b.next), (b.next = null));
		a.b || (a.f = null);
		return b;
	}
	pk.prototype.s = function() {
		for (var a; (a = xk(this)); ) yk(this, a, this.a, this.l);
		this.h = !1;
	};
	function yk(a, b, c, d) {
		if (3 == c && b.b && !b.g) for (; a && a.g; a = a.c) a.g = !1;
		if (b.a) (b.a.c = null), Dk(b, c, d);
		else
			try {
				b.g ? b.f.call(b.c) : Dk(b, c, d);
			} catch (e) {
				Ek.call(null, e);
			}
		ak(sk, b);
	}
	function Dk(a, b, c) {
		2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c);
	}
	function Ck(a, b) {
		a.g = !0;
		hk(function() {
			a.g && Ek.call(null, b);
		});
	}
	var Ek = bk;
	function vk(a) {
		uc.call(this, a);
	}
	D(vk, uc);
	vk.prototype.name = "cancel";
	function Fk(a, b, c) {
		if (kc(a)) c && (a = C(a, c));
		else if (a && typeof a.handleEvent == n) a = C(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
	}
	function Gk(a) {
		v.clearTimeout(a);
	}
	function Hk(a, b, c) {
		R.call(this);
		this.b = a;
		this.f = b || 0;
		this.c = c;
		this.a = C(this.Vh, this);
	}
	D(Hk, R);
	u = Hk.prototype;
	u.ja = 0;
	u.F = function() {
		Hk.m.F.call(this);
		this.stop();
		delete this.b;
		delete this.c;
	};
	u.start = function(a) {
		this.stop();
		this.ja = Fk(this.a, x(a) ? a : this.f);
	};
	u.stop = function() {
		this.fc() && Gk(this.ja);
		this.ja = 0;
	};
	u.fc = function() {
		return 0 != this.ja;
	};
	u.Vh = function() {
		this.ja = 0;
		this.b && this.b.call(this.c);
	};
	var Ik = (function() {
		if (Ld) {
			var a = /Windows NT ([0-9.]+)/;
			return (a = a.exec(hd)) ? a[1] : "0";
		}
		return Kd
			? ((a = /10[_.][0-9_.]+/), (a = a.exec(hd)) ? a[0].replace(/_/g, ".") : "10")
			: Md
				? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(hd)) ? a[1] : "")
				: Nd || Od || Pd
					? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(hd)) ? a[1].replace(/_/g, ".") : "")
					: "";
	})();
	function Jk(a) {
		return (a = a.exec(hd)) ? a[1] : "";
	}
	var Kk = (function() {
		if (ae) return Jk(/Firefox\/([0-9.]+)/);
		if (G || Hd || F) return Wd;
		if (ee) return Cd() ? Jk(/CriOS\/([0-9.]+)/) : Jk(/Chrome\/([0-9.]+)/);
		if (fe && !Cd()) return Jk(/Version\/([0-9.]+)/);
		if (be || ce) {
			var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(hd);
			if (a) return a[1] + "." + a[2];
		} else if (de) return (a = Jk(/Android\s+([0-9.]+)/)) ? a : Jk(/Version\/([0-9.]+)/);
		return "";
	})();
	function Lk(a) {
		return 0 <= Qc(Kk, a);
	}
	function Mk(a, b, c, d, e, g, h, k, l) {
		var m = Nk(c);
		var q = rg(a);
		var t = tg(a);
		q = new gg(q.x, q.y, t.width, t.height);
		if ((t = qg(a))) {
			var w = new gg(t.left, t.top, t.right - t.left, t.bottom - t.top);
			t = Math.max(q.left, w.left);
			var I = Math.min(q.left + q.width, w.left + w.width);
			if (t <= I) {
				var Q = Math.max(q.top, w.top);
				w = Math.min(q.top + q.height, w.top + w.height);
				Q <= w && ((q.left = t), (q.top = Q), (q.width = I - t), (q.height = w - Q));
			}
		}
		t = mf(a);
		Q = mf(c);
		t.a != Q.a &&
			(
				(I = t.a.body),
				(Q = sg(I, eg(Q))),
				(Q = kf(Q, rg(I))),
				!G || Xd(9) || wf(t.a) || (Q = kf(Q, xf(t.a))),
				(q.left += Q.x),
				(q.top += Q.y)
			);
		a = Ok(a, b);
		b = q.left;
		a & 4 ? (b += q.width) : a & 2 && (b += q.width / 2);
		b = new M(b, q.top + (a & 1 ? q.height : 0));
		b = kf(b, m);
		e && ((b.x += (a & 4 ? -1 : 1) * e.x), (b.y += (a & 1 ? -1 : 1) * e.y));
		if (h)
			if (l) var ma = l;
			else if ((ma = qg(c))) (ma.top -= m.y), (ma.right -= m.x), (ma.bottom -= m.y), (ma.left -= m.x);
		return Pk(b, c, d, g, ma, h, k);
	}
	function Nk(a) {
		if ((a = a.offsetParent)) {
			var b = "HTML" == a.tagName || "BODY" == a.tagName;
			if (!b || "static" != kg(a, Jb)) {
				var c = rg(a);
				if (!b) {
					b = xg(a);
					var d = fe && Lk(10),
						e = Qd && 0 <= Qc(Ik, 10);
					b =
						b && (H || d || e)
							? -a.scrollLeft
							: !b || (Id && K("8")) || kg(a, "overflowX") == cc
								? a.scrollLeft
								: a.scrollWidth - a.clientWidth - a.scrollLeft;
					c = kf(c, new M(b, a.scrollTop));
				}
			}
		}
		return c || new M();
	}
	function Pk(a, b, c, d, e, g, h) {
		a = jf(a);
		var k = Ok(b, c);
		c = tg(b);
		h = h ? new lf(h.width, h.height) : new lf(c.width, c.height);
		a = jf(a);
		h = new lf(h.width, h.height);
		var l = 0;
		if (d || 0 != k)
			k & 4 ? (a.x -= h.width + (d ? d.right : 0)) : k & 2 ? (a.x -= h.width / 2) : d && (a.x += d.left), k & 1
				? (a.y -= h.height + (d ? d.bottom : 0))
				: d && (a.y += d.top);
		if (g) {
			if (e) {
				d = a;
				k = h;
				l = 0;
				65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
				132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
				d.x < e.left && g & 1 && ((d.x = e.left), (l |= 1));
				if (g & 16) {
					var m = d.x;
					d.x < e.left && ((d.x = e.left), (l |= 4));
					d.x + k.width > e.right &&
						(
							(k.width = Math.min(e.right - d.x, m + k.width - e.left)),
							(k.width = Math.max(k.width, 0)),
							(l |= 4)
						);
				}
				d.x + k.width > e.right && g & 1 && ((d.x = Math.max(e.right - k.width, e.left)), (l |= 1));
				g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
				d.y < e.top && g & 4 && ((d.y = e.top), (l |= 2));
				g & 32 &&
					(
						(m = d.y),
						d.y < e.top && ((d.y = e.top), (l |= 8)),
						d.y + k.height > e.bottom &&
							(
								(k.height = Math.min(e.bottom - d.y, m + k.height - e.top)),
								(k.height = Math.max(k.height, 0)),
								(l |= 8)
							)
					);
				d.y + k.height > e.bottom && g & 4 && ((d.y = Math.max(e.bottom - k.height, e.top)), (l |= 2));
				g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
				e = l;
			} else e = 256;
			l = e;
		}
		g = new gg(0, 0, 0, 0);
		g.left = a.x;
		g.top = a.y;
		g.width = h.width;
		g.height = h.height;
		e = l;
		if (e & 496) return e;
		lg(b, new M(g.left, g.top));
		h = new lf(g.width, g.height);
		c == h ||
			(c && h && c.width == h.width && c.height == h.height) ||
			(
				(c = h),
				(a = wf(mf(N(b)).a)),
				!G || K("10") || (a && K("8"))
					? Cg(b, c, Ja)
					: (
							(h = b.style),
							a
								? (
										(a = Dg(b)),
										(b = Eg(b)),
										(h.pixelWidth = c.width - b.left - a.left - a.right - b.right),
										(h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom)
									)
								: ((h.pixelWidth = c.width), (h.pixelHeight = c.height))
						)
			);
		return e;
	}
	function Ok(a, b) {
		return (b & 8 && xg(a) ? b ^ 4 : b) & -9;
	}
	function Qk() {}
	Qk.prototype.b = ec();
	function Rk() {}
	Rk.prototype.a = null;
	function Sk(a) {
		var b;
		(b = a.a) || ((b = {}), Tk(a) && ((b[0] = !0), (b[1] = !0)), (b = a.a = b));
		return b;
	}
	var Uk;
	function Vk() {}
	D(Vk, Rk);
	function Wk(a) {
		return (a = Tk(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
	}
	function Tk(a) {
		if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
			for (
				var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;
				c < b.length;
				c++
			) {
				var d = b[c];
				try {
					return new ActiveXObject(d), (a.b = d);
				} catch (e) {}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.b;
	}
	Uk = new Vk();
	function Xk(a) {
		Ah.call(this);
		this.headers = new Pi();
		this.ce = a || null;
		this.ma = !1;
		this.be = this.O = null;
		this.rb = "";
		this.Ia = 0;
		this.Pb = this.Oe = this.Id = this.qe = !1;
		this.Zd = 0;
		this.Yd = null;
		this.Pg = "";
		this.zf = this.ih = !1;
	}
	D(Xk, Ah);
	Xk.prototype.Pa = null;
	var Yk = /^https?$/i,
		Zk = [ra, "PUT"],
		$k = [];
	function al(a, b, c, d, e) {
		var g = new Xk();
		$k.push(g);
		b && g.w(Sa, b);
		g.Ab(Nb, g.Fh);
		e && (g.Zd = Math.max(0, e));
		g.send(a, c, d, void 0);
	}
	u = Xk.prototype;
	u.Fh = function() {
		this.M();
		cd($k, this);
	};
	u.send = function(a, b, c, d) {
		if (this.O) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.rb + "; newUri=" + a);
		b = b ? b.toUpperCase() : "GET";
		this.rb = a;
		this.Ia = 0;
		this.qe = !1;
		this.ma = !0;
		this.O = this.ce ? Wk(this.ce) : Wk(Uk);
		this.be = this.ce ? Sk(this.ce) : Sk(Uk);
		this.O.onreadystatechange = C(this.Hg, this);
		try {
			(this.Oe = !0), this.O.open(b, String(a), !0), (this.Oe = !1);
		} catch (g) {
			this.hd(5, g);
			return;
		}
		a = c || "";
		var e = new Pi(this.headers);
		d &&
			Vi(d, function(a, b) {
				e.set(b, a);
			});
		d = ad(e.Sa(), bl);
		c = v.FormData && a instanceof v.FormData;
		!bd(Zk, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		e.forEach(function(a, b) {
			this.O.setRequestHeader(b, a);
		}, this);
		this.Pg && (this.O.responseType = this.Pg);
		dc in this.O && this.O.withCredentials !== this.ih && (this.O.withCredentials = this.ih);
		try {
			cl(this), 0 < this.Zd &&
				((this.zf = dl(this.O))
					? ((this.O.timeout = this.Zd), (this.O.ontimeout = C(this.Eb, this)))
					: (this.Yd = Fk(this.Eb, this.Zd, this))), (this.Id = !0), this.O.send(a), (this.Id = !1);
		} catch (g) {
			this.hd(5, g);
		}
	};
	function dl(a) {
		return G && K(9) && hc(a.timeout) && x(a.ontimeout);
	}
	function bl(a) {
		return "content-type" == a.toLowerCase();
	}
	u.Eb = function() {
		"undefined" != typeof gc && this.O && ((this.Ia = 8), this.dispatchEvent("timeout"), this.abort(8));
	};
	u.hd = function(a) {
		this.ma = !1;
		this.O && ((this.Pb = !0), this.O.abort(), (this.Pb = !1));
		this.Ia = a;
		el(this);
		fl(this);
	};
	function el(a) {
		a.qe || ((a.qe = !0), a.dispatchEvent(Sa), a.dispatchEvent("error"));
	}
	u.abort = function(a) {
		this.O &&
			this.ma &&
			(
				(this.ma = !1),
				(this.Pb = !0),
				this.O.abort(),
				(this.Pb = !1),
				(this.Ia = a || 7),
				this.dispatchEvent(Sa),
				this.dispatchEvent("abort"),
				fl(this)
			);
	};
	u.F = function() {
		this.O && (this.ma && ((this.ma = !1), (this.Pb = !0), this.O.abort(), (this.Pb = !1)), fl(this, !0));
		Xk.m.F.call(this);
	};
	u.Hg = function() {
		this.ub || (this.Oe || this.Id || this.Pb ? gl(this) : this.dj());
	};
	u.dj = function() {
		gl(this);
	};
	function gl(a) {
		if (a.ma && "undefined" != typeof gc && (!a.be[1] || 4 != (a.O ? a.O.readyState : 0) || 2 != a.Yb()))
			if (a.Id && 4 == (a.O ? a.O.readyState : 0)) Fk(a.Hg, 0, a);
			else if ((a.dispatchEvent(Ob), a.Kd())) {
				a.ma = !1;
				try {
					a.Pc() ? (a.dispatchEvent(Sa), a.dispatchEvent("success")) : ((a.Ia = 6), el(a));
				} finally {
					fl(a);
				}
			}
	}
	function fl(a, b) {
		if (a.O) {
			cl(a);
			var c = a.O,
				d = a.be[0] ? z : null;
			a.O = null;
			a.be = null;
			b || a.dispatchEvent(Nb);
			try {
				c.onreadystatechange = d;
			} catch (e) {}
		}
	}
	function cl(a) {
		a.O && a.zf && (a.O.ontimeout = null);
		hc(a.Yd) && (Gk(a.Yd), (a.Yd = null));
	}
	u.fc = function() {
		return !!this.O;
	};
	u.Kd = function() {
		return 4 == (this.O ? this.O.readyState : 0);
	};
	u.Pc = function() {
		var a = this.Yb();
		a: switch (a) {
			case 200:
			case 201:
			case 202:
			case 204:
			case 206:
			case 304:
			case 1223:
				var b = !0;
				break a;
			default:
				b = !1;
		}
		if (!b) {
			if ((a = 0 === a))
				(a = String(this.rb).match(Wi)[1] || null), !a &&
					v.self &&
					v.self.location &&
					((a = v.self.location.protocol), (a = a.substr(0, a.length - 1))), (a = !Yk.test(
					a ? a.toLowerCase() : "",
				));
			b = a;
		}
		return b;
	};
	u.Yb = function() {
		try {
			return 2 < (this.O ? this.O.readyState : 0) ? this.O.status : -1;
		} catch (a) {
			return -1;
		}
	};
	u.ve = function() {
		return String(this.rb);
	};
	u.Wb = function() {
		try {
			return this.O ? this.O.responseText : "";
		} catch (a) {
			return "";
		}
	};
	u.getResponseHeader = function(a) {
		if (this.O && this.Kd()) return (a = this.O.getResponseHeader(a)), null === a ? void 0 : a;
	};
	u.getAllResponseHeaders = function() {
		return this.O && this.Kd() ? this.O.getAllResponseHeaders() : "";
	};
	u.Yf = p("Ia");
	function hl() {
		this.b = [];
		this.a = {};
		this.c = !1;
		this.B = 1;
		this.g = {};
		this.f = null;
		this.s = "";
		S(window, "beforeunload", this.o, !1, this);
	}
	ic(hl);
	function il(a, b, c) {
		if (null == b) return "1";
		switch (A(b)) {
			case Tb:
				return (a = b), !(64 < a.length) || (null != c && c) || (a = a.substr(0, 64)), Cc(a);
			case Eb:
				return "" + b;
			case "boolean":
				return b ? "1" : "0";
			case Ea:
				var d = [],
					e;
				for (e in b) d.push(il(a, b[e], c));
				return d.join(",");
			case Fb:
				d = [];
				for (e in b) d.push(jl(a, e, b[e], c));
				return d.join(",");
			default:
				return "";
		}
	}
	function jl(a, b, c, d) {
		return [Cc(b), il(a, c, d || "smtalt" == b)].join("=");
	}
	hl.prototype.log = function(a, b) {
		this.b.push([a, b]);
		this.c || ((this.c = !0), Fk(this.h, 0, this));
	};
	hl.prototype.h = function() {
		for (var a = 0; a < this.b.length; a++) {
			var b = this.b[a];
			kl(this, b[0], b[1]);
		}
		this.b = [];
		this.c = !1;
	};
	function kl(a, b, c) {
		ll(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + jl(a, b, c));
	}
	function ll(a, b) {
		var c = new Image(),
			d = a.B++;
		a.g[d] = c;
		c.onload = c.onerror = function() {
			delete hl.$().g[d];
		};
		c.src = b;
		c = null;
	}
	function ml(a, b) {
		var c = 0,
			d = null;
		b in a.a && ((d = a.a[b]), (c = d[0]), (d = d[1]));
		if (A(1) == Fb) {
			A(d) != Fb && (d = {});
			for (var e in 1) d[e] = nl(e in d ? d[e] : null, (1)[e]);
		} else d = nl(d, 1);
		a.a[b] = [c, d];
		Gk(a.a[b][0]);
		c = Fk(C(a.l, a, b), 2e3);
		a.a[b][0] = c;
	}
	hl.prototype.l = function(a) {
		kl(this, a, this.a[a][1]);
		a in this.a && (Gk(this.a[a][0]), delete this.a[a]);
	};
	function nl(a, b) {
		null != b || (b = 1);
		isNaN(a) && (a = parseInt(a, 10));
		isNaN(b) && (b = parseInt(b, 10));
		return a + b;
	}
	hl.prototype.o = function() {
		this.h();
		for (var a in this.a) 0 != this.a[a] && this.l(a);
	};
	function ol() {
		G
			? Lk(9)
			: (ee && Lk(25)) ||
				(G && Lk(8)) ||
				Hd ||
				(ae && Lk(19)) ||
				(F && Lk(12.1)) ||
				(fe && Lk(5.1)) ||
				(ce && Lk(3.2)) ||
				(de && Lk(2.1));
	}
	ic(ol);
	function pl(a) {
		var b = a;
		a = ql;
		this.g = null;
		b || (b = []);
		this.f = -1;
		this.a = b;
		a: {
			if (this.a.length) {
				b = this.a.length - 1;
				var c = this.a[b];
				if (c && typeof c == Fb && !B(c) && !(he && c instanceof Uint8Array)) {
					this.c = b - -1;
					this.b = c;
					break a;
				}
			}
			this.c = Number.MAX_VALUE;
		}
		if (a)
			for (b = 0; b < a.length; b++)
				(c = a[b]), c < this.c
					? ((c += -1), (this.a[c] = this.a[c] || ie))
					: (je(this), (this.b[c] = this.b[c] || ie));
	}
	D(pl, ge);
	var ql = [26];
	pl.prototype.Xb = function() {
		return ke(this, 16);
	};
	pl.prototype.Sb = function(a) {
		le(this, 16, a);
	};
	pl.prototype.wa = function() {
		return ke(this, 1);
	};
	pl.prototype.ta = function(a) {
		le(this, 1, a);
	};
	function rl() {
		this.c = this.a = "";
		ol.$();
	}
	ic(rl);
	rl.prototype.Sb = fc("a");
	rl.prototype.ta = fc("c");
	var sl = !1;
	function tl(a) {
		if ((a = a.match(/[\d]+/g))) a.length = 3;
	}
	(function() {
		if (navigator.plugins && navigator.plugins.length) {
			var a = navigator.plugins["Shockwave Flash"];
			if (a && ((sl = !0), a.description)) {
				tl(a.description);
				return;
			}
			if (navigator.plugins["Shockwave Flash 2.0"]) {
				sl = !0;
				return;
			}
		}
		if (
			navigator.mimeTypes &&
			navigator.mimeTypes.length &&
			((a = navigator.mimeTypes["application/x-shockwave-flash"]), (sl = !(!a || !a.enabledPlugin)))
		) {
			tl(a.enabledPlugin.description);
			return;
		}
		try {
			var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			sl = !0;
			tl(b.GetVariable("$version"));
			return;
		} catch (c) {}
		try {
			b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			sl = !0;
			return;
		} catch (c) {}
		try {
			(b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")), (sl = !0), tl(b.GetVariable("$version"));
		} catch (c) {}
	})();
	function ul() {
		this.b = rl.$();
	}
	ic(ul);
	ul.prototype.a = function() {
		vl(this, 25);
	};
	function vl(a, b) {
		var c = new pl();
		a = a.b;
		le(c, 65, 0);
		c.Sb(a.a);
		le(c, 14, "");
		c.ta(a.c);
		le(c, 50, "");
		le(c, 52, "");
		le(c, 32, 0);
		le(c, 31, b);
	}
	function wl() {
		this.a = [];
	}
	wl.prototype.add = function(a) {
		this.a.push(a);
	};
	function yl() {
		this.a = [];
	}
	D(yl, wl);
	ic(yl);
	yl.prototype.add = function(a) {
		if (a) for (; a(); );
	};
	function zl(a) {
		this.a = [];
		this.b = 0.5;
		Al(this, a);
		this.f = 0;
		this.c = !0;
		this.g = C(this.h, this);
	}
	D(zl, wl);
	function Al(a, b) {
		1 < b ? (a.b = 1) : 0.001 > b ? (a.b = 0.001) : b && (a.b = b);
	}
	zl.prototype.add = function(a) {
		zl.m.add.call(this, a);
		this.c && Bl(this);
	};
	function Bl(a) {
		a.c = !1;
		window.setTimeout(a.g, Math.min(a.f, 5e3));
	}
	zl.prototype.h = function() {
		var a = new Date().getTime();
		do {
			this.a.length && ((this.a[0] && this.a[0]()) || this.a.shift());
			var b = !!this.a.length;
			var c = 95 * this.b + 5;
			var d = new Date().getTime() - a;
		} while (b && d < c);
		this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
		b ? Bl(this) : (this.c = !0);
	};
	function Cl(a, b) {
		this.o = a || null;
		this.C = b || yl.$();
		this.l = this.h = this.G = null;
		this.f = this.c = !1;
		this.g = null;
		this.a = [];
		this.b = 0;
	}
	function Dl() {}
	function El() {}
	function Fl(a, b) {
		a.c || (a.G = b);
	}
	function Gl(a, b, c) {
		a.h = c ? C(b, c) : b;
	}
	function Hl(a, b, c) {
		a.l = c ? C(b, c) : b;
	}
	function Il(a, b) {
		a.c || ((a.c = !0), (a.B = b), a.b++, (a.g = a.G), a.s());
	}
	Cl.prototype.stop = function() {
		this.b++;
		this.c = !1;
		this.a = [];
	};
	function Jl(a) {
		if (!a.c) return null;
		for (var b = !1, c = 0; c < a.a.length; ++c)
			if (a.a[c].target === a) {
				a.a[c].ready = !1;
				a.a[c].gh = a.b + 1;
				b = !0;
				break;
			}
		b || a.a.push({ target: a, ready: !1, gh: a.b + 1 });
		return C(a.s, a, a, a.b + 1);
	}
	function Kl(a) {
		if (!a.c) return !0;
		for (var b = 0; b < a.a.length; ++b) if (a.a[b].target === a && a.a[b].gh == a.b) return a.a[b].ready;
		return !0;
	}
	Cl.prototype.s = function(a, b) {
		if (this.c) {
			if (a)
				for (var c = 0; c < this.a.length; ++c)
					if (this.a[c].target === a) {
						this.a[c].ready = !0;
						break;
					}
			this.f || this.C.add(C(this.I, this, b || this.b));
		}
	};
	Cl.prototype.I = function(a) {
		if (this.b != a) return !1;
		a = this.g;
		if (a == El) return this.stop(), this.h && this.h.call(this.o, this, this.B), !1;
		this.f = !0;
		try {
			var b = a.call(this.o, this, this.B);
			if (!b) throw Error();
		} catch (c) {
			this.stop();
			a = c;
			if (this.l) this.l.call(this.o, a, this, this.B);
			else throw a;
			return !1;
		} finally {
			this.f = !1;
		}
		b != Dl && ((this.g = b), this.b++, this.s());
		return !1;
	};
	function Ll() {
		Ah.call(this);
		this.a = 0;
		this.l = this.c = null;
	}
	D(Ll, Ah);
	Ll.prototype.f = function() {
		this.Ra("begin");
	};
	Ll.prototype.g = function() {
		this.Ra("end");
	};
	Ll.prototype.Bb = function() {
		this.Ra("stop");
	};
	Ll.prototype.Ra = function(a) {
		this.dispatchEvent(a);
	};
	function Ml(a, b) {
		B(b) || (b = [b]);
		b = Yc(b, function(a) {
			return y(a) ? a : a.Dk + " " + a.duration + "s " + a.timing + " " + a.fb + "s";
		});
		O(a, $b, b.join(","));
	}
	var Nl = (function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	})(function() {
		if (G) return K("10.0");
		var a = document.createElement(f),
			b = J ? "-webkit" : H ? "-moz" : G ? "-ms" : F ? "-o" : null,
			c = { transition: Gb };
		b && (c[b + "-transition"] = Gb);
		b = ef("div", { style: c });
		a.innerHTML = af(b);
		a = a.firstChild;
		b = a.style[Sc($b)];
		return "" != ("undefined" !== typeof b ? b : a.style[hg(a, $b)] || "");
	});
	function Ol(a, b, c, d, e) {
		Ll.call(this);
		this.A = a;
		this.s = b;
		this.o = c;
		this.b = d;
		this.B = B(e) ? e : [e];
	}
	D(Ol, Ll);
	u = Ol.prototype;
	u.play = function() {
		if (1 == this.a) return !1;
		this.f();
		this.Ra("play");
		this.c = sc();
		this.a = 1;
		if (Nl()) return O(this.A, this.o), (this.h = Fk(this.ij, void 0, this)), !0;
		this.wf(!1);
		return !1;
	};
	u.ij = function() {
		tg(this.A);
		Ml(this.A, this.B);
		O(this.A, this.b);
		this.h = Fk(C(this.wf, this, !1), 1e3 * this.s);
	};
	u.stop = function() {
		1 == this.a && this.wf(!0);
	};
	u.wf = function(a) {
		O(this.A, $b, "");
		Gk(this.h);
		O(this.A, this.b);
		this.l = sc();
		this.a = 0;
		a ? this.Bb() : this.Ra(Xa);
		this.g();
	};
	u.F = function() {
		this.stop();
		Ol.m.F.call(this);
	};
	function Pl(a, b) {
		Ah.call(this);
		this.h = new uh(this);
		this.bc(a || null);
		b && (this.rc = b);
	}
	D(Pl, Ah);
	u = Pl.prototype;
	u.A = null;
	u.uc = !0;
	u.Kf = null;
	u.hc = !1;
	u.Te = -1;
	u.rc = Xb;
	u.j = p("A");
	u.bc = function(a) {
		Ql(this);
		this.A = a;
	};
	u.Sc = function(a) {
		Ql(this);
		this.uc = a;
	};
	function Ql(a) {
		if (a.hc) throw Error("Can not change this state of the popup while showing.");
	}
	u.N = p("hc");
	u.L = function(a) {
		this.Ca && this.Ca.stop();
		this.pa && this.pa.stop();
		if (a) {
			if (!this.hc && this.Ee()) {
				if (!this.A) throw Error("Caller must call setElement before trying to show the popup");
				this.nb();
				a = N(this.A);
				if (this.uc)
					if ((this.h.w(a, xb, this.cf, !0), G)) {
						try {
							var b = a.activeElement;
						} catch (d) {}
						for (; b && b.nodeName == na; ) {
							try {
								var c = Uf(b);
							} catch (d) {
								break;
							}
							a = c;
							b = a.activeElement;
						}
						this.h.w(a, xb, this.cf, !0);
						this.h.w(a, "deactivate", this.Gg);
					} else this.h.w(a, Ia, this.Gg);
				this.rc == Xb ? ((this.A.style.visibility = cc), P(this.A, !0)) : this.rc == Cb && this.nb();
				this.hc = !0;
				this.Te = sc();
				this.Ca ? (hh(this.Ca, "end", this.Ig, !1, this), this.Ca.play()) : this.Ig();
			}
		} else Rl(this);
	};
	u.nb = z;
	function Rl(a, b) {
		a.hc &&
			a.dispatchEvent({ type: "beforehide", target: b }) &&
			(a.h && zh(a.h), (a.hc = !1), sc(), a.pa ? (hh(a.pa, "end", rc(a.Nf, b), !1, a), a.pa.play()) : a.Nf(b));
	}
	u.Nf = function(a) {
		this.rc == Xb ? this.Gi() : this.rc == Cb && (this.A.style.top = "-10000px");
		this.df(a);
	};
	u.Gi = function() {
		this.A.style.visibility = nb;
		P(this.A, !1);
	};
	u.Ee = function() {
		return this.dispatchEvent("beforeshow");
	};
	u.Ig = function() {
		this.dispatchEvent("show");
	};
	u.df = function(a) {
		this.dispatchEvent({ type: ob, target: a });
	};
	u.cf = function(a) {
		a = a.target;
		Pf(this.A, a) || Sl(this, a) || 150 > sc() - this.Te || Rl(this, a);
	};
	u.Gg = function(a) {
		var b = N(this.A);
		if ("undefined" != typeof document.activeElement) {
			if (((a = b.activeElement), !a || Pf(this.A, a) || "BODY" == a.tagName)) return;
		} else if (a.target != b) return;
		150 > sc() - this.Te || Rl(this);
	};
	function Sl(a, b) {
		return Zc(a.Kf || [], function(a) {
			return b === a || Pf(a, b);
		});
	}
	u.F = function() {
		Pl.m.F.call(this);
		this.h.M();
		Ng(this.Ca);
		Ng(this.pa);
		delete this.A;
		delete this.h;
		delete this.Kf;
	};
	function Tl(a, b) {
		this.s = b || void 0;
		Pl.call(this, a);
	}
	D(Tl, Pl);
	Tl.prototype.nb = function() {
		if (this.s) {
			var a = !this.N() && this.rc != Cb,
				b = this.j();
			a && ((b.style.visibility = nb), P(b, !0));
			this.s.b(b, 8, this.Xe);
			a && P(b, !1);
		}
	};
	function Ul(a, b) {
		Tl.call(this, a);
		this.c = b;
		this.a = 0;
		this.b = null;
		this.f = 0;
		this.L(!0);
		this.L(!1);
		L(this.j(), "round-trip-popup");
		L(this.c, "round-trip-content");
	}
	D(Ul, Tl);
	Ul.prototype.o = function() {
		Gk(this.f);
		1 == this.a ? hh(this.b, Xa, C(this.o, this)) : 0 == this.a && (this.f = Fk(C(this.l, this, -1), 200));
	};
	Ul.prototype.l = function(a) {
		if (this.a != a && (0 != this.a || !((this.N() && 1 == a) || (!this.N() && -1 == a)))) {
			var b = this.N();
			this.L(!0);
			var c = -Math.ceil(tg(this.c).width);
			xg(this.j()) && (c = -c);
			var d = 1 == a ? c : 0;
			c = 1 == a ? 0 : c;
			this.L(b);
			if (Nl()) {
				b = 0.2;
				if (0 != this.a) {
					var e = parseInt(jg(this.c, "left"), 10);
					this.g();
					b *= (c - e) / (c - d);
					d = e;
				}
				this.a = a;
				this.b = new Ol(this.c, b, { left: d + "px" }, { left: c + "px" }, "left " + b + "s");
				this.b.play();
				hh(this.b, Xa, C(this.g, this));
				-1 == a ? hh(this.b, Xa, C(this.L, this, !1)) : this.L(!0);
			} else O(this.c, "left", c + "px"), this.L(1 == a ? !0 : !1);
		}
	};
	Ul.prototype.g = function() {
		0 != this.a && (this.b.stop(), Fk(C(qh, this, this.b)), (this.a = 0), (this.b = null));
	};
	function Vl(a, b) {
		if (null == a || null == b) return null == a == (null == b);
		if (a.constructor != Array && a.constructor != Object)
			throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
		if (a === b) return !0;
		if (a.constructor != b.constructor) return !1;
		for (var c in a) if (!(c in b && Wl(a[c], b[c]))) return !1;
		for (var d in b) if (!(d in a)) return !1;
		return !0;
	}
	function Wl(a, b) {
		if (
			a === b ||
			!((!0 !== a && 1 !== a) || (!0 !== b && 1 !== b)) ||
			!((!1 !== a && 0 !== a) || (!1 !== b && 0 !== b))
		)
			return !0;
		if (a instanceof Object && b instanceof Object) {
			if (!Vl(a, b)) return !1;
		} else return !1;
		return !0;
	}
	function Xl(a) {
		this.data = a || [];
	}
	function Yl(a, b, c) {
		a = a.data[b];
		return null != a ? a : c;
	}
	function Zl(a, b) {
		return !!Yl(a, b, void 0);
	}
	function $l(a, b) {
		return Yl(a, b, 0);
	}
	function am(a, b) {
		return Yl(a, b, "");
	}
	function bm(a, b, c) {
		a = a.data;
		a[b] || (a[b] = []);
		return a[b][c];
	}
	function Y(a, b) {
		return a.data[b] ? a.data[b].length : 0;
	}
	Xl.prototype.qc = p("data");
	Xl.prototype.zj = function(a) {
		var b = this.data;
		this.data = a.data;
		a.data = b;
	};
	function cm(a) {
		this.data = a || [];
	}
	D(cm, Xl);
	function dm(a) {
		this.data = a || [];
	}
	D(dm, Xl);
	function em(a) {
		this.data = a || [];
	}
	D(em, Xl);
	function fm(a) {
		this.data = a || [];
	}
	D(fm, Xl);
	function gm(a) {
		this.data = a || [];
	}
	D(gm, Xl);
	function hm(a, b) {
		return new dm(bm(a, 2, b));
	}
	function im(a, b) {
		return new cm(bm(a, 5, b));
	}
	function jm() {
		this.A = null;
		this.a = Af(f, "gt-hl-layer", document.createTextNode(""));
		this.b = null;
		this.A && (If(this.a, this.A), km(this));
	}
	function lm(a, b, c, d, e) {
		var g = d || "gt-hl-text",
			h = a.A && (a.A.value || ag(a.A));
		km(a);
		Hf(a.a);
		if (b != c || e)
			0 < b && ((d = h.substring(0, b)), mm(a.a, d, 0, e)), b < c &&
				((d = h.substring(b, c)), (g = Af(ta, g)), mm(g, d, b, e), a.a.appendChild(g)), c < h.length &&
				((d = h.substring(c)), mm(a.a, d, c, e));
	}
	function km(a) {
		var b = a.A;
		var c = N(b),
			d = G && b.currentStyle;
		d && wf(mf(c).a) && d.width != Fa && d.height != Fa && !d.boxSizing
			? (
					(c = Fg(b, d.width, "width", "pixelWidth")),
					(b = Fg(b, d.height, "height", "pixelHeight")),
					(b = new lf(c, b))
				)
			: (
					(d = Ag(b)),
					(c = Dg(b)),
					(b = Eg(b)),
					(b = new lf(
						d.width - b.left - c.left - c.right - b.right,
						d.height - b.top - c.top - c.bottom - b.bottom,
					))
				);
		Bg(a.a, b);
		c = rg(a.A);
		b = a.a;
		d = c.x;
		c = c.y;
		var e = rg(b);
		d instanceof M && ((c = d.y), (d = d.x));
		lg(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
		b = Dg(a.A);
		O(a.a, Hb, b.left + "px");
		O(a.a, Ib, b.right + "px");
		a.a.dir = a.A.dir;
	}
	function mm(a, b, c, d) {
		for (var e = d || [], g = 0, h; (h = e[g]); g++)
			if (!(0 > h.Bc - c)) {
				if (h.Bc - c >= b.length) break;
				0 < h.Bc - c && ((d = b.substring(0, h.Bc - c)), nm(a, d));
				var k = h.className || "gt-hl-text";
				d = b.substring(h.Bc - c, h.xf - c);
				k = Af(ta, k);
				nm(k, d);
				a.appendChild(k);
				b = b.substring(h.xf - c);
				c = h.xf;
			}
		b && nm(a, b);
	}
	function nm(a, b) {
		b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
		for (var c = 0, d = b.length; c < d; c++) {
			if (0 < c) {
				var e = Af("BR");
				a.appendChild(e);
			}
			a.appendChild(document.createTextNode(String(b[c])));
		}
	}
	function om() {
		R.call(this);
	}
	D(om, R);
	om.prototype.restore = function(a) {
		var b = this.b();
		a || this.M();
		return b;
	};
	function pm(a, b, c, d, e) {
		this.g = !!b;
		this.node = null;
		this.a = 0;
		this.B = !1;
		this.G = !c;
		a && qm(this, a, d);
		this.f = void 0 != e ? e : this.a || 0;
		this.g && (this.f *= -1);
	}
	D(pm, Mi);
	function qm(a, b, c, d) {
		if ((a.node = b)) a.a = hc(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
		hc(d) && (a.f = d);
	}
	pm.prototype.h = function() {
		var a = this.g ? -1 : 1;
		this.a == a && ((this.a = -1 * a), (this.f += this.a * (this.g ? -1 : 1)));
	};
	pm.prototype.next = function() {
		if (this.B) {
			if (!this.node || (this.G && 0 == this.f)) throw Li;
			var a = this.node;
			var b = this.g ? -1 : 1;
			if (this.a == b) {
				var c = this.g ? a.lastChild : a.firstChild;
				c ? qm(this, c) : qm(this, a, -1 * b);
			} else (c = this.g ? a.previousSibling : a.nextSibling) ? qm(this, c) : qm(this, a.parentNode, -1 * b);
			this.f += this.a * (this.g ? -1 : 1);
		} else this.B = !0;
		a = this.node;
		if (!this.node) throw Li;
		return a;
	};
	pm.prototype.splice = function(a) {
		var b = this.node,
			c = this.g ? 1 : -1;
		this.a == c && ((this.a = -1 * c), (this.f += this.a * (this.g ? -1 : 1)));
		this.g = !this.g;
		pm.prototype.next.call(this);
		this.g = !this.g;
		c = jc(arguments[0]) ? arguments[0] : arguments;
		for (var d = c.length - 1; 0 <= d; d--) Jf(c[d], b);
		Kf(b);
	};
	function rm() {}
	function sm(a) {
		if (a.getSelection) return a.getSelection();
		a = a.document;
		var b = a.selection;
		if (b) {
			try {
				var c = b.createRange();
				if (c.parentElement) {
					if (c.parentElement().document != a) return null;
				} else if (!c.length || c.item(0).document != a) return null;
			} catch (d) {
				return null;
			}
			return b;
		}
		return null;
	}
	function tm(a) {
		for (var b = [], c = 0, d = a.Gc(); c < d; c++) b.push(a.Zb(c));
		return b;
	}
	function um(a) {
		return a.Oc() ? a.Fa() : a.Ua();
	}
	function vm(a) {
		return a.Oc() ? a.Ga() : a.Va();
	}
	rm.prototype.Oc = r(!1);
	function wm(a, b) {
		pm.call(this, a, b, !0);
	}
	D(wm, pm);
	function xm(a, b, c, d, e) {
		this.c = this.b = null;
		this.l = 0;
		if (a) {
			this.b = a;
			this.c = c;
			this.l = d;
			if (1 == a.nodeType && "BR" != a.tagName)
				if (((a = a.childNodes), (b = a[b]))) this.b = b;
				else {
					a.length && (this.b = Uc(a));
					var g = !0;
				}
			1 == c.nodeType && ((this.c = c.childNodes[d]) ? (this.l = 0) : (this.c = c));
		}
		pm.call(this, e ? this.c : this.b, e, !0);
		if (g)
			try {
				this.next();
			} catch (h) {
				if (h != Li) throw h;
			}
	}
	D(xm, wm);
	xm.prototype.o = p("b");
	xm.prototype.s = function() {
		return this.B && this.node == this.c && (!this.l || 1 != this.a);
	};
	xm.prototype.next = function() {
		if (this.s()) throw Li;
		return xm.m.next.call(this);
	};
	xm.prototype.h = function() {
		xm.m.h.apply(this);
		if (Pf(this.node, this.c)) throw Li;
	};
	function ym() {}
	function zm(a, b) {
		b = b.Cc();
		try {
			return 0 <= a.eb(b, 0, 0) && 0 >= a.eb(b, 1, 1);
		} catch (c) {
			if (!G) throw c;
			return !1;
		}
	}
	ym.prototype.Ma = function() {
		return new xm(this.Wa(), this.mb(), this.lb(), this.vb());
	};
	function Am(a) {
		this.a = a;
	}
	D(Am, ym);
	function Bm(a) {
		var b = N(a).createRange();
		if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
		else if (Cm(a)) {
			for (var c, d = a; (c = d.firstChild) && Cm(c); ) d = c;
			b.setStart(d, 0);
			for (d = a; (c = d.lastChild) && Cm(c); ) d = c;
			b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
		} else (c = a.parentNode), (a = Vc(c.childNodes, a)), b.setStart(c, a), b.setEnd(c, a + 1);
		return b;
	}
	function Dm(a, b, c, d) {
		var e = N(a).createRange();
		e.setStart(a, b);
		e.setEnd(c, d);
		return e;
	}
	u = Am.prototype;
	u.Cc = p("a");
	u.we = function() {
		return this.a.commonAncestorContainer;
	};
	u.Wa = function() {
		return this.a.startContainer;
	};
	u.mb = function() {
		return this.a.startOffset;
	};
	u.lb = function() {
		return this.a.endContainer;
	};
	u.vb = function() {
		return this.a.endOffset;
	};
	u.eb = function(a, b, c) {
		return this.a.compareBoundaryPoints(
			1 == c
				? 1 == b ? v.Range.START_TO_START : v.Range.START_TO_END
				: 1 == b ? v.Range.END_TO_START : v.Range.END_TO_END,
			a,
		);
	};
	u.Xa = function() {
		return this.a.collapsed;
	};
	u.ra = function() {
		return this.a.toString();
	};
	u.select = function(a) {
		var b = zf(N(this.Wa()));
		this.Rc(b.getSelection(), a);
	};
	u.Rc = function(a) {
		a.removeAllRanges();
		a.addRange(this.a);
	};
	function Em(a) {
		this.a = a;
	}
	D(Em, Am);
	Em.prototype.Rc = function(a, b) {
		!b || this.Xa() ? Em.m.Rc.call(this, a, b) : (a.collapse(this.lb(), this.vb()), a.extend(this.Wa(), this.mb()));
	};
	function Fm(a) {
		this.c = this.b = this.h = null;
		this.g = this.f = -1;
		this.a = a;
	}
	D(Fm, ym);
	function Gm(a) {
		var b = N(a).body.createTextRange();
		if (1 == a.nodeType) b.moveToElementText(a), Cm(a) && !a.childNodes.length && b.collapse(!1);
		else {
			for (var c = 0, d = a; (d = d.previousSibling); ) {
				var e = d.nodeType;
				if (3 == e) c += d.length;
				else if (1 == e) {
					b.moveToElementText(d);
					break;
				}
			}
			d || b.moveToElementText(a.parentNode);
			b.collapse(!d);
			c && b.move(Na, c);
			b.moveEnd(Na, a.length);
		}
		return b;
	}
	u = Fm.prototype;
	u.Cc = p("a");
	u.we = function() {
		if (!this.h) {
			var a = this.a.text,
				b = this.a.duplicate(),
				c = a.replace(/ +$/, "");
			(c = a.length - c.length) && b.moveEnd(Na, -c);
			c = b.parentElement();
			b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
			if (this.Xa() && 0 < b) return (this.h = c);
			for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; ) c = c.parentNode;
			for (; 1 == c.childNodes.length && c.innerText == Hm(c.firstChild) && Cm(c.firstChild); ) c = c.firstChild;
			0 == a.length && (c = Im(this, c));
			this.h = c;
		}
		return this.h;
	};
	function Im(a, b) {
		for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
			var g = c[d];
			if (Cm(g)) {
				var h = Gm(g),
					k = h.htmlText != g.outerHTML;
				if (a.Xa() && k ? 0 <= a.eb(h, 1, 1) && 0 >= a.eb(h, 1, 0) : a.a.inRange(h)) return Im(a, g);
			}
		}
		return b;
	}
	u.Wa = function() {
		this.b || ((this.b = Jm(this, 1)), this.Xa() && (this.c = this.b));
		return this.b;
	};
	u.mb = function() {
		0 > this.f && ((this.f = Km(this, 1)), this.Xa() && (this.g = this.f));
		return this.f;
	};
	u.lb = function() {
		if (this.Xa()) return this.Wa();
		this.c || (this.c = Jm(this, 0));
		return this.c;
	};
	u.vb = function() {
		if (this.Xa()) return this.mb();
		0 > this.g && ((this.g = Km(this, 0)), this.Xa() && (this.f = this.g));
		return this.g;
	};
	u.eb = function(a, b, c) {
		return this.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a);
	};
	function Jm(a, b, c) {
		c = c || a.we();
		if (!c || !c.firstChild) return c;
		for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
			var h = d ? e : g - e - 1,
				k = c.childNodes[h];
			try {
				var l = Lm(k);
			} catch (q) {
				continue;
			}
			var m = l.Cc();
			if (a.Xa())
				if (!Cm(k)) {
					if (0 == a.eb(m, 1, 1)) {
						a.f = a.g = h;
						break;
					}
				} else {
					if (zm(l, a)) return Jm(a, b, k);
				}
			else {
				if (zm(a, l)) {
					if (!Cm(k)) {
						d ? (a.f = h) : (a.g = h + 1);
						break;
					}
					return Jm(a, b, k);
				}
				if (0 > a.eb(m, 1, 0) && 0 < a.eb(m, 0, 1)) return Jm(a, b, k);
			}
		}
		return c;
	}
	function Km(a, b) {
		var c = 1 == b,
			d = c ? a.Wa() : a.lb();
		if (1 == d.nodeType) {
			d = d.childNodes;
			for (var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
				var k = d[h];
				if (
					!Cm(k) &&
					0 ==
						a.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Lm(k).Cc())
				)
					return c ? h : h + 1;
			}
			return -1 == h ? 0 : h;
		}
		a = a.a.duplicate();
		b = Gm(d);
		a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
		a = a.text.length;
		return c ? d.length - a : a;
	}
	function Hm(a) {
		return 3 == a.nodeType ? a.nodeValue : a.innerText;
	}
	u.Xa = function() {
		return 0 == this.a.compareEndPoints("StartToEnd", this.a);
	};
	u.ra = function() {
		return this.a.text;
	};
	u.select = function() {
		this.a.select();
	};
	function Mm(a) {
		this.a = a;
	}
	D(Mm, Am);
	Mm.prototype.Rc = function(a) {
		a.collapse(this.Wa(), this.mb());
		(this.lb() == this.Wa() && this.vb() == this.mb()) || a.extend(this.lb(), this.vb());
		0 == a.rangeCount && a.addRange(this.a);
	};
	function Nm(a) {
		this.a = a;
	}
	D(Nm, Am);
	Nm.prototype.eb = function(a, b, c) {
		return K("528")
			? Nm.m.eb.call(this, a, b, c)
			: this.a.compareBoundaryPoints(
					1 == c
						? 1 == b ? v.Range.START_TO_START : v.Range.END_TO_START
						: 1 == b ? v.Range.START_TO_END : v.Range.END_TO_END,
					a,
				);
	};
	Nm.prototype.Rc = function(a, b) {
		b
			? a.setBaseAndExtent(this.lb(), this.vb(), this.Wa(), this.mb())
			: a.setBaseAndExtent(this.Wa(), this.mb(), this.lb(), this.vb());
	};
	function Om(a) {
		return we ? new Fm(a, N(a.parentElement())) : J ? new Nm(a) : H ? new Em(a) : F ? new Mm(a) : new Am(a);
	}
	function Lm(a) {
		if (G && !Xd(9)) {
			var b = new Fm(Gm(a));
			if (Cm(a)) {
				for (var c, d = a; (c = d.firstChild) && Cm(c); ) d = c;
				b.b = d;
				b.f = 0;
				for (d = a; (c = d.lastChild) && Cm(c); ) d = c;
				b.c = d;
				b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
				b.h = a;
			} else (b.b = b.c = b.h = a.parentNode), (b.f = Vc(b.h.childNodes, a)), (b.g = b.f + 1);
			a = b;
		} else a = J ? new Nm(Bm(a)) : H ? new Em(Bm(a)) : F ? new Mm(Bm(a)) : new Am(Bm(a));
		return a;
	}
	function Cm(a) {
		return Ff(a) || 3 == a.nodeType;
	}
	function Pm() {
		this.a = this.c = this.f = this.b = this.h = null;
		this.g = !1;
	}
	D(Pm, rm);
	function Qm(a, b) {
		var c = new Pm();
		c.h = a;
		c.g = !!b;
		return c;
	}
	function Rm(a, b, c, d) {
		var e = new Pm();
		e.g = Sm(a, b, c, d);
		if (Of(a) && !Ff(a)) {
			var g = a.parentNode;
			b = Vc(g.childNodes, a);
			a = g;
		}
		Of(c) && !Ff(c) && ((g = c.parentNode), (d = Vc(g.childNodes, c)), (c = g));
		e.g ? ((e.b = c), (e.f = d), (e.c = a), (e.a = b)) : ((e.b = a), (e.f = b), (e.c = c), (e.a = d));
		return e;
	}
	u = Pm.prototype;
	u.kd = function() {
		return Tm(this).Cc();
	};
	u.Gc = r(1);
	u.Zb = function() {
		return this;
	};
	function Tm(a) {
		var b;
		if (!(b = a.h)) {
			b = a.Fa();
			var c = a.Ga(),
				d = a.Ua(),
				e = a.Va();
			if (G && !Xd(9)) {
				var g = b,
					h = c,
					k = d,
					l = e,
					m = !1;
				1 == g.nodeType && ((h = g.childNodes[h]), (m = !h), (g = h || g.lastChild || g), (h = 0));
				var q = Gm(g);
				h && q.move(Na, h);
				g == k && h == l
					? q.collapse(!0)
					: (
							m && q.collapse(!1),
							(m = !1),
							1 == k.nodeType && ((k = (h = k.childNodes[l]) || k.lastChild || k), (l = 0), (m = !h)),
							(g = Gm(k)),
							g.collapse(!m),
							l && g.moveEnd(Na, l),
							q.setEndPoint("EndToEnd", g)
						);
				l = new Fm(q);
				l.b = b;
				l.f = c;
				l.c = d;
				l.g = e;
				b = l;
			} else
				b = J
					? new Nm(Dm(b, c, d, e))
					: H ? new Em(Dm(b, c, d, e)) : F ? new Mm(Dm(b, c, d, e)) : new Am(Dm(b, c, d, e));
			b = a.h = b;
		}
		return b;
	}
	u.qd = function() {
		return Tm(this).we();
	};
	u.Fa = function() {
		return this.b || (this.b = Tm(this).Wa());
	};
	u.Ga = function() {
		return null != this.f ? this.f : (this.f = Tm(this).mb());
	};
	u.Ua = function() {
		return this.c || (this.c = Tm(this).lb());
	};
	u.Va = function() {
		return null != this.a ? this.a : (this.a = Tm(this).vb());
	};
	u.Oc = p("g");
	u.rd = function() {
		return Tm(this).Xa();
	};
	u.ra = function() {
		return Tm(this).ra();
	};
	u.Ma = function() {
		return new xm(this.Fa(), this.Ga(), this.Ua(), this.Va());
	};
	u.select = function() {
		Tm(this).select(this.g);
	};
	u.mf = function() {
		return new Um(this);
	};
	function Um(a) {
		R.call(this);
		this.a = a.Oc() ? a.Ua() : a.Fa();
		this.f = a.Oc() ? a.Va() : a.Ga();
		this.c = um(a);
		this.g = vm(a);
	}
	D(Um, om);
	Um.prototype.b = function() {
		return Rm(this.a, this.f, this.c, this.g);
	};
	Um.prototype.F = function() {
		Um.m.F.call(this);
		this.c = this.a = null;
	};
	function Vm() {}
	D(Vm, rm);
	function Wm() {
		this.c = this.b = this.a = null;
	}
	D(Wm, Vm);
	function Xm(a) {
		var b = new Wm();
		b.a = a;
		return b;
	}
	u = Wm.prototype;
	u.kd = function() {
		return this.a || document.body.createControlRange();
	};
	u.Gc = function() {
		return this.a ? this.a.length : 0;
	};
	u.Zb = function(a) {
		a = this.a.item(a);
		return Qm(Lm(a), void 0);
	};
	u.qd = function() {
		return Tf.apply(null, Ym(this));
	};
	u.Fa = function() {
		return Zm(this)[0];
	};
	u.Ga = r(0);
	u.Ua = function() {
		var a = Zm(this),
			b = Uc(a);
		return ad(a, function(a) {
			return Pf(a, b);
		});
	};
	u.Va = function() {
		return this.Ua().childNodes.length;
	};
	function Ym(a) {
		if (!a.b && ((a.b = []), a.a)) for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
		return a.b;
	}
	function Zm(a) {
		a.c ||
			(
				(a.c = Ym(a).concat()),
				a.c.sort(function(a, c) {
					return a.sourceIndex - c.sourceIndex;
				})
			);
		return a.c;
	}
	u.rd = function() {
		return !this.a || !this.a.length;
	};
	u.ra = r("");
	u.Ma = function() {
		return new $m(this);
	};
	u.select = function() {
		this.a && this.a.select();
	};
	u.mf = function() {
		return new an(this);
	};
	function an(a) {
		this.a = Ym(a);
	}
	D(an, om);
	an.prototype.b = function() {
		for (
			var a = (this.a.length ? N(this.a[0]) : document).body.createControlRange(), b = 0, c = this.a.length;
			b < c;
			b++
		)
			a.addElement(this.a[b]);
		return Xm(a);
	};
	an.prototype.F = function() {
		an.m.F.call(this);
		delete this.a;
	};
	function $m(a) {
		this.l = this.c = this.b = null;
		a && ((this.l = Zm(a)), (this.b = this.l.shift()), (this.c = Uc(this.l) || this.b));
		pm.call(this, this.b, !1, !0);
	}
	D($m, wm);
	$m.prototype.o = p("b");
	$m.prototype.s = function() {
		return !this.f && !this.l.length;
	};
	$m.prototype.next = function() {
		if (this.s()) throw Li;
		if (!this.f) {
			var a = this.l.shift();
			qm(this, a, 1, 1);
			return a;
		}
		return $m.m.next.call(this);
	};
	function bn() {
		this.Pa = null;
		this.a = [];
		this.b = [];
		this.f = this.c = null;
	}
	D(bn, Vm);
	function cn(a) {
		var b = new bn();
		b.b = a;
		b.a = Yc(a, function(a) {
			return a.kd();
		});
		return b;
	}
	u = bn.prototype;
	u.kd = function() {
		return this.a[0];
	};
	u.Gc = function() {
		return this.a.length;
	};
	u.Zb = function(a) {
		this.b[a] || (this.b[a] = Qm(Om(this.a[a]), void 0));
		return this.b[a];
	};
	u.qd = function() {
		if (!this.f) {
			for (var a = [], b = 0, c = this.Gc(); b < c; b++) a.push(this.Zb(b).qd());
			this.f = Tf.apply(null, a);
		}
		return this.f;
	};
	function dn(a) {
		a.c ||
			(
				(a.c = tm(a)),
				a.c.sort(function(a, c) {
					var b = a.Fa();
					a = a.Ga();
					var e = c.Fa();
					c = c.Ga();
					return b == e && a == c ? 0 : Sm(b, a, e, c) ? 1 : -1;
				})
			);
		return a.c;
	}
	u.Fa = function() {
		return dn(this)[0].Fa();
	};
	u.Ga = function() {
		return dn(this)[0].Ga();
	};
	u.Ua = function() {
		return Uc(dn(this)).Ua();
	};
	u.Va = function() {
		return Uc(dn(this)).Va();
	};
	u.rd = function() {
		return 0 == this.a.length || (1 == this.a.length && this.Zb(0).rd());
	};
	u.ra = function() {
		return Yc(tm(this), function(a) {
			return a.ra();
		}).join("");
	};
	u.Ma = function() {
		return new en(this);
	};
	u.select = function() {
		var a = sm(zf(N(G ? this.qd() : this.Fa())));
		a.removeAllRanges();
		for (var b = 0, c = this.Gc(); b < c; b++) a.addRange(this.Zb(b).kd());
	};
	u.mf = function() {
		return new fn(this);
	};
	function fn(a) {
		this.a = Yc(tm(a), function(a) {
			return a.mf();
		});
	}
	D(fn, om);
	fn.prototype.b = function() {
		var a = Yc(this.a, function(a) {
			return a.restore();
		});
		return cn(a);
	};
	fn.prototype.F = function() {
		fn.m.F.call(this);
		Wc(this.a, function(a) {
			a.M();
		});
		delete this.a;
	};
	function en(a) {
		this.b = null;
		this.c = 0;
		a &&
			(this.b = Yc(dn(a), function(a) {
				return Ni(a);
			}));
		pm.call(this, a ? this.o() : null, !1, !0);
	}
	D(en, wm);
	en.prototype.o = function() {
		return this.b[0].o();
	};
	en.prototype.s = function() {
		return this.b[this.c].s();
	};
	en.prototype.next = function() {
		try {
			var a = this.b[this.c],
				b = a.next();
			qm(this, a.node, a.a, a.f);
			return b;
		} catch (c) {
			if (c !== Li || this.b.length - 1 == this.c) throw c;
			this.c++;
			return this.next();
		}
	};
	function gn() {
		var a = sm(window);
		return a && hn(a);
	}
	function hn(a) {
		var b = !1;
		if (a.createRange)
			try {
				var c = a.createRange();
			} catch (e) {
				return null;
			}
		else if (a.rangeCount) {
			if (1 < a.rangeCount) {
				b = new bn();
				c = 0;
				for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
				return b;
			}
			c = a.getRangeAt(0);
			b = Sm(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
		} else return null;
		return (a = c) && a.addElement ? Xm(a) : Qm(Om(a), b);
	}
	function Sm(a, b, c, d) {
		if (a == c) return d < b;
		var e;
		if (1 == a.nodeType && b)
			if ((e = a.childNodes[b])) (a = e), (b = 0);
			else if (Pf(a, c)) return !0;
		if (1 == c.nodeType && d)
			if ((e = c.childNodes[d])) (c = e), (d = 0);
			else if (Pf(c, a)) return !1;
		return 0 < (Qf(a, c) || b - d);
	}
	function jn() {
		var a = gn();
		return null != a && !a.rd() && 0 < a.ra().length;
	}
	function kn() {
		this.b = [];
	}
	D(kn, Rh);
	ic(kn);
	function ln(a, b) {
		var c = a.b[b];
		if (!c) {
			switch (b) {
				case 0:
					c = a.ea() + "-highlight";
					break;
				case 1:
					c = a.ea() + "-checkbox";
					break;
				case 2:
					c = a.ea() + "-content";
			}
			a.b[b] = c;
		}
		return c;
	}
	u = kn.prototype;
	u.$b = r("menuitem");
	u.D = function(a) {
		var b = a.b.D(f, Uh(this, a).join(" "), mn(this, a.da(), a.b));
		nn(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
		return b;
	};
	u.yb = function(a) {
		return a && a.firstChild;
	};
	u.Oa = function(a, b) {
		var c = Mf(b),
			d = ln(this, 2);
		(c && oe(c, d)) || b.appendChild(mn(this, b.childNodes, a.b));
		oe(b, hb) && (a.sa(16, !0), a && b && nn(this, a, b, !0));
		return kn.m.Oa.call(this, a, b);
	};
	u.Ic = function(a, b) {
		var c = this.yb(a),
			d = on(this, a) ? c.firstChild : null;
		kn.m.Ic.call(this, a, b);
		d && !on(this, a) && c.insertBefore(d, c.firstChild || null);
	};
	function mn(a, b, c) {
		a = ln(a, 2);
		return c.D(f, a, b);
	}
	function on(a, b) {
		return (b = a.yb(b)) ? ((b = b.firstChild), (a = ln(a, 1)), !!b && Of(b) && oe(b, a)) : !1;
	}
	function nn(a, b, c, d) {
		Yh(a, c, b.Fc());
		Zh(a, b, c);
		d != on(a, c) &&
			(
				d ? L(c, hb) : qe(c, hb),
				(c = a.yb(c)),
				d ? ((a = ln(a, 1)), c.insertBefore(b.b.D(f, a), c.firstChild || null)) : c.removeChild(c.firstChild)
			);
	}
	u.Dc = function(a) {
		switch (a) {
			case 2:
				return ln(this, 0);
			case 16:
			case 8:
				return ib;
			default:
				return kn.m.Dc.call(this, a);
		}
	};
	u.od = function(a) {
		var b = ln(this, 0);
		switch (a) {
			case ib:
				return 16;
			case b:
				return 2;
			default:
				return kn.m.od.call(this, a);
		}
	};
	u.ea = r("goog-menuitem");
	function pn(a, b, c, d) {
		W.call(this, a, d || kn.$(), c);
		this.xa(b);
	}
	D(pn, W);
	u = pn.prototype;
	u.za = function() {
		var a = this.pa;
		return null != a ? a : this.gb();
	};
	u.xa = fc("pa");
	u.sa = function(a, b) {
		pn.m.sa.call(this, a, b);
		switch (a) {
			case 8:
				this.W & 16 && !b && ui(this, 16, !1) && xi(this, 16, !1);
				(a = this.j()) && this && a && nn(this.a, this, a, b);
				break;
			case 16:
				(a = this.j()) && this && a && nn(this.a, this, a, b);
		}
	};
	u.gb = function() {
		var a = this.da();
		return B(a)
			? (
					(a = Yc(a, function(a) {
						return Of(a) && (oe(a, "goog-menuitem-accel") || oe(a, "goog-menuitem-mnemonic-separator"))
							? ""
							: cg(a);
					}).join("")),
					yc(a)
				)
			: pn.m.gb.call(this);
	};
	u.dc = function(a) {
		var b = this.wb();
		if (b) {
			var c = b.K;
			b.K = null;
			if ((b = c && hc(a.clientX)))
				(b = new M(a.clientX, a.clientY)), (b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1);
			if (b) return;
		}
		pn.m.dc.call(this, a);
	};
	u.Kc = function(a) {
		return a.keyCode == this.Eg && this.mc(a) ? !0 : pn.m.Kc.call(this, a);
	};
	u.Uh = p("Eg");
	oi("goog-menuitem", function() {
		return new pn(null);
	});
	pn.prototype.Fc = function() {
		return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : pn.m.Fc.call(this);
	};
	pn.prototype.wb = function() {
		return W.prototype.wb.call(this);
	};
	pn.prototype.md = function() {
		return W.prototype.md.call(this);
	};
	function qn(a) {
		this.a = a;
	}
	ic(qn);
	function rn(a, b) {
		a && (a.tabIndex = b ? 0 : -1);
	}
	u = qn.prototype;
	u.D = function(a) {
		return a.b.D(f, sn(this, a).join(" "));
	};
	u.ye = function(a) {
		return a.tagName == f;
	};
	function tn(a, b, c) {
		c.id && Gh(b, c.id);
		var d = a.td(),
			e = !1,
			g = ne(c);
		g &&
			Wc(
				g,
				function(a) {
					a == d
						? (e = !0)
						: a &&
							(a == d + ba
								? b.oa(!1)
								: a == d + "-horizontal" ? un(b, pb) : a == d + "-vertical" && un(b, bc));
				},
				a,
			);
		e || L(c, d);
		vn(a, b, c);
		return c;
	}
	function vn(a, b, c) {
		if (c)
			for (var d = c.firstChild, e; d && d.parentNode == c; ) {
				e = d.nextSibling;
				if (1 == d.nodeType) {
					var g = a.ue(d);
					g && ((g.A = d), b.isEnabled() || g.oa(!1), b.sc(g, Nh(b), void 0), Lh(g, d));
				} else (d.nodeValue && "" != zc(d.nodeValue)) || c.removeChild(d);
				d = e;
			}
	}
	u.ue = function(a) {
		a: {
			a = ne(a);
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				if ((d = d in pi ? pi[d]() : null)) {
					a = d;
					break a;
				}
			}
			a = null;
		}
		return a;
	};
	u.ze = function(a) {
		a = a.j();
		zg(a, !0, H);
		G && (a.hideFocus = !0);
		var b = this.a;
		b && Kg(a, b);
	};
	u.td = r("goog-container");
	function sn(a, b) {
		a = a.td();
		var c = [a, b.Rb == pb ? a + "-horizontal" : a + "-vertical"];
		b.isEnabled() || c.push(a + ba);
		return c;
	}
	function wn() {}
	D(wn, Rh);
	ic(wn);
	wn.prototype.D = function(a) {
		return a.b.D(f, this.ea());
	};
	wn.prototype.Oa = function(a, b) {
		b.id && Gh(a, b.id);
		if ("HR" == b.tagName) {
			var c = b;
			b = this.D(a);
			If(b, c);
			Kf(c);
		} else L(b, this.ea());
		return b;
	};
	wn.prototype.Ic = ec();
	wn.prototype.ea = r(gb);
	function xn(a, b) {
		W.call(this, null, a || wn.$(), b);
		this.sa(1, !1);
		this.sa(2, !1);
		this.sa(4, !1);
		this.sa(32, !1);
		this.W = 1;
	}
	D(xn, W);
	xn.prototype.P = function() {
		xn.m.P.call(this);
		Kg(this.j(), "separator");
	};
	oi(gb, function() {
		return new xn();
	});
	function yn(a) {
		this.a = a || "menu";
	}
	D(yn, qn);
	ic(yn);
	u = yn.prototype;
	u.ye = function(a) {
		return "UL" == a.tagName || yn.m.ye.call(this, a);
	};
	u.ue = function(a) {
		return "HR" == a.tagName ? new xn() : yn.m.ue.call(this, a);
	};
	u.xc = function(a, b) {
		return Pf(a.j(), b);
	};
	u.td = r("goog-menu");
	u.ze = function(a) {
		yn.m.ze.call(this, a);
		Lg(a.j(), "haspopup", "true");
	};
	function zn(a, b, c) {
		this.c = a;
		this.f = b;
		this.s = c;
	}
	D(zn, Qk);
	zn.prototype.b = function(a, b, c) {
		Mk(this.c, this.f, a, b, void 0, c, this.s);
	};
	function An(a, b, c, d) {
		zn.call(this, a, b);
		this.l = c ? 5 : 0;
		this.g = d || void 0;
	}
	D(An, zn);
	An.prototype.h = fc("l");
	An.prototype.b = function(a, b, c, d) {
		var e = Mk(this.c, this.f, a, b, null, c, 10, d, this.g);
		if (e & 496) {
			var g = Bn(e, this.f);
			b = Bn(e, b);
			e = Mk(this.c, g, a, b, null, c, 10, d, this.g);
			e & 496 && ((g = Bn(e, g)), (b = Bn(e, b)), Mk(this.c, g, a, b, null, c, this.l, d, this.g));
		}
	};
	function Bn(a, b) {
		a & 48 && (b ^= 4);
		a & 192 && (b ^= 1);
		return b;
	}
	function Cn(a, b) {
		this.a = a instanceof M ? a : new M(a, b);
	}
	D(Cn, Qk);
	Cn.prototype.b = function(a, b, c, d) {
		var e = N(a);
		var g = e.body;
		e = e.documentElement;
		e = new M(g.scrollLeft || e.scrollLeft, g.scrollTop || e.scrollTop);
		g = this.a.x + e.x;
		e = this.a.y + e.y;
		var h = Nk(a);
		g -= h.x;
		e -= h.y;
		Pk(new M(g, e), a, b, c, null, null, d);
	};
	function Dn(a, b) {
		Cn.call(this, a, b);
	}
	D(Dn, Cn);
	Dn.prototype.c = 0;
	Dn.prototype.h = fc("c");
	Dn.prototype.b = function(a, b, c, d) {
		var e = ng(a);
		e = qg(e);
		var g = yf(mf(a).a);
		g = new M(this.a.x + g.scrollLeft, this.a.y + g.scrollTop);
		var h = b,
			k = Pk(g, a, h, c, e, 10, d);
		if (0 != (k & 496)) {
			if (k & 16 || k & 32) h ^= 4;
			if (k & 64 || k & 128) h ^= 1;
			k = Pk(g, a, h, c, e, 10, d);
			0 != (k & 496) && Pk(g, a, b, c, e, this.c, d);
		}
	};
	function En(a, b, c) {
		T.call(this, c);
		this.xb = b || qn.$();
		this.Rb = a || bc;
	}
	D(En, T);
	u = En.prototype;
	u.ic = null;
	u.Hc = null;
	u.xb = null;
	u.Rb = null;
	u.ga = !0;
	u.Kb = !0;
	u.Ib = !0;
	u.ia = -1;
	u.na = null;
	u.jc = !1;
	u.kb = null;
	function Fn(a) {
		return a.ic || a.j();
	}
	function Gn(a, b) {
		if (a.Ib) {
			var c = Fn(a),
				d = a.V;
			a.ic = b;
			var e = Fn(a);
			d && ((a.ic = c), Hn(a, !1), (a.ic = b), hi(In(a), e), Hn(a, !0));
		} else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
	}
	function In(a) {
		return a.Hc || (a.Hc = new gi(Fn(a)));
	}
	u.D = function() {
		this.A = this.xb.D(this);
	};
	u.sd = function() {
		return this.j();
	};
	u.xe = function(a) {
		return this.xb.ye(a);
	};
	u.T = function(a) {
		this.A = tn(this.xb, this, a);
		a.style.display == Db && (this.ga = !1);
	};
	u.P = function() {
		En.m.P.call(this);
		Mh(
			this,
			function(a) {
				a.V && Jn(this, a);
			},
			this,
		);
		var a = this.j();
		this.xb.ze(this);
		this.L(this.ga, !0);
		U(this)
			.w(this, "enter", this.He)
			.w(this, "highlight", this.Nc)
			.w(this, "unhighlight", this.Le)
			.w(this, "open", this.si)
			.w(this, "close", this.fi)
			.w(a, xb, this.Xh)
			.w(N(a), Bb, this.hi)
			.w(a, [xb, Bb, Ab, zb, Ua], this.di);
		this.Ib && Hn(this, !0);
	};
	function Hn(a, b) {
		var c = U(a),
			d = Fn(a);
		b
			? c.w(d, $a, a.ag).w(d, Ia, a.ud).w(In(a), "key", a.Ha)
			: c.ca(d, $a, a.ag).ca(d, Ia, a.ud).ca(In(a), "key", a.Ha);
	}
	u.Z = function() {
		this.Cb(-1);
		this.na && yi(this.na, !1);
		this.jc = !1;
		En.m.Z.call(this);
	};
	u.F = function() {
		En.m.F.call(this);
		this.Hc && (this.Hc.M(), (this.Hc = null));
		this.xb = this.na = this.kb = this.ic = null;
	};
	u.He = r(!0);
	u.Nc = function(a) {
		var b = Qh(this, a.target);
		if (-1 < b && b != this.ia) {
			var c = Kn(this);
			c && wi(c, !1);
			this.ia = b;
			c = Kn(this);
			this.jc && vi(c, !0);
			this.na && c != this.na && (c.ba & 64 ? yi(c, !0) : yi(this.na, !1));
		}
		b = this.j();
		null != a.target.j() && Lg(b, Ba, a.target.j().id);
	};
	u.Le = function(a) {
		a.target == Kn(this) && (this.ia = -1);
		this.j().removeAttribute("aria-activedescendant");
	};
	u.si = function(a) {
		(a = a.target) && a != this.na && a.wb() == this && (this.na && yi(this.na, !1), (this.na = a));
	};
	u.fi = function(a) {
		a.target == this.na && (this.na = null);
		var b = this.j(),
			c = a.target.j();
		b && a.target.W & 2 && c && ((a = ""), c && (a = c.id), Lg(b, Ba, a));
	};
	u.Xh = function(a) {
		this.Kb && (this.jc = !0);
		var b = Fn(this);
		b && Zf(b) ? b.focus() : a.b();
	};
	u.hi = function() {
		this.jc = !1;
	};
	u.di = function(a) {
		a: {
			var b = a.target;
			if (this.kb)
				for (var c = this.j(); b && b !== c; ) {
					var d = b.id;
					if (d in this.kb) {
						b = this.kb[d];
						break a;
					}
					b = b.parentNode;
				}
			b = null;
		}
		if (b)
			switch (a.type) {
				case xb:
					b.Lc(a);
					break;
				case Bb:
					b.dc(a);
					break;
				case Ab:
					b.De(a);
					break;
				case zb:
					b.Ke(a);
					break;
				case Ua:
					b.Mc(a);
			}
	};
	u.ag = ec();
	u.ud = function() {
		this.Cb(-1);
		this.jc = !1;
		this.na && yi(this.na, !1);
	};
	u.Ha = function(a) {
		return this.isEnabled() && this.N() && (0 != Nh(this) || this.ic) && this.Ae(a)
			? (a.b(), a.stopPropagation(), !0)
			: !1;
	};
	u.Ae = function(a) {
		var b = Kn(this);
		if ((b && typeof b.Ha == n && b.Ha(a)) || (this.na && this.na != b && typeof this.na.Ha == n && this.na.Ha(a)))
			return !0;
		if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
		switch (a.keyCode) {
			case 27:
				if (this.Ib) Fn(this).blur();
				else return !1;
				break;
			case 36:
				Ln(this);
				break;
			case 35:
				Mn(this);
				break;
			case 38:
				if (this.Rb == bc) Nn(this);
				else return !1;
				break;
			case 37:
				if (this.Rb == pb) Ph(this) ? On(this) : Nn(this);
				else return !1;
				break;
			case 40:
				if (this.Rb == bc) On(this);
				else return !1;
				break;
			case 39:
				if (this.Rb == pb) Ph(this) ? Nn(this) : On(this);
				else return !1;
				break;
			default:
				return !1;
		}
		return !0;
	};
	function Jn(a, b) {
		var c = b.j();
		c = c.id || (c.id = Fh(b));
		a.kb || (a.kb = {});
		a.kb[c] = b;
	}
	u.sc = function(a, b, c) {
		a.Uc |= 2;
		a.Uc |= 64;
		a.sa(32, !1);
		ri(a, !1);
		var d = a.wb() == this ? Qh(this, a) : -1;
		En.m.sc.call(this, a, b, c);
		a.V && this.V && Jn(this, a);
		a = d;
		-1 == a && (a = Nh(this));
		a == this.ia
			? (this.ia = Math.min(Nh(this) - 1, b))
			: a > this.ia && b <= this.ia ? this.ia++ : a < this.ia && b > this.ia && this.ia--;
	};
	u.removeChild = function(a, b) {
		if ((a = y(a) ? Jh(this, a) : a)) {
			var c = Qh(this, a);
			-1 != c && (c == this.ia ? (wi(a, !1), (this.ia = -1)) : c < this.ia && this.ia--);
			var d = a.j();
			d && d.id && this.kb && ((c = this.kb), (d = d.id), d in c && delete c[d]);
		}
		a = En.m.removeChild.call(this, a, b);
		ri(a, !0);
		return a;
	};
	function un(a, b) {
		if (a.j()) throw Error(ja);
		a.Rb = b;
	}
	u.N = p("ga");
	u.L = function(a, b) {
		if (b || (this.ga != a && this.dispatchEvent(a ? "show" : ob))) {
			this.ga = a;
			var c = this.j();
			c &&
				(
					P(c, a),
					this.Ib && rn(Fn(this), this.Kb && this.ga),
					b || this.dispatchEvent(this.ga ? "aftershow" : "afterhide")
				);
			return !0;
		}
		return !1;
	};
	u.isEnabled = p("Kb");
	u.oa = function(a) {
		this.Kb != a &&
			this.dispatchEvent(a ? "enable" : "disable") &&
			(
				a
					? (
							(this.Kb = !0),
							Mh(this, function(a) {
								a.hh ? delete a.hh : a.oa(!0);
							})
						)
					: (
							Mh(this, function(a) {
								a.isEnabled() ? a.oa(!1) : (a.hh = !0);
							}),
							(this.jc = this.Kb = !1)
						),
				this.Ib && rn(Fn(this), a && this.ga)
			);
	};
	function Pn(a, b) {
		b != a.Ib && a.V && Hn(a, b);
		a.Ib = b;
		a.Kb && a.ga && rn(Fn(a), b);
	}
	u.Cb = function(a) {
		(a = Oh(this, a)) ? wi(a, !0) : -1 < this.ia && wi(Kn(this), !1);
	};
	function Kn(a) {
		return Oh(a, a.ia);
	}
	function Ln(a) {
		Qn(
			a,
			function(a, c) {
				return (a + 1) % c;
			},
			Nh(a) - 1,
		);
	}
	function Mn(a) {
		Qn(
			a,
			function(a, c) {
				a--;
				return 0 > a ? c - 1 : a;
			},
			0,
		);
	}
	function On(a) {
		Qn(
			a,
			function(a, c) {
				return (a + 1) % c;
			},
			a.ia,
		);
	}
	function Nn(a) {
		Qn(
			a,
			function(a, c) {
				a--;
				return 0 > a ? c - 1 : a;
			},
			a.ia,
		);
	}
	function Qn(a, b, c) {
		c = 0 > c ? Qh(a, a.na) : c;
		var d = Nh(a);
		c = b.call(a, c, d);
		for (var e = 0; e <= d; ) {
			var g = Oh(a, c);
			if (g && a.Lf(g)) {
				a.Cb(c);
				break;
			}
			e++;
			c = b.call(a, c, d);
		}
	}
	u.Lf = function(a) {
		return a.N() && a.isEnabled() && !!(a.ba & 2);
	};
	function Rn() {}
	D(Rn, Rh);
	ic(Rn);
	Rn.prototype.ea = r(fb);
	function Sn(a, b, c) {
		W.call(this, a, c || Rn.$(), b);
		this.sa(1, !1);
		this.sa(2, !1);
		this.sa(4, !1);
		this.sa(32, !1);
		this.W = 1;
	}
	D(Sn, W);
	oi(fb, function() {
		return new Sn(null);
	});
	oi(gb, function() {
		return new xn();
	});
	function Tn(a, b) {
		En.call(this, bc, b || yn.$(), a);
		Pn(this, !1);
	}
	D(Tn, En);
	u = Tn.prototype;
	u.ee = !0;
	u.xc = function(a) {
		if (this.xb.xc(this, a)) return !0;
		for (var b = 0, c = Nh(this); b < c; b++) {
			var d = Oh(this, b);
			if (typeof d.xc == n && d.xc(a)) return !0;
		}
		return !1;
	};
	u.L = function(a, b, c) {
		(b = Tn.m.L.call(this, a, b)) && a && this.V && this.ee && Fn(this).focus();
		a && c && hc(c.clientX) ? (this.K = new M(c.clientX, c.clientY)) : (this.K = null);
		return b;
	};
	u.He = function(a) {
		this.ee && Fn(this).focus();
		return Tn.m.He.call(this, a);
	};
	u.Lf = function(a) {
		return a.isEnabled() && a.N() && !!(a.ba & 2);
	};
	u.T = function(a) {
		for (var b = this.xb, c = rf(this.b.a, f, b.td() + "-content", a), d = c.length, e = 0; e < d; e++)
			vn(b, this, c[e]);
		Tn.m.T.call(this, a);
	};
	u.Ae = function(a) {
		var b = Tn.m.Ae.call(this, a);
		b ||
			Mh(
				this,
				function(c) {
					!b && c.Uh && c.Eg == a.keyCode && (this.isEnabled() && this.Cb(Qh(this, c)), (b = c.Ha(a)));
				},
				this,
			);
		return b;
	};
	u.Cb = function(a) {
		Tn.m.Cb.call(this, a);
		var b = Oh(this, a);
		if (b) {
			a = this.j() || yf(document);
			var c = b.j(),
				d = a || yf(document);
			var e = rg(c);
			var g = rg(d),
				h = Eg(d);
			d == yf(document)
				? ((b = e.x - d.scrollLeft), (e = e.y - d.scrollTop), G && !Xd(10) && ((b += h.left), (e += h.top)))
				: ((b = e.x - g.x - h.left), (e = e.y - g.y - h.top));
			c = ug(c);
			h = d.clientHeight - c.height;
			g = d.scrollLeft;
			var k = d.scrollTop;
			g += Math.min(b, Math.max(b - (d.clientWidth - c.width), 0));
			k += Math.min(e, Math.max(e - h, 0));
			b = new M(g, k);
			a.scrollLeft = b.x;
			a.scrollTop = b.y;
		}
	};
	function Un(a, b) {
		Tn.call(this, a, b);
		this.ee = !0;
		Pn(this, !0);
		this.L(!1, !0);
		this.a = new Pi();
	}
	D(Un, Tn);
	u = Un.prototype;
	u.fh = !1;
	u.wg = 0;
	u.Da = null;
	u.T = function(a) {
		Un.m.T.call(this, a);
		(a = a.getAttribute("for") || a.htmlFor) && Vn(this, this.b.j(a), 1);
	};
	u.P = function() {
		Un.m.P.call(this);
		this.a.forEach(this.ad, this);
		var a = U(this);
		a.w(this, Aa, this.af);
		a.w(this.b.a, xb, this.bj, !0);
	};
	function Vn(a, b, c, d, e, g) {
		(b && Ri(a.a, mc(b))) ||
			((c = a.me(b, c, d, e, g)), a.V && a.ad(c), (b = rc(a.cj, b)), a.j() && U(a).w(a.j(), ub, b));
	}
	u.cj = function(a, b) {
		if (27 == b.keyCode) a.focus();
		else if ((a = Oh(this, this.ia))) {
			a = a.j();
			var c = new Tg(b.a, a);
			c.target = a;
			if (32 == b.keyCode || 13 == b.keyCode) Xg(a) ? Bh(a, ub, !1, c) : rh(a, ub, !1, c);
			32 == b.keyCode && this.ob();
		}
	};
	u.me = function(a, b, c, d, e) {
		if (!a) return null;
		b = { A: a, Zg: b, Yi: c, Ac: d ? Ua : xb, Xe: e };
		this.a.set(mc(a), b);
		return b;
	};
	u.ad = function(a) {
		U(this).w(a.A, a.Ac, this.Rd);
		a.Ac != Ua && U(this).w(a.A, ub, this.fj);
	};
	u.gd = function() {
		if (this.V) for (var a = this.a.Sa(), b = 0; b < a.length; b++) this.oe(this.a.get(a[b]));
		Ti(this.a);
	};
	u.oe = function(a) {
		U(this).ca(a.A, a.Ac, this.Rd);
	};
	u.xd = function(a, b, c) {
		b = x(a.Zg) ? new An(a.A, a.Zg, !0) : new Dn(b, c);
		b.h && b.h(5);
		var d = a.Yi;
		c = a.Xe;
		var e = a.A;
		a = this.N();
		var g;
		(g = this.N()) || (g = 150 > sc() - this.wg);
		g && this.fh
			? this.ob()
			: (
					(this.Da = e || null),
					this.dispatchEvent("beforeshow") &&
						(
							(d = "undefined" != typeof d ? d : 8),
							a || (this.j().style.visibility = nb),
							P(this.j(), !0),
							b.b(this.j(), d, c),
							a || (this.j().style.visibility = cc),
							this.Cb(-1),
							this.L(!0)
						)
				);
	};
	u.ob = function() {
		this.N() && (this.L(!1), this.N() || ((this.wg = sc()), (this.Da = null)));
	};
	u.af = function() {
		this.ob();
	};
	u.Rd = function(a) {
		Wn(this, a);
	};
	u.fj = function(a) {
		(32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode) || Wn(this, a);
		40 == a.keyCode && Ln(this);
	};
	function Wn(a, b) {
		for (var c = a.a.Sa(), d = 0; d < c.length; d++) {
			var e = a.a.get(c[d]);
			if (e.A == b.currentTarget) {
				a.xd(e, b.clientX, b.clientY);
				b.b();
				b.stopPropagation();
				break;
			}
		}
	}
	u.bj = function(a) {
		this.N() && !this.xc(a.target) && this.ob();
	};
	u.ud = function(a) {
		Un.m.ud.call(this, a);
		this.ob();
	};
	u.F = function() {
		Un.m.F.call(this);
		this.a && (Ti(this.a), delete this.a);
	};
	function Xn(a) {
		Ah.call(this);
		this.A = a;
		a = G ? bb : Ia;
		this.a = S(this.A, G ? ab : $a, this, !G);
		this.b = S(this.A, a, this, !G);
	}
	D(Xn, Ah);
	Xn.prototype.handleEvent = function(a) {
		var b = new Tg(a.a);
		b.type = a.type == ab || a.type == $a ? ab : bb;
		this.dispatchEvent(b);
	};
	Xn.prototype.F = function() {
		Xn.m.F.call(this);
		ph(this.a);
		ph(this.b);
		delete this.A;
	};
	function Yn(a, b) {
		this.a = a instanceof M ? a : new M(a, b);
	}
	D(Yn, Qk);
	Yn.prototype.b = function(a, b, c, d) {
		Mk(ng(a), 0, a, b, this.a, c, null, d);
	};
	function Zn(a) {
		this.a = new Pi();
		a && $n(this, a);
	}
	function ao(a) {
		var b = typeof a;
		return (b == Fb && a) || b == n ? "o" + mc(a) : b.substr(0, 1) + a;
	}
	u = Zn.prototype;
	u.add = function(a) {
		this.a.set(ao(a), a);
	};
	function $n(a, b) {
		b = Ui(b);
		for (var c = b.length, d = 0; d < c; d++) a.add(b[d]);
	}
	u.remove = function(a) {
		return this.a.remove(ao(a));
	};
	u.contains = function(a) {
		return Ri(this.a, ao(a));
	};
	u.Aa = function() {
		return this.a.Aa();
	};
	u.Ma = function() {
		return this.a.Ma(!1);
	};
	function bo(a, b, c) {
		this.la = c || (a ? mf(of(document, a)) : mf());
		Tl.call(this, this.la.D(f, { style: "position:absolute;display:none;" }));
		this.Gb = new M(1, 1);
		this.B = new Zn();
		this.G = null;
		a && co(this, a);
		null != b && this.Qa(b);
	}
	D(bo, Tl);
	var eo = [];
	u = bo.prototype;
	u.ya = null;
	u.className = "goog-tooltip";
	u.Xg = 500;
	u.tg = 0;
	function co(a, b) {
		b = of(document, b);
		a.B.add(b);
		S(b, Ab, a.Fe, !1, a);
		S(b, zb, a.cc, !1, a);
		S(b, yb, a.kg, !1, a);
		S(b, $a, a.dg, !1, a);
		S(b, Ia, a.cc, !1, a);
	}
	function fo(a, b) {
		if (b) (b = of(document, b)), go(a, b), a.B.remove(b);
		else {
			for (var c = a.B.Aa(), d = 0; (b = c[d]); d++) go(a, b);
			Ti(a.B.a);
		}
	}
	function go(a, b) {
		oh(b, Ab, a.Fe, !1, a);
		oh(b, zb, a.cc, !1, a);
		oh(b, yb, a.kg, !1, a);
		oh(b, $a, a.dg, !1, a);
		oh(b, Ia, a.cc, !1, a);
	}
	u.Qa = function(a) {
		Wf(this.j(), a);
	};
	u.bc = function(a) {
		var b = this.j();
		b && Kf(b);
		bo.m.bc.call(this, a);
		a
			? (
					(b = this.la.a.body),
					b.insertBefore(a, b.lastChild),
					Ng(this.G),
					(this.G = new Xn(this.j())),
					Mg(this, rc(Ng, this.G)),
					S(this.G, ab, this.Ub, void 0, this),
					S(this.G, bb, this.Vd, void 0, this)
				)
			: (Ng(this.G), (this.G = null));
	};
	u.ra = function() {
		return ag(this.j());
	};
	function ho(a) {
		return a.J ? (a.N() ? 4 : 1) : a.ha ? 3 : a.N() ? 2 : 0;
	}
	u.Ee = function() {
		if (!Pl.prototype.Ee.call(this)) return !1;
		if (this.b) for (var a, b = 0; (a = eo[b]); b++) Pf(a.j(), this.b) || a.L(!1);
		bd(eo, this) || eo.push(this);
		a = this.j();
		a.className = this.className;
		this.Ub();
		S(a, Ab, this.Fd, !1, this);
		S(a, zb, this.Ed, !1, this);
		io(this);
		return !0;
	};
	u.df = function() {
		cd(eo, this);
		for (var a = this.j(), b, c = 0; (b = eo[c]); c++) b.b && Pf(a, b.b) && b.L(!1);
		this.Zc && this.Zc.Vd();
		oh(a, Ab, this.Fd, !1, this);
		oh(a, zb, this.Ed, !1, this);
		this.b = void 0;
		0 == ho(this) && (this.La = !1);
		Pl.prototype.df.call(this);
	};
	u.Ze = function(a, b) {
		this.b == a &&
			this.B.contains(this.b) &&
			(this.La || !this.Hf
				? (
						this.L(!1),
						this.N() || ((this.b = a), (this.s = b || new jo(jf(this.Gb))), this.N() && this.nb(), this.L(!0))
					)
				: (this.b = void 0));
		this.J = void 0;
	};
	u.Xi = function(a) {
		this.ha = void 0;
		if (a == this.b) {
			a = this.la;
			a: {
				var b = a.a;
				try {
					var c = b && b.activeElement;
					break a;
				} catch (d) {}
				c = null;
			}
			c = c && this.j() && a.contains(this.j(), c);
			(null != this.ya && (this.ya == this.j() || this.B.contains(this.ya))) ||
				c ||
				(this.Yc && this.Yc.ya) ||
				this.L(!1);
		}
	};
	function ko(a, b) {
		var c = xf(a.la.a);
		a.Gb.x = b.clientX + c.x;
		a.Gb.y = b.clientY + c.y;
	}
	u.Fe = function(a) {
		var b = lo(this, a.target);
		this.ya = b;
		this.Ub();
		b != this.b && ((this.b = b), mo(this, b), no(this), ko(this, a));
	};
	function lo(a, b) {
		try {
			for (; b && !a.B.contains(b); ) b = b.parentNode;
			return b;
		} catch (c) {
			return null;
		}
	}
	u.kg = function(a) {
		ko(this, a);
		this.La = !0;
	};
	u.dg = function(a) {
		this.ya = a = lo(this, a.target);
		this.La = !0;
		if (this.b != a) {
			this.b = a;
			var b = new oo(this.ya);
			this.Ub();
			mo(this, a, b);
			no(this);
		}
	};
	function no(a) {
		if (a.b) for (var b, c = 0; (b = eo[c]); c++) Pf(b.j(), a.b) && ((b.Yc = a), (a.Zc = b));
	}
	u.cc = function(a) {
		var b = lo(this, a.target),
			c = lo(this, a.relatedTarget);
		b != c &&
			(
				b == this.ya && (this.ya = null),
				io(this),
				(this.La = !1),
				!this.N() || (a.relatedTarget && Pf(this.j(), a.relatedTarget)) ? (this.b = void 0) : this.Vd()
			);
	};
	u.Fd = function() {
		var a = this.j();
		this.ya != a && (this.Ub(), (this.ya = a));
	};
	u.Ed = function(a) {
		var b = this.j();
		this.ya != b || (a.relatedTarget && Pf(b, a.relatedTarget)) || ((this.ya = null), this.Vd());
	};
	function mo(a, b, c) {
		a.J || (a.J = Fk(C(a.Ze, a, b, c), a.Xg));
	}
	function io(a) {
		a.J && (Gk(a.J), (a.J = void 0));
	}
	u.Vd = function() {
		2 == ho(this) && (this.ha = Fk(C(this.Xi, this, this.b), this.tg));
	};
	u.Ub = function() {
		this.ha && (Gk(this.ha), (this.ha = void 0));
	};
	u.F = function() {
		this.L(!1);
		io(this);
		fo(this);
		this.j() && Kf(this.j());
		this.ya = null;
		delete this.la;
		bo.m.F.call(this);
	};
	function jo(a, b) {
		Yn.call(this, a, b);
	}
	D(jo, Yn);
	jo.prototype.b = function(a, b, c) {
		b = ng(a);
		b = qg(b);
		c = c ? new fg(c.top + 10, c.right, c.bottom, c.left + 10) : new fg(10, 0, 0, 10);
		Pk(this.a, a, 8, c, b, 9) & 496 && Pk(this.a, a, 8, c, b, 5);
	};
	function oo(a) {
		zn.call(this, a, 5);
	}
	D(oo, zn);
	oo.prototype.b = function(a, b, c) {
		var d = new M(10, 0);
		Mk(this.c, this.f, a, b, d, c, 9) & 496 && Mk(this.c, 4, a, 1, d, c, 5);
	};
	function po(a, b, c) {
		Un.call(this, b, c);
		this.h = new Pi();
		this.f = a || 5;
		this.l = null;
		this.o = !1;
		this.g = Array(this.f);
		this.H = Array(this.f);
		this.C = hl.$();
		this.Pa = ul.$();
		this.J = null;
		this.fh = !0;
	}
	D(po, Un);
	var qo = "";
	u = po.prototype;
	u.D = function() {
		po.m.D.call(this);
		for (var a = 0; a < this.f; ++a) {
			var b = new pn("");
			this.sc(b, Nh(this), !0);
		}
	};
	u.fa = function(a) {
		po.m.fa.call(this, a);
		L(this.j(), "alt-menu");
	};
	u.sf = function(a) {
		a = this.h.get(mc(a));
		for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
			var c = Oh(this, b);
			c.Mb(am(hm(a, b), 0));
			c.xa(b);
			c.L(!0, !0);
		}
		for (; b < this.f; ++b) Oh(this, b).L(!1);
	};
	function ro(a, b, c) {
		a.h.set(mc(b), c);
		Vn(a, b, 9, 8, !1, new fg(-2, 1, -2, 1));
	}
	u.gd = function() {
		po.m.gd.call(this);
		Ti(this.h);
	};
	u.L = function(a, b) {
		var c = this.Da;
		this.J = c;
		a && null != c ? (so(this, c), ml(this.C, "altshow"), vl(this.Pa, 207)) : null != this.l && lm(this.l, 0, 0);
		null != c && (a ? this.ne(c) : this.je(c));
		b = po.m.L.call(this, a, b);
		a && null != this.j() && zg(this.j(), !1);
		return b;
	};
	u.gb = function() {
		if (null != this.J) {
			var a = ag(this.J);
			if (null != a) return a;
		}
		return "";
	};
	u.ob = function() {
		po.m.ob.call(this);
		if (this.o)
			for (var a = 0; a < this.g.length; a++) {
				var b = this.g[a];
				Gk(b.f);
				b.g();
				b.l(-1);
				b.g();
				b.L(!1);
			}
	};
	u.ne = function(a) {
		L(a, "trans-target");
		a.title = "";
	};
	u.je = function(a) {
		qe(a, "trans-target");
		a.title = qo;
	};
	u.Ha = function(a) {
		if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
		var b = po.m.Ha.call(this, a);
		if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
			var c = xg(this.Da.parentNode.parentNode),
				d = null;
			if ((!c && 37 == a.keyCode) || (c && 39 == a.keyCode)) d = !1;
			if ((!c && 39 == a.keyCode) || (c && 37 == a.keyCode)) d = !0;
			if (
				this.fe(d) &&
				(
					(c = this.Da),
					(c = d
						? x(c.nextElementSibling) ? c.nextElementSibling : Nf(c.nextSibling, !0)
						: x(c.previousElementSibling) ? c.previousElementSibling : Nf(c.previousSibling, !1)) &&
						c != this.Da
				)
			)
				return this.ob(), this.Wg(d), this.xd(c ? this.a.get(mc(c)) : null, 0, 0), to(
					this,
				), a.b(), a.stopPropagation(), !0;
		}
		return b;
	};
	u.xd = function(a, b, c) {
		xg((a.A || this.Da).parentNode.parentNode) ? O(this.j(), Wa, Pb) : O(this.j(), Wa, "");
		if (this.o) for (var d = 0; d < this.g.length; d++) uo(this, d), Wf(this.g[d].c, "...");
		this.sf(a.A);
		po.m.xd.call(this, a, b, c);
	};
	function vo(a, b, c) {
		!a.o || b >= a.f || "" == c || (Wf(a.g[b].c, c), uo(a, b));
	}
	function uo(a, b) {
		Mk(Oh(a, b).j(), 12, a.g[b].j(), 8, new M(1, 0));
	}
	u.Nc = function(a) {
		po.m.Nc.call(this, a);
		var b = this.Da;
		null != b &&
			(
				ml(this.C, "altmenuhl"),
				vl(this.Pa, 209),
				so(this, b),
				(a = this.nd(a.target)),
				-1 != a &&
					a != this.f &&
					(
						Gk(this.H[a]),
						(this.H[a] = Fk(this.Vi, 300, this)),
						this.o &&
							(
								(b = this.g[a]),
								xg(this.Da.parentNode.parentNode)
									? (L(b.j(), Pb), O(b.j(), Wa, Pb))
									: (qe(b.j(), Pb), O(b.j(), Wa, "")),
								uo(this, a),
								Gk(b.f),
								0 == b.a ? (b.f = Fk(C(b.l, b, 1), 300)) : b.l(1)
							)
					)
			);
	};
	u.Vi = function() {
		ml(this.C, "altmenuhold");
		vl(this.Pa, 208);
	};
	u.Le = function(a) {
		po.m.Le.call(this, a);
		a = this.nd(a.target);
		-1 != a && a != this.f && (Gk(this.H[a]), this.o && this.g[a].o());
	};
	u.nd = function(a) {
		return Qh(this, a);
	};
	u.fe = r(!0);
	u.Wg = ec();
	u.me = function(a, b, c, d, e) {
		(a = po.m.me.call(this, a, b, c, d, e)) && a.Ac == xb && (a.Ac = Qa);
		return a;
	};
	u.ad = function(a) {
		po.m.ad.call(this, a);
		U(this).w(a.A, Ab, this.pg);
		U(this).w(a.A, zb, this.Cd);
		U(this).w(a.A, Ua, this.ng);
		U(this).w(a.A, yb, this.og);
	};
	u.oe = function(a) {
		po.m.oe.call(this, a);
		U(this).ca(a.A, Ab, this.pg);
		U(this).ca(a.A, zb, this.Cd);
		U(this).ca(a.A, Ua, this.ng);
		U(this).ca(a.A, yb, this.og);
	};
	function so(a, b) {
		if (null != a.l && (b = a.h.get(mc(b))) && ((a = a.l), a.b))
			for (var c = a.A && (a.A.value || ag(a.A)), d = -1, e = -1, g = !1, h = 0; h < Y(a.b, 5); h++) {
				var k = im(a.b, h);
				if (
					0 != Y(k, 2) &&
					(
						0 == $l(k, 5) &&
							(
								(g = c.indexOf(am(k, 4), e + 1)),
								0 <= g ? ((d = g), (e = d + am(k, 4).length), (g = !0)) : (g = !1)
							),
						im(a.b, h).qc() == b.qc()
					)
				) {
					if (g) {
						c = [];
						for (e = 0; e < Y(b, 3); ++e)
							c.push({ Bc: d + $l(new em(bm(b, 3, e)), 0), xf: d + $l(new em(bm(b, 3, e)), 1) });
						lm(a, 0, 0, void 0, c);
					} else (d = c.indexOf(am(b, 0))), 0 <= d && lm(a, d, d + am(b, 0).length);
					break;
				}
			}
	}
	function wo(a, b) {
		b
			? Oi(
					a.a.Ma(!1),
					function(a) {
						"" == this.b.$f(a.A) && (L(a.A, Yb), this.b.hb(a.A, "_"));
						return !0;
					},
					a,
				)
			: Oi(
					a.a.Ma(!1),
					function(a) {
						oe(a.A, Yb) && (qe(a.A, Yb), this.b.hb(a.A, ""));
						return !0;
					},
					a,
				);
	}
	u.pg = function(a) {
		jn() || (L(a.target, Zb), so(this, a.target), wo(this, !0), ml(this.C, "althighlight"), vl(this.Pa, 206));
	};
	u.Cd = function(a) {
		qe(a.target, Zb);
		null == this.l || this.N() || lm(this.l, 0, 0);
		wo(this, !1);
	};
	u.og = function(a) {
		jn() && this.Cd(a);
	};
	u.ng = function(a) {
		jn() || (this.Cd(a), Qm(Lm(a.target), void 0).select());
	};
	function to(a) {
		Oi(
			a.a.Ma(!1),
			function(a) {
				qe(a.A, Zb);
				return !0;
			},
			a,
		);
	}
	u.af = function(a) {
		a && a.currentTarget && a.currentTarget.Da && (a.g = a.currentTarget.Da);
		po.m.af.call(this, a);
	};
	u.Rd = function(a) {
		jn() ? to(this) : po.m.Rd.call(this, a);
	};
	function xo(a, b, c) {
		this.R = this.c = null;
		po.call(this, a, b, c);
	}
	D(xo, po);
	u = xo.prototype;
	u.Wg = fc("c");
	u.L = function(a, b) {
		b = xo.m.L.call(this, a, b);
		this.c = null;
		a ? (this.R = this.gb()) : null != this.R && this.R != this.gb() && this.dispatchEvent(new Sg(Aa, this));
		return b;
	};
	u.ne = function(a) {
		xo.m.ne.call(this, a);
		L(a, "trans-edit");
		a.contentEditable = !0;
		Gn(this, a);
		Fn(this).focus();
		$f(Fn(this), !0);
		U(this).w(a, ub, this.hg);
		U(this).w(a, zb, this.Dd);
		U(this).w(a, Ab, this.Dd);
		if (null != this.c) {
			var b = Qm(Lm(a), void 0);
			a = this.c ? b.Ga() : b.Va();
			b = um(b);
			Rm(b, a, b, a).select();
		}
	};
	u.je = function(a) {
		xo.m.je.call(this, a);
		qe(a, "trans-edit");
		a.contentEditable = !1;
		Fn(this) && $f(Fn(this), !1);
		U(this).ca(a, ub, this.hg);
		U(this).ca(a, zb, this.Dd);
		U(this).ca(a, Ab, this.Dd);
	};
	u.Dd = function() {
		var a = gn();
		null == a || (a.Fa() == a.Ua() && a.Ga() == a.Va()) || this.L(a.Fa() == a.Ua());
	};
	u.hg = function(a) {
		for (var b = 0; b < this.f; ++b) Oh(this, b).L(!1);
		if (13 == a.keyCode || 3 == a.keyCode)
			return null === Kn(this) ? (this.ob(), a.stopPropagation(), a.b(), !0) : !1;
		null === Kn(this) ||
			(!bi(a) && 37 != a.keyCode && 39 != a.keyCode) ||
			(this.Da.focus(), this.Cb(Qh(this, null)));
		return !1;
	};
	u.fe = function(a) {
		var b = gn();
		if (b.Fa() == b.Ua() && b.Ga() == b.Va()) {
			var c = vm(b);
			b = Qm(Lm(um(b)), void 0);
			if ((!a && c == b.Ga()) || (a && c == b.Va())) return !0;
		}
		return !1;
	};
	function yo(a, b, c) {
		po.call(this, a, b, c);
		this.c = null;
	}
	D(yo, po);
	u = yo.prototype;
	u.fa = function(a) {
		yo.m.fa.call(this, a);
		this.c = new zo("");
		this.sc(this.c, Nh(this), !0);
	};
	u.sf = function(a) {
		yo.m.sf.call(this, a);
		this.c.j().firstChild.value = this.b.$f(a);
	};
	u.L = function(a, b) {
		b = yo.m.L.call(this, a, b);
		a &&
			null != this.j() &&
			(Fn(this) == this.c.j().firstChild || Fn(this) == this.c.j().firstChild.nextSibling) &&
			wi(this.c, !0);
		return b;
	};
	u.Nc = function(a) {
		yo.m.Nc.call(this, a);
		a.target == this.c ? Gn(this, this.c.j().firstChild) : Gn(this, this.j());
		Fn(this).focus();
		Fn(this).tabIndex = 0;
	};
	u.nd = function(a) {
		return a == this.c ? -1 : yo.m.nd.call(this, a);
	};
	u.Ha = function(a) {
		return 9 == a.keyCode
			? (
					this.c.W & 2
						? (
								Fn(this) == this.c.j().firstChild
									? Gn(this, this.c.j().firstChild.nextSibling)
									: Gn(this, this.c.j().firstChild),
								Fn(this).focus(),
								(Fn(this).tabIndex = 0)
							)
						: wi(this.c, !0),
					a.b(),
					a.stopPropagation(),
					!0
				)
			: yo.m.Ha.call(this, a);
	};
	u.fe = function() {
		return null === Kn(this) || !(Kn(this) instanceof zo);
	};
	function zo(a, b, c) {
		W.call(this, a, c || Ao.$(), b);
		this.sa(4, !1);
	}
	D(zo, W);
	zo.prototype.Lc = function(a) {
		a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Aa);
	};
	zo.prototype.P = function() {
		zo.m.P.call(this);
		U(this).w(this.j().firstChild, ub, function(a) {
			32 == a.keyCode && a.stopPropagation();
		});
	};
	zo.prototype.gb = function() {
		return this.j().firstChild.value;
	};
	function Ao() {}
	D(Ao, Rh);
	ic(Ao);
	var Bo = "";
	Ao.prototype.D = function(a) {
		var b = a.b.D(oa, { value: a.da(), id: "alt-input-text", type: "text" }),
			c = a.b.D(oa, { value: Bo, id: "alt-input-submit", class: "", type: Ka });
		return a.b.D(f, { id: "alt-input" }, b, c);
	};
	J || G || Hd || (H && K("1.9"));
	function Co() {}
	D(Co, Rh);
	ic(Co);
	u = Co.prototype;
	u.$b = ec();
	u.Oa = function(a, b) {
		ri(a, !1);
		a.jb &= -256;
		a.sa(32, !1);
		Co.m.Oa.call(this, a, b);
		a.Mb(b.value);
		return b;
	};
	u.D = function(a) {
		ri(a, !1);
		a.jb &= -256;
		a.sa(32, !1);
		return a.b.D(ua, { class: Uh(this, a).join(" "), disabled: !a.isEnabled() }, a.da() || "");
	};
	u.vd = function(a) {
		return a.tagName == ua;
	};
	u.Ce = z;
	u.Be = function(a) {
		return a.isEnabled();
	};
	u.ac = z;
	u.Jc = function(a, b, c) {
		Co.m.Jc.call(this, a, b, c);
		(a = a.j()) && 1 == b && (a.disabled = c);
	};
	u.Za = z;
	u.Ic = function(a, b) {
		a && (a.value = b);
	};
	u.ea = r("goog-textarea");
	function Do(a, b, c) {
		W.call(this, a, b || Co.$(), c);
		ri(this, !1);
		this.$c = !0;
		(b = this.j()) && this.a.wd(b, !0);
		this.ec = "" != a;
		a || (this.Lb = "");
	}
	D(Do, W);
	var Eo = !(G && !Xd(11));
	u = Do.prototype;
	u.gc = !1;
	u.Hd = !1;
	u.ec = !1;
	u.pb = 0;
	u.Ag = 0;
	u.$e = 0;
	u.sg = !1;
	u.Pd = !1;
	u.pf = !1;
	u.nf = !1;
	u.nc = "";
	function Fo(a) {
		return a.c.top + a.c.bottom + a.o.top + a.o.bottom;
	}
	function Go(a) {
		var b = a.$e,
			c = a.j();
		b && c && a.Pd && (b -= Fo(a));
		return b;
	}
	function Ho(a) {
		a.$e = 50;
		Io(a);
	}
	function Jo(a) {
		a.Ag = 50;
		Io(a);
	}
	u.xa = function(a) {
		this.Mb(String(a));
	};
	u.za = function() {
		return this.j().value != this.nc || Ko(this) || this.ec ? this.j().value : "";
	};
	u.Mb = function(a) {
		Do.m.Mb.call(this, a);
		this.ec = "" != a;
		Io(this);
	};
	u.oa = function(a) {
		Do.m.oa.call(this, a);
		this.j().disabled = !a;
	};
	function Io(a) {
		a.j() && a.yd();
	}
	function Ko(a) {
		return "placeholder" in a.j();
	}
	function Lo(a) {
		a.nc && (Ko(a) ? (a.j().placeholder = a.nc) : !a.j() || a.ec || a.Hd || (L(a.j(), Wb), (a.j().value = a.nc)));
	}
	u.P = function() {
		Do.m.P.call(this);
		var a = this.j();
		O(a, { overflowY: nb, overflowX: Fa, boxSizing: Ja, MsBoxSizing: Ja, WebkitBoxSizing: Ja, MozBoxSizing: Ja });
		this.c = Dg(a);
		this.o = Eg(a);
		U(this).w(a, "scroll", this.yd).w(a, $a, this.yd).w(a, "keyup", this.yd).w(a, Bb, this.Zi).w(a, Ia, this.Dh);
		Lo(this);
		Io(this);
	};
	function Mo(a) {
		if (!a.sg) {
			var b = a.j().cloneNode(!1);
			O(b, {
				position: za,
				height: Fa,
				top: "-9999px",
				margin: "0",
				padding: "1px",
				border: "1px solid #000",
				overflow: nb,
			});
			a.b.a.body.appendChild(b);
			var c = b.scrollHeight;
			b.style.padding = "10px";
			var d = b.scrollHeight;
			a.pf = d > c;
			b.style.borderWidth = "10px";
			a.nf = b.scrollHeight > d;
			b.style.height = "100px";
			100 != b.offsetHeight && (a.Pd = !0);
			Kf(b);
			a.sg = !0;
		}
		b = a.j();
		isNaN(a.c.top) && ((a.c = Dg(b)), (a.o = Eg(b)));
		c = a.j().scrollHeight;
		var e = a.j();
		d = e.offsetHeight - e.clientHeight;
		if (!a.pf) {
			var g = a.c;
			d -= g.top + g.bottom;
		}
		a.nf || ((e = Eg(e)), (d -= e.top + e.bottom));
		c += 0 < d ? d : 0;
		a.Pd
			? (c -= Fo(a))
			: (a.pf || ((d = a.c), (c += d.top + d.bottom)), a.nf || ((a = Eg(b)), (c += a.top + a.bottom)));
		return c;
	}
	function No(a, b) {
		a.pb != b && ((a.pb = b), (a.j().style.height = b + "px"));
	}
	function Oo(a) {
		var b = a.j();
		b.style.height = Fa;
		var c = b.value.match(/\n/g) || [];
		b.rows = c.length + 1;
		a.pb = 0;
	}
	u.Dh = function() {
		Ko(this) || ((this.Hd = !1), "" == this.j().value && ((this.ec = !1), Lo(this)));
	};
	u.yd = function(a) {
		if (!this.gc) {
			var b = this.j();
			!Ko(this) &&
				a &&
				a.type == $a &&
				(
					b.value == this.nc && this.nc && !this.Hd && (qe(b, Wb), (b.value = "")),
					(this.Hd = !0),
					(this.ec = "" != b.value)
				);
			var c = !1;
			this.gc = !0;
			a = this.pb;
			if (b.scrollHeight) {
				var d = !1,
					e = !1,
					g = Mo(this),
					h = b.offsetHeight,
					k = Go(this);
				var l = this.Ag;
				var m = this.j();
				l && m && this.Pd && (l -= Fo(this));
				k && g < k
					? (No(this, k), (d = !0))
					: l && g > l
						? (No(this, l), (b.style.overflowY = ""), (e = !0))
						: h != g ? No(this, g) : this.pb || (this.pb = g);
				d || e || !Eo || (c = !0);
			} else Oo(this);
			this.gc = !1;
			c &&
				(
					(b = this.j()),
					this.gc ||
						(
							(this.gc = !0),
							(e = b.scrollHeight)
								? (
										(g = Mo(this)),
										(c = Go(this)),
										(c && g <= c) ||
											(
												(d = this.c),
												(b.style.paddingBottom = d.bottom + 1 + "px"),
												Mo(this) == g &&
													(
														(b.style.paddingBottom = d.bottom + e + "px"),
														(b.scrollTop = 0),
														(e = Mo(this) - e),
														e >= c ? No(this, e) : No(this, c)
													),
												(b.style.paddingBottom = d.bottom + "px")
											)
									)
								: Oo(this),
							(this.gc = !1)
						)
				);
			a != this.pb && this.dispatchEvent("resize");
		}
	};
	u.Zi = function() {
		var a = this.j(),
			b = a.offsetHeight;
		a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
		b != this.pb && (this.pb = this.$e = b);
	};
	function Po(a) {
		return function() {
			return a;
		};
	}
	function Qo(a, b) {
		for (var c = 0; c < b.length - 2; c += 3) {
			var d = b.charAt(c + 2);
			d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
			d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
			a = "+" == b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
		}
		return a;
	}
	function Ro(a, b) {
		var c = b.split(".");
		b = Number(c[0]) || 0;
		for (var d = [], e = 0, g = 0; g < a.length; g++) {
			var h = a.charCodeAt(g);
			128 > h
				? (d[e++] = h)
				: (
						2048 > h
							? (d[e++] = (h >> 6) | 192)
							: (
									55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512)
										? (
												(h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023)),
												(d[e++] = (h >> 18) | 240),
												(d[e++] = ((h >> 12) & 63) | 128)
											)
										: (d[e++] = (h >> 12) | 224),
									(d[e++] = ((h >> 6) & 63) | 128)
								),
						(d[e++] = (h & 63) | 128)
					);
		}
		a = b;
		for (e = 0; e < d.length; e++) (a += d[e]), (a = Qo(a, "+-a^+6"));
		a = Qo(a, "+-3^+b+-f");
		a ^= Number(c[1]) || 0;
		0 > a && (a = (a & 2147483647) + 2147483648);
		c = a % 1e6;
		return c.toString() + "." + (c ^ b);
	}
	var So = null;
	function To() {
		var a = Po(String.fromCharCode(116)),
			b = Po(String.fromCharCode(107));
		a = [a(), a()];
		a[1] = b();
		return a.join("");
	}
	function Uo(a, b) {
		this.b = a;
		this.a = "";
		b && (this.a = b);
		this.c = 0;
	}
	function Vo(a) {
		a = a.Aa("q").join("");
		if (null !== So) var b = So;
		else {
			var c = Po(String.fromCharCode(84));
			b = Po(String.fromCharCode(75));
			c = [c(), c()];
			c[1] = b();
			b = (So = window[c.join(b())] || "") || "";
		}
		return "&" + To() + "=" + Ro(a, b);
	}
	function Wo(a, b, c, d, e) {
		c = c.toString();
		c += Vo(d);
		d = d.toString();
		var g = ra;
		b += "?" + c;
		2e3 > b.length + d.length && ((g = "GET"), (b += "&" + d), (d = ""));
		++a.c;
		al(
			b,
			function(b) {
				--a.c;
				e(b);
			},
			g,
			d,
			void 0,
		);
	}
	Uo.prototype.f = function(a, b, c) {
		c = c.target;
		!c.Pc() || ("[" != c.Wb()[0] && "{" != c.Wb()[0])
			? (Xo(c), b && b(c.Yb()))
			: ((b = Yo(c, "handleSingleResult_")), B(b) && (b = new gm(b)), a(b));
	};
	Uo.prototype.g = function(a, b, c) {
		c = c.target;
		if (c.Pc()) {
			c = Yo(c, "handleTextResult_");
			var d = [];
			if (a) d.push(B(c) ? c[0] : c);
			else if (B(c)) for (a = 0; a < c.length; ++a) d.push(B(c[a]) ? c[a][0] : c[a]);
			b(d);
		} else Xo(c), b(null, c.Yf());
	};
	function Yo(a, b) {
		var c = a.Wb();
		a = { class: "trans.common.TranslationAPI", func: b, url: a.ve() };
		try {
			var d = JSON.parse(c);
		} catch (e) {
			throw ((d = hl.$()), (a.js = c), (a.error = e.message), d.log("jsonParseErr", a), e);
		}
		return d;
	}
	function Xo(a) {
		var b = hl.$(),
			c = a.ve();
		a = a.Wb();
		b.log("invalidResponse", { q: c.substring(0, 500), ql: c.length, r: a.substring(0, 500), rl: a.length });
	}
	function Zo(a, b) {
		this.a = [];
		this.b = b;
		for (var c = !0, d = a.length - 1; 0 <= d; d--) {
			var e = a[d] | 0;
			(c && e == b) || ((this.a[d] = e), (c = !1));
		}
	}
	var $o = {};
	function ap(a) {
		if (-128 <= a && 128 > a) {
			var b = $o[a];
			if (b) return b;
		}
		b = new Zo([a | 0], 0 > a ? -1 : 0);
		-128 <= a && 128 > a && ($o[a] = b);
		return b;
	}
	function bp(a) {
		if (isNaN(a) || !isFinite(a)) return cp;
		if (0 > a) return dp(bp(-a));
		for (var b = [], c = 1, d = 0; a >= c; d++) (b[d] = (a / c) | 0), (c *= 4294967296);
		return new Zo(b, 0);
	}
	var cp = ap(0),
		ep = ap(1),
		fp = ap(16777216);
	function gp(a) {
		if (-1 == a.b) return -gp(dp(a));
		for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
			var e = hp(a, d);
			b += (0 <= e ? e : 4294967296 + e) * c;
			c *= 4294967296;
		}
		return b;
	}
	Zo.prototype.toString = function(a) {
		a = a || 10;
		if (2 > a || 36 < a) throw Error("radix out of range: " + a);
		if (ip(this)) return "0";
		if (-1 == this.b) return "-" + dp(this).toString(a);
		for (var b = bp(Math.pow(a, 6)), c = this, d = ""; ; ) {
			var e = jp(c, b);
			c = kp(c, lp(e, b));
			var g = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
			c = e;
			if (ip(c)) return g + d;
			for (; 6 > g.length; ) g = "0" + g;
			d = "" + g + d;
		}
	};
	function hp(a, b) {
		return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b;
	}
	function ip(a) {
		if (0 != a.b) return !1;
		for (var b = 0; b < a.a.length; b++) if (0 != a.a[b]) return !1;
		return !0;
	}
	function mp(a, b) {
		a = kp(a, b);
		return -1 == a.b ? -1 : ip(a) ? 0 : 1;
	}
	function dp(a) {
		for (var b = a.a.length, c = [], d = 0; d < b; d++) c[d] = ~a.a[d];
		return new Zo(c, ~a.b).add(ep);
	}
	Zo.prototype.add = function(a) {
		for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
			var g = d + (hp(this, e) & 65535) + (hp(a, e) & 65535),
				h = (g >>> 16) + (hp(this, e) >>> 16) + (hp(a, e) >>> 16);
			d = h >>> 16;
			g &= 65535;
			h &= 65535;
			c[e] = (h << 16) | g;
		}
		return new Zo(c, c[c.length - 1] & -2147483648 ? -1 : 0);
	};
	function kp(a, b) {
		return a.add(dp(b));
	}
	function lp(a, b) {
		if (ip(a) || ip(b)) return cp;
		if (-1 == a.b) return -1 == b.b ? lp(dp(a), dp(b)) : dp(lp(dp(a), b));
		if (-1 == b.b) return dp(lp(a, dp(b)));
		if (0 > mp(a, fp) && 0 > mp(b, fp)) return bp(gp(a) * gp(b));
		for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
		for (e = 0; e < a.a.length; e++)
			for (var g = 0; g < b.a.length; g++) {
				var h = hp(a, e) >>> 16,
					k = hp(a, e) & 65535,
					l = hp(b, g) >>> 16,
					m = hp(b, g) & 65535;
				d[2 * e + 2 * g] += k * m;
				np(d, 2 * e + 2 * g);
				d[2 * e + 2 * g + 1] += h * m;
				np(d, 2 * e + 2 * g + 1);
				d[2 * e + 2 * g + 1] += k * l;
				np(d, 2 * e + 2 * g + 1);
				d[2 * e + 2 * g + 2] += h * l;
				np(d, 2 * e + 2 * g + 2);
			}
		for (e = 0; e < c; e++) d[e] = (d[2 * e + 1] << 16) | d[2 * e];
		for (e = c; e < 2 * c; e++) d[e] = 0;
		return new Zo(d, 0);
	}
	function np(a, b) {
		for (; (a[b] & 65535) != a[b]; ) (a[b + 1] += a[b] >>> 16), (a[b] &= 65535), b++;
	}
	function jp(a, b) {
		if (ip(b)) throw Error("division by zero");
		if (ip(a)) return cp;
		if (-1 == a.b) return -1 == b.b ? jp(dp(a), dp(b)) : dp(jp(dp(a), b));
		if (-1 == b.b) return dp(jp(a, dp(b)));
		if (30 < a.a.length) {
			if (-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
			for (var c = ep; 0 >= mp(b, a); ) (c = op(c, 1)), (b = op(b, 1));
			var d = pp(c, 1),
				e = pp(b, 1);
			b = pp(b, 2);
			for (c = pp(c, 2); !ip(b); ) {
				var g = e.add(b);
				0 >= mp(g, a) && ((d = d.add(c)), (e = g));
				b = pp(b, 1);
				c = pp(c, 1);
			}
			return d;
		}
		for (c = cp; 0 <= mp(a, b); ) {
			d = Math.max(1, Math.floor(gp(a) / gp(b)));
			e = Math.ceil(Math.log(d) / Math.LN2);
			e = 48 >= e ? 1 : Math.pow(2, e - 48);
			g = bp(d);
			for (var h = lp(g, b); -1 == h.b || 0 < mp(h, a); ) (d -= e), (g = bp(d)), (h = lp(g, b));
			ip(g) && (g = ep);
			c = c.add(g);
			a = kp(a, h);
		}
		return c;
	}
	function op(a, b) {
		var c = b >> 5;
		b %= 32;
		for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], g = 0; g < d; g++)
			e[g] = 0 < b ? (hp(a, g - c) << b) | (hp(a, g - c - 1) >>> (32 - b)) : hp(a, g - c);
		return new Zo(e, a.b);
	}
	function pp(a, b) {
		var c = b >> 5;
		b %= 32;
		for (var d = a.a.length - c, e = [], g = 0; g < d; g++)
			e[g] = 0 < b ? (hp(a, g + c) >>> b) | (hp(a, g + c + 1) << (32 - b)) : hp(a, g + c);
		return new Zo(e, a.b);
	}
	kp(op(ep, 32), ep);
	ap(65535);
	kp(op(ep, 128), ep);
	var qp = G || J || F || Hd || !1;
	J && K("534.16");
	G && K("7.0");
	H && K("1.8");
	J || (G && K("9"));
	G || Hd || F || (H && K("1.9"));
	H || (J && K("527"));
	G || Hd || (J && K("525"));
	J && K("531");
	J && K("528");
	(H && K("1.9")) || G || Hd || F || (J && K("531"));
	H || (J && K("526"));
	(ee && Lk("4")) || (fe && K("533")) || (H && K("2.0")) || (G && K("10")) || (F && Qc(zd(), "15"));
	F && K("11.10");
	ee && Lk("12");
	function rp(a, b, c, d, e, g, h, k) {
		T.call(this, a);
		this.g = h || null;
		null != this.g && this.g.h(C(this.ii, this));
		this.l = null;
		this.a = Fa;
		this.Ca = this.c = "";
		this.bb = new Uo("mt");
		this.Gb = !!b && qp && !G;
		this.K = null != e ? e : 0;
		this.f = null;
		this.Gb ? (this.f = new xo()) : (this.f = new yo());
		if (0 < this.K)
			for (a = this.f, a.o = !0, b = 0; b < a.f; b++)
				(h = Af(f, "goog-menu", "")), (e = Af(f, null, h)), (h = new Ul(e, h)), (a.g[
					b
				] = h), document.body.appendChild(e);
		this.f.fa(c);
		this.h = k || null;
		this.La = null != d ? d : -1;
		this.J = hl.$();
		this.C = new Pi();
		this.H = null;
		this.ab = "t";
		this.R = this.X = null;
		this.o = g || null;
		this.ha = !1;
		null != this.o && (this.o.c(C(this.tj, this)), this.o.a(C(this.ei, this)));
		this.qa = null;
		this.Pa = ul.$();
	}
	D(rp, T);
	function sp(a, b) {
		a.qa = b;
		a.f.l = b;
	}
	function tp(a) {
		a.H = qb;
		a.f.C.s = a.H || "";
	}
	function up(a) {
		var b = vp;
		a.J.f = b;
		a.ab = b;
	}
	function wp(a, b) {
		null != a.o && a.o.f();
		b && ((a.l = new gm(b)), (a.R = null));
		xp(a) && (a.g.b(), null != a.h && a.h.a(!1));
		if (a.l) {
			b = 0 != qf().length;
			a.b.Qc(a.j());
			a.f.gd();
			a.qa && (a.qa.b = a.l);
			for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++)
				yp(a.l, e) && (c += " "), (c += zp(a.l, e)), (d += Y(im(a.l, e), 2));
			if (0 != d) {
				c = [];
				d = !1;
				e = a.l;
				for (var g = "", h = 0; h < Y(e, 5); h++) {
					var k = im(e, h);
					null != k.data[4] && 0 < am(k, 4).length ? (g = am(k, 4)) : (new cm(k.qc()).data[4] = g);
				}
				for (e = 0; e < Y(a.l, 5); e++) {
					g = im(a.l, e);
					h = hm(g, 0);
					yp(a.l, e)
						? a.b.appendChild(a.j(), a.b.a.createTextNode(" "))
						: ("km" == a.c || "lo" == a.c) &&
							a.b.appendChild(
								a.j(),
								J
									? Ef()
									: F
										? document.createTextNode("&shy;")
										: G && K(8) ? document.createTextNode("&#8203;") : Ef(),
							);
					null != g.data[4] && 0 < am(g, 4).length && 0 == $l(g, 5) && c.push(am(g, 4));
					var l;
					k = zp(a.l, e);
					/^[\s\xa0]*$/.test(k)
						? 0 == k.length || (l = Ap(k))
						: (
								(l = a.b.D(ta, null, k)),
								(h = $l(h, 1)),
								0 <= a.La && h < a.La && L(l, "alt-low-conf"),
								Ri(a.C, a.a + "." + a.c + "." + am(g, 0)) &&
									(
										(h = a.C.get(a.a + "." + a.c + "." + am(g, 0))),
										h != Bp(g, 0) && (a.b.hb(l, h), L(l, Da), (d = !0), Cp(a, !0))
									),
								(l.title = qo),
								ro(a.f, l, g)
							);
					l && a.b.appendChild(a.j(), l);
				}
				if (null != a.g) {
					l = a.a + "." + a.c;
					for (e = 0; e < c.length; ++e) l += "." + c[e];
					Ri(a.C, l) && (Dp(a, !1), (d = !0), Ep(a, a.C.get(l)), null != a.h && a.h.a(!1), Cp(a, !0));
				}
				d || (Cp(a, !1), Dp(a, !1));
				(d || b) && a.dispatchEvent(Aa);
			}
		} else Cp(a, !1), Dp(a, !1);
	}
	function Ap(a) {
		a = Ec(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
		var b = document.createDocumentFragment(),
			c = 0;
		Wc(a, function(a) {
			0 != c && b.appendChild(Af("BR"));
			c++;
			"" != a && b.appendChild(document.createTextNode(String(Mc(a))));
		});
		return b;
	}
	function Fp(a, b) {
		if (xp(a)) return a.g.a();
		var c = [];
		if (a.j() && a.j().childNodes)
			for (var d = 0; d < a.j().childNodes.length; ++d) {
				var e = a.j().childNodes[d];
				c[d] = b && "BR" == e.tagName ? "\n" : ag(e);
			}
		return c.join("");
	}
	function Gp(a, b, c) {
		for (var d = 0; d < Y(a, 5); d++) {
			var e = im(a, d);
			if (Vl(b.data, e ? e.data : null)) {
				e = c;
				b = -1;
				c = Y(a, 5);
				for (var g = d; 0 <= g; g--)
					if (0 == $l(im(a, g), 5)) {
						b = g;
						break;
					}
				for (g = d + 1; g <= Y(a, 5); g++)
					if (0 == $l(im(a, g), 5)) {
						c = g;
						break;
					}
				if (null != e && e) d = Hp(a, b, c);
				else if (a) {
					e = d + 1;
					g = d;
					for (d = zp(a, d).length; 64 > d && (e != c || g != b); )
						e < c && (d += zp(a, e++).length + 1), 64 > d && g > b && (d += zp(a, --g).length + 1);
					d = Hp(a, g, e);
				} else d = "";
				return d;
			}
		}
		return "";
	}
	function Hp(a, b, c) {
		var d = [];
		d.push(zp(a, b));
		for (b += 1; b < c; b++) yp(a, b) && d.push(" "), d.push(zp(a, b));
		return d.join("");
	}
	function yp(a, b) {
		if (0 == b) return !1;
		var c = im(a, b),
			d = im(a, b - 1);
		if ((c = Zl(hm(c, 0), 2) && !Zl(hm(d, 0), 3)))
			(a = zp(a, b - 1)), (b = a.length - 1), (c = !(0 <= b && a.indexOf("\n", b) == b));
		return c;
	}
	u = rp.prototype;
	u.Xb = p("a");
	u.wa = p("c");
	u.D = function() {
		this.T(dg(this.b, "span"));
	};
	u.T = function(a) {
		rp.m.T.call(this, a);
		wp(this);
	};
	u.P = function() {
		rp.m.P.call(this);
		U(this).w(this.f, Aa, this.vi);
		null != this.h &&
			null != this.h.b &&
			(U(this).w(this.h.b, Qa, this.zi), xh(U(this), this.h.b, this.Pa.a, this.Pa));
		U(this).w(this.f, "show", this.ui);
		this.j() &&
			U(this).w(
				this.j(),
				ub,
				function(a) {
					32 == a.keyCode && a.stopPropagation();
				},
				!0,
			);
	};
	u.F = function() {
		rp.m.F.call(this);
		this.f.M();
	};
	u.ii = function() {
		this.o.oa(this.g.c());
		Cp(this, this.g.c());
	};
	u.vi = function(a) {
		if (a.type != ob || a.target == this.f)
			if (null == a.target && null != this.g)
				this.J.log("editpopupclk"), vl(this.Pa, 233), null != this.h && this.h.a(!0), this.g.l(
					Fp(this),
				), (this.ha = this.o.j().style.display != Db), this.o.reset(), null != this.h
					? this.o.oa(this.h.b.style.display != Db)
					: this.o.oa(!1), Cp(this, !1);
			else {
				var b = a.g;
				null == b && null != a.currentTarget && (b = a.currentTarget.Da);
				var c = a.target.gb();
				if (null != b && null != a.target) {
					var d = b,
						e = this.f.h.get(mc(d));
					this.b.hb(d, c);
					c == Bp(e, 0)
						? (qe(d, Da), 0 == qf().length && (Cp(this, !1), Dp(this, !1)))
						: (L(d, Da), Cp(this, !0), Dp(this, !0));
					null != this.C && this.C.set(this.a + "." + this.c + "." + am(e, 0), c);
					b = this.f.h.get(mc(b));
					null != this.C && this.C.set(this.a + "." + this.c + "." + am(b, 0), c);
					e = Bp(b, 0);
					d = Qh(this.f, a.target);
					e = {
						sl: this.a,
						tl: this.c,
						utrans: c,
						gtrans: e,
						index: d,
						ophrase: am(b, 0),
						osentence: am(b, 4),
						tsentence: Gp(this.l, b),
					};
					0 < Y(b, 2) && (e.confidence = $l(hm(b, 0), 1));
					if (a.target instanceof zo || -1 == d) e.manual = 1;
					for (var g in e) y(e[g]) && 64 < e[g].length && ((e.tr = 1), (e[g] = e[g].substr(0, 64)));
					this.J.log("usealt", e, this.H);
					a = new Sg("usealt");
					a.text = c;
					this.dispatchEvent(a);
					this.dispatchEvent(Aa);
				}
			}
	};
	function Ep(a, b) {
		if (a.j()) {
			null == a.X && (a.R = ed(a.b.Wh(a.j())));
			a.X = b;
			var c;
			if ((c = a.j().childNodes && 0 < a.j().childNodes.length))
				c = (c = a.j().childNodes[0]) ? Ri(a.f.a, mc(c)) : !1;
			c
				? (a.b.Qc(a.j()), a.f.gd(), (b = a.b.D(ta, Da, a.X)), a.b.appendChild(a.j(), b), ro(a.f, b, new cm()))
				: (a.j().innerHTML = Ec(b).replace(/(\r\n|\r|\n)/g, "<br>"));
		}
	}
	u.zi = function() {
		null != this.g && xp(this) ? this.g.g() : Ip(this);
		this.J.log("clkundo", void 0, this.H);
	};
	u.ei = function() {
		xp(this) &&
			(
				this.g.c() && (Ep(this, this.g.a()), (this.ha = !0)),
				this.g.b(),
				null != this.h && this.h.a(!1),
				this.g.c() && Cp(this, !0),
				this.o.oa(!0),
				P(this.o.j(), this.ha),
				this.dispatchEvent(Aa)
			);
		vl(this.Pa, 215);
		this.J.log("clkcancel", void 0, this.H);
	};
	u.ui = function() {
		var a = this.f.h.get(mc(this.f.Da));
		if (a) {
			if (0 < this.K) {
				var b = new aj("source=baf");
				if (1 == this.K) {
					for (var c = [], d = 0, e = Y(a, 2); d < e; d++) c.push(Bp(a, d));
					d = this.bb;
					var g = this.c,
						h = this.a,
						k = of(document, "hl").value,
						l = C(this.uj, this);
					e = d.a + da;
					var m = new aj(),
						q = new aj();
					m.set("client", d.b);
					m.set("sl", g);
					m.set("tl", h);
					m.set("hl", k);
					m.set("v", "1.0");
					b && m.Zf(b);
					(b = !B(c) || (B(c) && 1 == c.length)) ? q.set("q", c) : oj(q, "q", c);
					b = C(d.g, d, b, l);
					Wo(d, e, m, q, b);
				} else
					for (d = 0, e = Y(a, 2); d < e; d++) {
						g = Bp(a, d);
						c = this.bb;
						m = this.c;
						q = this.a;
						l = of(document, "hl").value;
						h = C(this.vj, this, d);
						k = b;
						var t = c.a + "/translate_a/single",
							w = new aj(),
							I = new aj();
						w.set("client", c.b);
						w.set("sl", m);
						w.set("tl", q);
						w.set("hl", l);
						oj(w, "dt", ["at", "t"]);
						k && w.Zf(k);
						I.set("q", g);
						Wo(c, t, w, I, C(c.f, c, h, void 0));
					}
			}
			b = new Sg(Qa);
			b.text = this.f.gb();
			b.h = Y(this.l, 5);
			this.dispatchEvent(b);
			b = {};
			b.confidence = $l(hm(a, 0), 1);
			this.a &&
				this.c &&
				this.Ca &&
				((b.segments = Y(this.l, 5)), (b.sl = this.a), (b.tl = this.c), (b.hl = this.Ca));
			this.J.log("phrsclk", b, this.H);
		}
	};
	u.vj = function(a, b) {
		if (1 == this.K || 1 < Y(b, 5)) {
			var c = am(new fm(bm(b, 0, 0)), 0);
			var d = 1;
			for (var e = Y(b, 0); d < e; d++) c += " " + am(new fm(bm(b, 0, d)), 0);
			d = c;
		} else if (1 == Y(b, 5)) {
			c = [];
			b = im(b, 0);
			d = 0;
			for (e = Math.min(this.K, Y(b, 2)); d < e; d++) c.push(Bp(b, d));
			d = c.join(", ");
		} else d = "...";
		vo(this.f, a, d);
	};
	u.uj = function(a) {
		for (var b = 0; b < a.length; b++) vo(this.f, b, a[b]);
	};
	function Ip(a) {
		xp(a) && (null != a.h && a.h.a(!1), a.g.b());
		Ti(a.C);
		a.X = null;
		wp(a);
		a.dispatchEvent(Aa);
	}
	function Cp(a, b) {
		null != a.h && null != a.h.b && P(a.h.b, b);
	}
	function Dp(a, b) {
		null != a.o && (b && a.o.reset(), P(a.o.j(), b));
	}
	u.tj = function() {
		var a = [],
			b;
		null != this.R ? (b = this.R) : (b = Lf(this.j()));
		for (var c = { segment: [] }, d = null, e = 0, g = 0; g < b.length; g++) {
			var h = im(this.l, g);
			if (null != h) {
				var k = ag(b[g]);
				a: {
					var l = k;
					var m = h;
					if (0 == Y(m, 2)) l = 0;
					else {
						for (var q = 0; q < Y(m, 2); ++q)
							if (l == Bp(m, q)) {
								l = q;
								break a;
							}
						l = -1;
					}
				}
				m = zc(am(h, 4));
				q = Gp(this.l, h, !0);
				if (0 != m.length) {
					if (0 == a.length || m != a[a.length - 1])
						a.push(m), (d = Jp(this, a.length - 1)), (e = 0), (d = {
							source: m,
							original_target: q,
							segment_source: d,
							phrase_correction: [],
						}), c.segment.push(d);
					if (0 != l)
						for (
							m = Bp(h, 0).length, l = {
								alternative_index: l,
								edited_phrase: k,
								source_span: [],
								target_span: [{ start: e, end: e + m }],
							}, d.phrase_correction.push(l), m = 0;
							m < Y(h, 3);
							++m
						)
							(q = new em(bm(h, 3, m))), l.source_span.push({ start: $l(q, 0), end: $l(q, 1) });
					e += k.length;
					Zl(hm(h, 0), 2) && e++;
				}
			}
		}
		if (xp(this)) {
			this.dispatchEvent(Aa);
			this.g.b();
			null != this.h && this.h.a(!1);
			Cp(this, !0);
			this.g.a() != Fp(this) && Ep(this, this.g.a());
			b = this.a + "." + this.c;
			for (g = 0; g < a.length; ++g) b += "." + a[g];
			a = this.g.a();
			this.C.set(b, a);
			c.contains_full_edit = !0;
		}
		c.edited_target = Fp(this, !0);
		a = new aj();
		a.set("ue", JSON.stringify(c));
		a.set("sl", this.a);
		a.set("tl", this.c);
		al(ea + this.ab, void 0, ra, a.toString(), 1e4);
	};
	function Jp(a, b) {
		if (b < Y(a.l, 0))
			switch (Yl(new fm(bm(a.l, 0, b)), 4, 0)) {
				case 0:
					return 1;
				case 1:
					return 2;
				case 2:
					return 3;
				case 10:
					return 4;
				case 3:
					return 5;
			}
		return 0;
	}
	function xp(a) {
		return null != a.g && a.g.f();
	}
	function zp(a, b) {
		a = im(a, b);
		return 0 == Y(a, 2) ? am(a, 0) : Bp(a, 0);
	}
	function Bp(a, b) {
		return am(hm(a, b), 0);
	}
	var Kp = window.google && google.translate && google.translate._const;
	Kp ||
		(Kp = {
			_cac: "",
			_cam: "",
			_cest: new Date(),
			_cjlc: "",
			_cl: "",
			_cuc: "",
			_cnad: !1,
			_cnal: {},
			yk: "",
			_pah: "",
			_pas: "",
			_pbi: "",
			_pci: "",
			_phf: "",
			_pli: "",
			_plla: "",
			_pmi: "",
			_ps: "",
			_pta: "",
			_puh: "",
		});
	var Lp = (window.google && window.google.translate && window.google.translate.v) || "",
		Mp = Kp._cl || "en",
		Np = Kp._cuc,
		Op = Kp._cnad,
		Pp = Kp._cest,
		Qp = Kp._cnal || {},
		Rp = "lib" == Kp._cam ? 1 : 0,
		Sp = (Kp._cac || "te") + (1 == Rp ? "_lib" : ""),
		Tp = (function() {
			function a(a) {
				return function() {
					return a;
				};
			}
			var b = a(String.fromCharCode(116)),
				c = a(String.fromCharCode(107));
			b = [b(), b()];
			b[1] = c();
			return Kp["_c" + b.join(c())] || "";
		})(),
		Up = Kp._pah || "",
		Vp = Kp._pas || "https://",
		Wp = Kp._pbi || "",
		Xp = Kp._pci || "",
		Yp = Kp._plla || "",
		Zp = Kp._pli || "",
		$p = Kp._ps || "",
		aq = Kp._puh || "",
		bq = "//" + aq + ea + Sp,
		cq = "https://www.google.com/support/translate" + ("en" == Mp ? "" : "#googtrans/en/" + Mp);
	function dq(a) {
		for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
		return b;
	}
	function eq(a) {
		this.b = a ? [a] : [];
		this.a = [0];
		this.c = !1;
	}
	eq.prototype.register = function(a) {
		if (this.c) return a || z;
		this.a.push(0);
		var b = this.a.length - 1;
		return C(function() {
			this.a[b]++;
			a && a.apply(null, arguments);
			fq(this);
		}, this);
	};
	eq.prototype.fb = function(a) {
		return this.c
			? a
			: C(function() {
					if (this.c) a.apply(null, arguments);
					else {
						var b = arguments;
						this.b.push(function() {
							a.apply(null, b);
						});
					}
				}, this);
	};
	eq.prototype.finish = function() {
		this.a[0] = 1;
		fq(this);
	};
	function fq(a) {
		for (var b = 0; b < a.a.length; ++b) if (0 == a.a[b]) return;
		a.c = !0;
		for (b = 0; b < a.b.length; ++b) {
			var c = a.b[b];
			a.b[b] = null;
			c.call();
		}
		a.b = [];
		a.a = [];
	}
	function gq(a) {
		this.c = a;
		this.b = this.a = !1;
	}
	function hq(a, b) {
		return C(function() {
			b && b.apply(null, arguments);
			this.b ? this.a || (this.c.call(), (this.a = !0)) : (this.a = !0);
		}, a);
	}
	gq.prototype.finish = function() {
		this.b || ((this.b = !0), this.a && this.c.call());
	};
	function iq(a, b, c, d) {
		this.a = b;
		this.h = a;
		this.s = c || 0;
		this.l = d || 0;
		this.b = this.c = !1;
	}
	function jq(a) {
		a.c || a.g();
	}
	iq.prototype.g = function() {
		(this.c = (this.b = !!this.h.call()) || 0 >= --this.l)
			? (this.a.call(null, this.b), (this.f = 0))
			: (this.f = window.setTimeout(C(this.g, this), this.s));
	};
	iq.prototype.cancel = function() {
		this.f && window.clearTimeout(this.f);
		this.c = !0;
		this.a.call(null, this.b);
	};
	function kq(a, b) {
		return function() {
			a.dispatchEvent(b);
		};
	}
	function lq(a) {
		a = zc(a).toLowerCase().replace("_", "-");
		if ("zh-cn" == a) return "zh-CN";
		if ("zh-tw" == a) return "zh-TW";
		var b = a.indexOf("-");
		a = 0 <= b ? a.substring(0, b) : a;
		return "zh" == a ? "zh-CN" : a;
	}
	function mq(a) {
		var b = [],
			c;
		for (c in a)
			if (a[c] !== Object.prototype[c]) {
				var d = Cc(c);
				if (A(a[c]) == Ea) for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + Cc(a[c][e]));
				else b.push(d + "=" + Cc(a[c]));
			}
		return b.join("&");
	}
	function nq(a, b) {
		b = b || {};
		b.nca = a;
		b.client = Sp;
		Lp && (b.logld = "v" + Lp);
		var c = new Image();
		c.src = "//" + aq + "/gen204?" + mq(b);
		c.onload = function() {
			c.onload = null;
		};
	}
	function oq(a, b) {
		if ((G || F) && window.location.hostname != document.domain) {
			pq = pq ? pq + 1 : 1;
			var c = "f" + pq + "_" + sc().toString(36);
			window[c] = function() {
				window[c] = void 0;
				a.src = tb;
				b &&
					window.setTimeout(function() {
						b();
					}, 0);
			};
			a.src =
				"javascript:void(document.write(\"<script>document.domain='" +
				document.domain +
				"';parent['" +
				c +
				"']();\x3c/script>\"))";
		} else b && b();
	}
	var pq;
	function qq() {
		var a = {};
		try {
			for (var b in Object.prototype) {
				var c = Object.prototype[b];
				delete Object.prototype[b];
				a[b] = c;
			}
		} catch (d) {
			return {};
		}
		return a;
	}
	function rq(a) {
		for (var b in a) Object.prototype[b] = a[b];
	}
	function sq(a) {
		for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
		return !0;
	}
	function tq(a, b) {
		return a != Fa && "zh-CN" != a && a == b;
	}
	var uq, vq, wq;
	(function() {
		function a(a, c, g) {
			var d = Array.prototype.slice.call(arguments);
			d.splice(0, 2);
			d = "l" + a.toString(16) + "i" + c.toString(16) + (d.length ? "-" + d.join("_") : "");
			b ? b.push(d) : nq(d);
		}
		var b = null,
			c = null;
		uq = function(b, c, g) {
			for (var d in g) g[d] !== Object.prototype[d] && (c[d] = kc(g[d]) ? g[d] : rc(a, b, Number(g[d])));
		};
		vq = function() {
			b && wq();
			b = [];
			c = S(window, "unload", function() {
				wq();
			});
		};
		wq = function() {
			c && (ph(c), (c = null));
			b && b.length && nq(b.join(""));
			b = null;
		};
	})(); /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
	function xq(a, b) {
		this.g = [];
		this.C = a;
		this.G = b || null;
		this.f = this.a = !1;
		this.c = void 0;
		this.o = this.I = this.l = !1;
		this.h = 0;
		this.b = null;
		this.s = 0;
	}
	xq.prototype.cancel = function(a) {
		if (this.a) this.c instanceof xq && this.c.cancel();
		else {
			if (this.b) {
				var b = this.b;
				delete this.b;
				a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel());
			}
			this.C ? this.C.call(this.G, this) : (this.o = !0);
			this.a || ((a = new yq()), zq(this), Aq(this, !1, a));
		}
	};
	xq.prototype.B = function(a, b) {
		this.l = !1;
		Aq(this, a, b);
	};
	function Aq(a, b, c) {
		a.a = !0;
		a.c = c;
		a.f = !b;
		Bq(a);
	}
	function zq(a) {
		if (a.a) {
			if (!a.o) throw new Cq();
			a.o = !1;
		}
	}
	function Dq(a, b, c, d) {
		a.g.push([b, c, d]);
		a.a && Bq(a);
	}
	xq.prototype.then = function(a, b, c) {
		var d,
			e,
			g = new pk(function(a, b) {
				d = a;
				e = b;
			});
		Dq(this, d, function(a) {
			a instanceof yq ? g.cancel() : e(a);
		});
		return g.then(a, b, c);
	};
	nk(xq);
	function Eq(a) {
		return Zc(a.g, function(a) {
			return kc(a[1]);
		});
	}
	function Bq(a) {
		if (a.h && a.a && Eq(a)) {
			var b = a.h,
				c = Fq[b];
			c && (v.clearTimeout(c.ja), delete Fq[b]);
			a.h = 0;
		}
		a.b && (a.b.s--, delete a.b);
		b = a.c;
		for (var d = (c = !1); a.g.length && !a.l; ) {
			var e = a.g.shift(),
				g = e[0],
				h = e[1];
			e = e[2];
			if ((g = a.f ? h : g))
				try {
					var k = g.call(e || a.G, b);
					x(k) && ((a.f = a.f && (k == b || k instanceof Error)), (a.c = b = k));
					if (ok(b) || (typeof v.Promise === n && b instanceof v.Promise)) (d = !0), (a.l = !0);
				} catch (l) {
					(b = l), (a.f = !0), Eq(a) || (c = !0);
				}
		}
		a.c = b;
		d && ((k = C(a.B, a, !0)), (d = C(a.B, a, !1)), b instanceof xq ? (Dq(b, k, d), (b.I = !0)) : b.then(k, d));
		c && ((b = new Gq(b)), (Fq[b.ja] = b), (a.h = b.ja));
	}
	function Cq() {
		uc.call(this);
	}
	D(Cq, uc);
	Cq.prototype.message = "Deferred has already fired";
	Cq.prototype.name = "AlreadyCalledError";
	function yq() {
		uc.call(this);
	}
	D(yq, uc);
	yq.prototype.message = "Deferred was canceled";
	yq.prototype.name = "CanceledError";
	function Gq(a) {
		this.ja = v.setTimeout(C(this.a, this), 0);
		this.hd = a;
	}
	Gq.prototype.a = function() {
		delete Fq[this.ja];
		throw this.hd;
	};
	var Fq = {};
	function Hq(a, b) {
		var c = b || {};
		b = c.document || document;
		var d = Ee(a),
			e = document.createElement(sa),
			g = { Sg: e, Eb: void 0 },
			h = new xq(Iq, g),
			k = null,
			l = null != c.timeout ? c.timeout : 5e3;
		0 < l &&
			(
				(k = window.setTimeout(function() {
					Jq(e, !0);
					var a = new Kq(1, "Timeout reached for loading script " + d);
					zq(h);
					Aq(h, !1, a);
				}, l)),
				(g.Eb = k)
			);
		e.onload = e.onreadystatechange = function() {
			(e.readyState && "loaded" != e.readyState && e.readyState != Sa) ||
				(Jq(e, c.Gh || !1, k), zq(h), Aq(h, !0, null));
		};
		e.onerror = function() {
			Jq(e, !0, k);
			var a = new Kq(0, "Error while loading script " + d);
			zq(h);
			Aq(h, !1, a);
		};
		g = c.attributes || {};
		vd(g, { type: "text/javascript", charset: "UTF-8" });
		tf(e, g);
		e.src = Ee(a);
		Lq(b).appendChild(e);
		return h;
	}
	function Lq(a) {
		var b = pf("HEAD", a);
		return b && 0 != b.length ? b[0] : a.documentElement;
	}
	function Iq() {
		if (this && this.Sg) {
			var a = this.Sg;
			a && a.tagName == sa && Jq(a, !0, this.Eb);
		}
	}
	function Jq(a, b, c) {
		null != c && v.clearTimeout(c);
		a.onload = z;
		a.onerror = z;
		a.onreadystatechange = z;
		b &&
			window.setTimeout(function() {
				Kf(a);
			}, 0);
	}
	function Kq(a, b) {
		var c = "Jsloader error (code #" + a + ")";
		b && (c += ": " + b);
		uc.call(this, c);
		this.code = a;
	}
	D(Kq, uc);
	function Mq(a, b) {
		this.b = new Yi(a);
		this.a = b ? b : "callback";
		this.Eb = 5e3;
	}
	var Nq = 0;
	Mq.prototype.send = function(a, b, c, d) {
		a = a || null;
		d = d || "_" + (Nq++).toString(36) + sc().toString(36);
		var e = "_callbacks___" + d,
			g = new Yi(this.b);
		if (a)
			for (var h in a)
				if (!a.hasOwnProperty || a.hasOwnProperty(h)) {
					var k = g,
						l = h,
						m = a[h];
					B(m) || (m = [String(m)]);
					oj(k.a, l, m);
				}
		b && ((v[e] = Oq(d, b)), (b = this.a), (h = e), B(h) || (h = [String(h)]), oj(g.a, b, h));
		b = { timeout: this.Eb, Gh: !0 };
		h = new Ce();
		h.a = g.toString();
		g = Hq(h, b);
		Dq(g, null, Pq(d, a, c), void 0);
		return { ja: d, Of: g };
	};
	Mq.prototype.cancel = function(a) {
		a && (a.Of && a.Of.cancel(), a.ja && Qq(a.ja, !1));
	};
	function Pq(a, b, c) {
		return function() {
			Qq(a, !1);
			c && c(b);
		};
	}
	function Oq(a, b) {
		return function(c) {
			Qq(a, !0);
			b.apply(void 0, arguments);
		};
	}
	function Qq(a, b) {
		a = "_callbacks___" + a;
		if (v[a])
			if (b)
				try {
					delete v[a];
				} catch (c) {
					v[a] = void 0;
				}
			else v[a] = z;
	}
	function Rq(a, b) {
		R.call(this);
		this.b = new Yi(a);
		if (b) for (var c in b) b[c] !== Object.prototype[c] && this.b.a.set(c, b[c]);
	}
	D(Rq, R);
	Rq.prototype.f = r(!0);
	Rq.prototype.Ya = function() {
		return this.f();
	};
	Rq.prototype.send = r(null);
	Rq.prototype.cancel = ec();
	function Sq(a, b, c, d) {
		Rq.call(this, a, b);
		this.c = null == d || !!d;
		this.a = new Mq(this.b.toString(), c);
	}
	D(Sq, Rq);
	Sq.prototype.f = p("c");
	Sq.prototype.send = function(a, b) {
		this.a.Eb = -1;
		return this.a.send(a, b);
	};
	Sq.prototype.cancel = function(a) {
		this.a.cancel(a);
	};
	function Tq(a, b) {
		Rq.call(this, a, b);
		this.c = {};
		this.a = this.g = 0;
		window.XMLHttpRequest && dc in new XMLHttpRequest() && (this.a = 1);
		!this.a &&
			window.XDomainRequest &&
			"file:" != window.location.protocol &&
			((this.a = 2), this.b.a.set("u", window.location.href));
	}
	D(Tq, Rq);
	uq(17170, Tq.prototype, { zg: 1, yg: 2 });
	Tq.prototype.f = function() {
		return !!this.a;
	};
	Tq.prototype.send = function(a, b) {
		var c = qq(),
			d = ++this.g,
			e = {},
			g = {};
		"q" in a && ((g.q = a.q), delete a.q);
		a.mode = this.a;
		1 == this.a
			? (
					(e.Fb = new Xk()),
					S(
						e.Fb,
						Sa,
						C(function() {
							e.vc || (e.Fb.Pc() ? b(e.Fb.Wb()) : (this.yg(), b(null)), Uq(this, d));
						}, this),
					),
					S(
						e.Fb,
						"timeout",
						C(function() {
							e.vc || (this.zg(), Uq(this, d));
						}, this),
					),
					e.Fb.send(this.b.toString() + "&" + mq(a), ra, mq(g), {
						"Content-Type": "application/x-www-form-urlencoded",
					})
				)
			: (
					(e.$a = new XDomainRequest()),
					(e.$a.timeout = 2e4),
					(e.$a.onload = C(function() {
						e.vc || (b(e.$a.responseText), Uq(this, d));
					}, this)),
					(e.$a.onerror = C(function() {
						e.vc || (this.yg(), b(null), Uq(this, d));
					}, this)),
					(e.$a.ontimeout = C(function() {
						e.vc || (this.zg(), b(null), Uq(this, d));
					}, this)),
					e.$a.open(ra, this.b.toString() + "&" + mq(a)),
					e.$a.send(mq(g))
				);
		this.c[d] = e;
		rq(c);
		return d;
	};
	Tq.prototype.cancel = function(a) {
		var b = this.c[a];
		b && ((b.vc = !0), b.$a && b.$a.abort(), Uq(this, a));
	};
	function Uq(a, b) {
		var c = a.c[b];
		c && (c.Fb ? (c.Fb.M(), (c.Fb = null)) : c.$a && (c.$a = null), delete a.c[b]);
	}
	Tq.prototype.F = function() {
		Tq.m.F.call(this);
		for (var a in this.c) this.cancel(a);
	};
	function Vq(a, b) {
		return "en" == a || "en" == b || ("pt" == a && "es" == b);
	}
	function Wq(a, b, c) {
		R.call(this);
		var d;
		b ? (d = { client: b }) : (d = { anno: 3, client: Sp, format: "html", v: "1.0" });
		c && (d.sp = c);
		d.key = a;
		Lp && (d.logld = "v" + Lp);
		this.a = null;
		this.l = !0;
		this.b = { ed: C(this.C, this), Cg: 300 };
		this.f = new Sq(Vp + Yp, { client: Sp }, "cb");
		this.h = d;
		a = [
			{ va: new Tq(Vp + Up + da, d), ed: C(this.G, this), Ye: 30720, Dg: 4294967295, Bg: -1, Tg: 0, pe: !1 },
			{
				va: new Sq(Vp + Up + da, d, "cb", G && 7 >= Wd),
				ed: C(this.B, this),
				Ye: 1900,
				Dg: 4294967295,
				Bg: -1,
				Tg: 3,
				pe: !0,
			},
		];
		this.s = new Xq(a);
		this.c = !1;
		for (b = 0; b < a.length; ++b) this.c = this.c || a[b].va.f();
		this.c || this.Ni();
	}
	D(Wq, R);
	uq(7361, Wq.prototype, {
		Mi: function() {
			nq("te_afbr");
		},
		Ni: function() {
			nq("te_au");
		},
	});
	function Yq(a, b) {
		if (!a.l) return b;
		if (A(b) != Ea) a = [[b, 200]];
		else if (2 == b.length && A(b[0]) != Ea && A(b[1]) != Ea) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]];
		else {
			a = [];
			for (var c = 0; c < b.length; ++c) A(b[c]) != Ea ? (a[c] = [b[c], 200]) : (a[c] = [b[c][0], 200, b[c][1]]);
		}
		return a;
	}
	Wq.prototype.G = function(a) {
		var b = this;
		return function(c) {
			if (c)
				try {
					var d = c.indexOf("\x00");
					0 <= d && (c = c.substr(0, d));
					var e = eval("(" + c + ")");
				} catch (g) {
					(e = null), b.Mi();
				}
			e ? a(Yq(b, e), 200) : a([], 500);
		};
	};
	Wq.prototype.B = function(a) {
		var b = this;
		return function(c) {
			c ? a(Yq(b, c), 200) : a([], 500);
		};
	};
	Wq.prototype.C = function(a) {
		return function(b) {
			if (b)
				try {
					var c = eval("(" + b + ")");
				} catch (d) {
					c = null;
				}
			a((c && c[1]) || void 0);
		};
	};
	function Xq(a) {
		this.b = a;
	}
	Xq.prototype.start = function(a) {
		this.a = a;
		this.c = 0;
		Zq(this);
	};
	function Zq(a) {
		if (a.c >= a.b.length) a.a(null);
		else {
			var b = a.b[a.c++];
			b.jj
				? jq(
						new iq(
							C(b.va.Ya, b.va),
							C(function(a) {
								a ? this.a(b) : Zq(this);
							}, a),
							30,
							b.jj,
						),
					)
				: b.va.Ya() ? a.a(b) : Zq(a);
		}
	}
	Wq.prototype.g = function(a) {
		this.o ||
			(
				(this.o = !0),
				this.s.start(
					C(function(b) {
						b && ((this.a = b), (this.b.va = b.va));
						a();
					}, this),
				)
			);
	};
	Wq.prototype.Ya = function() {
		return null !== this.a && null !== this.a.va && this.a.va.Ya();
	};
	Wq.prototype.translate = function(a, b, c, d, e, g, h, k) {
		a = this.a.ed(a);
		var l = { q: b, sl: c, tl: d };
		Vq(c, d) && ((this.h.sp && 0 == this.h.sp.indexOf("nmt")) || (l.sp = "nmt"));
		l.tc = e;
		g && (l.ctt = 1);
		h && (l.dom = 1);
		k && (l.sr = 1);
		l[To()] = Ro(b.join(""), Tp);
		return this.a.va.send(l, a);
	};
	Wq.prototype.F = function() {
		Wq.m.F.call(this);
		this.a && (this.a.va.M(), (this.a.va = null));
		this.b.va = null;
		this.f.M();
		this.f = null;
	};
	var $q = dq([
			"A",
			"ABBR",
			"ACRONYM",
			"B",
			"BASEFONT",
			"BDO",
			"BIG",
			"CITE",
			"DFN",
			"EM",
			"FONT",
			"I",
			oa,
			"NOBR",
			"LABEL",
			"Q",
			"S",
			"SMALL",
			ta,
			"STRIKE",
			"STRONG",
			"SUB",
			"SUP",
			ua,
			"TT",
			"U",
			"VAR",
		]),
		ar = dq([
			"APPLET",
			"AREA",
			"BASE",
			"FRAME",
			"FRAMESET",
			"HR",
			"LINK",
			"META",
			"NOFRAMES",
			"NOSCRIPT",
			oa,
			ua,
			va,
		]),
		br = dq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", sa, "STYLE", "WBR", "svg"]),
		cr = dq(["submit", Ka]);
	function dr(a, b) {
		this.a = new pm(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
		this.c = G ? [] : null;
		for (this.b = []; (a = a.parentNode); ) er(this, a, !0);
		this.b.push(!1);
		this.b.reverse();
		for (a = 1; a < this.b.length; ++a) null == this.b[a] && (this.b[a] = this.b[a - 1]);
		this.f = !1;
	}
	uq(52754, dr.prototype, { Ti: 1 });
	function er(a, b, c) {
		var d = ((b.style && b.style.whiteSpace) || "").substring(0, 3);
		"pre" == d || (!d && "PRE" == b.tagName)
			? a.b.push(!0)
			: d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1]);
	}
	dr.prototype.node = function() {
		return this.a.node;
	};
	dr.prototype.next = function() {
		try {
			this.c && 0 < this.c.length && -1 == this.a.a && this.c.length--, -1 == this.a.a && this.b.length--, this
				.c &&
			0 < this.c.length &&
			1 != this.a.a &&
			!this.a.node.nextSibling
				? qm(this.a, this.c[this.c.length - 1], -1, this.a.f - 1)
				: (this.a.next(), this.c && 1 == this.a.a && this.c.push(this.a.node)), 1 == this.a.a &&
				this.a.B &&
				er(this, this.a.node);
		} catch (a) {
			a != Li && this.Ti(a), (this.f = !0);
		}
	};
	function fr() {
		return "[msg_undefined]";
	}
	var Z = {};
	(function() {
		function a(a) {
			return function() {
				return a;
			};
		}
		Z = {
			Gf: a(0),
			Cf: a(1),
			Df: a(2),
			gk: a(3),
			uh: a(4),
			Ef: a(5),
			lh: a(45),
			mh: a(6),
			ph: a(7),
			Wc: a(8),
			vh: a(9),
			uk: a(10),
			zh: a(11),
			qh: a(12),
			pk: a(13),
			sh: a(14),
			nk: a(15),
			rh: a(16),
			wk: a(17),
			wh: a(18),
			Oj: a(19),
			fk: a(20),
			jh: a(21),
			th: a(22),
			lk: a(23),
			kk: a(24),
			ik: a(25),
			vk: a(26),
			tk: a(27),
			jk: a(28),
			nh: a(29),
			xh: a(30),
			Nj: a(32),
			Mj: a(33),
			yh: a(34),
			Zj: a(35),
			Tj: a(36),
			Yj: a(37),
			Ff: a(38),
			dk: a(39),
			Bf: a(40),
			oh: a(41),
			kh: a(46),
		};
	})();
	function gr(a) {
		return (
			ia +
			X(a.Ka) +
			'"></head><body class="goog-te-banner" scroll="no" border=0 dir="' +
			X(a.dir) +
			'"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' +
			X(a.Wi) +
			'" class="goog-logo-link" target="_blank"><img src="' +
			X(a.We) +
			'" alt="Google ' +
			Kj(Z.Wc) +
			'"></a></td>' +
			(a.pc
				? '<td width=1><img src="' +
					X(a.ke) +
					'" width="9" height="15" title="' +
					X(a.pc) +
					'" alt="' +
					X(a.pc) +
					aa +
					X(a.Me) +
					');background-position:-56px 0px;margin:0 4px"></td>'
				: "") +
			'<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' +
			X(a.oj) +
			'" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' +
			X(a.nj) +
			ha +
			X(a.Ih) +
			'"><b>' +
			Fj(Z.Gf) +
			'</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
			X(a.aj) +
			'"></button></div></div></td></tr><tr id="' +
			X(a.mj) +
			'" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
			Fj(Z.vh) +
			'&nbsp;<span dir="ltr">(<b id="' +
			X(a.lj) +
			'"></b>%)</span>&nbsp;<img src="' +
			X(a.Li) +
			'"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
			X(a.Eh) +
			'">' +
			Fj(Z.Cf) +
			fa +
			X(a.Th) +
			'" style="display:none"><td><span class="goog-te-banner-content">' +
			X(a.Sh) +
			ha +
			X(a.qj) +
			'">' +
			Fj(Z.qh) +
			fa +
			X(a.Ph) +
			'" style="display:none" valign=middle><td><span id="' +
			X(a.Lh) +
			'" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' +
			X(a.Hh) +
			'" class="goog-close-link" href="javascript:void(0)" title="' +
			Kj(Z.Df) +
			'"><img src="' +
			X(a.ke) +
			'" width="15" height="15" alt="' +
			Kj(Z.Df) +
			aa +
			X(a.Me) +
			');background-position:-28px 0px"></a></td></tr></table></body>'
		);
	}
	function hr(a) {
		return '<span id="' + X(a.id) + '"></span>';
	}
	function ir(a) {
		return X(a.Ng) + '<div id="' + X(a.id) + '"></div>' + X(a.Mg);
	}
	function jr() {
		var a = G && !K("7.0");
		return (
			'<span style="white-space:nowrap"><a class="goog-logo-link" href="' +
			X(qb) +
			'" target="_blank">' +
			(a
				? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" +
					X(sb) +
					"',sizingMethod='scale');\"></span>"
				: '<img src="' +
					X(sb) +
					'" width="37px" height="14px" style="padding-right: 3px" alt="Google ' +
					Kj(Z.Wc) +
					'">') +
			Fj(Z.Wc) +
			"</a></span>"
		);
	}
	function kr(a) {
		var b = a.We;
		a =
			'<div id="goog-gt-tt" class="skiptranslate" dir="' +
			Kj(a.dir) +
			'"><div style="padding: 8px;"><div><div class="logo"><img src="';
		(null != b && b.Ea === qj) || (null != b && b.Ea === rj)
			? (b = String(b).replace(Xj, Vj))
			: b instanceof Fe
				? (b = String(He(b)).replace(Xj, Vj))
				: b instanceof Ce
					? (b = String(Ee(b)).replace(Xj, Vj))
					: ((b = String(b)), (b = Yj.test(b) ? b.replace(Xj, Vj) : "about:invalid#zSoyz"));
		return (
			a +
			Kj(b) +
			'" width="20" height="20" alt="Google ' +
			Kj(Z.Wc) +
			'"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' +
			Fj(Z.oh) +
			'</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>'
		);
	}
	function lr(a) {
		var b =
			'<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' +
			X(a.Ah) +
			'" method="' +
			X(a.method) +
			'"><div class="form-buttons" style="text-align:' +
			(a.dir == Pb ? "right" : "left") +
			'"><input class="activity-submit" type="button" value="' +
			Kj(Z.th) +
			'"></input><input class="activity-cancel" type="button" value="' +
			Kj(Z.Cf) +
			'"></input></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
		a = a.Rh;
		for (var c = a.length, d = 0; d < c; d++) b += '<input type="hidden" name="' + X(a[d]) + '"/>';
		return b + "</div></form></div>";
	}
	function mr() {
		return Gj(
			'<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>',
		);
	}
	function nr(a) {
		return (
			'<div><span class="alt-translated-text"></span><div class="alt-helper-text">' +
			X(a.Ei) +
			'</div><div class="activity-form-container"></div></div>'
		);
	}
	function or() {
		return Gj(
			'<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>',
		);
	}
	function pr(a) {
		T.call(this);
		a = a || {};
		this.id = a.id || Fh(this);
		this.Ue = a.Ue || "";
		this.Nd = a.Nd || null;
		this.Od = a.Od || null;
		this.cd = a.cd || !1;
		this.className = a.className || null;
		this.c = null;
	}
	D(pr, T);
	pr.prototype.lc = fc("c");
	pr.prototype.Tb = function() {
		if (!this.V) throw Error("Activity must be rendered before it can be resumed.");
		if (!this.c) throw Error("Acitivity must have a tooltip instance to be resumed");
	};
	pr.prototype.Bb = ec();
	pr.prototype.M = function() {
		this.ub || (pr.m.M.call(this), delete this.Od);
	};
	function qr() {
		Ah.call(this);
		this.b = "closure_frame" + rr++;
		this.c = [];
		sr[this.b] = this;
	}
	var tr;
	D(qr, Ah);
	var sr = {},
		rr = 0;
	function ur(a, b) {
		var c = mf(a);
		Vi(b, function(b, e) {
			B(b) || (b = [b]);
			Wc(b, function(b) {
				b = c.D(oa, { type: nb, name: e, value: b });
				a.appendChild(b);
			});
		});
	}
	u = qr.prototype;
	u.Pa = null;
	u.Y = null;
	u.ka = null;
	u.Ob = null;
	u.$i = 0;
	u.ma = !1;
	u.wc = !1;
	u.Wd = !1;
	u.rb = null;
	u.Se = null;
	u.Ia = 0;
	u.Nb = null;
	u.send = function(a, b, c, d) {
		if (this.ma) throw Error(xa);
		this.rb = a = new Yi(a);
		b = b ? b.toUpperCase() : "GET";
		c &&
			(
				(c =
					Math.floor(2147483648 * Math.random()).toString(36) +
					Math.abs(Math.floor(2147483648 * Math.random()) ^ sc()).toString(36)),
				a.a.set("zx", c)
			);
		tr ||
			(
				(tr = Af("FORM")),
				(tr.acceptCharset = "utf-8"),
				(c = tr.style),
				(c.position = za),
				(c.visibility = nb),
				(c.top = c.left = "-10px"),
				(c.width = c.height = "10px"),
				(c.overflow = nb),
				document.body.appendChild(tr)
			);
		this.Y = tr;
		"GET" == b && ur(this.Y, a.a);
		d && ur(this.Y, d);
		this.Y.action = a.toString();
		this.Y.method = b;
		vr(this);
		wr(this);
	};
	function xr(a, b) {
		if (a.ma) throw Error(xa);
		var c = new Yi(b.action);
		a.rb = c;
		a.Y = b;
		a.Y.action = c.toString();
		vr(a);
	}
	u.abort = function(a) {
		if (this.ma) {
			var b = yr(this);
			qh(b);
			this.Wd = this.ma = this.wc = !1;
			this.Ia = a || 7;
			this.dispatchEvent("abort");
			zr(this);
		}
	};
	u.F = function() {
		this.ma && this.abort();
		qr.m.F.call(this);
		this.ka && Ar(this);
		wr(this);
		delete this.f;
		this.rb = this.Se = this.Y = null;
		this.Ia = 0;
		delete sr[this.b];
	};
	u.Kd = p("wc");
	u.Pc = p("Wd");
	u.fc = p("ma");
	u.Wb = p("Se");
	u.ve = p("rb");
	u.Yf = p("Ia");
	function vr(a) {
		a.ma = !0;
		a.wc = !1;
		a.Ia = 0;
		a.Ob = a.b + "_" + (a.$i++).toString(36);
		a.ka = mf(a.Y).D(na, { name: a.Ob, id: a.Ob });
		G && 7 > Number(Wd) && (a.ka.src = 'javascript:""');
		var b = a.ka.style;
		b.visibility = nb;
		b.width = b.height = "10px";
		b.display = Db;
		J ? (b.marginTop = b.marginLeft = "-10px") : ((b.position = za), (b.top = b.left = "-10px"));
		if (G && !K("11")) {
			a.Y.target = a.Ob || "";
			mf(a.Y).a.body.appendChild(a.ka);
			S(a.ka, Ob, a.ef, !1, a);
			try {
				(a.a = !1), a.Y.submit();
			} catch (w) {
				oh(a.ka, Ob, a.ef, !1, a), Br(a, 1);
			}
		} else {
			mf(a.Y).a.body.appendChild(a.ka);
			b = a.Ob + "_inner";
			var c = Uf(a.ka);
			if (document.baseURI) {
				var d = Ec(b);
				d =
					'<head><base href="' +
					Ec(document.baseURI) +
					'"></head><body><iframe id="' +
					d +
					'" name="' +
					d +
					'"></iframe>';
				d = gf(d, null);
			} else (d = Ec(b)), (d = gf('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null));
			F && !J ? (c.documentElement.innerHTML = af(d)) : c.write(af(d));
			S(c.getElementById(b), wb, a.Qd, !1, a);
			var e = pf(ua, a.Y);
			d = 0;
			for (var g = e.length; d < g; d++) {
				var h = e[d].value;
				cg(e[d]) != h && (Wf(e[d], h), (e[d].value = h));
			}
			e = c.importNode(a.Y, !0);
			e.target = b;
			e.action = a.Y.action;
			c.body.appendChild(e);
			h = pf("SELECT", a.Y);
			var k = pf("SELECT", e);
			d = 0;
			for (g = h.length; d < g; d++)
				for (var l = pf(pa, h[d]), m = pf(pa, k[d]), q = 0, t = l.length; q < t; q++)
					m[q].selected = l[q].selected;
			h = pf(oa, a.Y);
			k = pf(oa, e);
			d = 0;
			for (g = h.length; d < g; d++)
				if ("file" == h[d].type && h[d].value != k[d].value) {
					a.Y.target = b;
					e = a.Y;
					break;
				}
			try {
				(a.a = !1), e.submit(), c.close(), H && Fk(a.dh, 250, a);
			} catch (w) {
				oh(c.getElementById(b), wb, a.Qd, !1, a), c.close(), Br(a, 2);
			}
		}
	}
	u.ef = function() {
		if (this.ka.readyState == Sa) {
			oh(this.ka, Ob, this.ef, !1, this);
			try {
				var a = Uf(this.ka);
				if (G && a.location == ya && !navigator.onLine) {
					Br(this, 9);
					return;
				}
			} catch (b) {
				Br(this, 1);
				return;
			}
			Cr(this, a);
		}
	};
	u.Qd = function() {
		if (!F || J || (this.ka ? Uf(yr(this)) : null).location != ya) {
			oh(yr(this), wb, this.Qd, !1, this);
			try {
				Cr(this, this.ka ? Uf(yr(this)) : null);
			} catch (a) {
				Br(this, 1);
			}
		}
	};
	function Cr(a, b) {
		a.wc = !0;
		a.ma = !1;
		try {
			var c = b.body;
			a.Se = c.textContent || c.innerText;
		} catch (e) {
			var d = 1;
		}
		d || typeof a.f != n || ((b = a.f(b)) && (d = 4));
		d ? Br(a, d) : ((a.Wd = !0), (a.Ia = 0), a.dispatchEvent(Sa), a.dispatchEvent("success"), zr(a));
	}
	function Br(a, b) {
		a.a ||
			(
				(a.Wd = !1),
				(a.ma = !1),
				(a.wc = !0),
				(a.Ia = b),
				a.dispatchEvent(Sa),
				a.dispatchEvent("error"),
				zr(a),
				(a.a = !0)
			);
	}
	function zr(a) {
		Ar(a);
		wr(a);
		a.Y = null;
		a.dispatchEvent(Nb);
	}
	function Ar(a) {
		var b = a.ka;
		b && ((b.onreadystatechange = null), (b.onload = null), (b.onerror = null), a.c.push(b));
		a.Nb && (Gk(a.Nb), (a.Nb = null));
		H || (F && !J) ? (a.Nb = Fk(a.Qf, 2e3, a)) : a.Qf();
		a.ka = null;
		a.Ob = null;
	}
	u.Qf = function() {
		this.Nb && (Gk(this.Nb), (this.Nb = null));
		for (; 0 != this.c.length; ) {
			var a = this.c.pop();
			Kf(a);
		}
	};
	function wr(a) {
		a.Y && a.Y == tr && Hf(a.Y);
	}
	function yr(a) {
		return a.ka ? (G && !K("11") ? a.ka : Uf(a.ka).getElementById(a.Ob + "_inner")) : null;
	}
	u.dh = function() {
		if (this.ma) {
			var a = this.ka ? Uf(yr(this)) : null;
			a && !Ed(a, "documentUri")
				? (oh(yr(this), wb, this.Qd, !1, this), navigator.onLine ? Br(this, 3) : Br(this, 9))
				: Fk(this.dh, 250, this);
		}
	};
	function Dr(a, b) {
		T.call(this);
		this.l = a || "";
		this.c = null;
		this.h = [];
		this.a = null;
		this.o = b || "GET";
		this.f = this.g = null;
	}
	D(Dr, T);
	u = Dr.prototype;
	u.D = function() {
		var a = { Ah: this.l, method: this.o, Rh: this.h, dir: Be.test(Mp) ? Pb : "ltr" };
		this.T(Bj(lr, a));
	};
	u.T = function(a) {
		this.A = a;
		this.a = Hh(this, "activity-form");
		a = Hh(this, "activity-submit");
		this.f = new Gi("");
		Lh(this.f, a);
		a = Hh(this, "activity-cancel");
		this.c = new Gi("");
		Lh(this.c, a);
	};
	u.P = function() {
		var a = U(this);
		a.w(this.f, Aa, C(this.yj, this));
		a.w(this.c, Aa, C(this.dispatchEvent, this, La));
	};
	u.yj = function() {
		var a = !0;
		this.g && (a = this.g());
		a &&
			(
				(a = new qr()),
				S(a, "success", function() {
					this.dispatchEvent("successful");
				}),
				S(a, "error", function() {
					this.dispatchEvent("failed");
				}),
				xr(a, this.a)
			);
		this.dispatchEvent(Ub);
	};
	function Er(a, b) {
		for (var c in b) a.a[c] && (a.a[c].value = b[c]);
	}
	function Fr(a, b) {
		return a.a[b] ? a.a[b].value : "";
	}
	u.F = function() {
		this.f = this.a = this.c = null;
		Dr.m.F.call(this);
	};
	function Gr(a, b) {
		a.g = b;
	}
	function Hr(a, b) {
		pr.call(this, a);
		this.f = null;
		this.o = b || {};
		this.h = new jm();
		this.l = this.a = null;
		this.g = new Wq((a || {}).cb || "", vp);
		this.g.l = !1;
	}
	D(Hr, pr);
	var vp = Sp.replace("_", "-") + "-alt";
	u = Hr.prototype;
	u.lc = function(a) {
		Hr.m.lc.call(this, a);
		this.g.g(C(this.Tb, this));
	};
	u.Tb = function() {
		Hr.m.Tb.call(this);
		var a = this.c.K,
			b = this.c.o;
		if (a && b) {
			Wf(this.l, a);
			var c = this.h;
			c.A = b;
			If(c.a, c.A);
			km(c);
			P(this.h.a, !0);
			b = this.c.Xb();
			c = this.c.wa();
			if (this.g.Ya() && b && c) {
				var d = this.c.ra(),
					e = C(this.ej, this);
				this.g && this.g.translate(e, [d], b, c, 0, !1);
				Er(this.a, { gtrans: a, text: this.c.ra(), hl: Mp, langpair: b + "|" + c });
				Er(this.a, this.o);
				Er(this.a, { client: vp });
			}
			this.dispatchEvent(Nb);
		}
	};
	u.D = function() {
		this.T(Bj(nr, { Ei: Z.Bf }));
	};
	u.T = function(a) {
		this.A = a;
		this.l = Hh(this, "alt-translated-text");
		var b = Hh(this, Ca);
		this.a = new Dr(bq, ra);
		this.a.h = od(this.o);
		Gr(
			this.a,
			C(function() {
				Er(this.a, { utrans: Fp(this.f) });
				return Fr(this.a, "utrans") != Fr(this.a, "gtrans");
			}, this),
		);
		this.a.fa(b);
		Bo = Z.yh;
		qo = Z.Bf;
		this.f = new rp(void 0, !0, a);
		sp(this.f, this.h);
		tp(this.f);
		up(this.f);
		Lh(this.f, this.l);
	};
	u.P = function() {
		Hr.m.P.call(this);
		var a = U(this);
		a.w(
			this.a,
			La,
			C(function() {
				Ip(this.f);
				this.dispatchEvent(La);
			}, this),
		);
		a.w(
			this.a,
			Ub,
			C(function() {
				var a = Fp(this.f);
				this.c.K = a && zc(a);
				this.dispatchEvent(Ub);
				Wf(this.c.Yb().j(), Z.Ff);
			}, this),
		);
	};
	u.ej = function(a) {
		a && wp(this.f, a);
	};
	u.Bb = function() {
		P(this.h.a, !1);
	};
	u.F = function() {
		this.f && this.f.M();
		this.l = this.h = this.f = null;
		this.g && this.g.M();
		this.g = null;
		this.a && this.a.M();
		this.a = null;
		Hr.m.F.call(this);
	};
	function Ir(a, b) {
		pr.call(this, a);
		this.h = !1;
		this.g = b || {};
		this.f = null;
	}
	D(Ir, pr);
	u = Ir.prototype;
	u.lc = function(a) {
		Ir.m.lc.call(this, a);
		U(this).w(this.f.j(), ub, C(this.c.Sc, this.c, !1));
		this.h = this.c.uc;
		this.Tb();
	};
	u.Tb = function() {
		Ir.m.Tb.call(this);
		this.f.Mb(this.c.K);
		var a = this.c.Xb(),
			b = this.c.wa();
		a &&
			b &&
			(Er(this.a, { gtrans: this.c.K, text: this.c.ra(), hl: Mp, langpair: a + "|" + b }), Er(this.a, this.g));
		this.dispatchEvent(Nb);
		this.f.j().focus();
	};
	u.Bb = function() {
		this.c.Sc(this.h);
	};
	u.D = function() {
		this.T(Bj(mr));
	};
	u.T = function(a) {
		this.A = a;
		a = Hh(this, "contribute-original-text");
		this.f = new Do("");
		Lh(this.f, a);
		Jo(this.f);
		Ho(this.f);
		a = Hh(this, Ca);
		this.a = new Dr(bq, ra);
		this.a.h = od(this.g);
		Gr(
			this.a,
			C(function() {
				Er(this.a, { utrans: zc(this.f.za()) });
				return Fr(this.a, "utrans") != Fr(this.a, "gtrans");
			}, this),
		);
		this.a.fa(a);
	};
	u.P = function() {
		Ir.m.P.call(this);
		var a = U(this);
		a.w(
			this.a,
			La,
			C(function() {
				this.dispatchEvent(La);
			}, this),
		);
		a.w(
			this.a,
			Ub,
			C(function() {
				var a = this.f.za();
				this.c.K = a && zc(a);
				this.dispatchEvent(Ub);
				Wf(this.c.Yb().j(), Z.Ff);
			}, this),
		);
	};
	u.F = function() {
		this.f && this.f.M();
		this.f = null;
		this.a && this.a.M();
		this.a = null;
		Ir.m.F.call(this);
	};
	function Jr(a) {
		Ah.call(this);
		this.h = a;
		this.g = {};
		this.c = new uh(this);
		this.f = null;
	}
	D(Jr, Ah);
	Jr.prototype.ah = ec();
	Jr.prototype.bh = ec();
	Jr.prototype.F = function() {
		this.c.M();
		this.c = null;
	};
	function Kr(a, b, c) {
		if ((b = a.h.c[b])) {
			c = c || "undefined" == typeof c;
			for (var d = 0; d < b.Ba.length; ++d) b.Ba[d] && a.ug(b.Ba[d], c);
		}
	}
	Jr.prototype.ug = function(a, b) {
		O(a, "backgroundColor", b ? "#E6ECF9" : "");
		O(a, "color", b ? "#000" : "");
	};
	var rd = {},
		Lr = null;
	function Mr(a) {
		a = mc(a);
		delete rd[a];
		qd() && Lr && Lr.stop();
	}
	function Nr() {
		Lr ||
			(Lr = new Hk(function() {
				Or();
			}, 20));
		var a = Lr;
		a.fc() || a.start();
	}
	function Or() {
		var a = sc();
		ld(rd, function(b) {
			Pr(b, a);
		});
		qd() || Nr();
	}
	function Qr(a, b, c, d) {
		Ll.call(this);
		if (!B(a) || !B(b)) throw Error("Start and end parameters must be arrays");
		if (a.length != b.length) throw Error("Start and end points must be the same length");
		this.s = a;
		this.I = b;
		this.duration = c;
		this.C = d;
		this.h = [];
		this.b = 0;
	}
	D(Qr, Ll);
	u = Qr.prototype;
	u.play = function(a) {
		if (a || 0 == this.a) (this.b = 0), (this.h = this.s);
		else if (1 == this.a) return !1;
		Mr(this);
		this.c = a = sc();
		-1 == this.a && (this.c -= this.duration * this.b);
		this.l = this.c + this.duration;
		this.b || this.f();
		this.Ra("play");
		-1 == this.a && this.Ra("resume");
		this.a = 1;
		var b = mc(this);
		b in rd || (rd[b] = this);
		Nr();
		Pr(this, a);
		return !0;
	};
	u.stop = function(a) {
		Mr(this);
		this.a = 0;
		a && (this.b = 1);
		Rr(this, this.b);
		this.Bb();
		this.g();
	};
	u.rf = function(a) {
		this.b = a;
		1 == this.a && ((this.c = sc() - this.duration * this.b), (this.l = this.c + this.duration));
	};
	u.F = function() {
		0 == this.a || this.stop(!1);
		this.Ra("destroy");
		Qr.m.F.call(this);
	};
	function Pr(a, b) {
		b < a.c && ((a.l = b + a.l - a.c), (a.c = b));
		a.b = (b - a.c) / (a.l - a.c);
		1 < a.b && (a.b = 1);
		Rr(a, a.b);
		1 == a.b ? ((a.a = 0), Mr(a), a.Ra(Xa), a.g()) : 1 == a.a && a.bf();
	}
	function Rr(a, b) {
		kc(a.C) && (b = a.C(b));
		a.h = Array(a.s.length);
		for (var c = 0; c < a.s.length; c++) a.h[c] = (a.I[c] - a.s[c]) * b + a.s[c];
	}
	u.bf = function() {
		this.Ra("animate");
	};
	u.Ra = function(a) {
		this.dispatchEvent(new Sr(a, this));
	};
	function Sr(a, b) {
		Sg.call(this, a);
		this.x = b.h[0];
		this.y = b.h[1];
		this.duration = b.duration;
	}
	D(Sr, Sg);
	function Tr(a, b, c, d, e) {
		Qr.call(this, b, c, d, e);
		this.o = a;
	}
	D(Tr, Qr);
	Tr.prototype.G = z;
	Tr.prototype.bf = function() {
		this.G();
		Tr.m.bf.call(this);
	};
	Tr.prototype.g = function() {
		this.G();
		Tr.m.g.call(this);
	};
	Tr.prototype.f = function() {
		this.G();
		Tr.m.f.call(this);
	};
	function Ur(a, b, c, d, e) {
		hc(b) && (b = [b]);
		hc(c) && (c = [c]);
		Tr.call(this, a, b, c, d, e);
		if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
		this.B = -1;
	}
	D(Ur, Tr);
	var Vr = 1 / 1024;
	Ur.prototype.G = function() {
		var a = this.h[0];
		if (Math.abs(a - this.B) >= Vr) {
			var b = this.o.style;
			"opacity" in b
				? (b.opacity = a)
				: "MozOpacity" in b
					? (b.MozOpacity = a)
					: "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
			this.B = a;
		}
	};
	Ur.prototype.f = function() {
		this.B = -1;
		Ur.m.f.call(this);
	};
	Ur.prototype.g = function() {
		this.B = -1;
		Ur.m.g.call(this);
	};
	function Wr(a, b, c) {
		Ur.call(this, a, 1, 0, b, c);
	}
	D(Wr, Ur);
	Wr.prototype.f = function() {
		this.o.style.display = "";
		Wr.m.f.call(this);
	};
	Wr.prototype.g = function() {
		this.o.style.display = Db;
		Wr.m.g.call(this);
	};
	function Xr(a, b, c) {
		Ur.call(this, a, 0, 1, b, c);
	}
	D(Xr, Ur);
	Xr.prototype.f = function() {
		this.o.style.display = "";
		Xr.m.f.call(this);
	};
	function Yr() {
		T.call(this);
		this.a = null;
	}
	D(Yr, T);
	u = Yr.prototype;
	u.D = function() {
		this.T(this.b.D(f, { class: Sb }));
	};
	u.T = function(a) {
		this.A = a;
		a.style.display = Db;
	};
	function Zr(a) {
		var b = c;
		var c = C(function() {
			Wf(this.j(), "");
			b && b();
		}, a);
		c = C(a.Fi, a, 750, c);
		$r(a, c);
	}
	function as(a) {
		a.a && (a.a.stop(!0), (a.a = null));
		Wf(a.j(), "");
		a.L(!1);
	}
	function $r(a, b) {
		a.a = new Xr(a.j(), 750);
		U(a).Ab(
			a.a,
			"begin",
			C(function() {
				this.j().style.display = "block";
			}, a),
		);
		U(a).Ab(
			a.a,
			Xa,
			C(function() {
				this.a = null;
				window.setTimeout(b, 2e3);
			}, a),
		);
		a.a.play();
	}
	u.Fi = function(a, b) {
		this.N() &&
			(
				(this.a = new Wr(this.j(), a)),
				U(this).Ab(
					this.a,
					Xa,
					C(function() {
						b && b();
					}, this),
				),
				this.a.play()
			);
	};
	u.L = function(a) {
		this.j().style.display = a ? "block" : Db;
		this.j().style.opacity = a ? "1" : "0";
	};
	u.N = function() {
		return this.j().style.display !== Db && "0" !== this.j().style.opacity;
	};
	function bs() {
		bo.call(this);
		this.R = {};
		this.ib = {};
		this.I = null;
		this.Xc = !1;
		this.sb = this.f = this.H = null;
		this.X = {};
		this.l = new uh(this);
		this.o = this.c = this.g = this.ab = this.a = this.K = this.qa = null;
		this.C = !0;
		this.bb = [];
	}
	D(bs, bo);
	u = bs.prototype;
	u.fa = function() {
		this.C = !1;
		var a = Be.test(Mp) ? Pb : "ltr";
		this.bc(
			Bj(kr, {
				We: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
				ke: rb,
				Me: Xp,
				dir: a,
			}),
		);
		this.className += " skiptranslate";
		if ((a = !!(this.j() && this.I && this.ab && this.g.j() && this.H && this.o)))
			this.l.w(window, "resize", C(this.nb, this)), this.l.w(this, ob, C(this.gj, this)), this.bb.length &&
				((a = this.de.apply(this, this.bb)), (this.bb = []));
		return a;
	};
	u.de = function(a) {
		for (var b = [], c = 0; c < arguments.length; ++c) {
			var d = arguments[c];
			if (d)
				if (this.I || d.Od) {
					var e = d;
					var g = Af(ta, { class: e.className || "activity-link" });
					Wf(g, e.Ue || "");
					e = g;
					b.push(e);
					Gf(d.Od || this.I, e);
					d.lc && d.Bb && ((g = C(this.Zh, this, d)), this.l.w(e, Qa, g), d.Nd && this.l.w(this.H, d.Nd, g));
					d.id = d.id || Fh(d);
					this.R[d.id] && this.Og(d);
					this.R[d.id] = d;
					this.ib[d.id] = e;
				} else this.bb.push(d);
		}
		return b;
	};
	u.Og = function(a) {
		for (var b = 0; b < arguments.length; ++b) {
			var c = y(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
				d = this.R[c],
				e = this.ib[c];
			d &&
				e &&
				(
					this.f && this.f.id === c && this.le(),
					this.l.ca(d, [Ub, La]),
					d.M(),
					this.X[c] && delete this.X[c],
					delete this.R[c],
					delete this.ib[c],
					Kf(e)
				);
		}
	};
	u.Zh = function(a) {
		if (this.H) {
			a != this.f &&
				this.f &&
				(
					as(this.g),
					this.f.Bb.call(this.f),
					this.f.j() && (this.f.j().style.display = Db),
					cs(this, !1),
					(this.f = null)
				);
			cs(this, !0);
			as(this.g);
			this.f = a;
			if (this.X[a.id]) {
				var b = this.X[a.id];
				var c = a.Tb;
			} else a.fa(), (b = a.j()), (c = a.lc), this.l.w(a, [Ub, La], C(this.le, this)), a.cd && (this.X[a.id] = b);
			Gf(this.H, b);
			c.call(a, this);
			a = new Xr(b, 100);
			this.l.Ab(a, Xa, C(this.nb, this, !0, !0));
			a.play();
		}
	};
	u.le = function() {
		if (this.f)
			if ((as(this.g), this.f.Bb.call(this.f), this.f.j())) {
				var a = new Wr(this.f.j(), 100);
				this.l.Ab(
					a,
					Xa,
					C(function() {
						Kf(this.f.j());
						this.f = null;
						cs(this, !1);
						ag(this.g.j()) && (Zr(this.g), this.nb(!0, !0));
					}, this),
				);
				a.play();
			} else cs(this, !1), (this.f = null);
	};
	u.Ze = function(a, b) {
		this.sb = a;
		bs.m.Ze.call(this, a, b);
		this.j().style.display = "block";
	};
	u.Fe = function(a) {
		if (!this.C) {
			var b = lo(this, a.target);
			this.ya = b;
			this.Ub();
			b != this.b ? ((this.b = b), mo(this, b), no(this), ko(this, a)) : mo(this, b);
		}
	};
	u.gj = function() {
		as(this.g);
		this.Xc && this.le();
	};
	u.F = function() {
		for (var a in this.R) this.Og(a);
		this.l && this.l.M();
		this.l = null;
		this.g && this.g.M();
		this.o = this.ab = this.sb = this.H = this.I = this.g = null;
		bs.m.F.call(this);
	};
	function cs(a, b) {
		a.Xc = b;
		a.C = b;
		if (a.C) {
			var c = a.j();
			a.qa = new M(c.offsetLeft, c.offsetTop);
		} else a.qa && (null != (a.s || null) && ((a.s || null).a = a.qa), lg(a.j(), a.qa), (a.qa = null));
		a.I.style.display = b ? Db : "inline-block";
		a.ab.style.display = b ? "inline-block" : Db;
	}
	u.Sc = function(a) {
		this.N()
			? ((this.uc = a), (this.uc ? this.h.w : this.h.ca).call(this.h, N(this.j()), xb, this.cf, !0))
			: bs.m.Sc.call(this, a);
	};
	u.bc = function(a) {
		bs.m.bc.call(this, a);
		if (a) {
			this.I = sf("activity-links", a);
			var b = sf(Sb, a);
			b && ((this.g = new Yr()), Lh(this.g, b));
			this.ab = sf("started-activity-container", a);
			this.H = sf("activity-root", a);
			this.o = sf("original-text", a);
		}
	};
	u.nb = function(a, b) {
		var c = rg(document.body).y;
		if (this.s) {
			(this.s || null).a.y += c;
			bs.m.nb.call(this);
			var d = parseInt(this.j().style.left, 10);
			a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
			b && ((b = this.Xe || {}), (a -= b.top || 10), (d -= b.left || 10));
			a -= c;
			(this.s || null).a.y = a;
			(this.s || null).a.x = d;
			lg(this.j(), new M(d, a));
		}
	};
	u.Sb = fc("a");
	u.ta = fc("c");
	u.Qa = function(a) {
		a = a ? zc(a) : "";
		this.o ? Wf(this.o, a) : bs.m.Qa.call(this, a);
	};
	u.Xb = p("a");
	u.Yb = p("g");
	u.wa = p("c");
	u.ra = function() {
		return this.o ? ag(this.o) : bs.m.ra.call(this);
	};
	u.cc = function(a) {
		this.C || bs.m.cc.call(this, a);
	};
	u.Fd = function(a) {
		this.C || bs.m.Fd.call(this, a);
	};
	u.Ed = function(a) {
		this.C || bs.m.Ed.call(this, a);
	};
	var ds = {
		set: function(a, b) {
			a.className = b;
		},
		get: function(a) {
			a = a.className;
			return (y(a) && a.match(/\S+/g)) || [];
		},
		add: function(a, b) {
			var c = ds.get(a),
				d = gd(arguments, 1),
				e = c.length + d.length;
			ds.If(c, d);
			ds.set(a, c.join(" "));
			return c.length == e;
		},
		remove: function(a, b) {
			var c = ds.get(a),
				d = gd(arguments, 1),
				e = ds.Wf(c, d);
			ds.set(a, e.join(" "));
			return e.length == c.length - d.length;
		},
		If: function(a, b) {
			for (var c = 0; c < b.length; c++) bd(a, b[c]) || a.push(b[c]);
		},
		Wf: function(a, b) {
			return Xc(a, function(a) {
				return !bd(b, a);
			});
		},
		zj: function(a, b, c) {
			for (var d = ds.get(a), e = !1, g = 0; g < d.length; g++) d[g] == b && (fd(d, g--, 1), (e = !0));
			e && (d.push(c), ds.set(a, d.join(" ")));
			return e;
		},
		zk: function(a, b, c) {
			var d = ds.get(a);
			y(b) ? cd(d, b) : B(b) && (d = ds.Wf(d, b));
			y(c) && !bd(d, c) ? d.push(c) : B(c) && ds.If(d, c);
			ds.set(a, d.join(" "));
		},
		has: function(a, b) {
			return bd(ds.get(a), b);
		},
		enable: function(a, b, c) {
			c ? ds.add(a, b) : ds.remove(a, b);
		},
		toggle: function(a, b) {
			var c = !ds.has(a, b);
			ds.enable(a, b, c);
			return c;
		},
	};
	function es(a, b) {
		Jr.call(this, a);
		b = b || {};
		this.a = { cb: b.cb || "", Jb: b.Jb || 1 };
		this.b = null;
	}
	D(es, Jr);
	u = es.prototype;
	u.ah = function(a, b) {
		b && ((b.a = a), co(this.b, b));
	};
	u.bh = function(a) {
		a && fo(this.b, a);
	};
	u.Hj = function() {
		var a = this.b.sb;
		if (a && void 0 !== a.a) {
			var b = a.a;
			a = this.h.c[b];
			Kr(this, this.f, !1);
			this.f = b;
			Kr(this, b);
			this.b.Sb(a.xj);
			this.b.ta(a.Ij);
			b = a.U;
			this.b.K = b && zc(b);
			this.b.Qa(a.text);
		}
	};
	u.Gj = function() {
		Kr(this, this.f, !1);
	};
	u.Jg = function() {
		this.h.c[this.f].Qh.dispatchEvent("updating");
	};
	u.F = function() {
		this.b.M();
		this.b = null;
		es.m.F.call(this);
	};
	u.ug = function(a, b) {
		ds[b ? "add" : "remove"](a, "goog-text-highlight");
	}; /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
	var fs;
	(function() {
		var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
		fs = function(b, c) {
			var d = [],
				e;
			c = c || a.length;
			if (b) for (e = 0; e < b; e++) d[e] = a[0 | (Math.random() * c)];
			else
				for (d[8] = d[13] = d[18] = d[23] = "-", d[14] = "4", e = 0; 36 > e; e++)
					d[e] || ((b = 0 | (16 * Math.random())), (d[e] = a[19 == e ? (b & 3) | 8 : b]));
			return d.join("");
		};
	})();
	function gs(a) {
		this.h = a;
		this.c = this.a = this.f = this.b = -1;
		this.g = !1;
		this.s = 0;
		this.o = "";
		this.B = 0;
	}
	gs.prototype.start = function() {
		this.g ||
			(
				(this.g = !0),
				(this.o = fs(15, 62)),
				(this.s = 0),
				(this.c = this.a = this.f = this.b = -1),
				(this.B = sc()),
				Fk(this.l, 1e4, this)
			);
	};
	gs.prototype.stop = function() {
		this.g && ((this.g = !1), hs(this));
	};
	gs.prototype.l = function() {
		this.g && (hs(this), Fk(this.l, 1e3, this));
	};
	function hs(a) {
		var b = a.h.f,
			c = a.h.h,
			d = a.h.c,
			e = a.h.g;
		if (a.b != b || a.f != c || a.a != d || a.c != e) {
			var g = {};
			g.ct = b;
			g.cv = c;
			g.cts = d;
			g.cvs = e;
			g.sid = a.o;
			g.seq = a.s++;
			g.tat = sc() - a.B;
			if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c) (g.pt = a.b), (g.pv = a.f), (g.pts = a.a), (g.pvs = a.c);
			nq("te_v", g);
			a.b = b;
			a.f = c;
			a.a = d;
			a.c = e;
		}
	}
	function is() {
		this.g = this.c = this.h = this.f = 0;
		this.a = [];
		this.b = null != v.IntersectionObserver ? new IntersectionObserver(C(this.l, this)) : null;
	}
	uq(36546, is.prototype, { xg: 1 });
	var js = "_gt_" + Math.random().toString(36).substr(2);
	is.prototype.reset = function() {
		this.g = this.c = this.h = this.f = 0;
		this.a = [];
	};
	is.prototype.l = function(a) {
		for (var b = 0; b < a.length; b++) {
			var c = a[b];
			if (0 < c.intersectionRatio && null != c.target[js]) {
				this.h += ag(c.target).length;
				var d = c.target[js];
				this.g += this.a[d];
				this.a[d] = 0;
				c.target[js] = void 0;
			}
		}
	};
	function ks(a, b) {
		R.call(this);
		a = a || {};
		this.a = td(a);
		this.a.Jb = a.Jb;
		this.a.uf = !!a.uf;
		this.a.Jh = parseInt(a.Jh, 10) || 300;
		this.a.kj = a.kj;
		this.a.Vc = a.Vc || !1;
		this.h = 0;
		this.c = {};
		this.l = new uh(this);
		this.f = new es(this, this.a);
		b && (this.f.g = b || {});
		a = this.f;
		a.b = new bs();
		a.b.tg = 300;
		a.b.Xg = 1e3;
		a.b.Sc(!0);
		a.c.w(a.b, "show", C(a.Hj, a));
		a.c.w(a.b, ob, C(a.Gj, a));
		b = new Hr({ cb: a.a.cb, id: "alternate", Ue: Z.jh, cd: !0 }, a.g);
		a.b.de(b);
		a.c.w(b, Ub, C(a.Jg, a));
		a.a.Jb && ((b = new Ir({ id: "contribute", Nd: Va, cd: !0 }, a.g)), a.b.de(b), a.c.w(b, Ub, C(a.Jg, a)));
		a.b.fa();
		this.g = this.b = null;
		this.a.Vc && null != v.IntersectionObserver && ((this.b = new is()), (this.g = new gs(this.b)));
	}
	D(ks, R);
	function ls(a, b, c, d, e, g) {
		d = a.c[++a.h] = { id: a.h.toString(), Qh: g, text: c, Ek: e || c, U: d, xj: a.s, Ij: a.o, Ba: b };
		for (e = 0; e < b.length; ++e) b[e] && a.f.ah(d.id, b[e]);
		if (a.b)
			for (e = a.b, g = c.length, e.c += g, c = e.a.length, e.a.push(g), g = 0; g < b.length; ++g) {
				var h = e,
					k = b[g];
				Of(k) ? ((k[js] = c), (h.f += ag(k).length), h.b && h.b.observe(k)) : h.xg(k.nodeType);
			}
		a.g && a.g.start();
		return d.id;
	}
	function ms(a) {
		a.g && a.g.stop();
		for (var b in a.c) {
			var c = a,
				d = b,
				e = c.c[d];
			if (e) {
				if (c.b)
					for (var g = c.b, h = e.Ba, k = 0; k < h.length; ++k) {
						var l = g,
							m = h[k];
						Of(m) ? ((m[js] = void 0), l.b && l.b.unobserve(m)) : l.xg(m.nodeType);
					}
				for (g = 0; g < e.Ba.length; ++g) e.Ba[g] && c.f.bh(e.Ba[g]);
				delete c.c[d];
			}
		}
		a.b && a.b.reset();
	}
	ks.prototype.F = function() {
		ms(this);
		this.l.M();
		this.l = null;
		this.f.M();
		this.f = null;
	};
	function ns(a) {
		for (var b = 0; b < a.length; ++b) if (a[b] && a[b].node) return a[b].node;
		return null;
	}
	function os(a) {
		var b = ns(a);
		if (!b) return null;
		var c = [],
			d = [],
			e = [],
			g = new dr(b, !0),
			h = a[a.length - 1].node,
			k = 0,
			l = !1;
		do {
			g.next();
			b = g.node();
			if (!b) break;
			var m = g.a.a,
				q = g.a.f;
			for (1 == m && --q; k < a.length && !a[k].node; ) ++k;
			b == a[k].node || (!l && 1 == m && (null != b && null == b.previousSibling ? 0 : !ps(qs(b))))
				? (
						(m = rs(b)),
						d.push({ node: m, Qa: ec() }),
						(e[d.length - 1] = q),
						If(m, b),
						b == a[k].node && ((c[k++] = d.length - 1), (l = !0))
					)
				: (l = !1);
		} while (b != h);
		return { Af: e, hj: c, Hi: d };
	}
	function ps(a) {
		return null != a && br[a.tagName];
	}
	function qs(a) {
		if (null == a) return null;
		for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == zc(ag(a)); )
			a = a.previousSibling;
		return a;
	}
	function ss(a, b, c, d, e, g) {
		Ah.call(this);
		this.a = [];
		for (var h = 0; h < a.length; ++h) this.a.push("nodeType" in a[h] ? ts(a[h]) : a[h]), us(a[h].node);
		this.f = b;
		this.G = d || 0;
		this.K = e || 0;
		this.l = c;
		this.s = g || null;
		this.C = this.B = this.I = !1;
		this.c = [];
		this.h = [];
		this.b = [];
		this.J = [];
		new uh(this);
		this.g = this.H = !1;
	}
	var ts;
	D(ss, Ah);
	function vs() {
		this.b = {};
		this.a = {};
	}
	vs.prototype.has = function(a, b) {
		return null != this.b[a] || null != this.a[a] || (b && (a in this.b || a in this.a));
	};
	vs.prototype.write = function(a, b) {
		this.a[a] = b;
	};
	vs.prototype.remove = function(a) {
		delete this.a[a];
		delete this.b[a];
	};
	var ws = "_gt_" + Math.random().toString(36).substr(2),
		xs = "_gtn_" + Math.random().toString(36).substr(2);
	function ys(a) {
		if (!a) return !1;
		if (3 != a.nodeType || !G) return ws in a && !!a[ws];
		if (!a.parentNode) return !0;
		if (!(xs in a.parentNode)) return !1;
		var b = a.parentNode[xs];
		if (!b || !b[a.nodeValue]) return !1;
		b = b[a.nodeValue];
		for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
		return !1;
	}
	(function() {
		function a(a) {
			document.title = a;
		}
		var b = {};
		ts = function(c, d) {
			if (c.tagName == va) return { node: c, Qa: a, ae: !0, vg: !0, yf: !0 };
			if (3 == c.nodeType)
				return {
					node: c,
					Qa: function(a, b) {
						Wf(b, a);
					},
				};
			d || (d = "value");
			b[d] ||
				(b[d] = function(a, b) {
					b.setAttribute && b.setAttribute(d, a);
					y(a) && (b[d] = a);
				});
			c = { node: c, Qa: b[d], ae: !0 };
			"value" != d && (c.yf = !0);
			return c;
		};
	})();
	function zs(a, b) {
		if (!a) return "";
		if (a.tagName == va) return String(document.title);
		3 == a.nodeType ? (b = "nodeValue") : b || (b = "value");
		return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : y(a[b]) ? String(a[b]) : "";
	}
	ss.prototype.da = p("f");
	function As(a, b, c, d) {
		d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : ag(d);
		d = { S: c, U: Mc(d) };
		a.push(d);
		b[c] ? (b[c].end = d) : (b[c] = { start: d, end: d });
		return d;
	}
	function Bs(a, b, c) {
		b = { Kg: b, ff: c, aa: [] };
		a.b.push(b);
		return b;
	}
	function Cs(a) {
		if (!a.g && a.I && !a.B && !a.C) {
			a.B = !0;
			var b;
			if ((b = Ds(a.a))) {
				b = a.a;
				var c = a.b;
				if (1 == b.length && b[0] && b[0].yf) {
					for (var d = [], e = 0; e < c.length; ++e)
						for (var g = 0; g < c[e].aa.length; ++g) d.push(c[e].aa[g].U);
					b[0].Qa(d.join(" "), b[0].node);
					b = !0;
				} else b = !1;
				b = !b;
			}
			if (b && (b = os(a.a))) {
				a.h = b.hj;
				a.c = b.Hi;
				d = a.a;
				e = a.h;
				g = a.c;
				var h = b.Af;
				c = [];
				for (var k = 0; k < d.length; ++k)
					if (((c[k] = []), d[k].node && x(e[k])))
						for (var l = 0; l < g.length; ++l)
							if (!(h[l] > h[e[k]])) {
								if (h[l] == h[e[k]]) {
									if (g[l].node.parentNode != g[e[k]].node.parentNode) continue;
								} else {
									for (
										var m = h[e[k]] - h[l], q = g[e[k]].node.parentNode;
										m-- && q && q != g[l].node.parentNode;

									)
										q = q.parentNode;
									if (q != g[l].node.parentNode) continue;
								}
								c[k].push(l);
							}
				d = a.a;
				e = a.b;
				g = -1;
				for (h = e.length - 1; 0 <= h; --h)
					for (k = e[h], l = k.aa.length - 1; 0 <= l; --l)
						if (((m = k.aa[l]), !(0 > m.S) && d[m.S] && d[m.S].node))
							if (0 > g) (m.Jd = dq(c[m.S])), (g = c[m.S][c[m.S].length - 1]);
							else
								for (q = c[m.S].length - 1; 0 <= q; --q)
									if (c[m.S][q] <= g) {
										m.Jd = dq(c[m.S].slice(0, q + 1));
										g = c[m.S][q];
										break;
									}
				for (c = e = 0; c < a.b.length; ++c) {
					d = a.b[c];
					g = a.a;
					h = d;
					k = b.Af;
					l = a.h;
					m = "";
					for (q = 0; q < h.aa.length; ++q) {
						var t = h.aa[q];
						m += t.U;
						if (0 > t.S) {
							var w = -1,
								I = -1,
								Q = l[h.aa[q - 1].S];
							x(Q) && (w = k[Q]);
							q < h.aa.length - 1 && ((Q = l[h.aa[q + 1].S]), x(Q) && (I = k[Q]));
							if (0 <= w || 0 <= I)
								a: if (
									(
										(I = (0 > w || I < w) && q < h.aa.length - 1),
										(w = h.aa[I ? q + 1 : q - 1]),
										!(w.S >= g.length) && null != g[w.S].node
									)
								) {
									Q = t.U;
									t.U = "";
									if (
										/^ +$/.test(Q) &&
										(
											(t = I ? w.U.charCodeAt(0) : w.U.charCodeAt(w.U.length - 1)),
											(3584 <= t && 3711 >= t) ||
												(12288 <= t && 12351 >= t) ||
												(12352 <= t && 12543 >= t) ||
												(12784 <= t && 12799 >= t) ||
												(19968 <= t && 40959 >= t) ||
												(65280 <= t && 65519 >= t)
										)
									)
										break a;
									w.U = I ? Q + w.U : w.U + Q;
								}
						}
					}
					g = m;
					h = a.a;
					k = d;
					l = a.c;
					m = b.Af;
					q = a.h;
					t = [];
					for (w = 0; w < k.aa.length && !(e >= l.length); ++w)
						if (((I = k.aa[w]), I.Jd && !(0 > I.S) && h[I.S].node && I.U))
							if (e == q[I.S] || (e in I.Jd && (!(e + 1 in I.Jd) || e + 1 != q[I.S]))) {
								if (l[e] && l[e].node) {
									Q = rs(l[e].node);
									t.push(Q);
									for (
										var ma = l[e].node,
											Pt = m[q[I.S]] - m[e],
											xl = Q,
											Ci = h[I.S].node.parentNode,
											Di = xl;
										Ci && Pt--;

									)
										(Di = Ci.cloneNode(!1)), Di.appendChild(xl), (Ci = Ci.parentNode), (xl = Di);
									ma.appendChild(Di);
									ma = h[I.S].node;
									h[I.S].ae
										? h[I.S].vg || Q.appendChild(ma)
										: ((ma = h[I.S].node.cloneNode(!1)), ma.id && (ma.id = ""), Q.appendChild(ma));
									h[I.S].Qa(I.U, ma);
								}
							} else ++e, --w;
					h = t;
					t = a.a;
					k = a.l;
					if (d.Kg) k = d.Kg;
					else {
						l = t.length;
						m = -1;
						for (q = 0; q < d.aa.length; ++q)
							(w = d.aa[q].S), 0 <= w &&
								t[w] &&
								t[w].node &&
								((m = Math.max(m, w)), (l = Math.min(l, w)));
						t = "";
						for (q = l; q <= m; ++q) k[q] && (t += k[q]);
						k = t;
					}
					if (a.s) 3 != a.s.a.Jb && a.J.push(ls(a.s, h, k, g, d.ff, a));
					else for (d = 0; d < h.length; ++d) h[d].title = k;
				}
				b = a.a;
				for (c = 0; c < b.length; ++c) b[c].node && !b[c].ae && Kf(b[c].node);
				b = a.a;
				c = a.c;
				a = a.h;
				for (e = d = 0; e < c.length; ++e)
					if ((g = c[e].node)) {
						for (; d < b.length && e > a[d]; ) d++;
						(d >= b.length || e != a[d]) && !g.firstChild && (Kf(g), (c[e].node = null));
					}
			}
		}
	}
	ss.prototype.restore = function() {
		if (this.B)
			if (((this.B = !1), this.s && ms(this.s), (this.J = []), Ds(this.c), 1 == this.a.length && this.a[0].yf))
				this.a[0].Qa(this.l[0], this.a[0].node);
			else {
				for (var a = 0, b = 0; b < this.c.length; ++b) {
					var c = this.c[b].node;
					if (c) {
						for (; a < this.a.length && b > this.h[a]; ) {
							var d = a++;
							this.a[d].node && (Es(this.a[d].node), (this.a[d].node = null));
						}
						if (a < this.a.length && b == this.h[a] && this.a[a].node) {
							this.a[a].vg || (Hf(c), c.appendChild(this.a[a].node));
							this.a[a].Qa(this.l[a], this.a[a].node);
							a++;
							d = c;
							var e = d.parentNode;
							if (e && 11 != e.nodeType)
								if (d.removeNode) d.removeNode(!1);
								else {
									for (; (c = d.firstChild); ) e.insertBefore(c, d);
									Kf(d);
								}
						} else Kf(c);
					}
				}
				this.c = [];
			}
	};
	ss.prototype.F = function() {
		ss.m.F.call(this);
		this.restore();
		for (var a = 0; a < this.a.length; ++a) this.a[a].node && Es(this.a[a].node);
		this.a = null;
	};
	function us(a) {
		if (a)
			if (3 == a.nodeType && G) {
				(xs in a.parentNode && a.parentNode[xs]) || (a.parentNode[xs] = {});
				var b = a.parentNode[xs];
				b[a.nodeValue] || (b[a.nodeValue] = []);
				b = b[a.nodeValue];
				for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
				b.push(a);
			} else a[ws] = 1;
	}
	function Es(a) {
		if (!a || (3 == a.nodeType && G)) {
			var b = a.parentNode;
			if (b && xs in b) {
				var c = b[xs];
				if (c && a && c[a.nodeValue]) {
					var d = c[a.nodeValue];
					if (d)
						for (var e = 0; e < d.length; ++e)
							if (d[e] == a) {
								d.splice(e, 1);
								break;
							}
					0 == d.length && delete c[a.nodeValue];
				}
				if (c && sq(c))
					try {
						delete b[xs];
					} catch (g) {
						b[xs] = "";
					}
			}
		} else if (ws in a)
			try {
				delete a[ws];
			} catch (g) {
				a[ws] = "";
			}
	}
	function Ds(a) {
		for (var b = 0; b < a.length; ++b)
			try {
				a[b].node && !a[b].node.parentNode && (a[b].node = null);
			} catch (c) {
				a[b].node = null;
			}
		for (b = a.length - 1; 0 <= b && !a[b].node; --b);
		a.length = b + 1;
		return a.length;
	}
	function rs(a) {
		a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
		us(a);
		return a;
	}
	function Fs(a) {
		for (var b, c = a.firstChild; c; c = b)
			(b = c.nextSibling), 3 != c.nodeType && (c == a.firstChild ? If(c, a) : Jf(c, a), Fs(c));
	}
	function Gs(a, b, c, d, e) {
		b = b || {};
		this.ua = e || [];
		this.h = [];
		this.o = [];
		Hs(this, a || document.documentElement, !x(b.Rg) || !!b.Rg);
		this.l = c || ss;
		this.C = b.Ki;
		this.c = this.a = this.g = this.zc = null;
		this.s = !!b.Lj;
		this.H = !!b.Kj;
		this.I = this.s ? 27 : 13;
		this.G = !0;
		this.B = [];
		this.f = new Cl(this, d);
	}
	uq(5762, Gs.prototype, { Si: 1 });
	function Is(a, b, c, d) {
		a.f.c ||
			(
				(b = { eh: b, Yg: c, Ba: [], Lg: [], Hb: [], Xd: 0, size: 0, continuous: !0 }),
				(a.zc = null),
				Fl(a.f, a.b),
				Gl(a.f, d),
				Hl(
					a.f,
					C(function(a) {
						this.Si(a);
						d();
					}, a),
				),
				Il(a.f, b)
			);
	}
	function Js(a, b) {
		return 0 < a.Ba.length ? new b(a.Ba, a.Hb.join(""), a.Lg, a.Xd, a.size) : null;
	}
	function Ks(a, b) {
		if (!a.c) return (a.zc = Js(b, a.l)), !0;
		if (!b.continuous && 0 < b.Ba.length) return (a.zc = Js(b, a.l)), !0;
		b.continuous = a.c.Fg;
		a: {
			var c = a.c;
			var d = a.I;
			if (b.size > b.Yg || b.Xd > b.eh) c = !1;
			else {
				var e = c.size,
					g = c.text.length;
				if (
					0 != b.Ba.length &&
					((e += 1 == b.Ba.length ? b.size + d + d : b.size + d), (g += b.Xd), e > b.Yg || g > b.eh)
				) {
					c = !1;
					break a;
				}
				b.size = e;
				b.Xd = g;
				b.Ba.push(c.node);
				b.Lg.push(c.text);
				d = b.Ba.length - 1;
				0 == d
					? b.Hb.push(c.re)
					: (
							1 == d && (b.Hb[0] = "<a i=0>" + b.Hb[0] + "</a>"),
							b.Hb.push("<a i=" + d + ">"),
							b.Hb.push(c.re),
							b.Hb.push("</a>")
						);
				c = !0;
			}
		}
		if (c) return (a.c = null), !1;
		a.zc = Js(b, a.l);
		return !0;
	}
	function Ls(a, b, c) {
		var d = zs(b, c);
		d && zc(xc(d)) && a.B.push({ node: b, Ch: c, text: d });
	}
	Gs.prototype.b = function(a, b) {
		if (this.c && Ks(this, b)) return El;
		if (!this.a) {
			this.G = !!this.h.length;
			if (!this.h.length && (a = this.B.shift()))
				return (this.c = {
					Fg: !1,
					node: ts(a.node, a.Ch),
					text: a.text,
					re: Ec(a.text),
					size: this.s ? Cc(a.text).length : a.text.length,
				}), (b.continuous = !1), Ks(this, b), El;
			a = this.h.shift() || this.o.shift();
			if (!a) return (this.c = null), Ks(this, b), El;
			this.g = [a.Jj];
			this.a = new dr(a.root);
		}
		this.a.next();
		if (this.a.f) return (this.a = null), (b.continuous = !1), this.b;
		a = this.a.node();
		var c = this.a.a.a;
		if (-1 == c) {
			Ms(this);
			if (!a || (3 != a.nodeType && !$q[a.tagName])) b.continuous = !1;
			return this.b;
		}
		var d = !ys(a) && ((a.nodeType == wc && Ns(this)) || (!oe(a, "notranslate") && (oe(a, ac) || Ns(this))));
		this.g.push(d);
		c = 1 == c;
		if (
			((d =
				!!a &&
				((3 == a.nodeType && y(a.nodeValue)) ||
					(a.tagName == va && y(a.value)) ||
					(a.tagName == ua && oe(a, ac)) ||
					(a.tagName == oa && (cr[a.type] || oe(a, ac))))) ||
				c) &&
			this.G &&
			!Os(a)
		)
			return Hs(this, a, Ns(this), !0), this.a.a.h(), Ms(this), this.b;
		if (c && Ns(this)) {
			this.H && Ls(this, a, "title");
			Ls(this, a, "alt");
			var e = this.a;
			if (e.b[e.b.length - 1])
				for (e = a.firstChild; e; ) {
					if (3 == e.nodeType) {
						var g = e.nodeValue.split("\n");
						if (2 < g.length || (2 == g.length && "" != zc(g[0]) && "" != zc(g[1]))) {
							e.nodeValue = g[0];
							for (var h = 1; h < g.length; ++h) {
								var k = N(a).createElement("font");
								this.ua.push(k);
								Jf(k, e);
								e = k;
								Jf(N(a).createTextNode("\n" + g[h]), e);
								e = e.nextSibling;
							}
						}
					}
					e = e.nextSibling;
				}
		}
		if (d) {
			this.a.a.h();
			if (Ns(this)) {
				var l = zs(a);
				if (
					zc(xc(l)) &&
					(
						(this.c = { Fg: !0, node: ts(a), text: l, re: Ec(l), size: this.s ? Cc(l).length : l.length }),
						Ks(this, b)
					)
				)
					return Ms(this), El;
			}
			Ms(this);
			return this.b;
		}
		if (c) {
			if (Ps(a) || (!a.firstChild && a.tagName != na))
				return (b.continuous = b.continuous && !!br[a.tagName]), this.a.a.h(), Ms(this), this.b;
			if (a.tagName == na) {
				try {
					if (!(l = !a.src.match(/https?:\/\//))) {
						var m = a.src.match(Wi)[3] || null;
						l = (m ? decodeURI(m) : m) == window.location.hostname;
					}
					if (l) {
						var q = Uf(a).documentElement;
						q && Hs(this, q, Ns(this));
					}
				} catch (t) {}
				b.continuous = !1;
				this.a.a.h();
				Ms(this);
				return this.b;
			}
			Ns(this) && a && (3 == a.nodeType || $q[a.tagName])
				? this.C && "A" == a.tagName && a.href && this.C(a)
				: (b.continuous = !1);
			return this.b;
		}
		this.a.a.h();
		Ms(this);
		return this.b;
	};
	function Ps(a) {
		return (
			ys(a) ||
			(3 != a.nodeType && (!a.tagName || ar[a.tagName] || br[a.tagName] || oe(a, Rb) || "gts-order" == a.id))
		);
	}
	function Os(a) {
		if (3 == a.nodeType) return !0;
		if (1 != a.nodeType) return !1;
		if (!a.offsetWidth || !a.offsetHeight) {
			var b = N(a),
				c = null;
			b.defaultView && b.defaultView.getComputedStyle
				? (c = b.defaultView.getComputedStyle(a, null))
				: (c = a.currentStyle);
			return c && c.display != Db && c.visibility != nb;
		}
		return !0;
	}
	function Hs(a, b, c, d) {
		(d ? a.o : a.h).push({ root: b, Jj: !x(c) || c });
	}
	function Ns(a) {
		return a.g[a.g.length - 1];
	}
	function Ms(a) {
		a.g.pop();
	}
	function Qs() {
		R.call(this);
		this.a = [];
	}
	D(Qs, R);
	Qs.prototype.restore = function() {
		Fk(this.b, 0, this);
	};
	Qs.prototype.b = function() {
		for (var a = 0; a < this.a.length; ++a) Kf(this.a[a]);
		this.a = [];
	};
	Qs.prototype.F = function() {
		Qs.m.F.call(this);
		this.restore();
	};
	function Rs(a) {
		var b = new Zn();
		Vi(a, function(a) {
			if (Of(a)) b.add(a);
			else {
				a: {
					var c;
					if (
						ve &&
						!(G && K("9") && !K("10") && v.SVGElement && a instanceof v.SVGElement) &&
						(c = a.parentElement)
					) {
						a = c;
						break a;
					}
					c = a.parentNode;
					a = Of(c) ? c : null;
				}
				null != a && b.add(a);
			}
		});
		return b;
	}
	function Ss(a) {
		this.b = !0;
		this.f = a;
		this.c = !1;
		this.a = [];
	}
	Ss.prototype.da = function() {
		return this.a.join("");
	};
	function Ts(a, b) {
		this.g = a;
		this.f = !0;
		this.c = b;
		this.a = null;
		this.b = 0;
	}
	function Us(a, b) {
		return a.f ? (b(C(a.h, a), a.g, a.c ? "en" : ""), !0) : !1;
	}
	Ts.prototype.h = function(a, b, c) {
		this.a = b;
		this.b = c;
		a();
	};
	function Vs(a, b) {
		this.f = a;
		this.o = !!b;
		this.b = this.s = 0;
		this.g = this.c = -1;
		this.h = this.l = this.a = 0;
	}
	var Ws = dq(". , ; : \\? !".split(" ")),
		Xs = dq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
	function Ys(a, b, c) {
		a.o && (b -= 9);
		for (var d = "", e = 0, g = a.s; g < a.f.length; ++g) {
			var h = a.f.charAt(g),
				k = h.charCodeAt(0);
			e++;
			a.a += a.o
				? 127 >= k
					? 32 >= k || Xs[k] ? 3 : 1
					: 2047 >= k || (55296 <= k && 56319 >= k) || (56320 <= k && 57343 >= k) ? 6 : 9
				: 1;
			k = a.a >= b;
			Ws[h] ? ((a.g = g), (a.l = a.a), (k = k || e > c)) : " " == h && ((a.c = g), (a.h = a.a), (k = k || e > c));
			if (k)
				return 0 <= a.g
					? (
							(d = a.f.substring(a.b, a.g + 1)),
							(a.a -= a.l),
							(a.b = a.g + 1),
							a.g >= a.c ? ((a.c = -1), (a.h = 0)) : (a.h -= a.l),
							(a.g = -1),
							(a.l = 0)
						)
					: 0 <= a.c
						? ((d = a.f.substring(a.b, a.c + 1)), (a.a -= a.h), (a.b = a.c + 1), (a.c = -1), (a.h = 0))
						: (
								(d = a.f.substring(a.b, g + 1)),
								(a.a = 0),
								(a.b = g + 1),
								(a.g = a.c = -1),
								(a.h = a.l = 0)
							), (a.s = g + 1), d;
		}
		a.b < a.f.length && ((d = a.f.substring(a.b)), (a.b = a.f.length));
		return d;
	}
	function Zs(a, b, c, d, e, g) {
		this.B = d || z;
		this.R = g || z;
		this.H = !!e;
		this.c = a.a.Dg;
		this.f = 0;
		this.G = z;
		this.C = c;
		this.s = this.b = this.h = 0;
		this.a = null;
		this.I = 0;
		this.pa = !1;
		this.X = a.a.Bg;
		this.J = [];
		this.la = 0;
		this.g = (this.K = a.a.pe) ? a.a.Ye - new Yi(a.a.va.b).toString().length : a.a.Ye;
		this.Ca = this.H ? 1 : 6;
		this.La = a.a.Tg;
		this.ua = b;
		this.l = [];
		this.ha = a;
	}
	function $s(a, b) {
		var c = 0;
		a.G = C(function() {
			++c == this.l.length && b();
		}, a);
	}
	function at(a, b, c) {
		if (0 == a.b && ((a.b = b ? 860 : a.g), !c || c <= a.g)) {
			a.h = a.b;
			return;
		}
		do (b = a.b), a.b < a.g && ((a.b *= a.Ca), a.b > a.g && (a.b = a.g));
		while (b != a.b && c && a.b < c);
		a.h = a.b;
	}
	function bt(a, b) {
		var c = null != b,
			d = !c && !a.pa;
		(d || c) && a.B(100, d, b);
	}
	function ct(a) {
		return a.K ? a.a.K : a.a.da().length;
	}
	function dt(a, b, c, d) {
		return new Gs(
			a.ua.shift(),
			{ Lj: a.K, Ki: b, Rg: !0, Kj: !!c },
			function() {
				var a = Array.prototype.slice.call(arguments);
				return new ss(a.shift(), a.shift(), a.shift(), a.shift(), a.shift(), c);
			},
			a.C,
			d,
		);
	}
	function et(a, b, c) {
		if (0 < a.X && ft(b) >= a.X) return !0;
		if (ct(a) > a.b) {
			if (0 < ft(b)) return !0;
			at(a, c, ct(a));
			for (var d = a.a.da(), e = new Vs(d, a.K), g; (g = Ys(e, a.b, a.c)); )
				if ((b.g.push(new Ts([g], !1)), (a.f += g.length), (a.c -= g.length), 0 >= a.c)) {
					b.B = d.substring(e.b);
					break;
				} else at(a, c);
			gt(b, a.a, !0);
			a.a = null;
			return !0;
		}
		if (ct(a) > a.h) return !0;
		gt(b, a.a, !0);
		a.h -= ct(a) + a.La;
		a.f += a.a.G;
		a.c -= a.a.G;
		a.a = null;
		return !1;
	}
	function ht(a, b) {
		R.call(this);
		this.f = b;
		this.b = { rootMargin: a };
		this.a = new IntersectionObserver(C(this.c, this), this.b);
	}
	D(ht, R);
	ht.prototype.F = function() {
		ht.m.F.call(this);
		this.a = null;
	};
	ht.prototype.c = function(a) {
		for (var b = 0; b < a.length; b++)
			if (0 < a[b].intersectionRatio) {
				this.f();
				break;
			}
	};
	function it() {
		T.call(this);
	}
	D(it, T);
	it.prototype.D = function() {
		this.T(Bj(or));
	};
	it.prototype.T = fc("A");
	function jt(a) {
		qe(a.j(), mb);
		qe(a.j().firstChild, lb);
	}
	function kt(a) {
		this.a = a || new it();
		this.a.D();
		this.a.fa();
		this.b = 0;
	}
	kt.prototype.reset = function() {
		this.b = 0;
		jt(this.a);
	};
	function lt(a, b, c, d, e, g, h, k) {
		this.g = a;
		this.b = b;
		this.s = [];
		this.B = null;
		this.f = c;
		this.a = d;
		this.c = e;
		this.ua = g;
		this.H = h;
		this.o = this.h = null;
		this.l = k || null;
		this.I = this.C = !1;
		this.G = {};
	}
	function mt(a) {
		for (var b = new Zn(), c = 0; c < a.length; c++) {
			for (var d = a[c], e = new Zn(), g = 0; g < d.a.length; g++) {
				var h = d.a[g].node;
				null != h && e.add(h);
			}
			$n(b, e);
		}
		return b;
	}
	u = lt.prototype;
	u.Vc = function(a) {
		a = this.h = new ht("200px", C(this.wi, this, a));
		var b = Rs(mt([].concat(this.b, this.s)));
		Vi(b, C(a.a.observe, a.a));
		a = this.o = new ht("0px", C(this.Ai, this));
		b = Rs(mt([].concat(this.b, this.s)));
		Vi(b, C(a.a.observe, a.a));
	};
	u.wi = function(a) {
		this.h && (this.h.a.disconnect(), (this.h = null));
		a();
	};
	u.Ai = function() {
		this.C = !0;
		nt(this);
		if (!this.I && this.l) {
			var a = this.l;
			0 == a.b++ && ((a = a.a), L(a.j(), mb), L(a.j().firstChild, lb));
		}
	};
	function nt(a) {
		a.o && (a.o.a.disconnect(), (a.o = null));
	}
	u.$g = function() {
		if (this.C && !this.I && this.l) {
			var a = this.l;
			0 == --a.b && jt(a.a);
		}
		this.h && (this.h.a.disconnect(), (this.h = null));
		nt(this);
	};
	function gt(a, b, c) {
		c ? (a.b.push(b), (a.G[b.da()] = !0)) : a.s.push(b);
	}
	function ft(a) {
		return a.b.length + a.s.length;
	}
	function ot(a) {
		if (0 == a.g.length) {
			for (var b = [], c = 0; c < a.b.length; ++c) b.push(a.b[c].da());
			a.g.push(new Ts(b, !1));
		}
	}
	u.translate = function(a) {
		function b() {
			d++;
			d == c && e();
		}
		ot(this);
		for (
			var c = 0, d = 0, e = z, g = this.f, h = this.a, k = this.c, l = this.ua, m = this.H, q = 0;
			q < this.g.length;
			++q
		)
			Us(this.g[q], function(a, c, d) {
				a = g.ha.translate(rc(a, b), c, d || h, k, ++g.la, l, m, g.H);
				g.J.push(a);
				return a;
			}) && c++;
		0 != c && (e = Jl(a));
		return c;
	};
	function pt(a, b) {
		R.call(this);
		this.b = [];
		this.f = [];
		this.a = a;
		this.c = b;
	}
	D(pt, R);
	pt.prototype.g = function(a) {
		var b = zc(a.href);
		0 == b.indexOf("javascript:") ||
			0 <= b.indexOf("#") ||
			(this.f.push(a.href), this.b.push(a), (a.href = b + "#googtrans/" + this.a + "/" + this.c));
	};
	pt.prototype.F = function() {
		pt.m.F.call(this);
		this.restore();
	};
	pt.prototype.restore = function() {
		if (this.b.length) {
			for (var a = 0; a < this.b.length; ++a) this.b[a].href = this.f[a];
			this.b = [];
			this.f = [];
		}
	};
	function qt(a, b) {
		R.call(this);
		this.b = a;
		this.a = Be.test(b) ? "translated-rtl" : "translated-ltr";
		a = [].concat(this.b);
		for (b = 0; b < a.length; ++b) Of(a[b]) && L(a[b], this.a);
	}
	D(qt, R);
	qt.prototype.F = function() {
		qt.m.F.call(this);
		this.restore();
	};
	qt.prototype.restore = function() {
		for (var a = [].concat(this.b), b = 0; b < a.length; ++b) Of(a[b]) && qe(a[b], this.a);
	};
	function rt(a, b, c, d, e, g, h, k, l, m) {
		R.call(this);
		this.qa = a;
		this.Hf = b;
		this.la = c || null;
		this.Ca = m || null;
		this.G = null;
		this.sb = !!d;
		this.Gb = !!g;
		this.o = [];
		this.ib = this.B = this.b = !1;
		this.l = k || new vs();
		this.Zc = !k;
		this.pa = h || yl.$();
		this.La = new Qs();
		this.R = this.K = this.C = !1;
		this.ab = this.f = 0.5;
		this.bb = 0.01;
		this.s = new zl(this.f);
		this.J = (this.h = this.ha = !!l) ? new MutationObserver(C(this.ri, this)) : null;
		S(window, Ia, this.qg, !0, this);
		S(window, $a, this.rg, !0, this);
	}
	D(rt, R);
	uq(3046, rt.prototype, { Oi: 1, Qi: 2, Pi: 3, Ri: 4 });
	u = rt.prototype;
	u.Mh = function(a) {
		this.Oi.apply(this, arguments);
		this.g && this.g(0, !1, 1);
	};
	u.Sf = function(a) {
		this.Pi.apply(this, arguments);
		this.g && this.g(0, !1, 1);
	};
	u.Nh = function(a) {
		this.Qi.apply(this, arguments);
		this.g && this.g(0, !1, 1);
	};
	u.Oh = function(a) {
		this.Ri.apply(this, arguments);
		this.g && this.g(0, !1, 1);
	};
	u.translate = function(a, b, c, d, e) {
		if (d || a != this.a || b != this.c) st(this), this.Zc && (this.l = new vs());
		else if (this.b) return;
		this.g = c;
		this.Xc = e;
		this.h = this.ha && Vq(a, b);
		this.J && this.J.observe(document.body, { attributes: !0, childList: !0, characterData: !0, subtree: !0 });
		this.b = !0;
		this.a = a;
		this.c = b;
		this.sb && (this.G = new pt(a, b));
		this.R = this.a == Fa;
		this.la && ((c = this.la), a && (c.s = a), b && (c.o = b));
		this.X = new qt(this.qa, this.c);
		this.I = tt(this);
	};
	function tt(a) {
		var b = new Cl(a, a.pa);
		Fl(b, a.mg);
		Hl(b, C(a.Mh, a));
		Il(b, new Zs(a.Hf, [].concat(a.qa), a.pa, a.g, a.h, a.Xc));
		return b;
	}
	u.restore = function() {
		st(this);
		this.La.restore();
	};
	u.F = function() {
		rt.m.F.call(this);
		this.restore();
		oh(window, Ia, this.qg, !0, this);
		oh(window, $a, this.rg, !0, this);
	};
	function ut(a, b, c, d) {
		var e = sq(a.l.b),
			g = new Cl(a, b.C);
		b.l.push(g);
		Gl(g, b.G);
		at(b, e);
		Fl(g, d || a.ig);
		b = c || new lt([], [], b, a.a, a.c, a.ib, a.B, a.Ca);
		Hl(g, a.xi, a);
		a.h && Gl(g, b.$g, b);
		Il(g, b);
	}
	u.xi = function(a, b, c) {
		c.$g();
		this.B ? this.Oh(a) : this.Nh(a);
		c.f.G();
	};
	u.rg = function() {
		this.C = !1;
		this.H = 0;
		Al(this.s, this.f);
	};
	u.qg = function(a) {
		a.target == window && ((this.C = !0), (this.H = 0), Al(this.s, 0.01));
	};
	u.ri = function(a) {
		if (this.b && this.h) {
			for (var b = 0; b < a.length; b++)
				if (
					a[b].target &&
					a[b].target.className &&
					(0 <= a[b].target.className.indexOf(ac) || 0 == a[b].target.className.indexOf("goog-"))
				)
					return;
			this.pa.add(C(this.pj, this));
		}
	};
	u.pj = function() {
		this.B = !0;
		this.I.stop();
		this.I = tt(this);
		return !1;
	};
	u.mg = function(a, b) {
		$s(b, Jl(a));
		ut(this, b);
		return this.Ci;
	};
	u.Ci = function(a, b) {
		if (!this.b) return El;
		if (!Kl(a)) return Dl;
		if (!this.h)
			for (a = 0; a < this.o.length; ++a) {
				var c = C(this.Jf, this, b, this.o[a]);
				b.C.add(c);
			}
		return this.Bi;
	};
	u.fg = function(a, b) {
		if (this.H && !this.C) {
			a = new Date().getTime() - this.H;
			var c = this.f;
			900 > a && 0.01 < c ? (c = Math.max(0.9 * c, 0.01)) : 1100 < a && 0.5 > c && (c = Math.min(1.5 * c, 0.5));
			this.f = c;
			this.K ? (this.bb = 0.01) : (this.ab = this.f);
		}
		this.B = this.b = !0;
		this.H = new Date().getTime();
		this.Yc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML)
			? ((this.Yc = a), (a = !0))
			: (a = !1);
		a
			? (
					(this.K = !1),
					(this.f = this.ab),
					this.C || Al(this.s, this.f),
					(a = [].concat(this.qa)),
					(c = this.s),
					(b.B = z),
					(b.ua = a),
					(b.a = null),
					(b.la = 0),
					(b.l = []),
					(b.G = z),
					(b.C = c),
					(a = new Cl(this, this.s)),
					Fl(a, this.mg)
				)
			: (
					(this.K = !0),
					(this.f = this.bb),
					this.C || Al(this.s, this.f),
					(a = new Cl(this, this.s)),
					Fl(a, this.fg)
				);
		Hl(a, C(this.Sf, this));
		Il(a, b);
		this.I = a;
		return El;
	};
	u.Bi = function(a, b) {
		if (!this.b) return El;
		this.B = this.b = !1;
		this.R ? bt(b, !0) : (bt(b), b.R(b.f));
		if (this.Gb) return this.fg;
		for (a = 0; a < b.l.length; ++a) b.l[a].stop();
		for (a = 0; a < b.J.length; ++a) b.ha.a.va.cancel(b.J[a]);
		return El;
	};
	function vt(a, b, c) {
		a: {
			var d = a.sb ? C(a.G.g, a.G) : z;
			b = Jl(b);
			if (!c.o) {
				if (0 == c.ua.length) {
					c = !1;
					break a;
				}
				c.o = dt(c, d, a.la, a.La.a);
			}
			c.qa = !0;
			Is(c.o, c.c, c.g, b);
			c = !0;
		}
		return c ? a.ig : a.Bd;
	}
	u.ig = function(a, b) {
		if (!this.b) return El;
		var c = b.f;
		if (null == c.a) {
			if (!c.qa) return vt(this, a, b.f);
			if (!Kl(a)) return Dl;
			c.qa = !1;
			c.a = c.o.zc || null;
			var d = c.a ? c.a : (c.o = null);
			if (!d) return vt(this, a, b.f);
			this.o.push(d);
			var e = d.da();
			if (this.l.has(e, !this.h) || (null != b.G[e] && b.G[e]))
				return (e = c.a.G), (c.f += e), (c.c -= e), (c.a = null), this.h && gt(b, d, !1), vt(this, a, b.f);
			this.l.a[d.da()] = null;
		}
		0 < ft(b) && Al(this.s, 0.5);
		return et(c, b, sq(this.l.b)) ? this.Bd : vt(this, a, b.f);
	};
	u.Bd = function(a, b) {
		if (!this.b || 0 == ft(b)) return El;
		ut(this, b.f);
		return this.h ? (b.Vc(Jl(a)), this.Di) : 0 == b.translate(a) ? El : this.lg;
	};
	u.Di = function(a, b) {
		return this.b ? (Kl(a) ? (0 == b.translate(a) ? El : this.lg) : Dl) : El;
	};
	u.Jf = function(a, b) {
		b.g && this.l.remove(b.f);
		if (!this.b) return !1;
		if (this.l.has(b.da(), !1)) {
			var c = this.l;
			if (c.has(b.f, !1)) {
				var d = b.f,
					e = c.a[d];
				e || ((e = c.b[d]), (c.a[d] = e));
				b.b = e;
				b.I = !0;
			} else c.remove(b.f), (b.g = !0);
			Cs(b);
		} else if (((c = this.l), b.g)) c.remove(b.f);
		else if (b.o) {
			d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
			b.I = !0;
			delete b.o;
			b.o = null;
			b.b = [];
			e = document.createElement("div");
			P(e, !1);
			e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
			document.body.appendChild(e);
			d = [];
			var g;
			for (g = e.firstChild; g; g = g.nextSibling)
				if ("I" == g.tagName) var h = Bs(b, ag(g), g.innerHTML);
				else if ("B" == g.tagName) {
					h || (h = Bs(b, "", ""));
					if (1 == b.a.length) As(h.aa, d, 0, g);
					else {
						var k = d;
						var l = g;
						var m = b.a;
						h = h.aa;
						for (var q = [], t, w = l.firstChild; w; w = t) (t = w.nextSibling), Fs(w);
						for (t = l.firstChild; t; t = t.nextSibling)
							t.attributes && t.attributes.i
								? (
										(l = parseInt(t.attributes.i.nodeValue, 10)),
										!isNaN(l) &&
											0 <= l &&
											l < m.length &&
											(m[l].ae && q[l]
												? (q[l].U +=
														t.firstChild && 3 == t.firstChild.nodeType
															? t.firstChild.nodeValue
															: ag(t))
												: (q[l] = As(h, k, l, t)))
									)
								: 3 == t.nodeType && h.push({ S: -1, U: Mc(t.nodeValue) });
						null != h &&
							0 < h.length &&
							-1 == h[0].S &&
							(1 == h.length ? (h[0].S = 0) : ((h[1].U = h[0].U + h[1].U), h.shift()));
					}
					h = void 0;
				}
			g = b.b;
			for (k = 0; k < g.length - 1; ++k)
				(m = g[k]), (h = Bc(m.aa[m.aa.length - 1].U)), (h = h.charCodeAt(h.length - 1)), (12288 <= h &&
					12351 >= h) ||
					(65280 <= h && 65519 >= h) ||
					(m.aa[m.aa.length - 1].U += " ");
			Kf(e);
			for (e = 0; e < b.a.length; ++e)
				e < d.length &&
					e < b.l.length &&
					null != d[e] &&
					(
						(g = b.l[e]),
						(k = d[e].start),
						null != k &&
							(
								(m = g.substring(0, g.length - Ac(g).length)),
								" " == m && (m = ""),
								m && (k.U = m + Ac(k.U))
							),
						(k = d[e].end),
						null != k && ((g = g.substring(Bc(g).length)), " " == g && (g = ""), g && (k.U = Bc(k.U) + g))
					);
			1 != b.b.length || b.b[0].ff || (b.b[0].ff = b.f);
			c.write(b.f, b.b);
			Cs(b);
		}
		b.H || (this.R = !1);
		c = b.g ? !0 : void 0;
		a.I += b.G;
		null != c && (a.pa = !0);
		b = Math.min(Math.floor(100 * a.I / a.f), 100);
		if (a.s != b || c) (a.s = b), a.H ? (a.B(a.s, !0, c), a.R(a.I)) : a.B(a.s, !1, c);
		return !1;
	};
	u.lg = function(a, b) {
		if (!this.b) return El;
		if (!Kl(a)) return Dl;
		if (1 < ft(b)) {
			a = b.g[0];
			var c = b.b;
			if (a.c || 0 == c.length || null == a.a || 0 == a.a.length) a = null;
			else {
				for (var d = [], e = [], g = 0; g < a.a.length && g < c.length; ++g) {
					var h = a.a[g];
					(h && h[0] && 200 == h[1]) || (e.push(c[g]), d.push(a.g[g]));
				}
				a = 0 < e.length ? { rj: new Ts(d, !0), sj: e } : null;
			}
			a = a ? new lt([a.rj], a.sj, b.f, b.a, b.c, b.ua, b.H, b.l) : null;
			null != a && ut(this, b.f, a, this.Bd);
		} else {
			a = !1;
			for (c = 0; c < b.g.length; ++c)
				(d = b.g[c]), d.c || (200 == d.b && d.a && d.a[0]) ? (d = d.f = !1) : ((d.c = !0), (d = d.f = !0)), (a =
					d || a);
			if (a) return this.Bd;
		}
		d = this.a;
		a = this.c;
		if (1 < b.b.length)
			if (((c = b.g[0]), (e = d == Fa), (d = b.b), 200 == c.b))
				for (g = 0; g < c.a.length && g < d.length; ++g)
					if ((h = c.a[g]) && 200 == h[1]) {
						var k = h[2],
							l = d[g],
							m = l,
							q = null != k && k == a;
						m.o = h[0];
						x(q) && (m.C = q);
						l.H = e && null == k;
					} else d[g].g = !0;
			else for (a = 0; a < d.length; ++a) d[a].g = !0;
		else {
			c = new Ss(d == Fa);
			for (d = 0; d < b.g.length; ++d)
				(h = b.g[d]), (e = a), (g = c), 200 == h.b && h.a && h.a[0]
					? (
							(h = h.a[0]),
							g.a.push(h[0]),
							(h = h[2]),
							(g.b = g.b && null != h && h == e),
							null != h && (g.f = !1)
						)
					: (g.c = !0);
			null != b.B && (c.a.push(b.B), (b.B = null));
			if ((a = b.b[0])) (d = c.b), (a.o = c.da()), x(d) && (a.C = d), (a.H = c.f), (a.g = c.c);
		}
		if (this.h) {
			a = C(this.Jf, this);
			for (c = 0; c < b.b.length; c++) a(b.f, b.b[c]);
			for (c = 0; c < b.s.length; c++) a(b.f, b.s[c]);
			nt(b);
			b.I = !0;
			b.C && b.l && ((b = b.l), 0 == --b.b && jt(b.a));
		}
		return El;
	};
	function st(a) {
		a.J && a.J.disconnect();
		a.Ca && a.Ca.reset();
		a.b && (a.I.stop(), (a.b = !1), (a.B = !1));
		if (a.o.length) {
			for (var b = 0; b < a.o.length; ++b) a.o[b].M();
			a.o = [];
		}
		null != a.G && (a.G.restore(), (a.G = null));
		null != a.X && (a.X.restore(), (a.X = null));
	}
	function wt(a, b, c, d, e, g, h, k) {
		R.call(this);
		this.I = b || null;
		this.J = !!c;
		this.C = d || "transparent";
		this.g = g || "";
		b = h || { fetchStart: 0, Ck: 0 };
		a = b.fetchStart || 0;
		b = b.fetchEnd || 0;
		this.G = a && b ? b - a : 0;
		this.K = sc() - Pp;
		this.l = !1;
		this.b = new Wq(e || "", void 0, g);
		this.H = new zl(1);
		this.s = new vs();
		this.f = null;
		this.h = !0;
		this.o = null != v.IntersectionObserver;
		this.B = k || null;
		new uh(this);
		e = new eq();
		g = new gq(C(this.b.g, this.b, e.register()));
		this.pd = hq(g, e.fb(C(this.pd, this)));
		this.ld = hq(g, e.fb(C(this.ld, this)));
		this.$d = hq(g, e.fb(C(this.$d, this)));
		this.restore = hq(g, e.fb(C(this.restore, this)));
		g.finish();
		e.finish();
	}
	D(wt, R);
	uq(14097, wt.prototype, {
		Ve: function() {
			nq(this.b.c ? "te_afas" : "te_afau");
		},
	});
	u = wt.prototype;
	u.Ya = function() {
		return this.b.c;
	};
	u.pd = function(a, b) {
		if (this.b.Ya()) {
			var c = this.b,
				d = { alpha: !0 };
			b && (d.hl = b);
			c.f.send(d, a);
		} else this.Ve(), a(null);
	};
	u.ld = function(a) {
		var b = document.documentElement.lang;
		if (b) a(b);
		else if (this.b.Ya()) {
			var c = new pm(document.body, !1, !1, 1, 1);
			b = [];
			try {
				for (var d = 0, e = this.b.b.Cg; b.length + d < e; ) {
					var g = c.next();
					if (1 == c.a && Ps(g)) c.h();
					else if (3 == g.nodeType) {
						var h = zc(xc(g.nodeValue));
						h && (b.push(h), (d += h.length));
					}
				}
			} catch (k) {
				if (k != Li) throw k;
			}
			e = this.b;
			b = b.join(" ");
			a = e.b.ed(a);
			e.b.va.send({ q: b.substring(0, e.b.Cg), sl: Fa, tl: "en" }, a);
		} else this.Ve(), a(null, !0);
	};
	u.$d = function(a, b, c, d, e) {
		var g = sc();
		vq();
		if (!a || tq(a, b)) a = Fa;
		if (e || a != this.a || b != this.c) this.s = new vs();
		this.a = a;
		this.c = b;
		this.b.Ya()
			? (
					(d = d || document.documentElement),
					this.f && this.f.M(),
					this.B.reset(),
					(this.f = new rt(d, this.b, this.I, this.J, this.C, !0, this.H, this.s, this.o, this.B)),
					(this.f.ib = this.l),
					(this.h = !0),
					this.f.translate(a, b, c, e, C(this.Ui, this, g, a, b))
				)
			: (this.Ve(), c(0, !1, !0));
	};
	u.Aj = function() {
		return !!this.f && this.f.b;
	};
	u.Vg = fc("l");
	u.restore = function() {
		vq();
		this.b.Ya() && this.f && this.f.restore();
	};
	u.F = function() {
		wq();
		wt.m.F.call(this);
		this.b.M();
		this.f = this.b = null;
		this.s = new vs();
	};
	u.Ui = function(a, b, c, d) {
		this.h &&
			(
				(this.h = !1),
				(d = { sl: b, tl: c, textlen: d }),
				this.l && (d.ctt = "1"),
				"" != this.g && (d.sp = this.g),
				Vq(b, c) && 0 != this.g.indexOf("nmt") && (d.sp = "" != this.g ? "nmt," + this.g : "nmt"),
				(d.ttt = sc() - a),
				(d.ttl = this.K),
				this.G && (d.ttf = this.G),
				this.o && Vq(b, c) && (d.sr = 1),
				nq("te_time", d)
			);
	};
	function xt(a) {
		T.call(this, a);
		this.l = new uh(this);
	}
	D(xt, T);
	u = xt.prototype;
	u.D = function() {
		var a = dg(this.b, "select");
		a.className = "goog-te-combo";
		this.T(a);
	};
	u.P = function() {
		xt.m.P.call(this);
		this.Rf();
	};
	u.Rf = function() {
		S(this.j(), Ma, kq(this, Ma));
		this.dispatchEvent(wb);
	};
	u.Z = function() {
		xt.m.Z.call(this);
		this.l.M();
		this.l = null;
	};
	function yt(a, b) {
		a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()), b.appendChild(a.j()));
	}
	u.Tc = function(a) {
		this.b.Qc(this.j());
		for (var b in a)
			if (a[b] !== Object.prototype[b]) {
				var c = this.b.D(pa, { value: b });
				this.b.hb(c, a[b]);
				this.j().appendChild(c);
			}
		this.j().selectedIndex = 0;
	};
	u.za = function() {
		return this.j().value;
	};
	u.xa = function(a) {
		if (this.j().value != a)
			for (var b = 0, c; (c = this.j().options.item(b)); ++b)
				if (c.value == a) {
					this.j().selectedIndex = b;
					break;
				}
	};
	u.ra = function(a) {
		if ("undefined" == A(a)) return this.j().options.item(this.j().selectedIndex).text;
		for (var b = 0, c; (c = this.j().options.item(b)); ++b) if (c.value == a) return c.text;
	};
	u.oa = function(a) {
		this.j().disabled = !a;
	};
	function zt(a) {
		xt.call(this, a);
	}
	D(zt, xt);
	zt.prototype.Db = function(a) {
		this.Tc.call(this, a);
	};
	function At(a, b) {
		xt.call(this, b);
		this.a = (a && td(a)) || {};
		this.a.lf = this.a.lf || 11;
		this.a.Ud = 0 != this.a.Ud;
		this.a.Ka || (this.a.Ka = $p);
	}
	D(At, xt);
	u = At.prototype;
	u.fd = function() {
		throw Error("Not implemented.");
	};
	u.D = function() {
		this.fd();
		this.o = this.j();
		this.f = Af(na, { frameBorder: 0, class: "goog-te-menu-frame skiptranslate", title: Z.kh });
		this.f.style.visibility = cc;
		P(this.f, !1);
		document.body.appendChild(this.f);
	};
	u.Rf = function() {
		var a = Be.test(Mp) ? Pb : "ltr",
			b = this.a.Ka,
			c = V(this, "menuBody");
		this.l.w(this.f, wb, this.Fj);
		oq(
			this.f,
			C(function() {
				var d = Uf(this.f);
				d.write(
					ia +
						X(b) +
						'"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' +
						X(a) +
						'" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' +
						X(c) +
						'" class="goog-te-menu"></div></body>',
				);
				d.close();
			}, this),
		);
	};
	u.Fj = function() {
		this.c = new nf(Uf(this.f));
		this.J = this.c.j(V(this, "menuBody"));
		this.l.w(this.o, Qa, this.Ie);
		G ? this.l.w(this.f, Ia, this.Ad) : this.l.w(Vf(this.f), Ia, this.Ad);
		this.dispatchEvent(wb);
	};
	u.Z = function() {
		At.m.Z.call(this);
		Kf(this.f);
		this.o = this.R = this.h = this.J = this.c = this.f = null;
	};
	u.jg = function(a) {
		this.g != a.currentTarget.value && (this.xa(a.currentTarget.value), this.dispatchEvent(Ma));
		this.Ad();
	};
	u.Ie = function() {
		Bt(this);
		Vf(this.f).focus();
		this.X = !0;
	};
	u.Ad = function() {
		this.X && ((this.X = !1), Bt(this, !1), zf(N(this.o)).focus());
	};
	u.hf = ec();
	u.jf = ec();
	function Bt(a, b) {
		if ("undefined" == typeof b || b) {
			a.jf();
			b = sg(a.o, window);
			var c = b.y + a.o.offsetHeight,
				d = b.y - a.C.height,
				e = b.x,
				g = b.x + a.o.offsetWidth - a.C.width;
			if (G && !K("7.0")) {
				var h = document.body;
				c -= h.offsetTop;
				d -= h.offsetTop;
				e -= h.offsetLeft;
				g -= h.offsetLeft;
			} else (h = xf(document)), (c -= h.y), (d -= h.y), (e -= h.x), (g -= h.x);
			h = vf(window);
			b.y = b.y <= h.height - a.C.height ? c : d;
			b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
			0 > b.y && (b.y = 0);
			Be.test(Mp) ? (b.x = 0 <= g ? g : e) : (b.x = e <= h.width - a.C.width ? e : g);
			b.x > h.width - a.C.width && (b.x = h.width - a.C.width);
			0 > b.x && (b.x = 0);
			lg(a.f, b);
			P(a.f, !0);
			Ct(a);
		} else a.hf(), P(a.f, !1);
	}
	u.za = p("g");
	u.Tc = function(a) {
		this.c.Qc(this.J);
		P(this.f, !0);
		this.ha = a;
		this.h = [];
		for (var b in a)
			if (a[b] !== Object.prototype[b])
				if ("---" == a[b]) {
					var c = { link: this.c.D(f, { className: "goog-te-menu2-separator", value: b }), Ii: !0 };
					this.h.push(c);
				} else {
					c = { link: this.c.D("A", { className: kb, href: tb, value: b }) };
					this.h.push(c);
					var d = this.c.D(f, { style: "white-space:nowrap" });
					this.c.appendChild(c.link, d);
					this.a.Ud && this.c.appendChild(d, this.c.D(ta, { className: "indicator" }, "\u203a"));
					this.c.appendChild(d, this.c.D(ta, { className: "text" }, a[b]));
					this.l.w(c.link, Qa, this.jg);
				}
		a = this.h.length - 1;
		a = Math.round((a - a % this.a.lf) / this.a.lf) + 1;
		this.R = this.c.D("TABLE", { cellspacing: 0, cellpadding: 0, border: 0 });
		b = this.c.D("TBODY");
		c = this.c.D("TR", { valign: "top" });
		this.J.className = "goog-te-menu2";
		this.c.appendChild(this.J, this.R);
		this.c.appendChild(this.R, b);
		this.c.appendChild(b, c);
		for (d = b = 0; b < a; ++b) {
			var e = this.c.D("TD");
			this.c.appendChild(c, e);
			for (var g = 0; 11 > g && d < this.h.length; ++g, ++d) this.c.appendChild(e, this.h[d].link);
			b != a - 1 && ((e = this.c.D("TD", { class: "goog-te-menu2-colpad" }, "\u00a0")), this.c.appendChild(c, e));
		}
		this.g = null;
		this.xa(this.h[0].link.value);
		Ct(this);
		P(this.f, !1);
	};
	u.ra = function(a) {
		a = "undefined" == A(a) ? this.g : a;
		return this.ha[a];
	};
	u.kf = ec();
	u.xa = function(a) {
		if (this.g != a) {
			this.ra(a) && ((this.g = a), this.kf());
			for (var b = 0; b < this.h.length; ++b) {
				var c = this.h[b];
				c.Ii || (c.link.className = c.link.value == a && this.a.Ud ? kb : "goog-te-menu2-item");
			}
		}
	};
	function Ct(a) {
		Bg(a.J, Ag(a.R));
		Bg(a.f, Ag(a.J));
		a.C = Ag(a.f);
	}
	function Dt(a, b) {
		At.call(this, a, b);
	}
	D(Dt, At);
	u = Dt.prototype;
	u.fd = function() {
		var a = this.b.D("a", { "aria-haspopup": "true" });
		a.className = jb;
		a.href = tb;
		this.H = this.b.D(ta);
		a.appendChild(this.H);
		this.K = this.b.D("IMG", {
			src: rb,
			alt: "",
			style: "background-image:url(" + Xp + ");background-position:-14px 0px;border:none",
			width: 14,
			height: 14,
		});
		a.appendChild(this.K);
		this.T(a);
	};
	u.hf = function() {
		O(this.K, Ha, "-14px 0px");
	};
	u.jf = function() {
		O(this.K, Ha, "0px 0px");
	};
	u.Z = function() {
		Dt.m.Z.call(this);
		this.K = this.H = null;
	};
	u.kf = function() {
		this.b.hb(this.H, this.ra(this.g) || "");
	};
	u.Db = function(a) {
		this.Tc.call(this, a);
	};
	function Et(a, b) {
		At.call(this, a, b);
	}
	D(Et, At);
	u = Et.prototype;
	u.fd = function() {
		var a = this.b.D("a", { "aria-haspopup": "true" });
		a.className = jb;
		a.href = tb;
		this.H = this.b.D(ta);
		a.appendChild(this.H);
		a.appendChild(this.b.D("IMG", { src: rb, alt: "", width: 1, height: 1 }));
		a.appendChild(this.b.D(ta, { style: "border-left:1px solid #bbb" }, "\u200b"));
		a.appendChild(this.b.D("IMG", { src: rb, alt: "", width: 1, height: 1 }));
		this.K = this.b.D("span", { style: "color:#767676", "aria-hidden": "true" }, "\u25bc");
		a.appendChild(this.K);
		this.T(a);
	};
	u.hf = function() {
		O(this.K, "color", "#9b9b9b");
	};
	u.jf = function() {
		O(this.K, "color", "#d5d5d5");
	};
	u.Z = function() {
		Et.m.Z.call(this);
		this.K = this.H = null;
	};
	u.kf = function() {
		this.b.hb(this.H, this.ra(this.g) || "");
	};
	u.Db = function(a) {
		this.Tc.call(this, a);
	};
	function Ft(a, b) {
		At.call(this, a, b);
		this.a.Ud = !1;
	}
	D(Ft, At);
	Ft.prototype.fd = function() {
		var a = dg(this.b, "div");
		a.className = "goog-te-button";
		var b = this.b.D(f, { style: "background: url(" + Wp + ") repeat-x 0 -39px" });
		a.appendChild(b);
		this.H = dg(this.b, Ka);
		b.appendChild(this.H);
		this.T(a);
	};
	Ft.prototype.Ug = function(a) {
		Hf(this.H);
		this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")));
	};
	Ft.prototype.Z = function() {
		Ft.m.Z.call(this);
		this.H = null;
	};
	Ft.prototype.jg = function(a) {
		this.xa(a.currentTarget.value);
		this.dispatchEvent(Ma);
		this.Ad();
	};
	function Gt(a, b) {
		T.call(this, b);
		this.a = (a && td(a)) || {};
		this.c = new uh(this);
	}
	D(Gt, T);
	var Ht = { xk: 0, ck: 1, mk: 2 };
	u = Gt.prototype;
	u.D = function() {
		var a = dg(this.b, "div");
		L(a, Rb);
		L(a, "goog-te-gadget");
		a.dir = Be.test(Mp) ? Pb : "ltr";
		P(a, !1);
		if (2 == this.a.Qb) a.innerHTML = ir({ id: V(this, Vb), Ng: "", Mg: "" });
		else {
			var b = Z.ph(jr() || "");
			a.innerHTML = ir({ id: V(this, Vb), Ng: "", Mg: 1 == this.a.Qb ? "&nbsp;&nbsp;" + b : b });
		}
		this.T(a);
	};
	u.P = function() {
		Gt.m.P.call(this);
		this.f = 2 == this.a.Qb ? new Et(null, this.b) : new zt(this.b);
		this.c.w(this.f, Ma, kq(this, Pa));
		this.c.w(this.f, wb, this.Dj);
		var a = this.b.j(V(this, Vb));
		if (2 == this.a.Qb) {
			var b = this.b.D("IMG", { src: rb, class: "goog-te-gadget-icon", alt: "" });
			b.style.backgroundImage = "url(" + Xp + ")";
			b.style.backgroundPosition = "-65px 0px";
			var c = this.b.D(ta, { style: "vertical-align: middle" });
			a.appendChild(b);
			a.appendChild(c);
			this.f.fa(c);
			a.style.whiteSpace = "nowrap";
			a.className = "goog-te-gadget-simple";
		} else this.f.fa(a), 1 == this.a.Qb && (a.style.display = "inline");
	};
	u.Dj = function() {
		if (2 == this.a.Qb) {
			var a = this.f,
				b = this.b.j(V(this, Vb));
			a.l.ca(a.o, Qa, a.Ie);
			a.o = b;
			a.l.w(a.o, Qa, a.Ie);
		}
		this.dispatchEvent(wb);
	};
	u.Z = function() {
		Gt.m.Z.call(this);
		this.c.M();
		this.c = null;
		this.f.M();
		this.f = null;
	};
	u.wa = function() {
		return this.f.za();
	};
	u.ta = function(a) {
		"" == a ? this.H && this.f.Db(this.H) : this.C && this.f.Db(this.C);
		this.f.xa(a);
	};
	u.L = function(a) {
		P(this.j(), a);
	};
	u.oa = function(a) {
		this.f.oa(a);
	};
	u.tf = function(a, b) {
		this.H = a;
		this.C = b;
	};
	function It(a, b) {
		b || mf();
		this.a = a || null;
	}
	It.prototype.fa = function(a, b) {
		a = a(b || {}, void 0, this.a ? this.a.a() : {});
		this.b();
		return String(a);
	};
	function Jt(a, b) {
		b = b || {};
		a.a && a.a.a();
		var c = b.top,
			d = b.left,
			e = b.bottom,
			g = b.right,
			h = b.id;
		b = Ij(
			"." +
				Pj(b.className) +
				" {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" +
				(c || 0 == c
					? "top:" +
						Pj(c) +
						"px; _top:expression((" +
						Pj(c) +
						"+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
					: "top:auto;") +
				(d || 0 == d
					? "left:" +
						Pj(d) +
						"px; _left:expression((" +
						Pj(d) +
						"+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
					: "left:auto;") +
				(e || 0 == e
					? "bottom:" +
						Pj(e) +
						"px; _top:expression((-" +
						Pj(e) +
						ca +
						String(h).replace(Wj, Tj) +
						"').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
					: "bottom:auto;") +
				(g || 0 == g
					? "right:" +
						Pj(g) +
						"px; _left:expression((-" +
						Pj(g) +
						ca +
						String(h).replace(Wj, Tj) +
						"').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
					: "right:auto;") +
				"}",
		);
		a.b();
		return Ye(b.toString());
	}
	It.prototype.b = z;
	function Kt(a, b) {
		T.call(this, b);
		this.a = (a && td(a)) || {};
		this.a.Ka || (this.a.Ka = $p);
		this.c = new uh(this);
	}
	D(Kt, T);
	var Lt = { rk: 1, sk: 2, Rj: 3, Qj: 4 };
	u = Kt.prototype;
	u.D = function() {
		var a = dg(this.b, "div");
		this.ga = !1;
		P(a, !1);
		var b = V(this, Ta);
		a.innerHTML =
			'<iframe id="' +
			X(b) +
			'" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>';
		this.T(a);
	};
	u.P = function() {
		Kt.m.P.call(this);
		var a = Be.test(Mp) ? Pb : "ltr",
			b = this.a.Ka,
			c = V(this, ac);
		this.j().id = V(this, "floatContainer");
		var d = { id: this.j().id, className: "goog-te-ftab-float" };
		this.j().className += " goog-te-ftab-float";
		switch (this.a.jd) {
			case 2:
				var e = db;
				d.top = 0;
				d.right = 20;
				break;
			case 3:
				e = cb;
				d.bottom = 0;
				d.right = 20;
				break;
			case 4:
				e = cb;
				d.bottom = 0;
				d.left = 20;
				break;
			default:
				(e = db), (d.top = 0), (d.left = 20);
		}
		vg(Jt(new It(), d), this.j());
		this.l = this.b.j(V(this, Ta));
		this.c.w(this.l, wb, this.Ej);
		oq(
			this.l,
			C(function() {
				var d = Uf(this.l);
				d.write(
					ia +
						X(b) +
						'"></head><body class="goog-te-ftab ' +
						X(e) +
						'" scroll="no" style="overflow:hidden" dir="' +
						X(a) +
						'"><a id="' +
						X(c) +
						'" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' +
						X(rb) +
						aa +
						X(Xp) +
						');background-position:-65px 0px"><span>' +
						Fj(Z.Gf) +
						"</span></a></body>",
				);
				d.close();
			}, this),
		);
	};
	u.Ej = function() {
		this.f = new nf(Uf(this.l)).j(V(this, ac));
		this.c.w(this.f, Qa, kq(this, "clk_trans"));
		P(this.j(), !0);
		var a = Ag(this.f);
		P(this.j(), !1);
		Bg(this.l, a);
		Bg(this.j(), a);
		this.dispatchEvent(wb);
	};
	u.Z = function() {
		Kt.m.Z.call(this);
		this.c.M();
		this.c = null;
		Kf(this.l);
		this.f = this.l = null;
	};
	u.N = p("ga");
	u.L = function(a) {
		this.ga = a;
		P(this.j(), a);
	};
	function Mt(a, b) {
		T.call(this, b);
		this.h = new uh(this);
		this.a = (a && td(a)) || {};
		this.a.Ka || (this.a.Ka = $p);
		this.a.vf = !1;
		O(this.b.a.body, Jb, "relative");
		de || O(this.b.a.body, "minHeight", "100%");
		O(this.b.a.documentElement, "height", "100%");
		O(this.b.a.body, "top", "0px");
		G &&
			(
				(window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10)),
				(window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
			);
	}
	D(Mt, T);
	u = Mt.prototype;
	u.fa = function() {
		var a = this.b.a.body.firstChild;
		Kh(this, a.parentNode, a);
	};
	u.D = function() {
		var a = dg(this.b, "div");
		this.ga = !1;
		P(a, !1);
		L(a, Rb);
		var b = V(this, Ta);
		a.innerHTML =
			'<iframe id="' +
			X(b) +
			'" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>';
		this.T(a);
	};
	u.P = function() {
		Mt.m.P.call(this);
		var a = {
				dir: Be.test(Mp) ? Pb : "ltr",
				Ka: this.a.Ka,
				ke: rb,
				Wi: qb,
				We: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png",
				Me: Xp,
				oj: V(this, "promptSection"),
				Ih: V(this, "confirm"),
				mj: V(this, Kb),
				lj: V(this, "progressValue"),
				Li: Zp,
				Eh: V(this, "cancel"),
				Th: V(this, "finishSection"),
				qj: V(this, "restore"),
				Ph: V(this, "errorSection"),
				Lh: V(this, "errorContent"),
				Hh: V(this, "close"),
				Bk: Xp,
				aj: V(this, "noAutoPopup"),
			},
			b = [];
		this.a.vf && b.push(hr({ id: V(this, Lb) }));
		b.push(
			hr({
				id: V(this, Mb),
			}),
		);
		a.nj = Z.zh.apply(null, b);
		b = [];
		this.a.vf && b.push(hr({ id: V(this, Ya) }));
		b.push(hr({ id: V(this, Za) }));
		a.Sh = Z.uh.apply(null, b);
		this.a.pc && (a.pc = this.a.pc);
		this.l = this.b.j(V(this, Ta));
		this.h.w(this.l, wb, this.Bj);
		oq(
			this.l,
			C(function() {
				var b = Uf(this.l);
				b.write(gr(a));
				b.close();
			}, this),
		);
	};
	u.Bj = function() {
		this.c = new nf(Uf(this.l));
		Nt(this, Z.Ef);
		if (this.a.Ka == $p) {
			var a = "url(" + Wp + ")";
			O(this.c.a.body, Ga, a);
			for (var b = this.c.a.getElementsByTagName(Ka), c = 0; c < b.length; ++c) {
				var d = b[c].parentNode;
				O(d, Ga, a);
				O(d, "backgroundRepeat", "repeat-x");
				O(d, Ha, "0 -39px");
			}
		}
		this.a.vf && (this.g = new Dt(this.a, this.c));
		this.f = new Dt(this.a, this.c);
		this.o = new Ft(this.a, this.c);
		this.h.w(this.c.j(V(this, "confirm")), Qa, kq(this, "clk_confirm"));
		this.h.w(this.c.j(V(this, "cancel")), Qa, kq(this, "clk_cancel"));
		this.h.w(this.c.j(V(this, "restore")), Qa, kq(this, "clk_restore"));
		this.h.w(this.c.j(V(this, "close")), Qa, kq(this, "clk_close"));
		this.J = this.c.j(V(this, "noAutoPopup"));
		this.h.w(this.J, Qa, kq(this, "clk_no_ap"));
		this.g && this.h.w(this.g, Ma, kq(this, "chg_src_lang"));
		this.h.w(this.f, Ma, kq(this, Pa));
		this.h.w(this.o, Ma, this.ti);
		a = new eq(C(this.Cj, this));
		this.g && this.h.w(this.g, wb, a.register());
		this.h.w(this.f, wb, a.register());
		this.h.w(this.o, wb, a.register());
		a.finish();
		this.g && this.g.fa(this.c.j(V(this, Lb)));
		this.f.fa(this.c.j(V(this, Mb)));
		this.o.fa(this.c.j("options"));
	};
	u.Cj = function() {
		this.o.Ug(Z.nh);
		this.o.Tc({ turn_off_site: Z.xh, s1: "---", learn_more: Z.mh });
		this.dispatchEvent(wb);
	};
	u.ti = function() {
		switch (this.o.za()) {
			case "learn_more":
				window.open(cq, "_blank");
				break;
			case "turn_off_site":
				this.dispatchEvent(Ra);
		}
	};
	u.Z = function() {
		this.L(!1);
		Mt.m.Z.call(this);
		this.h.M();
		this.h = null;
		this.g && (this.g.M(), (this.g = null));
		this.f.M();
		this.f = null;
		this.o.M();
		this.o = null;
		Kf(this.l);
		this.yc = this.c = null;
	};
	u.Xb = function() {
		return this.g ? this.g.za() : "";
	};
	u.wa = function() {
		return this.f.za();
	};
	u.Sb = function(a) {
		this.g && this.g.xa(a);
		this.K && this.K[a] && this.c.hb(this.J, Z.wh(this.K[a]));
	};
	u.ta = function(a) {
		this.f.xa(a);
	};
	function Ot(a, b, c, d) {
		if (a.yc != b) {
			a.yc = b;
			if (0 == b) {
				a.g && yt(a.g, a.c.j(V(a, Lb)));
				if (a.H) {
					var e = a.wa();
					a.f.Db(a.H);
					a.ta(e);
				}
				yt(a.f, a.c.j(V(a, Mb)));
			} else
				2 == b &&
					(
						a.g && yt(a.g, a.c.j(V(a, Ya))),
						a.C && ((e = a.wa()), a.f.Db(a.C), a.ta(e)),
						yt(a.f, a.c.j(V(a, Za)))
					);
			e = {};
			e[-1] = a.c.j(V(a, "errorSection"));
			e[0] = a.c.j(V(a, "promptSection"));
			e[1] = a.c.j(V(a, Kb));
			e[2] = a.c.j(V(a, "finishSection"));
			for (var g in e) e[g] !== Object.prototype[g] && P(e[g], g == b);
		}
		c && a.L(!0);
		a.J.parentNode.parentNode.style.display = d ? "block" : Db;
	}
	u.N = p("ga");
	u.L = function(a) {
		if (this.ga != a) {
			this.ga = a;
			if (G) {
				var b = parseInt("0" + this.b.a.body.leftMargin, 10);
				var c = parseInt("0" + this.b.a.body.topMargin, 10);
			}
			var d = "BackCompat" == this.b.a.compatMode;
			a
				? (
						O(this.b.a.body, "top", "40px"),
						P(this.j(), !0),
						G &&
							(K("7.0")
								? (
										(window._bannerquirkfixleft = window._bannerquirkfixtop = 0),
										d && (this.b.a.body.topMargin = c + 40)
									)
								: d
									? (
											(this.b.a.body.topMargin = c + 40),
											(window._bannerquirkfixleft = window._bannerquirkfixtop = 0)
										)
									: ((window._bannerquirkfixleft = -b), (window._bannerquirkfixtop = -c - 40)))
					)
				: (O(this.b.a.body, "top", "0px"), P(this.j(), !1), d && 40 <= c && (this.b.a.body.topMargin = c - 40));
		}
	};
	u.rf = function(a) {
		this.c.hb(this.c.j(V(this, "progressValue")), a);
	};
	function Nt(a, b) {
		a.c.hb(a.c.j(V(a, "errorContent")), b);
	}
	u.tf = function(a, b) {
		this.H = a;
		this.C = b;
		this.f.Db(a);
	};
	function Qt(a, b) {
		R.call(this);
		A(a) == Tb && ((b = a), (a = {}));
		A(b) == Tb && (b = of(document, String(b)));
		this.X = b;
		this.h = new uh(this);
		a = Object(a);
		this.g = Fa;
		!(b = window.parent != window) &&
			(b =
				(!window.external ||
					!window.external.googleToolbarVersion ||
					6.2 > parseFloat(window.external.googleToolbarVersion)) &&
				(!window.gtbExternal ||
					!window.gtbExternal.isTranslateEnabled ||
					!window.gtbExternal.isTranslateEnabled())) &&
			(
				(b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/)),
				(b = !(b && b[2] && b[3] && 4001 <= 1e3 * Number(b[2]) + Number(b[3])))
			);
		this.a = {
			he: b,
			Uf: !1,
			ie: null,
			bd: null,
			Pe: [],
			Tf: [],
			Kh: !1,
			kc: !1,
			cb: "",
			Vf: !1,
			te: "",
			Qb: 0,
			Pf: !1,
		};
		this.ha = { Ka: $p, pc: "https://" == Vp ? Z.sh : null };
		this.R = { Ka: $p, jd: null };
		a &&
			(
				"autoDisplay" in a && (this.a.he = this.a.he && !!a.autoDisplay),
				"multilanguagePage" in a && (this.a.kc = !!a.multilanguagePage),
				"gaTrack" in a && (this.a.Vf = !!a.gaTrack),
				"layout" in a && (this.a.Qb = a.layout),
				a.pageLanguage && (this.a.Sd = lq(a.pageLanguage)),
				a.includedLanguages && (this.a.Pe = a.includedLanguages.split(",")),
				a.excludedLanguages && (this.a.Tf = a.excludedLanguages.split(",")),
				this.a.Sd && (this.g = this.a.Sd),
				a.key && (this.a.cb = a.key),
				a.gaId && (this.a.te = a.gaId),
				(this.R.jd = Number(a.floatPosition) || this.R.jd),
				"disableAutoTranslation" in a && (this.a.Pf = !!a.disableAutoTranslation)
			);
		!this.a.Pf && Rt(this) && (this.a.Uf = !0);
		this.s = {};
		if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
			for (this.s = {}, a = Dc(a[2]).split("|"), b = 0; b < a.length; ++b) {
				var c = a[b].split("=");
				c[0] && (this.s[c[0]] = c[1]);
			}
		this.qa = new ks({ cb: this.a.cb, Jb: 1, uf: !0, Fk: bq }, { client: Sp, u: window.location.href });
		this.B = new wt(0, this.qa, void 0, void 0, this.a.cb, void 0, void 0, new kt());
		this.G = !1;
		this.h.w(window, "unload", this.M);
		this.I = new eq(C(this.mi, this));
		this.C = new eq(C(this.pi, this));
		this.J = new gq(C(this.Ji, this));
		this.b = new Mt(this.ha);
		this.B.pd(this.I.register(C(this.li, this)), Mp);
		this.X
			? (
					(this.f = new Gt(this.a)),
					this.h.w(this.f, wb, this.I.register()),
					this.h.w(this.f, Pa, hq(this.J, this.C.fb(C(this.ki, this)))),
					this.f.fa(this.X)
				)
			: this.R.jd &&
				(
					(this.l = new Kt(this.R)),
					this.h.w(this.l, wb, this.I.register()),
					this.h.w(this.l, "clk_trans", hq(this.J, this.C.fb(C(this.ji, this)))),
					this.l.fa()
				);
		!this.a.Sd && this.a.Kh && this.B.ld(this.I.register(C(this.gi, this)));
		this.I.finish();
	}
	D(Qt, R);
	function Rt(a) {
		function b(a, b) {
			if ((a = Dc(a).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)"))) {
				if (a[3]) return (b.a.ie = a[2]), (b.a.bd = a[3]), !0;
				if (a[6]) return (b.a.ie = a[5]), (b.a.bd = a[6]), !0;
			}
			return !1;
		}
		var c = {
				url: function() {
					var a = window.location.href.match(/#.*googtrans(.*)/);
					return a && a[1];
				},
				cookie: function() {
					var a = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
					return a && a[2];
				},
			},
			d;
		for (d in c)
			if (c[d] !== Object.prototype[d]) {
				var e = c[d]();
				if (e && b(e, a)) return d;
			}
		return "";
	}
	function St(a, b) {
		for (var c = window.location.hostname.split("."); 2 < c.length; ) c.shift();
		c = ";domain=" + c.join(".");
		null != b
			? (a = a + "=" + b)
			: ((b = new Date()), b.setTime(b.getTime() - 1), (a = a + "=none;expires=" + b.toGMTString()));
		a += ";path=/";
		document.cookie = a;
		try {
			document.cookie = a + c;
		} catch (d) {}
	}
	function Tt(a, b) {
		var c = null;
		x(b) && (c = x(a) ? "/" + a + "/" + b : "/" + b);
		St("googtrans", c);
	}
	u = Qt.prototype;
	u.li = function(a) {
		this.c = lq(Mp);
		this.H = a || {};
		this.o = {};
		this.K = {};
		a = !this.a.Pe.length;
		var b = dq(this.a.Pe),
			c = dq(this.a.Tf);
		this.o[Mp] = "";
		this.K[Mp] = "";
		for (var d in this.H.tl)
			this.H.tl[d] === Object.prototype[d] ||
				!(a || d in b) ||
				d in c ||
				((this.K[d] = this.H.tl[d]), d == this.a.Sd && !this.a.kc) ||
				(this.o[d] = this.H.tl[d]);
		this.o[Mp] || delete this.o[Mp];
		this.K[Mp] || delete this.K[Mp];
		this.la = td(this.H.sl);
	};
	u.gi = function(a) {
		a && (this.g = lq(a));
	};
	u.mi = function() {
		delete this.I;
		if (this.H) {
			this.g = this.g || this.a.ie;
			this.c = this.a.bd || this.c;
			var a =
				this.a.Uf ||
				(this.a.he && this.g != this.c && !(this.g in Qp) && "1" != this.s.os && "1" != this.s["o" + this.g]);
			"zh-TW" == this.g && (this.g = "zh-CN");
			this.la[this.g] || ((a = !1), (this.g = Fa));
			if (!this.o[this.c])
				if (((a = !1), this.o.en)) this.c = "en";
				else
					for (var b in this.o)
						if (this.o[b] !== Object.prototype[b]) {
							this.c = b;
							break;
						}
			if (this.f) {
				var c = this.o,
					d = { "": Z.rh };
				for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
				this.f.tf(d, this.K);
				this.f.ta("");
			}
			!Op && a
				? this.a.bd
					? hq(this.J, this.C.fb(C(this.Td, this, !0, !0))).call()
					: ((this.G = !0), hq(this.J, this.C.fb(C(this.Td, this))).call(), nq("te_ap", { sl: this.g }))
				: (this.l && this.l.L(!0), this.f && this.f.L(!0));
			window.google.translate.TranslateService && this.oa(!1);
			this.J.finish();
		}
	};
	u.pi = function() {
		var a = this.b,
			b = this.la;
		a.g && a.g.Db(b);
		a.K = b;
		this.b.tf(this.o, this.K);
		this.b.Sb(this.g);
		this.b.ta(this.c);
		this.h.w(this.b, "clk_confirm", this.ai);
		this.h.w(this.b, "clk_cancel", this.$h);
		this.h.w(this.b, "clk_restore", this.Ge);
		this.h.w(this.b, "clk_close", this.zd);
		this.h.w(this.b, "clk_no_ap", this.bi);
		this.h.w(this.b, Ra, this.ci);
		this.h.w(this.b, "chg_src_lang", this.eg);
		this.h.w(this.b, Pa, this.eg);
		this.f && this.f.L(!0);
	};
	u.Ji = function() {
		this.h.w(this.b, wb, this.C.register());
		this.b.fa();
		this.C.finish();
	};
	u.F = function() {
		this.B.restore();
		Qt.m.F.call(this);
		this.B.M();
		this.h.M();
		this.h = null;
		this.b && this.b.M();
		this.b = null;
		this.l && this.l.M();
		this.l = null;
		this.f && this.f.M();
		this.X = this.f = null;
	};
	u.ai = function() {
		!this.b.N() ||
			(!this.a.kc && tq(this.g, this.b.wa())) ||
			(this.G && nq("te_apt", { sl: this.g }), Ut(this, !1), this.f && this.f.ta(this.b.wa()));
	};
	u.$h = function() {
		this.b.N() && (Vt(this), Ot(this.b, 0), this.f && this.f.ta(""));
	};
	u.Ge = function() {
		this.b.N() && (Vt(this), Ot(this.b, 0));
		this.f && this.f.ta("");
	};
	u.zd = function() {
		this.b.N() &&
			(
				this.G && ((this.G = !1), nq("te_apc", { sl: this.g })),
				Vt(this),
				this.b.L(!1),
				this.f && this.f.ta(""),
				this.l && this.l.L(!0)
			);
	};
	u.bi = function() {
		this.b.N() && ((this.s["o" + this.g] = "1"), nq("te_apr", { sl: this.g }), (this.G = !1), this.zd());
	};
	u.ci = function() {
		if (this.b.N()) {
			this.G = !1;
			this.s.os = "1";
			var a = null;
			if (this.s) {
				a = [];
				for (var b in this.s) this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
				a = a.join("|");
			}
			St("googtransopt", a);
			this.zd();
		}
	};
	u.eg = function() {
		this.b.N() &&
			(!this.a.kc && tq(this.g, this.b.wa())
				? this.Ge()
				: (
						(this.g = this.b.Xb() || this.g),
						(this.c = this.b.wa()),
						2 == this.b.yc && (this.f && this.f.ta(this.b.wa()), Ut(this))
					));
	};
	u.Td = function(a, b) {
		this.b.N() || (this.l && this.l.L(!1), a ? Ut(this, b) : Ot(this.b, 0, !0, this.G));
	};
	u.wj = function(a, b) {
		hq(this.J, this.C.fb(C(this.Td, this, a, b))).call();
	};
	u.ji = function() {
		this.Td(2 == this.b.yc);
	};
	u.ki = function() {
		this.f.wa()
			? !this.a.kc && tq(this.g, this.b.wa()) ? this.Ge() : ((this.c = this.f.wa()), this.b.ta(this.c), Ut(this))
			: this.f.ta(this.c);
	};
	function Ut(a, b) {
		if (window.google.translate.TranslateService)
			try {
				window.google.translate.TranslateService.getInstance().restore();
			} catch (c) {}
		Tt(a.g, a.c);
		a.G = !1;
		!b && a.g in Qp && nq("te_ape", { sl: a.g });
		a.b.rf(0);
		Ot(a.b, 1, !0);
		a.B.Vg(!!b);
		window.setTimeout(C(a.B.$d, a.B, a.a.kc ? Fa : a.g, a.c, C(a.yi, a), void 0, void 0), 0);
		if (a.a.Vf && window._gaq && window._gat)
			try {
				a.a.te
					? window._gat._getTracker(a.a.te)._trackEvent(la, "Translate", a.c)
					: window._gat._getTrackerByName()._trackEvent(la, "Translate", a.c);
			} catch (c) {}
	}
	u.yi = function(a, b, c) {
		A(this.pa) == n && this.pa();
		this.b.N() &&
			1 == this.b.yc &&
			(c
				? (Vt(this), Ot(this.b, -1, !0), 2 == c ? Nt(this.b, Z.lh) : Nt(this.b, Z.Ef))
				: (this.b.rf(a), b && (this.f && this.f.ta(this.c), this.b.Sb(this.g), Ot(this.b, 2))));
	};
	function Vt(a) {
		Tt();
		window.setTimeout(C(a.B.restore, a.B, null), 0);
	}
	u.oa = function(a) {
		a || this.zd();
		this.f && this.f.oa(a);
		this.l && this.l.L(a);
	};
	function Wt(a) {
		if (a && ((a = String(a)), (a = a.split(".")), a.length)) {
			for (var b = window, c = 0; c < a.length; ++c) {
				var d = a[c];
				if (!(d && d in b)) return;
				b = b[d];
			}
			return b;
		}
	}
	var Xt = Wt("google.translate.m");
	if (Xt)
		for (var Yt in Z)
			if (Z[Yt] !== Object.prototype[Z[Yt]] && Z[Yt]) {
				var Zt = Z[Yt]();
				Z[Yt] = Xt[Zt] ? Xt[Zt] : fr;
			}
	if (1 == Rp) {
		var $t = null,
			au = function(a) {
				if (!$t) {
					var b, c, d;
					a &&
						(
							"key" in a && (b = a.key),
							"serverParams" in a && (c = a.serverParams),
							"timeInfo" in a && (d = a.timeInfo),
							(a =
								(a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1]
									? a[1]
									: null) && (c = a)
						);
					a = 0;
					if ("te_lib" == Sp || Jd) a = 3;
					$t = new wt(
						0,
						new ks({ cb: b, Jb: a, uf: !0, Vc: "tvis" == c }),
						void 0,
						void 0,
						b,
						c,
						d,
						new kt(),
					);
					$t.constructor = z;
					$t.isAvailable = $t.Ya;
					$t.getSupportedLanguages = $t.pd;
					$t.getPageLanguage = $t.ld;
					$t.setClickThrough = $t.Vg;
					$t.translatePage = $t.$d;
					$t.restore = $t.restore;
					$t.isTranslating = $t.Aj;
				}
				return $t;
			};
		au.getInstance = function() {
			return $t;
		};
		tc("google.translate.TranslateService", au);
		nq("te_li");
	} else {
		var bu = null,
			cu = function(a, b) {
				bu || ((bu = new Qt(a, b)), (bu.constructor = z));
				return bu;
			};
		cu.getInstance = function() {
			return bu;
		};
		tc("google.translate.TranslateElement", cu);
		Qt.prototype.dispose = Qt.prototype.M;
		Qt.prototype.showBanner = Qt.prototype.wj;
		Qt.prototype.setEnabled = Qt.prototype.oa;
		tc("google.translate.TranslateElement.FloatPosition", Lt);
		Lt.TOP_LEFT = 1;
		Lt.TOP_RIGHT = 2;
		Lt.BOTTOM_RIGHT = 3;
		Lt.BOTTOM_LEFT = 4;
		tc("google.translate.TranslateElement.InlineLayout", Ht);
		Ht.VERTICAL = 0;
		Ht.HORIZONTAL = 1;
		Ht.SIMPLE = 2;
	}
	(function() {
		for (var a in Object.prototype) {
			ld = function(a, b, c) {
				for (var d in a) a[d] !== Object.prototype[d] && b.call(c, a[d], d, a);
			};
			break;
		}
		var b = sc(),
			c = Wt(Np);
		c &&
			A(c) == n &&
			(1 == Rp
				? c()
				: (function e() {
						var a = document.readyState;
						"undefined" == A(a) || a == Sa || "interactive" == a || 2e4 <= sc() - b
							? c()
							: window.setTimeout(e, 500);
					})());
	})();
}.call(window));
