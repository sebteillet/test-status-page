(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var o,a,r,c,i,s,u,l,b,d,j,g,p,x,O,m,f,h,v,w,S,k,C,E,_=n(1),A=n.n(_),I=n(18),P=n.n(I),y=(n(31),n(5)),T=n(3),N=(n(32),n(4)),D={message:"All Systems Operational",backgroundColour:"#3da751"},R={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},F={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},L=function(t,e){return 100*t.filter((function(t){return t.labels.find((function(t){return t.name===e}))})).length/t.length},M=n(7),B=n.n(M),z=n(0),J=N.a.div(o||(o=Object(T.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(t){return t.backgroundColour?t.backgroundColour:"#b1b1b1"})),Y=N.a.h2(a||(a=Object(T.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),W=N.a.button(r||(r=Object(T.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),U=N.a.code(c||(c=Object(T.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),H=function(t){var e=t.loading,n=t.error,o=t.components,a=t.refetch,r=function(t){var e=Object(_.useState)(),n=Object(y.a)(e,2),o=n[0],a=n[1];return Object(_.useEffect)((function(){var e=!1;L(t,"operational")<70&&(a(R),e=!0),L(t,"major outage")>0&&(a(F),e=!0),e||a(D)}),[t]),[o]}(o),c=Object(y.a)(r,1)[0],i=function(t,e){var n=Object(_.useState)(B()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(y.a)(n,2),a=o[0],r=o[1];return Object(_.useEffect)((function(){var e=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?t((function(){r(B()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(B()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(e)}}),[t]),Object(_.useEffect)((function(){r(B()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[e]),[a]}(a,e),s=Object(y.a)(i,1)[0];return Object(z.jsxs)(z.Fragment,{children:[n.hasError&&Object(z.jsxs)(U,{children:[Object(z.jsx)("div",{children:"An error occured"}),Object(z.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(n.errors,null,3)]}),Object(z.jsxs)(J,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(z.jsx)(Y,{children:null===c||void 0===c?void 0:c.message}),Object(z.jsx)(W,{onClick:a,children:e?"reloading":s})]})]})},K=function(t){var e=Object(_.useState)([]),n=Object(y.a)(e,2),o=n[0],a=n[1],r=Object(_.useState)(),c=Object(y.a)(r,2),i=c[0],s=c[1],u=Object(_.useState)(!0),l=Object(y.a)(u,2),b=l[0],d=l[1];return Object(_.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(t)))<new Date-24e4?V(d,s,a,t):(a(JSON.parse(localStorage.getItem("issueStatus".concat(t)))),d(!1),s())}),[t]),[b,i,o||[],function(){return V(d,s,a,t)}]},V=function(t,e,n,o){t(!0),fetch("https://api.github.com/repos/".concat("sebteillet/test-status-page","/issues?state=all&labels=issue status,").concat(o)).then((function(t){return t.json()})).then((function(a){e(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),n(a),t(!1)})).catch((function(a){e(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),n(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),t(!1)}))},G=(N.a.h1(i||(i=Object(T.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),N.a.img(s||(s=Object(T.a)([""])))),$=N.a.div(u||(u=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),q=function(){return Object(z.jsx)($,{children:Object(z.jsx)(G,{src:"https://raw.githubusercontent.com/sebteillet/test-status-page/master/.issuestatus/logo.png",alt:"BeMyApp"})})},Q=N.a.div(l||(l=Object(T.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),X={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},Z=N.a.div(b||(b=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.colour}),(function(t){return t.backgroundColour})),tt=function(t){var e=function(t){var e=Object(_.useState)(),n=Object(y.a)(e,2),o=n[0],a=n[1];return Object(_.useEffect)((function(){a(Object.values(X).find((function(e){return t.find((function(t){return t.name===e.name.toLowerCase()}))})))}),[t]),o||a(X.unknown),[o]}(t.labels),n=Object(y.a)(e,1)[0];return Object(z.jsx)(Z,{colour:null===n||void 0===n?void 0:n.colour,backgroundColour:null===n||void 0===n?void 0:n.backgroundColour,children:null===n||void 0===n?void 0:n.name})},et=N.a.div(d||(d=Object(T.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),nt=function(t){var e=t.component;return Object(z.jsxs)(et,{children:[e.title," ",Object(z.jsx)(tt,{labels:e.labels})]})},ot=function(){var t=Object(_.useState)(),e=Object(y.a)(t,2),n=e[0],o=e[1];return Object(_.useEffect)((function(){o(!0)}),[]),[n]},at=function(t){var e=t.loading,n=t.components,o=ot(),a=Object(y.a)(o,1)[0];return!e||a?(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(t){return Object(z.jsx)(nt,{component:t},t.id)})):Object(z.jsx)("p",{children:"No Components found."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsx)(Q,{}),Object(z.jsx)(Q,{})]})},rt=n(24),ct=N.a.div(j||(j=Object(T.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),it=N.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),st=N.a.div(p||(p=Object(T.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ut=N.a.div(x||(x=Object(T.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),lt=N.a.div(O||(O=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.active?"#6e6b6b":"#2f5888"}),(function(t){return t.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),bt=N.a.div(m||(m=Object(T.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),dt=function(t){var e=t.incident;return Object(z.jsxs)(ct,{active:e.closed_at,children:[Object(z.jsxs)(it,{children:[Object(z.jsx)(bt,{children:B()(e.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(z.jsx)(lt,{active:e.closed_at,children:e.closed_at?"Closed":"Active"})]}),Object(z.jsx)(st,{children:e.title}),Object(z.jsx)(ut,{children:Object(z.jsx)(rt.a,{children:e.body})})]})},jt=N.a.div(f||(f=Object(T.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),gt=N.a.div(h||(h=Object(T.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),pt=N.a.div(v||(v=Object(T.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),xt=N.a.div(w||(w=Object(T.a)(["\n  margin: 0 8px;\n"]))),Ot=function(t){var e=t.loading,n=t.incidents,o=ot(),a=Object(y.a)(o,1)[0];return Object(z.jsxs)(gt,{children:[Object(z.jsx)(pt,{children:"Incidents"}),!e||a?(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(t){return Object(z.jsx)(dt,{incident:t},t.id)})):Object(z.jsx)(xt,{children:"No Incidents found."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(jt,{}),Object(z.jsx)(jt,{}),Object(z.jsx)(jt,{})]})]})},mt=N.a.div(S||(S=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),ft=N.a.a(k||(k=Object(T.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(t){return t.visible?"block":"none"})),ht=function(){return Object(z.jsxs)(mt,{children:[Object(z.jsx)("div",{}),Object(z.jsx)(ft,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/sebteillet/test-status-page/master/.issuestatus/manifest.json",REACT_APP_FAVICON:"https://raw.githubusercontent.com/sebteillet/test-status-page/master/.issuestatus/favicon.ico",REACT_APP_TITLE:"BeMyApp Status Page",REACT_APP_DESCRIPTION:"BeMyApp Virtual Event Platform - Status Page",REACT_APP_LOGO:"https://raw.githubusercontent.com/sebteillet/test-status-page/master/.issuestatus/logo.png",REACT_APP_NAME:"BeMyApp",REACT_APP_REPOSITORY:"sebteillet/test-status-page"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},vt=N.a.div(C||(C=Object(T.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),wt=N.a.div(E||(E=Object(T.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),St=function(){var t=K("component"),e=Object(y.a)(t,4),n=e[0],o=e[1],a=e[2],r=e[3],c=K("incident"),i=Object(y.a)(c,4),s=i[0],u=i[1],l=i[2],b=i[3];return Object(z.jsxs)(vt,{children:[Object(z.jsx)(q,{}),Object(z.jsxs)(wt,{children:[Object(z.jsx)(H,{loading:n||s,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),b()}}),Object(z.jsx)(at,{loading:n,components:a})]}),Object(z.jsx)(Ot,{loading:s,incidents:l}),Object(z.jsx)(ht,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.render(Object(z.jsx)(A.a.StrictMode,{children:Object(z.jsx)(St,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b9ee7954.chunk.js.map