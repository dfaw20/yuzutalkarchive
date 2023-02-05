"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [841],
  {
    6841: function (r, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var o = t(7258),
        a = t(7294),
        n = t(6835),
        i = t(2804),
        l = t(4855),
        d = t(2231),
        c = function () {
          var r = i.FV(l.WZ),
            e = (0, n.Z)(r, 2),
            t = e[0],
            o = e[1];
          return {
            searchTextValue: t,
            text_search: (0, d.vN)("search"),
            text_clear: (0, d.vN)("clear"),
            textChangeHandler: function (r) {
              o(r.currentTarget.value);
            },
            clearClickHandler: function () {
              o("");
            },
          };
        },
        s = t(1286),
        u = a.memo(function () {
          var r = c();
          return (0,
          o.tZ)("div", { css: p }, (0, o.tZ)("input", { type: "text", placeholder: r.text_search, value: r.searchTextValue, onChange: r.textChangeHandler }), (0, o.tZ)("button", { type: "button", onClick: r.clearClickHandler }, (0, o.tZ)("span", { className: "text" }, r.text_clear)));
        }),
        p = (0, o.iv)(
          "grid-area:searchPanel;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;padding:",
          s.r.layout.margin,
          "px;background-color:",
          s.r.color.secondary,
          ";border-bottom:1px solid ",
          s.r.color.border,
          ';>input[type="text"]{width:100%;height:100%;border-top-left-radius:20px;border-bottom-left-radius:20px;border:2px solid ',
          s.r.color.secondaryDark,
          ";border-right:none;font-size:",
          s.r.fontSize.large,
          "px;padding:0 ",
          s.r.layout.margin / 2,
          "px;outline:none;&:focus-visible{border:2px solid ",
          s.r.color.outline,
          ";}}>button{background-color:",
          s.r.color.secondary,
          ";border-top-right-radius:20px;border-bottom-right-radius:20px;border:2px solid ",
          s.r.color.secondaryDark,
          ";border-left:none;font-size:",
          s.r.fontSize.medium,
          "px;padding:0 ",
          s.r.layout.margin / 2,
          "px;outline:none;transition:transform 50ms ease;&:focus-visible{border:2px solid ",
          s.r.color.outline,
          ";}&:active{transform:scale(0.95);}}",
          "",
          ""
        );
    },
  },
]);
