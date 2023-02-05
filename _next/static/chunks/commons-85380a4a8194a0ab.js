"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [351],
  {
    8e3: function (e, n, t) {
      var a;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AmpStateContext = void 0);
      var r = (
        (a = t(7294)) && a.__esModule ? a : { default: a }
      ).default.createContext({});
      n.AmpStateContext = r;
    },
    5646: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isInAmpMode = s),
        (n.useAmp = function () {
          return s(r.default.useContext(o.AmpStateContext));
        });
      var a,
        r = (a = t(7294)) && a.__esModule ? a : { default: a },
        o = t(8e3);
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.ampFirst,
          t = void 0 !== n && n,
          a = e.hybrid,
          r = void 0 !== a && a,
          o = e.hasQuery,
          s = void 0 !== o && o;
        return t || (r && s);
      }
    },
    2717: function (e, n, t) {
      var a = t(930);
      function r(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.defaultHead = l),
        (n.default = void 0);
      var o,
        s = (function (e) {
          if (e && e.__esModule) return e;
          var n = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var a =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                a.get || a.set ? Object.defineProperty(n, t, a) : (n[t] = e[t]);
              }
          return (n.default = e), n;
        })(t(7294)),
        h = (o = t(1585)) && o.__esModule ? o : { default: o },
        i = t(8e3),
        u = t(5850),
        c = t(5646);
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = [s.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            n.push(
              s.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          n
        );
      }
      function f(e, n) {
        return "string" === typeof n || "number" === typeof n
          ? e
          : n.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(n.props.children).reduce(function (
                e,
                n
              ) {
                return "string" === typeof n || "number" === typeof n
                  ? e
                  : e.concat(n);
              },
              [])
            )
          : e.concat(n);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(e, n) {
        return e
          .reduce(function (e, n) {
            var t = s.default.Children.toArray(n.props.children);
            return e.concat(t);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(n.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                n = new Set(),
                t = new Set(),
                a = {};
              return function (r) {
                var o = !0,
                  s = !1;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  s = !0;
                  var h = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(h) ? (o = !1) : e.add(h);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    n.has(r.type) ? (o = !1) : n.add(r.type);
                    break;
                  case "meta":
                    for (var i = 0, u = p.length; i < u; i++) {
                      var c = p[i];
                      if (r.props.hasOwnProperty(c))
                        if ("charSet" === c) t.has(c) ? (o = !1) : t.add(c);
                        else {
                          var l = r.props[c],
                            f = a[c] || new Set();
                          ("name" === c && s) || !f.has(l)
                            ? (f.add(l), (a[c] = f))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var o = e.key || t;
            if (
              !n.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (n) {
                return e.props.href.startsWith(n);
              })
            ) {
              var h = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? r(Object(t), !0).forEach(function (n) {
                        a(e, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : r(Object(t)).forEach(function (n) {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (h["data-href"] = h.href),
                (h.href = void 0),
                (h["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, h)
              );
            }
            return s.default.cloneElement(e, { key: o });
          });
      }
      var m = function (e) {
        var n = e.children,
          t = s.useContext(i.AmpStateContext),
          a = s.useContext(u.HeadManagerContext);
        return s.default.createElement(
          h.default,
          {
            reduceComponentsToState: d,
            headManager: a,
            inAmpMode: c.isInAmpMode(t),
          },
          n
        );
      };
      n.default = m;
    },
    1585: function (e, n, t) {
      var a = t(7980),
        r = t(3227),
        o = t(8361),
        s = (t(2191), t(5971)),
        h = t(2715),
        i = t(1193);
      function u(e) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            a = i(e);
          if (n) {
            var r = i(this).constructor;
            t = Reflect.construct(a, arguments, r);
          } else t = a.apply(this, arguments);
          return h(this, t);
        };
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var c = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var a =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              a.get || a.set ? Object.defineProperty(n, t, a) : (n[t] = e[t]);
            }
        return (n.default = e), n;
      })(t(7294));
      var l = (function (e) {
        s(t, e);
        var n = u(t);
        function t(e) {
          var o;
          return (
            r(this, t),
            ((o = n.call(this, e)).emitChange = function () {
              o._hasHeadManager &&
                o.props.headManager.updateHead(
                  o.props.reduceComponentsToState(
                    a(o.props.headManager.mountedInstances),
                    o.props
                  )
                );
            }),
            (o._hasHeadManager =
              o.props.headManager && o.props.headManager.mountedInstances),
            o
          );
        }
        return (
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.add(this),
                  this.emitChange();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.emitChange();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.delete(this),
                  this.emitChange();
              },
            },
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          t
        );
      })(c.Component);
      n.default = l;
    },
    8006: function (e, n, t) {
      t.d(n, {
        Wo: function () {
          return s;
        },
        Wl: function () {
          return h;
        },
        ux: function () {
          return i;
        },
      });
      var a = t(7812),
        r = t(789),
        o = t(2231),
        s = function (e) {
          var n = {
            src: "/images/system/dummy.svg",
            alt: (0, o.vN)("unknown"),
            title: (0, o.vN)("unknown"),
          };
          return (
            Object.keys(e).length > 0 &&
              ((n.src = "/images/character/".concat(e.img[e.imgIndex], ".png")),
              (n.alt = e.first_name),
              (n.title = e.first_name)),
            n
          );
        },
        h = function () {
          return {
            src: "/images/character/Peroro_Sama.png",
            alt: (0, o.vN)("peroro"),
            title: (0, o.vN)("teacher"),
          };
        },
        i = function (e, n) {
          var t = n.slice(0, n.length);
          return (0, a.Z)(
            t.sort(function (n, t) {
              var a = e.key === r.Y7.FIRST_NAME ? "first_name" : e.key,
                o = "",
                s = "";
              switch (a) {
                case "first_name":
                case "last_name":
                  (o = n.first_name.toUpperCase()),
                    (s = t.first_name.toUpperCase());
                  break;
                case "school":
                  (o = n.school.toUpperCase()), (s = t.school.toUpperCase());
                  break;
                case "club":
                  (o = n.club[0].toUpperCase()), (s = t.club[0].toUpperCase());
              }
              var h = n.last_name.toUpperCase(),
                i = t.last_name.toUpperCase();
              if (e.order === r.mX.ASC) {
                if (o < s) return -1;
                if (o > s) return 1;
                if (a === r.Y7.SCHOOL || a === r.Y7.CLUB) {
                  if (h < i) return -1;
                  if (h > i) return 1;
                }
                return 0;
              }
              if (o > s) return -1;
              if (o < s) return 1;
              if (a === r.Y7.SCHOOL || a === r.Y7.CLUB) {
                if (h > i) return -1;
                if (h < i) return 1;
              }
              return 0;
            })
          );
        };
    },
    2231: function (e, n, t) {
      t.d(n, {
        Rm: function () {
          return o;
        },
        iM: function () {
          return s;
        },
        vN: function () {
          return h;
        },
        Vi: function () {
          return i;
        },
      });
      var a = t(2804),
        r = t(4855),
        o = function () {
          var e = (function (e) {
              switch (e.toLowerCase()) {
                case "zh-tw":
                case "zh-hk":
                  e = "zh-Hant";
                  break;
                case "zh":
                case "zh-ch":
                  e = "zh-Hans";
              }
              return e;
            })(
              (window.navigator.languages && window.navigator.languages[0]) ||
                window.navigator.language
            ),
            n = t(6501).filter(function (n) {
              return n.code === e;
            });
          return 0 === n.length
            ? { code: "en", language: "english", display: "English" }
            : n[0];
        },
        s = function () {
          var e = a.sJ(r.Qy),
            n = t(2050);
          return "undefined" === typeof n[e.language]
            ? n.english
            : n[e.language];
        },
        h = function (e) {
          var n = a.sJ(r.Qy),
            o = t(1946);
          return 0 === Object.keys(n).length
            ? o[e].ja
            : o[e]
            ? o[e][n.code]
              ? o[e][n.code]
              : (console.error(
                  "This text does not support (text="
                    .concat(e, ", locale=")
                    .concat(n.code, ")")
                ),
                o[e].ja)
            : (console.error(
                "Translation text does not exist (text=".concat(e, ")")
              ),
              e);
        },
        i = function (e) {
          switch (e) {
            case "ja":
            case "en":
              return e;
            default:
              return "en";
          }
        };
    },
    9499: function (e, n, t) {
      function a(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
    4730: function (e, n, t) {
      function a(e, n) {
        if (null == e) return {};
        var t,
          a,
          r = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (t = o[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (t = o[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
    7812: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(2587);
      var r = t(2937);
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, a.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, r.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    2050: function (e) {
      e.exports = JSON.parse(
        '{"japanese":{"fontFamily":"Kosugi Maru","src":"/fonts/KosugiMaru-Regular.ttf","fontWeight":"400","fontStyle":"normal"},"english":{"fontFamily":"Nunito","src":"/fonts/Nunito-ExtraBold.ttf","fontWeight":"400","fontStyle":"normal"},"korean":{"fontFamily":"GyeonggiTitle","src":"/fonts/GyeonggiTitleMedium.ttf","fontWeight":"400","fontStyle":"normal"},"traditional_chinese":{"fontFamily":"Kosugi Maru","src":"/fonts/KosugiMaru-Regular.ttf","fontWeight":"400","fontStyle":"normal"},"simplified_chinese":{"fontFamily":"Kosugi Maru","src":"/fonts/KosugiMaru-Regular.ttf","fontWeight":"400","fontStyle":"normal"}}'
      );
    },
    6501: function (e) {
      e.exports = JSON.parse(
        '[{"code":"ja","language":"japanese","display":"\u65e5\u672c\u8a9e"},{"code":"en","language":"english","display":"English"},{"code":"ko","language":"korean","display":"\ud55c\uad6d\uc5b4"},{"code":"zh-hant","language":"traditional_chinese","display":"\u7e41\u9ad4\u4e2d\u6587"},{"code":"zh-hans","language":"simplified_chinese","display":"\u7b80\u4f53\u4e2d\u6587"}]'
      );
    },
    1946: function (e) {
      e.exports = JSON.parse(
        '{"asc":{"ja":"\u6607\u9806","en":"Ascending order","ko":"\uc624\ub984\ucc28\uc21c","zh-hant":"\u5347\u5e8f","zh-hans":"\u5347\u5e8f"},"cancel":{"ja":"\u30ad\u30e3\u30f3\u30bb\u30eb","en":"Cancel","ko":"\ucde8\uc18c","zh-hant":"\u53d6\u6d88","zh-hans":"\u53d6\u6d88"},"character":{"ja":"\u4eba\u7269","en":"Character","ko":"\uce90\ub9ad\ud130","zh-hant":"\u5b78\u751f","zh-hans":"\u5b66\u751f"},"clear":{"ja":"\u30af\u30ea\u30a2","en":"Clear","ko":"\ube44\uc6b0\uae30","zh-hant":"\u6e05\u9664","zh-hans":"\u6e05\u9664"},"clear_all_messages":{"ja":"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30af\u30ea\u30a2\u3057\u307e\u3059\u304b\uff1f","en":"Clear all messages?","ko":"\ubaa8\ub4e0 \uba54\uc2dc\uc9c0\ub97c \ube44\uc6b8\uae4c\uc694?","zh-hant":"\u6e05\u9664\u6240\u6709\u6d88\u606f\uff1f","zh-hans":"\u6e05\u9664\u6240\u6709\u6d88\u606f\uff1f"},"close":{"ja":"\u9589\u3058\u308b","en":"Close","ko":"\ub2eb\uae30","zh-hant":"\u95dc\u9589","zh-hans":"\u5173\u95ed"},"club":{"ja":"\u30af\u30e9\u30d6","en":"Club","ko":"\ub3d9\uc544\ub9ac","zh-hant":"\u793e\u5718","zh-hans":"\u793e\u56e2"},"copyright_notice":{"ja":"\u8457\u4f5c\u6a29\u8868\u793a","en":"Copyright notice","ko":"\uc800\uc791\uad8c","zh-hant":"\u7248\u6b0a\u8072\u660e","zh-hans":"\u7248\u6743\u58f0\u660e"},"contact":{"ja":"\u304a\u554f\u3044\u5408\u308f\u305b","en":"Contact","ko":"\ubb38\uc758","zh-hant":"\u806f\u7d61","zh-hans":"\u8054\u7edc"},"delete":{"ja":"\u524a\u9664","en":"Delete","ko":"\uc0ad\uc81c","zh-hant":"\u522a\u9664","zh-hans":"\u5220\u9664"},"delete_mode":{"ja":"\u524a\u9664\u30e2\u30fc\u30c9","en":"Delete mode","ko":"\uc0ad\uc81c \ubaa8\ub4dc","zh-hant":"\u522a\u9664\u6a21\u5f0f","zh-hans":"\u5220\u9664\u6a21\u5f0f"},"desc":{"ja":"\u964d\u9806","en":"Descending order","ko":"\ub0b4\ub9bc\ucc28\uc21c","zh-hant":"\u964d\u5e8f","zh-hans":"\u964d\u5e8f"},"download":{"ja":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","en":"Download","ko":"\ub2e4\uc6b4\ub85c\ub4dc","zh-hant":"\u4e0b\u8f09","zh-hans":"\u4e0b\u8f7d"},"dummy":{"ja":"\u30c0\u30df\u30fc","en":"Dummy","ko":"\ub354\ubbf8","zh-hant":"\u865b\u64ec\u4eba","zh-hans":"\u865a\u62df\u4eba"},"first_name":{"ja":"\u540d\u524d","en":"First name","ko":"\uc774\ub984","zh-hant":"\u540d","zh-hans":"\u540d"},"help":{"ja":"\u30d8\u30eb\u30d7","en":"Help","ko":"\ub3c4\uc6c0\ub9d0","zh-hant":"\u5e6b\u52a9","zh-hans":"\u5e2e\u52a9"},"kizuna":{"ja":"\u7d46","en":"Relationship","ko":"\uc778\uc5f0","zh-hant":"\u7f88\u7d46","zh-hans":"\u7f81\u7eca"},"kizuna_event":{"ja":"\u7d46\u30a4\u30d9\u30f3\u30c8","en":"Relationship Event","ko":"\uc778\uc5f0 \uc774\ubca4\ud2b8","zh-hant":"\u7f88\u7d46\u6d3b\u52d5","zh-hans":"\u7f81\u7eca\u6d3b\u52a8"},"image":{"ja":"\u753b\u50cf","en":"Image","ko":"\uc774\ubbf8\uc9c0","zh-hant":"\u5716\u50cf","zh-hans":"\u56fe\u50cf"},"language":{"ja":"\u8a00\u8a9e","en":"Language","ko":"\uc5b8\uc5b4","zh-hant":"\u8a9e\u8a00","zh-hans":"\u8bed\u8a00"},"last_name":{"ja":"\u540d\u5b57","en":"Last name","ko":"\uc131","zh-hant":"\u59d3","zh-hans":"\u59d3"},"mail":{"ja":"\u30e1\u30fc\u30eb","en":"Mail","ko":"\uba54\uc77c","zh-hant":"\u90f5\u4ef6","zh-hans":"\u90ae\u4ef6"},"meta_site_description":{"ja":"\u30e6\u30ba\u30c8\u30fc\u30af\u306f\u30e2\u30e2\u30c8\u30fc\u30af\u98a8\u30c8\u30fc\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3067\u3059\u3002","en":"YuzuTalk is a MomoTalk style talk generator.","ko":"YuzuTalk\uc740 MomoTalk \uc2a4\ud0c0\uc77c\uc758 \ub300\ud654 \uc0dd\uc131\uae30\uc785\ub2c8\ub2e4.","zh-hant":"YuzuTalk\u662fMomoTalk\u98a8\u683c\u7684\u5c0d\u8a71\u751f\u6210\u5668\u3002","zh-hans":"YuzuTalk\u662fMomoTalk\u98ce\u683c\u7684\u5bf9\u8bdd\u751f\u6210\u5668\u3002"},"name":{"ja":"\u540d\u524d","en":"Name","ko":"\uc774\ub984","zh-hant":"\u59d3\u540d","zh-hans":"\u59d3\u540d"},"news":{"ja":"\u304a\u77e5\u3089\u305b","en":"News","ko":"\uacf5\uc9c0\uc0ac\ud56d","zh-hant":"\u65b0\u805e","zh-hans":"\u65b0\u95fb"},"no":{"ja":"No","en":"No","ko":"\uc544\ub2c8\uc624","zh-hant":"No","zh-hans":"No"},"notification":{"ja":"\u901a\u77e5","en":"Notification","ko":"\uc54c\ub9bc","zh-hant":"\u901a\u77e5","zh-hans":"\u901a\u77e5"},"ok":{"ja":"OK","en":"OK","ko":"\ud655\uc778","zh-hant":"OK","zh-hans":"OK"},"open":{"ja":"\u958b\u304f","en":"Open","ko":"\uc5f4\uae30","zh-hant":"\u5c55\u958b","zh-hans":"\u5c55\u5f00"},"peroro":{"ja":"\u30da\u30ed\u30ed\u69d8","en":"Peroro-sama","ko":"\ud398\ub85c\ub85c\ub2d8","zh-hant":"\u4f69\u6d1b\u6d1b\u5927\u4eba","zh-hans":"\u4f69\u6d1b\u6d1b\u5927\u4eba"},"please_select_a_character":{"ja":"\u4eba\u7269\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002","en":"Please select a character.","ko":"\uce90\ub9ad\ud130\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.","zh-hant":"\u8acb\u9078\u64c7\u4e00\u4f4d\u5b78\u751f\u3002","zh-hans":"\u8bf7\u9009\u62e9\u4e00\u4f4d\u5b66\u751f\u3002"},"question":{"ja":"\u306f\u3066\u306a","en":"Question","ko":"\uc218\uc218\uaed8\ub07c","zh-hant":"\u554f\u984c","zh-hans":"\u95ee\u9898"},"search":{"ja":"\u691c\u7d22","en":"Search","ko":"\uac80\uc0c9","zh-hant":"\u641c\u7d22","zh-hans":"\u641c\u7d22"},"setting":{"ja":"\u8a2d\u5b9a","en":"Setting","ko":"\uc124\uc815","zh-hant":"\u8a2d\u5b9a","zh-hans":"\u8bbe\u7f6e"},"school":{"ja":"\u5b66\u6821","en":"School","ko":"\ud559\uad50","zh-hant":"\u5b66\u6821","zh-hans":"\u5b66\u6821"},"send":{"ja":"\u9001\u4fe1","en":"Send","ko":"\uc804\uc1a1","zh-hant":"\u767c\u9001","zh-hans":"\u53d1\u9001"},"reply":{"ja":"\u8fd4\u4fe1\u3059\u308b","en":"Reply","ko":"\ub2f5\uc7a5\ud558\uae30","zh-hant":"\u56de\u5fa9","zh-hans":"\u56de\u590d"},"sort":{"ja":"\u4e26\u3073\u66ff\u3048","en":"Sort","ko":"\uc815\ub82c","zh-hant":"\u6392\u5e8f","zh-hans":"\u6392\u5e8f"},"stamp":{"ja":"\u30b9\u30bf\u30f3\u30d7","en":"Stamp","ko":"\uc2a4\ud0ec\ud504","zh-hant":"\u8d34\u7eb8","zh-hans":"\u8d34\u7eb8"},"system_message":{"ja":"\u30b7\u30b9\u30c6\u30e0\u30e1\u30c3\u30bb\u30fc\u30b8","en":"System message","ko":"\uc2dc\uc2a4\ud15c \uba54\uc2dc\uc9c0","zh-hant":"\u7cfb\u7d71\u6d88\u606f","zh-hans":"\u7cfb\u7edf\u6d88\u606f"},"teacher":{"ja":"\u5148\u751f","en":"Teacher","ko":"\uc120\uc0dd","zh-hant":"\u8001\u5e2b","zh-hans":"\u8001\u5e08"},"terms_of_service":{"ja":"\u5229\u7528\u898f\u7d04","en":"Terms Of Service","ko":"\uc11c\ube44\uc2a4 \uc774\uc6a9\uc57d\uad00","zh-hant":"\u670d\u52d9\u689d\u6b3e","zh-hans":"\u670d\u52a1\u6761\u6b3e"},"to_kizuna_story":{"ja":"$value$\u306e\u7d46\u30b9\u30c8\u30fc\u30ea\u30fc\u3078","en":"To $value$\'s Relationship Story","ko":"$value$\uc758 \uc778\uc5f0 \uc2a4\ud1a0\ub9ac\ub85c","zh-hant":"\u524d\u5f80$value$\u7684\u7f88\u7d46\u5287\u60c5\u3002","zh-hans":"\u524d\u5f80$value$\u7684\u7f81\u7eca\u5267\u60c5\u3002"},"trash_can":{"ja":"\u30b4\u30df\u7bb1","en":"Trash can","ko":"\ud734\uc9c0\ud1b5","zh-hant":"\u5783\u573e\u7bb1","zh-hans":"\u5783\u573e\u7bb1"},"unknown":{"ja":"\u4e0d\u660e","en":"Unknown","ko":"\uc54c \uc218 \uc5c6\uc74c","zh-hant":"\u672a\u77e5","zh-hans":"\u672a\u77e5"},"yes":{"ja":"Yes","en":"Yes","ko":"\ub124","zh-hant":"Yes","zh-hans":"Yes"},"yuzu":{"ja":"\u67da\u5b50","en":"Yuzu","ko":"\uc720\uc988","zh-hant":"\u67da\u5b50","zh-hans":"\u67da\u5b50"}}'
      );
    },
  },
]);
