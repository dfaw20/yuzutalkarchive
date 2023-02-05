"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [28, 400],
  {
    2400: function (t, e, n) {
      n.r(e);
      var r = n(7294),
        i = n(7258),
        o = r.memo(function (t) {
          return (0,
          i.tZ)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: t.width, height: t.height }, (0, i.tZ)("g", null, (0, i.tZ)("g", { transform: "rotate(22.5 39.76 32.4) scale(.125)", opacity: "1", strokeWidth: "8" }, (0, i.tZ)("g", { strokeWidth: "8" }, (0, i.tZ)("path", { d: "M346.77 80.68c23.36-23.36 32.46-54.31 25.4-78.35-24.04-7.05-55 2.04-78.35 25.4-23.36 23.36-32.46 54.31-25.41 78.36 24.04 7.05 55-2.05 78.36-25.41z", fill: t.fill, strokeWidth: "8" }), (0, i.tZ)("path", { d: "M256 128.9c-105.79 0-191.55 85.77-191.55 191.55C64.45 426.24 150.22 512 256 512c105.79 0 191.55-85.76 191.55-191.55 0-105.78-85.76-191.55-191.55-191.55zM127.7 340.5a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm39.91-87.79a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm35.92 191.56a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm39.9-103.76a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm47.9-111.74a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm39.9 211.5a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9zm47.89-119.72a19.95 19.95 0 110-39.9 19.95 19.95 0 010 39.9z", fill: t.fill, strokeWidth: "8" })))));
        });
      e.default = o;
    },
    4028: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        });
      var r,
        i,
        o,
        a = n(1383),
        l = n(7258),
        s = n(7294),
        c = n(2804),
        f = n(4855),
        u = function () {
          var t = c.Zl(f.MK),
            e = 0,
            n = s.useRef(null),
            r = function () {
              e + 1 === 4 && t(!0), e++;
            };
          return (
            s.useEffect(function () {
              if (null !== n.current)
                return (
                  n.current.addEventListener("animationend", r),
                  function () {
                    null !== n.current &&
                      n.current.removeEventListener("animationend", r);
                  }
                );
            }, []),
            { coverRef: n }
          );
        },
        m = n(1286),
        d = n(2400),
        h = s.memo(function () {
          var t = u();
          return (0,
          l.tZ)("div", { ref: t.coverRef, css: v }, (0, l.tZ)("div", { css: z }, (0, l.tZ)(d.default, { fill: m.r.color.base, width: m.r.size.extraLarge, height: m.r.size.extraLarge }), (0, l.tZ)("h1", null, (0, l.tZ)("span", { className: "text notranslate" }, "YuzuTalk"))));
        }),
        p = (0, l.F4)(
          r ||
            (r = (0, a.Z)([
              "\n    0% {\n        opacity: 0.0;\n    }\n\n    100% {\n        opacity: 1.0;\n    }\n",
            ]))
        ),
        w = (0, l.F4)(
          i || (i = (0, a.Z)(["\n    100% {\n        top: -200%;\n    }\n"]))
        ),
        g = (0, l.F4)(o || (o = (0, a.Z)(["\n    100% {}\n"]))),
        v = (0, l.iv)(
          "position:fixed;top:0;right:0;bottom:0;left:0;max-width:",
          m.r.layout.windowMaxWidth,
          "px;width:100%;height:100%;margin:auto;background-color:",
          m.r.color.primary,
          ";animation:",
          w,
          " 150ms linear 1350ms 1 normal forwards,",
          g,
          " 500ms linear 1500ms 1 normal forwards;z-index:9999;",
          "",
          ""
        ),
        z = (0, l.iv)(
          "position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;opacity:0.0;animation:",
          p,
          " 350ms linear 500ms 1 normal forwards,",
          p,
          " 350ms linear 1000ms 1 reverse forwards;>h1{>span{color:",
          m.r.color.base,
          ";font-family:",
          m.r.fontFamily.system,
          ";font-size:",
          m.r.size.small,
          "px;font-weight:bold;}}",
          "",
          ""
        );
    },
    1383: function (t, e, n) {
      function r(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
