(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(3),i=n.n(a),r=(n(12),n(4)),s=n(5),u=n(7),l=n(6),h=n.p+"static/media/logo_recom_app.c3056abf.png",d=(n(13),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={count:0},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:5001/").then((function(t){return t.json()})).then((function(e){console.log("Counter"+JSON.stringify(e)),t.setState({count:e.counter})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:h,alt:"Recommendations Logo"}),"Willkommen zu Recommendations - Powered by JennePry Inc. ",Object(d.jsx)("br",{}),"Aktuell haben wir ",this.state.count," Recommendations!"]})})}}]),n}(c.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.662c36f7.chunk.js.map