"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    8974: function (i, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var e = n(7258),
        r = n(7294),
        a = n(2804),
        p = n(4855),
        u = function (i) {
          var t = a.sJ(p.dA);
          return { imgMag: i ? t : 1 };
        },
        c = n(1286),
        h = function (i) {
          var t = u(i.virtual);
          return (0, e.tZ)(
            "div",
            { css: l(i.size, t.imgMag, i.virtual) },
            (0, e.tZ)("img", { src: i.src, alt: i.alt })
          );
        },
        d = r.memo(h),
        l = function (i, t, n) {
          return (0, e.iv)(
            "width:",
            i[0] * t,
            "px;height:",
            i[0] * t,
            "px;>img{width:100%;height:100%;clip-path:circle(\n      ",
            (i[0] * t) / 2,
            "px at ",
            (i[0] * t) / 2,
            "px\n        ",
            (i[0] * t) / 2,
            "px\n    );}@media screen and (max-width: ",
            c.r.layout.minimumBreakpointWidth,
            "px){",
            "undefined" !== typeof i[1] &&
              !n &&
              (0, e.iv)(
                "width:",
                i[1] * t,
                "px;height:",
                i[1] * t,
                "px;>img{clip-path:circle(\n          ",
                (i[1] / 2) * t,
                "px at ",
                (i[1] / 2) * t,
                "px\n            ",
                (i[1] / 2) * t,
                "px\n        );}",
                "",
                ""
              ),
            ";}",
            "",
            ""
          );
        };
    },
  },
]);
