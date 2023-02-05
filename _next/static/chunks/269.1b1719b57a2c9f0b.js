"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [269],
  {
    269: function (r, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        });
      var n = t(7258),
        o = t(7294),
        a = t(2804),
        i = t(4855),
        u = function () {
          return { characterList: a.sJ(i.fP), searchTextState: a.sJ(i.WZ) };
        },
        c = t(1286);
      function l(r, e) {
        var t =
          ("undefined" !== typeof Symbol && r[Symbol.iterator]) ||
          r["@@iterator"];
        if (!t) {
          if (
            Array.isArray(r) ||
            (t = (function (r, e) {
              if (!r) return;
              if ("string" === typeof r) return s(r, e);
              var t = Object.prototype.toString.call(r).slice(8, -1);
              "Object" === t && r.constructor && (t = r.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(r);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return s(r, e);
            })(r)) ||
            (e && r && "number" === typeof r.length)
          ) {
            t && (r = t);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= r.length
                  ? { done: !0 }
                  : { done: !1, value: r[n++] };
              },
              e: function (r) {
                throw r;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            t = t.call(r);
          },
          n: function () {
            var r = t.next();
            return (i = r.done), r;
          },
          e: function (r) {
            (u = !0), (a = r);
          },
          f: function () {
            try {
              i || null == t.return || t.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function s(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      var f = o.lazy(function () {
          return Promise.all([t.e(351), t.e(213)]).then(t.bind(t, 6213));
        }),
        d = o.memo(function () {
          var r = u();
          return (0, n.tZ)(
            "ul",
            { css: y },
            r.characterList.map(function (e, t) {
              var o = (function () {
                var t = r.searchTextState.toLowerCase();
                if ("" === r.searchTextState) return !0;
                if (
                  e.first_name.toLowerCase().includes(t) ||
                  e.last_name.toLowerCase().includes(t) ||
                  e.school.toLowerCase().includes(t)
                )
                  return !0;
                var n,
                  o = l(e.club);
                try {
                  for (o.s(); !(n = o.n()).done; ) {
                    if (n.value.toLowerCase().includes(t)) return !0;
                  }
                } catch (a) {
                  o.e(a);
                } finally {
                  o.f();
                }
                return !1;
              })();
              return (0, n.tZ)(f, { key: t, character: e, display: o });
            })
          );
        }),
        y = (0, n.iv)(
          "grid-area:characterList;background-color:",
          c.r.color.secondary,
          ";overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
          "",
          ""
        );
    },
  },
]);
