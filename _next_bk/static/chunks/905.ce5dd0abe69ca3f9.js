"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    1905: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var i = n(7258),
        l = n(7294),
        r = n(6835),
        a = n(2804),
        o = n(2231),
        d = n(4855),
        c = n(789),
        s = function () {
          var e = a.sJ(d.Go),
            t = a.FV(d.Xs),
            n = (0, r.Z)(t, 2),
            i = n[0],
            l = n[1],
            s = a.sJ(d.GL),
            u = a.FV(d._D),
            b = (0, r.Z)(u, 2),
            h = b[0],
            f = b[1],
            p = a.sJ(d.oK),
            y = a.Zl(d.D7),
            k = a.Zl(d.z$);
          return {
            open: e,
            title: {
              reply: (0, o.vN)("reply"),
              kizuna: (0, o.vN)("kizuna"),
              download: (0, o.vN)("download"),
              clear: (0, o.vN)("clear"),
              delete: (0, o.vN)("delete"),
            },
            disable: {
              reply: !!h || 0 === Object.keys(p).length,
              kizuna: !!h || 0 === Object.keys(p).length,
              download: !!h || !!i || 0 === s.length,
              clear: 0 === s.length,
              delete: !h && 0 === s.length,
            },
            replyClickHandler: function () {
              var e = {
                sender: c._n.SYSTEM,
                character: p,
                messageType: c.C7.REPLY,
                body: [""],
                avatar: !0,
              };
              k(e);
            },
            kizunaClickHandler: function () {
              var e = {
                sender: c._n.SYSTEM,
                character: p,
                messageType: c.C7.KIZUNA,
                body: [""],
                avatar: !0,
              };
              k(e);
            },
            downloadClickHandler: function () {
              i || l(!0);
            },
            clearClickHandler: function () {
              y({ dialog: c.My.CLEAR, open: !0 });
            },
            deleteClickHandler: function () {
              f(!h);
            },
          };
        },
        u = n(1286),
        b = l.lazy(function () {
          return n.e(972).then(n.bind(n, 5972));
        }),
        h = l.lazy(function () {
          return n.e(676).then(n.bind(n, 3676));
        }),
        f = l.lazy(function () {
          return n.e(840).then(n.bind(n, 6840));
        }),
        p = l.lazy(function () {
          return n.e(35).then(n.bind(n, 2035));
        }),
        y = l.lazy(function () {
          return n.e(914).then(n.bind(n, 1914));
        }),
        k = l.memo(function () {
          var e = s();
          return (0,
          i.tZ)("div", { css: v(e.open) }, (0, i.tZ)("div", { css: g }), (0, i.tZ)("div", { css: g }, (0, i.tZ)("button", { type: "button", title: e.title.reply, disabled: e.disable.reply, onClick: e.replyClickHandler }, (0, i.tZ)(y, { width: 40, fill: u.r.color.accent }))), (0, i.tZ)("div", { css: g }, (0, i.tZ)("button", { type: "button", title: e.title.kizuna, disabled: e.disable.kizuna, onClick: e.kizunaClickHandler }, (0, i.tZ)(p, { width: 35, fill: u.r.color.accent }))), (0, i.tZ)("div", { css: g }, (0, i.tZ)("button", { type: "button", title: e.title.download, disabled: e.disable.download, onClick: e.downloadClickHandler }, (0, i.tZ)(b, { width: 40, fill: u.r.color.accent }))), (0, i.tZ)("div", { css: g }, (0, i.tZ)("button", { type: "button", title: e.title.clear, disabled: e.disable.clear, onClick: e.clearClickHandler }, (0, i.tZ)(h, { width: 40, fill: u.r.color.accent }))), (0, i.tZ)("div", { css: g }, (0, i.tZ)("button", { type: "button", title: e.title.delete, disabled: e.disable.delete, onClick: e.deleteClickHandler }, (0, i.tZ)(f, { width: 40, fill: u.r.color.accent }))));
        }),
        v = function (e) {
          return (0, i.iv)(
            "grid-area:messageControlPanel;display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr 1fr;justify-items:center;align-items:center;height:0;background-color:",
            u.r.color.base,
            ";border-top:2px solid ",
            u.r.color.border,
            ";overflow:hidden;>div{visibility:hidden;}transition:height 150ms ease;",
            e &&
              (0, i.iv)(
                "height:",
                2 * u.r.size.medium,
                "px;>div{visibility:visible;}",
                "",
                ""
              ),
            ";",
            "",
            ""
          );
        },
        g = (0, i.iv)(
          "width:100%;height:100%;>button{display:flex;justify-content:center;align-items:center;width:100%;height:62px;border:2px solid transparent;background-color:transparent;outline:none;transition:transform 50ms ease;&:focus-visible{border-color:",
          u.r.color.outline,
          ";}&:not(:disabled){&:active{transform:scale(0.95);}}&:disabled{opacity:0.25;}}",
          "",
          ""
        );
    },
  },
]);
