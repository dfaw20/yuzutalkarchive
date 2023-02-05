(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [474],
  {
    8869: function (e) {
      "use strict";
      e.exports = function (e) {
        if (e) throw e;
      };
    },
    6851: function (e, n) {
      "use strict";
      (n.parse = function (e) {
        var n,
          t = [],
          r = String(e || ""),
          o = r.indexOf(","),
          i = 0,
          u = !1;
        for (; !u; )
          -1 === o && ((o = r.length), (u = !0)),
            (!(n = r.slice(i, o).trim()) && u) || t.push(n),
            (i = o + 1),
            (o = r.indexOf(",", i));
        return t;
      }),
        (n.stringify = function (e, n) {
          var t = n || {},
            r = !1 === t.padLeft ? "" : " ",
            o = t.padRight ? " " : "";
          "" === e[e.length - 1] && (e = e.concat(""));
          return e.join(o + "," + r).trim();
        });
    },
    4470: function (e) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        t = Object.prototype.toString,
        r = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = function (e) {
          return "function" === typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === t.call(e);
        },
        u = function (e) {
          if (!e || "[object Object]" !== t.call(e)) return !1;
          var r,
            o = n.call(e, "constructor"),
            i =
              e.constructor &&
              e.constructor.prototype &&
              n.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !o && !i) return !1;
          for (r in e);
          return "undefined" === typeof r || n.call(e, r);
        },
        l = function (e, n) {
          r && "__proto__" === n.name
            ? r(e, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0,
              })
            : (e[n.name] = n.newValue);
        },
        a = function (e, t) {
          if ("__proto__" === t) {
            if (!n.call(e, t)) return;
            if (o) return o(e, t).value;
          }
          return e[t];
        };
      e.exports = function e() {
        var n,
          t,
          r,
          o,
          c,
          s,
          f = arguments[0],
          p = 1,
          d = arguments.length,
          h = !1;
        for (
          "boolean" === typeof f &&
            ((h = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" !== typeof f && "function" !== typeof f)) &&
              (f = {});
          p < d;
          ++p
        )
          if (null != (n = arguments[p]))
            for (t in n)
              (r = a(f, t)),
                f !== (o = a(n, t)) &&
                  (h && o && (u(o) || (c = i(o)))
                    ? (c
                        ? ((c = !1), (s = r && i(r) ? r : []))
                        : (s = r && u(r) ? r : {}),
                      l(f, { name: t, newValue: e(h, s, o) }))
                    : "undefined" !== typeof o &&
                      l(f, { name: t, newValue: o }));
        return f;
      };
    },
    4842: function (e, n, t) {
      "use strict";
      t.d(n, {
        YM: function () {
          return W;
        },
      });
      var r = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      const o = "application/font-woff",
        i = "image/jpeg",
        u = {
          woff: o,
          woff2: o,
          ttf: "application/font-truetype",
          eot: "application/vnd.ms-fontobject",
          png: "image/png",
          jpg: i,
          jpeg: i,
          gif: "image/gif",
          tiff: "image/tiff",
          svg: "image/svg+xml",
        };
      function l(e) {
        const n = (function (e) {
          const n = /\.([^./]*?)$/g.exec(e);
          return n ? n[1] : "";
        })(e).toLowerCase();
        return u[n] || "";
      }
      function a(e) {
        return -1 !== e.search(/^(data:)/);
      }
      function c(e, n) {
        return `data:${n};base64,${e}`;
      }
      const s = (function () {
        let e = 0;
        return () => (
          (e += 1),
          `u${`0000${((Math.random() * Math.pow(36, 4)) << 0).toString(
            36
          )}`.slice(-4)}${e}`
        );
      })();
      function f(e) {
        const n = [];
        for (let t = 0, r = e.length; t < r; t += 1) n.push(e[t]);
        return n;
      }
      function p(e, n) {
        const t = window.getComputedStyle(e).getPropertyValue(n);
        return parseFloat(t.replace("px", ""));
      }
      function d(e) {
        return new Promise((n, t) => {
          const r = new Image();
          (r.onload = () => n(r)),
            (r.onerror = t),
            (r.crossOrigin = "anonymous"),
            (r.decoding = "sync"),
            (r.src = e);
        });
      }
      function h(e, n, t) {
        return r(this, void 0, void 0, function* () {
          const o = "http://www.w3.org/2000/svg",
            i = document.createElementNS(o, "svg"),
            u = document.createElementNS(o, "foreignObject");
          return (
            i.setAttribute("width", `${n}`),
            i.setAttribute("height", `${t}`),
            i.setAttribute("viewBox", `0 0 ${n} ${t}`),
            u.setAttribute("width", "100%"),
            u.setAttribute("height", "100%"),
            u.setAttribute("x", "0"),
            u.setAttribute("y", "0"),
            u.setAttribute("externalResourcesRequired", "true"),
            i.appendChild(u),
            u.appendChild(e),
            (function (e) {
              return r(this, void 0, void 0, function* () {
                return Promise.resolve()
                  .then(() => new XMLSerializer().serializeToString(e))
                  .then(encodeURIComponent)
                  .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
              });
            })(i)
          );
        });
      }
      const m = {};
      function g(e, n) {
        const t = (function (e) {
          let n = e.replace(/\?.*/, "");
          return (
            /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), n
          );
        })(e);
        if (null != m[t]) return m[t];
        n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
        const r = window
          .fetch(e)
          .then((e) =>
            e
              .blob()
              .then((n) => ({
                blob: n,
                contentType: e.headers.get("Content-Type") || "",
              }))
          )
          .then(
            ({ blob: e, contentType: n }) =>
              new Promise((t, r) => {
                const o = new FileReader();
                (o.onloadend = () => t({ contentType: n, blob: o.result })),
                  (o.onerror = r),
                  o.readAsDataURL(e);
              })
          )
          .then(({ blob: e, contentType: n }) => {
            return { contentType: n, blob: ((t = e), t.split(/,/)[1]) };
            var t;
          })
          .catch((t) => {
            let r = "";
            if (n.imagePlaceholder) {
              const e = n.imagePlaceholder.split(/,/);
              e && e[1] && (r = e[1]);
            }
            let o = `Failed to fetch resource: ${e}`;
            return (
              t && (o = "string" === typeof t ? t : t.message),
              o && console.error(o),
              { blob: r, contentType: "" }
            );
          });
        return (m[t] = r), r;
      }
      function v(e, n, t) {
        const r = `.${e}:${n}`,
          o = t.cssText
            ? (function (e) {
                const n = e.getPropertyValue("content");
                return `${e.cssText} content: '${n.replace(/'|"/g, "")}';`;
              })(t)
            : (function (e) {
                return f(e)
                  .map(
                    (n) =>
                      `${n}: ${e.getPropertyValue(n)}${
                        e.getPropertyPriority(n) ? " !important" : ""
                      };`
                  )
                  .join(" ");
              })(t);
        return document.createTextNode(`${r}{${o}}`);
      }
      function y(e, n, t) {
        const r = window.getComputedStyle(e, t),
          o = r.getPropertyValue("content");
        if ("" === o || "none" === o) return;
        const i = s();
        try {
          n.className = `${n.className} ${i}`;
        } catch (l) {
          return;
        }
        const u = document.createElement("style");
        u.appendChild(v(i, t, r)), n.appendChild(u);
      }
      var x = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      function k(e, n) {
        return x(this, void 0, void 0, function* () {
          return e instanceof HTMLCanvasElement
            ? (function (e) {
                return x(this, void 0, void 0, function* () {
                  const n = e.toDataURL();
                  return "data:," === n
                    ? Promise.resolve(e.cloneNode(!1))
                    : d(n);
                });
              })(e)
            : e instanceof HTMLVideoElement && e.poster
            ? (function (e, n) {
                return x(this, void 0, void 0, function* () {
                  return Promise.resolve(e.poster)
                    .then((e) => g(e, n))
                    .then((n) => c(n.blob, l(e.poster) || n.contentType))
                    .then((e) => d(e));
                });
              })(e, n)
            : Promise.resolve(e.cloneNode(!1));
        });
      }
      function b(e, n) {
        return x(this, void 0, void 0, function* () {
          return n instanceof Element
            ? Promise.resolve()
                .then(() =>
                  (function (e, n) {
                    const t = window.getComputedStyle(e),
                      r = n.style;
                    r &&
                      (t.cssText
                        ? (r.cssText = t.cssText)
                        : f(t).forEach((e) => {
                            r.setProperty(
                              e,
                              t.getPropertyValue(e),
                              t.getPropertyPriority(e)
                            );
                          }));
                  })(e, n)
                )
                .then(() =>
                  (function (e, n) {
                    y(e, n, ":before"), y(e, n, ":after");
                  })(e, n)
                )
                .then(() =>
                  (function (e, n) {
                    e instanceof HTMLTextAreaElement && (n.innerHTML = e.value),
                      e instanceof HTMLInputElement &&
                        n.setAttribute("value", e.value);
                  })(e, n)
                )
                .then(() => n)
            : Promise.resolve(n);
        });
      }
      function w(e, n, t) {
        return x(this, void 0, void 0, function* () {
          return t || !n.filter || n.filter(e)
            ? Promise.resolve(e)
                .then((e) => k(e, n))
                .then((t) =>
                  (function (e, n, t) {
                    var r;
                    return x(this, void 0, void 0, function* () {
                      const o =
                        null != (i = e).tagName &&
                        "SLOT" === i.tagName.toUpperCase() &&
                        e.assignedNodes
                          ? f(e.assignedNodes())
                          : f(
                              (null !== (r = e.shadowRoot) && void 0 !== r
                                ? r
                                : e
                              ).childNodes
                            );
                      var i;
                      return 0 === o.length || e instanceof HTMLVideoElement
                        ? Promise.resolve(n)
                        : o
                            .reduce(
                              (e, r) =>
                                e
                                  .then(() => w(r, t))
                                  .then((e) => {
                                    e && n.appendChild(e);
                                  }),
                              Promise.resolve()
                            )
                            .then(() => n);
                    });
                  })(e, t, n)
                )
                .then((n) => b(e, n))
            : Promise.resolve(null);
        });
      }
      var S = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      const E = /url\((['"]?)([^'"]+?)\1\)/g,
        C = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,
        P = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
      function T(e) {
        const n = [];
        return (
          e.replace(E, (e, t, r) => (n.push(r), e)), n.filter((e) => !a(e))
        );
      }
      function F(e, n, t, r, o) {
        const i = t
          ? (function (e, n) {
              if (e.match(/^[a-z]+:\/\//i)) return e;
              if (e.match(/^\/\//)) return window.location.protocol + e;
              if (e.match(/^[a-z]+:/i)) return e;
              const t = document.implementation.createHTMLDocument(),
                r = t.createElement("base"),
                o = t.createElement("a");
              return (
                t.head.appendChild(r),
                t.body.appendChild(o),
                n && (r.href = n),
                (o.href = e),
                o.href
              );
            })(n, t)
          : n;
        return Promise.resolve(i)
          .then((e) => (o ? o(e) : g(e, r)))
          .then((e) =>
            "string" === typeof e
              ? c(e, l(n))
              : c(e.blob, l(n) || e.contentType)
          )
          .then((t) =>
            e.replace(
              (function (e) {
                const n = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                return new RegExp(`(url\\(['"]?)(${n})(['"]?\\))`, "g");
              })(n),
              `$1${t}$3`
            )
          )
          .then(
            (e) => e,
            () => i
          );
      }
      function A(e) {
        return -1 !== e.search(E);
      }
      function O(e, n, t) {
        return S(this, void 0, void 0, function* () {
          if (!A(e)) return Promise.resolve(e);
          const r = (function (e, { preferredFontFormat: n }) {
            return n
              ? e.replace(P, (e) => {
                  for (;;) {
                    const [t, , r] = C.exec(e) || [];
                    if (!r) return "";
                    if (r === n) return `src: ${t};`;
                  }
                })
              : e;
          })(e, t);
          return Promise.resolve(r)
            .then(T)
            .then((e) =>
              e.reduce(
                (e, r) => e.then((e) => F(e, r, n, t)),
                Promise.resolve(r)
              )
            );
        });
      }
      var D = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      function L(e, n) {
        return D(this, void 0, void 0, function* () {
          return e instanceof Element
            ? Promise.resolve(e)
                .then((e) =>
                  (function (e, n) {
                    var t;
                    return D(this, void 0, void 0, function* () {
                      const r =
                        null === (t = e.style) || void 0 === t
                          ? void 0
                          : t.getPropertyValue("background");
                      return r
                        ? Promise.resolve(r)
                            .then((e) => O(e, null, n))
                            .then(
                              (n) => (
                                e.style.setProperty(
                                  "background",
                                  n,
                                  e.style.getPropertyPriority("background")
                                ),
                                e
                              )
                            )
                        : Promise.resolve(e);
                    });
                  })(e, n)
                )
                .then((e) =>
                  (function (e, n) {
                    return D(this, void 0, void 0, function* () {
                      if (
                        (!(e instanceof HTMLImageElement) || a(e.src)) &&
                        (!(e instanceof SVGImageElement) || a(e.href.baseVal))
                      )
                        return Promise.resolve(e);
                      const t =
                        e instanceof HTMLImageElement ? e.src : e.href.baseVal;
                      return Promise.resolve(t)
                        .then((e) => g(e, n))
                        .then((e) => c(e.blob, l(t) || e.contentType))
                        .then(
                          (n) =>
                            new Promise((t, r) => {
                              (e.onload = t),
                                (e.onerror = r),
                                e instanceof HTMLImageElement
                                  ? ((e.srcset = ""), (e.src = n))
                                  : (e.href.baseVal = n);
                            })
                        )
                        .then(
                          () => e,
                          () => e
                        );
                    });
                  })(e, n)
                )
                .then((e) =>
                  (function (e, n) {
                    return D(this, void 0, void 0, function* () {
                      const t = f(e.childNodes).map((e) => L(e, n));
                      return Promise.all(t).then(() => e);
                    });
                  })(e, n)
                )
            : Promise.resolve(e);
        });
      }
      var I = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      const M = {};
      function R(e) {
        const n = M[e];
        if (null != n) return n;
        const t = window.fetch(e).then((n) => ({ url: e, cssText: n.text() }));
        return (M[e] = t), t;
      }
      function z(e) {
        return I(this, void 0, void 0, function* () {
          return e.cssText.then((n) => {
            let t = n;
            const r = /url\(["']?([^"')]+)["']?\)/g,
              o = (t.match(/url\([^)]+\)/g) || []).map((n) => {
                let o = n.replace(r, "$1");
                return (
                  o.startsWith("https://") || (o = new URL(o, e.url).href),
                  window
                    .fetch(o)
                    .then((e) => e.blob())
                    .then(
                      (e) =>
                        new Promise((r, o) => {
                          const i = new FileReader();
                          (i.onloadend = () => {
                            (t = t.replace(n, `url(${i.result})`)),
                              r([n, i.result]);
                          }),
                            (i.onerror = o),
                            i.readAsDataURL(e);
                        })
                    )
                );
              });
            return Promise.all(o).then(() => t);
          });
        });
      }
      function B(e) {
        if (null == e) return [];
        const n = [];
        let t = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
        const r = new RegExp(
          "((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
          "gi"
        );
        for (;;) {
          const e = r.exec(t);
          if (null === e) break;
          n.push(e[0]);
        }
        t = t.replace(r, "");
        const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
          i = new RegExp(
            "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
            "gi"
          );
        for (;;) {
          let e = o.exec(t);
          if (null === e) {
            if (((e = i.exec(t)), null === e)) break;
            o.lastIndex = i.lastIndex;
          } else i.lastIndex = o.lastIndex;
          n.push(e[0]);
        }
        return n;
      }
      function _(e) {
        return e
          .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
          .filter((e) => A(e.style.getPropertyValue("src")));
      }
      function j(e) {
        return I(this, void 0, void 0, function* () {
          return new Promise((n, t) => {
            null == e.ownerDocument &&
              t(new Error("Provided element is not within a Document")),
              n(f(e.ownerDocument.styleSheets));
          })
            .then((e) =>
              (function (e) {
                return I(this, void 0, void 0, function* () {
                  const n = [],
                    t = [];
                  return (
                    e.forEach((n) => {
                      if ("cssRules" in n)
                        try {
                          f(n.cssRules).forEach((e, r) => {
                            if (e.type === CSSRule.IMPORT_RULE) {
                              let o = r + 1;
                              const i = R(e.href)
                                .then((e) => (e ? z(e) : ""))
                                .then((e) =>
                                  B(e).forEach((e) => {
                                    try {
                                      n.insertRule(
                                        e,
                                        e.startsWith("@import")
                                          ? (o += 1)
                                          : n.cssRules.length
                                      );
                                    } catch (t) {
                                      console.error(
                                        "Error inserting rule from remote css",
                                        { rule: e, error: t }
                                      );
                                    }
                                  })
                                )
                                .catch((e) => {
                                  console.error(
                                    "Error loading remote css",
                                    e.toString()
                                  );
                                });
                              t.push(i);
                            }
                          });
                        } catch (r) {
                          const o =
                            e.find((e) => null == e.href) ||
                            document.styleSheets[0];
                          null != n.href &&
                            t.push(
                              R(n.href)
                                .then((e) => (e ? z(e) : ""))
                                .then((e) =>
                                  B(e).forEach((e) => {
                                    o.insertRule(e, n.cssRules.length);
                                  })
                                )
                                .catch((e) => {
                                  console.error(
                                    "Error loading remote stylesheet",
                                    e.toString()
                                  );
                                })
                            ),
                            console.error(
                              "Error inlining remote css file",
                              r.toString()
                            );
                        }
                    }),
                    Promise.all(t).then(
                      () => (
                        e.forEach((e) => {
                          if ("cssRules" in e)
                            try {
                              f(e.cssRules).forEach((e) => {
                                n.push(e);
                              });
                            } catch (t) {
                              console.error(
                                `Error while reading CSS rules from ${e.href}`,
                                t.toString()
                              );
                            }
                        }),
                        n
                      )
                    )
                  );
                });
              })(e)
            )
            .then(_);
        });
      }
      function U(e, n) {
        return I(this, void 0, void 0, function* () {
          return (
            null != n.fontEmbedCSS
              ? Promise.resolve(n.fontEmbedCSS)
              : (function (e, n) {
                  return I(this, void 0, void 0, function* () {
                    return j(e)
                      .then((e) =>
                        Promise.all(
                          e.map((e) => {
                            const t = e.parentStyleSheet
                              ? e.parentStyleSheet.href
                              : null;
                            return O(e.cssText, t, n);
                          })
                        )
                      )
                      .then((e) => e.join("\n"));
                  });
                })(e, n)
          ).then((n) => {
            const t = document.createElement("style"),
              r = document.createTextNode(n);
            return (
              t.appendChild(r),
              e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t),
              e
            );
          });
        });
      }
      var H = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              a(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, l);
          }
          a((r = r.apply(e, n || [])).next());
        });
      };
      function N(e, n = {}) {
        const t =
            n.width ||
            (function (e) {
              const n = p(e, "border-left-width"),
                t = p(e, "border-right-width");
              return e.clientWidth + n + t;
            })(e),
          r =
            n.height ||
            (function (e) {
              const n = p(e, "border-top-width"),
                t = p(e, "border-bottom-width");
              return e.clientHeight + n + t;
            })(e);
        return { width: t, height: r };
      }
      function $(e, n = {}) {
        return H(this, void 0, void 0, function* () {
          const { width: t, height: r } = N(e, n);
          return Promise.resolve(e)
            .then((e) => w(e, n, !0))
            .then((e) => U(e, n))
            .then((e) => L(e, n))
            .then((e) =>
              (function (e, n) {
                const { style: t } = e;
                n.backgroundColor && (t.backgroundColor = n.backgroundColor),
                  n.width && (t.width = `${n.width}px`),
                  n.height && (t.height = `${n.height}px`);
                const r = n.style;
                return (
                  null != r &&
                    Object.keys(r).forEach((e) => {
                      t[e] = r[e];
                    }),
                  e
                );
              })(e, n)
            )
            .then((e) => h(e, t, r));
        });
      }
      const V = 16384;
      function q(e, n = {}) {
        return H(this, void 0, void 0, function* () {
          return $(e, n)
            .then(d)
            .then((t) => {
              const r = document.createElement("canvas"),
                o = r.getContext("2d"),
                i =
                  n.pixelRatio ||
                  (function () {
                    let e, n;
                    try {
                      n = process;
                    } catch (r) {}
                    const t = n && n.env ? n.env.devicePixelRatio : null;
                    return (
                      t && ((e = parseInt(t, 10)), Number.isNaN(e) && (e = 1)),
                      e || window.devicePixelRatio || 1
                    );
                  })(),
                { width: u, height: l } = N(e, n),
                a = n.canvasWidth || u,
                c = n.canvasHeight || l;
              return (
                (r.width = a * i),
                (r.height = c * i),
                n.skipAutoScale ||
                  (function (e) {
                    (e.width > V || e.height > V) &&
                      (e.width > V && e.height > V
                        ? e.width > e.height
                          ? ((e.height *= V / e.width), (e.width = V))
                          : ((e.width *= V / e.height), (e.height = V))
                        : e.width > V
                        ? ((e.height *= V / e.width), (e.width = V))
                        : ((e.width *= V / e.height), (e.height = V)));
                  })(r),
                (r.style.width = `${a}`),
                (r.style.height = `${c}`),
                n.backgroundColor &&
                  ((o.fillStyle = n.backgroundColor),
                  o.fillRect(0, 0, r.width, r.height)),
                o.drawImage(t, 0, 0, r.width, r.height),
                r
              );
            });
        });
      }
      function W(e, n = {}) {
        return H(this, void 0, void 0, function* () {
          return q(e, n).then((e) => e.toDataURL());
        });
      }
    },
    8139: function (e) {
      var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        t = /\n/g,
        r = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        a = /^\s+|\s+$/g,
        c = "";
      function s(e) {
        return e ? e.replace(a, c) : c;
      }
      e.exports = function (e, a) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        if (!e) return [];
        a = a || {};
        var f = 1,
          p = 1;
        function d(e) {
          var n = e.match(t);
          n && (f += n.length);
          var r = e.lastIndexOf("\n");
          p = ~r ? e.length - r : p + e.length;
        }
        function h() {
          var e = { line: f, column: p };
          return function (n) {
            return (n.position = new m(e)), x(), n;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: f, column: p }),
            (this.source = a.source);
        }
        m.prototype.content = e;
        var g = [];
        function v(n) {
          var t = new Error(a.source + ":" + f + ":" + p + ": " + n);
          if (
            ((t.reason = n),
            (t.filename = a.source),
            (t.line = f),
            (t.column = p),
            (t.source = e),
            !a.silent)
          )
            throw t;
          g.push(t);
        }
        function y(n) {
          var t = n.exec(e);
          if (t) {
            var r = t[0];
            return d(r), (e = e.slice(r.length)), t;
          }
        }
        function x() {
          y(r);
        }
        function k(e) {
          var n;
          for (e = e || []; (n = b()); ) !1 !== n && e.push(n);
          return e;
        }
        function b() {
          var n = h();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var t = 2;
              c != e.charAt(t) &&
              ("*" != e.charAt(t) || "/" != e.charAt(t + 1));

            )
              ++t;
            if (((t += 2), c === e.charAt(t - 1)))
              return v("End of comment missing");
            var r = e.slice(2, t - 2);
            return (
              (p += 2),
              d(r),
              (e = e.slice(t)),
              (p += 2),
              n({ type: "comment", comment: r })
            );
          }
        }
        function w() {
          var e = h(),
            t = y(o);
          if (t) {
            if ((b(), !y(i))) return v("property missing ':'");
            var r = y(u),
              a = e({
                type: "declaration",
                property: s(t[0].replace(n, c)),
                value: r ? s(r[0].replace(n, c)) : c,
              });
            return y(l), a;
          }
        }
        return (
          x(),
          (function () {
            var e,
              n = [];
            for (k(n); (e = w()); ) !1 !== e && (n.push(e), k(n));
            return n;
          })()
        );
      };
    },
    8738: function (e) {
      e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    3310: function (e) {
      "use strict";
      e.exports = (e) => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const n = Object.getPrototypeOf(e);
        return null === n || n === Object.prototype;
      };
    },
    6630: function (e, n, t) {
      "use strict";
      var r = t(2854);
      e.exports = function (e, n) {
        return (function (e) {
          return n;
          function n(n) {
            var t = n && i(n);
            return t && o.call(e, t) ? e[t] : null;
          }
        })(
          (function (e) {
            var n = {};
            if (!e || !e.type)
              throw new Error("mdast-util-definitions expected node");
            return r(e, "definition", t), n;
            function t(e) {
              var t = i(e.identifier);
              o.call(n, t) || (n[t] = e);
            }
          })(e)
        );
      };
      var o = {}.hasOwnProperty;
      function i(e) {
        return e.toUpperCase();
      }
    },
    2524: function (e, n, t) {
      "use strict";
      e.exports = function (e, n, t) {
        "string" !== typeof n && ((t = n), (n = void 0));
        return (function (e) {
          var n = e || {},
            t = (function (e, n) {
              var t = -1;
              for (; ++t < n.length; ) d(e, n[t]);
              return e;
            })(
              {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: v(pe),
                  autolinkProtocol: B,
                  autolinkEmail: B,
                  atxHeading: v(ae),
                  blockQuote: v(re),
                  characterEscape: B,
                  characterReference: B,
                  codeFenced: v(oe),
                  codeFencedFenceInfo: y,
                  codeFencedFenceMeta: y,
                  codeIndented: v(oe, y),
                  codeText: v(ie, y),
                  codeTextData: B,
                  data: B,
                  codeFlowValue: B,
                  definition: v(ue),
                  definitionDestinationString: y,
                  definitionLabelString: y,
                  definitionTitleString: y,
                  emphasis: v(le),
                  hardBreakEscape: v(ce),
                  hardBreakTrailing: v(ce),
                  htmlFlow: v(se, y),
                  htmlFlowData: B,
                  htmlText: v(se, y),
                  htmlTextData: B,
                  image: v(fe),
                  label: y,
                  link: v(pe),
                  listItem: v(he),
                  listItemValue: E,
                  listOrdered: v(de, S),
                  listUnordered: v(de),
                  paragraph: v(me),
                  reference: Z,
                  referenceString: y,
                  resourceDestinationString: y,
                  resourceTitleString: y,
                  setextHeading: v(ae),
                  strong: v(ge),
                  thematicBreak: v(ye),
                },
                exit: {
                  atxHeading: k(),
                  atxHeadingSequence: I,
                  autolink: k(),
                  autolinkEmail: te,
                  autolinkProtocol: ne,
                  blockQuote: k(),
                  characterEscapeValue: _,
                  characterReferenceMarkerHexadecimal: G,
                  characterReferenceMarkerNumeric: G,
                  characterReferenceValue: ee,
                  codeFenced: k(F),
                  codeFencedFence: T,
                  codeFencedFenceInfo: C,
                  codeFencedFenceMeta: P,
                  codeFlowValue: _,
                  codeIndented: k(A),
                  codeText: k($),
                  codeTextData: _,
                  data: _,
                  definition: k(),
                  definitionDestinationString: L,
                  definitionLabelString: O,
                  definitionTitleString: D,
                  emphasis: k(),
                  hardBreakEscape: k(U),
                  hardBreakTrailing: k(U),
                  htmlFlow: k(H),
                  htmlFlowData: _,
                  htmlText: k(N),
                  htmlTextData: _,
                  image: k(q),
                  label: X,
                  labelText: W,
                  lineEnding: j,
                  link: k(V),
                  listItem: k(),
                  listOrdered: k(),
                  listUnordered: k(),
                  paragraph: k(),
                  referenceString: J,
                  resourceDestinationString: Q,
                  resourceTitleString: K,
                  resource: Y,
                  setextHeading: k(z),
                  setextHeadingLineSequence: R,
                  setextHeadingText: M,
                  strong: k(),
                  thematicBreak: k(),
                },
              },
              n.mdastExtensions || []
            ),
            a = {};
          return c;
          function c(e) {
            for (
              var n,
                r = { type: "root", children: [] },
                u = [],
                l = [],
                a = -1,
                c = {
                  stack: [r],
                  tokenStack: u,
                  config: t,
                  enter: x,
                  exit: b,
                  buffer: y,
                  resume: w,
                  setData: h,
                  getData: m,
                };
              ++a < e.length;

            )
              ("listOrdered" !== e[a][1].type &&
                "listUnordered" !== e[a][1].type) ||
                ("enter" === e[a][0] ? l.push(a) : (a = s(e, l.pop(a), a)));
            for (a = -1; ++a < e.length; )
              (n = t[e[a][0]]),
                i.call(n, e[a][1].type) &&
                  n[e[a][1].type].call(
                    o({ sliceSerialize: e[a][2].sliceSerialize }, c),
                    e[a][1]
                  );
            if (u.length)
              throw new Error(
                "Cannot close document, a token (`" +
                  u[u.length - 1].type +
                  "`, " +
                  p({
                    start: u[u.length - 1].start,
                    end: u[u.length - 1].end,
                  }) +
                  ") is still open"
              );
            for (
              r.position = {
                start: g(
                  e.length ? e[0][1].start : { line: 1, column: 1, offset: 0 }
                ),
                end: g(
                  e.length
                    ? e[e.length - 2][1].end
                    : { line: 1, column: 1, offset: 0 }
                ),
              },
                a = -1;
              ++a < t.transforms.length;

            )
              r = t.transforms[a](r) || r;
            return r;
          }
          function s(e, n, t) {
            for (var r, o, i, u, l, a, c, s = n - 1, f = -1, p = !1; ++s <= t; )
              if (
                ("listUnordered" === (l = e[s])[1].type ||
                "listOrdered" === l[1].type ||
                "blockQuote" === l[1].type
                  ? ("enter" === l[0] ? f++ : f--, (c = void 0))
                  : "lineEndingBlank" === l[1].type
                  ? "enter" === l[0] &&
                    (!r || c || f || a || (a = s), (c = void 0))
                  : "linePrefix" === l[1].type ||
                    "listItemValue" === l[1].type ||
                    "listItemMarker" === l[1].type ||
                    "listItemPrefix" === l[1].type ||
                    "listItemPrefixWhitespace" === l[1].type ||
                    (c = void 0),
                (!f && "enter" === l[0] && "listItemPrefix" === l[1].type) ||
                  (-1 === f &&
                    "exit" === l[0] &&
                    ("listUnordered" === l[1].type ||
                      "listOrdered" === l[1].type)))
              ) {
                if (r) {
                  for (o = s, i = void 0; o--; )
                    if (
                      "lineEnding" === (u = e[o])[1].type ||
                      "lineEndingBlank" === u[1].type
                    ) {
                      if ("exit" === u[0]) continue;
                      i && ((e[i][1].type = "lineEndingBlank"), (p = !0)),
                        (u[1].type = "lineEnding"),
                        (i = o);
                    } else if (
                      "linePrefix" !== u[1].type &&
                      "blockQuotePrefix" !== u[1].type &&
                      "blockQuotePrefixWhitespace" !== u[1].type &&
                      "blockQuoteMarker" !== u[1].type &&
                      "listItemIndent" !== u[1].type
                    )
                      break;
                  a && (!i || a < i) && (r._spread = !0),
                    (r.end = g(i ? e[i][1].start : l[1].end)),
                    e.splice(i || s, 0, ["exit", r, l[2]]),
                    s++,
                    t++;
                }
                "listItemPrefix" === l[1].type &&
                  ((r = {
                    type: "listItem",
                    _spread: !1,
                    start: g(l[1].start),
                  }),
                  e.splice(s, 0, ["enter", r, l[2]]),
                  s++,
                  t++,
                  (a = void 0),
                  (c = !0));
              }
            return (e[n][1]._spread = p), t;
          }
          function h(e, n) {
            a[e] = n;
          }
          function m(e) {
            return a[e];
          }
          function g(e) {
            return { line: e.line, column: e.column, offset: e.offset };
          }
          function v(e, n) {
            return t;
            function t(t) {
              x.call(this, e(t), t), n && n.call(this, t);
            }
          }
          function y() {
            this.stack.push({ type: "fragment", children: [] });
          }
          function x(e, n) {
            return (
              this.stack[this.stack.length - 1].children.push(e),
              this.stack.push(e),
              this.tokenStack.push(n),
              (e.position = { start: g(n.start) }),
              e
            );
          }
          function k(e) {
            return n;
            function n(n) {
              e && e.call(this, n), b.call(this, n);
            }
          }
          function b(e) {
            var n = this.stack.pop(),
              t = this.tokenStack.pop();
            if (!t)
              throw new Error(
                "Cannot close `" +
                  e.type +
                  "` (" +
                  p({ start: e.start, end: e.end }) +
                  "): it\u2019s not open"
              );
            if (t.type !== e.type)
              throw new Error(
                "Cannot close `" +
                  e.type +
                  "` (" +
                  p({ start: e.start, end: e.end }) +
                  "): a different token (`" +
                  t.type +
                  "`, " +
                  p({ start: t.start, end: t.end }) +
                  ") is open"
              );
            return (n.position.end = g(e.end)), n;
          }
          function w() {
            return r(this.stack.pop());
          }
          function S() {
            h("expectingFirstListItemValue", !0);
          }
          function E(e) {
            m("expectingFirstListItemValue") &&
              ((this.stack[this.stack.length - 2].start = parseInt(
                this.sliceSerialize(e),
                10
              )),
              h("expectingFirstListItemValue"));
          }
          function C() {
            var e = this.resume();
            this.stack[this.stack.length - 1].lang = e;
          }
          function P() {
            var e = this.resume();
            this.stack[this.stack.length - 1].meta = e;
          }
          function T() {
            m("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0));
          }
          function F() {
            var e = this.resume();
            (this.stack[this.stack.length - 1].value = e.replace(
              /^(\r?\n|\r)|(\r?\n|\r)$/g,
              ""
            )),
              h("flowCodeInside");
          }
          function A() {
            var e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }
          function O(e) {
            var n = this.resume();
            (this.stack[this.stack.length - 1].label = n),
              (this.stack[this.stack.length - 1].identifier = u(
                this.sliceSerialize(e)
              ).toLowerCase());
          }
          function D() {
            var e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          }
          function L() {
            var e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          }
          function I(e) {
            this.stack[this.stack.length - 1].depth ||
              (this.stack[this.stack.length - 1].depth =
                this.sliceSerialize(e).length);
          }
          function M() {
            h("setextHeadingSlurpLineEnding", !0);
          }
          function R(e) {
            this.stack[this.stack.length - 1].depth =
              61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
          }
          function z() {
            h("setextHeadingSlurpLineEnding");
          }
          function B(e) {
            var n = this.stack[this.stack.length - 1].children,
              t = n[n.length - 1];
            (t && "text" === t.type) ||
              (((t = ve()).position = { start: g(e.start) }),
              this.stack[this.stack.length - 1].children.push(t)),
              this.stack.push(t);
          }
          function _(e) {
            var n = this.stack.pop();
            (n.value += this.sliceSerialize(e)), (n.position.end = g(e.end));
          }
          function j(e) {
            var n = this.stack[this.stack.length - 1];
            if (m("atHardBreak"))
              return (
                (n.children[n.children.length - 1].position.end = g(e.end)),
                void h("atHardBreak")
              );
            !m("setextHeadingSlurpLineEnding") &&
              t.canContainEols.indexOf(n.type) > -1 &&
              (B.call(this, e), _.call(this, e));
          }
          function U() {
            h("atHardBreak", !0);
          }
          function H() {
            var e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }
          function N() {
            var e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }
          function $() {
            var e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }
          function V() {
            var e = this.stack[this.stack.length - 1];
            m("inReference")
              ? ((e.type += "Reference"),
                (e.referenceType = m("referenceType") || "shortcut"),
                delete e.url,
                delete e.title)
              : (delete e.identifier, delete e.label, delete e.referenceType),
              h("referenceType");
          }
          function q() {
            var e = this.stack[this.stack.length - 1];
            m("inReference")
              ? ((e.type += "Reference"),
                (e.referenceType = m("referenceType") || "shortcut"),
                delete e.url,
                delete e.title)
              : (delete e.identifier, delete e.label, delete e.referenceType),
              h("referenceType");
          }
          function W(e) {
            this.stack[this.stack.length - 2].identifier = u(
              this.sliceSerialize(e)
            ).toLowerCase();
          }
          function X() {
            var e = this.stack[this.stack.length - 1],
              n = this.resume();
            (this.stack[this.stack.length - 1].label = n),
              h("inReference", !0),
              "link" === this.stack[this.stack.length - 1].type
                ? (this.stack[this.stack.length - 1].children = e.children)
                : (this.stack[this.stack.length - 1].alt = n);
          }
          function Q() {
            var e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          }
          function K() {
            var e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          }
          function Y() {
            h("inReference");
          }
          function Z() {
            h("referenceType", "collapsed");
          }
          function J(e) {
            var n = this.resume();
            (this.stack[this.stack.length - 1].label = n),
              (this.stack[this.stack.length - 1].identifier = u(
                this.sliceSerialize(e)
              ).toLowerCase()),
              h("referenceType", "full");
          }
          function G(e) {
            h("characterReferenceType", e.type);
          }
          function ee(e) {
            var n,
              t,
              r = this.sliceSerialize(e),
              o = m("characterReferenceType");
            o
              ? ((n = l(r, "characterReferenceMarkerNumeric" === o ? 10 : 16)),
                h("characterReferenceType"))
              : (n = f(r)),
              ((t = this.stack.pop()).value += n),
              (t.position.end = g(e.end));
          }
          function ne(e) {
            _.call(this, e),
              (this.stack[this.stack.length - 1].url = this.sliceSerialize(e));
          }
          function te(e) {
            _.call(this, e),
              (this.stack[this.stack.length - 1].url =
                "mailto:" + this.sliceSerialize(e));
          }
          function re() {
            return { type: "blockquote", children: [] };
          }
          function oe() {
            return { type: "code", lang: null, meta: null, value: "" };
          }
          function ie() {
            return { type: "inlineCode", value: "" };
          }
          function ue() {
            return {
              type: "definition",
              identifier: "",
              label: null,
              title: null,
              url: "",
            };
          }
          function le() {
            return { type: "emphasis", children: [] };
          }
          function ae() {
            return { type: "heading", depth: void 0, children: [] };
          }
          function ce() {
            return { type: "break" };
          }
          function se() {
            return { type: "html", value: "" };
          }
          function fe() {
            return { type: "image", title: null, url: "", alt: null };
          }
          function pe() {
            return { type: "link", title: null, url: "", children: [] };
          }
          function de(e) {
            return {
              type: "list",
              ordered: "listOrdered" === e.type,
              start: null,
              spread: e._spread,
              children: [],
            };
          }
          function he(e) {
            return {
              type: "listItem",
              spread: e._spread,
              checked: null,
              children: [],
            };
          }
          function me() {
            return { type: "paragraph", children: [] };
          }
          function ge() {
            return { type: "strong", children: [] };
          }
          function ve() {
            return { type: "text", value: "" };
          }
          function ye() {
            return { type: "thematicBreak" };
          }
        })(t)(s(a(t).document().write(c()(e, n, !0))));
      };
      var r = t(4999),
        o = t(9198),
        i = t(6706),
        u = t(5478),
        l = t(596),
        a = t(2976),
        c = t(162),
        s = t(1242),
        f = t(9435),
        p = t(5432);
      function d(e, n) {
        var t, r;
        for (t in n)
          (r = i.call(e, t) ? e[t] : (e[t] = {})),
            "canContainEols" === t || "transforms" === t
              ? (e[t] = [].concat(r, n[t]))
              : Object.assign(r, n[t]);
      }
    },
    9671: function (e, n, t) {
      "use strict";
      e.exports = t(2524);
    },
    5288: function (e, n, t) {
      "use strict";
      e.exports = t(1601);
    },
    5426: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          o,
          i = n.children || [],
          u = i.length,
          l = [],
          a = -1;
        for (; ++a < u; )
          (t = r(e, i[a], n)) &&
            (a &&
              "break" === i[a - 1].type &&
              (t.value && (t.value = t.value.replace(/^\s+/, "")),
              (o = t.children && t.children[0]) &&
                o.value &&
                (o.value = o.value.replace(/^\s+/, ""))),
            (l = l.concat(t)));
        return l;
      };
      var r = t(719);
    },
    1696: function (e, n, t) {
      "use strict";
      e.exports = function (e) {
        var n,
          t,
          u,
          l,
          a = e.footnoteById,
          c = e.footnoteOrder,
          s = c.length,
          f = -1,
          p = [];
        for (; ++f < s; )
          (n = a[c[f].toUpperCase()]) &&
            ((u = n.children.concat()),
            (l = u[u.length - 1]),
            (t = {
              type: "link",
              url: "#fnref-" + n.identifier,
              data: { hProperties: { className: ["footnote-backref"] } },
              children: [{ type: "text", value: "\u21a9" }],
            }),
            (l && "paragraph" === l.type) ||
              ((l = { type: "paragraph", children: [] }), u.push(l)),
            l.children.push(t),
            p.push({
              type: "listItem",
              data: { hProperties: { id: "fn-" + n.identifier } },
              children: u,
              position: n.position,
            }));
        if (0 === p.length) return null;
        return e(
          null,
          "div",
          { className: ["footnotes"] },
          i([r(e), o(e, { type: "list", ordered: !0, children: p })], !0)
        );
      };
      var r = t(7552),
        o = t(7888),
        i = t(6115);
    },
    3126: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "blockquote", r(o(e, n), !0));
      };
      var r = t(6115),
        o = t(5426);
    },
    3562: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return [e(n, "br"), r("text", "\n")];
      };
      var r = t(914);
    },
    7891: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          o = n.value ? n.value + "\n" : "",
          i = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
          u = {};
        i && (u.className = ["language-" + i]);
        (t = e(n, "code", u, [r("text", o)])),
          n.meta && (t.data = { meta: n.meta });
        return e(n.position, "pre", [t]);
      };
      var r = t(914);
    },
    9381: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "del", r(e, n));
      };
      var r = t(5426);
    },
    790: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "em", r(e, n));
      };
      var r = t(5426);
    },
    8235: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t = e.footnoteOrder,
          o = String(n.identifier);
        -1 === t.indexOf(o) && t.push(o);
        return e(n.position, "sup", { id: "fnref-" + o }, [
          e(n, "a", { href: "#fn-" + o, className: ["footnote-ref"] }, [
            r("text", n.label || o),
          ]),
        ]);
      };
      var r = t(914);
    },
    5758: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t = e.footnoteById,
          o = e.footnoteOrder,
          i = 1;
        for (; i in t; ) i++;
        return (
          (i = String(i)),
          o.push(i),
          (t[i] = {
            type: "footnoteDefinition",
            identifier: i,
            children: [{ type: "paragraph", children: n.children }],
            position: n.position,
          }),
          r(e, {
            type: "footnoteReference",
            identifier: i,
            position: n.position,
          })
        );
      };
      var r = t(8235);
    },
    4890: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "h" + n.depth, r(e, n));
      };
      var r = t(5426);
    },
    2202: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e.dangerous ? e.augment(n, r("raw", n.value)) : null;
      };
      var r = t(914);
    },
    1454: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          i = e.definition(n.identifier);
        if (!i) return o(e, n);
        (t = { src: r(i.url || ""), alt: n.alt }),
          null !== i.title && void 0 !== i.title && (t.title = i.title);
        return e(n, "img", t);
      };
      var r = t(729),
        o = t(713);
    },
    5037: function (e, n, t) {
      "use strict";
      var r = t(729);
      e.exports = function (e, n) {
        var t = { src: r(n.url), alt: n.alt };
        null !== n.title && void 0 !== n.title && (t.title = n.title);
        return e(n, "img", t);
      };
    },
    4617: function (e, n, t) {
      "use strict";
      function r() {
        return null;
      }
      e.exports = {
        blockquote: t(3126),
        break: t(3562),
        code: t(7891),
        delete: t(9381),
        emphasis: t(790),
        footnoteReference: t(8235),
        footnote: t(5758),
        heading: t(4890),
        html: t(2202),
        imageReference: t(1454),
        image: t(5037),
        inlineCode: t(8409),
        linkReference: t(9266),
        link: t(404),
        listItem: t(4463),
        list: t(7888),
        paragraph: t(8346),
        root: t(8100),
        strong: t(4970),
        table: t(2605),
        text: t(989),
        thematicBreak: t(7552),
        toml: r,
        yaml: r,
        definition: r,
        footnoteDefinition: r,
      };
    },
    8409: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t = n.value.replace(/\r?\n|\r/g, " ");
        return e(n, "code", [r("text", t)]);
      };
      var r = t(914);
    },
    9266: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          u = e.definition(n.identifier);
        if (!u) return o(e, n);
        (t = { href: r(u.url || "") }),
          null !== u.title && void 0 !== u.title && (t.title = u.title);
        return e(n, "a", t, i(e, n));
      };
      var r = t(729),
        o = t(713),
        i = t(5426);
    },
    404: function (e, n, t) {
      "use strict";
      var r = t(729),
        o = t(5426);
      e.exports = function (e, n) {
        var t = { href: r(n.url) };
        null !== n.title && void 0 !== n.title && (t.title = n.title);
        return e(n, "a", t, o(e, n));
      };
    },
    4463: function (e, n, t) {
      "use strict";
      e.exports = function (e, n, t) {
        var u,
          l,
          a,
          c = o(e, n),
          s = c[0],
          f = t
            ? (function (e) {
                var n = e.spread,
                  t = e.children,
                  r = t.length,
                  o = -1;
                for (; !n && ++o < r; ) n = i(t[o]);
                return n;
              })(t)
            : i(n),
          p = {},
          d = [];
        "boolean" === typeof n.checked &&
          ((s && "p" === s.tagName) || ((s = e(null, "p", [])), c.unshift(s)),
          s.children.length > 0 && s.children.unshift(r("text", " ")),
          s.children.unshift(
            e(null, "input", {
              type: "checkbox",
              checked: n.checked,
              disabled: !0,
            })
          ),
          (p.className = ["task-list-item"]));
        (u = c.length), (l = -1);
        for (; ++l < u; )
          (a = c[l]),
            (f || 0 !== l || "p" !== a.tagName) && d.push(r("text", "\n")),
            "p" !== a.tagName || f ? d.push(a) : (d = d.concat(a.children));
        u && (f || "p" !== a.tagName) && d.push(r("text", "\n"));
        return e(n, "li", p, d);
      };
      var r = t(914),
        o = t(5426);
      function i(e) {
        var n = e.spread;
        return void 0 === n || null === n ? e.children.length > 1 : n;
      }
    },
    7888: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          i,
          u = {},
          l = n.ordered ? "ol" : "ul",
          a = -1;
        "number" === typeof n.start && 1 !== n.start && (u.start = n.start);
        (t = o(e, n)), (i = t.length);
        for (; ++a < i; )
          if (
            t[a].properties.className &&
            -1 !== t[a].properties.className.indexOf("task-list-item")
          ) {
            u.className = ["contains-task-list"];
            break;
          }
        return e(n, l, u, r(t, !0));
      };
      var r = t(6115),
        o = t(5426);
    },
    8346: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "p", r(e, n));
      };
      var r = t(5426);
    },
    8100: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e.augment(n, r("root", o(i(e, n))));
      };
      var r = t(914),
        o = t(6115),
        i = t(5426);
    },
    4970: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "strong", r(e, n));
      };
      var r = t(5426);
    },
    2605: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          u,
          l,
          a,
          c,
          s = n.children,
          f = s.length,
          p = n.align || [],
          d = p.length,
          h = [];
        for (; f--; ) {
          for (
            u = s[f].children,
              a = 0 === f ? "th" : "td",
              t = d || u.length,
              l = [];
            t--;

          )
            (c = u[t]), (l[t] = e(c, a, { align: p[t] }, c ? i(e, c) : []));
          h[f] = e(s[f], "tr", o(l, !0));
        }
        return e(
          n,
          "table",
          o(
            [e(h[0].position, "thead", o([h[0]], !0))].concat(
              h[1]
                ? e(
                    { start: r.start(h[1]), end: r.end(h[h.length - 1]) },
                    "tbody",
                    o(h.slice(1), !0)
                  )
                : []
            ),
            !0
          )
        );
      };
      var r = t(7361),
        o = t(6115),
        i = t(5426);
    },
    989: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        return e.augment(
          n,
          r("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))
        );
      };
      var r = t(914);
    },
    7552: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return e(n, "hr");
      };
    },
    1601: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t = (function (e, n) {
            var t = n || {};
            void 0 === t.allowDangerousHTML ||
              p ||
              ((p = !0),
              console.warn(
                "mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"
              ));
            var r = t.allowDangerousHtml || t.allowDangerousHTML,
              a = {};
            return (
              (d.dangerous = r),
              (d.definition = l(e)),
              (d.footnoteById = a),
              (d.footnoteOrder = []),
              (d.augment = c),
              (d.handlers = Object.assign({}, s, t.handlers)),
              (d.unknownHandler = t.unknownHandler),
              (d.passThrough = t.passThrough),
              o(e, "footnoteDefinition", h),
              d
            );
            function c(e, n) {
              var t, r;
              return (
                e &&
                  e.data &&
                  ((t = e.data).hName &&
                    ("element" !== n.type &&
                      (n = {
                        type: "element",
                        tagName: "",
                        properties: {},
                        children: [],
                      }),
                    (n.tagName = t.hName)),
                  "element" === n.type &&
                    t.hProperties &&
                    (n.properties = Object.assign(
                      {},
                      n.properties,
                      t.hProperties
                    )),
                  n.children && t.hChildren && (n.children = t.hChildren)),
                (r = e && e.position ? e : { position: e }),
                u(r) || (n.position = { start: i.start(r), end: i.end(r) }),
                n
              );
            }
            function d(e, n, t, r) {
              return (
                (void 0 !== r && null !== r) ||
                  "object" !== typeof t ||
                  !("length" in t) ||
                  ((r = t), (t = {})),
                c(e, {
                  type: "element",
                  tagName: n,
                  properties: t || {},
                  children: r || [],
                })
              );
            }
            function h(e) {
              var n = String(e.identifier).toUpperCase();
              f.call(a, n) || (a[n] = e);
            }
          })(e, n),
          d = a(t, e),
          h = c(t);
        h && (d.children = d.children.concat(r("text", "\n"), h));
        return d;
      };
      var r = t(914),
        o = t(2854),
        i = t(7361),
        u = t(1744),
        l = t(6630),
        a = t(719),
        c = t(1696),
        s = t(4617),
        f = {}.hasOwnProperty,
        p = !1;
    },
    719: function (e, n, t) {
      "use strict";
      e.exports = function (e, n, t) {
        var r,
          o = n && n.type;
        if (!o) throw new Error("Expected node, got `" + n + "`");
        r = i.call(e.handlers, o)
          ? e.handlers[o]
          : e.passThrough && e.passThrough.indexOf(o) > -1
          ? l
          : e.unknownHandler;
        return ("function" === typeof r ? r : u)(e, n, t);
      };
      var r = t(914),
        o = t(5426),
        i = {}.hasOwnProperty;
      function u(e, n) {
        return (function (e) {
          var n = e.data || {};
          if (
            i.call(n, "hName") ||
            i.call(n, "hProperties") ||
            i.call(n, "hChildren")
          )
            return !1;
          return "value" in e;
        })(n)
          ? e.augment(n, r("text", n.value))
          : e(n, "div", o(e, n));
      }
      function l(e, n) {
        var t;
        return n.children
          ? (((t = Object.assign({}, n)).children = o(e, n)), t)
          : n;
      }
    },
    713: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          i,
          u,
          l = n.referenceType,
          a = "]";
        "collapsed" === l
          ? (a += "[]")
          : "full" === l && (a += "[" + (n.label || n.identifier) + "]");
        if ("imageReference" === n.type) return r("text", "![" + n.alt + a);
        (t = o(e, n)),
          (i = t[0]) && "text" === i.type
            ? (i.value = "[" + i.value)
            : t.unshift(r("text", "["));
        (u = t[t.length - 1]) && "text" === u.type
          ? (u.value += a)
          : t.push(r("text", a));
        return t;
      };
      var r = t(914),
        o = t(5426);
    },
    6115: function (e, n, t) {
      "use strict";
      e.exports = function (e, n) {
        var t = [],
          o = -1,
          i = e.length;
        n && t.push(r("text", "\n"));
        for (; ++o < i; ) o && t.push(r("text", "\n")), t.push(e[o]);
        n && e.length > 0 && t.push(r("text", "\n"));
        return t;
      };
      var r = t(914);
    },
    4999: function (e) {
      "use strict";
      function n(e) {
        return (
          (e &&
            (e.value ||
              e.alt ||
              e.title ||
              ("children" in e && t(e.children)) ||
              ("length" in e && t(e)))) ||
          ""
        );
      }
      function t(e) {
        for (var t = [], r = -1; ++r < e.length; ) t[r] = n(e[r]);
        return t.join("");
      }
      e.exports = n;
    },
    729: function (e) {
      "use strict";
      var n = {};
      function t(e, r, o) {
        var i,
          u,
          l,
          a,
          c,
          s = "";
        for (
          "string" !== typeof r && ((o = r), (r = t.defaultChars)),
            "undefined" === typeof o && (o = !0),
            c = (function (e) {
              var t,
                r,
                o = n[e];
              if (o) return o;
              for (o = n[e] = [], t = 0; t < 128; t++)
                (r = String.fromCharCode(t)),
                  /^[0-9a-z]$/i.test(r)
                    ? o.push(r)
                    : o.push(
                        "%" + ("0" + t.toString(16).toUpperCase()).slice(-2)
                      );
              for (t = 0; t < e.length; t++) o[e.charCodeAt(t)] = e[t];
              return o;
            })(r),
            i = 0,
            u = e.length;
          i < u;
          i++
        )
          if (
            ((l = e.charCodeAt(i)),
            o &&
              37 === l &&
              i + 2 < u &&
              /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
          )
            (s += e.slice(i, i + 3)), (i += 2);
          else if (l < 128) s += c[l];
          else if (l >= 55296 && l <= 57343) {
            if (
              l >= 55296 &&
              l <= 56319 &&
              i + 1 < u &&
              (a = e.charCodeAt(i + 1)) >= 56320 &&
              a <= 57343
            ) {
              (s += encodeURIComponent(e[i] + e[i + 1])), i++;
              continue;
            }
            s += "%EF%BF%BD";
          } else s += encodeURIComponent(e[i]);
        return s;
      }
      (t.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (t.componentChars = "-_.!~*'()"),
        (e.exports = t);
    },
    6734: function (e, n, t) {
      "use strict";
      var r = t(2841)(/[A-Za-z]/);
      e.exports = r;
    },
    6712: function (e, n, t) {
      "use strict";
      var r = t(2841)(/[\dA-Za-z]/);
      e.exports = r;
    },
    3571: function (e, n, t) {
      "use strict";
      var r = t(2841)(/[#-'*+\--9=?A-Z^-~]/);
      e.exports = r;
    },
    9696: function (e) {
      "use strict";
      e.exports = function (e) {
        return e < 32 || 127 === e;
      };
    },
    3977: function (e, n, t) {
      "use strict";
      var r = t(2841)(/\d/);
      e.exports = r;
    },
    6238: function (e, n, t) {
      "use strict";
      var r = t(2841)(/[\dA-Fa-f]/);
      e.exports = r;
    },
    3074: function (e, n, t) {
      "use strict";
      var r = t(2841)(/[!-/:-@[-`{-~]/);
      e.exports = r;
    },
    8367: function (e) {
      "use strict";
      e.exports = function (e) {
        return e < 0 || 32 === e;
      };
    },
    7238: function (e) {
      "use strict";
      e.exports = function (e) {
        return e < -2;
      };
    },
    3654: function (e) {
      "use strict";
      e.exports = function (e) {
        return -2 === e || -1 === e || 32 === e;
      };
    },
    6996: function (e, n, t) {
      "use strict";
      var r = t(6830),
        o = t(2841)(r);
      e.exports = o;
    },
    395: function (e, n, t) {
      "use strict";
      var r = t(2841)(/\s/);
      e.exports = r;
    },
    9198: function (e) {
      "use strict";
      var n = Object.assign;
      e.exports = n;
    },
    3267: function (e) {
      "use strict";
      var n = String.fromCharCode;
      e.exports = n;
    },
    6706: function (e) {
      "use strict";
      var n = {}.hasOwnProperty;
      e.exports = n;
    },
    7139: function (e) {
      "use strict";
      e.exports = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "section",
        "source",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
      ];
    },
    6871: function (e) {
      "use strict";
      e.exports = ["pre", "script", "style", "textarea"];
    },
    1362: function (e) {
      "use strict";
      var n = [].splice;
      e.exports = n;
    },
    6830: function (e) {
      "use strict";
      e.exports =
        /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    },
    6274: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(7082),
        o = t(7542),
        i = t(1349),
        u = t(5485),
        l = t(9653),
        a = t(6713),
        c = t(6597),
        s = t(431),
        f = t(26),
        p = t(3865),
        d = t(5694),
        h = t(5565),
        m = t(6872),
        g = t(8911),
        v = t(1294),
        y = t(6215),
        x = t(534),
        k = t(2607),
        b = t(6931),
        w = t(5874),
        S = t(7039),
        E = {
          42: b,
          43: b,
          45: b,
          48: b,
          49: b,
          50: b,
          51: b,
          52: b,
          53: b,
          54: b,
          55: b,
          56: b,
          57: b,
          62: u,
        },
        C = { 91: p },
        P = { "-2": s, "-1": s, 32: s },
        T = { 35: h, 42: S, 45: [w, S], 60: m, 61: w, 95: S, 96: c, 126: c },
        F = { 38: a, 92: l },
        A = {
          "-5": k,
          "-4": k,
          "-3": k,
          33: y,
          38: a,
          42: o,
          60: [i, g],
          91: x,
          92: [d, l],
          93: v,
          95: o,
          96: f,
        },
        O = { null: [o, r.resolver] };
      (n.contentInitial = C),
        (n.disable = { null: [] }),
        (n.document = E),
        (n.flow = T),
        (n.flowInitial = P),
        (n.insideSpan = O),
        (n.string = F),
        (n.text = A);
    },
    3745: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(7238),
        o = t(2928),
        i = function (e) {
          var n,
            t = e.attempt(
              this.parser.constructs.contentInitial,
              function (n) {
                if (null === n) return void e.consume(n);
                return (
                  e.enter("lineEnding"),
                  e.consume(n),
                  e.exit("lineEnding"),
                  o(e, t, "linePrefix")
                );
              },
              function (n) {
                return e.enter("paragraph"), i(n);
              }
            );
          return t;
          function i(t) {
            var r = e.enter("chunkText", { contentType: "text", previous: n });
            return n && (n.next = r), (n = r), u(t);
          }
          function u(n) {
            return null === n
              ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n))
              : r(n)
              ? (e.consume(n), e.exit("chunkText"), i)
              : (e.consume(n), u);
          }
        };
      n.tokenize = i;
    },
    4201: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(7238),
        o = t(2928),
        i = t(6532),
        u = function (e) {
          var n,
            t,
            o,
            u = this,
            c = [],
            s = 0,
            f = {
              tokenize: function (e, r) {
                var o = 0;
                return (n = {}), s;
                function s(r) {
                  return o < c.length
                    ? ((u.containerState = c[o][1]),
                      e.attempt(c[o][0].continuation, f, p)(r))
                    : t.currentConstruct && t.currentConstruct.concrete
                    ? ((n.flowContinue = !0), m(r))
                    : ((u.interrupt =
                        t.currentConstruct && t.currentConstruct.interruptible),
                      (u.containerState = {}),
                      e.attempt(l, h, m)(r));
                }
                function f(e) {
                  return o++, u.containerState._closeFlow ? h(e) : s(e);
                }
                function p(n) {
                  return t.currentConstruct && t.currentConstruct.lazy
                    ? ((u.containerState = {}),
                      e.attempt(l, h, e.attempt(a, h, e.check(i, h, d)))(n))
                    : h(n);
                }
                function d(e) {
                  return (
                    (o = c.length), (n.lazy = !0), (n.flowContinue = !0), m(e)
                  );
                }
                function h(e) {
                  return (n.flowEnd = !0), m(e);
                }
                function m(e) {
                  return (
                    (n.continued = o),
                    (u.interrupt = u.containerState = void 0),
                    r(e)
                  );
                }
              },
              partial: !0,
            };
          return p;
          function p(n) {
            return s < c.length
              ? ((u.containerState = c[s][1]),
                e.attempt(c[s][0].continuation, d, h)(n))
              : h(n);
          }
          function d(e) {
            return s++, p(e);
          }
          function h(r) {
            return n && n.flowContinue
              ? g(r)
              : ((u.interrupt =
                  t && t.currentConstruct && t.currentConstruct.interruptible),
                (u.containerState = {}),
                e.attempt(l, m, g)(r));
          }
          function m(e) {
            return (
              c.push([u.currentConstruct, u.containerState]),
              (u.containerState = void 0),
              h(e)
            );
          }
          function g(n) {
            return null === n
              ? (k(0, !0), void e.consume(n))
              : ((t = t || u.parser.flow(u.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: o,
                  _tokenizer: t,
                }),
                v(n));
          }
          function v(n) {
            return null === n
              ? (x(e.exit("chunkFlow")), g(n))
              : r(n)
              ? (e.consume(n), x(e.exit("chunkFlow")), e.check(f, y))
              : (e.consume(n), v);
          }
          function y(e) {
            return k(n.continued, n && n.flowEnd), (s = 0), p(e);
          }
          function x(e) {
            o && (o.next = e),
              (o = e),
              (t.lazy = n && n.lazy),
              t.defineSkip(e.start),
              t.write(u.sliceStream(e));
          }
          function k(n, r) {
            var i = c.length;
            for (t && r && (t.write([null]), (o = t = void 0)); i-- > n; )
              (u.containerState = c[i][1]), c[i][0].exit.call(u, e);
            c.length = n;
          }
        },
        l = {
          tokenize: function (e, n, t) {
            return o(
              e,
              e.attempt(this.parser.constructs.document, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.indexOf("codeIndented") > -1
                ? void 0
                : 4
            );
          },
        },
        a = {
          tokenize: function (e, n, t) {
            return o(
              e,
              e.lazy(this.parser.constructs.flow, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.indexOf("codeIndented") > -1
                ? void 0
                : 4
            );
          },
        };
      n.tokenize = u;
    },
    2871: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(4590),
        o = t(2928),
        i = t(6532),
        u = function (e) {
          var n = this,
            t = e.attempt(
              i,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter("lineEndingBlank"),
                  e.consume(r),
                  e.exit("lineEndingBlank"),
                  (n.currentConstruct = void 0),
                  t
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                u,
                o(
                  e,
                  e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)),
                  "linePrefix"
                )
              )
            );
          return t;
          function u(r) {
            if (null !== r)
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (n.currentConstruct = void 0),
                t
              );
            e.consume(r);
          }
        };
      n.tokenize = u;
    },
    7082: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(9198),
        o = t(5923),
        i = a("text"),
        u = a("string"),
        l = { resolveAll: c() };
      function a(e) {
        return {
          tokenize: function (n) {
            var t = this,
              r = this.parser.constructs[e],
              o = n.attempt(r, i, u);
            return i;
            function i(e) {
              return a(e) ? o(e) : u(e);
            }
            function u(e) {
              if (null !== e) return n.enter("data"), n.consume(e), l;
              n.consume(e);
            }
            function l(e) {
              return a(e) ? (n.exit("data"), o(e)) : (n.consume(e), l);
            }
            function a(e) {
              var n = r[e],
                o = -1;
              if (null === e) return !0;
              if (n)
                for (; ++o < n.length; )
                  if (!n[o].previous || n[o].previous.call(t, t.previous))
                    return !0;
            }
          },
          resolveAll: c("text" === e ? s : void 0),
        };
      }
      function c(e) {
        return function (n, t) {
          var r,
            o = -1;
          for (; ++o <= n.length; )
            void 0 === r
              ? n[o] && "data" === n[o][1].type && ((r = o), o++)
              : (n[o] && "data" === n[o][1].type) ||
                (o !== r + 2 &&
                  ((n[r][1].end = n[o - 1][1].end),
                  n.splice(r + 2, o - r - 2),
                  (o = r + 2)),
                (r = void 0));
          return e ? e(n, t) : n;
        };
      }
      function s(e, n) {
        for (var t, i, u, l, a, c, s, f, p = -1; ++p <= e.length; )
          if (
            (p === e.length || "lineEnding" === e[p][1].type) &&
            "data" === e[p - 1][1].type
          ) {
            for (
              i = e[p - 1][1],
                l = (t = n.sliceStream(i)).length,
                a = -1,
                c = 0,
                s = void 0;
              l--;

            )
              if ("string" === typeof (u = t[l])) {
                for (a = u.length; 32 === u.charCodeAt(a - 1); ) c++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === u) (s = !0), c++;
              else if (-1 !== u) {
                l++;
                break;
              }
            c &&
              ((f = {
                type:
                  p === e.length || s || c < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: i.end.line,
                  column: i.end.column - c,
                  offset: i.end.offset - c,
                  _index: i.start._index + l,
                  _bufferIndex: l ? a : i.start._bufferIndex + a,
                },
                end: o(i.end),
              }),
              (i.end = o(f.start)),
              i.start.offset === i.end.offset
                ? r(i, f)
                : (e.splice(p, 0, ["enter", f, n], ["exit", f, n]), (p += 2))),
              p++;
          }
        return e;
      }
      (n.resolver = l), (n.string = u), (n.text = i);
    },
    2976: function (e, n, t) {
      "use strict";
      var r = t(3745),
        o = t(4201),
        i = t(2871),
        u = t(7082),
        l = t(2952),
        a = t(1388),
        c = t(8180),
        s = t(6274);
      e.exports = function (e) {
        var n = {
          defined: [],
          constructs: l([s].concat(c((e || {}).extensions))),
          content: t(r),
          document: t(o),
          flow: t(i),
          string: t(u.string),
          text: t(u.text),
        };
        return n;
        function t(e) {
          return function (t) {
            return a(n, e, t);
          };
        }
      };
    },
    1242: function (e, n, t) {
      "use strict";
      var r = t(4423);
      e.exports = function (e) {
        for (; !r(e); );
        return e;
      };
    },
    162: function (e) {
      "use strict";
      var n = /[\0\t\n\r]/g;
      e.exports = function () {
        var e,
          t = !0,
          r = 1,
          o = "";
        return function (i, u, l) {
          var a,
            c,
            s,
            f,
            p,
            d = [];
          (i = o + i.toString(u)),
            (s = 0),
            (o = ""),
            t && (65279 === i.charCodeAt(0) && s++, (t = void 0));
          for (; s < i.length; ) {
            if (
              ((n.lastIndex = s),
              (a = n.exec(i)),
              (f = a ? a.index : i.length),
              (p = i.charCodeAt(f)),
              !a)
            ) {
              o = i.slice(s);
              break;
            }
            if (10 === p && s === f && e) d.push(-3), (e = void 0);
            else if (
              (e && (d.push(-5), (e = void 0)),
              s < f && (d.push(i.slice(s, f)), (r += f - s)),
              0 === p)
            )
              d.push(65533), r++;
            else if (9 === p)
              for (c = 4 * Math.ceil(r / 4), d.push(-2); r++ < c; ) d.push(-1);
            else 10 === p ? (d.push(-4), (r = 1)) : ((e = !0), (r = 1));
            s = f + 1;
          }
          l && (e && d.push(-5), o && d.push(o), d.push(null));
          return d;
        };
      };
    },
    7542: function (e, n, t) {
      "use strict";
      var r = t(8811),
        o = t(6808),
        i = t(9444),
        u = t(5644),
        l = t(8280),
        a = t(5923),
        c = {
          name: "attention",
          tokenize: function (e, n) {
            var t,
              r = i(this.previous);
            return function (n) {
              return e.enter("attentionSequence"), (t = n), o(n);
            };
            function o(u) {
              var l, a, c, s;
              return u === t
                ? (e.consume(u), o)
                : ((l = e.exit("attentionSequence")),
                  (c = !(a = i(u)) || (2 === a && r)),
                  (s = !r || (2 === r && a)),
                  (l._open = 42 === t ? c : c && (r || !s)),
                  (l._close = 42 === t ? s : s && (a || !c)),
                  n(u));
            }
          },
          resolveAll: function (e, n) {
            var t,
              i,
              c,
              s,
              f,
              p,
              d,
              h,
              m = -1;
            for (; ++m < e.length; )
              if (
                "enter" === e[m][0] &&
                "attentionSequence" === e[m][1].type &&
                e[m][1]._close
              )
                for (t = m; t--; )
                  if (
                    "exit" === e[t][0] &&
                    "attentionSequence" === e[t][1].type &&
                    e[t][1]._open &&
                    n.sliceSerialize(e[t][1]).charCodeAt(0) ===
                      n.sliceSerialize(e[m][1]).charCodeAt(0)
                  ) {
                    if (
                      (e[t][1]._close || e[m][1]._open) &&
                      (e[m][1].end.offset - e[m][1].start.offset) % 3 &&
                      !(
                        (e[t][1].end.offset -
                          e[t][1].start.offset +
                          e[m][1].end.offset -
                          e[m][1].start.offset) %
                        3
                      )
                    )
                      continue;
                    (p =
                      e[t][1].end.offset - e[t][1].start.offset > 1 &&
                      e[m][1].end.offset - e[m][1].start.offset > 1
                        ? 2
                        : 1),
                      (s = {
                        type: p > 1 ? "strongSequence" : "emphasisSequence",
                        start: u(a(e[t][1].end), -p),
                        end: a(e[t][1].end),
                      }),
                      (f = {
                        type: p > 1 ? "strongSequence" : "emphasisSequence",
                        start: a(e[m][1].start),
                        end: u(a(e[m][1].start), p),
                      }),
                      (c = {
                        type: p > 1 ? "strongText" : "emphasisText",
                        start: a(e[t][1].end),
                        end: a(e[m][1].start),
                      }),
                      (i = {
                        type: p > 1 ? "strong" : "emphasis",
                        start: a(s.start),
                        end: a(f.end),
                      }),
                      (e[t][1].end = a(s.start)),
                      (e[m][1].start = a(f.end)),
                      (d = []),
                      e[t][1].end.offset - e[t][1].start.offset &&
                        (d = r(d, [
                          ["enter", e[t][1], n],
                          ["exit", e[t][1], n],
                        ])),
                      (d = r(d, [
                        ["enter", i, n],
                        ["enter", s, n],
                        ["exit", s, n],
                        ["enter", c, n],
                      ])),
                      (d = r(
                        d,
                        l(
                          n.parser.constructs.insideSpan.null,
                          e.slice(t + 1, m),
                          n
                        )
                      )),
                      (d = r(d, [
                        ["exit", c, n],
                        ["enter", f, n],
                        ["exit", f, n],
                        ["exit", i, n],
                      ])),
                      e[m][1].end.offset - e[m][1].start.offset
                        ? ((h = 2),
                          (d = r(d, [
                            ["enter", e[m][1], n],
                            ["exit", e[m][1], n],
                          ])))
                        : (h = 0),
                      o(e, t - 1, m - t + 3, d),
                      (m = t + d.length - h - 2);
                    break;
                  }
            m = -1;
            for (; ++m < e.length; )
              "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
            return e;
          },
        };
      e.exports = c;
    },
    1349: function (e, n, t) {
      "use strict";
      var r = t(6734),
        o = t(6712),
        i = t(3571),
        u = t(9696),
        l = {
          name: "autolink",
          tokenize: function (e, n, t) {
            var l = 1;
            return function (n) {
              return (
                e.enter("autolink"),
                e.enter("autolinkMarker"),
                e.consume(n),
                e.exit("autolinkMarker"),
                e.enter("autolinkProtocol"),
                a
              );
            };
            function a(n) {
              return r(n) ? (e.consume(n), c) : i(n) ? p(n) : t(n);
            }
            function c(e) {
              return 43 === e || 45 === e || 46 === e || o(e) ? s(e) : p(e);
            }
            function s(n) {
              return 58 === n
                ? (e.consume(n), f)
                : (43 === n || 45 === n || 46 === n || o(n)) && l++ < 32
                ? (e.consume(n), s)
                : p(n);
            }
            function f(n) {
              return 62 === n
                ? (e.exit("autolinkProtocol"), g(n))
                : 32 === n || 60 === n || u(n)
                ? t(n)
                : (e.consume(n), f);
            }
            function p(n) {
              return 64 === n
                ? (e.consume(n), (l = 0), d)
                : i(n)
                ? (e.consume(n), p)
                : t(n);
            }
            function d(e) {
              return o(e) ? h(e) : t(e);
            }
            function h(n) {
              return 46 === n
                ? (e.consume(n), (l = 0), d)
                : 62 === n
                ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), g(n))
                : m(n);
            }
            function m(n) {
              return (45 === n || o(n)) && l++ < 63
                ? (e.consume(n), 45 === n ? m : h)
                : t(n);
            }
            function g(t) {
              return (
                e.enter("autolinkMarker"),
                e.consume(t),
                e.exit("autolinkMarker"),
                e.exit("autolink"),
                n
              );
            }
          },
        };
      e.exports = l;
    },
    5485: function (e, n, t) {
      "use strict";
      var r = t(3654),
        o = t(2928),
        i = {
          name: "blockQuote",
          tokenize: function (e, n, t) {
            var o = this;
            return function (n) {
              if (62 === n)
                return (
                  o.containerState.open ||
                    (e.enter("blockQuote", { _container: !0 }),
                    (o.containerState.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(n),
                  e.exit("blockQuoteMarker"),
                  i
                );
              return t(n);
            };
            function i(t) {
              return r(t)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(t),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  n)
                : (e.exit("blockQuotePrefix"), n(t));
            }
          },
          continuation: {
            tokenize: function (e, n, t) {
              return o(
                e,
                e.attempt(i, n, t),
                "linePrefix",
                this.parser.constructs.disable.null.indexOf("codeIndented") > -1
                  ? void 0
                  : 4
              );
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      e.exports = i;
    },
    9653: function (e, n, t) {
      "use strict";
      var r = t(3074),
        o = {
          name: "characterEscape",
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(n),
                e.exit("escapeMarker"),
                o
              );
            };
            function o(o) {
              return r(o)
                ? (e.enter("characterEscapeValue"),
                  e.consume(o),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  n)
                : t(o);
            }
          },
        };
      e.exports = o;
    },
    6713: function (e, n, t) {
      "use strict";
      var r = t(9435),
        o = t(6712),
        i = t(3977),
        u = t(6238);
      function l(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var a = l(r),
        c = {
          name: "characterReference",
          tokenize: function (e, n, t) {
            var r,
              l,
              c = this,
              s = 0;
            return function (n) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(n),
                e.exit("characterReferenceMarker"),
                f
              );
            };
            function f(n) {
              return 35 === n
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(n),
                  e.exit("characterReferenceMarkerNumeric"),
                  p)
                : (e.enter("characterReferenceValue"), (r = 31), (l = o), d(n));
            }
            function p(n) {
              return 88 === n || 120 === n
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(n),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (l = u),
                  d)
                : (e.enter("characterReferenceValue"), (r = 7), (l = i), d(n));
            }
            function d(i) {
              var u;
              return 59 === i && s
                ? ((u = e.exit("characterReferenceValue")),
                  l !== o || a.default(c.sliceSerialize(u))
                    ? (e.enter("characterReferenceMarker"),
                      e.consume(i),
                      e.exit("characterReferenceMarker"),
                      e.exit("characterReference"),
                      n)
                    : t(i))
                : l(i) && s++ < r
                ? (e.consume(i), d)
                : t(i);
            }
          },
        };
      e.exports = c;
    },
    6597: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(8367),
        i = t(5096),
        u = t(2928),
        l = {
          name: "codeFenced",
          tokenize: function (e, n, t) {
            var l,
              a = this,
              c = {
                tokenize: function (e, n, t) {
                  var o = 0;
                  return u(
                    e,
                    i,
                    "linePrefix",
                    this.parser.constructs.disable.null.indexOf(
                      "codeIndented"
                    ) > -1
                      ? void 0
                      : 4
                  );
                  function i(n) {
                    return (
                      e.enter("codeFencedFence"),
                      e.enter("codeFencedFenceSequence"),
                      a(n)
                    );
                  }
                  function a(n) {
                    return n === l
                      ? (e.consume(n), o++, a)
                      : o < f
                      ? t(n)
                      : (e.exit("codeFencedFenceSequence"),
                        u(e, c, "whitespace")(n));
                  }
                  function c(o) {
                    return null === o || r(o)
                      ? (e.exit("codeFencedFence"), n(o))
                      : t(o);
                  }
                },
                partial: !0,
              },
              s = i(this.events, "linePrefix"),
              f = 0;
            return function (n) {
              return (
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                (l = n),
                p(n)
              );
            };
            function p(n) {
              return n === l
                ? (e.consume(n), f++, p)
                : (e.exit("codeFencedFenceSequence"),
                  f < 3 ? t(n) : u(e, d, "whitespace")(n));
            }
            function d(n) {
              return null === n || r(n)
                ? v(n)
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  h(n));
            }
            function h(n) {
              return null === n || o(n)
                ? (e.exit("chunkString"),
                  e.exit("codeFencedFenceInfo"),
                  u(e, m, "whitespace")(n))
                : 96 === n && n === l
                ? t(n)
                : (e.consume(n), h);
            }
            function m(n) {
              return null === n || r(n)
                ? v(n)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  g(n));
            }
            function g(n) {
              return null === n || r(n)
                ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), v(n))
                : 96 === n && n === l
                ? t(n)
                : (e.consume(n), g);
            }
            function v(t) {
              return e.exit("codeFencedFence"), a.interrupt ? n(t) : y(t);
            }
            function y(n) {
              return null === n
                ? k(n)
                : r(n)
                ? (e.enter("lineEnding"),
                  e.consume(n),
                  e.exit("lineEnding"),
                  e.attempt(c, k, s ? u(e, y, "linePrefix", s + 1) : y))
                : (e.enter("codeFlowValue"), x(n));
            }
            function x(n) {
              return null === n || r(n)
                ? (e.exit("codeFlowValue"), y(n))
                : (e.consume(n), x);
            }
            function k(t) {
              return e.exit("codeFenced"), n(t);
            }
          },
          concrete: !0,
        };
      e.exports = l;
    },
    431: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(6808),
        i = t(5096),
        u = t(2928),
        l = {
          name: "codeIndented",
          tokenize: function (e, n, t) {
            return e.attempt(a, o, t);
            function o(t) {
              return null === t
                ? n(t)
                : r(t)
                ? e.attempt(a, o, n)(t)
                : (e.enter("codeFlowValue"), i(t));
            }
            function i(n) {
              return null === n || r(n)
                ? (e.exit("codeFlowValue"), o(n))
                : (e.consume(n), i);
            }
          },
          resolve: function (e, n) {
            var t = {
              type: "codeIndented",
              start: e[0][1].start,
              end: e[e.length - 1][1].end,
            };
            return (
              o(e, 0, 0, [["enter", t, n]]),
              o(e, e.length, 0, [["exit", t, n]]),
              e
            );
          },
        },
        a = {
          tokenize: function (e, n, t) {
            var o = this;
            return u(
              e,
              function l(a) {
                if (r(a))
                  return (
                    e.enter("lineEnding"),
                    e.consume(a),
                    e.exit("lineEnding"),
                    u(e, l, "linePrefix", 5)
                  );
                return i(o.events, "linePrefix") < 4 ? t(a) : n(a);
              },
              "linePrefix",
              5
            );
          },
          partial: !0,
        };
      e.exports = l;
    },
    26: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = {
          name: "codeText",
          tokenize: function (e, n, t) {
            var o,
              i,
              u = 0;
            return function (n) {
              return e.enter("codeText"), e.enter("codeTextSequence"), l(n);
            };
            function l(n) {
              return 96 === n
                ? (e.consume(n), u++, l)
                : (e.exit("codeTextSequence"), a(n));
            }
            function a(n) {
              return null === n
                ? t(n)
                : 96 === n
                ? ((i = e.enter("codeTextSequence")), (o = 0), s(n))
                : 32 === n
                ? (e.enter("space"), e.consume(n), e.exit("space"), a)
                : r(n)
                ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a)
                : (e.enter("codeTextData"), c(n));
            }
            function c(n) {
              return null === n || 32 === n || 96 === n || r(n)
                ? (e.exit("codeTextData"), a(n))
                : (e.consume(n), c);
            }
            function s(t) {
              return 96 === t
                ? (e.consume(t), o++, s)
                : o === u
                ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t))
                : ((i.type = "codeTextData"), c(t));
            }
          },
          resolve: function (e) {
            var n,
              t,
              r = e.length - 4,
              o = 3;
            if (
              ("lineEnding" === e[o][1].type || "space" === e[o][1].type) &&
              ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
            )
              for (n = o; ++n < r; )
                if ("codeTextData" === e[n][1].type) {
                  (e[r][1].type = e[o][1].type = "codeTextPadding"),
                    (o += 2),
                    (r -= 2);
                  break;
                }
            (n = o - 1), r++;
            for (; ++n <= r; )
              void 0 === t
                ? n !== r && "lineEnding" !== e[n][1].type && (t = n)
                : (n !== r && "lineEnding" !== e[n][1].type) ||
                  ((e[t][1].type = "codeTextData"),
                  n !== t + 2 &&
                    ((e[t][1].end = e[n - 1][1].end),
                    e.splice(t + 2, n - t - 2),
                    (r -= n - t - 2),
                    (n = t + 2)),
                  (t = void 0));
            return e;
          },
          previous: function (e) {
            return (
              96 !== e ||
              "characterEscape" === this.events[this.events.length - 1][1].type
            );
          },
        };
      e.exports = o;
    },
    4590: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(5096),
        i = t(4423),
        u = t(2928),
        l = {
          tokenize: function (e, n) {
            var t;
            return function (n) {
              return (
                e.enter("content"),
                (t = e.enter("chunkContent", { contentType: "content" })),
                o(n)
              );
            };
            function o(n) {
              return null === n
                ? i(n)
                : r(n)
                ? e.check(a, u, i)(n)
                : (e.consume(n), o);
            }
            function i(t) {
              return e.exit("chunkContent"), e.exit("content"), n(t);
            }
            function u(n) {
              return (
                e.consume(n),
                e.exit("chunkContent"),
                (t = t.next =
                  e.enter("chunkContent", {
                    contentType: "content",
                    previous: t,
                  })),
                o
              );
            }
          },
          resolve: function (e) {
            return i(e), e;
          },
          interruptible: !0,
          lazy: !0,
        },
        a = {
          tokenize: function (e, n, t) {
            var i = this;
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                u(e, l, "linePrefix")
              );
            };
            function l(u) {
              return null === u || r(u)
                ? t(u)
                : i.parser.constructs.disable.null.indexOf("codeIndented") >
                    -1 || o(i.events, "linePrefix") < 4
                ? e.interrupt(i.parser.constructs.flow, t, n)(u)
                : n(u);
            }
          },
          partial: !0,
        };
      e.exports = l;
    },
    3865: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(8367),
        i = t(5478),
        u = t(8229),
        l = t(7154),
        a = t(2928),
        c = t(1056),
        s = t(9283),
        f = {
          name: "definition",
          tokenize: function (e, n, t) {
            var o,
              s = this;
            return function (n) {
              return (
                e.enter("definition"),
                l.call(
                  s,
                  e,
                  f,
                  t,
                  "definitionLabel",
                  "definitionLabelMarker",
                  "definitionLabelString"
                )(n)
              );
            };
            function f(n) {
              return (
                (o = i(
                  s
                    .sliceSerialize(s.events[s.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === n
                  ? (e.enter("definitionMarker"),
                    e.consume(n),
                    e.exit("definitionMarker"),
                    c(
                      e,
                      u(
                        e,
                        e.attempt(
                          p,
                          a(e, d, "whitespace"),
                          a(e, d, "whitespace")
                        ),
                        t,
                        "definitionDestination",
                        "definitionDestinationLiteral",
                        "definitionDestinationLiteralMarker",
                        "definitionDestinationRaw",
                        "definitionDestinationString"
                      )
                    ))
                  : t(n)
              );
            }
            function d(i) {
              return null === i || r(i)
                ? (e.exit("definition"),
                  s.parser.defined.indexOf(o) < 0 && s.parser.defined.push(o),
                  n(i))
                : t(i);
            }
          },
        },
        p = {
          tokenize: function (e, n, t) {
            return function (n) {
              return o(n) ? c(e, i)(n) : t(n);
            };
            function i(n) {
              return 34 === n || 39 === n || 40 === n
                ? s(
                    e,
                    a(e, u, "whitespace"),
                    t,
                    "definitionTitle",
                    "definitionTitleMarker",
                    "definitionTitleString"
                  )(n)
                : t(n);
            }
            function u(e) {
              return null === e || r(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      e.exports = f;
    },
    8229: function (e, n, t) {
      "use strict";
      var r = t(9696),
        o = t(8367),
        i = t(7238);
      e.exports = function (e, n, t, u, l, a, c, s, f) {
        var p = f || 1 / 0,
          d = 0;
        return function (n) {
          if (60 === n)
            return (
              e.enter(u), e.enter(l), e.enter(a), e.consume(n), e.exit(a), h
            );
          if (r(n) || 41 === n) return t(n);
          return (
            e.enter(u),
            e.enter(c),
            e.enter(s),
            e.enter("chunkString", { contentType: "string" }),
            v(n)
          );
        };
        function h(t) {
          return 62 === t
            ? (e.enter(a), e.consume(t), e.exit(a), e.exit(l), e.exit(u), n)
            : (e.enter(s),
              e.enter("chunkString", { contentType: "string" }),
              m(t));
        }
        function m(n) {
          return 62 === n
            ? (e.exit("chunkString"), e.exit(s), h(n))
            : null === n || 60 === n || i(n)
            ? t(n)
            : (e.consume(n), 92 === n ? g : m);
        }
        function g(n) {
          return 60 === n || 62 === n || 92 === n ? (e.consume(n), m) : m(n);
        }
        function v(i) {
          return 40 === i
            ? ++d > p
              ? t(i)
              : (e.consume(i), v)
            : 41 === i
            ? d--
              ? (e.consume(i), v)
              : (e.exit("chunkString"), e.exit(s), e.exit(c), e.exit(u), n(i))
            : null === i || o(i)
            ? d
              ? t(i)
              : (e.exit("chunkString"), e.exit(s), e.exit(c), e.exit(u), n(i))
            : r(i)
            ? t(i)
            : (e.consume(i), 92 === i ? y : v);
        }
        function y(n) {
          return 40 === n || 41 === n || 92 === n ? (e.consume(n), v) : v(n);
        }
      };
    },
    7154: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(3654);
      e.exports = function (e, n, t, i, u, l) {
        var a,
          c = this,
          s = 0;
        return function (n) {
          return e.enter(i), e.enter(u), e.consume(n), e.exit(u), e.enter(l), f;
        };
        function f(o) {
          return null === o ||
            91 === o ||
            (93 === o && !a) ||
            (94 === o &&
              !s &&
              "_hiddenFootnoteSupport" in c.parser.constructs) ||
            s > 999
            ? t(o)
            : 93 === o
            ? (e.exit(l), e.enter(u), e.consume(o), e.exit(u), e.exit(i), n)
            : r(o)
            ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), f)
            : (e.enter("chunkString", { contentType: "string" }), p(o));
        }
        function p(n) {
          return null === n || 91 === n || 93 === n || r(n) || s++ > 999
            ? (e.exit("chunkString"), f(n))
            : (e.consume(n), (a = a || !o(n)), 92 === n ? d : p);
        }
        function d(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), s++, p)
            : p(n);
        }
      };
    },
    2928: function (e, n, t) {
      "use strict";
      var r = t(3654);
      e.exports = function (e, n, t, o) {
        var i = o ? o - 1 : 1 / 0,
          u = 0;
        return function (o) {
          if (r(o)) return e.enter(t), l(o);
          return n(o);
        };
        function l(o) {
          return r(o) && u++ < i ? (e.consume(o), l) : (e.exit(t), n(o));
        }
      };
    },
    9283: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(2928);
      e.exports = function (e, n, t, i, u, l) {
        var a;
        return function (n) {
          return (
            e.enter(i),
            e.enter(u),
            e.consume(n),
            e.exit(u),
            (a = 40 === n ? 41 : n),
            c
          );
        };
        function c(t) {
          return t === a
            ? (e.enter(u), e.consume(t), e.exit(u), e.exit(i), n)
            : (e.enter(l), s(t));
        }
        function s(n) {
          return n === a
            ? (e.exit(l), c(a))
            : null === n
            ? t(n)
            : r(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              o(e, s, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), f(n));
        }
        function f(n) {
          return n === a || null === n || r(n)
            ? (e.exit("chunkString"), s(n))
            : (e.consume(n), 92 === n ? p : f);
        }
        function p(n) {
          return n === a || 92 === n ? (e.consume(n), f) : f(n);
        }
      };
    },
    1056: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(3654),
        i = t(2928);
      e.exports = function (e, n) {
        var t;
        return function u(l) {
          if (r(l))
            return (
              e.enter("lineEnding"),
              e.consume(l),
              e.exit("lineEnding"),
              (t = !0),
              u
            );
          if (o(l)) return i(e, u, t ? "linePrefix" : "lineSuffix")(l);
          return n(l);
        };
      };
    },
    5694: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = {
          name: "hardBreakEscape",
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("hardBreakEscape"),
                e.enter("escapeMarker"),
                e.consume(n),
                o
              );
            };
            function o(o) {
              return r(o)
                ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(o))
                : t(o);
            }
          },
        };
      e.exports = o;
    },
    5565: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(8367),
        i = t(3654),
        u = t(6808),
        l = t(2928),
        a = {
          name: "headingAtx",
          tokenize: function (e, n, t) {
            var u = this,
              a = 0;
            return function (n) {
              return e.enter("atxHeading"), e.enter("atxHeadingSequence"), c(n);
            };
            function c(r) {
              return 35 === r && a++ < 6
                ? (e.consume(r), c)
                : null === r || o(r)
                ? (e.exit("atxHeadingSequence"), u.interrupt ? n(r) : s(r))
                : t(r);
            }
            function s(t) {
              return 35 === t
                ? (e.enter("atxHeadingSequence"), f(t))
                : null === t || r(t)
                ? (e.exit("atxHeading"), n(t))
                : i(t)
                ? l(e, s, "whitespace")(t)
                : (e.enter("atxHeadingText"), p(t));
            }
            function f(n) {
              return 35 === n
                ? (e.consume(n), f)
                : (e.exit("atxHeadingSequence"), s(n));
            }
            function p(n) {
              return null === n || 35 === n || o(n)
                ? (e.exit("atxHeadingText"), s(n))
                : (e.consume(n), p);
            }
          },
          resolve: function (e, n) {
            var t,
              r,
              o = e.length - 2,
              i = 3;
            "whitespace" === e[i][1].type && (i += 2);
            o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
            "atxHeadingSequence" === e[o][1].type &&
              (i === o - 1 ||
                (o - 4 > i && "whitespace" === e[o - 2][1].type)) &&
              (o -= i + 1 === o ? 2 : 4);
            o > i &&
              ((t = {
                type: "atxHeadingText",
                start: e[i][1].start,
                end: e[o][1].end,
              }),
              (r = {
                type: "chunkText",
                start: e[i][1].start,
                end: e[o][1].end,
                contentType: "text",
              }),
              u(e, i, o - i + 1, [
                ["enter", t, n],
                ["enter", r, n],
                ["exit", r, n],
                ["exit", t, n],
              ]));
            return e;
          },
        };
      e.exports = a;
    },
    6872: function (e, n, t) {
      "use strict";
      var r = t(6734),
        o = t(6712),
        i = t(7238),
        u = t(8367),
        l = t(3654),
        a = t(3267),
        c = t(7139),
        s = t(6871),
        f = t(6532),
        p = {
          name: "htmlFlow",
          tokenize: function (e, n, t) {
            var f,
              p,
              h,
              m,
              g,
              v = this;
            return function (n) {
              return (
                e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), y
              );
            };
            function y(o) {
              return 33 === o
                ? (e.consume(o), x)
                : 47 === o
                ? (e.consume(o), w)
                : 63 === o
                ? (e.consume(o), (f = 3), v.interrupt ? n : N)
                : r(o)
                ? (e.consume(o), (h = a(o)), (p = !0), S)
                : t(o);
            }
            function x(o) {
              return 45 === o
                ? (e.consume(o), (f = 2), k)
                : 91 === o
                ? (e.consume(o), (f = 5), (h = "CDATA["), (m = 0), b)
                : r(o)
                ? (e.consume(o), (f = 4), v.interrupt ? n : N)
                : t(o);
            }
            function k(r) {
              return 45 === r ? (e.consume(r), v.interrupt ? n : N) : t(r);
            }
            function b(r) {
              return r === h.charCodeAt(m++)
                ? (e.consume(r), m === h.length ? (v.interrupt ? n : R) : b)
                : t(r);
            }
            function w(n) {
              return r(n) ? (e.consume(n), (h = a(n)), S) : t(n);
            }
            function S(r) {
              return null === r || 47 === r || 62 === r || u(r)
                ? 47 !== r && p && s.indexOf(h.toLowerCase()) > -1
                  ? ((f = 1), v.interrupt ? n(r) : R(r))
                  : c.indexOf(h.toLowerCase()) > -1
                  ? ((f = 6),
                    47 === r ? (e.consume(r), E) : v.interrupt ? n(r) : R(r))
                  : ((f = 7), v.interrupt ? t(r) : p ? P(r) : C(r))
                : 45 === r || o(r)
                ? (e.consume(r), (h += a(r)), S)
                : t(r);
            }
            function E(r) {
              return 62 === r ? (e.consume(r), v.interrupt ? n : R) : t(r);
            }
            function C(n) {
              return l(n) ? (e.consume(n), C) : I(n);
            }
            function P(n) {
              return 47 === n
                ? (e.consume(n), I)
                : 58 === n || 95 === n || r(n)
                ? (e.consume(n), T)
                : l(n)
                ? (e.consume(n), P)
                : I(n);
            }
            function T(n) {
              return 45 === n || 46 === n || 58 === n || 95 === n || o(n)
                ? (e.consume(n), T)
                : F(n);
            }
            function F(n) {
              return 61 === n
                ? (e.consume(n), A)
                : l(n)
                ? (e.consume(n), F)
                : P(n);
            }
            function A(n) {
              return null === n || 60 === n || 61 === n || 62 === n || 96 === n
                ? t(n)
                : 34 === n || 39 === n
                ? (e.consume(n), (g = n), O)
                : l(n)
                ? (e.consume(n), A)
                : ((g = void 0), D(n));
            }
            function O(n) {
              return n === g
                ? (e.consume(n), L)
                : null === n || i(n)
                ? t(n)
                : (e.consume(n), O);
            }
            function D(n) {
              return null === n ||
                34 === n ||
                39 === n ||
                60 === n ||
                61 === n ||
                62 === n ||
                96 === n ||
                u(n)
                ? F(n)
                : (e.consume(n), D);
            }
            function L(e) {
              return 47 === e || 62 === e || l(e) ? P(e) : t(e);
            }
            function I(n) {
              return 62 === n ? (e.consume(n), M) : t(n);
            }
            function M(n) {
              return l(n)
                ? (e.consume(n), M)
                : null === n || i(n)
                ? R(n)
                : t(n);
            }
            function R(n) {
              return 45 === n && 2 === f
                ? (e.consume(n), _)
                : 60 === n && 1 === f
                ? (e.consume(n), j)
                : 62 === n && 4 === f
                ? (e.consume(n), $)
                : 63 === n && 3 === f
                ? (e.consume(n), N)
                : 93 === n && 5 === f
                ? (e.consume(n), H)
                : !i(n) || (6 !== f && 7 !== f)
                ? null === n || i(n)
                  ? z(n)
                  : (e.consume(n), R)
                : e.check(d, $, z)(n);
            }
            function z(n) {
              return e.exit("htmlFlowData"), B(n);
            }
            function B(n) {
              return null === n
                ? V(n)
                : i(n)
                ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), B)
                : (e.enter("htmlFlowData"), R(n));
            }
            function _(n) {
              return 45 === n ? (e.consume(n), N) : R(n);
            }
            function j(n) {
              return 47 === n ? (e.consume(n), (h = ""), U) : R(n);
            }
            function U(n) {
              return 62 === n && s.indexOf(h.toLowerCase()) > -1
                ? (e.consume(n), $)
                : r(n) && h.length < 8
                ? (e.consume(n), (h += a(n)), U)
                : R(n);
            }
            function H(n) {
              return 93 === n ? (e.consume(n), N) : R(n);
            }
            function N(n) {
              return 62 === n ? (e.consume(n), $) : R(n);
            }
            function $(n) {
              return null === n || i(n)
                ? (e.exit("htmlFlowData"), V(n))
                : (e.consume(n), $);
            }
            function V(t) {
              return e.exit("htmlFlow"), n(t);
            }
          },
          resolveTo: function (e) {
            var n = e.length;
            for (
              ;
              n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type);

            );
            n > 1 &&
              "linePrefix" === e[n - 2][1].type &&
              ((e[n][1].start = e[n - 2][1].start),
              (e[n + 1][1].start = e[n - 2][1].start),
              e.splice(n - 2, 2));
            return e;
          },
          concrete: !0,
        },
        d = {
          tokenize: function (e, n, t) {
            return function (r) {
              return (
                e.exit("htmlFlowData"),
                e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                e.attempt(f, n, t)
              );
            };
          },
          partial: !0,
        };
      e.exports = p;
    },
    8911: function (e, n, t) {
      "use strict";
      var r = t(6734),
        o = t(6712),
        i = t(7238),
        u = t(8367),
        l = t(3654),
        a = t(2928),
        c = {
          name: "htmlText",
          tokenize: function (e, n, t) {
            var c,
              s,
              f,
              p,
              d = this;
            return function (n) {
              return (
                e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), h
              );
            };
            function h(n) {
              return 33 === n
                ? (e.consume(n), m)
                : 47 === n
                ? (e.consume(n), F)
                : 63 === n
                ? (e.consume(n), P)
                : r(n)
                ? (e.consume(n), D)
                : t(n);
            }
            function m(n) {
              return 45 === n
                ? (e.consume(n), g)
                : 91 === n
                ? (e.consume(n), (s = "CDATA["), (f = 0), b)
                : r(n)
                ? (e.consume(n), C)
                : t(n);
            }
            function g(n) {
              return 45 === n ? (e.consume(n), v) : t(n);
            }
            function v(n) {
              return null === n || 62 === n
                ? t(n)
                : 45 === n
                ? (e.consume(n), y)
                : x(n);
            }
            function y(e) {
              return null === e || 62 === e ? t(e) : x(e);
            }
            function x(n) {
              return null === n
                ? t(n)
                : 45 === n
                ? (e.consume(n), k)
                : i(n)
                ? ((p = x), j(n))
                : (e.consume(n), x);
            }
            function k(n) {
              return 45 === n ? (e.consume(n), H) : x(n);
            }
            function b(n) {
              return n === s.charCodeAt(f++)
                ? (e.consume(n), f === s.length ? w : b)
                : t(n);
            }
            function w(n) {
              return null === n
                ? t(n)
                : 93 === n
                ? (e.consume(n), S)
                : i(n)
                ? ((p = w), j(n))
                : (e.consume(n), w);
            }
            function S(n) {
              return 93 === n ? (e.consume(n), E) : w(n);
            }
            function E(n) {
              return 62 === n ? H(n) : 93 === n ? (e.consume(n), E) : w(n);
            }
            function C(n) {
              return null === n || 62 === n
                ? H(n)
                : i(n)
                ? ((p = C), j(n))
                : (e.consume(n), C);
            }
            function P(n) {
              return null === n
                ? t(n)
                : 63 === n
                ? (e.consume(n), T)
                : i(n)
                ? ((p = P), j(n))
                : (e.consume(n), P);
            }
            function T(e) {
              return 62 === e ? H(e) : P(e);
            }
            function F(n) {
              return r(n) ? (e.consume(n), A) : t(n);
            }
            function A(n) {
              return 45 === n || o(n) ? (e.consume(n), A) : O(n);
            }
            function O(n) {
              return i(n) ? ((p = O), j(n)) : l(n) ? (e.consume(n), O) : H(n);
            }
            function D(n) {
              return 45 === n || o(n)
                ? (e.consume(n), D)
                : 47 === n || 62 === n || u(n)
                ? L(n)
                : t(n);
            }
            function L(n) {
              return 47 === n
                ? (e.consume(n), H)
                : 58 === n || 95 === n || r(n)
                ? (e.consume(n), I)
                : i(n)
                ? ((p = L), j(n))
                : l(n)
                ? (e.consume(n), L)
                : H(n);
            }
            function I(n) {
              return 45 === n || 46 === n || 58 === n || 95 === n || o(n)
                ? (e.consume(n), I)
                : M(n);
            }
            function M(n) {
              return 61 === n
                ? (e.consume(n), R)
                : i(n)
                ? ((p = M), j(n))
                : l(n)
                ? (e.consume(n), M)
                : L(n);
            }
            function R(n) {
              return null === n || 60 === n || 61 === n || 62 === n || 96 === n
                ? t(n)
                : 34 === n || 39 === n
                ? (e.consume(n), (c = n), z)
                : i(n)
                ? ((p = R), j(n))
                : l(n)
                ? (e.consume(n), R)
                : (e.consume(n), (c = void 0), _);
            }
            function z(n) {
              return n === c
                ? (e.consume(n), B)
                : null === n
                ? t(n)
                : i(n)
                ? ((p = z), j(n))
                : (e.consume(n), z);
            }
            function B(e) {
              return 62 === e || 47 === e || u(e) ? L(e) : t(e);
            }
            function _(n) {
              return null === n ||
                34 === n ||
                39 === n ||
                60 === n ||
                61 === n ||
                96 === n
                ? t(n)
                : 62 === n || u(n)
                ? L(n)
                : (e.consume(n), _);
            }
            function j(n) {
              return (
                e.exit("htmlTextData"),
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                a(
                  e,
                  U,
                  "linePrefix",
                  d.parser.constructs.disable.null.indexOf("codeIndented") > -1
                    ? void 0
                    : 4
                )
              );
            }
            function U(n) {
              return e.enter("htmlTextData"), p(n);
            }
            function H(r) {
              return 62 === r
                ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n)
                : t(r);
            }
          },
        };
      e.exports = c;
    },
    1294: function (e, n, t) {
      "use strict";
      var r = t(8367),
        o = t(8811),
        i = t(6808),
        u = t(5478),
        l = t(8280),
        a = t(5923),
        c = t(8229),
        s = t(7154),
        f = t(9283),
        p = t(1056),
        d = {
          name: "labelEnd",
          tokenize: function (e, n, t) {
            var r,
              o,
              i = this,
              l = i.events.length;
            for (; l--; )
              if (
                ("labelImage" === i.events[l][1].type ||
                  "labelLink" === i.events[l][1].type) &&
                !i.events[l][1]._balanced
              ) {
                r = i.events[l][1];
                break;
              }
            return function (n) {
              if (!r) return t(n);
              return r._inactive
                ? c(n)
                : ((o =
                    i.parser.defined.indexOf(
                      u(i.sliceSerialize({ start: r.end, end: i.now() }))
                    ) > -1),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  a);
            };
            function a(t) {
              return 40 === t
                ? e.attempt(h, n, o ? n : c)(t)
                : 91 === t
                ? e.attempt(m, n, o ? e.attempt(g, n, c) : c)(t)
                : o
                ? n(t)
                : c(t);
            }
            function c(e) {
              return (r._balanced = !0), t(e);
            }
          },
          resolveTo: function (e, n) {
            var t,
              r,
              u,
              c,
              s,
              f,
              p,
              d = e.length,
              h = 0;
            for (; d--; )
              if (((c = e[d][1]), s)) {
                if (
                  "link" === c.type ||
                  ("labelLink" === c.type && c._inactive)
                )
                  break;
                "enter" === e[d][0] &&
                  "labelLink" === c.type &&
                  (c._inactive = !0);
              } else if (f) {
                if (
                  "enter" === e[d][0] &&
                  ("labelImage" === c.type || "labelLink" === c.type) &&
                  !c._balanced &&
                  ((s = d), "labelLink" !== c.type)
                ) {
                  h = 2;
                  break;
                }
              } else "labelEnd" === c.type && (f = d);
            return (
              (t = {
                type: "labelLink" === e[s][1].type ? "link" : "image",
                start: a(e[s][1].start),
                end: a(e[e.length - 1][1].end),
              }),
              (r = {
                type: "label",
                start: a(e[s][1].start),
                end: a(e[f][1].end),
              }),
              (u = {
                type: "labelText",
                start: a(e[s + h + 2][1].end),
                end: a(e[f - 2][1].start),
              }),
              (p = o(
                (p = [
                  ["enter", t, n],
                  ["enter", r, n],
                ]),
                e.slice(s + 1, s + h + 3)
              )),
              (p = o(p, [["enter", u, n]])),
              (p = o(
                p,
                l(
                  n.parser.constructs.insideSpan.null,
                  e.slice(s + h + 4, f - 3),
                  n
                )
              )),
              (p = o(p, [["exit", u, n], e[f - 2], e[f - 1], ["exit", r, n]])),
              (p = o(p, e.slice(f + 1))),
              (p = o(p, [["exit", t, n]])),
              i(e, s, e.length, p),
              e
            );
          },
          resolveAll: function (e) {
            var n,
              t = -1;
            for (; ++t < e.length; )
              (n = e[t][1])._used ||
                ("labelImage" !== n.type &&
                  "labelLink" !== n.type &&
                  "labelEnd" !== n.type) ||
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            return e;
          },
        },
        h = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(n),
                e.exit("resourceMarker"),
                p(e, o)
              );
            };
            function o(n) {
              return 41 === n
                ? l(n)
                : c(
                    e,
                    i,
                    t,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    3
                  )(n);
            }
            function i(n) {
              return r(n) ? p(e, u)(n) : l(n);
            }
            function u(n) {
              return 34 === n || 39 === n || 40 === n
                ? f(
                    e,
                    p(e, l),
                    t,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(n)
                : l(n);
            }
            function l(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  n)
                : t(r);
            }
          },
        },
        m = {
          tokenize: function (e, n, t) {
            var r = this;
            return function (n) {
              return s.call(
                r,
                e,
                o,
                t,
                "reference",
                "referenceMarker",
                "referenceString"
              )(n);
            };
            function o(e) {
              return r.parser.defined.indexOf(
                u(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              ) < 0
                ? t(e)
                : n(e);
            }
          },
        },
        g = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(n),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  n)
                : t(r);
            }
          },
        };
      e.exports = d;
    },
    6215: function (e, n, t) {
      "use strict";
      var r = {
        name: "labelStartImage",
        tokenize: function (e, n, t) {
          var r = this;
          return function (n) {
            return (
              e.enter("labelImage"),
              e.enter("labelImageMarker"),
              e.consume(n),
              e.exit("labelImageMarker"),
              o
            );
          };
          function o(n) {
            return 91 === n
              ? (e.enter("labelMarker"),
                e.consume(n),
                e.exit("labelMarker"),
                e.exit("labelImage"),
                i)
              : t(n);
          }
          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? t(e)
              : n(e);
          }
        },
        resolveAll: t(1294).resolveAll,
      };
      e.exports = r;
    },
    534: function (e, n, t) {
      "use strict";
      var r = {
        name: "labelStartLink",
        tokenize: function (e, n, t) {
          var r = this;
          return function (n) {
            return (
              e.enter("labelLink"),
              e.enter("labelMarker"),
              e.consume(n),
              e.exit("labelMarker"),
              e.exit("labelLink"),
              o
            );
          };
          function o(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? t(e)
              : n(e);
          }
        },
        resolveAll: t(1294).resolveAll,
      };
      e.exports = r;
    },
    2607: function (e, n, t) {
      "use strict";
      var r = t(2928),
        o = {
          name: "lineEnding",
          tokenize: function (e, n) {
            return function (t) {
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                r(e, n, "linePrefix")
              );
            };
          },
        };
      e.exports = o;
    },
    6931: function (e, n, t) {
      "use strict";
      var r = t(3977),
        o = t(3654),
        i = t(5096),
        u = t(8892),
        l = t(2928),
        a = t(6532),
        c = t(7039),
        s = {
          name: "list",
          tokenize: function (e, n, t) {
            var l = this,
              s = i(l.events, "linePrefix"),
              p = 0;
            return function (n) {
              var o =
                l.containerState.type ||
                (42 === n || 43 === n || 45 === n
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === o
                  ? !l.containerState.marker || n === l.containerState.marker
                  : r(n)
              ) {
                if (
                  (l.containerState.type ||
                    ((l.containerState.type = o),
                    e.enter(o, { _container: !0 })),
                  "listUnordered" === o)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === n || 45 === n ? e.check(c, t, h)(n) : h(n)
                  );
                if (!l.interrupt || 49 === n)
                  return (
                    e.enter("listItemPrefix"), e.enter("listItemValue"), d(n)
                  );
              }
              return t(n);
            };
            function d(n) {
              return r(n) && ++p < 10
                ? (e.consume(n), d)
                : (!l.interrupt || p < 2) &&
                  (l.containerState.marker
                    ? n === l.containerState.marker
                    : 41 === n || 46 === n)
                ? (e.exit("listItemValue"), h(n))
                : t(n);
            }
            function h(n) {
              return (
                e.enter("listItemMarker"),
                e.consume(n),
                e.exit("listItemMarker"),
                (l.containerState.marker = l.containerState.marker || n),
                e.check(a, l.interrupt ? t : m, e.attempt(f, v, g))
              );
            }
            function m(e) {
              return (l.containerState.initialBlankLine = !0), s++, v(e);
            }
            function g(n) {
              return o(n)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(n),
                  e.exit("listItemPrefixWhitespace"),
                  v)
                : t(n);
            }
            function v(t) {
              return (
                (l.containerState.size =
                  s + u(l.sliceStream(e.exit("listItemPrefix")))),
                n(t)
              );
            }
          },
          continuation: {
            tokenize: function (e, n, t) {
              var r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  a,
                  function (t) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      l(e, n, "listItemIndent", r.containerState.size + 1)(t)
                    );
                  },
                  function (t) {
                    if (r.containerState.furtherBlankLines || !o(t))
                      return (
                        (r.containerState.furtherBlankLines =
                          r.containerState.initialBlankLine =
                            void 0),
                        i(t)
                      );
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.initialBlankLine =
                          void 0),
                      e.attempt(p, n, i)(t)
                    );
                  }
                )
              );
              function i(o) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  l(
                    e,
                    e.attempt(s, n, t),
                    "linePrefix",
                    r.parser.constructs.disable.null.indexOf("codeIndented") >
                      -1
                      ? void 0
                      : 4
                  )(o)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        f = {
          tokenize: function (e, n, t) {
            var r = this;
            return l(
              e,
              function (e) {
                return o(e) || !i(r.events, "listItemPrefixWhitespace")
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.indexOf("codeIndented") > -1
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        p = {
          tokenize: function (e, n, t) {
            var r = this;
            return l(
              e,
              function (e) {
                return i(r.events, "listItemIndent") === r.containerState.size
                  ? n(e)
                  : t(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        };
      e.exports = s;
    },
    6532: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(2928),
        i = {
          tokenize: function (e, n, t) {
            return o(
              e,
              function (e) {
                return null === e || r(e) ? n(e) : t(e);
              },
              "linePrefix"
            );
          },
          partial: !0,
        };
      e.exports = i;
    },
    5874: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(5923),
        i = t(2928),
        u = {
          name: "setextUnderline",
          tokenize: function (e, n, t) {
            var o,
              u,
              l = this,
              a = l.events.length;
            for (; a--; )
              if (
                "lineEnding" !== l.events[a][1].type &&
                "linePrefix" !== l.events[a][1].type &&
                "content" !== l.events[a][1].type
              ) {
                u = "paragraph" === l.events[a][1].type;
                break;
              }
            return function (n) {
              if (!l.lazy && (l.interrupt || u))
                return (
                  e.enter("setextHeadingLine"),
                  e.enter("setextHeadingLineSequence"),
                  (o = n),
                  c(n)
                );
              return t(n);
            };
            function c(n) {
              return n === o
                ? (e.consume(n), c)
                : (e.exit("setextHeadingLineSequence"),
                  i(e, s, "lineSuffix")(n));
            }
            function s(o) {
              return null === o || r(o)
                ? (e.exit("setextHeadingLine"), n(o))
                : t(o);
            }
          },
          resolveTo: function (e, n) {
            var t,
              r,
              i,
              u,
              l = e.length;
            for (; l--; )
              if ("enter" === e[l][0]) {
                if ("content" === e[l][1].type) {
                  t = l;
                  break;
                }
                "paragraph" === e[l][1].type && (r = l);
              } else
                "content" === e[l][1].type && e.splice(l, 1),
                  i || "definition" !== e[l][1].type || (i = l);
            (u = {
              type: "setextHeading",
              start: o(e[r][1].start),
              end: o(e[e.length - 1][1].end),
            }),
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", u, n]),
                  e.splice(i + 1, 0, ["exit", e[t][1], n]),
                  (e[t][1].end = o(e[i][1].end)))
                : (e[t][1] = u);
            return e.push(["exit", u, n]), e;
          },
        };
      e.exports = u;
    },
    7039: function (e, n, t) {
      "use strict";
      var r = t(7238),
        o = t(3654),
        i = t(2928),
        u = {
          name: "thematicBreak",
          tokenize: function (e, n, t) {
            var u,
              l = 0;
            return function (n) {
              return e.enter("thematicBreak"), (u = n), a(n);
            };
            function a(s) {
              return s === u
                ? (e.enter("thematicBreakSequence"), c(s))
                : o(s)
                ? i(e, a, "whitespace")(s)
                : l < 3 || (null !== s && !r(s))
                ? t(s)
                : (e.exit("thematicBreak"), n(s));
            }
            function c(n) {
              return n === u
                ? (e.consume(n), l++, c)
                : (e.exit("thematicBreakSequence"), a(n));
            }
          },
        };
      e.exports = u;
    },
    8811: function (e, n, t) {
      "use strict";
      var r = t(6808);
      e.exports = function (e, n) {
        return e.length ? (r(e, e.length, 0, n), e) : n;
      };
    },
    6808: function (e, n, t) {
      "use strict";
      var r = t(1362);
      e.exports = function (e, n, t, o) {
        var i,
          u = e.length,
          l = 0;
        if (
          ((n = n < 0 ? (-n > u ? 0 : u + n) : n > u ? u : n),
          (t = t > 0 ? t : 0),
          o.length < 1e4)
        )
          (i = Array.from(o)).unshift(n, t), r.apply(e, i);
        else
          for (t && r.apply(e, [n, t]); l < o.length; )
            (i = o.slice(l, l + 1e4)).unshift(n, 0),
              r.apply(e, i),
              (l += 1e4),
              (n += 1e4);
      };
    },
    9444: function (e, n, t) {
      "use strict";
      var r = t(8367),
        o = t(6996),
        i = t(395);
      e.exports = function (e) {
        return null === e || r(e) || i(e) ? 1 : o(e) ? 2 : void 0;
      };
    },
    2952: function (e, n, t) {
      "use strict";
      var r = t(6706),
        o = t(6808),
        i = t(8180);
      function u(e, n) {
        var t, o, u, a;
        for (t in n)
          for (a in ((o = r.call(e, t) ? e[t] : (e[t] = {})), (u = n[t])))
            o[a] = l(i(u[a]), r.call(o, a) ? o[a] : []);
      }
      function l(e, n) {
        for (var t = -1, r = []; ++t < e.length; )
          ("after" === e[t].add ? n : r).push(e[t]);
        return o(n, 0, 0, r), n;
      }
      e.exports = function (e) {
        for (var n = {}, t = -1; ++t < e.length; ) u(n, e[t]);
        return n;
      };
    },
    1388: function (e, n, t) {
      "use strict";
      var r = t(9198),
        o = t(7238),
        i = t(8811),
        u = t(6808),
        l = t(8180),
        a = t(8280),
        c = t(3082),
        s = t(5923),
        f = t(2774);
      e.exports = function (e, n, t) {
        var p = t ? s(t) : { line: 1, column: 1, offset: 0 },
          d = {},
          h = [],
          m = [],
          g = [],
          v = {
            consume: function (e) {
              o(e)
                ? (p.line++,
                  (p.column = 1),
                  (p.offset += -3 === e ? 2 : 1),
                  T())
                : -1 !== e && (p.column++, p.offset++);
              p._bufferIndex < 0
                ? p._index++
                : (p._bufferIndex++,
                  p._bufferIndex === m[p._index].length &&
                    ((p._bufferIndex = -1), p._index++));
              y.previous = e;
            },
            enter: function (e, n) {
              var t = n || {};
              return (
                (t.type = e),
                (t.start = b()),
                y.events.push(["enter", t, y]),
                g.push(t),
                t
              );
            },
            exit: function (e) {
              var n = g.pop();
              return (n.end = b()), y.events.push(["exit", n, y]), n;
            },
            attempt: C(function (e, n) {
              P(e, n.from);
            }),
            check: C(E),
            interrupt: C(E, { interrupt: !0 }),
            lazy: C(E, { lazy: !0 }),
          },
          y = {
            previous: null,
            events: [],
            parser: e,
            sliceStream: k,
            sliceSerialize: function (e) {
              return c(k(e));
            },
            now: b,
            defineSkip: function (e) {
              (d[e.line] = e.column), T();
            },
            write: function (e) {
              if (((m = i(m, e)), w(), null !== m[m.length - 1])) return [];
              return P(n, 0), (y.events = a(h, y.events, y)), y.events;
            },
          },
          x = n.tokenize.call(y, v);
        return (
          n.resolveAll && h.push(n), (p._index = 0), (p._bufferIndex = -1), y
        );
        function k(e) {
          return f(m, e);
        }
        function b() {
          return s(p);
        }
        function w() {
          for (var e, n; p._index < m.length; )
            if ("string" === typeof (n = m[p._index]))
              for (
                e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0);
                p._index === e && p._bufferIndex < n.length;

              )
                S(n.charCodeAt(p._bufferIndex));
            else S(n);
        }
        function S(e) {
          x = x(e);
        }
        function E(e, n) {
          n.restore();
        }
        function C(e, n) {
          return function (t, o, i) {
            var u, a, c, s;
            return t.tokenize || "length" in t
              ? f(l(t))
              : function (e) {
                  if (e in t || null in t)
                    return f(t.null ? l(t[e]).concat(l(t.null)) : t[e])(e);
                  return i(e);
                };
            function f(e) {
              return (u = e), d(e[(a = 0)]);
            }
            function d(e) {
              return function (t) {
                (s = (function () {
                  var e = b(),
                    n = y.previous,
                    t = y.currentConstruct,
                    r = y.events.length,
                    o = Array.from(g);
                  return { restore: i, from: r };
                  function i() {
                    (p = e),
                      (y.previous = n),
                      (y.currentConstruct = t),
                      (y.events.length = r),
                      (g = o),
                      T();
                  }
                })()),
                  (c = e),
                  e.partial || (y.currentConstruct = e);
                if (
                  e.name &&
                  y.parser.constructs.disable.null.indexOf(e.name) > -1
                )
                  return m();
                return e.tokenize.call(n ? r({}, y, n) : y, v, h, m)(t);
              };
            }
            function h(n) {
              return e(c, s), o;
            }
            function m(e) {
              return s.restore(), ++a < u.length ? d(u[a]) : i;
            }
          };
        }
        function P(e, n) {
          e.resolveAll && h.indexOf(e) < 0 && h.push(e),
            e.resolve &&
              u(
                y.events,
                n,
                y.events.length - n,
                e.resolve(y.events.slice(n), y)
              ),
            e.resolveTo && (y.events = e.resolveTo(y.events, y));
        }
        function T() {
          p.line in d &&
            p.column < 2 &&
            ((p.column = d[p.line]), (p.offset += d[p.line] - 1));
        }
      };
    },
    8180: function (e) {
      "use strict";
      e.exports = function (e) {
        return null === e || void 0 === e ? [] : "length" in e ? e : [e];
      };
    },
    5644: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return (e.column += n), (e.offset += n), (e._bufferIndex += n), e;
      };
    },
    5478: function (e) {
      "use strict";
      e.exports = function (e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      };
    },
    5096: function (e, n, t) {
      "use strict";
      var r = t(8892);
      e.exports = function (e, n) {
        var t = e[e.length - 1];
        return t && t[1].type === n ? r(t[2].sliceStream(t[1])) : 0;
      };
    },
    2841: function (e, n, t) {
      "use strict";
      var r = t(3267);
      e.exports = function (e) {
        return function (n) {
          return e.test(r(n));
        };
      };
    },
    8280: function (e) {
      "use strict";
      e.exports = function (e, n, t) {
        for (var r, o = [], i = -1; ++i < e.length; )
          (r = e[i].resolveAll) &&
            o.indexOf(r) < 0 &&
            ((n = r(n, t)), o.push(r));
        return n;
      };
    },
    596: function (e, n, t) {
      "use strict";
      var r = t(3267);
      e.exports = function (e, n) {
        var t = parseInt(e, n);
        return t < 9 ||
          11 === t ||
          (t > 13 && t < 32) ||
          (t > 126 && t < 160) ||
          (t > 55295 && t < 57344) ||
          (t > 64975 && t < 65008) ||
          65535 === (65535 & t) ||
          65534 === (65535 & t) ||
          t > 1114111
          ? "\ufffd"
          : r(t);
      };
    },
    3082: function (e, n, t) {
      "use strict";
      var r = t(3267);
      e.exports = function (e) {
        for (var n, t, o, i = -1, u = []; ++i < e.length; ) {
          if ("string" === typeof (n = e[i])) t = n;
          else if (-5 === n) t = "\r";
          else if (-4 === n) t = "\n";
          else if (-3 === n) t = "\r\n";
          else if (-2 === n) t = "\t";
          else if (-1 === n) {
            if (o) continue;
            t = " ";
          } else t = r(n);
          (o = -2 === n), u.push(t);
        }
        return u.join("");
      };
    },
    5923: function (e, n, t) {
      "use strict";
      var r = t(9198);
      e.exports = function (e) {
        return r({}, e);
      };
    },
    8892: function (e) {
      "use strict";
      e.exports = function (e) {
        for (var n = -1, t = 0; ++n < e.length; )
          t += "string" === typeof e[n] ? e[n].length : 1;
        return t;
      };
    },
    2774: function (e) {
      "use strict";
      e.exports = function (e, n) {
        var t,
          r = n.start._index,
          o = n.start._bufferIndex,
          i = n.end._index,
          u = n.end._bufferIndex;
        return (
          r === i
            ? (t = [e[r].slice(o, u)])
            : ((t = e.slice(r, i)),
              o > -1 && (t[0] = t[0].slice(o)),
              u > 0 && t.push(e[i].slice(0, u))),
          t
        );
      };
    },
    4423: function (e, n, t) {
      "use strict";
      var r = t(9198),
        o = t(6808),
        i = t(5923);
      function u(e, n) {
        for (
          var t,
            r,
            i,
            u,
            l,
            a,
            c = e[n][1],
            s = e[n][2],
            f = n - 1,
            p = [],
            d = c._tokenizer || s.parser[c.contentType](c.start),
            h = d.events,
            m = [],
            g = {};
          c;

        ) {
          for (; e[++f][1] !== c; );
          p.push(f),
            c._tokenizer ||
              ((t = s.sliceStream(c)),
              c.next || t.push(null),
              r && d.defineSkip(c.start),
              c.isInFirstContentOfListItem &&
                (d._gfmTasklistFirstContentOfListItem = !0),
              d.write(t),
              c.isInFirstContentOfListItem &&
                (d._gfmTasklistFirstContentOfListItem = void 0)),
            (r = c),
            (c = c.next);
        }
        for (c = r, i = h.length; i--; )
          "enter" === h[i][0]
            ? (u = !0)
            : u &&
              h[i][1].type === h[i - 1][1].type &&
              h[i][1].start.line !== h[i][1].end.line &&
              (v(h.slice(i + 1, l)),
              (c._tokenizer = c.next = void 0),
              (c = c.previous),
              (l = i + 1));
        for (
          d.events = c._tokenizer = c.next = void 0,
            v(h.slice(0, l)),
            i = -1,
            a = 0;
          ++i < m.length;

        )
          (g[a + m[i][0]] = a + m[i][1]), (a += m[i][1] - m[i][0] - 1);
        return g;
        function v(n) {
          var t = p.pop();
          m.unshift([t, t + n.length - 1]), o(e, t, 2, n);
        }
      }
      e.exports = function (e) {
        for (var n, t, l, a, c, s, f, p = {}, d = -1; ++d < e.length; ) {
          for (; d in p; ) d = p[d];
          if (
            ((n = e[d]),
            d &&
              "chunkFlow" === n[1].type &&
              "listItemPrefix" === e[d - 1][1].type &&
              ((l = 0) < (s = n[1]._tokenizer.events).length &&
                "lineEndingBlank" === s[l][1].type &&
                (l += 2),
              l < s.length && "content" === s[l][1].type))
          )
            for (; ++l < s.length && "content" !== s[l][1].type; )
              "chunkText" === s[l][1].type &&
                ((s[l][1].isInFirstContentOfListItem = !0), l++);
          if ("enter" === n[0])
            n[1].contentType && (r(p, u(e, d)), (d = p[d]), (f = !0));
          else if (n[1]._container || n[1]._movePreviousLineEndings) {
            for (
              l = d, t = void 0;
              l-- &&
              ("lineEnding" === (a = e[l])[1].type ||
                "lineEndingBlank" === a[1].type);

            )
              "enter" === a[0] &&
                (t && (e[t][1].type = "lineEndingBlank"),
                (a[1].type = "lineEnding"),
                (t = l));
            t &&
              ((n[1].end = i(e[t][1].start)),
              (c = e.slice(t, d)).unshift(n),
              o(e, t, d - t + 1, c));
          }
        }
        return !f;
      };
    },
    9008: function (e, n, t) {
      e.exports = t(2717);
    },
    9435: function (e) {
      "use strict";
      var n;
      e.exports = function (e) {
        var t,
          r = "&" + e + ";";
        if (
          (((n = n || document.createElement("i")).innerHTML = r),
          59 === (t = n.textContent).charCodeAt(t.length - 1) && "semi" !== e)
        )
          return !1;
        return t !== r && t;
      };
    },
    2703: function (e, n, t) {
      "use strict";
      var r = t(414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, n, t, o, i, u) {
            if (u !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function n() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (t.PropTypes = t), t;
        });
    },
    5697: function (e, n, t) {
      e.exports = t(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    9560: function (e, n, t) {
      "use strict";
      var r = t(6632),
        o = t(8805),
        i = t(7643),
        u = "data";
      e.exports = function (e, n) {
        var t = r(n),
          p = n,
          d = i;
        if (t in e.normal) return e.property[e.normal[t]];
        t.length > 4 &&
          t.slice(0, 4) === u &&
          l.test(n) &&
          ("-" === n.charAt(4)
            ? (p = (function (e) {
                var n = e.slice(5).replace(a, f);
                return u + n.charAt(0).toUpperCase() + n.slice(1);
              })(n))
            : (n = (function (e) {
                var n = e.slice(4);
                if (a.test(n)) return e;
                "-" !== (n = n.replace(c, s)).charAt(0) && (n = "-" + n);
                return u + n;
              })(n)),
          (d = o));
        return new d(p, n);
      };
      var l = /^data[-\w.:]+$/i,
        a = /-[a-z]/g,
        c = /[A-Z]/g;
      function s(e) {
        return "-" + e.toLowerCase();
      }
      function f(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    7247: function (e, n, t) {
      "use strict";
      var r = t(9940),
        o = t(8289),
        i = t(5812),
        u = t(4397),
        l = t(7716),
        a = t(1805);
      e.exports = r([i, o, u, l, a]);
    },
    7716: function (e, n, t) {
      "use strict";
      var r = t(7e3),
        o = t(7596),
        i = r.booleanish,
        u = r.number,
        l = r.spaceSeparated;
      e.exports = o({
        transform: function (e, n) {
          return "role" === n ? n : "aria-" + n.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: i,
          ariaAutoComplete: null,
          ariaBusy: i,
          ariaChecked: i,
          ariaColCount: u,
          ariaColIndex: u,
          ariaColSpan: u,
          ariaControls: l,
          ariaCurrent: null,
          ariaDescribedBy: l,
          ariaDetails: null,
          ariaDisabled: i,
          ariaDropEffect: l,
          ariaErrorMessage: null,
          ariaExpanded: i,
          ariaFlowTo: l,
          ariaGrabbed: i,
          ariaHasPopup: null,
          ariaHidden: i,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: l,
          ariaLevel: u,
          ariaLive: null,
          ariaModal: i,
          ariaMultiLine: i,
          ariaMultiSelectable: i,
          ariaOrientation: null,
          ariaOwns: l,
          ariaPlaceholder: null,
          ariaPosInSet: u,
          ariaPressed: i,
          ariaReadOnly: i,
          ariaRelevant: null,
          ariaRequired: i,
          ariaRoleDescription: l,
          ariaRowCount: u,
          ariaRowIndex: u,
          ariaRowSpan: u,
          ariaSelected: i,
          ariaSetSize: u,
          ariaSort: null,
          ariaValueMax: u,
          ariaValueMin: u,
          ariaValueNow: u,
          ariaValueText: null,
          role: null,
        },
      });
    },
    1805: function (e, n, t) {
      "use strict";
      var r = t(7e3),
        o = t(7596),
        i = t(855),
        u = r.boolean,
        l = r.overloadedBoolean,
        a = r.booleanish,
        c = r.number,
        s = r.spaceSeparated,
        f = r.commaSeparated;
      e.exports = o({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: i,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: f,
          acceptCharset: s,
          accessKey: s,
          action: null,
          allow: null,
          allowFullScreen: u,
          allowPaymentRequest: u,
          allowUserMedia: u,
          alt: null,
          as: null,
          async: u,
          autoCapitalize: null,
          autoComplete: s,
          autoFocus: u,
          autoPlay: u,
          capture: u,
          charSet: null,
          checked: u,
          cite: null,
          className: s,
          cols: c,
          colSpan: null,
          content: null,
          contentEditable: a,
          controls: u,
          controlsList: s,
          coords: c | f,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: u,
          defer: u,
          dir: null,
          dirName: null,
          disabled: u,
          download: l,
          draggable: a,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: u,
          formTarget: null,
          headers: s,
          height: c,
          hidden: u,
          high: c,
          href: null,
          hrefLang: null,
          htmlFor: s,
          httpEquiv: s,
          id: null,
          imageSizes: null,
          imageSrcSet: f,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: u,
          itemId: null,
          itemProp: s,
          itemRef: s,
          itemScope: u,
          itemType: s,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: u,
          low: c,
          manifest: null,
          max: null,
          maxLength: c,
          media: null,
          method: null,
          min: null,
          minLength: c,
          multiple: u,
          muted: u,
          name: null,
          nonce: null,
          noModule: u,
          noValidate: u,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: u,
          optimum: c,
          pattern: null,
          ping: s,
          placeholder: null,
          playsInline: u,
          poster: null,
          preload: null,
          readOnly: u,
          referrerPolicy: null,
          rel: s,
          required: u,
          reversed: u,
          rows: c,
          rowSpan: c,
          sandbox: s,
          scope: null,
          scoped: u,
          seamless: u,
          selected: u,
          shape: null,
          size: c,
          sizes: null,
          slot: null,
          span: c,
          spellCheck: a,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: f,
          start: c,
          step: null,
          style: null,
          tabIndex: c,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: u,
          useMap: null,
          value: a,
          width: c,
          wrap: null,
          align: null,
          aLink: null,
          archive: s,
          axis: null,
          background: null,
          bgColor: null,
          border: c,
          borderColor: null,
          bottomMargin: c,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: u,
          declare: u,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: c,
          leftMargin: c,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: c,
          marginWidth: c,
          noResize: u,
          noHref: u,
          noShade: u,
          noWrap: u,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: c,
          rules: null,
          scheme: null,
          scrolling: a,
          standby: null,
          summary: null,
          text: null,
          topMargin: c,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: c,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: u,
          disableRemotePlayback: u,
          prefix: null,
          property: null,
          results: c,
          security: null,
          unselectable: null,
        },
      });
    },
    5789: function (e, n, t) {
      "use strict";
      var r = t(7e3),
        o = t(7596),
        i = t(8740),
        u = r.boolean,
        l = r.number,
        a = r.spaceSeparated,
        c = r.commaSeparated,
        s = r.commaOrSpaceSeparated;
      e.exports = o({
        space: "svg",
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin",
        },
        transform: i,
        properties: {
          about: s,
          accentHeight: l,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: l,
          amplitude: l,
          arabicForm: null,
          ascent: l,
          attributeName: null,
          attributeType: null,
          azimuth: l,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: l,
          by: null,
          calcMode: null,
          capHeight: l,
          className: a,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: l,
          diffuseConstant: l,
          direction: null,
          display: null,
          dur: null,
          divisor: l,
          dominantBaseline: null,
          download: u,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: l,
          enableBackground: null,
          end: null,
          event: null,
          exponent: l,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: l,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: c,
          g2: c,
          glyphName: c,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: l,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: l,
          horizOriginX: l,
          horizOriginY: l,
          id: null,
          ideographic: l,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: l,
          k: l,
          k1: l,
          k2: l,
          k3: l,
          k4: l,
          kernelMatrix: s,
          kernelUnitLength: null,
          keyPoints: null,
          keySplines: null,
          keyTimes: null,
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: l,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: l,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: l,
          overlineThickness: l,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: l,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: a,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: l,
          pointsAtY: l,
          pointsAtZ: l,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: s,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: s,
          rev: s,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: s,
          requiredFeatures: s,
          requiredFonts: s,
          requiredFormats: s,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: l,
          specularExponent: l,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: l,
          strikethroughThickness: l,
          string: null,
          stroke: null,
          strokeDashArray: s,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: l,
          strokeOpacity: l,
          strokeWidth: null,
          style: null,
          surfaceScale: l,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: s,
          tabIndex: l,
          tableValues: null,
          target: null,
          targetX: l,
          targetY: l,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: s,
          to: null,
          transform: null,
          u1: null,
          u2: null,
          underlinePosition: l,
          underlineThickness: l,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: l,
          values: null,
          vAlphabetic: l,
          vMathematical: l,
          vectorEffect: null,
          vHanging: l,
          vIdeographic: l,
          version: null,
          vertAdvY: l,
          vertOriginX: l,
          vertOriginY: l,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: l,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null,
        },
      });
    },
    855: function (e, n, t) {
      "use strict";
      var r = t(8740);
      e.exports = function (e, n) {
        return r(e, n.toLowerCase());
      };
    },
    8740: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return n in e ? e[n] : n;
      };
    },
    7596: function (e, n, t) {
      "use strict";
      var r = t(6632),
        o = t(9607),
        i = t(8805);
      e.exports = function (e) {
        var n,
          t,
          u = e.space,
          l = e.mustUseProperty || [],
          a = e.attributes || {},
          c = e.properties,
          s = e.transform,
          f = {},
          p = {};
        for (n in c)
          (t = new i(n, s(a, n), c[n], u)),
            -1 !== l.indexOf(n) && (t.mustUseProperty = !0),
            (f[n] = t),
            (p[r(n)] = n),
            (p[r(t.attribute)] = n);
        return new o(f, p, u);
      };
    },
    8805: function (e, n, t) {
      "use strict";
      var r = t(7643),
        o = t(7e3);
      (e.exports = l), (l.prototype = new r()), (l.prototype.defined = !0);
      var i = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        u = i.length;
      function l(e, n, t, l) {
        var c,
          s = -1;
        for (a(this, "space", l), r.call(this, e, n); ++s < u; )
          a(this, (c = i[s]), (t & o[c]) === o[c]);
      }
      function a(e, n, t) {
        t && (e[n] = t);
      }
    },
    7643: function (e) {
      "use strict";
      e.exports = t;
      var n = t.prototype;
      function t(e, n) {
        (this.property = e), (this.attribute = n);
      }
      (n.space = null),
        (n.attribute = null),
        (n.property = null),
        (n.boolean = !1),
        (n.booleanish = !1),
        (n.overloadedBoolean = !1),
        (n.number = !1),
        (n.commaSeparated = !1),
        (n.spaceSeparated = !1),
        (n.commaOrSpaceSeparated = !1),
        (n.mustUseProperty = !1),
        (n.defined = !1);
    },
    9940: function (e, n, t) {
      "use strict";
      var r = t(7529),
        o = t(9607);
      e.exports = function (e) {
        var n,
          t,
          i = e.length,
          u = [],
          l = [],
          a = -1;
        for (; ++a < i; )
          (n = e[a]), u.push(n.property), l.push(n.normal), (t = n.space);
        return new o(r.apply(null, u), r.apply(null, l), t);
      };
    },
    9607: function (e) {
      "use strict";
      e.exports = t;
      var n = t.prototype;
      function t(e, n, t) {
        (this.property = e), (this.normal = n), t && (this.space = t);
      }
      (n.space = null), (n.normal = {}), (n.property = {});
    },
    7e3: function (e, n) {
      "use strict";
      var t = 0;
      function r() {
        return Math.pow(2, ++t);
      }
      (n.boolean = r()),
        (n.booleanish = r()),
        (n.overloadedBoolean = r()),
        (n.number = r()),
        (n.spaceSeparated = r()),
        (n.commaSeparated = r()),
        (n.commaOrSpaceSeparated = r());
    },
    8289: function (e, n, t) {
      "use strict";
      var r = t(7596);
      e.exports = r({
        space: "xlink",
        transform: function (e, n) {
          return "xlink:" + n.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    5812: function (e, n, t) {
      "use strict";
      var r = t(7596);
      e.exports = r({
        space: "xml",
        transform: function (e, n) {
          return "xml:" + n.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    4397: function (e, n, t) {
      "use strict";
      var r = t(7596),
        o = t(855);
      e.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: o,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    6632: function (e) {
      "use strict";
      e.exports = function (e) {
        return e.toLowerCase();
      };
    },
    1218: function (e, n, t) {
      "use strict";
      var r = t(9940),
        o = t(8289),
        i = t(5812),
        u = t(4397),
        l = t(7716),
        a = t(5789);
      e.exports = r([i, o, u, l, a]);
    },
    1471: function (e, n) {
      "use strict";
      var t = 60103,
        r = 60106,
        o = 60107,
        i = 60108,
        u = 60114,
        l = 60109,
        a = 60110,
        c = 60112,
        s = 60113,
        f = 60120,
        p = 60115,
        d = 60116,
        h = 60121,
        m = 60122,
        g = 60117,
        v = 60129,
        y = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var x = Symbol.for;
        (t = x("react.element")),
          (r = x("react.portal")),
          (o = x("react.fragment")),
          (i = x("react.strict_mode")),
          (u = x("react.profiler")),
          (l = x("react.provider")),
          (a = x("react.context")),
          (c = x("react.forward_ref")),
          (s = x("react.suspense")),
          (f = x("react.suspense_list")),
          (p = x("react.memo")),
          (d = x("react.lazy")),
          (h = x("react.block")),
          (m = x("react.server.block")),
          (g = x("react.fundamental")),
          (v = x("react.debug_trace_mode")),
          (y = x("react.legacy_hidden"));
      }
      function k(e) {
        if ("object" === typeof e && null !== e) {
          var n = e.$$typeof;
          switch (n) {
            case t:
              switch ((e = e.type)) {
                case o:
                case u:
                case i:
                case s:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case c:
                    case d:
                    case p:
                    case l:
                      return e;
                    default:
                      return n;
                  }
              }
            case r:
              return n;
          }
        }
      }
      var b = l,
        w = t,
        S = c,
        E = o,
        C = d,
        P = p,
        T = r,
        F = u,
        A = i,
        O = s;
      (n.ContextConsumer = a),
        (n.ContextProvider = b),
        (n.Element = w),
        (n.ForwardRef = S),
        (n.Fragment = E),
        (n.Lazy = C),
        (n.Memo = P),
        (n.Portal = T),
        (n.Profiler = F),
        (n.StrictMode = A),
        (n.Suspense = O),
        (n.isAsyncMode = function () {
          return !1;
        }),
        (n.isConcurrentMode = function () {
          return !1;
        }),
        (n.isContextConsumer = function (e) {
          return k(e) === a;
        }),
        (n.isContextProvider = function (e) {
          return k(e) === l;
        }),
        (n.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }),
        (n.isForwardRef = function (e) {
          return k(e) === c;
        }),
        (n.isFragment = function (e) {
          return k(e) === o;
        }),
        (n.isLazy = function (e) {
          return k(e) === d;
        }),
        (n.isMemo = function (e) {
          return k(e) === p;
        }),
        (n.isPortal = function (e) {
          return k(e) === r;
        }),
        (n.isProfiler = function (e) {
          return k(e) === u;
        }),
        (n.isStrictMode = function (e) {
          return k(e) === i;
        }),
        (n.isSuspense = function (e) {
          return k(e) === s;
        }),
        (n.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === u ||
            e === v ||
            e === i ||
            e === s ||
            e === f ||
            e === y ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === d ||
                e.$$typeof === p ||
                e.$$typeof === l ||
                e.$$typeof === a ||
                e.$$typeof === c ||
                e.$$typeof === g ||
                e.$$typeof === h ||
                e[0] === m))
          );
        }),
        (n.typeOf = k);
    },
    2143: function (e, n, t) {
      "use strict";
      e.exports = t(1471);
    },
    2076: function (e, n, t) {
      "use strict";
      const r = t(7294),
        o = t(2143),
        i = t(1218),
        u = t(9560),
        l = t(9640),
        a = t(6582),
        c = t(6851),
        s = t(7848);
      n.D = d;
      const f = {}.hasOwnProperty,
        p = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
      function d(e, n) {
        const t = [];
        let r,
          o = -1;
        for (; ++o < n.children.length; )
          (r = n.children[o]),
            "element" === r.type
              ? t.push(h(e, r, o, n))
              : "text" === r.type
              ? ("element" === n.type &&
                  p.has(n.tagName) &&
                  "\n" === r.value) ||
                t.push(r.value)
              : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
        return t;
      }
      function h(e, n, t, u) {
        const l = e.options,
          a = e.schema,
          c = n.tagName,
          s = {};
        let p,
          h = a;
        if (
          ("html" === a.space && "svg" === c && ((h = i), (e.schema = h)),
          n.properties)
        )
          for (p in n.properties)
            f.call(n.properties, p) && g(s, p, n.properties[p], e);
        ("ol" !== c && "ul" !== c) || e.listDepth++;
        const v = d(e, n);
        ("ol" !== c && "ul" !== c) || e.listDepth--, (e.schema = a);
        const y = n.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          },
          x = l.components && f.call(l.components, c) ? l.components[c] : c,
          k = "string" === typeof x || x === r.Fragment;
        if (!o.isValidElementType(x))
          throw new TypeError(
            `Component for name \`${c}\` not defined or is not renderable`
          );
        if (
          ((s.key = [c, y.start.line, y.start.column, t].join("-")),
          "a" === c &&
            l.linkTarget &&
            (s.target =
              "function" === typeof l.linkTarget
                ? l.linkTarget(s.href, n.children, s.title)
                : l.linkTarget),
          "a" === c &&
            l.transformLinkUri &&
            (s.href = l.transformLinkUri(s.href, n.children, s.title)),
          k ||
            "code" !== c ||
            "element" !== u.type ||
            "pre" === u.tagName ||
            (s.inline = !0),
          k ||
            ("h1" !== c &&
              "h2" !== c &&
              "h3" !== c &&
              "h4" !== c &&
              "h5" !== c &&
              "h6" !== c) ||
            (s.level = parseInt(c.charAt(1), 10)),
          "img" === c &&
            l.transformImageUri &&
            (s.src = l.transformImageUri(s.src, s.alt, s.title)),
          !k && "li" === c && "element" === u.type)
        ) {
          const e = (function (e) {
            let n = -1;
            for (; ++n < e.children.length; ) {
              const t = e.children[n];
              if ("element" === t.type && "input" === t.tagName) return t;
            }
            return null;
          })(n);
          (s.checked =
            e && e.properties ? Boolean(e.properties.checked) : null),
            (s.index = m(u, n)),
            (s.ordered = "ol" === u.tagName);
        }
        var b;
        return (
          k ||
            ("ol" !== c && "ul" !== c) ||
            ((s.ordered = "ol" === c), (s.depth = e.listDepth)),
          ("td" !== c && "th" !== c) ||
            (s.align &&
              (s.style || (s.style = {}),
              (s.style.textAlign = s.align),
              delete s.align),
            k || (s.isHeader = "th" === c)),
          k ||
            "tr" !== c ||
            "element" !== u.type ||
            (s.isHeader = Boolean("thead" === u.tagName)),
          l.sourcePos &&
            (s["data-sourcepos"] = [
              (b = y).start.line,
              ":",
              b.start.column,
              "-",
              b.end.line,
              ":",
              b.end.column,
            ]
              .map((e) => String(e))
              .join("")),
          !k && l.rawSourcePos && (s.sourcePosition = n.position),
          !k &&
            l.includeElementIndex &&
            ((s.index = m(u, n)), (s.siblingCount = m(u))),
          k || (s.node = n),
          v.length > 0 ? r.createElement(x, s, v) : r.createElement(x, s)
        );
      }
      function m(e, n) {
        let t = -1,
          r = 0;
        for (; ++t < e.children.length && e.children[t] !== n; )
          "element" === e.children[t].type && r++;
        return r;
      }
      function g(e, n, t, r) {
        const o = u(r.schema, n);
        let i = t;
        null !== i &&
          void 0 !== i &&
          i === i &&
          (i &&
            "object" === typeof i &&
            "length" in i &&
            (i = (o.commaSeparated ? c : a).stringify(i)),
          "style" === o.property &&
            "string" === typeof i &&
            (i = (function (e) {
              const n = {};
              try {
                s(e, t);
              } catch (r) {}
              return n;
              function t(e, t) {
                const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                n[r.replace(/-([a-z])/g, v)] = t;
              }
            })(i)),
          o.space && o.property
            ? (e[f.call(l, o.property) ? l[o.property] : o.property] = i)
            : o.attribute && (e[o.attribute] = i));
      }
      function v(e, n) {
        return n.toUpperCase();
      }
    },
    8456: function (e, n, t) {
      "use strict";
      const r = t(7294),
        o = t(939),
        i = t(8835),
        u = t(2861),
        l = t(8818),
        a = t(5697),
        c = t(7247),
        s = t(6625),
        f = t(100),
        p = t(2076).D;
      e.exports = m;
      const d = {}.hasOwnProperty,
        h = {
          renderers: { to: "components", id: "change-renderers-to-components" },
          astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
          allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
          escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
          source: { to: "children", id: "change-source-to-children" },
          allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
        };
      function m(e) {
        for (const r in h)
          if (d.call(h, r) && d.call(e, r)) {
            const e = h[r];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : "remove"
              } \`${r}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`
            ),
              delete h[r];
          }
        const n = i()
          .use(u)
          .use(e.remarkPlugins || e.plugins || [])
          .use(l, { allowDangerousHtml: !0 })
          .use(e.rehypePlugins || [])
          .use(s, e);
        let t;
        "string" === typeof e.children
          ? (t = o(e.children))
          : (void 0 !== e.children &&
              null !== e.children &&
              console.warn(
                `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
              ),
            (t = o()));
        const a = n.runSync(n.parse(t), t);
        if ("root" !== a.type) throw new TypeError("Expected a `root` node");
        let f = r.createElement(
          r.Fragment,
          {},
          p({ options: e, schema: c, listDepth: 0 }, a)
        );
        return (
          e.className &&
            (f = r.createElement("div", { className: e.className }, f)),
          f
        );
      }
      (m.defaultProps = { transformLinkUri: f }),
        (m.propTypes = {
          children: a.string,
          className: a.string,
          allowElement: a.func,
          allowedElements: a.arrayOf(a.string),
          disallowedElements: a.arrayOf(a.string),
          unwrapDisallowed: a.bool,
          remarkPlugins: a.arrayOf(
            a.oneOfType([
              a.object,
              a.func,
              a.arrayOf(a.oneOfType([a.object, a.func])),
            ])
          ),
          rehypePlugins: a.arrayOf(
            a.oneOfType([
              a.object,
              a.func,
              a.arrayOf(a.oneOfType([a.object, a.func])),
            ])
          ),
          sourcePos: a.bool,
          rawSourcePos: a.bool,
          skipHtml: a.bool,
          includeElementIndex: a.bool,
          transformLinkUri: a.oneOfType([a.func, a.bool]),
          linkTarget: a.oneOfType([a.func, a.string]),
          transformImageUri: a.func,
          components: a.object,
        }),
        (m.uriTransformer = f);
    },
    6625: function (e, n, t) {
      const r = t(2854);
      e.exports = function (e) {
        if (e.allowedElements && e.disallowedElements)
          throw new TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return (e) => {
            r(e, "element", n);
          };
        function n(n, t, r) {
          const o = n,
            i = r;
          let u;
          if (
            (e.allowedElements
              ? (u = !e.allowedElements.includes(o.tagName))
              : e.disallowedElements &&
                (u = e.disallowedElements.includes(o.tagName)),
            !u &&
              e.allowElement &&
              "number" === typeof t &&
              (u = !e.allowElement(o, t, i)),
            u && "number" === typeof t)
          )
            return (
              e.unwrapDisallowed && o.children
                ? i.children.splice(t, 1, ...o.children)
                : i.children.splice(t, 1),
              t
            );
        }
      };
    },
    100: function (e) {
      const n = ["http", "https", "mailto", "tel"];
      e.exports = function (e) {
        const t = (e || "").trim(),
          r = t.charAt(0);
        if ("#" === r || "/" === r) return t;
        const o = t.indexOf(":");
        if (-1 === o) return t;
        let i = -1;
        for (; ++i < n.length; ) {
          const e = n[i];
          if (o === e.length && t.slice(0, e.length).toLowerCase() === e)
            return t;
        }
        if (((i = t.indexOf("?")), -1 !== i && o > i)) return t;
        if (((i = t.indexOf("#")), -1 !== i && o > i)) return t;
        return "javascript:void(0)";
      };
    },
    6037: function (e, n, t) {
      !(function (e, n) {
        function t(e) {
          if (e && e.__esModule) return e;
          var n = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (t) {
                if ("default" !== t) {
                  var r = Object.getOwnPropertyDescriptor(e, t);
                  Object.defineProperty(
                    n,
                    t,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[t];
                          },
                        }
                  );
                }
              }),
            (n.default = e),
            n
          );
        }
        var r = t(n);
        function o() {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
            o.apply(this, arguments)
          );
        }
        var i = "Left",
          u = "Right",
          l = "Up",
          a = "Down",
          c = {
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0,
          },
          s = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
          f = "mousemove",
          p = "mouseup",
          d = "touchend",
          h = "touchmove",
          m = "touchstart";
        function g(e, n, t, r) {
          return e > n ? (t > 0 ? u : i) : r > 0 ? a : l;
        }
        function v(e, n) {
          if (0 === n) return e;
          var t = (Math.PI / 180) * n;
          return [
            e[0] * Math.cos(t) + e[1] * Math.sin(t),
            e[1] * Math.cos(t) - e[0] * Math.sin(t),
          ];
        }
        function y(e, n) {
          var t = function (n) {
              (n && "touches" in n && n.touches.length > 1) ||
                e(function (e, t) {
                  t.trackMouse &&
                    (document.addEventListener(f, r),
                    document.addEventListener(p, l));
                  var i = "touches" in n ? n.touches[0] : n,
                    u = v([i.clientX, i.clientY], t.rotationAngle);
                  return o({}, e, s, {
                    initial: [].concat(u),
                    xy: u,
                    start: n.timeStamp || 0,
                  });
                });
            },
            r = function (n) {
              e(function (e, t) {
                if ("touches" in n && n.touches.length > 1) return e;
                var r = "touches" in n ? n.touches[0] : n,
                  i = v([r.clientX, r.clientY], t.rotationAngle),
                  u = i[0],
                  l = i[1],
                  a = u - e.xy[0],
                  s = l - e.xy[1],
                  f = Math.abs(a),
                  p = Math.abs(s),
                  d = (n.timeStamp || 0) - e.start,
                  h = Math.sqrt(f * f + p * p) / (d || 1),
                  m = [a / (d || 1), s / (d || 1)],
                  y = g(f, p, a, s),
                  x =
                    "number" === typeof t.delta
                      ? t.delta
                      : t.delta[y.toLowerCase()] || c.delta;
                if (f < x && p < x && !e.swiping) return e;
                var k = {
                  absX: f,
                  absY: p,
                  deltaX: a,
                  deltaY: s,
                  dir: y,
                  event: n,
                  first: e.first,
                  initial: e.initial,
                  velocity: h,
                  vxvy: m,
                };
                k.first && t.onSwipeStart && t.onSwipeStart(k),
                  t.onSwiping && t.onSwiping(k);
                var b = !1;
                return (
                  (t.onSwiping || t.onSwiped || "onSwiped" + y in t) &&
                    (b = !0),
                  b &&
                    t.preventDefaultTouchmoveEvent &&
                    t.trackTouch &&
                    n.cancelable &&
                    n.preventDefault(),
                  o({}, e, { first: !1, eventData: k, swiping: !0 })
                );
              });
            },
            i = function (n) {
              e(function (e, t) {
                var r;
                if (e.swiping && e.eventData) {
                  (r = o({}, e.eventData, { event: n })),
                    t.onSwiped && t.onSwiped(r);
                  var i = t["onSwiped" + r.dir];
                  i && i(r);
                } else t.onTap && t.onTap({ event: n });
                return o({}, e, s, { eventData: r });
              });
            },
            u = function () {
              document.removeEventListener(f, r),
                document.removeEventListener(p, l);
            },
            l = function (e) {
              u(), i(e);
            },
            a = function (e, n) {
              var o = function () {};
              if (e && e.addEventListener) {
                var u = [
                  [m, t],
                  [h, r],
                  [d, i],
                ];
                u.forEach(function (t) {
                  var r = t[0],
                    o = t[1];
                  return e.addEventListener(r, o, { passive: n });
                }),
                  (o = function () {
                    return u.forEach(function (n) {
                      var t = n[0],
                        r = n[1];
                      return e.removeEventListener(t, r);
                    });
                  });
              }
              return o;
            },
            y = {
              ref: function (n) {
                null !== n &&
                  e(function (e, t) {
                    if (e.el === n) return e;
                    var r = {};
                    return (
                      e.el &&
                        e.el !== n &&
                        e.cleanUpTouch &&
                        (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                      t.trackTouch &&
                        n &&
                        (r.cleanUpTouch = a(
                          n,
                          !t.preventDefaultTouchmoveEvent
                        )),
                      o({}, e, { el: n }, r)
                    );
                  });
              },
            };
          return n.trackMouse && (y.onMouseDown = t), [y, a];
        }
        function x(e, n, t) {
          var r = {};
          return (
            !n.trackTouch && e.cleanUpTouch
              ? (e.cleanUpTouch(), (r.cleanUpTouch = void 0))
              : n.trackTouch &&
                !e.cleanUpTouch &&
                e.el &&
                (r.cleanUpTouch = t(e.el, !n.preventDefaultTouchmoveEvent)),
            o({}, e, r)
          );
        }
        function k(e) {
          var n = e.trackMouse,
            t = r.useRef(o({}, s)),
            i = r.useRef(o({}, c));
          i.current = o({}, c, e);
          var u = r.useMemo(
              function () {
                return y(
                  function (e) {
                    return (t.current = e(t.current, i.current));
                  },
                  { trackMouse: n }
                );
              },
              [n]
            ),
            l = u[0],
            a = u[1];
          return (t.current = x(t.current, i.current, a)), l;
        }
        (e.DOWN = a),
          (e.LEFT = i),
          (e.RIGHT = u),
          (e.UP = l),
          (e.useSwipeable = k);
      })(n, t(7294));
    },
    2861: function (e, n, t) {
      "use strict";
      e.exports = function (e) {
        var n = this;
        this.Parser = function (t) {
          return r(
            t,
            Object.assign({}, n.data("settings"), e, {
              extensions: n.data("micromarkExtensions") || [],
              mdastExtensions: n.data("fromMarkdownExtensions") || [],
            })
          );
        };
      };
      var r = t(9671);
    },
    8818: function (e, n, t) {
      "use strict";
      var r = t(5288);
      e.exports = function (e, n) {
        e && !e.process && ((n = e), (e = null));
        return e
          ? (function (e, n) {
              return t;
              function t(t, o, i) {
                function u(e) {
                  i(e);
                }
                e.run(r(t, n), o, u);
              }
            })(e, n)
          : (function (e) {
              return n;
              function n(n) {
                return r(n, e);
              }
            })(n);
      };
    },
    6582: function (e, n) {
      "use strict";
      (n.parse = function (e) {
        var n = String(e || "").trim();
        return "" === n ? [] : n.split(t);
      }),
        (n.stringify = function (e) {
          return e.join(" ").trim();
        });
      var t = /[ \t\n\r\f]+/g;
    },
    7848: function (e, n, t) {
      var r = t(8139);
      e.exports = function (e, n) {
        var t,
          o = null;
        if (!e || "string" !== typeof e) return o;
        for (
          var i, u, l = r(e), a = "function" === typeof n, c = 0, s = l.length;
          c < s;
          c++
        )
          (i = (t = l[c]).property),
            (u = t.value),
            a ? n(i, u, t) : u && (o || (o = {}), (o[i] = u));
        return o;
      };
    },
    8281: function (e, n, t) {
      "use strict";
      var r = t(3368);
      (e.exports = i), (i.wrap = r);
      var o = [].slice;
      function i() {
        var e = [],
          n = {
            run: function () {
              var n = -1,
                t = o.call(arguments, 0, -1),
                i = arguments[arguments.length - 1];
              if ("function" !== typeof i)
                throw new Error("Expected function as last argument, not " + i);
              function u(l) {
                var a = e[++n],
                  c = o.call(arguments, 0),
                  s = c.slice(1),
                  f = t.length,
                  p = -1;
                if (l) i(l);
                else {
                  for (; ++p < f; )
                    (null !== s[p] && void 0 !== s[p]) || (s[p] = t[p]);
                  (t = s),
                    a
                      ? r(a, u).apply(null, t)
                      : i.apply(null, [null].concat(t));
                }
              }
              u.apply(null, [null].concat(t));
            },
            use: function (t) {
              if ("function" !== typeof t)
                throw new Error("Expected `fn` to be a function, not " + t);
              return e.push(t), n;
            },
          };
        return n;
      }
    },
    3368: function (e) {
      "use strict";
      var n = [].slice;
      e.exports = function (e, t) {
        var r;
        return function () {
          var t,
            u = n.call(arguments, 0),
            l = e.length > u.length;
          l && u.push(o);
          try {
            t = e.apply(null, u);
          } catch (a) {
            if (l && r) throw a;
            return o(a);
          }
          l ||
            (t && "function" === typeof t.then
              ? t.then(i, o)
              : t instanceof Error
              ? o(t)
              : i(t));
        };
        function o() {
          r || ((r = !0), t.apply(null, arguments));
        }
        function i(e) {
          o(null, e);
        }
      };
    },
    8835: function (e, n, t) {
      "use strict";
      var r = t(8869),
        o = t(8738),
        i = t(4470),
        u = t(3310),
        l = t(8281),
        a = t(939);
      e.exports = (function e() {
        var n,
          t = [],
          o = l(),
          y = {},
          x = -1;
        return (
          (k.data = function (e, t) {
            if ("string" === typeof e)
              return 2 === arguments.length
                ? (m("data", n), (y[e] = t), k)
                : (s.call(y, e) && y[e]) || null;
            if (e) return m("data", n), (y = e), k;
            return y;
          }),
          (k.freeze = b),
          (k.attachers = t),
          (k.use = function (e) {
            var r;
            if ((m("use", n), null === e || void 0 === e));
            else if ("function" === typeof e) s.apply(null, arguments);
            else {
              if ("object" !== typeof e)
                throw new Error("Expected usable value, not `" + e + "`");
              "length" in e ? a(e) : o(e);
            }
            r && (y.settings = i(y.settings || {}, r));
            return k;
            function o(e) {
              a(e.plugins), e.settings && (r = i(r || {}, e.settings));
            }
            function l(e) {
              if ("function" === typeof e) s(e);
              else {
                if ("object" !== typeof e)
                  throw new Error("Expected usable value, not `" + e + "`");
                "length" in e ? s.apply(null, e) : o(e);
              }
            }
            function a(e) {
              var n = -1;
              if (null === e || void 0 === e);
              else {
                if ("object" !== typeof e || !("length" in e))
                  throw new Error(
                    "Expected a list of plugins, not `" + e + "`"
                  );
                for (; ++n < e.length; ) l(e[n]);
              }
            }
            function s(e, n) {
              var r = w(e);
              r
                ? (u(r[1]) && u(n) && (n = i(!0, r[1], n)), (r[1] = n))
                : t.push(c.call(arguments));
            }
          }),
          (k.parse = function (e) {
            var n,
              t = a(e);
            if ((b(), d("parse", (n = k.Parser)), p(n, "parse")))
              return new n(String(t), t).parse();
            return n(String(t), t);
          }),
          (k.stringify = function (e, n) {
            var t,
              r = a(n);
            if ((b(), h("stringify", (t = k.Compiler)), g(e), p(t, "compile")))
              return new t(e, r).compile();
            return t(e, r);
          }),
          (k.run = S),
          (k.runSync = function (e, n) {
            var t, o;
            return S(e, n, i), v("runSync", "run", o), t;
            function i(e, n) {
              (o = !0), (t = n), r(e);
            }
          }),
          (k.process = E),
          (k.processSync = function (e) {
            var n, t;
            return (
              b(),
              d("processSync", k.Parser),
              h("processSync", k.Compiler),
              E((n = a(e)), o),
              v("processSync", "process", t),
              n
            );
            function o(e) {
              (t = !0), r(e);
            }
          }),
          k
        );
        function k() {
          for (var n = e(), r = -1; ++r < t.length; ) n.use.apply(null, t[r]);
          return n.data(i(!0, {}, y)), n;
        }
        function b() {
          var e, r;
          if (n) return k;
          for (; ++x < t.length; )
            !1 !== (e = t[x])[1] &&
              (!0 === e[1] && (e[1] = void 0),
              "function" === typeof (r = e[0].apply(k, e.slice(1))) &&
                o.use(r));
          return (n = !0), (x = 1 / 0), k;
        }
        function w(e) {
          for (var n = -1; ++n < t.length; ) if (t[n][0] === e) return t[n];
        }
        function S(e, n, t) {
          if (
            (g(e),
            b(),
            t || "function" !== typeof n || ((t = n), (n = null)),
            !t)
          )
            return new Promise(r);
          function r(r, i) {
            o.run(e, a(n), function (n, o, u) {
              (o = o || e), n ? i(n) : r ? r(o) : t(null, o, u);
            });
          }
          r(null, t);
        }
        function E(e, n) {
          if ((b(), d("process", k.Parser), h("process", k.Compiler), !n))
            return new Promise(t);
          function t(t, r) {
            var o = a(e);
            f.run(k, { file: o }, function (e) {
              e ? r(e) : t ? t(o) : n(null, o);
            });
          }
          t(null, n);
        }
      })().freeze();
      var c = [].slice,
        s = {}.hasOwnProperty,
        f = l()
          .use(function (e, n) {
            n.tree = e.parse(n.file);
          })
          .use(function (e, n, t) {
            e.run(n.tree, n.file, function (e, r, o) {
              e ? t(e) : ((n.tree = r), (n.file = o), t());
            });
          })
          .use(function (e, n) {
            var t = e.stringify(n.tree, n.file);
            void 0 === t ||
              null === t ||
              ("string" === typeof t || o(t)
                ? ("value" in n.file && (n.file.value = t),
                  (n.file.contents = t))
                : (n.file.result = t));
          });
      function p(e, n) {
        return (
          "function" === typeof e &&
          e.prototype &&
          ((function (e) {
            var n;
            for (n in e) return !0;
            return !1;
          })(e.prototype) ||
            n in e.prototype)
        );
      }
      function d(e, n) {
        if ("function" !== typeof n)
          throw new Error("Cannot `" + e + "` without `Parser`");
      }
      function h(e, n) {
        if ("function" !== typeof n)
          throw new Error("Cannot `" + e + "` without `Compiler`");
      }
      function m(e, n) {
        if (n)
          throw new Error(
            "Cannot invoke `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
          );
      }
      function g(e) {
        if (!e || "string" !== typeof e.type)
          throw new Error("Expected node, got `" + e + "`");
      }
      function v(e, n, t) {
        if (!t)
          throw new Error(
            "`" + e + "` finished async. Use `" + n + "` instead"
          );
      }
    },
    914: function (e) {
      "use strict";
      e.exports = function (e, n, t) {
        var r;
        (null !== t && void 0 !== t) ||
          ("object" === typeof n && !Array.isArray(n)) ||
          ((t = n), (n = {}));
        (r = Object.assign({ type: String(e) }, n)),
          Array.isArray(t)
            ? (r.children = t)
            : null !== t && void 0 !== t && (r.value = String(t));
        return r;
      };
    },
    1744: function (e) {
      "use strict";
      e.exports = function (e) {
        return (
          !e ||
          !e.position ||
          !e.position.start ||
          !e.position.start.line ||
          !e.position.start.column ||
          !e.position.end ||
          !e.position.end.line ||
          !e.position.end.column
        );
      };
    },
    8145: function (e) {
      "use strict";
      function n(e) {
        if (null == e) return t;
        if ("string" === typeof e)
          return (function (e) {
            return n;
            function n(n) {
              return Boolean(n && n.type === e);
            }
          })(e);
        if ("object" === typeof e)
          return "length" in e
            ? (function (e) {
                var t = [],
                  r = -1;
                for (; ++r < e.length; ) t[r] = n(e[r]);
                return o;
                function o() {
                  for (var e = -1; ++e < t.length; )
                    if (t[e].apply(this, arguments)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                return n;
                function n(n) {
                  var t;
                  for (t in e) if (n[t] !== e[t]) return !1;
                  return !0;
                }
              })(e);
        if ("function" === typeof e) return e;
        throw new Error("Expected function, string, or object as test");
      }
      function t() {
        return !0;
      }
      e.exports = n;
    },
    7361: function (e) {
      "use strict";
      var n = o("start"),
        t = o("end");
      function r(e) {
        return { start: n(e), end: t(e) };
      }
      function o(e) {
        return (n.displayName = e), n;
        function n(n) {
          var t = (n && n.position && n.position[e]) || {};
          return {
            line: t.line || null,
            column: t.column || null,
            offset: isNaN(t.offset) ? null : t.offset,
          };
        }
      }
      (e.exports = r), (r.start = n), (r.end = t);
    },
    5432: function (e) {
      "use strict";
      var n = {}.hasOwnProperty;
      function t(e) {
        return (
          (e && "object" === typeof e) || (e = {}),
          o(e.line) + ":" + o(e.column)
        );
      }
      function r(e) {
        return (
          (e && "object" === typeof e) || (e = {}), t(e.start) + "-" + t(e.end)
        );
      }
      function o(e) {
        return e && "number" === typeof e ? e : 1;
      }
      e.exports = function (e) {
        if (!e || "object" !== typeof e) return "";
        if (n.call(e, "position") || n.call(e, "type")) return r(e.position);
        if (n.call(e, "start") || n.call(e, "end")) return r(e);
        if (n.call(e, "line") || n.call(e, "column")) return t(e);
        return "";
      };
    },
    6750: function (e) {
      e.exports = function (e) {
        return e;
      };
    },
    9294: function (e, n, t) {
      "use strict";
      e.exports = a;
      var r = t(8145),
        o = t(6750),
        i = !0,
        u = "skip",
        l = !1;
      function a(e, n, t, a) {
        var c, s;
        "function" === typeof n &&
          "function" !== typeof t &&
          ((a = t), (t = n), (n = null)),
          (s = r(n)),
          (c = a ? -1 : 1),
          (function e(r, f, p) {
            var d,
              h = "object" === typeof r && null !== r ? r : {};
            "string" === typeof h.type &&
              ((d =
                "string" === typeof h.tagName
                  ? h.tagName
                  : "string" === typeof h.name
                  ? h.name
                  : void 0),
              (m.displayName =
                "node (" + o(h.type + (d ? "<" + d + ">" : "")) + ")"));
            return m;
            function m() {
              var o,
                d,
                h = p.concat(r),
                m = [];
              if (
                (!n || s(r, f, p[p.length - 1] || null)) &&
                ((m = (function (e) {
                  if (null !== e && "object" === typeof e && "length" in e)
                    return e;
                  if ("number" === typeof e) return [i, e];
                  return [e];
                })(t(r, p))),
                m[0] === l)
              )
                return m;
              if (r.children && m[0] !== u)
                for (
                  d = (a ? r.children.length : -1) + c;
                  d > -1 && d < r.children.length;

                ) {
                  if (((o = e(r.children[d], d, h)()), o[0] === l)) return o;
                  d = "number" === typeof o[1] ? o[1] : d + c;
                }
              return m;
            }
          })(e, null, [])();
      }
      (a.CONTINUE = true), (a.SKIP = u), (a.EXIT = l);
    },
    2854: function (e, n, t) {
      "use strict";
      e.exports = l;
      var r = t(9294),
        o = r.CONTINUE,
        i = r.SKIP,
        u = r.EXIT;
      function l(e, n, t, o) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((o = t), (t = n), (n = null)),
          r(
            e,
            n,
            function (e, n) {
              var r = n[n.length - 1],
                o = r ? r.children.indexOf(e) : null;
              return t(e, o, r);
            },
            o
          );
      }
      (l.CONTINUE = o), (l.SKIP = i), (l.EXIT = u);
    },
    734: function (e, n, t) {
      "use strict";
      var r = t(5432);
      function o() {}
      (e.exports = u), (o.prototype = Error.prototype), (u.prototype = new o());
      var i = u.prototype;
      function u(e, n, t) {
        var o, i, u;
        "string" === typeof n && ((t = n), (n = null)),
          (o = (function (e) {
            var n,
              t = [null, null];
            "string" === typeof e &&
              (-1 === (n = e.indexOf(":"))
                ? (t[1] = e)
                : ((t[0] = e.slice(0, n)), (t[1] = e.slice(n + 1))));
            return t;
          })(t)),
          (i = r(n) || "1:1"),
          (u = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          n && n.position && (n = n.position),
          n && (n.start ? ((u = n), (n = n.start)) : (u.start = n)),
          e.stack && ((this.stack = e.stack), (e = e.message)),
          (this.message = e),
          (this.name = i),
          (this.reason = e),
          (this.line = n ? n.line : null),
          (this.column = n ? n.column : null),
          (this.location = u),
          (this.source = o[0]),
          (this.ruleId = o[1]);
      }
      (i.file = ""),
        (i.name = ""),
        (i.reason = ""),
        (i.message = ""),
        (i.stack = ""),
        (i.fatal = null),
        (i.column = null),
        (i.line = null);
    },
    939: function (e, n, t) {
      "use strict";
      e.exports = t(5905);
    },
    5442: function (e, n, t) {
      "use strict";
      var r = t(8064),
        o = t(4228),
        i = t(8738);
      e.exports = a;
      var u = {}.hasOwnProperty,
        l = ["history", "path", "basename", "stem", "extname", "dirname"];
      function a(e) {
        var n, t;
        if (e) {
          if ("string" === typeof e || i(e)) e = { contents: e };
          else if ("message" in e && "messages" in e) return e;
        } else e = {};
        if (!(this instanceof a)) return new a(e);
        for (
          this.data = {},
            this.messages = [],
            this.history = [],
            this.cwd = o.cwd(),
            t = -1;
          ++t < l.length;

        )
          (n = l[t]), u.call(e, n) && (this[n] = e[n]);
        for (n in e) l.indexOf(n) < 0 && (this[n] = e[n]);
      }
      function c(e, n) {
        if (e && e.indexOf(r.sep) > -1)
          throw new Error(
            "`" + n + "` cannot be a path: did not expect `" + r.sep + "`"
          );
      }
      function s(e, n) {
        if (!e) throw new Error("`" + n + "` cannot be empty");
      }
      function f(e, n) {
        if (!e)
          throw new Error("Setting `" + n + "` requires `path` to be set too");
      }
      (a.prototype.toString = function (e) {
        return (this.contents || "").toString(e);
      }),
        Object.defineProperty(a.prototype, "path", {
          get: function () {
            return this.history[this.history.length - 1];
          },
          set: function (e) {
            s(e, "path"), this.path !== e && this.history.push(e);
          },
        }),
        Object.defineProperty(a.prototype, "dirname", {
          get: function () {
            return "string" === typeof this.path
              ? r.dirname(this.path)
              : void 0;
          },
          set: function (e) {
            f(this.path, "dirname"),
              (this.path = r.join(e || "", this.basename));
          },
        }),
        Object.defineProperty(a.prototype, "basename", {
          get: function () {
            return "string" === typeof this.path
              ? r.basename(this.path)
              : void 0;
          },
          set: function (e) {
            s(e, "basename"),
              c(e, "basename"),
              (this.path = r.join(this.dirname || "", e));
          },
        }),
        Object.defineProperty(a.prototype, "extname", {
          get: function () {
            return "string" === typeof this.path
              ? r.extname(this.path)
              : void 0;
          },
          set: function (e) {
            if ((c(e, "extname"), f(this.path, "extname"), e)) {
              if (46 !== e.charCodeAt(0))
                throw new Error("`extname` must start with `.`");
              if (e.indexOf(".", 1) > -1)
                throw new Error("`extname` cannot contain multiple dots");
            }
            this.path = r.join(this.dirname, this.stem + (e || ""));
          },
        }),
        Object.defineProperty(a.prototype, "stem", {
          get: function () {
            return "string" === typeof this.path
              ? r.basename(this.path, this.extname)
              : void 0;
          },
          set: function (e) {
            s(e, "stem"),
              c(e, "stem"),
              (this.path = r.join(
                this.dirname || "",
                e + (this.extname || "")
              ));
          },
        });
    },
    5905: function (e, n, t) {
      "use strict";
      var r = t(734),
        o = t(5442);
      (e.exports = o),
        (o.prototype.message = function (e, n, t) {
          var o = new r(e, n, t);
          this.path &&
            ((o.name = this.path + ":" + o.name), (o.file = this.path));
          return (o.fatal = !1), this.messages.push(o), o;
        }),
        (o.prototype.info = function () {
          var e = this.message.apply(this, arguments);
          return (e.fatal = null), e;
        }),
        (o.prototype.fail = function () {
          var e = this.message.apply(this, arguments);
          throw ((e.fatal = !0), e);
        });
    },
    8064: function (e, n) {
      "use strict";
      function t(e) {
        var n, t;
        return (
          r(e),
          (n = 47 === e.charCodeAt(0)),
          (t = (function (e, n) {
            var t,
              r,
              o = "",
              i = 0,
              u = -1,
              l = 0,
              a = -1;
            for (; ++a <= e.length; ) {
              if (a < e.length) t = e.charCodeAt(a);
              else {
                if (47 === t) break;
                t = 47;
              }
              if (47 === t) {
                if (u === a - 1 || 1 === l);
                else if (u !== a - 1 && 2 === l) {
                  if (
                    o.length < 2 ||
                    2 !== i ||
                    46 !== o.charCodeAt(o.length - 1) ||
                    46 !== o.charCodeAt(o.length - 2)
                  )
                    if (o.length > 2) {
                      if ((r = o.lastIndexOf("/")) !== o.length - 1) {
                        r < 0
                          ? ((o = ""), (i = 0))
                          : (i =
                              (o = o.slice(0, r)).length -
                              1 -
                              o.lastIndexOf("/")),
                          (u = a),
                          (l = 0);
                        continue;
                      }
                    } else if (o.length) {
                      (o = ""), (i = 0), (u = a), (l = 0);
                      continue;
                    }
                  n && ((o = o.length ? o + "/.." : ".."), (i = 2));
                } else
                  o.length
                    ? (o += "/" + e.slice(u + 1, a))
                    : (o = e.slice(u + 1, a)),
                    (i = a - u - 1);
                (u = a), (l = 0);
              } else 46 === t && l > -1 ? l++ : (l = -1);
            }
            return o;
          })(e, !n)),
          t.length || n || (t = "."),
          t.length && 47 === e.charCodeAt(e.length - 1) && (t += "/"),
          n ? "/" + t : t
        );
      }
      function r(e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      (n.basename = function (e, n) {
        var t,
          o,
          i,
          u,
          l = 0,
          a = -1;
        if (void 0 !== n && "string" !== typeof n)
          throw new TypeError('"ext" argument must be a string');
        if (
          (r(e),
          (t = e.length),
          void 0 === n || !n.length || n.length > e.length)
        ) {
          for (; t--; )
            if (47 === e.charCodeAt(t)) {
              if (i) {
                l = t + 1;
                break;
              }
            } else a < 0 && ((i = !0), (a = t + 1));
          return a < 0 ? "" : e.slice(l, a);
        }
        if (n === e) return "";
        (o = -1), (u = n.length - 1);
        for (; t--; )
          if (47 === e.charCodeAt(t)) {
            if (i) {
              l = t + 1;
              break;
            }
          } else
            o < 0 && ((i = !0), (o = t + 1)),
              u > -1 &&
                (e.charCodeAt(t) === n.charCodeAt(u--)
                  ? u < 0 && (a = t)
                  : ((u = -1), (a = o)));
        l === a ? (a = o) : a < 0 && (a = e.length);
        return e.slice(l, a);
      }),
        (n.dirname = function (e) {
          var n, t, o;
          if ((r(e), !e.length)) return ".";
          (n = -1), (o = e.length);
          for (; --o; )
            if (47 === e.charCodeAt(o)) {
              if (t) {
                n = o;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.charCodeAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, n);
        }),
        (n.extname = function (e) {
          var n,
            t,
            o,
            i = -1,
            u = 0,
            l = -1,
            a = 0;
          r(e), (o = e.length);
          for (; o--; )
            if (47 !== (t = e.charCodeAt(o)))
              l < 0 && ((n = !0), (l = o + 1)),
                46 === t
                  ? i < 0
                    ? (i = o)
                    : 1 !== a && (a = 1)
                  : i > -1 && (a = -1);
            else if (n) {
              u = o + 1;
              break;
            }
          if (
            i < 0 ||
            l < 0 ||
            0 === a ||
            (1 === a && i === l - 1 && i === u + 1)
          )
            return "";
          return e.slice(i, l);
        }),
        (n.join = function () {
          var e,
            n = -1;
          for (; ++n < arguments.length; )
            r(arguments[n]),
              arguments[n] &&
                (e = void 0 === e ? arguments[n] : e + "/" + arguments[n]);
          return void 0 === e ? "." : t(e);
        }),
        (n.sep = "/");
    },
    4228: function (e, n) {
      "use strict";
      n.cwd = function () {
        return "/";
      };
    },
    7529: function (e) {
      e.exports = function () {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          for (var o in r) n.call(r, o) && (e[o] = r[o]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    2587: function (e, n, t) {
      "use strict";
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    29: function (e, n, t) {
      "use strict";
      function r(e, n, t, r, o, i, u) {
        try {
          var l = e[i](u),
            a = l.value;
        } catch (c) {
          return void t(c);
        }
        l.done ? n(a) : Promise.resolve(a).then(r, o);
      }
      function o(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (o, i) {
            var u = e.apply(n, t);
            function l(e) {
              r(u, o, i, l, a, "next", e);
            }
            function a(e) {
              r(u, o, i, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      t.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    6864: function (e, n, t) {
      "use strict";
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    6835: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(2937);
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                u = !0,
                l = !1;
              try {
                for (
                  t = t.call(e);
                  !(u = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  u = !0
                );
              } catch (a) {
                (l = !0), (o = a);
              } finally {
                try {
                  u || null == t.return || t.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (0, r.Z)(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    2937: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(2587);
      function o(e, n) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, r.Z)(e, n)
              : void 0
          );
        }
      }
    },
    9640: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}'
      );
    },
  },
]);
