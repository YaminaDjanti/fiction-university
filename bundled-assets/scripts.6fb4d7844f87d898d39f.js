!function(e){function t(t){for(var r,o,a=t[0],l=t[1],c=t[2],u=0,d=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(h&&h(t);d.length;)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},i={0:0},n=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var h=l;n.push([3,1]),s()}([,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(2);var r=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},i=s(1);var n=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let s=0;s<e;s++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${s}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new i.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}};var o=s(0),a=s.n(o);var l=class{constructor(){this.addSearchHTML(),this.resultsDiv=a()("#search-overlay__results"),this.openButton=a()(".js-search-trigger"),this.closeButton=a()(".search-overlay__close"),this.searchOverlay=a()(".search-overlay"),this.searchField=a()("#search-term"),this.events(),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.previousValue,this.typingTimer}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),a()(document).on("keydown",this.keyPressDispatcher.bind(this)),this.searchField.on("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisible||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),750)):(this.resultsDiv.html(""),this.isSpinnerVisible=!1)),this.previousValue=this.searchField.val()}getResults(){a.a.when(a.a.getJSON(universityData.root_url+"/wp-json/wp/v2/posts?search="+this.searchField.val()),a.a.getJSON(universityData.root_url+"/wp-json/wp/v2/pages?search="+this.searchField.val())).then((e,t)=>{var s=e[0].concat(t[0]);this.resultsDiv.html(`\n        <h2 class="search-overlay__section-title">General Information</h2>\n        ${s.length?'<ul class="link-list min-list">':"<p>No general information matches that search.</p>"}\n          ${s.map(e=>`<li><a href="${e.link}">${e.title.rendered}</a> ${"post"==e.type?"by "+e.authorName:""}</li>`).join("")}\n        ${s.length?"</ul>":""}\n      `),this.isSpinnerVisible=!1},()=>{this.resultsDiv.html("<p>Unexpected error; please try again.</p>")})}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||a()("input, textarea").is(":focus")||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),a()("body").addClass("body-no-scroll"),this.searchField.val(""),setTimeout(()=>this.searchField.focus(),301),console.log("our open method just ran!"),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),a()("body").removeClass("body-no-scroll"),console.log("our close method just ran!"),this.isOverlayOpen=!1}addSearchHTML(){a()("body").append('\n      <div class="search-overlay">\n        <div class="search-overlay__top">\n          <div class="container">\n            <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>\n            <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">\n            <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>\n          </div>\n        </div>\n        \n        <div class="container">\n          <div id="search-overlay__results"></div>\n        </div>\n\n      </div>\n    ')}};new r,new n,new l}]);