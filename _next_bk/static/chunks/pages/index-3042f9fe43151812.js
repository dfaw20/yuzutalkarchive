(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    4442: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r,
        a = n(2209),
        i = n(159),
        u = n(7258),
        o = n(7294),
        c = n(9711),
        s = n(2804),
        l = n(4855),
        f = n(6037),
        d = function () {
          var e = s.FV(l.TL),
            t = (0, c.Z)(e, 2),
            n = t[0],
            r = t[1];
          return {
            swipe: n,
            swipeHandler: (0, f.useSwipeable)({
              onSwipedLeft: function () {
                r(!0);
              },
              onSwipedRight: function () {
                r(!1);
              },
              trackMouse: !0,
            }),
          };
        },
        m = n(1286);
      var p = o.lazy(function () {
          return n.e(707).then(n.bind(n, 707));
        }),
        h = o.lazy(function () {
          return n.e(939).then(n.bind(n, 8939));
        }),
        S = o.memo(function () {
          var e = d();
          return (0,
          u.tZ)("main", { css: g }, (0, u.tZ)("div", (0, i.Z)({ css: y(e.swipe) }, e.swipeHandler), (0, u.tZ)(p, null), (0, u.tZ)(h, null)));
        }),
        g = { name: "140s9x", styles: "grid-area:main;overflow:hidden" },
        v = (0, u.F4)(
          r ||
            (r = (0, a.Z)([
              "\n    100% {\n        visibility: hidden;\n    }\n",
            ]))
        ),
        y = function (e) {
          return (0, u.iv)(
            'width:100%;height:100%;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-template-areas:"listPage chatPage";background-color:lightsalmon;@media screen and (max-width: ',
            m.r.layout.breakpointWidth,
            "px){width:200%;transition:transform 150ms ease;",
            e &&
              (0, u.iv)(
                "transform:translateX(-50%);>div:nth-of-type(1){animation:",
                v,
                " 0ms linear 150ms 1 normal forwards;}",
                "",
                ""
              ),
            " ",
            !e &&
              (0, u.iv)(
                ">div:nth-of-type(2){animation:",
                v,
                " 0ms linear 150ms 1 normal forwards;}",
                "",
                ""
              ),
            ";}",
            "",
            ""
          );
        };
    },
    4855: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qy: function () {
          return i;
        },
        fP: function () {
          return u;
        },
        oK: function () {
          return o;
        },
        TL: function () {
          return c;
        },
        mP: function () {
          return s;
        },
        g6: function () {
          return l;
        },
        GL: function () {
          return f;
        },
        U9: function () {
          return d;
        },
        Go: function () {
          return m;
        },
        Xs: function () {
          return p;
        },
        dA: function () {
          return h;
        },
        _D: function () {
          return S;
        },
        c_: function () {
          return g;
        },
        z$: function () {
          return v;
        },
        dq: function () {
          return y;
        },
        D7: function () {
          return E;
        },
        Ki: function () {
          return k;
        },
        MK: function () {
          return T;
        },
        kL: function () {
          return w;
        },
        Bl: function () {
          return _;
        },
        VI: function () {
          return M;
        },
        NM: function () {
          return b;
        },
        WZ: function () {
          return A;
        },
        y9: function () {
          return L;
        },
      });
      var r = n(2804),
        a = n(789),
        i = (0, r.cn)({
          key: "LocaleState",
          default: {
            code: "ja",
            language: "japanese",
            display: "\u65e5\u672c\u8a9e",
          },
        }),
        u = (0, r.cn)({ key: "CharacterListState", default: [] }),
        o = (0, r.cn)({ key: "SelectCharacterState", default: {} }),
        c = (0, r.cn)({ key: "SwipeState", default: !1 }),
        s = (0, r.cn)({ key: "MessageSenderState", default: a._n.CHARACTER }),
        l = (0, r.cn)({ key: "InputMessageState", default: "" }),
        f = (0, r.cn)({ key: "MessageListState", default: [] }),
        d = (0, r.cn)({ key: "ImageLoadState", default: !1 }),
        m = (0, r.cn)({ key: "OpenMessageControlPanelState", default: !1 }),
        p = (0, r.cn)({ key: "DownloadingState", default: !1 }),
        h = (0, r.cn)({ key: "ImagingMagnificationState", default: 1 }),
        S = (0, r.cn)({ key: "DeleteModeState", default: !1 }),
        g = (0, r.cn)({ key: "DeleteMessageState", default: -1 }),
        v = (0, r.cn)({ key: "SendMessageState", default: {} }),
        y = (0, r.cn)({ key: "ToggleAvatarState", default: -1 }),
        E = (0, r.cn)({
          key: "OpenDialogState",
          default: { dialog: "", open: !1 },
        }),
        k = (0, r.cn)({
          key: "SortState",
          default: { key: a.Y7.FIRST_NAME, order: a.mX.ASC },
        }),
        T = (0, r.cn)({ key: "FrameCoverAnimationState", default: !1 }),
        w = (0, r.cn)({ key: "ClearAllMessagesState", default: !1 }),
        _ =
          ((0, r.cn)({ key: "TweetState", default: !1 }),
          (0, r.cn)({ key: "RenderRefState", default: {} })),
        M = (0, r.cn)({ key: "NewsBadgeState", default: !1 }),
        b = (0, r.cn)({ key: "NewsLatestDateState", default: "" }),
        A = (0, r.cn)({ key: "SearchTextState", default: "" }),
        L = (0, r.cn)({ key: "SystemMessageTypeState", default: "" });
    },
    1286: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return r;
        },
      });
      var r = {
        color: {
          base: "#FFFFFF",
          primary: "#ffdc42",
          primaryLight: "#FFF3C1",
          secondary: "#F3F7F8",
          secondaryDark: "#DCE5EC",
          accent: "#4C5B70",
          accentDark: "#252E37",
          accentLight: "#68788F",
          textBlack: "#555555",
          textBlackDark: "#444444",
          textGray: "#888888",
          border: "#E7EBEC",
          borderDark: "#d8d8d8",
          blue: "#3493F9",
          blueLight: "#77B7FB",
          blueDark: "#4A8ACA",
          messagePanel: "#f7f7f7",
          messageBox: "#e0e0e0",
          outline: "#ffb342",
          badge: "#ff0000",
          chat: "#fff7e1",
          pink: "#FFEDF1",
          pinkDark: "#FF92A4",
          heart: "#FFD1DB",
        },
        layout: {
          windowMaxWidth: 1440,
          breakpointWidth: 768,
          minimumBreakpointWidth: 359,
          margin: 16,
          maxMessageWidth: 18,
        },
        size: {
          extraLarge: 160,
          large: 128,
          medium: 64,
          small: 48,
          extraSmall: 32,
          xxSmall: 24,
          xxxSmall: 16,
          mag: 0.75,
          imagingBaseWidth: 500,
        },
        fontSize: {
          extraLarge: 24,
          large: 20,
          mediumPlus: 18,
          medium: 16,
          small: 12,
        },
        fontFamily: { system: "'M PLUS Rounded 1c', sans-serif" },
        count: { stampCount: 20 },
      };
    },
    789: function (e, t, n) {
      "use strict";
      n.d(t, {
        _n: function () {
          return r;
        },
        C7: function () {
          return a;
        },
        My: function () {
          return i;
        },
        Y7: function () {
          return u;
        },
        mX: function () {
          return o;
        },
        bD: function () {
          return c;
        },
        Uf: function () {
          return s;
        },
        yM: function () {
          return l;
        },
      });
      var r = {
          CHARACTER: "sender_character",
          TEACHER: "sender_teacher",
          SYSTEM: "sender_system",
        },
        a = {
          TEXT: "text",
          IMAGE: "image",
          KIZUNA: "kizuna",
          REPLY: "reply",
          SYSTEM: "system",
          STAMP: "stamp",
        },
        i = {
          SORT: "sort_dialog",
          SETTING: "setting_dialog",
          NEWS: "news_dialog",
          HELP: "help_dialog",
          CONTACT: "contact_dialog",
          CLEAR: "clear_dialog",
          TERMS_OF_SERVICE: "terms_of_service_dialog",
          COPYRIGHT: "copyright_dialog",
          SYSTEM_MESSAGE: "system_message_dialog",
          STAMP: "stamp_dialog",
          GITHUB: "github_dialog",
        },
        u = {
          FIRST_NAME: "name",
          LAST_NAME: "last_name",
          SCHOOL: "school",
          CLUB: "club",
        },
        o = { ASC: "asc", DESC: "desc" },
        c = { LOCAL: "localStorage", SESSION: "sessionStorage" },
        s = {
          LOCALE: "locale",
          SELECT_CHARACTER: "select_character",
          MESSAGE_LIST: "message_list",
          SWIPE: "swipe",
          MESSAGE_SENDER: "message_sender",
          IMAGING_MAGNIFICATION: "imaging_magnification",
          NEWS_LATEST_DATE: "news_latest_date",
        },
        l = { KIZUNA: "kizuna" };
    },
    5301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(4442);
        },
      ]);
    },
    6037: function (e, t, n) {
      !(function (e, t) {
        function n(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        }
                  );
                }
              }),
            (t.default = e),
            t
          );
        }
        var r = n(t);
        function a() {
          return (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var i = "Left",
          u = "Right",
          o = "Up",
          c = "Down",
          s = {
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0,
          },
          l = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
          f = "mousemove",
          d = "mouseup",
          m = "touchend",
          p = "touchmove",
          h = "touchstart";
        function S(e, t, n, r) {
          return e > t ? (n > 0 ? u : i) : r > 0 ? c : o;
        }
        function g(e, t) {
          if (0 === t) return e;
          var n = (Math.PI / 180) * t;
          return [
            e[0] * Math.cos(n) + e[1] * Math.sin(n),
            e[1] * Math.cos(n) - e[0] * Math.sin(n),
          ];
        }
        function v(e, t) {
          var n = function (t) {
              (t && "touches" in t && t.touches.length > 1) ||
                e(function (e, n) {
                  n.trackMouse &&
                    (document.addEventListener(f, r),
                    document.addEventListener(d, o));
                  var i = "touches" in t ? t.touches[0] : t,
                    u = g([i.clientX, i.clientY], n.rotationAngle);
                  return a({}, e, l, {
                    initial: [].concat(u),
                    xy: u,
                    start: t.timeStamp || 0,
                  });
                });
            },
            r = function (t) {
              e(function (e, n) {
                if ("touches" in t && t.touches.length > 1) return e;
                var r = "touches" in t ? t.touches[0] : t,
                  i = g([r.clientX, r.clientY], n.rotationAngle),
                  u = i[0],
                  o = i[1],
                  c = u - e.xy[0],
                  l = o - e.xy[1],
                  f = Math.abs(c),
                  d = Math.abs(l),
                  m = (t.timeStamp || 0) - e.start,
                  p = Math.sqrt(f * f + d * d) / (m || 1),
                  h = [c / (m || 1), l / (m || 1)],
                  v = S(f, d, c, l),
                  y =
                    "number" === typeof n.delta
                      ? n.delta
                      : n.delta[v.toLowerCase()] || s.delta;
                if (f < y && d < y && !e.swiping) return e;
                var E = {
                  absX: f,
                  absY: d,
                  deltaX: c,
                  deltaY: l,
                  dir: v,
                  event: t,
                  first: e.first,
                  initial: e.initial,
                  velocity: p,
                  vxvy: h,
                };
                E.first && n.onSwipeStart && n.onSwipeStart(E),
                  n.onSwiping && n.onSwiping(E);
                var k = !1;
                return (
                  (n.onSwiping || n.onSwiped || "onSwiped" + v in n) &&
                    (k = !0),
                  k &&
                    n.preventDefaultTouchmoveEvent &&
                    n.trackTouch &&
                    t.cancelable &&
                    t.preventDefault(),
                  a({}, e, { first: !1, eventData: E, swiping: !0 })
                );
              });
            },
            i = function (t) {
              e(function (e, n) {
                var r;
                if (e.swiping && e.eventData) {
                  (r = a({}, e.eventData, { event: t })),
                    n.onSwiped && n.onSwiped(r);
                  var i = n["onSwiped" + r.dir];
                  i && i(r);
                } else n.onTap && n.onTap({ event: t });
                return a({}, e, l, { eventData: r });
              });
            },
            u = function () {
              document.removeEventListener(f, r),
                document.removeEventListener(d, o);
            },
            o = function (e) {
              u(), i(e);
            },
            c = function (e, t) {
              var a = function () {};
              if (e && e.addEventListener) {
                var u = [
                  [h, n],
                  [p, r],
                  [m, i],
                ];
                u.forEach(function (n) {
                  var r = n[0],
                    a = n[1];
                  return e.addEventListener(r, a, { passive: t });
                }),
                  (a = function () {
                    return u.forEach(function (t) {
                      var n = t[0],
                        r = t[1];
                      return e.removeEventListener(n, r);
                    });
                  });
              }
              return a;
            },
            v = {
              ref: function (t) {
                null !== t &&
                  e(function (e, n) {
                    if (e.el === t) return e;
                    var r = {};
                    return (
                      e.el &&
                        e.el !== t &&
                        e.cleanUpTouch &&
                        (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                      n.trackTouch &&
                        t &&
                        (r.cleanUpTouch = c(
                          t,
                          !n.preventDefaultTouchmoveEvent
                        )),
                      a({}, e, { el: t }, r)
                    );
                  });
              },
            };
          return t.trackMouse && (v.onMouseDown = n), [v, c];
        }
        function y(e, t, n) {
          var r = {};
          return (
            !t.trackTouch && e.cleanUpTouch
              ? (e.cleanUpTouch(), (r.cleanUpTouch = void 0))
              : t.trackTouch &&
                !e.cleanUpTouch &&
                e.el &&
                (r.cleanUpTouch = n(e.el, !t.preventDefaultTouchmoveEvent)),
            a({}, e, r)
          );
        }
        function E(e) {
          var t = e.trackMouse,
            n = r.useRef(a({}, l)),
            i = r.useRef(a({}, s));
          i.current = a({}, s, e);
          var u = r.useMemo(
              function () {
                return v(
                  function (e) {
                    return (n.current = e(n.current, i.current));
                  },
                  { trackMouse: t }
                );
              },
              [t]
            ),
            o = u[0],
            c = u[1];
          return (n.current = y(n.current, i.current, c)), o;
        }
        (e.DOWN = c),
          (e.LEFT = i),
          (e.RIGHT = u),
          (e.UP = o),
          (e.useSwipeable = E);
      })(t, n(7294));
    },
    6586: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    159: function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    9711: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(6988);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                u = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(u = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  u = !0
                );
              } catch (c) {
                (o = !0), (a = c);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    2209: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    6988: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(6586);
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
