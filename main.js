!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=2)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var a=function(e){"use strict";var t,n=Object.prototype,a=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n,a){var r=t&&t.prototype instanceof f?t:f,o=Object.create(r.prototype),c=new D(a||[]);return o._invoke=function(e,t,n){var a=d;return function(r,o){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===r)throw o;return M()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=L(c,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var s=u(e,t,n);if("normal"===s.type){if(a=n.done?m:l,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",l="suspendedYield",p="executing",m="completed",h={};function f(){}function v(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&a.call(x,o)&&(y=x);var b=g.prototype=f.prototype=Object.create(y);function C(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(n,r){function o(){return new Promise((function(t,o){!function t(n,r,o,c){var i=u(e[n],e,r);if("throw"!==i.type){var s=i.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?Promise.resolve(d.__await).then((function(e){t("next",e,o,c)}),(function(e){t("throw",e,o,c)})):Promise.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,c)}))}c(i.arg)}(n,r,t,o)}))}return t=t?t.then(o,o):o()}}function L(e,n){var a=e.iterator[n.method];if(a===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(a,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function S(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,c=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return c.next=c}}return{next:M}}function M(){return{value:t,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[i]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},C(E.prototype),E.prototype[c]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,a,r){var o=new E(s(t,n,a,r));return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(b),b[i]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=S,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(a,r){return i.type="throw",i.arg=e,n.next=a,r&&(n.method="next",n.arg=t),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=a.call(c,"catchLoc"),u=a.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,a){return this.delegate={iterator:S(e),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=a}catch(e){Function("r","regeneratorRuntime = r")(a)}},function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),s="2323fe7bad0d4c678eb533cc1a1438e8",u="4266a7666407f0d9feedbba89f0ba70d",d="0aa9b5c985354925db6c2ffa8c024359e4386175c14a8fd61fa4056098487629";function l(e){var t,n,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,"&key=").concat(s)));case 2:return t=r.sent,r.next=5,i.a.awrap(t.json());case 5:return n=r.sent,r.next=8,i.a.awrap(n.results[0].geometry);case 8:return a=r.sent,r.abrupt("return",a);case 10:case"end":return r.stop()}}))}function p(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch("http://openweathermap.org/img/wn/".concat(e,"@2x.png")));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}))}function m(e,t,n){var a,r,o;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,i.a.awrap(fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,"+").concat(t,"&language=").concat(n.toLowerCase(),"&key=").concat(s)));case 2:return a=c.sent,c.next=5,i.a.awrap(a.json());case 5:return r=c.sent,c.next=8,i.a.awrap(r.results[0]);case 8:return o=c.sent,c.abrupt("return",o);case 10:case"end":return c.stop()}}))}function h(e){var t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset(),a=new Date(n+36e5*e);return n=new Date(n),a}var f=[["Sunday","Воскресенье","Нядзеля"],["Monday","Понедельник","Панядзелак"],["Tuesday","Вторник","Ауторак"],["Wednesday","Среда","Серэда"],["Thursday","Четверг","Чацверг"],["Friday","Пятница","Пятнiца"],["Saturday","Суббота","Суббота"]],v=[["January","Января","Студзеня"],["February","Февраля","Лютага"],["March","Марта","Сакавiка"],["April","Апреля","Красавiка"],["May","Мая","Мая"],["June","Июня","Червеня"],["July","Июля","Лiпеня"],["August","Августа","Жнiвеня"],["September","Сентября","Верасьня"],["October","Остября","Кастрычнiка"],["November","Ноября","Лiстапада"],["December","Декабря","Снежаня"]],g=document.createElement("section");g.className="wrapper";var y=document.createElement("div");y.className="header",g.append(y);var w=document.createElement("h1");w.setAttribute("hidden","true"),w.textContent="Fancy-weather",y.append(w);var x=document.createElement("div");x.className="switchOptions",y.append(x);var b=document.createElement("div");b.className="btnLanguage",b.classList.add("btn"),x.append(b);var C=document.createElement("div");C.className="btnUnitsTemp",C.classList.add("btn"),x.append(C);var E=document.createElement("div");E.className="btnBgImage",E.classList.add("btn"),E.classList.add("fa"),E.classList.add("fa-picture-o"),E.textContent="BG",x.append(E);var L=document.createElement("input");L.className="searchCity",L.setAttribute("type","text"),L.setAttribute("placeholder","Search City"),x.append(L);var N=document.createElement("div");N.className="btnMic",N.classList.add("btn"),N.classList.add("fa"),N.classList.add("fa-microphone"),N.textContent="MIC",x.append(N);var T=document.createElement("div");T.className="btnSearch",T.classList.add("btn"),T.textContent="Search",x.append(T);var D=document.createElement("div");D.className="main",g.append(D);var S=document.createElement("div");S.className="weather",D.appendChild(S);var M=document.createElement("div");M.className="cityCountry",S.appendChild(M);var _=document.createElement("div");_.className="city";var j=document.createElement("div");j.className="country",M.appendChild(_),M.appendChild(j);var O=document.createElement("div");O.className="dateTime",S.appendChild(O);var k=document.createElement("div");k.className="data";var A=document.createElement("div");A.className="time",O.appendChild(k),O.appendChild(A),k.textContent="data",A.textContent="Time";var F=document.createElement("div");F.className="weatherNow",S.appendChild(F);var P=document.createElement("div");P.className="degree",F.appendChild(P);var I=document.createElement("div");I.className="imgBigCloud",F.appendChild(I);var z=document.createElement("div");z.className="options",F.appendChild(z);var J=document.createElement("img");J.className="imgCurrent",z.appendChild(J);var G=document.createElement("div");G.className="summaryWeather",z.appendChild(G);var Y=document.createElement("div");Y.className="apparent",z.appendChild(Y);var q=document.createElement("div");q.className="wind",z.appendChild(q),q.textContent="wind",Y.textContent="apparent",G.textContent="summary";var H=document.createElement("div");H.className="weatherFuture",S.appendChild(H);var U=document.createElement("div");U.className="day",H.appendChild(U);var B=document.createElement("p");B.className="daysTomorrow",U.appendChild(B);var R=document.createElement("div");R.className="digreeFutureDiv",U.appendChild(R);var W=document.createElement("p");W.className="tomorrowTemperature",R.appendChild(W),W.textContent="T1";var Z=document.createElement("img");Z.classList.add("imageTomorrow"),R.appendChild(Z),(U=document.createElement("div")).className="day",H.appendChild(U);var Q=document.createElement("p");Q.className="daysAfterTomorrow",U.appendChild(Q),(R=document.createElement("div")).className="digreeFutureDiv",U.appendChild(R);var V=document.createElement("p");V.className="afterTomorrowTemperature",R.appendChild(V),V.textContent="T2";var K=document.createElement("img");K.classList.add("imageAfterTomorrow"),R.appendChild(K),(U=document.createElement("div")).className="day",H.appendChild(U);var X=document.createElement("p");X.className="daysDayAfterTomorrow",U.appendChild(X),(R=document.createElement("div")).className="digreeFutureDiv",U.appendChild(R);var $=document.createElement("p");$.className="afterTomorrowTemperature",R.appendChild($),$.textContent="T3";var ee=document.createElement("img");ee.classList.add("imageDayAfterTomorrow"),R.appendChild(ee);var te=document.createElement("div");te.className="map.Weather",D.appendChild(te);var ne=document.createElement("div");ne.className="map",ne.id="map",te.appendChild(ne);var ae=document.createElement("div");ae.className="coordinates",te.appendChild(ae);var re=document.createElement("div");re.className="latitude",ae.appendChild(re);var oe=document.createElement("div");function ce(){m(r.latitude,r.longitude,"en").then((function(e){var t,n=h(+e.annotations.timezone.offset_sec/60/60);(function(e){var t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=".concat(e,"&client_id=").concat(d)));case 2:return 200!==(t=a.sent).status&&window.console.error(t.status),a.next=6,i.a.awrap(t.json());case 6:return n=a.sent,a.abrupt("return",n);case 8:case"end":return a.stop()}}))})("".concat(function(e){return 12===e||1===e||2===e?"winter":3===e||4===e||5===e?"spring":6===e||7===e||8===e?"summer":9===e||10===e||11===e?"autumn":null}(n.getMonth()+1),", ").concat((t=n.getHours(),t>5&&t<10?"morning":t>10&&t<18?"day":t>18&&t<24?"Evening":t>0&&t<5?"night":null),", ").concat(e.components.country,", ").concat(o,", ").concat(e.components.city)).then((function(e){g.style.backgroundImage="url(".concat(e.urls.regular,")")}))}))}function ie(){m(r.latitude,r.longitude,"en").then((function(e){var t=h(+e.annotations.timezone.offset_sec/60/60);k.textContent="".concat(t.getDate()," ").concat(v[t.getMonth()][a.activeLn],", ").concat(t.getFullYear()),A.textContent="".concat(t.getHours(),":").concat(t.getMinutes()),ce()}))}function se(e,t){r.latitude=e,r.longitude=t,m(e,t,a.ln[a.activeLn]).then((function(e){j.textContent="".concat(e.components.country," ").concat(e.annotations.flag),_.textContent=e.components.city;var t=h(+e.annotations.timezone.offset_sec/60/60);k.textContent="".concat(t.getDate()," ").concat(v[t.getMonth()][a.activeLn],", ").concat(t.getFullYear()),A.textContent="".concat(t.getHours(),":").concat(t.getMinutes())})),function(e,t,n,a){var r,o,c,s;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return"°C"===n&&(r="Metric"),"°F"===n&&(r="Fahrenheit"),o="Be"===a?"RU":a,d.next=5,i.a.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=").concat(r,"&lang=").concat(o,"&appid=").concat(u)));case 5:return c=d.sent,d.next=8,i.a.awrap(c.json());case 8:return s=d.sent,d.abrupt("return",s);case 10:case"end":return d.stop()}}))}(e,t,a.temp[a.activeTemp],a.ln[a.activeLn]).then((function(n){G.textContent=n.weather[0].description,o=n.weather[0].description;var r=Math.round(1.04*n.main.temp-2.7+2*n.main.pressure/1e3-.65*n.wind.speed);Y.textContent="".concat(r,"°"),q.textContent="".concat(n.wind.speed,"m/c ").concat(n.main.humidity,"%"),P.textContent=Math.round(n.main.temp)+a.temp[a.activeTemp],p(n.weather[0].icon).then((function(e){J.setAttribute("src",e.url)})),function(e,t,n){var a,r,o;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return"°C"===n&&(a="Metric"),"°F"===n&&(a="Fahrenheit"),c.next=4,i.a.awrap(fetch("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=").concat(u)));case 4:return r=c.sent,c.next=7,i.a.awrap(r.json());case 7:return o=c.sent,c.abrupt("return",o);case 9:case"end":return c.stop()}}))}(e,t,a.temp[a.activeTemp]).then((function(e){var t=[],n=[],r=[],o=new Set,c=new Set,i=new Set,s=h(e.city.timezone/60/60),u=new Date;u.setDate(s.getDate()+1),B.textContent=f[u.getDay()][a.activeLn];var d=new Date;d.setDate(s.getDate()+2),Q.textContent=f[d.getDay()][a.activeLn];var l=new Date;l.setDate(s.getDate()+3),X.textContent=f[l.getDay()][a.activeLn],e.list.forEach((function(e){var a=new Date(1e3*e.dt);a.getDate()===u.getDate()&&(t.push(e.main.temp),o.add(e.weather[0].icon)),a.getDate()===d.getDate()&&(n.push(e.main.temp),c.add(e.weather[0].icon)),a.getDate()===l.getDate()&&(r.push(e.main.temp),i.add(e.weather[0].icon))}));var m=t.reduce((function(e,t){return e+t}))/t.length,v=n.reduce((function(e,t){return e+t}))/n.length,g=r.reduce((function(e,t){return e+t}))/r.length;W.textContent="".concat(Math.round(m),"°"),V.textContent="".concat(Math.round(v),"°"),$.textContent="".concat(Math.round(g),"°");var y=Array.from(o),w=Array.from(c),x=Array.from(i);p(y[0]).then((function(e){Z.setAttribute("src",e.url)})),p(w[0]).then((function(e){K.setAttribute("src",e.url)})),p(x[0]).then((function(e){ee.setAttribute("src",e.url)}))}))})),mapboxgl.accessToken="pk.eyJ1IjoiYWxpYWtzYW5kcmJhYnRzb3UiLCJhIjoiY2szNnp0NzlqMDZwNjNjamx0bTZnaTV3ZiJ9.1V2ALQLL3hTCd3yw6ls_HQ";var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[t,e],zoom:9}),c="name_ru";0===a.activeLn&&(c="name_en"),n.on("load",(function(){n.setLayoutProperty("country-label","text-field",["format",["get",c],{"font-scale":1.2},"\n",{},["get","name"],{"font-scale":.8,"text-font":["literal",["DIN Offc Pro Italic","Arial Unicode MS Regular"]]}])})),re.textContent="".concat(Math.round(100*e)/100," °"),oe.textContent="".concat(Math.round(100*t)/100,"°")}oe.className="longitude",ae.appendChild(oe),document.addEventListener("DOMContentLoaded",(function(){null===(a=JSON.parse(localStorage.getItem("settings")))&&(a={activeLn:0,activeTemp:0,ln:["En","Ru","Be"],temp:["°C","°F"]}),document.querySelector(".btnLanguage").innerHTML=a.ln[a.activeLn],document.querySelector(".btnUnitsTemp").innerHTML=a.temp[a.activeTemp]})),setInterval(ie,6e4),i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:(function(e){return new Promise((function(t,n){navigator.geolocation.getCurrentPosition(t,n,e)}))})().then((function(e){return{latitude:e.coords.latitude,longitude:e.coords.longitude}})).then((function(e){r=e,se(e.latitude,e.longitude),ie()})),document.body.append(g);case 4:case"end":return e.stop()}})),x.addEventListener("click",(function(e){var t=e.target.closest("div"),n=L.value;switch(t.classList[0]){case"btnBgImage":ce();break;case"btnSearch":if(""===n)break;l(n).then((function(e){se(e.lat,e.lng),ce()}));break;case"btnLanguage":a.activeLn+=1,a.activeLn>2&&(a.activeLn=0),document.querySelector(".btnLanguage").innerHTML=a.ln[a.activeLn],localStorage.setItem("settings",JSON.stringify(a)),se(r.latitude,r.longitude);break;case"btnUnitsTemp":a.activeTemp+=1,a.activeTemp>1&&(a.activeTemp=0),document.querySelector(".btnUnitsTemp").innerHTML=a.temp[a.activeTemp],localStorage.setItem("settings",JSON.stringify(a)),se(r.latitude,r.longitude)}})),document.addEventListener("keypress",(function(e){if(13===e.keyCode){var t=L.value;""!==t&&l(t).then((function(e){se(e.lat,e.lng),ce()}))}}))}]);