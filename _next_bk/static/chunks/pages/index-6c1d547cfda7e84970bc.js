(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    676: function (e, t, n) {
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
    2122: function (e, t, n) {
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
    4699: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2961);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var u, o = e[Symbol.iterator]();
                  !(r = (u = o.next()).done) &&
                  (n.push(u.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                (a = !0), (i = c);
              } finally {
                try {
                  r || null == o.return || o.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
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
    2465: function (e, t, n) {
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
    2961: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(676);
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
    7384: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(2465),
        a = n(2122),
        i = n(6369),
        u = n(7294),
        o = n(4699),
        c = n(2804),
        s = n(9048),
        f = n(6037),
        l = function () {
          var e = c.FV(s.TL),
            t = (0, o.Z)(e, 2),
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
        d = n(4971);
      function m() {
        var e = (0, r.Z)([
          "\n    100% {\n        visibility: hidden;\n    }\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var S = u.lazy(function () {
          return n.e(632).then(n.bind(n, 632));
        }),
        p = u.lazy(function () {
          return n.e(619).then(n.bind(n, 7619));
        }),
        h = u.memo(function () {
          var e = l();
          return (0,
          i.tZ)("main", { css: v }, (0, i.tZ)("div", (0, a.Z)({ css: y(e.swipe) }, e.swipeHandler), (0, i.tZ)(S, null), (0, i.tZ)(p, null)));
        }),
        v = { name: "140s9x", styles: "grid-area:main;overflow:hidden" },
        g = (0, i.F4)(m()),
        y = function (e) {
          return (0, i.iv)(
            'width:100%;height:100%;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-template-areas:"listPage chatPage";background-color:lightsalmon;@media screen and (max-width: ',
            d.r.layout.breakpointWidth,
            "px){width:200%;transition:transform 150ms ease;",
            e &&
              (0, i.iv)(
                "transform:translateX(-50%);>div:nth-of-type(1){animation:",
                g,
                " 0ms linear 150ms 1 normal forwards;}",
                "",
                ""
              ),
            " ",
            !e &&
              (0, i.iv)(
                ">div:nth-of-type(2){animation:",
                g,
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
    9048: function (e, t, n) {
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
          return f;
        },
        GL: function () {
          return l;
        },
        U9: function () {
          return d;
        },
        Go: function () {
          return m;
        },
        Xs: function () {
          return S;
        },
        dA: function () {
          return p;
        },
        _D: function () {
          return h;
        },
        c_: function () {
          return v;
        },
        z$: function () {
          return g;
        },
        dq: function () {
          return y;
        },
        D7: function () {
          return E;
        },
        Ki: function () {
          return T;
        },
        MK: function () {
          return k;
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
          return A;
        },
        WZ: function () {
          return b;
        },
        y9: function () {
          return L;
        },
      });
      var r = n(2804),
        a = n(2864),
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
        f = (0, r.cn)({ key: "InputMessageState", default: "" }),
        l = (0, r.cn)({ key: "MessageListState", default: [] }),
        d = (0, r.cn)({ key: "ImageLoadState", default: !1 }),
        m = (0, r.cn)({ key: "OpenMessageControlPanelState", default: !1 }),
        S = (0, r.cn)({ key: "DownloadingState", default: !1 }),
        p = (0, r.cn)({ key: "ImagingMagnificationState", default: 1 }),
        h = (0, r.cn)({ key: "DeleteModeState", default: !1 }),
        v = (0, r.cn)({ key: "DeleteMessageState", default: -1 }),
        g = (0, r.cn)({ key: "SendMessageState", default: {} }),
        y = (0, r.cn)({ key: "ToggleAvatarState", default: -1 }),
        E = (0, r.cn)({
          key: "OpenDialogState",
          default: { dialog: "", open: !1 },
        }),
        T = (0, r.cn)({
          key: "SortState",
          default: { key: a.Y7.FIRST_NAME, order: a.mX.ASC },
        }),
        k = (0, r.cn)({ key: "FrameCoverAnimationState", default: !1 }),
        w = (0, r.cn)({ key: "ClearAllMessagesState", default: !1 }),
        _ =
          ((0, r.cn)({ key: "TweetState", default: !1 }),
          (0, r.cn)({ key: "RenderRefState", default: {} })),
        M = (0, r.cn)({ key: "NewsBadgeState", default: !1 }),
        A = (0, r.cn)({ key: "NewsLatestDateState", default: "" }),
        b = (0, r.cn)({ key: "SearchTextState", default: "" }),
        L = (0, r.cn)({ key: "SystemMessageTypeState", default: "" });
    },
    4971: function (e, t, n) {
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
    2864: function (e, t, n) {
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
          return f;
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
        f = { KIZUNA: "kizuna" };
    },
    5301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(7384);
        },
      ]);
    },
    6037: function (e, t, n) {
      !(function (e, t) {
        function n() {
          return (n =
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
        var r = "Left",
          a = "Right",
          i = "Up",
          u = "Down",
          o = {
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0,
          },
          c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
          s = "mousemove",
          f = "mouseup",
          l = "touchend",
          d = "touchmove",
          m = "touchstart";
        function S(e, t, n, o) {
          return e > t ? (n > 0 ? a : r) : o > 0 ? u : i;
        }
        function p(e, t) {
          if (0 === t) return e;
          var n = (Math.PI / 180) * t;
          return [
            e[0] * Math.cos(n) + e[1] * Math.sin(n),
            e[1] * Math.cos(n) - e[0] * Math.sin(n),
          ];
        }
        function h(e, t) {
          var r = function (t) {
              (t && "touches" in t && t.touches.length > 1) ||
                e(function (e, r) {
                  r.trackMouse &&
                    (document.addEventListener(s, a),
                    document.addEventListener(f, o));
                  var i = "touches" in t ? t.touches[0] : t,
                    u = p([i.clientX, i.clientY], r.rotationAngle);
                  return n({}, e, c, {
                    initial: [].concat(u),
                    xy: u,
                    start: t.timeStamp || 0,
                  });
                });
            },
            a = function (t) {
              e(function (e, r) {
                if ("touches" in t && t.touches.length > 1) return e;
                var a = "touches" in t ? t.touches[0] : t,
                  i = p([a.clientX, a.clientY], r.rotationAngle),
                  u = i[0],
                  o = i[1],
                  c = u - e.xy[0],
                  s = o - e.xy[1],
                  f = Math.abs(c),
                  l = Math.abs(s),
                  d = (t.timeStamp || 0) - e.start,
                  m = Math.sqrt(f * f + l * l) / (d || 1),
                  h = [c / (d || 1), s / (d || 1)];
                if (f < r.delta && l < r.delta && !e.swiping) return e;
                var v = S(f, l, c, s),
                  g = {
                    absX: f,
                    absY: l,
                    deltaX: c,
                    deltaY: s,
                    dir: v,
                    event: t,
                    first: e.first,
                    initial: e.initial,
                    velocity: m,
                    vxvy: h,
                  };
                g.first && r.onSwipeStart && r.onSwipeStart(g),
                  r.onSwiping && r.onSwiping(g);
                var y = !1;
                return (
                  (r.onSwiping || r.onSwiped || "onSwiped" + v in r) &&
                    (y = !0),
                  y &&
                    r.preventDefaultTouchmoveEvent &&
                    r.trackTouch &&
                    t.cancelable &&
                    t.preventDefault(),
                  n({}, e, { first: !1, eventData: g, swiping: !0 })
                );
              });
            },
            i = function (t) {
              e(function (e, r) {
                var a;
                if (e.swiping && e.eventData) {
                  (a = n({}, e.eventData, { event: t })),
                    r.onSwiped && r.onSwiped(a);
                  var i = "onSwiped" + a.dir;
                  i in r && r[i](a);
                } else r.onTap && r.onTap({ event: t });
                return n({}, e, c, { eventData: a });
              });
            },
            u = function () {
              document.removeEventListener(s, a),
                document.removeEventListener(f, o);
            },
            o = function (e) {
              u(), i(e);
            },
            h = function (e, t) {
              var n = function () {};
              if (e && e.addEventListener) {
                var u = [
                  [m, r],
                  [d, a],
                  [l, i],
                ];
                u.forEach(function (n) {
                  var r = n[0],
                    a = n[1];
                  return e.addEventListener(r, a, { passive: t });
                }),
                  (n = function () {
                    return u.forEach(function (t) {
                      var n = t[0],
                        r = t[1];
                      return e.removeEventListener(n, r);
                    });
                  });
              }
              return n;
            },
            v = {
              ref: function (t) {
                null !== t &&
                  e(function (e, r) {
                    if (e.el === t) return e;
                    var a = {};
                    return (
                      e.el &&
                        e.el !== t &&
                        e.cleanUpTouch &&
                        (e.cleanUpTouch(), (a.cleanUpTouch = void 0)),
                      r.trackTouch &&
                        t &&
                        (a.cleanUpTouch = h(
                          t,
                          !r.preventDefaultTouchmoveEvent
                        )),
                      n({}, e, { el: t }, a)
                    );
                  });
              },
            };
          return t.trackMouse && (v.onMouseDown = r), [v, h];
        }
        function v(e, t, r) {
          var a = {};
          return (
            !t.trackTouch && e.cleanUpTouch
              ? (e.cleanUpTouch(), (a.cleanUpTouch = void 0))
              : t.trackTouch &&
                !e.cleanUpTouch &&
                e.el &&
                (a.cleanUpTouch = r(e.el, !t.preventDefaultTouchmoveEvent)),
            n({}, e, a)
          );
        }
        function g(e) {
          var r = e.trackMouse,
            a = t.useRef(n({}, c)),
            i = t.useRef(n({}, o));
          i.current = n({}, o, e);
          var u = t.useMemo(
              function () {
                return h(
                  function (e) {
                    return (a.current = e(a.current, i.current));
                  },
                  { trackMouse: r }
                );
              },
              [r]
            ),
            s = u[0],
            f = u[1];
          return (a.current = v(a.current, i.current, f)), s;
        }
        (e.DOWN = u),
          (e.LEFT = r),
          (e.RIGHT = a),
          (e.UP = i),
          (e.useSwipeable = g);
      })(t, n(7294));
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
