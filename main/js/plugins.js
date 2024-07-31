/* Modernizr  */

;
window.Modernizr = function(a, b, c) {
        function C(a) {
            j.cssText = a
        }

        function D(a, b) {
            return C(n.join(a + ";") + (b || ""))
        }

        function E(a, b) {
            return typeof a === b
        }

        function F(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function G(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function H(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function I(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
        }

        function J() {
            e.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
                return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
                return t
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = {
                svg: "http://www.w3.org/2000/svg"
            },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            z = function() {
                function d(d, e) {
                    e = e || b.createElement(a[d] || "div"), d = "on" + d;
                    var f = d in e;
                    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                }
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return d
            }(),
            A = {}.hasOwnProperty,
            B;
        !E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) {
            return A.call(a, b)
        } : B = function(a, b) {
            return b in a && E(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }), s.flexbox = function() {
            return I("flexWrap")
        }, s.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, s.canvastext = function() {
            return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
        }, s.webgl = function() {
            return !!a.WebGLRenderingContext
        }, s.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, s.geolocation = function() {
            return "geolocation" in navigator
        }, s.postmessage = function() {
            return !!a.postMessage
        }, s.websqldatabase = function() {
            return !!a.openDatabase
        }, s.indexedDB = function() {
            return !!I("indexedDB", a)
        }, s.hashchange = function() {
            return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, s.history = function() {
            return !!a.history && !!history.pushState
        }, s.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, s.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, s.rgba = function() {
            return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
        }, s.hsla = function() {
            return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
        }, s.multiplebgs = function() {
            return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
        }, s.backgroundsize = function() {
            return I("backgroundSize")
        }, s.borderimage = function() {
            return I("borderImage")
        }, s.borderradius = function() {
            return I("borderRadius")
        }, s.boxshadow = function() {
            return I("boxShadow")
        }, s.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, s.opacity = function() {
            return D("opacity:.55"), /^0.55$/.test(j.opacity)
        }, s.cssanimations = function() {
            return I("animationName")
        }, s.csscolumns = function() {
            return I("columnCount")
        }, s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
        }, s.cssreflections = function() {
            return I("boxReflect")
        }, s.csstransforms = function() {
            return !!I("transform")
        }, s.csstransforms3d = function() {
            var a = !!I("perspective");
            return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, s.csstransitions = function() {
            return I("transition")
        }, s.fontface = function() {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, s.generatedcontent = function() {
            var a;
            return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.localstorage = function() {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, s.sessionstorage = function() {
            try {
                return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, s.webworkers = function() {
            return !!a.Worker
        }, s.applicationcache = function() {
            return !!a.applicationCache
        }, s.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
        }, s.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
        }, s.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
        }, s.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
        };
        for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
        return e.input || J(), e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) B(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, C(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
                return G([a])
            }, e.testAllProps = I, e.testStyles = y, e.prefixed = function(a, b, c) {
                return b ? I(a, b, c) : I(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };


/* FlexNav  */

! function() {
    var a;
    a = jQuery, a.fn.flexNav = function(b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        return k = a.extend({
            animationSpeed: 250,
            transitionOpacity: !0,
            buttonSelector: "#burger-wrapper",
            hoverIntent: !1,
            hoverIntentTimeout: 150,
            calcItemWidths: !1,
            hover: !0
        }, b), c = a(this), c.addClass("with-js"), k.transitionOpacity === !0 && c.addClass("opacity"), c.find("li").each(function() {
            return a(this).has("ul").length ? a(this).addClass("item-with-ul").find("ul").hide() : void 0
        }), k.calcItemWidths === !0 && (d = c.find(">li"), f = d.length, h = 100 / f, g = h + "%"), c.data("breakpoint") && (e = c.data("breakpoint")), l = function() {
            return c.hasClass("lg-screen") === !0 && k.hover === !0 ? k.transitionOpacity === !0 ? a(this).find(">ul").addClass("flexnav-show").stop(!0, !0).animate({
                height: ["toggle", "swing"],
                opacity: "toggle"
            }, k.animationSpeed) : a(this).find(">ul").addClass("flexnav-show").stop(!0, !0).animate({
                height: ["toggle", "swing"]
            }, k.animationSpeed) : void 0
        }, i = function() {
            return c.hasClass("lg-screen") === !0 && a(this).find(">ul").hasClass("flexnav-show") === !0 && k.hover === !0 ? k.transitionOpacity === !0 ? a(this).find(">ul").removeClass("flexnav-show").stop(!0, !0).animate({
                height: ["toggle", "swing"],
                opacity: "toggle"
            }, k.animationSpeed) : a(this).find(">ul").removeClass("flexnav-show").stop(!0, !0).animate({
                height: ["toggle", "swing"]
            }, k.animationSpeed) : void 0
        }, j = function() {
            var b;
            if (a(window).width() <= e) return c.removeClass("lg-screen").addClass("sm-screen"), k.calcItemWidths === !0 && d.css("width", "100%"), b = k.buttonSelector + ", " + k.buttonSelector + " .touch-button", a(b).removeClass("active"), a(".one-page li a").on("click", function() {
                return c.removeClass("flexnav-show")
            });
            if (a(window).width() > e) {
                if (jQuery('#header-container').removeClass("light-content"), jQuery('#menu-burger').removeClass("open"), jQuery('nav').removeClass("open"), c.removeClass("sm-screen").addClass("lg-screen"), k.calcItemWidths === !0 && d.css("width", g), c.removeClass("flexnav-show").find(".item-with-ul").on(), a(".item-with-ul").find("ul").removeClass("flexnav-show"), i(), k.hoverIntent === !0) return a(".item-with-ul").hoverIntent({
                    over: l,
                    out: i,
                    timeout: k.hoverIntentTimeout
                });
                if (k.hoverIntent === !1) return a(".item-with-ul").on("mouseenter", l).on("mouseleave", i)
            }
        }, a(k.buttonSelector).data("navEl", c), n = ".item-with-ul, " + k.buttonSelector, a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'), m = k.buttonSelector + ", " + k.buttonSelector + " .touch-button", a(m).on("click", function(b) {
            var c, d, e;
            return a(m).toggleClass("active"), b.preventDefault(), b.stopPropagation(), e = k.buttonSelector, c = a(this).is(e) ? a(this) : a(this).parent(e), d = c.data("navEl"), d.toggleClass("flexnav-show")
        }), a(".touch-button").on("click", function() {
            var b, d;
            return b = a(this).parent(".item-with-ul").find(">ul"), d = a(this).parent(".item-with-ul").find(">span.touch-button"), c.hasClass("lg-screen") === !0 && a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(), b.hasClass("flexnav-show") === !0 ? (b.removeClass("flexnav-show").slideUp(k.animationSpeed), d.removeClass("active")) : b.hasClass("flexnav-show") === !1 ? (b.addClass("flexnav-show").slideDown(k.animationSpeed), d.addClass("active")) : void 0
        }), c.find(".item-with-ul *").focus(function() {
            return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(), a(this).parent(".item-with-ul").find(">ul").addClass("open").show()
        }), j(), a(window).on("resize", j)
    }
}.call(this);


/*  Wait For Images */

! function(a) {
    var b = "waitForImages";
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src][src!=""]')) return !1;
        var c = new Image;
        return c.src = b.src, !c.complete
    }, a.fn.waitForImages = function() {
        var c, d, e, f = 0,
            g = 0,
            h = a.Deferred();
        if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0], d = arguments[1], e = arguments[2]), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var i = a(this),
                j = [],
                k = a.waitForImages.hasImageProperties || [],
                l = a.waitForImages.hasImageAttributes || [],
                m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? i.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:uncached") && j.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(k, function(a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = m.exec(e);) j.push({
                        src: d[2],
                        element: b[0]
                    })
                }), a.each(l, function(c, d) {
                    var e, f = b.attr(d);
                    return f ? (e = f.split(","), void a.each(e, function(c, d) {
                        d = a.trim(d).split(" ")[0], j.push({
                            src: d,
                            element: b[0]
                        })
                    })) : !0
                })
            }) : i.find("img:uncached").each(function() {
                j.push({
                    src: this.src,
                    element: this
                })
            }), f = j.length, g = 0, 0 === f && (c.call(i[0]), h.resolveWith(i[0])), a.each(j, function(e, j) {
                var k = new Image,
                    l = "load." + b + " error." + b;
                a(k).one(l, function m(b) {
                    var e = [g, f, "load" == b.type];
                    return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0
                }), k.src = j.src
            })
        }), h.promise()
    }
}(jQuery);



/* Justified-Gallery  */

! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i
    } : e(jQuery)
}(function(g) {
    var r = function(t, i) {
        this.settings = i, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = {
            entriesBuff: [],
            width: 0,
            height: 0,
            aspectRatio: 0
        }, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.yield = {
            every: 2,
            flushed: 0
        }, this.border = 0 <= i.border ? i.border : i.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = {
            phase: 0,
            timeSlot: 150,
            $el: g('<div class="spinner"><span></span><span></span><span></span></div>'),
            intervalId: null
        }, this.scrollBarOn = !1, this.checkWidthIntervalId = null, this.galleryWidth = t.width(), this.$gallery = t
    };
    r.prototype.getSuffix = function(t, i) {
        var e, s;
        for (e = i < t ? t : i, s = 0; s < this.suffixRanges.length; s++)
            if (e <= this.suffixRanges[s]) return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];
        return this.settings.sizeRangeSuffixes[this.suffixRanges[s - 1]]
    }, r.prototype.removeSuffix = function(t, i) {
        return t.substring(0, t.length - i.length)
    }, r.prototype.endsWith = function(t, i) {
        return -1 !== t.indexOf(i, t.length - i.length)
    }, r.prototype.getUsedSuffix = function(t) {
        for (var i in this.settings.sizeRangeSuffixes)
            if (this.settings.sizeRangeSuffixes.hasOwnProperty(i)) {
                if (0 === this.settings.sizeRangeSuffixes[i].length) continue;
                if (this.endsWith(t, this.settings.sizeRangeSuffixes[i])) return this.settings.sizeRangeSuffixes[i]
            }
        return ""
    }, r.prototype.newSrc = function(t, i, e, s) {
        var n;
        if (this.settings.thumbnailPath) n = this.settings.thumbnailPath(t, i, e, s);
        else {
            var r = t.match(this.settings.extension),
                o = null !== r ? r[0] : "";
            n = t.replace(this.settings.extension, ""), n = this.removeSuffix(n, this.getUsedSuffix(n)), n += this.getSuffix(i, e) + o
        }
        return n
    }, r.prototype.showImg = function(t, i) {
        this.settings.cssAnimation ? (t.addClass("entry-visible"), i && i()) : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, i), t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration, 1, i))
    }, r.prototype.extractImgSrcFromImage = function(t) {
        var i = void 0 !== t.data("safe-src") ? t.data("safe-src") : t.attr("src");
        return t.data("jg.originalSrc", i), i
    }, r.prototype.imgFromEntry = function(t) {
        var i = t.find(this.settings.imgSelector);
        return 0 === i.length ? null : i
    }, r.prototype.captionFromEntry = function(t) {
        var i = t.find("> .caption");
        return 0 === i.length ? null : i
    }, r.prototype.displayEntry = function(t, i, e, s, n, r) {
        t.width(s), t.height(r), t.css("top", e), t.css("left", i);
        var o = this.imgFromEntry(t);
        if (null !== o) {
            o.css("width", s), o.css("height", n), o.css("margin-left", -s / 2), o.css("margin-top", -n / 2);
            var a = o.attr("src"),
                h = this.newSrc(a, s, n, o[0]);
            o.one("error", function() {
                o.attr("src", o.data("jg.originalSrc"))
            });
            var l = function() {
                a !== h && o.attr("src", h)
            };
            "skipped" === t.data("jg.loaded") ? this.onImageEvent(a, g.proxy(function() {
                this.showImg(t, l), t.data("jg.loaded", !0)
            }, this)) : this.showImg(t, l)
        } else this.showImg(t);
        this.displayEntryCaption(t)
    }, r.prototype.displayEntryCaption = function(t) {
        var i = this.imgFromEntry(t);
        if (null !== i && this.settings.captions) {
            var e = this.captionFromEntry(t);
            if (null === e) {
                var s = i.attr("alt");
                this.isValidCaption(s) || (s = t.attr("title")), this.isValidCaption(s) && (e = g('<div class="caption">' + s + "</div>"), t.append(e), t.data("jg.createdCaption", !0))
            }
            null !== e && (this.settings.cssAnimation || e.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(t))
        } else this.removeCaptionEventsHandlers(t)
    }, r.prototype.isValidCaption = function(t) {
        return void 0 !== t && 0 < t.length
    }, r.prototype.onEntryMouseEnterForCaption = function(t) {
        var i = this.captionFromEntry(g(t.currentTarget));
        this.settings.cssAnimation ? i.addClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
    }, r.prototype.onEntryMouseLeaveForCaption = function(t) {
        var i = this.captionFromEntry(g(t.currentTarget));
        this.settings.cssAnimation ? i.removeClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
    }, r.prototype.addCaptionEventsHandlers = function(t) {
        var i = t.data("jg.captionMouseEvents");
        void 0 === i && (i = {
            mouseenter: g.proxy(this.onEntryMouseEnterForCaption, this),
            mouseleave: g.proxy(this.onEntryMouseLeaveForCaption, this)
        }, t.on("mouseenter", void 0, void 0, i.mouseenter), t.on("mouseleave", void 0, void 0, i.mouseleave), t.data("jg.captionMouseEvents", i))
    }, r.prototype.removeCaptionEventsHandlers = function(t) {
        var i = t.data("jg.captionMouseEvents");
        void 0 !== i && (t.off("mouseenter", void 0, i.mouseenter), t.off("mouseleave", void 0, i.mouseleave), t.removeData("jg.captionMouseEvents"))
    }, r.prototype.clearBuildingRow = function() {
        this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0
    }, r.prototype.prepareBuildingRow = function(t) {
        var i, e, s, n, r, o = !0,
            a = 0,
            h = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
            l = h / this.buildingRow.aspectRatio,
            g = this.settings.rowHeight,
            u = this.buildingRow.width / h > this.settings.justifyThreshold;
        if (t && "hide" === this.settings.lastRow && !u) {
            for (i = 0; i < this.buildingRow.entriesBuff.length; i++) e = this.buildingRow.entriesBuff[i], this.settings.cssAnimation ? e.removeClass("entry-visible") : (e.stop().fadeTo(0, .1), e.find("> img, > a > img").fadeTo(0, 0));
            return -1
        }
        for (t && !u && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (o = !1, 0 < this.rows && (o = (g = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio / h > this.settings.justifyThreshold)), i = 0; i < this.buildingRow.entriesBuff.length; i++) s = (e = this.buildingRow.entriesBuff[i]).data("jg.width") / e.data("jg.height"), o ? (n = i === this.buildingRow.entriesBuff.length - 1 ? h : l * s, r = l) : (n = g * s, r = g), h -= Math.round(n), e.data("jg.jwidth", Math.round(n)), e.data("jg.jheight", Math.ceil(r)), (0 === i || r < a) && (a = r);
        return this.buildingRow.height = a, o
    }, r.prototype.flushRow = function(t) {
        var i, e, s, n = this.settings,
            r = this.border;
        if (e = this.prepareBuildingRow(t), t && "hide" === n.lastRow && -1 === e) this.clearBuildingRow();
        else {
            if (this.maxRowHeight && this.maxRowHeight < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight), t && ("center" === n.lastRow || "right" === n.lastRow)) {
                var o = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * n.margins;
                for (s = 0; s < this.buildingRow.entriesBuff.length; s++) o -= (i = this.buildingRow.entriesBuff[s]).data("jg.jwidth");
                "center" === n.lastRow ? r += o / 2 : "right" === n.lastRow && (r += o)
            }
            var a = this.buildingRow.entriesBuff.length - 1;
            for (s = 0; s <= a; s++) i = this.buildingRow.entriesBuff[this.settings.rtl ? a - s : s], this.displayEntry(i, r, this.offY, i.data("jg.jwidth"), i.data("jg.jheight"), this.buildingRow.height), r += i.data("jg.jwidth") + n.margins;
            this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.setGalleryTempHeight(this.galleryHeightToSet + this.getSpinnerHeight()), (!t || this.buildingRow.height <= n.rowHeight && e) && (this.offY += this.buildingRow.height + n.margins, this.rows += 1, this.clearBuildingRow(), this.settings.triggerEvent.call(this, "jg.rowflush"))
        }
    };
    var i = 0;

    function e() {
        return g("body").height() > g(window).height()
    }
    r.prototype.rememberGalleryHeight = function() {
        i = this.$gallery.height(), this.$gallery.height(i)
    }, r.prototype.setGalleryTempHeight = function(t) {
        i = Math.max(t, i), this.$gallery.height(i)
    }, r.prototype.setGalleryFinalHeight = function(t) {
        i = t, this.$gallery.height(t)
    }, r.prototype.checkWidth = function() {
        this.checkWidthIntervalId = setInterval(g.proxy(function() {
            if (this.$gallery.is(":visible")) {
                var t = parseFloat(this.$gallery.width());
                e() === this.scrollBarOn ? Math.abs(t - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = t, this.rewind(), this.rememberGalleryHeight(), this.startImgAnalyzer(!0)) : (this.scrollBarOn = e(), this.galleryWidth = t)
            }
        }, this), this.settings.refreshTime)
    }, r.prototype.isSpinnerActive = function() {
        return null !== this.spinner.intervalId
    }, r.prototype.getSpinnerHeight = function() {
        return this.spinner.$el.innerHeight()
    }, r.prototype.stopLoadingSpinnerAnimation = function() {
        clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.setGalleryTempHeight(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach()
    }, r.prototype.startLoadingSpinnerAnimation = function() {
        var t = this.spinner,
            i = t.$el.find("span");
        clearInterval(t.intervalId), this.$gallery.append(t.$el), this.setGalleryTempHeight(this.offY + this.buildingRow.height + this.getSpinnerHeight()), t.intervalId = setInterval(function() {
            t.phase < i.length ? i.eq(t.phase).fadeTo(t.timeSlot, 1) : i.eq(t.phase - i.length).fadeTo(t.timeSlot, 0), t.phase = (t.phase + 1) % (2 * i.length)
        }, t.timeSlot)
    }, r.prototype.rewind = function() {
        this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow()
    }, r.prototype.updateEntries = function(t) {
        var i;
        return t && null != this.lastFetchedEntry ? i = g(this.lastFetchedEntry).nextAll(this.settings.selector).toArray() : (this.entries = [], i = this.$gallery.children(this.settings.selector).toArray()), 0 < i.length && (g.isFunction(this.settings.sort) ? i = this.sortArray(i) : this.settings.randomize && (i = this.shuffleArray(i)), this.lastFetchedEntry = i[i.length - 1], this.settings.filter ? i = this.filterArray(i) : this.resetFilters(i)), this.entries = this.entries.concat(i), !0
    }, r.prototype.insertToGallery = function(t) {
        var i = this;
        g.each(t, function() {
            g(this).appendTo(i.$gallery)
        })
    }, r.prototype.shuffleArray = function(t) {
        var i, e, s;
        for (i = t.length - 1; 0 < i; i--) e = Math.floor(Math.random() * (i + 1)), s = t[i], t[i] = t[e], t[e] = s;
        return this.insertToGallery(t), t
    }, r.prototype.sortArray = function(t) {
        return t.sort(this.settings.sort), this.insertToGallery(t), t
    }, r.prototype.resetFilters = function(t) {
        for (var i = 0; i < t.length; i++) g(t[i]).removeClass("jg-filtered")
    }, r.prototype.filterArray = function(t) {
        var e = this.settings;
        if ("string" === g.type(e.filter)) return t.filter(function(t) {
            var i = g(t);
            return i.is(e.filter) ? (i.removeClass("jg-filtered"), !0) : (i.addClass("jg-filtered").removeClass("jg-visible"), !1)
        });
        if (g.isFunction(e.filter)) {
            for (var i = t.filter(e.filter), s = 0; s < t.length; s++) - 1 === i.indexOf(t[s]) ? g(t[s]).addClass("jg-filtered").removeClass("jg-visible") : g(t[s]).removeClass("jg-filtered");
            return i
        }
    }, r.prototype.destroy = function() {
        clearInterval(this.checkWidthIntervalId), g.each(this.entries, g.proxy(function(t, i) {
            var e = g(i);
            e.css("width", ""), e.css("height", ""), e.css("top", ""), e.css("left", ""), e.data("jg.loaded", void 0), e.removeClass("jg-entry");
            var s = this.imgFromEntry(e);
            s.css("width", ""), s.css("height", ""), s.css("margin-left", ""), s.css("margin-top", ""), s.attr("src", s.data("jg.originalSrc")), s.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers(e);
            var n = this.captionFromEntry(e);
            e.data("jg.createdCaption") ? (e.data("jg.createdCaption", void 0), null !== n && n.remove()) : null !== n && n.fadeTo(0, 1)
        }, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0)
    }, r.prototype.analyzeImages = function(t) {
        for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
            var e = g(this.entries[i]);
            if (!0 === e.data("jg.loaded") || "skipped" === e.data("jg.loaded")) {
                var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                    n = e.data("jg.width") / e.data("jg.height");
                if (s / (this.buildingRow.aspectRatio + n) < this.settings.rowHeight && (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(t);
                this.buildingRow.entriesBuff.push(e), this.buildingRow.aspectRatio += n, this.buildingRow.width += n * this.settings.rowHeight, this.lastAnalyzedIndex = i
            } else if ("error" !== e.data("jg.loaded")) return
        }
        0 < this.buildingRow.entriesBuff.length && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.settings.triggerEvent.call(this, t ? "jg.resize" : "jg.complete"), this.setGalleryFinalHeight(this.galleryHeightToSet)
    }, r.prototype.stopImgAnalyzerStarter = function() {
        this.yield.flushed = 0, null !== this.imgAnalyzerTimeout && (clearTimeout(this.imgAnalyzerTimeout), this.imgAnalyzerTimeout = null)
    }, r.prototype.startImgAnalyzer = function(t) {
        var i = this;
        this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function() {
            i.analyzeImages(t)
        }, .001)
    }, r.prototype.onImageEvent = function(t, i, e) {
        if (i || e) {
            var s = new Image,
                n = g(s);
            i && n.one("load", function() {
                n.off("load error"), i(s)
            }), e && n.one("error", function() {
                n.off("load error"), e(s)
            }), s.src = t
        }
    }, r.prototype.init = function() {
        var a = !1,
            h = !1,
            l = this;
        g.each(this.entries, function(t, i) {
            var e = g(i),
                s = l.imgFromEntry(e);
            if (e.addClass("jg-entry"), !0 !== e.data("jg.loaded") && "skipped" !== e.data("jg.loaded"))
                if (null !== l.settings.rel && e.attr("rel", l.settings.rel), null !== l.settings.target && e.attr("target", l.settings.target), null !== s) {
                    var n = l.extractImgSrcFromImage(s);
                    if (s.attr("src", n), !1 === l.settings.waitThumbnailsLoad) {
                        var r = parseFloat(s.prop("width")),
                            o = parseFloat(s.prop("height"));
                        if (!isNaN(r) && !isNaN(o)) return e.data("jg.width", r), e.data("jg.height", o), e.data("jg.loaded", "skipped"), h = !0, l.startImgAnalyzer(!1), !0
                    }
                    e.data("jg.loaded", !1), a = !0, l.isSpinnerActive() || l.startLoadingSpinnerAnimation(), l.onImageEvent(n, function(t) {
                        e.data("jg.width", t.width), e.data("jg.height", t.height), e.data("jg.loaded", !0), l.startImgAnalyzer(!1)
                    }, function() {
                        e.data("jg.loaded", "error"), l.startImgAnalyzer(!1)
                    })
                } else e.data("jg.loaded", !0), e.data("jg.width", e.width() | parseFloat(e.css("width")) | 1), e.data("jg.height", e.height() | parseFloat(e.css("height")) | 1)
        }), a || h || this.startImgAnalyzer(!1), this.checkWidth()
    }, r.prototype.checkOrConvertNumber = function(t, i) {
        if ("string" === g.type(t[i]) && (t[i] = parseFloat(t[i])), "number" !== g.type(t[i])) throw i + " must be a number";
        if (isNaN(t[i])) throw "invalid number for " + i
    }, r.prototype.checkSizeRangesSuffixes = function() {
        if ("object" !== g.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
        var t = [];
        for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(i);
        for (var e = {
                0: ""
            }, s = 0; s < t.length; s++)
            if ("string" === g.type(t[s])) try {
                e[parseInt(t[s].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[t[s]]
            } catch (t) {
                throw "sizeRangeSuffixes keys must contains correct numbers (" + t + ")"
            } else e[t[s]] = this.settings.sizeRangeSuffixes[t[s]];
        this.settings.sizeRangeSuffixes = e
    }, r.prototype.retrieveMaxRowHeight = function() {
        var t = null,
            i = this.settings.rowHeight;
        if ("string" === g.type(this.settings.maxRowHeight)) t = this.settings.maxRowHeight.match(/^[0-9]+%$/) ? i * parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100 : parseFloat(this.settings.maxRowHeight);
        else {
            if ("number" !== g.type(this.settings.maxRowHeight)) {
                if (!1 === this.settings.maxRowHeight || null == this.settings.maxRowHeight) return null;
                throw "maxRowHeight must be a number or a percentage"
            }
            t = this.settings.maxRowHeight
        }
        if (isNaN(t)) throw "invalid number for maxRowHeight";
        return t < i && (t = i), t
    }, r.prototype.checkSettings = function() {
        this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border");
        var t = ["justify", "nojustify", "left", "center", "right", "hide"];
        if (-1 === t.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + t.join(", ");
        if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || 1 < this.settings.justifyThreshold) throw "justifyThreshold must be in the interval [0,1]";
        if ("boolean" !== g.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
        if ("boolean" !== g.type(this.settings.captions)) throw "captions must be a boolean";
        if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || 1 < this.settings.captionSettings.visibleOpacity) throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
        if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || 1 < this.settings.captionSettings.nonVisibleOpacity) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
        if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== g.type(this.settings.randomize)) throw "randomize must be a boolean";
        if ("string" !== g.type(this.settings.selector)) throw "selector must be a string";
        if (!1 !== this.settings.sort && !g.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
        if (!1 !== this.settings.filter && !g.isFunction(this.settings.filter) && "string" !== g.type(this.settings.filter)) throw "filter must be false, a string or a filter function"
    }, r.prototype.retrieveSuffixRanges = function() {
        var t = [];
        for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(parseInt(i, 10));
        return t.sort(function(t, i) {
            return i < t ? 1 : t < i ? -1 : 0
        }), t
    }, r.prototype.updateSettings = function(t) {
        this.settings = g.extend({}, this.settings, t), this.checkSettings(), this.border = 0 <= this.settings.border ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges()
    }, r.prototype.defaults = {
        sizeRangeSuffixes: {},
        thumbnailPath: void 0,
        rowHeight: 120,
        maxRowHeight: !1,
        margins: 1,
        border: -1,
        lastRow: "nojustify",
        justifyThreshold: .9,
        waitThumbnailsLoad: !0,
        captions: !0,
        cssAnimation: !0,
        imagesAnimationDuration: 500,
        captionSettings: {
            animationDuration: 500,
            visibleOpacity: .7,
            nonVisibleOpacity: 0
        },
        rel: null,
        target: null,
        extension: /\.[^.\\/]+$/,
        refreshTime: 200,
        refreshSensitivity: 0,
        randomize: !1,
        rtl: !1,
        sort: !1,
        filter: !1,
        selector: "a, div:not(.spinner)",
        imgSelector: "> img, > a > img",
        triggerEvent: function(t) {
            this.$gallery.trigger(t)
        }
    }, g.fn.justifiedGallery = function(n) {
        return this.each(function(t, i) {
            var e = g(i);
            e.addClass("justified-gallery");
            var s = e.data("jg.controller");
            if (void 0 === s) {
                if (null != n && "object" !== g.type(n)) {
                    if ("destroy" === n) return;
                    throw "The argument must be an object"
                }
                s = new r(e, g.extend({}, r.prototype.defaults, n)), e.data("jg.controller", s)
            } else if ("norewind" === n);
            else {
                if ("destroy" === n) return void s.destroy();
                s.updateSettings(n), s.rewind()
            }
            s.updateEntries("norewind" === n) && s.init()
        })
    }
});


/*  Share Project */

! function(a, b, c) {
    function d(a, c) {
        var d = b(a);
        d.data(f, this), this._$element = d, this.shares = [], this._init(c), this._render()
    }
    var e = "JSSocials",
        f = e,
        g = function(a, c) {
            return b.isFunction(a) ? a.apply(c, b.makeArray(arguments).slice(2)) : a
        },
        h = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
        i = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
        j = {
            G: 1e9,
            M: 1e6,
            K: 1e3
        },
        k = {};
    d.prototype = {
        url: "",
        text: "",
        shareIn: "blank",
        showLabel: function(a) {
            return this.showCount === !1 ? a > this.smallScreenWidth : a >= this.largeScreenWidth
        },
        showCount: function(a) {
            return a <= this.smallScreenWidth ? "inside" : !0
        },
        smallScreenWidth: 640,
        largeScreenWidth: 1024,
        resizeTimeout: 200,
        elementClass: "jssocials",
        sharesClass: "jssocials-shares",
        shareClass: "jssocials-share",
        shareButtonClass: "jssocials-share-button",
        shareLinkClass: "jssocials-share-link",
        shareLogoClass: "jssocials-share-logo",
        shareLabelClass: "jssocials-share-label",
        shareLinkCountClass: "jssocials-share-link-count",
        shareCountBoxClass: "jssocials-share-count-box",
        shareCountClass: "jssocials-share-count",
        shareZeroCountClass: "jssocials-share-no-count",
        _init: function(a) {
            this._initDefaults(), b.extend(this, a), this._initShares(), this._attachWindowResizeCallback()
        },
        _initDefaults: function() {
            this.url = a.location.href, this.text = b.trim(b("meta[name=description]").attr("content") || b("title").text())
        },
        _initShares: function() {
            this.shares = b.map(this.shares, b.proxy(function(a) {
                "string" == typeof a && (a = {
                    share: a
                });
                var c = a.share && k[a.share];
                if (!c && !a.renderer) throw Error("Share '" + a.share + "' is not found");
                return b.extend({
                    url: this.url,
                    text: this.text
                }, c, a)
            }, this))
        },
        _attachWindowResizeCallback: function() {
            b(a).on("resize", b.proxy(this._windowResizeHandler, this))
        },
        _detachWindowResizeCallback: function() {
            b(a).off("resize", this._windowResizeHandler)
        },
        _windowResizeHandler: function() {
            (b.isFunction(this.showLabel) || b.isFunction(this.showCount)) && (a.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(b.proxy(this.refresh, this), this.resizeTimeout))
        },
        _render: function() {
            this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = b("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
        },
        _defineOptionsByScreen: function() {
            this._screenWidth = b(a).width(), this._showLabel = g(this.showLabel, this, this._screenWidth), this._showCount = g(this.showCount, this, this._screenWidth)
        },
        _renderShares: function() {
            b.each(this.shares, b.proxy(function(a, b) {
                this._renderShare(b)
            }, this))
        },
        _renderShare: function(a) {
            var c;
            c = b.isFunction(a.renderer) ? b(a.renderer()) : this._createShare(a), c.addClass(this.shareClass).addClass(a.share ? "jssocials-share-" + a.share : "").addClass(a.css).appendTo(this._$shares)
        },
        _createShare: function(a) {
            var c = b("<div>"),
                d = this._createShareLink(a).appendTo(c);
            if (this._showCount) {
                var e = "inside" === this._showCount,
                    f = e ? d : b("<div>").addClass(this.shareCountBoxClass).appendTo(c);
                f.addClass(e ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(a, f)
            }
            return c
        },
        _createShareLink: function(a) {
            var c = this._getShareStrategy(a),
                d = c.call(a, {
                    shareUrl: this._getShareUrl(a)
                });
            return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)), this._showLabel && d.append(this._createShareLabel(a)), b.each(this.on || {}, function(c, e) {
                b.isFunction(e) && d.on(c, b.proxy(e, a))
            }), d
        },
        _getShareStrategy: function(a) {
            var b = m[a.shareIn || this.shareIn];
            if (!b) throw Error("Share strategy '" + this.shareIn + "' not found");
            return b
        },
        _getShareUrl: function(a) {
            var b = g(a.shareUrl, a);
            return this._formatShareUrl(b, a)
        },
        _createShareLogo: function(a) {
            var c = a.logo,
                d = h.test(c) ? b("<img>").attr("src", a.logo) : b("<i>").addClass(c);
            return d.addClass(this.shareLogoClass), d
        },
        _createShareLabel: function(a) {
            return b("<span>").addClass(this.shareLabelClass).text(a.label)
        },
        _renderShareCount: function(a, c) {
            var d = b("<span>").addClass(this.shareCountClass);
            c.addClass(this.shareZeroCountClass).append(d), this._loadCount(a).done(b.proxy(function(a) {
                a && (c.removeClass(this.shareZeroCountClass), d.text(a))
            }, this))
        },
        _loadCount: function(a) {
            var c = b.Deferred(),
                d = this._getCountUrl(a);
            if (!d) return c.resolve(0).promise();
            var e = b.proxy(function(b) {
                c.resolve(this._getCountValue(b, a))
            }, this);
            return b.getJSON(d).done(e).fail(function() {
                b.get(d).done(e).fail(function() {
                    c.resolve(0)
                })
            }), c.promise()
        },
        _getCountUrl: function(a) {
            var b = g(a.countUrl, a);
            return this._formatShareUrl(b, a)
        },
        _getCountValue: function(a, c) {
            var d = (b.isFunction(c.getCount) ? c.getCount(a) : a) || 0;
            return "string" == typeof d ? d : this._formatNumber(d)
        },
        _formatNumber: function(a) {
            return b.each(j, function(b, c) {
                return a >= c ? (a = parseFloat((a / c).toFixed(2)) + b, !1) : void 0
            }), a
        },
        _formatShareUrl: function(b, c) {
            return b.replace(i, function(b, d, e) {
                var f = c[e] || "";
                return f ? (d || "") + a.encodeURIComponent(f) : ""
            })
        },
        _clear: function() {
            a.clearTimeout(this._resizeTimer), this._$element.empty()
        },
        _passOptionToShares: function(a, c) {
            var d = this.shares;
            b.each(["url", "text"], function(e, f) {
                f === a && b.each(d, function(b, d) {
                    d[a] = c
                })
            })
        },
        _normalizeShare: function(a) {
            return b.isNumeric(a) ? this.shares[a] : "string" == typeof a ? b.grep(this.shares, function(b) {
                return b.share === a
            })[0] : a
        },
        refresh: function() {
            this._render()
        },
        destroy: function() {
            this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(f)
        },
        option: function(a, b) {
            return 1 === arguments.length ? this[a] : (this[a] = b, this._passOptionToShares(a, b), void this.refresh())
        },
        shareOption: function(a, b, c) {
            return a = this._normalizeShare(a), 2 === arguments.length ? a[b] : (a[b] = c, void this.refresh())
        }
    }, b.fn.jsSocials = function(a) {
        var e = b.makeArray(arguments),
            g = e.slice(1),
            h = this;
        return this.each(function() {
            var e, i = b(this),
                j = i.data(f);
            if (j)
                if ("string" == typeof a) {
                    if (e = j[a].apply(j, g), e !== c && e !== j) return h = e, !1
                } else j._detachWindowResizeCallback(), j._init(a), j._render();
            else new d(i, a)
        }), h
    };
    var l = function(a) {
            var c;
            b.isPlainObject(a) ? c = d.prototype : (c = k[a], a = arguments[1] || {}), b.extend(c, a)
        },
        m = {
            popup: function(c) {
                return b("<a>").attr("href", "#").on("click", function() {
                    return a.open(c.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
                })
            },
            blank: function(a) {
                return b("<a>").attr({
                    target: "_blank",
                    href: a.shareUrl
                })
            },
            self: function(a) {
                return b("<a>").attr({
                    target: "_self",
                    href: a.shareUrl
                })
            }
        };
    a.jsSocials = {
        Socials: d,
        shares: k,
        shareStrategies: m,
        setDefaults: l
    }
}(window, jQuery),
function(a, b, c) {
    b.extend(c.shares, {
        email: {
            label: "E-mail",
            logo: "fa-brands fa-at",
            shareUrl: "mailto:{to}?subject={text}&body={url}",
            countUrl: "",
            shareIn: "self"
        },
        twitter: {
            label: "Tweet",
            logo: "fa-brands fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },
        facebook: {
            label: "Like",
            logo: "fa-brands fa-facebook-f",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: "https://graph.facebook.com/?id={url}",
            getCount: function(a) {
                return a.share && a.share.share_count || 0
            }
        },
        vkontakte: {
            label: "Like",
            logo: "fa-brands fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
            getCount: function(a) {
                return parseInt(a.slice(15, -2).split(", ")[1])
            }
        },
        googleplus: {
            label: "+1",
            logo: "fa-brands fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },
        linkedin: {
            label: "Share",
            logo: "fa-brands fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
            countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        pinterest: {
            label: "Pin it",
            logo: "fa-brands fa-pinterest-p",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        stumbleupon: {
            label: "Share",
            logo: "fa-brands fa-stumbleupon",
            shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
            countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
            getCount: function(a) {
                return a.result.views
            }
        },
        telegram: {
            label: "Telegram",
            logo: "fa-brands fa-paper-plane",
            shareUrl: "tg://msg?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        whatsapp: {
            label: "WhatsApp",
            logo: "fa-brands fa-whatsapp",
            shareUrl: "whatsapp://send?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        line: {
            label: "LINE",
            logo: "fa-brands fa-comment",
            shareUrl: "http://line.me/R/msg/text/?{text} {url}",
            countUrl: ""
        },
        viber: {
            label: "Viber",
            logo: "fa-brands fa-volume-control-phone",
            shareUrl: "viber://forward?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        pocket: {
            label: "Pocket",
            logo: "fa-brands fa-get-pocket",
            shareUrl: "https://getpocket.com/save?url={url}&title={title}",
            countUrl: ""
        },
        messenger: {
            label: "Share",
            logo: "fa-brands fa-commenting",
            shareUrl: "fb-messenger://share?link={url}",
            countUrl: "",
            shareIn: "self"
        }
    })
}(window, jQuery, window.jsSocials);


//Gridtofullscreen

class GridToFullscreenEffect {
    constructor(e, n, t = {}) {
        this.container = e, this.itemsWrapper = n, this.itemsWrapperChildren = n.querySelectorAll(".trigger-item"), this.initialised = !1, this.camera = null, this.scene = null, this.renderer = null, t.scrollContainer = t.scrollContainer || null, t.timing = t.timing || {}, t.timing.type = t.timing.type || "sameEnd", t.timing.sections = t.timing.sections || 1, t.timing.latestStart = t.timing.latestStart || .5, t.timing.duration = t.timing.duration || 1, t.transformation = t.transformation || {}, t.transformation.type = t.transformation.type || "none", t.transformation.props = t.transformation.props || {}, t.activation.type = t.activation.type || "none", t.seed = t.seed || 0, t.easings = t.easings || {}, t.easings.toFullscreen = t.easings.toFullscreen || Power0.easeNone, t.easings.toGrid = t.easings.toGrid || Power0.easeNone, t.flipBeizerControls = t.flipBeizerControls || {}, t.flipBeizerControls.c0 = t.flipBeizerControls.c0 || {}, t.flipBeizerControls.c0.x = t.flipBeizerControls.c0.x || .5, t.flipBeizerControls.c0.y = t.flipBeizerControls.c0.y || .5, t.flipBeizerControls.c1 = t.flipBeizerControls.c1 || {}, t.flipBeizerControls.c1.x = t.flipBeizerControls.c1.x || .5, t.flipBeizerControls.c1.y = t.flipBeizerControls.c1.y || .5, this.options = t, this.uniforms = {
            uImage: new THREE.Uniform(null),
            uImageRes: new THREE.Uniform(new THREE.Vector2(1, 1)),
            uImageLarge: new THREE.Uniform(null),
            uImageLargeRes: new THREE.Uniform(new THREE.Vector2(1, 1)),
            uProgress: new THREE.Uniform(0),
            uMeshScale: new THREE.Uniform(new THREE.Vector2(1, 1)),
            uPlaneCenter: new THREE.Uniform(new THREE.Vector2(0, 0)),
            uViewSize: new THREE.Uniform(new THREE.Vector2(1, 1)),
            uScaleToViewSize: new THREE.Uniform(new THREE.Vector2(1, 1)),
            uClosestCorner: new THREE.Uniform(0),
            uMouse: new THREE.Uniform(new THREE.Vector2(0, 0)),
            uSeed: new THREE.Uniform(t.seed),
            uProgressByParts: new THREE.Uniform("sections" === t.timing.type),
            uActivationParts: new THREE.Uniform(t.timing.sections),
            uSyncLatestStart: new THREE.Uniform(t.timing.latestStart),
            uBeizerControls: new THREE.Uniform(new THREE.Vector4(t.flipBeizerControls.c0.x, t.flipBeizerControls.c0.y, t.flipBeizerControls.c1.x, t.flipBeizerControls.c1.y))
        }, this.textures = [], this.currentImageIndex = -1, this.isFullscreen = !1, this.isAnimating = !1, this.onResize = this.onResize = this.onResize.bind(this)
    }
    resetUniforms() {
        this.uniforms.uMeshScale.value = new THREE.Vector2(1, 1), this.uniforms.uPlaneCenter.value = new THREE.Vector2(0, 0), this.uniforms.uScaleToViewSize.value = new THREE.Vector2(1, 1), this.uniforms.uClosestCorner.value = 0, this.uniforms.uMouse.value = new THREE.Vector2(0, 0), this.uniforms.uImage.value = null, this.uniforms.uImageRes.value = new THREE.Vector2(1, 1), this.uniforms.uImageLarge.value = null, this.uniforms.uImageLargeRes.value = new THREE.Vector2(1, 1);
        const e = this.mesh;
        e.scale.x = 1e-5, e.scale.y = 1e-5, e.position.x = 0, e.position.y = 0
    }
    createTextures(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
            const r = e[t],
                i = new THREE.Texture(r.large.image);
            i.generateMipmaps = !1, i.wrapS = i.wrapT = THREE.ClampToEdgeWrapping, i.minFilter = THREE.LinearFilter, i.needsUpdate = !0;
            const o = new THREE.Texture(r.small.image);
            o.generateMipmaps = !1, o.wrapS = o.wrapT = THREE.ClampToEdgeWrapping, o.minFilter = THREE.LinearFilter, o.needsUpdate = !0;
            const s = {
                large: {
                    element: r.large.element,
                    texture: i
                },
                small: {
                    element: r.small.element,
                    texture: o
                }
            };
            n.push(s)
        }
        this.textures = n, this.setCurrentTextures()
    }
    setCurrentTextures() {
        if (-1 === this.currentImageIndex) return;
        const e = this.textures[this.currentImageIndex];
        this.uniforms.uImage.value = e.small.texture, this.uniforms.uImageRes.value.x = e.small.texture.image.naturalWidth, this.uniforms.uImageRes.value.y = e.small.texture.image.naturalHeight, this.uniforms.uImageLarge.value = e.large.texture, this.uniforms.uImageLargeRes.value.x = e.large.texture.image.naturalWidth, this.uniforms.uImageLargeRes.value.y = e.large.texture.image.naturalHeight, this.isAnimating || this.render()
    }
    init() {
        this.renderer = new THREE.WebGLRenderer({
            alpha: !0,
            antialias: !0
        }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.container.appendChild(this.renderer.domElement), this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1e4), this.camera.position.z = 50, this.camera.lookAt = this.scene.position;
        const e = this.getViewSize();
        this.uniforms.uViewSize.value = new THREE.Vector2(e.width, e.height);
        var n = new THREE.PlaneBufferGeometry(1, 1, 128, 128);
        const t = (r = this.options.transformation.type) && "[object Function]" === {}.toString.call(r) ? this.options.transformation.type(this.options.transformation.props) : transformations[this.options.transformation.type](this.options.transformation.props);
        var r;
        const i = generateShaders(activations[this.options.activation.type], t);
        var o = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: i.vertex,
            fragmentShader: i.fragment,
            side: THREE.DoubleSide
        });
        this.mesh = new THREE.Mesh(n, o), this.scene.add(this.mesh), window.addEventListener("resize", this.onResize), this.options.scrollContainer && this.options.scrollContainer.addEventListener("scroll", (e => {
            this.recalculateUniforms(e)
        }));
        for (let e = 0; e < this.itemsWrapperChildren.length; e++) {
            this.itemsWrapperChildren[e].children[0].addEventListener("click", this.createOnMouseDown(e))
        }
    }
    createOnMouseDown(e) {
        return n => {
            this.toFullscreen(e, n)
        }
    }
    toGrid() {
        this.isFullscreen && !this.isAnimating && (this.isAnimating = !0, this.options.onToGridStart && this.options.onToGridStart({
            index: this.currentImageIndex
        }), this.tween = TweenLite.to(this.uniforms.uProgress, this.options.timing.duration, {
            value: 0,
            ease: this.options.easings.toGrid,
            onUpdate: () => {
                this.render()
            },
            onComplete: () => {
                this.isAnimating = !1, this.isFullscreen = !1, this.itemsWrapper.style.zIndex = 1, this.container.style.zIndex = 0, this.resetUniforms(), this.render(), this.options.onToGridFinish && this.options.onToGridFinish({
                    index: -1,
                    lastIndex: this.currentImageIndex
                }), this.currentImageIndex = -1
            }
        }))
    }
    recalculateUniforms(e) {
        if (-1 === this.currentImageIndex) return;
        const n = this.itemsWrapperChildren[this.currentImageIndex].children[0].getBoundingClientRect(),
            t = {
                x: (e.clientX - n.left) / n.width,
                y: 1 - (e.clientY - n.top) / n.height
            },
            r = 2 * (n.left > window.innerWidth - (n.left + n.width)) + (n.top > window.innerHeight - (n.top + n.height));
        this.uniforms.uClosestCorner.value = r, this.uniforms.uMouse.value = new THREE.Vector2(t.x, t.y);
        const i = this.getViewSize(),
            o = n.width * i.width / window.innerWidth,
            s = n.height * i.height / window.innerHeight,
            a = n.left * i.width / window.innerWidth - i.width / 2,
            l = n.top * i.height / window.innerHeight - i.height / 2,
            u = (this.mesh.geometry, this.mesh);
        u.scale.x = o, u.scale.y = s;
        let c = a + o / 2,
            m = -l - s / 2;
        u.position.x = c, u.position.y = m, this.uniforms.uPlaneCenter.value.x = c / o, this.uniforms.uPlaneCenter.value.y = m / s, this.uniforms.uMeshScale.value.x = o, this.uniforms.uMeshScale.value.y = s, this.uniforms.uScaleToViewSize.value.x = i.width / o - 1, this.uniforms.uScaleToViewSize.value.y = i.height / s - 1
    }
    toFullscreen(e, n) {
        if (!this.isFullscreen && !this.isAnimating) {
            if (this.isAnimating = !0, this.currentImageIndex = e, this.recalculateUniforms(n), this.textures[e]) {
                const n = this.textures[e];
                this.uniforms.uImage.value = n.small.texture, this.uniforms.uImageRes.value.x = n.small.texture.image.naturalWidth, this.uniforms.uImageRes.value.y = n.small.texture.image.naturalHeight, this.uniforms.uImageLarge.value = n.large.texture, this.uniforms.uImageLargeRes.value.x = n.large.texture.image.naturalWidth, this.uniforms.uImageLargeRes.value.y = n.large.texture.image.naturalHeight
            }
            this.itemsWrapper.style.zIndex = 0, this.container.style.zIndex = 2, this.options.onToFullscreenStart && this.options.onToFullscreenStart({
                index: this.currentImageIndex
            }), this.tween = TweenLite.to(this.uniforms.uProgress, this.options.timing.duration, {
                value: 1,
                ease: this.options.easings.toFullscreen,
                onUpdate: () => {
                    this.render()
                },
                onComplete: () => {
                    this.isAnimating = !1, this.isFullscreen = !0, this.options.onToFullscreenFinish && this.options.onToFullscreenFinish({
                        index: this.currentImageIndex
                    })
                }
            })
        }
    }
    getViewSize() {
        const e = this.camera.fov * Math.PI / 180,
            n = Math.abs(this.camera.position.z * Math.tan(e / 2) * 2);
        return {
            width: n * this.camera.aspect,
            height: n
        }
    }
    render() {
        this.renderer.render(this.scene, this.camera)
    }
    onResize(e) {
        this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight), this.currentImageIndex > -1 && (this.recalculateUniforms(e), this.render())
    }
}
var activations = {
    none: "float getActivation(vec2 uv){return 0.;}",
    corners: "\n    float getActivation(vec2 uv){\n      float top = (1.-uv.y);\n      float right = uv.x;\n      float bottom = uv.y;\n      float left = 1.- uv.x;\n\n      return top *0.333333 + (right * 0.333333 + (right * bottom)*0.666666 );\n  }\n  ",
    topLeft: "\n    float getActivation(vec2 uv){\n        return (+uv.x-uv.y+1.)/2.;\n    }\n  ",
    sides: "\n      float getActivation(vec2 uv){\n        return min(uv.x, 1.-uv.x) * 2.;\n      }\n  ",
    left: "\n    float getActivation(vec2 uv){\n        return uv.x;\n    }\n    ",
    top: "\n    float getActivation(vec2 uv){\n        return 1. - uv.y;\n    }\n    ",
    bottom: "\n    float getActivation(vec2 uv){\n        return uv.y;\n    }\n    ",
    bottomStep: "\n    float getActivation(vec2 uv){\n        \n        \n        return uv.y;\n    }\n    ",
    sinX: "\n      float getActivation(vec2 uv){\n        return sin(uv.x * 3.14);\n      }\n    ",
    center: "\n      float getActivation(vec2 uv){\n        float maxDistance = distance(vec2(0.),vec2(0.5));\n        float dist = distance(vec2(0.), uv-0.5);\n        return smoothstep(0.,maxDistance,dist);\n      }\n    ",
    mouse: "\n      float getActivation(vec2 uv){\n        float maxDistance = distance(uMouse, 1.-floor(uMouse+0.5));\n        float dist = smoothstep(0.,maxDistance,distance(uMouse,uv));\n        return dist;\n      }\n    ",
    closestCorner: "\n      float getActivation(vec2 uv){\n\n\n        float y = mod(uClosestCorner,2.) *2. -1.;\n        float x = (floor(uClosestCorner /2.)*2.-1.)*-1.;\n\n        float xAct = abs(min(0.,x)) + uv.x * x;\n        float yAct = abs(min(0.,y)) + uv.y * y;\n\n        return (xAct+yAct)/2.;\n      }\n    ",
    closestSide: "\n      float getActivation(vec2 uv){\n\n        float y = mod(uClosestCorner,2.) *2. -1.;\n        float x = (floor(uClosestCorner /2.)*2.-1.)*-1.;\n\n        float xAct = abs(min(0.,x)) + uv.x * x;\n        float yAct = abs(min(0.,y)) + uv.y * y;\n\n        return (xAct+yAct)/2.;\n      }\n    "
};

function ensureFloat(e) {
    let n = e.toString();
    return -1 === n.indexOf(".") && (n += "."), n
}
const transformations = {
    none: () => "",
    flipX: () => "\n    \n        float beizerProgress = cubicBezier(vertexProgress,\n        uBeizerControls.x,uBeizerControls.y,\n        uBeizerControls.z,uBeizerControls.w);\n\n        float flippedX = -transformedPos.x;\n        transformedPos.x = mix (transformedPos.x, flippedX,beizerProgress );\n          \n         \n          float syncDifference =  uSyncLatestStart;\n            \n           \n          float aspectRatio = (uMeshScale.x / uMeshScale.y);\n          float stepFormula = 0.5 - (syncDifference * uSyncLatestStart * uSyncLatestStart) * aspectRatio;\n\n          transformedUV.x = mix(transformedUV.x,1.-transformedUV.x,\n              step(stepFormula,beizerProgress));\n      ",
    simplex: e => {
        ensureFloat(e.seed || 0);
        let n = ensureFloat(e.amplitudeX || .5),
            t = ensureFloat(e.amplitudeY || .5),
            r = ensureFloat(e.frequencyX || 1),
            i = ensureFloat(e.frequencyY || .75),
            o = ensureFloat(e.progressLimit || .5);
        return `\n      float simplexProgress = min(clamp((vertexProgress) / ${o},0.,1.),clamp((1.-vertexProgress) / (1.-${o}),0.,1.));\n      simplexProgress = smoothstep(0.,1.,simplexProgress);\n      float noiseX = snoise(vec2(transformedPos.x +uSeed, transformedPos.y + uSeed + simplexProgress * 1.) * ${r} ) ;\n      float noiseY = snoise(vec2(transformedPos.y +uSeed, transformedPos.x + uSeed + simplexProgress * 1.) * ${i}) ;\n      transformedPos.x += ${n} * noiseX * simplexProgress;\n      transformedPos.y += ${t} * noiseY * simplexProgress;\n  `
    },
    fluid: e => {
        const n = ensureFloat(e.frequency || 1),
            t = ensureFloat(e.amplitude || .3);
        let r = ensureFloat((e.x || .5) - .5),
            i = ensureFloat((e.y || .5) - .5);
        e.onMouse && (r = "uMouse.x - 0.5", i = "uMouse.y - 0.5");
        const o = ensureFloat(e.progressLimit || .5);
        return `\n      float velvetProgress = min(clamp((vertexProgress) / ${o},0.,1.),clamp((1.-vertexProgress) / (1.-${o}),0.,1.));\n      velvetProgress = sin(velvetProgress * (3.14 / 2.) * ${n});\n      vec2 velvetPoint   = vec2(${r},${i}); \n      vec2 velvetToPoint =  transformedPos.xy;\n      transformedPos.xy = mix(transformedPos.xy, velvetPoint + velvetToPoint*${t}, velvetProgress);\n     \n    `
    },
    wavy: e => {
        const n = ensureFloat(e.seed || 0);
        return `\n      float limit = 0.5;\n      float wavyProgress = min(clamp((vertexProgress) / limit,0.,1.),clamp((1.-vertexProgress) / (1.-limit),0.,1.));\n\n      float dist = length(transformedPos.xy);\n      \n      float angle = atan(transformedPos.x,transformedPos.y);\n\n      float nextDist = dist * (${ensureFloat(e.amplitude||.5)} * (sin(angle * ${ensureFloat(e.frequency||4)} + ${n}) /2.+0.5)+ 1.);\n\n      transformedPos.x = mix(transformedPos.x,sin(angle) * nextDist ,  wavyProgress);\n      transformedPos.y = mix(transformedPos.y,cos(angle) * nextDist,  wavyProgress);\n    `
    },
    circle: e => "\n      float limit = 0.5;\n      float circleProgress = min(clamp((vertexProgress) / limit,0.,1.),clamp((1.-vertexProgress) / (1.-limit),0.,1.));\n\n      float maxDistance = 0.5;\n      float dist = length(transformedPos.xy);\n      \n      float nextDist = min(maxDistance,dist);\n      float overload = step(maxDistance,dist);\n      float angle = atan(transformedPos.x,transformedPos.y);\n      \n      transformedPos.x = mix(transformedPos.x,sin(angle) * nextDist ,  circleProgress );\n      transformedPos.y = mix(transformedPos.y,cos(angle) * nextDist,  circleProgress);\n      transformedPos.z += -0.5 * overload * circleProgress;\n    \n  "
};
var vertexUniforms = "\n    uniform float uProgress;\n    uniform vec2 uScaleToViewSize;\n    uniform vec2 uPlaneCenter;\n    uniform vec2 uMeshScale;\n    uniform vec2 uMouse;\n    uniform vec2 uViewSize;\n\n    uniform float uClosestCorner;\n\n   \n    uniform float uSeed;\n    uniform vec4 uBeizerControls;\n    uniform float uSyncLatestStart;\n    uniform float uActivationParts;\n    uniform bool uProgressByParts;\n    varying vec2 vUv;\n    varying vec2 scale; \n    varying float vProgress;\n";

function generateShaders(e, n) {
    return {
        fragment: "\n    uniform float uProgress;\n    uniform sampler2D uImage;\n    uniform vec2 uImageRes;\n    uniform sampler2D uImageLarge;\n    uniform vec2 uImageLargeRes;\n    uniform vec2 uMeshScale;\n    \n    varying vec2 vUv;\n    varying float vProgress;\n    varying vec2 scale;\n\n\n    vec2 preserveAspectRatioSlice(vec2 uv, vec2 planeSize, vec2 imageSize ){\n      \n        vec2 ratio = vec2(\n            min((planeSize.x / planeSize.y) / (imageSize.x / imageSize.y), 1.0),\n            min((planeSize.y / planeSize.x) / (imageSize.y / imageSize.x), 1.0)\n        );\n        \n        \n        vec2 sliceUvs = vec2(\n            uv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n            uv.y * ratio.y + (1.0 - ratio.y) * 0.5\n        );\n\n        return sliceUvs;\n    }\n\n    void main(){\n \n        vec2 uv = vUv;\n\n        vec2 scaledPlane = uMeshScale * scale;\n\n        \n        vec2 smallImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageRes);\n\n        vec3 color = texture2D(uImage,smallImageUV).xyz;\n\n        if(vProgress > 0.){\n          vec2 largeImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageLargeRes);\n          color = mix(color,texture2D(uImageLarge,largeImageUV).xyz, vProgress );\n        }\n\n        gl_FragColor = vec4(color,1.);\n    }\n",
        vertex: `\n    ${vertexUniforms}\n    ${cubicBeizer}\n    ${simplex}\n\n    ${quadraticBezier}\n    \n\n    ${e}\nfloat linearStep(float edge0, float edge1, float val) {\n\tfloat x = clamp( (val  - edge0) / (edge1 - edge0),0.,1.);\n\t\treturn x;\n}\n    void main(){\n\n      vec3 pos = position.xyz;\n      vec2 newUV = uv;\n\n      float activation = getActivation(uv);\n\n\n\n      \n      float startAt = activation * uSyncLatestStart;\n      float vertexProgress = smoothstep(startAt,1.,uProgress);\n\n\n      if(uProgressByParts){\n        \n        float activationPart = 1./uActivationParts;\n        float activationPartDuration = 1./(uActivationParts+1.);\n\n        float progressStart = (activation / activationPart) * activationPartDuration;\n        float progressEnd = min(progressStart + activationPartDuration,1.);\n        vertexProgress = linearStep(progressStart,progressEnd,uProgress);\n      }\n        vec3 transformedPos = pos;\n        vec2 transformedUV = uv;\n        ${n||""}\n        pos = transformedPos;\n        newUV = transformedUV; \n\n        \n        scale = vec2(\n          1. + uScaleToViewSize * vertexProgress\n        );\n        \n        \n        vec2 flippedPos = vec2(\n          (- pos.x) ,\n          (- pos.y ) \n        );\n\n\n        \n        pos.xy *= scale;\n\n\n        \n        pos.y += -uPlaneCenter.y * vertexProgress;\n        pos.x += -uPlaneCenter.x * vertexProgress;\n\n        // Move slightly to the front\n        pos.z += vertexProgress;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n        vProgress = vertexProgress;\n      vUv = newUV;\n    }\n`
    }
}
var cubicBeizer = "\n\nfloat slopeFromT (float t, float A, float B, float C){\n  float dtdx = 1.0/(3.0*A*t*t + 2.0*B*t + C); \n  return dtdx;\n}\n\nfloat xFromT (float t, float A, float B, float C, float D){\n  float x = A*(t*t*t) + B*(t*t) + C*t + D;\n  return x;\n}\n\nfloat yFromT (float t, float E, float F, float G, float H){\n  float y = E*(t*t*t) + F*(t*t) + G*t + H;\n  return y;\n}\nfloat cubicBezier (float x, float a, float b, float c, float d){\n\n  float y0a = 0.00; \n  float x0a = 0.00; \n  float y1a = b;    \n  float x1a = a;    \n  float y2a = d;   \n  float x2a = c;    \n  float y3a = 1.00; \n  float x3a = 1.00; \n\n  float A =   x3a - 3.*x2a + 3.*x1a - x0a;\n  float B = 3.*x2a - 6.*x1a + 3.*x0a;\n  float C = 3.*x1a - 3.*x0a;   \n  float D =   x0a;\n\n  float E =   y3a - 3.*y2a + 3.*y1a - y0a;    \n  float F = 3.*y2a - 6.*y1a + 3.*y0a;             \n  float G = 3.*y1a - 3.*y0a;             \n  float H =   y0a;\n\n \n  float currentt = x;\n  const int nRefinementIterations = 5;\n  for (int i=0; i < nRefinementIterations; i++){\n    float currentx = xFromT (currentt, A,B,C,D); \n    float currentslope = slopeFromT (currentt, A,B,C);\n    currentt -= (currentx - x)*(currentslope);\n    currentt = clamp(currentt, 0.,1.);\n  } \n\n  float y = yFromT (currentt,  E,F,G,H);\n  return y;\n}\n",
    simplex = "\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n",
    quadraticBezier = "\nfloat quadraticBezier (float x, float a, float b){\n \n\n  float epsilon = 0.00001;\n  a = max(0., min(1., a)); \n  b = max(0., min(1., b)); \n  if (a == 0.5){\n    a += epsilon;\n  }\n  \n \n  float om2a = 1. - 2.*a;\n  float t = (sqrt(a*a + om2a*x) - a)/om2a;\n  float y = (1.-2.*b)*(t*t) + (2.*b)*t;\n  return y;\n}\n";