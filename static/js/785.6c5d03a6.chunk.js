"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{785:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r=e(439),p=e(791),a=e(87),i=e(689),o=e(184);function l(n){var t=n.id,e=n.image,r=n.title,p=(0,i.TH)();return(0,o.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:p},children:(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:e,alt:t}),(0,o.jsx)("h2",{children:r})]})})}var c,d,u=e(168),x=e(444),s=x.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  max-width: calc(100vw - 70px);\n  margin-top: 45px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n\n  a {\n    width: calc((100% - 140px) / 8);\n    display: flex;\n    text-decoration: none;\n  }\n\n  li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    border-radius: 8px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n  h2 {\n    text-align: center;\n    font-size: 16px;\n    color: #051153a0;\n  }\n\n  img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n"])));function h(n){var t=n.movies;return(0,o.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.image,r=n.name;return(0,o.jsx)(l,{id:t,image:e,title:r},t)}))})}var f=x.ZP.form(d||(d=(0,u.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-size: 95%;\n    background-color: #fff;\n    background-image: url('data:image/png;base64,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');\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    :hover {\n      opacity: 1;\n    }\n  }\n  input {\n    display: inline-block;\n    width: 100%;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    background-color: #c0bdbd;\n  }\n\n  span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"])));function k(n){var t=n.onSubmit;return(0,o.jsxs)(f,{onSubmit:t,children:[(0,o.jsx)("button",{type:"submit",children:(0,o.jsx)("span",{children:"Search"})}),(0,o.jsx)("input",{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})}var m=e(270);function U(){var n=(0,p.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1],l=(0,a.lr)(),c=(0,r.Z)(l,2),d=c[0],u=c[1];(0,p.useEffect)((function(){var n=d.get("query");""!==n&&null!==n&&(0,m.c)("search",1,n).then(i).catch((function(){alert("Something wrong in search query")}))}),[d]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value.trim();u(""!==t?{query:t}:{}),n.target.reset()}}),(null===e||void 0===e?void 0:e.length)>0&&(0,o.jsx)(h,{movies:e})]})}}}]);
//# sourceMappingURL=785.6c5d03a6.chunk.js.map