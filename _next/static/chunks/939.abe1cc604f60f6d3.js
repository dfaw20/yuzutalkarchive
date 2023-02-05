"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    8939: function (e, n, t) {
      t.r(n);
      var r = t(7258),
        l = t(7294),
        i = t(1286),
        a = l.lazy(function () {
          return Promise.all([t.e(351), t.e(716)]).then(t.bind(t, 8716));
        }),
        u = l.lazy(function () {
          return Promise.all([t.e(351), t.e(728)]).then(t.bind(t, 1728));
        }),
        o = l.lazy(function () {
          return Promise.all([t.e(351), t.e(57)]).then(t.bind(t, 8057));
        }),
        s = l.lazy(function () {
          return Promise.all([t.e(351), t.e(905)]).then(t.bind(t, 1905));
        }),
        m = function () {
          return (0, r.tZ)(
            "div",
            { css: c },
            (0, r.tZ)(a, null),
            (0, r.tZ)(u, null),
            (0, r.tZ)(s, null),
            (0, r.tZ)(o, null)
          );
        };
      n.default = l.memo(m);
      var c = (0, r.iv)(
        "grid-area:chatPage;display:grid;grid-template-columns:1fr;grid-template-rows:1fr minmax(",
        i.r.size.medium,
        "px, min-content) minmax(0, min-content) ",
        i.r.size.medium,
        'px;grid-template-areas:"chatList" "inputPanel" "messageControlPanel" "senderPanel";background-color:',
        i.r.color.base,
        ";overflow:hidden;",
        "",
        ""
      );
    },
  },
]);
