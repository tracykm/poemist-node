(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    144: function (e, n, t) {},
    155: function (e, n, t) {
      "use strict";
      t.r(n), (n.default = t.p + "static/media/example-clicking.f7137e63.gif");
    },
    158: function (e, n, t) {
      "use strict";
      t.r(n);
      var a,
        r,
        c,
        o,
        i,
        s,
        d,
        l,
        u,
        b,
        p,
        j,
        m = t(9),
        g = t(0),
        h = t(21),
        x = t.n(h),
        O = (t(144), t(24)),
        v = t(14),
        f = t(22),
        k = t(20),
        w = t(210),
        y = t(127),
        I = (t(191), t(192)),
        C = {},
        S = Object(w.a)(
          a ||
            (a = Object(v.a)([
              "\n  fragment PoemDetails on Poem {\n    id\n    backgroundId\n    colorRange\n    createdAt\n    updatedAt\n    author {\n      id\n      username\n    }\n    book {\n      id\n      title\n    }\n    textChunks {\n      id\n      text\n      isSelected\n    }\n  }\n",
            ]))
        ),
        N = Object(w.a)(
          r ||
            (r = Object(v.a)([
              "\n  query getRandomBook {\n    randomBook {\n      id\n      title\n      text\n      startIdx\n    }\n  }\n",
            ]))
        );
      var P = Object(w.a)(
        c ||
          (c = Object(v.a)([
            "\n  query getSinglePoem($id: Int!) {\n    poem(id: $id) {\n      ...PoemDetails\n    }\n  }\n  ",
            "\n",
          ])),
        S
      );
      function z(e) {
        var n = Object(m.a)(Object(m.a)({}, C), e);
        return y.b(P, n);
      }
      var L = Object(w.a)(
        o ||
          (o = Object(v.a)([
            "\n  query getPoems($first: Int) {\n    poemPages(first: $first) {\n      edges {\n        node {\n          ...PoemDetails\n        }\n      }\n    }\n  }\n  ",
            "\n",
          ])),
        S
      );
      var U = Object(w.a)(
        i ||
          (i = Object(v.a)([
            "\n  query getPoemsByAuthor($authorId: Int, $first: Int) {\n    poemPages(authorId: $authorId, first: $first) {\n      edges {\n        node {\n          ...PoemDetails\n        }\n      }\n    }\n  }\n  ",
            "\n",
          ])),
        S
      );
      var B = Object(w.a)(
        s ||
          (s = Object(v.a)([
            "\n  mutation createPoem(\n    $textChunks: [TextChunkInputType]!\n    $bookId: Int!\n    $startIdx: Int!\n    $passage: String\n  ) {\n    createPoem(\n      textChunks: $textChunks\n      bookId: $bookId\n      startIdx: $startIdx\n      passage: $passage\n    ) {\n      ...PoemDetails\n    }\n  }\n  ",
            "\n",
          ])),
        S
      );
      var M = Object(w.a)(
        d ||
          (d = Object(v.a)([
            "\n  mutation updatePoem(\n    $textChunks: [TextChunkInputType]!\n    $id: Int!\n    $backgroundId: Int\n    $colorRange: Int\n  ) {\n    updatePoem(\n      textChunks: $textChunks\n      id: $id\n      backgroundId: $backgroundId\n      colorRange: $colorRange\n    ) {\n      ...PoemDetails\n    }\n  }\n  ",
            "\n",
          ])),
        S
      );
      var $ = Object(w.a)(
        l ||
          (l = Object(v.a)([
            "\n  mutation deletePoem($id: Int!) {\n    deletePoem(id: $id) {\n      id\n    }\n  }\n",
          ]))
      );
      var D = Object(w.a)(
        u ||
          (u = Object(v.a)([
            "\n  query getCurrentUser {\n    currentUser {\n      id\n      username\n    }\n  }\n",
          ]))
      );
      function R(e) {
        var n = Object(m.a)(Object(m.a)({}, C), e);
        return y.b(D, n);
      }
      var W = Object(w.a)(
        b ||
          (b = Object(v.a)([
            "\n  query getUser($id: Int!) {\n    user(id: $id) {\n      id\n      username\n      createdAt\n    }\n  }\n",
          ]))
      );
      var Z = Object(w.a)(
        p ||
          (p = Object(v.a)([
            "\n  mutation createUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      id\n    }\n  }\n",
          ]))
      );
      var A = Object(w.a)(
        j ||
          (j = Object(v.a)([
            "\n  mutation loginUser($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n",
          ]))
      );
      var H = t(51),
        T = t(193);
      function E(e) {
        var n = e.cache,
          t = e.arg,
          a = e.updateData,
          r = n.readQuery(t);
        if (r) {
          var c = a(r);
          n.writeQuery(Object(m.a)(Object(m.a)({}, t), {}, { data: c }));
        }
      }
      var _ = t(2);
      function q(e) {
        var n,
          t = e.authorId,
          a = e.poemId,
          r = R().data,
          c =
            (null === r ||
            void 0 === r ||
            null === (n = r.currentUser) ||
            void 0 === n
              ? void 0
              : n.id) === t,
          o = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return I.a($, n);
          })({
            variables: { id: a },
            update: function (e, n) {
              var a = n.data.deletePoem.id,
                r = function (e) {
                  return Object(H.a)(e, function (e) {
                    var n = e.poemPages.edges.findIndex(function (e) {
                      return e.node.id === a;
                    });
                    e.poemPages.edges.splice(n, 1);
                  });
                };
              E({
                cache: e,
                arg: { query: L, variables: { limit: 10 } },
                updateData: r,
              }),
                E({
                  cache: e,
                  arg: { query: U, variables: { limit: 10, authorId: t } },
                  updateData: r,
                });
            },
          }),
          i = Object(f.a)(o, 1)[0];
        return Object(_.jsx)("span", {
          className: "delete-edit-links",
          children:
            c &&
            Object(_.jsxs)("span", {
              children: [
                Object(_.jsx)(T.a, {
                  onClick: function () {
                    return (
                      window.confirm(
                        "Are you sure you want to delete your poem?"
                      ) && i()
                    );
                  },
                  children: "delete",
                }),
                " / ",
                Object(_.jsx)(k.b, {
                  to: "/edit/write/".concat(a),
                  children: "edit",
                }),
              ],
            }),
        });
      }
      var K,
        V = t(23),
        G = 5,
        J = 15,
        F = 250,
        Q = 1200,
        X = 16,
        Y = 26,
        ee = 120,
        ne = "425px",
        te = "768px",
        ae = "#bbb",
        re = "#333",
        ce = "#e0e0e0",
        oe = "#757575",
        ie = "#212121",
        se = V.a.div(
          K ||
            (K = Object(v.a)([
              "\n  width: ",
              "px;\n  &.close-up {\n    width: ",
              "px;\n  }\n  text-align: right;\n  position: relative;\n  z-index: 20;\n  background: black;\n\n  .delete-edit-links {\n    float: left;\n  }\n",
            ])),
          F,
          2 * F
        );
      function de(e) {
        var n = e.authorId,
          t = e.poemId;
        return Object(_.jsxs)(se, {
          className: "poem-header",
          children: [
            Object(_.jsx)(q, { authorId: n, poemId: t }),
            t &&
              Object(_.jsx)(k.b, {
                to: "/poem/".concat(t),
                "data-cy": "view-close-up-poem",
                children: "view",
              }),
          ],
        });
      }
      for (
        var le,
          ue,
          be = t.p + "static/media/paper-rect-contrast.e66685ca.jpg",
          pe = t.p + "static/media/tree-bark.32958e04.jpg",
          je = t.p + "static/media/contemporary_china_small.de76a51e.png",
          me = t.p + "static/media/f0c4457.f1a0d7a4.jpg",
          ge = t.p + "static/media/maxresdefault.4be2421c.jpg",
          he = t.p + "static/media/blueTile.b092c647.jpg",
          xe =
            t.p +
            "static/media/life_original_wild_urban_shells_abstract_texture_love-572258.16701eac.jpg",
          Oe = t.p + "static/media/paintingCracks.aef5b50c.jpg",
          ve = t.p + "static/media/Alcala_lg.fae98355.jpg",
          fe = t.p + "static/media/map2.3c916e96.jpg",
          ke = t.p + "static/media/paperInverted.60927562.jpg",
          we = t.p + "static/media/paperContrast.d0935fda.jpg",
          ye = t.p + "static/media/triangles-123.3dd0203b.jpg",
          Ie = t.p + "static/media/1_mU0yXR99Bg91S1ACSyPq_w.1960b2a2.jpg",
          Ce = t.p + "static/media/waves.1e03dd53.jpg",
          Se = t.p + "static/media/electronic.874e57d2.jpg",
          Ne = V.a.div(
            le ||
              (le = Object(v.a)([
                '\n  line-height: 1em;\n  height: 30em; /* 30 lines */\n  overflow: hidden;\n  font-family: "Garamond", serif;\n  font-weight: 400;\n  padding-bottom: 0.3em;\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n',
              ]))
          ),
          Pe = "",
          ze = 0;
        ze < 36;

      )
        ze++,
          (Pe += "\n    &.color-"
            .concat(ze, " .background-img, &.color-")
            .concat(ze, " .poem-text {\n      filter: hue-rotate(")
            .concat(10 * ze, "deg);\n    }\n  "));
      var Le = V.a.div(
          ue ||
            (ue = Object(v.a)([
              "\n  font-size: ",
              "px;\n  ",
              ";\n  &.close-up {\n    margin: auto;\n    display: block;\n    width: ",
              "px;\n    font-size: ",
              "px;\n    .background-img {\n      width: ",
              "px;\n      height: ",
              "px;\n    }\n    .poem-header, .poem-footer {\n      font-size: ",
              "px;\n    }\n  }\n  .poem-header, .poem-text, .poem-footer {\n    padding-left: .5em;\n    padding-right: .5em;\n  }\n  .poem-header, .poem-footer {\n    width: 100%;\n    background: rgba(0, 0, 0, 0);\n    color: ",
              ";\n    font-size: ",
              "px;\n    a {\n      color: ",
              ";\n      &:hover {\n        color: white;\n      }\n    }\n  }\n  width: ",
              'px;\n  margin: 1em;\n  display: inline-block;\n  vertical-align: text-top;\n  text-align: center;\n  position: relative; /* for absolute overflow styles */\n  overflow: hidden;\n\n  .background-img {\n    content: "";\n    background: url(',
              ");\n    position: absolute;\n    width: ",
              "px;\n    height: ",
              "px;\n    z-index: -10;\n    top: 0;\n    left: 0;\n  }\n\n  .is-selected {\n    position: relative; /* for zindex */\n    background: yellow;\n  }\n  .not-selected {\n    color: rgba(0, 0, 0, 0.2);\n  }\n\n  /* @include mobile {\n    width: 100%;\n  } */\n\n  &.style-1 {\n    .background-img {\n      background: url(",
              ");\n    }\n    .not-selected {\n      color: rgba(0, 0, 0, 0.1);\n      text-shadow: ",
              " 0 0 0.2em;\n    }\n    .is-selected {\n      text-shadow: black 1px 1px 1px;\n      background: none;\n    }\n  }\n\n  &.style-2 {\n    .background-img {\n      background: url(",
              ");\n    }\n    .not-selected {\n      opacity: 0;\n    }\n    .is-selected {\n      background: none;\n    }\n  }\n\n  &.style-3 {\n    .background-img {\n      background: url(",
              ');\n    }\n    .not-selected {\n      opacity: .2;\n    }\n    .is-selected {\n      background: none;\n      color: white;\n    }\n  }\n\n  &.style-4 {\n    background: white;\n    .is-selected {\n      background: pink;\n      &:before {\n        content: "";\n        position: absolute;\n        height: 1.2em;\n        width: 1000px;\n        border: .2em solid;\n        margin: -.1em;\n        margin-left: -.3em;\n        z-index: 11;\n      }\n    }\n  }\n\n  &.style-5 {\n    .background-img {\n      background: white;\n    }\n    .not-selected {\n      color: black;\n      border-top: solid 0.1em;\n      border-bottom: solid 0.1em;\n      text-decoration: line-through;\n    }\n    .is-selected {\n      background: white;\n      padding: ',
              "px ",
              "px;\n      margin: ",
              "px;\n      box-shadow: black 0.2em 0.2em 0;\n    }\n  }\n\n  &.style-6 {\n    .not-selected {\n      background: rgba(0,0,0, .75);\n    }\n    .is_selected {\n      background: white !important;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-7 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 20%;\n    }\n    .is-selected {\n      background: none !important;\n      text-shadow: black 0.05em 0.02em 0;\n    }\n  }\n\n  &.style-8 {\n    .background-img {\n      background: url(",
              ");\n    }\n    .is-selected {\n      color: white;\n      background: red;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-9 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 100%;\n    }\n    .is-selected {\n      background: #3e144c;\n      color: #cccbbf;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n      .text {\n        z-index: 10;\n        color: white;\n        position: relative;\n      }\n    }\n  }\n\n  &.style-10 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 100%;\n    }\n    .not-selected {\n      color: rgba(255, 255, 255, .2);\n    }\n    .is-selected {\n      background: none;\n      color: white;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-11 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 50%;\n\n    }\n    .is-selected {\n      background: #100000;\n      color: #cccbbf;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n      .text {\n        z-index: 10;\n        color: white;\n        position: relative;\n      }\n    }\n  }\n\n  &.style-12 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 80%;\n    }\n    .not-selected {\n      color: rgba(0, 0, 0, 0);\n    }\n    .is-selected {\n      background: #0091ae;\n      color: #e7b8bc;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-13 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 120%;\n    }\n    .not-selected {\n      color: rgba(0, 0, 0, 0);\n    }\n    .is-selected {\n      background: none;\n      color: white;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n      text-shadow: white 1px 1px 1px;\n    }\n  }\n\n  &.style-14 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 20%;\n    }\n    .not-selected {\n      color: rgba(0, 0, 0, 0);\n    }\n    .is-selected {\n      background: #37517a;\n      color: white;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-15 {\n    .background-img {\n      background: url(",
              ");\n      background-size: 100%;\n    }\n    .is-selected {\n      background: #2c3c4e;\n      color: #cccbbf;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n      .text {\n        z-index: 10;\n        color: white;\n        position: relative;\n      }\n    }\n  }\n\n  &.style-16 {\n    .background-img {\n      background: url(",
              ");\n      background-repeat: repeat-y;\n      background-size: 100%;\n    }\n    .is-selected {\n      background: #f7ffa9;\n      color: #499991;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-17 {\n    .background-img {\n      background: url(",
              ");\n      background-repeat: repeat-y;\n      background-size: 100%;\n    }\n    .is-selected {\n      background: #380b1c;\n      color: #d2d4d1;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              'px;\n    }\n  }\n\n  &.style-18 {\n    .background-img {\n      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAiPgo8ZGVmcz4KPHJlY3QgaWQ9InIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxNSIgZmlsbD0iI2JiMDg1ZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZT0iIzdhMDU0ZCI+PC9yZWN0Pgo8ZyBpZD0icCI+Cjx1c2UgeGxpbms6aHJlZj0iI3IiPjwvdXNlPgo8dXNlIHk9IjE1IiB4bGluazpocmVmPSIjciI+PC91c2U+Cjx1c2UgeT0iMzAiIHhsaW5rOmhyZWY9IiNyIj48L3VzZT4KPHVzZSB5PSI0NSIgeGxpbms6aHJlZj0iI3IiPjwvdXNlPgo8L2c+CjwvZGVmcz4KPHVzZSB4bGluazpocmVmPSIjcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjUpIHNrZXdZKDQwKSI+PC91c2U+Cjx1c2UgeGxpbms6aHJlZj0iI3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwIDApIHNrZXdZKC00MCkiPjwvdXNlPgo8L3N2Zz4=");\n      background-size: 100%;\n    }\n    .is-selected {\n      background: white;\n      color: black;\n      padding: ',
              "em ",
              "em;\n      margin: ",
              "em ",
              "em;\n      .text {\n        z-index: 11;\n        position: relative;\n      }\n    }\n  }\n\n  &.style-19 {\n    .background-img {\n      background: url(",
              ");\n      background-position-x: 60%;\n      background-position-y: 70%;\n    }\n    .is-selected {\n      background: black;\n      padding: 5px 15px;\n      margin: -15px;\n      color: #61c098;\n      padding: ",
              "px ",
              "px;\n      margin: ",
              "px;\n    }\n  }\n\n  &.style-20 {\n  .background-img {\n    background: url(",
              ");\n    background-size: 100%;\n  }\n  .not-selected {\n    color: rgba(0, 0, 0, 0);\n  }\n  .is-selected {\n    background: white;\n    color: #008308;\n    padding: 0 ",
              "px;\n    margin: 0 ",
              "px;\n  }\n",
            ])),
          X - 1,
          Pe,
          2 * F,
          2 * X,
          2 * F,
          2 * Q,
          1.5 * X,
          ae,
          X,
          oe,
          F - 14,
          be,
          F,
          Q,
          we,
          ce,
          we,
          ke,
          G,
          G,
          -G,
          G,
          J,
          -J,
          je,
          pe,
          G,
          J,
          -J,
          Oe,
          G,
          J,
          -J,
          me,
          G,
          J,
          -J,
          Ce,
          G,
          J,
          -J,
          Ie,
          G,
          J,
          -J,
          ge,
          G,
          J,
          -J,
          he,
          G,
          J,
          -J,
          xe,
          G,
          J,
          -J,
          ye,
          G,
          J,
          -J,
          ve,
          G,
          J,
          -J,
          0.1,
          0.3,
          -0.1,
          -0.3,
          fe,
          G,
          J,
          -J,
          Se,
          G,
          -G
        ),
        Ue = function (e) {
          var n = e.isSelected,
            t = e.text;
          return Object(_.jsx)("span", {
            className: n ? "is-selected" : "not-selected",
            children: Object(_.jsx)("span", { className: "text", children: t }),
          });
        };
      function Be(e) {
        var n = e.textChunks;
        return Object(_.jsx)(Ne, {
          className: "poem-text",
          children:
            n &&
            n.map(function (e, n) {
              return Object(_.jsx)(Ue, Object(m.a)({}, e), n);
            }),
        });
      }
      var Me,
        $e = function (e) {
          var n = e.username,
            t = e.userId;
          return Object(_.jsx)("div", {
            className: "username",
            "data-cy": "usernameLink",
            children: Object(_.jsx)(k.b, {
              to: "/user/".concat(t),
              children: n,
            }),
          });
        };
      function De(e) {
        var n = e.authorUsername,
          t = e.authorId;
        return Object(_.jsx)("div", {
          className: "poem-footer",
          children: Object(_.jsx)($e, { userId: t, username: n }),
        });
      }
      var Re,
        We = V.a.div(
          Me ||
            (Me = Object(v.a)([
              '\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  &:after {\n    content: " ";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n  }\n  @keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n',
            ]))
        ),
        Ze = t(30),
        Ae = t(26),
        He = t(62),
        Te = t(65),
        Ee = (function (e) {
          Object(He.a)(t, e);
          var n = Object(Te.a)(t);
          function t(e) {
            var a;
            return (
              Object(Ze.a)(this, t),
              ((a = n.call(this, e)).state = { hasError: !1 }),
              a
            );
          }
          return (
            Object(Ae.a)(
              t,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, n) {
                    console.warn(e, n);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? Object(_.jsx)("p", {
                          style: { textAlign: "center", margin: 50 },
                          children: "Something went wrong.",
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            t
          );
        })(g.PureComponent);
      function _e(e) {
        var n = e.poem;
        if (!n)
          return Object(_.jsx)("div", {
            className: "poem",
            children: Object(_.jsx)(We, {}),
          });
        var t = n.id,
          a = n.backgroundId,
          r = n.colorRange,
          c = n.textChunks,
          o = n.author;
        return o.id
          ? Object(_.jsx)(Ee, {
              children: Object(_.jsxs)(Le, {
                className: "poem style-"
                  .concat(a, " color-")
                  .concat(r, " ")
                  .concat(e.closeUp ? "close-up" : ""),
                "data-test": "poem".concat(t),
                "data-cy": "poem",
                children: [
                  Object(_.jsx)("div", { className: "background-img" }),
                  Object(_.jsx)(de, { poemId: t, authorId: o.id }),
                  Object(_.jsx)(Be, { textChunks: c }),
                  Object(_.jsx)(De, {
                    authorUsername: o.username,
                    authorId: o.id,
                  }),
                ],
              }),
            })
          : null;
      }
      var qe = t(155),
        Ke = V.a.div(
          Re ||
            (Re = Object(v.a)([
              "\n  .close-up-poem-view {\n    text-align: center;\n    width: ",
              ";\n    margin: auto;\n    text-align: center;\n    .poem {\n      margin: 0;\n      width: ",
              ";\n    }\n  }\n  .help-image {\n    background: url(",
              ");\n    width: 100px;\n    height: 100px;\n  }\n",
            ])),
          2 * F,
          2 * F,
          qe
        );
      function Ve() {
        var e = Object(O.h)().id,
          n = z({ variables: { id: Number(e) } }).data;
        return null !== n && void 0 !== n && n.poem
          ? Object(_.jsx)(Ke, {
              style: { marginTop: 50 },
              children: Object(_.jsx)(_e, { poem: n.poem, closeUp: !0 }),
            })
          : Object(_.jsx)(We, {});
      }
      var Ge,
        Je,
        Fe = t(45),
        Qe = t(121),
        Xe = t.n(Qe),
        Ye =
          (V.a.div(
            Ge ||
              (Ge = Object(v.a)([
                "\n  width: ",
                "px;\n  height: 450px;\n  margin: 16px;\n  background: #ddd;\n  display: inline-block;\n",
              ])),
            F
          ),
          V.a.div(
            Je ||
              (Je = Object(v.a)([
                "\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(",
                "px, 1fr));\n  grid-gap: 10px;\n  > div {\n    text-align: center;\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n",
              ])),
            F
          ));
      function en(e) {
        var n = e.poems,
          t = e.fetchMore;
        return Object(_.jsx)(Ye, {
          children: Object(_.jsx)(Xe.a, {
            loadMore: function (e) {
              return t({
                variables: { offset: 10 * e, limit: 10 },
                updateQuery: function (e, n) {
                  var t = n.fetchMoreResult;
                  return Object(H.a)(e, function (e) {
                    var n;
                    (n = e.poemPages.edges).push.apply(
                      n,
                      Object(Fe.a)(t.poemPages.edges)
                    );
                  });
                },
              });
            },
            hasMore: !(n.edges.length % 10),
            loader: Object(_.jsx)(We, {}),
            children:
              n &&
              n.edges.map(function (e) {
                return Object(_.jsx)(_e, { poem: e.node }, e.node.id);
              }),
          }),
        });
      }
      function nn() {
        var e = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return y.b(L, n);
          })({ variables: { first: 10 } }),
          n = e.data,
          t = e.fetchMore;
        return n
          ? Object(_.jsxs)("div", {
              className: "index-view",
              children: [
                Object(_.jsx)("h5", {
                  children: "Browse through all the communities poems!",
                }),
                Object(_.jsx)(en, { poems: n.poemPages, fetchMore: t }),
              ],
            })
          : Object(_.jsx)(We, {});
      }
      var tn = t(122),
        an = t.n(tn),
        rn = function (e) {
          var n,
            t,
            a = (function (e) {
              var n = Object(m.a)(Object(m.a)({}, C), e);
              return y.b(W, n);
            })({ variables: { id: e.id } }).data,
            r =
              null === (n = R().data) ||
              void 0 === n ||
              null === (t = n.currentUser) ||
              void 0 === t
                ? void 0
                : t.id;
          if (!a) return Object(_.jsx)(We, {});
          var c = a.user,
            o = r === c.id ? "you" : "they",
            i = c && an()(c.createdAt).fromNow();
          return Object(_.jsxs)("div", {
            className: "mx-3",
            children: [
              Object(_.jsx)("h1", { children: c && c.username }),
              Object(_.jsxs)("div", {
                children: [
                  "Poems Written: ",
                  Object(_.jsx)("strong", { children: 0 }),
                ],
              }),
              Object(_.jsxs)("div", {
                children: [
                  "Signed Up: ",
                  Object(_.jsx)("strong", { children: i }),
                ],
              }),
              Object(_.jsxs)("h5", {
                children: [
                  "Look at all the lovely poems ",
                  o,
                  " have written!",
                ],
              }),
            ],
          });
        };
      function cn(e) {
        var n = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return y.b(U, n);
          })({ variables: { authorId: e.authorId, first: 10 } }),
          t = n.data,
          a = n.fetchMore;
        return t
          ? Object(_.jsx)(en, { poems: t.poemPages, fetchMore: a })
          : Object(_.jsx)(We, {});
      }
      function on() {
        var e = Object(O.h)().id;
        return Object(_.jsxs)("div", {
          className: "index-view",
          children: [
            Object(_.jsx)(rn, { id: Number(e) }),
            Object(_.jsx)(cn, { authorId: Number(e) }),
          ],
        });
      }
      var sn,
        dn = function () {
          return Object(_.jsxs)("svg", {
            viewBox: "0 0 380.5 128.1",
            style: { minWidth: "5rem" },
            children: [
              Object(_.jsx)("path", {
                d: "M29.8,0c11.3,0,23,0.2,33.8,3.9c26.7,10.4,35.1,41,23,65.9C75.2,90.2,50.9,92.9,29.8,92.9h-23v31.8c0,4.5-6.7,4.6-6.7,0V3.5 C0,0.9,2.6,0,4.8,0H29.8z M6.7,6.5v79.9h24.7c17.6,0,38.6-2.2,49-18.4V68C87.9,54.8,88,35,78.9,22.5C68.7,8.4,49,6.5,33.1,6.5H6.7z",
              }),
              Object(_.jsx)("path", {
                d: "M114,69.3c28.2,0,28.1,43.6,0,43.6C86,112.8,85.8,69.3,114,69.3z M114,75.7c-19.9,0-19.8,30.6,0,30.7 C133.6,106.5,133.6,75.7,114,75.7z",
              }),
              Object(_.jsx)("path", {
                d: "M150.5,93.3c0.9,9.9,10.5,14.9,19.7,12.5c4.2-1.1,6.6-4.8,10.4-6.1c3.7-1.3,6.6,2.4,3.5,5.5c-8,8-21.6,10.7-31.3,4.1 c-9.1-6.1-11.2-19.7-6.3-29.1c5-9.5,17.2-13.7,27.1-9.5c4.9,2.1,9,6,11.2,10.9c1.5,3.4,3.9,11.7-2.1,11.7H150.5z M179.7,87 c-3.4-14.8-25.7-15.1-28.9-0.1L179.7,87z",
              }),
              Object(_.jsx)("path", {
                d: "M206.6,76.1c0,0.3,0,0.7-0.1,1c6.4-5.2,24-14.1,27.2-0.6c9.3-6.9,28.4-13.1,28.4,4.6v27.7c0,4.3-6.5,4.6-6.5,0V84.3 c0-3.9,0.1-7.9-4.5-8.6c-5.8-0.9-12.9,5.2-17.1,8.3v24.8c0,4.3-6.4,4.6-6.4,0v-23c0-4.1,0.2-9.6-5-10.1c-5.6-0.5-12.4,6.2-16.3,9.5 v23.6c0,4.3-6.4,4.6-6.4,0V72.7c0-1.8,1.3-3.6,3.3-3.4C206.5,69.6,206.6,73.7,206.6,76.1z",
              }),
              Object(_.jsx)("path", {
                d: "M284.8,39.7c6.5,0,6.5,10.2,0,10.2C278.2,49.9,278.3,39.7,284.8,39.7z M288,108.8c0,4.2-6.4,4.5-6.4,0V72.7 c0-4.3,6.4-4.6,6.4,0.1V108.8z",
              }),
              Object(_.jsx)("path", {
                d: "M311,105.3c6.9,2.6,16.4-2.8,6.8-7.6c-7.6-3.8-16.1-5.6-13.6-16.4c2-8.6,11.2-12.8,19.4-11.9c2.6,0.3,8.6,1.4,9.3,4.6 c0.7,3.6-2.8,4.2-5.5,3.1h0.1c-5.7-2.5-20.6-1-17.3,8.8c2.2,6.5,13.4,5.1,17.1,10.8c5.6,8.6-3.8,16.6-12.1,16.1 c-2.6-0.2-8.3-1-9.4-3.7c-1.2-3,2.4-6.5,5-3.9L311,105.3z",
              }),
              Object(_.jsx)("path", {
                d: "M356.4,95.5c0,8.2,5.1,14,13.5,9.5c2.4-1.3,4.9-5.7,7.5-5.8c3.1,0,4,3.6,2,5.6l0.1-0.1c-4.4,6.4-12.3,9.4-19.9,7.6 c-8.1-2-9.8-9.4-9.6-16.8l0.3-18.9h-10.2c-4.2,0-4.5-6.3,0-6.3h10.4l0.9-28.7c0.2-4.3,6.3-4.5,6.3,0L357,70.3h16 c4.1,0,4.4,6.3,0,6.3h-16.2C356.8,82.9,356.4,89.2,356.4,95.5z",
              }),
            ],
          });
        },
        ln = V.a.div(
          sn ||
            (sn = Object(v.a)([
              "\n  li {\n    display: inline-block;\n    margin: ",
              "px;\n  }\n  text-align: right;\n  position: fixed;\n  top: 0;\n  z-index: 30;\n  background: ",
              ";\n  color: ",
              ";\n  width: 100%;\n  padding: ",
              "px;\n  height: ",
              "px;\n\n  a {\n    color: ",
              ";\n  }\n\n  .active {\n    color: white;\n  }\n\n  .navbarMenu {\n    margin-bottom: 0;\n    padding-left: 0;\n    /* background: $dark-grey; */\n\n    /* @include mobile {\n        li {\n          display: block;\n        }\n      } */\n  }\n  .hamburger {\n    display: none;\n\n    /* @include mobile {\n        display: block;\n      } */\n  }\n\n  .hidden-xs {\n    /* @include mobile {\n        display: none;\n      } */\n  }\n\n  .logo {\n    float: left;\n    margin: ",
              "px;\n    svg {\n      max-width: 13rem;\n      width: calc(100vw - 420px);\n      fill: ",
              ";\n    }\n  }\n\n  @media (max-width: ",
              ") {\n    .logo {\n      margin: 0;\n    }\n    .navbar {\n      padding: 0;\n    }\n  }\n  @media (max-width: ",
              ") {\n    .logo {\n      margin: 0;\n    }\n    .navbar {\n      padding: 0;\n    }\n  }\n",
            ])),
          J,
          re,
          ae,
          J,
          ee,
          ae,
          J,
          ae,
          ne,
          te
        ),
        un = t(214),
        bn = t(198),
        pn = t(199),
        jn = t(200),
        mn = t(209),
        gn = t(128),
        hn = t(201),
        xn = t(202),
        On = t(38);
      function vn() {
        var e,
          n = Object(g.useState)({ username: "", password: "" }),
          t = Object(f.a)(n, 2),
          a = t[0],
          r = t[1],
          c = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return I.a(A, n);
          })({ refetchQueries: [{ query: D }] }),
          o = Object(f.a)(c, 2),
          i = o[0],
          s = o[1].error,
          d = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return I.a(Z, n);
          })({ refetchQueries: [{ query: D }] }),
          l = Object(f.a)(d, 2),
          u = l[0],
          b = l[1].error,
          p = Object(O.g)(),
          j = Object(O.f)(),
          h = function () {
            return j.push(j.location.pathname);
          },
          x = p.search.includes("showLogin"),
          v = p.search.includes("showSignUp");
        return Object(_.jsx)(un.a, {
          open: x || v,
          onClose: h,
          children: Object(_.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault();
              var n = Promise.resolve();
              v && (n = u({ variables: a })),
                n
                  .then(function () {
                    return i({ variables: a }).then(function (e) {
                      var n = e.data.tokenAuth.token;
                      localStorage.setItem("token", n),
                        window.setTimeout(function () {
                          i({ variables: a });
                        }, 100),
                        h();
                    });
                  })
                  .catch(function (e) {
                    console.warn(e);
                  });
            },
            children: [
              Object(_.jsx)(bn.a, {
                children: Object(_.jsxs)("div", {
                  style: { display: "flex" },
                  children: [
                    Object(_.jsx)("div", {
                      style: { flexGrow: 1 },
                      children: x ? "Login" : "Sign Up",
                    }),
                    Object(_.jsx)(pn.a, {
                      size: "small",
                      onClick: h,
                      children: Object(_.jsx)(On.f, {}),
                    }),
                  ],
                }),
              }),
              Object(_.jsxs)(jn.a, {
                children: [
                  Object(_.jsx)(mn.a, {
                    autoFocus: !0,
                    margin: "dense",
                    label: "Username",
                    fullWidth: !0,
                    value: a.username,
                    onChange: function (e) {
                      return r(function (n) {
                        return Object(m.a)(
                          Object(m.a)({}, n),
                          {},
                          { username: e.target.value }
                        );
                      });
                    },
                  }),
                  Object(_.jsx)(mn.a, {
                    type: "password",
                    margin: "dense",
                    label: "Password",
                    fullWidth: !0,
                    value: a.password,
                    onChange: function (e) {
                      return r(function (n) {
                        return Object(m.a)(
                          Object(m.a)({}, n),
                          {},
                          { password: e.target.value }
                        );
                      });
                    },
                  }),
                  x
                    ? Object(_.jsx)(k.b, {
                        to: "?showSignUp",
                        component: T.a,
                        children: "Sign Up",
                      })
                    : Object(_.jsx)(k.b, {
                        to: "?showLogin",
                        component: T.a,
                        children: "Login",
                      }),
                  Object(_.jsxs)(gn.a, {
                    color: "error",
                    children: [
                      null !== b &&
                      void 0 !== b &&
                      null !== (e = b.message) &&
                      void 0 !== e &&
                      e.includes("UNIQUE")
                        ? "Username already taken"
                        : null === b || void 0 === b
                        ? void 0
                        : b.message,
                      null === s || void 0 === s ? void 0 : s.message,
                    ],
                  }),
                ],
              }),
              Object(_.jsxs)(hn.a, {
                children: [
                  Object(_.jsx)(xn.a, { onClick: h, children: "Cancel" }),
                  Object(_.jsx)(xn.a, {
                    color: "primary",
                    variant: "contained",
                    type: "submit",
                    children: "Submit",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var fn = t(126),
        kn = t(216);
      function wn(e) {
        var n = e.openLabel,
          t = void 0 === n ? "Select" : n,
          a = e.items,
          r = void 0 === a ? [] : a,
          c = e.openStyle,
          o = void 0 === c ? {} : c,
          i = Object(g.useState)(null),
          s = Object(f.a)(i, 2),
          d = s[0],
          l = s[1],
          u = function () {
            l(null);
          };
        return Object(_.jsxs)("div", {
          children: [
            Object(_.jsx)(xn.a, {
              "aria-controls": "simple-menu",
              "aria-haspopup": "true",
              onClick: function (e) {
                l(e.currentTarget);
              },
              style: o,
              children: t,
            }),
            Object(_.jsx)(fn.a, {
              anchorEl: d,
              keepMounted: !0,
              open: Boolean(d),
              onClose: u,
              getContentAnchorEl: null,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              children: r.map(function (e) {
                return Object(_.jsx)(kn.a, {
                  onClick: function () {
                    var n;
                    null === (n = e.onClick) || void 0 === n || n.call(e), u();
                  },
                  children: e.label,
                });
              }),
            }),
          ],
        });
      }
      var yn,
        In = function (e) {
          var n = e.toggleShowLogin;
          return Object(_.jsx)("span", {
            children: Object(_.jsx)("a", {
              onClick: n,
              "data-test": "signUpLink",
              children: "Sign Up",
            }),
          });
        };
      function Cn() {
        var e = Object(O.f)(),
          n = R().data,
          t = null === n || void 0 === n ? void 0 : n.currentUser;
        return Object(_.jsxs)("div", {
          className: "navbar",
          style: {
            display: "inline-block",
            minWidth: 345,
            marginRight: "1rem",
          },
          children: [
            Object(_.jsx)("div", {}),
            Object(_.jsxs)("ul", {
              className: "navbarMenu expanded",
              children: [
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(k.c, {
                    activeClassName: "active",
                    exact: !0,
                    to: "/",
                    children: "Home",
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(k.c, {
                    activeClassName: "active",
                    to: "/about",
                    children: "About",
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(k.c, {
                    activeClassName: "active",
                    to: "/new/write",
                    children: "Create",
                  }),
                }),
                t &&
                  Object(_.jsx)("li", {
                    children: Object(_.jsxs)("span", {
                      style: { display: "flex" },
                      children: [
                        Object(_.jsx)(k.c, {
                          activeClassName: "active",
                          to: "/user/".concat(t.id),
                          "data-test": "profileLink",
                          children: "Profile",
                        }),
                        Object(_.jsx)(wn, {
                          openLabel: Object(_.jsx)(On.a, {}),
                          openStyle: {
                            color: "white",
                            display: "inline",
                            minWidth: 5,
                            paddingTop: 0,
                          },
                          items: [
                            {
                              label: "Logout",
                              onClick: function () {
                                localStorage.clear(), window.location.reload();
                              },
                            },
                          ],
                        }),
                      ],
                    }),
                  }),
                !t &&
                  Object(_.jsx)("li", {
                    children: Object(_.jsx)(In, {
                      toggleShowLogin: function () {
                        return e.push("?showLogin=true");
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function Sn() {
        return Object(_.jsxs)(ln, {
          children: [
            Object(_.jsx)(k.c, {
              to: "/",
              className: "logo",
              children: Object(_.jsx)(dn, {}),
            }),
            Object(_.jsx)(Cn, {}),
            Object(_.jsx)(vn, {}),
          ],
        });
      }
      var Nn,
        Pn = V.a.div(
          yn ||
            (yn = Object(v.a)([
              "\n  @media (max-width: 550px) {\n    min-width: 550px;\n    .poem {\n      margin: 0.2em;\n    }\n    /* .close-up-poem-view {\n      min-width: 550px;\n    } */\n  }\n  .app {\n    font-size: ",
              ';\n    font-family: "Avenir Next", sans-serif;\n  }\n\n  .page-body {\n    padding: ',
              "px;\n    margin-top: ",
              "px;\n    text-align: center;\n  }\n\n  .index-view {\n    text-align: left;\n  }\n\n  .error {\n    color: red;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-align: center;\n  }\n\n  a:hover {\n    cursor: pointer;\n  }\n",
            ])),
          X,
          J,
          ee
        );
      function zn(e) {
        var n = e.children;
        return Object(_.jsxs)(Pn, {
          children: [
            Object(_.jsx)(Sn, {}),
            Object(_.jsx)(Ee, {
              children: Object(_.jsx)("div", {
                className: "page-body",
                children: n,
              }),
            }),
          ],
        });
      }
      var Ln = V.a.div(
        Nn ||
          (Nn = Object(v.a)([
            "\n  text-align: left;\n  max-width: 800px;\n  margin: auto;\n",
          ]))
      );
      function Un() {
        return Object(_.jsxs)(Ln, {
          className: "about",
          children: [
            Object(_.jsx)("h1", { children: "About" }),
            Object(_.jsx)("p", {
              children: Object(_.jsxs)("i", {
                children: [
                  "A ",
                  Object(_.jsx)("strong", { children: "found poem" }),
                  " is a poem that is composed with words and phrases from another text.",
                ],
              }),
            }),
            Object(_.jsxs)("section", {
              children: [
                Object(_.jsx)("p", {
                  children:
                    "It may seem limiting to choose words only from a prearranged set, but limitations are one of the best drives of creativity.",
                }),
                Object(_.jsx)("p", {
                  children:
                    "For the sake of this website there are a set of very specific constraints on each poem.",
                }),
                Object(_.jsxs)("ul", {
                  children: [
                    Object(_.jsx)("li", {
                      children: "You will recieve exactly 40 lines of text",
                    }),
                    Object(_.jsx)("li", {
                      children:
                        "You may select any words or letters from this text to create your poem",
                    }),
                    Object(_.jsx)("li", {
                      children: "You cannot rearrange them",
                    }),
                  ],
                }),
                Object(_.jsx)("p", {
                  children:
                    "The poems are meant to be a fun exercise not a throughout masterpiece, so don't spend too much time on each one. Churn out a few and discover moments of accidental brilliance and insight, or simply silliness. Take the stress and pressure out of writing and just have fun!",
                }),
                Object(_.jsx)("h4", { children: "Contact" }),
                Object(_.jsx)("p", {
                  children: "We would love to hear from you!",
                }),
                Object(_.jsx)("p", {
                  children:
                    "Direct any comments or questions to poemistnet@gmail.com.",
                }),
              ],
            }),
          ],
        });
      }
      var Bn = t(5),
        Mn = t(63);
      var $n,
        Dn = function (e) {
          var n = Object(Mn.flatten)(e),
            t = !1,
            a = [],
            r = "";
          return (
            n.forEach(function (e) {
              e.isSelected !== t
                ? (r && a.push({ text: r, isSelected: t }),
                  (r = e.ch),
                  (t = !t))
                : (r += e.ch);
            }),
            r && a.push({ text: r, isSelected: t }),
            a
          );
        },
        Rn = ["__typename", "id"];
      function Wn(e) {
        var n = e.poem,
          t = e.children,
          a = Object(O.f)(),
          r = R().data,
          c = null === r || void 0 === r ? void 0 : r.currentUser,
          o = n.id,
          i = n.textChunks,
          s = n.backgroundId,
          d = n.colorRange,
          l = n.book,
          u = n.startIdx,
          b = null === l || void 0 === l ? void 0 : l.id,
          p = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return I.a(M, n);
          })({
            variables: {
              id: o,
              textChunks: (i = n.wordLetters
                ? Dn(n.wordLetters)
                : i.map(function (e) {
                    e.__typename, e.id;
                    return Object(Bn.a)(e, Rn);
                  })),
              backgroundId: s,
              colorRange: d,
            },
          }),
          j = Object(f.a)(p, 1)[0],
          g = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return I.a(B, n);
          })({
            variables: { textChunks: i, bookId: b, startIdx: u },
            update: function (e, n) {
              var t = function (e) {
                return Object(H.a)(e, function (e) {
                  e.poemPages.edges.unshift({ node: n.data.createPoem });
                });
              };
              E({
                cache: e,
                arg: { query: L, variables: { limit: 10 } },
                updateData: t,
              }),
                E({
                  cache: e,
                  arg: { query: U, variables: { limit: 10, authorId: c.id } },
                  updateData: t,
                });
            },
          }),
          h = Object(f.a)(g, 1)[0],
          x = o ? j : h;
        return (
          c ||
            (x = function () {
              return a.push("?showSignUp=true"), Promise.reject();
            }),
          Object(_.jsx)(_.Fragment, { children: t({ savePoem: x }) })
        );
      }
      var Zn = V.a.div(
        $n ||
          ($n = Object(v.a)([
            "\n  text-align: left;\n  position: fixed;\n  left: calc(50vw + ",
            "px);\n  top: 18rem;\n  width: 170px;\n  @media (max-width: ",
            ") {\n    width: 100vw;\n    left: 0;\n    bottom: 0;\n    top: auto;\n    z-index: 10;\n    display: flex;\n    z-index: 10;\n    .toolbar-tab {\n      display: inline-block;\n      width: 50%;\n      border: ",
            " solid !important;\n      font-size: ",
            "px !important;\n      margin: 0 !important;\n    }\n    .lower {\n      font-size: ",
            "px !important;\n    }\n  }\n  @media (max-width: 550px) {\n    left: 0;\n    width: 100%;\n  }\n\n  .toolbar {\n    margin-left: ",
            "px;\n    margin-top: ",
            "px;\n    font-size: ",
            "px;\n  }\n\n  .toolbar-tab {\n    font-size: ",
            "px;\n    background: #333;\n    color: white;\n    margin: ",
            "px 0;\n    text-align: left;\n    border: none;\n    cursor: pointer;\n\n    &-lg {\n      font-size: ",
            "px;\n    }\n\n    button {\n      background: black;\n      color: white;\n      border: none;\n    }\n  }\n  button[disabled] {\n    background: #aaa;\n  }\n  .arrow-btn {\n    font-size: 2em !important;\n    cursor: pointer;\n  }\n  .text {\n    display: inline-block;\n    padding: 0.5em;\n  }\n",
          ])),
        F,
        te,
        ie,
        1.5 * X,
        2 * X,
        2 * F,
        3 * J,
        Y,
        X,
        G,
        Y
      );
      function An(e) {
        var n = e.num,
          t = e.upperlimit;
        return n < 0 ? t - 1 : n > t ? n - t : n;
      }
      var Hn = (function (e) {
          Object(He.a)(t, e);
          var n = Object(Te.a)(t);
          function t() {
            var e;
            Object(Ze.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((e = n.call.apply(n, [this].concat(r))).backgroundUp =
                function () {
                  var n = An({
                    num: e.props.poem.backgroundId + 1,
                    upperlimit: 20,
                  });
                  e.props.updateStyle({ backgroundId: n });
                }),
              (e.backgroundDown = function () {
                var n = An({
                  num: e.props.poem.backgroundId - 1,
                  upperlimit: 20,
                });
                e.props.updateStyle({ backgroundId: n });
              }),
              (e.colorUp = function () {
                var n = An({
                  num: e.props.poem.colorRange + 1,
                  upperlimit: 36,
                });
                e.props.updateStyle({ colorRange: n });
              }),
              (e.colorDown = function () {
                var n = An({
                  num: e.props.poem.colorRange - 1,
                  upperlimit: 36,
                });
                e.props.updateStyle({ colorRange: n });
              }),
              e
            );
          }
          return (
            Object(Ae.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = this.props.poem,
                    t = "/edit/write/".concat(n.id);
                  return Object(_.jsxs)(Zn, {
                    className: "style-toolbar toolbar",
                    children: [
                      Object(_.jsxs)("div", {
                        className: "toolbar-tab",
                        children: [
                          Object(_.jsx)("button", {
                            onClick: this.backgroundDown,
                            className: "arrow-btn",
                            "data-ux": "background-id-down",
                            children: Object(_.jsx)(On.b, {}),
                          }),
                          Object(_.jsxs)("span", {
                            className: "text",
                            children: ["Style ", n.backgroundId],
                          }),
                          Object(_.jsx)("button", {
                            onClick: this.backgroundUp,
                            className: "arrow-btn",
                            "data-ux": "background-id-up",
                            style: { float: "right" },
                            children: Object(_.jsx)(On.c, {}),
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "toolbar-tab",
                        children: [
                          Object(_.jsx)("button", {
                            onClick: this.colorDown,
                            className: "arrow-btn",
                            "data-ux": "color-range-down",
                            children: Object(_.jsx)(On.b, {}),
                          }),
                          Object(_.jsxs)("span", {
                            className: "text",
                            children: ["Color ", n.colorRange],
                          }),
                          Object(_.jsx)("button", {
                            onClick: this.colorUp,
                            className: "arrow-btn",
                            "data-ux": "color-range-up",
                            style: { float: "right" },
                            children: Object(_.jsx)(On.c, {}),
                          }),
                        ],
                      }),
                      Object(_.jsx)("div", {
                        className: "toolbar-tab lower",
                        onClick: function () {
                          e.props.history.push(t);
                        },
                        children: Object(_.jsxs)("span", {
                          className: "text",
                          children: [Object(_.jsx)(On.d, {}), " Back"],
                        }),
                      }),
                      Object(_.jsx)(Wn, {
                        poem: n,
                        children: function (n) {
                          var t = n.savePoem;
                          return Object(_.jsx)("button", {
                            onClick: function () {
                              t().then(function () {
                                e.props.history.push("/");
                              });
                            },
                            className: "toolbar-tab toolbar-tab-lg lower",
                            "data-test": "saveLink",
                            children: Object(_.jsxs)("span", {
                              className: "text",
                              children: ["Finish ", Object(_.jsx)(On.e, {})],
                            }),
                          });
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(g.PureComponent),
        Tn = Object(O.i)(Hn);
      function En() {
        var e = Object(O.h)().id,
          n = z({ variables: { id: Number(e) } }).data,
          t = Object(g.useState)(null === n || void 0 === n ? void 0 : n.poem),
          a = Object(f.a)(t, 2),
          r = a[0],
          c = a[1];
        if (
          (Object(g.useEffect)(
            function () {
              c(null === n || void 0 === n ? void 0 : n.poem);
            },
            [null === n || void 0 === n ? void 0 : n.poem]
          ),
          !r)
        )
          return Object(_.jsx)(We, {});
        return Object(_.jsxs)("div", {
          className: "close-up-poem-view text-center",
          children: [
            Object(_.jsx)("h1", { children: "Stylize" }),
            Object(_.jsx)(Tn, {
              poem: r,
              updateStyle: function (e) {
                var n = e.backgroundId,
                  t = e.colorRange;
                n &&
                  c(Object(m.a)(Object(m.a)({}, r), {}, { backgroundId: n })),
                  t &&
                    c(Object(m.a)(Object(m.a)({}, r), {}, { colorRange: t }));
              },
            }),
            Object(_.jsx)(_e, { poem: r, closeUp: !0 }),
          ],
        });
      }
      var _n = function (e) {
        var n = e.textChunks,
          t = e.passage;
        if (t) n = [{ text: t, isSelected: !1, id: 1 }];
        else if (!n) return [];
        var a,
          r = [];
        return (
          n.forEach(function (e) {
            var n = (function (e) {
                var n = [],
                  t = "";
                return (
                  e.split("").forEach(function (e) {
                    (t += e), (" " !== e && "-" !== e) || (n.push(t), (t = ""));
                  }),
                  n.push(t),
                  n
                );
              })(e.text),
              t = n.map(function (n) {
                return Object(Mn.map)(n, function (n) {
                  return { ch: n, isSelected: e.isSelected };
                });
              });
            (r = a === e.isSelected ? r[r.length - 1].concat(t) : r.concat(t)),
              (a = e.isSelected);
          }),
          r
        );
      };
      var qn = function (e) {
          var n = e.wordLetters,
            t = e.wordIdx,
            a = e.letterIdx,
            r = e.isSelectingByWord;
          return Object(H.a)(n, function (e) {
            if (r) {
              if (!e[t])
                return (
                  console.warn(
                    "Word out of range, tried to access "
                      .concat(t, " of ")
                      .concat(e.flatMap.length)
                  ),
                  e
                );
              var n = !e[t][a].isSelected;
              return (
                e[t].forEach(function (e) {
                  e.isSelected = n;
                }),
                e
              );
            }
            return (e[t][a].isSelected = !e[t][a].isSelected), e;
          });
        },
        Kn = [
          "handleClear",
          "getNewPassage",
          "toggleSelectBy",
          "toggleRandomLetters",
          "selectablePoem",
        ];
      var Vn,
        Gn = function (e) {
          var n = e.handleClear,
            t = e.getNewPassage,
            a = e.toggleSelectBy,
            r = e.toggleRandomLetters,
            c = e.selectablePoem,
            o = (Object(Bn.a)(e, Kn), Object(O.f)()),
            i = c.wordLetters.every(function (e) {
              return e.every(function (e) {
                return !e.isSelected;
              });
            });
          return Object(_.jsxs)(Zn, {
            className: "writer-toolbar toolbar",
            children: [
              Object(_.jsx)("button", {
                className: "toolbar-tab",
                onClick: a,
                "data-ux": "toggle-select-by",
                children: Object(_.jsx)("span", {
                  className: "text",
                  children: c.isSelectingByWord
                    ? "select by letter?"
                    : "select by word?",
                }),
              }),
              !c.id &&
                Object(_.jsx)("button", {
                  className: "toolbar-tab",
                  onClick: function () {
                    return t();
                  },
                  "data-ux": "get-new-passage",
                  children: Object(_.jsx)("span", {
                    className: "text",
                    children: "new passage?",
                  }),
                }),
              !c.id &&
                Object(_.jsx)("button", {
                  className: "toolbar-tab",
                  onClick: i ? r : n,
                  "data-ux": "get-new-passage",
                  children: Object(_.jsx)("span", {
                    className: "text",
                    children: i ? "nudge" : "clear",
                  }),
                }),
              Object(_.jsx)(Wn, {
                poem: c,
                children: function (e) {
                  var n = e.savePoem;
                  return Object(_.jsxs)("button", {
                    onClick: function () {
                      return n().then(function (e) {
                        var n = (e.data.updatePoem || e.data.createPoem).id;
                        o.push("/edit/stylize/".concat(n));
                      });
                    },
                    className: "toolbar-tab toolbar-tab-lg",
                    "data-test": "styleLink",
                    children: [
                      Object(_.jsx)("span", {
                        className: "text",
                        children: "Next",
                      }),
                      " ",
                      Object(_.jsx)(On.e, {}),
                    ],
                  });
                },
              }),
            ],
          });
        },
        Jn = function (e) {
          var n = e.isSelected,
            t = e.ch,
            a = e.letterIdx,
            r = e.handleClickLetter;
          return Object(_.jsx)("span", {
            className: "letter ".concat(n ? "is" : "not", "-selected"),
            "data-idx": a,
            onClick: r,
            children: t,
          });
        },
        Fn = function (e) {
          var n = e.word,
            t = e.wordIdx,
            a = e.handleClickLetter;
          return Object(_.jsx)("span", {
            className: "word",
            "data-word-idx": t,
            children: n.map(function (e, n) {
              var r = e.ch,
                c = e.isSelected;
              return Object(_.jsx)(
                Jn,
                {
                  ch: r,
                  isSelected: c,
                  letterIdx: n,
                  handleClickLetter: function () {
                    return a({ wordIdx: t, letterIdx: n });
                  },
                },
                "".concat(t).concat(n)
              );
            }),
          });
        },
        Qn = V.a.div(
          Vn ||
            (Vn = Object(v.a)([
              "\n  user-select: none;\n  .letter {\n    cursor: pointer;\n  }\n\n  .selecting-by-word .word:hover .letter,\n  .selecting-by-letter .letter:hover {\n    /* background: rgba(255, 255, 0, .7); */\n    color: cyan;\n    &.is-selected {\n      color: red;\n    }\n  }\n",
            ]))
        );
      function Xn(e) {
        var n = e.wordLetters,
          t = e.isSelectingByWord,
          a = e.handleClickLetter;
        return Object(_.jsx)(Le, {
          className: "poem close-up",
          children: Object(_.jsx)(Qn, {
            children: Object(_.jsxs)(Ne, {
              className: "poem-body",
              children: [
                Object(_.jsx)("div", { className: "background-img" }),
                Object(_.jsx)("div", {
                  className: t ? "selecting-by-word" : "selecting-by-letter",
                  children: n.map(function (e, n) {
                    return Object(_.jsx)(
                      Fn,
                      { word: e, wordIdx: n, handleClickLetter: a },
                      n
                    );
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var Yn = (function (e) {
        Object(He.a)(t, e);
        var n = Object(Te.a)(t);
        function t() {
          var e;
          Object(Ze.a)(this, t);
          for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
            r[c] = arguments[c];
          return (
            ((e = n.call.apply(n, [this].concat(r))).state =
              e.props.selectablePoem),
            (e.onKeyDown = function (n) {
              "Shift" === n.key && e.setState({ isSelectingByWord: !1 });
            }),
            (e.onKeyUp = function (n) {
              "Shift" === n.key && e.setState({ isSelectingByWord: !0 });
            }),
            (e.handleClickLetter = function (n) {
              var t = n.wordIdx,
                a = n.letterIdx,
                r = e.state,
                c = r.wordLetters,
                o = r.isSelectingByWord,
                i = qn({
                  wordLetters: c,
                  wordIdx: t,
                  letterIdx: a,
                  isSelectingByWord: o,
                });
              e.setState({ wordLetters: i });
            }),
            (e.handleClear = function () {
              e.setState(e.props.selectablePoem);
            }),
            (e.toggleSelectBy = function () {
              e.setState({ isSelectingByWord: !e.state.isSelectingByWord });
            }),
            (e.toggleRandomLetters = function () {
              for (var n = 0, t = e.state.wordLetters; n < 10; )
                n++,
                  (t = qn({
                    wordLetters: t,
                    wordIdx: Object(Mn.random)(0, 100),
                    letterIdx: 0,
                    isSelectingByWord: !0,
                  }));
              e.setState({ wordLetters: t });
            }),
            e
          );
        }
        return (
          Object(Ae.a)(
            t,
            [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.onKeyDown, !1),
                    document.addEventListener("keyup", this.onKeyUp, !1);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.onKeyDown, !1),
                    document.removeEventListener("keyup", this.onKeyUp, !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(_.jsxs)("div", {
                    className: "close-up-poem-view text-center",
                    onKeyPress: function (n) {
                      n.shiftKey && e.toggleSelectBy();
                    },
                    children: [
                      Object(_.jsx)("h1", {
                        children: this.props.selectablePoem.id
                          ? "Edit"
                          : "Write",
                      }),
                      Object(_.jsx)("h5", {
                        children: "Make your own poem by clicking on words!",
                      }),
                      Object(_.jsx)(Gn, {
                        selectablePoem: this.state,
                        getNewPassage: this.props.getNewPassage,
                        handleClear: this.handleClear,
                        toggleSelectBy: this.toggleSelectBy,
                        toggleRandomLetters: this.toggleRandomLetters,
                      }),
                      Object(_.jsx)(
                        Xn,
                        Object(m.a)(
                          Object(m.a)({}, this.state),
                          {},
                          {
                            wordLetters: this.state.wordLetters,
                            handleClickLetter: this.handleClickLetter,
                          }
                        )
                      ),
                    ],
                  });
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, n) {
                  return e.selectablePoem.book.id !== n.book.id
                    ? e.selectablePoem
                    : n;
                },
              },
            ]
          ),
          t
        );
      })(g.PureComponent);
      function et() {
        var e,
          n = Object(O.h)().id,
          t = z({ variables: { id: Number(n) }, skip: !n }).data,
          a = (function (e) {
            var n = Object(m.a)(Object(m.a)({}, C), e);
            return y.b(N, n);
          })(),
          r = null === (e = R().data) || void 0 === e ? void 0 : e.currentUser;
        if (!a.data) return Object(_.jsx)(We, {});
        var c = Object(m.a)(
            Object(m.a)(
              {
                book: {
                  id: a.data.randomBook.id,
                  title: a.data.randomBook.title,
                },
                startIdx: a.data.randomBook.startIdx,
                author: r,
              },
              (function (e) {
                var n = _n({ textChunks: e.textChunks });
                return Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  { wordLetters: n, isSelectingByWord: !0 }
                );
              })({
                textChunks: (null === t || void 0 === t
                  ? void 0
                  : t.poem.textChunks) || [
                  { text: a.data.randomBook.text, isSelected: !1, id: 1 },
                ],
              })
            ),
            (null === t || void 0 === t ? void 0 : t.poem) || {}
          ),
          o = a.refetch;
        return Object(_.jsx)(Yn, { selectablePoem: c, getNewPassage: o });
      }
      var nt = function () {
          return Object(_.jsx)(zn, {
            children: Object(_.jsxs)(O.c, {
              children: [
                Object(_.jsx)(O.a, { path: "/", exact: !0, component: nn }),
                Object(_.jsx)(O.a, { path: "/about", component: Un }),
                Object(_.jsx)(O.a, {
                  path: "/edit/stylize/:id",
                  component: En,
                }),
                Object(_.jsx)(O.a, { path: "/new/write", component: et }),
                Object(_.jsx)(O.a, { path: "/edit/write/:id", component: et }),
                Object(_.jsx)(O.a, { path: "/poem/:id", component: Ve }),
                Object(_.jsx)(O.a, { path: "/user/:id", component: on }),
              ],
            }),
          });
        },
        tt = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 218))
              .then(function (n) {
                var t = n.getCLS,
                  a = n.getFID,
                  r = n.getFCP,
                  c = n.getLCP,
                  o = n.getTTFB;
                t(e), a(e), r(e), c(e), o(e);
              });
        },
        at = t(125),
        rt = t(211),
        ct = t(212),
        ot = t(123),
        it = t(206),
        st = t(208),
        dt = t(124),
        lt = t(207),
        ut = Object(at.a)({
          uri: "http://ec2-3-145-74-167.us-east-2.compute.amazonaws.com:8000/graphql",
        }),
        bt = Object(ot.a)(function (e, n) {
          var t = n.headers,
            a = localStorage.getItem("token");
          return {
            headers: Object(m.a)(
              Object(m.a)({}, t),
              {},
              { Authorization: a ? "JWT ".concat(a) : "" }
            ),
          };
        }),
        pt = new rt.a({ link: bt.concat(ut), cache: new ct.a({}) }),
        jt = Object(dt.a)({
          palette: { primary: { main: "#333" } },
          props: { MuiButtonBase: { disableRipple: !0 } },
          shape: { borderRadius: 0 },
          typography: { button: { textTransform: "none" } },
        });
      x.a.render(
        Object(_.jsx)(g.StrictMode, {
          children: Object(_.jsx)(Ee, {
            children: Object(_.jsx)(it.a, {
              client: pt,
              children: Object(_.jsx)(k.a, {
                children: Object(_.jsxs)(lt.a, {
                  theme: jt,
                  children: [Object(_.jsx)(st.a, {}), Object(_.jsx)(nt, {})],
                }),
              }),
            }),
          }),
        }),
        document.getElementById("root")
      ),
        tt();
    },
  },
  [[158, 1, 2]],
]);
//# sourceMappingURL=main.e05a9e37.chunk.js.map