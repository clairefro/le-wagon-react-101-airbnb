(this["webpackJsonpairbnb-react-test"]=this["webpackJsonpairbnb-react-test"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(28),s=c.n(i),r=(c(35),c(8)),l=(c(36),c(5)),u=function(e){var t=e.data,c=e.setSelectedFlat,n=e.selected,a=t.imageUrl,i=t.name,s=t.price,r=t.priceCurrency,u="flat ".concat(n?"selected":"");return Object(l.jsxs)("div",{className:u,onClick:function(){return c(t)},children:[Object(l.jsx)("div",{className:"flat-picture",style:{backgroundImage:"url(".concat(a,")")}}),Object(l.jsxs)("div",{className:"flat-title",children:[i," - ",s,r]})]})},o=c(10),d=c(18),j=(c(58),function(e){var t=e.price,c=e.selected,n="marker ".concat(c?"selected":"");return Object(l.jsx)("div",{className:n,children:t})}),b=function(e){var t=e.flats,c=e.selectedFlat,a=Object(n.useState)({latitude:45.4972159,longitude:-73.6103642,zoom:12,pitch:0,bearing:0}),i=Object(r.a)(a,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){c&&u((function(e){return Object(o.a)(Object(o.a)({},e),{},{latitude:c.lat,longitude:c.lng})}))}),[c]),Object(l.jsx)(d.b,Object(o.a)(Object(o.a)({},s),{},{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/streets-v11?optimize=true",mapboxApiAccessToken:"pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrcGE1d2FlMzBuMHQydW1uMXIwMzZlOGcifQ.Bb6AWn5nCxTSSA7pWBPuEg",onViewportChange:function(e){return u(e)},transitionDuration:200,children:t.map((function(e){return Object(l.jsx)(d.a,{latitude:e.lat,longitude:e.lng,children:Object(l.jsx)(j,{price:e.price,selected:c===e})},e.id)}))}))};c(59);var f=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(null),s=Object(r.a)(i,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("div",{className:"search"}),Object(l.jsx)("div",{className:"flats",children:c.map((function(e){return Object(l.jsx)(u,{data:e,setSelectedFlat:d,selected:o===e},e.id)}))})]}),Object(l.jsx)("div",{className:"map",children:Object(l.jsx)(b,{flats:c,selectedFlat:o})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.8e01c6fe.chunk.js.map