"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [67],
  {
    67: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return d;
          },
        });
      var r = i(7258),
        l = i(7294),
        a = i(2804),
        n = i(2231),
        o = i(4855),
        s = i(789),
        x = function () {
          var t = a.Zl(o.D7);
          return {
            title_header: (0, n.vN)("help"),
            questionClickHandler: function () {
              t({ dialog: s.My.HELP, open: !0 });
            },
          };
        },
        m = i(1286),
        p = l.lazy(function () {
          return i.e(400).then(i.bind(i, 2400));
        }),
        u = l.lazy(function () {
          return i.e(551).then(i.bind(i, 7551));
        }),
        d = l.memo(function () {
          var t = x();
          return (0,
          r.tZ)("div", { css: c }, (0, r.tZ)("div", null, (0, r.tZ)(p, { width: "100%", fill: m.r.color.base })), (0, r.tZ)("h2", null, (0, r.tZ)("span", { className: "text notranslate" }, "YuzuTalk")), (0, r.tZ)("button", { type: "button", css: h, title: t.title_header, onClick: t.questionClickHandler }, (0, r.tZ)(u, { width: "100%", fill: m.r.color.base })));
        }),
        c = (0, r.iv)(
          "position:absolute;left:",
          m.r.layout.margin,
          "px;bottom:",
          m.r.layout.margin,
          "px;display:grid;grid-template-columns:",
          m.r.size.extraSmall,
          "px max-content ",
          m.r.size.extraSmall,
          "px;grid-template-rows:1fr;align-items:center;>div{width:",
          m.r.size.extraSmall,
          "px;height:",
          m.r.size.extraSmall,
          "px;}>h2{margin:0 ",
          m.r.layout.margin / 2,
          "px;>span{color:",
          m.r.color.base,
          ";font-family:",
          m.r.fontFamily.system,
          ";font-size:",
          m.r.size.extraSmall,
          "px;}}@media screen and (max-width: ",
          m.r.layout.minimumBreakpointWidth,
          "px){left:",
          m.r.layout.margin / 2,
          "px;bottom:",
          (m.r.size.medium - m.r.size.xxSmall) / 2,
          "px;grid-template-columns:",
          m.r.size.xxSmall,
          "px max-content ",
          m.r.size.xxSmall,
          "px;>div{width:",
          m.r.size.xxSmall,
          "px;height:",
          m.r.size.xxSmall,
          "px;}>h2{>span{font-size:",
          m.r.size.xxSmall,
          "px;}}}",
          "",
          ""
        ),
        h = (0, r.iv)(
          "display:flex;justify-content:center;align-items:center;background-color:transparent;border:2px solid ",
          m.r.color.base,
          ";border-radius:5px;width:fit-content;height:fit-content;box-shadow:2px 2px 2px rgba(0, 0, 0, 0.25);outline:none;&:focus-visible{border-color:",
          m.r.color.outline,
          ";}transition:transform 50ms ease;&:active{transform:scale(0.95);}>svg{width:",
          m.r.size.extraSmall - 8,
          "px;height:",
          m.r.size.extraSmall - 8,
          "px;}@media screen and (max-width: ",
          m.r.layout.minimumBreakpointWidth,
          "px){>svg{width:",
          m.r.size.xxSmall - 8,
          "px;height:",
          m.r.size.xxSmall - 8,
          "px;}}",
          "",
          ""
        );
    },
  },
]);
