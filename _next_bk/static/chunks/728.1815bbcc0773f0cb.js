"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [728],
  {
    1728: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return k;
          },
        });
      var n = r(7258),
        i = r(7294),
        a = r(29),
        o = r(6835),
        l = r(7794),
        s = r.n(l),
        d = r(2804),
        c = r(4855),
        u = r(789),
        p = r(2231),
        m = function () {
          var e = d.FV(c.Go),
            t = (0, o.Z)(e, 2),
            r = t[0],
            n = t[1],
            l = d.FV(c.g6),
            m = (0, o.Z)(l, 2),
            g = m[0],
            b = m[1],
            x = d.sJ(c.oK),
            h = d.sJ(c.mP),
            v = d.sJ(c._D),
            y = d.Zl(c.z$),
            k = d.Zl(c.D7),
            z = i.useRef(null),
            w = (0, p.vN)("delete_mode"),
            C = {
              open: (0, p.vN)("open"),
              image: (0, p.vN)("image"),
              stamp: (0, p.vN)("stamp"),
              send: (0, p.vN)("send"),
            },
            Z = !!v || 0 === Object.keys(x).length,
            _ = !!v || 0 === Object.keys(x).length,
            S = !!v || 0 === Object.keys(x).length || !g,
            P = !!v,
            H = (function () {
              var e = (0, a.Z)(
                s().mark(function e(t) {
                  var r, n, i, a;
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null !== (r = t.currentTarget.files) &&
                            0 !== r.length &&
                            r[0].type.startsWith("image/")
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (n = r[0]),
                            (t.currentTarget.value = ""),
                            (e.next = 7),
                            f(n)
                          );
                        case 7:
                          (i = e.sent),
                            (a = {
                              sender: h,
                              character: x,
                              messageType: u.C7.IMAGE,
                              body: [i],
                              avatar: !0,
                            }),
                            y(a);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return {
            openMsgPanel: r,
            inputText: g,
            deleteMode: v,
            fileRef: z,
            text_delete_mode: w,
            title: C,
            image_disable: Z,
            send_disable: S,
            stamp_disable: _,
            textarea_disable: P,
            panelOpenClickHandler: function () {
              n(!r);
            },
            inputChangeHandler: function (e) {
              b(e.currentTarget.value);
            },
            sendClickHandler: function () {
              if (!S) {
                var e = {
                  sender: h,
                  character: x,
                  messageType: u.C7.TEXT,
                  body: [g],
                  avatar: !0,
                };
                y(e), b("");
              }
            },
            fileUploadHandler: H,
            imageClickHandler: function () {
              Z || (null !== z.current && z.current.click());
            },
            stampClickHandler: function () {
              k({ dialog: u.My.STAMP, open: !0 });
            },
          };
        },
        f = function (e) {
          var t = new FileReader();
          return new Promise(function (r, n) {
            (t.onload = function () {
              var e, n;
              r(
                null !==
                  (e =
                    null === (n = t.result) || void 0 === n
                      ? void 0
                      : n.toString()) && void 0 !== e
                  ? e
                  : ""
              );
            }),
              (t.onerror = function () {
                n(t.error);
              }),
              t.readAsDataURL(e);
          });
        },
        g = r(1286),
        b = i.lazy(function () {
          return Promise.all([r.e(351), r.e(653)]).then(r.bind(r, 3653));
        }),
        x = i.lazy(function () {
          return r.e(15).then(r.bind(r, 7015));
        }),
        h = i.lazy(function () {
          return r.e(942).then(r.bind(r, 2942));
        }),
        v = i.lazy(function () {
          return r.e(502).then(r.bind(r, 8502));
        }),
        y = function () {
          var e = m();
          return (0, n.tZ)(
            "div",
            { css: z },
            (0, n.tZ)(
              "div",
              { css: w },
              (0, n.tZ)(b, {
                color: g.r.color.messagePanel,
                backgroundColor: g.r.color.accent,
                pushed: e.openMsgPanel,
                title: e.title.open,
                onClick: e.panelOpenClickHandler,
              })
            ),
            (0, n.tZ)(
              "div",
              { css: w },
              (0, n.tZ)("input", {
                ref: e.fileRef,
                type: "file",
                accept: "image/*",
                "aria-label": e.title.image,
                onChange: e.fileUploadHandler,
              }),
              (0, n.tZ)(
                "button",
                {
                  type: "button",
                  css: C,
                  title: e.title.image,
                  disabled: e.image_disable,
                  onClick: e.imageClickHandler,
                },
                (0, n.tZ)(x, {
                  width: "".concat(g.r.size.extraSmall),
                  height: "".concat(g.r.size.extraSmall),
                  color: g.r.color.accent,
                })
              )
            ),
            (0, n.tZ)(
              "div",
              { css: Z },
              (0, n.tZ)(
                "div",
                { css: _, "aria-hidden": "true" },
                e.inputText + "\u200b"
              ),
              (0, n.tZ)("textarea", {
                className: "text",
                onChange: e.inputChangeHandler,
                autoCapitalize: "off",
                autoComplete: "off",
                placeholder: "Aa",
                spellCheck: "false",
                value: e.inputText,
                disabled: e.textarea_disable,
              }),
              (0, n.tZ)(
                "div",
                { css: w },
                (0, n.tZ)(
                  "button",
                  {
                    type: "button",
                    title: e.title.stamp,
                    disabled: e.stamp_disable,
                    onClick: e.stampClickHandler,
                    css: P,
                  },
                  (0, n.tZ)(v, {
                    height: "".concat(g.r.size.extraSmall - 4),
                    color: g.r.color.accent,
                  })
                )
              )
            ),
            (0, n.tZ)(
              "div",
              { css: w },
              (0, n.tZ)(
                "button",
                {
                  type: "button",
                  css: C,
                  title: e.title.send,
                  disabled: e.send_disable,
                  onClick: e.sendClickHandler,
                },
                (0, n.tZ)(h, {
                  width: "".concat(g.r.size.extraSmall),
                  height: "".concat(g.r.size.extraSmall),
                  color: g.r.color.accent,
                })
              )
            ),
            e.deleteMode &&
              (0, n.tZ)(
                "div",
                { css: S },
                (0, n.tZ)("span", { className: "text" }, e.text_delete_mode)
              )
          );
        },
        k = i.memo(y),
        z = (0, n.iv)(
          "grid-area:inputPanel;position:relative;display:grid;grid-template-columns:",
          g.r.size.medium,
          "px ",
          g.r.size.medium,
          "px 1fr ",
          g.r.size.medium,
          "px;grid-template-rows:1fr;align-items:flex-end;justify-items:center;background-color:",
          g.r.color.messagePanel,
          ";padding:",
          g.r.layout.margin,
          "px 0;@media screen and (max-width: ",
          g.r.layout.minimumBreakpointWidth,
          "px){grid-template-columns:",
          g.r.size.small,
          "px ",
          g.r.size.small,
          "px 1fr ",
          g.r.size.small,
          "px;}",
          "",
          ""
        ),
        w = (0, n.iv)(
          "display:flex;justify-content:center;align-items:center;width:",
          g.r.size.extraSmall,
          "px;height:",
          g.r.size.extraSmall,
          'px;input[type="file"]{display:none;}',
          "",
          ""
        ),
        C = (0, n.iv)(
          "display:flex;justify-content:center;align-items:center;background-color:transparent;border:2px solid transparent;outline:none;&:focus-visible{border:2px solid ",
          g.r.color.outline,
          ";}&:not(:disabled){transition:transform 50ms ease;&:active{transform:scale(0.95);}}&:disabled{opacity:0.25;}",
          "",
          ""
        ),
        Z = (0, n.iv)(
          "position:relative;display:grid;grid-template-columns:1fr ",
          g.r.size.extraSmall,
          'px;grid-template-rows:1fr;grid-template-areas:"textarea stamp";width:100%;min-height:',
          g.r.size.extraSmall,
          "px;max-height:",
          g.r.size.large,
          "px;background-color:",
          g.r.color.messageBox,
          ";border-radius:20px;overflow:hidden;font-size:",
          g.r.fontSize.mediumPlus,
          "px;>textarea{grid-area:textarea;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;border:2px solid transparent;border-top-left-radius:20px;border-bottom-left-radius:20px;background-color:",
          g.r.color.messageBox,
          ";font-size:inherit;letter-spacing:inherit;padding:0 ",
          g.r.layout.margin / 2,
          "px;padding-top:",
          (g.r.size.extraSmall - g.r.fontSize.mediumPlus) / 4,
          "px;resize:none;outline:none;&:focus-visible{border-color:",
          g.r.color.outline,
          ";}&:disabled{background-color:rgba(0, 0, 0, 0.25);}}",
          "",
          ""
        ),
        _ = (0, n.iv)(
          "grid-area:textarea;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;font-size:inherit;letter-spacing:inherit;padding:0 ",
          g.r.layout.margin / 2,
          "px;border:2px solid transparent;visibility:hidden;overflow:hidden;",
          "",
          ""
        ),
        S = (0, n.iv)(
          "position:absolute;display:flex;justify-content:center;align-items:center;grid-column:3/4;grid-row:1/2;top:0;right:0;bottom:0;left:0;margin:auto;background-color:rgba(0, 0, 0, 0.75);>span{color:",
          g.r.color.base,
          ";}",
          "",
          ""
        ),
        P = (0, n.iv)(
          "display:flex;justify-content:center;justify-self:center;align-items:center;align-self:flex-end;height:fit-content;width:fit-content;border:2px solid ",
          g.r.color.messageBox,
          ";border-radius:20px;background-color:",
          g.r.color.messageBox,
          ";outline:none;&:not(:disabled){transition:transform 50ms ease;&:focus-visible{border-color:",
          g.r.color.outline,
          ";}&:active{transform:scale(0.95);}}&:disabled{opacity:0.25;}",
          "",
          ""
        );
    },
    29: function (e, t, r) {
      function n(e, t, r, n, i, a, o) {
        try {
          var l = e[a](o),
            s = l.value;
        } catch (d) {
          return void r(d);
        }
        l.done ? t(s) : Promise.resolve(s).then(n, i);
      }
      function i(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (i, a) {
            var o = e.apply(t, r);
            function l(e) {
              n(o, i, a, l, s, "next", e);
            }
            function s(e) {
              n(o, i, a, l, s, "throw", e);
            }
            l(void 0);
          });
        };
      }
      r.d(t, {
        Z: function () {
          return i;
        },
      });
    },
  },
]);
