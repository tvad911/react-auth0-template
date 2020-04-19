(this["webpackJsonptest-auth0-react-login"]=this["webpackJsonptest-auth0-react-login"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"name":"test-auth0-react-login","version":"0.1.0","homepage":"https://ivarprudnikov.github.io/react-auth0-template","private":false,"dependencies":{"@auth0/auth0-spa-js":"^1.7.0","@testing-library/jest-dom":"^5.5.0","@testing-library/react":"^9.4.1","@testing-library/user-event":"^10.0.2","axios":"^0.19.2","bootstrap":"^4.4.1","jwt-decode":"^2.2.0","node-sass":"^4.13.1","react":"^16.13.1","react-dom":"^16.13.0","react-router-dom":"^5.1.2","react-scripts":"^3.4.1"},"scripts":{"start":"REACT_APP_VERSION=$(date \\"+%Y-%m-%d %H:%M\\") react-scripts start","build":"REACT_APP_VERSION=$(date \\"+%Y-%m-%d %H:%M\\") react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},36:function(e,t,a){e.exports=a(72)},41:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),l=a(30),i=a.n(l),s=(a(41),a(6)),u=a(3),m=a.n(u),p=a(10),d=a(31),h=a.n(d),f=a(32),b=a(17),v={domain:"ivarprudnikov.eu.auth0.com",clientId:"EuHrJlslqdI6h5UOuAMtau6maPa05lRd",audience:"https://ivarprudnikov.com",scope:"openid profile email",loginCallbackUrl:b.homepage,logoutRedirectUrl:b.homepage},g=function(){return window.history.replaceState({},document.title,window.location.pathname)},E=o.a.createContext({}),N=function(){return Object(c.useContext)(E)},w=function(e){var t=e.children,a=e.onRedirectCallback,n=Object(c.useState)(!1),r=Object(s.a)(n,2),l=r[0],i=r[1],u=Object(c.useState)(null),d=Object(s.a)(u,2),b=d[0],N=d[1],w=Object(c.useState)(null),k=Object(s.a)(w,2),x=k[0],j=k[1],y=Object(c.useState)(!0),O=Object(s.a)(y,2),C=O[0],R=O[1];"function"!==typeof a&&(a=g),Object(c.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({domain:v.domain,client_id:v.clientId,audience:v.audience,scope:v.scope,redirect_uri:v.loginCallbackUrl});case 2:if(t=e.sent,j(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,r=n.appState,a(r);case 10:return e.next=12,t.isAuthenticated();case 12:if(c=e.sent,i(c),!c){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,N(o);case 19:R(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){console.error("initAuth0 failure",e),window.location.replace("/")}))}),[a]);var S=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,R(!1),i(!0),N(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getTokenSilently();case 3:t=e.sent,e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),new Error("Could not obtain access token");case 10:return e.prev=10,e.abrupt("return",{raw:t,decoded:h()(t)});case 14:throw e.prev=14,e.t1=e.catch(10),console.log(e.t1),new Error("Could not decode access token");case 18:case"end":return e.stop()}}),e,null,[[0,6],[10,14]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:t=e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",[]);case 9:return a=(t.decoded.scope||"")+"",e.abrupt("return",a.split(/\W/));case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return a=e.sent,e.abrupt("return",t&&t.length&&t.some((function(e){return a.indexOf(e)>-1})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(E.Provider,{value:{isAuthenticated:l,user:b,loading:C,handleRedirectCallback:S,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:P,hasAnyScopeAsync:I,getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logoutWithRedirect:function(){return x.logout({returnTo:v.logoutRedirectUrl})}}},t)},k=a(8),x=function(){var e=N(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logoutWithRedirect;return o.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement(k.a,{className:"navbar-brand",to:"/react-auth0-template/"},"Brnd"),o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item-divider"})),!t&&o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("form",{className:"form-inline"},o.a.createElement("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){return a({})}},"Log in"))),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.a,{className:"nav-link",to:"/react-auth0-template/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.a,{className:"nav-link",to:"/react-auth0-template/profile"},"Profile"))),o.a.createElement("form",{className:"form-inline ml-4"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return n()}},"Log out")))))},j=a(9),y=a(11),O=a.n(y),C=function(){var e=N(),t=e.loading,a=e.user,n=Object(c.useState)({}),r=Object(s.a)(n,2),l=r[0],i=r[1];return Object(c.useEffect)((function(){!t&&a&&O.a.get("/me").then((function(e){return i(e.data)})).catch((function(){i({})}))}),[t,a]),t||!a?o.a.createElement("div",{className:"d-flex min-vh-100 align-items-center justify-content-center"},o.a.createElement("span",{className:"spinner-border","aria-label":"Loading ..."})):o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-2"},o.a.createElement("img",{src:a.picture,alt:"Profile",className:"img-fluid"})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("h2",null,a.name),o.a.createElement("p",null,a.email)),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("code",{className:"p-3 bg-dark text-light d-block mb-3"},JSON.stringify(a,null,2)),o.a.createElement("pre",{className:"p-3 bg-dark text-light d-block"},JSON.stringify(l,null,2)))))},R=a(2),S=Object(R.a)(),P=a(35),A=function(e){var t=e.component,a=e.path,n=Object(P.a)(e,["component","path"]),r=N(),l=r.loading,i=r.isAuthenticated,s=r.loginWithRedirect;Object(c.useEffect)((function(){l||i||function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({appState:{targetUrl:a}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,i,s,a]);return o.a.createElement(j.a,Object.assign({path:a,render:function(e){return!0===i?o.a.createElement(t,e):null}},n))},I=function(){return o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",{className:"display-1"},"Super fancy app"),o.a.createElement("div",{className:"mt-5"},o.a.createElement(k.a,{className:"btn btn-lg btn-primary mr-2",to:"/react-auth0-template/profile"},"Protected profile page")))},T=[],U=[];var W=function(){O.a.defaults.baseURL="https://995oz2jt04.execute-api.eu-west-1.amazonaws.com/Prod/";var e=N(),t=e.loading,a=e.getTokenSilently,l=Object(c.useState)(!1),i=Object(s.a)(l,2),u=i[0],m=i[1],p=Object(c.useState)(!1),d=Object(s.a)(p,2),h=d[0],f=d[1],b=Object(c.useState)(!1),v=Object(s.a)(b,2),g=v[0],E=v[1],w=401,k=403,y=500;function R(e){switch(e){case w:for(;T.length>0;)T.shift().call();m(!1);break;case k:for(;U.length>0;)U.shift().call();f(!1);break;default:m(!1),f(!1),E(!1)}}null!=n&&O.a.interceptors.request.eject(n),null!=r&&O.a.interceptors.response.eject(r),t||(n=O.a.interceptors.request.use((function(e){return console.log("axiosRequestInterceptor"),a().then((function(t){return console.log("axiosRequestInterceptor token",t),e.headers=e.headers||{},e.headers.Authorization="Bearer ".concat(t.raw),e})).catch((function(t){return console.log("axiosRequestInterceptor catch",t),e}))})),r=O.a.interceptors.response.use((function(e){return e}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case w:return new Promise((function(e){T.push(e),m(!0)})).then((function(){return Promise.reject(e)}));case k:return new Promise((function(e){U.push(e),f(!0)})).then((function(){return Promise.reject(e)}));default:return e.response.status>=y&&E(!0),Promise.reject(e)}else E(!0);return Promise.reject(e)})));var P=null,W=null,_=null,q=null;return u&&(W=o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"alert alert-danger mb-2"},"Authentication is required",o.a.createElement("button",{type:"button",onClick:function(){return R(w)},className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),h&&(_=o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"alert alert-danger mb-2"},"You're not authorized to perform an action.",o.a.createElement("button",{type:"button",onClick:function(){return R(k)},className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),g&&(q=o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"alert alert-danger mb-2"},"Server responded with an unexpected error.",o.a.createElement("button",{type:"button",onClick:function(){return R(y)},className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),(W||_||q)&&(P=o.a.createElement("div",{className:"bg-dark p-3"},W,_,q)),o.a.createElement("div",{className:"d-flex min-vh-100 flex-column"},P,o.a.createElement(j.b,{history:S},o.a.createElement("header",null,o.a.createElement(x,null)),o.a.createElement("main",null,t&&o.a.createElement("div",{className:"d-flex align-items-center justify-content-center my-auto"},o.a.createElement("span",{className:"spinner-border","aria-label":"Loading ..."})),!t&&o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/react-auth0-template/",exact:!0,component:I}),o.a.createElement(A,{path:"/react-auth0-template/profile",component:C}))),o.a.createElement("footer",{className:"p-4 text-center bg-primary text-light mt-auto"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("small",null,"Version: ",window.REACT_APP_VERSION),o.a.createElement("span",{className:"mx-auto"}),o.a.createElement("a",{href:"https://github.com/ivarprudnikov/react-auth0-template",className:"btn btn-sm btn-outline-light mr-3"},"Source code on Github"),o.a.createElement("a",{href:"https://www.ivarprudnikov.com/auth0-authentication-website-react/",className:"btn btn-sm btn-outline-light"},"About this implementation"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,{onRedirectCallback:function(e){S.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5ef415c4.chunk.js.map