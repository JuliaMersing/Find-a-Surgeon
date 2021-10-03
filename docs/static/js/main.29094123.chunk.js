(this["webpackJsonpfind-a-surgon"] =
  this["webpackJsonpfind-a-surgon"] || []).push([
  [0],
  {
    108: function (e, t, n) {},
    109: function (e, t, n) {},
    110: function (e, t, n) {},
    112: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        c = n(22),
        i = n.n(c),
        s = n(14),
        a = n(45),
        l = n(17),
        u = n(5),
        j = n(3),
        o = function (e) {
          return Object(j.jsx)(s.b, {
            to: "/user/".concat(e.user.id),
            children: Object(j.jsxs)("article", {
              className: "card",
              children: [
                Object(j.jsx)("img", {
                  className: "card__img",
                  src: e.user.image,
                  alt: "Photo ".concat(e.user.name),
                  title: "Photo ".concat(e.user.name),
                }),
                Object(j.jsx)("h4", {
                  className: "card__title",
                  children: e.user.name,
                }),
                Object(j.jsxs)("p", {
                  className: "card__description",
                  children: [
                    e.user.city,
                    " / ",
                    "female" === e.user.gender
                      ? "Female"
                      : "male" === e.user.gender
                      ? "Male"
                      : "No binario",
                  ],
                }),
              ],
            }),
          });
        },
        d = function (e) {
          var t = e.users.map(function (e) {
            return Object(j.jsx)(
              "li",
              { children: Object(j.jsx)(o, { user: e }) },
              e.id
            );
          });
          return Object(j.jsx)("section", {
            children: Object(j.jsx)("ul", { className: "cards", children: t }),
          });
        },
        m = n(48),
        b = n.n(m),
        f =
          (n(65),
          function (e) {
            var t = function () {
              var e = Object(r.useState)(new Date()),
                t = Object(l.a)(e, 2),
                n = t[0],
                c = t[1];
              return Object(j.jsx)(b.a, {
                selected: n,
                onChange: function (e) {
                  return c(e);
                },
              });
            };
            return Object(j.jsxs)("div", {
              className: "card",
              children: [
                Object(j.jsx)(s.b, { to: "/", children: "Home" }),
                Object(j.jsx)("header", {
                  children: Object(j.jsx)("h2", { children: e.user.name }),
                }),
                Object(j.jsxs)("section", {
                  children: [
                    Object(j.jsx)("img", {
                      className: "card__img",
                      src: e.user.image,
                      alt: e.user.name,
                    }),
                    Object(j.jsx)("h4", {
                      className: "card__title",
                      children: e.user.name,
                    }),
                    Object(j.jsxs)("ul", {
                      className: "ml-1 mt-1",
                      children: [
                        Object(j.jsxs)("li", {
                          children: ["Gender: ", e.user.gender],
                        }),
                        Object(j.jsxs)("li", {
                          children: ["Email: ", e.user.email],
                        }),
                        Object(j.jsxs)("li", {
                          children: ["City: ", e.user.city],
                        }),
                        Object(j.jsxs)("li", {
                          children: ["Country: ", e.user.country],
                        }),
                      ],
                    }),
                    Object(j.jsx)(t, {}),
                  ],
                }),
              ],
            });
          }),
        h = function (e) {
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)("label", {
                className: "form__label display-block",
                htmlFor: "name",
                children: "Name:",
              }),
              Object(j.jsx)("input", {
                className: "form__input-text",
                type: "text",
                name: "name",
                id: "name",
                value: e.filterName,
                onChange: function (t) {
                  e.handleFilter({ value: t.target.value, key: "name" });
                },
              }),
            ],
          });
        },
        O = function (e) {
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)("label", {
                className: "form__label display-block",
                htmlFor: "gender",
                children: "Gender:",
              }),
              Object(j.jsxs)("select", {
                className: "form__input-text",
                name: "gender",
                id: "gender",
                value: e.filterGender,
                onChange: function (t) {
                  e.handleFilter({ value: t.target.value, key: "gender" });
                },
                children: [
                  Object(j.jsx)("option", { value: "", children: "All" }),
                  Object(j.jsx)("option", {
                    value: "female",
                    children: "Female",
                  }),
                  Object(j.jsx)("option", { value: "male", children: "Male" }),
                  Object(j.jsx)("option", {
                    value: "no-binary",
                    children: "No-binary",
                  }),
                ],
              }),
            ],
          });
        },
        x =
          (n(108),
          function (e) {
            var t = function (t) {
              e.handleFilter({ value: t.target.value, key: "city" });
            };
            return Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsx)("label", {
                  className: "form__label display-block",
                  htmlFor: "city",
                  children: "City:",
                }),
                Object(j.jsx)("ul", {
                  className: "filterCities",
                  children: e.cities.map(function (n, r) {
                    return Object(j.jsx)(
                      "li",
                      {
                        children: Object(j.jsxs)("label", {
                          children: [
                            Object(j.jsx)("input", {
                              className: "input",
                              type: "checkbox",
                              name: "city",
                              value: n,
                              checked: e.filterCities.includes(n),
                              onChange: t,
                            }),
                            n,
                          ],
                        }),
                      },
                      r
                    );
                  }),
                }),
              ],
            });
          }),
        g = function (e) {
          return Object(j.jsx)("section", {
            children: Object(j.jsxs)("form", {
              className: "form",
              children: [
                Object(j.jsx)(h, {
                  filterName: e.filterName,
                  handleFilter: e.handleFilter,
                }),
                Object(j.jsx)(O, {
                  filterGender: e.filterGender,
                  handleFilter: e.handleFilter,
                }),
                Object(j.jsx)(x, {
                  filterCities: e.filterCities,
                  cities: e.cities,
                  handleFilter: e.handleFilter,
                }),
              ],
            }),
          });
        },
        p = function () {
          return fetch("https://randomuser.me/api/?results=50")
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return e.results.map(function (e) {
                return {
                  id: e.login.uuid,
                  gender: e.gender,
                  email: e.email,
                  city: e.location.city,
                  country: e.location.country,
                  image: e.picture.large,
                  name: "".concat(e.name.first, " ").concat(e.name.last),
                };
              });
            });
        },
        v = {
          get: function (e, t) {
            var n = localStorage.getItem(e);
            return null === n ? t : JSON.parse(n);
          },
          set: function (e, t) {
            localStorage.setItem(e, JSON.stringify(t));
          },
        },
        y =
          (n(109),
          function () {
            var e = Object(r.useState)(v.get("users", [])),
              t = Object(l.a)(e, 2),
              n = t[0],
              c = t[1],
              i = Object(r.useState)(v.get("filterName", "")),
              s = Object(l.a)(i, 2),
              o = s[0],
              m = s[1],
              b = Object(r.useState)(v.get("filterGender", "")),
              h = Object(l.a)(b, 2),
              O = h[0],
              x = h[1],
              y = Object(r.useState)(v.get("filterCities", [])),
              N = Object(l.a)(y, 2),
              F = N[0],
              _ = N[1];
            Object(r.useEffect)(function () {
              0 === n.length &&
                p().then(function (e) {
                  c(e);
                });
            }, []),
              Object(r.useEffect)(
                function () {
                  v.set("users", n);
                },
                [n]
              ),
              Object(r.useEffect)(
                function () {
                  v.set("users", n),
                    v.set("filterName", o),
                    v.set("filterGender", O),
                    v.set("filterCities", F);
                },
                [n, o, O, F]
              );
            var C = n
              .filter(function (e) {
                return e.name.toLowerCase().includes(o.toLowerCase());
              })
              .filter(function (e) {
                return "" === O || e.gender === O;
              })
              .filter(function (e) {
                return 0 === F.length || F.includes(e.city);
              });
            return Object(j.jsx)(j.Fragment, {
              children: Object(j.jsxs)("div", {
                className: "page",
                children: [
                  Object(j.jsx)("h1", {
                    className: "title--big",
                    children: "Find a Surgeon",
                  }),
                  Object(j.jsxs)(u.c, {
                    children: [
                      Object(j.jsx)(u.a, {
                        exact: !0,
                        path: "/",
                        children: Object(j.jsxs)("div", {
                          className: "col2",
                          children: [
                            Object(j.jsx)(g, {
                              filterName: o,
                              filterGender: O,
                              filterCities: F,
                              cities: (function () {
                                var e = n.map(function (e) {
                                  return e.city;
                                });
                                return Object(a.a)(new Set(e));
                              })(),
                              handleFilter: function (e) {
                                if ("name" === e.key) m(e.value);
                                else if ("gender" === e.key) x(e.value);
                                else if ("city" === e.key)
                                  if (F.includes(e.value)) {
                                    var t = F.filter(function (t) {
                                      return t !== e.value;
                                    });
                                    _(t);
                                  } else F.push(e.value), _(Object(a.a)(F));
                              },
                            }),
                            Object(j.jsx)(d, { users: C }),
                          ],
                        }),
                      }),
                      Object(j.jsx)(u.a, {
                        path: "/user/:userId",
                        render: function (e) {
                          var t = e.match.params.userId,
                            r = n.find(function (e) {
                              return e.id === t;
                            });
                          return void 0 !== r
                            ? Object(j.jsx)(f, { user: r })
                            : Object(j.jsx)("p", {
                                children: "User not found",
                              });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            });
          });
      n(110);
      i.a.render(
        Object(j.jsx)(s.a, { children: Object(j.jsx)(y, {}) }),
        document.querySelector("#root")
      );
    },
  },
  [[112, 1, 2]],
]);
//# sourceMappingURL=main.29094123.chunk.js.map
