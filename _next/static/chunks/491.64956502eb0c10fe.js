"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [491],
  {
    5491: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return f;
          },
        });
      var n = i(7258),
        r = i(7294),
        l = i(2804),
        o = i(2231),
        a = i(4855),
        s = i(789),
        c = function () {
          var t = l.Zl(a.D7),
            e = l.sJ(a.VI);
          return {
            title: {
              contact: (0, o.vN)("contact"),
              copyright: (0, o.vN)("copyright_notice"),
              tos: (0, o.vN)("terms_of_service"),
              setting: (0, o.vN)("setting"),
              news: (0, o.vN)("news"),
            },
            newsBadge: e,
            contactClickHandler: function () {
              window.open(
                "https://twitter.com/messages/compose?recipient_id=1390445620444291073&ref_src=twsrc%5Etfw",
                "_blank"
              );
            },
            githubClickHandler: function () {
              t({ dialog: s.My.GITHUB, open: !0 });
            },
            copyrightClickHandler: function () {
              t({ dialog: s.My.COPYRIGHT, open: !0 });
            },
            tosClickHandler: function () {
              t({ dialog: s.My.TERMS_OF_SERVICE, open: !0 });
            },
            settingClickHandler: function () {
              t({ dialog: s.My.SETTING, open: !0 });
            },
            newsClickHandler: function () {
              t({ dialog: s.My.NEWS, open: !0 });
            },
          };
        },
        d = i(1286);
      var u = r.lazy(function () {
          return i.e(436).then(i.bind(i, 3436));
        }),
        p = r.lazy(function () {
          return i.e(306).then(i.bind(i, 6306));
        }),
        g = r.lazy(function () {
          return i.e(622).then(i.bind(i, 2622));
        }),
        h = r.lazy(function () {
          return i.e(117).then(i.bind(i, 9117));
        }),
        m = r.lazy(function () {
          return i.e(837).then(i.bind(i, 1837));
        }),
        f = r.memo(function () {
          var t = c();
          return (0,
          n.tZ)("div", { css: b }, (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(), title: t.title.contact, onClick: t.contactClickHandler }, (0, n.tZ)(m, { width: d.r.size.extraSmall, height: d.r.size.extraSmall, fill: d.r.color.base }))), (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(), title: "GitHub", onClick: t.githubClickHandler }, (0, n.tZ)("img", { src: "/images/system/github.png", alt: "" }))), (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(), title: t.title.copyright, onClick: t.copyrightClickHandler }, (0, n.tZ)(h, { width: d.r.size.extraSmall, height: d.r.size.extraSmall, fill: d.r.color.base }))), (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(), title: t.title.tos, onClick: t.tosClickHandler }, (0, n.tZ)(g, { width: d.r.size.extraSmall, height: d.r.size.extraSmall, fill: d.r.color.base }))), (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(t.newsBadge), title: t.title.news, onClick: t.newsClickHandler }, (0, n.tZ)(p, { width: d.r.size.extraSmall, height: d.r.size.extraSmall, fill: d.r.color.base }))), (0, n.tZ)("div", { css: w }, (0, n.tZ)("button", { type: "button", css: y(), title: t.title.setting, onClick: t.settingClickHandler }, (0, n.tZ)(u, { width: d.r.size.extraSmall, height: d.r.size.extraSmall, fill: d.r.color.base }))));
        }),
        b = (0, n.iv)(
          "grid-area:menubar;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(6, ",
          d.r.size.medium,
          "px);justify-content:flex-end;align-content:flex-end;justify-items:center;align-items:center;background-color:",
          d.r.color.accent,
          ";width:100%;overflow:hidden;@media screen and (max-width: ",
          d.r.layout.breakpointWidth,
          "px){grid-template-columns:repeat(6, ",
          d.r.size.small,
          "px);grid-template-rows:1fr;}@media screen and (max-width: ",
          d.r.layout.minimumBreakpointWidth,
          "px){grid-template-columns:repeat(6, 42px);grid-template-rows:1fr;}",
          "",
          ""
        ),
        y = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, n.iv)(
            "display:flex;justify-content:center;align-items:center;background-color:transparent;border:2px solid transparent;width:100%;height:100%;outline:none;&:focus-visible{border-color:",
            d.r.color.outline,
            ";}transition:transform 50ms ease;&:active{transform:scale(0.95);}",
            t &&
              (0, n.iv)(
                'position:relative;&:before{display:block;content:"";position:absolute;top:5px;right:5px;width:10px;height:10px;border-radius:50%;background-color:',
                d.r.color.badge,
                ";}",
                "",
                ""
              ),
            ">img{width:",
            d.r.size.extraSmall,
            "px;height:",
            d.r.size.extraSmall,
            "px;}",
            "",
            ""
          );
        },
        w = {
          name: "e0j0on",
          styles:
            "display:flex;justify-content:center;align-items:center;width:100%;height:100%",
        };
    },
  },
]);
