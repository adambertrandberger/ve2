!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ve2=n():t.ve2=n()}(this,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){t.exports=r(1)},function(t,n,r){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){i=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=r(2),a=u.getName,f=u.clamp,s=function(t,n){return new c(t,n)};s.zero=function(){return new c},s.dist=function(t,n){return t=y(t),n=y(n),t.sub(n).mag()},s.fromAngle=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new c(t).mul(n)};var c=function(){function t(n,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i(h(n,r),2);this.x=e[0],this.y=e[1]}var n,r,e;return n=t,(r=[{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toObject",value:function(){return{x:this.x,y:this.y}}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"dist",value:function(n){return t.dist(this,n)}},{key:"dot",value:function(t){return t=y(t),this.x*t.x+this.y*t.y}},{key:"dir",value:function(){return Math.atan2(this.y,this.x)}},{key:"equals",value:function(t){return t=y(t),this.x===t.x&&this.y===t.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}},{key:"clone",value:function(){return new t(this.x,this.y)}}])&&o(n.prototype,r),e&&o(n,e),t}();function h(t,n){if("object"===e(t)&&"number"==typeof t.x&&"number"==typeof t.y)return[t.x,t.y];if(Array.isArray(t)&&t.length>1)return[t[0],t[1]];if("number"==typeof t){if("number"==typeof n)return[t,n];if(void 0===n)return r=t,[Math.cos(r),Math.sin(r)];throw new Error("Cannot convert given arguments to vector. Unknown second argument of type ".concat(e(n),"."))}if(t instanceof c)return[t.x,t.y];throw new Error("Cannot convert given argument to vector. Received value of type ".concat(a(t),"."));var r}function y(t,n){return t instanceof c?t:new c(h(t,n))}function l(t){if("number"!=typeof t)throw new Error("Invariant violation: x/y coordinates must be numeric (found value of type: ".concat(e(t),")."));if(Number.isNaN(t))throw new Error("Invariant violation: x/y coordinates cannot be NaN")}function v(t){return t+"i"}function p(t,n){c.prototype[t]=n(!1),c.prototype[v(t)]=n(!0)}var x=function(t,n){var r=v(t);p(t,function(t){return t?n:function(){var t;return(t=this.clone())[r].apply(t,arguments)}})};x("swap",function(){var t=this.x;return this.x=this.y,this.y=t,this}),x("norm",function(){var t=this.mag();return this.x=this.x/t,this.y=this.y/t,l(this.x),l(this.y),this}),x("negX",function(){return this.x=-this.x,this}),x("negY",function(){return this.y=-this.y,this}),x("clamp",function(t,n){return this.x=f(this.x,t,n),this.y=f(this.y,t,n),l(this.x),l(this.y),this}),x("rot",function(t){var n=this.dir(),r=this.mag();return this.x=Math.cos(n+t),this.y=Math.sin(n+t),this.muli(r)}),x("lerp",function(t,n,r){var e=null;return void 0===r||"number"!=typeof r?(e=y(t),r=n):e=y(t,n),this.x=this.x+(e.x-this.x)*r,this.y=this.y+(e.y-this.y)*r,l(this.x),l(this.y),this});var m=function(t,n,r){p(t,function(t){return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,u=this.x,a=this.y,f=i(h(e,o),2),s=f[0],y=f[1];return r&&(r(u,s),r(a,y)),u=n(u,s),a=n(a,y),l(u),l(a),t?(this.x=u,this.y=a,this):new c(u,a)}})};m("add",function(t,n){return t+n}),m("sub",function(t,n){return t-n}),m("mul",function(t,n){return t*n}),m("div",function(t,n){return t/n},function(t,n){var r=function(t){return"Invariant violation: denominator for division cannot be ".concat(t,".")};if(Number.isNaN(n))throw new Error(r("NaN"));if(0===n)throw new Error(r("zero"));if(!Number.isFinite(n))throw new Error(r("infinite"))}),m("max",Math.max),m("min",Math.min);var d=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;p(t,function(t){return function(){return t?(this.x=n(this.x),this.y=r(this.y),this):new c(n(this.x),r(this.y))}})};d("round",Math.round),d("floor",Math.floor),d("ceil",Math.ceil),d("sqrt",Math.sqrt),d("abs",Math.abs),d("neg",function(t){return-t}),t.exports=s},function(t,n){}])});