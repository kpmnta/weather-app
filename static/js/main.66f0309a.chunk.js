(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(5),s=n.n(r),o=(n(11),n(12),n(2)),u=n(3),j=(n(13),function(e){var t=e.getWeather,n=i.a.useState({city:"",country:""}),a=Object(o.a)(n,2),r=a[0],s=a[1];var j=function(e){e.preventDefault(),""!==r.city&&""!==r.country&&t(r.city,r.country),document.getElementById("container").style.display="block"};return Object(c.jsxs)("form",{onSubmit:j,children:[Object(c.jsx)("input",{type:"text",placeholder:"city",name:"city",onChange:function(e){s((function(t){return Object(u.a)(Object(u.a)({},t),{},{city:e.target.value})}))},value:r.city}),Object(c.jsx)("input",{type:"text",placeholder:"country",name:"country",onChange:function(e){s((function(t){return Object(u.a)(Object(u.a)({},t),{},{country:e.target.value})}))},value:r.country}),Object(c.jsx)("button",{id:"submit",onClick:j,children:"Let's Find Out!"})]})});n(14);var l=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),u=s[0],l=s[1],h=Object(a.useState)(""),b=Object(o.a)(h,2),d=b[0],O=b[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),m=f[0],x=f[1],y=Object(a.useState)(""),g=Object(o.a)(y,2),v=g[0],w=g[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{getWeather:function(e,t){fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",").concat(t,"&APPID=").concat("9a1bddee0eb996a8fde565585fe05470","&units=metric")).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.list[0].main.feels_like),l(e.list[0].main.temp),O(e.list[0].weather[0].description),x(e.list[0].weather[0].main),w(e.list[0].weather[0].icon)}))}}),Object(c.jsxs)("div",{id:"container",children:[Object(c.jsxs)("div",{className:"data-container",children:[Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("h3",{children:["Temperature: ",u," \xb0c"]}),Object(c.jsxs)("h3",{children:["Feels like: ",n," \xb0c"]}),Object(c.jsxs)("h3",{children:["Description: ",d]}),Object(c.jsxs)("h3",{children:["Weather Conditions: ",m]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(v,"@2x.png"),alt:"icon weather"})})]}),Object(c.jsx)("p",{children:"well, maybe we should stay at home today \xaf\\_(\u30c4)_/\xaf"})]})]})};var h=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Should I leave the house?"}),Object(c.jsx)(l,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.66f0309a.chunk.js.map