!function(e){function t(t){for(var o,i,l=t[0],a=t[1],c=t[2],h=0,d=[];h<l.length;h++)i=l[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var a=r[l];0!==n[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={0:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;s.push([3,1]),r()}([,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(2);var o=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},n=r(1);var s=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let r=0;r<e;r++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${r}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new n.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}};var i=r(0),l=r.n(i);var a=class{constructor(){this.openButton=l()(".js-search-trigger"),this.closeButton=l()(".search-overlay__close"),this.searchOverlay=l()(".search-overlay"),this.searchField=l()("#search-term"),this.events(),this.isOverlayOpen=!1,this.typingTimer}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),l()(document).on("keydown",this.keyPressDispatcher.bind(this)),this.searchField.on("keydown",this.typingLogic.bind(this))}typingLogic(){setTimeout((function(){console.log("This is a timeout test.")}),2e3)}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),l()("body").addClass("body-no-scroll"),console.log("our open method just ran!"),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),l()("body").removeClass("body-no-scroll"),console.log("our close method just ran!"),this.isOverlayOpen=!1}};new o,new s,new a}]);