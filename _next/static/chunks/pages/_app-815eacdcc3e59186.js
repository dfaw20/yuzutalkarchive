(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    7258: function (e, t, n) {
      "use strict";
      n.d(t, {
        iv: function () {
          return Ae;
        },
        tZ: function () {
          return Te;
        },
        F4: function () {
          return Re;
        },
      });
      var r = n(7294);
      var o = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        a = Math.abs,
        i = String.fromCharCode;
      function s(e) {
        return e.trim();
      }
      function u(e, t, n) {
        return e.replace(t, n);
      }
      function c(e, t) {
        return e.indexOf(t);
      }
      function l(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function f(e, t, n) {
        return e.slice(t, n);
      }
      function d(e) {
        return e.length;
      }
      function h(e) {
        return e.length;
      }
      function p(e, t) {
        return t.push(e), e;
      }
      var v = 1,
        y = 1,
        m = 0,
        _ = 0,
        g = 0,
        b = "";
      function S(e, t, n, r, o, a, i) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: v,
          column: y,
          length: i,
          return: "",
        };
      }
      function w(e, t, n) {
        return S(e, t.root, t.parent, n, t.props, t.children, 0);
      }
      function T() {
        return (g = _ > 0 ? l(b, --_) : 0), y--, 10 === g && ((y = 1), v--), g;
      }
      function A() {
        return (g = _ < m ? l(b, _++) : 0), y++, 10 === g && ((y = 1), v++), g;
      }
      function R() {
        return l(b, _);
      }
      function E() {
        return _;
      }
      function k(e, t) {
        return f(b, e, t);
      }
      function N(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function V(e) {
        return (v = y = 1), (m = d((b = e))), (_ = 0), [];
      }
      function C(e) {
        return (b = ""), e;
      }
      function M(e) {
        return s(k(_ - 1, O(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function L(e) {
        for (; (g = R()) && g < 33; ) A();
        return N(e) > 2 || N(g) > 3 ? "" : " ";
      }
      function x(e, t) {
        for (
          ;
          --t &&
          A() &&
          !(g < 48 || g > 102 || (g > 57 && g < 65) || (g > 70 && g < 97));

        );
        return k(e, E() + (t < 6 && 32 == R() && 32 == A()));
      }
      function O(e) {
        for (; A(); )
          switch (g) {
            case e:
              return _;
            case 34:
            case 39:
              return O(34 === e || 39 === e ? e : g);
            case 40:
              41 === e && O(e);
              break;
            case 92:
              A();
          }
        return _;
      }
      function D(e, t) {
        for (; A() && e + g !== 57 && (e + g !== 84 || 47 !== R()); );
        return "/*" + k(t, _ - 1) + "*" + i(47 === e ? e : A());
      }
      function B(e) {
        for (; !N(R()); ) A();
        return k(e, _);
      }
      var U = "-ms-",
        P = "-moz-",
        $ = "-webkit-",
        I = "comm",
        z = "rule",
        F = "decl";
      function j(e, t) {
        for (var n = "", r = h(e), o = 0; o < r; o++)
          n += t(e[o], o, e, t) || "";
        return n;
      }
      function G(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case F:
            return (e.return = e.return || e.value);
          case I:
            return "";
          case z:
            e.value = e.props.join(",");
        }
        return d((n = j(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function W(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ l(e, 0)) << 2) ^ l(e, 1)) << 2) ^ l(e, 2)) <<
                2) ^
              l(e, 3)
            );
          })(e, t)
        ) {
          case 5103:
            return $ + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return $ + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return $ + e + P + e + U + e + e;
          case 6828:
          case 4268:
            return $ + e + U + e + e;
          case 6165:
            return $ + e + U + "flex-" + e + e;
          case 5187:
            return (
              $ +
              e +
              u(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              e
            );
          case 5443:
            return $ + e + U + "flex-item-" + u(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              $ +
              e +
              U +
              "flex-line-pack" +
              u(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return $ + e + U + u(e, "shrink", "negative") + e;
          case 5292:
            return $ + e + U + u(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              $ +
              "box-" +
              u(e, "-grow", "") +
              $ +
              e +
              U +
              u(e, "grow", "positive") +
              e
            );
          case 4554:
            return $ + u(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return (
              u(
                u(u(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return u(e, /(image-set\([^]*)/, $ + "$1$`$1");
          case 4968:
            return (
              u(
                u(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              $ +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return u(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (d(e) - 1 - t > 6)
              switch (l(e, t + 1)) {
                case 109:
                  if (45 !== l(e, t + 4)) break;
                case 102:
                  return (
                    u(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1" +
                        P +
                        (108 == l(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~c(e, "stretch")
                    ? W(u(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== l(e, t + 1)) break;
          case 6444:
            switch (l(e, d(e) - 3 - (~c(e, "!important") && 10))) {
              case 107:
                return u(e, ":", ":" + $) + e;
              case 101:
                return (
                  u(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      $ +
                      (45 === l(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      $ +
                      "$2$3$1" +
                      U +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (l(e, t + 11)) {
              case 114:
                return $ + e + U + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return $ + e + U + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return $ + e + U + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return $ + e + U + e + e;
        }
        return e;
      }
      function q(e) {
        return C(H("", null, null, null, [""], (e = V(e)), 0, [0], e));
      }
      function H(e, t, n, r, o, a, s, c, l) {
        for (
          var f = 0,
            h = 0,
            v = s,
            y = 0,
            m = 0,
            _ = 0,
            g = 1,
            b = 1,
            S = 1,
            w = 0,
            k = "",
            N = o,
            V = a,
            C = r,
            O = k;
          b;

        )
          switch (((_ = w), (w = A()))) {
            case 34:
            case 39:
            case 91:
            case 40:
              O += M(w);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              O += L(_);
              break;
            case 92:
              O += x(E() - 1, 7);
              continue;
            case 47:
              switch (R()) {
                case 42:
                case 47:
                  p(K(D(A(), E()), t, n), l);
                  break;
                default:
                  O += "/";
              }
              break;
            case 123 * g:
              c[f++] = d(O) * S;
            case 125 * g:
            case 59:
            case 0:
              switch (w) {
                case 0:
                case 125:
                  b = 0;
                case 59 + h:
                  m > 0 &&
                    d(O) - v &&
                    p(
                      m > 32
                        ? J(O + ";", r, n, v - 1)
                        : J(u(O, " ", "") + ";", r, n, v - 2),
                      l
                    );
                  break;
                case 59:
                  O += ";";
                default:
                  if (
                    (p(
                      (C = Z(O, t, n, f, h, o, c, k, (N = []), (V = []), v)),
                      a
                    ),
                    123 === w)
                  )
                    if (0 === h) H(O, t, C, C, N, a, v, c, V);
                    else
                      switch (y) {
                        case 100:
                        case 109:
                        case 115:
                          H(
                            e,
                            C,
                            C,
                            r &&
                              p(Z(e, C, C, 0, 0, o, c, k, o, (N = []), v), V),
                            o,
                            V,
                            v,
                            c,
                            r ? N : V
                          );
                          break;
                        default:
                          H(O, C, C, C, [""], V, v, c, V);
                      }
              }
              (f = h = m = 0), (g = S = 1), (k = O = ""), (v = s);
              break;
            case 58:
              (v = 1 + d(O)), (m = _);
            default:
              if (g < 1)
                if (123 == w) --g;
                else if (125 == w && 0 == g++ && 125 == T()) continue;
              switch (((O += i(w)), w * g)) {
                case 38:
                  S = h > 0 ? 1 : ((O += "\f"), -1);
                  break;
                case 44:
                  (c[f++] = (d(O) - 1) * S), (S = 1);
                  break;
                case 64:
                  45 === R() && (O += M(A())),
                    (y = R()),
                    (h = d((k = O += B(E())))),
                    w++;
                  break;
                case 45:
                  45 === _ && 2 == d(O) && (g = 0);
              }
          }
        return a;
      }
      function Z(e, t, n, r, o, i, c, l, d, p, v) {
        for (
          var y = o - 1, m = 0 === o ? i : [""], _ = h(m), g = 0, b = 0, w = 0;
          g < r;
          ++g
        )
          for (
            var T = 0, A = f(e, y + 1, (y = a((b = c[g])))), R = e;
            T < _;
            ++T
          )
            (R = s(b > 0 ? m[T] + " " + A : u(A, /&\f/g, m[T]))) &&
              (d[w++] = R);
        return S(e, t, n, 0 === o ? z : l, d, p, v);
      }
      function K(e, t, n) {
        return S(e, t, n, I, i(g), f(e, 2, -2), 0);
      }
      function J(e, t, n, r) {
        return S(e, t, n, F, f(e, 0, r), f(e, r + 1, -1), r);
      }
      var X = function (e, t, n) {
          for (
            var r = 0, o = 0;
            (r = o), (o = R()), 38 === r && 12 === o && (t[n] = 1), !N(o);

          )
            A();
          return k(e, _);
        },
        Y = function (e, t) {
          return C(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (N(r)) {
                  case 0:
                    38 === r && 12 === R() && (t[n] = 1),
                      (e[n] += X(_ - 1, t, n));
                    break;
                  case 2:
                    e[n] += M(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (e[++n] = 58 === R() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += i(r);
                }
              } while ((r = A()));
              return e;
            })(V(e), t)
          );
        },
        Q = new WeakMap(),
        ee = function (e) {
          if ("rule" === e.type && e.parent && e.length) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || Q.get(n)) &&
              !r
            ) {
              Q.set(e, !0);
              for (
                var o = [], a = Y(t, o), i = n.props, s = 0, u = 0;
                s < a.length;
                s++
              )
                for (var c = 0; c < i.length; c++, u++)
                  e.props[u] = o[s]
                    ? a[s].replace(/&\f/g, i[c])
                    : i[c] + " " + a[s];
            }
          }
        },
        te = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        ne = [
          function (e, t, n, r) {
            if (!e.return)
              switch (e.type) {
                case F:
                  e.return = W(e.value, e.length);
                  break;
                case "@keyframes":
                  return j([w(u(e.value, "@", "@" + $), e, "")], r);
                case z:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return j(
                            [w(u(t, /:(read-\w+)/, ":-moz-$1"), e, "")],
                            r
                          );
                        case "::placeholder":
                          return j(
                            [
                              w(u(t, /:(plac\w+)/, ":-webkit-input-$1"), e, ""),
                              w(u(t, /:(plac\w+)/, ":-moz-$1"), e, ""),
                              w(u(t, /:(plac\w+)/, U + "input-$1"), e, ""),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        re = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r = e.stylisPlugins || ne;
          var a,
            i,
            s = {},
            u = [];
          (a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  s[t[n]] = !0;
                u.push(e);
              }
            );
          var c,
            l,
            f = [
              G,
              ((l = function (e) {
                c.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && l(e));
              }),
            ],
            d = (function (e) {
              var t = h(e);
              return function (n, r, o, a) {
                for (var i = "", s = 0; s < t; s++) i += e[s](n, r, o, a) || "";
                return i;
              };
            })([ee, te].concat(r, f));
          i = function (e, t, n, r) {
            (c = n),
              j(q(e ? e + "{" + t.styles + "}" : t.styles), d),
              r && (p.inserted[t.name] = !0);
          };
          var p = {
            key: t,
            sheet: new o({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: i,
          };
          return p.sheet.hydrate(u), p;
        };
      var oe = function (e) {
          for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (o) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        },
        ae = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var ie = /[A-Z]|^ms/g,
        se = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        ue = function (e) {
          return 45 === e.charCodeAt(1);
        },
        ce = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        le = (function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return ue(e) ? e : e.replace(ie, "-$&").toLowerCase();
        }),
        fe = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(se, function (e, t, n) {
                  return (he = { name: t, styles: n, next: he }), t;
                });
          }
          return 1 === ae[e] || ue(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function de(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (he = { name: n.name, styles: n.styles, next: he }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (he = { name: r.name, styles: r.styles, next: he }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r += de(e, t, n[o]) + ";";
              else
                for (var a in n) {
                  var i = n[a];
                  if ("object" !== typeof i)
                    null != t && void 0 !== t[i]
                      ? (r += a + "{" + t[i] + "}")
                      : ce(i) && (r += le(a) + ":" + fe(a, i) + ";");
                  else if (
                    !Array.isArray(i) ||
                    "string" !== typeof i[0] ||
                    (null != t && void 0 !== t[i[0]])
                  ) {
                    var s = de(e, t, i);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        r += le(a) + ":" + s + ";";
                        break;
                      default:
                        r += a + "{" + s + "}";
                    }
                  } else
                    for (var u = 0; u < i.length; u++)
                      ce(i[u]) && (r += le(a) + ":" + fe(a, i[u]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var o = he,
                a = n(e);
              return (he = o), de(e, t, a);
            }
            break;
          case "string":
        }
        if (null == t) return n;
        var i = t[n];
        return void 0 !== i ? i : n;
      }
      var he,
        pe = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var ve = function (e, t, n) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            o = "";
          he = void 0;
          var a = e[0];
          null == a || void 0 === a.raw
            ? ((r = !1), (o += de(n, t, a)))
            : (o += a[0]);
          for (var i = 1; i < e.length; i++)
            (o += de(n, t, e[i])), r && (o += a[i]);
          pe.lastIndex = 0;
          for (var s, u = ""; null !== (s = pe.exec(o)); ) u += "-" + s[1];
          return { name: oe(o) + u, styles: o, next: he };
        },
        ye = Object.prototype.hasOwnProperty,
        me = (0, r.createContext)(
          "undefined" !== typeof HTMLElement ? re({ key: "css" }) : null
        );
      me.Provider;
      var _e = function (e) {
          return (0, r.forwardRef)(function (t, n) {
            var o = (0, r.useContext)(me);
            return e(t, o, n);
          });
        },
        ge = (0, r.createContext)({});
      var be = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        Se = function (e, t) {
          var n = {};
          for (var r in t) ye.call(t, r) && (n[r] = t[r]);
          return (n[be] = e), n;
        },
        we = _e(function (e, t, n) {
          var o = e.css;
          "string" === typeof o &&
            void 0 !== t.registered[o] &&
            (o = t.registered[o]);
          var a = e[be],
            i = [o],
            s = "";
          "string" === typeof e.className
            ? (s = (function (e, t, n) {
                var r = "";
                return (
                  n.split(" ").forEach(function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
                  }),
                  r
                );
              })(t.registered, i, e.className))
            : null != e.className && (s = e.className + " ");
          var u = ve(i, void 0, (0, r.useContext)(ge));
          !(function (e, t, n) {
            var r = e.key + "-" + t.name;
            if (
              (!1 === n &&
                void 0 === e.registered[r] &&
                (e.registered[r] = t.styles),
              void 0 === e.inserted[t.name])
            ) {
              var o = t;
              do {
                e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
              } while (void 0 !== o);
            }
          })(t, u, "string" === typeof a);
          s += t.key + "-" + u.name;
          var c = {};
          for (var l in e)
            ye.call(e, l) && "css" !== l && l !== be && (c[l] = e[l]);
          return (c.ref = n), (c.className = s), (0, r.createElement)(a, c);
        });
      n(8679);
      var Te = function (e, t) {
        var n = arguments;
        if (null == t || !ye.call(t, "css"))
          return r.createElement.apply(void 0, n);
        var o = n.length,
          a = new Array(o);
        (a[0] = we), (a[1] = Se(e, t));
        for (var i = 2; i < o; i++) a[i] = n[i];
        return r.createElement.apply(null, a);
      };
      function Ae() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return ve(t);
      }
      var Re = function () {
        var e = Ae.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
    },
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function u(e) {
        return r.isMemo(e) ? i : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = i);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r);
          }
          var i = l(n);
          f && (i = i.concat(f(n)));
          for (var s = u(t), v = u(n), y = 0; y < i.length; ++y) {
            var m = i[y];
            if (!a[m] && (!r || !r[m]) && (!v || !v[m]) && (!s || !s[m])) {
              var _ = d(n, m);
              try {
                c(t, m, _);
              } catch (g) {}
            }
          }
        }
        return t;
      };
    },
    3579: function (e, t, n) {
      "use strict";
      var r = n(1682);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var n = i.default,
          r = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (r.loader = function () {
              return e;
            })
          : "function" === typeof e
          ? (r.loader = e)
          : "object" === typeof e && (r = a(a({}, r), e));
        var o = (r = a(a({}, r), t));
        if (o.suspense)
          throw new Error(
            "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
          );
        if (o.suspense) return n(o);
        r.loadableGenerated &&
          delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof r.ssr) {
          if (!r.ssr) return delete r.ssr, u(n, r);
          delete r.ssr;
        }
        return n(r);
      };
      s(n(7294));
      var i = s(n(3668));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    3982: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    3668: function (e, t, n) {
      "use strict";
      var r = n(2553),
        o = n(2012),
        a = n(1682);
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l,
        f = (l = n(7294)) && l.__esModule ? l : { default: l },
        d = n(7161),
        h = n(3982);
      var p = [],
        v = [],
        y = !1;
      function m(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var _ = (function () {
        function e(t, n) {
          r(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          o(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                t.loading &&
                  ("number" === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, n.delay))),
                  "number" === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = s(
                  s({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function g(e) {
        return (function (e, t) {
          var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1,
            },
            t
          );
          n.suspense && (n.lazy = f.default.lazy(n.loader));
          var r = null;
          function o() {
            if (!r) {
              var t = new _(e, n);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return r.promise();
          }
          if (!y && "function" === typeof n.webpack && !n.suspense) {
            var a = n.webpack();
            v.push(function (e) {
              var t,
                n = u(a);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value;
                  if (-1 !== e.indexOf(r)) return o();
                }
              } catch (i) {
                n.e(i);
              } finally {
                n.f();
              }
            });
          }
          var i = n.suspense
            ? function (e, t) {
                return f.default.createElement(
                  n.lazy,
                  s(s({}, e), {}, { ref: t })
                );
              }
            : function (e, t) {
                o();
                var a = f.default.useContext(h.LoadableContext),
                  i = d.useSubscription(r);
                return (
                  f.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: r.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      a(e);
                    }),
                  f.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? f.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry,
                          })
                        : i.loaded
                        ? f.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(i.loaded),
                            e
                          )
                        : null;
                    },
                    [e, i]
                  )
                );
              };
          return (
            (i.preload = function () {
              return !n.suspense && o();
            }),
            (i.displayName = "LoadableComponent"),
            f.default.forwardRef(i)
          );
        })(m, e);
      }
      function b(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return b(e, t);
        });
      }
      (g.preloadAll = function () {
        return new Promise(function (e, t) {
          b(p).then(e, t);
        });
      }),
        (g.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (y = !0), t();
            };
            b(v, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = g.preloadReady);
      var S = g;
      t.default = S;
    },
    7600: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2804),
        o = n(5152),
        a = (n(7815), n(9885), n(7258)),
        i = (0, o.default)(
          function () {
            return Promise.all([n.e(885), n.e(351), n.e(947), n.e(340)]).then(
              n.bind(n, 8340)
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [8340];
              },
              modules: ["_app.tsx -> ../components/templates/Layout"],
            },
          }
        );
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps;
        return (0, a.tZ)(r.Wh, null, (0, a.tZ)(i, null, (0, a.tZ)(t, n)));
      };
    },
    6363: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(7600);
        },
      ]);
    },
    7815: function () {},
    9885: function () {},
    5152: function (e, t, n) {
      e.exports = n(3579);
    },
    9921: function (e, t) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        v = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116,
        m = n ? Symbol.for("react.block") : 60121,
        _ = n ? Symbol.for("react.fundamental") : 60117,
        g = n ? Symbol.for("react.responder") : 60118,
        b = n ? Symbol.for("react.scope") : 60119;
      function S(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case a:
                case s:
                case i:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case d:
                    case y:
                    case v:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function w(e) {
        return S(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = r),
        (t.ForwardRef = d),
        (t.Fragment = a),
        (t.Lazy = y),
        (t.Memo = v),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = i),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return w(e) || S(e) === l;
        }),
        (t.isConcurrentMode = w),
        (t.isContextConsumer = function (e) {
          return S(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === d;
        }),
        (t.isFragment = function (e) {
          return S(e) === a;
        }),
        (t.isLazy = function (e) {
          return S(e) === y;
        }),
        (t.isMemo = function (e) {
          return S(e) === v;
        }),
        (t.isPortal = function (e) {
          return S(e) === o;
        }),
        (t.isProfiler = function (e) {
          return S(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === i;
        }),
        (t.isSuspense = function (e) {
          return S(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === a ||
            e === f ||
            e === s ||
            e === i ||
            e === h ||
            e === p ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === y ||
                e.$$typeof === v ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === _ ||
                e.$$typeof === g ||
                e.$$typeof === b ||
                e.$$typeof === m))
          );
        }),
        (t.typeOf = S);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    2804: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wh: function () {
          return Ca;
        },
        cn: function () {
          return Ma;
        },
        FV: function () {
          return xa;
        },
        sJ: function () {
          return La;
        },
        Zl: function () {
          return Oa;
        },
      });
      var r = n(7294),
        o = n(3935);
      var a = function (e) {
        return !!e && "function" === typeof e.then;
      };
      var i = function (e, t) {
        if (null != e) return e;
        throw new Error(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      class s {}
      const u = new s(),
        c = {
          valueMaybe() {},
          valueOrThrow() {
            throw new Error(
              `Loadable expected value, but in "${this.state}" state`
            );
          },
          errorMaybe() {},
          errorOrThrow() {
            throw new Error(
              `Loadable expected error, but in "${this.state}" state`
            );
          },
          promiseMaybe() {},
          promiseOrThrow() {
            throw new Error(
              `Loadable expected promise, but in "${this.state}" state`
            );
          },
          is(e) {
            return e.state === this.state && e.contents === this.contents;
          },
          map(e) {
            if ("hasError" === this.state) return this;
            if ("hasValue" === this.state)
              try {
                const t = e(this.contents);
                return a(t) ? d(t.then((e) => ({ __value: e }))) : l(t);
              } catch (t) {
                return a(t) ? d(t.next(() => e(this.contents))) : f(t);
              }
            if ("loading" === this.state)
              return d(
                this.contents
                  .then((t) => ({ __value: e(t.__value) }))
                  .catch((t) => {
                    if (a(t)) return t.then(() => e(this.contents));
                    throw t;
                  })
              );
            throw new Error("Invalid Loadable state");
          },
        };
      function l(e) {
        return Object.freeze({
          state: "hasValue",
          contents: e,
          ...c,
          getValue() {
            return this.contents;
          },
          toPromise() {
            return Promise.resolve(this.contents);
          },
          valueMaybe() {
            return this.contents;
          },
          valueOrThrow() {
            return this.contents;
          },
        });
      }
      function f(e) {
        return Object.freeze({
          state: "hasError",
          contents: e,
          ...c,
          getValue() {
            throw this.contents;
          },
          toPromise() {
            return Promise.reject(this.contents);
          },
          errorMaybe() {
            return this.contents;
          },
          errorOrThrow() {
            return this.contents;
          },
        });
      }
      function d(e) {
        return Object.freeze({
          state: "loading",
          contents: e,
          ...c,
          getValue() {
            throw this.contents.then(({ __value: e }) => e);
          },
          toPromise() {
            return this.contents.then(({ __value: e }) => e);
          },
          promiseMaybe() {
            return this.contents.then(({ __value: e }) => e);
          },
          promiseOrThrow() {
            return this.contents.then(({ __value: e }) => e);
          },
        });
      }
      var h,
        p = {
          loadableWithValue: l,
          loadableWithError: f,
          loadableWithPromise: d,
          loadableLoading: function () {
            return d(new Promise(() => {}));
          },
          loadableAll: function (e) {
            return e.every((e) => "hasValue" === e.state)
              ? l(e.map((e) => e.contents))
              : e.some((e) => "hasError" === e.state)
              ? f(
                  i(
                    e.find((e) => "hasError" === e.state),
                    "Invalid loadable passed to loadableAll"
                  ).contents
                )
              : d(
                  Promise.all(e.map((e) => e.contents)).then((e) => ({
                    __value: e,
                  }))
                );
          },
          Canceled: s,
          CANCELED: u,
        };
      const v =
        null !== (h = r.useMutableSource) && void 0 !== h
          ? h
          : r.unstable_useMutableSource;
      var y = {
        mutableSourceExists: function () {
          return (
            v &&
            !(
              "undefined" !== typeof window &&
              window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
            )
          );
        },
        useMutableSource: v,
      };
      const { mutableSourceExists: m } = y,
        _ = new Map()
          .set("recoil_hamt_2020", !0)
          .set("recoil_memory_managament_2020", !0)
          .set("recoil_suppress_rerender_in_callback", !0);
      function g(e) {
        var t;
        return (
          !("recoil_early_rendering_2021" === e && !m()) &&
          null !== (t = _.get(e)) &&
          void 0 !== t &&
          t
        );
      }
      (g.setPass = (e) => {
        _.set(e, !0);
      }),
        (g.setFail = (e) => {
          _.set(e, !1);
        });
      var b = g;
      var S = function (e, t, { error: n } = {}) {
        return null;
      };
      var w = {
        setByAddingToSet: function (e, t) {
          const n = new Set(e);
          return n.add(t), n;
        },
        setByDeletingFromSet: function (e, t) {
          const n = new Set(e);
          return n.delete(t), n;
        },
        mapBySettingInMap: function (e, t, n) {
          const r = new Map(e);
          return r.set(t, n), r;
        },
        mapByUpdatingInMap: function (e, t, n) {
          const r = new Map(e);
          return r.set(t, n(r.get(t))), r;
        },
        mapByDeletingFromMap: function (e, t) {
          const n = new Map(e);
          return n.delete(t), n;
        },
        mapByDeletingMultipleFromMap: function (e, t) {
          const n = new Map(e);
          return t.forEach((e) => n.delete(e)), n;
        },
      };
      var T = function* (e, t) {
        let n = 0;
        for (const r of e) t(r, n++) && (yield r);
      };
      var A = function (e, t) {
        return (function* () {
          let n = 0;
          for (const r of e) yield t(r, n++);
        })();
      };
      var R = function (e, ...t) {
        0;
      };
      function E(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class k {
        constructor(e) {
          E(this, "key", void 0), (this.key = e);
        }
      }
      class N extends k {}
      class V extends k {}
      var C = {
          AbstractRecoilValue: k,
          RecoilState: N,
          RecoilValueReadOnly: V,
          isRecoilValue: function (e) {
            return e instanceof N || e instanceof V;
          },
        },
        M = C.AbstractRecoilValue,
        L = C.RecoilState,
        x = C.RecoilValueReadOnly,
        O = C.isRecoilValue,
        D = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: M,
          RecoilState: L,
          RecoilValueReadOnly: x,
          isRecoilValue: O,
        });
      class B {}
      const U = new B();
      class P extends Error {
        constructor(e) {
          super(
            `Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`
          );
        }
      }
      const $ = new Map(),
        I = new Map();
      class z extends Error {}
      const F = new Map();
      function j(e) {
        return F.get(e);
      }
      var G = {
        nodes: $,
        recoilValues: I,
        registerNode: function (e) {
          if ($.has(e.key)) {
            const t = `Duplicate atom key "${e.key}". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.`;
            console.warn(t);
          }
          $.set(e.key, e);
          const t =
            null == e.set
              ? new D.RecoilValueReadOnly(e.key)
              : new D.RecoilState(e.key);
          return I.set(e.key, t), t;
        },
        getNode: function (e) {
          const t = $.get(e);
          if (null == t)
            throw new z(`Missing definition for RecoilValue: "${e}""`);
          return t;
        },
        getNodeMaybe: function (e) {
          return $.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (!b("recoil_memory_managament_2020")) return;
          const n = $.get(e);
          var r;
          (null === n ||
          void 0 === n ||
          null === (t = n.shouldDeleteConfigOnRelease) ||
          void 0 === t
            ? void 0
            : t.call(n)) &&
            ($.delete(e),
            null === (r = j(e)) || void 0 === r || r(),
            F.delete(e));
        },
        setConfigDeletionHandler: function (e, t) {
          b("recoil_memory_managament_2020") &&
            (void 0 === t ? F.delete(e) : F.set(e, t));
        },
        getConfigDeletionHandler: j,
        recoilValuesForKeys: function (e) {
          return A(e, (e) => i(I.get(e)));
        },
        NodeMissingError: z,
        DefaultValue: B,
        DEFAULT_VALUE: U,
        RecoilValueNotReady: P,
      };
      class W {}
      var q = {
        RetentionZone: W,
        retentionZone: function () {
          return new W();
        },
      };
      const { setByAddingToSet: H } = w,
        { getNode: Z, getNodeMaybe: K, recoilValuesForKeys: J } = G,
        { RetentionZone: X } = q,
        Y = Object.freeze(new Set());
      class Q extends Error {}
      function ee(e, t, n, r) {
        const o = e.getState();
        if (o.nodeCleanupFunctions.has(n)) return;
        const a = Z(n),
          i = (function (e, t, n) {
            if (!b("recoil_memory_managament_2020")) return () => {};
            const { nodesRetainedByZone: r } = e.getState().retention;
            function o(e) {
              let n = r.get(e);
              n || r.set(e, (n = new Set())), n.add(t);
            }
            if (n instanceof X) o(n);
            else if (Array.isArray(n)) for (const a of n) o(a);
            return () => {
              if (!b("recoil_memory_managament_2020")) return;
              const r = e.getState().retention.nodesRetainedByZone;
              function o(e) {
                const n = r.get(e);
                n && n.delete(t), n && 0 === n.size && r.delete(e);
              }
              if (n instanceof X) o(n);
              else if (Array.isArray(n)) for (const e of n) o(e);
            };
          })(e, n, a.retainedBy),
          s = a.init(e, t, r);
        o.nodeCleanupFunctions.set(n, () => {
          s(), i();
        });
      }
      function te(e, t, n) {
        return Z(n).peek(e, t);
      }
      function ne(e, t, n) {
        const r = new Set(),
          o = Array.from(n),
          a = e.getGraph(t.version);
        for (let s = o.pop(); s; s = o.pop()) {
          var i;
          r.add(s);
          const e =
            null !== (i = a.nodeToNodeSubscriptions.get(s)) && void 0 !== i
              ? i
              : Y;
          for (const t of e) r.has(t) || o.push(t);
        }
        return r;
      }
      var re = {
        getNodeLoadable: function (e, t, n) {
          return ee(e, t, n, "get"), Z(n).get(e, t);
        },
        peekNodeLoadable: te,
        setNodeValue: function (e, t, n, r) {
          const o = Z(n);
          if (null == o.set)
            throw new Q(`Attempt to set read-only RecoilValue: ${n}`);
          const a = o.set;
          return ee(e, t, n, "set"), a(e, t, r);
        },
        cleanUpNode: function (e, t) {
          var n;
          const r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
          var r;
          const o = K(t);
          return (
            null === o ||
              void 0 === o ||
              null === (r = o.invalidate) ||
              void 0 === r ||
              r.call(o, e),
            {
              ...e,
              atomValues: e.atomValues.clone().delete(t),
              nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
              dirtyAtoms: H(e.dirtyAtoms, t),
            }
          );
        },
        peekNodeInfo: function (e, t, n) {
          var r, o, a;
          const i = e.getState(),
            s = e.getGraph(t.version),
            u = i.knownAtoms.has(n)
              ? "atom"
              : i.knownSelectors.has(n)
              ? "selector"
              : void 0,
            c = T(ne(e, t, new Set([n])), (e) => e !== n);
          return {
            loadable: te(e, t, n),
            isActive: i.knownAtoms.has(n) || i.knownSelectors.has(n),
            isSet: "selector" !== u && t.atomValues.has(n),
            isModified: t.dirtyAtoms.has(n),
            type: u,
            deps: J(null !== (r = s.nodeDeps.get(n)) && void 0 !== r ? r : []),
            subscribers: {
              nodes: J(c),
              components: A(
                null !==
                  (o =
                    null === (a = i.nodeToComponentSubscriptions.get(n)) ||
                    void 0 === a
                      ? void 0
                      : a.values()) && void 0 !== o
                  ? o
                  : [],
                ([e]) => ({ name: e })
              ),
            },
          };
        },
        getDownstreamNodes: ne,
        initializeNodeIfNewToStore: ee,
      };
      const { CANCELED: oe } = p,
        { getDownstreamNodes: ae, getNodeLoadable: ie, setNodeValue: se } = re,
        { getNodeMaybe: ue } = G,
        { DefaultValue: ce, RecoilValueNotReady: le } = G,
        {
          AbstractRecoilValue: fe,
          RecoilState: de,
          RecoilValueReadOnly: he,
          isRecoilValue: pe,
        } = D;
      function ve(e, t, n) {
        if ("set" === n.type) {
          const { recoilValue: r, valueOrUpdater: o } = n,
            a = (function (e, t, { key: n }, r) {
              if ("function" === typeof r) {
                const o = ie(e, t, n);
                if ("loading" === o.state) throw new le(n);
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, r, o),
            i = se(e, t, r.key, a);
          for (const [e, n] of i.entries()) ye(t, e, n);
        } else if ("setLoadable" === n.type) {
          const {
            recoilValue: { key: e },
            loadable: r,
          } = n;
          ye(t, e, r);
        } else if ("markModified" === n.type) {
          const {
            recoilValue: { key: e },
          } = n;
          t.dirtyAtoms.add(e);
        } else if ("setUnvalidated" === n.type) {
          var r;
          const {
              recoilValue: { key: e },
              unvalidatedValue: o,
            } = n,
            a = ue(e);
          null === a ||
            void 0 === a ||
            null === (r = a.invalidate) ||
            void 0 === r ||
            r.call(a, t),
            t.atomValues.delete(e),
            t.nonvalidatedAtoms.set(e, o),
            t.dirtyAtoms.add(e);
        } else S(`Unknown action ${n.type}`);
      }
      function ye(e, t, n) {
        "hasValue" === n.state && n.contents instanceof ce
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function me(e, t) {
        e.replaceState((n) => {
          const r = be(n);
          for (const o of t) ve(e, r, o);
          return Se(e, r), r;
        });
      }
      function _e(e, t) {
        if (ge.length) {
          const n = ge[ge.length - 1];
          let r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else me(e, [t]);
      }
      const ge = [];
      function be(e) {
        return {
          ...e,
          atomValues: e.atomValues.clone(),
          nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
          dirtyAtoms: new Set(e.dirtyAtoms),
        };
      }
      function Se(e, t) {
        const n = ae(e, t, t.dirtyAtoms);
        for (const a of n) {
          var r, o;
          null === (r = ue(a)) ||
            void 0 === r ||
            null === (o = r.invalidate) ||
            void 0 === o ||
            o.call(r, t);
        }
      }
      function we(e, t, n) {
        _e(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      let Te = 0;
      var Ae = {
        RecoilValueReadOnly: he,
        AbstractRecoilValue: fe,
        RecoilState: de,
        getRecoilValueAsLoadable: function (
          e,
          { key: t },
          n = e.getState().currentTree
        ) {
          var r, o;
          const a = e.getState();
          n.version !== a.currentTree.version &&
            n.version !==
              (null === (r = a.nextTree) || void 0 === r
                ? void 0
                : r.version) &&
            n.version !==
              (null === (o = a.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            S("Tried to read from a discarded tree");
          const i = ie(e, n, t);
          return "loading" === i.state && i.contents.catch(() => oe), i;
        },
        setRecoilValue: we,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof ce) return we(e, t, n);
          _e(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          _e(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          _e(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, { key: t }, n, r = null) {
          const o = Te++,
            a = e.getState();
          if (
            (a.nodeToComponentSubscriptions.has(t) ||
              a.nodeToComponentSubscriptions.set(t, new Map()),
            i(a.nodeToComponentSubscriptions.get(t)).set(o, [
              null !== r && void 0 !== r ? r : "<not captured>",
              n,
            ]),
            b("recoil_early_rendering_2021"))
          ) {
            const r = e.getState().nextTree;
            r && r.dirtyAtoms.has(t) && n(r);
          }
          return {
            release: () => {
              const n = e.getState(),
                r = n.nodeToComponentSubscriptions.get(t);
              void 0 !== r && r.has(o)
                ? (r.delete(o),
                  0 === r.size && n.nodeToComponentSubscriptions.delete(t))
                : S(
                    `Subscription missing at release time for atom ${t}. This is a bug in Recoil.`
                  );
            },
          };
        },
        isRecoilValue: pe,
        applyAtomValueWrites: function (e, t) {
          const n = e.clone();
          return (
            t.forEach((e, t) => {
              "hasValue" === e.state && e.contents instanceof ce
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          const e = new Map();
          return (
            ge.push(e),
            () => {
              for (const [t, n] of e) me(t, n);
              ge.pop() !== e && S("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: ye,
        invalidateDownstreams: Se,
        copyTreeState: be,
        invalidateDownstreams_FOR_TESTING: Se,
      };
      const { unstable_batchedUpdates: Re } = o;
      var Ee = { unstable_batchedUpdates: Re };
      const { unstable_batchedUpdates: ke } = Ee;
      var Ne = { unstable_batchedUpdates: ke };
      const { batchStart: Ve } = Ae,
        { unstable_batchedUpdates: Ce } = Ne;
      let Me = Ce;
      var Le = {
        getBatcher: () => Me,
        setBatcher: (e) => {
          Me = e;
        },
        batchUpdates: (e) => {
          Me(() => {
            let t = () => {};
            try {
              (t = Ve()), e();
            } finally {
              t();
            }
          });
        },
      };
      var xe = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var Oe = function (e, ...t) {
        const n = new Set();
        e: for (const r of e) {
          for (const e of t) if (e.has(r)) continue e;
          n.add(r);
        }
        return n;
      };
      var De = function (e, t) {
        const n = new Map();
        return (
          e.forEach((e, r) => {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function Be(e, t, n) {
        const { nodeDeps: r, nodeToNodeSubscriptions: o } = t;
        e.forEach((e, t) => {
          const a = r.get(t);
          if (a && n && a !== n.nodeDeps.get(t)) return;
          r.set(t, new Set(e));
          if (
            ((null == a ? e : Oe(e, a)).forEach((e) => {
              o.has(e) || o.set(e, new Set());
              i(o.get(e)).add(t);
            }),
            a)
          ) {
            Oe(a, e).forEach((e) => {
              if (!o.has(e)) return;
              const n = i(o.get(e));
              n.delete(t), 0 === n.size && o.delete(e);
            });
          }
        });
      }
      var Ue = {
        addToDependencyMap: function (e, t, n) {
          n.has(e) || n.set(e, new Set()), i(n.get(e)).add(t);
        },
        cloneGraph: function (e) {
          return {
            nodeDeps: De(e.nodeDeps, (e) => new Set(e)),
            nodeToNodeSubscriptions: De(
              e.nodeToNodeSubscriptions,
              (e) => new Set(e)
            ),
          };
        },
        graph: function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        mergeDepsIntoDependencyMap: function (e, t) {
          e.forEach((e, n) => {
            t.has(n) || t.set(n, new Set());
            const r = i(t.get(n));
            e.forEach((e) => r.add(e));
          });
        },
        saveDependencyMapToStore: function (e, t, n) {
          var r, o, a, i;
          const s = t.getState();
          n !== s.currentTree.version &&
            n !==
              (null === (r = s.nextTree) || void 0 === r
                ? void 0
                : r.version) &&
            n !==
              (null === (o = s.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            S("Tried to save dependencies to a discarded tree");
          const u = t.getGraph(n);
          if (
            (Be(e, u),
            n ===
              (null === (a = s.previousTree) || void 0 === a
                ? void 0
                : a.version))
          ) {
            Be(e, t.getGraph(s.currentTree.version), u);
          }
          if (
            n ===
              (null === (i = s.previousTree) || void 0 === i
                ? void 0
                : i.version) ||
            n === s.currentTree.version
          ) {
            var c;
            const n =
              null === (c = s.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== n) {
              Be(e, t.getGraph(n), u);
            }
          }
        },
      };
      var Pe,
        $e =
          ((function (e) {
            var t =
                "function" === typeof Symbol &&
                "symbol" === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              n = {},
              r = Math.pow(2, 5),
              o = r - 1,
              a = r / 2,
              i = r / 4,
              s = {},
              u = function (e) {
                return function () {
                  return e;
                };
              },
              c = (n.hash = function (e) {
                var n = "undefined" === typeof e ? "undefined" : t(e);
                if ("number" === n) return e;
                "string" !== n && (e += "");
                for (var r = 0, o = 0, a = e.length; o < a; ++o)
                  r = ((r << 5) - r + e.charCodeAt(o)) | 0;
                return r;
              }),
              l = function (e, t) {
                return (t >>> e) & o;
              },
              f = function (e) {
                return 1 << e;
              },
              d = function (e, t) {
                return (
                  (n = e & (t - 1)),
                  (n =
                    ((n =
                      (858993459 & (n -= (n >> 1) & 1431655765)) +
                      ((n >> 2) & 858993459)) +
                      (n >> 4)) &
                    252645135),
                  127 & ((n += n >> 8) + (n >> 16))
                );
                var n;
              },
              h = function (e, t, n, r) {
                var o = r;
                if (!e) {
                  var a = r.length;
                  o = new Array(a);
                  for (var i = 0; i < a; ++i) o[i] = r[i];
                }
                return (o[t] = n), o;
              },
              p = function (e, t, n) {
                var r = n.length - 1,
                  o = 0,
                  a = 0,
                  i = n;
                if (e) o = a = t;
                else for (i = new Array(r); o < t; ) i[a++] = n[o++];
                for (++o; o <= r; ) i[a++] = n[o++];
                return e && (i.length = r), i;
              },
              v = { __hamt_isEmpty: !0 },
              y = function (e) {
                return e === v || (e && e.__hamt_isEmpty);
              },
              m = function (e, t, n, r) {
                return {
                  type: 1,
                  edit: e,
                  hash: t,
                  key: n,
                  value: r,
                  _modify: T,
                };
              },
              _ = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: A };
              },
              g = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: R };
              },
              b = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: E };
              },
              S = function e(t, n, r, o, a, i) {
                if (r === a) return _(t, r, [i, o]);
                var s = l(n, r),
                  u = l(n, a);
                return g(
                  t,
                  f(s) | f(u),
                  s === u ? [e(t, n + 5, r, o, a, i)] : s < u ? [o, i] : [i, o]
                );
              },
              w = function (e, t) {
                return e === t.edit;
              },
              T = function (e, t, n, r, o, a, i) {
                if (t(a, this.key)) {
                  var u = r(this.value);
                  return u === this.value
                    ? this
                    : u === s
                    ? (--i.value, v)
                    : w(e, this)
                    ? ((this.value = u), this)
                    : m(e, o, a, u);
                }
                var c = r();
                return c === s
                  ? this
                  : (++i.value, S(e, n, this.hash, this, o, m(e, o, a, c)));
              },
              A = function (e, t, n, r, o, a, i) {
                if (o === this.hash) {
                  var u = (function (e, t, n, r, o, a, i, u) {
                    for (var c = o.length, l = 0; l < c; ++l) {
                      var f = o[l];
                      if (n(i, f.key)) {
                        var d = f.value,
                          v = a(d);
                        return v === d
                          ? o
                          : v === s
                          ? (--u.value, p(e, l, o))
                          : h(e, l, m(t, r, i, v), o);
                      }
                    }
                    var y = a();
                    return y === s ? o : (++u.value, h(e, c, m(t, r, i, y), o));
                  })(w(e, this), e, t, this.hash, this.children, r, a, i);
                  return u === this.children
                    ? this
                    : u.length > 1
                    ? _(e, this.hash, u)
                    : u[0];
                }
                var c = r();
                return c === s
                  ? this
                  : (++i.value, S(e, n, this.hash, this, o, m(e, o, a, c)));
              },
              R = function (e, t, n, r, o, i, s) {
                var u = this.mask,
                  c = this.children,
                  m = l(n, o),
                  _ = f(m),
                  S = d(u, _),
                  T = u & _,
                  A = T ? c[S] : v,
                  R = A._modify(e, t, n + 5, r, o, i, s);
                if (A === R) return this;
                var E,
                  k = w(e, this),
                  N = u,
                  V = void 0;
                if (T && y(R)) {
                  if (!(N &= ~_)) return v;
                  if (
                    c.length <= 2 &&
                    ((E = c[1 ^ S]) === v || 1 === E.type || 2 === E.type)
                  )
                    return c[1 ^ S];
                  V = p(k, S, c);
                } else if (T || y(R)) V = h(k, S, R, c);
                else {
                  if (c.length >= a)
                    return (function (e, t, n, r, o) {
                      for (var a = [], i = r, s = 0, u = 0; i; ++u)
                        1 & i && (a[u] = o[s++]), (i >>>= 1);
                      return (a[t] = n), b(e, s + 1, a);
                    })(e, m, R, u, c);
                  (N |= _),
                    (V = (function (e, t, n, r) {
                      var o = r.length;
                      if (e) {
                        for (var a = o; a >= t; ) r[a--] = r[a];
                        return (r[t] = n), r;
                      }
                      for (var i = 0, s = 0, u = new Array(o + 1); i < t; )
                        u[s++] = r[i++];
                      for (u[t] = n; i < o; ) u[++s] = r[i++];
                      return u;
                    })(k, S, R, c));
                }
                return k
                  ? ((this.mask = N), (this.children = V), this)
                  : g(e, N, V);
              },
              E = function (e, t, n, r, o, a, s) {
                var u = this.size,
                  c = this.children,
                  f = l(n, o),
                  d = c[f],
                  p = (d || v)._modify(e, t, n + 5, r, o, a, s);
                if (d === p) return this;
                var m = w(e, this),
                  _ = void 0;
                if (y(d) && !y(p)) ++u, (_ = h(m, f, p, c));
                else if (!y(d) && y(p)) {
                  if (--u <= i)
                    return (function (e, t, n, r) {
                      for (
                        var o = new Array(t - 1),
                          a = 0,
                          i = 0,
                          s = 0,
                          u = r.length;
                        s < u;
                        ++s
                      )
                        if (s !== n) {
                          var c = r[s];
                          c && !y(c) && ((o[a++] = c), (i |= 1 << s));
                        }
                      return g(e, i, o);
                    })(e, u, f, c);
                  _ = h(m, f, v, c);
                } else _ = h(m, f, p, c);
                return m
                  ? ((this.size = u), (this.children = _), this)
                  : b(e, u, _);
              };
            function k(e, t, n, r, o) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = o);
            }
            (v._modify = function (e, t, n, r, o, a, i) {
              var u = r();
              return u === s ? v : (++i.value, m(e, o, a, u));
            }),
              (k.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                  ? this
                  : new k(this._editable, this._edit, this._config, e, t);
              });
            var N = (n.tryGetHash = function (e, t, n, r) {
              for (var o = r._root, a = 0, i = r._config.keyEq; ; )
                switch (o.type) {
                  case 1:
                    return i(n, o.key) ? o.value : e;
                  case 2:
                    if (t === o.hash)
                      for (
                        var s = o.children, u = 0, c = s.length;
                        u < c;
                        ++u
                      ) {
                        var h = s[u];
                        if (i(n, h.key)) return h.value;
                      }
                    return e;
                  case 3:
                    var p = l(a, t),
                      v = f(p);
                    if (o.mask & v) {
                      (o = o.children[d(o.mask, v)]), (a += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((o = o.children[l(a, t)])) {
                      a += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            k.prototype.tryGetHash = function (e, t, n) {
              return N(e, t, n, this);
            };
            var V = (n.tryGet = function (e, t, n) {
              return N(e, n._config.hash(t), t, n);
            });
            k.prototype.tryGet = function (e, t) {
              return V(e, t, this);
            };
            var C = (n.getHash = function (e, t, n) {
              return N(void 0, e, t, n);
            });
            (k.prototype.getHash = function (e, t) {
              return C(e, t, this);
            }),
              (n.get = function (e, t) {
                return N(void 0, t._config.hash(e), e, t);
              }),
              (k.prototype.get = function (e, t) {
                return V(t, e, this);
              });
            var M = (n.has = function (e, t, n) {
              return N(s, e, t, n) !== s;
            });
            k.prototype.hasHash = function (e, t) {
              return M(e, t, this);
            };
            var L = (n.has = function (e, t) {
              return M(t._config.hash(e), e, t);
            });
            k.prototype.has = function (e) {
              return L(e, this);
            };
            var x = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new k(
                0,
                0,
                { keyEq: (e && e.keyEq) || x, hash: (e && e.hash) || c },
                v,
                0
              );
            }),
              (n.empty = n.make());
            var O = (n.isEmpty = function (e) {
              return e && !!y(e._root);
            });
            k.prototype.isEmpty = function () {
              return O(this);
            };
            var D = (n.modifyHash = function (e, t, n, r) {
              var o = { value: r._size },
                a = r._root._modify(
                  r._editable ? r._edit : NaN,
                  r._config.keyEq,
                  0,
                  e,
                  t,
                  n,
                  o
                );
              return r.setTree(a, o.value);
            });
            k.prototype.modifyHash = function (e, t, n) {
              return D(n, e, t, this);
            };
            var B = (n.modify = function (e, t, n) {
              return D(e, n._config.hash(t), t, n);
            });
            k.prototype.modify = function (e, t) {
              return B(t, e, this);
            };
            var U = (n.setHash = function (e, t, n, r) {
              return D(u(n), e, t, r);
            });
            k.prototype.setHash = function (e, t, n) {
              return U(e, t, n, this);
            };
            var P = (n.set = function (e, t, n) {
              return U(n._config.hash(e), e, t, n);
            });
            k.prototype.set = function (e, t) {
              return P(e, t, this);
            };
            var $ = u(s),
              I = (n.removeHash = function (e, t, n) {
                return D($, e, t, n);
              });
            k.prototype.removeHash = k.prototype.deleteHash = function (e, t) {
              return I(e, t, this);
            };
            var z = (n.remove = function (e, t) {
              return I(t._config.hash(e), e, t);
            });
            k.prototype.remove = k.prototype.delete = function (e) {
              return z(e, this);
            };
            var F = (n.beginMutation = function (e) {
              return new k(
                e._editable + 1,
                e._edit + 1,
                e._config,
                e._root,
                e._size
              );
            });
            k.prototype.beginMutation = function () {
              return F(this);
            };
            var j = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            k.prototype.endMutation = function () {
              return j(this);
            };
            var G = (n.mutate = function (e, t) {
              var n = F(t);
              return e(n), j(n);
            });
            k.prototype.mutate = function (e) {
              return G(e, this);
            };
            var W = function (e) {
                return e && q(e[0], e[1], e[2], e[3], e[4]);
              },
              q = function (e, t, n, r, o) {
                for (; n < e; ) {
                  var a = t[n++];
                  if (a && !y(a)) return H(a, r, [e, t, n, r, o]);
                }
                return W(o);
              },
              H = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return q(r.length, r, 0, t, n);
                  default:
                    return W(n);
                }
              },
              Z = { done: !0 };
            function K(e) {
              this.v = e;
            }
            (K.prototype.next = function () {
              if (!this.v) return Z;
              var e = this.v;
              return (this.v = W(e.rest)), e;
            }),
              (K.prototype[Symbol.iterator] = function () {
                return this;
              });
            var J = function (e, t) {
                return new K(H(e._root, t));
              },
              X = function (e) {
                return [e.key, e.value];
              },
              Y = (n.entries = function (e) {
                return J(e, X);
              });
            k.prototype.entries = k.prototype[Symbol.iterator] = function () {
              return Y(this);
            };
            var Q = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return J(e, Q);
              });
            k.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne =
                (n.values =
                k.prototype.values =
                  function (e) {
                    return J(e, te);
                  });
            k.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var o = [r.children], a = void 0; (a = o.pop()); )
                for (var i = 0, s = a.length; i < s; ) {
                  var u = a[i++];
                  u &&
                    u.type &&
                    (1 === u.type
                      ? (t = e(t, u.value, u.key))
                      : o.push(u.children));
                }
              return t;
            });
            k.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var oe = (n.forEach = function (e, t) {
              return re(
                function (n, r, o) {
                  return e(r, o, t);
                },
                null,
                t
              );
            });
            k.prototype.forEach = function (e) {
              return oe(e, this);
            };
            var ae = (n.count = function (e) {
              return e._size;
            });
            (k.prototype.count = function () {
              return ae(this);
            }),
              Object.defineProperty(k.prototype, "size", {
                get: k.prototype.count,
              }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          })((Pe = { exports: {} }), Pe.exports),
          Pe.exports);
      class Ie {
        constructor(e) {
          E(this, "_map", void 0),
            (this._map = new Map(
              null === e || void 0 === e ? void 0 : e.entries()
            ));
        }
        keys() {
          return this._map.keys();
        }
        entries() {
          return this._map.entries();
        }
        get(e) {
          return this._map.get(e);
        }
        has(e) {
          return this._map.has(e);
        }
        set(e, t) {
          return this._map.set(e, t), this;
        }
        delete(e) {
          return this._map.delete(e), this;
        }
        clone() {
          return Fe(this);
        }
        toMap() {
          return new Map(this._map);
        }
      }
      class ze {
        constructor(e) {
          if ((E(this, "_hamt", $e.empty.beginMutation()), e instanceof ze)) {
            const t = e._hamt.endMutation();
            (e._hamt = t.beginMutation()), (this._hamt = t.beginMutation());
          } else if (e) for (const [t, n] of e.entries()) this._hamt.set(t, n);
        }
        keys() {
          return this._hamt.keys();
        }
        entries() {
          return this._hamt.entries();
        }
        get(e) {
          return this._hamt.get(e);
        }
        has(e) {
          return this._hamt.has(e);
        }
        set(e, t) {
          return this._hamt.set(e, t), this;
        }
        delete(e) {
          return this._hamt.delete(e), this;
        }
        clone() {
          return Fe(this);
        }
        toMap() {
          return new Map(this._hamt);
        }
      }
      function Fe(e) {
        return b("recoil_hamt_2020") ? new ze(e) : new Ie(e);
      }
      var je = Fe,
        Ge = Object.freeze({ __proto__: null, persistentMap: je });
      const { graph: We } = Ue,
        { persistentMap: qe } = Ge;
      let He = 0;
      const Ze = () => He++;
      function Ke() {
        const e = Ze();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: qe(),
          nonvalidatedAtoms: qe(),
        };
      }
      var Je = {
        makeEmptyTreeState: Ke,
        makeEmptyStoreState: function () {
          const e = Ke();
          return {
            currentTree: e,
            nextTree: null,
            previousTree: null,
            commitDepth: 0,
            knownAtoms: new Set(),
            knownSelectors: new Set(),
            transactionSubscriptions: new Map(),
            nodeTransactionSubscriptions: new Map(),
            nodeToComponentSubscriptions: new Map(),
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set(),
            graphsByVersion: new Map().set(e.version, We()),
            versionsUsedByComponent: new Map(),
            retention: {
              referenceCounts: new Map(),
              nodesRetainedByZone: new Map(),
              retainablesToCheckForRelease: new Set(),
            },
            nodeCleanupFunctions: new Map(),
          };
        },
        getNextTreeStateVersion: Ze,
      };
      var Xe = function (...e) {
        const t = new Set();
        for (const n of e) for (const e of n) t.add(e);
        return t;
      };
      var Ye = function (e, t, n) {
        const r = e.entries();
        let o = r.next();
        for (; !o.done; ) {
          const a = o.value;
          if (t.call(n, a[1], a[0], e)) return !0;
          o = r.next();
        }
        return !1;
      };
      const { cleanUpNode: Qe } = re,
        { deleteNodeConfigIfPossible: et, getNode: tt } = G,
        { RetentionZone: nt } = q,
        rt = new Set();
      function ot(e, t) {
        const n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          return void S(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        const o = new Set();
        for (const i of t)
          if (i instanceof nt) for (const e of it(n, i)) o.add(e);
          else o.add(i);
        const a = (function (e, t) {
          const n = e.getState(),
            r = n.currentTree,
            o = e.getGraph(r.version),
            a = new Set(),
            s = new Set();
          return u(t), a;
          function u(t) {
            const c = new Set(),
              l = (function (e, t, n, r, o) {
                const a = e.getGraph(t.version),
                  s = [],
                  u = new Set();
                for (; n.size > 0; ) c(i(n.values().next().value));
                return s;
                function c(e) {
                  if (r.has(e) || o.has(e)) return void n.delete(e);
                  if (u.has(e)) return;
                  const t = a.nodeToNodeSubscriptions.get(e);
                  if (t) for (const n of t) c(n);
                  u.add(e), n.delete(e), s.push(e);
                }
              })(e, r, t, a, s);
            for (const e of l) {
              var f;
              if ("recoilRoot" === tt(e).retainedBy) {
                s.add(e);
                continue;
              }
              if (
                (null !== (f = n.retention.referenceCounts.get(e)) &&
                void 0 !== f
                  ? f
                  : 0) > 0
              ) {
                s.add(e);
                continue;
              }
              if (st(e).some((e) => n.retention.referenceCounts.get(e))) {
                s.add(e);
                continue;
              }
              const t = o.nodeToNodeSubscriptions.get(e);
              t && Ye(t, (e) => s.has(e)) ? s.add(e) : (a.add(e), c.add(e));
            }
            const d = new Set();
            for (const e of c)
              for (const t of null !== (h = o.nodeDeps.get(e)) && void 0 !== h
                ? h
                : rt) {
                var h;
                a.has(t) || d.add(t);
              }
            d.size && u(d);
          }
        })(e, o);
        for (const i of a) at(e, r, i);
      }
      function at(e, t, n) {
        if (!b("recoil_memory_managament_2020")) return;
        Qe(e, n);
        const r = e.getState();
        r.knownAtoms.delete(n),
          r.knownSelectors.delete(n),
          r.nodeTransactionSubscriptions.delete(n),
          r.retention.referenceCounts.delete(n);
        const o = st(n);
        for (const u of o) {
          var a;
          null === (a = r.retention.nodesRetainedByZone.get(u)) ||
            void 0 === a ||
            a.delete(n);
        }
        t.atomValues.delete(n),
          t.dirtyAtoms.delete(n),
          t.nonvalidatedAtoms.delete(n);
        const i = r.graphsByVersion.get(t.version);
        if (i) {
          const e = i.nodeDeps.get(n);
          if (void 0 !== e) {
            i.nodeDeps.delete(n);
            for (const t of e) {
              var s;
              null === (s = i.nodeToNodeSubscriptions.get(t)) ||
                void 0 === s ||
                s.delete(n);
            }
          }
          i.nodeToNodeSubscriptions.delete(n);
        }
        et(n);
      }
      function it(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : rt;
      }
      function st(e) {
        const t = tt(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof nt
          ? [t]
          : t;
      }
      function ut(e, t) {
        if (!b("recoil_memory_managament_2020")) return;
        e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            const n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : ot(e, new Set([t]));
          })(e, t);
      }
      var ct = {
        updateRetainCount: function (e, t, n) {
          var r;
          if (!b("recoil_memory_managament_2020")) return;
          const o = e.getState().retention.referenceCounts,
            a = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
          0 === a ? ut(e, t) : o.set(t, a);
        },
        updateRetainCountToZero: ut,
        releaseScheduledRetainablesNow: function (e) {
          if (!b("recoil_memory_managament_2020")) return;
          const t = e.getState();
          ot(e, t.retention.retainablesToCheckForRelease),
            t.retention.retainablesToCheckForRelease.clear();
        },
        retainedByOptionWithDefault: function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
      };
      var lt = function* (e) {
        for (const t of e) for (const e of t) yield e;
      };
      var ft = {
        isSSR: "undefined" === typeof window,
        isReactNative:
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
      };
      const { isSSR: dt } = ft,
        { batchUpdates: ht } = Le,
        { initializeNodeIfNewToStore: pt, peekNodeInfo: vt } = re,
        { graph: yt } = Ue,
        { DEFAULT_VALUE: mt, recoilValues: _t, recoilValuesForKeys: gt } = G,
        {
          AbstractRecoilValue: bt,
          getRecoilValueAsLoadable: St,
          setRecoilValue: wt,
          setUnvalidatedRecoilValue: Tt,
        } = Ae,
        { updateRetainCount: At } = ct,
        { getNextTreeStateVersion: Rt, makeEmptyStoreState: Et } = Je;
      class kt {
        constructor(e) {
          E(this, "_store", void 0),
            E(this, "_refCount", 0),
            E(
              this,
              "getLoadable",
              (e) => (this.checkRefCount_INTERNAL(), St(this._store, e))
            ),
            E(
              this,
              "getPromise",
              (e) => (
                this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise()
              )
            ),
            E(this, "getNodes_UNSTABLE", (e) => {
              if (
                (this.checkRefCount_INTERNAL(),
                !0 === (null === e || void 0 === e ? void 0 : e.isModified))
              ) {
                if (
                  !1 === (null === e || void 0 === e ? void 0 : e.isInitialized)
                )
                  return [];
                const t = this._store.getState().currentTree;
                return gt(t.dirtyAtoms);
              }
              const t = this._store.getState().knownAtoms,
                n = this._store.getState().knownSelectors;
              return null ==
                (null === e || void 0 === e ? void 0 : e.isInitialized)
                ? _t.values()
                : !0 === e.isInitialized
                ? gt(
                    lt([
                      this._store.getState().knownAtoms,
                      this._store.getState().knownSelectors,
                    ])
                  )
                : T(_t.values(), ({ key: e }) => !t.has(e) && !n.has(e));
            }),
            E(
              this,
              "getInfo_UNSTABLE",
              ({ key: e }) => (
                this.checkRefCount_INTERNAL(),
                vt(this._store, this._store.getState().currentTree, e)
              )
            ),
            E(this, "map", (e) => {
              this.checkRefCount_INTERNAL();
              const t = new Ct(this, ht);
              return e(t), Vt(t.getStore_INTERNAL());
            }),
            E(this, "asyncMap", async (e) => {
              this.checkRefCount_INTERNAL();
              const t = new Ct(this, ht);
              return await e(t), Vt(t.getStore_INTERNAL());
            }),
            (this._store = {
              getState: () => e,
              replaceState: (t) => {
                e.currentTree = t(e.currentTree);
              },
              getGraph: (t) => {
                const n = e.graphsByVersion;
                if (n.has(t)) return i(n.get(t));
                const r = yt();
                return n.set(t, r), r;
              },
              subscribeToTransactions: () => ({ release: () => {} }),
              addTransactionMetadata: () => {
                throw new Error("Cannot subscribe to Snapshots");
              },
            });
          for (const t of this._store.getState().nodeCleanupFunctions.keys())
            pt(this._store, e.currentTree, t, "get"), At(this._store, t, 1);
          this.retain(), this.autorelease_INTERNAL();
        }
        retain() {
          if (!b("recoil_memory_managament_2020")) return () => {};
          this._refCount++;
          let e = !1;
          return () => {
            e || ((e = !0), this.release_INTERNAL());
          };
        }
        autorelease_INTERNAL() {
          b("recoil_memory_managament_2020") &&
            (dt || window.setTimeout(() => this.release_INTERNAL(), 0));
        }
        release_INTERNAL() {
          b("recoil_memory_managament_2020") &&
            (this._refCount--, this._refCount);
        }
        checkRefCount_INTERNAL() {
          b("recoil_memory_managament_2020") && this._refCount;
        }
        getStore_INTERNAL() {
          return this.checkRefCount_INTERNAL(), this._store;
        }
        getID() {
          return this.checkRefCount_INTERNAL(), this.getID_INTERNAL();
        }
        getID_INTERNAL() {
          return (
            this.checkRefCount_INTERNAL(),
            this._store.getState().currentTree.stateID
          );
        }
      }
      function Nt(e, t, n = !1) {
        const r = e.getState(),
          o = n ? Rt() : t.version;
        return {
          currentTree: n
            ? {
                version: o,
                stateID: o,
                transactionMetadata: { ...t.transactionMetadata },
                dirtyAtoms: new Set(t.dirtyAtoms),
                atomValues: t.atomValues.clone(),
                nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
              }
            : t,
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(o, e.getGraph(t.version)),
          versionsUsedByComponent: new Map(),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(),
        };
      }
      function Vt(e, t = "current") {
        const n = e.getState(),
          r = "current" === t ? n.currentTree : i(n.previousTree);
        return new kt(Nt(e, r));
      }
      class Ct extends kt {
        constructor(e, t) {
          super(
            Nt(
              e.getStore_INTERNAL(),
              e.getStore_INTERNAL().getState().currentTree,
              !0
            )
          ),
            E(this, "_batch", void 0),
            E(this, "set", (e, t) => {
              this.checkRefCount_INTERNAL();
              const n = this.getStore_INTERNAL();
              this._batch(() => {
                At(n, e.key, 1), wt(this.getStore_INTERNAL(), e, t);
              });
            }),
            E(this, "reset", (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              this._batch(() => {
                At(t, e.key, 1), wt(this.getStore_INTERNAL(), e, mt);
              });
            }),
            E(this, "setUnvalidatedAtomValues_DEPRECATED", (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              ht(() => {
                for (const [n, r] of e.entries())
                  At(t, n, 1), Tt(t, new bt(n), r);
              });
            }),
            (this._batch = t);
        }
      }
      var Mt = {
          Snapshot: kt,
          MutableSnapshot: Ct,
          freshSnapshot: function (e) {
            const t = new kt(Et());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: Vt,
        },
        Lt = Mt.Snapshot,
        xt = Mt.MutableSnapshot,
        Ot = Mt.freshSnapshot,
        Dt = Mt.cloneSnapshot,
        Bt = Object.freeze({
          __proto__: null,
          Snapshot: Lt,
          MutableSnapshot: xt,
          freshSnapshot: Ot,
          cloneSnapshot: Dt,
        });
      const { getNextTreeStateVersion: Ut, makeEmptyStoreState: Pt } = Je,
        {
          cleanUpNode: $t,
          getDownstreamNodes: It,
          setNodeValue: zt,
          setUnvalidatedAtomValue_DEPRECATED: Ft,
        } = re,
        { graph: jt } = Ue,
        { cloneGraph: Gt } = Ue,
        { applyAtomValueWrites: Wt } = Ae,
        { releaseScheduledRetainablesNow: qt } = ct,
        { freshSnapshot: Ht } = Bt,
        {
          useCallback: Zt,
          useContext: Kt,
          useEffect: Jt,
          useMemo: Xt,
          useRef: Yt,
          useState: Qt,
        } = r;
      function en() {
        throw new Error(
          "This component must be used inside a <RecoilRoot> component."
        );
      }
      const tn = Object.freeze({
        getState: en,
        replaceState: en,
        getGraph: en,
        subscribeToTransactions: en,
        addTransactionMetadata: en,
      });
      let nn = !1;
      function rn(e) {
        if (nn)
          throw new Error(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        const t = e.getState();
        if (null === t.nextTree) {
          b("recoil_memory_managament_2020") &&
            b("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            qt(e);
          const n = t.currentTree.version,
            r = Ut();
          (t.nextTree = {
            ...t.currentTree,
            version: r,
            stateID: r,
            dirtyAtoms: new Set(),
            transactionMetadata: {},
          }),
            t.graphsByVersion.set(r, Gt(i(t.graphsByVersion.get(n))));
        }
      }
      const on = r.createContext({ current: tn }),
        an = () => Kt(on),
        sn = r.createContext(null);
      function un(e, t, n) {
        const r = It(e, n, n.dirtyAtoms);
        for (const o of r) {
          const e = t.nodeToComponentSubscriptions.get(o);
          if (e) for (const [t, [r, o]] of e) o(n);
        }
      }
      function cn(e) {
        const t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          for (const [n, o] of t.nodeTransactionSubscriptions)
            if (r.has(n)) for (const [t, r] of o) r(e);
          for (const [n, r] of t.transactionSubscriptions) r(e);
          (b("recoil_early_rendering_2021") &&
            !t.suspendedComponentResolvers.size) ||
            (un(e, t, n),
            t.suspendedComponentResolvers.forEach((e) => e()),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function ln({ setNotifyBatcherOfChange: e }) {
        const t = an(),
          [n, r] = Qt([]);
        return (
          e(() => r({})),
          Jt(() => {
            xe.enqueueExecution("Batcher", () => {
              !(function (e) {
                const t = e.current.getState();
                t.commitDepth++;
                try {
                  const { nextTree: n } = t;
                  if (null === n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    cn(e.current),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : S(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    b("recoil_memory_managament_2020") && qt(e.current);
                } finally {
                  t.commitDepth--;
                }
              })(t);
            });
          }),
          Jt(
            () => () => {
              e(() => {});
            },
            [e]
          ),
          null
        );
      }
      let fn = 0;
      function dn({
        initializeState_DEPRECATED: e,
        initializeState: t,
        store_INTERNAL: n,
        children: o,
      }) {
        var a;
        let s;
        const u = Yt(null),
          c = Zt(
            (e) => {
              u.current = e;
            },
            [u]
          ),
          l =
            null !== (a = r.createMutableSource) && void 0 !== a
              ? a
              : r.unstable_createMutableSource,
          f =
            null !== n && void 0 !== n
              ? n
              : {
                  getState: () => s.current,
                  replaceState: (e) => {
                    const t = d.current.getState();
                    rn(d.current);
                    const n = i(t.nextTree);
                    let r;
                    try {
                      (nn = !0), (r = e(n));
                    } finally {
                      nn = !1;
                    }
                    r !== n &&
                      ((t.nextTree = r),
                      b("recoil_early_rendering_2021") && un(f, t, r),
                      i(u.current)());
                  },
                  getGraph: (e) => {
                    const t = s.current.graphsByVersion;
                    if (t.has(e)) return i(t.get(e));
                    const n = jt();
                    return t.set(e, n), n;
                  },
                  subscribeToTransactions: (e, t) => {
                    if (null == t) {
                      const { transactionSubscriptions: t } =
                          d.current.getState(),
                        n = fn++;
                      return (
                        t.set(n, e),
                        {
                          release: () => {
                            t.delete(n);
                          },
                        }
                      );
                    }
                    {
                      const { nodeTransactionSubscriptions: n } =
                        d.current.getState();
                      n.has(t) || n.set(t, new Map());
                      const r = fn++;
                      return (
                        i(n.get(t)).set(r, e),
                        {
                          release: () => {
                            const e = n.get(t);
                            e && (e.delete(r), 0 === e.size && n.delete(t));
                          },
                        }
                      );
                    }
                  },
                  addTransactionMetadata: (e) => {
                    rn(d.current);
                    for (const t of Object.keys(e))
                      i(d.current.getState().nextTree).transactionMetadata[t] =
                        e[t];
                  },
                },
          d = Yt(f);
        s = Yt(
          null != e
            ? (function (e, t) {
                const n = Pt();
                return (
                  t({
                    set: (t, r) => {
                      const o = n.currentTree,
                        a = zt(e, o, t.key, r),
                        i = new Set(a.keys()),
                        s = o.nonvalidatedAtoms.clone();
                      for (const e of i) s.delete(e);
                      n.currentTree = {
                        ...o,
                        dirtyAtoms: Xe(o.dirtyAtoms, i),
                        atomValues: Wt(o.atomValues, a),
                        nonvalidatedAtoms: s,
                      };
                    },
                    setUnvalidatedAtomValues: (e) => {
                      e.forEach((e, t) => {
                        n.currentTree = Ft(n.currentTree, t, e);
                      });
                    },
                  }),
                  n
                );
              })(f, e)
            : null != t
            ? (function (e) {
                return Ht().map(e).getStore_INTERNAL().getState();
              })(t)
            : Pt()
        );
        const h = Xt(
          () => (l ? l(s, () => s.current.currentTree.version) : null),
          [l, s]
        );
        return (
          Jt(
            () => () => {
              for (const e of d.current.getState().knownAtoms) $t(d.current, e);
            },
            []
          ),
          r.createElement(
            on.Provider,
            { value: d },
            r.createElement(
              sn.Provider,
              { value: h },
              r.createElement(ln, { setNotifyBatcherOfChange: c }),
              o
            )
          )
        );
      }
      var hn = {
        useStoreRef: an,
        useRecoilMutableSource: function () {
          const e = Kt(sn);
          return (
            null == e &&
              R(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        RecoilRoot: function (e) {
          const { override: t, ...n } = e,
            o = an();
          return !1 === t && o.current !== tn
            ? e.children
            : r.createElement(dn, n);
        },
        notifyComponents_FOR_TESTING: un,
        sendEndOfBatchNotifications_FOR_TESTING: cn,
      };
      const { loadableWithValue: pn } = p,
        { DEFAULT_VALUE: vn, getNode: yn } = G,
        {
          copyTreeState: mn,
          getRecoilValueAsLoadable: _n,
          invalidateDownstreams: gn,
          writeLoadableToTreeState: bn,
        } = Ae;
      function Sn(e) {
        return "atom" === yn(e.key).nodeType;
      }
      class wn {
        constructor(e, t) {
          E(this, "_store", void 0),
            E(this, "_treeState", void 0),
            E(this, "_changes", void 0),
            E(this, "get", (e) => {
              if (this._changes.has(e.key)) return this._changes.get(e.key);
              if (!Sn(e))
                throw new Error(
                  "Reading selectors within atomicUpdate is not supported"
                );
              const t = _n(this._store, e, this._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : new Error(
                    `Expected Recoil atom ${e.key} to have a value, but it is in a loading state.`
                  );
            }),
            E(this, "set", (e, t) => {
              if (!Sn(e))
                throw new Error(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" === typeof t) {
                const n = this.get(e);
                this._changes.set(e.key, t(n));
              } else this._changes.set(e.key, t);
            }),
            E(this, "reset", (e) => {
              this.set(e, vn);
            }),
            (this._store = e),
            (this._treeState = t),
            (this._changes = new Map());
        }
        newTreeState_INTERNAL() {
          if (0 === this._changes.size) return this._treeState;
          const e = mn(this._treeState);
          for (const [t, n] of this._changes) bn(e, t, pn(n));
          return gn(this._store, e), e;
        }
      }
      var Tn = function (e) {
          return (t) => {
            e.replaceState((n) => {
              const r = new wn(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        An = Object.freeze({ __proto__: null, atomicUpdater: Tn });
      var Rn = function (e, t) {
        const n = new Map();
        for (const [r, o] of e) t(o, r) && n.set(r, o);
        return n;
      };
      var En = function (e, t) {
        const n = new Set();
        for (const r of e) t(r) && n.add(r);
        return n;
      };
      var kn = function (e, t) {
        if (!e) throw new Error(t);
      };
      var Nn = function (...e) {
        const t = new Map();
        for (let n = 0; n < e.length; n++) {
          const r = e[n].keys();
          let o;
          for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
        }
        return t;
      };
      var Vn = function (e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      };
      const { useRef: Cn } = r;
      var Mn = function () {
        return Cn(), "<component name not available>";
      };
      const { atomicUpdater: Ln } = An,
        { batchUpdates: xn } = Le,
        { DEFAULT_VALUE: On, getNode: Dn, nodes: Bn } = G,
        { useRecoilMutableSource: Un, useStoreRef: Pn } = hn,
        { isRecoilValue: $n } = D,
        {
          AbstractRecoilValue: In,
          getRecoilValueAsLoadable: zn,
          setRecoilValue: Fn,
          setRecoilValueLoadable: jn,
          setUnvalidatedRecoilValue: Gn,
          subscribeToRecoilValue: Wn,
        } = Ae,
        { updateRetainCount: qn } = ct,
        { RetentionZone: Hn } = q,
        { Snapshot: Zn, cloneSnapshot: Kn } = Bt,
        { setByAddingToSet: Jn } = w,
        { isSSR: Xn } = ft,
        { mutableSourceExists: Yn, useMutableSource: Qn } = y,
        {
          useCallback: er,
          useEffect: tr,
          useMemo: nr,
          useRef: rr,
          useState: or,
        } = r,
        ar = 12e4;
      function ir(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state) {
          throw new Promise((e) => {
            n.current.getState().suspendedComponentResolvers.add(e);
          });
        }
        if ("hasError" === e.state) throw e.contents;
        throw new Error(`Invalid value of loadable atom "${t.key}"`);
      }
      function sr(e) {
        return (
          b("recoil_memory_managament_2020") && yr(e),
          Yn()
            ? (function (e) {
                const t = Pn(),
                  n = er(() => {
                    var n;
                    const r = t.current,
                      o = r.getState(),
                      a =
                        b("recoil_early_rendering_2021") &&
                        null !== (n = o.nextTree) &&
                        void 0 !== n
                          ? n
                          : o.currentTree;
                    return zn(r, e, a);
                  }, [t, e]),
                  r = er(() => n(), [n]),
                  o = Mn(),
                  a = er(
                    (r, a) => {
                      const i = t.current;
                      return Wn(
                        i,
                        e,
                        () => {
                          if (!b("recoil_suppress_rerender_in_callback"))
                            return a();
                          const e = n();
                          u.current.is(e) || a(), (u.current = e);
                        },
                        o
                      ).release;
                    },
                    [t, e, o, n]
                  ),
                  i = Un(),
                  s = Qn(i, r, a),
                  u = rr(s);
                return (
                  tr(() => {
                    u.current = s;
                  }),
                  s
                );
              })(e)
            : (function (e) {
                const t = Pn(),
                  [n, r] = or([]),
                  o = Mn();
                tr(() => {
                  const n = t.current,
                    a = n.getState(),
                    s = Wn(
                      n,
                      e,
                      (t) => {
                        var o;
                        if (!b("recoil_suppress_rerender_in_callback"))
                          return r([]);
                        const a = zn(n, e, n.getState().currentTree);
                        (null === (o = i.current) || void 0 === o
                          ? void 0
                          : o.is(a)) || r(a),
                          (i.current = a);
                      },
                      o
                    );
                  if (a.nextTree)
                    n.getState().queuedComponentCallbacks_DEPRECATED.push(
                      () => {
                        (i.current = null), r([]);
                      }
                    );
                  else {
                    var u;
                    if (!b("recoil_suppress_rerender_in_callback"))
                      return r([]);
                    const t = zn(n, e, n.getState().currentTree);
                    (null === (u = i.current) || void 0 === u
                      ? void 0
                      : u.is(t)) || r(t),
                      (i.current = t);
                  }
                  return s.release;
                }, [o, e, t]);
                const a = zn(t.current, e),
                  i = rr(a);
                return (
                  tr(() => {
                    i.current = a;
                  }),
                  a
                );
              })(e)
        );
      }
      function ur(e) {
        const t = Pn();
        return ir(sr(e), e, t);
      }
      function cr(e) {
        const t = Pn();
        return er(
          (n) => {
            Fn(t.current, e, n);
          },
          [t, e]
        );
      }
      function lr(e) {
        const t = Pn();
        tr(() => t.current.subscribeToTransactions(e).release, [e, t]);
      }
      function fr(e) {
        const t = e.atomValues.toMap(),
          n = De(
            Rn(t, (e, t) => {
              const n = Dn(t).persistence_UNSTABLE;
              return null != n && "none" !== n.type && "hasValue" === e.state;
            }),
            (e) => e.contents
          );
        return Nn(e.nonvalidatedAtoms.toMap(), n);
      }
      function dr(e) {
        const t = rr();
        return (
          tr(() => {
            t.current = e;
          }),
          t.current
        );
      }
      function hr() {
        const e = Pn();
        return er(
          (t) => {
            var n;
            const r = e.current.getState(),
              o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
              a = t.getStore_INTERNAL().getState().currentTree;
            xn(() => {
              const n = new Set();
              for (const e of [o.atomValues.keys(), a.atomValues.keys()])
                for (const t of e) {
                  var r, s;
                  (null === (r = o.atomValues.get(t)) || void 0 === r
                    ? void 0
                    : r.contents) !==
                    (null === (s = a.atomValues.get(t)) || void 0 === s
                      ? void 0
                      : s.contents) &&
                    Dn(t).shouldRestoreFromSnapshots &&
                    n.add(t);
                }
              n.forEach((t) => {
                jn(
                  e.current,
                  new In(t),
                  a.atomValues.has(t) ? i(a.atomValues.get(t)) : On
                );
              }),
                e.current.replaceState((e) => ({
                  ...e,
                  stateID: t.getID_INTERNAL(),
                }));
            });
          },
          [e]
        );
      }
      class pr {}
      const vr = new pr();
      function yr(e) {
        if (b("recoil_memory_managament_2020"))
          return (function (e) {
            const t = (Array.isArray(e) ? e : [e]).map((e) =>
                e instanceof Hn ? e : e.key
              ),
              n = Pn();
            tr(() => {
              if (!b("recoil_memory_managament_2020")) return;
              const e = n.current;
              if (r.current && !Xn)
                window.clearTimeout(r.current), (r.current = null);
              else for (const n of t) qn(e, n, 1);
              return () => {
                for (const n of t) qn(e, n, -1);
              };
            }, [n, ...t]);
            const r = rr(),
              o = dr(t);
            if (!Xn && (void 0 === o || !Vn(o, t))) {
              const e = n.current;
              for (const n of t) qn(e, n, 1);
              if (o) for (const t of o) qn(e, t, -1);
              r.current && window.clearTimeout(r.current),
                (r.current = window.setTimeout(() => {
                  r.current = null;
                  for (const n of t) qn(e, n, -1);
                }, ar));
            }
          })(e);
      }
      var mr = {
        recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
        useGotoRecoilSnapshot: hr,
        useRecoilCallback: function (e, t) {
          const n = Pn(),
            r = hr();
          return er(
            (...t) => {
              function o(e, t) {
                Fn(n.current, e, t);
              }
              function a(e) {
                Fn(n.current, e, On);
              }
              const i = Kn(n.current),
                s = Ln(n.current);
              let u = vr;
              return (
                xn(() => {
                  const n =
                    "useRecoilCallback expects a function that returns a function: it accepts a function of the type (RecoilInterface) => T = R and returns a callback function T => R, where RecoilInterface is an object {snapshot, set, ...} and T and R are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                  if ("function" !== typeof e) throw new Error(n);
                  const c = e({
                    set: o,
                    reset: a,
                    snapshot: i,
                    gotoSnapshot: r,
                    transact_UNSTABLE: s,
                  });
                  if ("function" !== typeof c) throw new Error(n);
                  u = c(...t);
                }),
                u instanceof pr && kn(!1),
                u
              );
            },
            null != t ? [...t, n] : void 0
          );
        },
        useRecoilInterface: function () {
          const e = Pn(),
            [t, n] = or([]),
            r = rr(new Set());
          r.current = new Set();
          const o = rr(new Set()),
            a = rr(new Map()),
            i = er(
              (e) => {
                const t = a.current.get(e);
                t && (t.release(), a.current.delete(e));
              },
              [a]
            ),
            s = Mn();
          return (
            tr(() => {
              const t = e.current;
              function u(e, t) {
                a.current.has(t) && n([]);
              }
              Oe(r.current, o.current).forEach((e) => {
                if (a.current.has(e))
                  return void R(`Double subscription to RecoilValue "${e}"`);
                const n = Wn(
                  t,
                  new In(e),
                  (t) => {
                    u(0, e);
                  },
                  s
                );
                a.current.set(e, n);
                t.getState().nextTree
                  ? t
                      .getState()
                      .queuedComponentCallbacks_DEPRECATED.push(() => {
                        u(t.getState(), e);
                      })
                  : u(t.getState(), e);
              }),
                Oe(o.current, r.current).forEach((e) => {
                  i(e);
                }),
                (o.current = r.current);
            }),
            tr(() => {
              const e = a.current;
              return () => e.forEach((e, t) => i(t));
            }, [i]),
            nr(() => {
              function t(t) {
                return (n) => {
                  Fn(e.current, t, n);
                };
              }
              function n(t) {
                var n;
                r.current.has(t.key) || (r.current = Jn(r.current, t.key));
                const o = e.current.getState();
                return zn(
                  e.current,
                  t,
                  b("recoil_early_rendering_2021") &&
                    null !== (n = o.nextTree) &&
                    void 0 !== n
                    ? n
                    : o.currentTree
                );
              }
              function o(t) {
                return ir(n(t), t, e);
              }
              return {
                getRecoilValue: o,
                getRecoilValueLoadable: n,
                getRecoilState: function (e) {
                  return [o(e), t(e)];
                },
                getRecoilStateLoadable: function (e) {
                  return [n(e), t(e)];
                },
                getSetRecoilState: t,
                getResetRecoilState: function (t) {
                  return () => Fn(e.current, t, On);
                },
              };
            }, [r, e])
          );
        },
        useRecoilSnapshot: function () {
          const e = Pn(),
            [t, n] = or(() => Kn(e.current)),
            r = dr(t),
            o = rr();
          return (
            tr(
              () => (
                o.current && !Xn && window.clearTimeout(o.current), t.retain()
              ),
              [t]
            ),
            lr(er((e) => n(Kn(e)), [])),
            r === t ||
              Xn ||
              (o.current &&
                (null === r || void 0 === r || r.release_INTERNAL(),
                window.clearTimeout(o.current)),
              t.retain(),
              (o.current = window.setTimeout(() => {
                t.release_INTERNAL(), (o.current = null);
              }, ar))),
            t
          );
        },
        useRecoilState: function (e) {
          return [ur(e), cr(e)];
        },
        useRecoilStateLoadable: function (e) {
          return [sr(e), cr(e)];
        },
        useRecoilTransaction: function (e, t) {
          const n = Pn();
          return nr(
            () =>
              (...t) => {
                Ln(n.current)((n) => {
                  e(n)(...t);
                });
              },
            null != t ? [...t, n] : void 0
          );
        },
        useRecoilTransactionObserver: function (e) {
          lr(
            er(
              (t) => {
                const n = Kn(t, "current"),
                  r = Kn(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        useRecoilValue: ur,
        useRecoilValueLoadable: sr,
        useRetain: yr,
        useResetRecoilState: function (e) {
          const t = Pn();
          return er(() => {
            Fn(t.current, e, On);
          }, [t, e]);
        },
        useSetRecoilState: cr,
        useSetUnvalidatedAtomValues: function () {
          const e = Pn();
          return (t, n = {}) => {
            xn(() => {
              e.current.addTransactionMetadata(n),
                t.forEach((t, n) => Gn(e.current, new In(n), t));
            });
          };
        },
        useTransactionObservation_DEPRECATED: function (e) {
          lr(
            er(
              (t) => {
                let n = t.getState().previousTree;
                const r = t.getState().currentTree;
                n ||
                  (S(
                    "Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"
                  ),
                  (n = t.getState().currentTree));
                const o = fr(r),
                  a = fr(n),
                  i = De(Bn, (e) => {
                    var t, n, r, o;
                    return {
                      persistence_UNSTABLE: {
                        type:
                          null !==
                            (t =
                              null === (n = e.persistence_UNSTABLE) ||
                              void 0 === n
                                ? void 0
                                : n.type) && void 0 !== t
                            ? t
                            : "none",
                        backButton:
                          null !==
                            (r =
                              null === (o = e.persistence_UNSTABLE) ||
                              void 0 === o
                                ? void 0
                                : o.backButton) &&
                          void 0 !== r &&
                          r,
                      },
                    };
                  }),
                  s = En(r.dirtyAtoms, (e) => o.has(e) || a.has(e));
                e({
                  atomValues: o,
                  previousAtomValues: a,
                  atomInfo: i,
                  modifiedAtoms: s,
                  transactionMetadata: { ...r.transactionMetadata },
                });
              },
              [e]
            )
          );
        },
        useTransactionSubscription_DEPRECATED: lr,
      };
      const { peekNodeInfo: _r } = re,
        { useStoreRef: gr } = hn;
      var br = function () {
        const e = gr();
        return ({ key: t }) =>
          _r(e.current, e.current.getState().currentTree, t);
      };
      const { RecoilRoot: Sr, useStoreRef: wr } = hn,
        { useMemo: Tr } = r;
      var Ar = function () {
        const e = wr().current;
        return Tr(
          () =>
            function ({ children: t }) {
              return r.createElement(Sr, { store_INTERNAL: e }, t);
            },
          [e]
        );
      };
      const { isReactNative: Rr, isSSR: Er } = ft;
      function kr(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
          return `"${e}"`;
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw new Error(
                "Attempt to serialize function in a Recoil cache key"
              );
            return `__FUNCTION(${e.name})__`;
        }
        if (null === e) return "null";
        var r;
        if ("object" !== typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (a(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return `[${e.map((e, n) => kr(e, t, n.toString()))}]`;
        if ("function" === typeof e.toJSON) return kr(e.toJSON(n), t, n);
        if (e instanceof Map) {
          const r = {};
          for (const [n, o] of e) r["string" === typeof n ? n : kr(n, t)] = o;
          return kr(r, t, n);
        }
        return e instanceof Set
          ? kr(
              Array.from(e).sort((e, n) => kr(e, t).localeCompare(kr(n, t))),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? kr(Array.from(e), t, n)
          : `{${Object.keys(e)
              .filter((t) => void 0 !== e[t])
              .sort()
              .map((n) => `${kr(n, t)}:${kr(e[n], t, n)}`)
              .join(",")}}`;
      }
      var Nr = function (e, t = { allowFunctions: !1 }) {
        return kr(e, t);
      };
      const Vr = (e, t, n) => {
          var r;
          if (null == e) return;
          if (
            (null === n ||
              void 0 === n ||
              null === (r = n.onNodeVisit) ||
              void 0 === r ||
              r.call(n, e),
            "leaf" === e.type)
          )
            return e;
          const o = t(e.nodeKey);
          return Vr(e.branches.get(o), t, n);
        },
        Cr = (e, t, n, r, o, a) => {
          var i;
          let s;
          if (null == e)
            if (0 === t.length)
              s = { type: "leaf", value: r, parent: n, branchKey: o };
            else {
              const [e, ...i] = t,
                [u, c] = e;
              (s = {
                type: "branch",
                nodeKey: u,
                parent: n,
                branches: new Map(),
                branchKey: o,
              }),
                s.branches.set(c, Cr(null, i, s, r, c, a));
            }
          else if (((s = e), t.length)) {
            const [n, ...o] = t,
              [i, s] = n;
            ("branch" !== e.type || e.nodeKey !== i) && kn(!1),
              e.branches.set(s, Cr(e.branches.get(s), o, e, r, s, a));
          }
          return (
            null === a ||
              void 0 === a ||
              null === (i = a.onNodeVisit) ||
              void 0 === i ||
              i.call(a, s),
            s
          );
        },
        Mr = (e, t, n) =>
          n ? (n.branches.delete(t.branchKey), Lr(e, n, n.parent)) : e === t,
        Lr = (e, t, n) =>
          n
            ? (0 === t.branches.size && n.branches.delete(t.branchKey),
              Lr(e, n, n.parent))
            : e === t,
        xr = (e) =>
          "leaf" === e.type
            ? 1
            : Array.from(e.branches.values()).reduce((e, t) => e + xr(t), 0);
      var Or = class {
          constructor(e) {
            var t, n, r;
            E(this, "_numLeafs", void 0),
              E(this, "_root", void 0),
              E(this, "_onHit", void 0),
              E(this, "_onSet", void 0),
              E(this, "_mapNodeValue", void 0),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (t = null === e || void 0 === e ? void 0 : e.onHit) &&
                void 0 !== t
                  ? t
                  : () => {}),
              (this._onSet =
                null !== (n = null === e || void 0 === e ? void 0 : e.onSet) &&
                void 0 !== n
                  ? n
                  : () => {}),
              (this._mapNodeValue =
                null !==
                  (r = null === e || void 0 === e ? void 0 : e.mapNodeValue) &&
                void 0 !== r
                  ? r
                  : (e) => e);
          }
          size() {
            return this._numLeafs;
          }
          root() {
            return this._root;
          }
          get(e, t) {
            var n;
            return null === (n = this.getLeafNode(e, t)) || void 0 === n
              ? void 0
              : n.value;
          }
          getLeafNode(e, t) {
            return Vr(this.root(), (t) => this._mapNodeValue(e(t)), {
              onNodeVisit: (e) => {
                null === t || void 0 === t || t.onNodeVisit(e),
                  "leaf" === e.type && this._onHit(e);
              },
            });
          }
          set(e, t, n) {
            let r;
            const o = Cr(
              this.root(),
              e.map(([e, t]) => [e, this._mapNodeValue(t)]),
              null,
              t,
              null,
              {
                onNodeVisit: (e) => {
                  null === n || void 0 === n || n.onNodeVisit(e),
                    "leaf" === e.type && (r = e);
                },
              }
            );
            this.root() || (this._root = o),
              this._numLeafs++,
              this._onSet(i(r));
          }
          delete(e) {
            if (!this.root()) return !1;
            const t = i(this.root());
            return (
              !!Mr(t, e, e.parent) &&
              (e === t || ("branch" === t.type && !t.branches.size)
                ? ((this._root = null), (this._numLeafs = 0), !0)
                : ((this._numLeafs -= xr(e)), !0))
            );
          }
          clear() {
            (this._numLeafs = 0), (this._root = null);
          }
        },
        Dr = Object.freeze({ __proto__: null, TreeCache: Or });
      var Br = class {
          constructor(e) {
            var t;
            E(this, "_maxSize", void 0),
              E(this, "_size", void 0),
              E(this, "_head", void 0),
              E(this, "_tail", void 0),
              E(this, "_map", void 0),
              E(this, "_keyMapper", void 0),
              (this._maxSize = e.maxSize),
              (this._size = 0),
              (this._head = null),
              (this._tail = null),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (t = e.mapKey) && void 0 !== t ? t : (e) => e);
          }
          head() {
            return this._head;
          }
          tail() {
            return this._tail;
          }
          size() {
            return this._size;
          }
          maxSize() {
            return this._maxSize;
          }
          has(e) {
            return this._map.has(this._keyMapper(e));
          }
          get(e) {
            const t = this._keyMapper(e),
              n = this._map.get(t);
            if (n) return this.set(e, n.value), n.value;
          }
          set(e, t) {
            const n = this._keyMapper(e);
            this._map.get(n) && this.delete(e);
            const r = this.head(),
              o = { key: e, right: r, left: null, value: t };
            r ? (r.left = o) : (this._tail = o),
              this._map.set(n, o),
              (this._head = o),
              this._size++,
              this._maybeDeleteLRU();
          }
          _maybeDeleteLRU() {
            this.size() > this.maxSize() && this.deleteLru();
          }
          deleteLru() {
            const e = this.tail();
            e && this.delete(e.key);
          }
          delete(e) {
            const t = this._keyMapper(e);
            if (!this._size || !this._map.has(t)) return;
            const n = i(this._map.get(t)),
              r = n.right,
              o = n.left;
            r && (r.left = n.left),
              o && (o.right = n.right),
              n === this.head() && (this._head = r),
              n === this.tail() && (this._tail = o),
              this._map.delete(t),
              this._size--;
          }
          clear() {
            (this._size = 0),
              (this._head = null),
              (this._tail = null),
              (this._map = new Map());
          }
        },
        Ur = Object.freeze({ __proto__: null, LRUCache: Br });
      const { LRUCache: Pr } = Ur,
        { TreeCache: $r } = Dr;
      var Ir = function (e, t = (e) => e) {
        const n = new Pr({ maxSize: e }),
          r = new $r({
            mapNodeValue: t,
            onHit: (e) => {
              n.set(e, !0);
            },
            onSet: (t) => {
              const o = n.tail();
              n.set(t, !0), o && r.size() > e && r.delete(o.key);
            },
          });
        return r;
      };
      const { TreeCache: zr } = Dr,
        Fr = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      var jr = function ({
        equality: e = Fr.equality,
        eviction: t = Fr.eviction,
        maxSize: n = Fr.maxSize,
      } = Fr) {
        return (function (e, t, n) {
          switch (e) {
            case "keep-all":
              return new zr({ mapNodeValue: n });
            case "lru":
              return Ir(i(t), n);
            case "most-recent":
              return Ir(1, n);
          }
          throw new Error(`Unrecognized eviction policy ${e}`);
        })(
          t,
          n,
          (function (e) {
            switch (e) {
              case "reference":
                return (e) => e;
              case "value":
                return (e) => Nr(e);
            }
            throw new Error(`Unrecognized equality policy ${e}`);
          })(e)
        );
      };
      var Gr = {
        startPerfBlock: function (e) {
          return () => null;
        },
      };
      const {
          CANCELED: Wr,
          Canceled: qr,
          loadableWithError: Hr,
          loadableWithPromise: Zr,
          loadableWithValue: Kr,
        } = p,
        { getNodeLoadable: Jr, peekNodeLoadable: Xr, setNodeValue: Yr } = re,
        { saveDependencyMapToStore: Qr } = Ue,
        {
          DEFAULT_VALUE: eo,
          RecoilValueNotReady: to,
          getConfigDeletionHandler: no,
          registerNode: ro,
        } = G,
        { isRecoilValue: oo } = D,
        { AbstractRecoilValue: ao } = D,
        { setRecoilValueLoadable: io } = Ae,
        { retainedByOptionWithDefault: so } = ct,
        { cloneSnapshot: uo } = Bt,
        { startPerfBlock: co } = Gr,
        lo = [],
        fo = new Map(),
        ho = (() => {
          let e = 0;
          return () => e++;
        })();
      var po = function (e) {
        const { key: t, get: n, cachePolicy_UNSTABLE: r } = e,
          o = null != e.set ? e.set : void 0,
          s = jr(
            null !== r && void 0 !== r
              ? r
              : { equality: "reference", eviction: "keep-all" }
          ),
          u = so(e.retainedBy_UNSTABLE),
          c = new Map();
        let l = 0;
        function f() {
          return !b("recoil_memory_managament_2020") || l > 0;
        }
        function d(e) {
          return (
            c.has(e) ||
              c.set(e, {
                depValuesDiscoveredSoFarDuringAsyncWork: null,
                latestLoadable: null,
                latestExecutionId: null,
                stateVersion: null,
              }),
            i(c.get(e))
          );
        }
        function h(e) {
          return (
            l++,
            e.getState().knownSelectors.add(t),
            () => {
              l--, e.getState().knownSelectors.delete(t), c.delete(e);
            }
          );
        }
        function p() {
          return void 0 !== no(t) && !f();
        }
        function v(e, t, n) {
          if ("loading" === t.state) {
            let t = fo.get(n);
            null == t && fo.set(n, (t = new Set())), t.add(e);
          }
        }
        function y(e, t, n) {
          const r = e.getState().knownSelectors.has(n);
          if (r && t.atomValues.has(n)) return i(t.atomValues.get(n));
          const o = Jr(e, t, n);
          return "loading" !== o.state && r && t.atomValues.set(n, o), o;
        }
        function m(e, n, r, o, a) {
          return n
            .then((n) => {
              if (!f()) return C(e, a), Wr;
              if (n instanceof qr)
                return S("Selector was released while it had dependencies"), Wr;
              const { __key: o, __value: i } =
                null !== n && void 0 !== n ? n : {};
              let s = !0;
              null != o && (r.atomValues.set(o, Kr(i)), (s = !1));
              const u = T(e, r);
              if (u && "hasValue" === u.state)
                return N(u, e), { __value: u.contents, __key: t };
              if (!M(e, a)) {
                var c;
                const e = E(r);
                if (
                  "loading" ===
                  (null === e ||
                  void 0 === e ||
                  null === (c = e.latestLoadable) ||
                  void 0 === c
                    ? void 0
                    : c.state)
                )
                  return e.latestLoadable.contents;
              }
              const [l, d] = w(e, r, a, s);
              if (
                (M(e, a) && V(d, e, a),
                L(l),
                "loading" !== l.state &&
                  (O(r, A(d), l), g(e, r, new Set(d.keys()), a), _(e, l, a)),
                "hasError" === l.state)
              )
                throw l.contents;
              return "hasValue" === l.state
                ? { __value: l.contents, __key: t }
                : l.contents;
            })
            .catch((t) => {
              if (!f()) return C(e, a), Wr;
              const n = Hr(t);
              throw (
                (x(t),
                O(r, A(o), Hr(t)),
                g(e, r, new Set(o.keys()), a),
                _(e, n, a),
                t)
              );
            });
        }
        function _(e, n, r) {
          M(e, r) &&
            (N(n, e),
            (function (e, n) {
              const r = fo.get(n);
              if (void 0 !== r) {
                for (const n of r) io(n, new ao(t), e);
                fo.delete(n);
              }
            })(n, r));
        }
        function g(e, n, r, o) {
          var a, i, s, u, c, l, f;
          (M(e, o) ||
            n.version ===
              (null === (a = e.getState()) ||
              void 0 === a ||
              null === (i = a.currentTree) ||
              void 0 === i
                ? void 0
                : i.version) ||
            n.version ===
              (null === (s = e.getState()) ||
              void 0 === s ||
              null === (u = s.nextTree) ||
              void 0 === u
                ? void 0
                : u.version)) &&
            Qr(
              new Map([[t, r]]),
              e,
              null !==
                (c =
                  null === (l = e.getState()) ||
                  void 0 === l ||
                  null === (f = l.nextTree) ||
                  void 0 === f
                    ? void 0
                    : f.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
        }
        function w(e, r, o, i = !1) {
          const s = co(t);
          let u,
            c,
            l = !1;
          const d = new Map(),
            h = new Set();
          function p(t) {
            const { key: n } = t;
            !(function (e, t, n, r, o) {
              n.add(r), g(e, t, n, o);
            })(e, r, h, n, o);
            const a = i ? Jr(e, r, n) : y(e, r, n);
            if ((L(a), d.set(n, a), "hasValue" === a.state)) return a.contents;
            throw a.contents;
          }
          g(e, r, h, o);
          let v = !1;
          const b =
            (t) =>
            (...n) => {
              if (!v)
                throw new Error(
                  "getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can obtain the current Recoil state without a subscription."
                );
              const r = uo(e),
                o = t({ snapshot: r });
              if ("function" !== typeof o)
                throw new Error(
                  "getCallback() expects a function that returns a function."
                );
              return o(...n);
            };
          try {
            (u = n({ get: p, getCallback: b })),
              (u = oo(u) ? p(u) : u),
              (v = !0),
              a(u)
                ? (u = (function (e, n, r, o, i) {
                    return n
                      .then((n) => {
                        if (!f()) return C(e, i), Wr;
                        const a = Kr(n);
                        return (
                          x(n),
                          O(r, A(o), a),
                          g(e, r, new Set(o.keys()), i),
                          _(e, a, i),
                          { __value: n, __key: t }
                        );
                      })
                      .catch((t) => {
                        if (!f()) return C(e, i), Wr;
                        if ((M(e, i) && V(o, e, i), a(t)))
                          return m(e, t, r, o, i);
                        const n = Hr(t);
                        throw (
                          (x(t),
                          O(r, A(o), n),
                          g(e, r, new Set(o.keys()), i),
                          _(e, n, i),
                          t)
                        );
                      });
                  })(e, u, r, d, o).finally(s))
                : s();
          } catch (S) {
            (u = S), a(u) ? (u = m(e, u, r, d, o).finally(s)) : ((l = !0), s());
          }
          return (c = l ? Hr(u) : a(u) ? Zr(u) : Kr(u)), L(c), [c, d];
        }
        function T(e, n) {
          const r = new Set(),
            o = d(e),
            a = s.get(
              (t) => {
                "string" !== typeof t && kn(!1);
                return y(e, n, t).contents;
              },
              {
                onNodeVisit: (e) => {
                  "branch" === e.type &&
                    e.nodeKey !== t &&
                    "string" === typeof e.nodeKey &&
                    r.add(e.nodeKey);
                },
              }
            );
          return a && g(e, n, r, o.latestExecutionId), a;
        }
        function A(e) {
          return Array.from(e.entries()).map(([e, t]) => [e, t.contents]);
        }
        function R(e, t) {
          const n = ho(),
            [r, o] = w(e, t, n);
          return (
            N(r, e, o, n, t),
            (function (e, t, n) {
              "loading" !== n.state && O(e, t, n);
            })(t, A(o), r),
            v(e, r, n),
            r
          );
        }
        function E(e) {
          var t;
          const [, n] =
            null !==
              (t = Array.from(c.entries()).find(
                ([t, n]) =>
                  null != n.latestLoadable &&
                  null != n.latestExecutionId &&
                  !(function (e, t) {
                    var n, r;
                    const o = d(e),
                      a =
                        null !==
                          (n = o.depValuesDiscoveredSoFarDuringAsyncWork) &&
                        void 0 !== n
                          ? n
                          : new Map(),
                      i = Array(
                        (null !== (r = k.get(t.version)) && void 0 !== r
                          ? r
                          : new Map()
                        ).entries()
                      ),
                      s =
                        k.has(t.version) &&
                        i.length === a.size &&
                        i.every(([e, t]) => a.get(e) === t);
                    if (null == a || t.version === o.stateVersion || s)
                      return !1;
                    return (
                      k.set(t.version, new Map(a)),
                      Array.from(a).some(
                        ([n, r]) => y(e, t, n).contents !== r.contents
                      )
                    );
                  })(t, e)
              )) && void 0 !== t
              ? t
              : [];
          return n;
        }
        const k = new Map();
        function N(e, t, n, r, o) {
          const a = d(t);
          "loading" === e.state
            ? ((a.depValuesDiscoveredSoFarDuringAsyncWork = n),
              (a.latestExecutionId = r),
              (a.latestLoadable = e),
              (a.stateVersion =
                null === o || void 0 === o ? void 0 : o.version))
            : ((a.depValuesDiscoveredSoFarDuringAsyncWork = null),
              (a.latestExecutionId = null),
              (a.latestLoadable = null),
              (a.stateVersion = null));
        }
        function V(e, t, n) {
          const r = d(t);
          M(t, n) && (r.depValuesDiscoveredSoFarDuringAsyncWork = e);
        }
        function C(e, t) {
          M(e, t) && c.delete(e);
        }
        function M(e, t) {
          return t === d(e).latestExecutionId;
        }
        function L(e) {
          "loading" !== e.state && x(e.contents);
        }
        function x(e) {
          0;
        }
        function O(e, n, r) {
          e.atomValues.set(t, r), s.set(n, r);
        }
        function D(e, t) {
          return s.get((n) => {
            "string" !== typeof n && kn(!1);
            const r = Xr(e, t, n);
            return null === r || void 0 === r ? void 0 : r.contents;
          });
        }
        function B(e, n) {
          return (function (e) {
            if (lo.includes(t)) {
              const e = `Recoil selector has circular dependencies: ${lo
                .slice(lo.indexOf(t))
                .join(" \u2192 ")}`;
              return Hr(new Error(e));
            }
            lo.push(t);
            try {
              return e();
            } finally {
              lo.pop();
            }
          })(() =>
            (function (e, t) {
              const n = T(e, t);
              if (null != n) return N(n, e), n;
              const r = E(t);
              if (r) {
                const t = r;
                return (
                  v(e, i(t.latestLoadable), i(t.latestExecutionId)),
                  i(t.latestLoadable)
                );
              }
              return R(e, t);
            })(e, n)
          );
        }
        function U(e) {
          e.atomValues.delete(t);
        }
        if (null != o) {
          return ro({
            key: t,
            nodeType: "selector",
            peek: D,
            get: B,
            set: (e, t, n) => {
              let r = !1;
              const i = new Map();
              function s({ key: n }) {
                if (r)
                  throw new Error(
                    "Recoil: Async selector sets are not currently supported."
                  );
                const o = y(e, t, n);
                if ((L(o), "hasValue" === o.state)) return o.contents;
                throw "loading" === o.state ? new to(n) : o.contents;
              }
              function u(n, o) {
                if (r)
                  throw new Error(
                    "Recoil: Async selector sets are not currently supported."
                  );
                const a = "function" === typeof o ? o(s(n)) : o;
                Yr(e, t, n.key, a).forEach((e, t) => i.set(t, e));
              }
              const c = o(
                {
                  set: u,
                  get: s,
                  reset: function (e) {
                    u(e, eo);
                  },
                },
                n
              );
              if (void 0 !== c)
                throw a(c)
                  ? new Error(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : new Error(
                      "Recoil: selector set should be a void function."
                    );
              return (r = !0), i;
            },
            init: h,
            invalidate: U,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          });
        }
        return ro({
          key: t,
          nodeType: "selector",
          peek: D,
          get: B,
          init: h,
          invalidate: U,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        });
      };
      const {
          loadableWithError: vo,
          loadableWithPromise: yo,
          loadableWithValue: mo,
        } = p,
        {
          DEFAULT_VALUE: _o,
          DefaultValue: go,
          getConfigDeletionHandler: bo,
          registerNode: So,
          setConfigDeletionHandler: wo,
        } = G,
        { isRecoilValue: To } = D,
        {
          markRecoilValueModified: Ao,
          setRecoilValue: Ro,
          setRecoilValueLoadable: Eo,
        } = Ae,
        { retainedByOptionWithDefault: ko } = ct;
      function No(e) {
        const { key: t, persistence_UNSTABLE: n } = e,
          r = ko(e.retainedBy_UNSTABLE);
        let o,
          s = 0,
          u = a(e.default)
            ? yo(
                e.default
                  .then((e) => {
                    u = mo(e);
                    return { __key: t, __value: e };
                  })
                  .catch((e) => {
                    throw ((u = vo(e)), e);
                  })
              )
            : mo(e.default);
        const c = new Map();
        const l = So({
          key: t,
          nodeType: "atom",
          peek: function (e, n) {
            var r, a, i;
            return null !==
              (r =
                null !== (a = n.atomValues.get(t)) && void 0 !== a
                  ? a
                  : null === (i = o) || void 0 === i
                  ? void 0
                  : i[1]) && void 0 !== r
              ? r
              : u;
          },
          get: function (e, r) {
            if (r.atomValues.has(t)) return i(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != o) return o;
              if (null == n)
                return (
                  R(
                    `Tried to restore a persisted value for atom ${t} but it has no persistence settings.`
                  ),
                  u
                );
              const e = r.nonvalidatedAtoms.get(t),
                a = n.validator(e, _o),
                i = a instanceof go ? u : mo(a);
              return (o = i), o;
            }
            return u;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              const e = i(n.atomValues.get(t));
              if ("hasValue" === e.state && r === e.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof go)
              return new Map();
            return (o = void 0), new Map().set(t, mo(r));
          },
          init: function (n, r, o) {
            s++;
            const i = n.getState().knownAtoms.has(t);
            if ((n.getState().knownAtoms.add(t), "loading" === u.state)) {
              const e = () => {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || Ao(n, l);
              };
              u.contents.then(e).catch(e);
            }
            let f = _o,
              d = null;
            if (null != e.effects_UNSTABLE && !i) {
              let r = !0;
              const i = (e) => (t) => {
                  if (r) {
                    const n =
                      f instanceof go || a(f)
                        ? "hasValue" === u.state
                          ? u.contents
                          : _o
                        : f;
                    (f = "function" === typeof t ? t(n) : t),
                      a(f) &&
                        (f = f.then((t) => ((d = { effect: e, value: t }), t)));
                  } else {
                    if (a(t))
                      throw new Error(
                        "Setting atoms to async values is not implemented."
                      );
                    "function" !== typeof t && (d = { effect: e, value: t }),
                      Ro(
                        n,
                        l,
                        "function" === typeof t
                          ? (n) => {
                              const r = t(n);
                              return (d = { effect: e, value: r }), r;
                            }
                          : t
                      );
                  }
                },
                s = (e) => () => i(e)(_o),
                v = (e) => (r) => {
                  n.subscribeToTransactions((n) => {
                    var o;
                    let { currentTree: a, previousTree: i } = n.getState();
                    i ||
                      (S(
                        "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                      ),
                      (i = a));
                    const s =
                      null !== (o = a.atomValues.get(t)) && void 0 !== o
                        ? o
                        : u;
                    if ("hasValue" === s.state) {
                      var c, l, f, h;
                      const n = s.contents,
                        o =
                          null !== (c = i.atomValues.get(t)) && void 0 !== c
                            ? c
                            : u,
                        a = "hasValue" === o.state ? o.contents : _o;
                      (null === (l = d) || void 0 === l ? void 0 : l.effect) !==
                        e ||
                      (null === (f = d) || void 0 === f ? void 0 : f.value) !==
                        n
                        ? r(n, a)
                        : (null === (h = d) || void 0 === h
                            ? void 0
                            : h.effect) === e && (d = null);
                    }
                  }, t);
                };
              for (const t of null !== (h = e.effects_UNSTABLE) && void 0 !== h
                ? h
                : []) {
                var h;
                const e = t({
                  node: l,
                  trigger: o,
                  setSelf: i(t),
                  resetSelf: s(t),
                  onSet: v(t),
                });
                var p;
                if (null != e)
                  c.set(n, [
                    ...(null !== (p = c.get(n)) && void 0 !== p ? p : []),
                    e,
                  ]);
              }
              r = !1;
            }
            if (!(f instanceof go)) {
              var v;
              const e = a(f)
                ? yo(
                    (function (e, n) {
                      const r = n
                        .then((n) => {
                          var o, a;
                          return (
                            (null ===
                              (a = (
                                null !== (o = e.getState().nextTree) &&
                                void 0 !== o
                                  ? o
                                  : e.getState().currentTree
                              ).atomValues.get(t)) || void 0 === a
                              ? void 0
                              : a.contents) === r && Ro(e, l, n),
                            { __key: t, __value: n }
                          );
                        })
                        .catch((n) => {
                          var o, a;
                          throw (
                            ((null ===
                              (a = (
                                null !== (o = e.getState().nextTree) &&
                                void 0 !== o
                                  ? o
                                  : e.getState().currentTree
                              ).atomValues.get(t)) || void 0 === a
                              ? void 0
                              : a.contents) === r && Eo(e, l, vo(n)),
                            n)
                          );
                        });
                      return r;
                    })(n, f)
                  )
                : mo(f);
              r.atomValues.set(t, e),
                null === (v = n.getState().nextTree) ||
                  void 0 === v ||
                  v.atomValues.set(t, e);
            }
            return () => {
              var e;
              s--,
                null === (e = c.get(n)) ||
                  void 0 === e ||
                  e.forEach((e) => e()),
                c.delete(n),
                n.getState().knownAtoms.delete(t);
            };
          },
          invalidate: function () {
            o = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== bo(t) && s <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return l;
      }
      function Vo(e) {
        const { default: t, ...n } = e;
        return To(t)
          ? (function (e) {
              const t = Vo({
                  ...e,
                  default: _o,
                  persistence_UNSTABLE:
                    void 0 === e.persistence_UNSTABLE
                      ? void 0
                      : {
                          ...e.persistence_UNSTABLE,
                          validator: (t) =>
                            t instanceof go
                              ? t
                              : i(e.persistence_UNSTABLE).validator(t, _o),
                        },
                  effects_UNSTABLE: e.effects_UNSTABLE,
                }),
                n = po({
                  key: `${e.key}__withFallback`,
                  get: ({ get: n }) => {
                    const r = n(t);
                    return r instanceof go ? e.default : r;
                  },
                  set: ({ set: e }, n) => e(t, n),
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return wo(n.key, bo(e.key)), n;
            })({ ...n, default: t })
          : No({ ...n, default: t });
      }
      var Co = Vo;
      var Mo = class {
          constructor(e) {
            var t;
            E(this, "_map", void 0),
              E(this, "_keyMapper", void 0),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (t = null === e || void 0 === e ? void 0 : e.mapKey) &&
                void 0 !== t
                  ? t
                  : (e) => e);
          }
          size() {
            return this._map.size;
          }
          has(e) {
            return this._map.has(this._keyMapper(e));
          }
          get(e) {
            return this._map.get(this._keyMapper(e));
          }
          set(e, t) {
            this._map.set(this._keyMapper(e), t);
          }
          delete(e) {
            this._map.delete(this._keyMapper(e));
          }
          clear() {
            this._map.clear();
          }
        },
        Lo = Object.freeze({ __proto__: null, MapCache: Mo });
      const { LRUCache: xo } = Ur,
        { MapCache: Oo } = Lo,
        Do = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var Bo = function ({
        equality: e = Do.equality,
        eviction: t = Do.eviction,
        maxSize: n = Do.maxSize,
      } = Do) {
        return (function (e, t, n) {
          switch (e) {
            case "keep-all":
              return new Oo({ mapKey: n });
            case "lru":
              return new xo({ mapKey: n, maxSize: i(t) });
            case "most-recent":
              return new xo({ mapKey: n, maxSize: 1 });
          }
          throw new Error(`Unrecognized eviction policy ${e}`);
        })(
          t,
          n,
          (function (e) {
            switch (e) {
              case "reference":
                return (e) => e;
              case "value":
                return (e) => Nr(e);
            }
            throw new Error(`Unrecognized equality policy ${e}`);
          })(e)
        );
      };
      const { setConfigDeletionHandler: Uo } = G;
      var Po = function (e) {
        var t, n;
        const r = Bo({
          equality:
            null !==
              (t =
                null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n
                  ? void 0
                  : n.equality) && void 0 !== t
              ? t
              : "value",
          eviction: "keep-all",
        });
        return (t) => {
          var n;
          const o = r.get(t);
          if (null != o) return o;
          const { cachePolicyForParams_UNSTABLE: a, ...i } = e,
            s = Co({
              ...i,
              key: `${e.key}__${
                null !== (n = Nr(t)) && void 0 !== n ? n : "void"
              }`,
              default:
                "function" === typeof e.default ? e.default(t) : e.default,
              retainedBy_UNSTABLE:
                "function" === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE,
              effects_UNSTABLE:
                "function" === typeof e.effects_UNSTABLE
                  ? e.effects_UNSTABLE(t)
                  : e.effects_UNSTABLE,
            });
          return (
            r.set(t, s),
            Uo(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const { setConfigDeletionHandler: $o } = G;
      let Io = 0;
      var zo = function (e) {
        var t, n;
        const r = Bo({
          equality:
            null !==
              (t =
                null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n
                  ? void 0
                  : n.equality) && void 0 !== t
              ? t
              : "value",
          eviction: "keep-all",
        });
        return (t) => {
          var n;
          const o = r.get(t);
          if (null != o) return o;
          const a = `${e.key}__selectorFamily/${
              null !== (n = Nr(t, { allowFunctions: !0 })) && void 0 !== n
                ? n
                : "void"
            }/${Io++}`,
            i = (n) => e.get(t)(n),
            s = e.cachePolicy_UNSTABLE,
            u =
              "function" === typeof e.retainedBy_UNSTABLE
                ? e.retainedBy_UNSTABLE(t)
                : e.retainedBy_UNSTABLE;
          let c;
          if (null != e.set) {
            const n = e.set;
            c = po({
              key: a,
              get: i,
              set: (e, r) => n(t)(e, r),
              cachePolicy_UNSTABLE: s,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          } else
            c = po({
              key: a,
              get: i,
              cachePolicy_UNSTABLE: s,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          return (
            r.set(t, c),
            $o(c.key, () => {
              r.delete(t);
            }),
            c
          );
        };
      };
      const Fo = zo({
        key: "__constant",
        get: (e) => () => e,
        cachePolicyForParams_UNSTABLE: { equality: "reference" },
      });
      var jo = function (e) {
        return Fo(e);
      };
      const Go = zo({
        key: "__error",
        get: (e) => () => {
          throw new Error(e);
        },
        cachePolicyForParams_UNSTABLE: { equality: "reference" },
      });
      var Wo = function (e) {
        return Go(e);
      };
      var qo = function (e) {
        return e;
      };
      const {
        loadableWithError: Ho,
        loadableWithPromise: Zo,
        loadableWithValue: Ko,
      } = p;
      function Jo(e, t) {
        const n = Array(t.length).fill(void 0),
          r = Array(t.length).fill(void 0);
        for (const [a, i] of t.entries())
          try {
            n[a] = e(i);
          } catch (o) {
            r[a] = o;
          }
        return [n, r];
      }
      function Xo(e) {
        return null != e && !a(e);
      }
      function Yo(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map((t) => e[t]);
      }
      function Qo(e) {
        return null != e && "object" === typeof e && e.hasOwnProperty("__value")
          ? e.__value
          : e;
      }
      function ea(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(
              (e, n, r) => ({ ...e, [n]: t[r] }),
              {}
            );
      }
      function ta(e, t, n) {
        return ea(
          e,
          n.map((e, n) => (null == e ? Ko(t[n]) : a(e) ? Zo(e) : Ho(e)))
        );
      }
      var na = {
        waitForNone: zo({
          key: "__waitForNone",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Yo(e),
                [r, o] = Jo(t, n);
              return ta(e, r, o);
            },
          dangerouslyAllowMutability: !0,
        }),
        waitForAny: zo({
          key: "__waitForAny",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Yo(e),
                [r, o] = Jo(t, n);
              return o.some((e) => !a(e))
                ? ta(e, r, o)
                : new Promise((t) => {
                    for (const [n, i] of o.entries())
                      a(i) &&
                        i
                          .then((a) => {
                            (r[n] = Qo(a)), (o[n] = void 0), t(ta(e, r, o));
                          })
                          .catch((a) => {
                            (o[n] = a), t(ta(e, r, o));
                          });
                  });
            },
          dangerouslyAllowMutability: !0,
        }),
        waitForAll: zo({
          key: "__waitForAll",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Yo(e),
                [r, o] = Jo(t, n);
              if (o.every((e) => null == e)) return ea(e, r);
              const a = o.find(Xo);
              if (null != a) throw a;
              return Promise.all(o).then((t) => {
                return ea(
                  e,
                  ((n = r),
                  (o = t),
                  o.map((e, t) => (void 0 === e ? n[t] : e))).map(Qo)
                );
                var n, o;
              });
            },
          dangerouslyAllowMutability: !0,
        }),
        waitForAllSettled: zo({
          key: "__waitForAllSettled",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Yo(e),
                [r, o] = Jo(t, n);
              return o.every((e) => !a(e))
                ? ta(e, r, o)
                : Promise.all(
                    o.map((e, t) =>
                      a(e)
                        ? e
                            .then((e) => {
                              (r[t] = Qo(e)), (o[t] = void 0);
                            })
                            .catch((e) => {
                              (r[t] = void 0), (o[t] = e);
                            })
                        : null
                    )
                  ).then(() => ta(e, r, o));
            },
          dangerouslyAllowMutability: !0,
        }),
        noWait: zo({
          key: "__noWait",
          get:
            (e) =>
            ({ get: t }) => {
              try {
                return Ko(t(e));
              } catch (n) {
                return a(n) ? Zo(n) : Ho(n);
              }
            },
          dangerouslyAllowMutability: !0,
        }),
      };
      const { batchUpdates: ra, setBatcher: oa } = Le,
        { DefaultValue: aa } = G,
        { RecoilRoot: ia } = hn,
        { isRecoilValue: sa } = D,
        { retentionZone: ua } = q,
        { freshSnapshot: ca } = Bt,
        {
          useGotoRecoilSnapshot: la,
          useRecoilCallback: fa,
          useRecoilSnapshot: da,
          useRecoilState: ha,
          useRecoilStateLoadable: pa,
          useRecoilTransaction: va,
          useRecoilTransactionObserver: ya,
          useRecoilValue: ma,
          useRecoilValueLoadable: _a,
          useResetRecoilState: ga,
          useRetain: ba,
          useSetRecoilState: Sa,
          useSetUnvalidatedAtomValues: wa,
          useTransactionObservation_DEPRECATED: Ta,
        } = mr,
        {
          noWait: Aa,
          waitForAll: Ra,
          waitForAllSettled: Ea,
          waitForAny: ka,
          waitForNone: Na,
        } = na;
      var Va = {
          DefaultValue: aa,
          RecoilRoot: ia,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Ar,
          atom: Co,
          selector: po,
          retentionZone: ua,
          atomFamily: Po,
          selectorFamily: zo,
          constSelector: jo,
          errorSelector: Wo,
          readOnlySelector: qo,
          useRecoilValue: ma,
          useRecoilValueLoadable: _a,
          useRecoilState: ha,
          useRecoilStateLoadable: pa,
          useSetRecoilState: Sa,
          useResetRecoilState: ga,
          useGetRecoilValueInfo_UNSTABLE: br,
          useRetain: ba,
          useRecoilCallback: fa,
          useRecoilTransaction_UNSTABLE: va,
          useGotoRecoilSnapshot: la,
          useRecoilSnapshot: da,
          useRecoilTransactionObserver_UNSTABLE: ya,
          useTransactionObservation_UNSTABLE: Ta,
          useSetUnvalidatedAtomValues_UNSTABLE: wa,
          noWait: Aa,
          waitForNone: Na,
          waitForAny: ka,
          waitForAll: Ra,
          waitForAllSettled: Ea,
          isRecoilValue: sa,
          batchUpdates: ra,
          setBatcher: oa,
          snapshot_UNSTABLE: ca,
        },
        Ca = Va.RecoilRoot,
        Ma = Va.atom,
        La = Va.useRecoilValue,
        xa = Va.useRecoilState,
        Oa = Va.useSetRecoilState;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6363), t(9898);
    });
    var n = e.O();
    _N_E = n;
  },
]);
