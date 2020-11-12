(this["webpackJsonp@honeydb-viewer/app"]=this["webpackJsonp@honeydb-viewer/app"]||[]).push([[0],{69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),o=n.n(r),c=n(8),i=n.n(c),s=(n(69),n(11)),u=n(52),d=n.n(u),l=n(127),h=n(122),b=n(129),j=n(123),p=n(117),f=n(130),O=n(120),g=n(121),m=n(116),x=n(119),v=n(111),y=n(128),w=n(115),S=n(131),P=n(118);function k(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function C(e,t){return"desc"===e?function(e,n){return k(e,n,t)}:function(e,n){return-k(e,n,t)}}function B(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var H=[{id:"remote_host",numeric:!1,disablePadding:!1,label:"Remote Host (IP Address)"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"},{id:"last_seen",numeric:!0,disablePadding:!1,label:"Last Seen"}];function I(e){var t=e.classes,n=e.order,r=e.orderBy,o=e.onRequestSort;return Object(a.jsx)(v.a,{children:Object(a.jsx)(w.a,{children:H.map((function(e){return Object(a.jsx)(m.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&n,children:Object(a.jsxs)(S.a,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(c=e.id,function(e){o(e,c)}),children:[e.label,r===e.id?Object(a.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var c}))})})}var E=Object(p.a)((function(e){return Object(f.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:550},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));function _(e){var t=e.hosts,n=e.onSelectHost,r=E(),c=o.a.useState("desc"),i=Object(s.a)(c,2),u=i[0],d=i[1],l=o.a.useState("count"),h=Object(s.a)(l,2),b=h[0],j=h[1],p=o.a.useState(0),f=Object(s.a)(p,2),v=f[0],S=f[1],k=o.a.useState(10),H=Object(s.a)(k,2),_=H[0],L=H[1],A=_-Math.min(_,t.length-v*_);return Object(a.jsx)("div",{className:r.root,children:Object(a.jsxs)(P.a,{className:r.paper,children:[Object(a.jsx)(x.a,{children:Object(a.jsxs)(O.a,{className:r.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"Bad Hosts Table",children:[Object(a.jsx)(I,{classes:r,order:u,orderBy:b,onRequestSort:function(e,t){d(b===t&&"asc"===u?"desc":"asc"),j(t)},rowCount:t.length}),Object(a.jsxs)(g.a,{children:[B(t,C(u,b)).slice(v*_,v*_+_).map((function(e,t){var r="enhanced-table-row-".concat(t);return Object(a.jsxs)(w.a,{hover:!0,onClick:function(t){return a=e.remote_host,void n(a);var a},tabIndex:-1,style:{cursor:"pointer"},children:[Object(a.jsx)(m.a,{component:"th",id:r,scope:"row",children:e.remote_host}),Object(a.jsx)(m.a,{align:"right",children:e.count}),Object(a.jsx)(m.a,{align:"right",children:e.last_seen})]},e.remote_host)})),A>0&&Object(a.jsx)(w.a,{style:{height:53*A},children:Object(a.jsx)(m.a,{colSpan:6})})]})]})}),Object(a.jsx)(y.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:_,page:v,onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){L(parseInt(e.target.value,10)),S(0)}})]})})}var L=n(124),A=n(132),T=n(125),z=n(126),D=n(24),M=n.n(D),N=n(17),R=n(44),q=function(){var e=Object(R.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("/bad-hosts");case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{count:parseInt("".concat(e.count),10)})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(R.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W("/netinfo/geolocation/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(R.a)(M.a.mark((function e(t){var n,a,r,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://honeydb-viewer-api.herokuapp.com").concat(t),a=new Headers({Authorization:"Bearer ".concat("UwihuIMERbEV80PIu48nLzaiQM4jW83U"),"Content-Type":"application/json"}),e.next=4,fetch(n,{headers:a,method:"GET",redirect:"follow"});case 4:if(200!==(r=e.sent).status){e.next=12;break}return e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o.data);case 12:throw new Error("Problem with API request");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=Object(r.useState)(!0),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(r.useState)(!1),u=Object(s.a)(i,2),d=u[0],l=u[1],h=Object(r.useState)(),b=Object(s.a)(h,2),j=b[0],p=b[1];Object(r.useEffect)((function(){c(!0),F(e.host).then((function(e){p(e),c(!1)})).catch((function(e){l(!0)}))}),[e.host]);return Object(a.jsxs)("div",{style:{width:"100%",height:"400px",backgroundColor:"gray"},children:[d&&Object(a.jsx)("div",{children:"Error Loading Geolocation"}),o&&Object(a.jsx)("div",{children:"Loading Geolocation"}),!d&&!o&&j&&Object(a.jsxs)(L.a,{center:[j.latitude,j.longitude],scrollWheelZoom:!1,style:{width:"100%",height:"100%"},zoom:5,children:[Object(a.jsx)(A.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(a.jsx)(T.a,{position:[j.latitude,j.longitude],children:Object(a.jsxs)(z.a,{permanent:!0,direction:"top",offset:[-15,-15],children:[e.host,Object(a.jsx)("br",{}),j.city?"".concat(j.city,", ").concat(j.country_name):j.country_name]})})]})]})},J=Object(p.a)((function(e){return Object(f.a)({paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),U=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),i=Object(s.a)(c,2),u=i[0],p=i[1],f=Object(r.useState)(!0),O=Object(s.a)(f,2),g=O[0],m=O[1],x=Object(r.useState)(!1),v=Object(s.a)(x,2),y=v[0],w=v[1],S=Object(r.useState)(!1),P=Object(s.a)(S,2),k=P[0],C=P[1],B=J(),H=Object(r.useState)({top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),I=Object(s.a)(H,1)[0];if(Object(r.useEffect)((function(){q().then((function(e){var t,n=e.sort((function(e,t){return t.count-e.count}));p(n),m(!1),o(null===(t=n[0])||void 0===t?void 0:t.remote_host)})).catch((function(){w(!0)}))}),[]),y)return Object(a.jsx)("div",{children:"Error Loading Bad Hosts"});if(g)return Object(a.jsx)("div",{children:"Loading Bad Hosts"});return Object(a.jsxs)(l.a,{maxWidth:"md",children:[Object(a.jsxs)("div",{style:{textAlign:"center",margin:"30px 0 15px 0"},children:[Object(a.jsx)(j.a,{variant:"h2",component:"h1",children:"HoneyDB Viewer"}),Object(a.jsxs)(j.a,{variant:"subtitle1",children:["A tracker of for bad host behavior",Object(a.jsx)(h.a,{color:"primary","aria-label":"more info",component:"span",onClick:function(){return C(!0)},children:Object(a.jsx)(d.a,{})})]}),Object(a.jsx)(b.a,{open:k,onClose:function(){return C(!1)},"aria-labelledby":"bad-host-info","aria-describedby":"Bad Host Description",children:Object(a.jsx)("div",{style:I,className:B.paper,children:"A bad host is a host on the Internet that has connected or attempted to connect to one of the honeypots that feed data to HoneyDB. In general, there is no legitimate reason for any host to connect to these honeypots. So those that do can be considered bad, and a potential threat. If you see connectivity from any of these hosts on your network it may be malicious and may require some investigation."})})]}),n&&Object(a.jsx)(G,{host:n}),Object(a.jsx)(_,{hosts:u,onSelectHost:function(e){return o(e)}})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),V()}},[[76,1,2]]]);
//# sourceMappingURL=main.dc1505d0.chunk.js.map