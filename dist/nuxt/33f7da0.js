(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{413:function(t,e,n){"use strict";n.r(e);n(27),n(60);var o={name:"CountDown",props:{timerAmount:{type:Number,default:30},msg:{type:String,default:""},restart:{type:Boolean,default:!1}},data:function(){return{timerCount:30}},watch:{restart:{handler:function(t){t&&(this.timerCount=this.timerAmount)},immediate:!0},timerCount:{handler:function(t){var e=this;t>0&&(console.debug("countdown value: "+t),setTimeout((function(){e.timerCount--,0===e.timerCount&&(console.debug("should be emitted complete status"),e.$emit("complete"))}),1e3))},immediate:!0}},mounted:function(){this.timerCount=this.timerAmount}},r=n(91),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.timerCount>0?n("span",{staticClass:"mr-5"},[t._v("\n  "+t._s(t.timerCount)+" "+t._s(t.msg)+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);