(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{QBpM:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"UpgradePage",(function(){return h})),n.d(t,"UpgradeInfo",(function(){return v}));var r=n("q1tI"),a=n.n(r),i=n("kDDq"),l=n("ZGyg"),c=n("WDqV"),o=n("kDLi"),u=n("0cfB"),s=n("lzJ5"),p=n("/MKj");function m(){var e=E(["\n    font-weight: 500;\n    line-height: 1.7;\n  "]);return m=function(){return e},e}function d(){var e=E(["\n    display: flex;\n\n    > img {\n      display: block;\n      height: 22px;\n      flex-grow: 0;\n      padding-right: 12px;\n    }\n  "]);return d=function(){return e},e}function g(){var e=E(["\n    display: flex;\n    flex-direction: column;\n    padding-top: 8px;\n\n    > div {\n      margin-bottom: ","px;\n    }\n  "]);return g=function(){return e},e}function f(){var e=E(["\n    display: grid;\n    grid-template-columns: 100%;\n    column-gap: 20px;\n    row-gap: 40px;\n\n    @media (min-width: 1050px) {\n      grid-template-columns: 50% 50%;\n    }\n  "]);return f=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=function(e){var t=e.navModel;return a.a.createElement(l.a,{navModel:t},a.a.createElement(l.a.Contents,null,a.a.createElement(v,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})))},b={fontWeight:500,fontSize:"26px",lineHeight:"123%"},v=function(e){var t=e.editionNotice,n=Object(i.css)(f());return a.a.createElement(c.a,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:t},a.a.createElement("div",{className:n},a.a.createElement(j,null),a.a.createElement(O,null)))},y=function(){return a.a.createElement("div",{style:{marginTop:"40px",marginBottom:"30px"}},a.a.createElement("h2",{style:b},"Get Grafana Enterprise"),a.a.createElement(x,null),a.a.createElement("p",{style:{paddingTop:"12px"}},"You can use the trial version for free for ",a.a.createElement("strong",null,"30 days"),". We will remind you about it"," ",a.a.createElement("strong",null,"5 days before the trial period ends"),"."))},x=function(){return a.a.createElement(o.Forms.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page"},"Contact us and get a free trial")},O=function(){return a.a.createElement("div",null,a.a.createElement("h4",null,"At your service"),a.a.createElement(k,null,a.a.createElement(D,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),a.a.createElement(D,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),a.a.createElement(D,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg"},"24x7x365 support via",a.a.createElement(k,{nested:!0},a.a.createElement(D,{title:"Email"}),a.a.createElement(D,{title:"Private slack channel"}),a.a.createElement(D,{title:"Phone"}))),a.a.createElement(D,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg"},"in the upgrade process")),a.a.createElement("div",{style:{marginTop:"20px"}},a.a.createElement("strong",null,"Also included:"),a.a.createElement("br",null),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."))},j=function(){return a.a.createElement("div",{style:{paddingRight:"11px"}},a.a.createElement("h4",null,"Enhanced Functionality"),a.a.createElement(w,null),a.a.createElement(y,null))},w=function(){return a.a.createElement(k,null,a.a.createElement(D,{title:"Data source permissions"}),a.a.createElement(D,{title:"Reporting"}),a.a.createElement(D,{title:"SAML Authentication"}),a.a.createElement(D,{title:"Enhanced LDAP Integration"}),a.a.createElement(D,{title:"Team Sync"},"LDAP, GitHub OAuth, Auth Proxy"),a.a.createElement(D,{title:"White labeling"}),a.a.createElement(D,{title:"Enterprise Plugins"},a.a.createElement(k,{nested:!0},a.a.createElement(D,{title:"Oracle"}),a.a.createElement(D,{title:"Splunk"}),a.a.createElement(D,{title:"Service Now"}),a.a.createElement(D,{title:"Dynatrace"}),a.a.createElement(D,{title:"DataDog"}),a.a.createElement(D,{title:"AppDynamics"}))))},k=function(e){var t=e.children,n=e.nested,r=Object(i.css)(g(),n?0:8);return a.a.createElement("div",{className:r},t)},D=function(e){var t=e.children,n=e.title,r=e.image,l=r||"public/img/licensing/checkmark.svg",c=Object(i.css)(d()),o=Object(i.css)(m());return a.a.createElement("div",{className:c},a.a.createElement("img",{src:l}),a.a.createElement("div",null,a.a.createElement("div",{className:o},n),t))};t.default=Object(u.hot)(e)(Object(p.connect)((function(e){return{navModel:Object(s.a)(e.navIndex,"upgrading")}}))(h))}.call(this,n("3UD+")(e))},WDqV:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n("q1tI"),a=n.n(r),i=n("kDLi"),l=n("kDDq");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e=d(["\n      height: 137px;\n      padding: 40px 0 0 79px;\n      position: relative;\n      background: url('","') right;\n  "]);return s=function(){return e},e}function p(){var e=d(["\n      text-align: center;\n      padding: 16px;\n      background: ",";\n    "]);return p=function(){return e},e}function m(){var e=d(["\n      padding: 36px 79px;\n      background: ",";\n    "]);return m=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g={fontWeight:500,fontSize:"26px",lineHeight:"123%"},f=Object(i.stylesFactory)((function(e){var t=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",n=e.isDark?e.colors.dark9:e.colors.gray6;return{container:Object(l.css)(m(),e.colors.panelBg),footer:Object(l.css)(p(),n),header:Object(l.css)(s(),t)}})),E=function(e){var t=e.header,n=e.editionNotice,r=e.subheader,l=e.children,c=Object(i.useTheme)(),o=f(c);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:o.header},a.a.createElement("h2",{style:g},t),r&&a.a.createElement("h3",null,r),a.a.createElement(h,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"}},a.a.createElement("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}}))),a.a.createElement("div",{className:o.container},l),n&&a.a.createElement("div",{className:o.footer},n))},h=function(e){var t=e.size,n=e.style,r=e.children;return a.a.createElement("div",{style:o({width:t,height:t,position:"absolute",bottom:0,right:0,borderRadius:"50%"},n)},r)}}}]);
//# sourceMappingURL=53.cd0b9771548369c04f01.js.map