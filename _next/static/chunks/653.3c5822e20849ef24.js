"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [653],
  {
    3653: function (o, r, t) {
      t.r(r);
      var e = t(6864),
        n = t(4730),
        a = t(7258),
        s = t(7294),
        i = t(1286),
        u = ["backgroundColor", "color", "pushed"];
      var c = s.memo(function (o) {
        var r = o.backgroundColor,
          t = o.color,
          s = o.pushed,
          i = (0, n.Z)(o, u);
        return (0,
        a.tZ)("button", (0, e.Z)({ type: "button" }, i, { css: b(t, r, s) }));
      });
      r.default = c;
      var l = { name: "2gm7ac", styles: "transform:rotateZ(90deg)" },
        b = function (o, r, t) {
          return (0, a.iv)(
            "position:relative;width:100%;height:100%;background-color:",
            r,
            ";border:2px solid transparent;border-radius:50%;outline:none;&:focus-visible{border-color:",
            i.r.color.outline,
            ';}&:before,&:after{display:block;content:"";position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background-color:',
            o,
            ";}&:before{width:80%;height:4px;}&:after{width:4px;height:80%;transition:transform 200ms ease;",
            t && l,
            ";}transition:transform 50ms ease;&:active{transform:scale(0.95);}",
            "",
            ""
          );
        };
    },
  },
]);
