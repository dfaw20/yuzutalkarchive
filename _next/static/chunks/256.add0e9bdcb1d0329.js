"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [256],
  {
    9256: function (t, e, i) {
      i.r(e);
      var r = i(6864),
        o = i(4730),
        a = i(7258),
        n = i(7294),
        c = i(1286),
        l = ["src", "alt", "title", "width", "height"];
      var s = function (t) {
        var e = t.src,
          i = t.alt,
          n = (t.title, t.width),
          c = t.height,
          s = (0, o.Z)(t, l);
        return (0, a.tZ)(
          "div",
          { css: h(n, c) },
          (0, a.tZ)("input", (0, r.Z)({ type: "checkbox" }, s)),
          (0, a.tZ)(
            "label",
            { htmlFor: s.id, css: p },
            (0, a.tZ)("img", { src: e, alt: i })
          )
        );
      };
      e.default = n.memo(s);
      var h = function (t, e) {
          return (0, a.iv)(
            "position:relative;width:",
            t,
            "px;height:",
            e,
            'px;input[type="checkbox"]{opacity:0;appearance:none;position:absolute;&:checked+label{&:before{background-color:transparent;}}&:focus-visible+label{border-color:',
            c.r.color.outline,
            ";}}",
            "",
            ""
          );
        },
        p = {
          name: "bu8hxb",
          styles:
            'position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;border:2px solid transparent;border-radius:50%;cursor:pointer;&:before{display:block;content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);border-radius:50%;z-index:10;}>img{width:100%;height:100%;clip-path:circle(50% at 50% 50%);}',
        };
    },
  },
]);
