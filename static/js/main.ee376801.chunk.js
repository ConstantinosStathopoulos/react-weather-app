(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(4),i=a.n(s),o=(a(10),a(3)),d="5682a655764a212e9c109f8f160bceda",l="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),h=i[0],u=i[1];return Object(n.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>17?"app warm":"app",children:Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search for location (e.g Athens,GR)",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){u(e),r(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"location-box",children:[Object(n.jsxs)("div",{className:"location",children:[" ",h.name,", ",h.sys.country," "]}),Object(n.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(n.jsxs)("div",{className:"weather-box",children:[Object(n.jsxs)("div",{className:"temperature",children:[Math.round(h.main.temp),"\xb0C "]}),Object(n.jsxs)("div",{className:"weather-icon",children:[" ",Object(n.jsx)("img",{src:"/react-weather-app"+"/assets/".concat(function(e){var t=h.weather[0].icon;return"".concat(t,".png")}()),alt:"weather icon"})," "]}),Object(n.jsxs)("div",{className:"realfeel",children:[Object(n.jsxs)("div",{children:["Feels like ",Math.round(h.main.feels_like),"\xb0C"]}),Object(n.jsxs)("div",{children:["Min ",Math.round(h.main.temp_min),"\xb0C"]}),Object(n.jsxs)("div",{children:["Max ",Math.round(h.main.temp_max),"\xb0C"]})]}),Object(n.jsx)("div",{className:"weather",children:h.weather[0].description})]})]}):""]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),u()}},[[11,1,2]]]);
//# sourceMappingURL=main.ee376801.chunk.js.map