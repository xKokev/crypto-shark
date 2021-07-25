(this['webpackJsonpcrypto-shark'] =
  this['webpackJsonpcrypto-shark'] || []).push([
  [0],
  {
    25: function (e, n, t) {},
    49: function (e, n, t) {},
    50: function (e, n, t) {
      'use strict';
      t.r(n);
      var a,
        r,
        c,
        o,
        s,
        i,
        l,
        d,
        u,
        b,
        j,
        p,
        f = t(1),
        m = t(18),
        h = t.n(m),
        O = (t(25), t(6)),
        x = t.n(O),
        g = t(7),
        v = t(4),
        y = t(2),
        k = t(8),
        w = t.n(k),
        C = t.p + './docs/static/media/sharky.ad817a17.png',
        S = t(3),
        D = t(0),
        A = S.a.p(
          a ||
            (a = Object(y.a)([
              "\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: 'Bebas Neue', cursive;\n",
            ]))
        ),
        E = function (e) {
          var n = e.mensaje;
          return Object(D.jsx)(A, { children: n });
        },
        I = S.a.label(
          r ||
            (r = Object(y.a)([
              "\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n",
            ]))
        ),
        z = S.a.select(
          c ||
            (c = Object(y.a)([
              '\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n',
            ]))
        ),
        N = function (e, n, t) {
          var a = Object(f.useState)(n),
            r = Object(v.a)(a, 2),
            c = r[0],
            o = r[1];
          return [
            c,
            function () {
              return Object(D.jsxs)(f.Fragment, {
                children: [
                  Object(D.jsx)(I, { children: e }),
                  Object(D.jsxs)(z, {
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                    value: c,
                    children: [
                      Object(D.jsx)('option', {
                        value: '',
                        children: '-\ud83d\udcb2 Select \ud83d\udcb2-',
                      }),
                      t.map(function (e) {
                        return Object(D.jsx)(
                          'option',
                          { value: e.codigo, children: e.nombre },
                          e.codigo
                        );
                      }),
                    ],
                  }),
                ],
              });
            },
            o,
          ];
        },
        U = S.a.label(
          o ||
            (o = Object(y.a)([
              "\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n",
            ]))
        ),
        B = S.a.select(
          s ||
            (s = Object(y.a)([
              '\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n',
            ]))
        ),
        P = function (e, n, t) {
          var a = Object(f.useState)(n),
            r = Object(v.a)(a, 2),
            c = r[0],
            o = r[1];
          return [
            c,
            function () {
              return Object(D.jsxs)(f.Fragment, {
                children: [
                  Object(D.jsx)(U, { children: e }),
                  Object(D.jsxs)(B, {
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                    value: c,
                    children: [
                      Object(D.jsx)('option', {
                        value: '',
                        children: '- \ud83e\ude99 Select \ud83e\ude99-',
                      }),
                      t.map(function (e) {
                        return Object(D.jsx)(
                          'option',
                          {
                            value: e.CoinInfo.Name,
                            children: e.CoinInfo.FullName,
                          },
                          e.CoinInfo.Id
                        );
                      }),
                    ],
                  }),
                ],
              });
            },
            o,
          ];
        },
        Y = S.a.input(
          i ||
            (i = Object(y.a)([
              '\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #326ac0;\n    cursor: pointer;\n  }\n',
            ]))
        ),
        H = function (e) {
          var n = e.guardarMoneda,
            t = e.guardarCriptomoneda,
            a = Object(f.useState)([]),
            r = Object(v.a)(a, 2),
            c = r[0],
            o = r[1],
            s = Object(f.useState)(!1),
            i = Object(v.a)(s, 2),
            l = i[0],
            d = i[1],
            u = N('Choose your Currency', '', [
              { codigo: 'USD', nombre: '\ud83c\uddfa\ud83c\uddf8 U.S. dollar' },
              { codigo: 'EUR', nombre: '\ud83c\uddea\ud83c\uddfa Euro' },
              {
                codigo: 'CAD',
                nombre: '\ud83c\udde8\ud83c\udde6 Canadian dollar',
              },
              {
                codigo: 'GBP',
                nombre:
                  '\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f Pound sterling',
              },
              {
                codigo: 'ILS',
                nombre: '\ud83c\uddee\ud83c\uddf1 Israeli shekel',
              },
              { codigo: 'AED', nombre: '\ud83c\udde6\ud83c\uddea D\xedrham' },
              {
                codigo: 'AED',
                nombre: '\ud83c\udde6\ud83c\uddfa Australian dollar',
              },
              {
                codigo: 'JPY',
                nombre: '\ud83c\uddef\ud83c\uddf5 Japanese Yen',
              },
              { codigo: 'CNY', nombre: '\ud83c\udde8\ud83c\uddf3 Yuan' },
              {
                codigo: 'MXN',
                nombre: '\ud83c\uddf2\ud83c\uddfd Mexican peso',
              },
            ]),
            b = Object(v.a)(u, 2),
            j = b[0],
            p = b[1],
            m = P('Choose your Cryptocurrency', '', c),
            h = Object(v.a)(m, 2),
            O = h[0],
            y = h[1];
          Object(f.useEffect)(function () {
            (function () {
              var e = Object(g.a)(
                x.a.mark(function e() {
                  var n;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
                            (e.next = 3),
                            w.a.get(
                              'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
                            )
                          );
                        case 3:
                          (n = e.sent), o(n.data.Data);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          return Object(D.jsxs)('form', {
            onSubmit: function (e) {
              e.preventDefault(),
                '' !== j && '' !== O ? (d(!1), n(j), t(O)) : d(!0);
            },
            children: [
              l
                ? Object(D.jsx)(E, { mensaje: 'All fields are required' })
                : null,
              Object(D.jsx)(p, {}),
              Object(D.jsx)(y, {}),
              Object(D.jsx)(Y, { type: 'submit', value: 'Calculate' }),
            ],
          });
        },
        L = S.a.div(
          l ||
            (l = Object(y.a)([
              '\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n',
            ]))
        ),
        T = S.a.p(
          d ||
            (d = Object(y.a)([
              '\n  font-size: 18px;\n  span {\n    font-weight: bold;\n  }\n',
            ]))
        ),
        J = S.a.p(
          u ||
            (u = Object(y.a)([
              '\n  font-size: 30px;\n  span {\n    font-weight: bold;\n  }\n',
            ]))
        ),
        M = function (e) {
          var n = e.resultado;
          return 0 === Object.keys(n).length
            ? null
            : (console.log(n),
              Object(D.jsxs)(L, {
                children: [
                  Object(D.jsxs)(J, {
                    children: [
                      'The price is: ',
                      Object(D.jsx)('span', { children: n.PRICE }),
                      ' ',
                    ],
                  }),
                  Object(D.jsxs)(T, {
                    children: [
                      'Highest price of the day: ',
                      Object(D.jsx)('span', { children: n.HIGHDAY }),
                      ' ',
                    ],
                  }),
                  Object(D.jsxs)(T, {
                    children: [
                      'Lowest price of the day: ',
                      Object(D.jsx)('span', { children: n.LOWDAY }),
                      ' ',
                    ],
                  }),
                  Object(D.jsxs)(T, {
                    children: [
                      'Variation last 24 hours: ',
                      Object(D.jsx)('span', { children: n.CHANGEPCT24HOUR }),
                      ' ',
                    ],
                  }),
                  Object(D.jsxs)(T, {
                    children: [
                      'Last Update: ',
                      Object(D.jsx)('span', { children: n.LASTUPDATE }),
                      ' ',
                    ],
                  }),
                ],
              }));
        },
        F =
          (t(49),
          function () {
            return Object(D.jsxs)('div', {
              class: 'sk-chase',
              children: [
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
                Object(D.jsx)('div', { class: 'sk-chase-dot' }),
              ],
            });
          }),
        G = S.a.div(
          b ||
            (b = Object(y.a)([
              '\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n',
            ]))
        ),
        R = S.a.img(
          j ||
            (j = Object(y.a)(['\n  max-width: 100%;\n  margin-top: 5rem;\n']))
        ),
        W = S.a.h1(
          p ||
            (p = Object(y.a)([
              "\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n",
            ]))
        );
      var q = function () {
        var e = Object(f.useState)(''),
          n = Object(v.a)(e, 2),
          t = n[0],
          a = n[1],
          r = Object(f.useState)(''),
          c = Object(v.a)(r, 2),
          o = c[0],
          s = c[1],
          i = Object(f.useState)({}),
          l = Object(v.a)(i, 2),
          d = l[0],
          u = l[1],
          b = Object(f.useState)(!1),
          j = Object(v.a)(b, 2),
          p = j[0],
          m = j[1];
        Object(f.useEffect)(
          function () {
            (function () {
              var e = Object(g.a)(
                x.a.mark(function e() {
                  var n, a;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('' !== t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return (
                            (n =
                              'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='
                                .concat(o, '&tsyms=')
                                .concat(t)),
                            (e.next = 5),
                            w.a.get(n)
                          );
                        case 5:
                          (a = e.sent),
                            m(!0),
                            setTimeout(function () {
                              m(!1), u(a.data.DISPLAY[o][t]);
                            }, 3e3);
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [t, o]
        );
        var h = p ? Object(D.jsx)(F, {}) : Object(D.jsx)(M, { resultado: d });
        return Object(D.jsxs)(G, {
          children: [
            Object(D.jsx)('div', {
              children: Object(D.jsx)(R, { src: C, alt: 'imagen cripto' }),
            }),
            Object(D.jsxs)('div', {
              children: [
                Object(D.jsx)(W, { children: '\ud83e\udd88 Crypto-Shark ' }),
                Object(D.jsx)(H, { guardarMoneda: a, guardarCriptomoneda: s }),
                h,
              ],
            }),
          ],
        });
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      h.a.render(Object(D.jsx)(q, {}), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[50, 1, 2]],
]);
//# sourceMappingURL=main.43ec8cc6.chunk.js.map
