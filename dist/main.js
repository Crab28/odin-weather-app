(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=a},28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body {\n    height: 100vh;\n}\n\nbody, button {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nh2 {\n    font-size: 1.8rem;\n}\n\nh3 {\n    font-size: 1.3rem;\n}\n\n.container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    background-image: url('https://images.unsplash.com/photo-1437751059337-ea72d4f73fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=861&q=80');\n    /* credit: https://unsplash.com/@sheetstothewind */\n    background-color: #cccccc;\n    height: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.header,\n.content-container {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.header {\n    padding: 15px 0;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    width: 100%;\n}\n\n#location-search {\n    padding: 8px 10px;\n    outline: none;\n    border: none;\n    border-bottom: 2px solid #fff;\n    background-color: transparent;\n    color: #fff;\n}\n\n#location-search::placeholder {\n    color: #fff;\n}\n\n.buttons-container {\n    position: absolute;\n    right: 15px;\n    top: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn {\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n    color: #fff;\n    font-size: 0.7rem;\n}\n\n.btn:first-child {\n    margin: 8px 0;\n}\n\n.btn:active {\n    transform: scale(0.97);\n}\n\n.content-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content,\n.error-msg {\n    width: 100%;\n    max-width: 800px;\n    display: flex;\n    align-items: center;\n}\n\n.content {\n    flex: 2;\n    justify-content: space-evenly;\n}\n\n.info-box {\n    height: 250px;\n    width: 250px;\n    display: flex;\n    text-align: center;\n    color: white;\n    background-color: #00000091;\n    border-radius: 15px;\n}\n\n.first-info-box {\n    align-items: center;\n}\n\n.first-info-box .icon {\n    flex: 1;\n    padding-left: 10px;\n}\n\n.first-info-box .info {\n    flex: 2;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    text-align: start;\n    padding-left: 10px;\n}\n\n.second-info-box {\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.error-msg {\n    background-color: yellow;\n    flex: 1;\n    justify-content: center;\n}\n\n@media (max-width: 600px) {\n    .header {\n        position: initial;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n    }\n\n    .buttons-container {\n        position: initial;\n        display: flex;\n        flex-direction: row;\n        margin-top: 12px;\n        gap: 6px;\n    }\n\n    .btn:first-child {\n        margin: 0\n    }\n\n    .container {\n        background-image: url('https://images.unsplash.com/photo-1507400492013-162706c8c05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=359&q=80');\n        /* credit: https://unsplash.com/@timformat */\n    }\n\n    .info-box {\n        height: 200px;\n        width: 200px;\n        background-color: transparent;\n    }\n    \n    @media (max-width: 390px) {\n        .content {\n            flex-direction: column;\n        }\n\n        .info-box {\n            background-color: #00000091;\n            width: 220px;\n        }\n    }\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),f=t.n(u),p=t(917),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var m=t(28),b={};b.styleTagTransform=f(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;const x=function(n){(async function(n){const e=await async function(n){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=0d9d028bd7cf44ec9fe94100231107&q=${n}`);return await e.json()}(n);return function(n){return{condition:n.current.condition.text,weather_icon:n.current.condition.icon,temp_c:n.current.temp_c,temp_f:n.current.temp_f,humidity:n.current.humidity,wind_kph:n.current.wind_kph,wind_mph:n.current.wind_mph,location:n.location.name}}(e)})(n).then((n=>console.log(n)))};x("pretoria"),function(){const n=document.getElementById("location-search");n.addEventListener("keypress",(e=>{"Enter"===e.key&&(e.preventDefault(),x(n.value),n.value="")}))}()})()})();