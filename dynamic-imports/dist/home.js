!function(e){function t(t){for(var n,o,u=t[0],a=t[1],i=0,s=[];i<u.length;i++)o=u[i],r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);s.length;)s.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=u);var a,i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"js/"+e+"."+{0:"a6bf2cde89f91952ca17"}[e]+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+u+")");a.type=o,a.request=u,n[1](a)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,i.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./dist/",o.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var c=a;o(o.s=31)}([function(e,t,n){"use strict";e.exports=function(e){document.body.append(e)}},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e){e.exports={teachers:[{name:"Freddy Vega",twitter:""},{name:"Sacha Lifsit",twitter:"sacha"},{name:"Miguel Angel",twitter:"Angel"},{name:"Leonidas Esteban",twitter:"Leo"}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("p");return t.textContent=e,t}},function(e,t,n){"use strict";var r=u(n(0)),o=u(n(9));function u(e){return e&&e.__esModule?e:{default:e}}var a=new Promise(function(e,t){setTimeout(function(){e("Han pasado 3 segundos")},3e3)});e.exports={firstMessage:"Hola mundo con babel",delayedMessage:async function(){var e=await a,t=(0,o.default)(e);(0,r.default)(t)}}},,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"video/que-es-core_1.7a8923a28f2c8458d615a3f8743d8339.mp4"},function(e,t,n){"use strict";n(12);var r=n(10),o=i(n(0)),u=i(n(30)),a=i(n(8));function i(e){return e&&e.__esModule?e:{default:e}}n(7),n(5),n(3),document.getElementById("dynamic").addEventListener("click",async function(){(0,(await n.e(0).then(n.t.bind(null,32,7))).default)()}),console.log(a.default);var c=document.createElement("ul");c.setAttribute("class","Teachers"),a.default.teachers.forEach(function(e){var t=document.createElement("li");t.textContent=e.name,c.appendChild(t)}),(0,o.default)(c),document.write("Hola Mundo!!! ",r.firstMessage),(0,r.delayedMessage)();var s=document.createElement("video");s.setAttribute("src",u.default),s.setAttribute("width",480),s.setAttribute("autoplay",!0),s.setAttribute("controls",!0),(0,o.default)(s),console.log("Hola mundo")}]);