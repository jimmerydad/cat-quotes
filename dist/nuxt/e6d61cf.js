(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(e,t,n){"use strict";var o=n(160),r=n.n(o);t.a=function(e,t){t("errorHandler",new r.a({400:"400 - Bad Data received. Please refresh and try again. If the problem continues, please contact support.",401:"You must be logged in to access this.",404:"404 - We couldn't find that. Please refresh and try again. If the problem continues, please contact support.",500:"500 - Server Error. Your file could not be uploaded. Please refresh and try again. If the problem continues, please contact support."},"Something else went wrong."))}},198:function(e,t,n){"use strict";var o=n(160),r=n.n(o);t.a=function(e){var t=e.$axios,n=(e.redirect,e.store,e.app,e.$config.baseURL);t.defaults.baseURL=n,t.onError((function(e){return new r.a({400:"400 - Bad Data received. Please refresh and try again. If the problem continues, please contact support.",401:"You must be logged in to access this.",404:"404 - We couldn't find that. Please refresh and try again. If the problem continues, please contact support.",500:"500 - Server Error. Your file could not be uploaded. Please refresh and try again. If the problem continues, please contact support."},"Something else went wrong.").setAll(e).parse()}))}},199:function(e,t,n){"use strict";(function(e){n(55),n(40);function o(e){return e<10?"0"+e:e}function r(){return(new Date).getFullYear()+"."+o((new Date).getMonth()+1)+"."+o((new Date).getDate())+" "+o((new Date).getHours())+":"+o((new Date).getMinutes())+":"+o((new Date).getSeconds())}t.a=function(t){var n,o=t.$config;console.log("what is $config.logLevel: ",o.logLevel),console.debug=console.log,n=void 0===o.logLevel?void 0===e.env.LOG_LEVEL?"warn":e.env.LOG_LEVEL:o.logLevel,console.log("what is the log level: ",n);var c=console.log;console.log=function(){var e=Array.from(arguments);e.unshift(r()+" [LOG] - "),c.apply(console,e)};var l=console.debug;console.debug=function(){var e=Array.from(arguments);e.unshift(r()+" [DEBUG] - "),l.apply(console,e)};var f=console.warn;console.warn=function(){var e=Array.from(arguments);e.unshift(r()+" [WARN] - "),f.apply(console,e)};var d=console.info;console.info=function(){var e=Array.from(arguments);e.unshift(r()+" [INFO] - "),d.apply(console,e)};var m=console.error;switch(console.error=function(){var e=Array.from(arguments);e.unshift(r()+" [ERROR] - "),m.apply(console,e)},n){case"debug":break;case"dir":case"log":console.debug=function(){};break;case"info":console.debug=function(){},console.dir=function(){},console.log=function(){};break;case"trace":case"warn":case"error":console.debug=function(){},console.dir=function(){},console.log=function(){},console.info=function(){}}}}).call(this,n(185))},246:function(e,t,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("dc093880",content,!0,{sourceMap:!1})},271:function(e,t,n){"use strict";var o={name:"DefaultLayout",data:function(){return{clipped:!0,drawer:!1,fixed:!1,useDark:!1,version:"",items:[{icon:"mdi-cat",title:"Welcome",to:"/"},{icon:"mdi-thought-bubble",title:"Quote",to:"/cat-quote"},{icon:"mdi-cogs",title:"settings",to:"/settings"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Cat Quotes"}},mounted:function(){this.version="1.3.3-ga3f9b50"}},r=n(91),c=n(127),l=n.n(c),f=n(402),d=n(407),m=n(403),v=n(408),h=n(404),w=n(191),x=n(192),y=n(121),A=n(193),L=n(89),Q=n(405),k=n(406),_=n(269),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":e.miniVariant,clipped:e.clipped,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",e._l(e.items,(function(t,i){return n("v-list-item",{key:i,attrs:{to:t.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1),e._v(" "),n("v-app-bar",{attrs:{"clipped-left":e.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}})],1),e._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),e._v(" "),n("v-footer",{attrs:{absolute:!e.fixed,app:""}},[n("span",[e._v("© "+e._s((new Date).getFullYear())+" Version "+e._s(e.version))])])],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VApp:f.a,VAppBar:d.a,VAppBarNavIcon:m.a,VContainer:v.a,VFooter:h.a,VIcon:w.a,VList:x.a,VListItem:y.a,VListItemAction:A.a,VListItemContent:L.a,VListItemTitle:L.b,VMain:Q.a,VNavigationDrawer:k.a,VToolbarTitle:_.a})},279:function(e,t,n){n(280),e.exports=n(281)},307:function(e,t,n){"use strict";n(246)},308:function(e,t,n){var o=n(21)(!1);o.push([e.i,"h1[data-v-35e10596]{font-size:20px}",""]),e.exports=o},371:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return f})),n.d(t,"getters",(function(){return d})),n.d(t,"mutations",(function(){return m})),n.d(t,"actions",(function(){return v}));var o=n(20),r=(n(4),n(40),n(44),n(372),n(186),n(54),n(64),n(100),"https://cataas.com/cat"),c="https://thingproxy.freeboard.io/fetch/",l=n(374),f=function(){return{quote:{},pix:{},quoteLocation:"above",imageType:"gif",theme:"",pixId:"60ef3f0151a2ca0011c7455d",quoteBy:"",catService:"",updateTimer:3e4,quoteType:"random"}},d={getQuote:function(e){return e.quote},getPix:function(e){return e.pix},getQuoteLocation:function(e){return e.quoteLocation},getPixId:function(e){return e.pixId},getImageType:function(e){return e.imageType},getTheme:function(e){return e.theme},getQuoteBy:function(e){return e.quoteBy},getQuoteType:function(e){return e.quoteType},getCatService:function(){return r}},m={setQuote:function(e,t){e.quote=t},setQuoteBy:function(e,t){e.quoteBy=t},setQuoteType:function(e,t){e.quoteType=t},setPix:function(e,t){e.pix=t},setQuoteLocation:function(e,t){e.quoteLocation=t},setPixId:function(e,t){e.pixId=t},setTheme:function(e,t){e.theme=t},setImageType:function(e,t){e.imageType=t}},v={getMenuItems:function(){return console.debug("getting setting menu"),[{icon:"mdi-cloud-upload",text:"Cat Quotes",url:"/cat-quotes"}]},callAQuoteService:function(e,t){e.state;var n=e.dispatch;switch(t){case"dad":return void n("getDadQuote");case"affirmation":return void n("getAffirmation");case"inspiration":return void n("getInspiration");case"advice":return void n("getAdvice");default:console.warn("quote type not configured")}},getAQuote:function(e){var t=e.state,n=e.dispatch;if((0,e.commit)("setQuoteBy",""),"random"===t.quoteType){switch(Math.floor(4*Math.random())+1){case 1:n("callAQuoteService","dad");break;case 2:n("callAQuoteService","affirmation");break;case 3:n("callAQuoteService","inspiration");break;case 4:n("callAQuoteService","advice");break;default:console.warn("quote type not configured")}}else n("callAQuoteService",t.quoteType)},catJSON:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c,l,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=e.commit,e.state,l=r,t&&(l+="/gif"),l+="?json=true",o.next=6,n.$axios.get(l);case 6:f=o.sent,console.log("result: ",f),c("setPixId",f.data.id);case 9:case"end":return o.stop()}}),o)})))()},getCatPix:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.commit,e.state,r,t.next=4,n.$axios.get("https://cataas.com/cat",{});case 4:c=t.sent,l={},f=URL.createObjectURL(c),console.log("image url: "+f),f&&(l={id:"123",url:f}),o("setPix",l);case 10:case"end":return t.stop()}}),t)})))()},getAdvice:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.commit,e.state,c+"https://api.adviceslip.com/advice",t.next=4,n.$axios.get("https://thingproxy.freeboard.io/fetch/https://api.adviceslip.com/advice",{});case 4:r=t.sent,console.log("result: ",r),o("setQuote",r.data.slip.advice);case 7:case"end":return t.stop()}}),t)})))()},getAffirmation:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.commit,e.state,c+"https://www.affirmations.dev/",n.$axios.setHeader("Access-Control-Allow-Origin","*"),t.next=5,n.$axios.get("https://thingproxy.freeboard.io/fetch/https://www.affirmations.dev/",{headers:{"Access-Control-Allow-Origin":"*"}});case 5:r=t.sent,console.log("result: ",r),o("setQuote",r.data.affirmation);case 8:case"end":return t.stop()}}),t)})))()},getInspiration:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.commit,e.state,c+"https://inspiration.goprogram.ai/",t.next=4,n.$axios.get("https://thingproxy.freeboard.io/fetch/https://inspiration.goprogram.ai/",{headers:{"Access-Control-Allow-Origin":"*"}});case 4:r=t.sent,console.log("result: ",r),o("setQuote",r.data.quote),o("setQuoteBy",r.data.author);case 8:case"end":return t.stop()}}),t)})))()},resetQuoteBy:function(e){(0,e.commit)("setQuoteBy","")},getDadQuote:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.commit,e.state,"https://icanhazdadjoke.com/",t.next=4,n.$axios.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:r=t.sent,console.log("result: ",r),o("setQuote",r.data.joke);case 7:case"end":return t.stop()}}),t)})))()},downloadFile:function(e,t,n){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.commit,console.debug("3 downloadFile url : "+t),o.prev=2,o.next=5,r.$axios.$get(t,{responseType:"blob"}).then((function(e){var t=e.type;console.debug("file response type?"),console.debug(t),"application/octet-stream"===t&&(n.includes(".pdf")||n.includes(".PDF"))&&(t="application/pdf");var o=new Blob([e],{type:t});if(console.debug("file response?"),console.debug(e),console.debug("2 file?"),console.info(n),console.debug("file type?"),console.info(t),!!document.documentMode)l.saveAs(o,n);else{var r=window.URL.createObjectURL(o);window.open(r)}}));case 5:o.next=13;break;case 7:return o.prev=7,o.t0=o.catch(2),console.error("downloadFile error collecting file."),{},c={error:{message:"There were either no files, or a problem getting them: "+o.t0}},o.abrupt("return",[c]);case 13:return o.abrupt("return",n);case 14:case"end":return o.stop()}}),o,null,[[2,7]])})))()}};t.default={namespaced:!0,state:f,actions:v,mutations:m,getters:d}},81:function(e,t,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(307),n(91)),c=n(127),l=n.n(c),f=n(402),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[404===e.error.statusCode?n("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):n("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);t.a=component.exports;l()(component,{VApp:f.a})}},[[279,9,3,10]]]);