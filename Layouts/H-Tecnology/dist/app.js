!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=c(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:h(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,y=0;function h(e,t){var n,r,o;if(t.singleton){var i=y++;n=v||(v=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){var r=n(0),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){},function(e,t,n){var r=n(0),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=document.querySelectorAll(t),this.upElem=document.querySelector(n)}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop>700?(e.upElem.classList.add("animated","fadeIn"),e.upElem.classList.remove("fadeOut")):(e.upElem.classList.add("fadeOut"),e.upElem.classList.remove("fadeIn"))})),this.selector.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonSelector=document.querySelectorAll(t),this.overlay=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"bindOpenBtn",value:function(){var e=this;this.buttonSelector.forEach((function(t){t.addEventListener("click",(function(){if(document.querySelector("iframe#player"))e.overlay.style.display="flex",e.player.playVideo();else{var n=t.getAttribute("data-id");e.creatPlayer(n)}}))}))}},{key:"bindCloseBtn",value:function(){var e=this;this.overlay.addEventListener("click",(function(){e.overlay.style.display="none",e.player.pauseVideo()}))}},{key:"creatPlayer",value:function(e){this.player=new YT.Player("player",{height:"360",width:"640",videoId:"".concat(e)}),this.overlay.style.display="flex"}},{key:"init",value:function(){try{var e=document.createElement("script");e.src="https://youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.bindOpenBtn(),this.bindCloseBtn()}catch(e){console.log("This you Error:  ".concat(e))}}}])&&i(t.prototype,n),r&&i(t,r),e}();window.addEventListener("DOMContentLoaded",(function(){new o('a[href^="#"]',".arrow-up").init(),new a(".watch_video",".video__overlay").init(),console.log("Hello Kraiviks")}));n(1),n(3)}]);