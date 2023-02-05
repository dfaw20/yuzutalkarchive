"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    707: function (e, r, i) {
      i.r(r);
      var t = i(7258),
        a = i(7294),
        n = i(1286),
        m = a.lazy(function () {
          return Promise.all([i.e(351), i.e(491)]).then(i.bind(i, 5491));
        }),
        l = a.lazy(function () {
          return Promise.all([i.e(351), i.e(378)]).then(i.bind(i, 7378));
        }),
        u = a.lazy(function () {
          return Promise.all([i.e(351), i.e(841)]).then(i.bind(i, 6841));
        }),
        s = a.lazy(function () {
          return i.e(269).then(i.bind(i, 269));
        }),
        d = a.memo(function () {
          return (0,
          t.tZ)("div", { css: p }, (0, t.tZ)(m, null), (0, t.tZ)(l, null), (0, t.tZ)(u, null), (0, t.tZ)(s, null));
        });
      r.default = d;
      var p = (0, t.iv)(
        "grid-area:listPage;display:grid;grid-template-columns:",
        n.r.size.medium,
        "px 1fr;grid-template-rows:",
        n.r.size.medium,
        "px ",
        n.r.size.medium,
        'px 1fr;grid-template-areas:"menubar sortPanel" "menubar searchPanel" "menubar characterList";overflow:hidden;@media screen and (max-width: ',
        n.r.layout.breakpointWidth,
        "px){grid-template-columns:1fr;grid-template-rows:",
        n.r.size.medium,
        "px ",
        n.r.size.medium,
        "px 1fr ",
        n.r.size.medium,
        'px;grid-template-areas:"sortPanel" "searchPanel" "characterList" "menubar";}@media screen and (max-width: ',
        n.r.layout.minimumBreakpointWidth,
        "px){grid-template-rows:",
        1.5 * n.r.size.medium,
        "px ",
        n.r.size.medium,
        "px 1fr ",
        n.r.size.medium,
        "px;}",
        "",
        ""
      );
    },
  },
]);
