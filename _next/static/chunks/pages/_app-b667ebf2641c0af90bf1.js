(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    9713: function (e) {
      e.exports = function (e, t, n) {
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
      };
    },
    6369: function (e, t, n) {
      "use strict";
      n.d(t, {
        iv: function () {
          return Te;
        },
        tZ: function () {
          return we;
        },
        F4: function () {
          return Ae;
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
                return e.parentNode.removeChild(e);
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
        g = 0,
        _ = 0,
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
        return (_ = g > 0 ? l(b, --g) : 0), y--, 10 === _ && ((y = 1), v--), _;
      }
      function A() {
        return (_ = g < m ? l(b, g++) : 0), y++, 10 === _ && ((y = 1), v++), _;
      }
      function R() {
        return l(b, g);
      }
      function E() {
        return g;
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
        return (v = y = 1), (m = d((b = e))), (g = 0), [];
      }
      function C(e) {
        return (b = ""), e;
      }
      function M(e) {
        return s(k(g - 1, O(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function L(e) {
        for (; (_ = R()) && _ < 33; ) A();
        return N(e) > 2 || N(_) > 3 ? "" : " ";
      }
      function x(e, t) {
        for (
          ;
          --t &&
          A() &&
          !(_ < 48 || _ > 102 || (_ > 57 && _ < 65) || (_ > 70 && _ < 97));

        );
        return k(e, E() + (t < 6 && 32 == R() && 32 == A()));
      }
      function O(e) {
        for (; A(); )
          switch (_) {
            case e:
              return g;
            case 34:
            case 39:
              return O(34 === e || 39 === e ? e : _);
            case 40:
              41 === e && O(e);
              break;
            case 92:
              A();
          }
        return g;
      }
      function D(e, t) {
        for (; A() && e + _ !== 57 && (e + _ !== 84 || 47 !== R()); );
        return "/*" + k(t, g - 1) + "*" + i(47 === e ? e : A());
      }
      function B(e) {
        for (; !N(R()); ) A();
        return k(e, g);
      }
      var U = "-ms-",
        P = "-moz-",
        $ = "-webkit-",
        I = "comm",
        F = "rule",
        z = "decl";
      function j(e, t) {
        for (var n = "", r = h(e), o = 0; o < r; o++)
          n += t(e[o], o, e, t) || "";
        return n;
      }
      function G(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case z:
            return (e.return = e.return || e.value);
          case I:
            return "";
          case F:
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
            g = 0,
            _ = 1,
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
          switch (((g = w), (w = A()))) {
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
              O += L(g);
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
            case 123 * _:
              c[f++] = d(O) * S;
            case 125 * _:
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
              (f = h = m = 0), (_ = S = 1), (k = O = ""), (v = s);
              break;
            case 58:
              (v = 1 + d(O)), (m = g);
            default:
              if (_ < 1)
                if (123 == w) --_;
                else if (125 == w && 0 == _++ && 125 == T()) continue;
              switch (((O += i(w)), w * _)) {
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
                  45 === g && 2 == d(O) && (_ = 0);
              }
          }
        return a;
      }
      function Z(e, t, n, r, o, i, c, l, d, p, v) {
        for (
          var y = o - 1, m = 0 === o ? i : [""], g = h(m), _ = 0, b = 0, w = 0;
          _ < r;
          ++_
        )
          for (
            var T = 0, A = f(e, y + 1, (y = a((b = c[_])))), R = e;
            T < g;
            ++T
          )
            (R = s(b > 0 ? m[T] + " " + A : u(A, /&\f/g, m[T]))) &&
              (d[w++] = R);
        return S(e, t, n, 0 === o ? F : l, d, p, v);
      }
      function K(e, t, n) {
        return S(e, t, n, I, i(_), f(e, 2, -2), 0);
      }
      function J(e, t, n, r) {
        return S(e, t, n, z, f(e, 0, r), f(e, r + 1, -1), r);
      }
      var X = function (e, t) {
          return C(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (N(r)) {
                  case 0:
                    38 === r && 12 === R() && (t[n] = 1), (e[n] += B(g - 1));
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
        Y = new WeakMap(),
        Q = function (e) {
          if ("rule" === e.type && e.parent && e.length) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || Y.get(n)) &&
              !r
            ) {
              Y.set(e, !0);
              for (
                var o = [], a = X(t, o), i = n.props, s = 0, u = 0;
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
        ee = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        te = [
          function (e, t, n, r) {
            if (!e.return)
              switch (e.type) {
                case z:
                  e.return = W(e.value, e.length);
                  break;
                case "@keyframes":
                  return j([w(u(e.value, "@", "@" + $), e, "")], r);
                case F:
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
        ne = function (e) {
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
          var r = e.stylisPlugins || te;
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
            })([Q, ee].concat(r, f));
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
      var re = function (e) {
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
        oe = {
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
      var ae = /[A-Z]|^ms/g,
        ie = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        se = function (e) {
          return 45 === e.charCodeAt(1);
        },
        ue = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        ce = (function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return se(e) ? e : e.replace(ae, "-$&").toLowerCase();
        }),
        le = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(ie, function (e, t, n) {
                  return (de = { name: t, styles: n, next: de }), t;
                });
          }
          return 1 === oe[e] || se(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function fe(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (de = { name: n.name, styles: n.styles, next: de }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (de = { name: r.name, styles: r.styles, next: de }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r += fe(e, t, n[o]) + ";";
              else
                for (var a in n) {
                  var i = n[a];
                  if ("object" !== typeof i)
                    null != t && void 0 !== t[i]
                      ? (r += a + "{" + t[i] + "}")
                      : ue(i) && (r += ce(a) + ":" + le(a, i) + ";");
                  else if (
                    !Array.isArray(i) ||
                    "string" !== typeof i[0] ||
                    (null != t && void 0 !== t[i[0]])
                  ) {
                    var s = fe(e, t, i);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        r += ce(a) + ":" + s + ";";
                        break;
                      default:
                        r += a + "{" + s + "}";
                    }
                  } else
                    for (var u = 0; u < i.length; u++)
                      ue(i[u]) && (r += ce(a) + ":" + le(a, i[u]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var o = de,
                a = n(e);
              return (de = o), fe(e, t, a);
            }
            break;
          case "string":
        }
        if (null == t) return n;
        var i = t[n];
        return void 0 !== i ? i : n;
      }
      var de,
        he = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var pe = function (e, t, n) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            o = "";
          de = void 0;
          var a = e[0];
          null == a || void 0 === a.raw
            ? ((r = !1), (o += fe(n, t, a)))
            : (o += a[0]);
          for (var i = 1; i < e.length; i++)
            (o += fe(n, t, e[i])), r && (o += a[i]);
          he.lastIndex = 0;
          for (var s, u = ""; null !== (s = he.exec(o)); ) u += "-" + s[1];
          return { name: re(o) + u, styles: o, next: de };
        },
        ve = Object.prototype.hasOwnProperty,
        ye = (0, r.createContext)(
          "undefined" !== typeof HTMLElement ? ne({ key: "css" }) : null
        ),
        me =
          (ye.Provider,
          function (e) {
            return (0, r.forwardRef)(function (t, n) {
              var o = (0, r.useContext)(ye);
              return e(t, o, n);
            });
          }),
        ge = (0, r.createContext)({});
      var _e = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        be = function (e, t) {
          var n = {};
          for (var r in t) ve.call(t, r) && (n[r] = t[r]);
          return (n[_e] = e), n;
        },
        Se = me(function (e, t, n) {
          var o = e.css;
          "string" === typeof o &&
            void 0 !== t.registered[o] &&
            (o = t.registered[o]);
          var a = e[_e],
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
          var u = pe(
            i,
            void 0,
            "function" === typeof o || Array.isArray(o)
              ? (0, r.useContext)(ge)
              : void 0
          );
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
            ve.call(e, l) && "css" !== l && l !== _e && (c[l] = e[l]);
          return (c.ref = n), (c.className = s), (0, r.createElement)(a, c);
        });
      n(8679);
      var we = function (e, t) {
        var n = arguments;
        if (null == t || !ve.call(t, "css"))
          return r.createElement.apply(void 0, n);
        var o = n.length,
          a = new Array(o);
        (a[0] = Se), (a[1] = be(e, t));
        for (var i = 2; i < o; i++) a[i] = n[i];
        return r.createElement.apply(null, a);
      };
      function Te() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return pe(t);
      }
      var Ae = function () {
        var e = Te.apply(void 0, arguments),
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
              var g = d(n, m);
              try {
                c(t, m, g);
              } catch (_) {}
            }
          }
        }
        return t;
      };
    },
    1647: function (e, t, n) {
      "use strict";
      var r = n(9713);
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
        if (
          ((r = a(a({}, r), t)),
          "object" === typeof e &&
            !(e instanceof Promise) &&
            (e.render &&
              (r.render = function (t, n) {
                return e.render(n, t);
              }),
            e.modules))
        ) {
          n = i.default.Map;
          var o = {},
            s = e.modules();
          Object.keys(s).forEach(function (e) {
            var t = s[e];
            "function" !== typeof t.then
              ? (o[e] = t)
              : (o[e] = function () {
                  return t.then(function (e) {
                    return e.default || e;
                  });
                });
          }),
            (r.loader = o);
        }
        r.loadableGenerated &&
          delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof r.ssr) {
          if (!r.ssr) return delete r.ssr, u(n, r);
          delete r.ssr;
        }
        return n(r);
      };
      s(n(7294));
      var i = s(n(5547));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    8903: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.LoadableContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    5547: function (e, t, n) {
      "use strict";
      var r = n(9713),
        o = n(4575),
        a = n(3913);
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
                r(e, t, n[t]);
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
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
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
            n = e[Symbol.iterator]();
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
      (t.__esModule = !0), (t.default = void 0);
      var l,
        f = (l = n(7294)) && l.__esModule ? l : { default: l },
        d = n(7161),
        h = n(8903);
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
      function g(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var o = m(e[r]);
            o.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = o.loaded), (t.error = o.error)),
              n.push(o.promise),
              o.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function _(e, t) {
        return f.default.createElement(
          (function (e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          t
        );
      }
      function b(e, t) {
        var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: _,
              webpack: null,
              modules: null,
            },
            t
          ),
          r = null;
        function o() {
          if (!r) {
            var t = new S(e, n);
            r = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return r.promise();
        }
        if (!y && "function" === typeof n.webpack) {
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
        var i = function (e, t) {
          o();
          var a = f.default.useContext(h.LoadableContext),
            i = (0, d.useSubscription)(r);
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
                  ? n.render(i.loaded, e)
                  : null;
              },
              [e, i]
            )
          );
        };
        return (
          (i.preload = function () {
            return o();
          }),
          (i.displayName = "LoadableComponent"),
          f.default.forwardRef(i)
        );
      }
      var S = (function () {
        function e(t, n) {
          o(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a(e, [
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
      function w(e) {
        return b(m, e);
      }
      function T(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return T(e, t);
        });
      }
      (w.Map = function (e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return b(g, e);
      }),
        (w.preloadAll = function () {
          return new Promise(function (e, t) {
            T(p).then(e, t);
          });
        }),
        (w.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (y = !0), t();
            };
            T(v, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = w.preloadReady);
      var A = w;
      t.default = A;
    },
    7370: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2804),
        o = n(5152),
        a = (n(7272), n(9700), n(6369)),
        i = (0, o.default)(
          function () {
            return Promise.all([n.e(774), n.e(885), n.e(80), n.e(208)]).then(
              n.bind(n, 1384)
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [1384];
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
          return n(7370);
        },
      ]);
    },
    7272: function () {},
    9700: function () {},
    5152: function (e, t, n) {
      e.exports = n(1647);
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
        g = n ? Symbol.for("react.fundamental") : 60117,
        _ = n ? Symbol.for("react.responder") : 60118,
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
                e.$$typeof === g ||
                e.$$typeof === _ ||
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
          return fa;
        },
        cn: function () {
          return da;
        },
        FV: function () {
          return pa;
        },
        sJ: function () {
          return ha;
        },
        Zl: function () {
          return va;
        },
      });
      var r = n(3935),
        o = n(7294);
      var a = function (e, t) {
        if (null != e) return e;
        throw new Error(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      var i = function (e, t, { error: n } = {}) {
        return null;
      };
      var s = {
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
      var u = function* (e, t) {
        let n = 0;
        for (const r of e) t(r, n++) && (yield r);
      };
      const c = new Map().set("recoil_hamt_2020", !0);
      function l(e) {
        var t;
        return null !== (t = c.get(e)) && void 0 !== t && t;
      }
      (l.setPass = (e) => {
        c.set(e, !0);
      }),
        (l.setFail = (e) => {
          c.set(e, !1);
        });
      var f = l;
      var d = function (e, t) {
        return (function* () {
          let n = 0;
          for (const r of e) yield t(r, n++);
        })();
      };
      var h = function (e, ...t) {
        0;
      };
      function p(e, t, n) {
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
      class v {
        constructor(e) {
          p(this, "key", void 0), (this.key = e);
        }
      }
      class y extends v {}
      class m extends v {}
      var g = {
          AbstractRecoilValue: v,
          RecoilState: y,
          RecoilValueReadOnly: m,
          isRecoilValue: function (e) {
            return e instanceof y || e instanceof m;
          },
        },
        _ = g.AbstractRecoilValue,
        b = g.RecoilState,
        S = g.RecoilValueReadOnly,
        w = g.isRecoilValue,
        T = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: _,
          RecoilState: b,
          RecoilValueReadOnly: S,
          isRecoilValue: w,
        });
      class A {}
      const R = new A();
      class E extends Error {
        constructor(e) {
          super(
            `Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`
          );
        }
      }
      const k = new Map(),
        N = new Map();
      class V extends Error {}
      const C = new Map();
      function M(e) {
        return C.get(e);
      }
      var L = {
        nodes: k,
        recoilValues: N,
        registerNode: function (e) {
          if (k.has(e.key)) {
            const t = `Duplicate atom key "${e.key}". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.`;
            console.warn(t);
          }
          k.set(e.key, e);
          const t =
            null == e.set
              ? new T.RecoilValueReadOnly(e.key)
              : new T.RecoilState(e.key);
          return N.set(e.key, t), t;
        },
        getNode: function (e) {
          const t = k.get(e);
          if (null == t)
            throw new V(`Missing definition for RecoilValue: "${e}""`);
          return t;
        },
        getNodeMaybe: function (e) {
          return k.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (!f("recoil_memory_managament_2020")) return;
          const n = k.get(e);
          var r;
          (null === n ||
          void 0 === n ||
          null === (t = n.shouldDeleteConfigOnRelease) ||
          void 0 === t
            ? void 0
            : t.call(n)) &&
            (k.delete(e),
            null === (r = M(e)) || void 0 === r || r(),
            C.delete(e));
        },
        setConfigDeletionHandler: function (e, t) {
          f("recoil_memory_managament_2020") &&
            (void 0 === t ? C.delete(e) : C.set(e, t));
        },
        getConfigDeletionHandler: M,
        recoilValuesForKeys: function (e) {
          return d(e, (e) => a(N.get(e)));
        },
        NodeMissingError: V,
        DefaultValue: A,
        DEFAULT_VALUE: R,
        RecoilValueNotReady: E,
      };
      class x {}
      var O = {
        RetentionZone: x,
        retentionZone: function () {
          return new x();
        },
      };
      const { setByAddingToSet: D } = s,
        { getNode: B, getNodeMaybe: U, recoilValuesForKeys: P } = L,
        { RetentionZone: $ } = O,
        I = Object.freeze(new Set());
      class F extends Error {}
      function z(e, t, n, r) {
        const o = e.getState();
        if (o.nodeCleanupFunctions.has(n)) return;
        const a = B(n),
          i = (function (e, t, n) {
            if (!f("recoil_memory_managament_2020")) return () => {};
            const { nodesRetainedByZone: r } = e.getState().retention;
            function o(e) {
              let n = r.get(e);
              n || r.set(e, (n = new Set())), n.add(t);
            }
            if (n instanceof $) o(n);
            else if (Array.isArray(n)) for (const a of n) o(a);
            return () => {
              if (!f("recoil_memory_managament_2020")) return;
              const r = e.getState().retention.nodesRetainedByZone;
              function o(e) {
                const n = r.get(e);
                n && n.delete(t), n && 0 === n.size && r.delete(e);
              }
              if (n instanceof $) o(n);
              else if (Array.isArray(n)) for (const e of n) o(e);
            };
          })(e, n, a.retainedBy),
          s = a.init(e, t, r);
        o.nodeCleanupFunctions.set(n, () => {
          s(), i();
        });
      }
      function j(e, t, n) {
        return B(n).peek(e, t);
      }
      function G(e, t, n) {
        const r = new Set(),
          o = Array.from(n),
          a = e.getGraph(t.version);
        for (let s = o.pop(); s; s = o.pop()) {
          var i;
          r.add(s);
          const e =
            null !== (i = a.nodeToNodeSubscriptions.get(s)) && void 0 !== i
              ? i
              : I;
          for (const t of e) r.has(t) || o.push(t);
        }
        return r;
      }
      var W = {
        getNodeLoadable: function (e, t, n) {
          return z(e, t, n, "get"), B(n).get(e, t);
        },
        peekNodeLoadable: j,
        setNodeValue: function (e, t, n, r) {
          const o = B(n);
          if (null == o.set)
            throw new F(`Attempt to set read-only RecoilValue: ${n}`);
          const a = o.set;
          return z(e, t, n, "set"), a(e, t, r);
        },
        cleanUpNode: function (e, t) {
          var n;
          const r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
          var r;
          const o = U(t);
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
              dirtyAtoms: D(e.dirtyAtoms, t),
            }
          );
        },
        peekNodeInfo: function (e, t, n) {
          var r, o, a;
          const i = e.getState(),
            s = e.getGraph(t.version),
            c = i.knownAtoms.has(n)
              ? "atom"
              : i.knownSelectors.has(n)
              ? "selector"
              : void 0,
            l = u(G(e, t, new Set([n])), (e) => e !== n);
          return {
            loadable: j(e, t, n),
            isActive: i.knownAtoms.has(n) || i.knownSelectors.has(n),
            isSet: "selector" !== c && t.atomValues.has(n),
            isModified: t.dirtyAtoms.has(n),
            type: c,
            deps: P(null !== (r = s.nodeDeps.get(n)) && void 0 !== r ? r : []),
            subscribers: {
              nodes: P(l),
              components: d(
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
        getDownstreamNodes: G,
        initializeNodeIfNewToStore: z,
      };
      const { getDownstreamNodes: q, getNodeLoadable: H, setNodeValue: Z } = W,
        { getNodeMaybe: K } = L,
        { DefaultValue: J, RecoilValueNotReady: X } = L,
        {
          AbstractRecoilValue: Y,
          RecoilState: Q,
          RecoilValueReadOnly: ee,
          isRecoilValue: te,
        } = T;
      function ne(e, t, n) {
        if ("set" === n.type) {
          const { recoilValue: r, valueOrUpdater: o } = n,
            a = (function (e, t, { key: n }, r) {
              if ("function" === typeof r) {
                const o = H(e, t, n);
                if ("loading" === o.state) throw new X(n);
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, r, o),
            i = Z(e, t, r.key, a);
          for (const [e, n] of i.entries()) re(t, e, n);
        } else if ("setLoadable" === n.type) {
          const {
            recoilValue: { key: e },
            loadable: r,
          } = n;
          re(t, e, r);
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
            a = K(e);
          null === a ||
            void 0 === a ||
            null === (r = a.invalidate) ||
            void 0 === r ||
            r.call(a, t),
            t.atomValues.delete(e),
            t.nonvalidatedAtoms.set(e, o),
            t.dirtyAtoms.add(e);
        } else i(`Unknown action ${n.type}`);
      }
      function re(e, t, n) {
        "hasValue" === n.state && n.contents instanceof J
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function oe(e, t) {
        e.replaceState((n) => {
          const r = (function (e) {
            return {
              ...e,
              atomValues: e.atomValues.clone(),
              nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
              dirtyAtoms: new Set(e.dirtyAtoms),
            };
          })(n);
          for (const o of t) ne(e, r, o);
          return se(e, r), r;
        });
      }
      function ae(e, t) {
        if (ie.length) {
          const n = ie[ie.length - 1];
          let r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else oe(e, [t]);
      }
      const ie = [];
      function se(e, t) {
        const n = q(e, t, t.dirtyAtoms);
        for (const a of n) {
          var r, o;
          null === (r = K(a)) ||
            void 0 === r ||
            null === (o = r.invalidate) ||
            void 0 === o ||
            o.call(r, t);
        }
      }
      function ue(e, t, n) {
        ae(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      let ce = 0;
      var le = {
        RecoilValueReadOnly: ee,
        AbstractRecoilValue: Y,
        RecoilState: Q,
        getRecoilValueAsLoadable: function (
          e,
          { key: t },
          n = e.getState().currentTree
        ) {
          var r, o;
          const a = e.getState();
          return (
            n.version !== a.currentTree.version &&
              n.version !==
                (null === (r = a.nextTree) || void 0 === r
                  ? void 0
                  : r.version) &&
              n.version !==
                (null === (o = a.previousTree) || void 0 === o
                  ? void 0
                  : o.version) &&
              i("Tried to read from a discarded tree"),
            H(e, n, t)
          );
        },
        setRecoilValue: ue,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof J) return ue(e, t, n);
          ae(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          ae(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          ae(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, { key: t }, n, r = null) {
          const o = ce++,
            s = e.getState();
          return (
            s.nodeToComponentSubscriptions.has(t) ||
              s.nodeToComponentSubscriptions.set(t, new Map()),
            a(s.nodeToComponentSubscriptions.get(t)).set(o, [
              null !== r && void 0 !== r ? r : "<not captured>",
              n,
            ]),
            {
              release: () => {
                const n = e.getState(),
                  r = n.nodeToComponentSubscriptions.get(t);
                void 0 !== r && r.has(o)
                  ? (r.delete(o),
                    0 === r.size && n.nodeToComponentSubscriptions.delete(t))
                  : i(
                      `Subscription missing at release time for atom ${t}. This is a bug in Recoil.`
                    );
              },
            }
          );
        },
        isRecoilValue: te,
        applyAtomValueWrites: function (e, t) {
          const n = e.clone();
          return (
            t.forEach((e, t) => {
              "hasValue" === e.state && e.contents instanceof J
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          const e = new Map();
          return (
            ie.push(e),
            () => {
              for (const [t, n] of e) oe(t, n);
              ie.pop() !== e && i("Incorrect order of batch popping");
            }
          );
        },
        invalidateDownstreams_FOR_TESTING: se,
      };
      const { unstable_batchedUpdates: fe } = r;
      var de = { unstable_batchedUpdates: fe };
      const { unstable_batchedUpdates: he } = de;
      var pe = { unstable_batchedUpdates: he };
      const { batchStart: ve } = le,
        { unstable_batchedUpdates: ye } = pe;
      let me = ye;
      var ge = {
        getBatcher: () => me,
        setBatcher: (e) => {
          me = e;
        },
        batchUpdates: (e) => {
          me(() => {
            let t = () => {};
            try {
              (t = ve()), e();
            } finally {
              t();
            }
          });
        },
      };
      var _e = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var be = function (e, ...t) {
        const n = new Set();
        e: for (const r of e) {
          for (const e of t) if (e.has(r)) continue e;
          n.add(r);
        }
        return n;
      };
      var Se = function (e, t) {
        const n = new Map();
        return (
          e.forEach((e, r) => {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function we(e, t, n) {
        const { nodeDeps: r, nodeToNodeSubscriptions: o } = t;
        e.forEach((e, t) => {
          const i = r.get(t);
          if (i && n && i !== n.nodeDeps.get(t)) return;
          r.set(t, new Set(e));
          if (
            ((null == i ? e : be(e, i)).forEach((e) => {
              o.has(e) || o.set(e, new Set());
              a(o.get(e)).add(t);
            }),
            i)
          ) {
            be(i, e).forEach((e) => {
              if (!o.has(e)) return;
              const n = a(o.get(e));
              n.delete(t), 0 === n.size && o.delete(e);
            });
          }
        });
      }
      var Te = {
        addToDependencyMap: function (e, t, n) {
          n.has(e) || n.set(e, new Set()), a(n.get(e)).add(t);
        },
        cloneGraph: function (e) {
          return {
            nodeDeps: Se(e.nodeDeps, (e) => new Set(e)),
            nodeToNodeSubscriptions: Se(
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
            const r = a(t.get(n));
            e.forEach((e) => r.add(e));
          });
        },
        saveDependencyMapToStore: function (e, t, n) {
          var r, o, a, s;
          const u = t.getState();
          n !== u.currentTree.version &&
            n !==
              (null === (r = u.nextTree) || void 0 === r
                ? void 0
                : r.version) &&
            n !==
              (null === (o = u.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            i("Tried to save dependencies to a discarded tree");
          const c = t.getGraph(n);
          if (
            (we(e, c),
            n ===
              (null === (a = u.previousTree) || void 0 === a
                ? void 0
                : a.version))
          ) {
            we(e, t.getGraph(u.currentTree.version), c);
          }
          if (
            n ===
              (null === (s = u.previousTree) || void 0 === s
                ? void 0
                : s.version) ||
            n === u.currentTree.version
          ) {
            var l;
            const n =
              null === (l = u.nextTree) || void 0 === l ? void 0 : l.version;
            if (void 0 !== n) {
              we(e, t.getGraph(n), c);
            }
          }
        },
      };
      var Ae,
        Re =
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
              g = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: A };
              },
              _ = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: R };
              },
              b = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: E };
              },
              S = function e(t, n, r, o, a, i) {
                if (r === a) return g(t, r, [i, o]);
                var s = l(n, r),
                  u = l(n, a);
                return _(
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
                    ? g(e, this.hash, u)
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
                  g = f(m),
                  S = d(u, g),
                  T = u & g,
                  A = T ? c[S] : v,
                  R = A._modify(e, t, n + 5, r, o, i, s);
                if (A === R) return this;
                var E,
                  k = w(e, this),
                  N = u,
                  V = void 0;
                if (T && y(R)) {
                  if (!(N &= ~g)) return v;
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
                  (N |= g),
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
                  : _(e, N, V);
              },
              E = function (e, t, n, r, o, a, s) {
                var u = this.size,
                  c = this.children,
                  f = l(n, o),
                  d = c[f],
                  p = (d || v)._modify(e, t, n + 5, r, o, a, s);
                if (d === p) return this;
                var m = w(e, this),
                  g = void 0;
                if (y(d) && !y(p)) ++u, (g = h(m, f, p, c));
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
                      return _(e, i, o);
                    })(e, u, f, c);
                  g = h(m, f, v, c);
                } else g = h(m, f, p, c);
                return m
                  ? ((this.size = u), (this.children = g), this)
                  : b(e, u, g);
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
            var F = (n.remove = function (e, t) {
              return I(t._config.hash(e), e, t);
            });
            k.prototype.remove = k.prototype.delete = function (e) {
              return F(e, this);
            };
            var z = (n.beginMutation = function (e) {
              return new k(
                e._editable + 1,
                e._edit + 1,
                e._config,
                e._root,
                e._size
              );
            });
            k.prototype.beginMutation = function () {
              return z(this);
            };
            var j = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            k.prototype.endMutation = function () {
              return j(this);
            };
            var G = (n.mutate = function (e, t) {
              var n = z(t);
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
          })((Ae = { exports: {} }), Ae.exports),
          Ae.exports);
      class Ee {
        constructor(e) {
          p(this, "_map", void 0),
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
          return Ne(this);
        }
        toMap() {
          return new Map(this._map);
        }
      }
      class ke {
        constructor(e) {
          if ((p(this, "_hamt", Re.empty.beginMutation()), e instanceof ke)) {
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
          return Ne(this);
        }
        toMap() {
          return new Map(this._hamt);
        }
      }
      function Ne(e) {
        return f("recoil_hamt_2020") ? new ke(e) : new Ee(e);
      }
      var Ve = Ne,
        Ce = Object.freeze({ __proto__: null, persistentMap: Ve });
      const { graph: Me } = Te,
        { persistentMap: Le } = Ce;
      let xe = 0;
      const Oe = () => xe++;
      function De() {
        const e = Oe();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: Le(),
          nonvalidatedAtoms: Le(),
        };
      }
      var Be = {
        makeEmptyTreeState: De,
        makeEmptyStoreState: function () {
          const e = De();
          return {
            currentTree: e,
            nextTree: null,
            previousTree: null,
            knownAtoms: new Set(),
            knownSelectors: new Set(),
            transactionSubscriptions: new Map(),
            nodeTransactionSubscriptions: new Map(),
            nodeToComponentSubscriptions: new Map(),
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set(),
            graphsByVersion: new Map().set(e.version, Me()),
            versionsUsedByComponent: new Map(),
            retention: {
              referenceCounts: new Map(),
              nodesRetainedByZone: new Map(),
              retainablesToCheckForRelease: new Set(),
            },
            nodeCleanupFunctions: new Map(),
          };
        },
        getNextTreeStateVersion: Oe,
      };
      var Ue = function (...e) {
        const t = new Set();
        for (const n of e) for (const e of n) t.add(e);
        return t;
      };
      var Pe = function (e, t, n) {
        const r = e.entries();
        let o = r.next();
        for (; !o.done; ) {
          const a = o.value;
          if (t.call(n, a[1], a[0], e)) return !0;
          o = r.next();
        }
        return !1;
      };
      const { cleanUpNode: $e } = W,
        { deleteNodeConfigIfPossible: Ie, getNode: Fe } = L,
        { RetentionZone: ze } = O,
        je = new Set();
      function Ge(e, t) {
        const n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          return void i(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        const o = new Set();
        for (const a of t)
          if (a instanceof ze) for (const e of qe(n, a)) o.add(e);
          else o.add(a);
        const s = (function (e, t) {
          const n = e.getState(),
            r = n.currentTree,
            o = e.getGraph(r.version),
            i = new Set(),
            s = new Set();
          return u(t), i;
          function u(t) {
            const c = new Set(),
              l = (function (e, t, n, r, o) {
                const i = e.getGraph(t.version),
                  s = [],
                  u = new Set();
                for (; n.size > 0; ) c(a(n.values().next().value));
                return s;
                function c(e) {
                  if (r.has(e) || o.has(e)) return void n.delete(e);
                  if (u.has(e)) return;
                  const t = i.nodeToNodeSubscriptions.get(e);
                  if (t) for (const n of t) c(n);
                  u.add(e), n.delete(e), s.push(e);
                }
              })(e, r, t, i, s);
            for (const e of l) {
              var f;
              if ("recoilRoot" === Fe(e).retainedBy) {
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
              if (He(e).some((e) => n.retention.referenceCounts.get(e))) {
                s.add(e);
                continue;
              }
              const t = o.nodeToNodeSubscriptions.get(e);
              t && Pe(t, (e) => s.has(e)) ? s.add(e) : (i.add(e), c.add(e));
            }
            const d = new Set();
            for (const e of c)
              for (const t of null !== (h = o.nodeDeps.get(e)) && void 0 !== h
                ? h
                : je) {
                var h;
                i.has(t) || d.add(t);
              }
            d.size && u(d);
          }
        })(e, o);
        for (const a of s) We(e, r, a);
      }
      function We(e, t, n) {
        if (!f("recoil_memory_managament_2020")) return;
        $e(e, n);
        const r = e.getState();
        r.knownAtoms.delete(n),
          r.knownSelectors.delete(n),
          r.nodeTransactionSubscriptions.delete(n),
          r.retention.referenceCounts.delete(n);
        const o = He(n);
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
        Ie(n);
      }
      function qe(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : je;
      }
      function He(e) {
        const t = Fe(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof ze
          ? [t]
          : t;
      }
      var Ze = {
        updateRetainCount: function (e, t, n) {
          var r;
          if (!f("recoil_memory_managament_2020")) return;
          const o = e.getState().retention.referenceCounts,
            a = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
          0 === a
            ? (o.delete(t),
              (function (e, t) {
                const n = e.getState();
                n.nextTree
                  ? n.retention.retainablesToCheckForRelease.add(t)
                  : Ge(e, new Set([t]));
              })(e, t))
            : o.set(t, a);
        },
        releaseScheduledRetainablesNow: function (e) {
          if (!f("recoil_memory_managament_2020")) return;
          const t = e.getState();
          Ge(e, t.retention.retainablesToCheckForRelease),
            t.retention.retainablesToCheckForRelease.clear();
        },
        retainedByOptionWithDefault: function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
      };
      var Ke = function* (e) {
        for (const t of e) for (const e of t) yield e;
      };
      var Je = {
        isSSR: "undefined" === typeof window,
        isReactNative:
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
      };
      const { isSSR: Xe } = Je,
        { batchUpdates: Ye } = ge,
        { initializeNodeIfNewToStore: Qe, peekNodeInfo: et } = W,
        { graph: tt } = Te,
        { DEFAULT_VALUE: nt, recoilValues: rt, recoilValuesForKeys: ot } = L,
        {
          AbstractRecoilValue: at,
          getRecoilValueAsLoadable: it,
          setRecoilValue: st,
          setUnvalidatedRecoilValue: ut,
        } = le,
        { getNextTreeStateVersion: ct, makeEmptyStoreState: lt } = Be;
      class ft {
        constructor(e) {
          p(this, "_store", void 0),
            p(this, "_refCount", 0),
            p(
              this,
              "getLoadable",
              (e) => (this.checkRefCount_INTERNAL(), it(this._store, e))
            ),
            p(
              this,
              "getPromise",
              (e) => (
                this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise()
              )
            ),
            p(this, "getNodes_UNSTABLE", (e) => {
              if (
                (this.checkRefCount_INTERNAL(),
                !0 === (null === e || void 0 === e ? void 0 : e.isModified))
              ) {
                if (
                  !1 === (null === e || void 0 === e ? void 0 : e.isInitialized)
                )
                  return [];
                const t = this._store.getState().currentTree;
                return ot(t.dirtyAtoms);
              }
              const t = this._store.getState().knownAtoms,
                n = this._store.getState().knownSelectors;
              return null ==
                (null === e || void 0 === e ? void 0 : e.isInitialized)
                ? rt.values()
                : !0 === e.isInitialized
                ? ot(
                    Ke([
                      this._store.getState().knownAtoms,
                      this._store.getState().knownSelectors,
                    ])
                  )
                : u(rt.values(), ({ key: e }) => !t.has(e) && !n.has(e));
            }),
            p(
              this,
              "getInfo_UNSTABLE",
              ({ key: e }) => (
                this.checkRefCount_INTERNAL(),
                et(this._store, this._store.getState().currentTree, e)
              )
            ),
            p(this, "map", (e) => {
              this.checkRefCount_INTERNAL();
              const t = new pt(this);
              return e(t), ht(t.getStore_INTERNAL());
            }),
            p(this, "asyncMap", async (e) => {
              this.checkRefCount_INTERNAL();
              const t = new pt(this);
              return await e(t), ht(t.getStore_INTERNAL());
            }),
            (this._store = {
              getState: () => e,
              replaceState: (t) => {
                e.currentTree = t(e.currentTree);
              },
              getGraph: (t) => {
                const n = e.graphsByVersion;
                if (n.has(t)) return a(n.get(t));
                const r = tt();
                return n.set(t, r), r;
              },
              subscribeToTransactions: () => ({ release: () => {} }),
              addTransactionMetadata: () => {
                throw new Error("Cannot subscribe to Snapshots");
              },
            });
          for (const t of this._store.getState().nodeCleanupFunctions.keys())
            Qe(this._store, e.currentTree, t, "get");
          this.retain(), this.autorelease();
        }
        retain() {
          if (!f("recoil_memory_managament_2020")) return () => {};
          this._refCount++;
          let e = !1;
          return () => {
            e || ((e = !0), this.release());
          };
        }
        autorelease() {
          f("recoil_memory_managament_2020") &&
            (Xe || window.setTimeout(() => this.release(), 0));
        }
        release() {
          f("recoil_memory_managament_2020") &&
            (this._refCount--, this._refCount);
        }
        checkRefCount_INTERNAL() {
          f("recoil_memory_managament_2020") && this._refCount;
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
      function dt(e, t, n = !1) {
        const r = e.getState(),
          o = n ? ct() : t.version;
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
      function ht(e, t = "current") {
        const n = e.getState(),
          r = "current" === t ? n.currentTree : a(n.previousTree);
        return new ft(dt(e, r));
      }
      class pt extends ft {
        constructor(e) {
          super(
            dt(
              e.getStore_INTERNAL(),
              e.getStore_INTERNAL().getState().currentTree,
              !0
            )
          ),
            p(this, "set", (e, t) => {
              this.checkRefCount_INTERNAL(),
                Ye(() => {
                  st(this.getStore_INTERNAL(), e, t);
                });
            }),
            p(this, "reset", (e) => {
              this.checkRefCount_INTERNAL(),
                Ye(() => st(this.getStore_INTERNAL(), e, nt));
            }),
            p(this, "setUnvalidatedAtomValues_DEPRECATED", (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              Ye(() => {
                for (const [n, r] of e.entries()) ut(t, new at(n), r);
              });
            });
        }
      }
      var vt = {
          Snapshot: ft,
          MutableSnapshot: pt,
          freshSnapshot: function (e) {
            const t = new ft(lt());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: ht,
        },
        yt = vt.Snapshot,
        mt = vt.MutableSnapshot,
        gt = vt.freshSnapshot,
        _t = vt.cloneSnapshot,
        bt = Object.freeze({
          __proto__: null,
          Snapshot: yt,
          MutableSnapshot: mt,
          freshSnapshot: gt,
          cloneSnapshot: _t,
        });
      const { getNextTreeStateVersion: St, makeEmptyStoreState: wt } = Be,
        {
          cleanUpNode: Tt,
          getDownstreamNodes: At,
          setNodeValue: Rt,
          setUnvalidatedAtomValue_DEPRECATED: Et,
        } = W,
        { graph: kt } = Te,
        { cloneGraph: Nt } = Te,
        { applyAtomValueWrites: Vt } = le,
        { releaseScheduledRetainablesNow: Ct } = Ze,
        { freshSnapshot: Mt } = bt,
        {
          useCallback: Lt,
          useContext: xt,
          useEffect: Ot,
          useMemo: Dt,
          useRef: Bt,
          useState: Ut,
        } = o;
      function Pt() {
        throw new Error(
          "This component must be used inside a <RecoilRoot> component."
        );
      }
      const $t = Object.freeze({
        getState: Pt,
        replaceState: Pt,
        getGraph: Pt,
        subscribeToTransactions: Pt,
        addTransactionMetadata: Pt,
      });
      let It = !1;
      function Ft(e) {
        if (It)
          throw new Error(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        if (null === e.nextTree) {
          const t = e.currentTree.version,
            n = St();
          (e.nextTree = {
            ...e.currentTree,
            version: n,
            stateID: n,
            dirtyAtoms: new Set(),
            transactionMetadata: {},
          }),
            e.graphsByVersion.set(n, Nt(a(e.graphsByVersion.get(t))));
        }
      }
      const zt = o.createContext({ current: $t }),
        jt = () => xt(zt),
        Gt = o.createContext(null);
      function Wt(e) {
        const t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          for (const [n, a] of t.nodeTransactionSubscriptions)
            if (r.has(n)) for (const [t, r] of a) r(e);
          for (const [n, r] of t.transactionSubscriptions) r(e);
          const o = At(e, n, r);
          for (const e of o) {
            const r = t.nodeToComponentSubscriptions.get(e);
            if (r) for (const [e, [t, o]] of r) o(n);
          }
          t.suspendedComponentResolvers.forEach((e) => e());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function qt({ setNotifyBatcherOfChange: e }) {
        const t = jt(),
          [n, r] = Ut([]);
        return (
          e(() => r({})),
          Ot(() => {
            _e.enqueueExecution("Batcher", () => {
              const e = t.current.getState(),
                { nextTree: n } = e;
              if (null === n) return;
              (e.previousTree = e.currentTree),
                (e.currentTree = n),
                (e.nextTree = null),
                Wt(t.current);
              const r = a(e.previousTree).version;
              e.graphsByVersion.delete(r),
                (e.previousTree = null),
                f("recoil_memory_managament_2020") && Ct(t.current);
            });
          }),
          Ot(
            () => () => {
              e(() => {});
            },
            [e]
          ),
          null
        );
      }
      let Ht = 0;
      var Zt = {
        useStoreRef: jt,
        useRecoilMutableSource: function () {
          const e = xt(Gt);
          return (
            null == e &&
              h(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        RecoilRoot: function ({
          initializeState_DEPRECATED: e,
          initializeState: t,
          store_INTERNAL: n,
          children: r,
        }) {
          var i;
          let s;
          const u = Bt(null),
            c = Lt(
              (e) => {
                u.current = e;
              },
              [u]
            ),
            l =
              null !== (i = o.createMutableSource) && void 0 !== i
                ? i
                : o.unstable_createMutableSource,
            f =
              null !== n && void 0 !== n
                ? n
                : {
                    getState: () => s.current,
                    replaceState: (e) => {
                      const t = d.current.getState();
                      Ft(t);
                      const n = a(t.nextTree);
                      let r;
                      try {
                        (It = !0), (r = e(n));
                      } finally {
                        It = !1;
                      }
                      r !== n && ((t.nextTree = r), a(u.current)());
                    },
                    getGraph: (e) => {
                      const t = s.current.graphsByVersion;
                      if (t.has(e)) return a(t.get(e));
                      const n = kt();
                      return t.set(e, n), n;
                    },
                    subscribeToTransactions: (e, t) => {
                      if (null == t) {
                        const { transactionSubscriptions: t } =
                            d.current.getState(),
                          n = Ht++;
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
                        const r = Ht++;
                        return (
                          a(n.get(t)).set(r, e),
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
                      Ft(d.current.getState());
                      for (const t of Object.keys(e))
                        a(d.current.getState().nextTree).transactionMetadata[
                          t
                        ] = e[t];
                    },
                  },
            d = Bt(f);
          s = Bt(
            null != e
              ? (function (e, t) {
                  const n = wt();
                  return (
                    t({
                      set: (t, r) => {
                        const o = n.currentTree,
                          a = Rt(e, o, t.key, r),
                          i = new Set(a.keys()),
                          s = o.nonvalidatedAtoms.clone();
                        for (const e of i) s.delete(e);
                        n.currentTree = {
                          ...o,
                          dirtyAtoms: Ue(o.dirtyAtoms, i),
                          atomValues: Vt(o.atomValues, a),
                          nonvalidatedAtoms: s,
                        };
                      },
                      setUnvalidatedAtomValues: (e) => {
                        e.forEach((e, t) => {
                          n.currentTree = Et(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(f, e)
              : null != t
              ? (function (e) {
                  return Mt().map(e).getStore_INTERNAL().getState();
                })(t)
              : wt()
          );
          const h = Dt(
            () => (l ? l(s, () => s.current.currentTree.version) : null),
            [l, s]
          );
          return (
            Ot(
              () => () => {
                for (const e of d.current.getState().knownAtoms)
                  Tt(d.current, e);
              },
              []
            ),
            o.createElement(
              zt.Provider,
              { value: d },
              o.createElement(
                Gt.Provider,
                { value: h },
                o.createElement(qt, { setNotifyBatcherOfChange: c }),
                r
              )
            )
          );
        },
        sendEndOfBatchNotifications_FOR_TESTING: Wt,
      };
      var Kt = function (e, t) {
        const n = new Map();
        for (const [r, o] of e) t(o, r) && n.set(r, o);
        return n;
      };
      var Jt = function (e, t) {
        const n = new Set();
        for (const r of e) t(r) && n.add(r);
        return n;
      };
      var Xt = function (e, t) {
        if (!e) throw new Error(t);
      };
      var Yt,
        Qt = function (...e) {
          const t = new Map();
          for (let n = 0; n < e.length; n++) {
            const r = e[n].keys();
            let o;
            for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
          }
          return t;
        };
      const en =
        null !== (Yt = o.useMutableSource) && void 0 !== Yt
          ? Yt
          : o.unstable_useMutableSource;
      var tn = {
        mutableSourceExists: function () {
          return (
            en &&
            !(
              "undefined" !== typeof window &&
              window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
            )
          );
        },
        useMutableSource: en,
      };
      var nn = function (e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      };
      const { useRef: rn } = o;
      var on = function () {
        return rn(), "<component name not available>";
      };
      const { batchUpdates: an } = ge,
        { DEFAULT_VALUE: sn, getNode: un, nodes: cn } = L,
        { useRecoilMutableSource: ln, useStoreRef: fn } = Zt,
        { isRecoilValue: dn } = T,
        {
          AbstractRecoilValue: hn,
          getRecoilValueAsLoadable: pn,
          setRecoilValue: vn,
          setRecoilValueLoadable: yn,
          setUnvalidatedRecoilValue: mn,
          subscribeToRecoilValue: gn,
        } = le,
        { updateRetainCount: _n } = Ze,
        { RetentionZone: bn } = O,
        { Snapshot: Sn, cloneSnapshot: wn } = bt,
        { setByAddingToSet: Tn } = s,
        { isSSR: An } = Je,
        { mutableSourceExists: Rn, useMutableSource: En } = tn,
        {
          useCallback: kn,
          useEffect: Nn,
          useMemo: Vn,
          useRef: Cn,
          useState: Mn,
        } = o,
        Ln = 12e4;
      function xn(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state) {
          throw new Promise((e) => {
            n.current.getState().suspendedComponentResolvers.add(e);
          });
        }
        throw "hasError" === e.state
          ? e.contents
          : new Error(`Invalid value of loadable atom "${t.key}"`);
      }
      function On(e) {
        return (
          f("recoil_memory_managament_2020") && jn(e),
          Rn()
            ? (function (e) {
                const t = fn(),
                  n = kn(() => {
                    const n = t.current,
                      r = n.getState().currentTree;
                    return pn(n, e, r);
                  }, [t, e]),
                  r = kn(() => n(), [n]),
                  o = on(),
                  a = kn(
                    (r, a) => {
                      const i = t.current;
                      return gn(
                        i,
                        e,
                        () => {
                          if (!f("recoil_suppress_rerender_in_callback"))
                            return a();
                          const e = n();
                          u.current.is(e) || a();
                        },
                        o
                      ).release;
                    },
                    [t, e, o, n]
                  ),
                  i = ln(),
                  s = En(i, r, a),
                  u = Cn(s);
                return (
                  Nn(() => {
                    u.current = s;
                  }),
                  s
                );
              })(e)
            : (function (e) {
                const t = fn(),
                  [n, r] = Mn([]),
                  o = on();
                Nn(() => {
                  const n = t.current,
                    a = n.getState(),
                    s = gn(
                      n,
                      e,
                      (t) => {
                        var o;
                        if (!f("recoil_suppress_rerender_in_callback"))
                          return r([]);
                        const a = pn(n, e, n.getState().currentTree);
                        (null === (o = i.current) || void 0 === o
                          ? void 0
                          : o.is(a)) || r(a);
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
                    if (!f("recoil_suppress_rerender_in_callback"))
                      return r([]);
                    const t = pn(n, e, n.getState().currentTree);
                    (null === (u = i.current) || void 0 === u
                      ? void 0
                      : u.is(t)) || r(t);
                  }
                  return s.release;
                }, [o, e, t]);
                const a = pn(t.current, e),
                  i = Cn(a);
                return (
                  Nn(() => {
                    i.current = a;
                  }),
                  a
                );
              })(e)
        );
      }
      function Dn(e) {
        const t = fn();
        return xn(On(e), e, t);
      }
      function Bn(e) {
        const t = fn();
        return kn(
          (n) => {
            vn(t.current, e, n);
          },
          [t, e]
        );
      }
      function Un(e) {
        const t = fn();
        Nn(() => t.current.subscribeToTransactions(e).release, [e, t]);
      }
      function Pn(e) {
        const t = e.atomValues.toMap(),
          n = Se(
            Kt(t, (e, t) => {
              const n = un(t).persistence_UNSTABLE;
              return null != n && "none" !== n.type && "hasValue" === e.state;
            }),
            (e) => e.contents
          );
        return Qt(e.nonvalidatedAtoms.toMap(), n);
      }
      function $n(e) {
        const t = Cn();
        return (
          Nn(() => {
            t.current = e;
          }),
          t.current
        );
      }
      function In() {
        const e = fn();
        return kn(
          (t) => {
            var n;
            const r = e.current.getState(),
              o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
              i = t.getStore_INTERNAL().getState().currentTree;
            an(() => {
              const n = new Set();
              for (const e of [o.atomValues.keys(), i.atomValues.keys()])
                for (const t of e) {
                  var r, s;
                  (null === (r = o.atomValues.get(t)) || void 0 === r
                    ? void 0
                    : r.contents) !==
                    (null === (s = i.atomValues.get(t)) || void 0 === s
                      ? void 0
                      : s.contents) &&
                    un(t).shouldRestoreFromSnapshots &&
                    n.add(t);
                }
              n.forEach((t) => {
                yn(
                  e.current,
                  new hn(t),
                  i.atomValues.has(t) ? a(i.atomValues.get(t)) : sn
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
      class Fn {}
      const zn = new Fn();
      function jn(e) {
        if (f("recoil_memory_managament_2020"))
          return (function (e) {
            const t = (Array.isArray(e) ? e : [e]).map((e) =>
                e instanceof bn ? e : e.key
              ),
              n = fn();
            Nn(() => {
              if (!f("recoil_memory_managament_2020")) return;
              const e = n.current;
              if (r.current && !An)
                window.clearTimeout(r.current), (r.current = null);
              else {
                i(
                  "Did not retain recoil value on render, or committed after timeout elapsed. This is fine, but odd."
                );
                for (const n of t) _n(e, n, 1);
              }
              return () => {
                for (const n of t) _n(e, n, -1);
              };
            }, [n, ...t]);
            const r = Cn(),
              o = $n(t);
            if (!An && (void 0 === o || !nn(o, t))) {
              const e = n.current;
              for (const n of t) _n(e, n, 1);
              if (o) for (const t of o) _n(e, t, -1);
              r.current && window.clearTimeout(r.current),
                (r.current = window.setTimeout(() => {
                  r.current = null;
                  for (const n of t) _n(e, n, -1);
                }, Ln));
            }
          })(e);
      }
      var Gn = {
        recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
        useGotoRecoilSnapshot: In,
        useRecoilCallback: function (e, t) {
          const n = fn(),
            r = In();
          return kn(
            (...t) => {
              function o(e, t) {
                vn(n.current, e, t);
              }
              function a(e) {
                vn(n.current, e, sn);
              }
              const i = wn(n.current);
              let s = zn;
              return (
                an(() => {
                  const n =
                    "useRecoilCallback expects a function that returns a function: it accepts a function of the type (RecoilInterface) => T = R and returns a callback function T => R, where RecoilInterface is an object {snapshot, set, ...} and T and R are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                  if ("function" !== typeof e) throw new Error(n);
                  const u = e({
                    set: o,
                    reset: a,
                    snapshot: i,
                    gotoSnapshot: r,
                  });
                  if ("function" !== typeof u) throw new Error(n);
                  s = u(...t);
                }),
                s instanceof Fn && Xt(!1),
                s
              );
            },
            null != t ? [...t, n] : void 0
          );
        },
        useRecoilInterface: function () {
          const e = fn(),
            [t, n] = Mn([]),
            r = Cn(new Set());
          r.current = new Set();
          const o = Cn(new Set()),
            a = Cn(new Map()),
            i = kn(
              (e) => {
                const t = a.current.get(e);
                t && (t.release(), a.current.delete(e));
              },
              [a]
            ),
            s = on();
          return (
            Nn(() => {
              const t = e.current;
              function u(e, t) {
                a.current.has(t) && n([]);
              }
              be(r.current, o.current).forEach((e) => {
                if (a.current.has(e))
                  return void h(`Double subscription to RecoilValue "${e}"`);
                const n = gn(
                  t,
                  new hn(e),
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
                be(o.current, r.current).forEach((e) => {
                  i(e);
                }),
                (o.current = r.current);
            }),
            Nn(() => {
              const e = a.current;
              return () => e.forEach((e, t) => i(t));
            }, [i]),
            Vn(() => {
              function t(t) {
                return (n) => {
                  vn(e.current, t, n);
                };
              }
              function n(t) {
                return (
                  r.current.has(t.key) || (r.current = Tn(r.current, t.key)),
                  pn(e.current, t)
                );
              }
              function o(t) {
                return xn(n(t), t, e);
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
                  return () => vn(e.current, t, sn);
                },
              };
            }, [r, e])
          );
        },
        useRecoilSnapshot: function () {
          const e = fn(),
            [t, n] = Mn(() => wn(e.current)),
            r = $n(t),
            o = Cn();
          return (
            Nn(
              () => (
                o.current && !An && window.clearTimeout(o.current), t.retain()
              ),
              [t]
            ),
            Un(kn((e) => n(wn(e)), [])),
            r === t ||
              An ||
              (o.current &&
                (null === r || void 0 === r || r.release(),
                window.clearTimeout(o.current)),
              t.retain(),
              (o.current = window.setTimeout(() => {
                t.release(), (o.current = null);
              }, Ln))),
            t
          );
        },
        useRecoilState: function (e) {
          return [Dn(e), Bn(e)];
        },
        useRecoilStateLoadable: function (e) {
          return [On(e), Bn(e)];
        },
        useRecoilTransactionObserver: function (e) {
          Un(
            kn(
              (t) => {
                const n = wn(t, "current"),
                  r = wn(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        useRecoilValue: Dn,
        useRecoilValueLoadable: On,
        useRetain: jn,
        useResetRecoilState: function (e) {
          const t = fn();
          return kn(() => {
            vn(t.current, e, sn);
          }, [t, e]);
        },
        useSetRecoilState: Bn,
        useSetUnvalidatedAtomValues: function () {
          const e = fn();
          return (t, n = {}) => {
            an(() => {
              e.current.addTransactionMetadata(n),
                t.forEach((t, n) => mn(e.current, new hn(n), t));
            });
          };
        },
        useTransactionObservation_DEPRECATED: function (e) {
          Un(
            kn(
              (t) => {
                let n = t.getState().previousTree;
                const r = t.getState().currentTree;
                n ||
                  (i(
                    "Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"
                  ),
                  (n = t.getState().currentTree));
                const o = Pn(r),
                  a = Pn(n),
                  s = Se(cn, (e) => {
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
                  u = Jt(r.dirtyAtoms, (e) => o.has(e) || a.has(e));
                e({
                  atomValues: o,
                  previousAtomValues: a,
                  atomInfo: s,
                  modifiedAtoms: u,
                  transactionMetadata: { ...r.transactionMetadata },
                });
              },
              [e]
            )
          );
        },
        useTransactionSubscription_DEPRECATED: Un,
      };
      const { peekNodeInfo: Wn } = W,
        { useStoreRef: qn } = Zt;
      var Hn = function () {
        const e = qn();
        return ({ key: t }) =>
          Wn(e.current, e.current.getState().currentTree, t);
      };
      const { RecoilRoot: Zn, useStoreRef: Kn } = Zt,
        { useMemo: Jn } = o;
      var Xn = function () {
        const e = Kn().current;
        return Jn(
          () =>
            function ({ children: t }) {
              return o.createElement(Zn, { store_INTERNAL: e }, t);
            },
          [e]
        );
      };
      var Yn = function (e) {
        return !!e && "function" === typeof e.then;
      };
      class Qn {}
      const er = new Qn(),
        tr = {
          getValue() {
            if ("loading" === this.state)
              throw this.contents.then(({ __value: e }) => e);
            if ("hasValue" !== this.state) throw this.contents;
            return this.contents;
          },
          toPromise() {
            return "hasValue" === this.state
              ? Promise.resolve(this.contents)
              : "hasError" === this.state
              ? Promise.reject(this.contents)
              : this.contents.then(({ __value: e }) => e);
          },
          valueMaybe() {
            return "hasValue" === this.state ? this.contents : void 0;
          },
          valueOrThrow() {
            if ("hasValue" !== this.state) {
              throw new Error(
                `Loadable expected value, but in "${this.state}" state`
              );
            }
            return this.contents;
          },
          errorMaybe() {
            return "hasError" === this.state ? this.contents : void 0;
          },
          errorOrThrow() {
            if ("hasError" !== this.state) {
              throw new Error(
                `Loadable expected error, but in "${this.state}" state`
              );
            }
            return this.contents;
          },
          promiseMaybe() {
            return "loading" === this.state
              ? this.contents.then(({ __value: e }) => e)
              : void 0;
          },
          promiseOrThrow() {
            if ("loading" !== this.state) {
              throw new Error(
                `Loadable expected promise, but in "${this.state}" state`
              );
            }
            return this.contents.then(({ __value: e }) => e);
          },
          is(e) {
            return e.state === this.state && e.contents === this.contents;
          },
          map(e) {
            if ("hasError" === this.state) return this;
            if ("hasValue" === this.state)
              try {
                const t = e(this.contents);
                return Yn(t) ? or(t) : nr(t);
              } catch (t) {
                return Yn(t) ? or(t.next(() => e(this.contents))) : rr(t);
              }
            if ("loading" === this.state)
              return or(
                this.contents.then(e).catch((t) => {
                  if (Yn(t)) return t.then(() => e(this.contents));
                  throw t;
                })
              );
            throw new Error("Invalid Loadable state");
          },
        };
      function nr(e) {
        return Object.freeze({ state: "hasValue", contents: e, ...tr });
      }
      function rr(e) {
        return Object.freeze({ state: "hasError", contents: e, ...tr });
      }
      function or(e) {
        return Object.freeze({ state: "loading", contents: e, ...tr });
      }
      var ar = {
        loadableWithValue: nr,
        loadableWithError: rr,
        loadableWithPromise: or,
        loadableLoading: function () {
          return or(new Promise(() => {}));
        },
        loadableAll: function (e) {
          return e.every((e) => "hasValue" === e.state)
            ? nr(e.map((e) => e.contents))
            : e.some((e) => "hasError" === e.state)
            ? rr(
                a(
                  e.find((e) => "hasError" === e.state),
                  "Invalid loadable passed to loadableAll"
                ).contents
              )
            : or(
                Promise.all(e.map((e) => e.contents)).then((e) => ({
                  __value: e,
                }))
              );
        },
        Canceled: Qn,
        CANCELED: er,
      };
      const { isReactNative: ir, isSSR: sr } = Je;
      function ur(e, t, n) {
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
        if (Yn(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return `[${e.map((e, n) => ur(e, t, n.toString()))}]`;
        if ("function" === typeof e.toJSON) return ur(e.toJSON(n), t, n);
        if (e instanceof Map) {
          const r = {};
          for (const [n, o] of e) r["string" === typeof n ? n : ur(n, t)] = o;
          return ur(r, t, n);
        }
        return e instanceof Set
          ? ur(
              Array.from(e).sort((e, n) => ur(e, t).localeCompare(ur(n, t))),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? ur(Array.from(e), t, n)
          : `{${Object.keys(e)
              .filter((t) => void 0 !== e[t])
              .sort()
              .map((n) => `${ur(n, t)}:${ur(e[n], t, n)}`)
              .join(",")}}`;
      }
      var cr = function (e, t = { allowFunctions: !1 }) {
        return ur(e, t);
      };
      const lr = (e, t, n) => {
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
          return lr(e.branches.get(o), t, n);
        },
        fr = (e, t, n, r, o, a) => {
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
                s.branches.set(c, fr(null, i, s, r, c, a));
            }
          else if (((s = e), t.length)) {
            const [n, ...o] = t,
              [i, s] = n;
            ("branch" !== e.type || e.nodeKey !== i) && Xt(!1),
              e.branches.set(s, fr(e.branches.get(s), o, e, r, s, a));
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
        dr = (e, t, n) =>
          n ? (n.branches.delete(t.branchKey), hr(e, n, n.parent)) : e === t,
        hr = (e, t, n) =>
          n
            ? (0 === t.branches.size && n.branches.delete(t.branchKey),
              hr(e, n, n.parent))
            : e === t,
        pr = (e) =>
          "leaf" === e.type
            ? 1
            : Array.from(e.branches.values()).reduce((e, t) => e + pr(t), 0);
      var vr = class {
          constructor(e) {
            var t, n, r;
            p(this, "_numLeafs", void 0),
              p(this, "_root", void 0),
              p(this, "_onHit", void 0),
              p(this, "_onSet", void 0),
              p(this, "_mapNodeValue", void 0),
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
            return lr(this.root(), (t) => this._mapNodeValue(e(t)), {
              onNodeVisit: (e) => {
                null === t || void 0 === t || t.onNodeVisit(e),
                  "leaf" === e.type && this._onHit(e);
              },
            });
          }
          set(e, t, n) {
            let r;
            const o = fr(
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
              this._onSet(a(r));
          }
          delete(e) {
            if (!this.root()) return !1;
            const t = a(this.root());
            return (
              !!dr(t, e, e.parent) &&
              (e === t || ("branch" === t.type && !t.branches.size)
                ? ((this._root = null), (this._numLeafs = 0), !0)
                : ((this._numLeafs -= pr(e)), !0))
            );
          }
          clear() {
            (this._numLeafs = 0), (this._root = null);
          }
        },
        yr = Object.freeze({ __proto__: null, TreeCache: vr });
      var mr = class {
          constructor(e) {
            var t;
            p(this, "_maxSize", void 0),
              p(this, "_size", void 0),
              p(this, "_head", void 0),
              p(this, "_tail", void 0),
              p(this, "_map", void 0),
              p(this, "_keyMapper", void 0),
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
            const n = a(this._map.get(t)),
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
        gr = Object.freeze({ __proto__: null, LRUCache: mr });
      const { LRUCache: _r } = gr,
        { TreeCache: br } = yr;
      var Sr = function (e, t = (e) => e) {
        const n = new _r({ maxSize: e }),
          r = new br({
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
      const { TreeCache: wr } = yr,
        Tr = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var Ar = function ({
        equality: e = Tr.equality,
        eviction: t = Tr.eviction,
        maxSize: n = Tr.maxSize,
      } = Tr) {
        return (function (e, t, n) {
          switch (e) {
            case "none":
              return new wr({ mapNodeValue: n });
            case "lru":
              return Sr(a(t), n);
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
                return (e) => cr(e);
            }
            throw new Error(`Unrecognized equality policy ${e}`);
          })(e)
        );
      };
      var Rr = {
        startPerfBlock: function (e) {
          return () => null;
        },
      };
      const {
          CANCELED: Er,
          Canceled: kr,
          loadableWithError: Nr,
          loadableWithPromise: Vr,
          loadableWithValue: Cr,
        } = ar,
        { getNodeLoadable: Mr, peekNodeLoadable: Lr, setNodeValue: xr } = W,
        { saveDependencyMapToStore: Or } = Te,
        {
          DEFAULT_VALUE: Dr,
          RecoilValueNotReady: Br,
          getConfigDeletionHandler: Ur,
          registerNode: Pr,
        } = L,
        { isRecoilValue: $r } = T,
        { AbstractRecoilValue: Ir } = T,
        { setRecoilValueLoadable: Fr } = le,
        { retainedByOptionWithDefault: zr } = Ze,
        { startPerfBlock: jr } = Rr,
        Gr = [],
        Wr = new Map(),
        qr = (() => {
          let e = 0;
          return () => e++;
        })();
      var Hr = function (e) {
        const { key: t, get: n, cachePolicy_UNSTABLE: r } = e,
          o = null != e.set ? e.set : void 0,
          s = Ar(
            null !== r && void 0 !== r
              ? r
              : { equality: "reference", eviction: "none" }
          ),
          u = zr(e.retainedBy_UNSTABLE),
          c = new Map();
        let l = 0;
        function d() {
          return !f("recoil_memory_managament_2020") || l > 0;
        }
        function h(e) {
          return (
            c.has(e) ||
              c.set(e, {
                depValuesDiscoveredSoFarDuringAsyncWork: null,
                latestLoadable: null,
                latestExecutionId: null,
                stateVersion: null,
              }),
            a(c.get(e))
          );
        }
        function p(e) {
          return (
            l++,
            e.getState().knownSelectors.add(t),
            () => {
              l--, e.getState().knownSelectors.delete(t), c.delete(e);
            }
          );
        }
        function v() {
          return void 0 !== Ur(t) && !d();
        }
        function y(e, t, n) {
          if ("loading" === t.state) {
            let t = Wr.get(n);
            null == t && Wr.set(n, (t = new Set())), t.add(e);
          }
        }
        function m(e, t, n) {
          if (t.atomValues.has(n)) return a(t.atomValues.get(n));
          const r = Mr(e, t, n),
            o = e.getState().knownSelectors.has(n);
          return "loading" !== r.state && o && t.atomValues.set(n, r), r;
        }
        function g(e, n, r, o, a) {
          return n
            .then((n) => {
              if (!d()) return N(e, a), Er;
              if (n instanceof kr)
                return i("Selector was released while it had dependencies"), Er;
              const { __key: o, __value: s } =
                null !== n && void 0 !== n ? n : {};
              let u = !0;
              null != o && (r.atomValues.set(o, Cr(s)), (u = !1));
              const [c, l] = S(e, r, a, u);
              if (
                (V(e, a) && k(l, e, a),
                C(c),
                "loading" !== c.state &&
                  (L(r, w(l), c), b(e, r, new Set(l.keys()), a), _(e, c, a)),
                "hasError" === c.state)
              )
                throw c.contents;
              return "hasValue" === c.state
                ? { __value: c.contents, __key: t }
                : c.contents;
            })
            .catch((t) => {
              if (!d()) return N(e, a), Er;
              const n = Nr(t);
              throw (
                (M(t),
                L(r, w(o), Nr(t)),
                b(e, r, new Set(o.keys()), a),
                _(e, n, a),
                t)
              );
            });
        }
        function _(e, n, r) {
          V(e, r) &&
            (E(n, e),
            (function (e, n) {
              const r = Wr.get(n);
              if (void 0 !== r) {
                for (const n of r) Fr(n, new Ir(t), e);
                Wr.delete(n);
              }
            })(n, r));
        }
        function b(e, n, r, o) {
          var a, i, s, u, c, l, f;
          (V(e, o) ||
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
            Or(
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
        function S(e, r, o, a = !1) {
          const i = jr(t);
          let s,
            u,
            c = !1;
          const l = new Map(),
            f = new Set();
          function h(t) {
            const { key: n } = t;
            !(function (e, t, n, r, o) {
              n.add(r), b(e, t, n, o);
            })(e, r, f, n, o);
            const i = a ? Mr(e, r, n) : m(e, r, n);
            if ((l.set(n, i), "hasValue" === i.state)) return i.contents;
            throw i.contents;
          }
          b(e, r, f, o);
          try {
            (s = n({ get: h })),
              (s = $r(s) ? h(s) : s),
              Yn(s)
                ? (s = (function (e, n, r, o, a) {
                    return n
                      .then((n) => {
                        if (!d()) return N(e, a), Er;
                        const i = Cr(n);
                        return (
                          M(n),
                          L(r, w(o), i),
                          b(e, r, new Set(o.keys()), a),
                          _(e, i, a),
                          { __value: n, __key: t }
                        );
                      })
                      .catch((t) => {
                        if (!d()) return N(e, a), Er;
                        if ((V(e, a) && k(o, e, a), Yn(t)))
                          return g(e, t, r, o, a);
                        const n = Nr(t);
                        throw (
                          (M(t),
                          L(r, w(o), n),
                          b(e, r, new Set(o.keys()), a),
                          _(e, n, a),
                          t)
                        );
                      });
                  })(e, s, r, l, o).finally(i))
                : i();
          } catch (p) {
            (s = p),
              Yn(s) ? (s = g(e, s, r, l, o).finally(i)) : ((c = !0), i());
          }
          return (u = c ? Nr(s) : Yn(s) ? Vr(s) : Cr(s)), C(u), [u, l];
        }
        function w(e) {
          return Array.from(e.entries()).map(([e, t]) => [e, t.contents]);
        }
        function T(e, t) {
          const n = qr(),
            [r, o] = S(e, t, n);
          return (
            E(r, e, o, n, t),
            (function (e, t, n) {
              "loading" !== n.state && L(e, t, n);
            })(t, w(o), r),
            y(e, r, n),
            r
          );
        }
        function A(e, n) {
          const r = (function (e, n) {
            const r = new Set(),
              o = h(e),
              a = s.get(
                (t) => ("string" !== typeof t && Xt(!1), m(e, n, t).contents),
                {
                  onNodeVisit: (e) => {
                    "branch" === e.type &&
                      e.nodeKey !== t &&
                      "string" === typeof e.nodeKey &&
                      r.add(e.nodeKey);
                  },
                }
              );
            return a && b(e, n, r, o.latestExecutionId), a;
          })(e, n);
          if (null != r) return E(r, e), r;
          const o = (function (e, t) {
            var n;
            const [, r] =
              null !==
                (n = Array.from(c.entries()).find(
                  ([, n]) =>
                    null != n.latestLoadable &&
                    null != n.latestExecutionId &&
                    !(function (e, t) {
                      var n, r;
                      const o = h(e),
                        a =
                          null !==
                            (n = o.depValuesDiscoveredSoFarDuringAsyncWork) &&
                          void 0 !== n
                            ? n
                            : new Map(),
                        i = Array(
                          (null !== (r = R.get(t.version)) && void 0 !== r
                            ? r
                            : new Map()
                          ).entries()
                        ),
                        s =
                          R.has(t.version) &&
                          i.length === a.size &&
                          i.every(([e, t]) => a.get(e) === t);
                      if (null == a || t.version === o.stateVersion || s)
                        return !1;
                      return (
                        R.set(t.version, new Map(a)),
                        Array.from(a).some(([n, r]) => {
                          const o = m(e, t, n);
                          return (
                            o.contents !== r.contents &&
                            !("loading" === r.state && "loading" !== o.state)
                          );
                        })
                      );
                    })(e, t)
                )) && void 0 !== n
                ? n
                : [];
            return r;
          })(e, n);
          if (o) {
            const t = o;
            return (
              y(e, a(t.latestLoadable), a(t.latestExecutionId)),
              a(t.latestLoadable)
            );
          }
          return T(e, n);
        }
        const R = new Map();
        function E(e, t, n, r, o) {
          const a = h(t);
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
        function k(e, t, n) {
          const r = h(t);
          V(t, n) && (r.depValuesDiscoveredSoFarDuringAsyncWork = e);
        }
        function N(e, t) {
          V(e, t) && c.delete(e);
        }
        function V(e, t) {
          return t === h(e).latestExecutionId;
        }
        function C(e) {
          "loading" !== e.state && M(e.contents);
        }
        function M(e) {
          0;
        }
        function L(e, n, r) {
          e.atomValues.set(t, r), s.set(n, r);
        }
        function x(e, t) {
          return s.get((n) => {
            "string" !== typeof n && Xt(!1);
            const r = Lr(e, t, n);
            return null === r || void 0 === r ? void 0 : r.contents;
          });
        }
        function O(e, n) {
          return (function (e) {
            if (Gr.includes(t)) {
              const e = `Recoil selector has circular dependencies: ${Gr.slice(
                Gr.indexOf(t)
              ).join(" \u2192 ")}`;
              return Nr(new Error(e));
            }
            Gr.push(t);
            try {
              return e();
            } finally {
              Gr.pop();
            }
          })(() => A(e, n));
        }
        function D(e) {
          e.atomValues.delete(t);
        }
        if (null != o) {
          return Pr({
            key: t,
            peek: x,
            get: O,
            set: function (e, t, n) {
              let r = !1;
              const a = new Map();
              function i({ key: n }) {
                if (r)
                  throw new Error(
                    "Recoil: Async selector sets are not currently supported."
                  );
                const o = m(e, t, n);
                if ("hasValue" === o.state) return o.contents;
                throw "loading" === o.state ? new Br(n) : o.contents;
              }
              function s(n, o) {
                if (r)
                  throw new Error(
                    "Recoil: Async selector sets are not currently supported."
                  );
                const s = "function" === typeof o ? o(i(n)) : o;
                xr(e, t, n.key, s).forEach((e, t) => a.set(t, e));
              }
              const u = o(
                {
                  set: s,
                  get: i,
                  reset: function (e) {
                    s(e, Dr);
                  },
                },
                n
              );
              if (void 0 !== u)
                throw Yn(u)
                  ? new Error(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : new Error(
                      "Recoil: selector set should be a void function."
                    );
              return (r = !0), a;
            },
            init: p,
            invalidate: D,
            shouldDeleteConfigOnRelease: v,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          });
        }
        return Pr({
          key: t,
          peek: x,
          get: O,
          init: p,
          invalidate: D,
          shouldDeleteConfigOnRelease: v,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        });
      };
      const {
          loadableWithError: Zr,
          loadableWithPromise: Kr,
          loadableWithValue: Jr,
        } = ar,
        {
          DEFAULT_VALUE: Xr,
          DefaultValue: Yr,
          getConfigDeletionHandler: Qr,
          registerNode: eo,
          setConfigDeletionHandler: to,
        } = L,
        { isRecoilValue: no } = T,
        {
          markRecoilValueModified: ro,
          setRecoilValue: oo,
          setRecoilValueLoadable: ao,
        } = le,
        { retainedByOptionWithDefault: io } = Ze;
      function so(e) {
        const { key: t, persistence_UNSTABLE: n } = e,
          r = io(e.retainedBy_UNSTABLE);
        let o,
          s = 0,
          u = Yn(e.default)
            ? Kr(
                e.default
                  .then((e) => {
                    u = Jr(e);
                    return { __key: t, __value: e };
                  })
                  .catch((e) => {
                    throw ((u = Zr(e)), e);
                  })
              )
            : Jr(e.default);
        const c = new Map();
        const l = eo({
          key: t,
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
            if (r.atomValues.has(t)) return a(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != o) return o;
              if (null == n)
                return (
                  h(
                    `Tried to restore a persisted value for atom ${t} but it has no persistence settings.`
                  ),
                  u
                );
              const e = r.nonvalidatedAtoms.get(t),
                a = n.validator(e, Xr),
                i = a instanceof Yr ? u : Jr(a);
              return (o = i), o;
            }
            return u;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              const e = a(n.atomValues.get(t));
              if ("hasValue" === e.state && r === e.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof Yr)
              return new Map();
            return (o = void 0), new Map().set(t, Jr(r));
          },
          init: function (n, r, o) {
            s++;
            const a = n.getState().knownAtoms.has(t);
            if ((n.getState().knownAtoms.add(t), "loading" === u.state)) {
              const e = () => {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || ro(n, l);
              };
              u.contents.then(e).catch(e);
            }
            let f = Xr,
              d = null;
            if (null != e.effects_UNSTABLE && !a) {
              let r = !0;
              const a = (e) => (t) => {
                  if (r) {
                    const e =
                      f instanceof Yr || Yn(f)
                        ? "hasValue" === u.state
                          ? u.contents
                          : Xr
                        : f;
                    f = "function" === typeof t ? t(e) : t;
                  } else {
                    if (Yn(t))
                      throw new Error(
                        "Setting atoms to async values is not implemented."
                      );
                    "function" !== typeof t && (d = { effect: e, value: t }),
                      oo(
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
                s = (e) => () => a(e)(Xr),
                p = (e) => (r) => {
                  n.subscribeToTransactions((n) => {
                    var o;
                    let { currentTree: a, previousTree: s } = n.getState();
                    s ||
                      (i(
                        "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                      ),
                      (s = a));
                    const c = a.atomValues.get(t);
                    if (null == c || "hasValue" === c.state) {
                      var l, f, h;
                      const n = null != c ? c.contents : Xr,
                        o =
                          null !== (l = s.atomValues.get(t)) && void 0 !== l
                            ? l
                            : u,
                        a = "hasValue" === o.state ? o.contents : Xr;
                      ((null === (f = d) || void 0 === f
                        ? void 0
                        : f.effect) === e &&
                        (null === (h = d) || void 0 === h
                          ? void 0
                          : h.value) === n) ||
                        r(n, a);
                    }
                    (null === (o = d) || void 0 === o ? void 0 : o.effect) ===
                      e && (d = null);
                  }, t);
                };
              for (const t of null !== (h = e.effects_UNSTABLE) && void 0 !== h
                ? h
                : []) {
                var h;
                const e = t({
                  node: l,
                  trigger: o,
                  setSelf: a(t),
                  resetSelf: s(t),
                  onSet: p(t),
                });
                null != e && c.set(n, e);
              }
              r = !1;
            }
            if (!(f instanceof Yr)) {
              var p;
              const e = Yn(f)
                ? Kr(
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
                              : a.contents) === r && oo(e, l, n),
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
                              : a.contents) === r && ao(e, l, Zr(n)),
                            n)
                          );
                        });
                      return r;
                    })(n, f)
                  )
                : Jr(f);
              r.atomValues.set(t, e),
                null === (p = n.getState().nextTree) ||
                  void 0 === p ||
                  p.atomValues.set(t, e);
            }
            return () => {
              var e;
              s--,
                null === (e = c.get(n)) || void 0 === e || e(),
                c.delete(n),
                n.getState().knownAtoms.delete(t);
            };
          },
          invalidate: function () {
            o = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== Qr(t) && s <= 0;
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
      function uo(e) {
        const { default: t, ...n } = e;
        return no(t)
          ? (function (e) {
              const t = uo({
                  ...e,
                  default: Xr,
                  persistence_UNSTABLE:
                    void 0 === e.persistence_UNSTABLE
                      ? void 0
                      : {
                          ...e.persistence_UNSTABLE,
                          validator: (t) =>
                            t instanceof Yr
                              ? t
                              : a(e.persistence_UNSTABLE).validator(t, Xr),
                        },
                  effects_UNSTABLE: e.effects_UNSTABLE,
                }),
                n = Hr({
                  key: `${e.key}__withFallback`,
                  get: ({ get: n }) => {
                    const r = n(t);
                    return r instanceof Yr ? e.default : r;
                  },
                  set: ({ set: e }, n) => e(t, n),
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return to(n.key, Qr(e.key)), n;
            })({ ...n, default: t })
          : so({ ...n, default: t });
      }
      var co = uo;
      var lo = class {
          constructor(e) {
            var t;
            p(this, "_map", void 0),
              p(this, "_keyMapper", void 0),
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
        fo = Object.freeze({ __proto__: null, MapCache: lo });
      const { LRUCache: ho } = gr,
        { MapCache: po } = fo,
        vo = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var yo = function ({
        equality: e = vo.equality,
        eviction: t = vo.eviction,
        maxSize: n = vo.maxSize,
      } = vo) {
        return (function (e, t, n) {
          switch (e) {
            case "none":
              return new po({ mapKey: n });
            case "lru":
              return new ho({ mapKey: n, maxSize: a(t) });
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
                return (e) => cr(e);
            }
            throw new Error(`Unrecognized equality policy ${e}`);
          })(e)
        );
      };
      const { setConfigDeletionHandler: mo } = L;
      let go = 0;
      var _o = function (e) {
        var t;
        const n = yo(
          null !== (t = e.cachePolicyForParams_UNSTABLE) && void 0 !== t
            ? t
            : { equality: "value", eviction: "none" }
        );
        return (t) => {
          var r;
          const o = n.get(t);
          if (null != o) return o;
          const a = `${e.key}__selectorFamily/${
              null !== (r = cr(t, { allowFunctions: !0 })) && void 0 !== r
                ? r
                : "void"
            }/${go++}`,
            i = (n) => e.get(t)(n),
            s = e.cachePolicy_UNSTABLE,
            u =
              "function" === typeof e.retainedBy_UNSTABLE
                ? e.retainedBy_UNSTABLE(t)
                : e.retainedBy_UNSTABLE;
          let c;
          if (null != e.set) {
            const n = e.set;
            c = Hr({
              key: a,
              get: i,
              set: (e, r) => n(t)(e, r),
              cachePolicy_UNSTABLE: s,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          } else
            c = Hr({
              key: a,
              get: i,
              cachePolicy_UNSTABLE: s,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          return (
            n.set(t, c),
            mo(c.key, () => {
              n.delete(t);
            }),
            c
          );
        };
      };
      const {
        DEFAULT_VALUE: bo,
        DefaultValue: So,
        setConfigDeletionHandler: wo,
      } = L;
      var To = function (e) {
        var t;
        const n = yo(
            null !== (t = e.cachePolicyForParams_UNSTABLE) && void 0 !== t
              ? t
              : { equality: "value", eviction: "none" }
          ),
          r = {
            key: e.key,
            default: bo,
            persistence_UNSTABLE: e.persistence_UNSTABLE,
          };
        let o;
        o = co(r);
        const a = _o({
          key: `${e.key}__atomFamily/Default`,
          get:
            (t) =>
            ({ get: n }) => {
              const r = n("function" === typeof o ? o(t) : o);
              return r instanceof So
                ? "function" === typeof e.default
                  ? e.default(t)
                  : e.default
                : r;
            },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          retainedBy_UNSTABLE: e.retainedBy_UNSTABLE,
        });
        return (t) => {
          var r;
          const o = n.get(t);
          if (null != o) return o;
          const { cachePolicyForParams_UNSTABLE: i, ...s } = e,
            u = co({
              ...s,
              key: `${e.key}__${
                null !== (r = cr(t)) && void 0 !== r ? r : "void"
              }`,
              default: a(t),
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
            n.set(t, u),
            wo(u.key, () => {
              n.delete(t);
            }),
            u
          );
        };
      };
      const Ao = _o({
        key: "__constant",
        get: (e) => () => e,
        cachePolicyForParams_UNSTABLE: { equality: "reference" },
      });
      var Ro = function (e) {
        return Ao(e);
      };
      const Eo = _o({
        key: "__error",
        get: (e) => () => {
          throw new Error(e);
        },
        cachePolicyForParams_UNSTABLE: { equality: "reference" },
      });
      var ko = function (e) {
        return Eo(e);
      };
      var No = function (e) {
        return e;
      };
      const {
        loadableWithError: Vo,
        loadableWithPromise: Co,
        loadableWithValue: Mo,
      } = ar;
      function Lo(e, t) {
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
      function xo(e) {
        return null != e && !Yn(e);
      }
      function Oo(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map((t) => e[t]);
      }
      function Do(e) {
        return null != e && "object" === typeof e && e.hasOwnProperty("__value")
          ? e.__value
          : e;
      }
      function Bo(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(
              (e, n, r) => ({ ...e, [n]: t[r] }),
              {}
            );
      }
      function Uo(e, t, n) {
        return Bo(
          e,
          n.map((e, n) => (null == e ? Mo(t[n]) : Yn(e) ? Co(e) : Vo(e)))
        );
      }
      var Po = {
        waitForNone: _o({
          key: "__waitForNone",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Oo(e),
                [r, o] = Lo(t, n);
              return Uo(e, r, o);
            },
        }),
        waitForAny: _o({
          key: "__waitForAny",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Oo(e),
                [r, o] = Lo(t, n);
              return o.some((e) => !Yn(e))
                ? Uo(e, r, o)
                : new Promise((t) => {
                    for (const [n, a] of o.entries())
                      Yn(a) &&
                        a
                          .then((a) => {
                            (r[n] = Do(a)), (o[n] = void 0), t(Uo(e, r, o));
                          })
                          .catch((a) => {
                            (o[n] = a), t(Uo(e, r, o));
                          });
                  });
            },
        }),
        waitForAll: _o({
          key: "__waitForAll",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Oo(e),
                [r, o] = Lo(t, n);
              if (o.every((e) => null == e)) return Bo(e, r);
              const a = o.find(xo);
              if (null != a) throw a;
              return Promise.all(o).then((t) => {
                return Bo(
                  e,
                  ((n = r),
                  (o = t),
                  o.map((e, t) => (void 0 === e ? n[t] : e))).map(Do)
                );
                var n, o;
              });
            },
        }),
        waitForAllSettled: _o({
          key: "__waitForAllSettled",
          get:
            (e) =>
            ({ get: t }) => {
              const n = Oo(e),
                [r, o] = Lo(t, n);
              return o.every((e) => !Yn(e))
                ? Uo(e, r, o)
                : Promise.all(
                    o.map((e, t) =>
                      Yn(e)
                        ? e
                            .then((e) => {
                              (r[t] = Do(e)), (o[t] = void 0);
                            })
                            .catch((e) => {
                              (r[t] = void 0), (o[t] = e);
                            })
                        : null
                    )
                  ).then(() => Uo(e, r, o));
            },
        }),
        noWait: _o({
          key: "__noWait",
          get:
            (e) =>
            ({ get: t }) => {
              try {
                return Mo(t(e));
              } catch (n) {
                return Yn(n) ? Co(n) : Vo(n);
              }
            },
        }),
      };
      const { batchUpdates: $o, setBatcher: Io } = ge,
        { DefaultValue: Fo } = L,
        { RecoilRoot: zo } = Zt,
        { isRecoilValue: jo } = T,
        { retentionZone: Go } = O,
        { freshSnapshot: Wo } = bt,
        {
          useGotoRecoilSnapshot: qo,
          useRecoilCallback: Ho,
          useRecoilSnapshot: Zo,
          useRecoilState: Ko,
          useRecoilStateLoadable: Jo,
          useRecoilTransactionObserver: Xo,
          useRecoilValue: Yo,
          useRecoilValueLoadable: Qo,
          useResetRecoilState: ea,
          useRetain: ta,
          useSetRecoilState: na,
          useSetUnvalidatedAtomValues: ra,
          useTransactionObservation_DEPRECATED: oa,
        } = Gn,
        {
          noWait: aa,
          waitForAll: ia,
          waitForAllSettled: sa,
          waitForAny: ua,
          waitForNone: ca,
        } = Po;
      var la = {
          DefaultValue: Fo,
          RecoilRoot: zo,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Xn,
          atom: co,
          selector: Hr,
          retentionZone: Go,
          atomFamily: To,
          selectorFamily: _o,
          constSelector: Ro,
          errorSelector: ko,
          readOnlySelector: No,
          useRecoilValue: Yo,
          useRecoilValueLoadable: Qo,
          useRecoilState: Ko,
          useRecoilStateLoadable: Jo,
          useSetRecoilState: na,
          useResetRecoilState: ea,
          useGetRecoilValueInfo_UNSTABLE: Hn,
          useRetain: ta,
          useRecoilCallback: Ho,
          useGotoRecoilSnapshot: qo,
          useRecoilSnapshot: Zo,
          useRecoilTransactionObserver_UNSTABLE: Xo,
          useTransactionObservation_UNSTABLE: oa,
          useSetUnvalidatedAtomValues_UNSTABLE: ra,
          noWait: aa,
          waitForNone: ca,
          waitForAny: ua,
          waitForAll: ia,
          waitForAllSettled: sa,
          isRecoilValue: jo,
          batchUpdates: $o,
          setBatcher: Io,
          snapshot_UNSTABLE: Wo,
        },
        fa = la.RecoilRoot,
        da = la.atom,
        ha = la.useRecoilValue,
        pa = la.useRecoilState,
        va = la.useSetRecoilState;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6363), t(2441);
    });
    var n = e.O();
    _N_E = n;
  },
]);
