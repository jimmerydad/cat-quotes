(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{411:function(e,t,o){var content=o(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(22).default)("5dbfbfea",content,!0,{sourceMap:!1})},415:function(e,t,o){"use strict";o(411)},416:function(e,t,o){var r=o(21)(!1);r.push([e.i,'body{font-family:"Architects Daughter"}',""]),e.exports=r},440:function(e,t,o){"use strict";o.r(t);o(13),o(11),o(10),o(4),o(15),o(12),o(16);var r=o(2),n=o(108);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={name:"QuoteBlock",props:{show:{type:Boolean},size:{type:String,default:"18px"},quoteLoc:{type:String,default:""},family:{type:String,default:"Architects Daughter"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)({quote:"getQuote",quoteBy:"getQuoteBy"})),mounted:function(){console.debug("reason to "+this.show+" show location: "+this.quoteLoc)}},f=l,y=(o(415),o(91)),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Architects Daughter",rel:"stylesheet"}}),e._v(" "),e.show?o("div",{style:"font-size: "+e.size+"; font-family: '"+e.family+"'"},[""!==e.quoteBy?o("span",[e._v("“")]):e._e(),e._v("\n\n    "+e._s(e.quote)+"\n    "),""!==e.quoteBy?o("span",[e._v("”")]):e._e(),e._v(" "),""!=e.quoteBy?o("footer",[o("small",[o("em",[e._v("— "+e._s(e.quoteBy))])])]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);