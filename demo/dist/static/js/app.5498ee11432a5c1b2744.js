webpackJsonp([1],[,function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){function o(e){r||n(6)}var r=!1,i=n(4)(n(1),n(5),o,null,null);i.options.__file="/Users/benzhao/Sites/@xunlei/vue-lazy-component/src/VueLazyComponent.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] VueLazyComponent.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VueLazyComponent",props:{timeout:{type:Number},tagName:{type:String,default:"div"},viewport:{type:window.HTMLElement,default:function(){return null}},threshold:{type:String,default:"0px"},direction:{type:String,default:"vertical"}},data:function(){return{isInit:!1,timer:null,io:null}},created:function(){var e=this;this.timeout&&(this.timer=setTimeout(function(){e.init()},this.timeout))},mounted:function(){if(!this.timeout){var e=void 0;switch(this.direction){case"vertical":e=this.threshold+" 0px";break;case"horizontal":e="0px "+this.threshold}this.io=new window.IntersectionObserver(this.intersectionHandler,{rootMargin:e,root:this.viewport}),this.io.observe(this.$el)}},beforeDestroy:function(){this.io||this.io.unobserve(this.$el)},methods:{intersectionHandler:function(e){var t=babelHelpers.slicedToArray(e,1),n=t[0],o=(n.time,n.rootBounds,n.boundingClientRect,n.intersectionRect,n.intersectionRatio);n.target;o>0&&(this.init(),this.io.unobserve(this.$el))},init:function(){var e=this;this.$emit("beforeInit"),this.requestIdleCallback(function(t){e.isInit=!0,e.$emit("init")},{timeout:50})},requestIdleCallback:function(){return(window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}).apply(null,arguments)}}}},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.i,"\n.lazy-component-enter {\n  opacity: 0;\n}\n.lazy-component-enter-to {\n   opacity: 1;\n}\n.lazy-component-enter-active {\n  transition: opacity 0.3s 0.2s;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.lazy-component-leave {\n  opacity: 1;\n}\n.lazy-component-leave-to {\n  opacity: 0;\n}\n.lazy-component-leave-active {\n  transition: opacity 0.5s;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t){e.exports=function(e,t,n,o,r){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),o&&(u._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,p=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),p(e,t)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:s,options:u}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{staticStyle:{position:"relative"},attrs:{tag:e.tagName,name:"lazy-component"}},[e.isInit?n("div",{key:"component"},[e._t("default")],2):e.$slots.skeleton?n("div",{key:"skeleton"},[e._t("skeleton")],2):n("div",{key:"loading"},[e._v("\n    loading\n  ")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(7)("2be1d0dd",o,!1)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var i=f++;o=d||(d=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),l={},p=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=l[s.id];a.refs--,n.push(a)}t?(r=c(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],u=i[2],c=i[3],l={id:e+":"+r,css:a,media:u,sourceMap:c};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}},function(e,t,n){/**
  * vue-lazy-component
  * (c) 2017 赵兵
  * @license MIT
  */
const o=n(0),r={};r.install=function(e,t){e.component(o.name,o)},r.component=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.exports=r}])})},function(e,t,n){"use strict";var o=n(0),r=n(7);o.a.use(r.a),t.a=new r.a({routes:[{path:"/large-page",name:"LargePage",component:function(e){return n.e(0).then(function(){var t=[n(9)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},function(e,t,n){var o=n(4)(null,n(6),null,null,null);e.exports=o.exports},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(3),i=n.n(r),s=n(2),a=n(1);o.a.config.productionTip=!1,o.a.use(a),new o.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Vue Lazy Component Demo")]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.5498ee11432a5c1b2744.js.map