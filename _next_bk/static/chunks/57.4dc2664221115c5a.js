"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [57],
  {
    8057: function (e, r, a) {
      a.r(r),
        a.d(r, {
          default: function () {
            return u;
          },
        });
      var t = a(7258),
        n = a(7294),
        s = a(6835),
        d = a(2804),
        c = a(4855),
        i = a(8006),
        l = function () {
          var e = d.sJ(c.oK),
            r = d.FV(c.mP),
            a = (0, s.Z)(r, 2),
            t = a[0],
            n = a[1];
          return {
            sender_character_data: (0, i.Wo)(e),
            sender_teacher_data: (0, i.Wl)(),
            selected: t,
            senderChangeHandler: function (e) {
              n(e.currentTarget.id);
            },
          };
        },
        h = a(1286),
        _ = a(789),
        m = n.lazy(function () {
          return Promise.all([a.e(351), a.e(256)]).then(a.bind(a, 9256));
        }),
        u = n.memo(function () {
          var e = l();
          return (0,
          t.tZ)("div", { css: o }, (0, t.tZ)(m, { src: e.sender_character_data.src, alt: e.sender_character_data.alt, title: e.sender_character_data.title, width: h.r.size.small, height: h.r.size.small, name: "message_sender", id: _._n.CHARACTER, checked: e.selected === _._n.CHARACTER, onChange: e.senderChangeHandler }), (0, t.tZ)("div", null), (0, t.tZ)(m, { src: e.sender_teacher_data.src, alt: e.sender_teacher_data.alt, title: e.sender_teacher_data.title, width: h.r.size.small, height: h.r.size.small, name: "message_sender", id: _._n.TEACHER, checked: e.selected === _._n.TEACHER, onChange: e.senderChangeHandler }));
        }),
        o = (0, t.iv)(
          "grid-area:senderPanel;display:grid;grid-template-columns:",
          h.r.size.medium,
          "px 1fr ",
          h.r.size.medium,
          'px;grid-template-rows:1fr;grid-template-areas:"senderCharacter" "free" "senderTeacher";justify-items:center;align-items:center;background-color:',
          h.r.color.accent,
          ";",
          "",
          ""
        );
    },
  },
]);
