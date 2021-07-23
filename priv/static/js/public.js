/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mux/videojs-kit/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mux/videojs-kit/dist/index.js ***!
  \*****************************************************/
/***/ (function(module) {

(function(Wt,Xe){ true?module.exports=Xe():0})(this,function(){return(()=>{var li={477:ne=>{function re(H){if(H===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return H}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},811:(ne,re,H)=>{var M=H(470),F=H(751);function R(k,j,w){return F()?(ne.exports=R=Reflect.construct,ne.exports.default=ne.exports,ne.exports.__esModule=!0):(ne.exports=R=function(D,m,C){var P=[null];P.push.apply(P,m);var c=Function.bind.apply(D,P),A=new c;return C&&M(A,C.prototype),A},ne.exports.default=ne.exports,ne.exports.__esModule=!0),R.apply(null,arguments)}ne.exports=R,ne.exports.default=ne.exports,ne.exports.__esModule=!0},723:ne=>{function re(){return ne.exports=re=Object.assign||function(H){for(var M=1;M<arguments.length;M++){var F=arguments[M];for(var R in F)Object.prototype.hasOwnProperty.call(F,R)&&(H[R]=F[R])}return H},ne.exports.default=ne.exports,ne.exports.__esModule=!0,re.apply(this,arguments)}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},346:ne=>{function re(H){return ne.exports=re=Object.setPrototypeOf?Object.getPrototypeOf:function(F){return F.__proto__||Object.getPrototypeOf(F)},ne.exports.default=ne.exports,ne.exports.__esModule=!0,re(H)}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},324:(ne,re,H)=>{var M=H(470);function F(R,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(k&&k.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),k&&M(R,k)}ne.exports=F,ne.exports.default=ne.exports,ne.exports.__esModule=!0},743:(ne,re,H)=>{var M=H(470);function F(R,k){R.prototype=Object.create(k.prototype),R.prototype.constructor=R,M(R,k)}ne.exports=F,ne.exports.default=ne.exports,ne.exports.__esModule=!0},751:ne=>{function re(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(H){return!1}}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},372:(ne,re,H)=>{var M=H(783).default,F=H(477);function R(k,j){return j&&(M(j)==="object"||typeof j=="function")?j:F(k)}ne.exports=R,ne.exports.default=ne.exports,ne.exports.__esModule=!0},470:ne=>{function re(H,M){return ne.exports=re=Object.setPrototypeOf||function(R,k){return R.__proto__=k,R},ne.exports.default=ne.exports,ne.exports.__esModule=!0,re(H,M)}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},783:ne=>{function re(H){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(ne.exports=re=function(F){return typeof F},ne.exports.default=ne.exports,ne.exports.__esModule=!0):(ne.exports=re=function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},ne.exports.default=ne.exports,ne.exports.__esModule=!0),re(H)}ne.exports=re,ne.exports.default=ne.exports,ne.exports.__esModule=!0},444:(ne,re,H)=>{"use strict";var M=H(610),F=H(723),R=H(988);/**
 * @license
 * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
 * Copyright (c) 2014 David Björklund
 * Available under the MIT license
 * <https://github.com/kesla/parse-headers/blob/master/LICENCE>
 */var k=function(c){var A={};return c&&c.trim().split(`
`).forEach(function(L){var h=L.indexOf(":"),s=L.slice(0,h).trim().toLowerCase(),a=L.slice(h+1).trim();typeof A[s]=="undefined"?A[s]=a:Array.isArray(A[s])?A[s].push(a):A[s]=[A[s],a]}),A};ne.exports=D,ne.exports.default=D,D.XMLHttpRequest=M.XMLHttpRequest||P,D.XDomainRequest="withCredentials"in new D.XMLHttpRequest?D.XMLHttpRequest:M.XDomainRequest,j(["get","put","post","patch","head","delete"],function(c){D[c==="delete"?"del":c]=function(A,L,h){return L=O(A,L,h),L.method=c.toUpperCase(),m(L)}});function j(c,A){for(var L=0;L<c.length;L++)A(c[L])}function w(c){for(var A in c)if(c.hasOwnProperty(A))return!1;return!0}function O(c,A,L){var h=c;return R(A)?(L=A,typeof c=="string"&&(h={uri:c})):h=F({},A,{uri:c}),h.callback=L,h}function D(c,A,L){return A=O(c,A,L),m(A)}function m(c){if(typeof c.callback=="undefined")throw new Error("callback argument missing");var A=!1,L=function(x,B,N){A||(A=!0,c.callback(x,B,N))};function h(){y.readyState===4&&setTimeout(l,0)}function s(){var I=void 0;if(y.response?I=y.response:I=y.responseText||C(y),n)try{I=JSON.parse(I)}catch(x){}return I}function a(I){return clearTimeout(E),I instanceof Error||(I=new Error(""+(I||"Unknown XMLHttpRequest Error"))),I.statusCode=0,L(I,S)}function l(){if(!d){var I;clearTimeout(E),c.useXDR&&y.status===void 0?I=200:I=y.status===1223?204:y.status;var x=S,B=null;return I!==0?(x={body:s(),statusCode:I,method:_,headers:{},url:g,rawRequest:y},y.getAllResponseHeaders&&(x.headers=k(y.getAllResponseHeaders()))):B=new Error("Internal XMLHttpRequest Error"),L(B,x,x.body)}}var y=c.xhr||null;y||(c.cors||c.useXDR?y=new D.XDomainRequest:y=new D.XMLHttpRequest);var f,d,g=y.url=c.uri||c.url,_=y.method=c.method||"GET",p=c.body||c.data,u=y.headers=c.headers||{},i=!!c.sync,n=!1,E,S={body:void 0,headers:{},statusCode:0,method:_,url:g,rawRequest:y};if("json"in c&&c.json!==!1&&(n=!0,u.accept||u.Accept||(u.Accept="application/json"),_!=="GET"&&_!=="HEAD"&&(u["content-type"]||u["Content-Type"]||(u["Content-Type"]="application/json"),p=JSON.stringify(c.json===!0?p:c.json))),y.onreadystatechange=h,y.onload=l,y.onerror=a,y.onprogress=function(){},y.onabort=function(){d=!0},y.ontimeout=a,y.open(_,g,!i,c.username,c.password),i||(y.withCredentials=!!c.withCredentials),!i&&c.timeout>0&&(E=setTimeout(function(){if(!d){d=!0,y.abort("timeout");var I=new Error("XMLHttpRequest timeout");I.code="ETIMEDOUT",a(I)}},c.timeout)),y.setRequestHeader)for(f in u)u.hasOwnProperty(f)&&y.setRequestHeader(f,u[f]);else if(c.headers&&!w(c.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in c&&(y.responseType=c.responseType),"beforeSend"in c&&typeof c.beforeSend=="function"&&c.beforeSend(y),y.send(p||null),y}function C(c){try{if(c.responseType==="document")return c.responseXML;var A=c.responseXML&&c.responseXML.documentElement.nodeName==="parsererror";if(c.responseType===""&&!A)return c.responseXML}catch(L){}return null}function P(){}},610:(ne,re,H)=>{var M;typeof window!="undefined"?M=window:typeof H.g!="undefined"?M=H.g:typeof self!="undefined"?M=self:M={},ne.exports=M},675:(ne,re,H)=>{var M=typeof H.g!="undefined"?H.g:typeof window!="undefined"?window:{},F=H(893),R;typeof document!="undefined"?R=document:(R=M["__GLOBAL_DOCUMENT_CACHE@4"],R||(R=M["__GLOBAL_DOCUMENT_CACHE@4"]=F)),ne.exports=R},697:(ne,re,H)=>{var M;typeof window!="undefined"?M=window:typeof H.g!="undefined"?M=H.g:typeof self!="undefined"?M=self:M={},ne.exports=M},199:function(ne){typeof window!="undefined"&&function(H,M){ne.exports=M()}(this,function(){return function(re){var H={};function M(F){if(H[F])return H[F].exports;var R=H[F]={i:F,l:!1,exports:{}};return re[F].call(R.exports,R,R.exports,M),R.l=!0,R.exports}return M.m=re,M.c=H,M.d=function(F,R,k){M.o(F,R)||Object.defineProperty(F,R,{enumerable:!0,get:k})},M.r=function(F){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(F,"__esModule",{value:!0})},M.t=function(F,R){if(R&1&&(F=M(F)),R&8||R&4&&typeof F=="object"&&F&&F.__esModule)return F;var k=Object.create(null);if(M.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:F}),R&2&&typeof F!="string")for(var j in F)M.d(k,j,function(w){return F[w]}.bind(null,j));return k},M.n=function(F){var R=F&&F.__esModule?function(){return F.default}:function(){return F};return M.d(R,"a",R),R},M.o=function(F,R){return Object.prototype.hasOwnProperty.call(F,R)},M.p="/dist/",M(M.s="./src/hls.ts")}({"./node_modules/eventemitter3/index.js":function(re,H,M){"use strict";var F=Object.prototype.hasOwnProperty,R="~";function k(){}Object.create&&(k.prototype=Object.create(null),new k().__proto__||(R=!1));function j(m,C,P){this.fn=m,this.context=C,this.once=P||!1}function w(m,C,P,c,A){if(typeof P!="function")throw new TypeError("The listener must be a function");var L=new j(P,c||m,A),h=R?R+C:C;return m._events[h]?m._events[h].fn?m._events[h]=[m._events[h],L]:m._events[h].push(L):(m._events[h]=L,m._eventsCount++),m}function O(m,C){--m._eventsCount==0?m._events=new k:delete m._events[C]}function D(){this._events=new k,this._eventsCount=0}D.prototype.eventNames=function(){var C=[],P,c;if(this._eventsCount===0)return C;for(c in P=this._events)F.call(P,c)&&C.push(R?c.slice(1):c);return Object.getOwnPropertySymbols?C.concat(Object.getOwnPropertySymbols(P)):C},D.prototype.listeners=function(C){var P=R?R+C:C,c=this._events[P];if(!c)return[];if(c.fn)return[c.fn];for(var A=0,L=c.length,h=new Array(L);A<L;A++)h[A]=c[A].fn;return h},D.prototype.listenerCount=function(C){var P=R?R+C:C,c=this._events[P];return c?c.fn?1:c.length:0},D.prototype.emit=function(C,P,c,A,L,h){var s=R?R+C:C;if(!this._events[s])return!1;var a=this._events[s],l=arguments.length,y,f;if(a.fn){switch(a.once&&this.removeListener(C,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,P),!0;case 3:return a.fn.call(a.context,P,c),!0;case 4:return a.fn.call(a.context,P,c,A),!0;case 5:return a.fn.call(a.context,P,c,A,L),!0;case 6:return a.fn.call(a.context,P,c,A,L,h),!0}for(f=1,y=new Array(l-1);f<l;f++)y[f-1]=arguments[f];a.fn.apply(a.context,y)}else{var d=a.length,g;for(f=0;f<d;f++)switch(a[f].once&&this.removeListener(C,a[f].fn,void 0,!0),l){case 1:a[f].fn.call(a[f].context);break;case 2:a[f].fn.call(a[f].context,P);break;case 3:a[f].fn.call(a[f].context,P,c);break;case 4:a[f].fn.call(a[f].context,P,c,A);break;default:if(!y)for(g=1,y=new Array(l-1);g<l;g++)y[g-1]=arguments[g];a[f].fn.apply(a[f].context,y)}}return!0},D.prototype.on=function(C,P,c){return w(this,C,P,c,!1)},D.prototype.once=function(C,P,c){return w(this,C,P,c,!0)},D.prototype.removeListener=function(C,P,c,A){var L=R?R+C:C;if(!this._events[L])return this;if(!P)return O(this,L),this;var h=this._events[L];if(h.fn)h.fn===P&&(!A||h.once)&&(!c||h.context===c)&&O(this,L);else{for(var s=0,a=[],l=h.length;s<l;s++)(h[s].fn!==P||A&&!h[s].once||c&&h[s].context!==c)&&a.push(h[s]);a.length?this._events[L]=a.length===1?a[0]:a:O(this,L)}return this},D.prototype.removeAllListeners=function(C){var P;return C?(P=R?R+C:C,this._events[P]&&O(this,P)):(this._events=new k,this._eventsCount=0),this},D.prototype.off=D.prototype.removeListener,D.prototype.addListener=D.prototype.on,D.prefixed=R,D.EventEmitter=D,re.exports=D},"./node_modules/url-toolkit/src/url-toolkit.js":function(re,H,M){(function(F){var R=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,k=/^([^\/?#]*)([^]*)$/,j=/(?:\/|^)\.(?=\/)/g,w=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,O={buildAbsoluteURL:function(D,m,C){if(C=C||{},D=D.trim(),m=m.trim(),!m){if(!C.alwaysNormalize)return D;var P=O.parseURL(D);if(!P)throw new Error("Error trying to parse base URL.");return P.path=O.normalizePath(P.path),O.buildURLFromParts(P)}var c=O.parseURL(m);if(!c)throw new Error("Error trying to parse relative URL.");if(c.scheme)return C.alwaysNormalize?(c.path=O.normalizePath(c.path),O.buildURLFromParts(c)):m;var A=O.parseURL(D);if(!A)throw new Error("Error trying to parse base URL.");if(!A.netLoc&&A.path&&A.path[0]!=="/"){var L=k.exec(A.path);A.netLoc=L[1],A.path=L[2]}A.netLoc&&!A.path&&(A.path="/");var h={scheme:A.scheme,netLoc:c.netLoc,path:null,params:c.params,query:c.query,fragment:c.fragment};if(!c.netLoc&&(h.netLoc=A.netLoc,c.path[0]!=="/"))if(!c.path)h.path=A.path,c.params||(h.params=A.params,c.query||(h.query=A.query));else{var s=A.path,a=s.substring(0,s.lastIndexOf("/")+1)+c.path;h.path=O.normalizePath(a)}return h.path===null&&(h.path=C.alwaysNormalize?O.normalizePath(c.path):c.path),O.buildURLFromParts(h)},parseURL:function(D){var m=R.exec(D);return m?{scheme:m[1]||"",netLoc:m[2]||"",path:m[3]||"",params:m[4]||"",query:m[5]||"",fragment:m[6]||""}:null},normalizePath:function(D){for(D=D.split("").reverse().join("").replace(j,"");D.length!==(D=D.replace(w,"")).length;);return D.split("").reverse().join("")},buildURLFromParts:function(D){return D.scheme+D.netLoc+D.path+D.params+D.query+D.fragment}};re.exports=O})(this)},"./node_modules/webworkify-webpack/index.js":function(re,H,M){function F(C){var P={};function c(L){if(P[L])return P[L].exports;var h=P[L]={i:L,l:!1,exports:{}};return C[L].call(h.exports,h,h.exports,c),h.l=!0,h.exports}c.m=C,c.c=P,c.i=function(L){return L},c.d=function(L,h,s){c.o(L,h)||Object.defineProperty(L,h,{configurable:!1,enumerable:!0,get:s})},c.r=function(L){Object.defineProperty(L,"__esModule",{value:!0})},c.n=function(L){var h=L&&L.__esModule?function(){return L.default}:function(){return L};return c.d(h,"a",h),h},c.o=function(L,h){return Object.prototype.hasOwnProperty.call(L,h)},c.p="/",c.oe=function(L){throw console.error(L),L};var A=c(c.s=ENTRY_MODULE);return A.default||A}var R="[\\.|\\-|\\+|\\w|/|@]+",k="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+R+").*?\\)";function j(C){return(C+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function w(C){return!isNaN(1*C)}function O(C,P,c){var A={};A[c]=[];var L=P.toString(),h=L.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!h)return A;for(var s=h[1],a=new RegExp("(\\\\n|\\W)"+j(s)+k,"g"),l;l=a.exec(L);)l[3]!=="dll-reference"&&A[c].push(l[3]);for(a=new RegExp("\\("+j(s)+'\\("(dll-reference\\s('+R+'))"\\)\\)'+k,"g");l=a.exec(L);)C[l[2]]||(A[c].push(l[1]),C[l[2]]=M(l[1]).m),A[l[2]]=A[l[2]]||[],A[l[2]].push(l[4]);for(var y=Object.keys(A),f=0;f<y.length;f++)for(var d=0;d<A[y[f]].length;d++)w(A[y[f]][d])&&(A[y[f]][d]=1*A[y[f]][d]);return A}function D(C){var P=Object.keys(C);return P.reduce(function(c,A){return c||C[A].length>0},!1)}function m(C,P){for(var c={main:[P]},A={main:[]},L={main:{}};D(c);)for(var h=Object.keys(c),s=0;s<h.length;s++){var a=h[s],l=c[a],y=l.pop();if(L[a]=L[a]||{},!(L[a][y]||!C[a][y])){L[a][y]=!0,A[a]=A[a]||[],A[a].push(y);for(var f=O(C,C[a][y],a),d=Object.keys(f),g=0;g<d.length;g++)c[d[g]]=c[d[g]]||[],c[d[g]]=c[d[g]].concat(f[d[g]])}}return A}re.exports=function(C,P){P=P||{};var c={main:M.m},A=P.all?{main:Object.keys(c.main)}:m(c,C),L="";Object.keys(A).filter(function(y){return y!=="main"}).forEach(function(y){for(var f=0;A[y][f];)f++;A[y].push(f),c[y][f]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",L=L+"var "+y+" = ("+F.toString().replace("ENTRY_MODULE",JSON.stringify(f))+")({"+A[y].map(function(d){return""+JSON.stringify(d)+": "+c[y][d].toString()}).join(",")+`});
`}),L=L+"new (("+F.toString().replace("ENTRY_MODULE",JSON.stringify(C))+")({"+A.main.map(function(y){return""+JSON.stringify(y)+": "+c.main[y].toString()}).join(",")+"}))(self);";var h=new window.Blob([L],{type:"text/javascript"});if(P.bare)return h;var s=window.URL||window.webkitURL||window.mozURL||window.msURL,a=s.createObjectURL(h),l=new window.Worker(a);return l.objectURL=a,l}},"./src/config.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"hlsDefaultConfig",function(){return d}),M.d(H,"mergeConfig",function(){return _}),M.d(H,"enableStreamingMode",function(){return p});var F=M("./src/controller/abr-controller.ts"),R=M("./src/controller/audio-stream-controller.ts"),k=M("./src/controller/audio-track-controller.ts"),j=M("./src/controller/subtitle-stream-controller.ts"),w=M("./src/controller/subtitle-track-controller.ts"),O=M("./src/controller/buffer-controller.ts"),D=M("./src/controller/timeline-controller.ts"),m=M("./src/controller/cap-level-controller.ts"),C=M("./src/controller/fps-controller.ts"),P=M("./src/controller/eme-controller.ts"),c=M("./src/utils/xhr-loader.ts"),A=M("./src/utils/fetch-loader.ts"),L=M("./src/utils/cues.ts"),h=M("./src/utils/mediakeys-helper.ts"),s=M("./src/utils/logger.ts");function a(){return a=Object.assign||function(u){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var E in n)Object.prototype.hasOwnProperty.call(n,E)&&(u[E]=n[E])}return u},a.apply(this,arguments)}function l(u,i){var n=Object.keys(u);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(u);i&&(E=E.filter(function(S){return Object.getOwnPropertyDescriptor(u,S).enumerable})),n.push.apply(n,E)}return n}function y(u){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?l(Object(n),!0).forEach(function(E){f(u,E,n[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(E){Object.defineProperty(u,E,Object.getOwnPropertyDescriptor(n,E))})}return u}function f(u,i,n){return i in u?Object.defineProperty(u,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):u[i]=n,u}var d=y(y({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:Infinity,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:Infinity,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:c.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:F.default,bufferController:O.default,capLevelController:m.default,fpsController:C.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:h.requestMediaKeySystemAccess,testBandwidth:!0,progressive:!1,lowLatencyMode:!0},g()),{},{subtitleStreamController:j.SubtitleStreamController,subtitleTrackController:w.default,timelineController:D.TimelineController,audioStreamController:R.default,audioTrackController:k.default,emeController:P.default});function g(){return{cueHandler:L.default,enableCEA708Captions:!0,enableWebVTT:!0,enableIMSC1:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function _(u,i){if((i.liveSyncDurationCount||i.liveMaxLatencyDurationCount)&&(i.liveSyncDuration||i.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(i.liveMaxLatencyDurationCount!==void 0&&(i.liveSyncDurationCount===void 0||i.liveMaxLatencyDurationCount<=i.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(i.liveMaxLatencyDuration!==void 0&&(i.liveSyncDuration===void 0||i.liveMaxLatencyDuration<=i.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return a({},u,i)}function p(u){var i=u.loader;if(i!==A.default&&i!==c.default)s.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),u.progressive=!1;else{var n=Object(A.fetchSupported)();n&&(u.loader=A.default,u.progressive=!0,u.enableSoftwareAES=!0,s.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))}}},"./src/controller/abr-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/polyfills/number.ts"),R=M("./src/utils/ewma-bandwidth-estimator.ts"),k=M("./src/events.ts"),j=M("./src/utils/buffer-helper.ts"),w=M("./src/errors.ts"),O=M("./src/types/loader.ts"),D=M("./src/utils/logger.ts");function m(c,A){for(var L=0;L<A.length;L++){var h=A[L];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}function C(c,A,L){return A&&m(c.prototype,A),L&&m(c,L),c}var P=function(){function c(L){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=L;var h=L.config;this.bwEstimator=new R.default(h.abrEwmaSlowVoD,h.abrEwmaFastVoD,h.abrEwmaDefaultEstimate),this.registerListeners()}var A=c.prototype;return A.registerListeners=function(){var h=this.hls;h.on(k.Events.FRAG_LOADING,this.onFragLoading,this),h.on(k.Events.FRAG_LOADED,this.onFragLoaded,this),h.on(k.Events.FRAG_BUFFERED,this.onFragBuffered,this),h.on(k.Events.LEVEL_LOADED,this.onLevelLoaded,this),h.on(k.Events.ERROR,this.onError,this)},A.unregisterListeners=function(){var h=this.hls;h.off(k.Events.FRAG_LOADING,this.onFragLoading,this),h.off(k.Events.FRAG_LOADED,this.onFragLoaded,this),h.off(k.Events.FRAG_BUFFERED,this.onFragBuffered,this),h.off(k.Events.LEVEL_LOADED,this.onLevelLoaded,this),h.off(k.Events.ERROR,this.onError,this)},A.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},A.onFragLoading=function(h,s){var a=s.frag;if(a.type===O.PlaylistLevelType.MAIN&&!this.timer){var l;this.fragCurrent=a,this.partCurrent=(l=s.part)!=null?l:null,this.timer=self.setInterval(this.onCheck,100)}},A.onLevelLoaded=function(h,s){var a=this.hls.config;s.details.live?this.bwEstimator.update(a.abrEwmaSlowLive,a.abrEwmaFastLive):this.bwEstimator.update(a.abrEwmaSlowVoD,a.abrEwmaFastVoD)},A._abandonRulesCheck=function(){var h=this.fragCurrent,s=this.partCurrent,a=this.hls,l=a.autoLevelEnabled,y=a.config,f=a.media;if(!(!h||!f)){var d=s?s.stats:h.stats,g=s?s.duration:h.duration;if(d.aborted){D.logger.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),this._nextAutoLevel=-1;return}if(!(!l||f.paused||!f.playbackRate||!f.readyState)){var _=performance.now()-d.loading.start,p=Math.abs(f.playbackRate);if(!(_<=500*g/p)){var u=a.levels,i=a.minAutoLevel,n=u[h.level],E=d.total||Math.max(d.loaded,Math.round(g*n.maxBitrate/8)),S=Math.max(1,d.bwEstimate?d.bwEstimate/8:d.loaded*1e3/_),I=(E-d.loaded)/S,x=f.currentTime,B=(j.BufferHelper.bufferInfo(f,x,y.maxBufferHole).end-x)/p;if(!(B>=2*g/p||I<=B)){var N=Number.POSITIVE_INFINITY,K;for(K=h.level-1;K>i;K--){var W=u[K].maxBitrate;if(N=g*W/(8*.8*S),N<B)break}if(!(N>=I)){var G=this.bwEstimator.getEstimate();D.logger.warn("Fragment "+h.sn+(s?" part "+s.index:"")+" of level "+h.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+K+`
      Current BW estimate: `+(Object(F.isFiniteNumber)(G)?(G/1024).toFixed(3):"Unknown")+` Kb/s
      Estimated load time for current fragment: `+I.toFixed(3)+` s
      Estimated load time for the next fragment: `+N.toFixed(3)+` s
      Time to underbuffer: `+B.toFixed(3)+" s"),a.nextLoadLevel=K,this.bwEstimator.sample(_,d.loaded),this.clearTimer(),h.loader&&(this.fragCurrent=this.partCurrent=null,h.loader.abort()),a.trigger(k.Events.FRAG_LOAD_EMERGENCY_ABORTED,{frag:h,part:s,stats:d})}}}}}},A.onFragLoaded=function(h,s){var a=s.frag,l=s.part;if(a.type===O.PlaylistLevelType.MAIN&&Object(F.isFiniteNumber)(a.sn)){var y=l?l.stats:a.stats,f=l?l.duration:a.duration;if(this.clearTimer(),this.lastLoadedFragLevel=a.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var d=this.hls.levels[a.level],g=(d.loaded?d.loaded.bytes:0)+y.loaded,_=(d.loaded?d.loaded.duration:0)+f;d.loaded={bytes:g,duration:_},d.realBitrate=Math.round(8*g/_)}if(a.bitrateTest){var p={stats:y,frag:a,part:l,id:a.type};this.onFragBuffered(k.Events.FRAG_BUFFERED,p),a.bitrateTest=!1}}},A.onFragBuffered=function(h,s){var a=s.frag,l=s.part,y=l?l.stats:a.stats;if(!y.aborted&&!(a.type!==O.PlaylistLevelType.MAIN||a.sn==="initSegment")){var f=y.parsing.end-y.loading.start;this.bwEstimator.sample(f,y.loaded),y.bwEstimate=this.bwEstimator.getEstimate(),a.bitrateTest?this.bitrateTestDelay=f/1e3:this.bitrateTestDelay=0}},A.onError=function(h,s){switch(s.details){case w.ErrorDetails.FRAG_LOAD_ERROR:case w.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer();break;default:break}},A.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},A.getNextABRAutoLevel=function(){var h=this.fragCurrent,s=this.partCurrent,a=this.hls,l=a.maxAutoLevel,y=a.config,f=a.minAutoLevel,d=a.media,g=s?s.duration:h?h.duration:0,_=d?d.currentTime:0,p=d&&d.playbackRate!==0?Math.abs(d.playbackRate):1,u=this.bwEstimator?this.bwEstimator.getEstimate():y.abrEwmaDefaultEstimate,i=(j.BufferHelper.bufferInfo(d,_,y.maxBufferHole).end-_)/p,n=this.findBestLevel(u,f,l,i,y.abrBandWidthFactor,y.abrBandWidthUpFactor);if(n>=0)return n;D.logger.trace((i?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var E=g?Math.min(g,y.maxStarvationDelay):y.maxStarvationDelay,S=y.abrBandWidthFactor,I=y.abrBandWidthUpFactor;if(!i){var x=this.bitrateTestDelay;if(x){var B=g?Math.min(g,y.maxLoadingDelay):y.maxLoadingDelay;E=B-x,D.logger.trace("bitrate test took "+Math.round(1e3*x)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*E)+" ms"),S=I=1}}return n=this.findBestLevel(u,f,l,i+E,S,I),Math.max(n,0)},A.findBestLevel=function(h,s,a,l,y,f){for(var d,g=this.fragCurrent,_=this.partCurrent,p=this.lastLoadedFragLevel,u=this.hls.levels,i=u[p],n=!!(i!=null&&(d=i.details)!==null&&d!==void 0&&d.live),E=i==null?void 0:i.codecSet,S=_?_.duration:g?g.duration:0,I=a;I>=s;I--){var x=u[I];if(!(!x||E&&x.codecSet!==E)){var B=x.details,N=(_?B==null?void 0:B.partTarget:B==null?void 0:B.averagetargetduration)||S,K=void 0;I<=p?K=y*h:K=f*h;var W=u[I].maxBitrate,G=W*N/K;if(D.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+I+"/"+Math.round(K)+"/"+W+"/"+N+"/"+l+"/"+G),K>W&&(!G||n&&!this.bitrateTestDelay||G<l))return I}}return-1},C(c,[{key:"nextAutoLevel",get:function(){var h=this._nextAutoLevel,s=this.bwEstimator;if(h!==-1&&(!s||!s.canEstimate()))return h;var a=this.getNextABRAutoLevel();return h!==-1&&(a=Math.min(h,a)),a},set:function(h){this._nextAutoLevel=h}}]),c}();H.default=P},"./src/controller/audio-stream-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/polyfills/number.ts"),R=M("./src/controller/base-stream-controller.ts"),k=M("./src/events.ts"),j=M("./src/utils/buffer-helper.ts"),w=M("./src/controller/fragment-tracker.ts"),O=M("./src/types/level.ts"),D=M("./src/types/loader.ts"),m=M("./src/loader/fragment.ts"),C=M("./src/demux/chunk-cache.ts"),P=M("./src/demux/transmuxer-interface.ts"),c=M("./src/types/transmuxer.ts"),A=M("./src/controller/fragment-finders.ts"),L=M("./src/utils/discontinuities.ts"),h=M("./src/errors.ts"),s=M("./src/utils/logger.ts");function a(){return a=Object.assign||function(g){for(var _=1;_<arguments.length;_++){var p=arguments[_];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(g[u]=p[u])}return g},a.apply(this,arguments)}function l(g,_){g.prototype=Object.create(_.prototype),g.prototype.constructor=g,y(g,_)}function y(g,_){return y=Object.setPrototypeOf||function(u,i){return u.__proto__=i,u},y(g,_)}var f=100,d=function(g){l(_,g);function _(u,i){var n;return n=g.call(this,u,i,"[audio-stream-controller]")||this,n.videoBuffer=null,n.videoTrackCC=-1,n.waitingVideoCC=-1,n.audioSwitch=!1,n.trackId=-1,n.waitingData=null,n.mainDetails=null,n.bufferFlushed=!1,n._registerListeners(),n}var p=_.prototype;return p.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},p._registerListeners=function(){var i=this.hls;i.on(k.Events.MEDIA_ATTACHED,this.onMediaAttached,this),i.on(k.Events.MEDIA_DETACHING,this.onMediaDetaching,this),i.on(k.Events.MANIFEST_LOADING,this.onManifestLoading,this),i.on(k.Events.LEVEL_LOADED,this.onLevelLoaded,this),i.on(k.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),i.on(k.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),i.on(k.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),i.on(k.Events.ERROR,this.onError,this),i.on(k.Events.BUFFER_RESET,this.onBufferReset,this),i.on(k.Events.BUFFER_CREATED,this.onBufferCreated,this),i.on(k.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),i.on(k.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),i.on(k.Events.FRAG_BUFFERED,this.onFragBuffered,this)},p._unregisterListeners=function(){var i=this.hls;i.off(k.Events.MEDIA_ATTACHED,this.onMediaAttached,this),i.off(k.Events.MEDIA_DETACHING,this.onMediaDetaching,this),i.off(k.Events.MANIFEST_LOADING,this.onManifestLoading,this),i.off(k.Events.LEVEL_LOADED,this.onLevelLoaded,this),i.off(k.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),i.off(k.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),i.off(k.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),i.off(k.Events.ERROR,this.onError,this),i.off(k.Events.BUFFER_RESET,this.onBufferReset,this),i.off(k.Events.BUFFER_CREATED,this.onBufferCreated,this),i.off(k.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),i.off(k.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),i.off(k.Events.FRAG_BUFFERED,this.onFragBuffered,this)},p.onInitPtsFound=function(i,n){var E=n.frag,S=n.id,I=n.initPTS;if(S==="main"){var x=E.cc;this.initPTS[E.cc]=I,this.log("InitPTS for cc: "+x+" found from main: "+I),this.videoTrackCC=x,this.state===R.State.WAITING_INIT_PTS&&this.tick()}},p.startLoad=function(i){if(!this.levels){this.startPosition=i,this.state=R.State.STOPPED;return}var n=this.lastCurrentTime;this.stopLoad(),this.setInterval(f),this.fragLoadError=0,n>0&&i===-1?(this.log("Override startPosition with lastCurrentTime @"+n.toFixed(3)),this.state=R.State.IDLE):(this.loadedmetadata=!1,this.state=R.State.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=i,this.tick()},p.doTick=function(){switch(this.state){case R.State.IDLE:this.doTickIdle();break;case R.State.WAITING_TRACK:{var i,n=this.levels,E=this.trackId,S=n==null||(i=n[E])===null||i===void 0?void 0:i.details;if(S){if(this.waitForCdnTuneIn(S))break;this.state=R.State.WAITING_INIT_PTS}break}case R.State.FRAG_LOADING_WAITING_RETRY:{var I,x=performance.now(),B=this.retryDate;(!B||x>=B||(I=this.media)!==null&&I!==void 0&&I.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.state=R.State.IDLE);break}case R.State.WAITING_INIT_PTS:{var N=this.waitingData;if(N){var K=N.frag,W=N.part,G=N.cache,V=N.complete;if(this.initPTS[K.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=R.State.FRAG_LOADING;var X=G.flush(),Z={frag:K,part:W,payload:X,networkDetails:null};this._handleFragmentLoadProgress(Z),V&&g.prototype._handleFragmentLoadComplete.call(this,Z)}else if(this.videoTrackCC!==this.waitingVideoCC)s.logger.log("Waiting fragment cc ("+K.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var q=this.getLoadPosition(),J=j.BufferHelper.bufferInfo(this.mediaBuffer,q,this.config.maxBufferHole),ee=Object(A.fragmentWithinToleranceTest)(J.end,this.config.maxFragLookUpTolerance,K);ee<0&&(s.logger.log("Waiting fragment cc ("+K.cc+") @ "+K.start+" cancelled because another fragment at "+J.end+" is needed"),this.clearWaitingFragment())}}else this.state=R.State.IDLE}}this.onTickEnd()},p.clearWaitingFragment=function(){var i=this.waitingData;i&&(this.fragmentTracker.removeFragment(i.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=R.State.IDLE)},p.onTickEnd=function(){var i=this.media;if(!(!i||!i.readyState)){var n=this.mediaBuffer?this.mediaBuffer:i,E=n.buffered;!this.loadedmetadata&&E.length&&(this.loadedmetadata=!0),this.lastCurrentTime=i.currentTime}},p.doTickIdle=function(){var i,n,E=this.hls,S=this.levels,I=this.media,x=this.trackId,B=E.config;if(!(!S||!S[x])&&!(!I&&(this.startFragRequested||!B.startFragPrefetch))){var N=S[x],K=N.details;if(!K||K.live&&this.levelLastLoaded!==x||this.waitForCdnTuneIn(K)){this.state=R.State.WAITING_TRACK;return}this.bufferFlushed&&(this.bufferFlushed=!1,this.afterBufferFlushed(this.mediaBuffer?this.mediaBuffer:this.media,m.ElementaryStreamTypes.AUDIO,D.PlaylistLevelType.AUDIO));var W=this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,D.PlaylistLevelType.AUDIO);if(W!==null){var G=W.len,V=this.getMaxBufferLength(),X=this.audioSwitch;if(!(G>=V&&!X)){if(!X&&this._streamEnded(W,K)){E.trigger(k.Events.BUFFER_EOS,{type:"audio"}),this.state=R.State.ENDED;return}var Z=K.fragments,q=Z[0].start,J=W.end;if(X){var ee=this.getLoadPosition();J=ee,K.PTSKnown&&ee<q&&(W.end>q||W.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),I.currentTime=q+.05)}var ie=this.getNextFragment(J,K);if(!ie){this.bufferFlushed=!0;return}((i=ie.decryptdata)===null||i===void 0?void 0:i.keyFormat)==="identity"&&!((n=ie.decryptdata)!==null&&n!==void 0&&n.key)?this.loadKey(ie,K):this.loadFragment(ie,K,J)}}}},p.getMaxBufferLength=function(){var i=g.prototype.getMaxBufferLength.call(this),n=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,D.PlaylistLevelType.MAIN);return n===null?i:Math.max(i,n.len)},p.onMediaDetaching=function(){this.videoBuffer=null,g.prototype.onMediaDetaching.call(this)},p.onAudioTracksUpdated=function(i,n){var E=n.audioTracks;this.resetTransmuxer(),this.levels=E.map(function(S){return new O.Level(S)})},p.onAudioTrackSwitching=function(i,n){var E=!!n.url;this.trackId=n.id;var S=this.fragCurrent;S!=null&&S.loader&&S.loader.abort(),this.fragCurrent=null,this.clearWaitingFragment(),E?this.setInterval(f):this.resetTransmuxer(),E?(this.audioSwitch=!0,this.state=R.State.IDLE):this.state=R.State.STOPPED,this.tick()},p.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},p.onLevelLoaded=function(i,n){this.mainDetails=n.details},p.onAudioTrackLoaded=function(i,n){var E,S=this.levels,I=n.details,x=n.id;if(!S){this.warn("Audio tracks were reset while loading level "+x);return}this.log("Track "+x+" loaded ["+I.startSN+","+I.endSN+"],duration:"+I.totalduration);var B=S[x],N=0;if(I.live||(E=B.details)!==null&&E!==void 0&&E.live){var K=this.mainDetails;if(I.fragments[0]||(I.deltaUpdateFailed=!0),I.deltaUpdateFailed||!K)return;!B.details&&I.hasProgramDateTime&&K.hasProgramDateTime?(Object(L.alignPDT)(I,K),N=I.fragments[0].start):N=this.alignPlaylists(I,B.details)}B.details=I,this.levelLastLoaded=x,!this.startFragRequested&&(this.mainDetails||!I.live)&&this.setStartPosition(B.details,N),this.state===R.State.WAITING_TRACK&&!this.waitForCdnTuneIn(I)&&(this.state=R.State.IDLE),this.tick()},p._handleFragmentLoadProgress=function(i){var n,E=i.frag,S=i.part,I=i.payload,x=this.config,B=this.trackId,N=this.levels;if(!N){this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+E.sn+" of level "+E.level+" will not be buffered");return}var K=N[B];console.assert(K,"Audio track is defined on fragment load progress");var W=K.details;console.assert(W,"Audio track details are defined on fragment load progress");var G=x.defaultAudioCodec||K.audioCodec||"mp4a.40.2",V=this.transmuxer;V||(V=this.transmuxer=new P.default(this.hls,D.PlaylistLevelType.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var X=this.initPTS[E.cc],Z=(n=E.initSegment)===null||n===void 0?void 0:n.data;if(X!==void 0){var q=!1,J=S?S.index:-1,ee=J!==-1,ie=new c.ChunkMetadata(E.level,E.sn,E.stats.chunkCount,I.byteLength,J,ee);V.push(I,Z,G,"",E,S,W.totalduration,q,ie,X)}else{s.logger.log("Unknown video PTS for cc "+E.cc+", waiting for video PTS before demuxing audio frag "+E.sn+" of ["+W.startSN+" ,"+W.endSN+"],track "+B);var oe=this.waitingData=this.waitingData||{frag:E,part:S,cache:new C.default,complete:!1},le=oe.cache;le.push(new Uint8Array(I)),this.waitingVideoCC=this.videoTrackCC,this.state=R.State.WAITING_INIT_PTS}},p._handleFragmentLoadComplete=function(i){if(this.waitingData){this.waitingData.complete=!0;return}g.prototype._handleFragmentLoadComplete.call(this,i)},p.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},p.onBufferCreated=function(i,n){var E=n.tracks.audio;E&&(this.mediaBuffer=E.buffer),n.tracks.video&&(this.videoBuffer=n.tracks.video.buffer)},p.onFragBuffered=function(i,n){var E=n.frag,S=n.part;if(E.type===D.PlaylistLevelType.AUDIO){if(this.fragContextChanged(E)){this.warn("Fragment "+E.sn+(S?" p: "+S.index:"")+" of level "+E.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch);return}E.sn!=="initSegment"&&(this.fragPrevious=E,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger(k.Events.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(E,S)}},p.onError=function(i,n){switch(n.details){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(D.PlaylistLevelType.AUDIO,n);break;case h.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case h.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==R.State.ERROR&&this.state!==R.State.STOPPED&&(this.state=n.fatal?R.State.ERROR:R.State.IDLE,this.warn(n.details+" while loading frag, switching to "+this.state+" state"));break;case h.ErrorDetails.BUFFER_FULL_ERROR:if(n.parent==="audio"&&(this.state===R.State.PARSING||this.state===R.State.PARSED)){var E=!0,S=this.getFwdBufferInfo(this.mediaBuffer,D.PlaylistLevelType.AUDIO);S&&S.len>.5&&(E=!this.reduceMaxBufferLength(S.len)),E&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,g.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}break;default:break}},p.onBufferFlushed=function(i,n){var E=n.type;E===m.ElementaryStreamTypes.AUDIO&&(this.bufferFlushed=!0)},p._handleTransmuxComplete=function(i){var n,E="audio",S=this.hls,I=i.remuxResult,x=i.chunkMeta,B=this.getCurrentContext(x);if(!B){this.warn("The loading context changed while buffering fragment "+x.sn+" of level "+x.level+". This chunk will not be buffered."),this.resetLiveStartWhenNotLoaded(x.level);return}var N=B.frag,K=B.part,W=I.audio,G=I.text,V=I.id3,X=I.initSegment;if(!this.fragContextChanged(N)){if(this.state=R.State.PARSING,this.audioSwitch&&W&&this.completeAudioSwitch(),X!=null&&X.tracks&&(this._bufferInitSegment(X.tracks,N,x),S.trigger(k.Events.FRAG_PARSING_INIT_SEGMENT,{frag:N,id:E,tracks:X.tracks})),W){var Z=W.startPTS,q=W.endPTS,J=W.startDTS,ee=W.endDTS;K&&(K.elementaryStreams[m.ElementaryStreamTypes.AUDIO]={startPTS:Z,endPTS:q,startDTS:J,endDTS:ee}),N.setElementaryStreamInfo(m.ElementaryStreamTypes.AUDIO,Z,q,J,ee),this.bufferFragmentData(W,N,K,x)}if(V!=null&&(n=V.samples)!==null&&n!==void 0&&n.length){var ie=a({frag:N,id:E},V);S.trigger(k.Events.FRAG_PARSING_METADATA,ie)}if(G){var oe=a({frag:N,id:E},G);S.trigger(k.Events.FRAG_PARSING_USERDATA,oe)}}},p._bufferInitSegment=function(i,n,E){if(this.state===R.State.PARSING){i.video&&delete i.video;var S=i.audio;if(!!S){S.levelCodec=S.codec,S.id="audio",this.log("Init audio buffer, container:"+S.container+", codecs[parsed]=["+S.codec+"]"),this.hls.trigger(k.Events.BUFFER_CODECS,i);var I=S.initSegment;if(I!=null&&I.byteLength){var x={type:"audio",frag:n,part:null,chunkMeta:E,parent:n.type,data:I};this.hls.trigger(k.Events.BUFFER_APPENDING,x)}this.tick()}}},p.loadFragment=function(i,n,E){var S=this.fragmentTracker.getState(i);this.fragCurrent=i,(this.audioSwitch||S===w.FragmentState.NOT_LOADED||S===w.FragmentState.PARTIAL)&&(i.sn==="initSegment"?this._loadInitSegment(i):n.live&&!Object(F.isFiniteNumber)(this.initPTS[i.cc])?(this.log("Waiting for video PTS in continuity counter "+i.cc+" of live stream before loading audio fragment "+i.sn+" of level "+this.trackId),this.state=R.State.WAITING_INIT_PTS):(this.startFragRequested=!0,g.prototype.loadFragment.call(this,i,n,E)))},p.completeAudioSwitch=function(){var i=this.hls,n=this.media,E=this.trackId;n&&(this.log("Switching audio track : flushing all audio"),g.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,i.trigger(k.Events.AUDIO_TRACK_SWITCHED,{id:E})},_}(R.default);H.default=d},"./src/controller/audio-track-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts"),R=M("./src/errors.ts"),k=M("./src/controller/base-playlist-controller.ts"),j=M("./src/types/loader.ts");function w(P,c){for(var A=0;A<c.length;A++){var L=c[A];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(P,L.key,L)}}function O(P,c,A){return c&&w(P.prototype,c),A&&w(P,A),P}function D(P,c){P.prototype=Object.create(c.prototype),P.prototype.constructor=P,m(P,c)}function m(P,c){return m=Object.setPrototypeOf||function(L,h){return L.__proto__=h,L},m(P,c)}var C=function(P){D(c,P);function c(L){var h;return h=P.call(this,L,"[audio-track-controller]")||this,h.tracks=[],h.groupId=null,h.tracksInGroup=[],h.trackId=-1,h.trackName="",h.selectDefaultTrack=!0,h.registerListeners(),h}var A=c.prototype;return A.registerListeners=function(){var h=this.hls;h.on(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),h.on(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),h.on(F.Events.LEVEL_LOADING,this.onLevelLoading,this),h.on(F.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),h.on(F.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),h.on(F.Events.ERROR,this.onError,this)},A.unregisterListeners=function(){var h=this.hls;h.off(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),h.off(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),h.off(F.Events.LEVEL_LOADING,this.onLevelLoading,this),h.off(F.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),h.off(F.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),h.off(F.Events.ERROR,this.onError,this)},A.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,P.prototype.destroy.call(this)},A.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},A.onManifestParsed=function(h,s){this.tracks=s.audioTracks||[]},A.onAudioTrackLoaded=function(h,s){var a=s.id,l=s.details,y=this.tracksInGroup[a];if(!y){this.warn("Invalid audio track id "+a);return}var f=y.details;y.details=s.details,this.log("audioTrack "+a+" loaded ["+l.startSN+"-"+l.endSN+"]"),a===this.trackId&&(this.retryCount=0,this.playlistLoaded(a,s,f))},A.onLevelLoading=function(h,s){this.switchLevel(s.level)},A.onLevelSwitching=function(h,s){this.switchLevel(s.level)},A.switchLevel=function(h){var s=this.hls.levels[h];if(!!(s!=null&&s.audioGroupIds)){var a=s.audioGroupIds[s.urlId];if(this.groupId!==a){this.groupId=a;var l=this.tracks.filter(function(f){return!a||f.groupId===a});this.selectDefaultTrack&&!l.some(function(f){return f.default})&&(this.selectDefaultTrack=!1),this.tracksInGroup=l;var y={audioTracks:l};this.log("Updating audio tracks, "+l.length+' track(s) found in "'+a+'" group-id'),this.hls.trigger(F.Events.AUDIO_TRACKS_UPDATED,y),this.selectInitialTrack()}}},A.onError=function(h,s){P.prototype.onError.call(this,h,s),!(s.fatal||!s.context)&&s.context.type===j.PlaylistContextType.AUDIO_TRACK&&s.context.id===this.trackId&&s.context.groupId===this.groupId&&this.retryLoadingOrFail(s)},A.setAudioTrack=function(h){var s=this.tracksInGroup;if(h<0||h>=s.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();var a=s[this.trackId];this.log("Now switching to audio-track index "+h);var l=s[h],y=l.id,f=l.groupId,d=f===void 0?"":f,g=l.name,_=l.type,p=l.url;if(this.trackId=h,this.trackName=g,this.selectDefaultTrack=!1,this.hls.trigger(F.Events.AUDIO_TRACK_SWITCHING,{id:y,groupId:d,name:g,type:_,url:p}),!(l.details&&!l.details.live)){var u=this.switchParams(l.url,a==null?void 0:a.details);this.loadPlaylist(u)}},A.selectInitialTrack=function(){var h=this.tracksInGroup;console.assert(h.length,"Initial audio track should be selected when tracks are known");var s=this.trackName,a=this.findTrackId(s)||this.findTrackId();a!==-1?this.setAudioTrack(a):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},A.findTrackId=function(h){for(var s=this.tracksInGroup,a=0;a<s.length;a++){var l=s[a];if((!this.selectDefaultTrack||l.default)&&(!h||h===l.name))return l.id}return-1},A.loadPlaylist=function(h){var s=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(s)){var a=s.id,l=s.groupId,y=s.url;if(h)try{y=h.addDirectives(y)}catch(f){this.warn("Could not construct new URL with HLS Delivery Directives: "+f)}this.log("loading audio-track playlist for id: "+a),this.clearTimer(),this.hls.trigger(F.Events.AUDIO_TRACK_LOADING,{url:y,id:a,groupId:l,deliveryDirectives:h||null})}},O(c,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(h){this.selectDefaultTrack=!1,this.setAudioTrack(h)}}]),c}(k.default);H.default=C},"./src/controller/base-playlist-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return O});var F=M("./src/polyfills/number.ts"),R=M("./src/types/level.ts"),k=M("./src/controller/level-helper.ts"),j=M("./src/utils/logger.ts"),w=M("./src/errors.ts"),O=function(){function D(C,P){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=j.logger.log.bind(j.logger,P+":"),this.warn=j.logger.warn.bind(j.logger,P+":"),this.hls=C}var m=D.prototype;return m.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},m.onError=function(P,c){c.fatal&&c.type===w.ErrorTypes.NETWORK_ERROR&&this.clearTimer()},m.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},m.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},m.stopLoad=function(){this.canLoad=!1,this.clearTimer()},m.switchParams=function(P,c){var A=c==null?void 0:c.renditionReports;if(A)for(var L=0;L<A.length;L++){var h=A[L],s=""+h.URI;if(s===P.substr(-s.length)){var a=parseInt(h["LAST-MSN"]),l=parseInt(h["LAST-PART"]);if(c&&this.hls.config.lowLatencyMode){var y=Math.min(c.age-c.partTarget,c.targetduration);l!==void 0&&y>c.partTarget&&(l+=1)}if(Object(F.isFiniteNumber)(a))return new R.HlsUrlParameters(a,Object(F.isFiniteNumber)(l)?l:void 0,R.HlsSkip.No)}}},m.loadPlaylist=function(P){},m.shouldLoadTrack=function(P){return this.canLoad&&P&&!!P.url&&(!P.details||P.details.live)},m.playlistLoaded=function(P,c,A){var L=this,h=c.details,s=c.stats,a=s.loading.end?Math.max(0,self.performance.now()-s.loading.end):0;if(h.advancedDateTime=Date.now()-a,h.live||A!=null&&A.live){if(h.reloaded(A),A&&this.log("live playlist "+P+" "+(h.advanced?"REFRESHED "+h.lastPartSn+"-"+h.lastPartIndex:"MISSED")),A&&h.fragments.length>0&&Object(k.mergeDetails)(A,h),!this.canLoad||!h.live)return;var l,y=void 0,f=void 0;if(h.canBlockReload&&h.endSN&&h.advanced){var d=this.hls.config.lowLatencyMode,g=h.lastPartSn,_=h.endSN,p=h.lastPartIndex,u=p!==-1,i=g===_,n=d?0:p;u?(y=i?_+1:g,f=i?n:p+1):y=_+1;var E=h.age,S=E+h.ageHeader,I=Math.min(S-h.partTarget,h.targetduration*1.5);if(I>0){if(A&&I>A.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+A.tuneInGoal+" to: "+I+" with playlist age: "+h.age),I=0;else{var x=Math.floor(I/h.targetduration);if(y+=x,f!==void 0){var B=Math.round(I%h.targetduration/h.partTarget);f+=B}this.log("CDN Tune-in age: "+h.ageHeader+"s last advanced "+E.toFixed(2)+"s goal: "+I+" skip sn "+x+" to part "+f)}h.tuneInGoal=I}if(l=this.getDeliveryDirectives(h,c.deliveryDirectives,y,f),d||!i){this.loadPlaylist(l);return}}else l=this.getDeliveryDirectives(h,c.deliveryDirectives,y,f);var N=Object(k.computeReloadInterval)(h,s);y!==void 0&&h.canBlockReload&&(N-=h.partTarget||1),this.log("reload live playlist "+P+" in "+Math.round(N)+" ms"),this.timer=self.setTimeout(function(){return L.loadPlaylist(l)},N)}else this.clearTimer()},m.getDeliveryDirectives=function(P,c,A,L){var h=Object(R.getSkipValue)(P,A);return c!=null&&c.skip&&P.deltaUpdateFailed&&(A=c.msn,L=c.part,h=R.HlsSkip.No),new R.HlsUrlParameters(A,L,h)},m.retryLoadingOrFail=function(P){var c=this,A=this.hls.config,L=this.retryCount<A.levelLoadingMaxRetry;if(L){var h;if(this.retryCount++,P.details.indexOf("LoadTimeOut")>-1&&(h=P.context)!==null&&h!==void 0&&h.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+P.details+'"'),this.loadPlaylist();else{var s=Math.min(Math.pow(2,this.retryCount)*A.levelLoadingRetryDelay,A.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout(function(){return c.loadPlaylist()},s),this.warn("retry playlist loading #"+this.retryCount+" in "+s+' ms after "'+P.details+'"')}}else this.warn('cannot recover from error "'+P.details+'"'),this.clearTimer(),P.fatal=!0;return L},D}()},"./src/controller/base-stream-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"State",function(){return _}),M.d(H,"default",function(){return p});var F=M("./src/polyfills/number.ts"),R=M("./src/task-loop.ts"),k=M("./src/controller/fragment-tracker.ts"),j=M("./src/utils/buffer-helper.ts"),w=M("./src/utils/logger.ts"),O=M("./src/events.ts"),D=M("./src/errors.ts"),m=M("./src/types/transmuxer.ts"),C=M("./src/utils/mp4-tools.ts"),P=M("./src/utils/discontinuities.ts"),c=M("./src/controller/fragment-finders.ts"),A=M("./src/controller/level-helper.ts"),L=M("./src/loader/fragment-loader.ts"),h=M("./src/crypt/decrypter.ts"),s=M("./src/utils/time-ranges.ts"),a=M("./src/types/loader.ts");function l(u,i){for(var n=0;n<i.length;n++){var E=i[n];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(u,E.key,E)}}function y(u,i,n){return i&&l(u.prototype,i),n&&l(u,n),u}function f(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function d(u,i){u.prototype=Object.create(i.prototype),u.prototype.constructor=u,g(u,i)}function g(u,i){return g=Object.setPrototypeOf||function(E,S){return E.__proto__=S,E},g(u,i)}var _={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BACKTRACKING:"BACKTRACKING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},p=function(u){d(i,u);function i(E,S,I){var x;return x=u.call(this)||this,x.hls=void 0,x.fragPrevious=null,x.fragCurrent=null,x.fragmentTracker=void 0,x.transmuxer=null,x._state=_.STOPPED,x.media=void 0,x.mediaBuffer=void 0,x.config=void 0,x.bitrateTest=!1,x.lastCurrentTime=0,x.nextLoadPosition=0,x.startPosition=0,x.loadedmetadata=!1,x.fragLoadError=0,x.retryDate=0,x.levels=null,x.fragmentLoader=void 0,x.levelLastLoaded=null,x.startFragRequested=!1,x.decrypter=void 0,x.initPTS=[],x.onvseeking=null,x.onvended=null,x.logPrefix="",x.log=void 0,x.warn=void 0,x.logPrefix=I,x.log=w.logger.log.bind(w.logger,I+":"),x.warn=w.logger.warn.bind(w.logger,I+":"),x.hls=E,x.fragmentLoader=new L.default(E.config),x.fragmentTracker=S,x.config=E.config,x.decrypter=new h.default(E,E.config),E.on(O.Events.KEY_LOADED,x.onKeyLoaded,f(x)),x}var n=i.prototype;return n.doTick=function(){this.onTickEnd()},n.onTickEnd=function(){},n.startLoad=function(S){},n.stopLoad=function(){this.fragmentLoader.abort();var S=this.fragCurrent;S&&this.fragmentTracker.removeFragment(S),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=_.STOPPED},n._streamEnded=function(S,I){var x=this.fragCurrent,B=this.fragmentTracker;if(!I.live&&x&&x.sn===I.endSN&&!S.nextStart){var N=B.getState(x);return N===k.FragmentState.PARTIAL||N===k.FragmentState.OK}return!1},n.onMediaAttached=function(S,I){var x=this.media=this.mediaBuffer=I.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),x.addEventListener("seeking",this.onvseeking),x.addEventListener("ended",this.onvended);var B=this.config;this.levels&&B.autoStartLoad&&this.state===_.STOPPED&&this.startLoad(B.startPosition)},n.onMediaDetaching=function(){var S=this.media;S!=null&&S.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),S&&(S.removeEventListener("seeking",this.onvseeking),S.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},n.onMediaSeeking=function(){var S=this.config,I=this.fragCurrent,x=this.media,B=this.mediaBuffer,N=this.state,K=x?x.currentTime:0,W=j.BufferHelper.bufferInfo(B||x,K,S.maxBufferHole);if(this.log("media seeking to "+(Object(F.isFiniteNumber)(K)?K.toFixed(3):K)+", state: "+N),N===_.ENDED)this.resetLoadingState();else if(I&&!W.len){var G=S.maxFragLookUpTolerance,V=I.start-G,X=I.start+I.duration+G,Z=K>X;(K<V||Z)&&(Z&&I.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),I.loader.abort()),this.resetLoadingState())}x&&(this.lastCurrentTime=K),!this.loadedmetadata&&!W.len&&(this.nextLoadPosition=this.startPosition=K),this.tickImmediate()},n.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},n.onKeyLoaded=function(S,I){if(!(this.state!==_.KEY_LOADING||I.frag!==this.fragCurrent||!this.levels)){this.state=_.IDLE;var x=this.levels[I.frag.level].details;x&&this.loadFragment(I.frag,x,I.frag.start)}},n.onHandlerDestroying=function(){this.stopLoad(),u.prototype.onHandlerDestroying.call(this)},n.onHandlerDestroyed=function(){this.state=_.STOPPED,this.hls.off(O.Events.KEY_LOADED,this.onKeyLoaded,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.fragmentLoader=this.fragmentTracker=null,u.prototype.onHandlerDestroyed.call(this)},n.loadKey=function(S,I){this.log("Loading key for "+S.sn+" of ["+I.startSN+"-"+I.endSN+"], "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+S.level),this.state=_.KEY_LOADING,this.fragCurrent=S,this.hls.trigger(O.Events.KEY_LOADING,{frag:S})},n.loadFragment=function(S,I,x){this._loadFragForPlayback(S,I,x)},n._loadFragForPlayback=function(S,I,x){var B=this,N=function(W){if(B.fragContextChanged(S)){B.warn("Fragment "+S.sn+(W.part?" p: "+W.part.index:"")+" of level "+S.level+" was dropped during download."),B.fragmentTracker.removeFragment(S);return}S.stats.chunkCount++,B._handleFragmentLoadProgress(W)};this._doFragLoad(S,I,x,N).then(function(K){if(!!K){B.fragLoadError=0;var W=B.state;if(B.fragContextChanged(S)){(W===_.FRAG_LOADING||W===_.BACKTRACKING||!B.fragCurrent&&W===_.PARSING)&&(B.fragmentTracker.removeFragment(S),B.state=_.IDLE);return}if("payload"in K&&(B.log("Loaded fragment "+S.sn+" of level "+S.level),B.hls.trigger(O.Events.FRAG_LOADED,K),B.state===_.BACKTRACKING)){B.fragmentTracker.backtrack(S,K),B.resetFragmentLoading(S);return}B._handleFragmentLoadComplete(K)}}).catch(function(K){B.warn(K),B.resetFragmentLoading(S)})},n.flushMainBuffer=function(S,I,x){if(x===void 0&&(x=null),!!(S-I)){var B={startOffset:S,endOffset:I,type:x};this.fragLoadError=0,this.hls.trigger(O.Events.BUFFER_FLUSHING,B)}},n._loadInitSegment=function(S){var I=this;this._doFragLoad(S).then(function(x){if(!x||I.fragContextChanged(S)||!I.levels)throw new Error("init load aborted");return x}).then(function(x){var B=I.hls,N=x.payload,K=S.decryptdata;if(N&&N.byteLength>0&&K&&K.key&&K.iv&&K.method==="AES-128"){var W=self.performance.now();return I.decrypter.webCryptoDecrypt(new Uint8Array(N),K.key.buffer,K.iv.buffer).then(function(G){var V=self.performance.now();return B.trigger(O.Events.FRAG_DECRYPTED,{frag:S,payload:G,stats:{tstart:W,tdecrypt:V}}),x.payload=G,x})}return x}).then(function(x){var B=I.fragCurrent,N=I.hls,K=I.levels;if(!K)throw new Error("init load aborted, missing levels");var W=K[S.level].details;console.assert(W,"Level details are defined when init segment is loaded");var G=S.stats;I.state=_.IDLE,I.fragLoadError=0,S.data=new Uint8Array(x.payload),G.parsing.start=G.buffering.start=self.performance.now(),G.parsing.end=G.buffering.end=self.performance.now(),x.frag===B&&N.trigger(O.Events.FRAG_BUFFERED,{stats:G,frag:B,part:null,id:S.type}),I.tick()}).catch(function(x){I.warn(x),I.resetFragmentLoading(S)})},n.fragContextChanged=function(S){var I=this.fragCurrent;return!S||!I||S.level!==I.level||S.sn!==I.sn||S.urlId!==I.urlId},n.fragBufferedComplete=function(S,I){var x=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+S.type+" sn: "+S.sn+(I?" part: "+I.index:"")+" of "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+S.level+" "+s.default.toString(j.BufferHelper.getBuffered(x))),this.state=_.IDLE,this.tick()},n._handleFragmentLoadComplete=function(S){var I=this.transmuxer;if(!!I){var x=S.frag,B=S.part,N=S.partsLoaded,K=!N||N.length===0||N.some(function(G){return!G}),W=new m.ChunkMetadata(x.level,x.sn,x.stats.chunkCount+1,0,B?B.index:-1,!K);I.flush(W)}},n._handleFragmentLoadProgress=function(S){},n._doFragLoad=function(S,I,x,B){var N=this;if(x===void 0&&(x=null),!this.levels)throw new Error("frag load aborted, missing levels");if(x=Math.max(S.start,x||0),this.config.lowLatencyMode&&I){var K=I.partList;if(K&&B){x>S.end&&I.fragmentHint&&(S=I.fragmentHint);var W=this.getNextPart(K,S,x);if(W>-1){var G=K[W];return this.log("Loading part sn: "+S.sn+" p: "+G.index+" cc: "+S.cc+" of playlist ["+I.startSN+"-"+I.endSN+"] parts [0-"+W+"-"+(K.length-1)+"] "+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+S.level+", target: "+parseFloat(x.toFixed(3))),this.nextLoadPosition=G.start+G.duration,this.state=_.FRAG_LOADING,this.hls.trigger(O.Events.FRAG_LOADING,{frag:S,part:K[W],targetBufferTime:x}),this.doFragPartsLoad(S,K,W,B).catch(function(V){return N.handleFragLoadError(V)})}else if(!S.url||this.loadedEndOfParts(K,x))return Promise.resolve(null)}}return this.log("Loading fragment "+S.sn+" cc: "+S.cc+" "+(I?"of ["+I.startSN+"-"+I.endSN+"] ":"")+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+S.level+", target: "+parseFloat(x.toFixed(3))),Object(F.isFiniteNumber)(S.sn)&&!this.bitrateTest&&(this.nextLoadPosition=S.start+S.duration),this.state=_.FRAG_LOADING,this.hls.trigger(O.Events.FRAG_LOADING,{frag:S,targetBufferTime:x}),this.fragmentLoader.load(S,B).catch(function(V){return N.handleFragLoadError(V)})},n.doFragPartsLoad=function(S,I,x,B){var N=this;return new Promise(function(K,W){var G=[],V=function X(Z){var q=I[Z];N.fragmentLoader.loadPart(S,q,B).then(function(J){G[q.index]=J;var ee=J.part;N.hls.trigger(O.Events.FRAG_LOADED,J);var ie=I[Z+1];if(ie&&ie.fragment===S)X(Z+1);else return K({frag:S,part:ee,partsLoaded:G})}).catch(W)};V(x)})},n.handleFragLoadError=function(S){var I=S.data;return I&&I.details===D.ErrorDetails.INTERNAL_ABORTED?this.handleFragLoadAborted(I.frag,I.part):this.hls.trigger(O.Events.ERROR,I),null},n._handleTransmuxerFlush=function(S){var I=this.getCurrentContext(S);if(!I||this.state!==_.PARSING){this.fragCurrent||(this.state=_.IDLE);return}var x=I.frag,B=I.part,N=I.level,K=self.performance.now();x.stats.parsing.end=K,B&&(B.stats.parsing.end=K),this.updateLevelTiming(x,B,N,S.partial)},n.getCurrentContext=function(S){var I=this.levels,x=S.level,B=S.sn,N=S.part;if(!I||!I[x])return this.warn("Levels object was unset while buffering fragment "+B+" of level "+x+". The current chunk will not be buffered."),null;var K=I[x],W=N>-1?Object(A.getPartWith)(K,B,N):null,G=W?W.fragment:Object(A.getFragmentWithSN)(K,B,this.fragCurrent);return G?{frag:G,part:W,level:K}:null},n.bufferFragmentData=function(S,I,x,B){if(!(!S||this.state!==_.PARSING)){var N=S.data1,K=S.data2,W=N;if(N&&K&&(W=Object(C.appendUint8Array)(N,K)),!(!W||!W.length)){var G={type:S.type,frag:I,part:x,chunkMeta:B,parent:I.type,data:W};this.hls.trigger(O.Events.BUFFER_APPENDING,G),S.dropped&&S.independent&&!x&&this.flushBufferGap(I)}}},n.flushBufferGap=function(S){var I=this.media;if(!!I){if(!j.BufferHelper.isBuffered(I,I.currentTime)){this.flushMainBuffer(0,S.start);return}var x=I.currentTime,B=j.BufferHelper.bufferInfo(I,x,0),N=S.duration,K=Math.min(this.config.maxFragLookUpTolerance*2,N*.25),W=Math.max(Math.min(S.start-K,B.end-K),x+K);S.start-W>K&&this.flushMainBuffer(W,S.start)}},n.getFwdBufferInfo=function(S,I){var x=this.config,B=this.getLoadPosition();if(!Object(F.isFiniteNumber)(B))return null;var N=j.BufferHelper.bufferInfo(S,B,x.maxBufferHole);if(N.len===0&&N.nextStart!==void 0){var K=this.fragmentTracker.getBufferedFrag(B,I);if(K&&N.nextStart<K.end)return j.BufferHelper.bufferInfo(S,B,Math.max(N.nextStart,x.maxBufferHole))}return N},n.getMaxBufferLength=function(S){var I=this.config,x;return S?x=Math.max(8*I.maxBufferSize/S,I.maxBufferLength):x=I.maxBufferLength,Math.min(x,I.maxMaxBufferLength)},n.reduceMaxBufferLength=function(S){var I=this.config,x=S||I.maxBufferLength;return I.maxMaxBufferLength>=x?(I.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+I.maxMaxBufferLength+"s"),!0):!1},n.getNextFragment=function(S,I){var x,B,N=I.fragments,K=N.length;if(!K)return null;var W=this.config,G=N[0].start,V;if(I.live){var X=W.initialLiveManifestSize;if(K<X)return this.warn("Not enough fragments to start playback (have: "+K+", need: "+X+")"),null;!I.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(V=this.getInitialLiveFragment(I,N),this.startPosition=V?this.hls.liveSyncPosition||V.start:S)}else S<=G&&(V=N[0]);if(!V){var Z=W.lowLatencyMode?I.partEnd:I.fragmentEnd;V=this.getFragmentAtPosition(S,Z,I)}return(x=V)!==null&&x!==void 0&&x.initSegment&&!((B=V)!==null&&B!==void 0&&B.initSegment.data)&&!this.bitrateTest&&(V=V.initSegment),V},n.getNextPart=function(S,I,x){for(var B=-1,N=!1,K=!0,W=0,G=S.length;W<G;W++){var V=S[W];if(K=K&&!V.independent,B>-1&&x<V.start)break;var X=V.loaded;!X&&(N||V.independent||K)&&V.fragment===I&&(B=W),N=X}return B},n.loadedEndOfParts=function(S,I){var x=S[S.length-1];return x&&I>x.start&&x.loaded},n.getInitialLiveFragment=function(S,I){var x=this.fragPrevious,B=null;if(x){if(S.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+x.programDateTime),B=Object(c.findFragmentByPDT)(I,x.endProgramDateTime,this.config.maxFragLookUpTolerance)),!B){var N=x.sn+1;if(N>=S.startSN&&N<=S.endSN){var K=I[N-S.startSN];x.cc===K.cc&&(B=K,this.log("Live playlist, switching playlist, load frag with next SN: "+B.sn))}B||(B=Object(c.findFragWithCC)(I,x.cc),B&&this.log("Live playlist, switching playlist, load frag with same CC: "+B.sn))}}else{var W=this.hls.liveSyncPosition;W!==null&&(B=this.getFragmentAtPosition(W,this.bitrateTest?S.fragmentEnd:S.edge,S))}return B},n.getFragmentAtPosition=function(S,I,x){var B=this.config,N=this.fragPrevious,K=x.fragments,W=x.endSN,G=x.fragmentHint,V=B.maxFragLookUpTolerance,X=!!(B.lowLatencyMode&&x.partList&&G);X&&G&&!this.bitrateTest&&(K=K.concat(G),W=G.sn);var Z;if(S<I){var q=S>I-V?0:V;Z=Object(c.findFragmentByPTS)(N,K,S,q)}else Z=K[K.length-1];if(Z){var J=Z.sn-x.startSN,ee=N&&Z.level===N.level,ie=K[J+1],oe=this.fragmentTracker.getState(Z);if(oe===k.FragmentState.BACKTRACKED){Z=null;for(var le=J;K[le]&&this.fragmentTracker.getState(K[le])===k.FragmentState.BACKTRACKED;)N?Z=K[le--]:Z=K[--le];Z||(Z=ie)}else N&&Z.sn===N.sn&&!X&&ee&&(Z.sn<W&&this.fragmentTracker.getState(ie)!==k.FragmentState.OK?(this.log("SN "+Z.sn+" just loaded, load next one: "+ie.sn),Z=ie):Z=null)}return Z},n.synchronizeToLiveEdge=function(S){var I=this.config,x=this.media;if(!!x){var B=this.hls.liveSyncPosition,N=x.currentTime,K=S.fragments[0].start,W=S.edge,G=N>=K-I.maxFragLookUpTolerance&&N<=W;if(B!==null&&x.duration>B&&(N<B||!G)){var V=I.liveMaxLatencyDuration!==void 0?I.liveMaxLatencyDuration:I.liveMaxLatencyDurationCount*S.targetduration;(!G&&x.readyState<4||N<W-V)&&(this.loadedmetadata||(this.nextLoadPosition=B),x.readyState&&(this.warn("Playback: "+N.toFixed(3)+" is located too far from the end of live sliding playlist: "+W+", reset currentTime to : "+B.toFixed(3)),x.currentTime=B))}}},n.alignPlaylists=function(S,I){var x=this.levels,B=this.levelLastLoaded,N=this.fragPrevious,K=B!==null?x[B]:null,W=S.fragments.length;if(!W)return this.warn("No fragments in live playlist"),0;var G=S.fragments[0].start,V=!I,X=S.alignedSliding&&Object(F.isFiniteNumber)(G);if(V||!X&&!G){Object(P.alignStream)(N,K,S);var Z=S.fragments[0].start;return this.log("Live playlist sliding: "+Z.toFixed(2)+" start-sn: "+(I?I.startSN:"na")+"->"+S.startSN+" prev-sn: "+(N?N.sn:"na")+" fragments: "+W),Z}return G},n.waitForCdnTuneIn=function(S){var I=3;return S.live&&S.canBlockReload&&S.tuneInGoal>Math.max(S.partHoldBack,S.partTarget*I)},n.setStartPosition=function(S,I){var x=this.startPosition;if(x<I&&(x=-1),x===-1||this.lastCurrentTime===-1){var B=S.startTimeOffset;Object(F.isFiniteNumber)(B)?(x=I+B,B<0&&(x+=S.totalduration),x=Math.min(Math.max(I,x),I+S.totalduration),this.log("Start time offset "+B+" found in playlist, adjust startPosition to "+x),this.startPosition=x):S.live?x=this.hls.liveSyncPosition||I:this.startPosition=x=0,this.lastCurrentTime=x}this.nextLoadPosition=x},n.getLoadPosition=function(){var S=this.media,I=0;return this.loadedmetadata&&S?I=S.currentTime:this.nextLoadPosition&&(I=this.nextLoadPosition),I},n.handleFragLoadAborted=function(S,I){this.transmuxer&&S.sn!=="initSegment"&&S.stats.aborted&&(this.warn("Fragment "+S.sn+(I?" part"+I.index:"")+" of level "+S.level+" was aborted"),this.resetFragmentLoading(S))},n.resetFragmentLoading=function(S){(!this.fragCurrent||!this.fragContextChanged(S))&&(this.state=_.IDLE)},n.onFragmentOrKeyLoadError=function(S,I){if(!I.fatal){var x=I.frag;if(!(!x||x.type!==S)){var B=this.fragCurrent;console.assert(B&&x.sn===B.sn&&x.level===B.level&&x.urlId===B.urlId,"Frag load error must match current frag to retry");var N=this.config;if(this.fragLoadError+1<=N.fragLoadingMaxRetry){if(this.resetLiveStartWhenNotLoaded(x.level))return;var K=Math.min(Math.pow(2,this.fragLoadError)*N.fragLoadingRetryDelay,N.fragLoadingMaxRetryTimeout);this.warn("Fragment "+x.sn+" of "+S+" "+x.level+" failed to load, retrying in "+K+"ms"),this.retryDate=self.performance.now()+K,this.fragLoadError++,this.state=_.FRAG_LOADING_WAITING_RETRY}else I.levelRetry?(S===a.PlaylistLevelType.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=_.IDLE):(w.logger.error(I.details+" reaches max retry, redispatch as fatal ..."),I.fatal=!0,this.hls.stopLoad(),this.state=_.ERROR)}}},n.afterBufferFlushed=function(S,I,x){if(!!S){var B=j.BufferHelper.getBuffered(S);this.fragmentTracker.detectEvictedFragments(I,B,x),this.state===_.ENDED&&this.resetLoadingState()}},n.resetLoadingState=function(){this.fragCurrent=null,this.fragPrevious=null,this.state=_.IDLE},n.resetLiveStartWhenNotLoaded=function(S){if(!this.loadedmetadata){this.startFragRequested=!1;var I=this.levels?this.levels[S].details:null;if(I!=null&&I.live)return this.startPosition=-1,this.setStartPosition(I,0),this.resetLoadingState(),!0;this.nextLoadPosition=this.startPosition}return!1},n.updateLevelTiming=function(S,I,x,B){var N=this,K=x.details;console.assert(!!K,"level.details must be defined");var W=Object.keys(S.elementaryStreams).reduce(function(G,V){var X=S.elementaryStreams[V];if(X){var Z=X.endPTS-X.startPTS;if(Z<=0)return N.warn("Could not parse fragment "+S.sn+" "+V+" duration reliably ("+Z+") resetting transmuxer to fallback to playlist timing"),N.resetTransmuxer(),G||!1;var q=B?0:Object(A.updateFragPTSDTS)(K,S,X.startPTS,X.endPTS,X.startDTS,X.endDTS);return N.hls.trigger(O.Events.LEVEL_PTS_UPDATED,{details:K,level:x,drift:q,type:V,frag:S,start:X.startPTS,end:X.endPTS}),!0}return G},!1);W?(this.state=_.PARSED,this.hls.trigger(O.Events.FRAG_PARSED,{frag:S,part:I})):this.resetLoadingState()},n.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},y(i,[{key:"state",get:function(){return this._state},set:function(S){var I=this._state;I!==S&&(this._state=S,this.log(I+"->"+S))}}]),i}(R.default)},"./src/controller/buffer-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return c});var F=M("./src/polyfills/number.ts"),R=M("./src/events.ts"),k=M("./src/utils/logger.ts"),j=M("./src/errors.ts"),w=M("./src/utils/buffer-helper.ts"),O=M("./src/utils/mediasource-helper.ts"),D=M("./src/loader/fragment.ts"),m=M("./src/controller/buffer-operation-queue.ts"),C=Object(O.getMediaSource)(),P=/([ha]vc.)(?:\.[^.,]+)+/,c=function(){function A(h){var s=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var a=s.hls,l=s.media,y=s.mediaSource;k.logger.log("[buffer-controller]: Media source opened"),l&&(s.updateMediaElementDuration(),a.trigger(R.Events.MEDIA_ATTACHED,{media:l})),y&&y.removeEventListener("sourceopen",s._onMediaSourceOpen),s.checkPendingTracks()},this._onMediaSourceClose=function(){k.logger.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){k.logger.log("[buffer-controller]: Media source ended")},this.hls=h,this._initSourceBuffer(),this.registerListeners()}var L=A.prototype;return L.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},L.destroy=function(){this.unregisterListeners(),this.details=null},L.registerListeners=function(){var s=this.hls;s.on(R.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),s.on(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.on(R.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.on(R.Events.BUFFER_RESET,this.onBufferReset,this),s.on(R.Events.BUFFER_APPENDING,this.onBufferAppending,this),s.on(R.Events.BUFFER_CODECS,this.onBufferCodecs,this),s.on(R.Events.BUFFER_EOS,this.onBufferEos,this),s.on(R.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),s.on(R.Events.LEVEL_UPDATED,this.onLevelUpdated,this),s.on(R.Events.FRAG_PARSED,this.onFragParsed,this),s.on(R.Events.FRAG_CHANGED,this.onFragChanged,this)},L.unregisterListeners=function(){var s=this.hls;s.off(R.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),s.off(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.off(R.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.off(R.Events.BUFFER_RESET,this.onBufferReset,this),s.off(R.Events.BUFFER_APPENDING,this.onBufferAppending,this),s.off(R.Events.BUFFER_CODECS,this.onBufferCodecs,this),s.off(R.Events.BUFFER_EOS,this.onBufferEos,this),s.off(R.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),s.off(R.Events.LEVEL_UPDATED,this.onLevelUpdated,this),s.off(R.Events.FRAG_PARSED,this.onFragParsed,this),s.off(R.Events.FRAG_CHANGED,this.onFragChanged,this)},L._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new m.default(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},L.onManifestParsed=function(s,a){var l=2;(a.audio&&!a.video||!a.altAudio)&&(l=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=l,this.details=null,k.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},L.onMediaAttaching=function(s,a){var l=this.media=a.media;if(l&&C){var y=this.mediaSource=new C;y.addEventListener("sourceopen",this._onMediaSourceOpen),y.addEventListener("sourceended",this._onMediaSourceEnded),y.addEventListener("sourceclose",this._onMediaSourceClose),l.src=self.URL.createObjectURL(y),this._objectUrl=l.src}},L.onMediaDetaching=function(){var s=this.media,a=this.mediaSource,l=this._objectUrl;if(a){if(k.logger.log("[buffer-controller]: media source detaching"),a.readyState==="open")try{a.endOfStream()}catch(y){k.logger.warn("[buffer-controller]: onMediaDetaching: "+y.message+" while calling endOfStream")}this.onBufferReset(),a.removeEventListener("sourceopen",this._onMediaSourceOpen),a.removeEventListener("sourceended",this._onMediaSourceEnded),a.removeEventListener("sourceclose",this._onMediaSourceClose),s&&(l&&self.URL.revokeObjectURL(l),s.src===l?(s.removeAttribute("src"),s.load()):k.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(R.Events.MEDIA_DETACHED,void 0)},L.onBufferReset=function(){var s=this;this.getSourceBufferTypes().forEach(function(a){var l=s.sourceBuffer[a];try{l&&(s.removeBufferListeners(a),s.mediaSource&&s.mediaSource.removeSourceBuffer(l),s.sourceBuffer[a]=void 0)}catch(y){k.logger.warn("[buffer-controller]: Failed to reset the "+a+" buffer",y)}}),this._initSourceBuffer()},L.onBufferCodecs=function(s,a){var l=this,y=this.getSourceBufferTypes().length;Object.keys(a).forEach(function(f){if(y){var d=l.tracks[f];if(d&&typeof d.buffer.changeType=="function"){var g=a[f],_=g.codec,p=g.levelCodec,u=g.container,i=(d.levelCodec||d.codec).replace(P,"$1"),n=(p||_).replace(P,"$1");if(i!==n){var E=u+";codecs="+(p||_);l.appendChangeType(f,E)}}}else l.pendingTracks[f]=a[f]}),!y&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())},L.appendChangeType=function(s,a){var l=this,y=this.operationQueue,f={execute:function(){var g=l.sourceBuffer[s];g&&(k.logger.log("[buffer-controller]: changing "+s+" sourceBuffer type to "+a),g.changeType(a)),y.shiftAndExecuteNext(s)},onStart:function(){},onComplete:function(){},onError:function(g){k.logger.warn("[buffer-controller]: Failed to change "+s+" SourceBuffer type",g)}};y.append(f,s)},L.onBufferAppending=function(s,a){var l=this,y=this.hls,f=this.operationQueue,d=this.tracks,g=a.data,_=a.type,p=a.frag,u=a.part,i=a.chunkMeta,n=i.buffering[_],E=self.performance.now();n.start=E;var S=p.stats.buffering,I=u?u.stats.buffering:null;S.start===0&&(S.start=E),I&&I.start===0&&(I.start=E);var x=d.audio,B=_==="audio"&&i.id===1&&(x==null?void 0:x.container)==="audio/mpeg",N={execute:function(){if(n.executeStart=self.performance.now(),B){var W=l.sourceBuffer[_];if(W){var G=p.start-W.timestampOffset;Math.abs(G)>=.1&&(k.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+p.start+" (delta: "+G+") sn: "+p.sn+")"),W.timestampOffset=p.start)}}l.appendExecutor(g,_)},onStart:function(){},onComplete:function(){var W=self.performance.now();n.executeEnd=n.end=W,S.first===0&&(S.first=W),I&&I.first===0&&(I.first=W);var G=l.sourceBuffer,V={};for(var X in G)V[X]=w.BufferHelper.getBuffered(G[X]);l.appendError=0,l.hls.trigger(R.Events.BUFFER_APPENDED,{type:_,frag:p,part:u,chunkMeta:i,parent:p.type,timeRanges:V})},onError:function(W){k.logger.error("[buffer-controller]: Error encountered while trying to append to the "+_+" SourceBuffer",W);var G={type:j.ErrorTypes.MEDIA_ERROR,parent:p.type,details:j.ErrorDetails.BUFFER_APPEND_ERROR,err:W,fatal:!1};W.code===DOMException.QUOTA_EXCEEDED_ERR?G.details=j.ErrorDetails.BUFFER_FULL_ERROR:(l.appendError++,G.details=j.ErrorDetails.BUFFER_APPEND_ERROR,l.appendError>y.config.appendErrorMaxRetry&&(k.logger.error("[buffer-controller]: Failed "+y.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),G.fatal=!0)),y.trigger(R.Events.ERROR,G)}};f.append(N,_)},L.onBufferFlushing=function(s,a){var l=this,y=this.operationQueue,f=function(g){return{execute:l.removeExecutor.bind(l,g,a.startOffset,a.endOffset),onStart:function(){},onComplete:function(){l.hls.trigger(R.Events.BUFFER_FLUSHED,{type:g})},onError:function(p){k.logger.warn("[buffer-controller]: Failed to remove from "+g+" SourceBuffer",p)}}};a.type?y.append(f(a.type),a.type):this.getSourceBufferTypes().forEach(function(d){y.append(f(d),d)})},L.onFragParsed=function(s,a){var l=this,y=a.frag,f=a.part,d=[],g=f?f.elementaryStreams:y.elementaryStreams;g[D.ElementaryStreamTypes.AUDIOVIDEO]?d.push("audiovideo"):(g[D.ElementaryStreamTypes.AUDIO]&&d.push("audio"),g[D.ElementaryStreamTypes.VIDEO]&&d.push("video"));var _=function(){var u=self.performance.now();y.stats.buffering.end=u,f&&(f.stats.buffering.end=u);var i=f?f.stats:y.stats;l.hls.trigger(R.Events.FRAG_BUFFERED,{frag:y,part:f,stats:i,id:y.type})};d.length===0&&k.logger.warn("Fragments must have at least one ElementaryStreamType set. type: "+y.type+" level: "+y.level+" sn: "+y.sn),this.blockBuffers(_,d)},L.onFragChanged=function(s,a){this.flushBackBuffer()},L.onBufferEos=function(s,a){var l=this,y=this.getSourceBufferTypes().reduce(function(f,d){var g=l.sourceBuffer[d];return(!a.type||a.type===d)&&g&&!g.ended&&(g.ended=!0,k.logger.log("[buffer-controller]: "+d+" sourceBuffer now EOS")),f&&!!(!g||g.ended)},!0);y&&this.blockBuffers(function(){var f=l.mediaSource;!f||f.readyState!=="open"||f.endOfStream()})},L.onLevelUpdated=function(s,a){var l=a.details;!l.fragments.length||(this.details=l,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},L.flushBackBuffer=function(){var s=this.hls,a=this.details,l=this.media,y=this.sourceBuffer;if(!(!l||a===null)){var f=this.getSourceBufferTypes();if(!!f.length){var d=a.live&&s.config.liveBackBufferLength!==null?s.config.liveBackBufferLength:s.config.backBufferLength;if(!(!Object(F.isFiniteNumber)(d)||d<0)){var g=l.currentTime,_=a.levelTargetDuration,p=Math.max(d,_),u=Math.floor(g/_)*_-p;f.forEach(function(i){var n=y[i];if(n){var E=w.BufferHelper.getBuffered(n);E.length>0&&u>E.start(0)&&(s.trigger(R.Events.BACK_BUFFER_REACHED,{bufferEnd:u}),a.live&&s.trigger(R.Events.LIVE_BACK_BUFFER_REACHED,{bufferEnd:u}),s.trigger(R.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:u,type:i}))}})}}}},L.updateMediaElementDuration=function(){if(!(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")){var s=this.details,a=this.hls,l=this.media,y=this.mediaSource,f=s.fragments[0].start+s.totalduration,d=l.duration,g=Object(F.isFiniteNumber)(y.duration)?y.duration:0;s.live&&a.config.liveDurationInfinity?(k.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),y.duration=Infinity,this.updateSeekableRange(s)):(f>g&&f>d||!Object(F.isFiniteNumber)(d))&&(k.logger.log("[buffer-controller]: Updating Media Source duration to "+f.toFixed(3)),y.duration=f)}},L.updateSeekableRange=function(s){var a=this.mediaSource,l=s.fragments,y=l.length;if(y&&s.live&&a!==null&&a!==void 0&&a.setLiveSeekableRange){var f=Math.max(0,l[0].start),d=Math.max(f,f+s.totalduration);a.setLiveSeekableRange(f,d)}},L.checkPendingTracks=function(){var s=this.bufferCodecEventsExpected,a=this.operationQueue,l=this.pendingTracks,y=Object.keys(l).length;if(y&&!s||y===2){this.createSourceBuffers(l),this.pendingTracks={};var f=this.getSourceBufferTypes();if(f.length===0){this.hls.trigger(R.Events.ERROR,{type:j.ErrorTypes.MEDIA_ERROR,details:j.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});return}f.forEach(function(d){a.executeNext(d)})}},L.createSourceBuffers=function(s){var a=this.sourceBuffer,l=this.mediaSource;if(!l)throw Error("createSourceBuffers called when mediaSource was null");var y=0;for(var f in s)if(!a[f]){var d=s[f];if(!d)throw Error("source buffer exists for track "+f+", however track does not");var g=d.levelCodec||d.codec,_=d.container+";codecs="+g;k.logger.log("[buffer-controller]: creating sourceBuffer("+_+")");try{var p=a[f]=l.addSourceBuffer(_),u=f;this.addBufferListener(u,"updatestart",this._onSBUpdateStart),this.addBufferListener(u,"updateend",this._onSBUpdateEnd),this.addBufferListener(u,"error",this._onSBUpdateError),this.tracks[f]={buffer:p,codec:g,container:d.container,levelCodec:d.levelCodec,id:d.id},y++}catch(i){k.logger.error("[buffer-controller]: error while trying to add sourceBuffer: "+i.message),this.hls.trigger(R.Events.ERROR,{type:j.ErrorTypes.MEDIA_ERROR,details:j.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:i,mimeType:_})}}y&&this.hls.trigger(R.Events.BUFFER_CREATED,{tracks:this.tracks})},L._onSBUpdateStart=function(s){var a=this.operationQueue,l=a.current(s);l.onStart()},L._onSBUpdateEnd=function(s){var a=this.operationQueue,l=a.current(s);l.onComplete(),a.shiftAndExecuteNext(s)},L._onSBUpdateError=function(s,a){k.logger.error("[buffer-controller]: "+s+" SourceBuffer error",a),this.hls.trigger(R.Events.ERROR,{type:j.ErrorTypes.MEDIA_ERROR,details:j.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1});var l=this.operationQueue.current(s);l&&l.onError(a)},L.removeExecutor=function(s,a,l){var y=this.media,f=this.mediaSource,d=this.operationQueue,g=this.sourceBuffer,_=g[s];if(!y||!f||!_){k.logger.warn("[buffer-controller]: Attempting to remove from the "+s+" SourceBuffer, but it does not exist"),d.shiftAndExecuteNext(s);return}var p=Object(F.isFiniteNumber)(y.duration)?y.duration:Infinity,u=Object(F.isFiniteNumber)(f.duration)?f.duration:Infinity,i=Math.max(0,a),n=Math.min(l,p,u);n>i?(k.logger.log("[buffer-controller]: Removing ["+i+","+n+"] from the "+s+" SourceBuffer"),console.assert(!_.updating,s+" sourceBuffer must not be updating"),_.remove(i,n)):d.shiftAndExecuteNext(s)},L.appendExecutor=function(s,a){var l=this.operationQueue,y=this.sourceBuffer,f=y[a];if(!f){k.logger.warn("[buffer-controller]: Attempting to append to the "+a+" SourceBuffer, but it does not exist"),l.shiftAndExecuteNext(a);return}f.ended=!1,console.assert(!f.updating,a+" sourceBuffer must not be updating"),f.appendBuffer(s)},L.blockBuffers=function(s,a){var l=this;if(a===void 0&&(a=this.getSourceBufferTypes()),!a.length){k.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve(s);return}var y=this.operationQueue,f=a.map(function(d){return y.appendBlocker(d)});Promise.all(f).then(function(){s(),a.forEach(function(d){var g=l.sourceBuffer[d];(!g||!g.updating)&&y.shiftAndExecuteNext(d)})})},L.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},L.addBufferListener=function(s,a,l){var y=this.sourceBuffer[s];if(!!y){var f=l.bind(this,s);this.listeners[s].push({event:a,listener:f}),y.addEventListener(a,f)}},L.removeBufferListeners=function(s){var a=this.sourceBuffer[s];!a||this.listeners[s].forEach(function(l){a.removeEventListener(l.event,l.listener)})},A}()},"./src/controller/buffer-operation-queue.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return R});var F=M("./src/utils/logger.ts"),R=function(){function k(w){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=w}var j=k.prototype;return j.append=function(O,D){var m=this.queues[D];m.push(O),m.length===1&&this.buffers[D]&&this.executeNext(D)},j.insertAbort=function(O,D){var m=this.queues[D];m.unshift(O),this.executeNext(D)},j.appendBlocker=function(O){var D,m=new Promise(function(P){D=P}),C={execute:D,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(C,O),m},j.executeNext=function(O){var D=this.buffers,m=this.queues,C=D[O],P=m[O];if(P.length){var c=P[0];try{c.execute()}catch(A){F.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),c.onError(A),(!C||!C.updating)&&(P.shift(),this.executeNext(O))}}},j.shiftAndExecuteNext=function(O){this.queues[O].shift(),this.executeNext(O)},j.current=function(O){return this.queues[O][0]},k}()},"./src/controller/cap-level-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts");function R(w,O){for(var D=0;D<O.length;D++){var m=O[D];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(w,m.key,m)}}function k(w,O,D){return O&&R(w.prototype,O),D&&R(w,D),w}var j=function(){function w(D){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=D,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var O=w.prototype;return O.setStreamController=function(m){this.streamController=m},O.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},O.registerListeners=function(){var m=this.hls;m.on(F.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.on(F.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.on(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.on(F.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.on(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},O.unregisterListener=function(){var m=this.hls;m.off(F.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),m.off(F.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.off(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.off(F.Events.BUFFER_CODECS,this.onBufferCodecs,this),m.off(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},O.onFpsDropLevelCapping=function(m,C){w.isLevelAllowed(C.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(C.droppedLevel)},O.onMediaAttaching=function(m,C){this.media=C.media instanceof HTMLVideoElement?C.media:null},O.onManifestParsed=function(m,C){var P=this.hls;this.restrictedLevels=[],this.firstLevel=C.firstLevel,P.config.capLevelToPlayerSize&&C.video&&this.startCapping()},O.onBufferCodecs=function(m,C){var P=this.hls;P.config.capLevelToPlayerSize&&C.video&&this.startCapping()},O.onMediaDetaching=function(){this.stopCapping()},O.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var m=this.hls.levels;if(m.length){var C=this.hls;C.autoLevelCapping=this.getMaxLevel(m.length-1),C.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=C.autoLevelCapping}}},O.getMaxLevel=function(m){var C=this,P=this.hls.levels;if(!P.length)return-1;var c=P.filter(function(A,L){return w.isLevelAllowed(L,C.restrictedLevels)&&L<=m});return this.clientRect=null,w.getMaxLevelByMediaSize(c,this.mediaWidth,this.mediaHeight)},O.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},O.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},O.getDimensions=function(){if(this.clientRect)return this.clientRect;var m=this.media,C={width:0,height:0};if(m){var P=m.getBoundingClientRect();C.width=P.width,C.height=P.height,!C.width&&!C.height&&(C.width=P.right-P.left||m.width||0,C.height=P.bottom-P.top||m.height||0)}return this.clientRect=C,C},w.isLevelAllowed=function(m,C){return C===void 0&&(C=[]),C.indexOf(m)===-1},w.getMaxLevelByMediaSize=function(m,C,P){if(!m||!m.length)return-1;for(var c=function(a,l){return l?a.width!==l.width||a.height!==l.height:!0},A=m.length-1,L=0;L<m.length;L+=1){var h=m[L];if((h.width>=C||h.height>=P)&&c(h,m[L+1])){A=L;break}}return A},k(w,[{key:"mediaWidth",get:function(){return this.getDimensions().width*w.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*w.contentScaleFactor}}],[{key:"contentScaleFactor",get:function(){var m=1;try{m=self.devicePixelRatio}catch(C){}return m}}]),w}();H.default=j},"./src/controller/eme-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts"),R=M("./src/errors.ts"),k=M("./src/utils/logger.ts"),j=M("./src/utils/mediakeys-helper.ts");function w(c,A){for(var L=0;L<A.length;L++){var h=A[L];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}function O(c,A,L){return A&&w(c.prototype,A),L&&w(c,L),c}var D=3,m=function(A,L,h){var s={audioCapabilities:[],videoCapabilities:[]};return A.forEach(function(a){s.audioCapabilities.push({contentType:'audio/mp4; codecs="'+a+'"',robustness:h.audioRobustness||""})}),L.forEach(function(a){s.videoCapabilities.push({contentType:'video/mp4; codecs="'+a+'"',robustness:h.videoRobustness||""})}),[s]},C=function(A,L,h,s){switch(A){case j.KeySystems.WIDEVINE:return m(L,h,s);default:throw new Error("Unknown key-system: "+A)}},P=function(){function c(L){this.hls=void 0,this._widevineLicenseUrl=void 0,this._licenseXhrSetup=void 0,this._licenseResponseCallback=void 0,this._emeEnabled=void 0,this._requestMediaKeySystemAccess=void 0,this._drmSystemOptions=void 0,this._config=void 0,this._mediaKeysList=[],this._media=null,this._hasSetMediaKeys=!1,this._requestLicenseFailureCount=0,this.mediaKeysPromise=null,this._onMediaEncrypted=this.onMediaEncrypted.bind(this),this.hls=L,this._config=L.config,this._widevineLicenseUrl=this._config.widevineLicenseUrl,this._licenseXhrSetup=this._config.licenseXhrSetup,this._licenseResponseCallback=this._config.licenseResponseCallback,this._emeEnabled=this._config.emeEnabled,this._requestMediaKeySystemAccess=this._config.requestMediaKeySystemAccessFunc,this._drmSystemOptions=this._config.drmSystemOptions,this._registerListeners()}var A=c.prototype;return A.destroy=function(){this._unregisterListeners(),this.hls=this._onMediaEncrypted=null,this._requestMediaKeySystemAccess=null},A._registerListeners=function(){this.hls.on(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(F.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(F.Events.MANIFEST_PARSED,this.onManifestParsed,this)},A._unregisterListeners=function(){this.hls.off(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(F.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(F.Events.MANIFEST_PARSED,this.onManifestParsed,this)},A.getLicenseServerUrl=function(h){switch(h){case j.KeySystems.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+h+'"')},A._attemptKeySystemAccess=function(h,s,a){var l=this,y=C(h,s,a,this._drmSystemOptions);k.logger.log("Requesting encrypted media key-system access");var f=this.requestMediaKeySystemAccess(h,y);this.mediaKeysPromise=f.then(function(d){return l._onMediaKeySystemAccessObtained(h,d)}),f.catch(function(d){k.logger.error('Failed to obtain key-system "'+h+'" access:',d)})},A._onMediaKeySystemAccessObtained=function(h,s){var a=this;k.logger.log('Access for key-system "'+h+'" obtained');var l={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:s,mediaKeySystemDomain:h};this._mediaKeysList.push(l);var y=Promise.resolve().then(function(){return s.createMediaKeys()}).then(function(f){return l.mediaKeys=f,k.logger.log('Media-keys created for key-system "'+h+'"'),a._onMediaKeysCreated(),f});return y.catch(function(f){k.logger.error("Failed to create media-keys:",f)}),y},A._onMediaKeysCreated=function(){var h=this;this._mediaKeysList.forEach(function(s){s.mediaKeysSession||(s.mediaKeysSession=s.mediaKeys.createSession(),h._onNewMediaKeySession(s.mediaKeysSession))})},A._onNewMediaKeySession=function(h){var s=this;k.logger.log("New key-system session "+h.sessionId),h.addEventListener("message",function(a){s._onKeySessionMessage(h,a.message)},!1)},A._onKeySessionMessage=function(h,s){k.logger.log("Got EME message event, creating license request"),this._requestLicense(s,function(a){k.logger.log("Received license data (length: "+(a&&a.byteLength)+"), updating key-session"),h.update(a)})},A.onMediaEncrypted=function(h){var s=this;if(k.logger.log('Media is encrypted using "'+h.initDataType+'" init data type'),!this.mediaKeysPromise){k.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}var a=function(y){!s._media||(s._attemptSetMediaKeys(y),s._generateRequestWithPreferredKeySession(h.initDataType,h.initData))};this.mediaKeysPromise.then(a).catch(a)},A._attemptSetMediaKeys=function(h){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var s=this._mediaKeysList[0];if(!s||!s.mediaKeys){k.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});return}k.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(s.mediaKeys),this._hasSetMediaKeys=!0}},A._generateRequestWithPreferredKeySession=function(h,s){var a=this,l=this._mediaKeysList[0];if(!l){k.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}if(l.mediaKeysSessionInitialized){k.logger.warn("Key-Session already initialized but requested again");return}var y=l.mediaKeysSession;if(!y){k.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0});return}if(!s){k.logger.warn("Fatal: initData required for generating a key session is null"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});return}k.logger.log('Generating key-session request for "'+h+'" init data type'),l.mediaKeysSessionInitialized=!0,y.generateRequest(h,s).then(function(){k.logger.debug("Key-session generation succeeded")}).catch(function(f){k.logger.error("Error generating key-session request:",f),a.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})},A._createLicenseXhr=function(h,s,a){var l=new XMLHttpRequest;l.responseType="arraybuffer",l.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,l,h,s,a);var y=this._licenseXhrSetup;if(y)try{y.call(this.hls,l,h),y=void 0}catch(f){k.logger.error(f)}try{l.readyState||l.open("POST",h,!0),y&&y.call(this.hls,l,h)}catch(f){throw new Error("issue setting up KeySystem license XHR "+f)}return l},A._onLicenseRequestReadyStageChange=function(h,s,a,l){switch(h.readyState){case 4:if(h.status===200){this._requestLicenseFailureCount=0,k.logger.log("License request succeeded");var y=h.response,f=this._licenseResponseCallback;if(f)try{y=f.call(this.hls,h,s)}catch(g){k.logger.error(g)}l(y)}else{if(k.logger.error("License Request XHR failed ("+s+"). Status: "+h.status+" ("+h.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>D){this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});return}var d=D-this._requestLicenseFailureCount+1;k.logger.warn("Retrying license request, "+d+" attempts left"),this._requestLicense(a,l)}break}},A._generateLicenseRequestChallenge=function(h,s){switch(h.mediaKeySystemDomain){case j.KeySystems.WIDEVINE:return s}throw new Error("unsupported key-system: "+h.mediaKeySystemDomain)},A._requestLicense=function(h,s){k.logger.log("Requesting content license for key-system");var a=this._mediaKeysList[0];if(!a){k.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});return}try{var l=this.getLicenseServerUrl(a.mediaKeySystemDomain),y=this._createLicenseXhr(l,h,s);k.logger.log("Sending license request to URL: "+l);var f=this._generateLicenseRequestChallenge(a,h);y.send(f)}catch(d){k.logger.error("Failure requesting DRM license: "+d),this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.KEY_SYSTEM_ERROR,details:R.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},A.onMediaAttached=function(h,s){if(!!this._emeEnabled){var a=s.media;this._media=a,a.addEventListener("encrypted",this._onMediaEncrypted)}},A.onMediaDetached=function(){var h=this._media,s=this._mediaKeysList;!h||(h.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(s.map(function(a){if(a.mediaKeysSession)return a.mediaKeysSession.close().catch(function(){})})).then(function(){return h.setMediaKeys(null)}).catch(function(){}))},A.onManifestParsed=function(h,s){if(!!this._emeEnabled){var a=s.levels.map(function(y){return y.audioCodec}).filter(function(y){return!!y}),l=s.levels.map(function(y){return y.videoCodec}).filter(function(y){return!!y});this._attemptKeySystemAccess(j.KeySystems.WIDEVINE,a,l)}},O(c,[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}]),c}();H.default=P},"./src/controller/fps-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts"),R=M("./src/utils/logger.ts"),k=function(){function j(O){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=O,this.registerListeners()}var w=j.prototype;return w.setStreamController=function(D){this.streamController=D},w.registerListeners=function(){this.hls.on(F.Events.MEDIA_ATTACHING,this.onMediaAttaching,this)},w.unregisterListeners=function(){this.hls.off(F.Events.MEDIA_ATTACHING,this.onMediaAttaching)},w.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},w.onMediaAttaching=function(D,m){var C=this.hls.config;if(C.capLevelOnFPSDrop){var P=m.media instanceof self.HTMLVideoElement?m.media:null;this.media=P,P&&typeof P.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),C.fpsDroppedMonitoringPeriod)}},w.checkFPS=function(D,m,C){var P=performance.now();if(m){if(this.lastTime){var c=P-this.lastTime,A=C-this.lastDroppedFrames,L=m-this.lastDecodedFrames,h=1e3*A/c,s=this.hls;if(s.trigger(F.Events.FPS_DROP,{currentDropped:A,currentDecoded:L,totalDroppedFrames:C}),h>0&&A>s.config.fpsDroppedMonitoringThreshold*L){var a=s.currentLevel;R.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+a),a>0&&(s.autoLevelCapping===-1||s.autoLevelCapping>=a)&&(a=a-1,s.trigger(F.Events.FPS_DROP_LEVEL_CAPPING,{level:a,droppedLevel:s.currentLevel}),s.autoLevelCapping=a,this.streamController.nextLevelSwitch())}}this.lastTime=P,this.lastDroppedFrames=C,this.lastDecodedFrames=m}},w.checkFPSInterval=function(){var D=this.media;if(D)if(this.isVideoPlaybackQualityAvailable){var m=D.getVideoPlaybackQuality();this.checkFPS(D,m.totalVideoFrames,m.droppedVideoFrames)}else this.checkFPS(D,D.webkitDecodedFrameCount,D.webkitDroppedFrameCount)},j}();H.default=k},"./src/controller/fragment-finders.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"findFragmentByPDT",function(){return k}),M.d(H,"findFragmentByPTS",function(){return j}),M.d(H,"fragmentWithinToleranceTest",function(){return w}),M.d(H,"pdtWithinToleranceTest",function(){return O}),M.d(H,"findFragWithCC",function(){return D});var F=M("./src/polyfills/number.ts"),R=M("./src/utils/binary-search.ts");function k(m,C,P){if(C===null||!Array.isArray(m)||!m.length||!Object(F.isFiniteNumber)(C))return null;var c=m[0].programDateTime;if(C<(c||0))return null;var A=m[m.length-1].endProgramDateTime;if(C>=(A||0))return null;P=P||0;for(var L=0;L<m.length;++L){var h=m[L];if(O(C,P,h))return h}return null}function j(m,C,P,c){P===void 0&&(P=0),c===void 0&&(c=0);var A=null;if(m?A=C[m.sn-C[0].sn+1]||null:P===0&&C[0].start===0&&(A=C[0]),A&&w(P,c,A)===0)return A;var L=R.default.search(C,w.bind(null,P,c));return L||A}function w(m,C,P){m===void 0&&(m=0),C===void 0&&(C=0);var c=Math.min(C,P.duration+(P.deltaPTS?P.deltaPTS:0));return P.start+P.duration-c<=m?1:P.start-c>m&&P.start?-1:0}function O(m,C,P){var c=Math.min(C,P.duration+(P.deltaPTS?P.deltaPTS:0))*1e3,A=P.endProgramDateTime||0;return A-c>m}function D(m,C){return R.default.search(m,function(P){return P.cc<C?1:P.cc>C?-1:0})}},"./src/controller/fragment-tracker.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"FragmentState",function(){return k}),M.d(H,"FragmentTracker",function(){return j});var F=M("./src/events.ts"),R=M("./src/types/loader.ts"),k;(function(D){D.NOT_LOADED="NOT_LOADED",D.BACKTRACKED="BACKTRACKED",D.APPENDING="APPENDING",D.PARTIAL="PARTIAL",D.OK="OK"})(k||(k={}));var j=function(){function D(C){this.activeFragment=null,this.activeParts=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=C,this._registerListeners()}var m=D.prototype;return m._registerListeners=function(){var P=this.hls;P.on(F.Events.BUFFER_APPENDED,this.onBufferAppended,this),P.on(F.Events.FRAG_BUFFERED,this.onFragBuffered,this),P.on(F.Events.FRAG_LOADED,this.onFragLoaded,this)},m._unregisterListeners=function(){var P=this.hls;P.off(F.Events.BUFFER_APPENDED,this.onBufferAppended,this),P.off(F.Events.FRAG_BUFFERED,this.onFragBuffered,this),P.off(F.Events.FRAG_LOADED,this.onFragLoaded,this)},m.destroy=function(){this._unregisterListeners(),this.fragments=this.timeRanges=null},m.getAppendedFrag=function(P,c){if(c===R.PlaylistLevelType.MAIN){var A=this.activeFragment,L=this.activeParts;if(!A)return null;if(L)for(var h=L.length;h--;){var s=L[h],a=s?s.end:A.appendedPTS;if(s.start<=P&&a!==void 0&&P<=a)return h>9&&(this.activeParts=L.slice(h-9)),s}else if(A.start<=P&&A.appendedPTS!==void 0&&P<=A.appendedPTS)return A}return this.getBufferedFrag(P,c)},m.getBufferedFrag=function(P,c){for(var A=this.fragments,L=Object.keys(A),h=L.length;h--;){var s=A[L[h]];if((s==null?void 0:s.body.type)===c&&s.buffered){var a=s.body;if(a.start<=P&&P<=a.end)return a}}return null},m.detectEvictedFragments=function(P,c,A){var L=this;Object.keys(this.fragments).forEach(function(h){var s=L.fragments[h];if(!!s){if(!s.buffered){s.body.type===A&&L.removeFragment(s.body);return}var a=s.range[P];!a||a.time.some(function(l){var y=!L.isTimeBuffered(l.startPTS,l.endPTS,c);return y&&L.removeFragment(s.body),y})}})},m.detectPartialFragments=function(P){var c=this,A=this.timeRanges,L=P.frag,h=P.part;if(!(!A||L.sn==="initSegment")){var s=O(L),a=this.fragments[s];!a||(Object.keys(A).forEach(function(l){var y=L.elementaryStreams[l];if(!!y){var f=A[l],d=h!==null||y.partial===!0;a.range[l]=c.getBufferedTimes(L,h,d,f)}}),a.backtrack=a.loaded=null,Object.keys(a.range).length?a.buffered=!0:this.removeFragment(a.body))}},m.fragBuffered=function(P){var c=O(P),A=this.fragments[c];A&&(A.backtrack=A.loaded=null,A.buffered=!0)},m.getBufferedTimes=function(P,c,A,L){for(var h={time:[],partial:A},s=c?c.start:P.start,a=c?c.end:P.end,l=P.minEndPTS||a,y=P.maxStartPTS||s,f=0;f<L.length;f++){var d=L.start(f)-this.bufferPadding,g=L.end(f)+this.bufferPadding;if(y>=d&&l<=g){h.time.push({startPTS:Math.max(s,L.start(f)),endPTS:Math.min(a,L.end(f))});break}else if(s<g&&a>d)h.partial=!0,h.time.push({startPTS:Math.max(s,L.start(f)),endPTS:Math.min(a,L.end(f))});else if(a<=d)break}return h},m.getPartialFragment=function(P){var c=null,A,L,h,s=0,a=this.bufferPadding,l=this.fragments;return Object.keys(l).forEach(function(y){var f=l[y];!f||w(f)&&(L=f.body.start-a,h=f.body.end+a,P>=L&&P<=h&&(A=Math.min(P-L,h-P),s<=A&&(c=f.body,s=A)))}),c},m.getState=function(P){var c=O(P),A=this.fragments[c];return A?A.buffered?w(A)?k.PARTIAL:k.OK:A.backtrack?k.BACKTRACKED:k.APPENDING:k.NOT_LOADED},m.backtrack=function(P,c){var A=O(P),L=this.fragments[A];if(!L||L.backtrack)return null;var h=L.backtrack=c||L.loaded;return L.loaded=null,h},m.getBacktrackData=function(P){var c=O(P),A=this.fragments[c];if(A){var L,h=A.backtrack;if(h!=null&&(L=h.payload)!==null&&L!==void 0&&L.byteLength)return h;this.removeFragment(P)}return null},m.isTimeBuffered=function(P,c,A){for(var L,h,s=0;s<A.length;s++){if(L=A.start(s)-this.bufferPadding,h=A.end(s)+this.bufferPadding,P>=L&&c<=h)return!0;if(c<=L)return!1}return!1},m.onFragLoaded=function(P,c){var A=c.frag,L=c.part;if(!(A.sn==="initSegment"||A.bitrateTest||L)){var h=O(A);this.fragments[h]={body:A,loaded:c,backtrack:null,buffered:!1,range:Object.create(null)}}},m.onBufferAppended=function(P,c){var A=this,L=c.frag,h=c.part,s=c.timeRanges;if(L.type===R.PlaylistLevelType.MAIN)if(this.activeFragment=L,h){var a=this.activeParts;a||(this.activeParts=a=[]),a.push(h)}else this.activeParts=null;this.timeRanges=s,Object.keys(s).forEach(function(l){var y=s[l];if(A.detectEvictedFragments(l,y),!h)for(var f=0;f<y.length;f++)L.appendedPTS=Math.max(y.end(f),L.appendedPTS||0)})},m.onFragBuffered=function(P,c){this.detectPartialFragments(c)},m.hasFragment=function(P){var c=O(P);return!!this.fragments[c]},m.removeFragmentsInRange=function(P,c,A){var L=this;Object.keys(this.fragments).forEach(function(h){var s=L.fragments[h];if(!!s&&s.buffered){var a=s.body;a.type===A&&a.start<c&&a.end>P&&L.removeFragment(a)}})},m.removeFragment=function(P){var c=O(P);P.stats.loaded=0,P.clearElementaryStreamInfo(),delete this.fragments[c]},m.removeAllFragments=function(){this.fragments=Object.create(null),this.activeFragment=null,this.activeParts=null},D}();function w(D){var m,C;return D.buffered&&(((m=D.range.video)===null||m===void 0?void 0:m.partial)||((C=D.range.audio)===null||C===void 0?void 0:C.partial))}function O(D){return D.type+"_"+D.level+"_"+D.urlId+"_"+D.sn}},"./src/controller/gap-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"STALL_MINIMUM_DURATION_MS",function(){return w}),M.d(H,"MAX_START_GAP_JUMP",function(){return O}),M.d(H,"SKIP_BUFFER_HOLE_STEP_SECONDS",function(){return D}),M.d(H,"SKIP_BUFFER_RANGE_START",function(){return m}),M.d(H,"default",function(){return C});var F=M("./src/utils/buffer-helper.ts"),R=M("./src/errors.ts"),k=M("./src/events.ts"),j=M("./src/utils/logger.ts"),w=250,O=2,D=.1,m=.05,C=function(){function P(A,L,h,s){this.config=void 0,this.media=void 0,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=A,this.media=L,this.fragmentTracker=h,this.hls=s}var c=P.prototype;return c.destroy=function(){this.hls=this.fragmentTracker=this.media=null},c.poll=function(L){var h=this.config,s=this.media,a=this.stalled,l=s.currentTime,y=s.seeking,f=this.seeking&&!y,d=!this.seeking&&y;if(this.seeking=y,l!==L){if(this.moved=!0,a!==null){if(this.stallReported){var g=self.performance.now()-a;j.logger.warn("playback not stuck anymore @"+l+", after "+Math.round(g)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if((d||f)&&(this.stalled=null),!(s.paused||s.ended||s.playbackRate===0||!F.BufferHelper.getBuffered(s).length)){var _=F.BufferHelper.bufferInfo(s,l,0),p=_.len>0,u=_.nextStart||0;if(!(!p&&!u)){if(y){var i=_.len>O,n=!u||u-l>O&&!this.fragmentTracker.getPartialFragment(l);if(i||n)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var E,S=Math.max(u,_.start||0)-l,I=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,x=I==null||(E=I.details)===null||E===void 0?void 0:E.live,B=x?I.details.targetduration*2:O;if(S>0&&S<=B){this._trySkipBufferHole(null);return}}var N=self.performance.now();if(a===null){this.stalled=N;return}var K=N-a;!y&&K>=w&&this._reportStall(_.len);var W=F.BufferHelper.bufferInfo(s,l,h.maxBufferHole);this._tryFixBufferStall(W,K)}}},c._tryFixBufferStall=function(L,h){var s=this.config,a=this.fragmentTracker,l=this.media,y=l.currentTime,f=a.getPartialFragment(y);if(f){var d=this._trySkipBufferHole(f);if(d)return}L.len>s.maxBufferHole&&h>s.highBufferWatchdogPeriod*1e3&&(j.logger.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},c._reportStall=function(L){var h=this.hls,s=this.media,a=this.stallReported;a||(this.stallReported=!0,j.logger.warn("Playback stalling at @"+s.currentTime+" due to low buffer (buffer="+L+")"),h.trigger(k.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:L}))},c._trySkipBufferHole=function(L){for(var h=this.config,s=this.hls,a=this.media,l=a.currentTime,y=0,f=F.BufferHelper.getBuffered(a),d=0;d<f.length;d++){var g=f.start(d);if(l+h.maxBufferHole>=y&&l<g){var _=Math.max(g+m,a.currentTime+D);return j.logger.warn("skipping hole, adjusting currentTime from "+l+" to "+_),this.moved=!0,this.stalled=null,a.currentTime=_,L&&s.trigger(k.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+l+" to "+_,frag:L}),_}y=f.end(d)}return 0},c._tryNudgeBuffer=function(){var L=this.config,h=this.hls,s=this.media,a=s.currentTime,l=(this.nudgeRetry||0)+1;if(this.nudgeRetry=l,l<L.nudgeMaxRetry){var y=a+l*L.nudgeOffset;j.logger.warn("Nudging 'currentTime' from "+a+" to "+y),s.currentTime=y,h.trigger(k.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else j.logger.error("Playhead still not moving while enough data buffered @"+a+" after "+L.nudgeMaxRetry+" nudges"),h.trigger(k.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})},P}()},"./src/controller/id3-track-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts"),R=M("./src/utils/texttrack-utils.ts"),k=M("./src/demux/id3.ts"),j=.25,w=function(){function O(m){this.hls=void 0,this.id3Track=null,this.media=null,this.hls=m,this._registerListeners()}var D=O.prototype;return D.destroy=function(){this._unregisterListeners()},D._registerListeners=function(){var C=this.hls;C.on(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),C.on(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),C.on(F.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),C.on(F.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},D._unregisterListeners=function(){var C=this.hls;C.off(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),C.off(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),C.off(F.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),C.off(F.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},D.onMediaAttached=function(C,P){this.media=P.media},D.onMediaDetaching=function(){!this.id3Track||(Object(R.clearCurrentCues)(this.id3Track),this.id3Track=null,this.media=null)},D.getID3Track=function(C){if(!!this.media){for(var P=0;P<C.length;P++){var c=C[P];if(c.kind==="metadata"&&c.label==="id3")return Object(R.sendAddTrackEvent)(c,this.media),c}return this.media.addTextTrack("metadata","id3")}},D.onFragParsingMetadata=function(C,P){if(!!this.media){var c=P.frag,A=P.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var L=self.WebKitDataCue||self.VTTCue||self.TextTrackCue,h=0;h<A.length;h++){var s=k.getID3Frames(A[h].data);if(s){var a=A[h].pts,l=h<A.length-1?A[h+1].pts:c.end,y=l-a;y<=0&&(l=a+j);for(var f=0;f<s.length;f++){var d=s[f];if(!k.isTimeStampFrame(d)){var g=new L(a,l,"");g.value=d,this.id3Track.addCue(g)}}}}}},D.onBufferFlushing=function(C,P){var c=P.startOffset,A=P.endOffset,L=P.type;if(!L||L==="audio"){var h=this.id3Track;h&&Object(R.removeCuesInRange)(h,c,A)}},O}();H.default=w},"./src/controller/latency-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return O});var F=M("./src/errors.ts"),R=M("./src/events.ts"),k=M("./src/utils/logger.ts");function j(D,m){for(var C=0;C<m.length;C++){var P=m[C];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(D,P.key,P)}}function w(D,m,C){return m&&j(D.prototype,m),C&&j(D,C),D}var O=function(){function D(C){var P=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return P.timeupdate()},this.hls=C,this.config=C.config,this.registerListeners()}var m=D.prototype;return m.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},m.registerListeners=function(){this.hls.on(R.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(R.Events.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(R.Events.ERROR,this.onError,this)},m.unregisterListeners=function(){this.hls.off(R.Events.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(R.Events.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(R.Events.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(R.Events.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(R.Events.ERROR,this.onError)},m.onMediaAttached=function(P,c){this.media=c.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},m.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},m.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},m.onLevelUpdated=function(P,c){var A=c.details;this.levelDetails=A,A.advanced&&this.timeupdate(),!A.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},m.onError=function(P,c){c.details===F.ErrorDetails.BUFFER_STALLED_ERROR&&(this.stallCount++,k.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},m.timeupdate=function(){var P=this.media,c=this.levelDetails;if(!(!P||!c)){this.currentTime=P.currentTime;var A=this.computeLatency();if(A!==null){this._latency=A;var L=this.config,h=L.lowLatencyMode,s=L.maxLiveSyncPlaybackRate;if(!(!h||s===1)){var a=this.targetLatency;if(a!==null){var l=A-a,y=Math.min(this.maxLatency,a+c.targetduration),f=l<y;if(c.live&&f&&l>.05&&this.forwardBufferLength>1){var d=Math.min(2,Math.max(1,s)),g=Math.round(2/(1+Math.exp(-.75*l-this.edgeStalled))*20)/20;P.playbackRate=Math.min(d,Math.max(1,g))}else P.playbackRate!==1&&P.playbackRate!==0&&(P.playbackRate=1)}}}}},m.estimateLiveEdge=function(){var P=this.levelDetails;return P===null?null:P.edge+P.age},m.computeLatency=function(){var P=this.estimateLiveEdge();return P===null?null:P-this.currentTime},w(D,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var P=this.config,c=this.levelDetails;return P.liveMaxLatencyDuration!==void 0?P.liveMaxLatencyDuration:c?P.liveMaxLatencyDurationCount*c.targetduration:0}},{key:"targetLatency",get:function(){var P=this.levelDetails;if(P===null)return null;var c=P.holdBack,A=P.partHoldBack,L=P.targetduration,h=this.config,s=h.liveSyncDuration,a=h.liveSyncDurationCount,l=h.lowLatencyMode,y=this.hls.userConfig,f=l&&A||c;(y.liveSyncDuration||y.liveSyncDurationCount||f===0)&&(f=s!==void 0?s:a*L);var d=L,g=1;return f+Math.min(this.stallCount*g,d)}},{key:"liveSyncPosition",get:function(){var P=this.estimateLiveEdge(),c=this.targetLatency,A=this.levelDetails;if(P===null||c===null||A===null)return null;var L=A.edge,h=P-c-this.edgeStalled,s=L-A.totalduration,a=L-(this.config.lowLatencyMode&&A.partTarget||A.targetduration);return Math.min(Math.max(s,h),a)}},{key:"drift",get:function(){var P=this.levelDetails;return P===null?1:P.drift}},{key:"edgeStalled",get:function(){var P=this.levelDetails;if(P===null)return 0;var c=(this.config.lowLatencyMode&&P.partTarget||P.targetduration)*3;return Math.max(P.age-c,0)}},{key:"forwardBufferLength",get:function(){var P=this.media,c=this.levelDetails;if(!P||!c)return 0;var A=P.buffered.length;return A?P.buffered.end(A-1):c.edge-this.currentTime}}]),D}()},"./src/controller/level-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return h});var F=M("./src/types/level.ts"),R=M("./src/events.ts"),k=M("./src/errors.ts"),j=M("./src/utils/codecs.ts"),w=M("./src/controller/level-helper.ts"),O=M("./src/controller/base-playlist-controller.ts"),D=M("./src/types/loader.ts");function m(){return m=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var y in l)Object.prototype.hasOwnProperty.call(l,y)&&(s[y]=l[y])}return s},m.apply(this,arguments)}function C(s,a){for(var l=0;l<a.length;l++){var y=a[l];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(s,y.key,y)}}function P(s,a,l){return a&&C(s.prototype,a),l&&C(s,l),s}function c(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,A(s,a)}function A(s,a){return A=Object.setPrototypeOf||function(y,f){return y.__proto__=f,y},A(s,a)}var L=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),h=function(s){c(a,s);function a(y){var f;return f=s.call(this,y,"[level-controller]")||this,f._levels=[],f._firstLevel=-1,f._startLevel=void 0,f.currentLevelIndex=-1,f.manualLevelIndex=-1,f.onParsedComplete=void 0,f._registerListeners(),f}var l=a.prototype;return l._registerListeners=function(){var f=this.hls;f.on(R.Events.MANIFEST_LOADED,this.onManifestLoaded,this),f.on(R.Events.LEVEL_LOADED,this.onLevelLoaded,this),f.on(R.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),f.on(R.Events.FRAG_LOADED,this.onFragLoaded,this),f.on(R.Events.ERROR,this.onError,this)},l._unregisterListeners=function(){var f=this.hls;f.off(R.Events.MANIFEST_LOADED,this.onManifestLoaded,this),f.off(R.Events.LEVEL_LOADED,this.onLevelLoaded,this),f.off(R.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),f.off(R.Events.FRAG_LOADED,this.onFragLoaded,this),f.off(R.Events.ERROR,this.onError,this)},l.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,s.prototype.destroy.call(this)},l.startLoad=function(){var f=this._levels;f.forEach(function(d){d.loadError=0}),s.prototype.startLoad.call(this)},l.onManifestLoaded=function(f,d){var g=[],_=[],p=[],u,i={},n,E=!1,S=!1,I=!1;if(d.levels.forEach(function(K){var W=K.attrs;E=E||!!(K.width&&K.height),S=S||!!K.videoCodec,I=I||!!K.audioCodec,L&&K.audioCodec&&K.audioCodec.indexOf("mp4a.40.34")!==-1&&(K.audioCodec=void 0);var G=K.bitrate+"-"+K.attrs.RESOLUTION+"-"+K.attrs.CODECS;n=i[G],n?n.url.push(K.url):(n=new F.Level(K),i[G]=n,g.push(n)),W&&(W.AUDIO&&Object(w.addGroupId)(n,"audio",W.AUDIO),W.SUBTITLES&&Object(w.addGroupId)(n,"text",W.SUBTITLES))}),(E||S)&&I&&(g=g.filter(function(K){var W=K.videoCodec,G=K.width,V=K.height;return!!W||!!(G&&V)})),g=g.filter(function(K){var W=K.audioCodec,G=K.videoCodec;return(!W||Object(j.isCodecSupportedInMp4)(W,"audio"))&&(!G||Object(j.isCodecSupportedInMp4)(G,"video"))}),d.audioTracks&&(_=d.audioTracks.filter(function(K){return!K.audioCodec||Object(j.isCodecSupportedInMp4)(K.audioCodec,"audio")}),Object(w.assignTrackIdsByGroup)(_)),d.subtitles&&(p=d.subtitles,Object(w.assignTrackIdsByGroup)(p)),g.length>0){u=g[0].bitrate,g.sort(function(K,W){return K.bitrate-W.bitrate}),this._levels=g;for(var x=0;x<g.length;x++)if(g[x].bitrate===u){this._firstLevel=x,this.log("manifest loaded, "+g.length+" level(s) found, first bitrate: "+u);break}var B=I&&!S,N={levels:g,audioTracks:_,subtitleTracks:p,firstLevel:this._firstLevel,stats:d.stats,audio:I,video:S,altAudio:!B&&_.some(function(K){return!!K.url})};this.hls.trigger(R.Events.MANIFEST_PARSED,N),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(R.Events.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:d.url,reason:"no level with compatible codecs found in manifest"})},l.onError=function(f,d){if(s.prototype.onError.call(this,f,d),!d.fatal){var g=d.context,_=this._levels[this.currentLevelIndex];if(g&&(g.type===D.PlaylistContextType.AUDIO_TRACK&&_.audioGroupIds&&g.groupId===_.audioGroupIds[_.urlId]||g.type===D.PlaylistContextType.SUBTITLE_TRACK&&_.textGroupIds&&g.groupId===_.textGroupIds[_.urlId])){this.redundantFailover(this.currentLevelIndex);return}var p=!1,u=!0,i;switch(d.details){case k.ErrorDetails.FRAG_LOAD_ERROR:case k.ErrorDetails.FRAG_LOAD_TIMEOUT:case k.ErrorDetails.KEY_LOAD_ERROR:case k.ErrorDetails.KEY_LOAD_TIMEOUT:if(d.frag){var n=this._levels[d.frag.level];n?(n.fragmentError++,n.fragmentError>this.hls.config.fragLoadingMaxRetry&&(i=d.frag.level)):i=d.frag.level}break;case k.ErrorDetails.LEVEL_LOAD_ERROR:case k.ErrorDetails.LEVEL_LOAD_TIMEOUT:g&&(g.deliveryDirectives&&(u=!1),i=g.level),p=!0;break;case k.ErrorDetails.REMUX_ALLOC_ERROR:i=d.level,p=!0;break}i!==void 0&&this.recoverLevel(d,i,p,u)}},l.recoverLevel=function(f,d,g,_){var p=f.details,u=this._levels[d];if(u.loadError++,g){var i=this.retryLoadingOrFail(f);if(i)f.levelRetry=!0;else{this.currentLevelIndex=-1;return}}if(_){var n=u.url.length;if(n>1&&u.loadError<n)f.levelRetry=!0,this.redundantFailover(d);else if(this.manualLevelIndex===-1){var E=d===0?this._levels.length-1:d-1;this.currentLevelIndex!==E&&this._levels[E].loadError===0&&(this.warn(p+": switch to "+E),f.levelRetry=!0,this.hls.nextAutoLevel=E)}}},l.redundantFailover=function(f){var d=this._levels[f],g=d.url.length;if(g>1){var _=(d.urlId+1)%g;this.warn("Switching to redundant URL-id "+_),this._levels.forEach(function(p){p.urlId=_}),this.level=f}},l.onFragLoaded=function(f,d){var g=d.frag;if(g!==void 0&&g.type===D.PlaylistLevelType.MAIN){var _=this._levels[g.level];_!==void 0&&(_.fragmentError=0,_.loadError=0)}},l.onLevelLoaded=function(f,d){var g,_=d.level,p=d.details,u=this._levels[_];if(!u){var i;this.warn("Invalid level index "+_),(i=d.deliveryDirectives)!==null&&i!==void 0&&i.skip&&(p.deltaUpdateFailed=!0);return}_===this.currentLevelIndex?(u.fragmentError===0&&(u.loadError=0,this.retryCount=0),this.playlistLoaded(_,d,u.details)):(g=d.deliveryDirectives)!==null&&g!==void 0&&g.skip&&(p.deltaUpdateFailed=!0)},l.onAudioTrackSwitched=function(f,d){var g=this.hls.levels[this.currentLevelIndex];if(!!g&&g.audioGroupIds){for(var _=-1,p=this.hls.audioTracks[d.id].groupId,u=0;u<g.audioGroupIds.length;u++)if(g.audioGroupIds[u]===p){_=u;break}_!==g.urlId&&(g.urlId=_,this.startLoad())}},l.loadPlaylist=function(f){var d=this.currentLevelIndex,g=this._levels[d];if(this.canLoad&&g&&g.url.length>0){var _=g.urlId,p=g.url[_];if(f)try{p=f.addDirectives(p)}catch(u){this.warn("Could not construct new URL with HLS Delivery Directives: "+u)}this.log("Attempt loading level index "+d+(f?" at sn "+f.msn+" part "+f.part:"")+" with URL-id "+_+" "+p),this.clearTimer(),this.hls.trigger(R.Events.LEVEL_LOADING,{url:p,level:d,id:_,deliveryDirectives:f||null})}},l.removeLevel=function(f,d){var g=function(u,i){return i!==d},_=this._levels.filter(function(p,u){return u!==f?!0:p.url.length>1&&d!==void 0?(p.url=p.url.filter(g),p.audioGroupIds&&(p.audioGroupIds=p.audioGroupIds.filter(g)),p.textGroupIds&&(p.textGroupIds=p.textGroupIds.filter(g)),p.urlId=0,!0):!1}).map(function(p,u){var i=p.details;return i!=null&&i.fragments&&i.fragments.forEach(function(n){n.level=u}),p});this._levels=_,this.hls.trigger(R.Events.LEVELS_UPDATED,{levels:_})},P(a,[{key:"levels",get:function(){return this._levels.length===0?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(f){var d,g=this._levels;if(g.length!==0&&!(this.currentLevelIndex===f&&(d=g[f])!==null&&d!==void 0&&d.details)){if(f<0||f>=g.length){var _=f<0;if(this.hls.trigger(R.Events.ERROR,{type:k.ErrorTypes.OTHER_ERROR,details:k.ErrorDetails.LEVEL_SWITCH_ERROR,level:f,fatal:_,reason:"invalid level idx"}),_)return;f=Math.min(f,g.length-1)}this.clearTimer();var p=this.currentLevelIndex,u=g[p],i=g[f];this.log("switching to level "+f+" from "+p),this.currentLevelIndex=f;var n=m({},i,{level:f,maxBitrate:i.maxBitrate,uri:i.uri,urlId:i.urlId});delete n._urlId,this.hls.trigger(R.Events.LEVEL_SWITCHING,n);var E=i.details;if(!E||E.live){var S=this.switchParams(i.uri,u==null?void 0:u.details);this.loadPlaylist(S)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(f){this.manualLevelIndex=f,this._startLevel===void 0&&(this._startLevel=f),f!==-1&&(this.level=f)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(f){this._firstLevel=f}},{key:"startLevel",get:function(){if(this._startLevel===void 0){var f=this.hls.config.startLevel;return f!==void 0?f:this._firstLevel}else return this._startLevel},set:function(f){this._startLevel=f}},{key:"nextLoadLevel",get:function(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(f){this.level=f,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=f)}}]),a}(O.default)},"./src/controller/level-helper.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"addGroupId",function(){return k}),M.d(H,"assignTrackIdsByGroup",function(){return j}),M.d(H,"updatePTS",function(){return w}),M.d(H,"updateFragPTSDTS",function(){return D}),M.d(H,"mergeDetails",function(){return m}),M.d(H,"mapPartIntersection",function(){return C}),M.d(H,"mapFragmentIntersection",function(){return P}),M.d(H,"adjustSliding",function(){return c}),M.d(H,"addSliding",function(){return A}),M.d(H,"computeReloadInterval",function(){return L}),M.d(H,"getFragmentWithSN",function(){return h}),M.d(H,"getPartWith",function(){return s});var F=M("./src/polyfills/number.ts"),R=M("./src/utils/logger.ts");function k(a,l,y){switch(l){case"audio":a.audioGroupIds||(a.audioGroupIds=[]),a.audioGroupIds.push(y);break;case"text":a.textGroupIds||(a.textGroupIds=[]),a.textGroupIds.push(y);break}}function j(a){var l={};a.forEach(function(y){var f=y.groupId||"";y.id=l[f]=l[f]||0,l[f]++})}function w(a,l,y){var f=a[l],d=a[y];O(f,d)}function O(a,l){var y=l.startPTS;if(Object(F.isFiniteNumber)(y)){var f=0,d;l.sn>a.sn?(f=y-a.start,d=a):(f=a.start-y,d=l),d.duration!==f&&(d.duration=f)}else if(l.sn>a.sn){var g=a.cc===l.cc;g&&a.minEndPTS?l.start=a.start+(a.minEndPTS-a.start):l.start=a.start+a.duration}else l.start=Math.max(a.start-l.duration,0)}function D(a,l,y,f,d,g){var _=f-y;_<=0&&(R.logger.warn("Fragment should have a positive duration",l),f=y+l.duration,g=d+l.duration);var p=y,u=f,i=l.startPTS,n=l.endPTS;if(Object(F.isFiniteNumber)(i)){var E=Math.abs(i-y);Object(F.isFiniteNumber)(l.deltaPTS)?l.deltaPTS=Math.max(E,l.deltaPTS):l.deltaPTS=E,p=Math.max(y,i),y=Math.min(y,i),d=Math.min(d,l.startDTS),u=Math.min(f,n),f=Math.max(f,n),g=Math.max(g,l.endDTS)}l.duration=f-y;var S=y-l.start;l.appendedPTS=f,l.start=l.startPTS=y,l.maxStartPTS=p,l.startDTS=d,l.endPTS=f,l.minEndPTS=u,l.endDTS=g;var I=l.sn;if(!a||I<a.startSN||I>a.endSN)return 0;var x,B=I-a.startSN,N=a.fragments;for(N[B]=l,x=B;x>0;x--)O(N[x],N[x-1]);for(x=B;x<N.length-1;x++)O(N[x],N[x+1]);return a.fragmentHint&&O(N[N.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,S}function m(a,l){for(var y=null,f=a.fragments,d=f.length-1;d>=0;d--){var g=f[d].initSegment;if(g){y=g;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;var _=0,p;if(P(a,l,function(I,x){var B;I.relurl&&(_=I.cc-x.cc),Object(F.isFiniteNumber)(I.startPTS)&&Object(F.isFiniteNumber)(I.endPTS)&&(x.start=x.startPTS=I.startPTS,x.startDTS=I.startDTS,x.appendedPTS=I.appendedPTS,x.maxStartPTS=I.maxStartPTS,x.endPTS=I.endPTS,x.endDTS=I.endDTS,x.minEndPTS=I.minEndPTS,x.duration=I.endPTS-I.startPTS,x.duration&&(p=x),l.PTSKnown=l.alignedSliding=!0),x.elementaryStreams=I.elementaryStreams,x.loader=I.loader,x.stats=I.stats,x.urlId=I.urlId,I.initSegment?(x.initSegment=I.initSegment,y=I.initSegment):(!x.initSegment||x.initSegment.relurl==((B=y)===null||B===void 0?void 0:B.relurl))&&(x.initSegment=y)}),l.skippedSegments&&(l.deltaUpdateFailed=l.fragments.some(function(I){return!I}),l.deltaUpdateFailed)){R.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var u=l.skippedSegments;u--;)l.fragments.shift();l.startSN=l.fragments[0].sn,l.startCC=l.fragments[0].cc}var i=l.fragments;if(_){R.logger.warn("discontinuity sliding from playlist, take drift into account");for(var n=0;n<i.length;n++)i[n].cc+=_}l.skippedSegments&&(l.startCC=l.fragments[0].cc),C(a.partList,l.partList,function(I,x){x.elementaryStreams=I.elementaryStreams,x.stats=I.stats}),p?D(l,p,p.startPTS,p.endPTS,p.startDTS,p.endDTS):c(a,l),i.length&&(l.totalduration=l.edge-i[0].start),l.driftStartTime=a.driftStartTime,l.driftStart=a.driftStart;var E=l.advancedDateTime;if(l.advanced&&E){var S=l.edge;l.driftStart||(l.driftStartTime=E,l.driftStart=S),l.driftEndTime=E,l.driftEnd=S}else l.driftEndTime=a.driftEndTime,l.driftEnd=a.driftEnd,l.advancedDateTime=a.advancedDateTime}function C(a,l,y){if(a&&l)for(var f=0,d=0,g=a.length;d<=g;d++){var _=a[d],p=l[d+f];_&&p&&_.index===p.index&&_.fragment.sn===p.fragment.sn?y(_,p):f--}}function P(a,l,y){for(var f=l.skippedSegments,d=Math.max(a.startSN,l.startSN)-l.startSN,g=(a.fragmentHint?1:0)+(f?l.endSN:Math.min(a.endSN,l.endSN))-l.startSN,_=l.startSN-a.startSN,p=l.fragmentHint?l.fragments.concat(l.fragmentHint):l.fragments,u=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments,i=d;i<=g;i++){var n=u[_+i],E=p[i];f&&!E&&i<f&&(E=l.fragments[i]=n),n&&E&&y(n,E)}}function c(a,l){var y=l.startSN+l.skippedSegments-a.startSN,f=a.fragments;y<0||y>=f.length||A(l,f[y].start)}function A(a,l){if(l){for(var y=a.fragments,f=a.skippedSegments;f<y.length;f++)y[f].start+=l;a.fragmentHint&&(a.fragmentHint.start+=l)}}function L(a,l){var y=1e3*a.levelTargetDuration,f=y/2,d=a.age,g=d>0&&d<y*3,_=l.loading.end-l.loading.start,p,u=a.availabilityDelay;if(a.updated===!1)if(g){var i=333*a.misses;p=Math.max(Math.min(f,_*2),i),a.availabilityDelay=(a.availabilityDelay||0)+p}else p=f;else g?(u=Math.min(u||y/2,d),a.availabilityDelay=u,p=u+y-d):p=y-_;return Math.round(p)}function h(a,l,y){if(!a||!a.details)return null;var f=a.details,d=f.fragments[l-f.startSN];return d||(d=f.fragmentHint,d&&d.sn===l)?d:l<f.startSN&&y&&y.sn===l?y:null}function s(a,l,y){if(!a||!a.details)return null;var f=a.details.partList;if(f)for(var d=f.length;d--;){var g=f[d];if(g.index===y&&g.fragment.sn===l)return g}return null}},"./src/controller/stream-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return f});var F=M("./src/polyfills/number.ts"),R=M("./src/controller/base-stream-controller.ts"),k=M("./src/is-supported.ts"),j=M("./src/events.ts"),w=M("./src/utils/buffer-helper.ts"),O=M("./src/controller/fragment-tracker.ts"),D=M("./src/types/loader.ts"),m=M("./src/loader/fragment.ts"),C=M("./src/demux/transmuxer-interface.ts"),P=M("./src/types/transmuxer.ts"),c=M("./src/controller/gap-controller.ts"),A=M("./src/errors.ts"),L=M("./src/utils/logger.ts");function h(d,g){for(var _=0;_<g.length;_++){var p=g[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}function s(d,g,_){return g&&h(d.prototype,g),_&&h(d,_),d}function a(d,g){d.prototype=Object.create(g.prototype),d.prototype.constructor=d,l(d,g)}function l(d,g){return l=Object.setPrototypeOf||function(p,u){return p.__proto__=u,p},l(d,g)}var y=100,f=function(d){a(g,d);function g(p,u){var i;return i=d.call(this,p,u,"[stream-controller]")||this,i.audioCodecSwap=!1,i.gapController=null,i.level=-1,i._forceStartLoad=!1,i.altAudio=!1,i.audioOnly=!1,i.fragPlaying=null,i.onvplaying=null,i.onvseeked=null,i.fragLastKbps=0,i.stalled=!1,i.couldBacktrack=!1,i.audioCodecSwitch=!1,i.videoBuffer=null,i._registerListeners(),i}var _=g.prototype;return _._registerListeners=function(){var u=this.hls;u.on(j.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.on(j.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.on(j.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.on(j.Events.MANIFEST_PARSED,this.onManifestParsed,this),u.on(j.Events.LEVEL_LOADING,this.onLevelLoading,this),u.on(j.Events.LEVEL_LOADED,this.onLevelLoaded,this),u.on(j.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),u.on(j.Events.ERROR,this.onError,this),u.on(j.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),u.on(j.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),u.on(j.Events.BUFFER_CREATED,this.onBufferCreated,this),u.on(j.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),u.on(j.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),u.on(j.Events.FRAG_BUFFERED,this.onFragBuffered,this)},_._unregisterListeners=function(){var u=this.hls;u.off(j.Events.MEDIA_ATTACHED,this.onMediaAttached,this),u.off(j.Events.MEDIA_DETACHING,this.onMediaDetaching,this),u.off(j.Events.MANIFEST_LOADING,this.onManifestLoading,this),u.off(j.Events.MANIFEST_PARSED,this.onManifestParsed,this),u.off(j.Events.LEVEL_LOADED,this.onLevelLoaded,this),u.off(j.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),u.off(j.Events.ERROR,this.onError,this),u.off(j.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),u.off(j.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),u.off(j.Events.BUFFER_CREATED,this.onBufferCreated,this),u.off(j.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),u.off(j.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),u.off(j.Events.FRAG_BUFFERED,this.onFragBuffered,this)},_.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},_.startLoad=function(u){if(this.levels){var i=this.lastCurrentTime,n=this.hls;if(this.stopLoad(),this.setInterval(y),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var E=n.startLevel;E===-1&&(n.config.testBandwidth?(E=0,this.bitrateTest=!0):E=n.nextAutoLevel),this.level=n.nextLoadLevel=E,this.loadedmetadata=!1}i>0&&u===-1&&(this.log("Override startPosition with lastCurrentTime @"+i.toFixed(3)),u=i),this.state=R.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=u,this.tick()}else this._forceStartLoad=!0,this.state=R.State.STOPPED},_.stopLoad=function(){this._forceStartLoad=!1,d.prototype.stopLoad.call(this)},_.doTick=function(){switch(this.state){case R.State.IDLE:this.doTickIdle();break;case R.State.WAITING_LEVEL:{var u,i=this.levels,n=this.level,E=i==null||(u=i[n])===null||u===void 0?void 0:u.details;if(E&&(!E.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(E))break;this.state=R.State.IDLE;break}break}case R.State.FRAG_LOADING_WAITING_RETRY:{var S,I=self.performance.now(),x=this.retryDate;(!x||I>=x||(S=this.media)!==null&&S!==void 0&&S.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.state=R.State.IDLE)}break;default:break}this.onTickEnd()},_.onTickEnd=function(){d.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},_.doTickIdle=function(){var u,i,n=this.hls,E=this.levelLastLoaded,S=this.levels,I=this.media,x=n.config,B=n.nextLoadLevel;if(!(E===null||!I&&(this.startFragRequested||!x.startFragPrefetch))&&!(this.altAudio&&this.audioOnly)&&!(!S||!S[B])){var N=S[B];this.level=n.nextLoadLevel=B;var K=N.details;if(!K||this.state===R.State.WAITING_LEVEL||K.live&&this.levelLastLoaded!==B){this.state=R.State.WAITING_LEVEL;return}var W=this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:I,D.PlaylistLevelType.MAIN);if(W!==null){var G=W.len,V=this.getMaxBufferLength(N.maxBitrate);if(!(G>=V)){if(this._streamEnded(W,K)){var X={};this.altAudio&&(X.type="video"),this.hls.trigger(j.Events.BUFFER_EOS,X),this.state=R.State.ENDED;return}var Z=W.end,q=this.getNextFragment(Z,K);if(this.couldBacktrack&&!this.fragPrevious&&q&&q.sn!=="initSegment"){var J=q.sn-K.startSN;J>1&&(q=K.fragments[J-1],this.fragmentTracker.removeFragment(q))}if(q&&this.fragmentTracker.getState(q)===O.FragmentState.OK&&this.nextLoadPosition>Z){var ee=this.audioOnly&&!this.altAudio?m.ElementaryStreamTypes.AUDIO:m.ElementaryStreamTypes.VIDEO;this.afterBufferFlushed(I,ee,D.PlaylistLevelType.MAIN),q=this.getNextFragment(this.nextLoadPosition,K)}!q||(q.initSegment&&!q.initSegment.data&&!this.bitrateTest&&(q=q.initSegment),((u=q.decryptdata)===null||u===void 0?void 0:u.keyFormat)==="identity"&&!((i=q.decryptdata)!==null&&i!==void 0&&i.key)?this.loadKey(q,K):this.loadFragment(q,K,Z))}}}},_.loadFragment=function(u,i,n){var E,S=this.fragmentTracker.getState(u);if(this.fragCurrent=u,S===O.FragmentState.BACKTRACKED){var I=this.fragmentTracker.getBacktrackData(u);if(I){this._handleFragmentLoadProgress(I),this._handleFragmentLoadComplete(I);return}else S=O.FragmentState.NOT_LOADED}S===O.FragmentState.NOT_LOADED||S===O.FragmentState.PARTIAL?u.sn==="initSegment"?this._loadInitSegment(u):this.bitrateTest?(u.bitrateTest=!0,this.log("Fragment "+u.sn+" of level "+u.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(u)):(this.startFragRequested=!0,d.prototype.loadFragment.call(this,u,i,n)):S===O.FragmentState.APPENDING?this.reduceMaxBufferLength(u.duration)&&this.fragmentTracker.removeFragment(u):((E=this.media)===null||E===void 0?void 0:E.buffered.length)===0&&this.fragmentTracker.removeAllFragments()},_.getAppendedFrag=function(u){var i=this.fragmentTracker.getAppendedFrag(u,D.PlaylistLevelType.MAIN);return i&&"fragment"in i?i.fragment:i},_.getBufferedFrag=function(u){return this.fragmentTracker.getBufferedFrag(u,D.PlaylistLevelType.MAIN)},_.followingBufferedFrag=function(u){return u?this.getBufferedFrag(u.end+.5):null},_.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},_.nextLevelSwitch=function(){var u=this.levels,i=this.media;if(i!=null&&i.readyState){var n,E=this.getAppendedFrag(i.currentTime);if(E&&E.start>1&&this.flushMainBuffer(0,E.start-1),!i.paused&&u){var S=this.hls.nextLoadLevel,I=u[S],x=this.fragLastKbps;x&&this.fragCurrent?n=this.fragCurrent.duration*I.maxBitrate/(1e3*x)+1:n=0}else n=0;var B=this.getBufferedFrag(i.currentTime+n);if(B){var N=this.followingBufferedFrag(B);if(N){this.abortCurrentFrag();var K=N.maxStartPTS?N.maxStartPTS:N.start,W=N.duration,G=Math.max(B.end,K+Math.min(Math.max(W-this.config.maxFragLookUpTolerance,W*.5),W*.75));this.flushMainBuffer(G,Number.POSITIVE_INFINITY)}}}},_.abortCurrentFrag=function(){var u=this.fragCurrent;this.fragCurrent=null,u!=null&&u.loader&&u.loader.abort(),this.state===R.State.KEY_LOADING&&(this.state=R.State.IDLE),this.nextLoadPosition=this.getLoadPosition()},_.flushMainBuffer=function(u,i){d.prototype.flushMainBuffer.call(this,u,i,this.altAudio?"video":null)},_.onMediaAttached=function(u,i){d.prototype.onMediaAttached.call(this,u,i);var n=i.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),n.addEventListener("playing",this.onvplaying),n.addEventListener("seeked",this.onvseeked),this.gapController=new c.default(this.config,n,this.fragmentTracker,this.hls)},_.onMediaDetaching=function(){var u=this.media;u&&(u.removeEventListener("playing",this.onvplaying),u.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),d.prototype.onMediaDetaching.call(this)},_.onMediaPlaying=function(){this.tick()},_.onMediaSeeked=function(){var u=this.media,i=u?u.currentTime:null;Object(F.isFiniteNumber)(i)&&this.log("Media seeked to "+i.toFixed(3)),this.tick()},_.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(j.Events.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=this.stalled=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null},_.onManifestParsed=function(u,i){var n=!1,E=!1,S;i.levels.forEach(function(I){S=I.audioCodec,S&&(S.indexOf("mp4a.40.2")!==-1&&(n=!0),S.indexOf("mp4a.40.5")!==-1&&(E=!0))}),this.audioCodecSwitch=n&&E&&!Object(k.changeTypeSupported)(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=i.levels,this.startFragRequested=!1},_.onLevelLoading=function(u,i){var n=this.levels;if(!(!n||this.state!==R.State.IDLE)){var E=n[i.level];(!E.details||E.details.live&&this.levelLastLoaded!==i.level||this.waitForCdnTuneIn(E.details))&&(this.state=R.State.WAITING_LEVEL)}},_.onLevelLoaded=function(u,i){var n,E=this.levels,S=i.level,I=i.details,x=I.totalduration;if(!E){this.warn("Levels were reset while loading level "+S);return}this.log("Level "+S+" loaded ["+I.startSN+","+I.endSN+"], cc ["+I.startCC+", "+I.endCC+"] duration:"+x);var B=this.fragCurrent;B&&(this.state===R.State.FRAG_LOADING||this.state===R.State.FRAG_LOADING_WAITING_RETRY)&&B.level!==i.level&&B.loader&&(this.state=R.State.IDLE,B.loader.abort());var N=E[S],K=0;if(I.live||(n=N.details)!==null&&n!==void 0&&n.live){if(I.fragments[0]||(I.deltaUpdateFailed=!0),I.deltaUpdateFailed)return;K=this.alignPlaylists(I,N.details)}if(N.details=I,this.levelLastLoaded=S,this.hls.trigger(j.Events.LEVEL_UPDATED,{details:I,level:S}),this.state===R.State.WAITING_LEVEL){if(this.waitForCdnTuneIn(I))return;this.state=R.State.IDLE}this.startFragRequested?I.live&&this.synchronizeToLiveEdge(I):this.setStartPosition(I,K),this.tick()},_._handleFragmentLoadProgress=function(u){var i,n=u.frag,E=u.part,S=u.payload,I=this.levels;if(!I){this.warn("Levels were reset while fragment load was in progress. Fragment "+n.sn+" of level "+n.level+" will not be buffered");return}var x=I[n.level],B=x.details;if(!B){this.warn("Dropping fragment "+n.sn+" of level "+n.level+" after level details were reset");return}var N=x.videoCodec,K=B.PTSKnown||!B.live,W=(i=n.initSegment)===null||i===void 0?void 0:i.data,G=this._getAudioCodec(x),V=this.transmuxer=this.transmuxer||new C.default(this.hls,D.PlaylistLevelType.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),X=E?E.index:-1,Z=X!==-1,q=new P.ChunkMetadata(n.level,n.sn,n.stats.chunkCount,S.byteLength,X,Z),J=this.initPTS[n.cc];V.push(S,W,G,N,n,E,B.totalduration,K,q,J)},_.onAudioTrackSwitching=function(u,i){var n=this.altAudio,E=!!i.url,S=i.id;if(!E){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var I=this.fragCurrent;I!=null&&I.loader&&(this.log("Switching to main audio track, cancel main fragment load"),I.loader.abort()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var x=this.hls;n&&x.trigger(j.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),x.trigger(j.Events.AUDIO_TRACK_SWITCHED,{id:S})}},_.onAudioTrackSwitched=function(u,i){var n=i.id,E=!!this.hls.audioTracks[n].url;if(E){var S=this.videoBuffer;S&&this.mediaBuffer!==S&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=S)}this.altAudio=E,this.tick()},_.onBufferCreated=function(u,i){var n=i.tracks,E,S,I=!1;for(var x in n){var B=n[x];if(B.id==="main"){if(S=x,E=B,x==="video"){var N=n[x];N&&(this.videoBuffer=N.buffer)}}else I=!0}I&&E?(this.log("Alternate track found, use "+S+".buffered to schedule main fragment loading"),this.mediaBuffer=E.buffer):this.mediaBuffer=this.media},_.onFragBuffered=function(u,i){var n=i.frag,E=i.part;if(!(n&&n.type!==D.PlaylistLevelType.MAIN)){if(this.fragContextChanged(n)){this.warn("Fragment "+n.sn+(E?" p: "+E.index:"")+" of level "+n.level+" finished buffering, but was aborted. state: "+this.state),this.state===R.State.PARSED&&(this.state=R.State.IDLE);return}var S=E?E.stats:n.stats;this.fragLastKbps=Math.round(8*S.total/(S.buffering.end-S.loading.first)),n.sn!=="initSegment"&&(this.fragPrevious=n),this.fragBufferedComplete(n,E)}},_.onError=function(u,i){switch(i.details){case A.ErrorDetails.FRAG_LOAD_ERROR:case A.ErrorDetails.FRAG_LOAD_TIMEOUT:case A.ErrorDetails.KEY_LOAD_ERROR:case A.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(D.PlaylistLevelType.MAIN,i);break;case A.ErrorDetails.LEVEL_LOAD_ERROR:case A.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==R.State.ERROR&&(i.fatal?(this.warn(""+i.details),this.state=R.State.ERROR):!i.levelRetry&&this.state===R.State.WAITING_LEVEL&&(this.state=R.State.IDLE));break;case A.ErrorDetails.BUFFER_FULL_ERROR:if(i.parent==="main"&&(this.state===R.State.PARSING||this.state===R.State.PARSED)){var n=!0,E=this.getFwdBufferInfo(this.media,D.PlaylistLevelType.MAIN);E&&E.len>.5&&(n=!this.reduceMaxBufferLength(E.len)),n&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}break;default:break}},_.checkBuffer=function(){var u=this.media,i=this.gapController;if(!(!u||!i||!u.readyState)){var n=w.BufferHelper.getBuffered(u);!this.loadedmetadata&&n.length?(this.loadedmetadata=!0,this.seekToStartPos()):i.poll(this.lastCurrentTime),this.lastCurrentTime=u.currentTime}},_.onFragLoadEmergencyAborted=function(){this.state=R.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},_.onBufferFlushed=function(u,i){var n=i.type;if(n!==m.ElementaryStreamTypes.AUDIO||this.audioOnly&&!this.altAudio){var E=(n===m.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(E,n,D.PlaylistLevelType.MAIN)}},_.onLevelsUpdated=function(u,i){this.levels=i.levels},_.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},_.seekToStartPos=function(){var u=this.media,i=u.currentTime,n=this.startPosition;if(n>=0&&i<n){if(u.seeking){L.logger.log("could not seek to "+n+", already seeking at "+i);return}var E=w.BufferHelper.getBuffered(u),S=E.length?E.start(0):0,I=S-n;I>0&&I<this.config.maxBufferHole&&(L.logger.log("adjusting start position by "+I+" to match buffer start"),n+=I,this.startPosition=n),this.log("seek to target start position "+n+" from current time "+i),u.currentTime=n}},_._getAudioCodec=function(u){var i=this.config.defaultAudioCodec||u.audioCodec;return this.audioCodecSwap&&i&&(this.log("Swapping audio codec"),i.indexOf("mp4a.40.5")!==-1?i="mp4a.40.2":i="mp4a.40.5"),i},_._loadBitrateTestFrag=function(u){var i=this;this._doFragLoad(u).then(function(n){var E=i.hls;if(!(!n||E.nextLoadLevel||i.fragContextChanged(u))){i.fragLoadError=0,i.state=R.State.IDLE,i.startFragRequested=!1,i.bitrateTest=!1;var S=u.stats;S.parsing.start=S.parsing.end=S.buffering.start=S.buffering.end=self.performance.now(),E.trigger(j.Events.FRAG_LOADED,n)}})},_._handleTransmuxComplete=function(u){var i,n="main",E=this.hls,S=u.remuxResult,I=u.chunkMeta,x=this.getCurrentContext(I);if(!x){this.warn("The loading context changed while buffering fragment "+I.sn+" of level "+I.level+". This chunk will not be buffered."),this.resetLiveStartWhenNotLoaded(I.level);return}var B=x.frag,N=x.part,K=x.level,W=S.video,G=S.text,V=S.id3,X=S.initSegment,Z=this.altAudio?void 0:S.audio;if(!this.fragContextChanged(B)){if(this.state=R.State.PARSING,X){X.tracks&&(this._bufferInitSegment(K,X.tracks,B,I),E.trigger(j.Events.FRAG_PARSING_INIT_SEGMENT,{frag:B,id:n,tracks:X.tracks}));var q=X.initPTS,J=X.timescale;Object(F.isFiniteNumber)(q)&&(this.initPTS[B.cc]=q,E.trigger(j.Events.INIT_PTS_FOUND,{frag:B,id:n,initPTS:q,timescale:J}))}if(W&&S.independent!==!1){if(K.details){var ee=W.startPTS,ie=W.endPTS,oe=W.startDTS,le=W.endDTS;if(N)N.elementaryStreams[W.type]={startPTS:ee,endPTS:ie,startDTS:oe,endDTS:le};else if(W.firstKeyFrame&&W.independent&&(this.couldBacktrack=!0),W.dropped&&W.independent){var ue=this.getLoadPosition()+this.config.maxBufferHole;if(ue<ee){this.backtrack(B);return}B.setElementaryStreamInfo(W.type,B.start,ie,B.start,le,!0)}B.setElementaryStreamInfo(W.type,ee,ie,oe,le),this.bufferFragmentData(W,B,N,I)}}else if(S.independent===!1){this.backtrack(B);return}if(Z){var he=Z.startPTS,me=Z.endPTS,Se=Z.startDTS,ye=Z.endDTS;N&&(N.elementaryStreams[m.ElementaryStreamTypes.AUDIO]={startPTS:he,endPTS:me,startDTS:Se,endDTS:ye}),B.setElementaryStreamInfo(m.ElementaryStreamTypes.AUDIO,he,me,Se,ye),this.bufferFragmentData(Z,B,N,I)}if(V!=null&&(i=V.samples)!==null&&i!==void 0&&i.length){var _e={frag:B,id:n,samples:V.samples};E.trigger(j.Events.FRAG_PARSING_METADATA,_e)}if(G){var Ce={frag:B,id:n,samples:G.samples};E.trigger(j.Events.FRAG_PARSING_USERDATA,Ce)}}},_._bufferInitSegment=function(u,i,n,E){var S=this;if(this.state===R.State.PARSING){this.audioOnly=!!i.audio&&!i.video,this.altAudio&&!this.audioOnly&&delete i.audio;var I=i.audio,x=i.video,B=i.audiovideo;if(I){var N=u.audioCodec,K=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(N&&(N.indexOf("mp4a.40.5")!==-1?N="mp4a.40.2":N="mp4a.40.5"),I.metadata.channelCount!==1&&K.indexOf("firefox")===-1&&(N="mp4a.40.5")),K.indexOf("android")!==-1&&I.container!=="audio/mpeg"&&(N="mp4a.40.2",this.log("Android: force audio codec to "+N)),u.audioCodec&&u.audioCodec!==N&&this.log('Swapping manifest audio codec "'+u.audioCodec+'" for "'+N+'"'),I.levelCodec=N,I.id="main",this.log("Init audio buffer, container:"+I.container+", codecs[selected/level/parsed]=["+(N||"")+"/"+(u.audioCodec||"")+"/"+I.codec+"]")}x&&(x.levelCodec=u.videoCodec,x.id="main",this.log("Init video buffer, container:"+x.container+", codecs[level/parsed]=["+(u.videoCodec||"")+"/"+x.codec+"]")),B&&this.log("Init audiovideo buffer, container:"+B.container+", codecs[level/parsed]=["+(u.attrs.CODECS||"")+"/"+B.codec+"]"),this.hls.trigger(j.Events.BUFFER_CODECS,i),Object.keys(i).forEach(function(W){var G=i[W],V=G.initSegment;V!=null&&V.byteLength&&S.hls.trigger(j.Events.BUFFER_APPENDING,{type:W,data:V,frag:n,part:null,chunkMeta:E,parent:n.type})}),this.tick()}},_.backtrack=function(u){this.couldBacktrack=!0,this.resetTransmuxer(),this.flushBufferGap(u);var i=this.fragmentTracker.backtrack(u);this.fragPrevious=null,this.nextLoadPosition=u.start,i?this.resetFragmentLoading(u):this.state=R.State.BACKTRACKING},_.checkFragmentChanged=function(){var u=this.media,i=null;if(u&&u.readyState>1&&u.seeking===!1){var n=u.currentTime;if(w.BufferHelper.isBuffered(u,n)?i=this.getAppendedFrag(n):w.BufferHelper.isBuffered(u,n+.1)&&(i=this.getAppendedFrag(n+.1)),i){var E=this.fragPlaying,S=i.level;(!E||i.sn!==E.sn||E.level!==S||i.urlId!==E.urlId)&&(this.hls.trigger(j.Events.FRAG_CHANGED,{frag:i}),(!E||E.level!==S)&&this.hls.trigger(j.Events.LEVEL_SWITCHED,{level:S}),this.fragPlaying=i)}}},s(g,[{key:"nextLevel",get:function(){var u=this.nextBufferedFrag;return u?u.level:-1}},{key:"currentLevel",get:function(){var u=this.media;if(u){var i=this.getAppendedFrag(u.currentTime);if(i)return i.level}return-1}},{key:"nextBufferedFrag",get:function(){var u=this.media;if(u){var i=this.getAppendedFrag(u.currentTime);return this.followingBufferedFrag(i)}else return null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),g}(R.default)},"./src/controller/subtitle-stream-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"SubtitleStreamController",function(){return a});var F=M("./src/events.ts"),R=M("./src/utils/logger.ts"),k=M("./src/utils/buffer-helper.ts"),j=M("./src/controller/fragment-finders.ts"),w=M("./src/utils/discontinuities.ts"),O=M("./src/controller/level-helper.ts"),D=M("./src/controller/fragment-tracker.ts"),m=M("./src/controller/base-stream-controller.ts"),C=M("./src/types/loader.ts"),P=M("./src/types/level.ts");function c(l,y){for(var f=0;f<y.length;f++){var d=y[f];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(l,d.key,d)}}function A(l,y,f){return y&&c(l.prototype,y),f&&c(l,f),l}function L(l,y){l.prototype=Object.create(y.prototype),l.prototype.constructor=l,h(l,y)}function h(l,y){return h=Object.setPrototypeOf||function(d,g){return d.__proto__=g,d},h(l,y)}var s=500,a=function(l){L(y,l);function y(d,g){var _;return _=l.call(this,d,g,"[subtitle-stream-controller]")||this,_.levels=[],_.currentTrackId=-1,_.tracksBuffered=[],_.mainDetails=null,_._registerListeners(),_}var f=y.prototype;return f.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},f._registerListeners=function(){var g=this.hls;g.on(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),g.on(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),g.on(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),g.on(F.Events.LEVEL_LOADED,this.onLevelLoaded,this),g.on(F.Events.ERROR,this.onError,this),g.on(F.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),g.on(F.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),g.on(F.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),g.on(F.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),g.on(F.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},f._unregisterListeners=function(){var g=this.hls;g.off(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),g.off(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),g.off(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),g.off(F.Events.LEVEL_LOADED,this.onLevelLoaded,this),g.off(F.Events.ERROR,this.onError,this),g.off(F.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),g.off(F.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),g.off(F.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),g.off(F.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),g.off(F.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)},f.startLoad=function(){this.stopLoad(),this.state=m.State.IDLE,this.setInterval(s),this.tick()},f.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},f.onLevelLoaded=function(g,_){this.mainDetails=_.details},f.onSubtitleFragProcessed=function(g,_){var p=_.frag,u=_.success;if(this.fragPrevious=p,this.state=m.State.IDLE,!!u){var i=this.tracksBuffered[this.currentTrackId];if(!!i){for(var n,E=p.start,S=0;S<i.length;S++)if(E>=i[S].start&&E<=i[S].end){n=i[S];break}var I=p.start+p.duration;n?n.end=I:(n={start:E,end:I},i.push(n)),this.fragmentTracker.fragBuffered(p)}}},f.onBufferFlushing=function(g,_){var p=_.startOffset,u=_.endOffset;if(p===0&&u!==Number.POSITIVE_INFINITY){var i=this.currentTrackId,n=this.levels;if(!n.length||!n[i]||!n[i].details)return;var E=n[i].details,S=E.targetduration,I=u-S;if(I<=0)return;_.endOffsetSubtitles=Math.max(0,I),this.tracksBuffered.forEach(function(x){for(var B=0;B<x.length;){if(x[B].end<=I){x.shift();continue}else if(x[B].start<I)x[B].start=I;else break;B++}}),this.fragmentTracker.removeFragmentsInRange(p,I,C.PlaylistLevelType.SUBTITLE)}},f.onError=function(g,_){var p,u=_.frag;!u||u.type!==C.PlaylistLevelType.SUBTITLE||((p=this.fragCurrent)!==null&&p!==void 0&&p.loader&&this.fragCurrent.loader.abort(),this.state=m.State.IDLE)},f.onSubtitleTracksUpdated=function(g,_){var p=this,u=_.subtitleTracks;this.tracksBuffered=[],this.levels=u.map(function(i){return new P.Level(i)}),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach(function(i){p.tracksBuffered[i.id]=[]}),this.mediaBuffer=null},f.onSubtitleTrackSwitch=function(g,_){if(this.currentTrackId=_.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}var p=this.levels[this.currentTrackId];p!=null&&p.details?(this.mediaBuffer=this.mediaBufferTimeRanges,this.setInterval(s)):this.mediaBuffer=null},f.onSubtitleTrackLoaded=function(g,_){var p,u=_.details,i=_.id,n=this.currentTrackId,E=this.levels;if(!!E.length){var S=E[n];if(!(i>=E.length||i!==n||!S)){if(this.mediaBuffer=this.mediaBufferTimeRanges,u.live||(p=S.details)!==null&&p!==void 0&&p.live){var I=this.mainDetails;if(u.deltaUpdateFailed||!I)return;var x=I.fragments[0];if(!S.details)u.hasProgramDateTime&&I.hasProgramDateTime?Object(w.alignPDT)(u,I):x&&Object(O.addSliding)(u,x.start);else{var B=this.alignPlaylists(u,S.details);B===0&&x&&Object(O.addSliding)(u,x.start)}}if(S.details=u,this.levelLastLoaded=i,this.tick(),u.live&&!this.fragCurrent&&this.media&&this.state===m.State.IDLE){var N=Object(j.findFragmentByPTS)(null,u.fragments,this.media.currentTime,0);N||(this.warn("Subtitle playlist not aligned with playback"),S.details=void 0)}}}},f._handleFragmentLoadComplete=function(g){var _=g.frag,p=g.payload,u=_.decryptdata,i=this.hls;if(!this.fragContextChanged(_)&&p&&p.byteLength>0&&u&&u.key&&u.iv&&u.method==="AES-128"){var n=performance.now();this.decrypter.webCryptoDecrypt(new Uint8Array(p),u.key.buffer,u.iv.buffer).then(function(E){var S=performance.now();i.trigger(F.Events.FRAG_DECRYPTED,{frag:_,payload:E,stats:{tstart:n,tdecrypt:S}})})}},f.doTick=function(){if(!this.media){this.state=m.State.IDLE;return}if(this.state===m.State.IDLE){var g,_=this.currentTrackId,p=this.levels;if(!p.length||!p[_]||!p[_].details)return;var u=p[_].details,i=u.targetduration,n=this.config,E=this.media,S=k.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges,E.currentTime-i,n.maxBufferHole),I=S.end,x=S.len,B=this.getMaxBufferLength()+i;if(x>B)return;console.assert(u,"Subtitle track details are defined on idle subtitle stream controller tick");var N=u.fragments,K=N.length,W=u.edge,G,V=this.fragPrevious;if(I<W){var X=n.maxFragLookUpTolerance;V&&u.hasProgramDateTime&&(G=Object(j.findFragmentByPDT)(N,V.endProgramDateTime,X)),G||(G=Object(j.findFragmentByPTS)(V,N,I,X),!G&&V&&V.start<N[0].start&&(G=N[0]))}else G=N[K-1];(g=G)!==null&&g!==void 0&&g.encrypted?(R.logger.log("Loading key for "+G.sn),this.state=m.State.KEY_LOADING,this.hls.trigger(F.Events.KEY_LOADING,{frag:G})):G&&this.fragmentTracker.getState(G)===D.FragmentState.NOT_LOADED&&this.loadFragment(G,u,I)}},f.loadFragment=function(g,_,p){this.fragCurrent=g,l.prototype.loadFragment.call(this,g,_,p)},A(y,[{key:"mediaBufferTimeRanges",get:function(){return this.tracksBuffered[this.currentTrackId]||[]}}]),y}(m.default)},"./src/controller/subtitle-track-controller.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/events.ts"),R=M("./src/utils/texttrack-utils.ts"),k=M("./src/controller/base-playlist-controller.ts"),j=M("./src/types/loader.ts");function w(c,A){for(var L=0;L<A.length;L++){var h=A[L];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}function O(c,A,L){return A&&w(c.prototype,A),L&&w(c,L),c}function D(c,A){c.prototype=Object.create(A.prototype),c.prototype.constructor=c,m(c,A)}function m(c,A){return m=Object.setPrototypeOf||function(h,s){return h.__proto__=s,h},m(c,A)}var C=function(c){D(A,c);function A(h){var s;return s=c.call(this,h,"[subtitle-track-controller]")||this,s.media=null,s.tracks=[],s.groupId=null,s.tracksInGroup=[],s.trackId=-1,s.selectDefaultTrack=!0,s.queuedDefaultTrack=-1,s.trackChangeListener=function(){return s.onTextTracksChanged()},s.asyncPollTrackChange=function(){return s.pollTrackChange(0)},s.useTextTrackPolling=!1,s.subtitlePollingInterval=-1,s.subtitleDisplay=!0,s.registerListeners(),s}var L=A.prototype;return L.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,c.prototype.destroy.call(this)},L.registerListeners=function(){var s=this.hls;s.on(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),s.on(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.on(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.on(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.on(F.Events.LEVEL_LOADING,this.onLevelLoading,this),s.on(F.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),s.on(F.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),s.on(F.Events.ERROR,this.onError,this)},L.unregisterListeners=function(){var s=this.hls;s.off(F.Events.MEDIA_ATTACHED,this.onMediaAttached,this),s.off(F.Events.MEDIA_DETACHING,this.onMediaDetaching,this),s.off(F.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.off(F.Events.MANIFEST_PARSED,this.onManifestParsed,this),s.off(F.Events.LEVEL_LOADING,this.onLevelLoading,this),s.off(F.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),s.off(F.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),s.off(F.Events.ERROR,this.onError,this)},L.onMediaAttached=function(s,a){this.media=a.media,!!this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},L.pollTrackChange=function(s){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,s)},L.onMediaDetaching=function(){if(!!this.media){self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId);var s=P(this.media.textTracks);s.forEach(function(a){Object(R.clearCurrentCues)(a)}),this.subtitleTrack=-1,this.media=null}},L.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},L.onManifestParsed=function(s,a){this.tracks=a.subtitleTracks},L.onSubtitleTrackLoaded=function(s,a){var l=a.id,y=a.details,f=this.trackId,d=this.tracksInGroup[f];if(!d){this.warn("Invalid subtitle track id "+l);return}var g=d.details;d.details=a.details,this.log("subtitle track "+l+" loaded ["+y.startSN+"-"+y.endSN+"]"),l===this.trackId&&(this.retryCount=0,this.playlistLoaded(l,a,g))},L.onLevelLoading=function(s,a){this.switchLevel(a.level)},L.onLevelSwitching=function(s,a){this.switchLevel(a.level)},L.switchLevel=function(s){var a=this.hls.levels[s];if(!!(a!=null&&a.textGroupIds)){var l=a.textGroupIds[a.urlId];if(this.groupId!==l){var y=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,f=this.tracks.filter(function(_){return!l||_.groupId===l});this.tracksInGroup=f;var d=this.findTrackId(y==null?void 0:y.name)||this.findTrackId();this.groupId=l;var g={subtitleTracks:f};this.log("Updating subtitle tracks, "+f.length+' track(s) found in "'+l+'" group-id'),this.hls.trigger(F.Events.SUBTITLE_TRACKS_UPDATED,g),d!==-1&&this.setSubtitleTrack(d,y)}}},L.findTrackId=function(s){for(var a=this.tracksInGroup,l=0;l<a.length;l++){var y=a[l];if((!this.selectDefaultTrack||y.default)&&(!s||s===y.name))return y.id}return-1},L.onError=function(s,a){c.prototype.onError.call(this,s,a),!(a.fatal||!a.context)&&a.context.type===j.PlaylistContextType.SUBTITLE_TRACK&&a.context.id===this.trackId&&a.context.groupId===this.groupId&&this.retryLoadingOrFail(a)},L.loadPlaylist=function(s){var a=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(a)){var l=a.id,y=a.groupId,f=a.url;if(s)try{f=s.addDirectives(f)}catch(d){this.warn("Could not construct new URL with HLS Delivery Directives: "+d)}this.log("Loading subtitle playlist for id "+l),this.hls.trigger(F.Events.SUBTITLE_TRACK_LOADING,{url:f,id:l,groupId:y,deliveryDirectives:s||null})}},L.toggleTrackModes=function(s){var a=this,l=this.media,y=this.subtitleDisplay,f=this.trackId;if(!!l){var d=P(l.textTracks),g=d.filter(function(u){return u.groupId===a.groupId});if(s===-1)[].slice.call(d).forEach(function(u){u.mode="disabled"});else{var _=g[f];_&&(_.mode="disabled")}var p=g[s];p&&(p.mode=y?"showing":"hidden")}},L.setSubtitleTrack=function(s,a){var l,y=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=s;return}if(this.trackId!==s&&this.toggleTrackModes(s),!(this.trackId===s&&(s===-1||(l=y[s])!==null&&l!==void 0&&l.details)||s<-1||s>=y.length)){this.clearTimer();var f=y[s];if(this.log("Switching to subtitle track "+s),this.trackId=s,f){var d=f.id,g=f.groupId,_=g===void 0?"":g,p=f.name,u=f.type,i=f.url;this.hls.trigger(F.Events.SUBTITLE_TRACK_SWITCH,{id:d,groupId:_,name:p,type:u,url:i});var n=this.switchParams(f.url,a==null?void 0:a.details);this.loadPlaylist(n)}else this.hls.trigger(F.Events.SUBTITLE_TRACK_SWITCH,{id:s})}},L.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!(!this.media||!this.hls.config.renderTextTracksNatively)){for(var s=-1,a=P(this.media.textTracks),l=0;l<a.length;l++)if(a[l].mode==="hidden")s=l;else if(a[l].mode==="showing"){s=l;break}this.subtitleTrack!==s&&(this.subtitleTrack=s)}},O(A,[{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(s){this.selectDefaultTrack=!1;var a=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(s,a)}}]),A}(k.default);function P(c){for(var A=[],L=0;L<c.length;L++){var h=c[L];h.kind==="subtitles"&&h.label&&A.push(c[L])}return A}H.default=C},"./src/controller/timeline-controller.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"TimelineController",function(){return P});var F=M("./src/polyfills/number.ts"),R=M("./src/events.ts"),k=M("./src/utils/cea-608-parser.ts"),j=M("./src/utils/output-filter.ts"),w=M("./src/utils/webvtt-parser.ts"),O=M("./src/utils/texttrack-utils.ts"),D=M("./src/utils/imsc1-ttml-parser.ts"),m=M("./src/types/loader.ts"),C=M("./src/utils/logger.ts"),P=function(){function h(a){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.prevCC=-1,this.vttCCs=L(),this.captionsProperties=void 0,this.hls=a,this.config=a.config,this.Cues=a.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var l=new j.default(this,"textTrack1"),y=new j.default(this,"textTrack2"),f=new j.default(this,"textTrack3"),d=new j.default(this,"textTrack4");this.cea608Parser1=new k.default(1,l,y),this.cea608Parser2=new k.default(3,f,d)}a.on(R.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),a.on(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),a.on(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),a.on(R.Events.MANIFEST_LOADED,this.onManifestLoaded,this),a.on(R.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),a.on(R.Events.FRAG_LOADING,this.onFragLoading,this),a.on(R.Events.FRAG_LOADED,this.onFragLoaded,this),a.on(R.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),a.on(R.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),a.on(R.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),a.on(R.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),a.on(R.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)}var s=h.prototype;return s.destroy=function(){var l=this.hls;l.off(R.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),l.off(R.Events.MEDIA_DETACHING,this.onMediaDetaching,this),l.off(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),l.off(R.Events.MANIFEST_LOADED,this.onManifestLoaded,this),l.off(R.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),l.off(R.Events.FRAG_LOADING,this.onFragLoading,this),l.off(R.Events.FRAG_LOADED,this.onFragLoaded,this),l.off(R.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),l.off(R.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),l.off(R.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),l.off(R.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),l.off(R.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},s.addCues=function(l,y,f,d,g){for(var _=!1,p=g.length;p--;){var u=g[p],i=A(u[0],u[1],y,f);if(i>=0&&(u[0]=Math.min(u[0],y),u[1]=Math.max(u[1],f),_=!0,i/(f-y)>.5))return}if(_||g.push([y,f]),this.config.renderTextTracksNatively){var n=this.captionsTracks[l];this.Cues.newCue(n,y,f,d)}else{var E=this.Cues.newCue(null,y,f,d);this.hls.trigger(R.Events.CUES_PARSED,{type:"captions",cues:E,track:l})}},s.onInitPtsFound=function(l,y){var f=this,d=y.frag,g=y.id,_=y.initPTS,p=y.timescale,u=this.unparsedVttFrags;g==="main"&&(this.initPTS[d.cc]=_,this.timescale[d.cc]=p),u.length&&(this.unparsedVttFrags=[],u.forEach(function(i){f.onFragLoaded(R.Events.FRAG_LOADED,i)}))},s.getExistingTrack=function(l){var y=this.media;if(y)for(var f=0;f<y.textTracks.length;f++){var d=y.textTracks[f];if(d[l])return d}return null},s.createCaptionsTrack=function(l){this.config.renderTextTracksNatively?this.createNativeTrack(l):this.createNonNativeTrack(l)},s.createNativeTrack=function(l){if(!this.captionsTracks[l]){var y=this.captionsProperties,f=this.captionsTracks,d=this.media,g=y[l],_=g.label,p=g.languageCode,u=this.getExistingTrack(l);if(u)f[l]=u,Object(O.clearCurrentCues)(f[l]),Object(O.sendAddTrackEvent)(f[l],d);else{var i=this.createTextTrack("captions",_,p);i&&(i[l]=!0,f[l]=i)}}},s.createNonNativeTrack=function(l){if(!this.nonNativeCaptionsTracks[l]){var y=this.captionsProperties[l];if(!!y){var f=y.label,d={_id:l,label:f,kind:"captions",default:y.media?!!y.media.default:!1,closedCaptions:y.media};this.nonNativeCaptionsTracks[l]=d,this.hls.trigger(R.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[d]})}}},s.createTextTrack=function(l,y,f){var d=this.media;if(!!d)return d.addTextTrack(l,y,f)},s.onMediaAttaching=function(l,y){this.media=y.media,this._cleanTracks()},s.onMediaDetaching=function(){var l=this.captionsTracks;Object.keys(l).forEach(function(y){Object(O.clearCurrentCues)(l[y]),delete l[y]}),this.nonNativeCaptionsTracks={}},s.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs=L(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},s._cleanTracks=function(){var l=this.media;if(!!l){var y=l.textTracks;if(y)for(var f=0;f<y.length;f++)Object(O.clearCurrentCues)(y[f])}},s.onSubtitleTracksUpdated=function(l,y){var f=this;this.textTracks=[];var d=y.subtitleTracks||[],g=d.some(function(i){return i.textCodec===D.IMSC1_CODEC});if(this.config.enableWebVTT||g&&this.config.enableIMSC1){var _=this.tracks&&d&&this.tracks.length===d.length;if(this.tracks=d||[],this.config.renderTextTracksNatively){var p=this.media?this.media.textTracks:[];this.tracks.forEach(function(i,n){var E;if(n<p.length){for(var S=null,I=0;I<p.length;I++)if(c(p[I],i)){S=p[I];break}S&&(E=S)}E?Object(O.clearCurrentCues)(E):(E=f.createTextTrack("subtitles",i.name,i.lang),E&&(E.mode="disabled")),E&&(E.groupId=i.groupId,f.textTracks.push(E))})}else if(!_&&this.tracks&&this.tracks.length){var u=this.tracks.map(function(i){return{label:i.name,kind:i.type.toLowerCase(),default:i.default,subtitleTrack:i}});this.hls.trigger(R.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:u})}}},s.onManifestLoaded=function(l,y){var f=this;this.config.enableCEA708Captions&&y.captions&&y.captions.forEach(function(d){var g=/(?:CC|SERVICE)([1-4])/.exec(d.instreamId);if(!!g){var _="textTrack"+g[1],p=f.captionsProperties[_];!p||(p.label=d.name,d.lang&&(p.languageCode=d.lang),p.media=d)}})},s.onFragLoading=function(l,y){var f=this.cea608Parser1,d=this.cea608Parser2,g=this.lastSn;if(!(!this.enabled||!(f&&d))&&y.frag.type===m.PlaylistLevelType.MAIN){var _=y.frag.sn;_!==g+1&&(f.reset(),d.reset()),this.lastSn=_}},s.onFragLoaded=function(l,y){var f=y.frag,d=y.payload,g=this.initPTS,_=this.unparsedVttFrags;if(f.type===m.PlaylistLevelType.SUBTITLE)if(d.byteLength){if(!Object(F.isFiniteNumber)(g[f.cc])){_.push(y),g.length&&this.hls.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:f,error:new Error("Missing initial subtitle PTS")});return}var p=f.decryptdata;if(p==null||p.key==null||p.method!=="AES-128"){var u=this.tracks[f.level],i=this.vttCCs;i[f.cc]||(i[f.cc]={start:f.start,prevCC:this.prevCC,new:!0},this.prevCC=f.cc),u&&u.textCodec===D.IMSC1_CODEC?this._parseIMSC1(f,d):this._parseVTTs(f,d,i)}}else this.hls.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:f,error:new Error("Empty subtitle payload")})},s._parseIMSC1=function(l,y){var f=this,d=this.hls;Object(D.parseIMSC1)(y,this.initPTS[l.cc],this.timescale[l.cc],function(g){f._appendCues(g,l.level),d.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:l})},function(g){C.logger.log("Failed to parse IMSC1: "+g),d.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:l,error:g})})},s._parseVTTs=function(l,y,f){var d=this,g=this.hls;Object(w.parseWebVTT)(y,this.initPTS[l.cc],this.timescale[l.cc],f,l.cc,l.start,function(_){d._appendCues(_,l.level),g.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:l})},function(_){d._fallbackToIMSC1(l,y),C.logger.log("Failed to parse VTT cue: "+_),g.trigger(R.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:l,error:_})})},s._fallbackToIMSC1=function(l,y){var f=this,d=this.tracks[l.level];d.textCodec||Object(D.parseIMSC1)(y,this.initPTS[l.cc],this.timescale[l.cc],function(){d.textCodec=D.IMSC1_CODEC,f._parseIMSC1(l,y)},function(){d.textCodec="wvtt"})},s._appendCues=function(l,y){var f=this.hls;if(this.config.renderTextTracksNatively){var d=this.textTracks[y];if(d.mode==="disabled")return;l.forEach(function(p){return Object(O.addCueToTrack)(d,p)})}else{var g=this.tracks[y],_=g.default?"default":"subtitles"+y;f.trigger(R.Events.CUES_PARSED,{type:"subtitles",cues:l,track:_})}},s.onFragDecrypted=function(l,y){var f=y.frag;if(f.type===m.PlaylistLevelType.SUBTITLE){if(!Object(F.isFiniteNumber)(this.initPTS[f.cc])){this.unparsedVttFrags.push(y);return}this.onFragLoaded(R.Events.FRAG_LOADED,y)}},s.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},s.onFragParsingUserdata=function(l,y){var f=this.cea608Parser1,d=this.cea608Parser2;if(!(!this.enabled||!(f&&d)))for(var g=0;g<y.samples.length;g++){var _=y.samples[g].bytes;if(_){var p=this.extractCea608Data(_);f.addData(y.samples[g].pts,p[0]),d.addData(y.samples[g].pts,p[1])}}},s.onBufferFlushing=function(l,y){var f=y.startOffset,d=y.endOffset,g=y.endOffsetSubtitles,_=y.type,p=this.media;if(!(!p||p.currentTime<d)){if(!_||_==="video"){var u=this.captionsTracks;Object.keys(u).forEach(function(n){return Object(O.removeCuesInRange)(u[n],f,d)})}if(this.config.renderTextTracksNatively&&f===0&&g!==void 0){var i=this.textTracks;Object.keys(i).forEach(function(n){return Object(O.removeCuesInRange)(i[n],f,g)})}}},s.extractCea608Data=function(l){for(var y=l[0]&31,f=2,d=[[],[]],g=0;g<y;g++){var _=l[f++],p=127&l[f++],u=127&l[f++],i=(4&_)!=0,n=3&_;p===0&&u===0||i&&(n===0||n===1)&&(d[n].push(p),d[n].push(u))}return d},h}();function c(h,s){return h&&h.label===s.name&&!(h.textTrack1||h.textTrack2)}function A(h,s,a,l){return Math.min(s,l)-Math.max(h,a)}function L(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}}}},"./src/crypt/aes-crypto.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return F});var F=function(){function R(j,w){this.subtle=void 0,this.aesIV=void 0,this.subtle=j,this.aesIV=w}var k=R.prototype;return k.decrypt=function(w,O){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},O,w)},R}()},"./src/crypt/aes-decryptor.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"removePadding",function(){return R}),M.d(H,"default",function(){return k});var F=M("./src/utils/typed-array.ts");function R(j){var w=j.byteLength,O=w&&new DataView(j.buffer).getUint8(w-1);return O?Object(F.sliceUint8)(j,0,w-O):j}var k=function(){function j(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var w=j.prototype;return w.uint8ArrayToUint32Array_=function(D){for(var m=new DataView(D),C=new Uint32Array(4),P=0;P<4;P++)C[P]=m.getUint32(P*4);return C},w.initTable=function(){var D=this.sBox,m=this.invSBox,C=this.subMix,P=C[0],c=C[1],A=C[2],L=C[3],h=this.invSubMix,s=h[0],a=h[1],l=h[2],y=h[3],f=new Uint32Array(256),d=0,g=0,_=0;for(_=0;_<256;_++)_<128?f[_]=_<<1:f[_]=_<<1^283;for(_=0;_<256;_++){var p=g^g<<1^g<<2^g<<3^g<<4;p=p>>>8^p&255^99,D[d]=p,m[p]=d;var u=f[d],i=f[u],n=f[i],E=f[p]*257^p*16843008;P[d]=E<<24|E>>>8,c[d]=E<<16|E>>>16,A[d]=E<<8|E>>>24,L[d]=E,E=n*16843009^i*65537^u*257^d*16843008,s[p]=E<<24|E>>>8,a[p]=E<<16|E>>>16,l[p]=E<<8|E>>>24,y[p]=E,d?(d=u^f[f[f[n^u]]],g^=f[f[g]]):d=g=1}},w.expandKey=function(D){for(var m=this.uint8ArrayToUint32Array_(D),C=!0,P=0;P<m.length&&C;)C=m[P]===this.key[P],P++;if(!C){this.key=m;var c=this.keySize=m.length;if(c!==4&&c!==6&&c!==8)throw new Error("Invalid aes key size="+c);var A=this.ksRows=(c+6+1)*4,L,h,s=this.keySchedule=new Uint32Array(A),a=this.invKeySchedule=new Uint32Array(A),l=this.sBox,y=this.rcon,f=this.invSubMix,d=f[0],g=f[1],_=f[2],p=f[3],u,i;for(L=0;L<A;L++){if(L<c){u=s[L]=m[L];continue}i=u,L%c==0?(i=i<<8|i>>>24,i=l[i>>>24]<<24|l[i>>>16&255]<<16|l[i>>>8&255]<<8|l[i&255],i^=y[L/c|0]<<24):c>6&&L%c==4&&(i=l[i>>>24]<<24|l[i>>>16&255]<<16|l[i>>>8&255]<<8|l[i&255]),s[L]=u=(s[L-c]^i)>>>0}for(h=0;h<A;h++)L=A-h,h&3?i=s[L]:i=s[L-4],h<4||L<=4?a[h]=i:a[h]=d[l[i>>>24]]^g[l[i>>>16&255]]^_[l[i>>>8&255]]^p[l[i&255]],a[h]=a[h]>>>0}},w.networkToHostOrderSwap=function(D){return D<<24|(D&65280)<<8|(D&16711680)>>8|D>>>24},w.decrypt=function(D,m,C){for(var P=this.keySize+6,c=this.invKeySchedule,A=this.invSBox,L=this.invSubMix,h=L[0],s=L[1],a=L[2],l=L[3],y=this.uint8ArrayToUint32Array_(C),f=y[0],d=y[1],g=y[2],_=y[3],p=new Int32Array(D),u=new Int32Array(p.length),i,n,E,S,I,x,B,N,K,W,G,V,X,Z,q=this.networkToHostOrderSwap;m<p.length;){for(K=q(p[m]),W=q(p[m+1]),G=q(p[m+2]),V=q(p[m+3]),I=K^c[0],x=V^c[1],B=G^c[2],N=W^c[3],X=4,Z=1;Z<P;Z++)i=h[I>>>24]^s[x>>16&255]^a[B>>8&255]^l[N&255]^c[X],n=h[x>>>24]^s[B>>16&255]^a[N>>8&255]^l[I&255]^c[X+1],E=h[B>>>24]^s[N>>16&255]^a[I>>8&255]^l[x&255]^c[X+2],S=h[N>>>24]^s[I>>16&255]^a[x>>8&255]^l[B&255]^c[X+3],I=i,x=n,B=E,N=S,X=X+4;i=A[I>>>24]<<24^A[x>>16&255]<<16^A[B>>8&255]<<8^A[N&255]^c[X],n=A[x>>>24]<<24^A[B>>16&255]<<16^A[N>>8&255]<<8^A[I&255]^c[X+1],E=A[B>>>24]<<24^A[N>>16&255]<<16^A[I>>8&255]<<8^A[x&255]^c[X+2],S=A[N>>>24]<<24^A[I>>16&255]<<16^A[x>>8&255]<<8^A[B&255]^c[X+3],u[m]=q(i^f),u[m+1]=q(S^d),u[m+2]=q(E^g),u[m+3]=q(n^_),f=K,d=W,g=G,_=V,m=m+4}return u.buffer},j}()},"./src/crypt/decrypter.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return m});var F=M("./src/crypt/aes-crypto.ts"),R=M("./src/crypt/fast-aes-key.ts"),k=M("./src/crypt/aes-decryptor.ts"),j=M("./src/utils/logger.ts"),w=M("./src/utils/mp4-tools.ts"),O=M("./src/utils/typed-array.ts"),D=16,m=function(){function C(c,A,L){var h=L===void 0?{}:L,s=h.removePKCS7Padding,a=s===void 0?!0:s;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=c,this.config=A,this.removePKCS7Padding=a,a)try{var l=self.crypto;l&&(this.subtle=l.subtle||l.webkitSubtle)}catch(y){}this.subtle===null&&(this.config.enableSoftwareAES=!0)}var P=C.prototype;return P.destroy=function(){this.observer=null},P.isSync=function(){return this.config.enableSoftwareAES},P.flush=function(){var A=this.currentResult;if(!A){this.reset();return}var L=new Uint8Array(A);return this.reset(),this.removePKCS7Padding?Object(k.removePadding)(L):L},P.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},P.decrypt=function(A,L,h,s){if(this.config.enableSoftwareAES){this.softwareDecrypt(new Uint8Array(A),L,h);var a=this.flush();a&&s(a.buffer)}else this.webCryptoDecrypt(new Uint8Array(A),L,h).then(s)},P.softwareDecrypt=function(A,L,h){var s=this.currentIV,a=this.currentResult,l=this.remainderData;this.logOnce("JS AES decrypt"),l&&(A=Object(w.appendUint8Array)(l,A),this.remainderData=null);var y=this.getValidChunk(A);if(!y.length)return null;s&&(h=s);var f=this.softwareDecrypter;f||(f=this.softwareDecrypter=new k.default),f.expandKey(L);var d=a;return this.currentResult=f.decrypt(y.buffer,0,h),this.currentIV=Object(O.sliceUint8)(y,-16).buffer,d||null},P.webCryptoDecrypt=function(A,L,h){var s=this,a=this.subtle;return(this.key!==L||!this.fastAesKey)&&(this.key=L,this.fastAesKey=new R.default(a,L)),this.fastAesKey.expandKey().then(function(l){if(!a)return Promise.reject(new Error("web crypto not initialized"));var y=new F.default(a,h);return y.decrypt(A.buffer,l)}).catch(function(l){return s.onWebCryptoError(l,A,L,h)})},P.onWebCryptoError=function(A,L,h,s){return j.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",A),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(L,h,s)},P.getValidChunk=function(A){var L=A,h=A.length-A.length%D;return h!==A.length&&(L=Object(O.sliceUint8)(A,0,h),this.remainderData=Object(O.sliceUint8)(A,h)),L},P.logOnce=function(A){!this.logEnabled||(j.logger.log("[decrypter.ts]: "+A),this.logEnabled=!1)},C}()},"./src/crypt/fast-aes-key.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return F});var F=function(){function R(j,w){this.subtle=void 0,this.key=void 0,this.subtle=j,this.key=w}var k=R.prototype;return k.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},R}()},"./src/demux/aacdemuxer.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/demux/base-audio-demuxer.ts"),R=M("./src/demux/adts.ts"),k=M("./src/utils/logger.ts"),j=M("./src/demux/id3.ts");function w(m,C){m.prototype=Object.create(C.prototype),m.prototype.constructor=m,O(m,C)}function O(m,C){return O=Object.setPrototypeOf||function(c,A){return c.__proto__=A,c},O(m,C)}var D=function(m){w(C,m);function C(c,A){var L;return L=m.call(this)||this,L.observer=void 0,L.config=void 0,L.observer=c,L.config=A,L}var P=C.prototype;return P.resetInitSegment=function(A,L,h){m.prototype.resetInitSegment.call(this,A,L,h),this._audioTrack={container:"audio/adts",type:"audio",id:0,pid:-1,sequenceNumber:0,isAAC:!0,samples:[],manifestCodec:A,duration:h,inputTimeScale:9e4,dropped:0}},C.probe=function(A){if(!A)return!1;for(var L=j.getID3Data(A,0)||[],h=L.length,s=A.length;h<s;h++)if(R.probe(A,h))return k.logger.log("ADTS sync word found !"),!0;return!1},P.canParse=function(A,L){return R.canParse(A,L)},P.appendFrame=function(A,L,h){R.initTrackConfig(A,this.observer,L,h,A.manifestCodec);var s=R.appendFrame(A,L,h,this.initPTS,this.frameIndex);if(s&&s.missing===0)return s},C}(F.default);D.minProbeByteLength=9,H.default=D},"./src/demux/adts.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"getAudioConfig",function(){return j}),M.d(H,"isHeaderPattern",function(){return w}),M.d(H,"getHeaderLength",function(){return O}),M.d(H,"getFullFrameLength",function(){return D}),M.d(H,"canGetFrameLength",function(){return m}),M.d(H,"isHeader",function(){return C}),M.d(H,"canParse",function(){return P}),M.d(H,"probe",function(){return c}),M.d(H,"initTrackConfig",function(){return A}),M.d(H,"getFrameDuration",function(){return L}),M.d(H,"parseFrameHeader",function(){return h}),M.d(H,"appendFrame",function(){return s});var F=M("./src/utils/logger.ts"),R=M("./src/errors.ts"),k=M("./src/events.ts");function j(a,l,y,f){var d,g,_,p,u=navigator.userAgent.toLowerCase(),i=f,n=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];d=((l[y+2]&192)>>>6)+1;var E=(l[y+2]&60)>>>2;if(E>n.length-1){a.trigger(k.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+E});return}return _=(l[y+2]&1)<<2,_|=(l[y+3]&192)>>>6,F.logger.log("manifest codec:"+f+", ADTS type:"+d+", samplingIndex:"+E),/firefox/i.test(u)?E>=6?(d=5,p=new Array(4),g=E-3):(d=2,p=new Array(2),g=E):u.indexOf("android")!==-1?(d=2,p=new Array(2),g=E):(d=5,p=new Array(4),f&&(f.indexOf("mp4a.40.29")!==-1||f.indexOf("mp4a.40.5")!==-1)||!f&&E>=6?g=E-3:((f&&f.indexOf("mp4a.40.2")!==-1&&(E>=6&&_===1||/vivaldi/i.test(u))||!f&&_===1)&&(d=2,p=new Array(2)),g=E)),p[0]=d<<3,p[0]|=(E&14)>>1,p[1]|=(E&1)<<7,p[1]|=_<<3,d===5&&(p[1]|=(g&14)>>1,p[2]=(g&1)<<7,p[2]|=2<<2,p[3]=0),{config:p,samplerate:n[E],channelCount:_,codec:"mp4a.40."+d,manifestCodec:i}}function w(a,l){return a[l]===255&&(a[l+1]&246)==240}function O(a,l){return a[l+1]&1?7:9}function D(a,l){return(a[l+3]&3)<<11|a[l+4]<<3|(a[l+5]&224)>>>5}function m(a,l){return l+5<a.length}function C(a,l){return l+1<a.length&&w(a,l)}function P(a,l){return m(a,l)&&w(a,l)&&D(a,l)<=a.length-l}function c(a,l){if(C(a,l)){var y=O(a,l);if(l+y>=a.length)return!1;var f=D(a,l);if(f<=y)return!1;var d=l+f;return d===a.length||C(a,d)}return!1}function A(a,l,y,f,d){if(!a.samplerate){var g=j(l,y,f,d);if(!g)return;a.config=g.config,a.samplerate=g.samplerate,a.channelCount=g.channelCount,a.codec=g.codec,a.manifestCodec=g.manifestCodec,F.logger.log("parsed codec:"+a.codec+", rate:"+g.samplerate+", channels:"+g.channelCount)}}function L(a){return 1024*9e4/a}function h(a,l,y,f,d){var g=O(a,l),_=D(a,l);if(_-=g,_>0){var p=y+f*d;return{headerLength:g,frameLength:_,stamp:p}}}function s(a,l,y,f,d){var g=L(a.samplerate),_=h(l,y,f,d,g);if(_){var p=_.frameLength,u=_.headerLength,i=_.stamp,n=u+p,E=Math.max(0,y+n-l.length),S;E?(S=new Uint8Array(n-u),S.set(l.subarray(y+u,l.length),0)):S=l.subarray(y+u,y+n);var I={unit:S,pts:i};return E||a.samples.push(I),{sample:I,length:n,missing:E}}}},"./src/demux/base-audio-demuxer.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"initPTSFn",function(){return D});var F=M("./src/polyfills/number.ts"),R=M("./src/demux/id3.ts"),k=M("./src/demux/dummy-demuxed-track.ts"),j=M("./src/utils/mp4-tools.ts"),w=M("./src/utils/typed-array.ts"),O=function(){function m(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.initPTS=null}var C=m.prototype;return C.resetInitSegment=function(c,A,L){this._id3Track={type:"id3",id:0,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},C.resetTimeStamp=function(){},C.resetContiguity=function(){},C.canParse=function(c,A){return!1},C.appendFrame=function(c,A,L){},C.demux=function(c,A){this.cachedData&&(c=Object(j.appendUint8Array)(this.cachedData,c),this.cachedData=null);var L=R.getID3Data(c,0),h=L?L.length:0,s,a,l=this._audioTrack,y=this._id3Track,f=L?R.getTimeStamp(L):void 0,d=c.length;for((this.frameIndex===0||this.initPTS===null)&&(this.initPTS=D(f,A)),L&&L.length>0&&y.samples.push({pts:this.initPTS,dts:this.initPTS,data:L}),a=this.initPTS;h<d;){if(this.canParse(c,h)){var g=this.appendFrame(l,c,h);g?(this.frameIndex++,a=g.sample.pts,h+=g.length,s=h):h=d}else R.canParse(c,h)?(L=R.getID3Data(c,h),y.samples.push({pts:a,dts:a,data:L}),h+=L.length,s=h):h++;if(h===d&&s!==d){var _=Object(w.sliceUint8)(c,s);this.cachedData?this.cachedData=Object(j.appendUint8Array)(this.cachedData,_):this.cachedData=_}}return{audioTrack:l,avcTrack:Object(k.dummyTrack)(),id3Track:y,textTrack:Object(k.dummyTrack)()}},C.demuxSampleAes=function(c,A,L){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},C.flush=function(c){var A=this.cachedData;return A&&(this.cachedData=null,this.demux(A,0)),this.frameIndex=0,{audioTrack:this._audioTrack,avcTrack:Object(k.dummyTrack)(),id3Track:this._id3Track,textTrack:Object(k.dummyTrack)()}},C.destroy=function(){},m}(),D=function(C,P){return Object(F.isFiniteNumber)(C)?C*90:P*9e4};H.default=O},"./src/demux/chunk-cache.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return F});var F=function(){function k(){this.chunks=[],this.dataLength=0}var j=k.prototype;return j.push=function(O){this.chunks.push(O),this.dataLength+=O.length},j.flush=function(){var O=this.chunks,D=this.dataLength,m;if(O.length)O.length===1?m=O[0]:m=R(O,D);else return new Uint8Array(0);return this.reset(),m},j.reset=function(){this.chunks.length=0,this.dataLength=0},k}();function R(k,j){for(var w=new Uint8Array(j),O=0,D=0;D<k.length;D++){var m=k[D];w.set(m,O),O+=m.length}return w}},"./src/demux/dummy-demuxed-track.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"dummyTrack",function(){return F});function F(){return{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},"./src/demux/exp-golomb.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/utils/logger.ts"),R=function(){function k(w){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=w,this.bytesAvailable=w.byteLength,this.word=0,this.bitsAvailable=0}var j=k.prototype;return j.loadWord=function(){var O=this.data,D=this.bytesAvailable,m=O.byteLength-D,C=new Uint8Array(4),P=Math.min(4,D);if(P===0)throw new Error("no bytes available");C.set(O.subarray(m,m+P)),this.word=new DataView(C.buffer).getUint32(0),this.bitsAvailable=P*8,this.bytesAvailable-=P},j.skipBits=function(O){var D;this.bitsAvailable>O?(this.word<<=O,this.bitsAvailable-=O):(O-=this.bitsAvailable,D=O>>3,O-=D>>3,this.bytesAvailable-=D,this.loadWord(),this.word<<=O,this.bitsAvailable-=O)},j.readBits=function(O){var D=Math.min(this.bitsAvailable,O),m=this.word>>>32-D;return O>32&&F.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=D,this.bitsAvailable>0?this.word<<=D:this.bytesAvailable>0&&this.loadWord(),D=O-D,D>0&&this.bitsAvailable?m<<D|this.readBits(D):m},j.skipLZ=function(){var O;for(O=0;O<this.bitsAvailable;++O)if((this.word&2147483648>>>O)!=0)return this.word<<=O,this.bitsAvailable-=O,O;return this.loadWord(),O+this.skipLZ()},j.skipUEG=function(){this.skipBits(1+this.skipLZ())},j.skipEG=function(){this.skipBits(1+this.skipLZ())},j.readUEG=function(){var O=this.skipLZ();return this.readBits(O+1)-1},j.readEG=function(){var O=this.readUEG();return 1&O?1+O>>>1:-1*(O>>>1)},j.readBoolean=function(){return this.readBits(1)===1},j.readUByte=function(){return this.readBits(8)},j.readUShort=function(){return this.readBits(16)},j.readUInt=function(){return this.readBits(32)},j.skipScalingList=function(O){for(var D=8,m=8,C,P=0;P<O;P++)m!==0&&(C=this.readEG(),m=(D+C+256)%256),D=m===0?D:m},j.readSPS=function(){var O=0,D=0,m=0,C=0,P,c,A,L=this.readUByte.bind(this),h=this.readBits.bind(this),s=this.readUEG.bind(this),a=this.readBoolean.bind(this),l=this.skipBits.bind(this),y=this.skipEG.bind(this),f=this.skipUEG.bind(this),d=this.skipScalingList.bind(this);L();var g=L();if(h(5),l(3),L(),f(),g===100||g===110||g===122||g===244||g===44||g===83||g===86||g===118||g===128){var _=s();if(_===3&&l(1),f(),f(),l(1),a())for(c=_!==3?8:12,A=0;A<c;A++)a()&&(A<6?d(16):d(64))}f();var p=s();if(p===0)s();else if(p===1)for(l(1),y(),y(),P=s(),A=0;A<P;A++)y();f(),l(1);var u=s(),i=s(),n=h(1);n===0&&l(1),l(1),a()&&(O=s(),D=s(),m=s(),C=s());var E=[1,1];if(a()&&a()){var S=L();switch(S){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:{E=[L()<<8|L(),L()<<8|L()];break}}}return{width:Math.ceil((u+1)*16-O*2-D*2),height:(2-n)*(i+1)*16-(n?2:4)*(m+C),pixelRatio:E}},j.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},k}();H.default=R},"./src/demux/id3.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"isHeader",function(){return F}),M.d(H,"isFooter",function(){return R}),M.d(H,"getID3Data",function(){return k}),M.d(H,"canParse",function(){return w}),M.d(H,"getTimeStamp",function(){return O}),M.d(H,"isTimeStampFrame",function(){return D}),M.d(H,"getID3Frames",function(){return C}),M.d(H,"decodeFrame",function(){return P}),M.d(H,"utf8ArrayToStr",function(){return s}),M.d(H,"testables",function(){return a});var F=function(d,g){return g+10<=d.length&&d[g]===73&&d[g+1]===68&&d[g+2]===51&&d[g+3]<255&&d[g+4]<255&&d[g+6]<128&&d[g+7]<128&&d[g+8]<128&&d[g+9]<128},R=function(d,g){return g+10<=d.length&&d[g]===51&&d[g+1]===68&&d[g+2]===73&&d[g+3]<255&&d[g+4]<255&&d[g+6]<128&&d[g+7]<128&&d[g+8]<128&&d[g+9]<128},k=function(d,g){for(var _=g,p=0;F(d,g);){p+=10;var u=j(d,g+6);p+=u,R(d,g+10)&&(p+=10),g+=p}if(p>0)return d.subarray(_,_+p)},j=function(d,g){var _=0;return _=(d[g]&127)<<21,_|=(d[g+1]&127)<<14,_|=(d[g+2]&127)<<7,_|=d[g+3]&127,_},w=function(d,g){return F(d,g)&&j(d,g+6)+10<=d.length-g},O=function(d){for(var g=C(d),_=0;_<g.length;_++){var p=g[_];if(D(p))return h(p)}},D=function(d){return d&&d.key==="PRIV"&&d.info==="com.apple.streaming.transportStreamTimestamp"},m=function(d){var g=String.fromCharCode(d[0],d[1],d[2],d[3]),_=j(d,4),p=10;return{type:g,size:_,data:d.subarray(p,p+_)}},C=function(d){for(var g=0,_=[];F(d,g);){var p=j(d,g+6);g+=10;for(var u=g+p;g+8<u;){var i=m(d.subarray(g)),n=P(i);n&&_.push(n),g+=i.size+10}R(d,g)&&(g+=10)}return _},P=function(d){return d.type==="PRIV"?c(d):d.type[0]==="W"?L(d):A(d)},c=function(d){if(!(d.size<2)){var g=s(d.data,!0),_=new Uint8Array(d.data.subarray(g.length+1));return{key:d.type,info:g,data:_.buffer}}},A=function(d){if(!(d.size<2)){if(d.type==="TXXX"){var g=1,_=s(d.data.subarray(g),!0);g+=_.length+1;var p=s(d.data.subarray(g));return{key:d.type,info:_,data:p}}var u=s(d.data.subarray(1));return{key:d.type,data:u}}},L=function(d){if(d.type==="WXXX"){if(d.size<2)return;var g=1,_=s(d.data.subarray(g),!0);g+=_.length+1;var p=s(d.data.subarray(g));return{key:d.type,info:_,data:p}}var u=s(d.data);return{key:d.type,data:u}},h=function(d){if(d.data.byteLength===8){var g=new Uint8Array(d.data),_=g[3]&1,p=(g[4]<<23)+(g[5]<<15)+(g[6]<<7)+g[7];return p/=45,_&&(p+=4772185884e-2),Math.round(p)}},s=function(d,g){g===void 0&&(g=!1);var _=y();if(_){var p=_.decode(d);if(g){var u=p.indexOf("\0");return u!==-1?p.substring(0,u):p}return p.replace(/\0/g,"")}for(var i=d.length,n,E,S,I="",x=0;x<i;){if(n=d[x++],n===0&&g)return I;if(n===0||n===3)continue;switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:I+=String.fromCharCode(n);break;case 12:case 13:E=d[x++],I+=String.fromCharCode((n&31)<<6|E&63);break;case 14:E=d[x++],S=d[x++],I+=String.fromCharCode((n&15)<<12|(E&63)<<6|(S&63)<<0);break;default:}}return I},a={decodeTextFrame:A},l;function y(){return!l&&typeof self.TextDecoder!="undefined"&&(l=new self.TextDecoder("utf-8")),l}},"./src/demux/mp3demuxer.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/demux/base-audio-demuxer.ts"),R=M("./src/demux/id3.ts"),k=M("./src/utils/logger.ts"),j=M("./src/demux/mpegaudio.ts");function w(m,C){m.prototype=Object.create(C.prototype),m.prototype.constructor=m,O(m,C)}function O(m,C){return O=Object.setPrototypeOf||function(c,A){return c.__proto__=A,c},O(m,C)}var D=function(m){w(C,m);function C(){return m.apply(this,arguments)||this}var P=C.prototype;return P.resetInitSegment=function(A,L,h){m.prototype.resetInitSegment.call(this,A,L,h),this._audioTrack={container:"audio/mpeg",type:"audio",id:0,pid:-1,sequenceNumber:0,isAAC:!1,samples:[],manifestCodec:A,duration:h,inputTimeScale:9e4,dropped:0}},C.probe=function(A){if(!A)return!1;for(var L=R.getID3Data(A,0)||[],h=L.length,s=A.length;h<s;h++)if(j.probe(A,h))return k.logger.log("MPEG Audio sync word found !"),!0;return!1},P.canParse=function(A,L){return j.canParse(A,L)},P.appendFrame=function(A,L,h){if(this.initPTS!==null)return j.appendFrame(A,L,h,this.initPTS,this.frameIndex)},C}(F.default);D.minProbeByteLength=4,H.default=D},"./src/demux/mp4demuxer.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/utils/mp4-tools.ts"),R=M("./src/demux/dummy-demuxed-track.ts"),k=function(){function j(O,D){this.remainderData=null,this.config=void 0,this.config=D}var w=j.prototype;return w.resetTimeStamp=function(){},w.resetInitSegment=function(){},w.resetContiguity=function(){},j.probe=function(D){return Object(F.findBox)({data:D,start:0,end:Math.min(D.length,16384)},["moof"]).length>0},w.demux=function(D){var m=D,C=Object(R.dummyTrack)();if(this.config.progressive){this.remainderData&&(m=Object(F.appendUint8Array)(this.remainderData,D));var P=Object(F.segmentValidRange)(m);this.remainderData=P.remainder,C.samples=P.valid||new Uint8Array}else C.samples=m;return{audioTrack:Object(R.dummyTrack)(),avcTrack:C,id3Track:Object(R.dummyTrack)(),textTrack:Object(R.dummyTrack)()}},w.flush=function(){var D=Object(R.dummyTrack)();return D.samples=this.remainderData||new Uint8Array,this.remainderData=null,{audioTrack:Object(R.dummyTrack)(),avcTrack:D,id3Track:Object(R.dummyTrack)(),textTrack:Object(R.dummyTrack)()}},w.demuxSampleAes=function(D,m,C){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},w.destroy=function(){},j}();k.minProbeByteLength=1024,H.default=k},"./src/demux/mpegaudio.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"appendFrame",function(){return O}),M.d(H,"parseHeader",function(){return D}),M.d(H,"isHeaderPattern",function(){return m}),M.d(H,"isHeader",function(){return C}),M.d(H,"canParse",function(){return P}),M.d(H,"probe",function(){return c});var F=null,R=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],k=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],j=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],w=[0,1,1,4];function O(A,L,h,s,a){if(!(h+24>L.length)){var l=D(L,h);if(l&&h+l.frameLength<=L.length){var y=l.samplesPerFrame*9e4/l.sampleRate,f=s+a*y,d={unit:L.subarray(h,h+l.frameLength),pts:f,dts:f};return A.config=[],A.channelCount=l.channelCount,A.samplerate=l.sampleRate,A.samples.push(d),{sample:d,length:l.frameLength,missing:0}}}}function D(A,L){var h=A[L+1]>>3&3,s=A[L+1]>>1&3,a=A[L+2]>>4&15,l=A[L+2]>>2&3;if(h!==1&&a!==0&&a!==15&&l!==3){var y=A[L+2]>>1&1,f=A[L+3]>>6,d=h===3?3-s:s===3?3:4,g=R[d*14+a-1]*1e3,_=h===3?0:h===2?1:2,p=k[_*3+l],u=f===3?1:2,i=j[h][s],n=w[s],E=i*8*n,S=Math.floor(i*g/p+y)*n;if(F===null){var I=navigator.userAgent||"",x=I.match(/Chrome\/(\d+)/i);F=x?parseInt(x[1]):0}var B=!!F&&F<=87;return B&&s===2&&g>=224e3&&f===0&&(A[L+3]=A[L+3]|128),{sampleRate:p,channelCount:u,frameLength:S,samplesPerFrame:E}}}function m(A,L){return A[L]===255&&(A[L+1]&224)==224&&(A[L+1]&6)!=0}function C(A,L){return L+1<A.length&&m(A,L)}function P(A,L){var h=4;return m(A,L)&&h<=A.length-L}function c(A,L){if(L+1<A.length&&m(A,L)){var h=4,s=D(A,L),a=h;s!=null&&s.frameLength&&(a=s.frameLength);var l=L+a;return l===A.length||C(A,l)}return!1}},"./src/demux/sample-aes.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/crypt/decrypter.ts"),R=M("./src/demux/tsdemuxer.ts"),k=function(){function j(O,D,m){this.keyData=void 0,this.decrypter=void 0,this.keyData=m,this.decrypter=new F.default(O,D,{removePKCS7Padding:!1})}var w=j.prototype;return w.decryptBuffer=function(D,m){this.decrypter.decrypt(D,this.keyData.key.buffer,this.keyData.iv.buffer,m)},w.decryptAacSample=function(D,m,C,P){var c=D[m].unit,A=c.subarray(16,c.length-c.length%16),L=A.buffer.slice(A.byteOffset,A.byteOffset+A.length),h=this;this.decryptBuffer(L,function(s){var a=new Uint8Array(s);c.set(a,16),P||h.decryptAacSamples(D,m+1,C)})},w.decryptAacSamples=function(D,m,C){for(;;m++){if(m>=D.length){C();return}if(!(D[m].unit.length<32)){var P=this.decrypter.isSync();if(this.decryptAacSample(D,m,C,P),!P)return}}},w.getAvcEncryptedData=function(D){for(var m=Math.floor((D.length-48)/160)*16+16,C=new Int8Array(m),P=0,c=32;c<=D.length-16;c+=160,P+=16)C.set(D.subarray(c,c+16),P);return C},w.getAvcDecryptedUnit=function(D,m){for(var C=new Uint8Array(m),P=0,c=32;c<=D.length-16;c+=160,P+=16)D.set(C.subarray(P,P+16),c);return D},w.decryptAvcSample=function(D,m,C,P,c,A){var L=Object(R.discardEPB)(c.data),h=this.getAvcEncryptedData(L),s=this;this.decryptBuffer(h.buffer,function(a){c.data=s.getAvcDecryptedUnit(L,a),A||s.decryptAvcSamples(D,m,C+1,P)})},w.decryptAvcSamples=function(D,m,C,P){if(D instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;m++,C=0){if(m>=D.length){P();return}for(var c=D[m].units;!(C>=c.length);C++){var A=c[C];if(!(A.data.length<=48||A.type!==1&&A.type!==5)){var L=this.decrypter.isSync();if(this.decryptAvcSample(D,m,C,P,A,L),!L)return}}}},j}();H.default=k},"./src/demux/transmuxer-interface.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return c});var F=M("./node_modules/webworkify-webpack/index.js"),R=M.n(F),k=M("./src/events.ts"),j=M("./src/demux/transmuxer.ts"),w=M("./src/utils/logger.ts"),O=M("./src/errors.ts"),D=M("./src/utils/mediasource-helper.ts"),m=M("./node_modules/eventemitter3/index.js"),C=M.n(m),P=Object(D.getMediaSource)()||{isTypeSupported:function(){return!1}},c=function(){function A(h,s,a,l){var y=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.hls=h,this.id=s,this.onTransmuxComplete=a,this.onFlush=l;var f=h.config,d=function(i,n){n=n||{},n.frag=y.frag,n.id=y.id,h.trigger(i,n)};this.observer=new m.EventEmitter,this.observer.on(k.Events.FRAG_DECRYPTED,d),this.observer.on(k.Events.ERROR,d);var g={mp4:P.isTypeSupported("video/mp4"),mpeg:P.isTypeSupported("audio/mpeg"),mp3:P.isTypeSupported('audio/mp4; codecs="mp3"')},_=navigator.vendor;if(f.enableWorker&&typeof Worker!="undefined"){w.logger.log("demuxing in webworker");var p;try{p=this.worker=F("./src/demux/transmuxer-worker.ts"),this.onwmsg=this.onWorkerMessage.bind(this),p.addEventListener("message",this.onwmsg),p.onerror=function(u){h.trigger(k.Events.ERROR,{type:O.ErrorTypes.OTHER_ERROR,details:O.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",error:new Error(u.message+"  ("+u.filename+":"+u.lineno+")")})},p.postMessage({cmd:"init",typeSupported:g,vendor:_,id:s,config:JSON.stringify(f)})}catch(u){w.logger.warn("Error in worker:",u),w.logger.error("Error while initializing DemuxerWorker, fallback to inline"),p&&self.URL.revokeObjectURL(p.objectURL),this.transmuxer=new j.default(this.observer,g,f,_,s),this.worker=null}}else this.transmuxer=new j.default(this.observer,g,f,_,s)}var L=A.prototype;return L.destroy=function(){var s=this.worker;if(s)s.removeEventListener("message",this.onwmsg),s.terminate(),this.worker=null;else{var a=this.transmuxer;a&&(a.destroy(),this.transmuxer=null)}var l=this.observer;l&&l.removeAllListeners(),this.observer=null},L.push=function(s,a,l,y,f,d,g,_,p,u){var i=this;p.transmuxing.start=self.performance.now();var n=this.transmuxer,E=this.worker,S=d?d.start:f.start,I=f.decryptdata,x=this.frag,B=!(x&&f.cc===x.cc),N=!(x&&p.level===x.level),K=x?p.sn-x.sn:-1,W=this.part?p.part-this.part.index:1,G=!N&&(K===1||K===0&&W===1),V=self.performance.now();(N||K||f.stats.parsing.start===0)&&(f.stats.parsing.start=V),d&&(W||!G)&&(d.stats.parsing.start=V);var X=new j.TransmuxState(B,G,_,N,S);if(!G||B){w.logger.log("[transmuxer-interface, "+f.type+"]: Starting new transmux session for sn: "+p.sn+" p: "+p.part+" level: "+p.level+" id: "+p.id+`
        discontinuity: `+B+`
        trackSwitch: `+N+`
        contiguous: `+G+`
        accurateTimeOffset: `+_+`
        timeOffset: `+S);var Z=new j.TransmuxConfig(l,y,a,g,u);this.configureTransmuxer(Z)}if(this.frag=f,this.part=d,E)E.postMessage({cmd:"demux",data:s,decryptdata:I,chunkMeta:p,state:X},s instanceof ArrayBuffer?[s]:[]);else if(n){var q=n.push(s,I,p,X);Object(j.isPromise)(q)?q.then(function(J){i.handleTransmuxComplete(J)}):this.handleTransmuxComplete(q)}},L.flush=function(s){var a=this;s.transmuxing.start=self.performance.now();var l=this.transmuxer,y=this.worker;if(y)y.postMessage({cmd:"flush",chunkMeta:s});else if(l){var f=l.flush(s);Object(j.isPromise)(f)?f.then(function(d){a.handleFlushResult(d,s)}):this.handleFlushResult(f,s)}},L.handleFlushResult=function(s,a){var l=this;s.forEach(function(y){l.handleTransmuxComplete(y)}),this.onFlush(a)},L.onWorkerMessage=function(s){var a=s.data,l=this.hls;switch(a.event){case"init":{self.URL.revokeObjectURL(this.worker.objectURL);break}case"transmuxComplete":{this.handleTransmuxComplete(a.data);break}case"flush":{this.onFlush(a.data);break}default:{a.data=a.data||{},a.data.frag=this.frag,a.data.id=this.id,l.trigger(a.event,a.data);break}}},L.configureTransmuxer=function(s){var a=this.worker,l=this.transmuxer;a?a.postMessage({cmd:"configure",config:s}):l&&l.configure(s)},L.handleTransmuxComplete=function(s){s.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(s)},A}()},"./src/demux/transmuxer-worker.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return O});var F=M("./src/demux/transmuxer.ts"),R=M("./src/events.ts"),k=M("./src/utils/logger.ts"),j=M("./node_modules/eventemitter3/index.js"),w=M.n(j);function O(c){var A=new j.EventEmitter,L=function(s,a){c.postMessage({event:s,data:a})};A.on(R.Events.FRAG_DECRYPTED,L),A.on(R.Events.ERROR,L),c.addEventListener("message",function(h){var s=h.data;switch(s.cmd){case"init":{var a=JSON.parse(s.config);c.transmuxer=new F.default(A,s.typeSupported,a,s.vendor,s.id),Object(k.enableLogs)(a.debug),L("init",null);break}case"configure":{c.transmuxer.configure(s.config);break}case"demux":{var l=c.transmuxer.push(s.data,s.decryptdata,s.chunkMeta,s.state);Object(F.isPromise)(l)?l.then(function(d){D(c,d)}):D(c,l);break}case"flush":{var y=s.chunkMeta,f=c.transmuxer.flush(y);Object(F.isPromise)(f)?f.then(function(d){C(c,d,y)}):C(c,f,y);break}default:break}})}function D(c,A){if(!P(A.remuxResult)){var L=[],h=A.remuxResult,s=h.audio,a=h.video;s&&m(L,s),a&&m(L,a),c.postMessage({event:"transmuxComplete",data:A},L)}}function m(c,A){A.data1&&c.push(A.data1.buffer),A.data2&&c.push(A.data2.buffer)}function C(c,A,L){A.forEach(function(h){D(c,h)}),c.postMessage({event:"flush",data:L})}function P(c){return!c.audio&&!c.video&&!c.text&&!c.id3&&!c.initSegment}},"./src/demux/transmuxer.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return a}),M.d(H,"isPromise",function(){return f}),M.d(H,"TransmuxConfig",function(){return d}),M.d(H,"TransmuxState",function(){return g});var F=M("./src/events.ts"),R=M("./src/errors.ts"),k=M("./src/crypt/decrypter.ts"),j=M("./src/demux/aacdemuxer.ts"),w=M("./src/demux/mp4demuxer.ts"),O=M("./src/demux/tsdemuxer.ts"),D=M("./src/demux/mp3demuxer.ts"),m=M("./src/remux/mp4-remuxer.ts"),C=M("./src/remux/passthrough-remuxer.ts"),P=M("./src/demux/chunk-cache.ts"),c=M("./src/utils/mp4-tools.ts"),A=M("./src/utils/logger.ts"),L;try{L=self.performance.now.bind(self.performance)}catch(_){A.logger.debug("Unable to use Performance API on this environment"),L=self.Date.now}var h=[{demux:O.default,remux:m.default},{demux:w.default,remux:C.default},{demux:j.default,remux:m.default},{demux:D.default,remux:m.default}],s=1024;h.forEach(function(_){var p=_.demux;s=Math.max(s,p.minProbeByteLength)});var a=function(){function _(u,i,n,E,S){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.cache=new P.default,this.observer=u,this.typeSupported=i,this.config=n,this.vendor=E,this.id=S}var p=_.prototype;return p.configure=function(i){this.transmuxConfig=i,this.decrypter&&this.decrypter.reset()},p.push=function(i,n,E,S){var I=this,x=E.transmuxing;x.executeStart=L();var B=new Uint8Array(i),N=this.cache,K=this.config,W=this.currentTransmuxState,G=this.transmuxConfig;S&&(this.currentTransmuxState=S);var V=l(B,n);if(V&&V.method==="AES-128"){var X=this.getDecrypter();if(K.enableSoftwareAES){var Z=X.softwareDecrypt(B,V.key.buffer,V.iv.buffer);if(!Z)return x.executeEnd=L(),y(E);B=new Uint8Array(Z)}else return this.decryptionPromise=X.webCryptoDecrypt(B,V.key.buffer,V.iv.buffer).then(function(Fe){var Ne=I.push(Fe,null,E);return I.decryptionPromise=null,Ne}),this.decryptionPromise}var q=S||W,J=q.contiguous,ee=q.discontinuity,ie=q.trackSwitch,oe=q.accurateTimeOffset,le=q.timeOffset,ue=G.audioCodec,he=G.videoCodec,me=G.defaultInitPts,Se=G.duration,ye=G.initSegmentData;if((ee||ie)&&this.resetInitSegment(ye,ue,he,Se),ee&&this.resetInitialTimestamp(me),J||this.resetContiguity(),this.needsProbing(B,ee,ie)){if(N.dataLength){var _e=N.flush();B=Object(c.appendUint8Array)(_e,B)}this.configureTransmuxer(B,G)}var Ce=this.transmux(B,V,le,oe,E),Me=this.currentTransmuxState;return Me.contiguous=!0,Me.discontinuity=!1,Me.trackSwitch=!1,x.executeEnd=L(),Ce},p.flush=function(i){var n=this,E=i.transmuxing;E.executeStart=L();var S=this.decrypter,I=this.cache,x=this.currentTransmuxState,B=this.decryptionPromise;if(B)return B.then(function(){return n.flush(i)});var N=[],K=x.timeOffset;if(S){var W=S.flush();W&&N.push(this.push(W,null,i))}var G=I.dataLength;I.reset();var V=this.demuxer,X=this.remuxer;if(!V||!X)return G>=s&&this.observer.emit(F.Events.ERROR,F.Events.ERROR,{type:R.ErrorTypes.MEDIA_ERROR,details:R.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),E.executeEnd=L(),[y(i)];var Z=V.flush(K);return f(Z)?Z.then(function(q){return n.flushRemux(N,q,i),N}):(this.flushRemux(N,Z,i),N)},p.flushRemux=function(i,n,E){var S=n.audioTrack,I=n.avcTrack,x=n.id3Track,B=n.textTrack,N=this.currentTransmuxState,K=N.accurateTimeOffset,W=N.timeOffset;A.logger.log("[transmuxer.ts]: Flushed fragment "+E.sn+(E.part>-1?" p: "+E.part:"")+" of level "+E.level);var G=this.remuxer.remux(S,I,x,B,W,K,!0,this.id);i.push({remuxResult:G,chunkMeta:E}),E.transmuxing.executeEnd=L()},p.resetInitialTimestamp=function(i){var n=this.demuxer,E=this.remuxer;!n||!E||(n.resetTimeStamp(i),E.resetTimeStamp(i))},p.resetContiguity=function(){var i=this.demuxer,n=this.remuxer;!i||!n||(i.resetContiguity(),n.resetNextTimestamp())},p.resetInitSegment=function(i,n,E,S){var I=this.demuxer,x=this.remuxer;!I||!x||(I.resetInitSegment(n,E,S),x.resetInitSegment(i,n,E))},p.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},p.transmux=function(i,n,E,S,I){var x;return n&&n.method==="SAMPLE-AES"?x=this.transmuxSampleAes(i,n,E,S,I):x=this.transmuxUnencrypted(i,E,S,I),x},p.transmuxUnencrypted=function(i,n,E,S){var I=this.demuxer.demux(i,n,!1,!this.config.progressive),x=I.audioTrack,B=I.avcTrack,N=I.id3Track,K=I.textTrack,W=this.remuxer.remux(x,B,N,K,n,E,!1,this.id);return{remuxResult:W,chunkMeta:S}},p.transmuxSampleAes=function(i,n,E,S,I){var x=this;return this.demuxer.demuxSampleAes(i,n,E).then(function(B){var N=x.remuxer.remux(B.audioTrack,B.avcTrack,B.id3Track,B.textTrack,E,S,!1,x.id);return{remuxResult:N,chunkMeta:I}})},p.configureTransmuxer=function(i,n){for(var E=this.config,S=this.observer,I=this.typeSupported,x=this.vendor,B=n.audioCodec,N=n.defaultInitPts,K=n.duration,W=n.initSegmentData,G=n.videoCodec,V,X=0,Z=h.length;X<Z;X++)if(h[X].demux.probe(i)){V=h[X];break}V||(A.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),V={demux:w.default,remux:C.default});var q=this.demuxer,J=this.remuxer,ee=V.remux,ie=V.demux;(!J||!(J instanceof ee))&&(this.remuxer=new ee(S,E,I,x)),(!q||!(q instanceof ie))&&(this.demuxer=new ie(S,E,I),this.probe=ie.probe),this.resetInitSegment(W,B,G,K),this.resetInitialTimestamp(N)},p.needsProbing=function(i,n,E){return!this.demuxer||!this.remuxer||n||E},p.getDecrypter=function(){var i=this.decrypter;return i||(i=this.decrypter=new k.default(this.observer,this.config)),i},_}();function l(_,p){var u=null;return _.byteLength>0&&p!=null&&p.key!=null&&p.iv!==null&&p.method!=null&&(u=p),u}var y=function(p){return{remuxResult:{},chunkMeta:p}};function f(_){return"then"in _&&_.then instanceof Function}var d=function(p,u,i,n,E){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=p,this.videoCodec=u,this.initSegmentData=i,this.duration=n,this.defaultInitPts=E},g=function(p,u,i,n,E){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.discontinuity=p,this.contiguous=u,this.accurateTimeOffset=i,this.trackSwitch=n,this.timeOffset=E}},"./src/demux/tsdemuxer.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"discardEPB",function(){return y});var F=M("./src/demux/adts.ts"),R=M("./src/demux/mpegaudio.ts"),k=M("./src/demux/exp-golomb.ts"),j=M("./src/demux/id3.ts"),w=M("./src/demux/sample-aes.ts"),O=M("./src/events.ts"),D=M("./src/utils/mp4-tools.ts"),m=M("./src/utils/logger.ts"),C=M("./src/errors.ts"),P={video:1,audio:2,id3:3,text:4},c=function(){function f(g,_,p){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this.aacLastPTS=null,this._initPTS=null,this._initDTS=null,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=g,this.config=_,this.typeSupported=p}f.probe=function(_){var p=f.syncOffset(_);return p<0?!1:(p&&m.logger.warn("MPEG2-TS detected but first sync word found @ offset "+p+", junk ahead ?"),!0)},f.syncOffset=function(_){for(var p=Math.min(1e3,_.length-3*188),u=0;u<p;){if(_[u]===71&&_[u+188]===71&&_[u+2*188]===71)return u;u++}return-1},f.createTrack=function(_,p){return{container:_==="video"||_==="audio"?"video/mp2t":void 0,type:_,id:P[_],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:_==="audio"?p:void 0}};var d=f.prototype;return d.resetInitSegment=function(_,p,u){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=f.createTrack("video",u),this._audioTrack=f.createTrack("audio",u),this._id3Track=f.createTrack("id3",u),this._txtTrack=f.createTrack("text",u),this._audioTrack.isAAC=!0,this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=_,this.videoCodec=p,this._duration=u},d.resetTimeStamp=function(){},d.resetContiguity=function(){var _=this._audioTrack,p=this._avcTrack,u=this._id3Track;_&&(_.pesData=null),p&&(p.pesData=null),u&&(u.pesData=null),this.aacOverFlow=null,this.aacLastPTS=null},d.demux=function(_,p,u,i){u===void 0&&(u=!1),i===void 0&&(i=!1),u||(this.sampleAes=null);var n,E=this._avcTrack,S=this._audioTrack,I=this._id3Track,x=E.pid,B=E.pesData,N=S.pid,K=I.pid,W=S.pesData,G=I.pesData,V=!1,X=this.pmtParsed,Z=this._pmtId,q=_.length;if(this.remainderData&&(_=Object(D.appendUint8Array)(this.remainderData,_),q=_.length,this.remainderData=null),q<188&&!i)return this.remainderData=_,{audioTrack:S,avcTrack:E,id3Track:I,textTrack:this._txtTrack};var J=Math.max(0,f.syncOffset(_));q-=(q+J)%188,q<_.byteLength&&!i&&(this.remainderData=new Uint8Array(_.buffer,q,_.buffer.byteLength-q));for(var ee=J;ee<q;ee+=188)if(_[ee]===71){var ie=!!(_[ee+1]&64),oe=((_[ee+1]&31)<<8)+_[ee+2],le=(_[ee+3]&48)>>4,ue=void 0;if(le>1){if(ue=ee+5+_[ee+4],ue===ee+188)continue}else ue=ee+4;switch(oe){case x:ie&&(B&&(n=s(B))&&this.parseAVCPES(n,!1),B={data:[],size:0}),B&&(B.data.push(_.subarray(ue,ee+188)),B.size+=ee+188-ue);break;case N:ie&&(W&&(n=s(W))&&(S.isAAC?this.parseAACPES(n):this.parseMPEGPES(n)),W={data:[],size:0}),W&&(W.data.push(_.subarray(ue,ee+188)),W.size+=ee+188-ue);break;case K:ie&&(G&&(n=s(G))&&this.parseID3PES(n),G={data:[],size:0}),G&&(G.data.push(_.subarray(ue,ee+188)),G.size+=ee+188-ue);break;case 0:ie&&(ue+=_[ue]+1),Z=this._pmtId=L(_,ue);break;case Z:{ie&&(ue+=_[ue]+1);var he=h(_,ue,this.typeSupported.mpeg===!0||this.typeSupported.mp3===!0,u);x=he.avc,x>0&&(E.pid=x),N=he.audio,N>0&&(S.pid=N,S.isAAC=he.isAAC),K=he.id3,K>0&&(I.pid=K),V&&!X&&(m.logger.log("reparse from beginning"),V=!1,ee=J-188),X=this.pmtParsed=!0;break}case 17:case 8191:break;default:V=!0;break}}else this.observer.emit(O.Events.ERROR,O.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});E.pesData=B,S.pesData=W,I.pesData=G;var me={audioTrack:S,avcTrack:E,id3Track:I,textTrack:this._txtTrack};return i&&this.extractRemainingSamples(me),me},d.flush=function(){var _=this.remainderData;this.remainderData=null;var p;return _?p=this.demux(_,-1,!1,!0):p={audioTrack:this._audioTrack,avcTrack:this._avcTrack,textTrack:this._txtTrack,id3Track:this._id3Track},this.extractRemainingSamples(p),this.sampleAes?this.decrypt(p,this.sampleAes):p},d.extractRemainingSamples=function(_){var p=_.audioTrack,u=_.avcTrack,i=_.id3Track,n=u.pesData,E=p.pesData,S=i.pesData,I;n&&(I=s(n))?(this.parseAVCPES(I,!0),u.pesData=null):u.pesData=n,E&&(I=s(E))?(p.isAAC?this.parseAACPES(I):this.parseMPEGPES(I),p.pesData=null):(E!=null&&E.size&&m.logger.log("last AAC PES packet truncated,might overlap between fragments"),p.pesData=E),S&&(I=s(S))?(this.parseID3PES(I),i.pesData=null):i.pesData=S},d.demuxSampleAes=function(_,p,u){var i=this.demux(_,u,!0,!this.config.progressive),n=this.sampleAes=new w.default(this.observer,this.config,p);return this.decrypt(i,n)},d.decrypt=function(_,p){return new Promise(function(u){var i=_.audioTrack,n=_.avcTrack;i.samples&&i.isAAC?p.decryptAacSamples(i.samples,0,function(){n.samples?p.decryptAvcSamples(n.samples,0,0,function(){u(_)}):u(_)}):n.samples&&p.decryptAvcSamples(n.samples,0,0,function(){u(_)})})},d.destroy=function(){this._initPTS=this._initDTS=null,this._duration=0},d.parseAVCPES=function(_,p){var u=this,i=this._avcTrack,n=this.parseAVCNALu(_.data),E=!1,S=this.avcSample,I,x=!1;_.data=null,S&&n.length&&!i.audFound&&(a(S,i),S=this.avcSample=A(!1,_.pts,_.dts,"")),n.forEach(function(B){switch(B.type){case 1:{I=!0,S||(S=u.avcSample=A(!0,_.pts,_.dts,"")),E&&(S.debug+="NDR "),S.frame=!0;var N=B.data;if(x&&N.length>4){var K=new k.default(N).readSliceType();(K===2||K===4||K===7||K===9)&&(S.key=!0)}break}case 5:I=!0,S||(S=u.avcSample=A(!0,_.pts,_.dts,"")),E&&(S.debug+="IDR "),S.key=!0,S.frame=!0;break;case 6:{I=!0,E&&S&&(S.debug+="SEI ");var W=new k.default(y(B.data));W.readUByte();for(var G=0,V=0,X=!1,Z=0;!X&&W.bytesAvailable>1;){G=0;do Z=W.readUByte(),G+=Z;while(Z===255);V=0;do Z=W.readUByte(),V+=Z;while(Z===255);if(G===4&&W.bytesAvailable!==0){X=!0;var q=W.readUByte();if(q===181){var J=W.readUShort();if(J===49){var ee=W.readUInt();if(ee===1195456820){var ie=W.readUByte();if(ie===3){for(var oe=W.readUByte(),le=W.readUByte(),ue=31&oe,he=[oe,le],me=0;me<ue;me++)he.push(W.readUByte()),he.push(W.readUByte()),he.push(W.readUByte());l(u._txtTrack.samples,{type:3,pts:_.pts,bytes:he})}}}}}else if(G===5&&W.bytesAvailable!==0){if(X=!0,V>16){for(var Se=[],ye=0;ye<16;ye++)Se.push(W.readUByte().toString(16)),(ye===3||ye===5||ye===7||ye===9)&&Se.push("-");for(var _e=V-16,Ce=new Uint8Array(_e),Me=0;Me<_e;Me++)Ce[Me]=W.readUByte();l(u._txtTrack.samples,{pts:_.pts,payloadType:G,uuid:Se.join(""),userData:Object(j.utf8ArrayToStr)(Ce),userDataBytes:Ce})}}else if(V<W.bytesAvailable)for(var Fe=0;Fe<V;Fe++)W.readUByte()}break}case 7:if(I=!0,x=!0,E&&S&&(S.debug+="SPS "),!i.sps){var Ne=new k.default(B.data),Ue=Ne.readSPS();i.width=Ue.width,i.height=Ue.height,i.pixelRatio=Ue.pixelRatio,i.sps=[B.data],i.duration=u._duration;for(var ke=B.data.subarray(1,4),Ee="avc1.",pe=0;pe<3;pe++){var ge=ke[pe].toString(16);ge.length<2&&(ge="0"+ge),Ee+=ge}i.codec=Ee}break;case 8:I=!0,E&&S&&(S.debug+="PPS "),i.pps||(i.pps=[B.data]);break;case 9:I=!1,i.audFound=!0,S&&a(S,i),S=u.avcSample=A(!1,_.pts,_.dts,E?"AUD ":"");break;case 12:I=!1;break;default:I=!1,S&&(S.debug+="unknown NAL "+B.type+" ");break}if(S&&I){var ce=S.units;ce.push(B)}}),p&&S&&(a(S,i),this.avcSample=null)},d.getLastNalUnit=function(){var _,p=this.avcSample,u;if(!p||p.units.length===0){var i=this._avcTrack.samples;p=i[i.length-1]}if((_=p)!==null&&_!==void 0&&_.units){var n=p.units;u=n[n.length-1]}return u},d.parseAVCNALu=function(_){var p=_.byteLength,u=this._avcTrack,i=u.naluState||0,n=i,E=[],S=0,I,x,B,N=-1,K=0;for(i===-1&&(N=0,K=_[0]&31,i=0,S=1);S<p;){if(I=_[S++],!i){i=I?0:1;continue}if(i===1){i=I?0:2;continue}if(!I)i=3;else if(I===1){if(N>=0){var W={data:_.subarray(N,S-i-1),type:K};E.push(W)}else{var G=this.getLastNalUnit();if(G&&(n&&S<=4-n&&G.state&&(G.data=G.data.subarray(0,G.data.byteLength-n)),x=S-i-1,x>0)){var V=new Uint8Array(G.data.byteLength+x);V.set(G.data,0),V.set(_.subarray(0,x),G.data.byteLength),G.data=V}}S<p?(B=_[S]&31,N=S,K=B,i=0):i=-1}else i=0}if(N>=0&&i>=0){var X={data:_.subarray(N,p),type:K,state:i};E.push(X)}if(E.length===0){var Z=this.getLastNalUnit();if(Z){var q=new Uint8Array(Z.data.byteLength+_.byteLength);q.set(Z.data,0),q.set(_,Z.data.byteLength),Z.data=q}}return u.naluState=i,E},d.parseAACPES=function(_){var p=0,u=this._audioTrack,i=this.aacOverFlow,n=_.data;if(i){this.aacOverFlow=null;var E=i.sample.unit.byteLength,S=Math.min(i.missing,E),I=E-S;i.sample.unit.set(n.subarray(0,S),I),u.samples.push(i.sample),p=i.missing}var x,B;for(x=p,B=n.length;x<B-1&&!F.isHeader(n,x);x++);if(x!==p){var N,K;if(x<B-1?(N="AAC PES did not start with ADTS header,offset:"+x,K=!1):(N="no ADTS header found in AAC PES",K=!0),m.logger.warn("parsing error:"+N),this.observer.emit(O.Events.ERROR,O.Events.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:K,reason:N}),K)return}F.initTrackConfig(u,this.observer,n,x,this.audioCodec);var W;if(_.pts!==void 0)W=_.pts;else if(i){var G=F.getFrameDuration(u.samplerate);W=i.sample.pts+G}else{m.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}for(var V=0;x<B;)if(F.isHeader(n,x)){if(x+5<B){var X=F.appendFrame(u,n,x,W,V);if(X)if(X.missing)this.aacOverFlow=X;else{x+=X.length,V++;continue}}break}else x++},d.parseMPEGPES=function(_){var p=_.data,u=p.length,i=0,n=0,E=_.pts;if(E===void 0){m.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;n<u;)if(R.isHeader(p,n)){var S=R.appendFrame(this._audioTrack,p,n,E,i);if(S)n+=S.length,i++;else break}else n++},d.parseID3PES=function(_){if(_.pts===void 0){m.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}this._id3Track.samples.push(_)},f}();c.minProbeByteLength=188;function A(f,d,g,_){return{key:f,frame:!1,pts:d,dts:g,units:[],debug:_,length:0}}function L(f,d){return(f[d+10]&31)<<8|f[d+11]}function h(f,d,g,_){var p={audio:-1,avc:-1,id3:-1,isAAC:!0},u=(f[d+1]&15)<<8|f[d+2],i=d+3+u-4,n=(f[d+10]&15)<<8|f[d+11];for(d+=12+n;d<i;){var E=(f[d+1]&31)<<8|f[d+2];switch(f[d]){case 207:if(!_){m.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:p.audio===-1&&(p.audio=E);break;case 21:p.id3===-1&&(p.id3=E);break;case 219:if(!_){m.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:p.avc===-1&&(p.avc=E);break;case 3:case 4:g?p.audio===-1&&(p.audio=E,p.isAAC=!1):m.logger.log("MPEG audio found, not supported in this browser");break;case 36:m.logger.warn("Unsupported HEVC stream type found");break;default:break}d+=((f[d+3]&15)<<8|f[d+4])+5}return p}function s(f){var d=0,g,_,p,u,i,n=f.data;if(!f||f.size===0)return null;for(;n[0].length<19&&n.length>1;){var E=new Uint8Array(n[0].length+n[1].length);E.set(n[0]),E.set(n[1],n[0].length),n[0]=E,n.splice(1,1)}g=n[0];var S=(g[0]<<16)+(g[1]<<8)+g[2];if(S===1){if(_=(g[4]<<8)+g[5],_&&_>f.size-6)return null;var I=g[7];I&192&&(u=(g[9]&14)*536870912+(g[10]&255)*4194304+(g[11]&254)*16384+(g[12]&255)*128+(g[13]&254)/2,I&64?(i=(g[14]&14)*536870912+(g[15]&255)*4194304+(g[16]&254)*16384+(g[17]&255)*128+(g[18]&254)/2,u-i>60*9e4&&(m.logger.warn(Math.round((u-i)/9e4)+"s delta between PTS and DTS, align them"),u=i)):i=u),p=g[8];var x=p+9;if(f.size<=x)return null;f.size-=x;for(var B=new Uint8Array(f.size),N=0,K=n.length;N<K;N++){g=n[N];var W=g.byteLength;if(x)if(x>W){x-=W;continue}else g=g.subarray(x),W-=x,x=0;B.set(g,d),d+=W}return _&&(_-=p+3),{data:B,pts:u,dts:i,len:_}}return null}function a(f,d){if(f.units.length&&f.frame){if(f.pts===void 0){var g=d.samples,_=g.length;if(_){var p=g[_-1];f.pts=p.pts,f.dts=p.dts}else{d.dropped++;return}}d.samples.push(f)}f.debug.length&&m.logger.log(f.pts+"/"+f.dts+":"+f.debug)}function l(f,d){var g=f.length;if(g>0){if(d.pts>=f[g-1].pts)f.push(d);else for(var _=g-1;_>=0;_--)if(d.pts<f[_].pts){f.splice(_,0,d);break}}else f.push(d)}function y(f){for(var d=f.byteLength,g=[],_=1;_<d-2;)f[_]===0&&f[_+1]===0&&f[_+2]===3?(g.push(_+2),_+=2):_++;if(g.length===0)return f;var p=d-g.length,u=new Uint8Array(p),i=0;for(_=0;_<p;i++,_++)i===g[0]&&(i++,g.shift()),u[_]=f[i];return u}H.default=c},"./src/errors.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"ErrorTypes",function(){return F}),M.d(H,"ErrorDetails",function(){return R});var F;(function(k){k.NETWORK_ERROR="networkError",k.MEDIA_ERROR="mediaError",k.KEY_SYSTEM_ERROR="keySystemError",k.MUX_ERROR="muxError",k.OTHER_ERROR="otherError"})(F||(F={}));var R;(function(k){k.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",k.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",k.KEY_SYSTEM_NO_SESSION="keySystemNoSession",k.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",k.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",k.MANIFEST_LOAD_ERROR="manifestLoadError",k.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",k.MANIFEST_PARSING_ERROR="manifestParsingError",k.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",k.LEVEL_EMPTY_ERROR="levelEmptyError",k.LEVEL_LOAD_ERROR="levelLoadError",k.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",k.LEVEL_SWITCH_ERROR="levelSwitchError",k.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",k.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",k.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",k.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",k.FRAG_LOAD_ERROR="fragLoadError",k.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",k.FRAG_DECRYPT_ERROR="fragDecryptError",k.FRAG_PARSING_ERROR="fragParsingError",k.REMUX_ALLOC_ERROR="remuxAllocError",k.KEY_LOAD_ERROR="keyLoadError",k.KEY_LOAD_TIMEOUT="keyLoadTimeOut",k.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",k.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",k.BUFFER_APPEND_ERROR="bufferAppendError",k.BUFFER_APPENDING_ERROR="bufferAppendingError",k.BUFFER_STALLED_ERROR="bufferStalledError",k.BUFFER_FULL_ERROR="bufferFullError",k.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",k.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",k.INTERNAL_EXCEPTION="internalException",k.INTERNAL_ABORTED="aborted",k.UNKNOWN="unknown"})(R||(R={}))},"./src/events.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"Events",function(){return F});var F;(function(R){R.MEDIA_ATTACHING="hlsMediaAttaching",R.MEDIA_ATTACHED="hlsMediaAttached",R.MEDIA_DETACHING="hlsMediaDetaching",R.MEDIA_DETACHED="hlsMediaDetached",R.BUFFER_RESET="hlsBufferReset",R.BUFFER_CODECS="hlsBufferCodecs",R.BUFFER_CREATED="hlsBufferCreated",R.BUFFER_APPENDING="hlsBufferAppending",R.BUFFER_APPENDED="hlsBufferAppended",R.BUFFER_EOS="hlsBufferEos",R.BUFFER_FLUSHING="hlsBufferFlushing",R.BUFFER_FLUSHED="hlsBufferFlushed",R.MANIFEST_LOADING="hlsManifestLoading",R.MANIFEST_LOADED="hlsManifestLoaded",R.MANIFEST_PARSED="hlsManifestParsed",R.LEVEL_SWITCHING="hlsLevelSwitching",R.LEVEL_SWITCHED="hlsLevelSwitched",R.LEVEL_LOADING="hlsLevelLoading",R.LEVEL_LOADED="hlsLevelLoaded",R.LEVEL_UPDATED="hlsLevelUpdated",R.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",R.LEVELS_UPDATED="hlsLevelsUpdated",R.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",R.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",R.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",R.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",R.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",R.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",R.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",R.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",R.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",R.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",R.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",R.CUES_PARSED="hlsCuesParsed",R.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",R.INIT_PTS_FOUND="hlsInitPtsFound",R.FRAG_LOADING="hlsFragLoading",R.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",R.FRAG_LOADED="hlsFragLoaded",R.FRAG_DECRYPTED="hlsFragDecrypted",R.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",R.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",R.FRAG_PARSING_METADATA="hlsFragParsingMetadata",R.FRAG_PARSED="hlsFragParsed",R.FRAG_BUFFERED="hlsFragBuffered",R.FRAG_CHANGED="hlsFragChanged",R.FPS_DROP="hlsFpsDrop",R.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",R.ERROR="hlsError",R.DESTROYING="hlsDestroying",R.KEY_LOADING="hlsKeyLoading",R.KEY_LOADED="hlsKeyLoaded",R.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",R.BACK_BUFFER_REACHED="hlsBackBufferReached"})(F||(F={}))},"./src/hls.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return f});var F=M("./node_modules/url-toolkit/src/url-toolkit.js"),R=M.n(F),k=M("./src/loader/playlist-loader.ts"),j=M("./src/loader/key-loader.ts"),w=M("./src/controller/id3-track-controller.ts"),O=M("./src/controller/latency-controller.ts"),D=M("./src/controller/level-controller.ts"),m=M("./src/controller/fragment-tracker.ts"),C=M("./src/controller/stream-controller.ts"),P=M("./src/is-supported.ts"),c=M("./src/utils/logger.ts"),A=M("./src/config.ts"),L=M("./node_modules/eventemitter3/index.js"),h=M.n(L),s=M("./src/events.ts"),a=M("./src/errors.ts");function l(d,g){for(var _=0;_<g.length;_++){var p=g[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}function y(d,g,_){return g&&l(d.prototype,g),_&&l(d,_),d}var f=function(){d.isSupported=function(){return Object(P.isSupported)()};function d(_){_===void 0&&(_={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new L.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this._media=null,this.url=null;var p=this.config=Object(A.mergeConfig)(d.DefaultConfig,_);this.userConfig=_,Object(c.enableLogs)(p.debug),this._autoLevelCapping=-1,p.progressive&&Object(A.enableStreamingMode)(p);var u=p.abrController,i=p.bufferController,n=p.capLevelController,E=p.fpsController,S=this.abrController=new u(this),I=this.bufferController=new i(this),x=this.capLevelController=new n(this),B=new E(this),N=new k.default(this),K=new j.default(this),W=new w.default(this),G=this.levelController=new D.default(this),V=new m.FragmentTracker(this),X=this.streamController=new C.default(this,V);x.setStreamController(X),B.setStreamController(X);var Z=[G,X];this.networkControllers=Z;var q=[N,K,S,I,x,B,W,V];this.audioTrackController=this.createController(p.audioTrackController,null,Z),this.createController(p.audioStreamController,V,Z),this.subtitleTrackController=this.createController(p.subtitleTrackController,null,Z),this.createController(p.subtitleStreamController,V,Z),this.createController(p.timelineController,null,q),this.emeController=this.createController(p.emeController,null,q),this.latencyController=this.createController(O.default,null,q),this.coreComponents=q}var g=d.prototype;return g.createController=function(p,u,i){if(p){var n=u?new p(this,u):new p(this);return i&&i.push(n),n}return null},g.on=function(p,u,i){i===void 0&&(i=this),this._emitter.on(p,u,i)},g.once=function(p,u,i){i===void 0&&(i=this),this._emitter.once(p,u,i)},g.removeAllListeners=function(p){this._emitter.removeAllListeners(p)},g.off=function(p,u,i,n){i===void 0&&(i=this),this._emitter.off(p,u,i,n)},g.listeners=function(p){return this._emitter.listeners(p)},g.emit=function(p,u,i){return this._emitter.emit(p,u,i)},g.trigger=function(p,u){if(this.config.debug)return this.emit(p,p,u);try{return this.emit(p,p,u)}catch(i){c.logger.error("An internal error happened while handling event "+p+'. Error message: "'+i.message+'". Here is a stacktrace:',i),this.trigger(s.Events.ERROR,{type:a.ErrorTypes.OTHER_ERROR,details:a.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:p,error:i})}return!1},g.listenerCount=function(p){return this._emitter.listenerCount(p)},g.destroy=function(){c.logger.log("destroy"),this.trigger(s.Events.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(function(p){return p.destroy()}),this.networkControllers.length=0,this.coreComponents.forEach(function(p){return p.destroy()}),this.coreComponents.length=0},g.attachMedia=function(p){c.logger.log("attachMedia"),this._media=p,this.trigger(s.Events.MEDIA_ATTACHING,{media:p})},g.detachMedia=function(){c.logger.log("detachMedia"),this.trigger(s.Events.MEDIA_DETACHING,void 0),this._media=null},g.loadSource=function(p){this.stopLoad();var u=this.media,i=this.url,n=this.url=F.buildAbsoluteURL(self.location.href,p,{alwaysNormalize:!0});c.logger.log("loadSource:"+n),u&&i&&i!==n&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(u)),this.trigger(s.Events.MANIFEST_LOADING,{url:p})},g.startLoad=function(p){p===void 0&&(p=-1),c.logger.log("startLoad("+p+")"),this.networkControllers.forEach(function(u){u.startLoad(p)})},g.stopLoad=function(){c.logger.log("stopLoad"),this.networkControllers.forEach(function(p){p.stopLoad()})},g.swapAudioCodec=function(){c.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},g.recoverMediaError=function(){c.logger.log("recoverMediaError");var p=this._media;this.detachMedia(),p&&this.attachMedia(p)},g.removeLevel=function(p,u){u===void 0&&(u=0),this.levelController.removeLevel(p,u)},y(d,[{key:"levels",get:function(){var p=this.levelController.levels;return p||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(p){c.logger.log("set currentLevel:"+p),this.loadLevel=p,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(p){c.logger.log("set nextLevel:"+p),this.levelController.manualLevel=p,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(p){c.logger.log("set loadLevel:"+p),this.levelController.manualLevel=p}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(p){this.levelController.nextLoadLevel=p}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(p){c.logger.log("set firstLevel:"+p),this.levelController.firstLevel=p}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(p){c.logger.log("set startLevel:"+p),p!==-1&&(p=Math.max(p,this.minAutoLevel)),this.levelController.startLevel=p}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(p){var u=!!p;u!==this.config.capLevelToPlayerSize&&(u?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=u)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(p){this._autoLevelCapping!==p&&(c.logger.log("set autoLevelCapping:"+p),this._autoLevelCapping=p)}},{key:"bandwidthEstimate",get:function(){var p=this.abrController.bwEstimator;return p?p.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var p=this.levels,u=this.config.minAutoBitrate;if(!p)return 0;for(var i=p.length,n=0;n<i;n++)if(p[n].maxBitrate>u)return n;return 0}},{key:"maxAutoLevel",get:function(){var p=this.levels,u=this.autoLevelCapping,i;return u===-1&&p&&p.length?i=p.length-1:i=u,i}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(p){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,p)}},{key:"audioTracks",get:function(){var p=this.audioTrackController;return p?p.audioTracks:[]}},{key:"audioTrack",get:function(){var p=this.audioTrackController;return p?p.audioTrack:-1},set:function(p){var u=this.audioTrackController;u&&(u.audioTrack=p)}},{key:"subtitleTracks",get:function(){var p=this.subtitleTrackController;return p?p.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var p=this.subtitleTrackController;return p?p.subtitleTrack:-1},set:function(p){var u=this.subtitleTrackController;u&&(u.subtitleTrack=p)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var p=this.subtitleTrackController;return p?p.subtitleDisplay:!1},set:function(p){var u=this.subtitleTrackController;u&&(u.subtitleDisplay=p)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(p){this.config.lowLatencyMode=p}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.0.7"}},{key:"Events",get:function(){return s.Events}},{key:"ErrorTypes",get:function(){return a.ErrorTypes}},{key:"ErrorDetails",get:function(){return a.ErrorDetails}},{key:"DefaultConfig",get:function(){return d.defaultConfig?d.defaultConfig:A.hlsDefaultConfig},set:function(p){d.defaultConfig=p}}]),d}();f.defaultConfig=void 0},"./src/is-supported.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"isSupported",function(){return k}),M.d(H,"changeTypeSupported",function(){return j});var F=M("./src/utils/mediasource-helper.ts");function R(){return self.SourceBuffer||self.WebKitSourceBuffer}function k(){var w=Object(F.getMediaSource)();if(!w)return!1;var O=R(),D=w&&typeof w.isTypeSupported=="function"&&w.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),m=!O||O.prototype&&typeof O.prototype.appendBuffer=="function"&&typeof O.prototype.remove=="function";return!!D&&!!m}function j(){var w,O=R();return typeof(O==null||(w=O.prototype)===null||w===void 0?void 0:w.changeType)=="function"}},"./src/loader/fragment-loader.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return c}),M.d(H,"LoadError",function(){return L});var F=M("./src/polyfills/number.ts"),R=M("./src/errors.ts");function k(h,s){h.prototype=Object.create(s.prototype),h.prototype.constructor=h,m(h,s)}function j(h){var s=typeof Map=="function"?new Map:void 0;return j=function(l){if(l===null||!D(l))return l;if(typeof l!="function")throw new TypeError("Super expression must either be null or a function");if(typeof s!="undefined"){if(s.has(l))return s.get(l);s.set(l,y)}function y(){return w(l,arguments,C(this).constructor)}return y.prototype=Object.create(l.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),m(y,l)},j(h)}function w(h,s,a){return O()?w=Reflect.construct:w=function(y,f,d){var g=[null];g.push.apply(g,f);var _=Function.bind.apply(y,g),p=new _;return d&&m(p,d.prototype),p},w.apply(null,arguments)}function O(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(h){return!1}}function D(h){return Function.toString.call(h).indexOf("[native code]")!==-1}function m(h,s){return m=Object.setPrototypeOf||function(l,y){return l.__proto__=y,l},m(h,s)}function C(h){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},C(h)}var P=Math.pow(2,17),c=function(){function h(a){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=a}var s=h.prototype;return s.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},s.abort=function(){this.loader&&this.loader.abort()},s.load=function(l,y){var f=this,d=l.url;if(!d)return Promise.reject(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:l,networkDetails:null},"Fragment does not have a "+(d?"part list":"url")));this.abort();var g=this.config,_=g.fLoader,p=g.loader;return new Promise(function(u,i){f.loader&&f.loader.destroy();var n=f.loader=l.loader=_?new _(g):new p(g),E=A(l),S={timeout:g.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:g.fragLoadingMaxRetryTimeout,highWaterMark:P};l.stats=n.stats,n.load(E,S,{onSuccess:function(x,B,N,K){f.resetLoader(l,n),u({frag:l,part:null,payload:x.data,networkDetails:K})},onError:function(x,B,N){f.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:l,response:x,networkDetails:N}))},onAbort:function(x,B,N){f.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:l,networkDetails:N}))},onTimeout:function(x,B,N){f.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:l,networkDetails:N}))},onProgress:function(x,B,N,K){y&&y({frag:l,part:null,payload:N,networkDetails:K})}})})},s.loadPart=function(l,y,f){var d=this;this.abort();var g=this.config,_=g.fLoader,p=g.loader;return new Promise(function(u,i){d.loader&&d.loader.destroy();var n=d.loader=l.loader=_?new _(g):new p(g),E=A(l,y),S={timeout:g.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:g.fragLoadingMaxRetryTimeout,highWaterMark:P};y.stats=n.stats,n.load(E,S,{onSuccess:function(x,B,N,K){d.resetLoader(l,n),d.updateStatsFromPart(l,y);var W={frag:l,part:y,payload:x.data,networkDetails:K};f(W),u(W)},onError:function(x,B,N){d.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:l,part:y,response:x,networkDetails:N}))},onAbort:function(x,B,N){l.stats.aborted=y.stats.aborted,d.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:l,part:y,networkDetails:N}))},onTimeout:function(x,B,N){d.resetLoader(l,n),i(new L({type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:l,part:y,networkDetails:N}))}})})},s.updateStatsFromPart=function(l,y){var f=l.stats,d=y.stats,g=d.total;if(f.loaded+=d.loaded,g){var _=Math.round(l.duration/y.duration),p=Math.min(Math.round(f.loaded/g),_),u=_-p,i=u*Math.round(f.loaded/p);f.total=f.loaded+i}else f.total=Math.max(f.loaded,f.total);var n=f.loading,E=d.loading;n.start?n.first+=E.first-E.start:(n.start=E.start,n.first=E.first),n.end=E.end},s.resetLoader=function(l,y){l.loader=null,this.loader===y&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),y.destroy()},h}();function A(h,s){s===void 0&&(s=null);var a=s||h,l={frag:h,part:s,responseType:"arraybuffer",url:a.url,rangeStart:0,rangeEnd:0},y=a.byteRangeStartOffset,f=a.byteRangeEndOffset;return Object(F.isFiniteNumber)(y)&&Object(F.isFiniteNumber)(f)&&(l.rangeStart=y,l.rangeEnd=f),l}var L=function(h){k(s,h);function s(a){for(var l,y=arguments.length,f=new Array(y>1?y-1:0),d=1;d<y;d++)f[d-1]=arguments[d];return l=h.call.apply(h,[this].concat(f))||this,l.data=void 0,l.data=a,l}return s}(j(Error))},"./src/loader/fragment.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"ElementaryStreamTypes",function(){return c}),M.d(H,"BaseSegment",function(){return A}),M.d(H,"Fragment",function(){return L}),M.d(H,"Part",function(){return h});var F=M("./src/polyfills/number.ts"),R=M("./node_modules/url-toolkit/src/url-toolkit.js"),k=M.n(R),j=M("./src/utils/logger.ts"),w=M("./src/loader/level-key.ts"),O=M("./src/loader/load-stats.ts");function D(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,m(s,a)}function m(s,a){return m=Object.setPrototypeOf||function(y,f){return y.__proto__=f,y},m(s,a)}function C(s,a){for(var l=0;l<a.length;l++){var y=a[l];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(s,y.key,y)}}function P(s,a,l){return a&&C(s.prototype,a),l&&C(s,l),s}var c;(function(s){s.AUDIO="audio",s.VIDEO="video",s.AUDIOVIDEO="audiovideo"})(c||(c={}));var A=function(){function s(l){var y;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=(y={},y[c.AUDIO]=null,y[c.VIDEO]=null,y[c.AUDIOVIDEO]=null,y),this.baseurl=l}var a=s.prototype;return a.setByteRange=function(y,f){var d=y.split("@",2),g=[];d.length===1?g[0]=f?f.byteRangeEndOffset:0:g[0]=parseInt(d[1]),g[1]=parseInt(d[0])+g[0],this._byteRange=g},P(s,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Object(R.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(y){this._url=y}}]),s}(),L=function(s){D(a,s);function a(y,f){var d;return d=s.call(this,f)||this,d._decryptdata=null,d.rawProgramDateTime=null,d.programDateTime=null,d.tagList=[],d.duration=0,d.sn=0,d.levelkey=void 0,d.type=void 0,d.loader=null,d.level=-1,d.cc=0,d.startPTS=void 0,d.endPTS=void 0,d.appendedPTS=void 0,d.startDTS=void 0,d.endDTS=void 0,d.start=0,d.deltaPTS=void 0,d.maxStartPTS=void 0,d.minEndPTS=void 0,d.stats=new O.LoadStats,d.urlId=0,d.data=void 0,d.bitrateTest=!1,d.title=null,d.initSegment=null,d.type=y,d}var l=a.prototype;return l.createInitializationVector=function(f){for(var d=new Uint8Array(16),g=12;g<16;g++)d[g]=f>>8*(15-g)&255;return d},l.setDecryptDataFromLevelKey=function(f,d){var g=f;return(f==null?void 0:f.method)==="AES-128"&&f.uri&&!f.iv&&(g=w.LevelKey.fromURI(f.uri),g.method=f.method,g.iv=this.createInitializationVector(d),g.keyFormat="identity"),g},l.setElementaryStreamInfo=function(f,d,g,_,p,u){u===void 0&&(u=!1);var i=this.elementaryStreams,n=i[f];if(!n){i[f]={startPTS:d,endPTS:g,startDTS:_,endDTS:p,partial:u};return}n.startPTS=Math.min(n.startPTS,d),n.endPTS=Math.max(n.endPTS,g),n.startDTS=Math.min(n.startDTS,_),n.endDTS=Math.max(n.endDTS,p)},l.clearElementaryStreamInfo=function(){var f=this.elementaryStreams;f[c.AUDIO]=null,f[c.VIDEO]=null,f[c.AUDIOVIDEO]=null},P(a,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var f=this.sn;typeof f!="number"&&(this.levelkey&&this.levelkey.method==="AES-128"&&!this.levelkey.iv&&j.logger.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),f=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,f)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(this.programDateTime===null||!Object(F.isFiniteNumber)(this.programDateTime))return null;var f=Object(F.isFiniteNumber)(this.duration)?this.duration:0;return this.programDateTime+f*1e3}},{key:"encrypted",get:function(){var f;return!!((f=this.decryptdata)!==null&&f!==void 0&&f.keyFormat&&this.decryptdata.uri)}}]),a}(A),h=function(s){D(a,s);function a(l,y,f,d,g){var _;_=s.call(this,f)||this,_.fragOffset=0,_.duration=0,_.gap=!1,_.independent=!1,_.relurl=void 0,_.fragment=void 0,_.index=void 0,_.stats=new O.LoadStats,_.duration=l.decimalFloatingPoint("DURATION"),_.gap=l.bool("GAP"),_.independent=l.bool("INDEPENDENT"),_.relurl=l.enumeratedString("URI"),_.fragment=y,_.index=d;var p=l.enumeratedString("BYTERANGE");return p&&_.setByteRange(p,g),g&&(_.fragOffset=g.fragOffset+g.duration),_}return P(a,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var y=this.elementaryStreams;return!!(y.audio||y.video||y.audiovideo)}}]),a}(A)},"./src/loader/key-loader.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return j});var F=M("./src/events.ts"),R=M("./src/errors.ts"),k=M("./src/utils/logger.ts"),j=function(){function w(D){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=D,this._registerListeners()}var O=w.prototype;return O._registerListeners=function(){this.hls.on(F.Events.KEY_LOADING,this.onKeyLoading,this)},O._unregisterListeners=function(){this.hls.off(F.Events.KEY_LOADING,this.onKeyLoading)},O.destroy=function(){this._unregisterListeners();for(var m in this.loaders){var C=this.loaders[m];C&&C.destroy()}this.loaders={}},O.onKeyLoading=function(m,C){var P=C.frag,c=P.type,A=this.loaders[c];if(!P.decryptdata){k.logger.warn("Missing decryption data on fragment in onKeyLoading");return}var L=P.decryptdata.uri;if(L!==this.decrypturl||this.decryptkey===null){var h=this.hls.config;if(A&&(k.logger.warn("abort previous key loader for type:"+c),A.abort()),!L){k.logger.warn("key uri is falsy");return}var s=h.loader,a=P.loader=this.loaders[c]=new s(h);this.decrypturl=L,this.decryptkey=null;var l={url:L,frag:P,responseType:"arraybuffer"},y={timeout:h.fragLoadingTimeOut,maxRetry:0,retryDelay:h.fragLoadingRetryDelay,maxRetryDelay:h.fragLoadingMaxRetryTimeout,highWaterMark:0},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};a.load(l,y,f)}else this.decryptkey&&(P.decryptdata.key=this.decryptkey,this.hls.trigger(F.Events.KEY_LOADED,{frag:P}))},O.loadsuccess=function(m,C,P){var c=P.frag;if(!c.decryptdata){k.logger.error("after key load, decryptdata unset");return}this.decryptkey=c.decryptdata.key=new Uint8Array(m.data),c.loader=null,delete this.loaders[c.type],this.hls.trigger(F.Events.KEY_LOADED,{frag:c})},O.loaderror=function(m,C){var P=C.frag,c=P.loader;c&&c.abort(),delete this.loaders[P.type],this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:P,response:m})},O.loadtimeout=function(m,C){var P=C.frag,c=P.loader;c&&c.abort(),delete this.loaders[P.type],this.hls.trigger(F.Events.ERROR,{type:R.ErrorTypes.NETWORK_ERROR,details:R.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:P})},w}()},"./src/loader/level-details.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"LevelDetails",function(){return w});var F=M("./src/polyfills/number.ts");function R(O,D){for(var m=0;m<D.length;m++){var C=D[m];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,C.key,C)}}function k(O,D,m){return D&&R(O.prototype,D),m&&R(O,m),O}var j=10,w=function(){function O(m){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.fragments=[],this.url=m}var D=O.prototype;return D.reloaded=function(C){if(!C){this.advanced=!0,this.updated=!0;return}var P=this.lastPartSn-C.lastPartSn,c=this.lastPartIndex-C.lastPartIndex;this.updated=this.endSN!==C.endSN||!!c||!!P,this.advanced=this.endSN>C.endSN||P>0||P===0&&c>0,this.updated||this.advanced?this.misses=Math.floor(C.misses*.6):this.misses=C.misses+1,this.availabilityDelay=C.availabilityDelay},k(O,[{key:"hasProgramDateTime",get:function(){return this.fragments.length?Object(F.isFiniteNumber)(this.fragments[this.fragments.length-1].programDateTime):!1}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||j}},{key:"drift",get:function(){var C=this.driftEndTime-this.driftStartTime;if(C>0){var P=this.driftEnd-this.driftStart;return P*1e3/C}return 1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var C;return(C=this.partList)!==null&&C!==void 0&&C.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var C;return(C=this.fragments)!==null&&C!==void 0&&C.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var C;return(C=this.partList)!==null&&C!==void 0&&C.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var C;return(C=this.partList)!==null&&C!==void 0&&C.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),O}()},"./src/loader/level-key.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"LevelKey",function(){return w});var F=M("./node_modules/url-toolkit/src/url-toolkit.js"),R=M.n(F);function k(O,D){for(var m=0;m<D.length;m++){var C=D[m];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,C.key,C)}}function j(O,D,m){return D&&k(O.prototype,D),m&&k(O,m),O}var w=function(){O.fromURL=function(m,C){return new O(m,C)},O.fromURI=function(m){return new O(m)};function O(D,m){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,m?this._uri=Object(F.buildAbsoluteURL)(D,m,{alwaysNormalize:!0}):this._uri=D}return j(O,[{key:"uri",get:function(){return this._uri}}]),O}()},"./src/loader/load-stats.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"LoadStats",function(){return F});var F=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},"./src/loader/m3u8-parser.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return a});var F=M("./src/polyfills/number.ts"),R=M("./node_modules/url-toolkit/src/url-toolkit.js"),k=M.n(R),j=M("./src/loader/fragment.ts"),w=M("./src/loader/level-details.ts"),O=M("./src/loader/level-key.ts"),D=M("./src/utils/attr-list.ts"),m=M("./src/utils/logger.ts"),C=M("./src/utils/codecs.ts"),P=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,c=/#EXT-X-MEDIA:(.*)/g,A=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),L=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(PLAYLIST-TYPE):(.+)/.source,/#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,/#EXT-X-(SKIP):(.+)/.source,/#EXT-X-(TARGETDURATION): *(\d+)/.source,/#EXT-X-(KEY):(.+)/.source,/#EXT-X-(START):(.+)/.source,/#EXT-X-(ENDLIST)/.source,/#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,/#EXT-X-(DIS)CONTINUITY/.source,/#EXT-X-(VERSION):(\d+)/.source,/#EXT-X-(MAP):(.+)/.source,/#EXT-X-(SERVER-CONTROL):(.+)/.source,/#EXT-X-(PART-INF):(.+)/.source,/#EXT-X-(GAP)/.source,/#EXT-X-(BITRATE):\s*(\d+)/.source,/#EXT-X-(PART):(.+)/.source,/#EXT-X-(PRELOAD-HINT):(.+)/.source,/#EXT-X-(RENDITION-REPORT):(.+)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),h=/\.(mp4|m4s|m4v|m4a)$/i;function s(g){var _,p;return h.test((_=(p=R.parseURL(g))===null||p===void 0?void 0:p.path)!=null?_:"")}var a=function(){function g(){}return g.findGroup=function(p,u){for(var i=0;i<p.length;i++){var n=p[i];if(n.id===u)return n}},g.convertAVC1ToAVCOTI=function(p){var u=p.split(".");if(u.length>2){var i=u.shift()+".";return i+=parseInt(u.shift()).toString(16),i+=("000"+parseInt(u.shift()).toString(16)).substr(-4),i}return p},g.resolve=function(p,u){return R.buildAbsoluteURL(u,p,{alwaysNormalize:!0})},g.parseMasterPlaylist=function(p,u){var i=[],n={},E=!1;P.lastIndex=0;for(var S;(S=P.exec(p))!=null;)if(S[1]){var I=new D.AttrList(S[1]),x={attrs:I,bitrate:I.decimalInteger("AVERAGE-BANDWIDTH")||I.decimalInteger("BANDWIDTH"),name:I.NAME,url:g.resolve(S[2],u)},B=I.decimalResolution("RESOLUTION");B&&(x.width=B.width,x.height=B.height),l((I.CODECS||"").split(/[ ,]+/).filter(function(K){return K}),x),x.videoCodec&&x.videoCodec.indexOf("avc1")!==-1&&(x.videoCodec=g.convertAVC1ToAVCOTI(x.videoCodec)),i.push(x)}else if(S[3]){var N=new D.AttrList(S[3]);N["DATA-ID"]&&(E=!0,n[N["DATA-ID"]]=N)}return{levels:i,sessionData:E?n:null}},g.parseMasterPlaylistMedia=function(p,u,i,n){n===void 0&&(n=[]);var E,S=[],I=0;for(c.lastIndex=0;(E=c.exec(p))!==null;){var x=new D.AttrList(E[1]);if(x.TYPE===i){var B={attrs:x,bitrate:0,id:I++,groupId:x["GROUP-ID"],instreamId:x["INSTREAM-ID"],name:x.NAME||x.LANGUAGE||"",type:i,default:x.bool("DEFAULT"),autoselect:x.bool("AUTOSELECT"),forced:x.bool("FORCED"),lang:x.LANGUAGE,url:x.URI?g.resolve(x.URI,u):""};if(n.length){var N=g.findGroup(n,B.groupId)||n[0];y(B,N,"audioCodec"),y(B,N,"textCodec")}S.push(B)}}return S},g.parseLevelPlaylist=function(p,u,i,n,E){var S=new w.LevelDetails(u),I=S.fragments,x=null,B=0,N=0,K=0,W=0,G=null,V=new j.Fragment(n,u),X,Z,q,J=-1,ee=!1;for(A.lastIndex=0,S.m3u8=p;(X=A.exec(p))!==null;){ee&&(ee=!1,V=new j.Fragment(n,u),V.start=K,V.sn=B,V.cc=W,V.level=i,x&&(V.initSegment=x,V.rawProgramDateTime=x.rawProgramDateTime));var ie=X[1];if(ie){V.duration=parseFloat(ie);var oe=(" "+X[2]).slice(1);V.title=oe||null,V.tagList.push(oe?["INF",ie,oe]:["INF",ie])}else if(X[3])Object(F.isFiniteNumber)(V.duration)&&(V.start=K,q&&(V.levelkey=q),V.sn=B,V.level=i,V.cc=W,V.urlId=E,I.push(V),V.relurl=(" "+X[3]).slice(1),d(V,G),G=V,K+=V.duration,B++,N=0,ee=!0);else if(X[4]){var le=(" "+X[4]).slice(1);G?V.setByteRange(le,G):V.setByteRange(le)}else if(X[5])V.rawProgramDateTime=(" "+X[5]).slice(1),V.tagList.push(["PROGRAM-DATE-TIME",V.rawProgramDateTime]),J===-1&&(J=I.length);else{if(X=X[0].match(L),!X){m.logger.warn("No matches on slow regex match for level playlist!");continue}for(Z=1;Z<X.length&&typeof X[Z]=="undefined";Z++);var ue=(" "+X[Z]).slice(1),he=(" "+X[Z+1]).slice(1),me=X[Z+2]?(" "+X[Z+2]).slice(1):"";switch(ue){case"PLAYLIST-TYPE":S.type=he.toUpperCase();break;case"MEDIA-SEQUENCE":B=S.startSN=parseInt(he);break;case"SKIP":{var Se=new D.AttrList(he),ye=Se.decimalInteger("SKIPPED-SEGMENTS");if(Object(F.isFiniteNumber)(ye)){S.skippedSegments=ye;for(var _e=ye;_e--;)I.unshift(null);B+=ye}var Ce=Se.enumeratedString("RECENTLY-REMOVED-DATERANGES");Ce&&(S.recentlyRemovedDateranges=Ce.split("	"));break}case"TARGETDURATION":S.targetduration=parseFloat(he);break;case"VERSION":S.version=parseInt(he);break;case"EXTM3U":break;case"ENDLIST":S.live=!1;break;case"#":(he||me)&&V.tagList.push(me?[he,me]:[he]);break;case"DIS":W++;case"GAP":V.tagList.push([ue]);break;case"BITRATE":V.tagList.push([ue,he]);break;case"DISCONTINUITY-SEQ":W=parseInt(he);break;case"KEY":{var Me,Fe=new D.AttrList(he),Ne=Fe.enumeratedString("METHOD"),Ue=Fe.URI,ke=Fe.hexadecimalInteger("IV"),Ee=Fe.enumeratedString("KEYFORMATVERSIONS"),pe=Fe.enumeratedString("KEYID"),ge=(Me=Fe.enumeratedString("KEYFORMAT"))!=null?Me:"identity",ce=["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"];if(ce.indexOf(ge)>-1){m.logger.warn("Keyformat "+ge+" is not supported from the manifest");continue}else if(ge!=="identity")continue;Ne&&(q=O.LevelKey.fromURL(u,Ue),Ue&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(Ne)>=0&&(q.method=Ne,q.keyFormat=ge,pe&&(q.keyID=pe),Ee&&(q.keyFormatVersions=Ee),q.iv=ke));break}case"START":{var Le=new D.AttrList(he),we=Le.decimalFloatingPoint("TIME-OFFSET");Object(F.isFiniteNumber)(we)&&(S.startTimeOffset=we);break}case"MAP":{var Pe=new D.AttrList(he);V.relurl=Pe.URI,Pe.BYTERANGE&&V.setByteRange(Pe.BYTERANGE),V.level=i,V.sn="initSegment",q&&(V.levelkey=q),V.initSegment=null,x=V,ee=!0;break}case"SERVER-CONTROL":{var De=new D.AttrList(he);S.canBlockReload=De.bool("CAN-BLOCK-RELOAD"),S.canSkipUntil=De.optionalFloat("CAN-SKIP-UNTIL",0),S.canSkipDateRanges=S.canSkipUntil>0&&De.bool("CAN-SKIP-DATERANGES"),S.partHoldBack=De.optionalFloat("PART-HOLD-BACK",0),S.holdBack=De.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{var Ke=new D.AttrList(he);S.partTarget=Ke.decimalFloatingPoint("PART-TARGET");break}case"PART":{var Oe=S.partList;Oe||(Oe=S.partList=[]);var be=N>0?Oe[Oe.length-1]:void 0,Ae=N++,Je=new j.Part(new D.AttrList(he),V,u,Ae,be);Oe.push(Je),V.duration+=Je.duration;break}case"PRELOAD-HINT":{var $e=new D.AttrList(he);S.preloadHint=$e;break}case"RENDITION-REPORT":{var st=new D.AttrList(he);S.renditionReports=S.renditionReports||[],S.renditionReports.push(st);break}default:m.logger.warn("line parsed but not handled: "+X);break}}}G&&!G.relurl?(I.pop(),K-=G.duration,S.partList&&(S.fragmentHint=G)):S.partList&&(d(V,G),V.cc=W,S.fragmentHint=V);var rt=I.length,Ge=I[0],Qe=I[rt-1];if(K+=S.skippedSegments*S.targetduration,K>0&&rt&&Qe){S.averagetargetduration=K/rt;var it=Qe.sn;S.endSN=it!=="initSegment"?it:0,Ge&&(S.startCC=Ge.cc,Ge.initSegment||S.fragments.every(function(qe){return qe.relurl&&s(qe.relurl)})&&(m.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),V=new j.Fragment(n,u),V.relurl=Qe.relurl,V.level=i,V.sn="initSegment",Ge.initSegment=V,S.needSidxRanges=!0))}else S.endSN=0,S.startCC=0;return S.fragmentHint&&(K+=S.fragmentHint.duration),S.totalduration=K,S.endCC=W,J>0&&f(I,J),S},g}();function l(g,_){["video","audio","text"].forEach(function(p){var u=g.filter(function(n){return Object(C.isCodecType)(n,p)});if(u.length){var i=u.filter(function(n){return n.lastIndexOf("avc1",0)===0||n.lastIndexOf("mp4a",0)===0});_[p+"Codec"]=i.length>0?i[0]:u[0],g=g.filter(function(n){return u.indexOf(n)===-1})}}),_.unknownCodecs=g}function y(g,_,p){var u=_[p];u&&(g[p]=u)}function f(g,_){for(var p=g[_],u=_;u--;){var i=g[u];if(!i)return;i.programDateTime=p.programDateTime-i.duration*1e3,p=i}}function d(g,_){g.rawProgramDateTime?g.programDateTime=Date.parse(g.rawProgramDateTime):_!=null&&_.programDateTime&&(g.programDateTime=_.endProgramDateTime),Object(F.isFiniteNumber)(g.programDateTime)||(g.programDateTime=null,g.rawProgramDateTime=null)}},"./src/loader/playlist-loader.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/polyfills/number.ts"),R=M("./src/events.ts"),k=M("./src/errors.ts"),j=M("./src/utils/logger.ts"),w=M("./src/utils/mp4-tools.ts"),O=M("./src/loader/m3u8-parser.ts"),D=M("./src/types/loader.ts"),m=M("./src/utils/attr-list.ts");function C(A){var L=A.type;switch(L){case D.PlaylistContextType.AUDIO_TRACK:return D.PlaylistLevelType.AUDIO;case D.PlaylistContextType.SUBTITLE_TRACK:return D.PlaylistLevelType.SUBTITLE;default:return D.PlaylistLevelType.MAIN}}function P(A,L){var h=A.url;return(h===void 0||h.indexOf("data:")===0)&&(h=L.url),h}var c=function(){function A(h){this.hls=void 0,this.loaders=Object.create(null),this.hls=h,this.registerListeners()}var L=A.prototype;return L.registerListeners=function(){var s=this.hls;s.on(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.on(R.Events.LEVEL_LOADING,this.onLevelLoading,this),s.on(R.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),s.on(R.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},L.unregisterListeners=function(){var s=this.hls;s.off(R.Events.MANIFEST_LOADING,this.onManifestLoading,this),s.off(R.Events.LEVEL_LOADING,this.onLevelLoading,this),s.off(R.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),s.off(R.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},L.createInternalLoader=function(s){var a=this.hls.config,l=a.pLoader,y=a.loader,f=l||y,d=new f(a);return s.loader=d,this.loaders[s.type]=d,d},L.getInternalLoader=function(s){return this.loaders[s.type]},L.resetInternalLoader=function(s){this.loaders[s]&&delete this.loaders[s]},L.destroyInternalLoaders=function(){for(var s in this.loaders){var a=this.loaders[s];a&&a.destroy(),this.resetInternalLoader(s)}},L.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},L.onManifestLoading=function(s,a){var l=a.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:D.PlaylistContextType.MANIFEST,url:l,deliveryDirectives:null})},L.onLevelLoading=function(s,a){var l=a.id,y=a.level,f=a.url,d=a.deliveryDirectives;this.load({id:l,groupId:null,level:y,responseType:"text",type:D.PlaylistContextType.LEVEL,url:f,deliveryDirectives:d})},L.onAudioTrackLoading=function(s,a){var l=a.id,y=a.groupId,f=a.url,d=a.deliveryDirectives;this.load({id:l,groupId:y,level:null,responseType:"text",type:D.PlaylistContextType.AUDIO_TRACK,url:f,deliveryDirectives:d})},L.onSubtitleTrackLoading=function(s,a){var l=a.id,y=a.groupId,f=a.url,d=a.deliveryDirectives;this.load({id:l,groupId:y,level:null,responseType:"text",type:D.PlaylistContextType.SUBTITLE_TRACK,url:f,deliveryDirectives:d})},L.load=function(s){var a,l=this.hls.config,y=this.getInternalLoader(s);if(y){var f=y.context;if(f&&f.url===s.url){j.logger.trace("[playlist-loader]: playlist request ongoing");return}j.logger.log("[playlist-loader]: aborting previous loader for type: "+s.type),y.abort()}var d,g,_,p;switch(s.type){case D.PlaylistContextType.MANIFEST:d=l.manifestLoadingMaxRetry,g=l.manifestLoadingTimeOut,_=l.manifestLoadingRetryDelay,p=l.manifestLoadingMaxRetryTimeout;break;case D.PlaylistContextType.LEVEL:case D.PlaylistContextType.AUDIO_TRACK:case D.PlaylistContextType.SUBTITLE_TRACK:d=0,g=l.levelLoadingTimeOut;break;default:d=l.levelLoadingMaxRetry,g=l.levelLoadingTimeOut,_=l.levelLoadingRetryDelay,p=l.levelLoadingMaxRetryTimeout;break}if(y=this.createInternalLoader(s),(a=s.deliveryDirectives)!==null&&a!==void 0&&a.part){var u;if(s.type===D.PlaylistContextType.LEVEL&&s.level!==null?u=this.hls.levels[s.level].details:s.type===D.PlaylistContextType.AUDIO_TRACK&&s.id!==null?u=this.hls.audioTracks[s.id].details:s.type===D.PlaylistContextType.SUBTITLE_TRACK&&s.id!==null&&(u=this.hls.subtitleTracks[s.id].details),u){var i=u.partTarget,n=u.targetduration;i&&n&&(g=Math.min(Math.max(i*3,n*.8)*1e3,g))}}var E={timeout:g,maxRetry:d,retryDelay:_,maxRetryDelay:p,highWaterMark:0},S={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};y.load(s,E,S)},L.loadsuccess=function(s,a,l,y){if(y===void 0&&(y=null),l.isSidxRequest){this.handleSidxRequest(s,l),this.handlePlaylistLoaded(s,a,l,y);return}this.resetInternalLoader(l.type);var f=s.data;if(f.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(s,l,"no EXTM3U delimiter",y);return}a.parsing.start=performance.now(),f.indexOf("#EXTINF:")>0||f.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(s,a,l,y):this.handleMasterPlaylist(s,a,l,y)},L.loaderror=function(s,a,l){l===void 0&&(l=null),this.handleNetworkError(a,l,!1,s)},L.loadtimeout=function(s,a,l){l===void 0&&(l=null),this.handleNetworkError(a,l,!0)},L.handleMasterPlaylist=function(s,a,l,y){var f=this.hls,d=s.data,g=P(s,l),_=O.default.parseMasterPlaylist(d,g),p=_.levels,u=_.sessionData;if(!p.length){this.handleManifestParsingError(s,l,"no level found in manifest",y);return}var i=p.map(function(B){return{id:B.attrs.AUDIO,audioCodec:B.audioCodec}}),n=p.map(function(B){return{id:B.attrs.SUBTITLES,textCodec:B.textCodec}}),E=O.default.parseMasterPlaylistMedia(d,g,"AUDIO",i),S=O.default.parseMasterPlaylistMedia(d,g,"SUBTITLES",n),I=O.default.parseMasterPlaylistMedia(d,g,"CLOSED-CAPTIONS");if(E.length){var x=E.some(function(B){return!B.url});!x&&p[0].audioCodec&&!p[0].attrs.AUDIO&&(j.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),E.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new m.AttrList({}),bitrate:0,url:""}))}f.trigger(R.Events.MANIFEST_LOADED,{levels:p,audioTracks:E,subtitles:S,captions:I,url:g,stats:a,networkDetails:y,sessionData:u})},L.handleTrackOrLevelPlaylist=function(s,a,l,y){var f=this.hls,d=l.id,g=l.level,_=l.type,p=P(s,l),u=Object(F.isFiniteNumber)(d)?d:0,i=Object(F.isFiniteNumber)(g)?g:u,n=C(l),E=O.default.parseLevelPlaylist(s.data,p,i,n,u);if(!E.fragments.length){f.trigger(R.Events.ERROR,{type:k.ErrorTypes.NETWORK_ERROR,details:k.ErrorDetails.LEVEL_EMPTY_ERROR,fatal:!1,url:p,reason:"no fragments found in level",level:typeof l.level=="number"?l.level:void 0});return}if(_===D.PlaylistContextType.MANIFEST){var S={attrs:new m.AttrList({}),bitrate:0,details:E,name:"",url:p};f.trigger(R.Events.MANIFEST_LOADED,{levels:[S],audioTracks:[],url:p,stats:a,networkDetails:y,sessionData:null})}if(a.parsing.end=performance.now(),E.needSidxRanges){var I,x=(I=E.fragments[0].initSegment)===null||I===void 0?void 0:I.url;this.load({url:x,isSidxRequest:!0,type:_,level:g,levelDetails:E,id:d,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null});return}l.levelDetails=E,this.handlePlaylistLoaded(s,a,l,y)},L.handleSidxRequest=function(s,a){var l=Object(w.parseSegmentIndex)(new Uint8Array(s.data));if(!!l){var y=l.references,f=a.levelDetails;y.forEach(function(d,g){var _=d.info,p=f.fragments[g];p.byteRange.length===0&&p.setByteRange(String(1+_.end-_.start)+"@"+String(_.start)),p.initSegment&&p.initSegment.setByteRange(String(l.moovEndOffset)+"@0")})}},L.handleManifestParsingError=function(s,a,l,y){this.hls.trigger(R.Events.ERROR,{type:k.ErrorTypes.NETWORK_ERROR,details:k.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:a.type===D.PlaylistContextType.MANIFEST,url:s.url,reason:l,response:s,context:a,networkDetails:y})},L.handleNetworkError=function(s,a,l,y){l===void 0&&(l=!1),j.logger.warn("[playlist-loader]: A network "+(l?"timeout":"error")+" occurred while loading "+s.type+" level: "+s.level+" id: "+s.id+' group-id: "'+s.groupId+'"');var f=k.ErrorDetails.UNKNOWN,d=!1,g=this.getInternalLoader(s);switch(s.type){case D.PlaylistContextType.MANIFEST:f=l?k.ErrorDetails.MANIFEST_LOAD_TIMEOUT:k.ErrorDetails.MANIFEST_LOAD_ERROR,d=!0;break;case D.PlaylistContextType.LEVEL:f=l?k.ErrorDetails.LEVEL_LOAD_TIMEOUT:k.ErrorDetails.LEVEL_LOAD_ERROR,d=!1;break;case D.PlaylistContextType.AUDIO_TRACK:f=l?k.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:k.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,d=!1;break;case D.PlaylistContextType.SUBTITLE_TRACK:f=l?k.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:k.ErrorDetails.SUBTITLE_LOAD_ERROR,d=!1;break}g&&this.resetInternalLoader(s.type);var _={type:k.ErrorTypes.NETWORK_ERROR,details:f,fatal:d,url:s.url,loader:g,context:s,networkDetails:a};y&&(_.response=y),this.hls.trigger(R.Events.ERROR,_)},L.handlePlaylistLoaded=function(s,a,l,y){var f=l.type,d=l.level,g=l.id,_=l.groupId,p=l.loader,u=l.levelDetails,i=l.deliveryDirectives;if(!(u!=null&&u.targetduration)){this.handleManifestParsingError(s,l,"invalid target duration",y);return}if(!!p)switch(u.live&&(p.getCacheAge&&(u.ageHeader=p.getCacheAge()||0),(!p.getCacheAge||isNaN(u.ageHeader))&&(u.ageHeader=0)),f){case D.PlaylistContextType.MANIFEST:case D.PlaylistContextType.LEVEL:this.hls.trigger(R.Events.LEVEL_LOADED,{details:u,level:d||0,id:g||0,stats:a,networkDetails:y,deliveryDirectives:i});break;case D.PlaylistContextType.AUDIO_TRACK:this.hls.trigger(R.Events.AUDIO_TRACK_LOADED,{details:u,id:g||0,groupId:_||"",stats:a,networkDetails:y,deliveryDirectives:i});break;case D.PlaylistContextType.SUBTITLE_TRACK:this.hls.trigger(R.Events.SUBTITLE_TRACK_LOADED,{details:u,id:g||0,groupId:_||"",stats:a,networkDetails:y,deliveryDirectives:i});break}},A}();H.default=c},"./src/polyfills/number.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"isFiniteNumber",function(){return F}),M.d(H,"MAX_SAFE_INTEGER",function(){return R});var F=Number.isFinite||function(k){return typeof k=="number"&&isFinite(k)},R=Number.MAX_SAFE_INTEGER||9007199254740991},"./src/remux/aac-helper.ts":function(re,H,M){"use strict";M.r(H);var F=function(){function R(){}return R.getSilentFrame=function(j,w){switch(j){case"mp4a.40.2":if(w===1)return new Uint8Array([0,200,0,128,35,128]);if(w===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(w===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(w===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(w===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(w===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(w===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(w===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(w===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}},R}();H.default=F},"./src/remux/mp4-generator.ts":function(re,H,M){"use strict";M.r(H);var F=Math.pow(2,32)-1,R=function(){function k(){}return k.init=function(){k.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var w;for(w in k.types)k.types.hasOwnProperty(w)&&(k.types[w]=[w.charCodeAt(0),w.charCodeAt(1),w.charCodeAt(2),w.charCodeAt(3)]);var O=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),D=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);k.HDLR_TYPES={video:O,audio:D};var m=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),C=new Uint8Array([0,0,0,0,0,0,0,0]);k.STTS=k.STSC=k.STCO=C,k.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),k.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),k.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),k.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var P=new Uint8Array([105,115,111,109]),c=new Uint8Array([97,118,99,49]),A=new Uint8Array([0,0,0,1]);k.FTYP=k.box(k.types.ftyp,P,A,P,c),k.DINF=k.box(k.types.dinf,k.box(k.types.dref,m))},k.box=function(w){for(var O=8,D=arguments.length,m=new Array(D>1?D-1:0),C=1;C<D;C++)m[C-1]=arguments[C];for(var P=m.length,c=P;P--;)O+=m[P].byteLength;var A=new Uint8Array(O);for(A[0]=O>>24&255,A[1]=O>>16&255,A[2]=O>>8&255,A[3]=O&255,A.set(w,4),P=0,O=8;P<c;P++)A.set(m[P],O),O+=m[P].byteLength;return A},k.hdlr=function(w){return k.box(k.types.hdlr,k.HDLR_TYPES[w])},k.mdat=function(w){return k.box(k.types.mdat,w)},k.mdhd=function(w,O){O*=w;var D=Math.floor(O/(F+1)),m=Math.floor(O%(F+1));return k.box(k.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,w>>24&255,w>>16&255,w>>8&255,w&255,D>>24,D>>16&255,D>>8&255,D&255,m>>24,m>>16&255,m>>8&255,m&255,85,196,0,0]))},k.mdia=function(w){return k.box(k.types.mdia,k.mdhd(w.timescale,w.duration),k.hdlr(w.type),k.minf(w))},k.mfhd=function(w){return k.box(k.types.mfhd,new Uint8Array([0,0,0,0,w>>24,w>>16&255,w>>8&255,w&255]))},k.minf=function(w){return w.type==="audio"?k.box(k.types.minf,k.box(k.types.smhd,k.SMHD),k.DINF,k.stbl(w)):k.box(k.types.minf,k.box(k.types.vmhd,k.VMHD),k.DINF,k.stbl(w))},k.moof=function(w,O,D){return k.box(k.types.moof,k.mfhd(w),k.traf(D,O))},k.moov=function(w){for(var O=w.length,D=[];O--;)D[O]=k.trak(w[O]);return k.box.apply(null,[k.types.moov,k.mvhd(w[0].timescale,w[0].duration)].concat(D).concat(k.mvex(w)))},k.mvex=function(w){for(var O=w.length,D=[];O--;)D[O]=k.trex(w[O]);return k.box.apply(null,[k.types.mvex].concat(D))},k.mvhd=function(w,O){O*=w;var D=Math.floor(O/(F+1)),m=Math.floor(O%(F+1)),C=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,w>>24&255,w>>16&255,w>>8&255,w&255,D>>24,D>>16&255,D>>8&255,D&255,m>>24,m>>16&255,m>>8&255,m&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return k.box(k.types.mvhd,C)},k.sdtp=function(w){var O=w.samples||[],D=new Uint8Array(4+O.length),m,C;for(m=0;m<O.length;m++)C=O[m].flags,D[m+4]=C.dependsOn<<4|C.isDependedOn<<2|C.hasRedundancy;return k.box(k.types.sdtp,D)},k.stbl=function(w){return k.box(k.types.stbl,k.stsd(w),k.box(k.types.stts,k.STTS),k.box(k.types.stsc,k.STSC),k.box(k.types.stsz,k.STSZ),k.box(k.types.stco,k.STCO))},k.avc1=function(w){var O=[],D=[],m,C,P;for(m=0;m<w.sps.length;m++)C=w.sps[m],P=C.byteLength,O.push(P>>>8&255),O.push(P&255),O=O.concat(Array.prototype.slice.call(C));for(m=0;m<w.pps.length;m++)C=w.pps[m],P=C.byteLength,D.push(P>>>8&255),D.push(P&255),D=D.concat(Array.prototype.slice.call(C));var c=k.box(k.types.avcC,new Uint8Array([1,O[3],O[4],O[5],252|3,224|w.sps.length].concat(O).concat([w.pps.length]).concat(D))),A=w.width,L=w.height,h=w.pixelRatio[0],s=w.pixelRatio[1];return k.box(k.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,A>>8&255,A&255,L>>8&255,L&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),c,k.box(k.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),k.box(k.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,h&255,s>>24,s>>16&255,s>>8&255,s&255])))},k.esds=function(w){var O=w.config.length;return new Uint8Array([0,0,0,0,3,23+O,0,1,0,4,15+O,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([O]).concat(w.config).concat([6,1,2]))},k.mp4a=function(w){var O=w.samplerate;return k.box(k.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,w.channelCount,0,16,0,0,0,0,O>>8&255,O&255,0,0]),k.box(k.types.esds,k.esds(w)))},k.mp3=function(w){var O=w.samplerate;return k.box(k.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,w.channelCount,0,16,0,0,0,0,O>>8&255,O&255,0,0]))},k.stsd=function(w){return w.type==="audio"?!w.isAAC&&w.codec==="mp3"?k.box(k.types.stsd,k.STSD,k.mp3(w)):k.box(k.types.stsd,k.STSD,k.mp4a(w)):k.box(k.types.stsd,k.STSD,k.avc1(w))},k.tkhd=function(w){var O=w.id,D=w.duration*w.timescale,m=w.width,C=w.height,P=Math.floor(D/(F+1)),c=Math.floor(D%(F+1));return k.box(k.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,O>>24&255,O>>16&255,O>>8&255,O&255,0,0,0,0,P>>24,P>>16&255,P>>8&255,P&255,c>>24,c>>16&255,c>>8&255,c&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,m>>8&255,m&255,0,0,C>>8&255,C&255,0,0]))},k.traf=function(w,O){var D=k.sdtp(w),m=w.id,C=Math.floor(O/(F+1)),P=Math.floor(O%(F+1));return k.box(k.types.traf,k.box(k.types.tfhd,new Uint8Array([0,0,0,0,m>>24,m>>16&255,m>>8&255,m&255])),k.box(k.types.tfdt,new Uint8Array([1,0,0,0,C>>24,C>>16&255,C>>8&255,C&255,P>>24,P>>16&255,P>>8&255,P&255])),k.trun(w,D.length+16+20+8+16+8+8),D)},k.trak=function(w){return w.duration=w.duration||4294967295,k.box(k.types.trak,k.tkhd(w),k.mdia(w))},k.trex=function(w){var O=w.id;return k.box(k.types.trex,new Uint8Array([0,0,0,0,O>>24,O>>16&255,O>>8&255,O&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},k.trun=function(w,O){var D=w.samples||[],m=D.length,C=12+16*m,P=new Uint8Array(C),c,A,L,h,s,a;for(O+=8+C,P.set([0,0,15,1,m>>>24&255,m>>>16&255,m>>>8&255,m&255,O>>>24&255,O>>>16&255,O>>>8&255,O&255],0),c=0;c<m;c++)A=D[c],L=A.duration,h=A.size,s=A.flags,a=A.cts,P.set([L>>>24&255,L>>>16&255,L>>>8&255,L&255,h>>>24&255,h>>>16&255,h>>>8&255,h&255,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,s.degradPrio&240<<8,s.degradPrio&15,a>>>24&255,a>>>16&255,a>>>8&255,a&255],12+16*c);return k.box(k.types.trun,P)},k.initSegment=function(w){k.types||k.init();var O=k.moov(w),D=new Uint8Array(k.FTYP.byteLength+O.byteLength);return D.set(k.FTYP),D.set(O,k.FTYP.byteLength),D},k}();R.types=void 0,R.HDLR_TYPES=void 0,R.STTS=void 0,R.STSC=void 0,R.STCO=void 0,R.STSZ=void 0,R.VMHD=void 0,R.SMHD=void 0,R.STSD=void 0,R.FTYP=void 0,R.DINF=void 0,H.default=R},"./src/remux/mp4-remuxer.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return a}),M.d(H,"normalizePts",function(){return l});var F=M("./src/polyfills/number.ts"),R=M("./src/remux/aac-helper.ts"),k=M("./src/remux/mp4-generator.ts"),j=M("./src/events.ts"),w=M("./src/errors.ts"),O=M("./src/utils/logger.ts"),D=M("./src/types/loader.ts"),m=M("./src/utils/timescale-conversion.ts");function C(){return C=Object.assign||function(g){for(var _=1;_<arguments.length;_++){var p=arguments[_];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(g[u]=p[u])}return g},C.apply(this,arguments)}var P=10*1e3,c=1024,A=1152,L=null,h=null,s=!1,a=function(){function g(p,u,i,n){if(n===void 0&&(n=""),this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=p,this.config=u,this.typeSupported=i,this.ISGenerated=!1,L===null){var E=navigator.userAgent||"",S=E.match(/Chrome\/(\d+)/i);L=S?parseInt(S[1]):0}if(h===null){var I=navigator.userAgent.match(/Safari\/(\d+)/i);h=I?parseInt(I[1]):0}s=!!L&&L<75||!!h&&h<600}var _=g.prototype;return _.destroy=function(){},_.resetTimeStamp=function(u){O.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=u},_.resetNextTimestamp=function(){O.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},_.resetInitSegment=function(){O.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},_.getVideoStartPts=function(u){var i=!1,n=u.reduce(function(E,S){var I=S.pts-E;return I<-4294967296?(i=!0,l(E,S.pts)):I>0?E:S.pts},u[0].pts);return i&&O.logger.debug("PTS rollover detected"),n},_.remux=function(u,i,n,E,S,I,x,B){var N,K,W,G,V,X,Z=S,q=S,J=u.pid>-1,ee=i.pid>-1,ie=i.samples.length,oe=u.samples.length>0,le=ie>1,ue=(!J||oe)&&(!ee||le)||this.ISGenerated||x;if(ue){this.ISGenerated||(W=this.generateIS(u,i,S));var he=this.isVideoContiguous,me=-1;if(le&&(me=y(i.samples),!he&&this.config.forceKeyFrameOnDiscontinuity))if(X=!0,me>0){O.logger.warn("[mp4-remuxer]: Dropped "+me+" out of "+ie+" video samples due to a missing keyframe");var Se=this.getVideoStartPts(i.samples);i.samples=i.samples.slice(me),i.dropped+=me,q+=(i.samples[0].pts-Se)/(i.timescale||9e4)}else me===-1&&(O.logger.warn("[mp4-remuxer]: No keyframe found out of "+ie+" video samples"),X=!1);if(this.ISGenerated){if(oe&&le){var ye=this.getVideoStartPts(i.samples),_e=l(u.samples[0].pts,ye)-ye,Ce=_e/i.inputTimeScale;Z+=Math.max(0,Ce),q+=Math.max(0,-Ce)}if(oe){if(u.samplerate||(O.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),W=this.generateIS(u,i,S)),K=this.remuxAudio(u,Z,this.isAudioContiguous,I,ee||le||B===D.PlaylistLevelType.AUDIO?q:void 0),le){var Me=K?K.endPTS-K.startPTS:0;i.inputTimeScale||(O.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),W=this.generateIS(u,i,S)),N=this.remuxVideo(i,q,he,Me)}}else le&&(N=this.remuxVideo(i,q,he,0));N&&(N.firstKeyFrame=me,N.independent=me!==-1)}}return this.ISGenerated&&(n.samples.length&&(V=this.remuxID3(n,S)),E.samples.length&&(G=this.remuxText(E,S))),{audio:K,video:N,initSegment:W,independent:X,text:G,id3:V}},_.generateIS=function(u,i,n){var E=u.samples,S=i.samples,I=this.typeSupported,x={},B=!Object(F.isFiniteNumber)(this._initPTS),N="audio/mp4",K,W,G;if(B&&(K=W=Infinity),u.config&&E.length&&(u.timescale=u.samplerate,u.isAAC||(I.mpeg?(N="audio/mpeg",u.codec=""):I.mp3&&(u.codec="mp3")),x.audio={id:"audio",container:N,codec:u.codec,initSegment:!u.isAAC&&I.mpeg?new Uint8Array(0):k.default.initSegment([u]),metadata:{channelCount:u.channelCount}},B&&(G=u.inputTimeScale,K=W=E[0].pts-Math.round(G*n))),i.sps&&i.pps&&S.length&&(i.timescale=i.inputTimeScale,x.video={id:"main",container:"video/mp4",codec:i.codec,initSegment:k.default.initSegment([i]),metadata:{width:i.width,height:i.height}},B)){G=i.inputTimeScale;var V=this.getVideoStartPts(S),X=Math.round(G*n);W=Math.min(W,l(S[0].dts,V)-X),K=Math.min(K,V-X)}if(Object.keys(x).length)return this.ISGenerated=!0,B&&(this._initPTS=K,this._initDTS=W),{tracks:x,initPTS:K,timescale:G}},_.remuxVideo=function(u,i,n,E){var S=u.inputTimeScale,I=u.samples,x=[],B=I.length,N=this._initPTS,K=this.nextAvcDts,W=8,G,V,X,Z=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,J=0,ee=!1;if(!n||K===null){var ie=i*S,oe=I[0].pts-l(I[0].dts,I[0].pts);K=ie-oe}for(var le=0;le<B;le++){var ue=I[le];if(ue.pts=l(ue.pts-N,K),ue.dts=l(ue.dts-N,K),ue.dts>ue.pts){var he=9e4*.2;J=Math.max(Math.min(J,ue.pts-ue.dts),-1*he)}ue.dts<I[le>0?le-1:le].dts&&(ee=!0)}ee&&I.sort(function(bt,wt){var Yt=bt.dts-wt.dts,Ft=bt.pts-wt.pts;return Yt||Ft}),V=I[0].dts,X=I[I.length-1].dts;var me=Math.round((X-V)/(B-1));if(J<0){if(J<me*-2){O.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+Object(m.toMsFromMpegTsClock)(-me,!0)+" ms");for(var Se=J,ye=0;ye<B;ye++)I[ye].dts=Se=Math.max(Se,I[ye].pts-me),I[ye].pts=Math.max(Se,I[ye].pts)}else{O.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Object(m.toMsFromMpegTsClock)(J,!0)+" ms to overcome this issue");for(var _e=0;_e<B;_e++)I[_e].dts=I[_e].dts+J}V=I[0].dts}if(n){var Ce=V-K,Me=Ce>me,Fe=Ce<-1;if(Me||Fe){Me?O.logger.warn("AVC: "+Object(m.toMsFromMpegTsClock)(Ce,!0)+" ms ("+Ce+"dts) hole between fragments detected, filling it"):O.logger.warn("AVC: "+Object(m.toMsFromMpegTsClock)(-Ce,!0)+" ms ("+Ce+"dts) overlapping between fragments detected"),V=K;var Ne=I[0].pts-Ce;I[0].dts=V,I[0].pts=Ne,O.logger.log("Video: First PTS/DTS adjusted: "+Object(m.toMsFromMpegTsClock)(Ne,!0)+"/"+Object(m.toMsFromMpegTsClock)(V,!0)+", delta: "+Object(m.toMsFromMpegTsClock)(Ce,!0)+" ms")}}s&&(V=Math.max(0,V));for(var Ue=0,ke=0,Ee=0;Ee<B;Ee++){for(var pe=I[Ee],ge=pe.units,ce=ge.length,Le=0,we=0;we<ce;we++)Le+=ge[we].data.length;ke+=Le,Ue+=ce,pe.length=Le,pe.dts=Math.max(pe.dts,V),pe.pts=Math.max(pe.pts,pe.dts,0),Z=Math.min(pe.pts,Z),q=Math.max(pe.pts,q)}X=I[B-1].dts;var Pe=ke+4*Ue+8,De;try{De=new Uint8Array(Pe)}catch(bt){this.observer.emit(j.Events.ERROR,j.Events.ERROR,{type:w.ErrorTypes.MUX_ERROR,details:w.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Pe,reason:"fail allocating video mdat "+Pe});return}var Ke=new DataView(De.buffer);Ke.setUint32(0,Pe),De.set(k.default.types.mdat,4);for(var Oe=0;Oe<B;Oe++){for(var be=I[Oe],Ae=be.units,Je=0,$e=0,st=Ae.length;$e<st;$e++){var rt=Ae[$e],Ge=rt.data,Qe=rt.data.byteLength;Ke.setUint32(W,Qe),W+=4,De.set(Ge,W),W+=Qe,Je+=4+Qe}if(Oe<B-1)G=I[Oe+1].dts-be.dts;else{var it=this.config,qe=be.dts-I[Oe>0?Oe-1:Oe].dts;if(it.stretchShortVideoTrack&&this.nextAudioPts!==null){var Gt=Math.floor(it.maxBufferHole*S),gt=(E?Z+E*S:this.nextAudioPts)-be.pts;gt>Gt?(G=gt-qe,G<0&&(G=qe),O.logger.log("[mp4-remuxer]: It is approximately "+gt/90+" ms to the next segment; using duration "+G/90+" ms for the last video frame.")):G=qe}else G=qe}var Vt=Math.round(be.pts-be.dts);x.push(new f(be.key,G,Je,Vt))}if(x.length&&L&&L<70){var St=x[0].flags;St.dependsOn=2,St.isNonSync=0}console.assert(G!==void 0,"mp4SampleDuration must be computed"),this.nextAvcDts=K=X+G,this.isVideoContiguous=!0;var zt=k.default.moof(u.sequenceNumber++,V,C({},u,{samples:x})),ft="video",ot={data1:zt,data2:De,startPTS:Z/S,endPTS:(q+G)/S,startDTS:V/S,endDTS:K/S,type:ft,hasAudio:!1,hasVideo:!0,nb:x.length,dropped:u.dropped};return u.samples=[],u.dropped=0,console.assert(De.length,"MDAT length must not be zero"),ot},_.remuxAudio=function(u,i,n,E,S){var I=u.inputTimeScale,x=u.samplerate?u.samplerate:I,B=I/x,N=u.isAAC?c:A,K=N*B,W=this._initPTS,G=!u.isAAC&&this.typeSupported.mpeg,V=[],X=u.samples,Z=G?0:8,q=this.nextAudioPts||-1,J=i*I;if(this.isAudioContiguous=n=n||X.length&&q>0&&(E&&Math.abs(J-q)<9e3||Math.abs(l(X[0].pts-W,J)-q)<20*K),X.forEach(function(Ge){Ge.pts=l(Ge.pts-W,J)}),!n||q<0){if(X=X.filter(function(Ge){return Ge.pts>=0}),!X.length)return;S===0?q=0:E?q=Math.max(0,J):q=X[0].pts}if(u.isAAC)for(var ee=S!==void 0,ie=this.config.maxAudioFramesDrift,oe=0,le=q;oe<X.length;oe++){var ue=X[oe],he=ue.pts,me=he-le,Se=Math.abs(1e3*me/I);if(me<=-ie*K&&ee)oe===0&&(O.logger.warn("Audio frame @ "+(he/I).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*me/I)+" ms."),this.nextAudioPts=q=le=he);else if(me>=ie*K&&Se<P&&ee){var ye=Math.round(me/K);le=he-ye*K,le<0&&(ye--,le+=K),oe===0&&(this.nextAudioPts=q=le),O.logger.warn("[mp4-remuxer]: Injecting "+ye+" audio frame @ "+(le/I).toFixed(3)+"s due to "+Math.round(1e3*me/I)+" ms gap.");for(var _e=0;_e<ye;_e++){var Ce=Math.max(le,0),Me=R.default.getSilentFrame(u.manifestCodec||u.codec,u.channelCount);Me||(O.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Me=ue.unit.subarray()),X.splice(oe,0,{unit:Me,pts:Ce}),le+=K,oe++}}ue.pts=le,le+=K}for(var Fe=null,Ne=null,Ue,ke=0,Ee=X.length;Ee--;)ke+=X[Ee].unit.byteLength;for(var pe=0,ge=X.length;pe<ge;pe++){var ce=X[pe],Le=ce.unit,we=ce.pts;if(Ne!==null){var Pe=V[pe-1];Pe.duration=Math.round((we-Ne)/B)}else if(n&&u.isAAC&&(we=q),Fe=we,ke>0){ke+=Z;try{Ue=new Uint8Array(ke)}catch(Ge){this.observer.emit(j.Events.ERROR,j.Events.ERROR,{type:w.ErrorTypes.MUX_ERROR,details:w.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:ke,reason:"fail allocating audio mdat "+ke});return}if(!G){var De=new DataView(Ue.buffer);De.setUint32(0,ke),Ue.set(k.default.types.mdat,4)}}else return;Ue.set(Le,Z);var Ke=Le.byteLength;Z+=Ke,V.push(new f(!0,N,Ke,0)),Ne=we}var Oe=V.length;if(!!Oe){var be=V[V.length-1];this.nextAudioPts=q=Ne+B*be.duration;var Ae=G?new Uint8Array(0):k.default.moof(u.sequenceNumber++,Fe/B,C({},u,{samples:V}));u.samples=[];var Je=Fe/I,$e=q/I,st="audio",rt={data1:Ae,data2:Ue,startPTS:Je,endPTS:$e,startDTS:Je,endDTS:$e,type:st,hasAudio:!0,hasVideo:!1,nb:Oe};return this.isAudioContiguous=!0,console.assert(Ue.length,"MDAT length must not be zero"),rt}},_.remuxEmptyAudio=function(u,i,n,E){var S=u.inputTimeScale,I=u.samplerate?u.samplerate:S,x=S/I,B=this.nextAudioPts,N=(B!==null?B:E.startDTS*S)+this._initDTS,K=E.endDTS*S+this._initDTS,W=x*c,G=Math.ceil((K-N)/W),V=R.default.getSilentFrame(u.manifestCodec||u.codec,u.channelCount);if(O.logger.warn("[mp4-remuxer]: remux empty Audio"),!V){O.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}for(var X=[],Z=0;Z<G;Z++){var q=N+Z*W;X.push({unit:V,pts:q,dts:q})}return u.samples=X,this.remuxAudio(u,i,n,!1)},_.remuxID3=function(u,i){var n=u.samples.length;if(!!n){for(var E=u.inputTimeScale,S=this._initPTS,I=this._initDTS,x=0;x<n;x++){var B=u.samples[x];B.pts=l(B.pts-S,i*E)/E,B.dts=l(B.dts-I,i*E)/E}var N=u.samples;return u.samples=[],{samples:N}}},_.remuxText=function(u,i){var n=u.samples.length;if(!!n){for(var E=u.inputTimeScale,S=this._initPTS,I=0;I<n;I++){var x=u.samples[I];x.pts=l(x.pts-S,i*E)/E}u.samples.sort(function(N,K){return N.pts-K.pts});var B=u.samples;return u.samples=[],{samples:B}}},g}();function l(g,_){var p;if(_===null)return g;for(_<g?p=-8589934592:p=8589934592;Math.abs(g-_)>4294967296;)g+=p;return g}function y(g){for(var _=0;_<g.length;_++)if(g[_].key)return _;return-1}var f=function(_,p,u,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=p,this.size=u,this.cts=i,this.flags=new d(_)},d=function(_){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=_?2:1,this.isNonSync=_?0:1}},"./src/remux/passthrough-remuxer.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/polyfills/number.ts"),R=M("./src/utils/mp4-tools.ts"),k=M("./src/loader/fragment.ts"),j=M("./src/utils/logger.ts"),w=function(){function m(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndDTS=null}var C=m.prototype;return C.destroy=function(){},C.resetTimeStamp=function(c){this.initPTS=c,this.lastEndDTS=null},C.resetNextTimestamp=function(){this.lastEndDTS=null},C.resetInitSegment=function(c,A,L){this.audioCodec=A,this.videoCodec=L,this.generateInitSegment(c),this.emitInitSegment=!0},C.generateInitSegment=function(c){var A=this.audioCodec,L=this.videoCodec;if(!c||!c.byteLength){this.initTracks=void 0,this.initData=void 0;return}var h=this.initData=Object(R.parseInitSegment)(c);A||(A=D(h.audio,k.ElementaryStreamTypes.AUDIO)),L||(L=D(h.video,k.ElementaryStreamTypes.VIDEO));var s={};h.audio&&h.video?s.audiovideo={container:"video/mp4",codec:A+","+L,initSegment:c,id:"main"}:h.audio?s.audio={container:"audio/mp4",codec:A,initSegment:c,id:"audio"}:h.video?s.video={container:"video/mp4",codec:L,initSegment:c,id:"main"}:j.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=s},C.remux=function(c,A,L,h,s){var a=this.initPTS,l=this.lastEndDTS,y={audio:void 0,video:void 0,text:h,id3:L,initSegment:void 0};Object(F.isFiniteNumber)(l)||(l=this.lastEndDTS=s||0);var f=A.samples;if(!f||!f.length)return y;var d={initPTS:void 0,timescale:1},g=this.initData;if((!g||!g.length)&&(this.generateInitSegment(f),g=this.initData),!g||!g.length)return j.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),y;this.emitInitSegment&&(d.tracks=this.initTracks,this.emitInitSegment=!1),Object(F.isFiniteNumber)(a)||(this.initPTS=d.initPTS=a=O(g,f,l));var _=Object(R.getDuration)(f,g),p=l,u=_+p;Object(R.offsetStartDTS)(g,f,a),_>0?this.lastEndDTS=u:(j.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var i=!!g.audio,n=!!g.video,E="";i&&(E+="audio"),n&&(E+="video");var S={data1:f,startPTS:p,startDTS:p,endPTS:u,endDTS:u,type:E,hasAudio:i,hasVideo:n,nb:1,dropped:0};return y.audio=S.type==="audio"?S:void 0,y.video=S.type!=="audio"?S:void 0,y.text=h,y.id3=L,y.initSegment=d,y},m}(),O=function(C,P,c){return Object(R.getStartDTS)(C,P)-c};function D(m,C){var P=m==null?void 0:m.codec;return P&&P.length>4?P:P==="hvc1"?"hvc1.1.c.L120.90":P==="av01"?"av01.0.04M.08":P==="avc1"||C===k.ElementaryStreamTypes.VIDEO?"avc1.42e01e":"mp4a.40.5"}H.default=w},"./src/task-loop.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return F});var F=function(){function R(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var k=R.prototype;return k.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},k.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},k.onHandlerDestroyed=function(){},k.hasInterval=function(){return!!this._tickInterval},k.hasNextTick=function(){return!!this._tickTimer},k.setInterval=function(w){return this._tickInterval?!1:(this._tickInterval=self.setInterval(this._boundTick,w),!0)},k.clearInterval=function(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1},k.clearNextTick=function(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1},k.tick=function(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},k.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},k.doTick=function(){},R}()},"./src/types/level.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"HlsSkip",function(){return k}),M.d(H,"getSkipValue",function(){return j}),M.d(H,"HlsUrlParameters",function(){return w}),M.d(H,"Level",function(){return O});function F(D,m){for(var C=0;C<m.length;C++){var P=m[C];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(D,P.key,P)}}function R(D,m,C){return m&&F(D.prototype,m),C&&F(D,C),D}var k;(function(D){D.No="",D.Yes="YES",D.v2="v2"})(k||(k={}));function j(D,m){var C=D.canSkipUntil,P=D.canSkipDateRanges,c=D.endSN,A=m!==void 0?m-c:0;return C&&A<C?P?k.v2:k.Yes:k.No}var w=function(){function D(C,P,c){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=C,this.part=P,this.skip=c}var m=D.prototype;return m.addDirectives=function(P){var c=new self.URL(P);return this.msn!==void 0&&c.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&c.searchParams.set("_HLS_part",this.part.toString()),this.skip&&c.searchParams.set("_HLS_skip",this.skip),c.toString()},D}(),O=function(){function D(m){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[m.url],this.attrs=m.attrs,this.bitrate=m.bitrate,m.details&&(this.details=m.details),this.id=m.id||0,this.name=m.name,this.width=m.width||0,this.height=m.height||0,this.audioCodec=m.audioCodec,this.videoCodec=m.videoCodec,this.unknownCodecs=m.unknownCodecs,this.codecSet=[m.videoCodec,m.audioCodec].filter(function(C){return C}).join(",").replace(/\.[^.,]+/g,"")}return R(D,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(C){var P=C%this.url.length;this._urlId!==P&&(this.details=void 0,this._urlId=P)}}]),D}()},"./src/types/loader.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"PlaylistContextType",function(){return F}),M.d(H,"PlaylistLevelType",function(){return R});var F;(function(k){k.MANIFEST="manifest",k.LEVEL="level",k.AUDIO_TRACK="audioTrack",k.SUBTITLE_TRACK="subtitleTrack"})(F||(F={}));var R;(function(k){k.MAIN="main",k.AUDIO="audio",k.SUBTITLE="subtitle"})(R||(R={}))},"./src/types/transmuxer.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"ChunkMetadata",function(){return F});var F=function(j,w,O,D,m,C){D===void 0&&(D=0),m===void 0&&(m=-1),C===void 0&&(C=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=R(),this.buffering={audio:R(),video:R(),audiovideo:R()},this.level=j,this.sn=w,this.id=O,this.size=D,this.part=m,this.partial=C};function R(){return{start:0,executeStart:0,executeEnd:0,end:0}}},"./src/utils/attr-list.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"AttrList",function(){return k});var F=/^(\d+)x(\d+)$/,R=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,k=function(){function j(O){typeof O=="string"&&(O=j.parseAttrList(O));for(var D in O)O.hasOwnProperty(D)&&(this[D]=O[D])}var w=j.prototype;return w.decimalInteger=function(D){var m=parseInt(this[D],10);return m>Number.MAX_SAFE_INTEGER?Infinity:m},w.hexadecimalInteger=function(D){if(this[D]){var m=(this[D]||"0x").slice(2);m=(m.length&1?"0":"")+m;for(var C=new Uint8Array(m.length/2),P=0;P<m.length/2;P++)C[P]=parseInt(m.slice(P*2,P*2+2),16);return C}else return null},w.hexadecimalIntegerAsNumber=function(D){var m=parseInt(this[D],16);return m>Number.MAX_SAFE_INTEGER?Infinity:m},w.decimalFloatingPoint=function(D){return parseFloat(this[D])},w.optionalFloat=function(D,m){var C=this[D];return C?parseFloat(C):m},w.enumeratedString=function(D){return this[D]},w.bool=function(D){return this[D]==="YES"},w.decimalResolution=function(D){var m=F.exec(this[D]);if(m!==null)return{width:parseInt(m[1],10),height:parseInt(m[2],10)}},j.parseAttrList=function(D){var m,C={},P='"';for(R.lastIndex=0;(m=R.exec(D))!==null;){var c=m[2];c.indexOf(P)===0&&c.lastIndexOf(P)===c.length-1&&(c=c.slice(1,-1)),C[m[1]]=c}return C},j}()},"./src/utils/binary-search.ts":function(re,H,M){"use strict";M.r(H);var F={search:function(k,j){for(var w=0,O=k.length-1,D=null,m=null;w<=O;){D=(w+O)/2|0,m=k[D];var C=j(m);if(C>0)w=D+1;else if(C<0)O=D-1;else return m}return null}};H.default=F},"./src/utils/buffer-helper.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"BufferHelper",function(){return k});var F=M("./src/utils/logger.ts"),R={length:0,start:function(){return 0},end:function(){return 0}},k=function(){function j(){}return j.isBuffered=function(O,D){try{if(O){for(var m=j.getBuffered(O),C=0;C<m.length;C++)if(D>=m.start(C)&&D<=m.end(C))return!0}}catch(P){}return!1},j.bufferInfo=function(O,D,m){try{if(O){var C=j.getBuffered(O),P=[],c;for(c=0;c<C.length;c++)P.push({start:C.start(c),end:C.end(c)});return this.bufferedInfo(P,D,m)}}catch(A){}return{len:0,start:D,end:D,nextStart:void 0}},j.bufferedInfo=function(O,D,m){D=Math.max(0,D),O.sort(function(d,g){var _=d.start-g.start;return _||g.end-d.end});var C=[];if(m)for(var P=0;P<O.length;P++){var c=C.length;if(c){var A=C[c-1].end;O[P].start-A<m?O[P].end>A&&(C[c-1].end=O[P].end):C.push(O[P])}else C.push(O[P])}else C=O;for(var L=0,h,s=D,a=D,l=0;l<C.length;l++){var y=C[l].start,f=C[l].end;if(D+m>=y&&D<f)s=y,a=f,L=a-D;else if(D+m<y){h=y;break}}return{len:L,start:s||0,end:a||0,nextStart:h}},j.getBuffered=function(O){try{return O.buffered}catch(D){return F.logger.log("failed to get media.buffered",D),R}},j}()},"./src/utils/cea-608-parser.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"Row",function(){return a}),M.d(H,"CaptionScreen",function(){return l});var F=M("./src/utils/logger.ts"),R={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},k=function(u){var i=u;return R.hasOwnProperty(u)&&(i=R[u]),String.fromCharCode(i)},j=15,w=100,O={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},D={17:2,18:4,21:6,22:8,23:10,19:13,20:15},m={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},C={25:2,26:4,29:6,30:8,31:10,27:13,28:15},P=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],c;(function(p){p[p.ERROR=0]="ERROR",p[p.TEXT=1]="TEXT",p[p.WARNING=2]="WARNING",p[p.INFO=2]="INFO",p[p.DEBUG=3]="DEBUG",p[p.DATA=3]="DATA"})(c||(c={}));var A=function(){function p(){this.time=null,this.verboseLevel=c.ERROR}var u=p.prototype;return u.log=function(n,E){this.verboseLevel>=n&&F.logger.log(this.time+" ["+n+"] "+E)},p}(),L=function(u){for(var i=[],n=0;n<u.length;n++)i.push(u[n].toString(16));return i},h=function(){function p(i,n,E,S,I){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=i||"white",this.underline=n||!1,this.italics=E||!1,this.background=S||"black",this.flash=I||!1}var u=p.prototype;return u.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},u.setStyles=function(n){for(var E=["foreground","underline","italics","background","flash"],S=0;S<E.length;S++){var I=E[S];n.hasOwnProperty(I)&&(this[I]=n[I])}},u.isDefault=function(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash},u.equals=function(n){return this.foreground===n.foreground&&this.underline===n.underline&&this.italics===n.italics&&this.background===n.background&&this.flash===n.flash},u.copy=function(n){this.foreground=n.foreground,this.underline=n.underline,this.italics=n.italics,this.background=n.background,this.flash=n.flash},u.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},p}(),s=function(){function p(i,n,E,S,I,x){this.uchar=void 0,this.penState=void 0,this.uchar=i||" ",this.penState=new h(n,E,S,I,x)}var u=p.prototype;return u.reset=function(){this.uchar=" ",this.penState.reset()},u.setChar=function(n,E){this.uchar=n,this.penState.copy(E)},u.setPenState=function(n){this.penState.copy(n)},u.equals=function(n){return this.uchar===n.uchar&&this.penState.equals(n.penState)},u.copy=function(n){this.uchar=n.uchar,this.penState.copy(n.penState)},u.isEmpty=function(){return this.uchar===" "&&this.penState.isDefault()},p}(),a=function(){function p(i){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var n=0;n<w;n++)this.chars.push(new s);this.logger=i,this.pos=0,this.currPenState=new h}var u=p.prototype;return u.equals=function(n){for(var E=!0,S=0;S<w;S++)if(!this.chars[S].equals(n.chars[S])){E=!1;break}return E},u.copy=function(n){for(var E=0;E<w;E++)this.chars[E].copy(n.chars[E])},u.isEmpty=function(){for(var n=!0,E=0;E<w;E++)if(!this.chars[E].isEmpty()){n=!1;break}return n},u.setCursor=function(n){this.pos!==n&&(this.pos=n),this.pos<0?(this.logger.log(c.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>w&&(this.logger.log(c.DEBUG,"Too large cursor position "+this.pos),this.pos=w)},u.moveCursor=function(n){var E=this.pos+n;if(n>1)for(var S=this.pos+1;S<E+1;S++)this.chars[S].setPenState(this.currPenState);this.setCursor(E)},u.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},u.insertChar=function(n){n>=144&&this.backSpace();var E=k(n);if(this.pos>=w){this.logger.log(c.ERROR,"Cannot insert "+n.toString(16)+" ("+E+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(E,this.currPenState),this.moveCursor(1)},u.clearFromPos=function(n){var E;for(E=n;E<w;E++)this.chars[E].reset()},u.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},u.clearToEndOfRow=function(){this.clearFromPos(this.pos)},u.getTextString=function(){for(var n=[],E=!0,S=0;S<w;S++){var I=this.chars[S].uchar;I!==" "&&(E=!1),n.push(I)}return E?"":n.join("")},u.setPenStyles=function(n){this.currPenState.setStyles(n);var E=this.chars[this.pos];E.setPenState(this.currPenState)},p}(),l=function(){function p(i){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var n=0;n<j;n++)this.rows.push(new a(i));this.logger=i,this.currRow=j-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var u=p.prototype;return u.reset=function(){for(var n=0;n<j;n++)this.rows[n].clear();this.currRow=j-1},u.equals=function(n){for(var E=!0,S=0;S<j;S++)if(!this.rows[S].equals(n.rows[S])){E=!1;break}return E},u.copy=function(n){for(var E=0;E<j;E++)this.rows[E].copy(n.rows[E])},u.isEmpty=function(){for(var n=!0,E=0;E<j;E++)if(!this.rows[E].isEmpty()){n=!1;break}return n},u.backSpace=function(){var n=this.rows[this.currRow];n.backSpace()},u.clearToEndOfRow=function(){var n=this.rows[this.currRow];n.clearToEndOfRow()},u.insertChar=function(n){var E=this.rows[this.currRow];E.insertChar(n)},u.setPen=function(n){var E=this.rows[this.currRow];E.setPenStyles(n)},u.moveCursor=function(n){var E=this.rows[this.currRow];E.moveCursor(n)},u.setCursor=function(n){this.logger.log(c.INFO,"setCursor: "+n);var E=this.rows[this.currRow];E.setCursor(n)},u.setPAC=function(n){this.logger.log(c.INFO,"pacData = "+JSON.stringify(n));var E=n.row-1;if(this.nrRollUpRows&&E<this.nrRollUpRows-1&&(E=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==E){for(var S=0;S<j;S++)this.rows[S].clear();var I=this.currRow+1-this.nrRollUpRows,x=this.lastOutputScreen;if(x){var B=x.rows[I].cueStartTime,N=this.logger.time;if(B&&N!==null&&B<N)for(var K=0;K<this.nrRollUpRows;K++)this.rows[E-this.nrRollUpRows+K+1].copy(x.rows[I+K])}}this.currRow=E;var W=this.rows[this.currRow];if(n.indent!==null){var G=n.indent,V=Math.max(G-1,0);W.setCursor(n.indent),n.color=W.chars[V].penState.foreground}var X={foreground:n.color,underline:n.underline,italics:n.italics,background:"black",flash:!1};this.setPen(X)},u.setBkgData=function(n){this.logger.log(c.INFO,"bkgData = "+JSON.stringify(n)),this.backSpace(),this.setPen(n),this.insertChar(32)},u.setRollUpRows=function(n){this.nrRollUpRows=n},u.rollUp=function(){if(this.nrRollUpRows===null){this.logger.log(c.DEBUG,"roll_up but nrRollUpRows not set yet");return}this.logger.log(c.TEXT,this.getDisplayText());var n=this.currRow+1-this.nrRollUpRows,E=this.rows.splice(n,1)[0];E.clear(),this.rows.splice(this.currRow,0,E),this.logger.log(c.INFO,"Rolling up")},u.getDisplayText=function(n){n=n||!1;for(var E=[],S="",I=-1,x=0;x<j;x++){var B=this.rows[x].getTextString();B&&(I=x+1,n?E.push("Row "+I+": '"+B+"'"):E.push(B.trim()))}return E.length>0&&(n?S="["+E.join(" | ")+"]":S=E.join(`
`)),S},u.getTextAndFormat=function(){return this.rows},p}(),y=function(){function p(i,n,E){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=i,this.outputFilter=n,this.mode=null,this.verbose=0,this.displayedMemory=new l(E),this.nonDisplayedMemory=new l(E),this.lastOutputScreen=new l(E),this.currRollUpRow=this.displayedMemory.rows[j-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=E}var u=p.prototype;return u.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[j-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},u.getHandler=function(){return this.outputFilter},u.setHandler=function(n){this.outputFilter=n},u.setPAC=function(n){this.writeScreen.setPAC(n)},u.setBkgData=function(n){this.writeScreen.setBkgData(n)},u.setMode=function(n){n!==this.mode&&(this.mode=n,this.logger.log(c.INFO,"MODE="+n),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=n)},u.insertChars=function(n){for(var E=0;E<n.length;E++)this.writeScreen.insertChar(n[E]);var S=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(c.INFO,S+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(c.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},u.ccRCL=function(){this.logger.log(c.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},u.ccBS=function(){this.logger.log(c.INFO,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},u.ccAOF=function(){},u.ccAON=function(){},u.ccDER=function(){this.logger.log(c.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},u.ccRU=function(n){this.logger.log(c.INFO,"RU("+n+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(n)},u.ccFON=function(){this.logger.log(c.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},u.ccRDC=function(){this.logger.log(c.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},u.ccTR=function(){this.logger.log(c.INFO,"TR"),this.setMode("MODE_TEXT")},u.ccRTD=function(){this.logger.log(c.INFO,"RTD"),this.setMode("MODE_TEXT")},u.ccEDM=function(){this.logger.log(c.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},u.ccCR=function(){this.logger.log(c.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},u.ccENM=function(){this.logger.log(c.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},u.ccEOC=function(){if(this.logger.log(c.INFO,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){var n=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=n,this.writeScreen=this.nonDisplayedMemory,this.logger.log(c.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},u.ccTO=function(n){this.logger.log(c.INFO,"TO("+n+") - Tab Offset"),this.writeScreen.moveCursor(n)},u.ccMIDROW=function(n){var E={flash:!1};if(E.underline=n%2==1,E.italics=n>=46,E.italics)E.foreground="white";else{var S=Math.floor(n/2)-16,I=["white","green","blue","cyan","red","yellow","magenta"];E.foreground=I[S]}this.logger.log(c.INFO,"MIDROW: "+JSON.stringify(E)),this.writeScreen.setPen(E)},u.outputDataUpdate=function(n){n===void 0&&(n=!1);var E=this.logger.time;E!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=E:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,E,this.lastOutputScreen),n&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:E),this.lastOutputScreen.copy(this.displayedMemory))},u.cueSplitAtTime=function(n){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,n,this.displayedMemory),this.cueStartTime=n))},p}(),f=function(){function p(i,n,E){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var S=new A;this.channels=[null,new y(i,n,S),new y(i+1,E,S)],this.cmdHistory=_(),this.logger=S}var u=p.prototype;return u.getHandler=function(n){return this.channels[n].getHandler()},u.setHandler=function(n,E){this.channels[n].setHandler(E)},u.addData=function(n,E){var S,I,x,B=!1;this.logger.time=n;for(var N=0;N<E.length;N+=2)if(I=E[N]&127,x=E[N+1]&127,!(I===0&&x===0)){if(this.logger.log(c.DATA,"["+L([E[N],E[N+1]])+"] -> ("+L([I,x])+")"),S=this.parseCmd(I,x),S||(S=this.parseMidrow(I,x)),S||(S=this.parsePAC(I,x)),S||(S=this.parseBackgroundAttributes(I,x)),!S&&(B=this.parseChars(I,x),B)){var K=this.currentChannel;if(K&&K>0){var W=this.channels[K];W.insertChars(B)}else this.logger.log(c.WARNING,"No channel found yet. TEXT-MODE?")}!S&&!B&&this.logger.log(c.WARNING,"Couldn't parse cleaned data "+L([I,x])+" orig: "+L([E[N],E[N+1]]))}},u.parseCmd=function(n,E){var S=this.cmdHistory,I=(n===20||n===28||n===21||n===29)&&E>=32&&E<=47,x=(n===23||n===31)&&E>=33&&E<=35;if(!(I||x))return!1;if(g(n,E,S))return d(null,null,S),this.logger.log(c.DEBUG,"Repeated command ("+L([n,E])+") is dropped"),!0;var B=n===20||n===21||n===23?1:2,N=this.channels[B];return n===20||n===21||n===28||n===29?E===32?N.ccRCL():E===33?N.ccBS():E===34?N.ccAOF():E===35?N.ccAON():E===36?N.ccDER():E===37?N.ccRU(2):E===38?N.ccRU(3):E===39?N.ccRU(4):E===40?N.ccFON():E===41?N.ccRDC():E===42?N.ccTR():E===43?N.ccRTD():E===44?N.ccEDM():E===45?N.ccCR():E===46?N.ccENM():E===47&&N.ccEOC():N.ccTO(E-32),d(n,E,S),this.currentChannel=B,!0},u.parseMidrow=function(n,E){var S=0;if((n===17||n===25)&&E>=32&&E<=47){if(n===17?S=1:S=2,S!==this.currentChannel)return this.logger.log(c.ERROR,"Mismatch channel in midrow parsing"),!1;var I=this.channels[S];return I?(I.ccMIDROW(E),this.logger.log(c.DEBUG,"MIDROW ("+L([n,E])+")"),!0):!1}return!1},u.parsePAC=function(n,E){var S,I=this.cmdHistory,x=(n>=17&&n<=23||n>=25&&n<=31)&&E>=64&&E<=127,B=(n===16||n===24)&&E>=64&&E<=95;if(!(x||B))return!1;if(g(n,E,I))return d(null,null,I),!0;var N=n<=23?1:2;E>=64&&E<=95?S=N===1?O[n]:m[n]:S=N===1?D[n]:C[n];var K=this.channels[N];return K?(K.setPAC(this.interpretPAC(S,E)),d(n,E,I),this.currentChannel=N,!0):!1},u.interpretPAC=function(n,E){var S,I={color:null,italics:!1,indent:null,underline:!1,row:n};return E>95?S=E-96:S=E-64,I.underline=(S&1)==1,S<=13?I.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(S/2)]:S<=15?(I.italics=!0,I.color="white"):I.indent=Math.floor((S-16)/2)*4,I},u.parseChars=function(n,E){var S,I=null,x=null;if(n>=25?(S=2,x=n-8):(S=1,x=n),x>=17&&x<=19){var B;x===17?B=E+80:x===18?B=E+112:B=E+144,this.logger.log(c.INFO,"Special char '"+k(B)+"' in channel "+S),I=[B]}else n>=32&&n<=127&&(I=E===0?[n]:[n,E]);if(I){var N=L(I);this.logger.log(c.DEBUG,"Char codes =  "+N.join(",")),d(n,E,this.cmdHistory)}return I},u.parseBackgroundAttributes=function(n,E){var S=(n===16||n===24)&&E>=32&&E<=47,I=(n===23||n===31)&&E>=45&&E<=47;if(!(S||I))return!1;var x,B={};n===16||n===24?(x=Math.floor((E-32)/2),B.background=P[x],E%2==1&&(B.background=B.background+"_semi")):E===45?B.background="transparent":(B.foreground="black",E===47&&(B.underline=!0));var N=n<=23?1:2,K=this.channels[N];return K.setBkgData(B),d(n,E,this.cmdHistory),!0},u.reset=function(){for(var n=0;n<Object.keys(this.channels).length;n++){var E=this.channels[n];E&&E.reset()}this.cmdHistory=_()},u.cueSplitAtTime=function(n){for(var E=0;E<this.channels.length;E++){var S=this.channels[E];S&&S.cueSplitAtTime(n)}},p}();function d(p,u,i){i.a=p,i.b=u}function g(p,u,i){return i.a===p&&i.b===u}function _(){return{a:null,b:null}}H.default=f},"./src/utils/codecs.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"isCodecType",function(){return R}),M.d(H,"isCodecSupportedInMp4",function(){return k});var F={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function R(j,w){var O=F[w];return!!O&&O[j.slice(0,4)]===!0}function k(j,w){return MediaSource.isTypeSupported((w||"video")+'/mp4;codecs="'+j+'"')}},"./src/utils/cues.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/utils/vttparser.ts"),R=M("./src/utils/webvtt-parser.ts"),k=M("./src/utils/texttrack-utils.ts"),j=/\s/,w={newCue:function(D,m,C,P){for(var c=[],A,L,h,s,a,l=self.VTTCue||self.TextTrackCue,y=0;y<P.rows.length;y++)if(A=P.rows[y],h=!0,s=0,a="",!A.isEmpty()){for(var f=0;f<A.chars.length;f++)j.test(A.chars[f].uchar)&&h?s++:(a+=A.chars[f].uchar,h=!1);A.cueStartTime=m,m===C&&(C+=1e-4),s>=16?s--:s++;var d=Object(F.fixLineBreaks)(a.trim()),g=Object(R.generateCueId)(m,C,d);(!D||!D.cues||!D.cues.getCueById(g))&&(L=new l(m,C,d),L.id=g,L.line=y+1,L.align="left",L.position=10+Math.min(80,Math.floor(s*8/32)*10),c.push(L))}return D&&c.length&&(c.sort(function(_,p){return _.line==="auto"||p.line==="auto"?0:_.line>8&&p.line>8?p.line-_.line:_.line-p.line}),c.forEach(function(_){return Object(k.addCueToTrack)(D,_)})),c}};H.default=w},"./src/utils/discontinuities.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"findFirstFragWithCC",function(){return j}),M.d(H,"shouldAlignOnDiscontinuities",function(){return w}),M.d(H,"findDiscontinuousReferenceFrag",function(){return O}),M.d(H,"adjustSlidingStart",function(){return m}),M.d(H,"alignStream",function(){return C}),M.d(H,"alignPDT",function(){return c});var F=M("./src/polyfills/number.ts"),R=M("./src/utils/logger.ts"),k=M("./src/controller/level-helper.ts");function j(A,L){for(var h=null,s=0,a=A.length;s<a;s++){var l=A[s];if(l&&l.cc===L){h=l;break}}return h}function w(A,L,h){return!!(L.details&&(h.endCC>h.startCC||A&&A.cc<h.startCC))}function O(A,L){var h=A.fragments,s=L.fragments;if(!s.length||!h.length){R.logger.log("No fragments to align");return}var a=j(h,s[0].cc);if(!a||a&&!a.startPTS){R.logger.log("No frag in previous level to align on");return}return a}function D(A,L){if(A){var h=A.start+L;A.start=A.startPTS=h,A.endPTS=h+A.duration}}function m(A,L){for(var h=L.fragments,s=0,a=h.length;s<a;s++)D(h[s],A);L.fragmentHint&&D(L.fragmentHint,A),L.alignedSliding=!0}function C(A,L,h){!L||(P(A,h,L),!h.alignedSliding&&L.details&&c(h,L.details),!h.alignedSliding&&L.details&&!h.skippedSegments&&Object(k.adjustSliding)(L.details,h))}function P(A,L,h){if(w(A,h,L)){var s=O(h.details,L);s&&Object(F.isFiniteNumber)(s.start)&&(R.logger.log("Adjusting PTS using last level due to CC increase within current level "+L.url),m(s.start,L))}}function c(A,L){if(!(!L.fragments.length||!A.hasProgramDateTime||!L.hasProgramDateTime)){var h=L.fragments[0].programDateTime,s=A.fragments[0].programDateTime,a=(s-h)/1e3+L.fragments[0].start;a&&Object(F.isFiniteNumber)(a)&&(R.logger.log("Adjusting PTS using programDateTime delta "+(s-h)+"ms, sliding:"+a.toFixed(3)+" "+A.url+" "),m(a,A))}}},"./src/utils/ewma-bandwidth-estimator.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/utils/ewma.ts"),R=function(){function k(w,O,D){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=D,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new F.default(w),this.fast_=new F.default(O)}var j=k.prototype;return j.update=function(O,D){var m=this.slow_,C=this.fast_;this.slow_.halfLife!==O&&(this.slow_=new F.default(O,m.getEstimate(),m.getTotalWeight())),this.fast_.halfLife!==D&&(this.fast_=new F.default(D,C.getEstimate(),C.getTotalWeight()))},j.sample=function(O,D){O=Math.max(O,this.minDelayMs_);var m=8*D,C=O/1e3,P=m/C;this.fast_.sample(C,P),this.slow_.sample(C,P)},j.canEstimate=function(){var O=this.fast_;return O&&O.getTotalWeight()>=this.minWeight_},j.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},j.destroy=function(){},k}();H.default=R},"./src/utils/ewma.ts":function(re,H,M){"use strict";M.r(H);var F=function(){function R(j,w,O){w===void 0&&(w=0),O===void 0&&(O=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=j,this.alpha_=j?Math.exp(Math.log(.5)/j):0,this.estimate_=w,this.totalWeight_=O}var k=R.prototype;return k.sample=function(w,O){var D=Math.pow(this.alpha_,w);this.estimate_=O*(1-D)+D*this.estimate_,this.totalWeight_+=w},k.getTotalWeight=function(){return this.totalWeight_},k.getEstimate=function(){if(this.alpha_){var w=1-Math.pow(this.alpha_,this.totalWeight_);if(w)return this.estimate_/w}return this.estimate_},R}();H.default=F},"./src/utils/fetch-loader.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"fetchSupported",function(){return c});var F=M("./src/polyfills/number.ts"),R=M("./src/loader/load-stats.ts"),k=M("./src/demux/chunk-cache.ts");function j(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,C(a,l)}function w(a){var l=typeof Map=="function"?new Map:void 0;return w=function(f){if(f===null||!m(f))return f;if(typeof f!="function")throw new TypeError("Super expression must either be null or a function");if(typeof l!="undefined"){if(l.has(f))return l.get(f);l.set(f,d)}function d(){return O(f,arguments,P(this).constructor)}return d.prototype=Object.create(f.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),C(d,f)},w(a)}function O(a,l,y){return D()?O=Reflect.construct:O=function(d,g,_){var p=[null];p.push.apply(p,g);var u=Function.bind.apply(d,p),i=new u;return _&&C(i,_.prototype),i},O.apply(null,arguments)}function D(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function m(a){return Function.toString.call(a).indexOf("[native code]")!==-1}function C(a,l){return C=Object.setPrototypeOf||function(f,d){return f.__proto__=d,f},C(a,l)}function P(a){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)},P(a)}function c(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch(a){}return!1}var A=function(){function a(y){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=y.fetchSetup||h,this.controller=new self.AbortController,this.stats=new R.LoadStats}var l=a.prototype;return l.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},l.abortInternal=function(){var f=this.response;(!f||!f.ok)&&(this.stats.aborted=!0,this.controller.abort())},l.abort=function(){var f;this.abortInternal(),(f=this.callbacks)!==null&&f!==void 0&&f.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},l.load=function(f,d,g){var _=this,p=this.stats;if(p.loading.start)throw new Error("Loader can only be used once.");p.loading.start=self.performance.now();var u=L(f,this.controller.signal),i=g.onProgress,n=f.responseType==="arraybuffer",E=n?"byteLength":"length";this.context=f,this.config=d,this.callbacks=g,this.request=this.fetchSetup(f,u),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(function(){_.abortInternal(),g.onTimeout(p,f,_.response)},d.timeout),self.fetch(this.request).then(function(S){if(_.response=_.loader=S,!S.ok){var I=S.status,x=S.statusText;throw new s(x||"fetch, bad network response",I,S)}return p.loading.first=Math.max(self.performance.now(),p.loading.start),p.total=parseInt(S.headers.get("Content-Length")||"0"),i&&Object(F.isFiniteNumber)(d.highWaterMark)?_.loadProgressively(S,p,f,d.highWaterMark,i):n?S.arrayBuffer():S.text()}).then(function(S){var I=_.response;self.clearTimeout(_.requestTimeout),p.loading.end=Math.max(self.performance.now(),p.loading.first),p.loaded=p.total=S[E];var x={url:I.url,data:S};i&&!Object(F.isFiniteNumber)(d.highWaterMark)&&i(p,f,S,I),g.onSuccess(x,p,f,I)}).catch(function(S){if(self.clearTimeout(_.requestTimeout),!p.aborted){var I=S.code||0;g.onError({code:I,text:S.message},f,S.details)}})},l.getCacheAge=function(){var f=null;if(this.response){var d=this.response.headers.get("age");f=d?parseFloat(d):null}return f},l.loadProgressively=function(f,d,g,_,p){_===void 0&&(_=0);var u=new k.default,i=f.body.getReader(),n=function E(){return i.read().then(function(S){if(S.done)return u.dataLength&&p(d,g,u.flush(),f),Promise.resolve(new ArrayBuffer(0));var I=S.value,x=I.length;return d.loaded+=x,x<_||u.dataLength?(u.push(I),u.dataLength>=_&&p(d,g,u.flush(),f)):p(d,g,I,f),E()}).catch(function(){return Promise.reject()})};return n()},a}();function L(a,l){var y={method:"GET",mode:"cors",credentials:"same-origin",signal:l};return a.rangeEnd&&(y.headers=new self.Headers({Range:"bytes="+a.rangeStart+"-"+String(a.rangeEnd-1)})),y}function h(a,l){return new self.Request(a.url,l)}var s=function(a){j(l,a);function l(y,f,d){var g;return g=a.call(this,y)||this,g.code=void 0,g.details=void 0,g.code=f,g.details=d,g}return l}(w(Error));H.default=A},"./src/utils/imsc1-ttml-parser.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"IMSC1_CODEC",function(){return m}),M.d(H,"parseIMSC1",function(){return A});var F=M("./src/utils/mp4-tools.ts"),R=M("./src/utils/vttparser.ts"),k=M("./src/utils/vttcue.ts"),j=M("./src/demux/id3.ts"),w=M("./src/utils/timescale-conversion.ts"),O=M("./src/utils/webvtt-parser.ts");function D(){return D=Object.assign||function(p){for(var u=1;u<arguments.length;u++){var i=arguments[u];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(p[n]=i[n])}return p},D.apply(this,arguments)}var m="stpp.ttml.im1t",C=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,P=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,c={left:"start",center:"center",right:"end",start:"start",end:"end"};function A(p,u,i,n,E){var S=Object(F.findBox)(new Uint8Array(p),["mdat"]);if(S.length===0){E(new Error("Could not parse IMSC1 mdat"));return}var I=S[0],x=Object(j.utf8ArrayToStr)(new Uint8Array(p,I.start,I.end-I.start)),B=Object(w.toTimescaleFromScale)(u,1,i);try{n(L(x,B))}catch(N){E(N)}}function L(p,u){var i=new DOMParser,n=i.parseFromString(p,"text/xml"),E=n.getElementsByTagName("tt")[0];if(!E)throw new Error("Invalid ttml");var S={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},I=Object.keys(S).reduce(function(W,G){return W[G]=E.getAttribute("ttp:"+G)||S[G],W},{}),x=E.getAttribute("xml:space")!=="preserve",B=s(h(E,"styling","style")),N=s(h(E,"layout","region")),K=h(E,"body","[begin]");return[].map.call(K,function(W){var G=a(W,x);if(!G||!W.hasAttribute("begin"))return null;var V=d(W.getAttribute("begin"),I),X=d(W.getAttribute("dur"),I),Z=d(W.getAttribute("end"),I);if(V===null)throw f(W);if(Z===null){if(X===null)throw f(W);Z=V+X}var q=new k.default(V-u,Z-u,G);q.id=Object(O.generateCueId)(q.startTime,q.endTime,q.text);var J=N[W.getAttribute("region")],ee=B[W.getAttribute("style")];q.position=10,q.size=80;var ie=l(J,ee),oe=ie.textAlign;if(oe){var le=c[oe];le&&(q.lineAlign=le),q.align=oe}return D(q,ie),q}).filter(function(W){return W!==null})}function h(p,u,i){var n=p.getElementsByTagName(u)[0];return n?[].slice.call(n.querySelectorAll(i)):[]}function s(p){return p.reduce(function(u,i){var n=i.getAttribute("xml:id");return n&&(u[n]=i),u},{})}function a(p,u){return[].slice.call(p.childNodes).reduce(function(i,n,E){var S;return n.nodeName==="br"&&E?i+`
`:(S=n.childNodes)!==null&&S!==void 0&&S.length?a(n,u):u?i+n.textContent.trim().replace(/\s+/g," "):i+n.textContent},"")}function l(p,u){var i="http://www.w3.org/ns/ttml#styling",n=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"];return n.reduce(function(E,S){var I=y(u,i,S)||y(p,i,S);return I&&(E[S]=I),E},{})}function y(p,u,i){return p.hasAttributeNS(u,i)?p.getAttributeNS(u,i):null}function f(p){return new Error("Could not parse ttml timestamp "+p)}function d(p,u){if(!p)return null;var i=Object(R.parseTimeStamp)(p);return i===null&&(C.test(p)?i=g(p,u):P.test(p)&&(i=_(p,u))),i}function g(p,u){var i=C.exec(p),n=(i[4]|0)+(i[5]|0)/u.subFrameRate;return(i[1]|0)*3600+(i[2]|0)*60+(i[3]|0)+n/u.frameRate}function _(p,u){var i=P.exec(p),n=Number(i[1]),E=i[2];switch(E){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/u.frameRate;case"t":return n/u.tickRate}return n}},"./src/utils/logger.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"enableLogs",function(){return O}),M.d(H,"logger",function(){return D});var F=function(){},R={trace:F,debug:F,log:F,warn:F,info:F,error:F},k=R;function j(m){var C=self.console[m];return C?C.bind(self.console,"["+m+"] >"):F}function w(m){for(var C=arguments.length,P=new Array(C>1?C-1:0),c=1;c<C;c++)P[c-1]=arguments[c];P.forEach(function(A){k[A]=m[A]?m[A].bind(m):j(A)})}function O(m){if(self.console&&m===!0||typeof m=="object"){w(m,"debug","log","info","warn","error");try{k.log()}catch(C){k=R}}else k=R}var D=k},"./src/utils/mediakeys-helper.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"KeySystems",function(){return F}),M.d(H,"requestMediaKeySystemAccess",function(){return R});var F;(function(k){k.WIDEVINE="com.widevine.alpha",k.PLAYREADY="com.microsoft.playready"})(F||(F={}));var R=function(){return typeof self!="undefined"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}()},"./src/utils/mediasource-helper.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"getMediaSource",function(){return F});function F(){return self.MediaSource||self.WebKitMediaSource}},"./src/utils/mp4-tools.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"bin2str",function(){return w}),M.d(H,"readUint16",function(){return O}),M.d(H,"readUint32",function(){return D}),M.d(H,"writeUint32",function(){return m}),M.d(H,"findBox",function(){return C}),M.d(H,"parseSegmentIndex",function(){return P}),M.d(H,"parseInitSegment",function(){return c}),M.d(H,"getStartDTS",function(){return A}),M.d(H,"getDuration",function(){return L}),M.d(H,"computeRawDurationFromSamples",function(){return h}),M.d(H,"offsetStartDTS",function(){return s}),M.d(H,"segmentValidRange",function(){return a}),M.d(H,"appendUint8Array",function(){return l});var F=M("./src/utils/typed-array.ts"),R=M("./src/loader/fragment.ts"),k=Math.pow(2,32)-1,j=[].push;function w(y){return String.fromCharCode.apply(null,y)}function O(y,f){"data"in y&&(f+=y.start,y=y.data);var d=y[f]<<8|y[f+1];return d<0?65536+d:d}function D(y,f){"data"in y&&(f+=y.start,y=y.data);var d=y[f]<<24|y[f+1]<<16|y[f+2]<<8|y[f+3];return d<0?4294967296+d:d}function m(y,f,d){"data"in y&&(f+=y.start,y=y.data),y[f]=d>>24,y[f+1]=d>>16&255,y[f+2]=d>>8&255,y[f+3]=d&255}function C(y,f){var d=[];if(!f.length)return d;var g,_,p;"data"in y?(g=y.data,_=y.start,p=y.end):(g=y,_=0,p=g.byteLength);for(var u=_;u<p;){var i=D(g,u),n=w(g.subarray(u+4,u+8)),E=i>1?u+i:p;if(n===f[0])if(f.length===1)d.push({data:g,start:u+8,end:E});else{var S=C({data:g,start:u+8,end:E},f.slice(1));S.length&&j.apply(d,S)}u=E}return d}function P(y){var f=C(y,["moov"]),d=f[0],g=d?d.end:null,_=C(y,["sidx"]);if(!_||!_[0])return null;var p=[],u=_[0],i=u.data[0],n=i===0?8:16,E=D(u,n);n+=4;var S=0,I=0;i===0?n+=8:n+=16,n+=2;var x=u.end+I,B=O(u,n);n+=2;for(var N=0;N<B;N++){var K=n,W=D(u,K);K+=4;var G=W&2147483647,V=(W&2147483648)>>>31;if(V===1)return console.warn("SIDX has hierarchical references (not supported)"),null;var X=D(u,K);K+=4,p.push({referenceSize:G,subsegmentDuration:X,info:{duration:X/E,start:x,end:x+G-1}}),x+=G,K+=4,n=K}return{earliestPresentationTime:S,timescale:E,version:i,referencesCount:B,references:p,moovEndOffset:g}}function c(y){for(var f=[],d=C(y,["moov","trak"]),g=0;g<d.length;g++){var _=d[g],p=C(_,["tkhd"])[0];if(p){var u=p.data[p.start],i=u===0?12:20,n=D(p,i),E=C(_,["mdia","mdhd"])[0];if(E){u=E.data[E.start],i=u===0?12:20;var S=D(E,i),I=C(_,["mdia","hdlr"])[0];if(I){var x=w(I.data.subarray(I.start+8,I.start+12)),B={soun:R.ElementaryStreamTypes.AUDIO,vide:R.ElementaryStreamTypes.VIDEO}[x];if(B){var N=C(_,["mdia","minf","stbl","stsd"])[0],K=void 0;N&&(K=w(N.data.subarray(N.start+12,N.start+16))),f[n]={timescale:S,type:B},f[B]={timescale:S,id:n,codec:K}}}}}}var W=C(y,["moov","mvex","trex"]);return W.forEach(function(G){var V=D(G,4),X=f[V];X&&(X.default={duration:D(G,12),flags:D(G,20)})}),f}function A(y,f){return C(f,["moof","traf"]).reduce(function(d,g){var _=C(g,["tfdt"])[0],p=_.data[_.start],u=C(g,["tfhd"]).reduce(function(i,n){var E=D(n,4),S=y[E];if(S){var I=D(_,4);p===1&&(I*=Math.pow(2,32),I+=D(_,8));var x=S.timescale||9e4,B=I/x;if(isFinite(B)&&(i===null||B<i))return B}return i},null);return u!==null&&isFinite(u)&&(d===null||u<d)?u:d},null)||0}function L(y,f){for(var d=0,g=0,_=0,p=C(y,["moof","traf"]),u=0;u<p.length;u++){var i=p[u],n=C(i,["tfhd"])[0],E=D(n,4),S=f[E];if(!!S){var I=S.default,x=D(n,0)|(I==null?void 0:I.flags),B=I==null?void 0:I.duration;x&8&&(x&2?B=D(n,12):B=D(n,8));for(var N=S.timescale||9e4,K=C(i,["trun"]),W=0;W<K.length;W++){if(B){var G=D(K[W],4);d=B*G}else d=h(K[W]);S.type===R.ElementaryStreamTypes.VIDEO?g+=d/N:S.type===R.ElementaryStreamTypes.AUDIO&&(_+=d/N)}}}if(g===0&&_===0){var V=P(y);if(V!=null&&V.references)return V.references.reduce(function(X,Z){return X+Z.info.duration||0},0)}return g||_}function h(y){var f=D(y,0),d=8;f&1&&(d+=4),f&4&&(d+=4);for(var g=0,_=D(y,4),p=0;p<_;p++){if(f&256){var u=D(y,d);g+=u,d+=4}f&512&&(d+=4),f&1024&&(d+=4),f&2048&&(d+=4)}return g}function s(y,f,d){C(f,["moof","traf"]).forEach(function(g){C(g,["tfhd"]).forEach(function(_){var p=D(_,4),u=y[p];if(!!u){var i=u.timescale||9e4;C(g,["tfdt"]).forEach(function(n){var E=n.data[n.start],S=D(n,4);if(E===0)m(n,4,S-d*i);else{S*=Math.pow(2,32),S+=D(n,8),S-=d*i,S=Math.max(S,0);var I=Math.floor(S/(k+1)),x=Math.floor(S%(k+1));m(n,4,I),m(n,8,x)}})}})})}function a(y){var f={valid:null,remainder:null},d=C(y,["moof"]);if(d){if(d.length<2)return f.remainder=y,f}else return f;var g=d[d.length-1];return f.valid=Object(F.sliceUint8)(y,0,g.start-8),f.remainder=Object(F.sliceUint8)(y,g.start-8),f}function l(y,f){var d=new Uint8Array(y.length+f.length);return d.set(y),d.set(f,y.length),d}},"./src/utils/output-filter.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"default",function(){return F});var F=function(){function R(j,w){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=j,this.trackName=w}var k=R.prototype;return k.dispatchCue=function(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},k.newCue=function(w,O,D){(this.startTime===null||this.startTime>w)&&(this.startTime=w),this.endTime=O,this.screen=D,this.timelineController.createCaptionsTrack(this.trackName)},k.reset=function(){this.cueRanges=[]},R}()},"./src/utils/texttrack-utils.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"sendAddTrackEvent",function(){return R}),M.d(H,"addCueToTrack",function(){return k}),M.d(H,"clearCurrentCues",function(){return j}),M.d(H,"removeCuesInRange",function(){return w}),M.d(H,"getCuesInRange",function(){return D});var F=M("./src/utils/logger.ts");function R(m,C){var P;try{P=new Event("addtrack")}catch(c){P=document.createEvent("Event"),P.initEvent("addtrack",!1,!1)}P.track=m,C.dispatchEvent(P)}function k(m,C){var P=m.mode;if(P==="disabled"&&(m.mode="hidden"),m.cues&&!m.cues.getCueById(C.id))try{if(m.addCue(C),!m.cues.getCueById(C.id))throw new Error("addCue is failed for: "+C)}catch(A){F.logger.debug("[texttrack-utils]: "+A);var c=new self.TextTrackCue(C.startTime,C.endTime,C.text);c.id=C.id,m.addCue(c)}P==="disabled"&&(m.mode=P)}function j(m){var C=m.mode;if(C==="disabled"&&(m.mode="hidden"),m.cues)for(var P=m.cues.length;P--;)m.removeCue(m.cues[P]);C==="disabled"&&(m.mode=C)}function w(m,C,P){var c=m.mode;if(c==="disabled"&&(m.mode="hidden"),m.cues&&m.cues.length>0)for(var A=D(m.cues,C,P),L=0;L<A.length;L++)m.removeCue(A[L]);c==="disabled"&&(m.mode=c)}function O(m,C){if(C<m[0].startTime)return 0;var P=m.length-1;if(C>m[P].endTime)return-1;for(var c=0,A=P;c<=A;){var L=Math.floor((A+c)/2);if(C<m[L].startTime)A=L-1;else if(C>m[L].startTime&&c<P)c=L+1;else return L}return m[c].startTime-C<C-m[A].startTime?c:A}function D(m,C,P){var c=[],A=O(m,C);if(A>-1)for(var L=A,h=m.length;L<h;L++){var s=m[L];if(s.startTime>=C&&s.endTime<=P)c.push(s);else if(s.startTime>P)return c}return c}},"./src/utils/time-ranges.ts":function(re,H,M){"use strict";M.r(H);var F={toString:function(k){for(var j="",w=k.length,O=0;O<w;O++)j+="["+k.start(O).toFixed(3)+","+k.end(O).toFixed(3)+"]";return j}};H.default=F},"./src/utils/timescale-conversion.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"toTimescaleFromBase",function(){return R}),M.d(H,"toTimescaleFromScale",function(){return k}),M.d(H,"toMsFromMpegTsClock",function(){return j}),M.d(H,"toMpegTsClockFromTimescale",function(){return w});var F=9e4;function R(O,D,m,C){m===void 0&&(m=1),C===void 0&&(C=!1);var P=O*D*m;return C?Math.round(P):P}function k(O,D,m,C){return m===void 0&&(m=1),C===void 0&&(C=!1),R(O,D,1/m,C)}function j(O,D){return D===void 0&&(D=!1),R(O,1e3,1/F,D)}function w(O,D){return D===void 0&&(D=1),R(O,F,1/D)}},"./src/utils/typed-array.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"sliceUint8",function(){return F});function F(R,k,j){return Uint8Array.prototype.slice?R.slice(k,j):new Uint8Array(Array.prototype.slice.call(R,k,j))}},"./src/utils/vttcue.ts":function(re,H,M){"use strict";M.r(H),H.default=function(){if(typeof self!="undefined"&&self.VTTCue)return self.VTTCue;var F=["","lr","rl"],R=["start","middle","end","left","right"];function k(m,C){if(typeof C!="string"||!Array.isArray(m))return!1;var P=C.toLowerCase();return~m.indexOf(P)?P:!1}function j(m){return k(F,m)}function w(m){return k(R,m)}function O(m){for(var C=arguments.length,P=new Array(C>1?C-1:0),c=1;c<C;c++)P[c-1]=arguments[c];for(var A=1;A<arguments.length;A++){var L=arguments[A];for(var h in L)m[h]=L[h]}return m}function D(m,C,P){var c=this,A={enumerable:!0};c.hasBeenReset=!1;var L="",h=!1,s=m,a=C,l=P,y=null,f="",d=!0,g="auto",_="start",p=50,u="middle",i=50,n="middle";Object.defineProperty(c,"id",O({},A,{get:function(){return L},set:function(S){L=""+S}})),Object.defineProperty(c,"pauseOnExit",O({},A,{get:function(){return h},set:function(S){h=!!S}})),Object.defineProperty(c,"startTime",O({},A,{get:function(){return s},set:function(S){if(typeof S!="number")throw new TypeError("Start time must be set to a number.");s=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"endTime",O({},A,{get:function(){return a},set:function(S){if(typeof S!="number")throw new TypeError("End time must be set to a number.");a=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"text",O({},A,{get:function(){return l},set:function(S){l=""+S,this.hasBeenReset=!0}})),Object.defineProperty(c,"region",O({},A,{get:function(){return y},set:function(S){y=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"vertical",O({},A,{get:function(){return f},set:function(S){var I=j(S);if(I===!1)throw new SyntaxError("An invalid or illegal string was specified.");f=I,this.hasBeenReset=!0}})),Object.defineProperty(c,"snapToLines",O({},A,{get:function(){return d},set:function(S){d=!!S,this.hasBeenReset=!0}})),Object.defineProperty(c,"line",O({},A,{get:function(){return g},set:function(S){if(typeof S!="number"&&S!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");g=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"lineAlign",O({},A,{get:function(){return _},set:function(S){var I=w(S);if(!I)throw new SyntaxError("An invalid or illegal string was specified.");_=I,this.hasBeenReset=!0}})),Object.defineProperty(c,"position",O({},A,{get:function(){return p},set:function(S){if(S<0||S>100)throw new Error("Position must be between 0 and 100.");p=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"positionAlign",O({},A,{get:function(){return u},set:function(S){var I=w(S);if(!I)throw new SyntaxError("An invalid or illegal string was specified.");u=I,this.hasBeenReset=!0}})),Object.defineProperty(c,"size",O({},A,{get:function(){return i},set:function(S){if(S<0||S>100)throw new Error("Size must be between 0 and 100.");i=S,this.hasBeenReset=!0}})),Object.defineProperty(c,"align",O({},A,{get:function(){return n},set:function(S){var I=w(S);if(!I)throw new SyntaxError("An invalid or illegal string was specified.");n=I,this.hasBeenReset=!0}})),c.displayState=void 0}return D.prototype.getCueAsHTML=function(){var m=self.WebVTT;return m.convertCueToDOMTree(self,this.text)},D}()},"./src/utils/vttparser.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"parseTimeStamp",function(){return k}),M.d(H,"fixLineBreaks",function(){return C}),M.d(H,"VTTParser",function(){return P});var F=M("./src/utils/vttcue.ts"),R=function(){function c(){}var A=c.prototype;return A.decode=function(h,s){if(!h)return"";if(typeof h!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(h))},c}();function k(c){function A(h,s,a,l){return(h|0)*3600+(s|0)*60+(a|0)+parseFloat(l||0)}var L=c.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return L?parseFloat(L[2])>59?A(L[2],L[3],0,L[4]):A(L[1],L[2],L[3],L[4]):null}var j=function(){function c(){this.values=Object.create(null)}var A=c.prototype;return A.set=function(h,s){!this.get(h)&&s!==""&&(this.values[h]=s)},A.get=function(h,s,a){return a?this.has(h)?this.values[h]:s[a]:this.has(h)?this.values[h]:s},A.has=function(h){return h in this.values},A.alt=function(h,s,a){for(var l=0;l<a.length;++l)if(s===a[l]){this.set(h,s);break}},A.integer=function(h,s){/^-?\d+$/.test(s)&&this.set(h,parseInt(s,10))},A.percent=function(h,s){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(s)){var a=parseFloat(s);if(a>=0&&a<=100)return this.set(h,a),!0}return!1},c}();function w(c,A,L,h){var s=h?c.split(h):[c];for(var a in s)if(typeof s[a]=="string"){var l=s[a].split(L);if(l.length===2){var y=l[0],f=l[1];A(y,f)}}}var O=new F.default(0,0,""),D=O.align==="middle"?"middle":"center";function m(c,A,L){var h=c;function s(){var y=k(c);if(y===null)throw new Error("Malformed timestamp: "+h);return c=c.replace(/^[^\sa-zA-Z-]+/,""),y}function a(y,f){var d=new j;w(y,function(p,u){var i;switch(p){case"region":for(var n=L.length-1;n>=0;n--)if(L[n].id===u){d.set(p,L[n].region);break}break;case"vertical":d.alt(p,u,["rl","lr"]);break;case"line":i=u.split(","),d.integer(p,i[0]),d.percent(p,i[0])&&d.set("snapToLines",!1),d.alt(p,i[0],["auto"]),i.length===2&&d.alt("lineAlign",i[1],["start",D,"end"]);break;case"position":i=u.split(","),d.percent(p,i[0]),i.length===2&&d.alt("positionAlign",i[1],["start",D,"end","line-left","line-right","auto"]);break;case"size":d.percent(p,u);break;case"align":d.alt(p,u,["start",D,"end","left","right"]);break}},/:/,/\s/),f.region=d.get("region",null),f.vertical=d.get("vertical","");var g=d.get("line","auto");g==="auto"&&O.line===-1&&(g=-1),f.line=g,f.lineAlign=d.get("lineAlign","start"),f.snapToLines=d.get("snapToLines",!0),f.size=d.get("size",100),f.align=d.get("align",D);var _=d.get("position","auto");_==="auto"&&O.position===50&&(_=f.align==="start"||f.align==="left"?0:f.align==="end"||f.align==="right"?100:50),f.position=_}function l(){c=c.replace(/^\s+/,"")}if(l(),A.startTime=s(),l(),c.substr(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+h);c=c.substr(3),l(),A.endTime=s(),l(),a(c,A)}function C(c){return c.replace(/<br(?: \/)?>/gi,`
`)}var P=function(){function c(){this.state="INITIAL",this.buffer="",this.decoder=new R,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var A=c.prototype;return A.parse=function(h){var s=this;h&&(s.buffer+=s.decoder.decode(h,{stream:!0}));function a(){var _=s.buffer,p=0;for(_=C(_);p<_.length&&_[p]!=="\r"&&_[p]!==`
`;)++p;var u=_.substr(0,p);return _[p]==="\r"&&++p,_[p]===`
`&&++p,s.buffer=_.substr(p),u}function l(_){w(_,function(p,u){},/:/)}try{var y="";if(s.state==="INITIAL"){if(!/\r\n|\n/.test(s.buffer))return this;y=a();var f=y.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!f||!f[0])throw new Error("Malformed WebVTT signature.");s.state="HEADER"}for(var d=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(d?d=!1:y=a(),s.state){case"HEADER":/:/.test(y)?l(y):y||(s.state="ID");continue;case"NOTE":y||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(y)){s.state="NOTE";break}if(!y)continue;if(s.cue=new F.default(0,0,""),s.state="CUE",y.indexOf("-->")===-1){s.cue.id=y;continue}case"CUE":if(!s.cue){s.state="BADCUE";continue}try{m(y,s.cue,s.regionList)}catch(_){s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":{var g=y.indexOf("-->")!==-1;if(!y||g&&(d=!0)){s.oncue&&s.cue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}if(s.cue===null)continue;s.cue.text&&(s.cue.text+=`
`),s.cue.text+=y}continue;case"BADCUE":y||(s.state="ID")}}}catch(_){s.state==="CUETEXT"&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state=s.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},A.flush=function(){var h=this;try{if((h.cue||h.state==="HEADER")&&(h.buffer+=`

`,h.parse()),h.state==="INITIAL"||h.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(s){h.onparsingerror&&h.onparsingerror(s)}return h.onflush&&h.onflush(),this},c}()},"./src/utils/webvtt-parser.ts":function(re,H,M){"use strict";M.r(H),M.d(H,"generateCueId",function(){return P}),M.d(H,"parseWebVTT",function(){return A});var F=M("./src/polyfills/number.ts"),R=M("./src/utils/vttparser.ts"),k=M("./src/demux/id3.ts"),j=M("./src/utils/timescale-conversion.ts"),w=M("./src/remux/mp4-remuxer.ts"),O=/\r\n|\n\r|\n|\r/g,D=function(h,s,a){return a===void 0&&(a=0),h.substr(a,s.length)===s},m=function(h){var s=parseInt(h.substr(-3)),a=parseInt(h.substr(-6,2)),l=parseInt(h.substr(-9,2)),y=h.length>9?parseInt(h.substr(0,h.indexOf(":"))):0;if(!Object(F.isFiniteNumber)(s)||!Object(F.isFiniteNumber)(a)||!Object(F.isFiniteNumber)(l)||!Object(F.isFiniteNumber)(y))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+h);return s+=1e3*a,s+=60*1e3*l,s+=60*60*1e3*y,s},C=function(h){for(var s=5381,a=h.length;a;)s=s*33^h.charCodeAt(--a);return(s>>>0).toString()};function P(L,h,s){return C(L.toString())+C(h.toString())+C(s)}var c=function(h,s,a){var l=h[s],y=h[l.prevCC];if(!y||!y.new&&l.new){h.ccOffset=h.presentationOffset=l.start,l.new=!1;return}for(;(f=y)!==null&&f!==void 0&&f.new;){var f;h.ccOffset+=l.start-y.start,l.new=!1,l=y,y=h[l.prevCC]}h.presentationOffset=a};function A(L,h,s,a,l,y,f,d){var g=new R.VTTParser,_=Object(k.utf8ArrayToStr)(new Uint8Array(L)).trim().replace(O,`
`).split(`
`),p=[],u=Object(j.toMpegTsClockFromTimescale)(h,s),i="00:00.000",n=0,E=0,S,I=!0,x=!1;g.oncue=function(B){var N=a[l],K=a.ccOffset,W=(n-u)/9e4;if(N!=null&&N.new&&(E!==void 0?K=a.ccOffset=N.start:c(a,l,W)),W&&(K=W-a.presentationOffset),x){var G=B.endTime-B.startTime,V=Object(w.normalizePts)((B.startTime+K-E)*9e4,y*9e4)/9e4;B.startTime=V,B.endTime=V+G}var X=B.text.trim();B.text=decodeURIComponent(encodeURIComponent(X)),B.id||(B.id=P(B.startTime,B.endTime,X)),B.endTime>0&&p.push(B)},g.onparsingerror=function(B){S=B},g.onflush=function(){if(S){d(S);return}f(p)},_.forEach(function(B){if(I)if(D(B,"X-TIMESTAMP-MAP=")){I=!1,x=!0,B.substr(16).split(",").forEach(function(N){D(N,"LOCAL:")?i=N.substr(6):D(N,"MPEGTS:")&&(n=parseInt(N.substr(7)))});try{E=m(i)/1e3}catch(N){x=!1,S=N}return}else B===""&&(I=!1);g.parse(B+`
`)}),g.flush()}},"./src/utils/xhr-loader.ts":function(re,H,M){"use strict";M.r(H);var F=M("./src/utils/logger.ts"),R=M("./src/loader/load-stats.ts"),k=/^age:\s*[\d.]+\s*$/m,j=function(){function w(D){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=D?D.xhrSetup:null,this.stats=new R.LoadStats,this.retryDelay=0}var O=w.prototype;return O.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},O.abortInternal=function(){var m=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),m&&(m.onreadystatechange=null,m.onprogress=null,m.readyState!==4&&(this.stats.aborted=!0,m.abort()))},O.abort=function(){var m;this.abortInternal(),(m=this.callbacks)!==null&&m!==void 0&&m.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},O.load=function(m,C,P){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=m,this.config=C,this.callbacks=P,this.retryDelay=C.retryDelay,this.loadInternal()},O.loadInternal=function(){var m=this.config,C=this.context;if(!!m){var P=this.loader=new self.XMLHttpRequest,c=this.stats;c.loading.first=0,c.loaded=0;var A=this.xhrSetup;try{if(A)try{A(P,C.url)}catch(L){P.open("GET",C.url,!0),A(P,C.url)}P.readyState||P.open("GET",C.url,!0)}catch(L){this.callbacks.onError({code:P.status,text:L.message},C,P);return}C.rangeEnd&&P.setRequestHeader("Range","bytes="+C.rangeStart+"-"+(C.rangeEnd-1)),P.onreadystatechange=this.readystatechange.bind(this),P.onprogress=this.loadprogress.bind(this),P.responseType=C.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),m.timeout),P.send()}},O.readystatechange=function(){var m=this.context,C=this.loader,P=this.stats;if(!(!m||!C)){var c=C.readyState,A=this.config;if(!P.aborted&&c>=2)if(self.clearTimeout(this.requestTimeout),P.loading.first===0&&(P.loading.first=Math.max(self.performance.now(),P.loading.start)),c===4){C.onreadystatechange=null,C.onprogress=null;var L=C.status;if(L>=200&&L<300){P.loading.end=Math.max(self.performance.now(),P.loading.first);var h,s;if(m.responseType==="arraybuffer"?(h=C.response,s=h.byteLength):(h=C.responseText,s=h.length),P.loaded=P.total=s,!this.callbacks)return;var a=this.callbacks.onProgress;if(a&&a(P,m,h,C),!this.callbacks)return;var l={url:C.responseURL,data:h};this.callbacks.onSuccess(l,P,m,C)}else P.retry>=A.maxRetry||L>=400&&L<499?(F.logger.error(L+" while loading "+m.url),this.callbacks.onError({code:L,text:C.statusText},m,C)):(F.logger.warn(L+" while loading "+m.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,A.maxRetryDelay),P.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),A.timeout)}},O.loadtimeout=function(){F.logger.warn("timeout while loading "+this.context.url);var m=this.callbacks;m&&(this.abortInternal(),m.onTimeout(this.stats,this.context,this.loader))},O.loadprogress=function(m){var C=this.stats;C.loaded=m.loaded,m.lengthComputable&&(C.total=m.total)},O.getCacheAge=function(){var m=null;if(this.loader&&k.test(this.loader.getAllResponseHeaders())){var C=this.loader.getResponseHeader("age");m=C?parseFloat(C):null}return m},w}();H.default=j}}).default})},988:ne=>{ne.exports=H;var re=Object.prototype.toString;function H(M){if(!M)return!1;var F=re.call(M);return F==="[object Function]"||typeof M=="function"&&F!=="[object RegExp]"||typeof window!="undefined"&&(M===window.setTimeout||M===window.alert||M===window.confirm||M===window.prompt)}},642:(ne,re)=>{function H(w){if(w&&typeof w=="object"){var O=w.which||w.keyCode||w.charCode;O&&(w=O)}if(typeof w=="number")return k[w];var D=String(w),m=M[D.toLowerCase()];if(m)return m;var m=F[D.toLowerCase()];if(m)return m;if(D.length===1)return D.charCodeAt(0)}H.isEventKey=function(O,D){if(O&&typeof O=="object"){var m=O.which||O.keyCode||O.charCode;if(m==null)return!1;if(typeof D=="string"){var C=M[D.toLowerCase()];if(C)return C===m;var C=F[D.toLowerCase()];if(C)return C===m}else if(typeof D=="number")return D===m;return!1}},re=ne.exports=H;var M=re.code=re.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},F=re.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(R=97;R<123;R++)M[String.fromCharCode(R)]=R-32;for(var R=48;R<58;R++)M[R-48]=R;for(R=1;R<13;R++)M["f"+R]=R+111;for(R=0;R<10;R++)M["numpad "+R]=R+96;var k=re.names=re.title={};for(R in M)k[M[R]]=R;for(var j in F)M[j]=F[j]},54:ne=>{ne.exports=re;function re(H,M){var F,R=null;try{F=JSON.parse(H,M)}catch(k){R=k}return[R,F]}},207:(ne,re,H)=>{"use strict";/**
 * @license
 * Video.js 7.12.1 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
 */function M(v){return v&&typeof v=="object"&&"default"in v?v.default:v}var F=M(H(697)),R=M(H(675)),k=M(H(723)),j=M(H(477));H(372),H(346);for(var w=M(H(743)),O=M(H(54)),D=M(H(642)),m=M(H(444)),C=M(H(497)),P=M(H(811)),c=M(H(324)),A="7.12.1",L={prefixed:!0},h=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror","fullscreen"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"]],s=h[0],a,l=0;l<h.length;l++)if(h[l][1]in R){a=h[l];break}if(a){for(var y=0;y<a.length;y++)L[s[y]]=a[y];L.prefixed=a[0]!==s[0]}var f=[],d=function(T,o){return function(r,e,t){var b=o.levels[e],U=new RegExp("^("+b+")$");if(r!=="log"&&t.unshift(r.toUpperCase()+":"),t.unshift(T+":"),f){f.push([].concat(t));var z=f.length-1e3;f.splice(0,z>0?z:0)}if(!!F.console){var Y=F.console[r];!Y&&r==="debug"&&(Y=F.console.info||F.console.log),!(!Y||!b||!U.test(r))&&Y[Array.isArray(t)?"apply":"call"](F.console,t)}}};function g(v){var T="info",o,r=function(){for(var t=arguments.length,b=new Array(t),U=0;U<t;U++)b[U]=arguments[U];o("log",T,b)};return o=d(v,r),r.createLogger=function(e){return g(v+": "+e)},r.levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:T},r.level=function(e){if(typeof e=="string"){if(!r.levels.hasOwnProperty(e))throw new Error('"'+e+'" in not a valid log level');T=e}return T},r.history=function(){return f?[].concat(f):[]},r.history.filter=function(e){return(f||[]).filter(function(t){return new RegExp(".*"+e+".*").test(t[0])})},r.history.clear=function(){f&&(f.length=0)},r.history.disable=function(){f!==null&&(f.length=0,f=null)},r.history.enable=function(){f===null&&(f=[])},r.error=function(){for(var e=arguments.length,t=new Array(e),b=0;b<e;b++)t[b]=arguments[b];return o("error",T,t)},r.warn=function(){for(var e=arguments.length,t=new Array(e),b=0;b<e;b++)t[b]=arguments[b];return o("warn",T,t)},r.debug=function(){for(var e=arguments.length,t=new Array(e),b=0;b<e;b++)t[b]=arguments[b];return o("debug",T,t)},r}var _=g("VIDEOJS"),p=_.createLogger,u=Object.prototype.toString,i=function(T){return I(T)?Object.keys(T):[]};function n(v,T){i(v).forEach(function(o){return T(v[o],o)})}function E(v,T,o){return o===void 0&&(o=0),i(v).reduce(function(r,e){return T(r,v[e],e)},o)}function S(v){for(var T=arguments.length,o=new Array(T>1?T-1:0),r=1;r<T;r++)o[r-1]=arguments[r];return Object.assign?k.apply(void 0,[v].concat(o)):(o.forEach(function(e){!e||n(e,function(t,b){v[b]=t})}),v)}function I(v){return!!v&&typeof v=="object"}function x(v){return I(v)&&u.call(v)==="[object Object]"&&v.constructor===Object}function B(v,T){if(!v||!T)return"";if(typeof F.getComputedStyle=="function"){var o=F.getComputedStyle(v);return o?o.getPropertyValue(T)||o[T]:""}return""}var N=F.navigator&&F.navigator.userAgent||"",K=/AppleWebKit\/([\d.]+)/i.exec(N),W=K?parseFloat(K.pop()):null,G=/iPod/i.test(N),V=function(){var v=N.match(/OS (\d+)_/i);return v&&v[1]?v[1]:null}(),X=/Android/i.test(N),Z=function(){var v=N.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!v)return null;var T=v[1]&&parseFloat(v[1]),o=v[2]&&parseFloat(v[2]);return T&&o?parseFloat(v[1]+"."+v[2]):T||null}(),q=X&&Z<5&&W<537,J=/Firefox/i.test(N),ee=/Edg/i.test(N),ie=!ee&&(/Chrome/i.test(N)||/CriOS/i.test(N)),oe=function(){var v=N.match(/(Chrome|CriOS)\/(\d+)/);return v&&v[2]?parseFloat(v[2]):null}(),le=function(){var v=/MSIE\s(\d+)\.\d/.exec(N),T=v&&parseFloat(v[1]);return!T&&/Trident\/7.0/i.test(N)&&/rv:11.0/.test(N)&&(T=11),T}(),ue=/Safari/i.test(N)&&!ie&&!X&&!ee,he=/Windows/i.test(N),me=Boolean(ke()&&("ontouchstart"in F||F.navigator.maxTouchPoints||F.DocumentTouch&&F.document instanceof F.DocumentTouch)),Se=/iPad/i.test(N)||ue&&me&&!/iPhone/i.test(N),ye=/iPhone/i.test(N)&&!Se,_e=ye||Se||G,Ce=(ue||_e)&&!ie,Me=Object.freeze({__proto__:null,IS_IPOD:G,IOS_VERSION:V,IS_ANDROID:X,ANDROID_VERSION:Z,IS_NATIVE_ANDROID:q,IS_FIREFOX:J,IS_EDGE:ee,IS_CHROME:ie,CHROME_VERSION:oe,IE_VERSION:le,IS_SAFARI:ue,IS_WINDOWS:he,TOUCH_ENABLED:me,IS_IPAD:Se,IS_IPHONE:ye,IS_IOS:_e,IS_ANY_SAFARI:Ce});function Fe(v){return typeof v=="string"&&Boolean(v.trim())}function Ne(v){if(v.indexOf(" ")>=0)throw new Error("class has illegal whitespace characters")}function Ue(v){return new RegExp("(^|\\s)"+v+"($|\\s)")}function ke(){return R===F.document}function Ee(v){return I(v)&&v.nodeType===1}function pe(){try{return F.parent!==F.self}catch(v){return!0}}function ge(v){return function(T,o){if(!Fe(T))return R[v](null);Fe(o)&&(o=R.querySelector(o));var r=Ee(o)?o:R;return r[v]&&r[v](T)}}function ce(v,T,o,r){v===void 0&&(v="div"),T===void 0&&(T={}),o===void 0&&(o={});var e=R.createElement(v);return Object.getOwnPropertyNames(T).forEach(function(t){var b=T[t];t.indexOf("aria-")!==-1||t==="role"||t==="type"?(_.warn(`Setting attributes in the second argument of createEl()
has been deprecated. Use the third argument instead.
`+("createEl(type, properties, attributes). Attempting to set "+t+" to "+b+".")),e.setAttribute(t,b)):t==="textContent"?Le(e,b):(e[t]!==b||t==="tabIndex")&&(e[t]=b)}),Object.getOwnPropertyNames(o).forEach(function(t){e.setAttribute(t,o[t])}),r&&St(e,r),e}function Le(v,T){return typeof v.textContent=="undefined"?v.innerText=T:v.textContent=T,v}function we(v,T){T.firstChild?T.insertBefore(v,T.firstChild):T.appendChild(v)}function Pe(v,T){return Ne(T),v.classList?v.classList.contains(T):Ue(T).test(v.className)}function De(v,T){return v.classList?v.classList.add(T):Pe(v,T)||(v.className=(v.className+" "+T).trim()),v}function Ke(v,T){return v.classList?v.classList.remove(T):(Ne(T),v.className=v.className.split(/\s+/).filter(function(o){return o!==T}).join(" ")),v}function Oe(v,T,o){var r=Pe(v,T);if(typeof o=="function"&&(o=o(v,T)),typeof o!="boolean"&&(o=!r),o!==r)return o?De(v,T):Ke(v,T),v}function be(v,T){Object.getOwnPropertyNames(T).forEach(function(o){var r=T[o];r===null||typeof r=="undefined"||r===!1?v.removeAttribute(o):v.setAttribute(o,r===!0?"":r)})}function Ae(v){var T={},o=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(v&&v.attributes&&v.attributes.length>0)for(var r=v.attributes,e=r.length-1;e>=0;e--){var t=r[e].name,b=r[e].value;(typeof v[t]=="boolean"||o.indexOf(","+t+",")!==-1)&&(b=b!==null),T[t]=b}return T}function Je(v,T){return v.getAttribute(T)}function $e(v,T,o){v.setAttribute(T,o)}function st(v,T){v.removeAttribute(T)}function rt(){R.body.focus(),R.onselectstart=function(){return!1}}function Ge(){R.onselectstart=function(){return!0}}function Qe(v){if(v&&v.getBoundingClientRect&&v.parentNode){var T=v.getBoundingClientRect(),o={};return["bottom","height","left","right","top","width"].forEach(function(r){T[r]!==void 0&&(o[r]=T[r])}),o.height||(o.height=parseFloat(B(v,"height"))),o.width||(o.width=parseFloat(B(v,"width"))),o}}function it(v){if(!v||v&&!v.offsetParent)return{left:0,top:0,width:0,height:0};for(var T=v.offsetWidth,o=v.offsetHeight,r=0,e=0;v.offsetParent&&v!==R[L.fullscreenElement];)r+=v.offsetLeft,e+=v.offsetTop,v=v.offsetParent;return{left:r,top:e,width:T,height:o}}function qe(v,T){var o={x:0,y:0};if(_e)for(var r=v;r&&r.nodeName.toLowerCase()!=="html";){var e=B(r,"transform");if(/^matrix/.test(e)){var t=e.slice(7,-1).split(/,\s/).map(Number);o.x+=t[4],o.y+=t[5]}else if(/^matrix3d/.test(e)){var b=e.slice(9,-1).split(/,\s/).map(Number);o.x+=b[12],o.y+=b[13]}r=r.parentNode}var U={},z=it(T.target),Y=it(v),Q=Y.width,te=Y.height,$=T.offsetY-(Y.top-z.top),se=T.offsetX-(Y.left-z.left);return T.changedTouches&&(se=T.changedTouches[0].pageX-Y.left,$=T.changedTouches[0].pageY+Y.top,_e&&(se-=o.x,$-=o.y)),U.y=1-Math.max(0,Math.min(1,$/te)),U.x=Math.max(0,Math.min(1,se/Q)),U}function Gt(v){return I(v)&&v.nodeType===3}function gt(v){for(;v.firstChild;)v.removeChild(v.firstChild);return v}function Vt(v){return typeof v=="function"&&(v=v()),(Array.isArray(v)?v:[v]).map(function(T){if(typeof T=="function"&&(T=T()),Ee(T)||Gt(T))return T;if(typeof T=="string"&&/\S/.test(T))return R.createTextNode(T)}).filter(function(T){return T})}function St(v,T){return Vt(T).forEach(function(o){return v.appendChild(o)}),v}function zt(v,T){return St(gt(v),T)}function ft(v){return v.button===void 0&&v.buttons===void 0||v.button===0&&v.buttons===void 0||v.type==="mouseup"&&v.button===0&&v.buttons===0?!0:!(v.button!==0||v.buttons!==1)}var ot=ge("querySelector"),bt=ge("querySelectorAll"),wt=Object.freeze({__proto__:null,isReal:ke,isEl:Ee,isInFrame:pe,createEl:ce,textContent:Le,prependTo:we,hasClass:Pe,addClass:De,removeClass:Ke,toggleClass:Oe,setAttributes:be,getAttributes:Ae,getAttribute:Je,setAttribute:$e,removeAttribute:st,blockTextSelection:rt,unblockTextSelection:Ge,getBoundingClientRect:Qe,findPosition:it,getPointerPosition:qe,isTextNode:Gt,emptyEl:gt,normalizeContent:Vt,appendContent:St,insertContent:zt,isSingleLeftClick:ft,$:ot,$$:bt}),Yt=!1,Ft,En=function(){if(!(!ke()||Ft.options.autoSetup===!1)){var T=Array.prototype.slice.call(R.getElementsByTagName("video")),o=Array.prototype.slice.call(R.getElementsByTagName("audio")),r=Array.prototype.slice.call(R.getElementsByTagName("video-js")),e=T.concat(o,r);if(e&&e.length>0)for(var t=0,b=e.length;t<b;t++){var U=e[t];if(U&&U.getAttribute){if(U.player===void 0){var z=U.getAttribute("data-setup");z!==null&&Ft(U)}}else{pr(1);break}}else Yt||pr(1)}};function pr(v,T){T&&(Ft=T),F.setTimeout(En,v)}function gr(){Yt=!0,F.removeEventListener("load",gr)}ke()&&(R.readyState==="complete"?gr():F.addEventListener("load",gr));var ui=function(T){var o=R.createElement("style");return o.className=T,o},ci=function(T,o){T.styleSheet?T.styleSheet.cssText=o:T.textContent=o},Tn=3,_n=Tn;function dt(){return _n++}var hi;F.WeakMap||(hi=function(){function v(){this.vdata="vdata"+Math.floor(F.performance&&F.performance.now()||Date.now()),this.data={}}var T=v.prototype;return T.set=function(r,e){var t=r[this.vdata]||dt();return r[this.vdata]||(r[this.vdata]=t),this.data[t]=e,this},T.get=function(r){var e=r[this.vdata];if(e)return this.data[e];_("We have no data for this element",r)},T.has=function(r){var e=r[this.vdata];return e in this.data},T.delete=function(r){var e=r[this.vdata];e&&(delete this.data[e],delete r[this.vdata])},v}());var Ve=F.WeakMap?new WeakMap:new hi;function fi(v,T){if(!!Ve.has(v)){var o=Ve.get(v);o.handlers[T].length===0&&(delete o.handlers[T],v.removeEventListener?v.removeEventListener(T,o.dispatcher,!1):v.detachEvent&&v.detachEvent("on"+T,o.dispatcher)),Object.getOwnPropertyNames(o.handlers).length<=0&&(delete o.handlers,delete o.dispatcher,delete o.disabled),Object.getOwnPropertyNames(o).length===0&&Ve.delete(v)}}function mr(v,T,o,r){o.forEach(function(e){v(T,e,r)})}function Xt(v){if(v.fixed_)return v;function T(){return!0}function o(){return!1}if(!v||!v.isPropagationStopped){var r=v||F.event;v={};for(var e in r)e!=="layerX"&&e!=="layerY"&&e!=="keyLocation"&&e!=="webkitMovementX"&&e!=="webkitMovementY"&&(e==="returnValue"&&r.preventDefault||(v[e]=r[e]));if(v.target||(v.target=v.srcElement||R),v.relatedTarget||(v.relatedTarget=v.fromElement===v.target?v.toElement:v.fromElement),v.preventDefault=function(){r.preventDefault&&r.preventDefault(),v.returnValue=!1,r.returnValue=!1,v.defaultPrevented=!0},v.defaultPrevented=!1,v.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),v.cancelBubble=!0,r.cancelBubble=!0,v.isPropagationStopped=T},v.isPropagationStopped=o,v.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),v.isImmediatePropagationStopped=T,v.stopPropagation()},v.isImmediatePropagationStopped=o,v.clientX!==null&&v.clientX!==void 0){var t=R.documentElement,b=R.body;v.pageX=v.clientX+(t&&t.scrollLeft||b&&b.scrollLeft||0)-(t&&t.clientLeft||b&&b.clientLeft||0),v.pageY=v.clientY+(t&&t.scrollTop||b&&b.scrollTop||0)-(t&&t.clientTop||b&&b.clientTop||0)}v.which=v.charCode||v.keyCode,v.button!==null&&v.button!==void 0&&(v.button=v.button&1?0:v.button&4?1:v.button&2?2:0)}return v.fixed_=!0,v}var $t,Sn=function(){if(typeof $t!="boolean"){$t=!1;try{var T=Object.defineProperty({},"passive",{get:function(){$t=!0}});F.addEventListener("test",null,T),F.removeEventListener("test",null,T)}catch(o){}}return $t},bn=["touchstart","touchmove"];function Ze(v,T,o){if(Array.isArray(T))return mr(Ze,v,T,o);Ve.has(v)||Ve.set(v,{});var r=Ve.get(v);if(r.handlers||(r.handlers={}),r.handlers[T]||(r.handlers[T]=[]),o.guid||(o.guid=dt()),r.handlers[T].push(o),r.dispatcher||(r.disabled=!1,r.dispatcher=function(t,b){if(!r.disabled){t=Xt(t);var U=r.handlers[t.type];if(U)for(var z=U.slice(0),Y=0,Q=z.length;Y<Q&&!t.isImmediatePropagationStopped();Y++)try{z[Y].call(v,t,b)}catch(te){_.error(te)}}}),r.handlers[T].length===1)if(v.addEventListener){var e=!1;Sn()&&bn.indexOf(T)>-1&&(e={passive:!0}),v.addEventListener(T,r.dispatcher,e)}else v.attachEvent&&v.attachEvent("on"+T,r.dispatcher)}function We(v,T,o){if(!!Ve.has(v)){var r=Ve.get(v);if(!!r.handlers){if(Array.isArray(T))return mr(We,v,T,o);var e=function(Y,Q){r.handlers[Q]=[],fi(Y,Q)};if(T===void 0){for(var t in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},t)&&e(v,t);return}var b=r.handlers[T];if(!!b){if(!o){e(v,T);return}if(o.guid)for(var U=0;U<b.length;U++)b[U].guid===o.guid&&b.splice(U--,1);fi(v,T)}}}}function Ct(v,T,o){var r=Ve.has(v)?Ve.get(v):{},e=v.parentNode||v.ownerDocument;if(typeof T=="string"?T={type:T,target:v}:T.target||(T.target=v),T=Xt(T),r.dispatcher&&r.dispatcher.call(v,T,o),e&&!T.isPropagationStopped()&&T.bubbles===!0)Ct.call(null,e,T,o);else if(!e&&!T.defaultPrevented&&T.target&&T.target[T.type]){Ve.has(T.target)||Ve.set(T.target,{});var t=Ve.get(T.target);T.target[T.type]&&(t.disabled=!0,typeof T.target[T.type]=="function"&&T.target[T.type](),t.disabled=!1)}return!T.defaultPrevented}function Qt(v,T,o){if(Array.isArray(T))return mr(Qt,v,T,o);var r=function e(){We(v,T,e),o.apply(this,arguments)};r.guid=o.guid=o.guid||dt(),Ze(v,T,r)}function di(v,T,o){var r=function e(){We(v,T,e),o.apply(this,arguments)};r.guid=o.guid=o.guid||dt(),Ze(v,T,r)}var Cn=Object.freeze({__proto__:null,fixEvent:Xt,on:Ze,off:We,trigger:Ct,one:Qt,any:di}),nt=30,Ie=function(T,o,r){o.guid||(o.guid=dt());var e=o.bind(T);return e.guid=r?r+"_"+o.guid:o.guid,e},ut=function(T,o){var r=F.performance.now(),e=function(){var b=F.performance.now();b-r>=o&&(T.apply(void 0,arguments),r=b)};return e},An=function(T,o,r,e){e===void 0&&(e=F);var t,b=function(){e.clearTimeout(t),t=null},U=function(){var Y=this,Q=arguments,te=function(){t=null,te=null,r||T.apply(Y,Q)};!t&&r&&T.apply(Y,Q),e.clearTimeout(t),t=e.setTimeout(te,o)};return U.cancel=b,U},He=function(){};He.prototype.allowedEvents_={},He.prototype.on=function(v,T){var o=this.addEventListener;this.addEventListener=function(){},Ze(this,v,T),this.addEventListener=o},He.prototype.addEventListener=He.prototype.on,He.prototype.off=function(v,T){We(this,v,T)},He.prototype.removeEventListener=He.prototype.off,He.prototype.one=function(v,T){var o=this.addEventListener;this.addEventListener=function(){},Qt(this,v,T),this.addEventListener=o},He.prototype.any=function(v,T){var o=this.addEventListener;this.addEventListener=function(){},di(this,v,T),this.addEventListener=o},He.prototype.trigger=function(v){var T=v.type||v;typeof v=="string"&&(v={type:T}),v=Xt(v),this.allowedEvents_[T]&&this["on"+T]&&this["on"+T](v),Ct(this,v)},He.prototype.dispatchEvent=He.prototype.trigger;var Bt;He.prototype.queueTrigger=function(v){var T=this;Bt||(Bt=new Map);var o=v.type||v,r=Bt.get(this);r||(r=new Map,Bt.set(this,r));var e=r.get(o);r.delete(o),F.clearTimeout(e);var t=F.setTimeout(function(){r.size===0&&(r=null,Bt.delete(T)),T.trigger(v)},0);r.set(o,t)};var Jt=function(T){return typeof T.name=="function"?T.name():typeof T.name=="string"?T.name:T.name_?T.name_:T.constructor&&T.constructor.name?T.constructor.name:typeof T},ct=function(T){return T instanceof He||!!T.eventBusEl_&&["on","one","off","trigger"].every(function(o){return typeof T[o]=="function"})},Ln=function(T,o){ct(T)?o():(T.eventedCallbacks||(T.eventedCallbacks=[]),T.eventedCallbacks.push(o))},yr=function(T){return typeof T=="string"&&/\S/.test(T)||Array.isArray(T)&&!!T.length},Zt=function(T,o,r){if(!T||!T.nodeName&&!ct(T))throw new Error("Invalid target for "+Jt(o)+"#"+r+"; must be a DOM node or evented object.")},vi=function(T,o,r){if(!yr(T))throw new Error("Invalid event type for "+Jt(o)+"#"+r+"; must be a non-empty string or array.")},pi=function(T,o,r){if(typeof T!="function")throw new Error("Invalid listener for "+Jt(o)+"#"+r+"; must be a function.")},Er=function(T,o,r){var e=o.length<3||o[0]===T||o[0]===T.eventBusEl_,t,b,U;return e?(t=T.eventBusEl_,o.length>=3&&o.shift(),b=o[0],U=o[1]):(t=o[0],b=o[1],U=o[2]),Zt(t,T,r),vi(b,T,r),pi(U,T,r),U=Ie(T,U),{isTargetingSelf:e,target:t,type:b,listener:U}},mt=function(T,o,r,e){Zt(T,T,o),T.nodeName?Cn[o](T,r,e):T[o](r,e)},Dn={on:function(){for(var T=this,o=arguments.length,r=new Array(o),e=0;e<o;e++)r[e]=arguments[e];var t=Er(this,r,"on"),b=t.isTargetingSelf,U=t.target,z=t.type,Y=t.listener;if(mt(U,"on",z,Y),!b){var Q=function(){return T.off(U,z,Y)};Q.guid=Y.guid;var te=function(){return T.off("dispose",Q)};te.guid=Y.guid,mt(this,"on","dispose",Q),mt(U,"on","dispose",te)}},one:function(){for(var T=this,o=arguments.length,r=new Array(o),e=0;e<o;e++)r[e]=arguments[e];var t=Er(this,r,"one"),b=t.isTargetingSelf,U=t.target,z=t.type,Y=t.listener;if(b)mt(U,"one",z,Y);else{var Q=function te(){T.off(U,z,te);for(var $=arguments.length,se=new Array($),de=0;de<$;de++)se[de]=arguments[de];Y.apply(null,se)};Q.guid=Y.guid,mt(U,"one",z,Q)}},any:function(){for(var T=this,o=arguments.length,r=new Array(o),e=0;e<o;e++)r[e]=arguments[e];var t=Er(this,r,"any"),b=t.isTargetingSelf,U=t.target,z=t.type,Y=t.listener;if(b)mt(U,"any",z,Y);else{var Q=function te(){T.off(U,z,te);for(var $=arguments.length,se=new Array($),de=0;de<$;de++)se[de]=arguments[de];Y.apply(null,se)};Q.guid=Y.guid,mt(U,"any",z,Q)}},off:function(T,o,r){if(!T||yr(T))We(this.eventBusEl_,T,o);else{var e=T,t=o;Zt(e,this,"off"),vi(t,this,"off"),pi(r,this,"off"),r=Ie(this,r),this.off("dispose",r),e.nodeName?(We(e,t,r),We(e,"dispose",r)):ct(e)&&(e.off(t,r),e.off("dispose",r))}},trigger:function(T,o){Zt(this.eventBusEl_,this,"trigger");var r=T&&typeof T!="string"?T.type:T;if(!yr(r)){var e="Invalid event type for "+Jt(this)+"#trigger; must be a non-empty string or object with a type key that has a non-empty value.";if(T)(this.log||_).error(e);else throw new Error(e)}return Ct(this.eventBusEl_,T,o)}};function Tr(v,T){T===void 0&&(T={});var o=T,r=o.eventBusKey;if(r){if(!v[r].nodeName)throw new Error('The eventBusKey "'+r+'" does not refer to an element.');v.eventBusEl_=v[r]}else v.eventBusEl_=ce("span",{className:"vjs-event-bus"});return S(v,Dn),v.eventedCallbacks&&v.eventedCallbacks.forEach(function(e){e()}),v.on("dispose",function(){v.off(),F.setTimeout(function(){v.eventBusEl_=null},0)}),v}var Pn={state:{},setState:function(T){var o=this;typeof T=="function"&&(T=T());var r;return n(T,function(e,t){o.state[t]!==e&&(r=r||{},r[t]={from:o.state[t],to:e}),o.state[t]=e}),r&&ct(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function gi(v,T){return S(v,Pn),v.state=S({},v.state,T),typeof v.handleStateChanged=="function"&&ct(v)&&v.on("statechanged",v.handleStateChanged),v}var qt=function(T){return typeof T!="string"?T:T.replace(/./,function(o){return o.toLowerCase()})},Be=function(T){return typeof T!="string"?T:T.replace(/./,function(o){return o.toUpperCase()})},On=function(T,o){return Be(T)===Be(o)};function xe(){for(var v={},T=arguments.length,o=new Array(T),r=0;r<T;r++)o[r]=arguments[r];return o.forEach(function(e){!e||n(e,function(t,b){if(!x(t)){v[b]=t;return}x(v[b])||(v[b]={}),v[b]=xe(v[b],t)})}),v}var In=function(){function v(){this.map_={}}var T=v.prototype;return T.has=function(r){return r in this.map_},T.delete=function(r){var e=this.has(r);return delete this.map_[r],e},T.set=function(r,e){return this.map_[r]=e,this},T.forEach=function(r,e){for(var t in this.map_)r.call(e,this.map_[t],t,this)},v}(),Rn=F.Map?F.Map:In,Mn=function(){function v(){this.set_={}}var T=v.prototype;return T.has=function(r){return r in this.set_},T.delete=function(r){var e=this.has(r);return delete this.set_[r],e},T.add=function(r){return this.set_[r]=1,this},T.forEach=function(r,e){for(var t in this.set_)r.call(e,t,t,this)},v}(),_r=F.Set?F.Set:Mn,ae=function(){function v(o,r,e){if(!o&&this.play?this.player_=o=this:this.player_=o,this.isDisposed_=!1,this.parentComponent_=null,this.options_=xe({},this.options_),r=this.options_=xe(this.options_,r),this.id_=r.id||r.el&&r.el.id,!this.id_){var t=o&&o.id&&o.id()||"no_player";this.id_=t+"_component_"+dt()}this.name_=r.name||null,r.el?this.el_=r.el:r.createEl!==!1&&(this.el_=this.createEl()),r.evented!==!1&&(Tr(this,{eventBusKey:this.el_?"el_":null}),this.handleLanguagechange=this.handleLanguagechange.bind(this),this.on(this.player_,"languagechange",this.handleLanguagechange)),gi(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},this.childNameIndex_={},this.setTimeoutIds_=new _r,this.setIntervalIds_=new _r,this.rafIds_=new _r,this.namedRafs_=new Rn,this.clearingTimersOnDispose_=!1,r.initChildren!==!1&&this.initChildren(),this.ready(e),r.reportTouchActivity!==!1&&this.enableTouchActivity()}var T=v.prototype;return T.dispose=function(){if(!this.isDisposed_){if(this.readyQueue_&&(this.readyQueue_.length=0),this.trigger({type:"dispose",bubbles:!1}),this.isDisposed_=!0,this.children_)for(var r=this.children_.length-1;r>=0;r--)this.children_[r].dispose&&this.children_[r].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.parentComponent_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),Ve.has(this.el_)&&Ve.delete(this.el_),this.el_=null),this.player_=null}},T.isDisposed=function(){return Boolean(this.isDisposed_)},T.player=function(){return this.player_},T.options=function(r){return r?(this.options_=xe(this.options_,r),this.options_):this.options_},T.el=function(){return this.el_},T.createEl=function(r,e,t){return ce(r,e,t)},T.localize=function(r,e,t){t===void 0&&(t=r);var b=this.player_.language&&this.player_.language(),U=this.player_.languages&&this.player_.languages(),z=U&&U[b],Y=b&&b.split("-")[0],Q=U&&U[Y],te=t;return z&&z[r]?te=z[r]:Q&&Q[r]&&(te=Q[r]),e&&(te=te.replace(/\{(\d+)\}/g,function($,se){var de=e[se-1],Te=de;return typeof de=="undefined"&&(Te=$),Te})),te},T.handleLanguagechange=function(){},T.contentEl=function(){return this.contentEl_||this.el_},T.id=function(){return this.id_},T.name=function(){return this.name_},T.children=function(){return this.children_},T.getChildById=function(r){return this.childIndex_[r]},T.getChild=function(r){if(!!r)return this.childNameIndex_[r]},T.getDescendant=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e=e.reduce(function(z,Y){return z.concat(Y)},[]);for(var b=this,U=0;U<e.length;U++)if(b=b.getChild(e[U]),!b||!b.getChild)return;return b},T.addChild=function(r,e,t){e===void 0&&(e={}),t===void 0&&(t=this.children_.length);var b,U;if(typeof r=="string"){U=Be(r);var z=e.componentClass||U;e.name=U;var Y=v.getComponent(z);if(!Y)throw new Error("Component "+z+" does not exist");if(typeof Y!="function")return null;b=new Y(this.player_||this,e)}else b=r;if(b.parentComponent_&&b.parentComponent_.removeChild(b),this.children_.splice(t,0,b),b.parentComponent_=this,typeof b.id=="function"&&(this.childIndex_[b.id()]=b),U=U||b.name&&Be(b.name()),U&&(this.childNameIndex_[U]=b,this.childNameIndex_[qt(U)]=b),typeof b.el=="function"&&b.el()){var Q=null;this.children_[t+1]&&(this.children_[t+1].el_?Q=this.children_[t+1].el_:Ee(this.children_[t+1])&&(Q=this.children_[t+1])),this.contentEl().insertBefore(b.el(),Q)}return b},T.removeChild=function(r){if(typeof r=="string"&&(r=this.getChild(r)),!(!r||!this.children_)){for(var e=!1,t=this.children_.length-1;t>=0;t--)if(this.children_[t]===r){e=!0,this.children_.splice(t,1);break}if(!!e){r.parentComponent_=null,this.childIndex_[r.id()]=null,this.childNameIndex_[Be(r.name())]=null,this.childNameIndex_[qt(r.name())]=null;var b=r.el();b&&b.parentNode===this.contentEl()&&this.contentEl().removeChild(r.el())}}},T.initChildren=function(){var r=this,e=this.options_.children;if(e){var t=this.options_,b=function(Q){var te=Q.name,$=Q.opts;if(t[te]!==void 0&&($=t[te]),$!==!1){$===!0&&($={}),$.playerOptions=r.options_.playerOptions;var se=r.addChild(te,$);se&&(r[te]=se)}},U,z=v.getComponent("Tech");Array.isArray(e)?U=e:U=Object.keys(e),U.concat(Object.keys(this.options_).filter(function(Y){return!U.some(function(Q){return typeof Q=="string"?Y===Q:Y===Q.name})})).map(function(Y){var Q,te;return typeof Y=="string"?(Q=Y,te=e[Q]||r.options_[Q]||{}):(Q=Y.name,te=Y),{name:Q,opts:te}}).filter(function(Y){var Q=v.getComponent(Y.opts.componentClass||Be(Y.name));return Q&&!z.isTech(Q)}).forEach(b)}},T.buildCSSClass=function(){return""},T.ready=function(r,e){if(e===void 0&&(e=!1),!!r){if(!this.isReady_){this.readyQueue_=this.readyQueue_||[],this.readyQueue_.push(r);return}e?r.call(this):this.setTimeout(r,1)}},T.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var r=this.readyQueue_;this.readyQueue_=[],r&&r.length>0&&r.forEach(function(e){e.call(this)},this),this.trigger("ready")},1)},T.$=function(r,e){return ot(r,e||this.contentEl())},T.$$=function(r,e){return bt(r,e||this.contentEl())},T.hasClass=function(r){return Pe(this.el_,r)},T.addClass=function(r){De(this.el_,r)},T.removeClass=function(r){Ke(this.el_,r)},T.toggleClass=function(r,e){Oe(this.el_,r,e)},T.show=function(){this.removeClass("vjs-hidden")},T.hide=function(){this.addClass("vjs-hidden")},T.lockShowing=function(){this.addClass("vjs-lock-showing")},T.unlockShowing=function(){this.removeClass("vjs-lock-showing")},T.getAttribute=function(r){return Je(this.el_,r)},T.setAttribute=function(r,e){$e(this.el_,r,e)},T.removeAttribute=function(r){st(this.el_,r)},T.width=function(r,e){return this.dimension("width",r,e)},T.height=function(r,e){return this.dimension("height",r,e)},T.dimensions=function(r,e){this.width(r,!0),this.height(e)},T.dimension=function(r,e,t){if(e!==void 0){(e===null||e!==e)&&(e=0),(""+e).indexOf("%")!==-1||(""+e).indexOf("px")!==-1?this.el_.style[r]=e:e==="auto"?this.el_.style[r]="":this.el_.style[r]=e+"px",t||this.trigger("componentresize");return}if(!this.el_)return 0;var b=this.el_.style[r],U=b.indexOf("px");return U!==-1?parseInt(b.slice(0,U),10):parseInt(this.el_["offset"+Be(r)],10)},T.currentDimension=function(r){var e=0;if(r!=="width"&&r!=="height")throw new Error("currentDimension only accepts width or height value");if(e=B(this.el_,r),e=parseFloat(e),e===0||isNaN(e)){var t="offset"+Be(r);e=this.el_[t]}return e},T.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},T.currentWidth=function(){return this.currentDimension("width")},T.currentHeight=function(){return this.currentDimension("height")},T.focus=function(){this.el_.focus()},T.blur=function(){this.el_.blur()},T.handleKeyDown=function(r){this.player_&&(r.stopPropagation(),this.player_.handleKeyDown(r))},T.handleKeyPress=function(r){this.handleKeyDown(r)},T.emitTapEvents=function(){var r=0,e=null,t=10,b=200,U;this.on("touchstart",function(Y){Y.touches.length===1&&(e={pageX:Y.touches[0].pageX,pageY:Y.touches[0].pageY},r=F.performance.now(),U=!0)}),this.on("touchmove",function(Y){if(Y.touches.length>1)U=!1;else if(e){var Q=Y.touches[0].pageX-e.pageX,te=Y.touches[0].pageY-e.pageY,$=Math.sqrt(Q*Q+te*te);$>t&&(U=!1)}});var z=function(){U=!1};this.on("touchleave",z),this.on("touchcancel",z),this.on("touchend",function(Y){if(e=null,U===!0){var Q=F.performance.now()-r;Q<b&&(Y.preventDefault(),this.trigger("tap"))}})},T.enableTouchActivity=function(){if(!(!this.player()||!this.player().reportUserActivity)){var r=Ie(this.player(),this.player().reportUserActivity),e;this.on("touchstart",function(){r(),this.clearInterval(e),e=this.setInterval(r,250)});var t=function(U){r(),this.clearInterval(e)};this.on("touchmove",r),this.on("touchend",t),this.on("touchcancel",t)}},T.setTimeout=function(r,e){var t=this,b;return r=Ie(this,r),this.clearTimersOnDispose_(),b=F.setTimeout(function(){t.setTimeoutIds_.has(b)&&t.setTimeoutIds_.delete(b),r()},e),this.setTimeoutIds_.add(b),b},T.clearTimeout=function(r){return this.setTimeoutIds_.has(r)&&(this.setTimeoutIds_.delete(r),F.clearTimeout(r)),r},T.setInterval=function(r,e){r=Ie(this,r),this.clearTimersOnDispose_();var t=F.setInterval(r,e);return this.setIntervalIds_.add(t),t},T.clearInterval=function(r){return this.setIntervalIds_.has(r)&&(this.setIntervalIds_.delete(r),F.clearInterval(r)),r},T.requestAnimationFrame=function(r){var e=this;if(!this.supportsRaf_)return this.setTimeout(r,1e3/60);this.clearTimersOnDispose_();var t;return r=Ie(this,r),t=F.requestAnimationFrame(function(){e.rafIds_.has(t)&&e.rafIds_.delete(t),r()}),this.rafIds_.add(t),t},T.requestNamedAnimationFrame=function(r,e){var t=this;if(!this.namedRafs_.has(r)){this.clearTimersOnDispose_(),e=Ie(this,e);var b=this.requestAnimationFrame(function(){e(),t.namedRafs_.has(r)&&t.namedRafs_.delete(r)});return this.namedRafs_.set(r,b),r}},T.cancelNamedAnimationFrame=function(r){!this.namedRafs_.has(r)||(this.cancelAnimationFrame(this.namedRafs_.get(r)),this.namedRafs_.delete(r))},T.cancelAnimationFrame=function(r){return this.supportsRaf_?(this.rafIds_.has(r)&&(this.rafIds_.delete(r),F.cancelAnimationFrame(r)),r):this.clearTimeout(r)},T.clearTimersOnDispose_=function(){var r=this;this.clearingTimersOnDispose_||(this.clearingTimersOnDispose_=!0,this.one("dispose",function(){[["namedRafs_","cancelNamedAnimationFrame"],["rafIds_","cancelAnimationFrame"],["setTimeoutIds_","clearTimeout"],["setIntervalIds_","clearInterval"]].forEach(function(e){var t=e[0],b=e[1];r[t].forEach(function(U,z){return r[b](z)})}),r.clearingTimersOnDispose_=!1}))},v.registerComponent=function(r,e){if(typeof r!="string"||!r)throw new Error('Illegal component name, "'+r+'"; must be a non-empty string.');var t=v.getComponent("Tech"),b=t&&t.isTech(e),U=v===e||v.prototype.isPrototypeOf(e.prototype);if(b||!U){var z;throw b?z="techs must be registered using Tech.registerTech()":z="must be a Component subclass",new Error('Illegal component, "'+r+'"; '+z+".")}r=Be(r),v.components_||(v.components_={});var Y=v.getComponent("Player");if(r==="Player"&&Y&&Y.players){var Q=Y.players,te=Object.keys(Q);if(Q&&te.length>0&&te.map(function($){return Q[$]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return v.components_[r]=e,v.components_[qt(r)]=e,e},v.getComponent=function(r){if(!(!r||!v.components_))return v.components_[r]},v}();ae.prototype.supportsRaf_=typeof F.requestAnimationFrame=="function"&&typeof F.cancelAnimationFrame=="function",ae.registerComponent("Component",ae);function xn(v,T,o){if(typeof T!="number"||T<0||T>o)throw new Error("Failed to execute '"+v+"' on 'TimeRanges': The index provided ("+T+") is non-numeric or out of bounds (0-"+o+").")}function mi(v,T,o,r){return xn(v,r,o.length-1),o[r][T]}function Sr(v){return v===void 0||v.length===0?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:v.length,start:mi.bind(null,"start",0,v),end:mi.bind(null,"end",1,v)}}function yt(v,T){return Array.isArray(v)?Sr(v):v===void 0||T===void 0?Sr():Sr([[v,T]])}function yi(v,T){var o=0,r,e;if(!T)return 0;(!v||!v.length)&&(v=yt(0,0));for(var t=0;t<v.length;t++)r=v.start(t),e=v.end(t),e>T&&(e=T),o+=e-r;return o/T}function ze(v){if(v instanceof ze)return v;typeof v=="number"?this.code=v:typeof v=="string"?this.message=v:I(v)&&(typeof v.code=="number"&&(this.code=v.code),S(this,v)),this.message||(this.message=ze.defaultMessages[this.code]||"")}ze.prototype.code=0,ze.prototype.message="",ze.prototype.status=null,ze.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],ze.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var At=0;At<ze.errorTypes.length;At++)ze[ze.errorTypes[At]]=At,ze.prototype[ze.errorTypes[At]]=At;function Nt(v){return v!=null&&typeof v.then=="function"}function vt(v){Nt(v)&&v.then(null,function(T){})}var br=function(T){var o=["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(r,e,t){return T[e]&&(r[e]=T[e]),r},{cues:T.cues&&Array.prototype.map.call(T.cues,function(r){return{startTime:r.startTime,endTime:r.endTime,text:r.text,id:r.id}})});return o},kn=function(T){var o=T.$$("track"),r=Array.prototype.map.call(o,function(t){return t.track}),e=Array.prototype.map.call(o,function(t){var b=br(t.track);return t.src&&(b.src=t.src),b});return e.concat(Array.prototype.filter.call(T.textTracks(),function(t){return r.indexOf(t)===-1}).map(br))},wn=function(T,o){return T.forEach(function(r){var e=o.addRemoteTextTrack(r).track;!r.src&&r.cues&&r.cues.forEach(function(t){return e.addCue(t)})}),o.textTracks()},Ei={textTracksToJson:kn,jsonToTextTracks:wn,trackToJson_:br},Cr="vjs-modal-dialog",Lt=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.handleKeyDown_=function(b){return t.handleKeyDown(b)},t.close_=function(b){return t.close(b)},t.opened_=t.hasBeenOpened_=t.hasBeenFilled_=!1,t.closeable(!t.options_.uncloseable),t.content(t.options_.content),t.contentEl_=ce("div",{className:Cr+"-content"},{role:"document"}),t.descEl_=ce("p",{className:Cr+"-description vjs-control-text",id:t.el().getAttribute("aria-describedby")}),Le(t.descEl_,t.description()),t.el_.appendChild(t.descEl_),t.el_.appendChild(t.contentEl_),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},o.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,v.prototype.dispose.call(this)},o.buildCSSClass=function(){return Cr+" vjs-hidden "+v.prototype.buildCSSClass.call(this)},o.label=function(){return this.localize(this.options_.label||"Modal Window")},o.description=function(){var e=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(e+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),e},o.open=function(){if(!this.opened_){var e=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!e.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&e.pause(),this.on("keydown",this.handleKeyDown_),this.hadControls_=e.controls(),e.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},o.opened=function(e){return typeof e=="boolean"&&this[e?"open":"close"](),this.opened_},o.close=function(){if(!!this.opened_){var e=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&e.play(),this.off("keydown",this.handleKeyDown_),this.hadControls_&&e.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},o.closeable=function(e){if(typeof e=="boolean"){var t=this.closeable_=!!e,b=this.getChild("closeButton");if(t&&!b){var U=this.contentEl_;this.contentEl_=this.el_,b=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=U,this.on(b,"close",this.close_)}!t&&b&&(this.off(b,"close",this.close_),this.removeChild(b),b.dispose())}return this.closeable_},o.fill=function(){this.fillWith(this.content())},o.fillWith=function(e){var t=this.contentEl(),b=t.parentNode,U=t.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,b.removeChild(t),this.empty(),zt(t,e),this.trigger("modalfill"),U?b.insertBefore(t,U):b.appendChild(t);var z=this.getChild("closeButton");z&&b.appendChild(z.el_)},o.empty=function(){this.trigger("beforemodalempty"),gt(this.contentEl()),this.trigger("modalempty")},o.content=function(e){return typeof e!="undefined"&&(this.content_=e),this.content_},o.conditionalFocus_=function(){var e=R.activeElement,t=this.player_.el_;this.previouslyActiveEl_=null,(t.contains(e)||t===e)&&(this.previouslyActiveEl_=e,this.focus())},o.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null)},o.handleKeyDown=function(e){if(e.stopPropagation(),D.isEventKey(e,"Escape")&&this.closeable()){e.preventDefault(),this.close();return}if(!!D.isEventKey(e,"Tab")){for(var t=this.focusableEls_(),b=this.el_.querySelector(":focus"),U,z=0;z<t.length;z++)if(b===t[z]){U=z;break}R.activeElement===this.el_&&(U=0),e.shiftKey&&U===0?(t[t.length-1].focus(),e.preventDefault()):!e.shiftKey&&U===t.length-1&&(t[0].focus(),e.preventDefault())}},o.focusableEls_=function(){var e=this.el_.querySelectorAll("*");return Array.prototype.filter.call(e,function(t){return(t instanceof F.HTMLAnchorElement||t instanceof F.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof F.HTMLInputElement||t instanceof F.HTMLSelectElement||t instanceof F.HTMLTextAreaElement||t instanceof F.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof F.HTMLIFrameElement||t instanceof F.HTMLObjectElement||t instanceof F.HTMLEmbedElement||t.hasAttribute("tabindex")&&t.getAttribute("tabindex")!==-1||t.hasAttribute("contenteditable")})},T}(ae);Lt.prototype.options_={pauseOnOpen:!0,temporary:!0},ae.registerComponent("ModalDialog",Lt);var Dt=function(v){w(T,v);function T(r){var e;r===void 0&&(r=[]),e=v.call(this)||this,e.tracks_=[],Object.defineProperty(j(e),"length",{get:function(){return this.tracks_.length}});for(var t=0;t<r.length;t++)e.addTrack(r[t]);return e}var o=T.prototype;return o.addTrack=function(e){var t=this,b=this.tracks_.length;""+b in this||Object.defineProperty(this,b,{get:function(){return this.tracks_[b]}}),this.tracks_.indexOf(e)===-1&&(this.tracks_.push(e),this.trigger({track:e,type:"addtrack",target:this})),e.labelchange_=function(){t.trigger({track:e,type:"labelchange",target:t})},ct(e)&&e.addEventListener("labelchange",e.labelchange_)},o.removeTrack=function(e){for(var t,b=0,U=this.length;b<U;b++)if(this[b]===e){t=this[b],t.off&&t.off(),this.tracks_.splice(b,1);break}!t||this.trigger({track:t,type:"removetrack",target:this})},o.getTrackById=function(e){for(var t=null,b=0,U=this.length;b<U;b++){var z=this[b];if(z.id===e){t=z;break}}return t},T}(He);Dt.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack",labelchange:"labelchange"};for(var Fn in Dt.prototype.allowedEvents_)Dt.prototype["on"+Fn]=null;var Ar=function(T,o){for(var r=0;r<T.length;r++)!Object.keys(T[r]).length||o.id===T[r].id||(T[r].enabled=!1)},Bn=function(v){w(T,v);function T(r){var e;r===void 0&&(r=[]);for(var t=r.length-1;t>=0;t--)if(r[t].enabled){Ar(r,r[t]);break}return e=v.call(this,r)||this,e.changing_=!1,e}var o=T.prototype;return o.addTrack=function(e){var t=this;e.enabled&&Ar(this,e),v.prototype.addTrack.call(this,e),!!e.addEventListener&&(e.enabledChange_=function(){t.changing_||(t.changing_=!0,Ar(t,e),t.changing_=!1,t.trigger("change"))},e.addEventListener("enabledchange",e.enabledChange_))},o.removeTrack=function(e){v.prototype.removeTrack.call(this,e),e.removeEventListener&&e.enabledChange_&&(e.removeEventListener("enabledchange",e.enabledChange_),e.enabledChange_=null)},T}(Dt),Lr=function(T,o){for(var r=0;r<T.length;r++)!Object.keys(T[r]).length||o.id===T[r].id||(T[r].selected=!1)},Nn=function(v){w(T,v);function T(r){var e;r===void 0&&(r=[]);for(var t=r.length-1;t>=0;t--)if(r[t].selected){Lr(r,r[t]);break}return e=v.call(this,r)||this,e.changing_=!1,Object.defineProperty(j(e),"selectedIndex",{get:function(){for(var U=0;U<this.length;U++)if(this[U].selected)return U;return-1},set:function(){}}),e}var o=T.prototype;return o.addTrack=function(e){var t=this;e.selected&&Lr(this,e),v.prototype.addTrack.call(this,e),!!e.addEventListener&&(e.selectedChange_=function(){t.changing_||(t.changing_=!0,Lr(t,e),t.changing_=!1,t.trigger("change"))},e.addEventListener("selectedchange",e.selectedChange_))},o.removeTrack=function(e){v.prototype.removeTrack.call(this,e),e.removeEventListener&&e.selectedChange_&&(e.removeEventListener("selectedchange",e.selectedChange_),e.selectedChange_=null)},T}(Dt),Ti=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.addTrack=function(e){var t=this;v.prototype.addTrack.call(this,e),this.queueChange_||(this.queueChange_=function(){return t.queueTrigger("change")}),this.triggerSelectedlanguagechange||(this.triggerSelectedlanguagechange_=function(){return t.trigger("selectedlanguagechange")}),e.addEventListener("modechange",this.queueChange_);var b=["metadata","chapters"];b.indexOf(e.kind)===-1&&e.addEventListener("modechange",this.triggerSelectedlanguagechange_)},o.removeTrack=function(e){v.prototype.removeTrack.call(this,e),e.removeEventListener&&(this.queueChange_&&e.removeEventListener("modechange",this.queueChange_),this.selectedlanguagechange_&&e.removeEventListener("modechange",this.triggerSelectedlanguagechange_))},T}(Dt),Un=function(){function v(o){o===void 0&&(o=[]),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var r=0,e=o.length;r<e;r++)this.addTrackElement_(o[r])}var T=v.prototype;return T.addTrackElement_=function(r){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),this.trackElements_.indexOf(r)===-1&&this.trackElements_.push(r)},T.getTrackElementByTrack_=function(r){for(var e,t=0,b=this.trackElements_.length;t<b;t++)if(r===this.trackElements_[t].track){e=this.trackElements_[t];break}return e},T.removeTrackElement_=function(r){for(var e=0,t=this.trackElements_.length;e<t;e++)if(r===this.trackElements_[e]){this.trackElements_[e].track&&typeof this.trackElements_[e].track.off=="function"&&this.trackElements_[e].track.off(),typeof this.trackElements_[e].off=="function"&&this.trackElements_[e].off(),this.trackElements_.splice(e,1);break}},v}(),_i=function(){function v(o){v.prototype.setCues_.call(this,o),Object.defineProperty(this,"length",{get:function(){return this.length_}})}var T=v.prototype;return T.setCues_=function(r){var e=this.length||0,t=0,b=r.length;this.cues_=r,this.length_=r.length;var U=function(Y){""+Y in this||Object.defineProperty(this,""+Y,{get:function(){return this.cues_[Y]}})};if(e<b)for(t=e;t<b;t++)U.call(this,t)},T.getCueById=function(r){for(var e=null,t=0,b=this.length;t<b;t++){var U=this[t];if(U.id===r){e=U;break}}return e},v}(),jn={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Kn={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},Hn={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Si={disabled:"disabled",hidden:"hidden",showing:"showing"},Dr=function(v){w(T,v);function T(o){var r;o===void 0&&(o={}),r=v.call(this)||this;var e={id:o.id||"vjs_track_"+dt(),kind:o.kind||"",language:o.language||""},t=o.label||"",b=function(Y){Object.defineProperty(j(r),Y,{get:function(){return e[Y]},set:function(){}})};for(var U in e)b(U);return Object.defineProperty(j(r),"label",{get:function(){return t},set:function(Y){Y!==t&&(t=Y,this.trigger("labelchange"))}}),r}return T}(He),Pr=function(T){var o=["protocol","hostname","port","pathname","search","hash","host"],r=R.createElement("a");r.href=T;var e=r.host===""&&r.protocol!=="file:",t;e&&(t=R.createElement("div"),t.innerHTML='<a href="'+T+'"></a>',r=t.firstChild,t.setAttribute("style","display:none; position:absolute;"),R.body.appendChild(t));for(var b={},U=0;U<o.length;U++)b[o[U]]=r[o[U]];return b.protocol==="http:"&&(b.host=b.host.replace(/:80$/,"")),b.protocol==="https:"&&(b.host=b.host.replace(/:443$/,"")),b.protocol||(b.protocol=F.location.protocol),e&&R.body.removeChild(t),b},bi=function(T){if(!T.match(/^https?:\/\//)){var o=R.createElement("div");o.innerHTML='<a href="'+T+'">x</a>',T=o.firstChild.href}return T},Or=function(T){if(typeof T=="string"){var o=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/,r=o.exec(T);if(r)return r.pop().toLowerCase()}return""},er=function(T,o){o===void 0&&(o=F.location);var r=Pr(T),e=r.protocol===":"?o.protocol:r.protocol,t=e+r.host!==o.protocol+o.host;return t},Wn=Object.freeze({__proto__:null,parseUrl:Pr,getAbsoluteURL:bi,getFileExtension:Or,isCrossOrigin:er}),Ci=function(T,o){var r=new F.WebVTT.Parser(F,F.vttjs,F.WebVTT.StringDecoder()),e=[];r.oncue=function(t){o.addCue(t)},r.onparsingerror=function(t){e.push(t)},r.onflush=function(){o.trigger({type:"loadeddata",target:o})},r.parse(T),e.length>0&&(F.console&&F.console.groupCollapsed&&F.console.groupCollapsed("Text Track parsing errors for "+o.src),e.forEach(function(t){return _.error(t)}),F.console&&F.console.groupEnd&&F.console.groupEnd()),r.flush()},Ai=function(T,o){var r={uri:T},e=er(T);e&&(r.cors=e);var t=o.tech_.crossOrigin()==="use-credentials";t&&(r.withCredentials=t),m(r,Ie(this,function(b,U,z){if(b)return _.error(b,U);o.loaded_=!0,typeof F.WebVTT!="function"?o.tech_&&o.tech_.any(["vttjsloaded","vttjserror"],function(Y){if(Y.type==="vttjserror"){_.error("vttjs failed to load, stopping trying to process "+o.src);return}return Ci(z,o)}):Ci(z,o)}))},Ut=function(v){w(T,v);function T(r){var e;if(r===void 0&&(r={}),!r.tech)throw new Error("A tech was not provided.");var t=xe(r,{kind:Hn[r.kind]||"subtitles",language:r.language||r.srclang||""}),b=Si[t.mode]||"disabled",U=t.default;(t.kind==="metadata"||t.kind==="chapters")&&(b="hidden"),e=v.call(this,t)||this,e.tech_=t.tech,e.cues_=[],e.activeCues_=[],e.preload_=e.tech_.preloadTextTracks!==!1;var z=new _i(e.cues_),Y=new _i(e.activeCues_),Q=!1,te=Ie(j(e),function(){!this.tech_.isReady_||this.tech_.isDisposed()||(this.activeCues=this.activeCues,Q&&(this.trigger("cuechange"),Q=!1))}),$=function(){e.tech_.off("timeupdate",te)};return e.tech_.one("dispose",$),b!=="disabled"&&e.tech_.on("timeupdate",te),Object.defineProperties(j(e),{default:{get:function(){return U},set:function(){}},mode:{get:function(){return b},set:function(de){!Si[de]||b!==de&&(b=de,!this.preload_&&b!=="disabled"&&this.cues.length===0&&Ai(this.src,this),this.tech_.off("timeupdate",te),b!=="disabled"&&this.tech_.on("timeupdate",te),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?z:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(this.cues.length===0)return Y;for(var de=this.tech_.currentTime(),Te=[],ht=0,si=this.cues.length;ht<si;ht++){var pt=this.cues[ht];(pt.startTime<=de&&pt.endTime>=de||pt.startTime===pt.endTime&&pt.startTime<=de&&pt.startTime+.5>=de)&&Te.push(pt)}if(Q=!1,Te.length!==this.activeCues_.length)Q=!0;else for(var oi=0;oi<Te.length;oi++)this.activeCues_.indexOf(Te[oi])===-1&&(Q=!0);return this.activeCues_=Te,Y.setCues_(this.activeCues_),Y},set:function(){}}}),t.src?(e.src=t.src,e.preload_||(e.loaded_=!0),(e.preload_||t.kind!=="subtitles"&&t.kind!=="captions")&&Ai(e.src,j(e))):e.loaded_=!0,e}var o=T.prototype;return o.addCue=function(e){var t=e;if(F.vttjs&&!(e instanceof F.vttjs.VTTCue)){t=new F.vttjs.VTTCue(e.startTime,e.endTime,e.text);for(var b in e)b in t||(t[b]=e[b]);t.id=e.id,t.originalCue_=e}for(var U=this.tech_.textTracks(),z=0;z<U.length;z++)U[z]!==this&&U[z].removeCue(t);this.cues_.push(t),this.cues.setCues_(this.cues_)},o.removeCue=function(e){for(var t=this.cues_.length;t--;){var b=this.cues_[t];if(b===e||b.originalCue_&&b.originalCue_===e){this.cues_.splice(t,1),this.cues.setCues_(this.cues_);break}}},T}(Dr);Ut.prototype.allowedEvents_={cuechange:"cuechange"};var Li=function(v){w(T,v);function T(o){var r;o===void 0&&(o={});var e=xe(o,{kind:Kn[o.kind]||""});r=v.call(this,e)||this;var t=!1;return Object.defineProperty(j(r),"enabled",{get:function(){return t},set:function(U){typeof U!="boolean"||U===t||(t=U,this.trigger("enabledchange"))}}),e.enabled&&(r.enabled=e.enabled),r.loaded_=!0,r}return T}(Dr),Di=function(v){w(T,v);function T(o){var r;o===void 0&&(o={});var e=xe(o,{kind:jn[o.kind]||""});r=v.call(this,e)||this;var t=!1;return Object.defineProperty(j(r),"selected",{get:function(){return t},set:function(U){typeof U!="boolean"||U===t||(t=U,this.trigger("selectedchange"))}}),e.selected&&(r.selected=e.selected),r}return T}(Dr),Pi=0,Gn=1,Oi=2,Vn=3,Pt=function(v){w(T,v);function T(o){var r;o===void 0&&(o={}),r=v.call(this)||this;var e,t=new Ut(o);return r.kind=t.kind,r.src=t.src,r.srclang=t.language,r.label=t.label,r.default=t.default,Object.defineProperties(j(r),{readyState:{get:function(){return e}},track:{get:function(){return t}}}),e=Pi,t.addEventListener("loadeddata",function(){e=Oi,r.trigger({type:"load",target:j(r)})}),r}return T}(He);Pt.prototype.allowedEvents_={load:"load"},Pt.NONE=Pi,Pt.LOADING=Gn,Pt.LOADED=Oi,Pt.ERROR=Vn;var et={audio:{ListClass:Bn,TrackClass:Li,capitalName:"Audio"},video:{ListClass:Nn,TrackClass:Di,capitalName:"Video"},text:{ListClass:Ti,TrackClass:Ut,capitalName:"Text"}};Object.keys(et).forEach(function(v){et[v].getterName=v+"Tracks",et[v].privateName=v+"Tracks_"});var Ot={remoteText:{ListClass:Ti,TrackClass:Ut,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:Un,TrackClass:Pt,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Ye=k({},et,Ot);Ot.names=Object.keys(Ot),et.names=Object.keys(et),Ye.names=[].concat(Ot.names).concat(et.names);function zn(v,T,o,r,e){e===void 0&&(e={});var t=v.textTracks();e.kind=T,o&&(e.label=o),r&&(e.language=r),e.tech=v;var b=new Ye.text.TrackClass(e);return t.addTrack(b),b}var Re=function(v){w(T,v);function T(r,e){var t;return r===void 0&&(r={}),e===void 0&&(e=function(){}),r.reportTouchActivity=!1,t=v.call(this,null,r,e)||this,t.onDurationChange_=function(b){return t.onDurationChange(b)},t.trackProgress_=function(b){return t.trackProgress(b)},t.trackCurrentTime_=function(b){return t.trackCurrentTime(b)},t.stopTrackingCurrentTime_=function(b){return t.stopTrackingCurrentTime(b)},t.disposeSourceHandler_=function(b){return t.disposeSourceHandler(b)},t.hasStarted_=!1,t.on("playing",function(){this.hasStarted_=!0}),t.on("loadstart",function(){this.hasStarted_=!1}),Ye.names.forEach(function(b){var U=Ye[b];r&&r[U.getterName]&&(t[U.privateName]=r[U.getterName])}),t.featuresProgressEvents||t.manualProgressOn(),t.featuresTimeupdateEvents||t.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(b){r["native"+b+"Tracks"]===!1&&(t["featuresNative"+b+"Tracks"]=!1)}),r.nativeCaptions===!1||r.nativeTextTracks===!1?t.featuresNativeTextTracks=!1:(r.nativeCaptions===!0||r.nativeTextTracks===!0)&&(t.featuresNativeTextTracks=!0),t.featuresNativeTextTracks||t.emulateTextTracks(),t.preloadTextTracks=r.preloadTextTracks!==!1,t.autoRemoteTextTracks_=new Ye.text.ListClass,t.initTrackListeners(),r.nativeControlsForTouch||t.emitTapEvents(),t.constructor&&(t.name_=t.constructor.name||"Unknown Tech"),t}var o=T.prototype;return o.triggerSourceset=function(e){var t=this;this.isReady_||this.one("ready",function(){return t.setTimeout(function(){return t.triggerSourceset(e)},1)}),this.trigger({src:e,type:"sourceset"})},o.manualProgressOn=function(){this.on("durationchange",this.onDurationChange_),this.manualProgress=!0,this.one("ready",this.trackProgress_)},o.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange_)},o.trackProgress=function(e){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ie(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),this.bufferedPercent_=t,t===1&&this.stopTrackingProgress()}),500)},o.onDurationChange=function(e){this.duration_=this.duration()},o.buffered=function(){return yt(0,0)},o.bufferedPercent=function(){return yi(this.buffered(),this.duration_)},o.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},o.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime_),this.on("pause",this.stopTrackingCurrentTime_)},o.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime_),this.off("pause",this.stopTrackingCurrentTime_)},o.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},o.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},o.dispose=function(){this.clearTracks(et.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),v.prototype.dispose.call(this)},o.clearTracks=function(e){var t=this;e=[].concat(e),e.forEach(function(b){for(var U=t[b+"Tracks"]()||[],z=U.length;z--;){var Y=U[z];b==="text"&&t.removeRemoteTextTrack(Y),U.removeTrack(Y)}})},o.cleanupAutoTextTracks=function(){for(var e=this.autoRemoteTextTracks_||[],t=e.length;t--;){var b=e[t];this.removeRemoteTextTrack(b)}},o.reset=function(){},o.crossOrigin=function(){},o.setCrossOrigin=function(){},o.error=function(e){return e!==void 0&&(this.error_=new ze(e),this.trigger("error")),this.error_},o.played=function(){return this.hasStarted_?yt(0,0):yt()},o.play=function(){},o.setScrubbing=function(){},o.scrubbing=function(){},o.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},o.initTrackListeners=function(){var e=this;et.names.forEach(function(t){var b=et[t],U=function(){e.trigger(t+"trackchange")},z=e[b.getterName]();z.addEventListener("removetrack",U),z.addEventListener("addtrack",U),e.on("dispose",function(){z.removeEventListener("removetrack",U),z.removeEventListener("addtrack",U)})})},o.addWebVttScript_=function(){var e=this;if(!F.WebVTT)if(R.body.contains(this.el())){if(!this.options_["vtt.js"]&&x(C)&&Object.keys(C).length>0){this.trigger("vttjsloaded");return}var t=R.createElement("script");t.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",t.onload=function(){e.trigger("vttjsloaded")},t.onerror=function(){e.trigger("vttjserror")},this.on("dispose",function(){t.onload=null,t.onerror=null}),F.WebVTT=!0,this.el().parentNode.appendChild(t)}else this.ready(this.addWebVttScript_)},o.emulateTextTracks=function(){var e=this,t=this.textTracks(),b=this.remoteTextTracks(),U=function($){return t.addTrack($.track)},z=function($){return t.removeTrack($.track)};b.on("addtrack",U),b.on("removetrack",z),this.addWebVttScript_();var Y=function(){return e.trigger("texttrackchange")},Q=function(){Y();for(var $=0;$<t.length;$++){var se=t[$];se.removeEventListener("cuechange",Y),se.mode==="showing"&&se.addEventListener("cuechange",Y)}};Q(),t.addEventListener("change",Q),t.addEventListener("addtrack",Q),t.addEventListener("removetrack",Q),this.on("dispose",function(){b.off("addtrack",U),b.off("removetrack",z),t.removeEventListener("change",Q),t.removeEventListener("addtrack",Q),t.removeEventListener("removetrack",Q);for(var te=0;te<t.length;te++){var $=t[te];$.removeEventListener("cuechange",Y)}})},o.addTextTrack=function(e,t,b){if(!e)throw new Error("TextTrack kind is required but was not provided");return zn(this,e,t,b)},o.createRemoteTextTrack=function(e){var t=xe(e,{tech:this});return new Ot.remoteTextEl.TrackClass(t)},o.addRemoteTextTrack=function(e,t){var b=this;e===void 0&&(e={});var U=this.createRemoteTextTrack(e);return t!==!0&&t!==!1&&(_.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),t=!0),this.remoteTextTrackEls().addTrackElement_(U),this.remoteTextTracks().addTrack(U.track),t!==!0&&this.ready(function(){return b.autoRemoteTextTracks_.addTrack(U.track)}),U},o.removeRemoteTextTrack=function(e){var t=this.remoteTextTrackEls().getTrackElementByTrack_(e);this.remoteTextTrackEls().removeTrackElement_(t),this.remoteTextTracks().removeTrack(e),this.autoRemoteTextTracks_.removeTrack(e)},o.getVideoPlaybackQuality=function(){return{}},o.requestPictureInPicture=function(){var e=this.options_.Promise||F.Promise;if(e)return e.reject()},o.disablePictureInPicture=function(){return!0},o.setDisablePictureInPicture=function(){},o.setPoster=function(){},o.playsinline=function(){},o.setPlaysinline=function(){},o.overrideNativeAudioTracks=function(){},o.overrideNativeVideoTracks=function(){},o.canPlayType=function(){return""},T.canPlayType=function(){return""},T.canPlaySource=function(e,t){return T.canPlayType(e.type)},T.isTech=function(e){return e.prototype instanceof T||e instanceof T||e===T},T.registerTech=function(e,t){if(T.techs_||(T.techs_={}),!T.isTech(t))throw new Error("Tech "+e+" must be a Tech");if(!T.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!T.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return e=Be(e),T.techs_[e]=t,T.techs_[qt(e)]=t,e!=="Tech"&&T.defaultTechOrder_.push(e),t},T.getTech=function(e){if(!!e){if(T.techs_&&T.techs_[e])return T.techs_[e];if(e=Be(e),F&&F.videojs&&F.videojs[e])return _.warn("The "+e+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),F.videojs[e]}},T}(ae);Ye.names.forEach(function(v){var T=Ye[v];Re.prototype[T.getterName]=function(){return this[T.privateName]=this[T.privateName]||new T.ListClass,this[T.privateName]}}),Re.prototype.featuresVolumeControl=!0,Re.prototype.featuresMuteControl=!0,Re.prototype.featuresFullscreenResize=!1,Re.prototype.featuresPlaybackRate=!1,Re.prototype.featuresProgressEvents=!1,Re.prototype.featuresSourceset=!1,Re.prototype.featuresTimeupdateEvents=!1,Re.prototype.featuresNativeTextTracks=!1,Re.withSourceHandlers=function(v){v.registerSourceHandler=function(o,r){var e=v.sourceHandlers;e||(e=v.sourceHandlers=[]),r===void 0&&(r=e.length),e.splice(r,0,o)},v.canPlayType=function(o){for(var r=v.sourceHandlers||[],e,t=0;t<r.length;t++)if(e=r[t].canPlayType(o),e)return e;return""},v.selectSourceHandler=function(o,r){for(var e=v.sourceHandlers||[],t,b=0;b<e.length;b++)if(t=e[b].canHandleSource(o,r),t)return e[b];return null},v.canPlaySource=function(o,r){var e=v.selectSourceHandler(o,r);return e?e.canHandleSource(o,r):""};var T=["seekable","seeking","duration"];T.forEach(function(o){var r=this[o];typeof r=="function"&&(this[o]=function(){return this.sourceHandler_&&this.sourceHandler_[o]?this.sourceHandler_[o].apply(this.sourceHandler_,arguments):r.apply(this,arguments)})},v.prototype),v.prototype.setSource=function(o){var r=v.selectSourceHandler(o,this.options_);r||(v.nativeSourceHandler?r=v.nativeSourceHandler:_.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler_),r!==v.nativeSourceHandler&&(this.currentSource_=o),this.sourceHandler_=r.handleSource(o,this,this.options_),this.one("dispose",this.disposeSourceHandler_)},v.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},ae.registerComponent("Tech",Re),Re.registerTech("Tech",Re),Re.defaultTechOrder_=[];var Et={},Ir={},tr={};function Yn(v,T){Et[v]=Et[v]||[],Et[v].push(T)}function Xn(v,T,o){v.setTimeout(function(){return Tt(T,Et[T.type],o,v)},1)}function $n(v,T){v.forEach(function(o){return o.setTech&&o.setTech(T)})}function Qn(v,T,o){return v.reduceRight(Rr(o),T[o]())}function Jn(v,T,o,r){return T[o](v.reduce(Rr(o),r))}function Ii(v,T,o,r){r===void 0&&(r=null);var e="call"+Be(o),t=v.reduce(Rr(e),r),b=t===tr,U=b?null:T[o](t);return ea(v,o,U,b),U}var Zn={buffered:1,currentTime:1,duration:1,muted:1,played:1,paused:1,seekable:1,volume:1},qn={setCurrentTime:1,setMuted:1,setVolume:1},Ri={play:1,pause:1};function Rr(v){return function(T,o){return T===tr?tr:o[v]?o[v](T):T}}function ea(v,T,o,r){for(var e=v.length-1;e>=0;e--){var t=v[e];t[T]&&t[T](r,o)}}function ta(v){Ir[v.id()]=null}function ra(v,T){var o=Ir[v.id()],r=null;if(o==null)return r=T(v),Ir[v.id()]=[[T,r]],r;for(var e=0;e<o.length;e++){var t=o[e],b=t[0],U=t[1];b===T&&(r=U)}return r===null&&(r=T(v),o.push([T,r])),r}function Tt(v,T,o,r,e,t){v===void 0&&(v={}),T===void 0&&(T=[]),e===void 0&&(e=[]),t===void 0&&(t=!1);var b=T,U=b[0],z=b.slice(1);if(typeof U=="string")Tt(v,Et[U],o,r,e,t);else if(U){var Y=ra(r,U);if(!Y.setSource)return e.push(Y),Tt(v,z,o,r,e,t);Y.setSource(S({},v),function(Q,te){if(Q)return Tt(v,z,o,r,e,t);e.push(Y),Tt(te,v.type===te.type?z:Et[te.type],o,r,e,t)})}else z.length?Tt(v,z,o,r,e,t):t?o(v,e):Tt(v,Et["*"],o,r,e,!0)}var ia={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",m4a:"audio/mp4",mp3:"audio/mpeg",aac:"audio/aac",caf:"audio/x-caf",flac:"audio/flac",oga:"audio/ogg",wav:"audio/wav",m3u8:"application/x-mpegURL",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",png:"image/png",svg:"image/svg+xml",webp:"image/webp"},rr=function(T){T===void 0&&(T="");var o=Or(T),r=ia[o.toLowerCase()];return r||""},na=function(T,o){if(!o)return"";if(T.cache_.source.src===o&&T.cache_.source.type)return T.cache_.source.type;var r=T.cache_.sources.filter(function(U){return U.src===o});if(r.length)return r[0].type;for(var e=T.$$("source"),t=0;t<e.length;t++){var b=e[t];if(b.type&&b.src&&b.src===o)return b.type}return rr(o)},aa=function v(T){if(Array.isArray(T)){var o=[];T.forEach(function(r){r=v(r),Array.isArray(r)?o=o.concat(r):I(r)&&o.push(r)}),T=o}else typeof T=="string"&&T.trim()?T=[Mi({src:T})]:I(T)&&typeof T.src=="string"&&T.src&&T.src.trim()?T=[Mi(T)]:T=[];return T};function Mi(v){if(!v.type){var T=rr(v.src);T&&(v.type=T)}return v}var sa=function(v){w(T,v);function T(o,r,e){var t,b=xe({createEl:!1},r);if(t=v.call(this,o,b,e)||this,!r.playerOptions.sources||r.playerOptions.sources.length===0)for(var U=0,z=r.playerOptions.techOrder;U<z.length;U++){var Y=Be(z[U]),Q=Re.getTech(Y);if(Y||(Q=ae.getComponent(Y)),Q&&Q.isSupported()){o.loadTech_(Y);break}}else o.src(r.playerOptions.sources);return t}return T}(ae);ae.registerComponent("MediaLoader",sa);var ir=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.handleMouseOver_=function(b){return t.handleMouseOver(b)},t.handleMouseOut_=function(b){return t.handleMouseOut(b)},t.handleClick_=function(b){return t.handleClick(b)},t.handleKeyDown_=function(b){return t.handleKeyDown(b)},t.emitTapEvents(),t.enable(),t}var o=T.prototype;return o.createEl=function(e,t,b){e===void 0&&(e="div"),t===void 0&&(t={}),b===void 0&&(b={}),t=S({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},t),e==="button"&&_.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),b=S({role:"button"},b),this.tabIndex_=t.tabIndex;var U=v.prototype.createEl.call(this,e,t,b);return this.createControlTextEl(U),U},o.dispose=function(){this.controlTextEl_=null,v.prototype.dispose.call(this)},o.createControlTextEl=function(e){return this.controlTextEl_=ce("span",{className:"vjs-control-text"},{"aria-live":"polite"}),e&&e.appendChild(this.controlTextEl_),this.controlText(this.controlText_,e),this.controlTextEl_},o.controlText=function(e,t){if(t===void 0&&(t=this.el()),e===void 0)return this.controlText_||"Need Text";var b=this.localize(e);this.controlText_=e,Le(this.controlTextEl_,b),!this.nonIconControl&&!this.player_.options_.noUITitleAttributes&&t.setAttribute("title",b)},o.buildCSSClass=function(){return"vjs-control vjs-button "+v.prototype.buildCSSClass.call(this)},o.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),typeof this.tabIndex_!="undefined"&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick_),this.on("keydown",this.handleKeyDown_))},o.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),typeof this.tabIndex_!="undefined"&&this.el_.removeAttribute("tabIndex"),this.off("mouseover",this.handleMouseOver_),this.off("mouseout",this.handleMouseOut_),this.off(["tap","click"],this.handleClick_),this.off("keydown",this.handleKeyDown_)},o.handleLanguagechange=function(){this.controlText(this.controlText_)},o.handleClick=function(e){this.options_.clickHandler&&this.options_.clickHandler.call(this,arguments)},o.handleKeyDown=function(e){D.isEventKey(e,"Space")||D.isEventKey(e,"Enter")?(e.preventDefault(),e.stopPropagation(),this.trigger("click")):v.prototype.handleKeyDown.call(this,e)},T}(ae);ae.registerComponent("ClickableComponent",ir);var oa=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update(),t.update_=function(b){return t.update(b)},r.on("posterchange",t.update_),t}var o=T.prototype;return o.dispose=function(){this.player().off("posterchange",this.update_),v.prototype.dispose.call(this)},o.createEl=function(){var e=ce("div",{className:"vjs-poster",tabIndex:-1});return e},o.update=function(e){var t=this.player().poster();this.setSrc(t),t?this.show():this.hide()},o.setSrc=function(e){var t="";e&&(t='url("'+e+'")'),this.el_.style.backgroundImage=t},o.handleClick=function(e){if(!!this.player_.controls()){var t=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0;this.player_.tech(!0)&&!((le||ee)&&t)&&this.player_.tech(!0).focus(),this.player_.paused()?vt(this.player_.play()):this.player_.pause()}},T}(ir);ae.registerComponent("PosterImage",oa);var tt="#222",xi="#ccc",la={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Mr(v,T){var o;if(v.length===4)o=v[1]+v[1]+v[2]+v[2]+v[3]+v[3];else if(v.length===7)o=v.slice(1);else throw new Error("Invalid color code provided, "+v+"; must be formatted as e.g. #f0e or #f604e2.");return"rgba("+parseInt(o.slice(0,2),16)+","+parseInt(o.slice(2,4),16)+","+parseInt(o.slice(4,6),16)+","+T+")"}function xr(v,T,o){try{v.style[T]=o}catch(r){return}}var ua=function(v){w(T,v);function T(r,e,t){var b;b=v.call(this,r,e,t)||this;var U=function(Y){return b.updateDisplay(Y)};return r.on("loadstart",function(z){return b.toggleDisplay(z)}),r.on("texttrackchange",U),r.on("loadedmetadata",function(z){return b.preselectTrack(z)}),r.ready(Ie(j(b),function(){if(r.tech_&&r.tech_.featuresNativeTextTracks){this.hide();return}r.on("fullscreenchange",U),r.on("playerresize",U),F.addEventListener("orientationchange",U),r.on("dispose",function(){return F.removeEventListener("orientationchange",U)});for(var z=this.options_.playerOptions.tracks||[],Y=0;Y<z.length;Y++)this.player_.addRemoteTextTrack(z[Y],!0);this.preselectTrack()})),b}var o=T.prototype;return o.preselectTrack=function(){for(var e={captions:1,subtitles:1},t=this.player_.textTracks(),b=this.player_.cache_.selectedLanguage,U,z,Y,Q=0;Q<t.length;Q++){var te=t[Q];b&&b.enabled&&b.language&&b.language===te.language&&te.kind in e?te.kind===b.kind?Y=te:Y||(Y=te):b&&!b.enabled?(Y=null,U=null,z=null):te.default&&(te.kind==="descriptions"&&!U?U=te:te.kind in e&&!z&&(z=te))}Y?Y.mode="showing":z?z.mode="showing":U&&(U.mode="showing")},o.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},o.clearDisplay=function(){typeof F.WebVTT=="function"&&F.WebVTT.processCues(F,[],this.el_)},o.updateDisplay=function(){var e=this.player_.textTracks(),t=this.options_.allowMultipleShowingTracks;if(this.clearDisplay(),t){for(var b=[],U=0;U<e.length;++U){var z=e[U];z.mode==="showing"&&b.push(z)}this.updateForTrack(b);return}for(var Y=null,Q=null,te=e.length;te--;){var $=e[te];$.mode==="showing"&&($.kind==="descriptions"?Y=$:Q=$)}Q?(this.getAttribute("aria-live")!=="off"&&this.setAttribute("aria-live","off"),this.updateForTrack(Q)):Y&&(this.getAttribute("aria-live")!=="assertive"&&this.setAttribute("aria-live","assertive"),this.updateForTrack(Y))},o.updateDisplayState=function(e){for(var t=this.player_.textTrackSettings.getValues(),b=e.activeCues,U=b.length;U--;){var z=b[U];if(!!z){var Y=z.displayState;if(t.color&&(Y.firstChild.style.color=t.color),t.textOpacity&&xr(Y.firstChild,"color",Mr(t.color||"#fff",t.textOpacity)),t.backgroundColor&&(Y.firstChild.style.backgroundColor=t.backgroundColor),t.backgroundOpacity&&xr(Y.firstChild,"backgroundColor",Mr(t.backgroundColor||"#000",t.backgroundOpacity)),t.windowColor&&(t.windowOpacity?xr(Y,"backgroundColor",Mr(t.windowColor,t.windowOpacity)):Y.style.backgroundColor=t.windowColor),t.edgeStyle&&(t.edgeStyle==="dropshadow"?Y.firstChild.style.textShadow="2px 2px 3px "+tt+", 2px 2px 4px "+tt+", 2px 2px 5px "+tt:t.edgeStyle==="raised"?Y.firstChild.style.textShadow="1px 1px "+tt+", 2px 2px "+tt+", 3px 3px "+tt:t.edgeStyle==="depressed"?Y.firstChild.style.textShadow="1px 1px "+xi+", 0 1px "+xi+", -1px -1px "+tt+", 0 -1px "+tt:t.edgeStyle==="uniform"&&(Y.firstChild.style.textShadow="0 0 4px "+tt+", 0 0 4px "+tt+", 0 0 4px "+tt+", 0 0 4px "+tt)),t.fontPercent&&t.fontPercent!==1){var Q=F.parseFloat(Y.style.fontSize);Y.style.fontSize=Q*t.fontPercent+"px",Y.style.height="auto",Y.style.top="auto"}t.fontFamily&&t.fontFamily!=="default"&&(t.fontFamily==="small-caps"?Y.firstChild.style.fontVariant="small-caps":Y.firstChild.style.fontFamily=la[t.fontFamily])}}},o.updateForTrack=function(e){if(Array.isArray(e)||(e=[e]),!(typeof F.WebVTT!="function"||e.every(function(se){return!se.activeCues}))){for(var t=[],b=0;b<e.length;++b)for(var U=e[b],z=0;z<U.activeCues.length;++z)t.push(U.activeCues[z]);F.WebVTT.processCues(F,t,this.el_);for(var Y=0;Y<e.length;++Y){for(var Q=e[Y],te=0;te<Q.activeCues.length;++te){var $=Q.activeCues[te].displayState;De($,"vjs-text-track-cue"),De($,"vjs-text-track-cue-"+(Q.language?Q.language:Y))}this.player_.textTrackSettings&&this.updateDisplayState(Q)}}},T}(ae);ae.registerComponent("TextTrackDisplay",ua);var ca=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(){var e=this.player_.isAudio(),t=this.localize(e?"Audio Player":"Video Player"),b=ce("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[t])}),U=v.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return U.appendChild(b),U},T}(ae);ae.registerComponent("LoadingSpinner",ca);var at=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(e,t,b){t===void 0&&(t={}),b===void 0&&(b={}),e="button",t=S({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},t),b=S({type:"button"},b);var U=ae.prototype.createEl.call(this,e,t,b);return this.createControlTextEl(U),U},o.addChild=function(e,t){t===void 0&&(t={});var b=this.constructor.name;return _.warn("Adding an actionable (user controllable) child to a Button ("+b+") is not supported; use a ClickableComponent instead."),ae.prototype.addChild.call(this,e,t)},o.enable=function(){v.prototype.enable.call(this),this.el_.removeAttribute("disabled")},o.disable=function(){v.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},o.handleKeyDown=function(e){if(D.isEventKey(e,"Space")||D.isEventKey(e,"Enter")){e.stopPropagation();return}v.prototype.handleKeyDown.call(this,e)},T}(ir);ae.registerComponent("Button",at);var ki=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.mouseused_=!1,t.on("mousedown",function(b){return t.handleMouseDown(b)}),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-big-play-button"},o.handleClick=function(e){var t=this.player_.play();if(this.mouseused_&&e.clientX&&e.clientY){var b=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0;vt(t),this.player_.tech(!0)&&!((le||ee)&&b)&&this.player_.tech(!0).focus();return}var U=this.player_.getChild("controlBar"),z=U&&U.getChild("playToggle");if(!z){this.player_.tech(!0).focus();return}var Y=function(){return z.focus()};Nt(t)?t.then(Y,function(){}):this.setTimeout(Y,1)},o.handleKeyDown=function(e){this.mouseused_=!1,v.prototype.handleKeyDown.call(this,e)},o.handleMouseDown=function(e){this.mouseused_=!0},T}(at);ki.prototype.controlText_="Play Video",ae.registerComponent("BigPlayButton",ki);var ha=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.controlText(e&&e.controlText||t.localize("Close")),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-close-button "+v.prototype.buildCSSClass.call(this)},o.handleClick=function(e){this.trigger({type:"close",bubbles:!1})},o.handleKeyDown=function(e){D.isEventKey(e,"Esc")?(e.preventDefault(),e.stopPropagation(),this.trigger("click")):v.prototype.handleKeyDown.call(this,e)},T}(at);ae.registerComponent("CloseButton",ha);var wi=function(v){w(T,v);function T(r,e){var t;return e===void 0&&(e={}),t=v.call(this,r,e)||this,e.replay=e.replay===void 0||e.replay,t.on(r,"play",function(b){return t.handlePlay(b)}),t.on(r,"pause",function(b){return t.handlePause(b)}),e.replay&&t.on(r,"ended",function(b){return t.handleEnded(b)}),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-play-control "+v.prototype.buildCSSClass.call(this)},o.handleClick=function(e){this.player_.paused()?this.player_.play():this.player_.pause()},o.handleSeeked=function(e){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(e):this.handlePlay(e)},o.handlePlay=function(e){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},o.handlePause=function(e){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},o.handleEnded=function(e){var t=this;this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",function(b){return t.handleSeeked(b)})},T}(at);wi.prototype.controlText_="Play",ae.registerComponent("PlayToggle",wi);var Fi=function(T,o){T=T<0?0:T;var r=Math.floor(T%60),e=Math.floor(T/60%60),t=Math.floor(T/3600),b=Math.floor(o/60%60),U=Math.floor(o/3600);return(isNaN(T)||T===Infinity)&&(t=e=r="-"),t=t>0||U>0?t+":":"",e=((t||b>=10)&&e<10?"0"+e:e)+":",r=r<10?"0"+r:r,t+e+r},kr=Fi;function fa(v){kr=v}function da(){kr=Fi}function It(v,T){return T===void 0&&(T=v),kr(v,T)}var Rt=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on(r,["timeupdate","ended"],function(b){return t.updateContent(b)}),t.updateTextNode_(),t}var o=T.prototype;return o.createEl=function(){var e=this.buildCSSClass(),t=v.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text" role="presentation">'+this.localize(this.labelText_)+"\xA0</span>"});return this.contentEl_=ce("span",{className:e+"-display"},{"aria-live":"off",role:"presentation"}),t.appendChild(this.contentEl_),t},o.dispose=function(){this.contentEl_=null,this.textNode_=null,v.prototype.dispose.call(this)},o.updateTextNode_=function(e){var t=this;e===void 0&&(e=0),e=It(e),this.formattedTime_!==e&&(this.formattedTime_=e,this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_",function(){if(!!t.contentEl_){var b=t.textNode_;b&&t.contentEl_.firstChild!==b&&(b=null,_.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")),t.textNode_=R.createTextNode(t.formattedTime_),!!t.textNode_&&(b?t.contentEl_.replaceChild(t.textNode_,b):t.contentEl_.appendChild(t.textNode_))}}))},o.updateContent=function(e){},T}(ae);Rt.prototype.labelText_="Time",Rt.prototype.controlText_="Time",ae.registerComponent("TimeDisplay",Rt);var wr=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-current-time"},o.updateContent=function(e){var t;this.player_.ended()?t=this.player_.duration():t=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(),this.updateTextNode_(t)},T}(Rt);wr.prototype.labelText_="Current Time",wr.prototype.controlText_="Current Time",ae.registerComponent("CurrentTimeDisplay",wr);var Fr=function(v){w(T,v);function T(r,e){var t;t=v.call(this,r,e)||this;var b=function(z){return t.updateContent(z)};return t.on(r,"durationchange",b),t.on(r,"loadstart",b),t.on(r,"loadedmetadata",b),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-duration"},o.updateContent=function(e){var t=this.player_.duration();this.updateTextNode_(t)},T}(Rt);Fr.prototype.labelText_="Duration",Fr.prototype.controlText_="Duration",ae.registerComponent("DurationDisplay",Fr);var va=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"},{"aria-hidden":!0})},T}(ae);ae.registerComponent("TimeDivider",va);var Br=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on(r,"durationchange",function(b){return t.updateContent(b)}),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-remaining-time"},o.createEl=function(){var e=v.prototype.createEl.call(this);return e.insertBefore(ce("span",{},{"aria-hidden":!0},"-"),this.contentEl_),e},o.updateContent=function(e){if(typeof this.player_.duration()=="number"){var t;this.player_.ended()?t=0:this.player_.remainingTimeDisplay?t=this.player_.remainingTimeDisplay():t=this.player_.remainingTime(),this.updateTextNode_(t)}},T}(Rt);Br.prototype.labelText_="Remaining Time",Br.prototype.controlText_="Remaining Time",ae.registerComponent("RemainingTimeDisplay",Br);var pa=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.updateShowing(),t.on(t.player(),"durationchange",function(b){return t.updateShowing(b)}),t}var o=T.prototype;return o.createEl=function(){var e=v.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=ce("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"\xA0</span>"+this.localize("LIVE")},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},o.dispose=function(){this.contentEl_=null,v.prototype.dispose.call(this)},o.updateShowing=function(e){this.player().duration()===Infinity?this.show():this.hide()},T}(ae);ae.registerComponent("LiveDisplay",pa);var Bi=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.updateLiveEdgeStatus(),t.player_.liveTracker&&(t.updateLiveEdgeStatusHandler_=function(b){return t.updateLiveEdgeStatus(b)},t.on(t.player_.liveTracker,"liveedgechange",t.updateLiveEdgeStatusHandler_)),t}var o=T.prototype;return o.createEl=function(){var e=v.prototype.createEl.call(this,"button",{className:"vjs-seek-to-live-control vjs-control"});return this.textEl_=ce("span",{className:"vjs-seek-to-live-text",innerHTML:this.localize("LIVE")},{"aria-hidden":"true"}),e.appendChild(this.textEl_),e},o.updateLiveEdgeStatus=function(){!this.player_.liveTracker||this.player_.liveTracker.atLiveEdge()?(this.setAttribute("aria-disabled",!0),this.addClass("vjs-at-live-edge"),this.controlText("Seek to live, currently playing live")):(this.setAttribute("aria-disabled",!1),this.removeClass("vjs-at-live-edge"),this.controlText("Seek to live, currently behind live"))},o.handleClick=function(){this.player_.liveTracker.seekToLiveEdge()},o.dispose=function(){this.player_.liveTracker&&this.off(this.player_.liveTracker,"liveedgechange",this.updateLiveEdgeStatusHandler_),this.textEl_=null,v.prototype.dispose.call(this)},T}(at);Bi.prototype.controlText_="Seek to live, currently playing live",ae.registerComponent("SeekToLive",Bi);var nr=function(T,o,r){return T=Number(T),Math.min(r,Math.max(o,isNaN(T)?o:T))},Nr=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.handleMouseDown_=function(b){return t.handleMouseDown(b)},t.handleMouseUp_=function(b){return t.handleMouseUp(b)},t.handleKeyDown_=function(b){return t.handleKeyDown(b)},t.handleClick_=function(b){return t.handleClick(b)},t.handleMouseMove_=function(b){return t.handleMouseMove(b)},t.update_=function(b){return t.update(b)},t.bar=t.getChild(t.options_.barName),t.vertical(!!t.options_.vertical),t.enable(),t}var o=T.prototype;return o.enabled=function(){return this.enabled_},o.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown_),this.on("touchstart",this.handleMouseDown_),this.on("keydown",this.handleKeyDown_),this.on("click",this.handleClick_),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},o.disable=function(){if(!!this.enabled()){var e=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown_),this.off("touchstart",this.handleMouseDown_),this.off("keydown",this.handleKeyDown_),this.off("click",this.handleClick_),this.off(this.player_,"controlsvisible",this.update_),this.off(e,"mousemove",this.handleMouseMove_),this.off(e,"mouseup",this.handleMouseUp_),this.off(e,"touchmove",this.handleMouseMove_),this.off(e,"touchend",this.handleMouseUp_),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},o.createEl=function(e,t,b){return t===void 0&&(t={}),b===void 0&&(b={}),t.className=t.className+" vjs-slider",t=S({tabIndex:0},t),b=S({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},b),v.prototype.createEl.call(this,e,t,b)},o.handleMouseDown=function(e){var t=this.bar.el_.ownerDocument;e.type==="mousedown"&&e.preventDefault(),e.type==="touchstart"&&!ie&&e.preventDefault(),rt(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(t,"mousemove",this.handleMouseMove_),this.on(t,"mouseup",this.handleMouseUp_),this.on(t,"touchmove",this.handleMouseMove_),this.on(t,"touchend",this.handleMouseUp_),this.handleMouseMove(e)},o.handleMouseMove=function(e){},o.handleMouseUp=function(){var e=this.bar.el_.ownerDocument;Ge(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(e,"mousemove",this.handleMouseMove_),this.off(e,"mouseup",this.handleMouseUp_),this.off(e,"touchmove",this.handleMouseMove_),this.off(e,"touchend",this.handleMouseUp_),this.update()},o.update=function(){var e=this;if(!(!this.el_||!this.bar)){var t=this.getProgress();return t===this.progress_||(this.progress_=t,this.requestNamedAnimationFrame("Slider#update",function(){var b=e.vertical()?"height":"width";e.bar.el().style[b]=(t*100).toFixed(2)+"%"})),t}},o.getProgress=function(){return Number(nr(this.getPercent(),0,1).toFixed(4))},o.calculateDistance=function(e){var t=qe(this.el_,e);return this.vertical()?t.y:t.x},o.handleKeyDown=function(e){D.isEventKey(e,"Left")||D.isEventKey(e,"Down")?(e.preventDefault(),e.stopPropagation(),this.stepBack()):D.isEventKey(e,"Right")||D.isEventKey(e,"Up")?(e.preventDefault(),e.stopPropagation(),this.stepForward()):v.prototype.handleKeyDown.call(this,e)},o.handleClick=function(e){e.stopPropagation(),e.preventDefault()},o.vertical=function(e){if(e===void 0)return this.vertical_||!1;this.vertical_=!!e,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},T}(ae);ae.registerComponent("Slider",Nr);var Ur=function(T,o){return nr(T/o*100,0,100).toFixed(2)+"%"},ga=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.partEls_=[],t.on(r,"progress",function(b){return t.update(b)}),t}var o=T.prototype;return o.createEl=function(){var e=v.prototype.createEl.call(this,"div",{className:"vjs-load-progress"}),t=ce("span",{className:"vjs-control-text"}),b=ce("span",{textContent:this.localize("Loaded")}),U=R.createTextNode(": ");return this.percentageEl_=ce("span",{className:"vjs-control-text-loaded-percentage",textContent:"0%"}),e.appendChild(t),t.appendChild(b),t.appendChild(U),t.appendChild(this.percentageEl_),e},o.dispose=function(){this.partEls_=null,this.percentageEl_=null,v.prototype.dispose.call(this)},o.update=function(e){var t=this;this.requestNamedAnimationFrame("LoadProgressBar#update",function(){var b=t.player_.liveTracker,U=t.player_.buffered(),z=b&&b.isLive()?b.seekableEnd():t.player_.duration(),Y=t.player_.bufferedEnd(),Q=t.partEls_,te=Ur(Y,z);t.percent_!==te&&(t.el_.style.width=te,Le(t.percentageEl_,te),t.percent_=te);for(var $=0;$<U.length;$++){var se=U.start($),de=U.end($),Te=Q[$];Te||(Te=t.el_.appendChild(ce()),Q[$]=Te),!(Te.dataset.start===se&&Te.dataset.end===de)&&(Te.dataset.start=se,Te.dataset.end=de,Te.style.left=Ur(se,Y),Te.style.width=Ur(de-se,Y))}for(var ht=Q.length;ht>U.length;ht--)t.el_.removeChild(Q[ht-1]);Q.length=U.length})},T}(ae);ae.registerComponent("LoadProgressBar",ga);var ma=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update=ut(Ie(j(t),t.update),nt),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"},{"aria-hidden":"true"})},o.update=function(e,t,b){var U=it(this.el_),z=Qe(this.player_.el()),Y=e.width*t;if(!(!z||!U)){var Q=e.left-z.left+Y,te=e.width-Y+(z.right-e.right),$=U.width/2;Q<$?$+=$-Q:te<$&&($=te),$<0?$=0:$>U.width&&($=U.width),$=Math.round($),this.el_.style.right="-"+$+"px",this.write(b)}},o.write=function(e){Le(this.el_,e)},o.updateTime=function(e,t,b,U){var z=this;this.requestNamedAnimationFrame("TimeTooltip#updateTime",function(){var Y,Q=z.player_.duration();if(z.player_.liveTracker&&z.player_.liveTracker.isLive()){var te=z.player_.liveTracker.liveWindow(),$=te-t*te;Y=($<1?"":"-")+It($,te)}else Y=It(b,Q);z.update(e,t,Y),U&&U()})},T}(ae);ae.registerComponent("TimeTooltip",ma);var jr=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update=ut(Ie(j(t),t.update),nt),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar"},{"aria-hidden":"true"})},o.update=function(e,t){var b=this.getChild("timeTooltip");if(!!b){var U=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();b.updateTime(e,t,U)}},T}(ae);jr.prototype.options_={children:[]},!_e&&!X&&jr.prototype.options_.children.push("timeTooltip"),ae.registerComponent("PlayProgressBar",jr);var Ni=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update=ut(Ie(j(t),t.update),nt),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},o.update=function(e,t){var b=this,U=t*this.player_.duration();this.getChild("timeTooltip").updateTime(e,t,U,function(){b.el_.style.left=e.width*t+"px"})},T}(ae);Ni.prototype.options_={children:["timeTooltip"]},ae.registerComponent("MouseTimeDisplay",Ni);var ar=5,Ui=12,Kr=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.setEventHandlers_(),t}var o=T.prototype;return o.setEventHandlers_=function(){var e=this;this.update_=Ie(this,this.update),this.update=ut(this.update_,nt),this.on(this.player_,["ended","durationchange","timeupdate"],this.update),this.player_.liveTracker&&this.on(this.player_.liveTracker,"liveedgechange",this.update),this.updateInterval=null,this.enableIntervalHandler_=function(t){return e.enableInterval_(t)},this.disableIntervalHandler_=function(t){return e.disableInterval_(t)},this.on(this.player_,["playing"],this.enableIntervalHandler_),this.on(this.player_,["ended","pause","waiting"],this.disableIntervalHandler_),"hidden"in R&&"visibilityState"in R&&this.on(R,"visibilitychange",this.toggleVisibility_)},o.toggleVisibility_=function(e){R.visibilityState==="hidden"?(this.cancelNamedAnimationFrame("SeekBar#update"),this.cancelNamedAnimationFrame("Slider#update"),this.disableInterval_(e)):(!this.player_.ended()&&!this.player_.paused()&&this.enableInterval_(),this.update())},o.enableInterval_=function(){this.updateInterval||(this.updateInterval=this.setInterval(this.update,nt))},o.disableInterval_=function(e){this.player_.liveTracker&&this.player_.liveTracker.isLive()&&e&&e.type!=="ended"||!this.updateInterval||(this.clearInterval(this.updateInterval),this.updateInterval=null)},o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},o.update=function(e){var t=this;if(R.visibilityState!=="hidden"){var b=v.prototype.update.call(this);return this.requestNamedAnimationFrame("SeekBar#update",function(){var U=t.player_.ended()?t.player_.duration():t.getCurrentTime_(),z=t.player_.liveTracker,Y=t.player_.duration();z&&z.isLive()&&(Y=t.player_.liveTracker.liveCurrentTime()),t.percent_!==b&&(t.el_.setAttribute("aria-valuenow",(b*100).toFixed(2)),t.percent_=b),(t.currentTime_!==U||t.duration_!==Y)&&(t.el_.setAttribute("aria-valuetext",t.localize("progress bar timing: currentTime={1} duration={2}",[It(U,Y),It(Y,Y)],"{1} of {2}")),t.currentTime_=U,t.duration_=Y),t.bar&&t.bar.update(Qe(t.el()),t.getProgress())}),b}},o.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},o.getPercent=function(){var e=this.getCurrentTime_(),t,b=this.player_.liveTracker;return b&&b.isLive()?(t=(e-b.seekableStart())/b.liveWindow(),b.atLiveEdge()&&(t=1)):t=e/this.player_.duration(),t},o.handleMouseDown=function(e){!ft(e)||(e.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),v.prototype.handleMouseDown.call(this,e))},o.handleMouseMove=function(e){if(!!ft(e)){var t,b=this.calculateDistance(e),U=this.player_.liveTracker;if(!U||!U.isLive())t=b*this.player_.duration(),t===this.player_.duration()&&(t=t-.1);else{if(b>=.99){U.seekToLiveEdge();return}var z=U.seekableStart(),Y=U.liveCurrentTime();if(t=z+b*U.liveWindow(),t>=Y&&(t=Y),t<=z&&(t=z+.1),t===Infinity)return}this.player_.currentTime(t)}},o.enable=function(){v.prototype.enable.call(this);var e=this.getChild("mouseTimeDisplay");!e||e.show()},o.disable=function(){v.prototype.disable.call(this);var e=this.getChild("mouseTimeDisplay");!e||e.hide()},o.handleMouseUp=function(e){v.prototype.handleMouseUp.call(this,e),e&&e.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying?vt(this.player_.play()):this.update_()},o.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+ar)},o.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-ar)},o.handleAction=function(e){this.player_.paused()?this.player_.play():this.player_.pause()},o.handleKeyDown=function(e){if(D.isEventKey(e,"Space")||D.isEventKey(e,"Enter"))e.preventDefault(),e.stopPropagation(),this.handleAction(e);else if(D.isEventKey(e,"Home"))e.preventDefault(),e.stopPropagation(),this.player_.currentTime(0);else if(D.isEventKey(e,"End"))e.preventDefault(),e.stopPropagation(),this.player_.currentTime(this.player_.duration());else if(/^[0-9]$/.test(D(e))){e.preventDefault(),e.stopPropagation();var t=(D.codes[D(e)]-D.codes["0"])*10/100;this.player_.currentTime(this.player_.duration()*t)}else D.isEventKey(e,"PgDn")?(e.preventDefault(),e.stopPropagation(),this.player_.currentTime(this.player_.currentTime()-ar*Ui)):D.isEventKey(e,"PgUp")?(e.preventDefault(),e.stopPropagation(),this.player_.currentTime(this.player_.currentTime()+ar*Ui)):v.prototype.handleKeyDown.call(this,e)},o.dispose=function(){this.disableInterval_(),this.off(this.player_,["ended","durationchange","timeupdate"],this.update),this.player_.liveTracker&&this.on(this.player_.liveTracker,"liveedgechange",this.update),this.off(this.player_,["playing"],this.enableIntervalHandler_),this.off(this.player_,["ended","pause","waiting"],this.disableIntervalHandler_),"hidden"in R&&"visibilityState"in R&&this.off(R,"visibilitychange",this.toggleVisibility_),v.prototype.dispose.call(this)},T}(Nr);Kr.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},!_e&&!X&&Kr.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),ae.registerComponent("SeekBar",Kr);var ji=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.handleMouseMove=ut(Ie(j(t),t.handleMouseMove),nt),t.throttledHandleMouseSeek=ut(Ie(j(t),t.handleMouseSeek),nt),t.handleMouseUpHandler_=function(b){return t.handleMouseUp(b)},t.handleMouseDownHandler_=function(b){return t.handleMouseDown(b)},t.enable(),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},o.handleMouseMove=function(e){var t=this.getChild("seekBar");if(!!t){var b=t.getChild("playProgressBar"),U=t.getChild("mouseTimeDisplay");if(!(!b&&!U)){var z=t.el(),Y=it(z),Q=qe(z,e).x;Q=nr(Q,0,1),U&&U.update(Y,Q),b&&b.update(Y,t.getProgress())}}},o.handleMouseSeek=function(e){var t=this.getChild("seekBar");t&&t.handleMouseMove(e)},o.enabled=function(){return this.enabled_},o.disable=function(){if(this.children().forEach(function(t){return t.disable&&t.disable()}),!!this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDownHandler_),this.off(this.el_,"mousemove",this.handleMouseMove),this.removeListenersAddedOnMousedownAndTouchstart(),this.addClass("disabled"),this.enabled_=!1,this.player_.scrubbing())){var e=this.getChild("seekBar");this.player_.scrubbing(!1),e.videoWasPlaying&&vt(this.player_.play())}},o.enable=function(){this.children().forEach(function(e){return e.enable&&e.enable()}),!this.enabled()&&(this.on(["mousedown","touchstart"],this.handleMouseDownHandler_),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},o.removeListenersAddedOnMousedownAndTouchstart=function(){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUpHandler_),this.off(e,"touchend",this.handleMouseUpHandler_)},o.handleMouseDown=function(e){var t=this.el_.ownerDocument,b=this.getChild("seekBar");b&&b.handleMouseDown(e),this.on(t,"mousemove",this.throttledHandleMouseSeek),this.on(t,"touchmove",this.throttledHandleMouseSeek),this.on(t,"mouseup",this.handleMouseUpHandler_),this.on(t,"touchend",this.handleMouseUpHandler_)},o.handleMouseUp=function(e){var t=this.getChild("seekBar");t&&t.handleMouseUp(e),this.removeListenersAddedOnMousedownAndTouchstart()},T}(ae);ji.prototype.options_={children:["seekBar"]},ae.registerComponent("ProgressControl",ji);var Ki=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on(r,["enterpictureinpicture","leavepictureinpicture"],function(b){return t.handlePictureInPictureChange(b)}),t.on(r,["disablepictureinpicturechanged","loadedmetadata"],function(b){return t.handlePictureInPictureEnabledChange(b)}),t.disable(),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-picture-in-picture-control "+v.prototype.buildCSSClass.call(this)},o.handlePictureInPictureEnabledChange=function(){R.pictureInPictureEnabled&&this.player_.disablePictureInPicture()===!1?this.enable():this.disable()},o.handlePictureInPictureChange=function(e){this.player_.isInPictureInPicture()?this.controlText("Exit Picture-in-Picture"):this.controlText("Picture-in-Picture"),this.handlePictureInPictureEnabledChange()},o.handleClick=function(e){this.player_.isInPictureInPicture()?this.player_.exitPictureInPicture():this.player_.requestPictureInPicture()},T}(at);Ki.prototype.controlText_="Picture-in-Picture",ae.registerComponent("PictureInPictureToggle",Ki);var Hi=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on(r,"fullscreenchange",function(b){return t.handleFullscreenChange(b)}),R[r.fsApi_.fullscreenEnabled]===!1&&t.disable(),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-fullscreen-control "+v.prototype.buildCSSClass.call(this)},o.handleFullscreenChange=function(e){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},o.handleClick=function(e){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},T}(at);Hi.prototype.controlText_="Fullscreen",ae.registerComponent("FullscreenToggle",Hi);var ya=function(T,o){o.tech_&&!o.tech_.featuresVolumeControl&&T.addClass("vjs-hidden"),T.on(o,"loadstart",function(){o.tech_.featuresVolumeControl?T.removeClass("vjs-hidden"):T.addClass("vjs-hidden")})},Ea=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},T}(ae);ae.registerComponent("VolumeLevel",Ea);var Ta=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update=ut(Ie(j(t),t.update),nt),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-volume-tooltip"},{"aria-hidden":"true"})},o.update=function(e,t,b,U){if(!b){var z=Qe(this.el_),Y=Qe(this.player_.el()),Q=e.width*t;if(!Y||!z)return;var te=e.left-Y.left+Q,$=e.width-Q+(Y.right-e.right),se=z.width/2;te<se?se+=se-te:$<se&&(se=$),se<0?se=0:se>z.width&&(se=z.width),this.el_.style.right="-"+se+"px"}this.write(U+"%")},o.write=function(e){Le(this.el_,e)},o.updateVolume=function(e,t,b,U,z){var Y=this;this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume",function(){Y.update(e,t,b,U.toFixed(0)),z&&z()})},T}(ae);ae.registerComponent("VolumeLevelTooltip",Ta);var Wi=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.update=ut(Ie(j(t),t.update),nt),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},o.update=function(e,t,b){var U=this,z=100*t;this.getChild("volumeLevelTooltip").updateVolume(e,t,b,z,function(){b?U.el_.style.bottom=e.height*t+"px":U.el_.style.left=e.width*t+"px"})},T}(ae);Wi.prototype.options_={children:["volumeLevelTooltip"]},ae.registerComponent("MouseVolumeLevelDisplay",Wi);var sr=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on("slideractive",function(b){return t.updateLastVolume_(b)}),t.on(r,"volumechange",function(b){return t.updateARIAAttributes(b)}),r.ready(function(){return t.updateARIAAttributes()}),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},o.handleMouseDown=function(e){!ft(e)||v.prototype.handleMouseDown.call(this,e)},o.handleMouseMove=function(e){var t=this.getChild("mouseVolumeLevelDisplay");if(t){var b=this.el(),U=Qe(b),z=this.vertical(),Y=qe(b,e);Y=z?Y.y:Y.x,Y=nr(Y,0,1),t.update(U,Y,z)}!ft(e)||(this.checkMuted(),this.player_.volume(this.calculateDistance(e)))},o.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},o.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},o.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},o.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},o.updateARIAAttributes=function(e){var t=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",t),this.el_.setAttribute("aria-valuetext",t+"%")},o.volumeAsPercentage_=function(){return Math.round(this.player_.volume()*100)},o.updateLastVolume_=function(){var e=this,t=this.player_.volume();this.one("sliderinactive",function(){e.player_.volume()===0&&e.player_.lastVolume_(t)})},T}(Nr);sr.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},!_e&&!X&&sr.prototype.options_.children.splice(0,0,"mouseVolumeLevelDisplay"),sr.prototype.playerEvent="volumechange",ae.registerComponent("VolumeBar",sr);var Gi=function(v){w(T,v);function T(r,e){var t;return e===void 0&&(e={}),e.vertical=e.vertical||!1,(typeof e.volumeBar=="undefined"||x(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical),t=v.call(this,r,e)||this,ya(j(t),r),t.throttledHandleMouseMove=ut(Ie(j(t),t.handleMouseMove),nt),t.handleMouseUpHandler_=function(b){return t.handleMouseUp(b)},t.on("mousedown",function(b){return t.handleMouseDown(b)}),t.on("touchstart",function(b){return t.handleMouseDown(b)}),t.on("mousemove",function(b){return t.handleMouseMove(b)}),t.on(t.volumeBar,["focus","slideractive"],function(){t.volumeBar.addClass("vjs-slider-active"),t.addClass("vjs-slider-active"),t.trigger("slideractive")}),t.on(t.volumeBar,["blur","sliderinactive"],function(){t.volumeBar.removeClass("vjs-slider-active"),t.removeClass("vjs-slider-active"),t.trigger("sliderinactive")}),t}var o=T.prototype;return o.createEl=function(){var e="vjs-volume-horizontal";return this.options_.vertical&&(e="vjs-volume-vertical"),v.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+e})},o.handleMouseDown=function(e){var t=this.el_.ownerDocument;this.on(t,"mousemove",this.throttledHandleMouseMove),this.on(t,"touchmove",this.throttledHandleMouseMove),this.on(t,"mouseup",this.handleMouseUpHandler_),this.on(t,"touchend",this.handleMouseUpHandler_)},o.handleMouseUp=function(e){var t=this.el_.ownerDocument;this.off(t,"mousemove",this.throttledHandleMouseMove),this.off(t,"touchmove",this.throttledHandleMouseMove),this.off(t,"mouseup",this.handleMouseUpHandler_),this.off(t,"touchend",this.handleMouseUpHandler_)},o.handleMouseMove=function(e){this.volumeBar.handleMouseMove(e)},T}(ae);Gi.prototype.options_={children:["volumeBar"]},ae.registerComponent("VolumeControl",Gi);var _a=function(T,o){o.tech_&&!o.tech_.featuresMuteControl&&T.addClass("vjs-hidden"),T.on(o,"loadstart",function(){o.tech_.featuresMuteControl?T.removeClass("vjs-hidden"):T.addClass("vjs-hidden")})},Vi=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,_a(j(t),r),t.on(r,["loadstart","volumechange"],function(b){return t.update(b)}),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-mute-control "+v.prototype.buildCSSClass.call(this)},o.handleClick=function(e){var t=this.player_.volume(),b=this.player_.lastVolume_();if(t===0){var U=b<.1?.1:b;this.player_.volume(U),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},o.update=function(e){this.updateIcon_(),this.updateControlText_()},o.updateIcon_=function(){var e=this.player_.volume(),t=3;_e&&this.player_.tech_&&this.player_.tech_.el_&&this.player_.muted(this.player_.tech_.el_.muted),e===0||this.player_.muted()?t=0:e<.33?t=1:e<.67&&(t=2);for(var b=0;b<4;b++)Ke(this.el_,"vjs-vol-"+b);De(this.el_,"vjs-vol-"+t)},o.updateControlText_=function(){var e=this.player_.muted()||this.player_.volume()===0,t=e?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},T}(at);Vi.prototype.controlText_="Mute",ae.registerComponent("MuteToggle",Vi);var zi=function(v){w(T,v);function T(r,e){var t;return e===void 0&&(e={}),typeof e.inline!="undefined"?e.inline=e.inline:e.inline=!0,(typeof e.volumeControl=="undefined"||x(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline),t=v.call(this,r,e)||this,t.handleKeyPressHandler_=function(b){return t.handleKeyPress(b)},t.on(r,["loadstart"],function(b){return t.volumePanelState_(b)}),t.on(t.muteToggle,"keyup",function(b){return t.handleKeyPress(b)}),t.on(t.volumeControl,"keyup",function(b){return t.handleVolumeControlKeyUp(b)}),t.on("keydown",function(b){return t.handleKeyPress(b)}),t.on("mouseover",function(b){return t.handleMouseOver(b)}),t.on("mouseout",function(b){return t.handleMouseOut(b)}),t.on(t.volumeControl,["slideractive"],t.sliderActive_),t.on(t.volumeControl,["sliderinactive"],t.sliderInactive_),t}var o=T.prototype;return o.sliderActive_=function(){this.addClass("vjs-slider-active")},o.sliderInactive_=function(){this.removeClass("vjs-slider-active")},o.volumePanelState_=function(){this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden"),this.volumeControl.hasClass("vjs-hidden")&&!this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")},o.createEl=function(){var e="vjs-volume-panel-horizontal";return this.options_.inline||(e="vjs-volume-panel-vertical"),v.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+e})},o.dispose=function(){this.handleMouseOut(),v.prototype.dispose.call(this)},o.handleVolumeControlKeyUp=function(e){D.isEventKey(e,"Esc")&&this.muteToggle.focus()},o.handleMouseOver=function(e){this.addClass("vjs-hover"),Ze(R,"keyup",this.handleKeyPressHandler_)},o.handleMouseOut=function(e){this.removeClass("vjs-hover"),We(R,"keyup",this.handleKeyPressHandler_)},o.handleKeyPress=function(e){D.isEventKey(e,"Esc")&&this.handleMouseOut()},T}(ae);zi.prototype.options_={children:["muteToggle","volumeControl"]},ae.registerComponent("VolumePanel",zi);var Hr=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,e&&(t.menuButton_=e.menuButton),t.focusedChild_=-1,t.on("keydown",function(b){return t.handleKeyDown(b)}),t.boundHandleBlur_=function(b){return t.handleBlur(b)},t.boundHandleTapClick_=function(b){return t.handleTapClick(b)},t}var o=T.prototype;return o.addEventListenerForItem=function(e){e instanceof ae&&(this.on(e,"blur",this.boundHandleBlur_),this.on(e,["tap","click"],this.boundHandleTapClick_))},o.removeEventListenerForItem=function(e){e instanceof ae&&(this.off(e,"blur",this.boundHandleBlur_),this.off(e,["tap","click"],this.boundHandleTapClick_))},o.removeChild=function(e){typeof e=="string"&&(e=this.getChild(e)),this.removeEventListenerForItem(e),v.prototype.removeChild.call(this,e)},o.addItem=function(e){var t=this.addChild(e);t&&this.addEventListenerForItem(t)},o.createEl=function(){var e=this.options_.contentElType||"ul";this.contentEl_=ce(e,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var t=v.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return t.appendChild(this.contentEl_),Ze(t,"click",function(b){b.preventDefault(),b.stopImmediatePropagation()}),t},o.dispose=function(){this.contentEl_=null,this.boundHandleBlur_=null,this.boundHandleTapClick_=null,v.prototype.dispose.call(this)},o.handleBlur=function(e){var t=e.relatedTarget||R.activeElement;if(!this.children().some(function(U){return U.el()===t})){var b=this.menuButton_;b&&b.buttonPressed_&&t!==b.el().firstChild&&b.unpressButton()}},o.handleTapClick=function(e){if(this.menuButton_){this.menuButton_.unpressButton();var t=this.children();if(!Array.isArray(t))return;var b=t.filter(function(U){return U.el()===e.target})[0];if(!b)return;b.name()!=="CaptionSettingsMenuItem"&&this.menuButton_.focus()}},o.handleKeyDown=function(e){D.isEventKey(e,"Left")||D.isEventKey(e,"Down")?(e.preventDefault(),e.stopPropagation(),this.stepForward()):(D.isEventKey(e,"Right")||D.isEventKey(e,"Up"))&&(e.preventDefault(),e.stopPropagation(),this.stepBack())},o.stepForward=function(){var e=0;this.focusedChild_!==void 0&&(e=this.focusedChild_+1),this.focus(e)},o.stepBack=function(){var e=0;this.focusedChild_!==void 0&&(e=this.focusedChild_-1),this.focus(e)},o.focus=function(e){e===void 0&&(e=0);var t=this.children().slice(),b=t.length&&t[0].hasClass("vjs-menu-title");b&&t.shift(),t.length>0&&(e<0?e=0:e>=t.length&&(e=t.length-1),this.focusedChild_=e,t[e].el_.focus())},T}(ae);ae.registerComponent("Menu",Hr);var Wr=function(v){w(T,v);function T(r,e){var t;e===void 0&&(e={}),t=v.call(this,r,e)||this,t.menuButton_=new at(r,e),t.menuButton_.controlText(t.controlText_),t.menuButton_.el_.setAttribute("aria-haspopup","true");var b=at.prototype.buildCSSClass();t.menuButton_.el_.className=t.buildCSSClass()+" "+b,t.menuButton_.removeClass("vjs-control"),t.addChild(t.menuButton_),t.update(),t.enabled_=!0;var U=function(Y){return t.handleClick(Y)};return t.handleMenuKeyUp_=function(z){return t.handleMenuKeyUp(z)},t.on(t.menuButton_,"tap",U),t.on(t.menuButton_,"click",U),t.on(t.menuButton_,"keydown",function(z){return t.handleKeyDown(z)}),t.on(t.menuButton_,"mouseenter",function(){t.addClass("vjs-hover"),t.menu.show(),Ze(R,"keyup",t.handleMenuKeyUp_)}),t.on("mouseleave",function(z){return t.handleMouseLeave(z)}),t.on("keydown",function(z){return t.handleSubmenuKeyDown(z)}),t}var o=T.prototype;return o.update=function(){var e=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=e,this.addChild(e),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},o.createMenu=function(){var e=new Hr(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var t=ce("li",{className:"vjs-menu-title",innerHTML:Be(this.options_.title),tabIndex:-1});this.hideThreshold_+=1;var b=new ae(this.player_,{el:t});e.addItem(b)}if(this.items=this.createItems(),this.items)for(var U=0;U<this.items.length;U++)e.addItem(this.items[U]);return e},o.createItems=function(){},o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},o.buildWrapperCSSClass=function(){var e="vjs-menu-button";this.options_.inline===!0?e+="-inline":e+="-popup";var t=at.prototype.buildCSSClass();return"vjs-menu-button "+e+" "+t+" "+v.prototype.buildCSSClass.call(this)},o.buildCSSClass=function(){var e="vjs-menu-button";return this.options_.inline===!0?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+v.prototype.buildCSSClass.call(this)},o.controlText=function(e,t){return t===void 0&&(t=this.menuButton_.el()),this.menuButton_.controlText(e,t)},o.dispose=function(){this.handleMouseLeave(),v.prototype.dispose.call(this)},o.handleClick=function(e){this.buttonPressed_?this.unpressButton():this.pressButton()},o.handleMouseLeave=function(e){this.removeClass("vjs-hover"),We(R,"keyup",this.handleMenuKeyUp_)},o.focus=function(){this.menuButton_.focus()},o.blur=function(){this.menuButton_.blur()},o.handleKeyDown=function(e){D.isEventKey(e,"Esc")||D.isEventKey(e,"Tab")?(this.buttonPressed_&&this.unpressButton(),D.isEventKey(e,"Tab")||(e.preventDefault(),this.menuButton_.focus())):(D.isEventKey(e,"Up")||D.isEventKey(e,"Down"))&&(this.buttonPressed_||(e.preventDefault(),this.pressButton()))},o.handleMenuKeyUp=function(e){(D.isEventKey(e,"Esc")||D.isEventKey(e,"Tab"))&&this.removeClass("vjs-hover")},o.handleSubmenuKeyPress=function(e){this.handleSubmenuKeyDown(e)},o.handleSubmenuKeyDown=function(e){(D.isEventKey(e,"Esc")||D.isEventKey(e,"Tab"))&&(this.buttonPressed_&&this.unpressButton(),D.isEventKey(e,"Tab")||(e.preventDefault(),this.menuButton_.focus()))},o.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.show(),this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),_e&&pe())return;this.menu.focus()}},o.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menu.hide(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},o.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},o.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},T}(ae);ae.registerComponent("MenuButton",Wr);var Gr=function(v){w(T,v);function T(o,r){var e,t=r.tracks;if(e=v.call(this,o,r)||this,e.items.length<=1&&e.hide(),!t)return j(e);var b=Ie(j(e),e.update);return t.addEventListener("removetrack",b),t.addEventListener("addtrack",b),t.addEventListener("labelchange",b),e.player_.on("ready",b),e.player_.on("dispose",function(){t.removeEventListener("removetrack",b),t.removeEventListener("addtrack",b),t.removeEventListener("labelchange",b)}),e}return T}(Wr);ae.registerComponent("TrackButton",Gr);var Sa=["Tab","Esc","Up","Down","Right","Left"],jt=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.selectable=e.selectable,t.isSelected_=e.selected||!1,t.multiSelectable=e.multiSelectable,t.selected(t.isSelected_),t.selectable?t.multiSelectable?t.el_.setAttribute("role","menuitemcheckbox"):t.el_.setAttribute("role","menuitemradio"):t.el_.setAttribute("role","menuitem"),t}var o=T.prototype;return o.createEl=function(e,t,b){return this.nonIconControl=!0,v.prototype.createEl.call(this,"li",S({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},t),b)},o.handleKeyDown=function(e){Sa.some(function(t){return D.isEventKey(e,t)})||v.prototype.handleKeyDown.call(this,e)},o.handleClick=function(e){this.selected(!0)},o.selected=function(e){this.selectable&&(e?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},T}(ir);ae.registerComponent("MenuItem",jt);var Kt=function(v){w(T,v);function T(r,e){var t,b=e.track,U=r.textTracks();e.label=b.label||b.language||"Unknown",e.selected=b.mode==="showing",t=v.call(this,r,e)||this,t.track=b,t.kinds=(e.kinds||[e.kind||t.track.kind]).filter(Boolean);var z=function(){for(var $=arguments.length,se=new Array($),de=0;de<$;de++)se[de]=arguments[de];t.handleTracksChange.apply(j(t),se)},Y=function(){for(var $=arguments.length,se=new Array($),de=0;de<$;de++)se[de]=arguments[de];t.handleSelectedLanguageChange.apply(j(t),se)};if(r.on(["loadstart","texttrackchange"],z),U.addEventListener("change",z),U.addEventListener("selectedlanguagechange",Y),t.on("dispose",function(){r.off(["loadstart","texttrackchange"],z),U.removeEventListener("change",z),U.removeEventListener("selectedlanguagechange",Y)}),U.onchange===void 0){var Q;t.on(["tap","click"],function(){if(typeof F.Event!="object")try{Q=new F.Event("change")}catch(te){}Q||(Q=R.createEvent("Event"),Q.initEvent("change",!0,!0)),U.dispatchEvent(Q)})}return t.handleTracksChange(),t}var o=T.prototype;return o.handleClick=function(e){var t=this.track,b=this.player_.textTracks();if(v.prototype.handleClick.call(this,e),!!b)for(var U=0;U<b.length;U++){var z=b[U];this.kinds.indexOf(z.kind)!==-1&&(z===t?z.mode!=="showing"&&(z.mode="showing"):z.mode!=="disabled"&&(z.mode="disabled"))}},o.handleTracksChange=function(e){var t=this.track.mode==="showing";t!==this.isSelected_&&this.selected(t)},o.handleSelectedLanguageChange=function(e){if(this.track.mode==="showing"){var t=this.player_.cache_.selectedLanguage;if(t&&t.enabled&&t.language===this.track.language&&t.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},o.dispose=function(){this.track=null,v.prototype.dispose.call(this)},T}(jt);ae.registerComponent("TextTrackMenuItem",Kt);var Yi=function(v){w(T,v);function T(r,e){return e.track={player:r,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,e.multiSelectable=!1,v.call(this,r,e)||this}var o=T.prototype;return o.handleTracksChange=function(e){for(var t=this.player().textTracks(),b=!0,U=0,z=t.length;U<z;U++){var Y=t[U];if(this.options_.kinds.indexOf(Y.kind)>-1&&Y.mode==="showing"){b=!1;break}}b!==this.isSelected_&&this.selected(b)},o.handleSelectedLanguageChange=function(e){for(var t=this.player().textTracks(),b=!0,U=0,z=t.length;U<z;U++){var Y=t[U];if(["captions","descriptions","subtitles"].indexOf(Y.kind)>-1&&Y.mode==="showing"){b=!1;break}}b&&(this.player_.cache_.selectedLanguage={enabled:!1})},T}(Kt);ae.registerComponent("OffTextTrackMenuItem",Yi);var Mt=function(v){w(T,v);function T(r,e){return e===void 0&&(e={}),e.tracks=r.textTracks(),v.call(this,r,e)||this}var o=T.prototype;return o.createItems=function(e,t){e===void 0&&(e=[]),t===void 0&&(t=Kt);var b;this.label_&&(b=this.label_+" off"),e.push(new Yi(this.player_,{kinds:this.kinds_,kind:this.kind_,label:b})),this.hideThreshold_+=1;var U=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var z=0;z<U.length;z++){var Y=U[z];if(this.kinds_.indexOf(Y.kind)>-1){var Q=new t(this.player_,{track:Y,kinds:this.kinds_,kind:this.kind_,selectable:!0,multiSelectable:!1});Q.addClass("vjs-"+Y.kind+"-menu-item"),e.push(Q)}}return e},T}(Gr);ae.registerComponent("TextTrackButton",Mt);var Xi=function(v){w(T,v);function T(r,e){var t,b=e.track,U=e.cue,z=r.currentTime();return e.selectable=!0,e.multiSelectable=!1,e.label=U.text,e.selected=U.startTime<=z&&z<U.endTime,t=v.call(this,r,e)||this,t.track=b,t.cue=U,b.addEventListener("cuechange",Ie(j(t),t.update)),t}var o=T.prototype;return o.handleClick=function(e){v.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.update=function(e){var t=this.cue,b=this.player_.currentTime();this.selected(t.startTime<=b&&b<t.endTime)},T}(jt);ae.registerComponent("ChaptersTrackMenuItem",Xi);var Vr=function(v){w(T,v);function T(r,e,t){return v.call(this,r,e,t)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-chapters-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-chapters-button "+v.prototype.buildWrapperCSSClass.call(this)},o.update=function(e){(!this.track_||e&&(e.type==="addtrack"||e.type==="removetrack"))&&this.setTrack(this.findChaptersTrack()),v.prototype.update.call(this)},o.setTrack=function(e){if(this.track_!==e){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var t=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);t&&t.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=e,this.track_){this.track_.mode="hidden";var b=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);b&&b.addEventListener("load",this.updateHandler_)}}},o.findChaptersTrack=function(){for(var e=this.player_.textTracks()||[],t=e.length-1;t>=0;t--){var b=e[t];if(b.kind===this.kind_)return b}},o.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(Be(this.kind_))},o.createMenu=function(){return this.options_.title=this.getMenuCaption(),v.prototype.createMenu.call(this)},o.createItems=function(){var e=[];if(!this.track_)return e;var t=this.track_.cues;if(!t)return e;for(var b=0,U=t.length;b<U;b++){var z=t[b],Y=new Xi(this.player_,{track:this.track_,cue:z});e.push(Y)}return e},T}(Mt);Vr.prototype.kind_="chapters",Vr.prototype.controlText_="Chapters",ae.registerComponent("ChaptersButton",Vr);var zr=function(v){w(T,v);function T(r,e,t){var b;b=v.call(this,r,e,t)||this;var U=r.textTracks(),z=Ie(j(b),b.handleTracksChange);return U.addEventListener("change",z),b.on("dispose",function(){U.removeEventListener("change",z)}),b}var o=T.prototype;return o.handleTracksChange=function(e){for(var t=this.player().textTracks(),b=!1,U=0,z=t.length;U<z;U++){var Y=t[U];if(Y.kind!==this.kind_&&Y.mode==="showing"){b=!0;break}}b?this.disable():this.enable()},o.buildCSSClass=function(){return"vjs-descriptions-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+v.prototype.buildWrapperCSSClass.call(this)},T}(Mt);zr.prototype.kind_="descriptions",zr.prototype.controlText_="Descriptions",ae.registerComponent("DescriptionsButton",zr);var Yr=function(v){w(T,v);function T(r,e,t){return v.call(this,r,e,t)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-subtitles-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+v.prototype.buildWrapperCSSClass.call(this)},T}(Mt);Yr.prototype.kind_="subtitles",Yr.prototype.controlText_="Subtitles",ae.registerComponent("SubtitlesButton",Yr);var Xr=function(v){w(T,v);function T(r,e){var t;return e.track={player:r,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem",t=v.call(this,r,e)||this,t.addClass("vjs-texttrack-settings"),t.controlText(", opens "+e.kind+" settings dialog"),t}var o=T.prototype;return o.handleClick=function(e){this.player().getChild("textTrackSettings").open()},T}(Kt);ae.registerComponent("CaptionSettingsMenuItem",Xr);var $r=function(v){w(T,v);function T(r,e,t){return v.call(this,r,e,t)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-captions-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-captions-button "+v.prototype.buildWrapperCSSClass.call(this)},o.createItems=function(){var e=[];return!(this.player().tech_&&this.player().tech_.featuresNativeTextTracks)&&this.player().getChild("textTrackSettings")&&(e.push(new Xr(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),v.prototype.createItems.call(this,e)},T}(Mt);$r.prototype.kind_="captions",$r.prototype.controlText_="Captions",ae.registerComponent("CaptionsButton",$r);var $i=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(e,t,b){var U='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);this.options_.track.kind==="captions"&&(U+=`
        <span aria-hidden="true" class="vjs-icon-placeholder"></span>
        <span class="vjs-control-text"> `+this.localize("Captions")+`</span>
      `),U+="</span>";var z=v.prototype.createEl.call(this,e,S({innerHTML:U},t),b);return z},T}(Kt);ae.registerComponent("SubsCapsMenuItem",$i);var Qr=function(v){w(T,v);function T(r,e){var t;return e===void 0&&(e={}),t=v.call(this,r,e)||this,t.label_="subtitles",["en","en-us","en-ca","fr-ca"].indexOf(t.player_.language_)>-1&&(t.label_="captions"),t.menuButton_.controlText(Be(t.label_)),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-subs-caps-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+v.prototype.buildWrapperCSSClass.call(this)},o.createItems=function(){var e=[];return!(this.player().tech_&&this.player().tech_.featuresNativeTextTracks)&&this.player().getChild("textTrackSettings")&&(e.push(new Xr(this.player_,{kind:this.label_})),this.hideThreshold_+=1),e=v.prototype.createItems.call(this,e,$i),e},T}(Mt);Qr.prototype.kinds_=["captions","subtitles"],Qr.prototype.controlText_="Subtitles",ae.registerComponent("SubsCapsButton",Qr);var Qi=function(v){w(T,v);function T(r,e){var t,b=e.track,U=r.audioTracks();e.label=b.label||b.language||"Unknown",e.selected=b.enabled,t=v.call(this,r,e)||this,t.track=b,t.addClass("vjs-"+b.kind+"-menu-item");var z=function(){for(var Q=arguments.length,te=new Array(Q),$=0;$<Q;$++)te[$]=arguments[$];t.handleTracksChange.apply(j(t),te)};return U.addEventListener("change",z),t.on("dispose",function(){U.removeEventListener("change",z)}),t}var o=T.prototype;return o.createEl=function(e,t,b){var U='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);this.options_.track.kind==="main-desc"&&(U+=`
        <span aria-hidden="true" class="vjs-icon-placeholder"></span>
        <span class="vjs-control-text"> `+this.localize("Descriptions")+`</span>
      `),U+="</span>";var z=v.prototype.createEl.call(this,e,S({innerHTML:U},t),b);return z},o.handleClick=function(e){v.prototype.handleClick.call(this,e),this.track.enabled=!0},o.handleTracksChange=function(e){this.selected(this.track.enabled)},T}(jt);ae.registerComponent("AudioTrackMenuItem",Qi);var Ji=function(v){w(T,v);function T(r,e){return e===void 0&&(e={}),e.tracks=r.audioTracks(),v.call(this,r,e)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-audio-button "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-audio-button "+v.prototype.buildWrapperCSSClass.call(this)},o.createItems=function(e){e===void 0&&(e=[]),this.hideThreshold_=1;for(var t=this.player_.audioTracks(),b=0;b<t.length;b++){var U=t[b];e.push(new Qi(this.player_,{track:U,selectable:!0,multiSelectable:!1}))}return e},T}(Gr);Ji.prototype.controlText_="Audio Track",ae.registerComponent("AudioTrackButton",Ji);var Jr=function(v){w(T,v);function T(r,e){var t,b=e.rate,U=parseFloat(b,10);return e.label=b,e.selected=U===1,e.selectable=!0,e.multiSelectable=!1,t=v.call(this,r,e)||this,t.label=b,t.rate=U,t.on(r,"ratechange",function(z){return t.update(z)}),t}var o=T.prototype;return o.handleClick=function(e){v.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},o.update=function(e){this.selected(this.player().playbackRate()===this.rate)},T}(jt);Jr.prototype.contentElType="button",ae.registerComponent("PlaybackRateMenuItem",Jr);var Zi=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.updateVisibility(),t.updateLabel(),t.on(r,"loadstart",function(b){return t.updateVisibility(b)}),t.on(r,"ratechange",function(b){return t.updateLabel(b)}),t}var o=T.prototype;return o.createEl=function(){var e=v.prototype.createEl.call(this);return this.labelEl_=ce("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),e.appendChild(this.labelEl_),e},o.dispose=function(){this.labelEl_=null,v.prototype.dispose.call(this)},o.buildCSSClass=function(){return"vjs-playback-rate "+v.prototype.buildCSSClass.call(this)},o.buildWrapperCSSClass=function(){return"vjs-playback-rate "+v.prototype.buildWrapperCSSClass.call(this)},o.createMenu=function(){var e=new Hr(this.player()),t=this.playbackRates();if(t)for(var b=t.length-1;b>=0;b--)e.addChild(new Jr(this.player(),{rate:t[b]+"x"}));return e},o.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},o.handleClick=function(e){for(var t=this.player().playbackRate(),b=this.playbackRates(),U=b[0],z=0;z<b.length;z++)if(b[z]>t){U=b[z];break}this.player().playbackRate(U)},o.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},o.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},o.updateVisibility=function(e){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},o.updateLabel=function(e){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},T}(Wr);Zi.prototype.controlText_="Playback Rate",ae.registerComponent("PlaybackRateMenuButton",Zi);var qi=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-spacer "+v.prototype.buildCSSClass.call(this)},o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},T}(ae);ae.registerComponent("Spacer",qi);var ba=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-custom-control-spacer "+v.prototype.buildCSSClass.call(this)},o.createEl=function(){var e=v.prototype.createEl.call(this,{className:this.buildCSSClass()});return e.innerHTML="\xA0",e},T}(qi);ae.registerComponent("CustomControlSpacer",ba);var or=function(v){w(T,v);function T(){return v.apply(this,arguments)||this}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},T}(ae);or.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","seekToLive","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},"exitPictureInPicture"in R&&or.prototype.options_.children.splice(or.prototype.options_.children.length-1,0,"pictureInPictureToggle"),ae.registerComponent("ControlBar",or);var en=function(v){w(T,v);function T(r,e){var t;return t=v.call(this,r,e)||this,t.on(r,"error",function(b){return t.open(b)}),t}var o=T.prototype;return o.buildCSSClass=function(){return"vjs-error-display "+v.prototype.buildCSSClass.call(this)},o.content=function(){var e=this.player().error();return e?this.localize(e.message):""},T}(Lt);en.prototype.options_=k({},Lt.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),ae.registerComponent("ErrorDisplay",en);var Zr="vjs-text-track-settings",tn=["#000","Black"],rn=["#00F","Blue"],nn=["#0FF","Cyan"],an=["#0F0","Green"],sn=["#F0F","Magenta"],on=["#F00","Red"],ln=["#FFF","White"],un=["#FF0","Yellow"],qr=["1","Opaque"],ei=["0.5","Semi-Transparent"],cn=["0","Transparent"],_t={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[tn,ln,on,an,rn,un,sn,nn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[qr,ei,cn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[ln,tn,on,an,rn,un,sn,nn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(T){return T==="1.00"?null:Number(T)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[qr,ei]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[cn,ei,qr]}};_t.windowColor.options=_t.backgroundColor.options;function hn(v,T){if(T&&(v=T(v)),v&&v!=="none")return v}function Ca(v,T){var o=v.options[v.options.selectedIndex].value;return hn(o,T)}function Aa(v,T,o){if(!!T){for(var r=0;r<v.options.length;r++)if(hn(v.options[r].value,o)===T){v.selectedIndex=r;break}}}var La=function(v){w(T,v);function T(r,e){var t;return e.temporary=!1,t=v.call(this,r,e)||this,t.updateDisplay=t.updateDisplay.bind(j(t)),t.fill(),t.hasBeenOpened_=t.hasBeenFilled_=!0,t.endDialog=ce("p",{className:"vjs-control-text",textContent:t.localize("End of dialog window.")}),t.el().appendChild(t.endDialog),t.setDefaults(),e.persistTextTrackSettings===void 0&&(t.options_.persistTextTrackSettings=t.options_.playerOptions.persistTextTrackSettings),t.on(t.$(".vjs-done-button"),"click",function(){t.saveSettings(),t.close()}),t.on(t.$(".vjs-default-button"),"click",function(){t.setDefaults(),t.updateDisplay()}),n(_t,function(b){t.on(t.$(b.selector),"change",t.updateDisplay)}),t.options_.persistTextTrackSettings&&t.restoreSettings(),t}var o=T.prototype;return o.dispose=function(){this.endDialog=null,v.prototype.dispose.call(this)},o.createElSelect_=function(e,t,b){var U=this;t===void 0&&(t=""),b===void 0&&(b="label");var z=_t[e],Y=z.id.replace("%s",this.id_),Q=[t,Y].join(" ").trim();return["<"+b+' id="'+Y+'" class="'+(b==="label"?"vjs-label":"")+'">',this.localize(z.label),"</"+b+">",'<select aria-labelledby="'+Q+'">'].concat(z.options.map(function(te){var $=Y+"-"+te[1].replace(/\W+/g,"");return['<option id="'+$+'" value="'+te[0]+'" ','aria-labelledby="'+Q+" "+$+'">',U.localize(te[1]),"</option>"].join("")})).concat("</select>").join("")},o.createElFgColor_=function(){var e="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",e),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",e),"</span>","</fieldset>"].join("")},o.createElBgColor_=function(){var e="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",e),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",e),"</span>","</fieldset>"].join("")},o.createElWinColor_=function(){var e="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",e),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",e),"</span>","</fieldset>"].join("")},o.createElColors_=function(){return ce("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},o.createElFont_=function(){return ce("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},o.createElControls_=function(){var e=this.localize("restore all settings to the default values");return ce("div",{className:"vjs-track-settings-controls",innerHTML:['<button type="button" class="vjs-default-button" title="'+e+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+e+"</span>","</button>",'<button type="button" class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},o.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},o.label=function(){return this.localize("Caption Settings Dialog")},o.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},o.buildCSSClass=function(){return v.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},o.getValues=function(){var e=this;return E(_t,function(t,b,U){var z=Ca(e.$(b.selector),b.parser);return z!==void 0&&(t[U]=z),t},{})},o.setValues=function(e){var t=this;n(_t,function(b,U){Aa(t.$(b.selector),e[U],b.parser)})},o.setDefaults=function(){var e=this;n(_t,function(t){var b=t.hasOwnProperty("default")?t.default:0;e.$(t.selector).selectedIndex=b})},o.restoreSettings=function(){var e;try{e=JSON.parse(F.localStorage.getItem(Zr))}catch(t){_.warn(t)}e&&this.setValues(e)},o.saveSettings=function(){if(!!this.options_.persistTextTrackSettings){var e=this.getValues();try{Object.keys(e).length?F.localStorage.setItem(Zr,JSON.stringify(e)):F.localStorage.removeItem(Zr)}catch(t){_.warn(t)}}},o.updateDisplay=function(){var e=this.player_.getChild("textTrackDisplay");e&&e.updateDisplay()},o.conditionalBlur_=function(){this.previouslyActiveEl_=null;var e=this.player_.controlBar,t=e&&e.subsCapsButton,b=e&&e.captionsButton;t?t.focus():b&&b.focus()},T}(Lt);ae.registerComponent("TextTrackSettings",La);var Da=function(v){w(T,v);function T(r,e){var t,b=e.ResizeObserver||F.ResizeObserver;e.ResizeObserver===null&&(b=!1);var U=xe({createEl:!b,reportTouchActivity:!1},e);return t=v.call(this,r,U)||this,t.ResizeObserver=e.ResizeObserver||F.ResizeObserver,t.loadListener_=null,t.resizeObserver_=null,t.debouncedHandler_=An(function(){t.resizeHandler()},100,!1,j(t)),b?(t.resizeObserver_=new t.ResizeObserver(t.debouncedHandler_),t.resizeObserver_.observe(r.el())):(t.loadListener_=function(){if(!(!t.el_||!t.el_.contentWindow)){var z=t.debouncedHandler_,Y=t.unloadListener_=function(){We(this,"resize",z),We(this,"unload",Y),Y=null};Ze(t.el_.contentWindow,"unload",Y),Ze(t.el_.contentWindow,"resize",z)}},t.one("load",t.loadListener_)),t}var o=T.prototype;return o.createEl=function(){return v.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager",tabIndex:-1},{"aria-hidden":"true"})},o.resizeHandler=function(){!this.player_||!this.player_.trigger||this.player_.trigger("playerresize")},o.dispose=function(){this.debouncedHandler_&&this.debouncedHandler_.cancel(),this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.loadListener_&&this.off("load",this.loadListener_),this.el_&&this.el_.contentWindow&&this.unloadListener_&&this.unloadListener_.call(this.el_.contentWindow),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null,v.prototype.dispose.call(this)},T}(ae);ae.registerComponent("ResizeManager",Da);var Pa={trackingThreshold:30,liveTolerance:15},Oa=function(v){w(T,v);function T(r,e){var t,b=xe(Pa,e,{createEl:!1});return t=v.call(this,r,b)||this,t.handleVisibilityChange_=function(U){return t.handleVisibilityChange(U)},t.trackLiveHandler_=function(){return t.trackLive_()},t.handlePlay_=function(U){return t.handlePlay(U)},t.handleFirstTimeupdate_=function(U){return t.handleFirstTimeupdate(U)},t.handleSeeked_=function(U){return t.handleSeeked(U)},t.seekToLiveEdge_=function(U){return t.seekToLiveEdge(U)},t.reset_(),t.on(t.player_,"durationchange",function(U){return t.handleDurationchange(U)}),t.one(t.player_,"canplay",function(){return t.toggleTracking()}),le&&"hidden"in R&&"visibilityState"in R&&t.on(R,"visibilitychange",t.handleVisibilityChange_),t}var o=T.prototype;return o.handleVisibilityChange=function(){this.player_.duration()===Infinity&&(R.hidden?this.stopTracking():this.startTracking())},o.trackLive_=function(){var e=this.player_.seekable();if(!(!e||!e.length)){var t=Number(F.performance.now().toFixed(4)),b=this.lastTime_===-1?0:(t-this.lastTime_)/1e3;this.lastTime_=t,this.pastSeekEnd_=this.pastSeekEnd()+b;var U=this.liveCurrentTime(),z=this.player_.currentTime(),Y=this.player_.paused()||this.seekedBehindLive_||Math.abs(U-z)>this.options_.liveTolerance;(!this.timeupdateSeen_||U===Infinity)&&(Y=!1),Y!==this.behindLiveEdge_&&(this.behindLiveEdge_=Y,this.trigger("liveedgechange"))}},o.handleDurationchange=function(){this.toggleTracking()},o.toggleTracking=function(){this.player_.duration()===Infinity&&this.liveWindow()>=this.options_.trackingThreshold?(this.player_.options_.liveui&&this.player_.addClass("vjs-liveui"),this.startTracking()):(this.player_.removeClass("vjs-liveui"),this.stopTracking())},o.startTracking=function(){this.isTracking()||(this.timeupdateSeen_||(this.timeupdateSeen_=this.player_.hasStarted()),this.trackingInterval_=this.setInterval(this.trackLiveHandler_,nt),this.trackLive_(),this.on(this.player_,["play","pause"],this.trackLiveHandler_),this.timeupdateSeen_?this.on(this.player_,"seeked",this.handleSeeked_):(this.one(this.player_,"play",this.handlePlay_),this.one(this.player_,"timeupdate",this.handleFirstTimeupdate_)))},o.handleFirstTimeupdate=function(){this.timeupdateSeen_=!0,this.on(this.player_,"seeked",this.handleSeeked_)},o.handleSeeked=function(){var e=Math.abs(this.liveCurrentTime()-this.player_.currentTime());this.seekedBehindLive_=this.skipNextSeeked_?!1:e>2,this.skipNextSeeked_=!1,this.trackLive_()},o.handlePlay=function(){this.one(this.player_,"timeupdate",this.seekToLiveEdge_)},o.reset_=function(){this.lastTime_=-1,this.pastSeekEnd_=0,this.lastSeekEnd_=-1,this.behindLiveEdge_=!0,this.timeupdateSeen_=!1,this.seekedBehindLive_=!1,this.skipNextSeeked_=!1,this.clearInterval(this.trackingInterval_),this.trackingInterval_=null,this.off(this.player_,["play","pause"],this.trackLiveHandler_),this.off(this.player_,"seeked",this.handleSeeked_),this.off(this.player_,"play",this.handlePlay_),this.off(this.player_,"timeupdate",this.handleFirstTimeupdate_),this.off(this.player_,"timeupdate",this.seekToLiveEdge_)},o.stopTracking=function(){!this.isTracking()||(this.reset_(),this.trigger("liveedgechange"))},o.seekableEnd=function(){for(var e=this.player_.seekable(),t=[],b=e?e.length:0;b--;)t.push(e.end(b));return t.length?t.sort()[t.length-1]:Infinity},o.seekableStart=function(){for(var e=this.player_.seekable(),t=[],b=e?e.length:0;b--;)t.push(e.start(b));return t.length?t.sort()[0]:0},o.liveWindow=function(){var e=this.liveCurrentTime();return e===Infinity?0:e-this.seekableStart()},o.isLive=function(){return this.isTracking()},o.atLiveEdge=function(){return!this.behindLiveEdge()},o.liveCurrentTime=function(){return this.pastSeekEnd()+this.seekableEnd()},o.pastSeekEnd=function(){var e=this.seekableEnd();return this.lastSeekEnd_!==-1&&e!==this.lastSeekEnd_&&(this.pastSeekEnd_=0),this.lastSeekEnd_=e,this.pastSeekEnd_},o.behindLiveEdge=function(){return this.behindLiveEdge_},o.isTracking=function(){return typeof this.trackingInterval_=="number"},o.seekToLiveEdge=function(){this.seekedBehindLive_=!1,!this.atLiveEdge()&&(this.skipNextSeeked_=!0,this.player_.currentTime(this.liveCurrentTime()))},o.dispose=function(){this.off(R,"visibilitychange",this.handleVisibilityChange_),this.stopTracking(),v.prototype.dispose.call(this)},T}(ae);ae.registerComponent("LiveTracker",Oa);var ti=function(T){var o=T.el();if(o.hasAttribute("src"))return T.triggerSourceset(o.src),!0;var r=T.$$("source"),e=[],t="";if(!r.length)return!1;for(var b=0;b<r.length;b++){var U=r[b].src;U&&e.indexOf(U)===-1&&e.push(U)}return e.length?(e.length===1&&(t=e[0]),T.triggerSourceset(t),!0):!1},Ia=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(T){var o=R.createElement(this.nodeName.toLowerCase());o.innerHTML=T;for(var r=R.createDocumentFragment();o.childNodes.length;)r.appendChild(o.childNodes[0]);return this.innerText="",F.Element.prototype.appendChild.call(this,r),this.innerHTML}}),fn=function(T,o){for(var r={},e=0;e<T.length&&(r=Object.getOwnPropertyDescriptor(T[e],o),!(r&&r.set&&r.get));e++);return r.enumerable=!0,r.configurable=!0,r},Ra=function(T){return fn([T.el(),F.HTMLMediaElement.prototype,F.Element.prototype,Ia],"innerHTML")},dn=function(T){var o=T.el();if(!o.resetSourceWatch_){var r={},e=Ra(T),t=function(U){return function(){for(var z=arguments.length,Y=new Array(z),Q=0;Q<z;Q++)Y[Q]=arguments[Q];var te=U.apply(o,Y);return ti(T),te}};["append","appendChild","insertAdjacentHTML"].forEach(function(b){!o[b]||(r[b]=o[b],o[b]=t(r[b]))}),Object.defineProperty(o,"innerHTML",xe(e,{set:t(e.set)})),o.resetSourceWatch_=function(){o.resetSourceWatch_=null,Object.keys(r).forEach(function(b){o[b]=r[b]}),Object.defineProperty(o,"innerHTML",e)},T.one("sourceset",o.resetSourceWatch_)}},Ma=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?bi(F.Element.prototype.getAttribute.call(this,"src")):""},set:function(T){return F.Element.prototype.setAttribute.call(this,"src",T),T}}),xa=function(T){return fn([T.el(),F.HTMLMediaElement.prototype,Ma],"src")},ka=function(T){if(!!T.featuresSourceset){var o=T.el();if(!o.resetSourceset_){var r=xa(T),e=o.setAttribute,t=o.load;Object.defineProperty(o,"src",xe(r,{set:function(U){var z=r.set.call(o,U);return T.triggerSourceset(o.src),z}})),o.setAttribute=function(b,U){var z=e.call(o,b,U);return/src/i.test(b)&&T.triggerSourceset(o.src),z},o.load=function(){var b=t.call(o);return ti(T)||(T.triggerSourceset(""),dn(T)),b},o.currentSrc?T.triggerSourceset(o.currentSrc):ti(T)||dn(T),o.resetSourceset_=function(){o.resetSourceset_=null,o.load=t,o.setAttribute=e,Object.defineProperty(o,"src",r),o.resetSourceWatch_&&o.resetSourceWatch_()}}}},ri=function(T,o,r,e){e===void 0&&(e=!0);var t=function(z){return Object.defineProperty(T,o,{value:z,enumerable:!0,writable:!0})},b={configurable:!0,enumerable:!0,get:function(){var z=r();return t(z),z}};return e&&(b.set=t),Object.defineProperty(T,o,b)},ve=function(v){w(T,v);function T(r,e){var t;t=v.call(this,r,e)||this;var b=r.source,U=!1;if(b&&(t.el_.currentSrc!==b.src||r.tag&&r.tag.initNetworkState_===3)?t.setSource(b):t.handleLateInit_(t.el_),r.enableSourceset&&t.setupSourcesetHandling_(),t.isScrubbing_=!1,t.el_.hasChildNodes()){for(var z=t.el_.childNodes,Y=z.length,Q=[];Y--;){var te=z[Y],$=te.nodeName.toLowerCase();$==="track"&&(t.featuresNativeTextTracks?(t.remoteTextTrackEls().addTrackElement_(te),t.remoteTextTracks().addTrack(te.track),t.textTracks().addTrack(te.track),!U&&!t.el_.hasAttribute("crossorigin")&&er(te.src)&&(U=!0)):Q.push(te))}for(var se=0;se<Q.length;se++)t.el_.removeChild(Q[se])}return t.proxyNativeTracks_(),t.featuresNativeTextTracks&&U&&_.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`),t.restoreMetadataTracksInIOSNativePlayer_(),(me||ye||q)&&r.nativeControlsForTouch===!0&&t.setControls(!0),t.proxyWebkitFullscreen_(),t.triggerReady(),t}var o=T.prototype;return o.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),T.disposeMediaElement(this.el_),this.options_=null,v.prototype.dispose.call(this)},o.setupSourcesetHandling_=function(){ka(this)},o.restoreMetadataTracksInIOSNativePlayer_=function(){var e=this.textTracks(),t,b=function(){t=[];for(var Y=0;Y<e.length;Y++){var Q=e[Y];Q.kind==="metadata"&&t.push({track:Q,storedMode:Q.mode})}};b(),e.addEventListener("change",b),this.on("dispose",function(){return e.removeEventListener("change",b)});var U=function z(){for(var Y=0;Y<t.length;Y++){var Q=t[Y];Q.track.mode==="disabled"&&Q.track.mode!==Q.storedMode&&(Q.track.mode=Q.storedMode)}e.removeEventListener("change",z)};this.on("webkitbeginfullscreen",function(){e.removeEventListener("change",b),e.removeEventListener("change",U),e.addEventListener("change",U)}),this.on("webkitendfullscreen",function(){e.removeEventListener("change",b),e.addEventListener("change",b),e.removeEventListener("change",U)})},o.overrideNative_=function(e,t){var b=this;if(t===this["featuresNative"+e+"Tracks"]){var U=e.toLowerCase();this[U+"TracksListeners_"]&&Object.keys(this[U+"TracksListeners_"]).forEach(function(z){var Y=b.el()[U+"Tracks"];Y.removeEventListener(z,b[U+"TracksListeners_"][z])}),this["featuresNative"+e+"Tracks"]=!t,this[U+"TracksListeners_"]=null,this.proxyNativeTracksForType_(U)}},o.overrideNativeAudioTracks=function(e){this.overrideNative_("Audio",e)},o.overrideNativeVideoTracks=function(e){this.overrideNative_("Video",e)},o.proxyNativeTracksForType_=function(e){var t=this,b=et[e],U=this.el()[b.getterName],z=this[b.getterName]();if(!(!this["featuresNative"+b.capitalName+"Tracks"]||!U||!U.addEventListener)){var Y={change:function($){var se={type:"change",target:z,currentTarget:z,srcElement:z};z.trigger(se),e==="text"&&t[Ot.remoteText.getterName]().trigger(se)},addtrack:function($){z.addTrack($.track)},removetrack:function($){z.removeTrack($.track)}},Q=function(){for(var $=[],se=0;se<z.length;se++){for(var de=!1,Te=0;Te<U.length;Te++)if(U[Te]===z[se]){de=!0;break}de||$.push(z[se])}for(;$.length;)z.removeTrack($.shift())};this[b.getterName+"Listeners_"]=Y,Object.keys(Y).forEach(function(te){var $=Y[te];U.addEventListener(te,$),t.on("dispose",function(se){return U.removeEventListener(te,$)})}),this.on("loadstart",Q),this.on("dispose",function(te){return t.off("loadstart",Q)})}},o.proxyNativeTracks_=function(){var e=this;et.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},o.createEl=function(){var e=this.options_.tag;if(!e||!(this.options_.playerElIngest||this.movingMediaElementInDOM)){if(e){var t=e.cloneNode(!0);e.parentNode&&e.parentNode.insertBefore(t,e),T.disposeMediaElement(e),e=t}else{e=R.createElement("video");var b=this.options_.tag&&Ae(this.options_.tag),U=xe({},b);(!me||this.options_.nativeControlsForTouch!==!0)&&delete U.controls,be(e,S(U,{id:this.options_.techId,class:"vjs-tech"}))}e.playerId=this.options_.playerId}typeof this.options_.preload!="undefined"&&$e(e,"preload",this.options_.preload),this.options_.disablePictureInPicture!==void 0&&(e.disablePictureInPicture=this.options_.disablePictureInPicture);for(var z=["loop","muted","playsinline","autoplay"],Y=0;Y<z.length;Y++){var Q=z[Y],te=this.options_[Q];typeof te!="undefined"&&(te?$e(e,Q,Q):st(e,Q),e[Q]=te)}return e},o.handleLateInit_=function(e){if(!(e.networkState===0||e.networkState===3)){if(e.readyState===0){var t=!1,b=function(){t=!0};this.on("loadstart",b);var U=function(){t||this.trigger("loadstart")};this.on("loadedmetadata",U),this.ready(function(){this.off("loadstart",b),this.off("loadedmetadata",U),t||this.trigger("loadstart")});return}var z=["loadstart"];z.push("loadedmetadata"),e.readyState>=2&&z.push("loadeddata"),e.readyState>=3&&z.push("canplay"),e.readyState>=4&&z.push("canplaythrough"),this.ready(function(){z.forEach(function(Y){this.trigger(Y)},this)})}},o.setScrubbing=function(e){this.isScrubbing_=e},o.scrubbing=function(){return this.isScrubbing_},o.setCurrentTime=function(e){try{this.isScrubbing_&&this.el_.fastSeek&&Ce?this.el_.fastSeek(e):this.el_.currentTime=e}catch(t){_(t,"Video is not ready. (Video.js)")}},o.duration=function(){var e=this;if(this.el_.duration===Infinity&&X&&ie&&this.el_.currentTime===0){var t=function b(){e.el_.currentTime>0&&(e.el_.duration===Infinity&&e.trigger("durationchange"),e.off("timeupdate",b))};return this.on("timeupdate",t),NaN}return this.el_.duration||NaN},o.width=function(){return this.el_.offsetWidth},o.height=function(){return this.el_.offsetHeight},o.proxyWebkitFullscreen_=function(){var e=this;if("webkitDisplayingFullscreen"in this.el_){var t=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},b=function(){"webkitPresentationMode"in this.el_&&this.el_.webkitPresentationMode!=="picture-in-picture"&&(this.one("webkitendfullscreen",t),this.trigger("fullscreenchange",{isFullscreen:!0,nativeIOSFullscreen:!0}))};this.on("webkitbeginfullscreen",b),this.on("dispose",function(){e.off("webkitbeginfullscreen",b),e.off("webkitendfullscreen",t)})}},o.supportsFullScreen=function(){if(typeof this.el_.webkitEnterFullScreen=="function"){var e=F.navigator&&F.navigator.userAgent||"";if(/Android/.test(e)||!/Chrome|Mac OS X 10.5/.test(e))return!0}return!1},o.enterFullScreen=function(){var e=this.el_;if(e.paused&&e.networkState<=e.HAVE_METADATA)vt(this.el_.play()),this.setTimeout(function(){e.pause();try{e.webkitEnterFullScreen()}catch(t){this.trigger("fullscreenerror",t)}},0);else try{e.webkitEnterFullScreen()}catch(t){this.trigger("fullscreenerror",t)}},o.exitFullScreen=function(){if(!this.el_.webkitDisplayingFullscreen){this.trigger("fullscreenerror",new Error("The video is not fullscreen"));return}this.el_.webkitExitFullScreen()},o.requestPictureInPicture=function(){return this.el_.requestPictureInPicture()},o.src=function(e){if(e===void 0)return this.el_.src;this.setSrc(e)},o.reset=function(){T.resetMediaElement(this.el_)},o.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},o.setControls=function(e){this.el_.controls=!!e},o.addTextTrack=function(e,t,b){return this.featuresNativeTextTracks?this.el_.addTextTrack(e,t,b):v.prototype.addTextTrack.call(this,e,t,b)},o.createRemoteTextTrack=function(e){if(!this.featuresNativeTextTracks)return v.prototype.createRemoteTextTrack.call(this,e);var t=R.createElement("track");return e.kind&&(t.kind=e.kind),e.label&&(t.label=e.label),(e.language||e.srclang)&&(t.srclang=e.language||e.srclang),e.default&&(t.default=e.default),e.id&&(t.id=e.id),e.src&&(t.src=e.src),t},o.addRemoteTextTrack=function(e,t){var b=v.prototype.addRemoteTextTrack.call(this,e,t);return this.featuresNativeTextTracks&&this.el().appendChild(b),b},o.removeRemoteTextTrack=function(e){if(v.prototype.removeRemoteTextTrack.call(this,e),this.featuresNativeTextTracks)for(var t=this.$$("track"),b=t.length;b--;)(e===t[b]||e===t[b].track)&&this.el().removeChild(t[b])},o.getVideoPlaybackQuality=function(){if(typeof this.el().getVideoPlaybackQuality=="function")return this.el().getVideoPlaybackQuality();var e={};return typeof this.el().webkitDroppedFrameCount!="undefined"&&typeof this.el().webkitDecodedFrameCount!="undefined"&&(e.droppedVideoFrames=this.el().webkitDroppedFrameCount,e.totalVideoFrames=this.el().webkitDecodedFrameCount),F.performance&&typeof F.performance.now=="function"?e.creationTime=F.performance.now():F.performance&&F.performance.timing&&typeof F.performance.timing.navigationStart=="number"&&(e.creationTime=F.Date.now()-F.performance.timing.navigationStart),e},T}(Re);ri(ve,"TEST_VID",function(){if(!!ke()){var v=R.createElement("video"),T=R.createElement("track");return T.kind="captions",T.srclang="en",T.label="English",v.appendChild(T),v}}),ve.isSupported=function(){try{ve.TEST_VID.volume=.5}catch(v){return!1}return!!(ve.TEST_VID&&ve.TEST_VID.canPlayType)},ve.canPlayType=function(v){return ve.TEST_VID.canPlayType(v)},ve.canPlaySource=function(v,T){return ve.canPlayType(v.type)},ve.canControlVolume=function(){try{var v=ve.TEST_VID.volume;return ve.TEST_VID.volume=v/2+.1,v!==ve.TEST_VID.volume}catch(T){return!1}},ve.canMuteVolume=function(){try{var v=ve.TEST_VID.muted;return ve.TEST_VID.muted=!v,ve.TEST_VID.muted?$e(ve.TEST_VID,"muted","muted"):st(ve.TEST_VID,"muted","muted"),v!==ve.TEST_VID.muted}catch(T){return!1}},ve.canControlPlaybackRate=function(){if(X&&ie&&oe<58)return!1;try{var v=ve.TEST_VID.playbackRate;return ve.TEST_VID.playbackRate=v/2+.1,v!==ve.TEST_VID.playbackRate}catch(T){return!1}},ve.canOverrideAttributes=function(){try{var v=function(){};Object.defineProperty(R.createElement("video"),"src",{get:v,set:v}),Object.defineProperty(R.createElement("audio"),"src",{get:v,set:v}),Object.defineProperty(R.createElement("video"),"innerHTML",{get:v,set:v}),Object.defineProperty(R.createElement("audio"),"innerHTML",{get:v,set:v})}catch(T){return!1}return!0},ve.supportsNativeTextTracks=function(){return Ce||_e&&ie},ve.supportsNativeVideoTracks=function(){return!!(ve.TEST_VID&&ve.TEST_VID.videoTracks)},ve.supportsNativeAudioTracks=function(){return!!(ve.TEST_VID&&ve.TEST_VID.audioTracks)},ve.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],[["featuresVolumeControl","canControlVolume"],["featuresMuteControl","canMuteVolume"],["featuresPlaybackRate","canControlPlaybackRate"],["featuresSourceset","canOverrideAttributes"],["featuresNativeTextTracks","supportsNativeTextTracks"],["featuresNativeVideoTracks","supportsNativeVideoTracks"],["featuresNativeAudioTracks","supportsNativeAudioTracks"]].forEach(function(v){var T=v[0],o=v[1];ri(ve.prototype,T,function(){return ve[o]()},!0)}),ve.prototype.movingMediaElementInDOM=!_e,ve.prototype.featuresFullscreenResize=!0,ve.prototype.featuresProgressEvents=!0,ve.prototype.featuresTimeupdateEvents=!0;var lr;ve.patchCanPlayType=function(){Z>=4&&!J&&!ie&&(lr=ve.TEST_VID&&ve.TEST_VID.constructor.prototype.canPlayType,ve.TEST_VID.constructor.prototype.canPlayType=function(v){var T=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;return v&&T.test(v)?"maybe":lr.call(this,v)})},ve.unpatchCanPlayType=function(){var v=ve.TEST_VID.constructor.prototype.canPlayType;return lr&&(ve.TEST_VID.constructor.prototype.canPlayType=lr),v},ve.patchCanPlayType(),ve.disposeMediaElement=function(v){if(!!v){for(v.parentNode&&v.parentNode.removeChild(v);v.hasChildNodes();)v.removeChild(v.firstChild);v.removeAttribute("src"),typeof v.load=="function"&&function(){try{v.load()}catch(T){}}()}},ve.resetMediaElement=function(v){if(!!v){for(var T=v.querySelectorAll("source"),o=T.length;o--;)v.removeChild(T[o]);v.removeAttribute("src"),typeof v.load=="function"&&function(){try{v.load()}catch(r){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(v){ve.prototype[v]=function(){return this.el_[v]||this.el_.hasAttribute(v)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(v){ve.prototype["set"+Be(v)]=function(T){this.el_[v]=T,T?this.el_.setAttribute(v,v):this.el_.removeAttribute(v)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","disablePictureInPicture","played","networkState","readyState","videoWidth","videoHeight","crossOrigin"].forEach(function(v){ve.prototype[v]=function(){return this.el_[v]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate","disablePictureInPicture","crossOrigin"].forEach(function(v){ve.prototype["set"+Be(v)]=function(T){this.el_[v]=T}}),["pause","load","play"].forEach(function(v){ve.prototype[v]=function(){return this.el_[v]()}}),Re.withSourceHandlers(ve),ve.nativeSourceHandler={},ve.nativeSourceHandler.canPlayType=function(v){try{return ve.TEST_VID.canPlayType(v)}catch(T){return""}},ve.nativeSourceHandler.canHandleSource=function(v,T){if(v.type)return ve.nativeSourceHandler.canPlayType(v.type);if(v.src){var o=Or(v.src);return ve.nativeSourceHandler.canPlayType("video/"+o)}return""},ve.nativeSourceHandler.handleSource=function(v,T,o){T.setSrc(v.src)},ve.nativeSourceHandler.dispose=function(){},ve.registerSourceHandler(ve.nativeSourceHandler),Re.registerTech("Html5",ve);var vn=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],ii={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ni=["tiny","xsmall","small","medium","large","xlarge","huge"],ur={};ni.forEach(function(v){var T=v.charAt(0)==="x"?"x-"+v.substring(1):v;ur[v]="vjs-layout-"+T});var wa={tiny:210,xsmall:320,small:425,medium:768,large:1440,xlarge:2560,huge:Infinity},je=function(v){w(T,v);function T(r,e,t){var b;if(r.id=r.id||e.id||"vjs_video_"+dt(),e=S(T.getTagSettings(r),e),e.initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if(typeof r.closest=="function"){var U=r.closest("[lang]");U&&U.getAttribute&&(e.language=U.getAttribute("lang"))}else for(var z=r;z&&z.nodeType===1;){if(Ae(z).hasOwnProperty("lang")){e.language=z.getAttribute("lang");break}z=z.parentNode}if(b=v.call(this,null,e,t)||this,b.boundDocumentFullscreenChange_=function($){return b.documentFullscreenChange_($)},b.boundFullWindowOnEscKey_=function($){return b.fullWindowOnEscKey($)},b.boundUpdateStyleEl_=function($){return b.updateStyleEl_($)},b.boundApplyInitTime_=function($){return b.applyInitTime_($)},b.boundUpdateCurrentBreakpoint_=function($){return b.updateCurrentBreakpoint_($)},b.boundHandleTechClick_=function($){return b.handleTechClick_($)},b.boundHandleTechDoubleClick_=function($){return b.handleTechDoubleClick_($)},b.boundHandleTechTouchStart_=function($){return b.handleTechTouchStart_($)},b.boundHandleTechTouchMove_=function($){return b.handleTechTouchMove_($)},b.boundHandleTechTouchEnd_=function($){return b.handleTechTouchEnd_($)},b.boundHandleTechTap_=function($){return b.handleTechTap_($)},b.isFullscreen_=!1,b.log=p(b.id_),b.fsApi_=L,b.isPosterFromTech_=!1,b.queuedCallbacks_=[],b.isReady_=!1,b.hasStarted_=!1,b.userActive_=!1,b.debugEnabled_=!1,!b.options_||!b.options_.techOrder||!b.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(b.tag=r,b.tagAttributes=r&&Ae(r),b.language(b.options_.language),e.languages){var Y={};Object.getOwnPropertyNames(e.languages).forEach(function($){Y[$.toLowerCase()]=e.languages[$]}),b.languages_=Y}else b.languages_=T.prototype.options_.languages;b.resetCache_(),b.poster_=e.poster||"",b.controls_=!!e.controls,r.controls=!1,r.removeAttribute("controls"),b.changingSrc_=!1,b.playCallbacks_=[],b.playTerminatedQueue_=[],r.hasAttribute("autoplay")?b.autoplay(!0):b.autoplay(b.options_.autoplay),e.plugins&&Object.keys(e.plugins).forEach(function($){if(typeof b[$]!="function")throw new Error('plugin "'+$+'" does not exist')}),b.scrubbing_=!1,b.el_=b.createEl(),Tr(j(b),{eventBusKey:"el_"}),b.fsApi_.requestFullscreen&&(Ze(R,b.fsApi_.fullscreenchange,b.boundDocumentFullscreenChange_),b.on(b.fsApi_.fullscreenchange,b.boundDocumentFullscreenChange_)),b.fluid_&&b.on(["playerreset","resize"],b.boundUpdateStyleEl_);var Q=xe(b.options_);e.plugins&&Object.keys(e.plugins).forEach(function($){b[$](e.plugins[$])}),e.debug&&b.debug(!0),b.options_.playerOptions=Q,b.middleware_=[],b.initChildren(),b.isAudio(r.nodeName.toLowerCase()==="audio"),b.controls()?b.addClass("vjs-controls-enabled"):b.addClass("vjs-controls-disabled"),b.el_.setAttribute("role","region"),b.isAudio()?b.el_.setAttribute("aria-label",b.localize("Audio Player")):b.el_.setAttribute("aria-label",b.localize("Video Player")),b.isAudio()&&b.addClass("vjs-audio"),b.flexNotSupported_()&&b.addClass("vjs-no-flex"),me&&b.addClass("vjs-touch-enabled"),_e||b.addClass("vjs-workinghover"),T.players[b.id_]=j(b);var te=A.split(".")[0];return b.addClass("vjs-v"+te),b.userActive(!0),b.reportUserActivity(),b.one("play",function($){return b.listenForUserActivity_($)}),b.on("stageclick",function($){return b.handleStageClick_($)}),b.on("keydown",function($){return b.handleKeyDown($)}),b.on("languagechange",function($){return b.handleLanguagechange($)}),b.breakpoints(b.options_.breakpoints),b.responsive(b.options_.responsive),b}var o=T.prototype;return o.dispose=function(){var e=this;this.trigger("dispose"),this.off("dispose"),We(R,this.fsApi_.fullscreenchange,this.boundDocumentFullscreenChange_),We(R,"keydown",this.boundFullWindowOnEscKey_),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),T.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),ta(this),Ye.names.forEach(function(t){var b=Ye[t],U=e[b.getterName]();U&&U.off&&U.off()}),v.prototype.dispose.call(this)},o.createEl=function(){var e=this.tag,t,b=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),U=this.tag.tagName.toLowerCase()==="video-js";b?t=this.el_=e.parentNode:U||(t=this.el_=v.prototype.createEl.call(this,"div"));var z=Ae(e);if(U){for(t=this.el_=e,e=this.tag=R.createElement("video");t.children.length;)e.appendChild(t.firstChild);Pe(t,"video-js")||De(t,"video-js"),t.appendChild(e),b=this.playerElIngest_=t,Object.keys(t).forEach(function(de){try{e[de]=t[de]}catch(Te){}})}if(e.setAttribute("tabindex","-1"),z.tabindex="-1",(le||ie&&he)&&(e.setAttribute("role","application"),z.role="application"),e.removeAttribute("width"),e.removeAttribute("height"),"width"in z&&delete z.width,"height"in z&&delete z.height,Object.getOwnPropertyNames(z).forEach(function(de){U&&de==="class"||t.setAttribute(de,z[de]),U&&e.setAttribute(de,z[de])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=t.player=this,this.addClass("vjs-paused"),F.VIDEOJS_NO_DYNAMIC_STYLE!==!0){this.styleEl_=ui("vjs-styles-dimensions");var Y=ot(".vjs-styles-defaults"),Q=ot("head");Q.insertBefore(this.styleEl_,Y?Y.nextSibling:Q.firstChild)}this.fill_=!1,this.fluid_=!1,this.width(this.options_.width),this.height(this.options_.height),this.fill(this.options_.fill),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio),this.crossOrigin(this.options_.crossOrigin||this.options_.crossorigin);for(var te=e.getElementsByTagName("a"),$=0;$<te.length;$++){var se=te.item($);De(se,"vjs-hidden"),se.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!b&&e.parentNode.insertBefore(t,e),we(e,t),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=t,t},o.crossOrigin=function(e){if(!e)return this.techGet_("crossOrigin");if(e!=="anonymous"&&e!=="use-credentials"){_.warn('crossOrigin must be "anonymous" or "use-credentials", given "'+e+'"');return}this.techCall_("setCrossOrigin",e)},o.width=function(e){return this.dimension("width",e)},o.height=function(e){return this.dimension("height",e)},o.dimension=function(e,t){var b=e+"_";if(t===void 0)return this[b]||0;if(t===""||t==="auto"){this[b]=void 0,this.updateStyleEl_();return}var U=parseFloat(t);if(isNaN(U)){_.error('Improper value "'+t+'" supplied for for '+e);return}this[b]=U,this.updateStyleEl_()},o.fluid=function(e){var t=this;if(e===void 0)return!!this.fluid_;this.fluid_=!!e,ct(this)&&this.off(["playerreset","resize"],this.boundUpdateStyleEl_),e?(this.addClass("vjs-fluid"),this.fill(!1),Ln(this,function(){t.on(["playerreset","resize"],t.boundUpdateStyleEl_)})):this.removeClass("vjs-fluid"),this.updateStyleEl_()},o.fill=function(e){if(e===void 0)return!!this.fill_;this.fill_=!!e,e?(this.addClass("vjs-fill"),this.fluid(!1)):this.removeClass("vjs-fill")},o.aspectRatio=function(e){if(e===void 0)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=e,this.fluid(!0),this.updateStyleEl_()},o.updateStyleEl_=function(){if(F.VIDEOJS_NO_DYNAMIC_STYLE===!0){var e=typeof this.width_=="number"?this.width_:this.options_.width,t=typeof this.height_=="number"?this.height_:this.options_.height,b=this.tech_&&this.tech_.el();b&&(e>=0&&(b.width=e),t>=0&&(b.height=t));return}var U,z,Y,Q;this.aspectRatio_!==void 0&&this.aspectRatio_!=="auto"?Y=this.aspectRatio_:this.videoWidth()>0?Y=this.videoWidth()+":"+this.videoHeight():Y="16:9";var te=Y.split(":"),$=te[1]/te[0];this.width_!==void 0?U=this.width_:this.height_!==void 0?U=this.height_/$:U=this.videoWidth()||300,this.height_!==void 0?z=this.height_:z=U*$,/^[^a-zA-Z]/.test(this.id())?Q="dimensions-"+this.id():Q=this.id()+"-dimensions",this.addClass(Q),ci(this.styleEl_,`
      .`+Q+` {
        width: `+U+`px;
        height: `+z+`px;
      }

      .`+Q+`.vjs-fluid {
        padding-top: `+$*100+`%;
      }
    `)},o.loadTech_=function(e,t){var b=this;this.tech_&&this.unloadTech_();var U=Be(e),z=e.charAt(0).toLowerCase()+e.slice(1);U!=="Html5"&&this.tag&&(Re.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=U,this.isReady_=!1;var Y=typeof this.autoplay()=="string"?!1:this.autoplay(),Q={source:t,autoplay:Y,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+z+"_api",playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,disablePictureInPicture:this.options_.disablePictureInPicture,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset,Promise:this.options_.Promise};Ye.names.forEach(function($){var se=Ye[$];Q[se.getterName]=b[se.privateName]}),S(Q,this.options_[U]),S(Q,this.options_[z]),S(Q,this.options_[e.toLowerCase()]),this.tag&&(Q.tag=this.tag),t&&t.src===this.cache_.src&&this.cache_.currentTime>0&&(Q.startTime=this.cache_.currentTime);var te=Re.getTech(e);if(!te)throw new Error("No Tech named '"+U+"' exists! '"+U+"' should be registered using videojs.registerTech()'");this.tech_=new te(Q),this.tech_.ready(Ie(this,this.handleTechReady_),!0),Ei.jsonToTextTracks(this.textTracksJson_||[],this.tech_),vn.forEach(function($){b.on(b.tech_,$,function(se){return b["handleTech"+Be($)+"_"](se)})}),Object.keys(ii).forEach(function($){b.on(b.tech_,$,function(se){if(b.tech_.playbackRate()===0&&b.tech_.seeking()){b.queuedCallbacks_.push({callback:b["handleTech"+ii[$]+"_"].bind(b),event:se});return}b["handleTech"+ii[$]+"_"](se)})}),this.on(this.tech_,"loadstart",function($){return b.handleTechLoadStart_($)}),this.on(this.tech_,"sourceset",function($){return b.handleTechSourceset_($)}),this.on(this.tech_,"waiting",function($){return b.handleTechWaiting_($)}),this.on(this.tech_,"ended",function($){return b.handleTechEnded_($)}),this.on(this.tech_,"seeking",function($){return b.handleTechSeeking_($)}),this.on(this.tech_,"play",function($){return b.handleTechPlay_($)}),this.on(this.tech_,"firstplay",function($){return b.handleTechFirstPlay_($)}),this.on(this.tech_,"pause",function($){return b.handleTechPause_($)}),this.on(this.tech_,"durationchange",function($){return b.handleTechDurationChange_($)}),this.on(this.tech_,"fullscreenchange",function($){return b.handleTechFullscreenChange_($)}),this.on(this.tech_,"fullscreenerror",function($){return b.handleTechFullscreenError_($)}),this.on(this.tech_,"enterpictureinpicture",function($){return b.handleTechEnterPictureInPicture_($)}),this.on(this.tech_,"leavepictureinpicture",function($){return b.handleTechLeavePictureInPicture_($)}),this.on(this.tech_,"error",function($){return b.handleTechError_($)}),this.on(this.tech_,"posterchange",function($){return b.handleTechPosterChange_($)}),this.on(this.tech_,"textdata",function($){return b.handleTechTextData_($)}),this.on(this.tech_,"ratechange",function($){return b.handleTechRateChange_($)}),this.on(this.tech_,"loadedmetadata",this.boundUpdateStyleEl_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode!==this.el()&&(U!=="Html5"||!this.tag)&&we(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},o.unloadTech_=function(){var e=this;Ye.names.forEach(function(t){var b=Ye[t];e[b.privateName]=e[b.getterName]()}),this.textTracksJson_=Ei.textTracksToJson(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},o.tech=function(e){return e===void 0&&_.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`),this.tech_},o.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mouseup",this.boundHandleTechClick_),this.on(this.tech_,"dblclick",this.boundHandleTechDoubleClick_),this.on(this.tech_,"touchstart",this.boundHandleTechTouchStart_),this.on(this.tech_,"touchmove",this.boundHandleTechTouchMove_),this.on(this.tech_,"touchend",this.boundHandleTechTouchEnd_),this.on(this.tech_,"tap",this.boundHandleTechTap_)},o.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.boundHandleTechTap_),this.off(this.tech_,"touchstart",this.boundHandleTechTouchStart_),this.off(this.tech_,"touchmove",this.boundHandleTechTouchMove_),this.off(this.tech_,"touchend",this.boundHandleTechTouchEnd_),this.off(this.tech_,"mouseup",this.boundHandleTechClick_),this.off(this.tech_,"dblclick",this.boundHandleTechDoubleClick_)},o.handleTechReady_=function(){this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_()},o.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.handleTechDurationChange_(),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay")),this.manualAutoplay_(this.autoplay())},o.manualAutoplay_=function(e){var t=this;if(!(!this.tech_||typeof e!="string")){var b=function(){var Y=t.muted();t.muted(!0);var Q=function(){t.muted(Y)};t.playTerminatedQueue_.push(Q);var te=t.play();if(!!Nt(te))return te.catch(Q)},U;if(e==="any"&&this.muted()!==!0?(U=this.play(),Nt(U)&&(U=U.catch(b))):e==="muted"&&this.muted()!==!0?U=b():U=this.play(),!!Nt(U))return U.then(function(){t.trigger({type:"autoplay-success",autoplay:e})}).catch(function(z){t.trigger({type:"autoplay-failure",autoplay:e})})}},o.updateSourceCaches_=function(e){e===void 0&&(e="");var t=e,b="";typeof t!="string"&&(t=e.src,b=e.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],t&&!b&&(b=na(this,t)),this.cache_.source=xe({},e,{src:t,type:b});for(var U=this.cache_.sources.filter(function(se){return se.src&&se.src===t}),z=[],Y=this.$$("source"),Q=[],te=0;te<Y.length;te++){var $=Ae(Y[te]);z.push($),$.src&&$.src===t&&Q.push($.src)}Q.length&&!U.length?this.cache_.sources=z:U.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=t},o.handleTechSourceset_=function(e){var t=this;if(!this.changingSrc_){var b=function(Q){return t.updateSourceCaches_(Q)},U=this.currentSource().src,z=e.src;U&&!/^blob:/.test(U)&&/^blob:/.test(z)&&(!this.lastSource_||this.lastSource_.tech!==z&&this.lastSource_.player!==U)&&(b=function(){}),b(z),e.src||this.tech_.any(["sourceset","loadstart"],function(Y){if(Y.type!=="sourceset"){var Q=t.techGet("currentSrc");t.lastSource_.tech=Q,t.updateSourceCaches_(Q)}})}this.lastSource_={player:this.currentSource().src,tech:e.src},this.trigger({src:e.src,type:"sourceset"})},o.hasStarted=function(e){if(e===void 0)return this.hasStarted_;e!==this.hasStarted_&&(this.hasStarted_=e,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},o.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},o.handleTechRateChange_=function(){this.tech_.playbackRate()>0&&this.cache_.lastPlaybackRate===0&&(this.queuedCallbacks_.forEach(function(e){return e.callback(e.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},o.handleTechWaiting_=function(){var e=this;this.addClass("vjs-waiting"),this.trigger("waiting");var t=this.currentTime(),b=function U(){t!==e.currentTime()&&(e.removeClass("vjs-waiting"),e.off("timeupdate",U))};this.on("timeupdate",b)},o.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},o.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},o.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},o.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},o.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.removeClass("vjs-ended"),this.trigger("seeked")},o.handleTechFirstPlay_=function(){this.options_.starttime&&(_.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},o.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},o.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},o.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},o.handleTechClick_=function(e){!ft(e)||!this.controls_||(this.paused()?vt(this.play()):this.pause())},o.handleTechDoubleClick_=function(e){if(!!this.controls_){var t=Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),function(b){return b.contains(e.target)});t||(this.options_===void 0||this.options_.userActions===void 0||this.options_.userActions.doubleClick===void 0||this.options_.userActions.doubleClick!==!1)&&(this.options_!==void 0&&this.options_.userActions!==void 0&&typeof this.options_.userActions.doubleClick=="function"?this.options_.userActions.doubleClick.call(this,e):this.isFullscreen()?this.exitFullscreen():this.requestFullscreen())}},o.handleTechTap_=function(){this.userActive(!this.userActive())},o.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},o.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},o.handleTechTouchEnd_=function(e){e.cancelable&&e.preventDefault()},o.handleStageClick_=function(){this.reportUserActivity()},o.toggleFullscreenClass_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},o.documentFullscreenChange_=function(e){var t=e.target.player;if(!(t&&t!==this)){var b=this.el(),U=R[this.fsApi_.fullscreenElement]===b;!U&&b.matches?U=b.matches(":"+this.fsApi_.fullscreen):!U&&b.msMatchesSelector&&(U=b.msMatchesSelector(":"+this.fsApi_.fullscreen)),this.isFullscreen(U)}},o.handleTechFullscreenChange_=function(e,t){t&&(t.nativeIOSFullscreen&&this.toggleClass("vjs-ios-native-fs"),this.isFullscreen(t.isFullscreen))},o.handleTechFullscreenError_=function(e,t){this.trigger("fullscreenerror",t)},o.togglePictureInPictureClass_=function(){this.isInPictureInPicture()?this.addClass("vjs-picture-in-picture"):this.removeClass("vjs-picture-in-picture")},o.handleTechEnterPictureInPicture_=function(e){this.isInPictureInPicture(!0)},o.handleTechLeavePictureInPicture_=function(e){this.isInPictureInPicture(!1)},o.handleTechError_=function(){var e=this.tech_.error();this.error(e)},o.handleTechTextData_=function(){var e=null;arguments.length>1&&(e=arguments[1]),this.trigger("textdata",e)},o.getCache=function(){return this.cache_},o.resetCache_=function(){this.cache_={currentTime:0,initTime:0,inactivityTimeout:this.options_.inactivityTimeout,duration:NaN,lastVolume:1,lastPlaybackRate:this.defaultPlaybackRate(),media:null,src:"",source:{},sources:[],volume:1}},o.techCall_=function(e,t){this.ready(function(){if(e in qn)return Jn(this.middleware_,this.tech_,e,t);if(e in Ri)return Ii(this.middleware_,this.tech_,e,t);try{this.tech_&&this.tech_[e](t)}catch(b){throw _(b),b}},!0)},o.techGet_=function(e){if(!(!this.tech_||!this.tech_.isReady_)){if(e in Zn)return Qn(this.middleware_,this.tech_,e);if(e in Ri)return Ii(this.middleware_,this.tech_,e);try{return this.tech_[e]()}catch(t){throw this.tech_[e]===void 0?(_("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t):t.name==="TypeError"?(_("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t):(_(t),t)}}},o.play=function(){var e=this,t=this.options_.Promise||F.Promise;return t?new t(function(b){e.play_(b)}):this.play_()},o.play_=function(e){var t=this;e===void 0&&(e=vt),this.playCallbacks_.push(e);var b=Boolean(!this.changingSrc_&&(this.src()||this.currentSrc()));if(this.waitToPlay_&&(this.off(["ready","loadstart"],this.waitToPlay_),this.waitToPlay_=null),!this.isReady_||!b){this.waitToPlay_=function(z){t.play_()},this.one(["ready","loadstart"],this.waitToPlay_),!b&&(Ce||_e)&&this.load();return}var U=this.techGet_("play");U===null?this.runPlayTerminatedQueue_():this.runPlayCallbacks_(U)},o.runPlayTerminatedQueue_=function(){var e=this.playTerminatedQueue_.slice(0);this.playTerminatedQueue_=[],e.forEach(function(t){t()})},o.runPlayCallbacks_=function(e){var t=this.playCallbacks_.slice(0);this.playCallbacks_=[],this.playTerminatedQueue_=[],t.forEach(function(b){b(e)})},o.pause=function(){this.techCall_("pause")},o.paused=function(){return this.techGet_("paused")!==!1},o.played=function(){return this.techGet_("played")||yt(0,0)},o.scrubbing=function(e){if(typeof e=="undefined")return this.scrubbing_;this.scrubbing_=!!e,this.techCall_("setScrubbing",this.scrubbing_),e?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},o.currentTime=function(e){if(typeof e!="undefined"){if(e<0&&(e=0),!this.isReady_||this.changingSrc_||!this.tech_||!this.tech_.isReady_){this.cache_.initTime=e,this.off("canplay",this.boundApplyInitTime_),this.one("canplay",this.boundApplyInitTime_);return}this.techCall_("setCurrentTime",e),this.cache_.initTime=0;return}return this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime},o.applyInitTime_=function(){this.currentTime(this.cache_.initTime)},o.duration=function(e){if(e===void 0)return this.cache_.duration!==void 0?this.cache_.duration:NaN;e=parseFloat(e),e<0&&(e=Infinity),e!==this.cache_.duration&&(this.cache_.duration=e,e===Infinity?this.addClass("vjs-live"):this.removeClass("vjs-live"),isNaN(e)||this.trigger("durationchange"))},o.remainingTime=function(){return this.duration()-this.currentTime()},o.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},o.buffered=function(){var e=this.techGet_("buffered");return(!e||!e.length)&&(e=yt(0,0)),e},o.bufferedPercent=function(){return yi(this.buffered(),this.duration())},o.bufferedEnd=function(){var e=this.buffered(),t=this.duration(),b=e.end(e.length-1);return b>t&&(b=t),b},o.volume=function(e){var t;if(e!==void 0){t=Math.max(0,Math.min(1,parseFloat(e))),this.cache_.volume=t,this.techCall_("setVolume",t),t>0&&this.lastVolume_(t);return}return t=parseFloat(this.techGet_("volume")),isNaN(t)?1:t},o.muted=function(e){if(e!==void 0){this.techCall_("setMuted",e);return}return this.techGet_("muted")||!1},o.defaultMuted=function(e){return e!==void 0?this.techCall_("setDefaultMuted",e):this.techGet_("defaultMuted")||!1},o.lastVolume_=function(e){if(e!==void 0&&e!==0){this.cache_.lastVolume=e;return}return this.cache_.lastVolume},o.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},o.isFullscreen=function(e){if(e!==void 0){var t=this.isFullscreen_;this.isFullscreen_=Boolean(e),this.isFullscreen_!==t&&this.fsApi_.prefixed&&this.trigger("fullscreenchange"),this.toggleFullscreenClass_();return}return this.isFullscreen_},o.requestFullscreen=function(e){var t=this.options_.Promise||F.Promise;if(t){var b=this;return new t(function(U,z){function Y(){b.off("fullscreenerror",te),b.off("fullscreenchange",Q)}function Q(){Y(),U()}function te(se,de){Y(),z(de)}b.one("fullscreenchange",Q),b.one("fullscreenerror",te);var $=b.requestFullscreenHelper_(e);if($)return $.then(Y,Y),$})}return this.requestFullscreenHelper_()},o.requestFullscreenHelper_=function(e){var t=this,b;if(this.fsApi_.prefixed||(b=this.options_.fullscreen&&this.options_.fullscreen.options||{},e!==void 0&&(b=e)),this.fsApi_.requestFullscreen){var U=this.el_[this.fsApi_.requestFullscreen](b);return U&&U.then(function(){return t.isFullscreen(!0)},function(){return t.isFullscreen(!1)}),U}else this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):this.enterFullWindow()},o.exitFullscreen=function(){var e=this.options_.Promise||F.Promise;if(e){var t=this;return new e(function(b,U){function z(){t.off("fullscreenerror",Q),t.off("fullscreenchange",Y)}function Y(){z(),b()}function Q($,se){z(),U(se)}t.one("fullscreenchange",Y),t.one("fullscreenerror",Q);var te=t.exitFullscreenHelper_();if(te)return te.then(z,z),te})}return this.exitFullscreenHelper_()},o.exitFullscreenHelper_=function(){var e=this;if(this.fsApi_.requestFullscreen){var t=R[this.fsApi_.exitFullscreen]();return t&&t.then(function(){return e.isFullscreen(!1)}),t}else this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):this.exitFullWindow()},o.enterFullWindow=function(){this.isFullscreen(!0),this.isFullWindow=!0,this.docOrigOverflow=R.documentElement.style.overflow,Ze(R,"keydown",this.boundFullWindowOnEscKey_),R.documentElement.style.overflow="hidden",De(R.body,"vjs-full-window"),this.trigger("enterFullWindow")},o.fullWindowOnEscKey=function(e){D.isEventKey(e,"Esc")&&(this.isFullscreen()===!0?this.exitFullscreen():this.exitFullWindow())},o.exitFullWindow=function(){this.isFullscreen(!1),this.isFullWindow=!1,We(R,"keydown",this.boundFullWindowOnEscKey_),R.documentElement.style.overflow=this.docOrigOverflow,Ke(R.body,"vjs-full-window"),this.trigger("exitFullWindow")},o.disablePictureInPicture=function(e){if(e===void 0)return this.techGet_("disablePictureInPicture");this.techCall_("setDisablePictureInPicture",e),this.options_.disablePictureInPicture=e,this.trigger("disablepictureinpicturechanged")},o.isInPictureInPicture=function(e){if(e!==void 0){this.isInPictureInPicture_=!!e,this.togglePictureInPictureClass_();return}return!!this.isInPictureInPicture_},o.requestPictureInPicture=function(){if("pictureInPictureEnabled"in R&&this.disablePictureInPicture()===!1)return this.techGet_("requestPictureInPicture")},o.exitPictureInPicture=function(){if("pictureInPictureEnabled"in R)return R.exitPictureInPicture()},o.handleKeyDown=function(e){var t=this.options_.userActions;if(!(!t||!t.hotkeys)){var b=function(z){var Y=z.tagName.toLowerCase();if(z.isContentEditable)return!0;var Q=["button","checkbox","hidden","radio","reset","submit"];if(Y==="input")return Q.indexOf(z.type)===-1;var te=["textarea"];return te.indexOf(Y)!==-1};b(this.el_.ownerDocument.activeElement)||(typeof t.hotkeys=="function"?t.hotkeys.call(this,e):this.handleHotkeys(e))}},o.handleHotkeys=function(e){var t=this.options_.userActions?this.options_.userActions.hotkeys:{},b=t.fullscreenKey,U=b===void 0?function(Te){return D.isEventKey(Te,"f")}:b,z=t.muteKey,Y=z===void 0?function(Te){return D.isEventKey(Te,"m")}:z,Q=t.playPauseKey,te=Q===void 0?function(Te){return D.isEventKey(Te,"k")||D.isEventKey(Te,"Space")}:Q;if(U.call(this,e)){e.preventDefault(),e.stopPropagation();var $=ae.getComponent("FullscreenToggle");R[this.fsApi_.fullscreenEnabled]!==!1&&$.prototype.handleClick.call(this,e)}else if(Y.call(this,e)){e.preventDefault(),e.stopPropagation();var se=ae.getComponent("MuteToggle");se.prototype.handleClick.call(this,e)}else if(te.call(this,e)){e.preventDefault(),e.stopPropagation();var de=ae.getComponent("PlayToggle");de.prototype.handleClick.call(this,e)}},o.canPlayType=function(e){for(var t,b=0,U=this.options_.techOrder;b<U.length;b++){var z=U[b],Y=Re.getTech(z);if(Y||(Y=ae.getComponent(z)),!Y){_.error('The "'+z+'" tech is undefined. Skipped browser support check for that tech.');continue}if(Y.isSupported()&&(t=Y.canPlayType(e),t))return t}return""},o.selectSource=function(e){var t=this,b=this.options_.techOrder.map(function(te){return[te,Re.getTech(te)]}).filter(function(te){var $=te[0],se=te[1];return se?se.isSupported():(_.error('The "'+$+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),U=function($,se,de){var Te;return $.some(function(ht){return se.some(function(si){if(Te=de(ht,si),Te)return!0})}),Te},z,Y=function($){return function(se,de){return $(de,se)}},Q=function($,se){var de=$[0],Te=$[1];if(Te.canPlaySource(se,t.options_[de.toLowerCase()]))return{source:se,tech:de}};return this.options_.sourceOrder?z=U(e,b,Y(Q)):z=U(b,e,Q),z||!1},o.handleSrc_=function(e,t){var b=this;if(typeof e=="undefined")return this.cache_.src||"";this.resetRetryOnError_&&this.resetRetryOnError_();var U=aa(e);if(!U.length){this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0);return}if(this.changingSrc_=!0,t||(this.cache_.sources=U),this.updateSourceCaches_(U[0]),Xn(this,U[0],function(Q,te){b.middleware_=te,t||(b.cache_.sources=U),b.updateSourceCaches_(Q);var $=b.src_(Q);if($){if(U.length>1)return b.handleSrc_(U.slice(1));b.changingSrc_=!1,b.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),b.triggerReady();return}$n(te,b.tech_)}),this.options_.retryOnError&&U.length>1){var z=function(){b.error(null),b.handleSrc_(U.slice(1),!0)},Y=function(){b.off("error",z)};this.one("error",z),this.one("playing",Y),this.resetRetryOnError_=function(){b.off("error",z),b.off("playing",Y)}}},o.src=function(e){return this.handleSrc_(e,!1)},o.src_=function(e){var t=this,b=this.selectSource([e]);return b?On(b.tech,this.techName_)?(this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",e):this.techCall_("src",e.src),this.changingSrc_=!1},!0),!1):(this.changingSrc_=!0,this.loadTech_(b.tech,b.source),this.tech_.ready(function(){t.changingSrc_=!1}),!1):!0},o.load=function(){this.techCall_("load")},o.reset=function(){var e=this,t=this.options_.Promise||F.Promise;if(this.paused()||!t)this.doReset_();else{var b=this.play();vt(b.then(function(){return e.doReset_()}))}},o.doReset_=function(){this.tech_&&this.tech_.clearTracks("text"),this.resetCache_(),this.poster(""),this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset"),this.resetControlBarUI_(),ct(this)&&this.trigger("playerreset")},o.resetControlBarUI_=function(){this.resetProgressBar_(),this.resetPlaybackRate_(),this.resetVolumeBar_()},o.resetProgressBar_=function(){this.currentTime(0);var e=this.controlBar,t=e.durationDisplay,b=e.remainingTimeDisplay;t&&t.updateContent(),b&&b.updateContent()},o.resetPlaybackRate_=function(){this.playbackRate(this.defaultPlaybackRate()),this.handleTechRateChange_()},o.resetVolumeBar_=function(){this.volume(1),this.trigger("volumechange")},o.currentSources=function(){var e=this.currentSource(),t=[];return Object.keys(e).length!==0&&t.push(e),this.cache_.sources||t},o.currentSource=function(){return this.cache_.source||{}},o.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},o.currentType=function(){return this.currentSource()&&this.currentSource().type||""},o.preload=function(e){if(e!==void 0){this.techCall_("setPreload",e),this.options_.preload=e;return}return this.techGet_("preload")},o.autoplay=function(e){if(e===void 0)return this.options_.autoplay||!1;var t;typeof e=="string"&&/(any|play|muted)/.test(e)?(this.options_.autoplay=e,this.manualAutoplay_(e),t=!1):e?this.options_.autoplay=!0:this.options_.autoplay=!1,t=typeof t=="undefined"?this.options_.autoplay:t,this.tech_&&this.techCall_("setAutoplay",t)},o.playsinline=function(e){return e!==void 0?(this.techCall_("setPlaysinline",e),this.options_.playsinline=e,this):this.techGet_("playsinline")},o.loop=function(e){if(e!==void 0){this.techCall_("setLoop",e),this.options_.loop=e;return}return this.techGet_("loop")},o.poster=function(e){if(e===void 0)return this.poster_;e||(e=""),e!==this.poster_&&(this.poster_=e,this.techCall_("setPoster",e),this.isPosterFromTech_=!1,this.trigger("posterchange"))},o.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var e=this.tech_.poster()||"";e!==this.poster_&&(this.poster_=e,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},o.controls=function(e){if(e===void 0)return!!this.controls_;e=!!e,this.controls_!==e&&(this.controls_=e,this.usingNativeControls()&&this.techCall_("setControls",e),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},o.usingNativeControls=function(e){if(e===void 0)return!!this.usingNativeControls_;e=!!e,this.usingNativeControls_!==e&&(this.usingNativeControls_=e,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},o.error=function(e){if(e===void 0)return this.error_||null;if(this.options_.suppressNotSupportedError&&e&&e.code===4){var t=function(){this.error(e)};this.options_.suppressNotSupportedError=!1,this.any(["click","touchstart"],t),this.one("loadstart",function(){this.off(["click","touchstart"],t)});return}if(e===null){this.error_=e,this.removeClass("vjs-error"),this.errorDisplay&&this.errorDisplay.close();return}this.error_=new ze(e),this.addClass("vjs-error"),_.error("(CODE:"+this.error_.code+" "+ze.errorTypes[this.error_.code]+")",this.error_.message,this.error_),this.trigger("error")},o.reportUserActivity=function(e){this.userActivity_=!0},o.userActive=function(e){if(e===void 0)return this.userActive_;if(e=!!e,e!==this.userActive_){if(this.userActive_=e,this.userActive_){this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),this.trigger("useractive");return}this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},o.listenForUserActivity_=function(){var e,t,b,U=Ie(this,this.reportUserActivity),z=function(de){(de.screenX!==t||de.screenY!==b)&&(t=de.screenX,b=de.screenY,U())},Y=function(){U(),this.clearInterval(e),e=this.setInterval(U,250)},Q=function(de){U(),this.clearInterval(e)};this.on("mousedown",Y),this.on("mousemove",z),this.on("mouseup",Q),this.on("mouseleave",Q);var te=this.getChild("controlBar");te&&!_e&&!X&&(te.on("mouseenter",function(se){this.player().cache_.inactivityTimeout=this.player().options_.inactivityTimeout,this.player().options_.inactivityTimeout=0}),te.on("mouseleave",function(se){this.player().options_.inactivityTimeout=this.player().cache_.inactivityTimeout})),this.on("keydown",U),this.on("keyup",U);var $;this.setInterval(function(){if(!!this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout($);var se=this.options_.inactivityTimeout;se<=0||($=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},se))}},250)},o.playbackRate=function(e){if(e!==void 0){this.techCall_("setPlaybackRate",e);return}return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1},o.defaultPlaybackRate=function(e){return e!==void 0?this.techCall_("setDefaultPlaybackRate",e):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},o.isAudio=function(e){if(e!==void 0){this.isAudio_=!!e;return}return!!this.isAudio_},o.addTextTrack=function(e,t,b){if(this.tech_)return this.tech_.addTextTrack(e,t,b)},o.addRemoteTextTrack=function(e,t){if(this.tech_)return this.tech_.addRemoteTextTrack(e,t)},o.removeRemoteTextTrack=function(e){e===void 0&&(e={});var t=e,b=t.track;if(b||(b=e),this.tech_)return this.tech_.removeRemoteTextTrack(b)},o.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},o.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},o.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},o.language=function(e){if(e===void 0)return this.language_;this.language_!==String(e).toLowerCase()&&(this.language_=String(e).toLowerCase(),ct(this)&&this.trigger("languagechange"))},o.languages=function(){return xe(T.prototype.options_.languages,this.languages_)},o.toJSON=function(){var e=xe(this.options_),t=e.tracks;e.tracks=[];for(var b=0;b<t.length;b++){var U=t[b];U=xe(U),U.player=void 0,e.tracks[b]=U}return e},o.createModal=function(e,t){var b=this;t=t||{},t.content=e||"";var U=new Lt(this,t);return this.addChild(U),U.on("dispose",function(){b.removeChild(U)}),U.open(),U},o.updateCurrentBreakpoint_=function(){if(!!this.responsive())for(var e=this.currentBreakpoint(),t=this.currentWidth(),b=0;b<ni.length;b++){var U=ni[b],z=this.breakpoints_[U];if(t<=z){if(e===U)return;e&&this.removeClass(ur[e]),this.addClass(ur[U]),this.breakpoint_=U;break}}},o.removeCurrentBreakpoint_=function(){var e=this.currentBreakpointClass();this.breakpoint_="",e&&this.removeClass(e)},o.breakpoints=function(e){return e===void 0?S(this.breakpoints_):(this.breakpoint_="",this.breakpoints_=S({},wa,e),this.updateCurrentBreakpoint_(),S(this.breakpoints_))},o.responsive=function(e){if(e===void 0)return this.responsive_;e=Boolean(e);var t=this.responsive_;if(e!==t)return this.responsive_=e,e?(this.on("playerresize",this.boundUpdateCurrentBreakpoint_),this.updateCurrentBreakpoint_()):(this.off("playerresize",this.boundUpdateCurrentBreakpoint_),this.removeCurrentBreakpoint_()),e},o.currentBreakpoint=function(){return this.breakpoint_},o.currentBreakpointClass=function(){return ur[this.breakpoint_]||""},o.loadMedia=function(e,t){var b=this;if(!(!e||typeof e!="object")){this.reset(),this.cache_.media=xe(e);var U=this.cache_.media,z=U.artwork,Y=U.poster,Q=U.src,te=U.textTracks;!z&&Y&&(this.cache_.media.artwork=[{src:Y,type:rr(Y)}]),Q&&this.src(Q),Y&&this.poster(Y),Array.isArray(te)&&te.forEach(function($){return b.addRemoteTextTrack($,!1)}),this.ready(t)}},o.getMedia=function(){if(!this.cache_.media){var e=this.poster(),t=this.currentSources(),b=Array.prototype.map.call(this.remoteTextTracks(),function(z){return{kind:z.kind,label:z.label,language:z.language,src:z.src}}),U={src:t,textTracks:b};return e&&(U.poster=e,U.artwork=[{src:U.poster,type:rr(U.poster)}]),U}return xe(this.cache_.media)},T.getTagSettings=function(e){var t={sources:[],tracks:[]},b=Ae(e),U=b["data-setup"];if(Pe(e,"vjs-fill")&&(b.fill=!0),Pe(e,"vjs-fluid")&&(b.fluid=!0),U!==null){var z=O(U||"{}"),Y=z[0],Q=z[1];Y&&_.error(Y),S(b,Q)}if(S(t,b),e.hasChildNodes())for(var te=e.childNodes,$=0,se=te.length;$<se;$++){var de=te[$],Te=de.nodeName.toLowerCase();Te==="source"?t.sources.push(Ae(de)):Te==="track"&&t.tracks.push(Ae(de))}return t},o.flexNotSupported_=function(){var e=R.createElement("i");return!("flexBasis"in e.style||"webkitFlexBasis"in e.style||"mozFlexBasis"in e.style||"msFlexBasis"in e.style||"msFlexOrder"in e.style)},o.debug=function(e){if(e===void 0)return this.debugEnabled_;e?(this.trigger("debugon"),this.previousLogLevel_=this.log.level,this.log.level("debug"),this.debugEnabled_=!0):(this.trigger("debugoff"),this.log.level(this.previousLogLevel_),this.previousLogLevel_=void 0,this.debugEnabled_=!1)},T}(ae);Ye.names.forEach(function(v){var T=Ye[v];je.prototype[T.getterName]=function(){return this.tech_?this.tech_[T.getterName]():(this[T.privateName]=this[T.privateName]||new T.ListClass,this[T.privateName])}}),je.prototype.crossorigin=je.prototype.crossOrigin,je.players={};var Ht=F.navigator;je.prototype.options_={techOrder:Re.defaultTechOrder_,html5:{},inactivityTimeout:2e3,playbackRates:[],liveui:!1,children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","liveTracker","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:Ht&&(Ht.languages&&Ht.languages[0]||Ht.userLanguage||Ht.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media.",fullscreen:{options:{navigationUI:"hide"}},breakpoints:{},responsive:!1},["ended","seeking","seekable","networkState","readyState"].forEach(function(v){je.prototype[v]=function(){return this.techGet_(v)}}),vn.forEach(function(v){je.prototype["handleTech"+Be(v)+"_"]=function(){return this.trigger(v)}}),ae.registerComponent("Player",je);var cr="plugin",xt="activePlugins_",kt={},hr=function(T){return kt.hasOwnProperty(T)},fr=function(T){return hr(T)?kt[T]:void 0},pn=function(T,o){T[xt]=T[xt]||{},T[xt][o]=!0},dr=function(T,o,r){var e=(r?"before":"")+"pluginsetup";T.trigger(e,o),T.trigger(e+":"+o.name,o)},Fa=function(T,o){var r=function(){dr(this,{name:T,plugin:o,instance:null},!0);var t=o.apply(this,arguments);return pn(this,T),dr(this,{name:T,plugin:o,instance:t}),t};return Object.keys(o).forEach(function(e){r[e]=o[e]}),r},gn=function(T,o){return o.prototype.name=T,function(){dr(this,{name:T,plugin:o,instance:null},!0);for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var b=P(o,[this].concat(e));return this[T]=function(){return b},dr(this,b.getEventHash()),b}},lt=function(){function v(o){if(this.constructor===v)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=o,this.log||(this.log=this.player.log.createLogger(this.name)),Tr(this),delete this.trigger,gi(this,this.constructor.defaultState),pn(o,this.name),this.dispose=this.dispose.bind(this),o.on("dispose",this.dispose)}var T=v.prototype;return T.version=function(){return this.constructor.VERSION},T.getEventHash=function(r){return r===void 0&&(r={}),r.name=this.name,r.plugin=this.constructor,r.instance=this,r},T.trigger=function(r,e){return e===void 0&&(e={}),Ct(this.eventBusEl_,r,this.getEventHash(e))},T.handleStateChanged=function(r){},T.dispose=function(){var r=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[xt][r]=!1,this.player=this.state=null,e[r]=gn(r,kt[r])},v.isBasic=function(r){var e=typeof r=="string"?fr(r):r;return typeof e=="function"&&!v.prototype.isPrototypeOf(e.prototype)},v.registerPlugin=function(r,e){if(typeof r!="string")throw new Error('Illegal plugin name, "'+r+'", must be a string, was '+typeof r+".");if(hr(r))_.warn('A plugin named "'+r+'" already exists. You may want to avoid re-registering plugins!');else if(je.prototype.hasOwnProperty(r))throw new Error('Illegal plugin name, "'+r+'", cannot share a name with an existing player method!');if(typeof e!="function")throw new Error('Illegal plugin for "'+r+'", must be a function, was '+typeof e+".");return kt[r]=e,r!==cr&&(v.isBasic(e)?je.prototype[r]=Fa(r,e):je.prototype[r]=gn(r,e)),e},v.deregisterPlugin=function(r){if(r===cr)throw new Error("Cannot de-register base plugin.");hr(r)&&(delete kt[r],delete je.prototype[r])},v.getPlugins=function(r){r===void 0&&(r=Object.keys(kt));var e;return r.forEach(function(t){var b=fr(t);b&&(e=e||{},e[t]=b)}),e},v.getPluginVersion=function(r){var e=fr(r);return e&&e.VERSION||""},v}();lt.getPlugin=fr,lt.BASE_PLUGIN_NAME=cr,lt.registerPlugin(cr,lt),je.prototype.usingPlugin=function(v){return!!this[xt]&&this[xt][v]===!0},je.prototype.hasPlugin=function(v){return!!hr(v)};var Ba=function(T,o){o===void 0&&(o={});var r=function(){T.apply(this,arguments)},e={};typeof o=="object"?(o.constructor!==Object.prototype.constructor&&(r=o.constructor),e=o):typeof o=="function"&&(r=o),c(r,T),T&&(r.super_=T);for(var t in e)e.hasOwnProperty(t)&&(r.prototype[t]=e[t]);return r},mn=function(T){return T.indexOf("#")===0?T.slice(1):T};function fe(v,T,o){var r=fe.getPlayer(v);if(r)return T&&_.warn('Player "'+v+'" is already initialised. Options will not be applied.'),o&&r.ready(o),r;var e=typeof v=="string"?ot("#"+mn(v)):v;if(!Ee(e))throw new TypeError("The element or ID supplied is not valid. (videojs)");(!e.ownerDocument.defaultView||!e.ownerDocument.body.contains(e))&&_.warn("The element supplied is not included in the DOM"),T=T||{},fe.hooks("beforesetup").forEach(function(b){var U=b(e,xe(T));if(!I(U)||Array.isArray(U)){_.error("please return an object in beforesetup hooks");return}T=xe(T,U)});var t=ae.getComponent("Player");return r=new t(e,T,o),fe.hooks("setup").forEach(function(b){return b(r)}),r}if(fe.hooks_={},fe.hooks=function(v,T){return fe.hooks_[v]=fe.hooks_[v]||[],T&&(fe.hooks_[v]=fe.hooks_[v].concat(T)),fe.hooks_[v]},fe.hook=function(v,T){fe.hooks(v,T)},fe.hookOnce=function(v,T){fe.hooks(v,[].concat(T).map(function(o){var r=function e(){return fe.removeHook(v,e),o.apply(void 0,arguments)};return r}))},fe.removeHook=function(v,T){var o=fe.hooks(v).indexOf(T);return o<=-1?!1:(fe.hooks_[v]=fe.hooks_[v].slice(),fe.hooks_[v].splice(o,1),!0)},F.VIDEOJS_NO_DYNAMIC_STYLE!==!0&&ke()){var vr=ot(".vjs-styles-defaults");if(!vr){vr=ui("vjs-styles-defaults");var ai=ot("head");ai&&ai.insertBefore(vr,ai.firstChild),ci(vr,`
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid {
        padding-top: 56.25%
      }
    `)}}pr(1,fe),fe.VERSION=A,fe.options=je.prototype.options_,fe.getPlayers=function(){return je.players},fe.getPlayer=function(v){var T=je.players,o;if(typeof v=="string"){var r=mn(v),e=T[r];if(e)return e;o=ot("#"+r)}else o=v;if(Ee(o)){var t=o,b=t.player,U=t.playerId;if(b||T[U])return b||T[U]}},fe.getAllPlayers=function(){return Object.keys(je.players).map(function(v){return je.players[v]}).filter(Boolean)},fe.players=je.players,fe.getComponent=ae.getComponent,fe.registerComponent=function(v,T){Re.isTech(T)&&_.warn("The "+v+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),ae.registerComponent.call(ae,v,T)},fe.getTech=Re.getTech,fe.registerTech=Re.registerTech,fe.use=Yn,Object.defineProperty(fe,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(fe.middleware,"TERMINATOR",{value:tr,writeable:!1,enumerable:!0}),fe.browser=Me,fe.TOUCH_ENABLED=me,fe.extend=Ba,fe.mergeOptions=xe,fe.bind=Ie,fe.registerPlugin=lt.registerPlugin,fe.deregisterPlugin=lt.deregisterPlugin,fe.plugin=function(v,T){return _.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),lt.registerPlugin(v,T)},fe.getPlugins=lt.getPlugins,fe.getPlugin=lt.getPlugin,fe.getPluginVersion=lt.getPluginVersion,fe.addLanguage=function(v,T){var o;return v=(""+v).toLowerCase(),fe.options.languages=xe(fe.options.languages,(o={},o[v]=T,o)),fe.options.languages[v]},fe.log=_,fe.createLogger=p,fe.createTimeRange=fe.createTimeRanges=yt,fe.formatTime=It,fe.setFormatTime=fa,fe.resetFormatTime=da,fe.parseUrl=Pr,fe.isCrossOrigin=er,fe.EventTarget=He,fe.on=Ze,fe.one=Qt,fe.off=We,fe.trigger=Ct,fe.xhr=m,fe.TextTrack=Ut,fe.AudioTrack=Li,fe.VideoTrack=Di,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(v){fe[v]=function(){return _.warn("videojs."+v+"() is deprecated; use videojs.dom."+v+"() instead"),wt[v].apply(null,arguments)}}),fe.computedStyle=B,fe.dom=wt,fe.url=Wn,fe.defineLazyProperty=ri,ne.exports=fe},288:(ne,re,H)=>{/**
 * videojs-mux
 * @version 4.0.0
 * @copyright 2021 Mux, Inc.
 * @license
 */(function(){var M=!1;(function(F,R){if(true)ne.exports=R(H(207));else { var k, j; }})(typeof self!="undefined"?self:this,function(F){return function(R){function k(w){if(j[w])return j[w].exports;var O=j[w]={i:w,l:!1,exports:{}};return R[w].call(O.exports,O,O.exports,k),O.l=!0,O.exports}var j={};return k.m=R,k.c=j,k.d=function(w,O,D){k.o(w,O)||Object.defineProperty(w,O,{configurable:!1,enumerable:!0,get:D})},k.n=function(w){var O=w&&w.__esModule?function(){return w.default}:function(){return w};return k.d(O,"a",O),O},k.o=function(w,O){return Object.prototype.hasOwnProperty.call(w,O)},k.p="",k(k.s=2)}([function(R,k,j){(function(){(function(w,O){R.exports=O()})(0,function(){return function(w){function O(m){if(D[m])return D[m].exports;var C=D[m]={i:m,l:!1,exports:{}};return w[m].call(C.exports,C,C.exports,O),C.l=!0,C.exports}var D={};return O.m=w,O.c=D,O.d=function(m,C,P){O.o(m,C)||Object.defineProperty(m,C,{configurable:!1,enumerable:!0,get:P})},O.n=function(m){var C=m&&m.__esModule?function(){return m.default}:function(){return m};return O.d(C,"a",C),C},O.o=function(m,C){return Object.prototype.hasOwnProperty.call(m,C)},O.p="",O(O.s=16)}([function(w,O,D){(function(m){var C;C=typeof window!="undefined"?window:m!==void 0?m:typeof self!="undefined"?self:{},w.exports=C}).call(O,D(6))},function(w,O){function D(J,ee,ie){switch(ie.length){case 0:return J.call(ee);case 1:return J.call(ee,ie[0]);case 2:return J.call(ee,ie[0],ie[1]);case 3:return J.call(ee,ie[0],ie[1],ie[2])}return J.apply(ee,ie)}function m(J,ee){for(var ie=-1,oe=Array(J);++ie<J;)oe[ie]=ee(ie);return oe}function C(J,ee){var ie=Z(J)||y(J)?m(J.length,String):[],oe=ie.length,le=!!oe;for(var ue in J)!ee&&!N.call(J,ue)||le&&(ue=="length"||h(ue,oe))||ie.push(ue);return ie}function P(J,ee,ie){var oe=J[ee];N.call(J,ee)&&l(oe,ie)&&(ie!==void 0||ee in J)||(J[ee]=ie)}function c(J){if(!a(J))return G(J);var ee=[];for(var ie in Object(J))N.call(J,ie)&&ie!="constructor"&&ee.push(ie);return ee}function A(J,ee){return ee=V(ee===void 0?J.length-1:ee,0),function(){for(var ie=arguments,oe=-1,le=V(ie.length-ee,0),ue=Array(le);++oe<le;)ue[oe]=ie[ee+oe];oe=-1;for(var he=Array(ee+1);++oe<ee;)he[oe]=ie[oe];return he[ee]=ue,D(J,this,he)}}function L(J,ee,ie,oe){ie||(ie={});for(var le=-1,ue=ee.length;++le<ue;){var he=ee[le],me=oe?oe(ie[he],J[he],he,ie,J):void 0;P(ie,he,me===void 0?J[he]:me)}return ie}function h(J,ee){return!!(ee=ee==null?n:ee)&&(typeof J=="number"||x.test(J))&&J>-1&&J%1==0&&J<ee}function s(J,ee,ie){if(!p(ie))return!1;var oe=typeof ee;return!!(oe=="number"?f(ie)&&h(ee,ie.length):oe=="string"&&ee in ie)&&l(ie[ee],J)}function a(J){var ee=J&&J.constructor;return J===(typeof ee=="function"&&ee.prototype||B)}function l(J,ee){return J===ee||J!==J&&ee!==ee}function y(J){return d(J)&&N.call(J,"callee")&&(!W.call(J,"callee")||K.call(J)==E)}function f(J){return J!=null&&_(J.length)&&!g(J)}function d(J){return u(J)&&f(J)}function g(J){var ee=p(J)?K.call(J):"";return ee==S||ee==I}function _(J){return typeof J=="number"&&J>-1&&J%1==0&&J<=n}function p(J){var ee=typeof J;return!!J&&(ee=="object"||ee=="function")}function u(J){return!!J&&typeof J=="object"}function i(J){return f(J)?C(J):c(J)}var n=9007199254740991,E="[object Arguments]",S="[object Function]",I="[object GeneratorFunction]",x=/^(?:0|[1-9]\d*)$/,B=Object.prototype,N=B.hasOwnProperty,K=B.toString,W=B.propertyIsEnumerable,G=function(J,ee){return function(ie){return J(ee(ie))}}(Object.keys,Object),V=Math.max,X=!W.call({valueOf:1},"valueOf"),Z=Array.isArray,q=function(J){return A(function(ee,ie){var oe=-1,le=ie.length,ue=le>1?ie[le-1]:void 0,he=le>2?ie[2]:void 0;for(ue=J.length>3&&typeof ue=="function"?(le--,ue):void 0,he&&s(ie[0],ie[1],he)&&(ue=le<3?void 0:ue,le=1),ee=Object(ee);++oe<le;){var me=ie[oe];me&&J(ee,me)}return ee})}(function(J,ee){if(X||a(ee)||f(ee))return void L(ee,i(ee),J);for(var ie in ee)N.call(ee,ie)&&P(J,ie,ee[ie])});w.exports=q},function(w,O,D){"use strict";function m(C,P,c){c=c===void 0?1:c,C[P]=C[P]||0,C[P]+=c}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(0),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P={};P.now=function(){var c=C.default.performance,A=c&&c.timing;return A&&typeof A.navigationStart=="number"&&typeof c.now=="function"?A.navigationStart+c.now():Date.now()},O.default=P},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(18),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P=C.default.methodFactory;C.default.methodFactory=function(c,A,L){var h=P(c,A,L);return function(){for(var s=["[mux]"],a=0;a<arguments.length;a++)s.push(arguments[a]);h.apply(void 0,s)}},C.default.setLevel(C.default.getLevel()),O.default=C.default},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=function(c){return P(c)[0]},C=function(c){return P(c)[1]},P=function(c){if(typeof c!="string"||c==="")return["localhost"];var A=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,L=c.match(A)||[],h=L[4],s=void 0;return h&&(s=(h.match(/[^\.]+\.[^\.]+$/)||[])[0]),[h,s]};O.extractHostnameAndDomain=P,O.extractHostname=m,O.extractDomain=C},function(w,O){var D;D=function(){return this}();try{D=D||Function("return this")()||(0,eval)("this")}catch(m){typeof window=="object"&&(D=window)}w.exports=D},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var c=16*Math.random()|0;return(P==="x"?c:3&c|8).toString(16)})},C=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)};O.generateUUID=m,O.generateShortID=C},function(w,O,D){"use strict";function m(P){P=P||"";var c={};return P.trim().split(/[\r\n]+/).forEach(function(A){if(A){var L=A.split(": "),h=L.shift();h&&C.indexOf(h.toLowerCase())>=0&&(c[h]=L.join(": "))}}),c}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m;var C=["x-cdn","content-type"]},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),O.findMediaElement=O.getMuxPlayerId=void 0;var m=D(7),C=function(c){return c&&c.nodeName!==void 0?(c.muxId||(c.muxId=c.id||(0,m.generateShortID)()),c.muxId):c},P=function(c){var A=void 0;return c&&c.nodeName!==void 0?(A=c,c=C(A)):A=document.querySelector(c),[A,c,A&&A.nodeName?A.nodeName.toLowerCase():""]};O.getMuxPlayerId=C,O.findMediaElement=P},function(w,O,D){"use strict";function m(){return(P.default.doNotTrack||P.default.navigator&&(P.default.navigator.doNotTrack||P.default.navigator.msDoNotTrack))==="1"}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m;var C=D(0),P=function(c){return c&&c.__esModule?c:{default:c}}(C)},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(0),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P={};P.exists=function(){var c=C.default.performance;return(c&&c.timing)!==void 0},P.domContentLoadedEventEnd=function(){var c=C.default.performance,A=c&&c.timing;return A&&A.domContentLoadedEventEnd},P.navigationStart=function(){var c=C.default.performance,A=c&&c.timing;return A&&A.navigationStart},O.default=P},function(w,O,D){"use strict";var m=D(42),C=D(43),P=D(14);w.exports={formats:P,parse:C,stringify:m}},function(w,O,D){"use strict";var m=Object.prototype.hasOwnProperty,C=function(){for(var c=[],A=0;A<256;++A)c.push("%"+((A<16?"0":"")+A.toString(16)).toUpperCase());return c}(),P=function(c){for(var A;c.length;){var L=c.pop();if(A=L.obj[L.prop],Array.isArray(A)){for(var h=[],s=0;s<A.length;++s)A[s]!==void 0&&h.push(A[s]);L.obj[L.prop]=h}}return A};O.arrayToObject=function(c,A){for(var L=A&&A.plainObjects?Object.create(null):{},h=0;h<c.length;++h)c[h]!==void 0&&(L[h]=c[h]);return L},O.merge=function(c,A,L){if(!A)return c;if(typeof A!="object"){if(Array.isArray(c))c.push(A);else{if(typeof c!="object")return[c,A];(L.plainObjects||L.allowPrototypes||!m.call(Object.prototype,A))&&(c[A]=!0)}return c}if(typeof c!="object")return[c].concat(A);var h=c;return Array.isArray(c)&&!Array.isArray(A)&&(h=O.arrayToObject(c,L)),Array.isArray(c)&&Array.isArray(A)?(A.forEach(function(s,a){m.call(c,a)?c[a]&&typeof c[a]=="object"?c[a]=O.merge(c[a],s,L):c.push(s):c[a]=s}),c):Object.keys(A).reduce(function(s,a){var l=A[a];return m.call(s,a)?s[a]=O.merge(s[a],l,L):s[a]=l,s},h)},O.assign=function(c,A){return Object.keys(A).reduce(function(L,h){return L[h]=A[h],L},c)},O.decode=function(c){try{return decodeURIComponent(c.replace(/\+/g," "))}catch(A){return c}},O.encode=function(c){if(c.length===0)return c;for(var A=typeof c=="string"?c:String(c),L="",h=0;h<A.length;++h){var s=A.charCodeAt(h);s===45||s===46||s===95||s===126||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?L+=A.charAt(h):s<128?L+=C[s]:s<2048?L+=C[192|s>>6]+C[128|63&s]:s<55296||s>=57344?L+=C[224|s>>12]+C[128|s>>6&63]+C[128|63&s]:(h+=1,s=65536+((1023&s)<<10|1023&A.charCodeAt(h)),L+=C[240|s>>18]+C[128|s>>12&63]+C[128|s>>6&63]+C[128|63&s])}return L},O.compact=function(c){for(var A=[{obj:{o:c},prop:"o"}],L=[],h=0;h<A.length;++h)for(var s=A[h],a=s.obj[s.prop],l=Object.keys(a),y=0;y<l.length;++y){var f=l[y],d=a[f];typeof d=="object"&&d!==null&&L.indexOf(d)===-1&&(A.push({obj:a,prop:f}),L.push(d))}return P(A)},O.isRegExp=function(c){return Object.prototype.toString.call(c)==="[object RegExp]"},O.isBuffer=function(c){return c!=null&&!!(c.constructor&&c.constructor.isBuffer&&c.constructor.isBuffer(c))}},function(w,O,D){"use strict";var m=String.prototype.replace,C=/%20/g;w.exports={default:"RFC3986",formatters:{RFC1738:function(P){return m.call(P,C,"+")},RFC3986:function(P){return P}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(w,O,D){"use strict";function m(f){return f&&f.__esModule?f:{default:f}}function C(f){var d={};for(var g in f)f.hasOwnProperty(g)&&(d[f[g]]=g);return d}function P(f){var d={},g={};return Object.keys(f).forEach(function(_){var p=!1;if(f.hasOwnProperty(_)&&f[_]!==void 0){var u=_.split("_"),i=u[0],n=a[i];n||(A.default.info("Data key word `"+u[0]+"` not expected in "+_),n=i+"_"),u.splice(1).forEach(function(E){E==="url"&&(p=!0),y[E]?n+=y[E]:(A.default.info("Data key word `"+E+"` not expected in "+_),n+="_"+E+"_")}),p?g[n]=f[_]:d[n]=f[_]}}),(0,h.default)(d,g)}Object.defineProperty(O,"__esModule",{value:!0}),O.default=P;var c=D(4),A=m(c),L=D(1),h=m(L),s={a:"env",b:"beacon",d:"ad",e:"event",f:"experiment",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},a=C(s),l={ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cd:"code",cg:"category",ch:"changed",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",du:"duration",dv:"device",ec:"encoding",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",fi:"first",fm:"family",ft:"format",fq:"frequency",fr:"frame",fs:"fullscreen",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},y=C(l)},function(w,O,D){"use strict";w.exports=D(17).default},function(w,O,D){"use strict";function m(E){return E&&E.__esModule?E:{default:E}}Object.defineProperty(O,"__esModule",{value:!0});var C=function(){function E(S,I){var x=[],B=!0,N=!1,K=void 0;try{for(var W,G=S[Symbol.iterator]();!(B=(W=G.next()).done)&&(x.push(W.value),!I||x.length!==I);B=!0);}catch(V){N=!0,K=V}finally{try{!B&&G.return&&G.return()}finally{if(N)throw K}}return x}return function(S,I){if(Array.isArray(S))return S;if(Symbol.iterator in Object(S))return E(S,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=D(0),c=m(P),A=D(9),L=D(4),h=m(L),s=D(10),a=m(s),l=D(3),y=m(l),f=D(19),d=m(f),g=D(50),_=m(g),p=D(51),u=m(p),i={},n=function E(S){var I=arguments;typeof S=="string"?E.hasOwnProperty(S)?c.default.setTimeout(function(){I=Array.prototype.splice.call(I,1),E[S].apply(null,I)},0):h.default.warn("`"+S+"` is an unknown task"):typeof S=="function"?c.default.setTimeout(function(){S(E)},0):h.default.warn("`"+S+"` is invalid.")};n.loaded=y.default.now(),n.NAME="mux-embed",n.VERSION="4.0.0",n.API_VERSION="2.1",n.PLAYER_TRACKED=!1,n.monitor=function(E,S){return(0,_.default)(n,E,S)},n.destroyMonitor=function(E){var S=(0,A.findMediaElement)(E),I=C(S,1),x=I[0];x&&x.mux&&typeof x.mux.destroy=="function"?x.mux.destroy():h.default.error("A video element monitor for `"+E+"` has not been initialized via `mux.monitor`.")},n.addHLSJS=function(E,S){var I=(0,A.getMuxPlayerId)(E);i[I]?i[I].addHLSJS(S):h.default.error("A monitor for `"+I+"` has not been initialized.")},n.addDashJS=function(E,S){var I=(0,A.getMuxPlayerId)(E);i[I]?i[I].addDashJS(S):h.default.error("A monitor for `"+I+"` has not been initialized.")},n.removeHLSJS=function(E){var S=(0,A.getMuxPlayerId)(E);i[S]?i[S].removeHLSJS():h.default.error("A monitor for `"+S+"` has not been initialized.")},n.removeDashJS=function(E){var S=(0,A.getMuxPlayerId)(E);i[S]?i[S].removeDashJS():h.default.error("A monitor for `"+S+"` has not been initialized.")},n.init=function(E,S){(0,a.default)()&&S&&S.respectDoNotTrack&&h.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var I=(0,A.getMuxPlayerId)(E);i[I]=new d.default(n,I,S)},n.emit=function(E,S,I){var x=(0,A.getMuxPlayerId)(E);i[x]?(i[x].emit(S,I),S==="destroy"&&delete i[x]):h.default.error("A monitor for `"+x+"` has not been initialized.")},c.default!==void 0&&typeof c.default.addEventListener=="function"&&c.default.addEventListener("unload",function(){n.WINDOW_UNLOADING=!0},!1),n.checkDoNotTrack=a.default,n.log=h.default,n.utils=u.default,O.default=n},function(w,O,D){var m,C;(function(P,c){"use strict";m=c,(C=typeof m=="function"?m.call(O,D,O,w):m)!==void 0&&(w.exports=C)})(0,function(){"use strict";function P(u,i){var n=u[i];if(typeof n.bind=="function")return n.bind(u);try{return Function.prototype.bind.call(n,u)}catch(E){return function(){return Function.prototype.apply.apply(n,[u,arguments])}}}function c(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function A(u){return u==="debug"&&(u="log"),typeof console!==y&&(u==="trace"&&f?c:console[u]!==void 0?P(console,u):console.log!==void 0?P(console,"log"):l)}function L(u,i){for(var n=0;n<d.length;n++){var E=d[n];this[E]=n<u?l:this.methodFactory(E,u,i)}this.log=this.debug}function h(u,i,n){return function(){typeof console!==y&&(L.call(this,i,n),this[u].apply(this,arguments))}}function s(u,i,n){return A(u)||h.apply(this,arguments)}function a(u,i,n){function E(K){var W=(d[K]||"silent").toUpperCase();if(typeof window!==y&&B){try{return void(window.localStorage[B]=W)}catch(G){}try{window.document.cookie=encodeURIComponent(B)+"="+W+";"}catch(G){}}}function S(){var K;if(typeof window!==y&&B){try{K=window.localStorage[B]}catch(V){}if(typeof K===y)try{var W=window.document.cookie,G=W.indexOf(encodeURIComponent(B)+"=");G!==-1&&(K=/^([^;]+)/.exec(W.slice(G))[1])}catch(V){}return x.levels[K]===void 0&&(K=void 0),K}}var I,x=this,B="loglevel";typeof u=="string"?B+=":"+u:typeof u=="symbol"&&(B=void 0),x.name=u,x.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},x.methodFactory=n||s,x.getLevel=function(){return I},x.setLevel=function(K,W){if(typeof K=="string"&&x.levels[K.toUpperCase()]!==void 0&&(K=x.levels[K.toUpperCase()]),!(typeof K=="number"&&K>=0&&K<=x.levels.SILENT))throw"log.setLevel() called with invalid level: "+K;if(I=K,W!==!1&&E(K),L.call(x,K,u),typeof console===y&&K<x.levels.SILENT)return"No console available for logging"},x.setDefaultLevel=function(K){S()||x.setLevel(K,!1)},x.enableAll=function(K){x.setLevel(x.levels.TRACE,K)},x.disableAll=function(K){x.setLevel(x.levels.SILENT,K)};var N=S();N==null&&(N=i==null?"WARN":i),x.setLevel(N,!1)}var l=function(){},y="undefined",f=typeof window!==y&&typeof window.navigator!==y&&/Trident\/|MSIE /.test(window.navigator.userAgent),d=["trace","debug","info","warn","error"],g=new a,_={};g.getLogger=function(u){if(typeof u!="symbol"&&typeof u!="string"||u==="")throw new TypeError("You must supply a name when creating a logger.");var i=_[u];return i||(i=_[u]=new a(u,g.getLevel(),g.methodFactory)),i};var p=typeof window!==y?window.log:void 0;return g.noConflict=function(){return typeof window!==y&&window.log===g&&(window.log=p),g},g.getLoggers=function(){return _},g.default=g,g})},function(w,O,D){"use strict";function m(pe){return pe&&pe.__esModule?pe:{default:pe}}Object.defineProperty(O,"__esModule",{value:!0});var C=function(){function pe(ge,ce){var Le=[],we=!0,Pe=!1,De=void 0;try{for(var Ke,Oe=ge[Symbol.iterator]();!(we=(Ke=Oe.next()).done)&&(Le.push(Ke.value),!ce||Le.length!==ce);we=!0);}catch(be){Pe=!0,De=be}finally{try{!we&&Oe.return&&Oe.return()}finally{if(Pe)throw De}}return Le}return function(ge,ce){if(Array.isArray(ge))return ge;if(Symbol.iterator in Object(ge))return pe(ge,ce);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=D(4),c=m(P),A=D(1),L=m(A),h=D(7),s=D(5),a=D(0),l=m(a),y=D(11),f=m(y),d=D(2),g=m(d),_=D(20),p=m(_),u=D(25),i=D(26),n=D(27),E=m(n),S=D(28),I=m(S),x=D(29),B=m(x),N=D(30),K=m(N),W=D(31),G=m(W),V=D(32),X=m(V),Z=D(33),q=m(Z),J=D(34),ee=m(J),ie=D(35),oe=m(ie),le=D(36),ue=m(le),he=D(37),me=m(he),Se=D(38),ye=m(Se),_e=D(39),Ce=m(_e),Me=D(40),Fe=m(Me),Ne=D(49),Ue=m(Ne),ke=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],Ee=function(pe,ge,ce){var Le=this;this.DOM_CONTENT_LOADED_EVENT_END=f.default.domContentLoadedEventEnd(),this.NAVIGATION_START=f.default.navigationStart();var we={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,errorTranslator:function(be){return be}};this.mux=pe,this.id=ge,ce=(0,L.default)(we,ce),ce.data=ce.data||{},ce.data.property_key&&(ce.data.env_key=ce.data.property_key,delete ce.data.property_key),c.default.setLevel(ce.debug?"debug":"warn"),this.getPlayheadTime=ce.getPlayheadTime,this.getStateData=ce.getStateData||function(){},this.getAdData=ce.getAdData||function(){},this.minimumRebufferDuration=ce.minimumRebufferDuration,this.sustainedRebufferThreshold=ce.sustainedRebufferThreshold,this.playbackHeartbeatTime=ce.playbackHeartbeatTime,this.disableRebufferTracking=ce.disableRebufferTracking,this.disableRebufferTracking&&this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),this.errorTranslator=ce.errorTranslator,this.playbackEventDispatcher=new Fe.default(pe,ce.data.env_key,ce),this.data={player_instance_id:(0,h.generateUUID)(),mux_sample_rate:ce.sampleRate,beacon_domain:ce.beaconDomain},this.data.view_sequence_number=1,this.data.player_sequence_number=1,this.oldEmit=this.emit,this.emit=function(be,Ae){Ae=(0,L.default)({viewer_time:this.mux.utils.now()},Ae),this.oldEmit(be,Ae)};var Pe=function(){this.data.view_start===void 0&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}.bind(this);this.on("viewinit",function(be,Ae){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),(0,L.default)(this.data,Ae),this._initializeViewData(),this.one("play",Pe),this.one("adbreakstart",Pe)});var De=function(be){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",be)}.bind(this);this.on("videochange",function(be,Ae){De(Ae)}),this.on("programchange",function(be,Ae){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),De((0,L.default)(Ae,{view_program_changed:!0})),Pe()}),this.on("destroy",this.destroy);var Ke=this.destroy.bind(this);l.default!==void 0&&typeof l.default.addEventListener=="function"&&l.default.addEventListener("unload",Ke,!1),this.on("destroy",function(){l.default!==void 0&&typeof l.default.removeEventListener=="function"&&l.default.removeEventListener("unload",Ke)}),this.on("playerready",function(be,Ae){(0,L.default)(this.data,Ae)}),ke.forEach(function(be){Le.on(be,function(Ae,Je){be.indexOf("ad")!==0&&this._updateStateData(),(0,L.default)(this.data,Je),this._sanitizeData()}),Le.on("after"+be,function(){(be!=="error"||this.viewErrored)&&this.send(be)})}),this.on("viewend",function(be,Ae){(0,L.default)(Le.data,Ae)});var Oe=function(be){var Ae=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=Ae-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};this.one("playerready",Oe),B.default.apply(this),Ce.default.apply(this),ue.default.apply(this),X.default.apply(this),I.default.apply(this),oe.default.apply(this),K.default.apply(this),G.default.apply(this),me.default.apply(this),q.default.apply(this),ee.default.apply(this),ye.default.apply(this),Ue.default.apply(this),ce.hlsjs&&this.addHLSJS(ce),ce.dashjs&&this.addDashJS(ce),this.emit("viewinit",ce.data)};(0,L.default)(Ee.prototype,E.default.prototype),(0,L.default)(Ee.prototype,X.default.prototype),(0,L.default)(Ee.prototype,ue.default.prototype),(0,L.default)(Ee.prototype,I.default.prototype),(0,L.default)(Ee.prototype,K.default.prototype),(0,L.default)(Ee.prototype,G.default.prototype),(0,L.default)(Ee.prototype,me.default.prototype),(0,L.default)(Ee.prototype,q.default.prototype),(0,L.default)(Ee.prototype,ee.default.prototype),Ee.prototype.destroy=function(){this._destroyed||(this._destroyed=!0,this.data.view_start!==void 0&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),l.default.clearTimeout(this._heartBeatTimeout))},Ee.prototype.send=function(pe){var ge=(0,L.default)({},this.data);if(ge.player_error_code===1&&(delete ge.player_error_code,delete ge.player_error_message),ge.player_source_duration===1/0||ge.video_source_duration===1/0?ge.video_source_is_live=!0:(ge.player_source_duration>0||ge.video_source_duration>0)&&(ge.video_source_is_live=!1),ge.video_source_url=ge.video_source_url||ge.player_source_url,ge.video_source_url){var ce=(0,s.extractHostnameAndDomain)(ge.video_source_url),Le=C(ce,2),we=Le[0],Pe=Le[1];ge.video_source_domain=Pe,ge.video_source_hostname=we}delete ge.ad_request_id,this.playbackEventDispatcher.send(pe,ge),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat()},Ee.prototype._updateStateData=function(){(0,L.default)(this.data,this.getStateData()),this.getPlayheadTime&&(this.data.player_playhead_time=this.getPlayheadTime()),this._sanitizeData()},Ee.prototype._sanitizeData=function(){var pe=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(ge){var ce=parseInt(pe.data[ge],10);pe.data[ge]=isNaN(ce)?void 0:ce}),["player_source_url","video_source_url"].forEach(function(ge){if(pe.data[ge]){var ce=pe.data[ge].toLowerCase();ce.indexOf("data:")!==0&&ce.indexOf("blob:")!==0||(pe.data[ge]="MSE style URL")}})},Ee.prototype._resetVideoData=function(pe,ge){var ce=this;Object.keys(this.data).forEach(function(Le){Le.indexOf("video_")===0&&delete ce.data[Le]})},Ee.prototype._resetViewData=function(){var pe=this;Object.keys(this.data).forEach(function(ge){ge.indexOf("view_")===0&&delete pe.data[ge]}),this.data.view_sequence_number=1},Ee.prototype._resetErrorData=function(pe,ge){delete this.data.player_error_code,delete this.data.player_error_message},Ee.prototype._initializeViewData=function(){var pe=this,ge=this.data.view_id=(0,h.generateUUID)();this.data.video_id||(this.data.video_id=(0,p.default)(this.data.player_source_url));var ce=function(){ge===pe.data.view_id&&(0,g.default)(pe.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",ce):ce()},Ee.prototype._restartHeartBeat=function(){var pe=this;l.default.clearTimeout(this._heartBeatTimeout),this.viewErrored||(this._heartBeatTimeout=l.default.setTimeout(function(){pe.data.player_is_paused||pe.emit("hb")},1e4))},Ee.prototype.addHLSJS=function(pe){return pe.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=pe.hlsjs,void(0,u.monitorHlsJs)(this.mux,this.id,pe.hlsjs,{},pe.Hls||l.default.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")},Ee.prototype.removeHLSJS=function(){this.hlsjs&&((0,u.stopMonitoringHlsJs)(this.hlsjs),this.hlsjs=void 0)},Ee.prototype.addDashJS=function(pe){return pe.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=pe.dashjs,void(0,i.monitorDashJS)(this.mux,this.id,pe.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")},Ee.prototype.removeDashJS=function(){this.dashjs&&((0,i.stopMonitoringDashJS)(this.dashjs),this.dashjs=void 0)},O.default=Ee},function(w,O,D){"use strict";function m(h){return h&&h.__esModule?h:{default:h}}function C(h){var s=c.default.createElement("a");s.href=h;var a=s.pathname.replace(/\.[^\/.]+$/,"");return L.default.encode(s.host+a).split("=")[0]}Object.defineProperty(O,"__esModule",{value:!0}),O.default=C;var P=D(21),c=m(P),A=D(23),L=m(A)},function(w,O,D){(function(m){var C,P=m!==void 0?m:typeof window!="undefined"?window:{},c=D(22);typeof document!="undefined"?C=document:(C=P["__GLOBAL_DOCUMENT_CACHE@4"])||(C=P["__GLOBAL_DOCUMENT_CACHE@4"]=c),w.exports=C}).call(O,D(6))},function(w,O){},function(w,O,D){(function(m,C){var P;(function(c){var A=(typeof m=="object"&&m&&m.exports,function(f){this.message=f});A.prototype=new Error,A.prototype.name="InvalidCharacterError";var L=function(f){throw new A(f)},h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,a=function(f){f=String(f).replace(s,"");var d=f.length;d%4==0&&(f=f.replace(/==?$/,""),d=f.length),(d%4==1||/[^+a-zA-Z0-9\/]/.test(f))&&L("Invalid character: the string to be decoded is not correctly encoded.");for(var g,_,p=0,u="",i=-1;++i<d;)_=h.indexOf(f.charAt(i)),g=p%4?64*g+_:_,p++%4&&(u+=String.fromCharCode(255&g>>(-2*p&6)));return u},l=function(f){f=String(f),/[^\0-\xFF]/.test(f)&&L("The string to be encoded contains characters outside of the Latin1 range.");for(var d,g,_,p,u=f.length%3,i="",n=-1,E=f.length-u;++n<E;)d=f.charCodeAt(n)<<16,g=f.charCodeAt(++n)<<8,_=f.charCodeAt(++n),p=d+g+_,i+=h.charAt(p>>18&63)+h.charAt(p>>12&63)+h.charAt(p>>6&63)+h.charAt(63&p);return u==2?(d=f.charCodeAt(n)<<8,g=f.charCodeAt(++n),p=d+g,i+=h.charAt(p>>10)+h.charAt(p>>4&63)+h.charAt(p<<2&63)+"="):u==1&&(p=f.charCodeAt(n),i+=h.charAt(p>>2)+h.charAt(p<<4&63)+"=="),i},y={encode:l,decode:a,version:"0.1.0"};(P=function(){return y}.call(O,D,O,m))!==void 0&&(m.exports=P)})()}).call(O,D(24)(w),D(6))},function(w,O){w.exports=function(D){return D.webpackPolyfill||(D.deprecate=function(){},D.paths=[],D.children||(D.children=[]),Object.defineProperty(D,"loaded",{enumerable:!0,get:function(){return D.l}}),Object.defineProperty(D,"id",{enumerable:!0,get:function(){return D.i}}),D.webpackPolyfill=1),D}},function(w,O,D){"use strict";function m(y){return y&&y.__esModule?y:{default:y}}Object.defineProperty(O,"__esModule",{value:!0}),O.stopMonitoringHlsJs=O.monitorHlsJs=void 0;var C=D(8),P=m(C),c=D(11),A=m(c),L=D(5),h=function(y){if(!y)return{};var f=A.default.navigationStart();return{bytesLoaded:y.total,requestStart:Math.round(f+y.trequest),responseStart:Math.round(f+y.tfirst),responseEnd:Math.round(f+y.tload)}},s=function(y){if(y&&typeof y.getAllResponseHeaders=="function")return(0,P.default)(y.getAllResponseHeaders())},a=function(y,f,d){var g=(arguments.length>3&&arguments[3]!==void 0&&arguments[3],arguments[4]),_=y.log;if(!A.default.exists())return void _.warn("performance timing not supported. Not tracking HLS.js.");var p=function(B,N){return y.emit(f,B,N)},u=function(B,N){var K=N.levels,W=N.audioTracks,G=N.url,V=N.stats,X=N.networkDetails,Z={},q={};K.forEach(function(ue,he){Z[he]={width:ue.width,height:ue.height,bitrate:ue.bitrate,attrs:ue.attrs}}),W.forEach(function(ue,he){q[he]={name:ue.name,language:ue.lang,bitrate:ue.bitrate}});var J=h(V),ee=J.bytesLoaded,ie=J.requestStart,oe=J.responseStart,le=J.responseEnd;p("requestcompleted",{request_event_type:B,request_bytes_loaded:ee,request_start:ie,request_response_start:oe,request_response_end:le,request_type:"manifest",request_hostname:(0,L.extractHostname)(G),request_response_headers:s(X),request_rendition_lists:{media:Z,audio:q,video:{}}})};d.on(g.Events.MANIFEST_LOADED,u);var i=function(B,N){var K=N.details,W=N.level,G=N.networkDetails,V=N.stats,X=h(V),Z=X.bytesLoaded,q=X.requestStart,J=X.responseStart,ee=X.responseEnd;p("requestcompleted",{request_event_type:B,request_bytes_loaded:Z,request_start:q,request_response_start:J,request_response_end:ee,request_current_level:W,request_type:"manifest",request_hostname:(0,L.extractHostname)(K.url),request_response_headers:s(G)})};d.on(g.Events.LEVEL_LOADED,i);var n=function(B,N){var K=N.details,W=N.networkDetails,G=N.stats,V=h(G),X=V.bytesLoaded,Z=V.requestStart,q=V.responseStart,J=V.responseEnd;p("requestcompleted",{request_event_type:B,request_bytes_loaded:X,request_start:Z,request_response_start:q,request_response_end:J,request_type:"manifest",request_hostname:(0,L.extractHostname)(K.url),request_response_headers:s(W)})};d.on(g.Events.AUDIO_TRACK_LOADED,n);var E=function(B,N){var K=N.stats,W=N.networkDetails,G=N.frag,V=h(K),X=V.bytesLoaded,Z=V.requestStart,q=V.responseStart,J=V.responseEnd,ee={request_event_type:B,request_bytes_loaded:X,request_start:Z,request_response_start:q,request_response_end:J,request_hostname:W?(0,L.extractHostname)(W.responseURL):void 0,request_response_headers:s(W),request_media_duration:G.duration};G.type==="main"?(ee.request_type="media",ee.request_current_level=G.level,ee.request_video_width=(d.levels[G.level]||{}).width,ee.request_video_height=(d.levels[G.level]||{}).height):ee.request_type=G.type,p("requestcompleted",ee)};d.on(g.Events.FRAG_LOADED,E);var S=function(B,N){var K=N.details,W=N.response,G=N.context,V=N.frag;if(K===g.ErrorDetails.MANIFEST_LOAD_ERROR||K===g.ErrorDetails.MANIFEST_LOAD_TIMEOUT||K===g.ErrorDetails.FRAG_LOAD_ERROR||K===g.ErrorDetails.FRAG_LOAD_TIMEOUT||K===g.ErrorDetails.LEVEL_LOAD_ERROR||K===g.ErrorDetails.LEVEL_LOAD_TIMEOUT){var X=V&&V.url||G&&G.url||"";p("requestfailed",{request_error:K,request_url:X,request_hostname:(0,L.extractHostname)(X),request_type:K===g.ErrorDetails.FRAG_LOAD_ERROR||K===g.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":"manifest",request_error_code:W&&W.code,request_error_text:W&&W.text})}};d.on(g.Events.ERROR,S);var I=function(B,N){var K=N.frag,W=K&&K._url||"";p("requestcanceled",{request_cancel:B,request_url:W,request_type:"media",request_hostname:(0,L.extractHostname)(W)})};d.on(g.Events.FRAG_LOAD_EMERGENCY_ABORTED,I);var x=function(B,N){var K=N.level,W=d.levels.find(function(V){return V.level===K});if(W&&W.attrs&&W.attrs.BANDWIDTH){var G=W.attrs.BANDWIDTH;G?p("renditionchange",{video_source_bitrate:G,video_source_width:W.width,video_source_height:W.height}):_.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};d.on(g.Events.LEVEL_SWITCHED,x),d._stopMuxMonitor=function(){d.off(g.Events.MANIFEST_LOADED,u),d.off(g.Events.LEVEL_LOADED,i),d.off(g.Events.AUDIO_TRACK_LOADED,n),d.off(g.Events.FRAG_LOADED,E),d.off(g.Events.ERROR,S),d.off(g.Events.FRAG_LOAD_EMERGENCY_ABORTED,I),d.off(g.Events.LEVEL_SWITCHED,x),d.off(g.Events.DESTROYING,d._stopMuxMonitor),delete d._stopMuxMonitor},d.on(g.Events.DESTROYING,d._stopMuxMonitor)},l=function(y){y&&typeof y._stopMuxMonitor=="function"&&y._stopMuxMonitor()};O.monitorHlsJs=a,O.stopMonitoringHlsJs=l},function(w,O,D){"use strict";function m(y){return y&&y.__esModule?y:{default:y}}Object.defineProperty(O,"__esModule",{value:!0}),O.stopMonitoringDashJS=O.monitorDashJS=void 0;var C=D(0),P=m(C),c=D(8),A=m(c),L=D(5),h=function(y,f){if(!y||typeof y.getRequests!="function")return{};var d=y.getRequests({state:"executed"});if(d.length===0)return{};var g=d[d.length-1],_=(0,L.extractHostname)(g.url),p=g.bytesLoaded,u=new Date(g.requestStartDate).getTime(),i=new Date(g.firstByteDate).getTime(),n=new Date(g.requestEndDate).getTime(),E=isNaN(g.duration)?0:g.duration,S=typeof f.getMetricsFor=="function"?f.getMetricsFor(g.mediaType).HttpList:f.getDashMetrics().getHttpRequests(g.mediaType),I=void 0;return S.length>0&&(I=(0,A.default)(S[S.length-1]._responseHeaders||"")),{requestStart:u,requestResponseStart:i,requestResponseEnd:n,requestBytesLoaded:p,requestResponseHeaders:I,requestMediaDuration:E,requestHostname:_}},s=function(y,f){var d=f.getQualityFor(y),g=f.getCurrentTrackFor(y),_=g.bitrateList;return _?{currentLevel:d,renditionWidth:_[d].width||null,renditionHeight:_[d].height||null,renditionBitrate:_[d].bandwidth}:{}},a=function(y,f,d){var g=(arguments.length>3&&arguments[3]!==void 0&&arguments[3],y.log);if(!d||!d.on)return void g.warn("Invalid dash.js player reference. Monitoring blocked.");var _=function(B,N){return y.emit(f,B,N)},p=function(B){var N=B.type,K=B.data,W=K||{},G=W.url;_("requestcompleted",{request_event_type:N,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:(0,L.extractHostname)(G)})};d.on("manifestLoaded",p);var u={},i=function(B){var N=B.type,K=B.fragmentModel,W=B.chunk,G=W||{},V=G.mediaInfo,X=V||{},Z=X.type,q=X.bitrateList;q=q||[];var J={};q.forEach(function(Se,ye){J[ye]={},J[ye].width=Se.width,J[ye].height=Se.height,J[ye].bitrate=Se.bandwidth,J[ye].attrs={}}),Z==="video"?u.video=J:Z==="audio"?u.audio=J:u.media=J;var ee=h(K,d),ie=ee.requestStart,oe=ee.requestResponseStart,le=ee.requestResponseEnd,ue=ee.requestResponseHeaders,he=ee.requestMediaDuration,me=ee.requestHostname;_("requestcompleted",{request_event_type:N,request_start:ie,request_response_start:oe,request_response_end:le,request_bytes_loaded:-1,request_type:Z+"_init",request_response_headers:ue,request_hostname:me,request_media_duration:he,request_rendition_lists:u})};d.on("initFragmentLoaded",i);var n=function(B){var N=B.type,K=B.fragmentModel,W=B.chunk,G=W||{},V=G.mediaInfo,X=G.start,Z=V||{},q=Z.type,J=h(K,d),ee=J.requestStart,ie=J.requestResponseStart,oe=J.requestResponseEnd,le=J.requestBytesLoaded,ue=J.requestResponseHeaders,he=J.requestMediaDuration,me=J.requestHostname,Se=s(q,d),ye=Se.currentLevel,_e=Se.renditionWidth,Ce=Se.renditionHeight,Me=Se.renditionBitrate;_("requestcompleted",{request_event_type:N,request_start:ee,request_response_start:ie,request_response_end:oe,request_bytes_loaded:le,request_type:q,request_response_headers:ue,request_hostname:me,request_media_start_time:X,request_media_duration:he,request_current_level:ye,request_labeled_bitrate:Me,request_video_width:_e,request_video_height:Ce})};d.on("mediaFragmentLoaded",n);var E={video:void 0,audio:void 0,totalBitrate:void 0},S=function(){if(E.video&&typeof E.video.bitrate=="number"){if(!E.video.width||!E.video.height)return void g.warn("have bitrate info for video but missing width/height");var B=E.video.bitrate;return E.audio&&typeof E.audio.bitrate=="number"&&(B+=E.audio.bitrate),B!==E.totalBitrate?(E.totalBitrate=B,{video_source_bitrate:B,video_source_height:E.video.height,video_source_width:E.video.width}):void 0}},I=function(B,N,K){if(typeof B.newQuality!="number")return void g.warn("missing evt.newQuality in qualityChangeRendered event",B);var W=B.mediaType;if(W==="audio"||W==="video"){var G=d.getBitrateInfoListFor(W).find(function(X){return X.qualityIndex===B.newQuality});if(!G||typeof G.bitrate!="number")return void g.warn("missing bitrate info for "+W);E[W]=G;var V=S();V&&_("renditionchange",V)}};d.on("qualityChangeRendered",I);var x=function(B){var N=B.error,K=B.event;K=K||{};var W=K.request||{},G=P.default.event&&P.default.event.currentTarget||{};_("requestfailed",{request_error:N+"_"+K.id+"_"+W.type,request_url:K.url,request_hostname:(0,L.extractHostname)(K.url),request_type:W.mediaType,request_error_code:G.status,request_error_type:G.statusText})};d.on("error",x),d._stopMuxMonitor=function(){d.off("manifestLoaded",p),d.off("initFragmentLoaded",i),d.off("mediaFragmentLoaded",n),d.off("qualityChangeRendered",I),d.off("error",x),delete d._stopMuxMonitor}},l=function(y){y&&typeof y._stopMuxMonitor=="function"&&y._stopMuxMonitor()};O.monitorDashJS=a,O.stopMonitoringDashJS=l},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=function(){},C=0;m.prototype.on=function(P,c,A){return c._eventEmitterGuid=c._eventEmitterGuid||++C,this._listeners=this._listeners||{},this._listeners[P]=this._listeners[P]||[],A&&(c=c.bind(A)),this._listeners[P].push(c),c},m.prototype.off=function(P,c){var A=this._listeners&&this._listeners[P];A&&A.forEach(function(L,h){L._eventEmitterGuid===c._eventEmitterGuid&&A.splice(h,1)})},m.prototype.one=function(P,c,A){var L=this;c._eventEmitterGuid=c._eventEmitterGuid||++C;var h=function s(){L.off(P,s),c.apply(A||this,arguments)};h._eventEmitterGuid=c._eventEmitterGuid,this.on(P,h)},m.prototype.emit=function(P,c){var A=this;if(this._listeners){c=c||{};var L=this._listeners["before*"]||[],h=this._listeners[P]||[],s=this._listeners["after"+P]||[],a=function(l,y){l=l.slice(),l.forEach(function(f){f.call(A,{type:P},y)})};a(L,c),a(h,c),a(s,c)}},O.default=m},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(0),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P=function(){this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,this.on("playing",function(){this._playheadShouldBeProgressing=!0}),this.on("play",this._startPlaybackHeartbeatInterval),this.on("playing",this._startPlaybackHeartbeatInterval),this.on("adbreakstart",this._startPlaybackHeartbeatInterval),this.on("adplay",this._startPlaybackHeartbeatInterval),this.on("adplaying",this._startPlaybackHeartbeatInterval),this.on("seeking",this._startPlaybackHeartbeatInterval),this.on("devicewake",this._startPlaybackHeartbeatInterval),this.on("viewstart",this._startPlaybackHeartbeatInterval),this.on("pause",this._stopPlaybackHeartbeatInterval),this.on("ended",this._stopPlaybackHeartbeatInterval),this.on("viewend",this._stopPlaybackHeartbeatInterval),this.on("error",this._stopPlaybackHeartbeatInterval),this.on("aderror",this._stopPlaybackHeartbeatInterval),this.on("adpause",this._stopPlaybackHeartbeatInterval),this.on("adended",this._stopPlaybackHeartbeatInterval),this.on("adbreakend",this._stopPlaybackHeartbeatInterval),this.on("seeked",function(){this.data.player_is_paused?this._stopPlaybackHeartbeatInterval():this._startPlaybackHeartbeatInterval()}),this.on("timeupdate",function(){this._playbackHeartbeatInterval!==null&&this.emit("playbackheartbeat")}),this.on("devicesleep",function(c,A){this._playbackHeartbeatInterval!==null&&(C.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend",{viewer_time:A.viewer_time}),this._playbackHeartbeatInterval=null)})};P.prototype._startPlaybackHeartbeatInterval=function(){var c=this;this._playbackHeartbeatInterval===null&&(this.emit("playbackheartbeat"),this._playbackHeartbeatInterval=C.default.setInterval(function(){c.emit("playbackheartbeat")},this.playbackHeartbeatTime))},P.prototype._stopPlaybackHeartbeatInterval=function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(C.default.clearInterval(this._playbackHeartbeatInterval),this.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)},O.default=P},function(w,O,D){"use strict";function m(){var C=this;this.on("viewinit",function(){C.viewErrored=!1}),this.on("error",function(){try{var P=C.errorTranslator({player_error_code:C.data.player_error_code,player_error_message:C.data.player_error_message});P?(C.data.player_error_code=P.player_error_code,C.data.player_error_message=P.player_error_message,C.viewErrored=!0):(delete C.data.player_error_code,delete C.data.player_error_message)}catch(c){C.mux.log.warn("Exception in error translator callback.",c),C.viewErrored=!0}})}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(2),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P=function(){this._watchTimeTrackerLastCheckedTime=null,this.on("playbackheartbeat",this._updateWatchTime),this.on("playbackheartbeatend",this._clearWatchTimeState)};P.prototype._updateWatchTime=function(c,A){var L=A.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=L),(0,C.default)(this.data,"view_watch_time",L-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=L},P.prototype._clearWatchTimeState=function(c,A){this._updateWatchTime(c,A),this._watchTimeTrackerLastCheckedTime=null},O.default=P},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(2),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P=function(){this._playbackTimeTrackerLastPlayheadPosition=-1,this.on("playbackheartbeat",this._updatePlaybackTime),this.on("playbackheartbeatend",this._clearPlaybackTimeState),this.on("seeking",this._clearPlaybackTimeState)};P.prototype._updatePlaybackTime=function(){var c=this.data.player_playhead_time;if(this._playbackTimeTrackerLastPlayheadPosition>=0&&c>this._playbackTimeTrackerLastPlayheadPosition){var A=c-this._playbackTimeTrackerLastPlayheadPosition;A<=1e3&&(0,C.default)(this.data,"view_content_playback_time",A)}this._playbackTimeTrackerLastPlayheadPosition=c},P.prototype._clearPlaybackTimeState=function(){this._updatePlaybackTime(),this._playbackTimeTrackerLastPlayheadPosition=-1},O.default=P},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=function(){this.on("playbackheartbeat",this._updatePlayheadTime),this.on("playbackheartbeatend",this._updatePlayheadTime),this.on("timeupdate",this._updatePlayheadTime),this.on("destroy",function(){this.off("timeupdate",this._updatePlayheadTime)})};m.prototype._updateMaxPlayheadPosition=function(){this.data.view_max_playhead_position=this.data.view_max_playhead_position===void 0?this.data.player_playhead_time:Math.max(this.data.view_max_playhead_position,this.data.player_playhead_time)},m.prototype._updatePlayheadTime=function(C,P){if(P.player_playhead_time)this.data.player_playhead_time=P.player_playhead_time,this._updateMaxPlayheadPosition();else if(this.getPlayheadTime){var c=this.getPlayheadTime();c!==void 0&&(this.data.player_playhead_time=c,this._updateMaxPlayheadPosition())}},O.default=m},function(w,O,D){"use strict";function m(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(O,"__esModule",{value:!0});var C=D(3),P=m(C),c=D(2),A=m(c),L=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,this.on("playbackheartbeat",this._checkIfRebuffering),this.on("playbackheartbeatend",this._cleanupRebufferTracker),this.on("seeking",function(){this._cleanupRebufferTracker(null,{viewer_time:P.default.now()})})};L.prototype._checkIfRebuffering=function(h,s){if(!this.disableRebufferTracking){if(this.isSeeking||this.isAdBreak||!this._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(h,s);if(this._lastCheckedTime===null)return this._prepareRebufferTrackerState(s.viewer_time),void this._updateRebufferMetrics();if(this._lastPlayheadTime!==this.data.player_playhead_time)return void this._cleanupRebufferTracker(h,s,!0);var a=s.viewer_time-this._lastPlayheadTimeUpdatedTime;a>=this.sustainedRebufferThreshold&&(this._rebuffering?this._updateRebufferMetrics(s.viewer_time-this._lastCheckedTime):(this._rebuffering=!0,(0,A.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(a),this.emit("rebufferstart"))),this._lastCheckedTime=s.viewer_time}},L.prototype._clearRebufferTrackerState=function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null},L.prototype._prepareRebufferTrackerState=function(h){this._lastCheckedTime=h,this._lastPlayheadTime=this.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=h},L.prototype._cleanupRebufferTracker=function(h,s){var a=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!this.disableRebufferTracking){if(this._rebuffering)this._rebuffering=!1,this._updateRebufferMetrics(s.viewer_time-this._lastCheckedTime),this.emit("rebufferend",{viewer_time:s.viewer_time});else{if(this._lastCheckedTime===null)return void this._updateRebufferMetrics();var l=this.data.player_playhead_time-this._lastPlayheadTime,y=s.viewer_time-this._lastPlayheadTimeUpdatedTime;l>0&&y-l>this.minimumRebufferDuration?((0,A.default)(this.data,"view_rebuffer_count",1),this._updateRebufferMetrics(y-l),this.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+y-l})):this._updateRebufferMetrics()}a?this._prepareRebufferTrackerState(s.viewer_time):this._clearRebufferTrackerState()}},L.prototype._updateRebufferMetrics=function(h){h>0&&(0,A.default)(this.data,"view_rebuffer_duration",h),this.data.view_watch_time>=0&&this.data.view_rebuffer_count>0&&(this.data.view_rebuffer_frequency=this.data.view_rebuffer_count/this.data.view_watch_time,this.data.view_rebuffer_percentage=this.data.view_rebuffer_duration/this.data.view_watch_time)},O.default=L},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(3),C=function(c){return c&&c.__esModule?c:{default:c}}(m),P=function(){this.on("viewinit",function(){var c=this.data,A=c.view_id;if(!c.view_program_changed){var L=function(h,s){var a=s.viewer_time;h.type==="playing"&&this.data.view_time_to_first_frame===void 0?this.calculateTimeToFirstFrame(a||C.default.now(),A):h.type!=="adplaying"||this.data.view_time_to_first_frame!==void 0&&!this.inPrerollPosition()||this.calculateTimeToFirstFrame(a||C.default.now(),A)};this.one("playing",L),this.one("adplaying",L),this.one("viewend",function(){this.off("playing",L),this.off("adplaying",L)})}})};P.prototype.calculateTimeToFirstFrame=function(c,A){A===this.data.view_id&&(this._updateWatchTime(null,{viewer_time:c}),this.data.view_time_to_first_frame=this.data.view_watch_time,(this.data.player_autoplay_on||this.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.data.view_aggregate_startup_time=this.data.view_start+this.data.view_watch_time-this.NAVIGATION_START))},O.default=P},function(w,O,D){"use strict";function m(){var c=this;this.on("viewinit",function(){this._lastPlayheadPosition=-1});var A=["pause","rebufferstart","seeking","error","adbreakstart","hb"],L=["playing","hb"];A.forEach(function(h){c.on(h,function(){if(this._lastPlayheadPosition>=0&&this.data.player_playhead_time>=0&&this._lastPlayerWidth>=0&&this._lastSourceWidth>0&&this._lastPlayerHeight>=0&&this._lastSourceHeight>0){var s=this.data.player_playhead_time-this._lastPlayheadPosition;if(s<0)return void(this._lastPlayheadPosition=-1);var a=Math.min(this._lastPlayerWidth/this._lastSourceWidth,this._lastPlayerHeight/this._lastSourceHeight),l=Math.max(0,a-1),y=Math.max(0,1-a);this.data.view_max_upscale_percentage=Math.max(this.data.view_max_upscale_percentage||0,l),this.data.view_max_downscale_percentage=Math.max(this.data.view_max_downscale_percentage||0,y),(0,P.default)(this.data,"view_total_content_playback_time",s),(0,P.default)(this.data,"view_total_upscaling",l*s),(0,P.default)(this.data,"view_total_downscaling",y*s)}this._lastPlayheadPosition=-1})}),L.forEach(function(h){c.on(h,function(){this._lastPlayheadPosition=this.data.player_playhead_time,this._lastPlayerWidth=this.data.player_width,this._lastPlayerHeight=this.data.player_height,this._lastSourceWidth=this.data.video_source_width,this._lastSourceHeight=this.data.video_source_height})})}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m;var C=D(2),P=function(c){return c&&c.__esModule?c:{default:c}}(C)},function(w,O,D){"use strict";function m(a){return a&&a.__esModule?a:{default:a}}function C(){this.isSeeking=!1,this.on("seeking",function(a,l){(0,s.default)(this.data,l),this._lastSeekingTime=c.default.now(),this.isSeeking===!1&&(this.isSeeking=!0,this.send("seeking"))}),this.on("seeked",function(){this.isSeeking=!1;var a=this._lastSeekingTime||c.default.now(),l=c.default.now()-a;(0,L.default)(this.data,"view_seek_count",1),(0,L.default)(this.data,"view_seek_duration",l);var y=this.data.view_max_seek_time||0;this.data.view_max_seek_time=Math.max(y,l)}),this.on("viewend",function(){this.isSeeking=!1})}Object.defineProperty(O,"__esModule",{value:!0}),O.default=C;var P=D(3),c=m(P),A=D(2),L=m(A),h=D(1),s=m(h)},function(w,O,D){"use strict";function m(y){return y&&y.__esModule?y:{default:y}}Object.defineProperty(O,"__esModule",{value:!0});var C=function(){function y(f,d){var g=[],_=!0,p=!1,u=void 0;try{for(var i,n=f[Symbol.iterator]();!(_=(i=n.next()).done)&&(g.push(i.value),!d||g.length!==d);_=!0);}catch(E){p=!0,u=E}finally{try{!_&&n.return&&n.return()}finally{if(p)throw u}}return g}return function(f,d){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return y(f,d);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=D(2),c=m(P),A=D(5),L=D(1),h=m(L),s=function(y,f){y.push(f),y.sort(function(d,g){return d.viewer_time-g.viewer_time})},a=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror"],l=function(){var y=this;this.on("viewinit",function(){this.isAdBreak=!1,this._currentAdRequestNumber=0,this._currentAdResponseNumber=0,this._adRequests=[],this._adResponses=[],this._adHasPlayed=!1,this._wouldBeNewAdPlay=!0,this._prerollPlayTime=void 0}),a.forEach(function(d){return y.on(d,y._updateAdData)});var f=function(){y.isAdBreak=!1};this.on("adbreakstart",function(){this.isAdBreak=!0}),this.on("play",f),this.on("playing",f),this.on("viewend",f),this.on("adrequest",function(d,g){g=(0,h.default)({ad_request_id:"generatedAdRequestId"+this._currentAdRequestNumber++},g),s(this._adRequests,g),(0,c.default)(this.data,"view_ad_request_count"),this.inPrerollPosition()&&(this.data.view_preroll_requested=!0,this._adHasPlayed||(0,c.default)(this.data,"view_preroll_request_count"))}),this.on("adresponse",function(d,g){g=(0,h.default)({ad_request_id:"generatedAdRequestId"+this._currentAdResponseNumber++},g),s(this._adResponses,g);var _=this.findAdRequest(g.ad_request_id);_&&(0,c.default)(this.data,"view_ad_request_time",Math.max(0,g.viewer_time-_.viewer_time))}),this.on("adplay",function(d,g){this._adHasPlayed=!0,this._wouldBeNewAdPlay&&(this._wouldBeNewAdPlay=!1,(0,c.default)(this.data,"view_ad_played_count")),this.inPrerollPosition()&&!this.data.view_preroll_played&&(this.data.view_preroll_played=!0,this._adRequests.length>0&&(this.data.view_preroll_request_time=Math.max(0,g.viewer_time-this._adRequests[0].viewer_time)),this.data.view_start&&(this.data.view_startup_preroll_request_time=Math.max(0,g.viewer_time-this.data.view_start)),this._prerollPlayTime=g.viewer_time)}),this.on("adplaying",function(d,g){this.inPrerollPosition()&&this.data.view_preroll_load_time===void 0&&this._prerollPlayTime!==void 0&&(this.data.view_preroll_load_time=g.viewer_time-this._prerollPlayTime,this.data.view_startup_preroll_load_time=g.viewer_time-this._prerollPlayTime)}),this.on("adended",function(){this._wouldBeNewAdPlay=!0}),this.on("aderror",function(){this._wouldBeNewAdPlay=!0})};l.prototype.inPrerollPosition=function(){return this.data.view_content_playback_time===void 0||this.data.view_content_playback_time<=1e3},l.prototype.findAdRequest=function(y){for(var f=0;f<this._adRequests.length;f++)if(this._adRequests[f].ad_request_id===y)return this._adRequests[f]},l.prototype._updateAdData=function(y,f){if(this.inPrerollPosition()){if(!this.data.view_preroll_ad_tag_hostname&&f.ad_tag_url){var d=(0,A.extractHostnameAndDomain)(f.ad_tag_url),g=C(d,2),_=g[0],p=g[1];this.data.view_preroll_ad_tag_domain=p,this.data.view_preroll_ad_tag_hostname=_}if(!this.data.view_preroll_ad_asset_hostname&&f.ad_asset_url){var u=(0,A.extractHostnameAndDomain)(f.ad_asset_url),i=C(u,2),n=i[0],E=i[1];this.data.view_preroll_ad_asset_domain=E,this.data.view_preroll_ad_asset_hostname=n}}},O.default=l},function(w,O,D){"use strict";function m(h){return h&&h.__esModule?h:{default:h}}function C(){var h=this,s=void 0,a=void 0,l=function(){h.disableRebufferTracking||((0,L.default)(h.data,"view_waiting_rebuffer_count",1),s=c.default.now(),a=window.setInterval(function(){if(s){var _=c.default.now();(0,L.default)(h.data,"view_waiting_rebuffer_duration",_-s),s=_}},250))},y=function(){h.disableRebufferTracking||s&&((0,L.default)(h.data,"view_waiting_rebuffer_duration",c.default.now()-s),s=!1,window.clearInterval(a))},f=!1,d=function(){f=!0},g=function(){f=!1,y()};this.on("waiting",function(){f&&l()}),this.on("playing",function(){y(),d()}),this.on("pause",g),this.on("seeking",g)}Object.defineProperty(O,"__esModule",{value:!0}),O.default=C;var P=D(3),c=m(P),A=D(2),L=m(A)},function(w,O,D){"use strict";function m(a){return a&&a.__esModule?a:{default:a}}function C(){var a=this;this.one("playbackheartbeat",h),this.on("playbackheartbeatend",function(){a.off("before*",s),a.one("playbackheartbeat",h)})}Object.defineProperty(O,"__esModule",{value:!0}),O.default=C;var P=D(1),c=m(P),A=D(3),L=m(A),h=function(){this.lastWallClockTime=L.default.now(),this.on("before*",s)},s=function(a){var l=L.default.now(),y=this.lastWallClockTime;this.lastWallClockTime=l,l-y>3e4&&(this.emit("devicesleep",{viewer_time:y}),(0,c.default)(this.data,{viewer_time:y}),this.send("devicesleep"),this.emit("devicewake",{viewer_time:l}),(0,c.default)(this.data,{viewer_time:l}),this.send("devicewake"))}},function(w,O,D){"use strict";function m(N){return N&&N.__esModule?N:{default:N}}Object.defineProperty(O,"__esModule",{value:!0});var C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},P=D(0),c=m(P),A=D(41),L=D(4),h=m(L),s=D(45),a=m(s),l=D(10),y=m(l),f=D(46),d=m(f),g=D(15),_=m(g),p=D(47),u=m(p),i=D(1),n=m(i),E=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id"],S=["viewstart","error","ended","viewend"],I=function(N,K){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.mux=N,this.envKey=K,this.eventQueue=new u.default((0,a.default)(K,W.beaconDomain)),this.previousBeaconData=null,this.lastEventTime=null,this.sampleRate=W.sampleRate,this.disableCookies=W.disableCookies,this.respectDoNotTrack=W.respectDoNotTrack;var G=W.platform||{};this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:G.name,viewer_application_version:G.version,viewer_application_engine:G.layout,viewer_device_name:G.product,viewer_device_category:"",viewer_device_manufacturer:G.manufacturer,viewer_os_family:G.os&&G.os.family,viewer_os_architecture:G.os&&G.os.architecture,viewer_os_version:G.os&&G.os.version};var V=(0,d.default)();V&&(this.pageLevelData=(0,n.default)(this.pageLevelData,{viewer_connection_type:V})),c.default!==void 0&&c.default.location&&c.default.location.href&&(this.pageLevelData.page_url=c.default.location.href),this.viewerData=this.disableCookies?{}:(0,A.getAndUpdateViewerData)()};I.prototype.send=function(N,K){if(N){if(this.respectDoNotTrack&&(0,y.default)())return h.default.info("Not sending `"+N+"` because Do Not Track is enabled");if(!K||(K===void 0?"undefined":C(K))!=="object")return h.default.error("A data object was expected in send() but was not provided");var W=this.disableCookies?{}:(0,A.getAndUpdateSessionData)(),G={};(0,n.default)(G,this.pageLevelData),(0,n.default)(G,K),(0,n.default)(G,W),(0,n.default)(G,this.viewerData),G.event=N,G.env_key=this.envKey,G.user_id&&(G.viewer_user_id=G.user_id,delete G.user_id);var V=G.mux_sample_number>=this.sampleRate,X=this._deduplicateBeaconData(N,G),Z=(0,_.default)(X);if(this.lastEventTime=this.mux.utils.now(),V)return h.default.info("Not sending event due to sample rate restriction",N,G,Z);if(!this.envKey)return h.default.info("Not sending event due to missing environment key",N,G,Z);if(!this.rateLimited){if(h.default.info("Sending event",N,G,Z),this.rateLimited=!this.eventQueue.queueEvent(N,Z),this.mux.WINDOW_UNLOADING&&N==="viewend")this.eventQueue.destroy(!0);else if(S.indexOf(N)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return G.event="eventrateexceeded",Z=(0,_.default)(G),this.eventQueue.queueEvent(G.event,Z),h.default.error("Beaconing disabled due to rate limit.")}}},I.prototype.destroy=function(){this.eventQueue.destroy(!1)};var x=function(N,K,W,G){return!(!N||K.indexOf("request_")!==0||K!=="request_response_headers"&&(W===void 0?"undefined":C(W))==="object"&&(G===void 0?"undefined":C(G))==="object"&&Object.keys(W||{}).length===Object.keys(G||{}).length)},B=function(N,K){return N==="renditionchange"&&K.indexOf("video_source_")===0};I.prototype._deduplicateBeaconData=function(N,K){var W=this,G={},V=K.view_id;if(!V||N==="viewstart"||N==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)G=(0,n.default)({},K),V&&(this.previousBeaconData=G),V&&N==="viewend"&&(this.previousBeaconData=null);else{var X=N.indexOf("request")===0;Object.keys(K).forEach(function(Z){var q=K[Z];(q!==W.previousBeaconData[Z]||E.indexOf(Z)>-1||x(X,Z,q,W.previousBeaconData[Z])||B(N,Z))&&(G[Z]=q,W.previousBeaconData[Z]=q)})}return G},O.default=I},function(w,O,D){"use strict";function m(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(O,"__esModule",{value:!0}),O.getAndUpdateSessionData=O.getAndUpdateViewerData=void 0;var C=D(12),P=m(C),c=D(44),A=m(c),L=D(7),h=D(3),s=m(h),a=function(){var d=void 0;try{d=P.default.parse(A.default.get("muxData")||"")}catch(g){d={}}return d},l=function(d){try{A.default.set("muxData",P.default.stringify(d),{expires:7300})}catch(g){}},y=function(){var d=a();return d.mux_viewer_id=d.mux_viewer_id||(0,L.generateUUID)(),d.msn=d.msn||Math.random(),l(d),{mux_viewer_id:d.mux_viewer_id,mux_sample_number:d.msn}},f=function(){var d=a(),g=s.default.now();return d.session_start&&(d.sst=d.session_start,delete d.session_start),d.session_id&&(d.sid=d.session_id,delete d.session_id),d.session_expires&&(d.sex=d.session_expires,delete d.session_expires),(!d.sex||d.sex<g)&&(d.sid=(0,L.generateUUID)(),d.sst=g),d.sex=g+15e5,l(d),{session_id:d.sid,session_start:d.sst,session_expires:d.sex}};O.getAndUpdateViewerData=y,O.getAndUpdateSessionData=f},function(w,O,D){"use strict";var m=D(13),C=D(14),P={brackets:function(h){return h+"[]"},indices:function(h,s){return h+"["+s+"]"},repeat:function(h){return h}},c=Date.prototype.toISOString,A={delimiter:"&",encode:!0,encoder:m.encode,encodeValuesOnly:!1,serializeDate:function(h){return c.call(h)},skipNulls:!1,strictNullHandling:!1},L=function h(s,a,l,y,f,d,g,_,p,u,i,n){var E=s;if(typeof g=="function")E=g(a,E);else if(E instanceof Date)E=u(E);else if(E===null){if(y)return d&&!n?d(a,A.encoder):a;E=""}if(typeof E=="string"||typeof E=="number"||typeof E=="boolean"||m.isBuffer(E))return d?[i(n?a:d(a,A.encoder))+"="+i(d(E,A.encoder))]:[i(a)+"="+i(String(E))];var S=[];if(E===void 0)return S;var I;if(Array.isArray(g))I=g;else{var x=Object.keys(E);I=_?x.sort(_):x}for(var B=0;B<I.length;++B){var N=I[B];f&&E[N]===null||(S=Array.isArray(E)?S.concat(h(E[N],l(a,N),l,y,f,d,g,_,p,u,i,n)):S.concat(h(E[N],a+(p?"."+N:"["+N+"]"),l,y,f,d,g,_,p,u,i,n)))}return S};w.exports=function(h,s){var a=h,l=s?m.assign({},s):{};if(l.encoder!==null&&l.encoder!==void 0&&typeof l.encoder!="function")throw new TypeError("Encoder has to be a function.");var y=l.delimiter===void 0?A.delimiter:l.delimiter,f=typeof l.strictNullHandling=="boolean"?l.strictNullHandling:A.strictNullHandling,d=typeof l.skipNulls=="boolean"?l.skipNulls:A.skipNulls,g=typeof l.encode=="boolean"?l.encode:A.encode,_=typeof l.encoder=="function"?l.encoder:A.encoder,p=typeof l.sort=="function"?l.sort:null,u=l.allowDots!==void 0&&l.allowDots,i=typeof l.serializeDate=="function"?l.serializeDate:A.serializeDate,n=typeof l.encodeValuesOnly=="boolean"?l.encodeValuesOnly:A.encodeValuesOnly;if(l.format===void 0)l.format=C.default;else if(!Object.prototype.hasOwnProperty.call(C.formatters,l.format))throw new TypeError("Unknown format option provided.");var E,S,I=C.formatters[l.format];typeof l.filter=="function"?(S=l.filter,a=S("",a)):Array.isArray(l.filter)&&(S=l.filter,E=S);var x=[];if(typeof a!="object"||a===null)return"";var B;B=l.arrayFormat in P?l.arrayFormat:"indices"in l?l.indices?"indices":"repeat":"indices";var N=P[B];E||(E=Object.keys(a)),p&&E.sort(p);for(var K=0;K<E.length;++K){var W=E[K];d&&a[W]===null||(x=x.concat(L(a[W],W,N,f,d,g?_:null,S,p,u,i,I,n)))}var G=x.join(y),V=l.addQueryPrefix===!0?"?":"";return G.length>0?V+G:""}},function(w,O,D){"use strict";var m=D(13),C=Object.prototype.hasOwnProperty,P={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:m.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},c=function(h,s){for(var a={},l=s.ignoreQueryPrefix?h.replace(/^\?/,""):h,y=s.parameterLimit===1/0?void 0:s.parameterLimit,f=l.split(s.delimiter,y),d=0;d<f.length;++d){var g,_,p=f[d],u=p.indexOf("]="),i=u===-1?p.indexOf("="):u+1;i===-1?(g=s.decoder(p,P.decoder),_=s.strictNullHandling?null:""):(g=s.decoder(p.slice(0,i),P.decoder),_=s.decoder(p.slice(i+1),P.decoder)),C.call(a,g)?a[g]=[].concat(a[g]).concat(_):a[g]=_}return a},A=function(h,s,a){for(var l=s,y=h.length-1;y>=0;--y){var f,d=h[y];if(d==="[]")f=[],f=f.concat(l);else{f=a.plainObjects?Object.create(null):{};var g=d.charAt(0)==="["&&d.charAt(d.length-1)==="]"?d.slice(1,-1):d,_=parseInt(g,10);!isNaN(_)&&d!==g&&String(_)===g&&_>=0&&a.parseArrays&&_<=a.arrayLimit?(f=[],f[_]=l):f[g]=l}l=f}return l},L=function(h,s,a){if(h){var l=a.allowDots?h.replace(/\.([^.[]+)/g,"[$1]"):h,y=/(\[[^[\]]*])/,f=/(\[[^[\]]*])/g,d=y.exec(l),g=d?l.slice(0,d.index):l,_=[];if(g){if(!a.plainObjects&&C.call(Object.prototype,g)&&!a.allowPrototypes)return;_.push(g)}for(var p=0;(d=f.exec(l))!==null&&p<a.depth;){if(p+=1,!a.plainObjects&&C.call(Object.prototype,d[1].slice(1,-1))&&!a.allowPrototypes)return;_.push(d[1])}return d&&_.push("["+l.slice(d.index)+"]"),A(_,s,a)}};w.exports=function(h,s){var a=s?m.assign({},s):{};if(a.decoder!==null&&a.decoder!==void 0&&typeof a.decoder!="function")throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=a.ignoreQueryPrefix===!0,a.delimiter=typeof a.delimiter=="string"||m.isRegExp(a.delimiter)?a.delimiter:P.delimiter,a.depth=typeof a.depth=="number"?a.depth:P.depth,a.arrayLimit=typeof a.arrayLimit=="number"?a.arrayLimit:P.arrayLimit,a.parseArrays=a.parseArrays!==!1,a.decoder=typeof a.decoder=="function"?a.decoder:P.decoder,a.allowDots=typeof a.allowDots=="boolean"?a.allowDots:P.allowDots,a.plainObjects=typeof a.plainObjects=="boolean"?a.plainObjects:P.plainObjects,a.allowPrototypes=typeof a.allowPrototypes=="boolean"?a.allowPrototypes:P.allowPrototypes,a.parameterLimit=typeof a.parameterLimit=="number"?a.parameterLimit:P.parameterLimit,a.strictNullHandling=typeof a.strictNullHandling=="boolean"?a.strictNullHandling:P.strictNullHandling,h===""||h===null||h===void 0)return a.plainObjects?Object.create(null):{};for(var l=typeof h=="string"?c(h,a):h,y=a.plainObjects?Object.create(null):{},f=Object.keys(l),d=0;d<f.length;++d){var g=f[d],_=L(g,l[g],a);y=m.merge(y,_,a)}return m.compact(y)}},function(w,O,D){"use strict";var m,C,P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c){var A=!1;if(m=c,(C=typeof m=="function"?m.call(O,D,O,w):m)!==void 0&&(w.exports=C),A=!0,P(O)==="object"&&(w.exports=c(),A=!0),!A){var L=window.Cookies,h=window.Cookies=c();h.noConflict=function(){return window.Cookies=L,h}}})(function(){function c(L){function h(s,a,l){var y;if(typeof document!="undefined"){if(arguments.length>1){if(l=A({path:"/"},h.defaults,l),typeof l.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*l.expires),l.expires=f}try{y=JSON.stringify(a),/^[\{\[]/.test(y)&&(a=y)}catch(n){}return a=L.write?L.write(a,s):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),s=encodeURIComponent(String(s)),s=s.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),s=s.replace(/[\(\)]/g,escape),document.cookie=[s,"=",a,l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}s||(y={});for(var d=document.cookie?document.cookie.split("; "):[],g=/(%[0-9A-Z]{2})+/g,_=0;_<d.length;_++){var p=d[_].split("="),u=p.slice(1).join("=");u.charAt(0)==='"'&&(u=u.slice(1,-1));try{var i=p[0].replace(g,decodeURIComponent);if(u=L.read?L.read(u,i):L(u,i)||u.replace(g,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(n){}if(s===i){y=u;break}s||(y[i]=u)}catch(n){}}return y}}return h.set=h,h.get=function(s){return h.call(h,s)},h.getJSON=function(){return h.apply({json:!0},[].slice.call(arguments))},h.defaults={},h.remove=function(s,a){h(s,"",A(a,{expires:-1}))},h.withConverter=c,h}var A=function(){for(var L=0,h={};L<arguments.length;L++){var s=arguments[L];for(var a in s)h[a]=s[a]}return h};return c(function(){})})},function(w,O,D){"use strict";function m(C,P){return C=C||"",P=P||"litix.io",C.match(/^[a-z0-9]+$/)?"https://"+C+"."+P:"https://img.litix.io/a.gif"}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m},function(w,O,D){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var m=D(0),C=function(A){return A&&A.__esModule?A:{default:A}}(m),P=function(){var A=void 0;switch(c()){case"cellular":A="cellular";break;case"ethernet":A="wired";break;case"wifi":A="wifi";break;case void 0:break;default:A="other"}return A},c=function(){var A=C.default.navigator,L=A&&(A.connection||A.mozConnection||A.webkitConnection);return L&&L.type};O.default=P},function(w,O,D){"use strict";function m(_){return _&&_.__esModule?_:{default:_}}Object.defineProperty(O,"__esModule",{value:!0});var C=D(0),P=m(C),c=D(4),A=m(c),L=D(48),h=m(L),s=D(1),a=m(s),l=D(15),y=m(l),f=!!P.default.XMLHttpRequest&&"withCredentials"in new P.default.XMLHttpRequest,d={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:5e3},g=function(_,p){this._beaconUrl=_||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=(0,a.default)({},d,p)};g.prototype.queueEvent=function(_,p){var u=(0,a.default)({},p);return f?(this._eventQueue.length<=this._options.maxQueueLength||_==="eventrateexceeded")&&(this._eventQueue.push(u),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):(h.default.send(this._beaconUrl,u),!0)},g.prototype.flushEvents=function(){f&&(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},g.prototype.destroy=function(){var _=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.destroyed=!0,_?this._clearBeaconQueue():this.flushEvents(),P.default.clearTimeout(this._sendTimeout)},g.prototype._clearBeaconQueue=function(){var _=P.default.navigator,p=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,u=this._eventQueue.slice(p);if(p>0&&(0,a.default)(u[u.length-1],(0,y.default)({mux_view_message:"event queue truncated"})),_.sendBeacon)_.sendBeacon(this._beaconUrl,JSON.stringify({events:u}));else if(P.default.XMLHttpRequest){var i=new P.default.XMLHttpRequest;i.open("POST",this._beaconUrl),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify({events:u}))}else h.default.send(this._beaconUrl,u[u.length-1])},g.prototype._sendBeaconQueue=function(){var _=this;if(P.default.XMLHttpRequest&&!this._postInFlight){var p=new P.default.XMLHttpRequest,u=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0,p.onreadystatechange=function(){p.readyState===4&&(p.status!==200?(_._eventQueue=u.concat(_._eventQueue),_._failureCount+=1,A.default.info("Error sending beacon: "+p.status),A.default.info(p.responseText)):_._failureCount=0,_._postInFlight=!1)},p.open("POST",this._beaconUrl),p.setRequestHeader("Content-Type","application/json"),p.send(JSON.stringify({events:u}))}},g.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var _=Math.pow(2,this._failureCount-1);return(1+(_*=Math.random()))*this._options.baseTimeBetweenBeacons},g.prototype._startBeaconSending=function(){var _=this;P.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=P.default.setTimeout(function(){_._eventQueue.length&&_._sendBeaconQueue(),_._startBeaconSending()},this._getNextBeaconTime()))},O.default=g},function(w,O,D){"use strict";function m(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(O,"__esModule",{value:!0});var C=D(12),P=m(C),c=D(0),A=m(c),L={};L.send=function(h,s){function a(){l.src=f+(y?"&rc="+y:"")}var l=new Image,y=0,f=h+"?"+P.default.stringify(s);return l.addEventListener("error",function(){y>3||A.default.setTimeout(function(){y++,a()},5e3*y)}),a(),l},O.default=L},function(w,O,D){"use strict";function m(){function C(f,d){var g=d.request_start,_=d.request_response_start,p=d.request_response_end,u=d.request_bytes_loaded;s++;var i=void 0,n=void 0;if(_?(i=_-g,n=p-_):n=p-g,n>0&&u>0){var E=u/n*8e3;a++,L+=u,h+=n,this.data.view_min_request_throughput=Math.min(this.data.view_min_request_throughput||1/0,E),this.data.view_average_request_throughput=L/h*8e3,this.data.view_request_count=s,i>0&&(A+=i,this.data.view_max_request_latency=Math.max(this.data.view_max_request_latency||0,i),this.data.view_average_request_latency=A/a)}}function P(f,d){s++,l++,this.data.view_request_count=s,this.data.view_request_failed_count=l}function c(f,d){s++,y++,this.data.view_request_count=s,this.data.view_request_canceled_count=y}var A=0,L=0,h=0,s=0,a=0,l=0,y=0;this.on("requestcompleted",C),this.on("requestfailed",P),this.on("requestcanceled",c)}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m},function(w,O,D){"use strict";function m(a,l,y){var f=(0,L.findMediaElement)(l),d=P(f,3),g=d[0],_=d[1],p=d[2],u=a.log,i=a.utils.getComputedStyle,n=a.utils.secondsToMs,E={automaticErrorTracking:!0};return g?p!=="video"&&p!=="audio"?u.error("The element of `"+_+"` was not a media element."):(y=(0,A.default)(E,y),y.data=(0,A.default)({player_software:"HTML5 Video Element",player_software_version:"No Versions",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:"4.0.0"},y.data),y.getPlayheadTime=function(){return n(g.currentTime)},y.getStateData=function(){var S=this.hlsjs&&this.hlsjs.url,I=this.dashjs&&C(this.dashjs.getSource==="function")&&this.dashjs.getSource();return{player_is_paused:g.paused,player_playhead_time:n(g.currentTime),player_width:parseInt(i(g,"width")),player_height:parseInt(i(g,"height")),player_autoplay_on:g.autoplay,player_preload_on:g.preload,video_poster_url:g.poster,video_source_url:S||I||g.currentSrc,video_source_duration:n(g.duration),video_source_height:g.videoHeight,video_source_width:g.videoWidth}},g.mux=g.mux||{},g.mux.emit=function(S,I){a.emit(_,S,I)},g.mux.destroy=function(){Object.keys(g.mux.listeners).forEach(function(S){g.removeEventListener(S,g.mux.listeners[S],!1)}),delete g.mux.listeners,a.emit(_,"destroy")},g.mux.swapElement=function(S){var I=(0,L.findMediaElement)(S),x=P(I,3),B=x[0],N=x[1],K=x[2];return B?K!=="video"&&K!=="audio"?a.log.error("The element of `"+N+"` was not a media element."):(B.muxId=g.muxId,delete g.muxId,B.mux=B.mux||{},B.mux.listeners=(0,A.default)({},g.mux.listeners),delete g.mux.listeners,Object.keys(B.mux.listeners).forEach(function(W){g.removeEventListener(W,B.mux.listeners[W],!1),B.addEventListener(W,B.mux.listeners[W],!1)}),B.mux.swapElement=g.mux.swapElement,B.mux.destroy=g.mux.destroy,delete g.mux,void(g=B)):a.log.error("No element was found with the `"+N+"` query selector.")},g.mux.addHLSJS=function(S){a.addHLSJS(_,S)},g.mux.addDashJS=function(S){a.addDashJS(_,S)},g.mux.removeHLSJS=function(){a.removeHLSJS(_)},g.mux.removeDashJS=function(){a.removeDashJS(_)},a.init(_,y),a.emit(_,"playerready"),g.paused||(a.emit(_,"play"),g.readyState>2&&a.emit(_,"playing")),g.mux.listeners={},void h.forEach(function(S){(S!=="error"||y.automaticErrorTracking)&&(g.mux.listeners[S]=function(){var I={};S==="error"&&(I.player_error_code=g.error&&g.error.code,I.player_error_message=g.error&&s[g.error.code]),a.emit(_,S,I)},g.addEventListener(S,g.mux.listeners[S],!1))})):u.error("No element was found with the `"+_+"` query selector.")}Object.defineProperty(O,"__esModule",{value:!0});var C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P=function(){function a(l,y){var f=[],d=!0,g=!1,_=void 0;try{for(var p,u=l[Symbol.iterator]();!(d=(p=u.next()).done)&&(f.push(p.value),!y||f.length!==y);d=!0);}catch(i){g=!0,_=i}finally{try{!d&&u.return&&u.return()}finally{if(g)throw _}}return f}return function(l,y){if(Array.isArray(l))return l;if(Symbol.iterator in Object(l))return a(l,y);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();O.default=m;var c=D(1),A=function(a){return a&&a.__esModule?a:{default:a}}(c),L=D(9),h=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],s={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"}},function(w,O,D){"use strict";function m(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(O,"__esModule",{value:!0});var C=D(52),P=m(C),c=D(2),A=m(c),L=D(53),h=m(L),s=D(54),a=m(s),l=D(1),y=m(l),f=D(8),d=m(f),g=D(5),_=D(3),p=m(_),u={};u.safeCall=P.default,u.safeIncrement=A.default,u.getComputedStyle=h.default,u.secondsToMs=a.default,u.assign=y.default,u.headersStringToObject=d.default,u.extractHostnameAndDomain=g.extractHostnameAndDomain,u.extractHostname=g.extractHostname,u.now=p.default.now,O.default=u},function(w,O,D){"use strict";function m(c,A,L,h){var s=h;if(c&&typeof c[A]=="function")try{s=c[A].apply(c,L)}catch(a){P.default.info("safeCall error",a)}return s}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m;var C=D(4),P=function(c){return c&&c.__esModule?c:{default:c}}(C)},function(w,O,D){"use strict";function m(A,L){if(A&&L&&P.default&&typeof P.default.getComputedStyle=="function"){var h=void 0;return c&&c.has(A)&&(h=c.get(A)),h||(h=P.default.getComputedStyle(A,null),c&&c.set(A,h)),h.getPropertyValue(L)}}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m;var C=D(0),P=function(A){return A&&A.__esModule?A:{default:A}}(C),c=void 0;P.default&&P.default.WeakMap&&(c=new WeakMap)},function(w,O,D){"use strict";function m(C){return Math.floor(1e3*C)}Object.defineProperty(O,"__esModule",{value:!0}),O.default=m}])})})()},function(R,k,j){"use strict";function w(C,P){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],L=arguments.length>4&&arguments[4]!==void 0?arguments[4]:function(){return{}},h=!1;C.on("adstart",function(){h=!0}),C.on("adend",function(){h=!1}),C.on("adserror",function(){h=!1});var s=function(){var a=m(P.currentTime()),l=function f(){var d=D.default.utils.now(),g=m(P.currentTime());if(h){if(g>a){var _=L();_.viewer_time=d-Math.max(0,g-a),P.off("timeupdate",f),C.mux.emit("adplaying",_)}}else P.off("timeupdate",f)};P.on("timeupdate",l);var y=function f(){P.off("timeupdate",l),c.forEach(function(d){P.off(d,f)})};c.forEach(function(f){P.on(f,y)})};A.forEach(function(a){P.on(a,s)})}Object.defineProperty(k,"__esModule",{value:!0}),k.default=w;var O=j(0),D=function(C){return C&&C.__esModule?C:{default:C}}(O),m=D.default.utils.secondsToMs},function(R,k,j){"use strict";function w(I){return I&&I.__esModule?I:{default:I}}function O(I){if(m.default.IS_IE8)return!1;var x=this,B=x.id();I=u({automaticErrorTracking:!0},I),I.data=u({player_software_name:"Video.js",player_software_version:m.default.VERSION||"< 4.11",player_mux_plugin_name:"videojs-mux",player_mux_plugin_version:"4.0.0"},I.data),I.getPlayheadTime=function(){return E(x.currentTime())},I.getStateData=function(){var V=i(x,"videoHeight"),X=i(x,"videoWidth");if(X===void 0||V===void 0){var Z=x.el().firstChild;Z&&Z.nodeName.toUpperCase()==="VIDEO"&&(V=Z.videoHeight,X=Z.videoWidth)}return{player_is_paused:i(x,"paused"),player_is_fullscreen:i(x,"isFullscreen"),player_autoplay_on:!!i(x,"autoplay"),player_preload_on:i(x,"preload"),player_width:n(x.el(),"width"),player_height:n(x.el(),"height"),player_language_code:i(x,"language"),video_poster_url:i(x,"poster"),video_source_url:i(x,"currentSrc"),video_source_mime_type:i(x,"currentType")&&i(x,"currentType").toLowerCase(),video_source_duration:E(i(x,"duration")||0),video_source_height:V,video_source_width:X}},x.mux=function(){p.error("[videojs-mux] The plugin was initialized more than once.")},x.mux.emit=function(V,X){P.default.emit(B,V,X)},x.mux.addHLSJS=function(V){P.default.addHLSJS(B,V)},x.mux.log=p,x.mux.utils=P.default.utils,P.default.init(B,I);var N=!1,K=function(){N||x.mux.emit("playerready"),N=!0};x.ready(function(){x.addClass("vjs-mux"),A.default.setTimeout(K,0)});var W=!1;x.one("play",K),S.forEach(function(V){(V!=="error"||I.automaticErrorTracking)&&x.on(V,function(){if(!W){var X={};if(V==="error"){var Z=i(x,"error");X.player_error_code=Z&&Z.code,X.player_error_message=Z&&Z.message}x.mux.emit(V,X)}})});var G=!1;x.on("play",function(){G=!0}),x.on("pause",function(){G=!1}),x.on("adstart",function(){W=!0,G&&x.mux.emit("pause"),x.mux.emit("adbreakstart")}),x.on("adend",function(){x.mux.emit("adbreakend"),W=!1,i(x,"paused")||(x.mux.emit("play"),G=!0,x.onceux&&x.mux.emit("playing"))}),x.ima&&(0,h.default)(x),x.onceux&&(0,d.default)(x),x.ima3&&typeof x.ima3.ready=="function"&&(0,a.default)(x),x.FreeWheelPlugin&&x.FreeWheelPlugin.VERSION&&(0,y.default)(x),x.on("dispose",function(){x.mux.emit("destroy")})}var D=j(3),m=w(D),C=j(0),P=w(C),c=j(4),A=w(c),L=j(6),h=w(L),s=j(7),a=w(s),l=j(8),y=w(l),f=j(9),d=w(f),g=j(10),_=w(g),p=P.default.log,u=P.default.utils.assign,i=P.default.utils.safeCall,n=P.default.utils.getComputedStyle,E=P.default.utils.secondsToMs,S=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"];(m.default.registerPlugin||m.default.plugin||function(){P.default.log.error("No valid method to register videojs plugin available.")})("mux",O),(0,_.default)(m.default)},function(R,k){R.exports=F},function(R,k,j){(function(w){var O;O=typeof window!="undefined"?window:w!==void 0?w:typeof self!="undefined"?self:{},R.exports=O}).call(k,j(5))},function(R,k){var j;j=function(){return this}();try{j=j||Function("return this")()||(0,eval)("this")}catch(w){typeof window=="object"&&(j=window)}R.exports=j},function(R,k,j){"use strict";function w(O){var D=function(a){a=a||{};var l=typeof a.getAdData=="function"?a.getAdData():{},y=typeof a.getAd=="function"?a.getAd():{},f=typeof y.getMediaUrl=="function"?y.getMediaUrl():l.mediaUrl,d=O.ima.settings||{},g={};return f&&(g.ad_asset_url=f),d.adTagUrl&&(g.ad_tag_url=d.adTagUrl),g},m=void 0,C=void 0,P=void 0,c=void 0,A=void 0,L=void 0;try{var h=window.google.ima.AdEvent.Type;m=h.LOADED,C=h.STARTED,P=h.COMPLETE,c=h.PAUSED,A=h.RESUMED,L=h.SKIPPED}catch(a){m="loaded",C="start",P="complete",c="pause",A="resume",L="skip"}var s=0;O.mux.triggerAdRequest=function(){s++,O.mux.emit("adrequest",D())},O.on("adsready",function(){var a=O.ima.addEventListener||function(){};a(m,function(l){var y=D(l);s>0&&(s--,O.mux.emit("adresponse",y)),O.mux.emit("adplay",y)}),a(C,function(l){var y=D(l);O.mux.emit("adplaying",y)}),a(A,function(l){var y=D(l);O.mux.emit("adplay",y),O.mux.emit("adplaying",y)}),a(c,function(l){var y=D(l);O.mux.emit("adpause",y)}),a(P,function(l){var y=D(l);O.mux.emit("adended",y)}),a(L,function(l){var y=D(l);O.mux.emit("adended",y)}),O.on("adserror",function(){s>0&&(s--,O.mux.emit("adresponse")),O.mux.emit("aderror")})})}Object.defineProperty(k,"__esModule",{value:!0}),k.default=w},function(R,k,j){"use strict";function w(C){if(typeof C!="string")return!1;var P=C.split(".").map(function(L){return parseInt(L)}),c=P[0],A=P[1];return c>2||c===2&&A>=3}function O(C){var P=function(){var L=C.ima3.currentAd,h=C.ima3.settings,s={};return L&&(s.ad_asset_url=L.mediaUrl),h&&(s.ad_tag_url=h.serverUrl),s};if(w(C.ima3.version)){var c=0,A=function(){c>0&&(c--,C.mux.emit("adresponse",P()))};C.on("ads-request",function(){c++,C.mux.emit("adrequest",P())}),C.on("ads-load",function(){A(),C.mux.emit("adplay",P())}),C.on("adserror",function(){A(),C.mux.emit("aderror")}),C.on("ads-play",function(){C.mux.emit("adplay",P())}),C.on("ads-pause",function(){C.mux.emit("adpause",P())}),C.on("ads-ad-ended",function(){C.mux.emit("adended",P())})}C.ima3.ready(function(){if(C.ima3.adPlayer){w(C.ima3.version)||(C.ima3.adPlayer.on("play",function(){C.mux.emit("adplay")}),C.ima3.adPlayer.on("pause",function(){C.mux.emit("adpause")}),C.ima3.adPlayer.on("ended",function(){C.mux.emit("adended")}));var L=["pause","ended","adserror"],h=["play"];(0,m.default)(C,C.ima3.adPlayer,L,h,P)}else C.mux.log("Legacy IMA3 plugin found, ad events may not track correctly."),C.on("ads-ad-started",function(){C.mux.emit("adplaying",P())}),C.on("ads-play",function(){C.mux.emit("adplaying",P())})})}Object.defineProperty(k,"__esModule",{value:!0}),k.brightcoveImaAdsEventsSupported=w,k.default=O;var D=j(1),m=function(C){return C&&C.__esModule?C:{default:C}}(D)},function(R,k,j){"use strict";function w(O){var D=function(m){var C=O.FreeWheelPlugin,P={};switch(m){case"adplay":case"adplaying":case"adpause":P.ad_asset_url=O.currentSrc()}return C&&(P.ad_tag_url=C.tech.toLowerCase()==="html5"?C.settings.Html5.serverUrl:C.settings.Flash.serverUrl),P};O.on("ads-request",function(){O.mux.emit("adrequest",D("adrequest"))}),O.on("ads-load",function(){O.mux.emit("adresponse",D("adresponse"))}),O.on("adserror",function(){O.mux.emit("aderror")}),O.on("ads-ad-started",function(){O.mux.emit("adplay",D("adplay")),O.mux.emit("adplaying",D("adplaying"))}),O.on("ads-play",function(){O.mux.emit("adplay",D("adplay")),O.mux.emit("adplaying",D("adplaying"))}),O.on("ads-pause",function(){O.mux.emit("adpause",D("adpause"))}),O.on("ads-ad-ended",function(){O.mux.emit("adended",D("adended"))}),O.on("adend",function(){O.mux.emit("play")})}Object.defineProperty(k,"__esModule",{value:!0}),k.default=w},function(R,k,j){"use strict";function w(m){var C=["onceux-linearad-pause","onceux-linearad-skipped","onceux-linearad-complete","adserror"],P=["adstart","onceux-linearad-resume"];(0,D.default)(m,m,C,P),m.on("adstart",function(){m.mux.emit("adplay")}),m.on("onceux-linearad-start",function(c){c.linearAd&&c.linearAd.index>0&&(m.mux.emit("adplay"),m.mux.emit("adplaying"))}),m.on("onceux-linearad-resume",function(){m.mux.emit("adplay")}),m.on("onceux-linearad-pause",function(){m.mux.emit("adpause")}),m.on("onceux-linearad-complete",function(){m.mux.emit("adended")}),m.on("onceux-linearad-skipped",function(){m.mux.emit("adended")})}Object.defineProperty(k,"__esModule",{value:!0}),k.default=w;var O=j(1),D=function(m){return m&&m.__esModule?m:{default:m}}(O)},function(R,k,j){"use strict";function w(c){if(!P&&typeof c.getTech=="function"){for(var A=c.getTech("Html5")||{},L=A.sourceHandlers,h=0;h<L.length;h++)(function(s){var a=L[s],l=a.handleSource;a.handleSource=function(y,f){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=l(y,f,d);if(g&&typeof g.xhr=="function")try{var _=c.VERSION.split("."),p=O(_,2),u=p[0],i=p[1];u=parseInt(u),i=parseInt(i);var n=u>=7&&i>=4?g.player().id():g.player_.el_.parentNode.id;(0,m.default)(c(n),g.xhr),(0,C.trackRenditionChanges)(c(n))}catch(E){}return g}})(h);P=!0}}Object.defineProperty(k,"__esModule",{value:!0});var O=function(){function c(A,L){var h=[],s=!0,a=!1,l=void 0;try{for(var y,f=A[Symbol.iterator]();!(s=(y=f.next()).done)&&(h.push(y.value),!L||h.length!==L);s=!0);}catch(d){a=!0,l=d}finally{try{!s&&f.return&&f.return()}finally{if(a)throw l}}return h}return function(A,L){if(Array.isArray(A))return A;if(Symbol.iterator in Object(A))return c(A,L);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();k.default=w;var D=j(11),m=function(c){return c&&c.__esModule?c:{default:c}}(D),C=j(13),P=!1},function(R,k,j){"use strict";function w(c){return c&&c.__esModule?c:{default:c}}function O(c,A){var L=function(s,a,l){var y=(0,m.default)(c,s,a);return function(){try{y()}catch(f){}try{l()}catch(f){}}},h=function(s){return function(a){var l=P.default.utils.now();try{s(a)}catch(y){}try{a.onreadystatechange=L(a,l,a.onreadystatechange||function(){})}catch(y){}}};A.beforeRequest=function(s){return function(a){var l=s(a);return l.beforeSend=h(l.beforeSend||function(){}),l}}(A.beforeRequest||function(s){return s})}Object.defineProperty(k,"__esModule",{value:!0}),k.default=O;var D=j(12),m=w(D),C=j(0),P=w(C)},function(R,k,j){"use strict";function w(C,P,c){var A=C.mux.utils.extractHostnameAndDomain,L=C.mux.utils.headersStringToObject,h=function(a){var l=a["content-type"];return l?l.match(/^audio\/mpegurl/i)?"manifest":l.match(/^audio.*/i)?"audio":l.match(/^video.*/)?"video":l.match(/^application\/x-mpegurl/i)||l.match(/^application\/vnd.apple.mpegurl/i)||l.match(/^application\/dash+xml/i)?"manifest":"unknown":"unknown"},s=0;return function(){var a=P.readyState;if(a>=2){if(s=s||m.default.utils.now(),a!==4)return;if(P.status>=200&&P.status<300){var l=m.default.utils.now(),y=P.responseType==="arraybuffer"?P.response.byteLength:P.responseText.length,f=A(P.responseURL),d=O(f,1),g=d[0],_=L(P.getAllResponseHeaders?P.getAllResponseHeaders():""),p=h(_),u={request_start:c,request_response_start:s,request_response_end:l,request_bytes_loaded:y,request_hostname:g,request_response_headers:_,request_type:p};C.mux.emit("requestcompleted",u)}else C.mux.emit("requestfailed")}}}Object.defineProperty(k,"__esModule",{value:!0});var O=function(){function C(P,c){var A=[],L=!0,h=!1,s=void 0;try{for(var a,l=P[Symbol.iterator]();!(L=(a=l.next()).done)&&(A.push(a.value),!c||A.length!==c);L=!0);}catch(y){h=!0,s=y}finally{try{!L&&l.return&&l.return()}finally{if(h)throw s}}return A}return function(P,c){if(Array.isArray(P))return P;if(Symbol.iterator in Object(P))return C(P,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();k.default=w;var D=j(0),m=function(C){return C&&C.__esModule?C:{default:C}}(D)},function(R,k,j){"use strict";Object.defineProperty(k,"__esModule",{value:!0});var w=function(D){for(var m=D.textTracks(),C=void 0,P=0;P<m.length;P++)m[P].label==="segment-metadata"&&(C=m[P]);return C},O=function(D){var m=w(D),C=void 0;m&&m.on&&m.on("cuechange",function(){try{var P=D.tech({IWillNotUseThisInPlugins:!0}),c=P.vhs||P.hls,A=c.playlists.media().attributes.BANDWIDTH;C!==A&&D.mux.emit("renditionchange",{video_source_bitrate:A}),C=A}catch(L){D.mux&&D.mux.log&&D.mux.log.warn&&D.mux.log.warn("Cannot retrieve BANDWIDTH information from player: "+L)}})};k.getSegmentMetadataTrack=w,k.trackRenditionChanges=O}])})})()},497:(ne,re,H)=>{var M=H(697),F=ne.exports={WebVTT:H(13),VTTCue:H(190),VTTRegion:H(146)};M.vttjs=F,M.WebVTT=F.WebVTT;var R=F.VTTCue,k=F.VTTRegion,j=M.VTTCue,w=M.VTTRegion;F.shim=function(){M.VTTCue=R,M.VTTRegion=k},F.restore=function(){M.VTTCue=j,M.VTTRegion=w},M.VTTCue||F.shim()},13:(ne,re,H)=>{var M=H(675),F=Object.create||function(){function i(){}return function(n){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return i.prototype=n,new i}}();function R(i,n){this.name="ParsingError",this.code=i.code,this.message=n||i.message}R.prototype=F(Error.prototype),R.prototype.constructor=R,R.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function k(i){function n(S,I,x,B){return(S|0)*3600+(I|0)*60+(x|0)+(B|0)/1e3}var E=i.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return E?E[3]?n(E[1],E[2],E[3].replace(":",""),E[4]):E[1]>59?n(E[1],E[2],0,E[4]):n(0,E[1],E[2],E[4]):null}function j(){this.values=F(null)}j.prototype={set:function(i,n){!this.get(i)&&n!==""&&(this.values[i]=n)},get:function(i,n,E){return E?this.has(i)?this.values[i]:n[E]:this.has(i)?this.values[i]:n},has:function(i){return i in this.values},alt:function(i,n,E){for(var S=0;S<E.length;++S)if(n===E[S]){this.set(i,n);break}},integer:function(i,n){/^-?\d+$/.test(n)&&this.set(i,parseInt(n,10))},percent:function(i,n){var E;return(E=n.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(n=parseFloat(n),n>=0&&n<=100)?(this.set(i,n),!0):!1}};function w(i,n,E,S){var I=S?i.split(S):[i];for(var x in I)if(typeof I[x]=="string"){var B=I[x].split(E);if(B.length===2){var N=B[0],K=B[1];n(N,K)}}}function O(i,n,E){var S=i;function I(){var N=k(i);if(N===null)throw new R(R.Errors.BadTimeStamp,"Malformed timestamp: "+S);return i=i.replace(/^[^\sa-zA-Z-]+/,""),N}function x(N,K){var W=new j;w(N,function(G,V){switch(G){case"region":for(var X=E.length-1;X>=0;X--)if(E[X].id===V){W.set(G,E[X].region);break}break;case"vertical":W.alt(G,V,["rl","lr"]);break;case"line":var Z=V.split(","),q=Z[0];W.integer(G,q),W.percent(G,q)&&W.set("snapToLines",!1),W.alt(G,q,["auto"]),Z.length===2&&W.alt("lineAlign",Z[1],["start","center","end"]);break;case"position":Z=V.split(","),W.percent(G,Z[0]),Z.length===2&&W.alt("positionAlign",Z[1],["start","center","end"]);break;case"size":W.percent(G,V);break;case"align":W.alt(G,V,["start","center","end","left","right"]);break}},/:/,/\s/),K.region=W.get("region",null),K.vertical=W.get("vertical","");try{K.line=W.get("line","auto")}catch(G){}K.lineAlign=W.get("lineAlign","start"),K.snapToLines=W.get("snapToLines",!0),K.size=W.get("size",100);try{K.align=W.get("align","center")}catch(G){K.align=W.get("align","middle")}try{K.position=W.get("position","auto")}catch(G){K.position=W.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},K.align)}K.positionAlign=W.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},K.align)}function B(){i=i.replace(/^\s+/,"")}if(B(),n.startTime=I(),B(),i.substr(0,3)!=="-->")throw new R(R.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+S);i=i.substr(3),B(),n.endTime=I(),B(),x(i,n)}var D=M.createElement&&M.createElement("textarea"),m={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},C={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},P={v:"title",lang:"lang"},c={rt:"ruby"};function A(i,n){function E(){if(!n)return null;function q(ee){return n=n.substr(ee.length),ee}var J=n.match(/^([^<]*)(<[^>]*>?)?/);return q(J[1]?J[1]:J[2])}function S(q){return D.innerHTML=q,q=D.textContent,D.textContent="",q}function I(q,J){return!c[J.localName]||c[J.localName]===q.localName}function x(q,J){var ee=m[q];if(!ee)return null;var ie=i.document.createElement(ee),oe=P[q];return oe&&J&&(ie[oe]=J.trim()),ie}for(var B=i.document.createElement("div"),N=B,K,W=[];(K=E())!==null;){if(K[0]==="<"){if(K[1]==="/"){W.length&&W[W.length-1]===K.substr(2).replace(">","")&&(W.pop(),N=N.parentNode);continue}var G=k(K.substr(1,K.length-2)),V;if(G){V=i.document.createProcessingInstruction("timestamp",G),N.appendChild(V);continue}var X=K.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!X||(V=x(X[1],X[3]),!V)||!I(N,V))continue;if(X[2]){var Z=X[2].split(".");Z.forEach(function(q){var J=/^bg_/.test(q),ee=J?q.slice(3):q;if(C.hasOwnProperty(ee)){var ie=J?"background-color":"color",oe=C[ee];V.style[ie]=oe}}),V.className=Z.join(" ")}W.push(X[1]),N.appendChild(V),N=V;continue}N.appendChild(i.document.createTextNode(S(K)))}return B}var L=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function h(i){for(var n=0;n<L.length;n++){var E=L[n];if(i>=E[0]&&i<=E[1])return!0}return!1}function s(i){var n=[],E="",S;if(!i||!i.childNodes)return"ltr";function I(N,K){for(var W=K.childNodes.length-1;W>=0;W--)N.push(K.childNodes[W])}function x(N){if(!N||!N.length)return null;var K=N.pop(),W=K.textContent||K.innerText;if(W){var G=W.match(/^.*(\n|\r)/);return G?(N.length=0,G[0]):W}if(K.tagName==="ruby")return x(N);if(K.childNodes)return I(N,K),x(N)}for(I(n,i);E=x(n);)for(var B=0;B<E.length;B++)if(S=E.charCodeAt(B),h(S))return"rtl";return"ltr"}function a(i){if(typeof i.line=="number"&&(i.snapToLines||i.line>=0&&i.line<=100))return i.line;if(!i.track||!i.track.textTrackList||!i.track.textTrackList.mediaElement)return-1;for(var n=i.track,E=n.textTrackList,S=0,I=0;I<E.length&&E[I]!==n;I++)E[I].mode==="showing"&&S++;return++S*-1}function l(){}l.prototype.applyStyles=function(i,n){n=n||this.div;for(var E in i)i.hasOwnProperty(E)&&(n.style[E]=i[E])},l.prototype.formatStyle=function(i,n){return i===0?0:i+n};function y(i,n,E){l.call(this),this.cue=n,this.cueDiv=A(i,n.text);var S={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:n.vertical===""?"horizontal-tb":n.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(S,this.cueDiv),this.div=i.document.createElement("div"),S={direction:s(this.cueDiv),writingMode:n.vertical===""?"horizontal-tb":n.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:n.align==="middle"?"center":n.align,font:E.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(S),this.div.appendChild(this.cueDiv);var I=0;switch(n.positionAlign){case"start":I=n.position;break;case"center":I=n.position-n.size/2;break;case"end":I=n.position-n.size;break}n.vertical===""?this.applyStyles({left:this.formatStyle(I,"%"),width:this.formatStyle(n.size,"%")}):this.applyStyles({top:this.formatStyle(I,"%"),height:this.formatStyle(n.size,"%")}),this.move=function(x){this.applyStyles({top:this.formatStyle(x.top,"px"),bottom:this.formatStyle(x.bottom,"px"),left:this.formatStyle(x.left,"px"),right:this.formatStyle(x.right,"px"),height:this.formatStyle(x.height,"px"),width:this.formatStyle(x.width,"px")})}}y.prototype=F(l.prototype),y.prototype.constructor=y;function f(i){var n,E,S,I;if(i.div){E=i.div.offsetHeight,S=i.div.offsetWidth,I=i.div.offsetTop;var x=(x=i.div.childNodes)&&(x=x[0])&&x.getClientRects&&x.getClientRects();i=i.div.getBoundingClientRect(),n=x?Math.max(x[0]&&x[0].height||0,i.height/x.length):0}this.left=i.left,this.right=i.right,this.top=i.top||I,this.height=i.height||E,this.bottom=i.bottom||I+(i.height||E),this.width=i.width||S,this.lineHeight=n!==void 0?n:i.lineHeight}f.prototype.move=function(i,n){switch(n=n!==void 0?n:this.lineHeight,i){case"+x":this.left+=n,this.right+=n;break;case"-x":this.left-=n,this.right-=n;break;case"+y":this.top+=n,this.bottom+=n;break;case"-y":this.top-=n,this.bottom-=n;break}},f.prototype.overlaps=function(i){return this.left<i.right&&this.right>i.left&&this.top<i.bottom&&this.bottom>i.top},f.prototype.overlapsAny=function(i){for(var n=0;n<i.length;n++)if(this.overlaps(i[n]))return!0;return!1},f.prototype.within=function(i){return this.top>=i.top&&this.bottom<=i.bottom&&this.left>=i.left&&this.right<=i.right},f.prototype.overlapsOppositeAxis=function(i,n){switch(n){case"+x":return this.left<i.left;case"-x":return this.right>i.right;case"+y":return this.top<i.top;case"-y":return this.bottom>i.bottom}},f.prototype.intersectPercentage=function(i){var n=Math.max(0,Math.min(this.right,i.right)-Math.max(this.left,i.left)),E=Math.max(0,Math.min(this.bottom,i.bottom)-Math.max(this.top,i.top)),S=n*E;return S/(this.height*this.width)},f.prototype.toCSSCompatValues=function(i){return{top:this.top-i.top,bottom:i.bottom-this.bottom,left:this.left-i.left,right:i.right-this.right,height:this.height,width:this.width}},f.getSimpleBoxPosition=function(i){var n=i.div?i.div.offsetHeight:i.tagName?i.offsetHeight:0,E=i.div?i.div.offsetWidth:i.tagName?i.offsetWidth:0,S=i.div?i.div.offsetTop:i.tagName?i.offsetTop:0;i=i.div?i.div.getBoundingClientRect():i.tagName?i.getBoundingClientRect():i;var I={left:i.left,right:i.right,top:i.top||S,height:i.height||n,bottom:i.bottom||S+(i.height||n),width:i.width||E};return I};function d(i,n,E,S){function I(ee,ie){for(var oe,le=new f(ee),ue=1,he=0;he<ie.length;he++){for(;ee.overlapsOppositeAxis(E,ie[he])||ee.within(E)&&ee.overlapsAny(S);)ee.move(ie[he]);if(ee.within(E))return ee;var me=ee.intersectPercentage(E);ue>me&&(oe=new f(ee),ue=me),ee=new f(le)}return oe||le}var x=new f(n),B=n.cue,N=a(B),K=[];if(B.snapToLines){var W;switch(B.vertical){case"":K=["+y","-y"],W="height";break;case"rl":K=["+x","-x"],W="width";break;case"lr":K=["-x","+x"],W="width";break}var G=x.lineHeight,V=G*Math.round(N),X=E[W]+G,Z=K[0];Math.abs(V)>X&&(V=V<0?-1:1,V*=Math.ceil(X/G)*G),N<0&&(V+=B.vertical===""?E.height:E.width,K=K.reverse()),x.move(Z,V)}else{var q=x.lineHeight/E.height*100;switch(B.lineAlign){case"center":N-=q/2;break;case"end":N-=q;break}switch(B.vertical){case"":n.applyStyles({top:n.formatStyle(N,"%")});break;case"rl":n.applyStyles({left:n.formatStyle(N,"%")});break;case"lr":n.applyStyles({right:n.formatStyle(N,"%")});break}K=["+y","-x","+x","-y"],x=new f(n)}var J=I(x,K);n.move(J.toCSSCompatValues(E))}function g(){}g.StringDecoder=function(){return{decode:function(i){if(!i)return"";if(typeof i!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(i))}}},g.convertCueToDOMTree=function(i,n){return!i||!n?null:A(i,n)};var _=.05,p="sans-serif",u="1.5%";g.processCues=function(i,n,E){if(!i||!n||!E)return null;for(;E.firstChild;)E.removeChild(E.firstChild);var S=i.document.createElement("div");S.style.position="absolute",S.style.left="0",S.style.right="0",S.style.top="0",S.style.bottom="0",S.style.margin=u,E.appendChild(S);function I(G){for(var V=0;V<G.length;V++)if(G[V].hasBeenReset||!G[V].displayState)return!0;return!1}if(!I(n)){for(var x=0;x<n.length;x++)S.appendChild(n[x].displayState);return}var B=[],N=f.getSimpleBoxPosition(S),K=Math.round(N.height*_*100)/100,W={font:K+"px "+p};(function(){for(var G,V,X=0;X<n.length;X++)V=n[X],G=new y(i,V,W),S.appendChild(G.div),d(i,G,N,B),V.displayState=G.div,B.push(f.getSimpleBoxPosition(G))})()},g.Parser=function(i,n,E){E||(E=n,n={}),n||(n={}),this.window=i,this.vttjs=n,this.state="INITIAL",this.buffer="",this.decoder=E||new TextDecoder("utf8"),this.regionList=[]},g.Parser.prototype={reportOrThrowError:function(i){if(i instanceof R)this.onparsingerror&&this.onparsingerror(i);else throw i},parse:function(i){var n=this;i&&(n.buffer+=n.decoder.decode(i,{stream:!0}));function E(){for(var G=n.buffer,V=0;V<G.length&&G[V]!=="\r"&&G[V]!==`
`;)++V;var X=G.substr(0,V);return G[V]==="\r"&&++V,G[V]===`
`&&++V,n.buffer=G.substr(V),X}function S(G){var V=new j;if(w(G,function(Z,q){switch(Z){case"id":V.set(Z,q);break;case"width":V.percent(Z,q);break;case"lines":V.integer(Z,q);break;case"regionanchor":case"viewportanchor":var J=q.split(",");if(J.length!==2)break;var ee=new j;if(ee.percent("x",J[0]),ee.percent("y",J[1]),!ee.has("x")||!ee.has("y"))break;V.set(Z+"X",ee.get("x")),V.set(Z+"Y",ee.get("y"));break;case"scroll":V.alt(Z,q,["up"]);break}},/=/,/\s/),V.has("id")){var X=new(n.vttjs.VTTRegion||n.window.VTTRegion);X.width=V.get("width",100),X.lines=V.get("lines",3),X.regionAnchorX=V.get("regionanchorX",0),X.regionAnchorY=V.get("regionanchorY",100),X.viewportAnchorX=V.get("viewportanchorX",0),X.viewportAnchorY=V.get("viewportanchorY",100),X.scroll=V.get("scroll",""),n.onregion&&n.onregion(X),n.regionList.push({id:V.get("id"),region:X})}}function I(G){var V=new j;w(G,function(X,Z){switch(X){case"MPEGT":V.integer(X+"S",Z);break;case"LOCA":V.set(X+"L",k(Z));break}},/[^\d]:/,/,/),n.ontimestampmap&&n.ontimestampmap({MPEGTS:V.get("MPEGTS"),LOCAL:V.get("LOCAL")})}function x(G){G.match(/X-TIMESTAMP-MAP/)?w(G,function(V,X){switch(V){case"X-TIMESTAMP-MAP":I(X);break}},/=/):w(G,function(V,X){switch(V){case"Region":S(X);break}},/:/)}try{var B;if(n.state==="INITIAL"){if(!/\r\n|\n/.test(n.buffer))return this;B=E();var N=B.match(/^WEBVTT([ \t].*)?$/);if(!N||!N[0])throw new R(R.Errors.BadSignature);n.state="HEADER"}for(var K=!1;n.buffer;){if(!/\r\n|\n/.test(n.buffer))return this;switch(K?K=!1:B=E(),n.state){case"HEADER":/:/.test(B)?x(B):B||(n.state="ID");continue;case"NOTE":B||(n.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(B)){n.state="NOTE";break}if(!B)continue;n.cue=new(n.vttjs.VTTCue||n.window.VTTCue)(0,0,"");try{n.cue.align="center"}catch(G){n.cue.align="middle"}if(n.state="CUE",B.indexOf("-->")===-1){n.cue.id=B;continue}case"CUE":try{O(B,n.cue,n.regionList)}catch(G){n.reportOrThrowError(G),n.cue=null,n.state="BADCUE";continue}n.state="CUETEXT";continue;case"CUETEXT":var W=B.indexOf("-->")!==-1;if(!B||W&&(K=!0)){n.oncue&&n.oncue(n.cue),n.cue=null,n.state="ID";continue}n.cue.text&&(n.cue.text+=`
`),n.cue.text+=B.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":B||(n.state="ID");continue}}}catch(G){n.reportOrThrowError(G),n.state==="CUETEXT"&&n.cue&&n.oncue&&n.oncue(n.cue),n.cue=null,n.state=n.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var i=this;try{if(i.buffer+=i.decoder.decode(),(i.cue||i.state==="HEADER")&&(i.buffer+=`

`,i.parse()),i.state==="INITIAL")throw new R(R.Errors.BadSignature)}catch(n){i.reportOrThrowError(n)}return i.onflush&&i.onflush(),this}},ne.exports=g},190:ne=>{var re="auto",H={"":1,lr:1,rl:1},M={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function F(j){if(typeof j!="string")return!1;var w=H[j.toLowerCase()];return w?j.toLowerCase():!1}function R(j){if(typeof j!="string")return!1;var w=M[j.toLowerCase()];return w?j.toLowerCase():!1}function k(j,w,O){this.hasBeenReset=!1;var D="",m=!1,C=j,P=w,c=O,A=null,L="",h=!0,s="auto",a="start",l="auto",y="auto",f=100,d="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return D},set:function(g){D=""+g}},pauseOnExit:{enumerable:!0,get:function(){return m},set:function(g){m=!!g}},startTime:{enumerable:!0,get:function(){return C},set:function(g){if(typeof g!="number")throw new TypeError("Start time must be set to a number.");C=g,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return P},set:function(g){if(typeof g!="number")throw new TypeError("End time must be set to a number.");P=g,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return c},set:function(g){c=""+g,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return A},set:function(g){A=g,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return L},set:function(g){var _=F(g);if(_===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");L=_,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return h},set:function(g){h=!!g,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return s},set:function(g){if(typeof g!="number"&&g!==re)throw new SyntaxError("Line: an invalid number or illegal string was specified.");s=g,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return a},set:function(g){var _=R(g);_?(a=_,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return l},set:function(g){if(g<0||g>100)throw new Error("Position must be between 0 and 100.");l=g,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return y},set:function(g){var _=R(g);_?(y=_,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return f},set:function(g){if(g<0||g>100)throw new Error("Size must be between 0 and 100.");f=g,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return d},set:function(g){var _=R(g);if(!_)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");d=_,this.hasBeenReset=!0}}}),this.displayState=void 0}k.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},ne.exports=k},146:ne=>{var re={"":!0,up:!0};function H(R){if(typeof R!="string")return!1;var k=re[R.toLowerCase()];return k?R.toLowerCase():!1}function M(R){return typeof R=="number"&&R>=0&&R<=100}function F(){var R=100,k=3,j=0,w=100,O=0,D=100,m="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return R},set:function(C){if(!M(C))throw new Error("Width must be between 0 and 100.");R=C}},lines:{enumerable:!0,get:function(){return k},set:function(C){if(typeof C!="number")throw new TypeError("Lines must be set to a number.");k=C}},regionAnchorY:{enumerable:!0,get:function(){return w},set:function(C){if(!M(C))throw new Error("RegionAnchorX must be between 0 and 100.");w=C}},regionAnchorX:{enumerable:!0,get:function(){return j},set:function(C){if(!M(C))throw new Error("RegionAnchorY must be between 0 and 100.");j=C}},viewportAnchorY:{enumerable:!0,get:function(){return D},set:function(C){if(!M(C))throw new Error("ViewportAnchorY must be between 0 and 100.");D=C}},viewportAnchorX:{enumerable:!0,get:function(){return O},set:function(C){if(!M(C))throw new Error("ViewportAnchorX must be between 0 and 100.");O=C}},scroll:{enumerable:!0,get:function(){return m},set:function(C){var P=H(C);P===!1?console.warn("Scroll: an invalid or illegal string was specified."):m=P}}})}ne.exports=F},18:(ne,re,H)=>{ne.exports=H(501).default},501:(ne,re,H)=>{"use strict";H.d(re,{default:()=>_});var M=H(207),F=H.n(M);const R={},k={},j=F().registerPlugin||F().plugin,w=(p,u)=>{p.addClass("vjs-vtt-thumbnails"),p.vttThumbnails=new D(p,u)},O=function(p){this.ready(()=>{w(this,F().mergeOptions(R,p))})};class D{constructor(u,i){return this.player=u,this.options=i,this.listenForDurationChange(),this.initializeThumbnails(),this.registeredEvents={},this}src(u){this.resetPlugin(),this.options.src=u,this.initializeThumbnails()}detach(){this.resetPlugin()}resetPlugin(){this.thumbnailHolder&&this.thumbnailHolder.parentNode.removeChild(this.thumbnailHolder),this.progressBar&&(this.progressBar.removeEventListener("mouseenter",this.registeredEvents.progressBarMouseEnter),this.progressBar.removeEventListener("mouseleave",this.registeredEvents.progressBarMouseLeave),this.progressBar.removeEventListener("mousemove",this.registeredEvents.progressBarMouseMove)),delete this.registeredEvents.progressBarMouseEnter,delete this.registeredEvents.progressBarMouseLeave,delete this.registeredEvents.progressBarMouseMove,delete this.progressBar,delete this.vttData,delete this.thumbnailHolder,delete this.lastStyle}listenForDurationChange(){this.player.on("durationchange",()=>{})}initializeThumbnails(){if(!this.options.src)return;const u=this.getBaseUrl(),i=this.getFullyQualifiedUrl(this.options.src,u);this.getVttFile(i).then(n=>{this.vttData=this.processVtt(n),this.setupThumbnailElement()})}getBaseUrl(){return[window.location.protocol,"//",window.location.hostname,window.location.port?":"+window.location.port:"",window.location.pathname].join("").split(/([^\/]*)$/gi).shift()}getVttFile(u){return new Promise((i,n)=>{const E=new XMLHttpRequest;E.data={resolve:i},E.addEventListener("load",this.vttFileLoaded),E.open("GET",u),E.overrideMimeType("text/plain; charset=utf-8"),E.send()})}vttFileLoaded(){this.data.resolve(this.responseText)}setupThumbnailElement(u){let i=null;this.options.showTimestamp||(i=this.player.$(".vjs-mouse-display"));const n=document.createElement("div");n.setAttribute("class","vjs-vtt-thumbnail-display"),this.progressBar=this.player.$(".vjs-progress-control"),this.progressBar.appendChild(n),this.thumbnailHolder=n,i&&!this.options.showTimestamp&&i.classList.add("vjs-hidden"),this.registeredEvents.progressBarMouseEnter=()=>this.onBarMouseenter(),this.registeredEvents.progressBarMouseLeave=()=>this.onBarMouseleave(),this.progressBar.addEventListener("mouseenter",this.registeredEvents.progressBarMouseEnter),this.progressBar.addEventListener("mouseleave",this.registeredEvents.progressBarMouseLeave)}onBarMouseenter(){this.mouseMoveCallback=u=>{this.onBarMousemove(u)},this.registeredEvents.progressBarMouseMove=this.mouseMoveCallback,this.progressBar.addEventListener("mousemove",this.registeredEvents.progressBarMouseMove),this.showThumbnailHolder()}onBarMouseleave(){this.registeredEvents.progressBarMouseMove&&this.progressBar.removeEventListener("mousemove",this.registeredEvents.progressBarMouseMove),this.hideThumbnailHolder()}getXCoord(u,i){const n=u.getBoundingClientRect(),E=document.documentElement;return i-(n.left+(window.pageXOffset||E.scrollLeft||0))}onBarMousemove(u){this.updateThumbnailStyle(F().dom.getPointerPosition(this.progressBar,u).x,this.progressBar.offsetWidth)}getStyleForTime(u){for(let i=0;i<this.vttData.length;++i){const n=this.vttData[i];if(u>=n.start&&u<n.end){if(n.css.url&&!k[n.css.url]){const E=new Image;E.src=n.css.url,k[n.css.url]=E}return n.css}}}showThumbnailHolder(){this.thumbnailHolder.style.opacity="1"}hideThumbnailHolder(){this.thumbnailHolder.style.opacity="0"}updateThumbnailStyle(u,i){const n=this.player.duration(),E=u*n,S=this.getStyleForTime(E);if(!S)return this.hideThumbnailHolder();const I=u*i,x=parseInt(S.width,10),B=x>>1,N=i-(I+B),K=I-B;if(K>0&&N>0?this.thumbnailHolder.style.transform="translateX("+(I-B)+"px)":K<=0?this.thumbnailHolder.style.transform="translateX("+0+"px)":N<=0&&(this.thumbnailHolder.style.transform="translateX("+(i-x)+"px)"),!(this.lastStyle&&this.lastStyle===S)){this.lastStyle=S;for(const W in S)S.hasOwnProperty(W)&&(this.thumbnailHolder.style[W]=S[W])}}processVtt(u){const i=[];return u.split(/[\r\n][\r\n]/i).forEach(E=>{if(E.match(/([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?( ?--> ?)([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?[\r\n]{1}.*/gi)){const S=E.split(/[\r\n]/i),x=S[0].split(/ ?--> ?/i),B=x[0],N=x[1],K=S[1],W=this.getVttCss(K);i.push({start:this.getSecondsFromTimestamp(B),end:this.getSecondsFromTimestamp(N),css:W})}}),i}getFullyQualifiedUrl(u,i){return u.indexOf("//")>=0?u:i.indexOf("//")===0?[i.replace(/\/$/gi,""),this.trim(u,"/")].join("/"):i.indexOf("//")>0?[this.trim(i,"/"),this.trim(u,"/")].join("/"):u}getPropsFromDef(u){const i=u.split(/#xywh=/i),n=i[0],S=i[1].match(/[0-9]+/gi);return{x:S[0],y:S[1],w:S[2],h:S[3],image:n}}getVttCss(u){const i={};let n;if(this.options.src.indexOf("//")>=0?n=this.options.src.split(/([^\/]*)$/gi).shift():n=this.getBaseUrl()+this.options.src.split(/([^\/]*)$/gi).shift(),u=this.getFullyQualifiedUrl(u,n),!u.match(/#xywh=/i))return i.background='url("'+u+'")',i;const E=this.getPropsFromDef(u);return i.background='url("'+E.image+'") no-repeat -'+E.x+"px -"+E.y+"px",i.width=E.w+"px",i.height=E.h+"px",i.url=E.image,i}deconstructTimestamp(u){const i=u.split("."),E=i[0].split(":");return{milliseconds:parseInt(i[1],10)||0,seconds:parseInt(E.pop(),10)||0,minutes:parseInt(E.pop(),10)||0,hours:parseInt(E.pop(),10)||0}}getSecondsFromTimestamp(u){const i=this.deconstructTimestamp(u);return parseInt(i.hours*(60*60)+i.minutes*60+i.seconds+i.milliseconds/1e3,10)}trim(u,i){let n=[" ",`
`,"\r","	","\f","\v","\xA0","\u2000","\u2001","\u2002","\u2003","\u2004","\u2005","\u2006","\u2007","\u2008","\u2009","\u200A","\u200B","\u2028","\u2029","\u3000"].join(""),E=0,S=0;for(u+="",i&&(n=(i+"").replace(/([[\]().?/*{}+$^:])/g,"$1")),E=u.length,S=0;S<E;S++)if(n.indexOf(u.charAt(S))===-1){u=u.substring(S);break}for(E=u.length,S=E-1;S>=0;S--)if(n.indexOf(u.charAt(S))===-1){u=u.substring(0,S+1);break}return n.indexOf(u.charAt(0))===-1?u:""}}j("vttThumbnails",O);const m=null;var C=H(199),P=H.n(C),c=Object.defineProperty,A=(p,u,i)=>(typeof u!="symbol"&&(u+=""),u in p?c(p,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[u]=i);class L{constructor(u,i,n={}){this.source=u,this.tech=i,this.el=i.el(),this.hls=new(P())(n.hls),this.setupEventHandlers(),this.setupHls()}dispose(){this.hls.destroy()}setupEventHandlers(){Object.keys(P().Events).forEach(u=>{const i=P().Events[u];this.hls.on(i,(n,E)=>{this.tech.trigger(i,E)})})}setupHls(){this.el.canPlayType("application/vnd.apple.mpegurl")&&F().browser.IS_ANY_SAFARI?this.el.src=this.source.src:P().isSupported()&&(this.hls.attachMedia(this.el),this.hls.loadSource(this.source.src))}}A(L,"hlsTypeRE",/^application\/(x-mpegURL|vnd\.apple\.mpegURL)$/i),A(L,"hlsExtRE",/\.m3u8/i);const h={canHandleSource(p){return p.skipHlsJs?"":L.hlsTypeRE.test(p.type)?"probably":L.hlsExtRE.test(p.src)?"maybe":""},handleSource(p,u){return new L(p,u)},canPlayType(p){return L.hlsTypeRE.test(p)?"probably":""}};F().getTech("Html5").registerSourceHandler(h,0);const s=null,a={i8:"0.2.0"};var l=H(288);function y(p){var u,i;if((i=(u=p.tech_)==null?void 0:u.sourceHandler_)==null?void 0:i.hls){const n=p.tech_.sourceHandler_.hls;p.mux.addHLSJS({hlsjs:n,Hls:P()})}}function f(p,u){var i,n,E,S,I;if((i=p==null?void 0:p.dataset)==null?void 0:i.setup){let x=p.dataset.setup;x=JSON.parse(x),x&&((E=(n=x==null?void 0:x.plugins)==null?void 0:n.mux)==null?void 0:E.data)&&(x=d(x),x=JSON.stringify(x),p.dataset.setup=x)}return((I=(S=u==null?void 0:u.plugins)==null?void 0:S.mux)==null?void 0:I.data)&&(u=d(u)),u}function d(p){var u;return p.plugins.mux.data.player_software_name="vjs-mux-kit-"+((u=F())==null?void 0:u.VERSION.split(".")[0]),p.plugins.mux.data.player_software_version=a.i8,p}function g(p){var u,i;(i=(u=p.tech_)==null?void 0:u.sourceHandler_)==null||i.hls.on(P().Events.MANIFEST_LOADED,function(n,E){if(E.subtitles){let S;for(S=0;S<E.subtitles.length;S++)p.addRemoteTextTrack({kind:E.subtitles[S].type,label:E.subtitles[S].name,srclang:E.subtitles[S].lang,default:E.subtitles[S].default},!1)}}),p.remoteTextTracks().addEventListener("change",n=>{let E=p.remoteTextTracks(),S,I=!1;for(S=0;S<E.length;S++)E[S].mode==="showing"&&(p.tech_.sourceHandler_.hls.subtitleTrack=S,I=!0);I!==!0&&(p.tech_.sourceHandler_.hls.subtitleTrack=-1)})}F().hook("beforesetup",function(p,u){return u=f(p,u),u}),F().use("video/mux",p=>({setSource({src:u},i){if(p.options().timelineHoverPreviews){let n=u.split("?",1);p.vttThumbnails({src:`https://image.mux.com/${n[0]}/storyboard.vtt`})}i(null,{src:`https://stream.mux.com/${u}`,type:"application/x-mpegurl"}),p.mux&&p.mux.addHLSJS&&y(p),g(p)}}));const _=F()},893:()=>{}},Wt={};function Xe(ne){var re=Wt[ne];if(re!==void 0)return re.exports;var H=Wt[ne]={exports:{}};return li[ne].call(H.exports,H,H.exports,Xe),H.exports}(()=>{Xe.n=ne=>{var re=ne&&ne.__esModule?()=>ne.default:()=>ne;return Xe.d(re,{a:re}),re}})(),(()=>{Xe.d=(ne,re)=>{for(var H in re)Xe.o(re,H)&&!Xe.o(ne,H)&&Object.defineProperty(ne,H,{enumerable:!0,get:re[H]})}})(),(()=>{Xe.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(ne){if(typeof window=="object")return window}}()})(),(()=>{Xe.o=(ne,re)=>Object.prototype.hasOwnProperty.call(ne,re)})();var yn=Xe(18);return yn})()});


/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      Object.assign(error, {
        el,
        expression
      });
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    let handler, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      handler = debounce(handler, wait);
    }

    listenerTarget.addEventListener(event, handler, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, () => {}, componentForClone); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}, componentForClone = false) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars, componentForClone ? false : true);
      }, el => {
        if (!componentForClone) el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars, shouldRegisterListeners = true) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      shouldRegisterListeners && this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./js/auth.js":
/*!********************!*\
  !*** ./js/auth.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleShowPassword": () => (/* binding */ toggleShowPassword),
/* harmony export */   "validatePassword": () => (/* binding */ validatePassword)
/* harmony export */ });
var passwordInstruct = document.getElementById('password_instruct');
var pwLength = document.getElementById('pw_length');
var pwCase = document.getElementById('pw_case');
var pwSpecial = document.getElementById('pw_special');
var passwordValid = false;

var checkStrLength = function checkStrLength(str, length) {
  return str.length >= 8;
};

var checkStrUpperLowerCase = function checkStrUpperLowerCase(str) {
  return str.toUpperCase() != str && str.toLowerCase() != str;
};

var checkStrAlphanumeric = function checkStrAlphanumeric(str) {
  return /[a-z]/i.test(str) && /[0-9]/i.test(str);
};

var checkStrSpecialChar = function checkStrSpecialChar(str) {
  return /[!@#$%]/i.test(str);
};

var toggleShowPassword = function toggleShowPassword(e, userPasswordInput, showPassword) {
  e.stopPropagation();

  if (userPasswordInput) {
    if (userPasswordInput.type === "password") {
      showPassword.innerHTML = "hide password";
      userPasswordInput.type = "text";
    } else {
      showPassword.innerHTML = "show password";
      userPasswordInput.type = "password";
    }
  }
};
var validatePassword = function validatePassword(ev) {
  var str = ev.currentTarget.value;

  if (checkStrLength(str)) {
    pwLength.style.cssText = "color: green;";
  } else {
    pwLength.style.cssText = "color: #4a5568;";
  }

  if (checkStrUpperLowerCase(str)) {
    pwCase.style.cssText = "color: green;";
  } else {
    pwCase.style.cssText = "color: #4a5568;";
  }

  if (checkStrSpecialChar(str) || checkStrAlphanumeric(str)) {
    pwSpecial.style.cssText = "color: green;";
  } else {
    pwSpecial.style.cssText = "color: #4a5568;";
  }

  if (checkStrLength(str) && checkStrUpperLowerCase(str) && (checkStrAlphanumeric(str) || checkStrSpecialChar(str))) {
    passwordValid = true;
  } else {
    passwordValid = false;
  }
};

/***/ }),

/***/ "../deps/phoenix/priv/static/phoenix.js":
/*!**********************************************!*\
  !*** ../deps/phoenix/priv/static/phoenix.js ***!
  \**********************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    (function (t) {
      e.exports = t.Phoenix = n(2);
    }).call(this, n(1));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || s(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function r(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            o = !1,
            r = void 0;

        try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
          o = !0, r = e;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw r;
          }
        }

        return n;
      }(e, t) || s(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function s(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function h(e, t, n) {
      return t && u(e.prototype, t), n && u(e, n), e;
    }

    n.r(t), n.d(t, "Channel", function () {
      return _;
    }), n.d(t, "Serializer", function () {
      return H;
    }), n.d(t, "Socket", function () {
      return U;
    }), n.d(t, "LongPoll", function () {
      return D;
    }), n.d(t, "Ajax", function () {
      return M;
    }), n.d(t, "Presence", function () {
      return N;
    });

    var l = "undefined" != typeof self ? self : null,
        f = "undefined" != typeof window ? window : null,
        d = l || f || void 0,
        p = 0,
        v = 1,
        y = 2,
        m = 3,
        g = "closed",
        k = "errored",
        b = "joined",
        j = "joining",
        C = "leaving",
        E = "phx_close",
        R = "phx_error",
        T = "phx_join",
        S = "phx_reply",
        w = "phx_leave",
        A = [E, R, T, S, w],
        L = "longpoll",
        x = "websocket",
        O = function (e) {
      if ("function" == typeof e) return e;
      return function () {
        return e;
      };
    },
        P = function () {
      function e(t, n, i, o) {
        c(this, e), this.channel = t, this.event = n, this.payload = i || function () {
          return {};
        }, this.receivedResp = null, this.timeout = o, this.timeoutTimer = null, this.recHooks = [], this.sent = !1;
      }

      return h(e, [{
        key: "resend",
        value: function (e) {
          this.timeout = e, this.reset(), this.send();
        }
      }, {
        key: "send",
        value: function () {
          this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          }));
        }
      }, {
        key: "receive",
        value: function (e, t) {
          return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
            status: e,
            callback: t
          }), this;
        }
      }, {
        key: "reset",
        value: function () {
          this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
        }
      }, {
        key: "matchReceive",
        value: function (e) {
          var t = e.status,
              n = e.response;
          e.ref;
          this.recHooks.filter(function (e) {
            return e.status === t;
          }).forEach(function (e) {
            return e.callback(n);
          });
        }
      }, {
        key: "cancelRefEvent",
        value: function () {
          this.refEvent && this.channel.off(this.refEvent);
        }
      }, {
        key: "cancelTimeout",
        value: function () {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
      }, {
        key: "startTimeout",
        value: function () {
          var e = this;
          this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function (t) {
            e.cancelRefEvent(), e.cancelTimeout(), e.receivedResp = t, e.matchReceive(t);
          }), this.timeoutTimer = setTimeout(function () {
            e.trigger("timeout", {});
          }, this.timeout);
        }
      }, {
        key: "hasReceived",
        value: function (e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }, {
        key: "trigger",
        value: function (e, t) {
          this.channel.trigger(this.refEvent, {
            status: e,
            response: t
          });
        }
      }]), e;
    }(),
        _ = function () {
      function e(t, n, i) {
        var o = this;
        c(this, e), this.state = g, this.topic = t, this.params = O(n || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new P(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new J(function () {
          o.socket.isConnected() && o.rejoin();
        }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function () {
          return o.rejoinTimer.reset();
        })), this.stateChangeRefs.push(this.socket.onOpen(function () {
          o.rejoinTimer.reset(), o.isErrored() && o.rejoin();
        })), this.joinPush.receive("ok", function () {
          o.state = b, o.rejoinTimer.reset(), o.pushBuffer.forEach(function (e) {
            return e.send();
          }), o.pushBuffer = [];
        }), this.joinPush.receive("error", function () {
          o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.onClose(function () {
          o.rejoinTimer.reset(), o.socket.hasLogger() && o.socket.log("channel", "close ".concat(o.topic, " ").concat(o.joinRef())), o.state = g, o.socket.remove(o);
        }), this.onError(function (e) {
          o.socket.hasLogger() && o.socket.log("channel", "error ".concat(o.topic), e), o.isJoining() && o.joinPush.reset(), o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.joinPush.receive("timeout", function () {
          o.socket.hasLogger() && o.socket.log("channel", "timeout ".concat(o.topic, " (").concat(o.joinRef(), ")"), o.joinPush.timeout), new P(o, w, O({}), o.timeout).send(), o.state = k, o.joinPush.reset(), o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.on(S, function (e, t) {
          o.trigger(o.replyEventName(t), e);
        });
      }

      return h(e, [{
        key: "join",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
      }, {
        key: "onClose",
        value: function (e) {
          this.on(E, e);
        }
      }, {
        key: "onError",
        value: function (e) {
          return this.on(R, function (t) {
            return e(t);
          });
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this.bindingRef++;
          return this.bindings.push({
            event: e,
            ref: n,
            callback: t
          }), n;
        }
      }, {
        key: "off",
        value: function (e, t) {
          this.bindings = this.bindings.filter(function (n) {
            return !(n.event === e && (void 0 === t || t === n.ref));
          });
        }
      }, {
        key: "canPush",
        value: function () {
          return this.socket.isConnected() && this.isJoined();
        }
      }, {
        key: "push",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
          if (t = t || {}, !this.joinedOnce) throw new Error("tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
          var i = new P(this, e, function () {
            return t;
          }, n);
          return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
        }
      }, {
        key: "leave",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;

          var n = function () {
            e.socket.hasLogger() && e.socket.log("channel", "leave ".concat(e.topic)), e.trigger(E, "leave");
          },
              i = new P(this, w, O({}), t);

          return i.receive("ok", function () {
            return n();
          }).receive("timeout", function () {
            return n();
          }), i.send(), this.canPush() || i.trigger("ok", {}), i;
        }
      }, {
        key: "onMessage",
        value: function (e, t, n) {
          return t;
        }
      }, {
        key: "isLifecycleEvent",
        value: function (e) {
          return A.indexOf(e) >= 0;
        }
      }, {
        key: "isMember",
        value: function (e, t, n, i) {
          return this.topic === e && (!i || i === this.joinRef() || !this.isLifecycleEvent(t) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
            topic: e,
            event: t,
            payload: n,
            joinRef: i
          }), !1));
        }
      }, {
        key: "joinRef",
        value: function () {
          return this.joinPush.ref;
        }
      }, {
        key: "rejoin",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e));
        }
      }, {
        key: "trigger",
        value: function (e, t, n, i) {
          var o = this.onMessage(e, t, n, i);
          if (t && !o) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");

          for (var r = this.bindings.filter(function (t) {
            return t.event === e;
          }), s = 0; s < r.length; s++) {
            r[s].callback(o, n, i || this.joinRef());
          }
        }
      }, {
        key: "replyEventName",
        value: function (e) {
          return "chan_reply_".concat(e);
        }
      }, {
        key: "isClosed",
        value: function () {
          return this.state === g;
        }
      }, {
        key: "isErrored",
        value: function () {
          return this.state === k;
        }
      }, {
        key: "isJoined",
        value: function () {
          return this.state === b;
        }
      }, {
        key: "isJoining",
        value: function () {
          return this.state === j;
        }
      }, {
        key: "isLeaving",
        value: function () {
          return this.state === C;
        }
      }]), e;
    }(),
        H = {
      HEADER_LENGTH: 1,
      META_LENGTH: 4,
      KINDS: {
        push: 0,
        reply: 1,
        broadcast: 2
      },
      encode: function (e, t) {
        if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
        var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      },
      decode: function (e, t) {
        if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
        var n = r(JSON.parse(e), 5);
        return t({
          join_ref: n[0],
          ref: n[1],
          topic: n[2],
          event: n[3],
          payload: n[4]
        });
      },
      binaryEncode: function (e) {
        var t = e.join_ref,
            n = e.ref,
            i = e.event,
            o = e.topic,
            r = e.payload,
            s = this.META_LENGTH + t.length + n.length + o.length + i.length,
            a = new ArrayBuffer(this.HEADER_LENGTH + s),
            c = new DataView(a),
            u = 0;
        c.setUint8(u++, this.KINDS.push), c.setUint8(u++, t.length), c.setUint8(u++, n.length), c.setUint8(u++, o.length), c.setUint8(u++, i.length), Array.from(t, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(n, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(o, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(i, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        });
        var h = new Uint8Array(a.byteLength + r.byteLength);
        return h.set(new Uint8Array(a), 0), h.set(new Uint8Array(r), a.byteLength), h.buffer;
      },
      binaryDecode: function (e) {
        var t = new DataView(e),
            n = t.getUint8(0),
            i = new TextDecoder();

        switch (n) {
          case this.KINDS.push:
            return this.decodePush(e, t, i);

          case this.KINDS.reply:
            return this.decodeReply(e, t, i);

          case this.KINDS.broadcast:
            return this.decodeBroadcast(e, t, i);
        }
      },
      decodePush: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = t.getUint8(3),
            s = this.HEADER_LENGTH + this.META_LENGTH - 1,
            a = n.decode(e.slice(s, s + i));
        s += i;
        var c = n.decode(e.slice(s, s + o));
        s += o;
        var u = n.decode(e.slice(s, s + r));
        return s += r, {
          join_ref: a,
          ref: null,
          topic: c,
          event: u,
          payload: e.slice(s, e.byteLength)
        };
      },
      decodeReply: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = t.getUint8(3),
            s = t.getUint8(4),
            a = this.HEADER_LENGTH + this.META_LENGTH,
            c = n.decode(e.slice(a, a + i));
        a += i;
        var u = n.decode(e.slice(a, a + o));
        a += o;
        var h = n.decode(e.slice(a, a + r));
        a += r;
        var l = n.decode(e.slice(a, a + s));
        a += s;
        var f = e.slice(a, e.byteLength);
        return {
          join_ref: c,
          ref: u,
          topic: h,
          event: S,
          payload: {
            status: l,
            response: f
          }
        };
      },
      decodeBroadcast: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = this.HEADER_LENGTH + 2,
            s = n.decode(e.slice(r, r + i));
        r += i;
        var a = n.decode(e.slice(r, r + o));
        return r += o, {
          join_ref: null,
          ref: null,
          topic: s,
          event: a,
          payload: e.slice(r, e.byteLength)
        };
      }
    },
        U = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e), this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || d.WebSocket || D, this.defaultEncoder = H.encode.bind(H), this.defaultDecoder = H.decode.bind(H), this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== D ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("unload", function (e) {
          n.conn && (n.unloaded = !0, n.abnormalClose("unloaded"));
        }), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function (e) {
          return i.rejoinAfterMs ? i.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4;
        }, this.reconnectAfterMs = function (e) {
          return n.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3;
        }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = O(i.params || {}), this.endPoint = "".concat(t, "/").concat(x), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new J(function () {
          n.teardown(function () {
            return n.connect();
          });
        }, this.reconnectAfterMs);
      }

      return h(e, [{
        key: "protocol",
        value: function () {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
      }, {
        key: "endPointURL",
        value: function () {
          var e = M.appendParams(M.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
          });
          return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? "".concat(this.protocol(), ":").concat(e) : "".concat(this.protocol(), "://").concat(location.host).concat(e);
        }
      }, {
        key: "disconnect",
        value: function (e, t, n) {
          this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n);
        }
      }, {
        key: "connect",
        value: function (e) {
          var t = this;
          e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = O(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function () {
            return t.onConnOpen();
          }, this.conn.onerror = function (e) {
            return t.onConnError(e);
          }, this.conn.onmessage = function (e) {
            return t.onConnMessage(e);
          }, this.conn.onclose = function (e) {
            return t.onConnClose(e);
          });
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          this.logger(e, t, n);
        }
      }, {
        key: "hasLogger",
        value: function () {
          return null !== this.logger;
        }
      }, {
        key: "onOpen",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.open.push([t, e]), t;
        }
      }, {
        key: "onClose",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.close.push([t, e]), t;
        }
      }, {
        key: "onError",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.error.push([t, e]), t;
        }
      }, {
        key: "onMessage",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.message.push([t, e]), t;
        }
      }, {
        key: "onConnOpen",
        value: function () {
          this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function (e) {
            return (0, r(e, 2)[1])();
          });
        }
      }, {
        key: "resetHeartbeat",
        value: function () {
          var e = this;
          this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function () {
            return e.sendHeartbeat();
          }, this.heartbeatIntervalMs));
        }
      }, {
        key: "teardown",
        value: function (e, t, n) {
          var i = this;
          if (!this.conn) return e && e();
          this.waitForBufferDone(function () {
            i.conn && (t ? i.conn.close(t, n || "") : i.conn.close()), i.waitForSocketClosed(function () {
              i.conn && (i.conn.onclose = function () {}, i.conn = null), e && e();
            });
          });
        }
      }, {
        key: "waitForBufferDone",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.bufferedAmount ? setTimeout(function () {
            t.waitForBufferDone(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "waitForSocketClosed",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.readyState !== m ? setTimeout(function () {
            t.waitForSocketClosed(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "onConnClose",
        value: function (e) {
          this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "onConnError",
        value: function (e) {
          this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "triggerChanError",
        value: function () {
          this.channels.forEach(function (e) {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(R);
          });
        }
      }, {
        key: "connectionState",
        value: function () {
          switch (this.conn && this.conn.readyState) {
            case p:
              return "connecting";

            case v:
              return "open";

            case y:
              return "closing";

            default:
              return "closed";
          }
        }
      }, {
        key: "isConnected",
        value: function () {
          return "open" === this.connectionState();
        }
      }, {
        key: "remove",
        value: function (e) {
          this.off(e.stateChangeRefs), this.channels = this.channels.filter(function (t) {
            return t.joinRef() !== e.joinRef();
          });
        }
      }, {
        key: "off",
        value: function (e) {
          for (var t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(function (t) {
            var n = r(t, 1)[0];
            return -1 === e.indexOf(n);
          });
        }
      }, {
        key: "channel",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new _(e, t, this);
          return this.channels.push(n), n;
        }
      }, {
        key: "push",
        value: function (e) {
          var t = this;

          if (this.hasLogger()) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                r = e.ref,
                s = e.join_ref;
            this.log("push", "".concat(n, " ").concat(i, " (").concat(s, ", ").concat(r, ")"), o);
          }

          this.isConnected() ? this.encode(e, function (e) {
            return t.conn.send(e);
          }) : this.sendBuffer.push(function () {
            return t.encode(e, function (e) {
              return t.conn.send(e);
            });
          });
        }
      }, {
        key: "makeRef",
        value: function () {
          var e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
      }, {
        key: "sendHeartbeat",
        value: function () {
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
            this.pendingHeartbeatRef = this.makeRef(), this.push({
              topic: "phoenix",
              event: "heartbeat",
              payload: {},
              ref: this.pendingHeartbeatRef
            });
          }
        }
      }, {
        key: "abnormalClose",
        value: function (e) {
          this.closeWasClean = !1, this.conn.readyState === v && this.conn.close(1e3, e);
        }
      }, {
        key: "flushSendBuffer",
        value: function () {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function (e) {
            return e();
          }), this.sendBuffer = []);
        }
      }, {
        key: "onConnMessage",
        value: function (e) {
          var t = this;
          this.decode(e.data, function (e) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                s = e.ref,
                a = e.join_ref;
            s && s === t.pendingHeartbeatRef && (t.pendingHeartbeatRef = null), t.hasLogger() && t.log("receive", "".concat(o.status || "", " ").concat(n, " ").concat(i, " ").concat(s && "(" + s + ")" || ""), o);

            for (var c = 0; c < t.channels.length; c++) {
              var u = t.channels[c];
              u.isMember(n, i, o, a) && u.trigger(i, o, s, a);
            }

            for (var h = 0; h < t.stateChangeCallbacks.message.length; h++) {
              (0, r(t.stateChangeCallbacks.message[h], 2)[1])(e);
            }
          });
        }
      }, {
        key: "leaveOpenTopic",
        value: function (e) {
          var t = this.channels.find(function (t) {
            return t.topic === e && (t.isJoined() || t.isJoining());
          });
          t && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e, '"')), t.leave());
        }
      }]), e;
    }(),
        D = function () {
      function e(t) {
        c(this, e), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function () {}, this.onerror = function () {}, this.onmessage = function () {}, this.onclose = function () {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = p, this.poll();
      }

      return h(e, [{
        key: "normalizeEndpoint",
        value: function (e) {
          return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + x), "$1/" + L);
        }
      }, {
        key: "endpointURL",
        value: function () {
          return M.appendParams(this.pollEndpoint, {
            token: this.token
          });
        }
      }, {
        key: "closeAndRetry",
        value: function () {
          this.close(), this.readyState = p;
        }
      }, {
        key: "ontimeout",
        value: function () {
          this.onerror("timeout"), this.closeAndRetry();
        }
      }, {
        key: "poll",
        value: function () {
          var e = this;
          this.readyState !== v && this.readyState !== p || M.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function (t) {
            if (t) {
              var n = t.status,
                  i = t.token,
                  o = t.messages;
              e.token = i;
            } else n = 0;

            switch (n) {
              case 200:
                o.forEach(function (t) {
                  return e.onmessage({
                    data: t
                  });
                }), e.poll();
                break;

              case 204:
                e.poll();
                break;

              case 410:
                e.readyState = v, e.onopen(), e.poll();
                break;

              case 403:
                e.onerror(), e.close();
                break;

              case 0:
              case 500:
                e.onerror(), e.closeAndRetry();
                break;

              default:
                throw new Error("unhandled poll status ".concat(n));
            }
          });
        }
      }, {
        key: "send",
        value: function (e) {
          var t = this;
          M.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), function (e) {
            e && 200 === e.status || (t.onerror(e && e.status), t.closeAndRetry());
          });
        }
      }, {
        key: "close",
        value: function (e, t) {
          this.readyState = m, this.onclose();
        }
      }]), e;
    }(),
        M = function () {
      function e() {
        c(this, e);
      }

      return h(e, null, [{
        key: "request",
        value: function (e, t, n, i, o, r, s) {
          if (d.XDomainRequest) {
            var a = new XDomainRequest();
            this.xdomainRequest(a, e, t, i, o, r, s);
          } else {
            var c = new d.XMLHttpRequest();
            this.xhrRequest(c, e, t, n, i, o, r, s);
          }
        }
      }, {
        key: "xdomainRequest",
        value: function (e, t, n, i, o, r, s) {
          var a = this;
          e.timeout = o, e.open(t, n), e.onload = function () {
            var t = a.parseJSON(e.responseText);
            s && s(t);
          }, r && (e.ontimeout = r), e.onprogress = function () {}, e.send(i);
        }
      }, {
        key: "xhrRequest",
        value: function (e, t, n, i, o, r, s, a) {
          var c = this;
          e.open(t, n, !0), e.timeout = r, e.setRequestHeader("Content-Type", i), e.onerror = function () {
            a && a(null);
          }, e.onreadystatechange = function () {
            if (e.readyState === c.states.complete && a) {
              var t = c.parseJSON(e.responseText);
              a(t);
            }
          }, s && (e.ontimeout = s), e.send(o);
        }
      }, {
        key: "parseJSON",
        value: function (e) {
          if (!e || "" === e) return null;

          try {
            return JSON.parse(e);
          } catch (t) {
            return console && console.log("failed to parse JSON response", e), null;
          }
        }
      }, {
        key: "serialize",
        value: function (e, t) {
          var n = [];

          for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t ? "".concat(t, "[").concat(i, "]") : i,
                s = e[i];
            "object" === o(s) ? n.push(this.serialize(s, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
          }

          return n.join("&");
        }
      }, {
        key: "appendParams",
        value: function (e, t) {
          if (0 === Object.keys(t).length) return e;
          var n = e.match(/\?/) ? "&" : "?";
          return "".concat(e).concat(n).concat(this.serialize(t));
        }
      }]), e;
    }();

    M.states = {
      complete: 4
    };

    var N = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e);
        var o = i.events || {
          state: "presence_state",
          diff: "presence_diff"
        };
        this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {}
        }, this.channel.on(o.state, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.joinRef = n.channel.joinRef(), n.state = e.syncState(n.state, t, o, r), n.pendingDiffs.forEach(function (t) {
            n.state = e.syncDiff(n.state, t, o, r);
          }), n.pendingDiffs = [], s();
        }), this.channel.on(o.diff, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.inPendingSyncState() ? n.pendingDiffs.push(t) : (n.state = e.syncDiff(n.state, t, o, r), s());
        });
      }

      return h(e, [{
        key: "onJoin",
        value: function (e) {
          this.caller.onJoin = e;
        }
      }, {
        key: "onLeave",
        value: function (e) {
          this.caller.onLeave = e;
        }
      }, {
        key: "onSync",
        value: function (e) {
          this.caller.onSync = e;
        }
      }, {
        key: "list",
        value: function (t) {
          return e.list(this.state, t);
        }
      }, {
        key: "inPendingSyncState",
        value: function () {
          return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
      }], [{
        key: "syncState",
        value: function (e, t, n, i) {
          var o = this,
              r = this.clone(e),
              s = {},
              a = {};
          return this.map(r, function (e, n) {
            t[e] || (a[e] = n);
          }), this.map(t, function (e, t) {
            var n = r[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = n.metas.map(function (e) {
                return e.phx_ref;
              }),
                  u = t.metas.filter(function (e) {
                return c.indexOf(e.phx_ref) < 0;
              }),
                  h = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              });
              u.length > 0 && (s[e] = t, s[e].metas = u), h.length > 0 && (a[e] = o.clone(n), a[e].metas = h);
            } else s[e] = t;
          }), this.syncDiff(r, {
            joins: s,
            leaves: a
          }, n, i);
        }
      }, {
        key: "syncDiff",
        value: function (e, t, n, o) {
          var r = t.joins,
              s = t.leaves,
              a = this.clone(e);
          return n || (n = function () {}), o || (o = function () {}), this.map(r, function (e, t) {
            var o = a[e];

            if (a[e] = t, o) {
              var r,
                  s = a[e].metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = o.metas.filter(function (e) {
                return s.indexOf(e.phx_ref) < 0;
              });
              (r = a[e].metas).unshift.apply(r, i(c));
            }

            n(e, o, t);
          }), this.map(s, function (e, t) {
            var n = a[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              });
              n.metas = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              }), o(e, n, t), 0 === n.metas.length && delete a[e];
            }
          }), a;
        }
      }, {
        key: "list",
        value: function (e, t) {
          return t || (t = function (e, t) {
            return t;
          }), this.map(e, function (e, n) {
            return t(e, n);
          });
        }
      }, {
        key: "map",
        value: function (e, t) {
          return Object.getOwnPropertyNames(e).map(function (n) {
            return t(n, e[n]);
          });
        }
      }, {
        key: "clone",
        value: function (e) {
          return JSON.parse(JSON.stringify(e));
        }
      }]), e;
    }(),
        J = function () {
      function e(t, n) {
        c(this, e), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0;
      }

      return h(e, [{
        key: "reset",
        value: function () {
          this.tries = 0, clearTimeout(this.timer);
        }
      }, {
        key: "scheduleTimeout",
        value: function () {
          var e = this;
          clearTimeout(this.timer), this.timer = setTimeout(function () {
            e.tries = e.tries + 1, e.callback();
          }, this.timerCalc(this.tries + 1));
        }
      }]), e;
    }();
  }]);
});

/***/ }),

/***/ "../deps/phoenix_html/priv/static/phoenix_html.js":
/*!********************************************************!*\
  !*** ../deps/phoenix_html/priv/static/phoenix_html.js ***!
  \********************************************************/
/***/ (() => {

"use strict";


(function () {
  var PolyfillEvent = eventConstructor();

  function eventConstructor() {
    if (typeof window.CustomEvent === "function") return window.CustomEvent; // IE<=9 Support

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    return CustomEvent;
  }

  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }

  function handleClick(element) {
    var to = element.getAttribute("data-to"),
        method = buildHiddenInput("_method", element.getAttribute("data-method")),
        csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")),
        form = document.createElement("form"),
        target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target) form.target = target;
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }

  window.addEventListener("click", function (e) {
    var element = e.target;

    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {
        "bubbles": true,
        "cancelable": true
      });

      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }

      if (element.getAttribute("data-method")) {
        handleClick(element);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener('phoenix.link.click', function (e) {
    var message = e.target.getAttribute("data-confirm");

    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

/***/ }),

/***/ "../deps/phoenix_live_view/priv/static/phoenix_live_view.js":
/*!******************************************************************!*\
  !*** ../deps/phoenix_live_view/priv/static/phoenix_live_view.js ***!
  \******************************************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 2);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var i,
        r = 11;
    var o = "http://www.w3.org/1999/xhtml",
        a = "undefined" == typeof document ? void 0 : document,
        u = !!a && "content" in a.createElement("template"),
        s = !!a && a.createRange && "createContextualFragment" in a.createRange();

    function c(e) {
      return e = e.trim(), u ? function (e) {
        var t = a.createElement("template");
        return t.innerHTML = e, t.content.childNodes[0];
      }(e) : s ? function (e) {
        return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e).childNodes[0];
      }(e) : function (e) {
        var t = a.createElement("body");
        return t.innerHTML = e, t.childNodes[0];
      }(e);
    }

    function l(e, t) {
      var n,
          i,
          r = e.nodeName,
          o = t.nodeName;
      return r === o || (n = r.charCodeAt(0), i = o.charCodeAt(0), n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase());
    }

    function d(e, t, n) {
      e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n));
    }

    var h = {
      OPTION: function (e, t) {
        var n = e.parentNode;

        if (n) {
          var i = n.nodeName.toUpperCase();
          "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()), "SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), n.selectedIndex = -1);
        }

        d(e, t, "selected");
      },
      INPUT: function (e, t) {
        d(e, t, "checked"), d(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
      },
      TEXTAREA: function (e, t) {
        var n = t.value;
        e.value !== n && (e.value = n);
        var i = e.firstChild;

        if (i) {
          var r = i.nodeValue;
          if (r == n || !n && r == e.placeholder) return;
          i.nodeValue = n;
        }
      },
      SELECT: function (e, t) {
        if (!t.hasAttribute("multiple")) {
          for (var n, i, r = -1, o = 0, a = e.firstChild; a;) if ("OPTGROUP" === (i = a.nodeName && a.nodeName.toUpperCase())) a = (n = a).firstChild;else {
            if ("OPTION" === i) {
              if (a.hasAttribute("selected")) {
                r = o;
                break;
              }

              o++;
            }

            !(a = a.nextSibling) && n && (a = n.nextSibling, n = null);
          }

          e.selectedIndex = r;
        }
      }
    },
        f = 1,
        v = 11,
        p = 3,
        g = 8;

    function m() {}

    function y(e) {
      if (e) return e.getAttribute && e.getAttribute("id") || e.id;
    }

    var b = function (e) {
      return function (t, n, i) {
        if (i || (i = {}), "string" == typeof n) if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
          var r = n;
          (n = a.createElement("html")).innerHTML = r;
        } else n = c(n);
        var u = i.getNodeKey || y,
            s = i.onBeforeNodeAdded || m,
            d = i.onNodeAdded || m,
            b = i.onBeforeElUpdated || m,
            k = i.onElUpdated || m,
            w = i.onBeforeNodeDiscarded || m,
            E = i.onNodeDiscarded || m,
            A = i.onBeforeElChildrenUpdated || m,
            S = !0 === i.childrenOnly,
            x = Object.create(null),
            C = [];

        function P(e) {
          C.push(e);
        }

        function L(e, t, n) {
          !1 !== w(e) && (t && t.removeChild(e), E(e), function e(t, n) {
            if (t.nodeType === f) for (var i = t.firstChild; i;) {
              var r = void 0;
              n && (r = u(i)) ? P(r) : (E(i), i.firstChild && e(i, n)), i = i.nextSibling;
            }
          }(e, n));
        }

        function I(e) {
          d(e);

          for (var t = e.firstChild; t;) {
            var n = t.nextSibling,
                i = u(t);

            if (i) {
              var r = x[i];
              r && l(t, r) ? (t.parentNode.replaceChild(r, t), T(r, t)) : I(t);
            } else I(t);

            t = n;
          }
        }

        function T(t, n, i) {
          var r = u(n);

          if (r && delete x[r], !i) {
            if (!1 === b(t, n)) return;
            if (e(t, n), k(t), !1 === A(t, n)) return;
          }

          "TEXTAREA" !== t.nodeName ? function (e, t) {
            var n,
                i,
                r,
                o,
                c,
                d = t.firstChild,
                v = e.firstChild;

            e: for (; d;) {
              for (o = d.nextSibling, n = u(d); v;) {
                if (r = v.nextSibling, d.isSameNode && d.isSameNode(v)) {
                  d = o, v = r;
                  continue e;
                }

                i = u(v);
                var m = v.nodeType,
                    y = void 0;

                if (m === d.nodeType && (m === f ? (n ? n !== i && ((c = x[n]) ? r === c ? y = !1 : (e.insertBefore(c, v), i ? P(i) : L(v, e, !0), v = c) : y = !1) : i && (y = !1), (y = !1 !== y && l(v, d)) && T(v, d)) : m !== p && m != g || (y = !0, v.nodeValue !== d.nodeValue && (v.nodeValue = d.nodeValue))), y) {
                  d = o, v = r;
                  continue e;
                }

                i ? P(i) : L(v, e, !0), v = r;
              }

              if (n && (c = x[n]) && l(c, d)) e.appendChild(c), T(c, d);else {
                var b = s(d);
                !1 !== b && (b && (d = b), d.actualize && (d = d.actualize(e.ownerDocument || a)), e.appendChild(d), I(d));
              }
              d = o, v = r;
            }

            !function (e, t, n) {
              for (; t;) {
                var i = t.nextSibling;
                (n = u(t)) ? P(n) : L(t, e, !0), t = i;
              }
            }(e, v, i);
            var k = h[e.nodeName];
            k && k(e, t);
          }(t, n) : h.TEXTAREA(t, n);
        }

        !function e(t) {
          if (t.nodeType === f || t.nodeType === v) for (var n = t.firstChild; n;) {
            var i = u(n);
            i && (x[i] = n), e(n), n = n.nextSibling;
          }
        }(t);
        var D = t,
            _ = D.nodeType,
            N = n.nodeType;
        if (!S) if (_ === f) N === f ? l(t, n) || (E(t), D = function (e, t) {
          for (var n = e.firstChild; n;) {
            var i = n.nextSibling;
            t.appendChild(n), n = i;
          }

          return t;
        }(t, function (e, t) {
          return t && t !== o ? a.createElementNS(t, e) : a.createElement(e);
        }(n.nodeName, n.namespaceURI))) : D = n;else if (_ === p || _ === g) {
          if (N === _) return D.nodeValue !== n.nodeValue && (D.nodeValue = n.nodeValue), D;
          D = n;
        }
        if (D === n) E(t);else {
          if (n.isSameNode && n.isSameNode(D)) return;
          if (T(D, n, S), C) for (var R = 0, O = C.length; R < O; R++) {
            var j = x[C[R]];
            j && L(j, j.parentNode, !1);
          }
        }
        return !S && D !== t && t.parentNode && (D.actualize && (D = D.actualize(t.ownerDocument || a)), t.parentNode.replaceChild(D, t)), D;
      };
    }(function (e, t) {
      var n,
          i,
          o,
          a,
          u = t.attributes;

      if (t.nodeType !== r && e.nodeType !== r) {
        for (var s = u.length - 1; s >= 0; s--) i = (n = u[s]).name, o = n.namespaceURI, a = n.value, o ? (i = n.localName || i, e.getAttributeNS(o, i) !== a && ("xmlns" === n.prefix && (i = n.name), e.setAttributeNS(o, i, a))) : e.getAttribute(i) !== a && e.setAttribute(i, a);

        for (var c = e.attributes, l = c.length - 1; l >= 0; l--) i = (n = c[l]).name, (o = n.namespaceURI) ? (i = n.localName || i, t.hasAttributeNS(o, i) || e.removeAttributeNS(o, i)) : t.hasAttribute(i) || e.removeAttribute(i);
      }
    });

    function k(e) {
      return P(e) || S(e) || L(e) || C();
    }

    function w(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, i);
      }

      return n;
    }

    function E(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function A(e) {
      return function (e) {
        if (Array.isArray(e)) return I(e);
      }(e) || S(e) || L(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function S(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }

    function x(e, t) {
      return P(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            r = !1,
            o = void 0;

        try {
          for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            i || null == u.return || u.return();
          } finally {
            if (r) throw o;
          }
        }

        return n;
      }(e, t) || L(e, t) || C();
    }

    function C() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function P(e) {
      if (Array.isArray(e)) return e;
    }

    function L(e, t) {
      if (e) {
        if ("string" == typeof e) return I(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(e, t) : void 0;
      }
    }

    function I(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function T(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function D(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function _(e, t, n) {
      return t && D(e.prototype, t), n && D(e, n), e;
    }

    function N(e) {
      "@babel/helpers - typeof";

      return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    n.d(t, "debug", function () {
      return K;
    }), n.d(t, "Rendered", function () {
      return ue;
    }), n.d(t, "LiveSocket", function () {
      return se;
    }), n.d(t, "Browser", function () {
      return ce;
    }), n.d(t, "DOM", function () {
      return le;
    }), n.d(t, "View", function () {
      return fe;
    });

    var R = [1e3, 3e3],
        O = "data-phx-view",
        j = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"],
        H = "data-phx-component",
        F = "data-phx-ref",
        M = "data-phx-upload-ref",
        U = "[".concat(O, "]"),
        B = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"],
        J = ["checkbox", "radio"],
        V = 1,
        W = "phx-",
        q = {
      debounce: 300,
      throttle: 300
    },
        z = function (e, t) {
      return console.error && console.error(e, t);
    };

    var K = function (e, t, n, i) {
      e.liveSocket.isDebugEnabled() && console.log("".concat(e.id, " ").concat(t, ": ").concat(n, " - "), i);
    },
        X = function (e) {
      return "function" == typeof e ? e : function () {
        return e;
      };
    },
        $ = function (e) {
      return JSON.parse(JSON.stringify(e));
    },
        G = function (e, t, n) {
      do {
        if (e.matches("[".concat(t, "]"))) return e;
        e = e.parentElement || e.parentNode;
      } while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(U)));

      return null;
    },
        Y = function (e) {
      return null !== e && "object" === N(e) && !(e instanceof Array);
    },
        Q = function (e) {
      for (var t in e) return !1;

      return !0;
    },
        Z = function (e, t) {
      return e && t(e);
    },
        ee = function () {
      function e(t, n, i) {
        T(this, e), this.ref = ie.genFileRef(n), this.fileEl = t, this.file = n, this.view = i, this.meta = null, this._isCancelled = !1, this._isDone = !1, this._progress = 0, this._onDone = function () {};
      }

      return _(e, null, [{
        key: "isActive",
        value: function (e, t) {
          var n = void 0 === t._phxRef,
              i = e.getAttribute("data-phx-active-refs").split(",").indexOf(ie.genFileRef(t)) >= 0;
          return t.size > 0 && (n || i);
        }
      }, {
        key: "isPreflighted",
        value: function (e, t) {
          var n = e.getAttribute("data-phx-preflighted-refs").split(",").indexOf(ie.genFileRef(t)) >= 0;
          return n && this.isActive(e, t);
        }
      }]), _(e, [{
        key: "metadata",
        value: function () {
          return this.meta;
        }
      }, {
        key: "progress",
        value: function (e) {
          var t = this;
          this._progress = Math.floor(e), this._progress >= 100 ? (this._progress = 100, this._isDone = !0, this.view.pushFileProgress(this.fileEl, this.ref, 100, function () {
            ie.untrackFile(t.fileEl, t.file), t._onDone();
          })) : this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
        }
      }, {
        key: "cancel",
        value: function () {
          this._isCancelled = !0, this._isDone = !0, this._onDone();
        }
      }, {
        key: "isDone",
        value: function () {
          return this._isDone;
        }
      }, {
        key: "error",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "failed";
          this.view.pushFileProgress(this.fileEl, this.ref, {
            error: e
          });
        }
      }, {
        key: "onDone",
        value: function (e) {
          this._onDone = e;
        }
      }, {
        key: "toPreflightPayload",
        value: function () {
          return {
            last_modified: this.file.lastModified,
            name: this.file.name,
            size: this.file.size,
            type: this.file.type,
            ref: this.ref
          };
        }
      }, {
        key: "uploader",
        value: function (e) {
          if (this.meta.uploader) {
            var t = e[this.meta.uploader] || z("no uploader configured for ".concat(this.meta.uploader));
            return {
              name: this.meta.uploader,
              callback: t
            };
          }

          return {
            name: "channel",
            callback: re
          };
        }
      }, {
        key: "zipPostFlight",
        value: function (e) {
          this.meta = e.entries[this.ref], this.meta || z("no preflight upload response returned with ref ".concat(this.ref), {
            input: this.fileEl,
            response: e
          });
        }
      }]), e;
    }(),
        te = {
      LiveFileUpload: {
        preflightedRefs: function () {
          return this.el.getAttribute("data-phx-preflighted-refs");
        },
        mounted: function () {
          this.preflightedWas = this.preflightedRefs();
        },
        updated: function () {
          var e = this.preflightedRefs();
          this.preflightedWas !== e && (this.preflightedWas = e, "" === e && this.__view.cancelSubmit(this.el.form));
        }
      }
    };

    te.LiveImgPreview = {
      mounted: function () {
        var e = this;
        this.ref = this.el.getAttribute("data-phx-entry-ref"), this.inputEl = document.getElementById(this.el.getAttribute(M)), ie.getEntryDataURL(this.inputEl, this.ref, function (t) {
          return e.el.src = t;
        });
      }
    };

    var ne = 0,
        ie = function () {
      function e(t, n, i) {
        T(this, e), this.view = n, this.onComplete = i, this._entries = Array.from(e.filesAwaitingPreflight(t) || []).map(function (e) {
          return new ee(t, e, n);
        }), this.numEntriesInProgress = this._entries.length;
      }

      return _(e, null, [{
        key: "genFileRef",
        value: function (e) {
          var t = e._phxRef;
          return void 0 !== t ? t : (e._phxRef = (ne++).toString(), e._phxRef);
        }
      }, {
        key: "getEntryDataURL",
        value: function (e, t, n) {
          var i = this,
              r = this.activeFiles(e).find(function (e) {
            return i.genFileRef(e) === t;
          }),
              o = new FileReader();
          o.onload = function (e) {
            return n(e.target.result);
          }, o.readAsDataURL(r);
        }
      }, {
        key: "hasUploadsInProgress",
        value: function (e) {
          var t = 0;
          return le.findUploadInputs(e).forEach(function (e) {
            e.getAttribute("data-phx-preflighted-refs") !== e.getAttribute("data-phx-done-refs") && t++;
          }), t > 0;
        }
      }, {
        key: "serializeUploads",
        value: function (e) {
          var t = this,
              n = {};
          return this.activeFiles(e, "serialize").forEach(function (i) {
            var r = {
              path: e.name
            },
                o = e.getAttribute(M);
            n[o] = n[o] || [], r.ref = t.genFileRef(i), r.name = i.name, r.type = i.type, r.size = i.size, n[o].push(r);
          }), n;
        }
      }, {
        key: "clearFiles",
        value: function (e) {
          e.value = null, le.putPrivate(e, "files", []);
        }
      }, {
        key: "untrackFile",
        value: function (e, t) {
          le.putPrivate(e, "files", le.private(e, "files").filter(function (e) {
            return !Object.is(e, t);
          }));
        }
      }, {
        key: "trackFiles",
        value: function (e, t) {
          var n = this;

          if (null !== e.getAttribute("multiple")) {
            var i = t.filter(function (t) {
              return !n.activeFiles(e).find(function (e) {
                return Object.is(e, t);
              });
            });
            le.putPrivate(e, "files", this.activeFiles(e).concat(i)), e.value = null;
          } else le.putPrivate(e, "files", t);
        }
      }, {
        key: "activeFileInputs",
        value: function (e) {
          var t = this,
              n = le.findUploadInputs(e);
          return Array.from(n).filter(function (e) {
            return e.files && t.activeFiles(e).length > 0;
          });
        }
      }, {
        key: "activeFiles",
        value: function (e) {
          return (le.private(e, "files") || []).filter(function (t) {
            return ee.isActive(e, t);
          });
        }
      }, {
        key: "inputsAwaitingPreflight",
        value: function (e) {
          var t = this,
              n = le.findUploadInputs(e);
          return Array.from(n).filter(function (e) {
            return t.filesAwaitingPreflight(e).length > 0;
          });
        }
      }, {
        key: "filesAwaitingPreflight",
        value: function (e) {
          return this.activeFiles(e).filter(function (t) {
            return !ee.isPreflighted(e, t);
          });
        }
      }]), _(e, [{
        key: "entries",
        value: function () {
          return this._entries;
        }
      }, {
        key: "initAdapterUpload",
        value: function (e, t, n) {
          var i = this;
          this._entries = this._entries.map(function (t) {
            return t.zipPostFlight(e), t.onDone(function () {
              i.numEntriesInProgress--, 0 === i.numEntriesInProgress && i.onComplete();
            }), t;
          });

          var r = this._entries.reduce(function (e, t) {
            var i = t.uploader(n.uploaders),
                r = i.name,
                o = i.callback;
            return e[r] = e[r] || {
              callback: o,
              entries: []
            }, e[r].entries.push(t), e;
          }, {});

          for (var o in r) {
            var a = r[o];
            (0, a.callback)(a.entries, t, e, n);
          }
        }
      }]), e;
    }(),
        re = function (e, t, n, i) {
      e.forEach(function (e) {
        new oe(e, n.config.chunk_size, i).upload();
      });
    },
        oe = function () {
      function e(t, n, i) {
        T(this, e), this.liveSocket = i, this.entry = t, this.offset = 0, this.chunkSize = n, this.uploadChannel = i.channel("lvu:".concat(t.ref), {
          token: t.metadata()
        });
      }

      return _(e, [{
        key: "upload",
        value: function () {
          var e = this;
          this.uploadChannel.join().receive("ok", function (t) {
            return e.readNextChunk();
          }).receive("error", function (t) {
            e.uploadChannel.leave(), e.entry.error();
          });
        }
      }, {
        key: "isDone",
        value: function () {
          return this.offset >= this.entry.file.size;
        }
      }, {
        key: "readNextChunk",
        value: function () {
          var e = this,
              t = new window.FileReader(),
              n = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
          t.onload = function (t) {
            if (null !== t.target.error) return z("Read error: " + t.target.error);
            e.offset += t.target.result.byteLength, e.pushChunk(t.target.result);
          }, t.readAsArrayBuffer(n);
        }
      }, {
        key: "pushChunk",
        value: function (e) {
          var t = this;
          this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e).receive("ok", function () {
            t.entry.progress(t.offset / t.entry.file.size * 100), t.isDone() || setTimeout(function () {
              return t.readNextChunk();
            }, t.liveSocket.getLatencySim() || 0);
          });
        }
      }]), e;
    }(),
        ae = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = new FormData(e),
          i = [];
      n.forEach(function (e, t, n) {
        e instanceof File && i.push(t);
      }), i.forEach(function (e) {
        return n.delete(e);
      });

      var r,
          o = new URLSearchParams(),
          a = function (e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = L(e))) {
            var t = 0,
                n = function () {};

            return {
              s: n,
              n: function () {
                return t >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[t++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: n
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var i,
            r,
            o = !0,
            a = !1;
        return {
          s: function () {
            i = e[Symbol.iterator]();
          },
          n: function () {
            var e = i.next();
            return o = e.done, e;
          },
          e: function (e) {
            a = !0, r = e;
          },
          f: function () {
            try {
              o || null == i.return || i.return();
            } finally {
              if (a) throw r;
            }
          }
        };
      }(n.entries());

      try {
        for (a.s(); !(r = a.n()).done;) {
          var u = x(r.value, 2),
              s = u[0],
              c = u[1];
          o.append(s, c);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }

      for (var l in t) o.append(l, t[l]);

      return o.toString();
    },
        ue = function () {
      function e(t, n) {
        T(this, e), this.viewId = t, this.rendered = {}, this.mergeDiff(n);
      }

      return _(e, null, [{
        key: "extract",
        value: function (e) {
          var t = e.r,
              n = e.e,
              i = e.t;
          return delete e.r, delete e.e, delete e.t, {
            diff: e,
            title: i,
            reply: t || null,
            events: n || []
          };
        }
      }]), _(e, [{
        key: "parentViewId",
        value: function () {
          return this.viewId;
        }
      }, {
        key: "toString",
        value: function (e) {
          return this.recursiveToString(this.rendered, this.rendered.c, e);
        }
      }, {
        key: "recursiveToString",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.c,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = {
            buffer: "",
            components: t,
            onlyCids: n = n ? new Set(n) : null
          };
          return this.toOutputBuffer(e, i), i.buffer;
        }
      }, {
        key: "componentCIDs",
        value: function (e) {
          return Object.keys(e.c || {}).map(function (e) {
            return parseInt(e);
          });
        }
      }, {
        key: "isComponentOnlyDiff",
        value: function (e) {
          return !!e.c && 1 === Object.keys(e).length;
        }
      }, {
        key: "getComponent",
        value: function (e, t) {
          return e.c[t];
        }
      }, {
        key: "mergeDiff",
        value: function (e) {
          var t = e.c;

          if (delete e.c, this.rendered = this.recursiveMerge(this.rendered, e), this.rendered.c = this.rendered.c || {}, t) {
            var n = this.rendered.c;

            for (var i in t) {
              var r = t[i],
                  o = r,
                  a = o.s;

              if ("number" == typeof a) {
                for (; "number" == typeof a;) a = (o = a > 0 ? t[a] : n[-a]).s;

                o = $(o), this.doRecursiveMerge(o, r), o.s = a;
              } else o = n[i] || {}, o = this.recursiveMerge(o, r);

              t[i] = o;
            }

            for (var u in t) n[u] = t[u];

            e.c = t;
          }
        }
      }, {
        key: "recursiveMerge",
        value: function (e, t) {
          return void 0 !== t.s ? t : (this.doRecursiveMerge(e, t), e);
        }
      }, {
        key: "doRecursiveMerge",
        value: function (e, t) {
          for (var n in t) {
            var i = t[n],
                r = e[n];
            Y(i) && void 0 === i.s && Y(r) ? this.doRecursiveMerge(r, i) : e[n] = i;
          }
        }
      }, {
        key: "componentToString",
        value: function (e) {
          return this.recursiveCIDToString(this.rendered.c, e);
        }
      }, {
        key: "pruneCIDs",
        value: function (e) {
          var t = this;
          e.forEach(function (e) {
            return delete t.rendered.c[e];
          });
        }
      }, {
        key: "get",
        value: function () {
          return this.rendered;
        }
      }, {
        key: "isNewFingerprint",
        value: function () {
          return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s;
        }
      }, {
        key: "toOutputBuffer",
        value: function (e, t) {
          if (e.d) return this.comprehensionToBuffer(e, t);
          var n = e.s;
          t.buffer += n[0];

          for (var i = 1; i < n.length; i++) this.dynamicToBuffer(e[i - 1], t), t.buffer += n[i];
        }
      }, {
        key: "comprehensionToBuffer",
        value: function (e, t) {
          for (var n = e.d, i = e.s, r = 0; r < n.length; r++) {
            var o = n[r];
            t.buffer += i[0];

            for (var a = 1; a < i.length; a++) this.dynamicToBuffer(o[a - 1], t), t.buffer += i[a];
          }
        }
      }, {
        key: "dynamicToBuffer",
        value: function (e, t) {
          "number" == typeof e ? t.buffer += this.recursiveCIDToString(t.components, e, t.onlyCids) : Y(e) ? this.toOutputBuffer(e, t) : t.buffer += e;
        }
      }, {
        key: "recursiveCIDToString",
        value: function (e, t, n) {
          var i = this,
              r = e[t] || z("no component for CID ".concat(t), e),
              o = document.createElement("template");
          o.innerHTML = this.recursiveToString(r, e, n);
          var a = o.content,
              u = n && !n.has(t),
              s = x(Array.from(a.childNodes).reduce(function (e, n, r) {
            var a = x(e, 2),
                s = a[0],
                c = a[1];
            return n.nodeType === Node.ELEMENT_NODE ? n.getAttribute(H) ? [s, !0] : (n.setAttribute(H, t), n.id || (n.id = "".concat(i.parentViewId(), "-").concat(t, "-").concat(r)), u && (n.setAttribute("data-phx-skip", ""), n.innerHTML = ""), [!0, c]) : "" !== n.nodeValue.trim() ? (z("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n.nodeValue.trim(), '"\n\n') + "within:\n", o.innerHTML.trim()), n.replaceWith(i.createSpan(n.nodeValue, t)), [!0, c]) : (n.remove(), [s, c]);
          }, [!1, !1]), 2),
              c = s[0],
              l = s[1];
          return c || l ? !c && l ? (z("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o.innerHTML.trim()), o.innerHTML) : o.innerHTML : (z("expected at least one HTML element tag inside a component, but the component is empty:\n", o.innerHTML.trim()), this.createSpan("", t).outerHTML);
        }
      }, {
        key: "createSpan",
        value: function (e, t) {
          var n = document.createElement("span");
          return n.innerText = e, n.setAttribute(H, t), n;
        }
      }]), e;
    }(),
        se = function () {
      function e(t, n) {
        var i = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (T(this, e), this.unloaded = !1, !n || "Object" === n.constructor.name) throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
        this.socket = new n(t, r), this.bindingPrefix = r.bindingPrefix || W, this.opts = r, this.params = X(r.params || {}), this.viewLogger = r.viewLogger, this.metadataCallbacks = r.metadata || {}, this.defaults = Object.assign($(q), r.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = !1, this.main = null, this.linkRef = 0, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = $(window.location), this.hooks = r.hooks || {}, this.uploaders = r.uploaders || {}, this.loaderTimeout = r.loaderTimeout || V, this.boundTopLevelEvents = !1, this.domCallbacks = Object.assign({
          onNodeAdded: X(),
          onBeforeElUpdated: X()
        }, r.dom || {}), window.addEventListener("unload", function (e) {
          i.unloaded = !0;
        }), this.socket.onOpen(function () {
          i.isUnloaded() && window.location.reload();
        });
      }

      return _(e, [{
        key: "isProfileEnabled",
        value: function () {
          return "true" === sessionStorage.getItem("phx:live-socket:profiling");
        }
      }, {
        key: "isDebugEnabled",
        value: function () {
          return "true" === sessionStorage.getItem("phx:live-socket:debug");
        }
      }, {
        key: "enableDebug",
        value: function () {
          sessionStorage.setItem("phx:live-socket:debug", "true");
        }
      }, {
        key: "enableProfiling",
        value: function () {
          sessionStorage.setItem("phx:live-socket:profiling", "true");
        }
      }, {
        key: "disableDebug",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:debug");
        }
      }, {
        key: "disableProfiling",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:profiling");
        }
      }, {
        key: "enableLatencySim",
        value: function (e) {
          this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), sessionStorage.setItem("phx:live-socket:latency-sim", e);
        }
      }, {
        key: "disableLatencySim",
        value: function () {
          sessionStorage.removeItem("phx:live-socket:latency-sim");
        }
      }, {
        key: "getLatencySim",
        value: function () {
          var e = sessionStorage.getItem("phx:live-socket:latency-sim");
          return e ? parseInt(e) : null;
        }
      }, {
        key: "getSocket",
        value: function () {
          return this.socket;
        }
      }, {
        key: "connect",
        value: function () {
          var e = this,
              t = function () {
            e.joinRootViews() && (e.bindTopLevelEvents(), e.socket.connect());
          };

          ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", function () {
            return t();
          });
        }
      }, {
        key: "disconnect",
        value: function (e) {
          this.socket.disconnect(e);
        }
      }, {
        key: "triggerDOM",
        value: function (e, t) {
          var n;
          (n = this.domCallbacks)[e].apply(n, A(t));
        }
      }, {
        key: "time",
        value: function (e, t) {
          if (!this.isProfileEnabled() || !console.time) return t();
          console.time(e);
          var n = t();
          return console.timeEnd(e), n;
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          if (this.viewLogger) {
            var i = x(n(), 2),
                r = i[0],
                o = i[1];
            this.viewLogger(e, t, r, o);
          } else if (this.isDebugEnabled()) {
            var a = x(n(), 2),
                u = a[0],
                s = a[1];
            K(e, t, u, s);
          }
        }
      }, {
        key: "onChannel",
        value: function (e, t, n) {
          var i = this;
          e.on(t, function (e) {
            var t = i.getLatencySim();
            t ? (console.log("simulating ".concat(t, "ms of latency from server to client")), setTimeout(function () {
              return n(e);
            }, t)) : n(e);
          });
        }
      }, {
        key: "wrapPush",
        value: function (e, t, n) {
          var i = this,
              r = this.getLatencySim(),
              o = e.joinCount;
          if (!r) return t.timeout ? n().receive("timeout", function () {
            e.joinCount === o && i.reloadWithJitter(e, function () {
              i.log(e, "timeout", function () {
                return ["received timeout while communicating with server. Falling back to hard refresh for recovery"];
              });
            });
          }) : n();
          console.log("simulating ".concat(r, "ms of latency from client to server"));
          var a = {
            receives: [],
            receive: function (e, t) {
              this.receives.push([e, t]);
            }
          };
          return setTimeout(function () {
            a.receives.reduce(function (e, t) {
              var n = x(t, 2),
                  i = n[0],
                  r = n[1];
              return e.receive(i, r);
            }, n());
          }, r), a;
        }
      }, {
        key: "reloadWithJitter",
        value: function (e, t) {
          var n = this;
          e.destroy(), this.disconnect();
          var i = R[0],
              r = R[1],
              o = Math.floor(Math.random() * (r - i + 1)) + i,
              a = ce.updateLocal(e.name(), "consecutive-reloads", 0, function (e) {
            return e + 1;
          });
          t ? t() : this.log(e, "join", function () {
            return ["encountered ".concat(a, " consecutive reloads")];
          }), a > 10 && (this.log(e, "join", function () {
            return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
          }), o = 3e4), setTimeout(function () {
            n.hasPendingLink() ? window.location = n.pendingLink : window.location.reload();
          }, o);
        }
      }, {
        key: "getHookCallbacks",
        value: function (e) {
          return e && e.startsWith("Phoenix.") ? te[e.split(".")[1]] : this.hooks[e];
        }
      }, {
        key: "isUnloaded",
        value: function () {
          return this.unloaded;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.socket.isConnected();
        }
      }, {
        key: "getBindingPrefix",
        value: function () {
          return this.bindingPrefix;
        }
      }, {
        key: "binding",
        value: function (e) {
          return "".concat(this.getBindingPrefix()).concat(e);
        }
      }, {
        key: "channel",
        value: function (e, t) {
          return this.socket.channel(e, t);
        }
      }, {
        key: "joinRootViews",
        value: function () {
          var e = this,
              t = !1;
          return le.all(document, "".concat(U, ":not([").concat("data-phx-parent-id", "])"), function (n) {
            if (!e.getRootById(n.id)) {
              var i = e.joinRootView(n, e.getHref());
              e.root = e.root || i, n.getAttribute("data-phx-main") && (e.main = i);
            }

            t = !0;
          }), t;
        }
      }, {
        key: "redirect",
        value: function (e, t) {
          this.disconnect(), ce.redirect(e, t);
        }
      }, {
        key: "replaceMain",
        value: function (e, t) {
          var n = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e),
              o = this.main.el;
          this.main.showLoader(this.loaderTimeout), this.main.destroy(), ce.fetchPage(e, function (a, u) {
            if (200 !== a) return n.redirect(e);
            var s = document.createElement("template");
            s.innerHTML = u;
            var c = s.content.childNodes[0];
            if (!c || !n.isPhxView(c)) return n.redirect(e);
            n.joinRootView(c, e, t, function (e, t) {
              1 === t && (n.commitPendingLink(r) ? (o.replaceWith(e.el), n.main = e, i && i()) : e.destroy());
            });
          });
        }
      }, {
        key: "isPhxView",
        value: function (e) {
          return e.getAttribute && null !== e.getAttribute(O);
        }
      }, {
        key: "joinRootView",
        value: function (e, t, n, i) {
          var r = new fe(e, this, null, t, n);
          return this.roots[r.id] = r, r.join(i), r;
        }
      }, {
        key: "owner",
        value: function (e, t) {
          var n = this,
              i = Z(e.closest(U), function (e) {
            return n.getViewByEl(e);
          });
          i && t(i);
        }
      }, {
        key: "withinOwners",
        value: function (e, t) {
          var n = this;
          this.owner(e, function (i) {
            var r = e.getAttribute(n.binding("target"));
            null === r ? t(i, e) : i.withinTargets(r, t);
          });
        }
      }, {
        key: "getViewByEl",
        value: function (e) {
          var t = e.getAttribute("data-phx-root-id");
          return Z(this.getRootById(t), function (t) {
            return t.getDescendentByEl(e);
          });
        }
      }, {
        key: "getRootById",
        value: function (e) {
          return this.roots[e];
        }
      }, {
        key: "destroyAllViews",
        value: function () {
          for (var e in this.roots) this.roots[e].destroy(), delete this.roots[e];
        }
      }, {
        key: "destroyViewByEl",
        value: function (e) {
          var t = this.getRootById(e.getAttribute("data-phx-root-id"));
          t && t.destroyDescendent(e.id);
        }
      }, {
        key: "setActiveElement",
        value: function (e) {
          var t = this;

          if (this.activeElement !== e) {
            this.activeElement = e;

            var n = function () {
              e === t.activeElement && (t.activeElement = null), e.removeEventListener("mouseup", t), e.removeEventListener("touchend", t);
            };

            e.addEventListener("mouseup", n), e.addEventListener("touchend", n);
          }
        }
      }, {
        key: "getActiveElement",
        value: function () {
          return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body;
        }
      }, {
        key: "dropActiveElement",
        value: function (e) {
          this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null);
        }
      }, {
        key: "restorePreviouslyActiveFocus",
        value: function () {
          this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
        }
      }, {
        key: "blurActiveElement",
        value: function () {
          this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
        }
      }, {
        key: "bindTopLevelEvents",
        value: function () {
          var e = this;
          this.boundTopLevelEvents || (this.boundTopLevelEvents = !0, document.body.addEventListener("click", function () {}), window.addEventListener("pageshow", function (t) {
            t.persisted && (e.withPageLoading({
              to: window.location.href,
              kind: "redirect"
            }), window.location.reload());
          }), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({
            keyup: "keyup",
            keydown: "keydown"
          }, function (t, n, i, r, o, a, u) {
            var s = r.getAttribute(e.binding("key")),
                c = t.key && t.key.toLowerCase();
            s && s.toLowerCase() !== c || i.pushKey(r, o, n, a, function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach(function (t) {
                  E(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }

              return e;
            }({
              key: t.key
            }, e.eventMeta(n, t, r)));
          }), this.bind({
            blur: "focusout",
            focus: "focusin"
          }, function (t, n, i, r, o, a, u) {
            u || i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }), this.bind({
            blur: "blur",
            focus: "focus"
          }, function (t, n, i, r, o, a, u) {
            u && "window" !== !u && i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }), window.addEventListener("dragover", function (e) {
            return e.preventDefault();
          }), window.addEventListener("drop", function (t) {
            t.preventDefault();
            var n = Z(G(t.target, e.binding("drop-target")), function (t) {
              return t.getAttribute(e.binding("drop-target"));
            }),
                i = n && document.getElementById(n),
                r = Array.from(t.dataTransfer.files || []);
            i && !i.disabled && 0 !== r.length && i.files instanceof FileList && (ie.trackFiles(i, r), i.dispatchEvent(new Event("input", {
              bubbles: !0
            })));
          }));
        }
      }, {
        key: "eventMeta",
        value: function (e, t, n) {
          var i = this.metadataCallbacks[e];
          return i ? i(t, n) : {};
        }
      }, {
        key: "setPendingLink",
        value: function (e) {
          return this.linkRef++, this.pendingLink = e, this.linkRef;
        }
      }, {
        key: "commitPendingLink",
        value: function (e) {
          return this.linkRef === e && (this.href = this.pendingLink, this.pendingLink = null, !0);
        }
      }, {
        key: "getHref",
        value: function () {
          return this.href;
        }
      }, {
        key: "hasPendingLink",
        value: function () {
          return !!this.pendingLink;
        }
      }, {
        key: "bind",
        value: function (e, t) {
          var n = this,
              i = function (i) {
            var r = e[i];
            n.on(r, function (e) {
              var r = n.binding(i),
                  o = n.binding("window-".concat(i)),
                  a = e.target.getAttribute && e.target.getAttribute(r);
              a ? n.debounce(e.target, e, function () {
                n.withinOwners(e.target, function (n, r) {
                  t(e, i, n, e.target, r, a, null);
                });
              }) : le.all(document, "[".concat(o, "]"), function (r) {
                var a = r.getAttribute(o);
                n.debounce(r, e, function () {
                  n.withinOwners(r, function (n, o) {
                    t(e, i, n, r, o, a, "window");
                  });
                });
              });
            });
          };

          for (var r in e) i(r);
        }
      }, {
        key: "bindClicks",
        value: function () {
          this.bindClick("click", "click", !1), this.bindClick("mousedown", "capture-click", !0);
        }
      }, {
        key: "bindClick",
        value: function (e, t, n) {
          var i = this,
              r = this.binding(t);
          window.addEventListener(e, function (e) {
            if (i.isConnected()) {
              var t = null,
                  o = (t = n ? e.target.matches("[".concat(r, "]")) ? e.target : e.target.querySelector("[".concat(r, "]")) : G(e.target, r)) && t.getAttribute(r);
              o && ("#" === t.getAttribute("href") && e.preventDefault(), i.debounce(t, e, function () {
                i.withinOwners(t, function (n, r) {
                  n.pushEvent("click", t, r, o, i.eventMeta("click", e, t));
                });
              }));
            }
          }, n);
        }
      }, {
        key: "bindNav",
        value: function () {
          var e = this;

          if (ce.canPushState()) {
            history.scrollRestoration && (history.scrollRestoration = "manual");
            var t = null;
            window.addEventListener("scroll", function (e) {
              clearTimeout(t), t = setTimeout(function () {
                ce.updateCurrentState(function (e) {
                  return Object.assign(e, {
                    scroll: window.scrollY
                  });
                });
              }, 100);
            }), window.addEventListener("popstate", function (t) {
              if (e.registerNewLocation(window.location)) {
                var n = t.state || {},
                    i = n.type,
                    r = n.id,
                    o = n.root,
                    a = n.scroll,
                    u = window.location.href;
                e.main.isConnected() && "patch" === i && r === e.main.id ? e.main.pushLinkPatch(u, null) : e.replaceMain(u, null, function () {
                  o && e.replaceRootHistory(), "number" == typeof a && setTimeout(function () {
                    window.scrollTo(0, a);
                  }, 0);
                });
              }
            }, !1), window.addEventListener("click", function (t) {
              var n = G(t.target, "data-phx-link"),
                  i = n && n.getAttribute("data-phx-link"),
                  r = t.metaKey || t.ctrlKey || 1 === t.button;

              if (i && e.isConnected() && e.main && !r) {
                var o = n.href,
                    a = n.getAttribute("data-phx-link-state");
                if (t.preventDefault(), e.pendingLink !== o) if ("patch" === i) e.pushHistoryPatch(o, a, n);else {
                  if ("redirect" !== i) throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i));
                  e.historyRedirect(o, a);
                }
              }
            }, !1);
          }
        }
      }, {
        key: "withPageLoading",
        value: function (e, t) {
          le.dispatchEvent(window, "phx:page-loading-start", e);

          var n = function () {
            return le.dispatchEvent(window, "phx:page-loading-stop", e);
          };

          return t ? t(n) : n;
        }
      }, {
        key: "pushHistoryPatch",
        value: function (e, t, n) {
          var i = this;
          this.withPageLoading({
            to: e,
            kind: "patch"
          }, function (r) {
            i.main.pushLinkPatch(e, n, function () {
              i.historyPatch(e, t), r();
            });
          });
        }
      }, {
        key: "historyPatch",
        value: function (e, t) {
          ce.pushState(t, {
            type: "patch",
            id: this.main.id
          }, e), this.registerNewLocation(window.location);
        }
      }, {
        key: "historyRedirect",
        value: function (e, t, n) {
          var i = this,
              r = window.scrollY;
          this.withPageLoading({
            to: e,
            kind: "redirect"
          }, function (o) {
            i.replaceMain(e, n, function () {
              ce.pushState(t, {
                type: "redirect",
                id: i.main.id,
                scroll: r
              }, e), i.registerNewLocation(window.location), o();
            });
          });
        }
      }, {
        key: "replaceRootHistory",
        value: function () {
          ce.pushState("replace", {
            root: !0,
            type: "patch",
            id: this.main.id
          });
        }
      }, {
        key: "registerNewLocation",
        value: function (e) {
          var t = this.currentLocation;
          return t.pathname + t.search !== e.pathname + e.search && (this.currentLocation = $(e), !0);
        }
      }, {
        key: "bindForms",
        value: function () {
          var e = this,
              t = 0;
          this.on("submit", function (t) {
            var n = t.target.getAttribute(e.binding("submit"));
            n && (t.preventDefault(), t.target.disabled = !0, e.withinOwners(t.target, function (e, i) {
              return e.submitForm(t.target, i, n);
            }));
          }, !1);

          for (var n = function () {
            var n = r[i];
            e.on(n, function (i) {
              var r = i.target,
                  o = r.form && r.form.getAttribute(e.binding("change"));

              if (o && ("number" !== r.type || !r.validity || !r.validity.badInput)) {
                var a = t;
                t++;
                var u = le.private(r, "prev-iteration") || {},
                    s = u.at,
                    c = u.type;
                s === a - 1 && n !== c || (le.putPrivate(r, "prev-iteration", {
                  at: a,
                  type: n
                }), e.debounce(r, i, function () {
                  e.withinOwners(r.form, function (t, n) {
                    le.putPrivate(r, "phx-has-focused", !0), le.isTextualInput(r) || e.setActiveElement(r), t.pushInput(r, n, o, i.target);
                  });
                }));
              }
            }, !1);
          }, i = 0, r = ["change", "input"]; i < r.length; i++) n();
        }
      }, {
        key: "debounce",
        value: function (e, t, n) {
          var i = this.binding("debounce"),
              r = this.binding("throttle"),
              o = this.defaults.debounce.toString(),
              a = this.defaults.throttle.toString();
          le.debounce(e, t, i, o, r, a, n);
        }
      }, {
        key: "silenceEvents",
        value: function (e) {
          this.silenced = !0, e(), this.silenced = !1;
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this;
          window.addEventListener(e, function (e) {
            n.silenced || t(e);
          });
        }
      }]), e;
    }(),
        ce = {
      canPushState: function () {
        return void 0 !== history.pushState;
      },
      dropLocal: function (e, t) {
        return window.localStorage.removeItem(this.localKey(e, t));
      },
      updateLocal: function (e, t, n, i) {
        var r = this.getLocal(e, t),
            o = this.localKey(e, t),
            a = null === r ? n : i(r);
        return window.localStorage.setItem(o, JSON.stringify(a)), a;
      },
      getLocal: function (e, t) {
        return JSON.parse(window.localStorage.getItem(this.localKey(e, t)));
      },
      fetchPage: function (e, t) {
        var n = new XMLHttpRequest();
        n.open("GET", e, !0), n.timeout = 3e4, n.setRequestHeader("content-type", "text/html"), n.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n.setRequestHeader("x-requested-with", "live-link"), n.onerror = function () {
          return t(400);
        }, n.ontimeout = function () {
          return t(504);
        }, n.onreadystatechange = function () {
          if (4 === n.readyState) {
            var i = new URL(e),
                r = i.pathname + i.search,
                o = Z(n.getResponseHeader("x-response-url") || n.responseURL, function (e) {
              return new URL(e);
            }),
                a = o ? o.pathname + o.search : null;
            return "live-link" !== n.getResponseHeader("x-requested-with") ? t(400) : null === o || a != r ? t(302) : 200 !== n.status ? t(n.status) : void t(200, n.responseText);
          }
        }, n.send();
      },
      updateCurrentState: function (e) {
        this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href);
      },
      pushState: function (e, t, n) {
        if (this.canPushState()) {
          if (n !== window.location.href) {
            if ("redirect" == t.type && t.scroll) {
              var i = history.state || {};
              i.scroll = t.scroll, history.replaceState(i, "", window.location.href);
            }

            delete t.scroll, history[e + "State"](t, "", n || null);
            var r = this.getHashTargetEl(window.location.hash);
            r ? r.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0);
          }
        } else this.redirect(n);
      },
      setCookie: function (e, t) {
        document.cookie = "".concat(e, "=").concat(t);
      },
      getCookie: function (e) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e, "s*=s*([^;]*).*$)|^.*$")), "$1");
      },
      redirect: function (e, t) {
        t && ce.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"), window.location = e;
      },
      localKey: function (e, t) {
        return "".concat(e, "-").concat(t);
      },
      getHashTargetEl: function (e) {
        var t = e.toString().substring(1);
        if ("" !== t) return document.getElementById(t) || document.querySelector('a[name="'.concat(t, '"]'));
      }
    },
        le = {
      byId: function (e) {
        return document.getElementById(e) || z("no id found for ".concat(e));
      },
      removeClass: function (e, t) {
        e.classList.remove(t), 0 === e.classList.length && e.removeAttribute("class");
      },
      all: function (e, t, n) {
        var i = Array.from(e.querySelectorAll(t));
        return n ? i.forEach(n) : i;
      },
      childNodeLength: function (e) {
        var t = document.createElement("template");
        return t.innerHTML = e, t.content.childElementCount;
      },
      isUploadInput: function (e) {
        return "file" === e.type && null !== e.getAttribute(M);
      },
      findUploadInputs: function (e) {
        return this.all(e, 'input[type="file"]['.concat(M, "]"));
      },
      findComponentNodeList: function (e, t) {
        return this.filterWithinSameLiveView(this.all(e, "[".concat(H, '="').concat(t, '"]')), e);
      },
      isPhxDestroyed: function (e) {
        return !(!e.id || !le.private(e, "destroyed"));
      },
      markPhxChildDestroyed: function (e) {
        e.setAttribute("data-phx-session", ""), this.putPrivate(e, "destroyed", !0);
      },
      findPhxChildrenInFragment: function (e, t) {
        var n = document.createElement("template");
        return n.innerHTML = e, this.findPhxChildren(n.content, t);
      },
      isIgnored: function (e, t) {
        return "ignore" === (e.getAttribute(t) || e.getAttribute("data-phx-update"));
      },
      isPhxUpdate: function (e, t, n) {
        return e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0;
      },
      findPhxChildren: function (e, t) {
        return this.all(e, "".concat(U, "[").concat("data-phx-parent-id", '="').concat(t, '"]'));
      },
      findParentCIDs: function (e, t) {
        var n = this,
            i = new Set(t);
        return t.reduce(function (t, i) {
          var r = "[".concat(H, '="').concat(i, '"] [').concat(H, "]");
          return n.filterWithinSameLiveView(n.all(e, r), e).map(function (e) {
            return parseInt(e.getAttribute(H));
          }).forEach(function (e) {
            return t.delete(e);
          }), t;
        }, i);
      },
      filterWithinSameLiveView: function (e, t) {
        var n = this;
        return t.querySelector(U) ? e.filter(function (e) {
          return n.withinSameLiveView(e, t);
        }) : e;
      },
      withinSameLiveView: function (e, t) {
        for (; e = e.parentNode;) {
          if (e.isSameNode(t)) return !0;
          if (e.getAttribute(O)) return !1;
        }
      },
      private: function (e, t) {
        return e.phxPrivate && e.phxPrivate[t];
      },
      deletePrivate: function (e, t) {
        e.phxPrivate && delete e.phxPrivate[t];
      },
      putPrivate: function (e, t, n) {
        e.phxPrivate || (e.phxPrivate = {}), e.phxPrivate[t] = n;
      },
      copyPrivates: function (e, t) {
        t.phxPrivate && (e.phxPrivate = $(t.phxPrivate));
      },
      putTitle: function (e) {
        var t = document.querySelector("title").dataset,
            n = t.prefix,
            i = t.suffix;
        document.title = "".concat(n || "").concat(e).concat(i || "");
      },
      debounce: function (e, t, n, i, r, o, a) {
        var u = this,
            s = e.getAttribute(n),
            c = e.getAttribute(r);
        "" === s && (s = i), "" === c && (c = o);
        var l = s || c;

        switch (l) {
          case null:
            return a();

          case "blur":
            return void (this.once(e, "debounce-blur") && e.addEventListener("blur", function () {
              return a();
            }));

          default:
            var d = parseInt(l),
                h = this.incCycle(e, "debounce-trigger", function () {
              return c ? u.deletePrivate(e, "throttled") : a();
            });
            if (isNaN(d)) return z("invalid throttle/debounce value: ".concat(l));

            if (c) {
              var f = !1;

              if ("keydown" === t.type) {
                var v = this.private(e, "debounce-prev-key");
                this.putPrivate(e, "debounce-prev-key", t.key), f = v !== t.key;
              }

              if (!f && this.private(e, "throttled")) return !1;
              a(), this.putPrivate(e, "throttled", !0), setTimeout(function () {
                return u.triggerCycle(e, "debounce-trigger");
              }, d);
            } else setTimeout(function () {
              return u.triggerCycle(e, "debounce-trigger", h);
            }, d);

            e.form && this.once(e.form, "bind-debounce") && e.form.addEventListener("submit", function (t) {
              Array.from(new FormData(e.form).entries(), function (t) {
                var n = x(t, 2),
                    i = n[0],
                    r = (n[1], e.form.querySelector('[name="'.concat(i, '"]')));
                u.incCycle(r, "debounce-trigger"), u.deletePrivate(r, "throttled");
              });
            }), this.once(e, "bind-debounce") && e.addEventListener("blur", function (t) {
              return u.triggerCycle(e, "debounce-trigger");
            });
        }
      },
      triggerCycle: function (e, t, n) {
        var i = x(this.private(e, t), 2),
            r = i[0],
            o = i[1];
        n || (n = r), n === r && (this.incCycle(e, t), o());
      },
      once: function (e, t) {
        return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0), !0);
      },
      incCycle: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            i = x(this.private(e, t) || [0, n], 2),
            r = i[0];
        i[1];
        return r++, this.putPrivate(e, t, [r, n]), r;
      },
      discardError: function (e, t, n) {
        var i = t.getAttribute && t.getAttribute(n),
            r = i && e.querySelector('[id="'.concat(i, '"], [name="').concat(i, '"]'));
        r && (this.private(r, "phx-has-focused") || this.private(r.form, "phx-has-submitted") || t.classList.add("phx-no-feedback"));
      },
      showError: function (e, t) {
        var n = this;
        (e.id || e.name) && this.all(e.form, "[".concat(t, '="').concat(e.id, '"], [').concat(t, '="').concat(e.name, '"]'), function (e) {
          n.removeClass(e, "phx-no-feedback");
        });
      },
      isPhxChild: function (e) {
        return e.getAttribute && e.getAttribute("data-phx-parent-id");
      },
      dispatchEvent: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n
        });
        e.dispatchEvent(i);
      },
      cloneNode: function (e, t) {
        if (void 0 === t) return e.cloneNode(!0);
        var n = e.cloneNode(!1);
        return n.innerHTML = t, n;
      },
      mergeAttrs: function (e, t) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.exclude || [], r = n.isIgnored, o = t.attributes, a = o.length - 1; a >= 0; a--) {
          var u = o[a].name;
          i.indexOf(u) < 0 && e.setAttribute(u, t.getAttribute(u));
        }

        for (var s = e.attributes, c = s.length - 1; c >= 0; c--) {
          var l = s[c].name;
          r ? l.startsWith("data-") && !t.hasAttribute(l) && e.removeAttribute(l) : t.hasAttribute(l) || e.removeAttribute(l);
        }
      },
      mergeFocusedInput: function (e, t) {
        e instanceof HTMLSelectElement || le.mergeAttrs(e, t, {
          except: ["value"]
        }), t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly");
      },
      hasSelectionRange: function (e) {
        return e.setSelectionRange && ("text" === e.type || "textarea" === e.type);
      },
      restoreFocus: function (e, t, n) {
        if (le.isTextualInput(e)) {
          var i = e.matches(":focus");
          e.readOnly && e.blur(), i || e.focus(), this.hasSelectionRange(e) && e.setSelectionRange(t, n);
        }
      },
      isFormInput: function (e) {
        return /^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type;
      },
      syncAttrsToProps: function (e) {
        e instanceof HTMLInputElement && J.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"));
      },
      isTextualInput: function (e) {
        return B.indexOf(e.type) >= 0;
      },
      isNowTriggerFormExternal: function (e, t) {
        return e.getAttribute && null !== e.getAttribute(t);
      },
      syncPendingRef: function (e, t, n) {
        var i = e.getAttribute(F);
        return null === i || (le.isFormInput(e) || null !== e.getAttribute(n) ? (le.isUploadInput(e) && le.mergeAttrs(e, t, {
          isIgnored: !0
        }), le.putPrivate(e, F, t), !1) : (j.forEach(function (n) {
          e.classList.contains(n) && t.classList.add(n);
        }), t.setAttribute(F, i), !0));
      },
      cleanChildNodes: function (e, t) {
        if (le.isPhxUpdate(e, t, ["append", "prepend"])) {
          var n = [];
          e.childNodes.forEach(function (e) {
            e.id || (e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || z("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e.outerHTML || e.nodeValue).trim(), '"\n\n')), n.push(e));
          }), n.forEach(function (e) {
            return e.remove();
          });
        }
      }
    },
        de = function () {
      function e(t, n, i) {
        T(this, e);
        var r = new Set(),
            o = new Set(A(n.children).map(function (e) {
          return e.id;
        })),
            a = [];
        Array.from(t.children).forEach(function (e) {
          if (e.id && (r.add(e.id), o.has(e.id))) {
            var t = e.previousElementSibling && e.previousElementSibling.id;
            a.push({
              elementId: e.id,
              previousElementId: t
            });
          }
        }), this.containerId = n.id, this.updateType = i, this.elementsToModify = a, this.elementIdsToAdd = A(o).filter(function (e) {
          return !r.has(e);
        });
      }

      return _(e, [{
        key: "perform",
        value: function () {
          var e = le.byId(this.containerId);
          this.elementsToModify.forEach(function (t) {
            t.previousElementId ? Z(document.getElementById(t.previousElementId), function (e) {
              Z(document.getElementById(t.elementId), function (t) {
                t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t);
              });
            }) : Z(document.getElementById(t.elementId), function (t) {
              null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t);
            });
          }), "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach(function (t) {
            Z(document.getElementById(t), function (t) {
              return e.insertAdjacentElement("afterbegin", t);
            });
          });
        }
      }]), e;
    }(),
        he = function () {
      function e(t, n, i, r, o) {
        T(this, e), this.view = t, this.liveSocket = t.liveSocket, this.container = n, this.id = i, this.rootID = t.root.id, this.html = r, this.targetCID = o, this.cidPatch = "number" == typeof this.targetCID, this.callbacks = {
          beforeadded: [],
          beforeupdated: [],
          beforephxChildAdded: [],
          afteradded: [],
          afterupdated: [],
          afterdiscarded: [],
          afterphxChildAdded: []
        };
      }

      return _(e, null, [{
        key: "patchEl",
        value: function (e, t, n) {
          b(e, t, {
            childrenOnly: !1,
            onBeforeElUpdated: function (e, t) {
              if (n && n.isSameNode(e) && le.isFormInput(e)) return le.mergeFocusedInput(e, t), !1;
            }
          });
        }
      }]), _(e, [{
        key: "before",
        value: function (e, t) {
          this.callbacks["before".concat(e)].push(t);
        }
      }, {
        key: "after",
        value: function (e, t) {
          this.callbacks["after".concat(e)].push(t);
        }
      }, {
        key: "trackBefore",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["before".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "trackAfter",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["after".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "markPrunableContentForRemoval",
        value: function () {
          le.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function (e) {
            e.setAttribute("data-phx-remove", "");
          });
        }
      }, {
        key: "perform",
        value: function () {
          var e = this,
              t = this.view,
              n = this.liveSocket,
              i = this.container,
              r = this.html,
              o = this.isCIDPatch() ? this.targetCIDContainer(r) : i;

          if (!this.isCIDPatch() || o) {
            var a = n.getActiveElement(),
                u = a && le.hasSelectionRange(a) ? a : {},
                s = u.selectionStart,
                c = u.selectionEnd,
                l = n.binding("update"),
                d = n.binding("feedback-for"),
                h = n.binding("disable-with"),
                f = n.binding("trigger-action"),
                v = [],
                p = [],
                g = [],
                m = null,
                y = n.time("premorph container prep", function () {
              return e.buildDiffHTML(i, r, l, o);
            });
            return this.trackBefore("added", i), this.trackBefore("updated", i, i), n.time("morphdom", function () {
              b(o, y, {
                childrenOnly: null === o.getAttribute(H),
                getNodeKey: function (e) {
                  return le.isPhxDestroyed(e) ? null : e.id;
                },
                onBeforeNodeAdded: function (t) {
                  return le.discardError(o, t, d), e.trackBefore("added", t), t;
                },
                onNodeAdded: function (n) {
                  le.isNowTriggerFormExternal(n, f) && (m = n), le.isPhxChild(n) && t.ownsElement(n) && e.trackAfter("phxChildAdded", n), v.push(n);
                },
                onNodeDiscarded: function (t) {
                  le.isPhxChild(t) && n.destroyViewByEl(t), e.trackAfter("discarded", t);
                },
                onBeforeNodeDiscarded: function (t) {
                  return !(!t.getAttribute || null === t.getAttribute("data-phx-remove")) || (null === t.parentNode || !le.isPhxUpdate(t.parentNode, l, ["append", "prepend"]) || !t.id) && !e.skipCIDSibling(t);
                },
                onElUpdated: function (e) {
                  le.isNowTriggerFormExternal(e, f) && (m = e), p.push(e);
                },
                onBeforeElUpdated: function (t, n) {
                  if (le.cleanChildNodes(n, l), e.skipCIDSibling(n)) return !1;
                  if (le.isIgnored(t, l)) return e.trackBefore("updated", t, n), le.mergeAttrs(t, n, {
                    isIgnored: !0
                  }), p.push(t), !1;
                  if ("number" === t.type && t.validity && t.validity.badInput) return !1;
                  if (!le.syncPendingRef(t, n, h)) return le.isUploadInput(t) && (e.trackBefore("updated", t, n), p.push(t)), !1;

                  if (le.isPhxChild(n)) {
                    var i = t.getAttribute("data-phx-session");
                    return le.mergeAttrs(t, n, {
                      exclude: ["data-phx-static"]
                    }), "" !== i && t.setAttribute("data-phx-session", i), t.setAttribute("data-phx-root-id", e.rootID), !1;
                  }

                  return le.copyPrivates(n, t), le.discardError(o, n, d), a && t.isSameNode(a) && le.isFormInput(t) && !e.forceFocusedSelectUpdate(t, n) ? (e.trackBefore("updated", t, n), le.mergeFocusedInput(t, n), le.syncAttrsToProps(t), p.push(t), !1) : (le.isPhxUpdate(n, l, ["append", "prepend"]) && g.push(new de(t, n, n.getAttribute(l))), le.syncAttrsToProps(n), e.trackBefore("updated", t, n), !0);
                }
              });
            }), n.isDebugEnabled() && function () {
              for (var e = new Set(), t = document.querySelectorAll("*[id]"), n = 0, i = t.length; n < i; n++) e.has(t[n].id) ? console.error("Multiple IDs detected: ".concat(t[n].id, ". Ensure unique element ids.")) : e.add(t[n].id);
            }(), g.length > 0 && n.time("post-morph append/prepend restoration", function () {
              g.forEach(function (e) {
                return e.perform();
              });
            }), n.silenceEvents(function () {
              return le.restoreFocus(a, s, c);
            }), le.dispatchEvent(document, "phx:update"), v.forEach(function (t) {
              return e.trackAfter("added", t);
            }), p.forEach(function (t) {
              return e.trackAfter("updated", t);
            }), m && (n.disconnect(), m.submit()), !0;
          }
        }
      }, {
        key: "forceFocusedSelectUpdate",
        value: function (e, t) {
          var n = ["select", "select-one", "select-multiple"].find(function (t) {
            return t === e.type;
          });
          return !0 === e.multiple || n && e.innerHTML != t.innerHTML;
        }
      }, {
        key: "isCIDPatch",
        value: function () {
          return this.cidPatch;
        }
      }, {
        key: "skipCIDSibling",
        value: function (e) {
          return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute("data-phx-skip");
        }
      }, {
        key: "targetCIDContainer",
        value: function (e) {
          if (this.isCIDPatch()) {
            var t = k(le.findComponentNodeList(this.container, this.targetCID)),
                n = t[0];
            return 0 === t.slice(1).length && 1 === le.childNodeLength(e) ? n : n && n.parentNode;
          }
        }
      }, {
        key: "buildDiffHTML",
        value: function (e, t, n, i) {
          var r = this,
              o = this.isCIDPatch(),
              a = o && i.getAttribute(H) === this.targetCID.toString();
          if (!o || a) return t;
          var u = null,
              s = document.createElement("template");
          u = le.cloneNode(i);
          var c = k(le.findComponentNodeList(u, this.targetCID)),
              l = c[0],
              d = c.slice(1);
          return s.innerHTML = t, d.forEach(function (e) {
            return e.remove();
          }), Array.from(u.childNodes).forEach(function (e) {
            e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(H) !== r.targetCID.toString() && (e.setAttribute("data-phx-skip", ""), e.innerHTML = "");
          }), Array.from(s.content.childNodes).forEach(function (e) {
            return u.insertBefore(e, l);
          }), l.remove(), u.outerHTML;
        }
      }]), e;
    }(),
        fe = function () {
      function e(t, n, i, r, o) {
        var a = this;
        T(this, e), this.liveSocket = n, this.flash = o, this.parent = i, this.root = i ? i.root : this, this.el = t, this.id = this.el.id, this.view = this.el.getAttribute(O), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.pruningCIDs = [], this.href = r, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = !0, this.destroyed = !1, this.joinCallback = function () {}, this.stopCallback = function () {}, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.uploaders = {}, this.formSubmits = [], this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function () {
          return {
            url: a.href,
            params: a.connectParams(),
            session: a.getSession(),
            static: a.getStatic(),
            flash: a.flash
          };
        }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
      }

      return _(e, [{
        key: "isMain",
        value: function () {
          return this.liveSocket.main === this;
        }
      }, {
        key: "connectParams",
        value: function () {
          var e = this.liveSocket.params(this.view),
              t = le.all(document, "[".concat(this.binding("track-static"), "]")).map(function (e) {
            return e.src || e.href;
          }).filter(function (e) {
            return "string" == typeof e;
          });
          return t.length > 0 && (e._track_static = t), e._mounts = this.joinCount, e;
        }
      }, {
        key: "name",
        value: function () {
          return this.view;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.channel.canPush();
        }
      }, {
        key: "getSession",
        value: function () {
          return this.el.getAttribute("data-phx-session");
        }
      }, {
        key: "getStatic",
        value: function () {
          var e = this.el.getAttribute("data-phx-static");
          return "" === e ? null : e;
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
          this.destroyAllChildren(), this.destroyed = !0, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);

          var n = function () {
            for (var n in t(), e.viewHooks) e.destroyHook(e.viewHooks[n]);
          };

          le.markPhxChildDestroyed(this.el), this.log("destroyed", function () {
            return ["the child has been removed from the parent"];
          }), this.channel.leave().receive("ok", n).receive("error", n).receive("timeout", n);
        }
      }, {
        key: "setContainerClasses",
        value: function () {
          var e;
          this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e = this.el.classList).add.apply(e, arguments);
        }
      }, {
        key: "isLoading",
        value: function () {
          return this.el.classList.contains("phx-disconnected");
        }
      }, {
        key: "showLoader",
        value: function (e) {
          var t = this;
          if (clearTimeout(this.loaderTimer), e) this.loaderTimer = setTimeout(function () {
            return t.showLoader();
          }, e);else {
            for (var n in this.viewHooks) this.viewHooks[n].__disconnected();

            this.setContainerClasses("phx-disconnected");
          }
        }
      }, {
        key: "hideLoader",
        value: function () {
          clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
        }
      }, {
        key: "triggerReconnected",
        value: function () {
          for (var e in this.viewHooks) this.viewHooks[e].__reconnected();
        }
      }, {
        key: "log",
        value: function (e, t) {
          this.liveSocket.log(this, e, t);
        }
      }, {
        key: "withinTargets",
        value: function (e, t) {
          var n = this;

          if (/^(0|[1-9]\d*)$/.test(e)) {
            var i = le.findComponentNodeList(this.el, e);
            0 === i.length ? z("no component found matching phx-target of ".concat(e)) : t(this, i[0]);
          } else {
            var r = Array.from(document.querySelectorAll(e));
            0 === r.length && z('nothing found matching the phx-target selector "'.concat(e, '"')), r.forEach(function (e) {
              return n.liveSocket.owner(e, function (n) {
                return t(n, e);
              });
            });
          }
        }
      }, {
        key: "applyDiff",
        value: function (e, t, n) {
          this.log(e, function () {
            return ["", $(t)];
          });
          var i = ue.extract(t),
              r = i.diff,
              o = i.reply,
              a = i.events,
              u = i.title;
          return u && le.putTitle(u), n({
            diff: r,
            reply: o,
            events: a
          }), o;
        }
      }, {
        key: "onJoin",
        value: function (e) {
          var t = this,
              n = e.rendered;
          this.childJoins = 0, this.joinPending = !0, this.flash = null, ce.dropLocal(this.name(), "consecutive-reloads"), this.applyDiff("mount", n, function (n) {
            var i = n.diff,
                r = n.events;
            t.rendered = new ue(t.id, i);
            var o = t.renderContainer(null, "join");
            t.dropPendingRefs();
            var a = t.formsForRecovery(o);
            t.joinCount++, a.length > 0 ? a.forEach(function (e, n) {
              t.pushFormRecovery(e, function (e) {
                n === a.length - 1 && t.onJoinComplete(e, o, r);
              });
            }) : t.onJoinComplete(e, o, r);
          });
        }
      }, {
        key: "dropPendingRefs",
        value: function () {
          le.all(this.el, "[".concat(F, "]"), function (e) {
            return e.removeAttribute(F);
          });
        }
      }, {
        key: "onJoinComplete",
        value: function (e, t, n) {
          var i = this,
              r = e.live_patch;
          if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) return this.applyJoinPatch(r, t, n);
          0 === le.findPhxChildrenInFragment(t, this.id).filter(function (e) {
            var t = e.id && i.el.querySelector("#".concat(e.id)),
                n = t && t.getAttribute("data-phx-static");
            return n && e.setAttribute("data-phx-static", n), i.joinChild(e);
          }).length ? this.parent ? (this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r, t, n)) : this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]);
        }
      }, {
        key: "attachTrueDocEl",
        value: function () {
          this.el = le.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
        }
      }, {
        key: "dispatchEvents",
        value: function (e) {
          e.forEach(function (e) {
            var t = x(e, 2),
                n = t[0],
                i = t[1];
            window.dispatchEvent(new CustomEvent("phx:hook:".concat(n), {
              detail: i
            }));
          });
        }
      }, {
        key: "applyJoinPatch",
        value: function (e, t, n) {
          var i = this;
          this.attachTrueDocEl();
          var r = new he(this, this.el, this.id, t, null);

          if (r.markPrunableContentForRemoval(), this.performPatch(r, !1), this.joinNewChildren(), le.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), function (e) {
            var t = i.addHook(e);
            t && t.__mounted();
          }), this.joinPending = !1, this.dispatchEvents(n), this.applyPendingUpdates(), e) {
            var o = e.kind,
                a = e.to;
            this.liveSocket.historyPatch(a, o);
          }

          this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
        }
      }, {
        key: "triggerBeforeUpdateHook",
        value: function (e, t) {
          this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
          var n = this.getHook(e),
              i = n && le.isIgnored(e, this.binding("update"));
          if (n && !e.isEqualNode(t) && (!i || !function (e, t) {
            return JSON.stringify(e) === JSON.stringify(t);
          }(e.dataset, t.dataset))) return n.__beforeUpdate(), n;
        }
      }, {
        key: "performPatch",
        value: function (e, t) {
          var n = this,
              i = [],
              r = !1,
              o = new Set();
          return e.after("added", function (e) {
            n.liveSocket.triggerDOM("onNodeAdded", [e]);
            var t = n.addHook(e);
            t && t.__mounted();
          }), e.after("phxChildAdded", function (e) {
            return r = !0;
          }), e.before("updated", function (e, t) {
            n.triggerBeforeUpdateHook(e, t) && o.add(e.id);
          }), e.after("updated", function (e) {
            o.has(e.id) && n.getHook(e).__updated();
          }), e.after("discarded", function (e) {
            var t = n.componentID(e);
            "number" == typeof t && -1 === i.indexOf(t) && i.push(t);
            var r = n.getHook(e);
            r && n.destroyHook(r);
          }), e.perform(), t && this.maybePushComponentsDestroyed(i), r;
        }
      }, {
        key: "joinNewChildren",
        value: function () {
          var e = this;
          le.findPhxChildren(this.el, this.id).forEach(function (t) {
            return e.joinChild(t);
          });
        }
      }, {
        key: "getChildById",
        value: function (e) {
          return this.root.children[this.id][e];
        }
      }, {
        key: "getDescendentByEl",
        value: function (e) {
          return e.id === this.id ? this : this.children[e.getAttribute("data-phx-parent-id")][e.id];
        }
      }, {
        key: "destroyDescendent",
        value: function (e) {
          for (var t in this.root.children) for (var n in this.root.children[t]) if (n === e) return this.root.children[t][n].destroy();
        }
      }, {
        key: "joinChild",
        value: function (t) {
          if (!this.getChildById(t.id)) {
            var n = new e(t, this.liveSocket, this);
            return this.root.children[this.id][n.id] = n, n.join(), this.childJoins++, !0;
          }
        }
      }, {
        key: "isJoinPending",
        value: function () {
          return this.joinPending;
        }
      }, {
        key: "ackJoin",
        value: function (e) {
          this.childJoins--, 0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
        }
      }, {
        key: "onAllChildJoinsComplete",
        value: function () {
          this.joinCallback(), this.pendingJoinOps.forEach(function (e) {
            var t = x(e, 2),
                n = t[0],
                i = t[1];
            n.isDestroyed() || i();
          }), this.pendingJoinOps = [];
        }
      }, {
        key: "update",
        value: function (e, t) {
          var n = this;
          if (this.isJoinPending() || this.liveSocket.hasPendingLink()) return this.pendingDiffs.push({
            diff: e,
            events: t
          });
          this.rendered.mergeDiff(e);
          var i = !1;
          this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", function () {
            le.findParentCIDs(n.el, n.rendered.componentCIDs(e)).forEach(function (t) {
              n.componentPatch(n.rendered.getComponent(e, t), t) && (i = !0);
            });
          }) : Q(e) || this.liveSocket.time("full patch complete", function () {
            var t = n.renderContainer(e, "update"),
                r = new he(n, n.el, n.id, t, null);
            i = n.performPatch(r, !0);
          }), this.dispatchEvents(t), i && this.joinNewChildren();
        }
      }, {
        key: "renderContainer",
        value: function (e, t) {
          var n = this;
          return this.liveSocket.time("toString diff (".concat(t, ")"), function () {
            var t = n.el.tagName,
                i = e ? n.rendered.componentCIDs(e).concat(n.pruningCIDs) : null,
                r = n.rendered.toString(i);
            return "<".concat(t, ">").concat(r, "</").concat(t, ">");
          });
        }
      }, {
        key: "componentPatch",
        value: function (e, t) {
          if (Q(e)) return !1;
          var n = this.rendered.componentToString(t),
              i = new he(this, this.el, this.id, n, t);
          return this.performPatch(i, !0);
        }
      }, {
        key: "getHook",
        value: function (e) {
          return this.viewHooks[pe.elementID(e)];
        }
      }, {
        key: "addHook",
        value: function (e) {
          if (!pe.elementID(e) && e.getAttribute) {
            var t = e.getAttribute("data-phx-".concat("hook")) || e.getAttribute(this.binding("hook"));

            if (!t || this.ownsElement(e)) {
              var n = this.liveSocket.getHookCallbacks(t);

              if (n) {
                e.id || z('no DOM ID for hook "'.concat(t, '". Hooks require a unique ID on each element.'), e);
                var i = new pe(this, e, n);
                return this.viewHooks[pe.elementID(i.el)] = i, i;
              }

              null !== t && z('unknown hook found for "'.concat(t, '"'), e);
            }
          }
        }
      }, {
        key: "destroyHook",
        value: function (e) {
          e.__destroyed(), e.__cleanup__(), delete this.viewHooks[pe.elementID(e.el)];
        }
      }, {
        key: "applyPendingUpdates",
        value: function () {
          var e = this;
          this.pendingDiffs.forEach(function (t) {
            var n = t.diff,
                i = t.events;
            return e.update(n, i);
          }), this.pendingDiffs = [];
        }
      }, {
        key: "onChannel",
        value: function (e, t) {
          var n = this;
          this.liveSocket.onChannel(this.channel, e, function (e) {
            n.isJoinPending() ? n.root.pendingJoinOps.push([n, function () {
              return t(e);
            }]) : t(e);
          });
        }
      }, {
        key: "bindChannel",
        value: function () {
          var e = this;
          this.liveSocket.onChannel(this.channel, "diff", function (t) {
            e.applyDiff("update", t, function (t) {
              var n = t.diff,
                  i = t.events;
              return e.update(n, i);
            });
          }), this.onChannel("redirect", function (t) {
            var n = t.to,
                i = t.flash;
            return e.onRedirect({
              to: n,
              flash: i
            });
          }), this.onChannel("live_patch", function (t) {
            return e.onLivePatch(t);
          }), this.onChannel("live_redirect", function (t) {
            return e.onLiveRedirect(t);
          }), this.channel.onError(function (t) {
            return e.onError(t);
          }), this.channel.onClose(function (t) {
            return e.onClose(t);
          });
        }
      }, {
        key: "destroyAllChildren",
        value: function () {
          for (var e in this.root.children[this.id]) this.getChildById(e).destroy();
        }
      }, {
        key: "onLiveRedirect",
        value: function (e) {
          var t = e.to,
              n = e.kind,
              i = e.flash,
              r = this.expandURL(t);
          this.liveSocket.historyRedirect(r, n, i);
        }
      }, {
        key: "onLivePatch",
        value: function (e) {
          var t = e.to,
              n = e.kind;
          this.href = this.expandURL(t), this.liveSocket.historyPatch(t, n);
        }
      }, {
        key: "expandURL",
        value: function (e) {
          return e.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e) : e;
        }
      }, {
        key: "onRedirect",
        value: function (e) {
          var t = e.to,
              n = e.flash;
          this.liveSocket.redirect(t, n);
        }
      }, {
        key: "isDestroyed",
        value: function () {
          return this.destroyed;
        }
      }, {
        key: "join",
        value: function (e) {
          var t = this;
          this.parent || (this.stopCallback = this.liveSocket.withPageLoading({
            to: this.href,
            kind: "initial"
          })), this.joinCallback = function () {
            return e && e(t, t.joinCount);
          }, this.liveSocket.wrapPush(this, {
            timeout: !1
          }, function () {
            return t.channel.join().receive("ok", function (e) {
              return t.onJoin(e);
            }).receive("error", function (e) {
              return t.onJoinError(e);
            }).receive("timeout", function () {
              return t.onJoinError({
                reason: "timeout"
              });
            });
          });
        }
      }, {
        key: "onJoinError",
        value: function (e) {
          return (e.redirect || e.live_redirect) && (this.joinPending = !1, this.channel.leave()), e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", function () {
            return ["unable to join", e];
          }), this.liveSocket.reloadWithJitter(this));
        }
      }, {
        key: "onClose",
        value: function (e) {
          if (!this.isDestroyed()) {
            if (this.isJoinPending() || this.liveSocket.hasPendingLink() && "leave" !== e) return this.liveSocket.reloadWithJitter(this);
            this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200);
          }
        }
      }, {
        key: "onError",
        value: function (e) {
          this.onClose(e), this.log("error", function () {
            return ["view crashed", e];
          }), this.liveSocket.isUnloaded() || this.displayError();
        }
      }, {
        key: "displayError",
        value: function () {
          this.isMain() && le.dispatchEvent(window, "phx:page-loading-start", {
            to: this.href,
            kind: "error"
          }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
        }
      }, {
        key: "pushWithReply",
        value: function (e, t, n) {
          var i = this,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
              o = x(e ? e() : [null, []], 2),
              a = o[0],
              u = x(o[1], 1)[0],
              s = function () {};

          return u && null !== u.getAttribute(this.binding("page-loading")) && (s = this.liveSocket.withPageLoading({
            kind: "element",
            target: u
          })), "number" != typeof n.cid && delete n.cid, this.liveSocket.wrapPush(this, {
            timeout: !0
          }, function () {
            return i.channel.push(t, n, 3e4).receive("ok", function (e) {
              var t = null;
              null !== a && i.undoRefs(a), e.diff && (t = i.applyDiff("update", e.diff, function (e) {
                var t = e.diff,
                    n = e.events;
                i.update(t, n);
              })), e.redirect && i.onRedirect(e.redirect), e.live_patch && i.onLivePatch(e.live_patch), e.live_redirect && i.onLiveRedirect(e.live_redirect), s(), r(e, t);
            });
          });
        }
      }, {
        key: "undoRefs",
        value: function (e) {
          var t = this;
          le.all(this.el, "[".concat(F, '="').concat(e, '"]'), function (e) {
            e.removeAttribute(F), null !== e.getAttribute("data-phx-readonly") && (e.readOnly = !1, e.removeAttribute("data-phx-readonly")), null !== e.getAttribute("data-phx-disabled") && (e.disabled = !1, e.removeAttribute("data-phx-disabled")), j.forEach(function (t) {
              return le.removeClass(e, t);
            });
            var n = e.getAttribute("data-phx-disable-with-restore");
            null !== n && (e.innerText = n, e.removeAttribute("data-phx-disable-with-restore"));
            var i = le.private(e, F);

            if (i) {
              var r = t.triggerBeforeUpdateHook(e, i);
              he.patchEl(e, i, t.liveSocket.getActiveElement()), r && r.__updated(), le.deletePrivate(e, F);
            }
          });
        }
      }, {
        key: "putRef",
        value: function (e, t) {
          var n = this.ref++,
              i = this.binding("disable-with");
          return e.forEach(function (e) {
            e.classList.add("phx-".concat(t, "-loading")), e.setAttribute(F, n);
            var r = e.getAttribute(i);
            null !== r && (e.getAttribute("data-phx-disable-with-restore") || e.setAttribute("data-phx-disable-with-restore", e.innerText), e.innerText = r);
          }), [n, e];
        }
      }, {
        key: "componentID",
        value: function (e) {
          var t = e.getAttribute && e.getAttribute(H);
          return t ? parseInt(t) : null;
        }
      }, {
        key: "targetComponentID",
        value: function (e, t) {
          return e.getAttribute(this.binding("target")) ? this.closestComponentID(t) : null;
        }
      }, {
        key: "closestComponentID",
        value: function (e) {
          var t = this;
          return e ? Z(e.closest("[".concat(H, "]")), function (e) {
            return t.ownsElement(e) && t.componentID(e);
          }) : null;
        }
      }, {
        key: "pushHookEvent",
        value: function (e, t, n, i) {
          if (!this.isConnected()) return this.log("hook", function () {
            return ["unable to push hook event. LiveView not connected", t, n];
          }), !1;
          var r = x(this.putRef([], "hook"), 2),
              o = r[0],
              a = r[1];
          return this.pushWithReply(function () {
            return [o, a];
          }, "event", {
            type: "hook",
            event: t,
            value: n,
            cid: this.closestComponentID(e)
          }, function (e, t) {
            return i(t, o);
          }), o;
        }
      }, {
        key: "extractMeta",
        value: function (e, t) {
          for (var n = this.binding("value-"), i = 0; i < e.attributes.length; i++) {
            var r = e.attributes[i].name;
            r.startsWith(n) && (t[r.replace(n, "")] = e.getAttribute(r));
          }

          return void 0 !== e.value && (t.value = e.value, "INPUT" === e.tagName && J.indexOf(e.type) >= 0 && !e.checked && delete t.value), t;
        }
      }, {
        key: "pushEvent",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([t], e);
          }, "event", {
            type: e,
            event: i,
            value: this.extractMeta(t, r),
            cid: this.targetComponentID(t, n)
          });
        }
      }, {
        key: "pushKey",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([e], n);
          }, "event", {
            type: n,
            event: i,
            value: this.extractMeta(e, r),
            cid: this.targetComponentID(e, t)
          });
        }
      }, {
        key: "pushFileProgress",
        value: function (e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
          this.liveSocket.withinOwners(e.form, function (r, o) {
            r.pushWithReply(null, "progress", {
              event: e.getAttribute(r.binding("progress")),
              ref: e.getAttribute(M),
              entry_ref: t,
              progress: n,
              cid: r.targetComponentID(e.form, o)
            }, i);
          });
        }
      }, {
        key: "pushInput",
        value: function (e, t, n, i, r) {
          var o = this,
              a = this.targetComponentID(e.form, t),
              u = function () {
            return o.putRef([e, e.form], "change");
          },
              s = ae(e.form, {
            _target: i.name
          });

          e.files && e.files.length > 0 && ie.trackFiles(e, Array.from(e.files));
          var c = {
            type: "form",
            event: n,
            value: s,
            uploads: ie.serializeUploads(e),
            cid: a
          };
          this.pushWithReply(u, "event", c, function (n) {
            if (le.showError(e, o.liveSocket.binding("feedback-for")), le.isUploadInput(e) && null !== e.getAttribute("data-phx-auto-upload")) {
              if (ie.filesAwaitingPreflight(e).length > 0) {
                var i = x(u(), 2),
                    s = i[0];
                i[1];
                o.uploadFiles(e.form, t, s, a, function (t) {
                  r && r(n), o.triggerAwaitingSubmit(e.form);
                });
              }
            } else r && r(n);
          });
        }
      }, {
        key: "triggerAwaitingSubmit",
        value: function (e) {
          var t = this.getScheduledSubmit(e);

          if (t) {
            var n = x(t, 3),
                i = (n[0], n[1], n[2]);
            this.cancelSubmit(e), i();
          }
        }
      }, {
        key: "getScheduledSubmit",
        value: function (e) {
          return this.formSubmits.find(function (t) {
            var n = x(t, 2),
                i = n[0];
            n[1];
            return i.isSameNode(e);
          });
        }
      }, {
        key: "scheduleSubmit",
        value: function (e, t, n) {
          if (this.getScheduledSubmit(e)) return !0;
          this.formSubmits.push([e, t, n]);
        }
      }, {
        key: "cancelSubmit",
        value: function (e) {
          var t = this;
          this.formSubmits = this.formSubmits.filter(function (n) {
            var i = x(n, 3),
                r = i[0],
                o = i[1];
            i[2];
            return !r.isSameNode(e) || (t.undoRefs(o), !1);
          });
        }
      }, {
        key: "pushFormSubmit",
        value: function (e, t, n, i) {
          var r = this,
              o = function (e) {
            return !(G(e, "".concat(r.binding("update"), "=ignore"), e.form) || G(e, "data-phx-update=ignore", e.form));
          },
              a = function (e) {
            return e.hasAttribute(r.binding("disable-with"));
          },
              u = function (e) {
            return "BUTTON" == e.tagName;
          },
              s = function (e) {
            return ["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName);
          },
              c = function () {
            var t = Array.from(e.elements),
                n = t.filter(a),
                i = t.filter(u).filter(o),
                c = t.filter(s).filter(o);
            return i.forEach(function (e) {
              e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0;
            }), c.forEach(function (e) {
              e.setAttribute("data-phx-readonly", e.readOnly), e.readOnly = !0, e.files && (e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0);
            }), e.setAttribute(r.binding("page-loading"), ""), r.putRef([e].concat(n).concat(i).concat(c), "submit");
          },
              l = this.targetComponentID(e, t);

          if (ie.hasUploadsInProgress(e)) {
            var d = x(c(), 2),
                h = d[0];
            d[1];
            return this.scheduleSubmit(e, h, function () {
              return r.pushFormSubmit(e, t, n, i);
            });
          }

          if (ie.inputsAwaitingPreflight(e).length > 0) {
            var f = x(c(), 2),
                v = f[0],
                p = f[1],
                g = function () {
              return [v, p];
            };

            this.uploadFiles(e, t, v, l, function (t) {
              var o = ae(e, {});
              r.pushWithReply(g, "event", {
                type: "form",
                event: n,
                value: o,
                cid: l
              }, i);
            });
          } else {
            var m = ae(e);
            this.pushWithReply(c, "event", {
              type: "form",
              event: n,
              value: m,
              cid: l
            }, i);
          }
        }
      }, {
        key: "uploadFiles",
        value: function (e, t, n, i, r) {
          var o = this,
              a = this.joinCount;
          ie.activeFileInputs(e).forEach(function (e) {
            var i = new ie(e, o, r);
            o.uploaders[e] = i;
            var u = i.entries().map(function (e) {
              return e.toPreflightPayload();
            }),
                s = {
              ref: e.getAttribute(M),
              entries: u,
              cid: o.targetComponentID(e.form, t)
            };
            o.log("upload", function () {
              return ["sending preflight request", s];
            }), o.pushWithReply(null, "allow_upload", s, function (e) {
              if (o.log("upload", function () {
                return ["got preflight response", e];
              }), e.error) {
                o.undoRefs(n);
                var t = x(e.error, 2),
                    r = t[0],
                    u = t[1];
                o.log("upload", function () {
                  return ["error for entry ".concat(r), u];
                });
              } else {
                i.initAdapterUpload(e, function (e) {
                  o.channel.onError(function () {
                    o.joinCount === a && e();
                  });
                }, o.liveSocket);
              }
            });
          });
        }
      }, {
        key: "pushFormRecovery",
        value: function (e, t) {
          var n = this;
          this.liveSocket.withinOwners(e, function (i, r) {
            var o = e.elements[0],
                a = e.getAttribute(n.binding("auto-recover")) || e.getAttribute(n.binding("change"));
            i.pushInput(o, r, a, o, t);
          });
        }
      }, {
        key: "pushLinkPatch",
        value: function (e, t, n) {
          var i = this,
              r = this.liveSocket.setPendingLink(e),
              o = t ? function () {
            return i.putRef([t], "click");
          } : null;
          this.pushWithReply(o, "link", {
            url: e
          }, function (t) {
            t.link_redirect ? i.liveSocket.replaceMain(e, null, n, r) : i.liveSocket.commitPendingLink(r) && (i.href = e, i.applyPendingUpdates(), n && n());
          }).receive("timeout", function () {
            return i.liveSocket.redirect(window.location.href);
          });
        }
      }, {
        key: "formsForRecovery",
        value: function (e) {
          var t = this;
          if (0 === this.joinCount) return [];
          var n = this.binding("change"),
              i = document.createElement("template");
          return i.innerHTML = e, le.all(this.el, "form[".concat(n, "]")).filter(function (e) {
            return t.ownsElement(e);
          }).filter(function (e) {
            return e.elements.length > 0;
          }).filter(function (e) {
            return "ignore" !== e.getAttribute(t.binding("auto-recover"));
          }).filter(function (e) {
            return i.content.querySelector("form[".concat(n, '="').concat(e.getAttribute(n), '"]'));
          });
        }
      }, {
        key: "maybePushComponentsDestroyed",
        value: function (e) {
          var t,
              n = this,
              i = e.filter(function (e) {
            return 0 === le.findComponentNodeList(n.el, e).length;
          });
          i.length > 0 && ((t = this.pruningCIDs).push.apply(t, A(i)), this.pushWithReply(null, "cids_will_destroy", {
            cids: i
          }, function () {
            n.pruningCIDs = n.pruningCIDs.filter(function (e) {
              return -1 !== i.indexOf(e);
            });
            var e = i.filter(function (e) {
              return 0 === le.findComponentNodeList(n.el, e).length;
            });
            e.length > 0 && n.pushWithReply(null, "cids_destroyed", {
              cids: e
            }, function (e) {
              n.rendered.pruneCIDs(e.cids);
            });
          }));
        }
      }, {
        key: "ownsElement",
        value: function (e) {
          return e.getAttribute("data-phx-parent-id") === this.id || Z(e.closest(U), function (e) {
            return e.id;
          }) === this.id;
        }
      }, {
        key: "submitForm",
        value: function (e, t, n) {
          var i = this;
          le.putPrivate(e, "phx-has-submitted", !0), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e, t, n, function () {
            i.liveSocket.restorePreviouslyActiveFocus();
          });
        }
      }, {
        key: "binding",
        value: function (e) {
          return this.liveSocket.binding(e);
        }
      }]), e;
    }(),
        ve = 1,
        pe = function () {
      function e(t, n, i) {
        for (var r in T(this, e), this.__view = t, this.__liveSocket = t.liveSocket, this.__callbacks = i, this.__listeners = new Set(), this.__isDisconnected = !1, this.el = n, this.viewName = t.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks) this[r] = this.__callbacks[r];
      }

      return _(e, null, [{
        key: "makeID",
        value: function () {
          return ve++;
        }
      }, {
        key: "elementID",
        value: function (e) {
          return e.phxHookId;
        }
      }]), _(e, [{
        key: "__mounted",
        value: function () {
          this.mounted && this.mounted();
        }
      }, {
        key: "__updated",
        value: function () {
          this.updated && this.updated();
        }
      }, {
        key: "__beforeUpdate",
        value: function () {
          this.beforeUpdate && this.beforeUpdate();
        }
      }, {
        key: "__destroyed",
        value: function () {
          this.destroyed && this.destroyed();
        }
      }, {
        key: "__reconnected",
        value: function () {
          this.__isDisconnected && (this.__isDisconnected = !1, this.reconnected && this.reconnected());
        }
      }, {
        key: "__disconnected",
        value: function () {
          this.__isDisconnected = !0, this.disconnected && this.disconnected();
        }
      }, {
        key: "pushEvent",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
          return this.__view.pushHookEvent(null, e, t, n);
        }
      }, {
        key: "pushEventTo",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
          return this.__view.withinTargets(e, function (e, r) {
            return e.pushHookEvent(r, t, n, i);
          });
        }
      }, {
        key: "handleEvent",
        value: function (e, t) {
          var n = function (n, i) {
            return i ? e : t(n.detail);
          };

          return window.addEventListener("phx:hook:".concat(e), n), this.__listeners.add(n), n;
        }
      }, {
        key: "removeHandleEvent",
        value: function (e) {
          var t = e(null, !0);
          window.removeEventListener("phx:hook:".concat(t), e), this.__listeners.delete(e);
        }
      }, {
        key: "__cleanup__",
        value: function () {
          var e = this;

          this.__listeners.forEach(function (t) {
            return e.removeHandleEvent(t);
          });
        }
      }]), e;
    }();

    t.default = se;
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    (function (t) {
      t.Phoenix || (t.Phoenix = {}), e.exports = t.Phoenix.LiveView = n(0);
    }).call(this, n(1));
  }]);
});

/***/ }),

/***/ "./css/public.css":
/*!************************!*\
  !*** ./css/public.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@mux/videojs-kit/dist/index.css":
/*!******************************************************!*\
  !*** ./node_modules/@mux/videojs-kit/dist/index.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/topbar/topbar.min.js":
/*!*******************************************!*\
  !*** ./node_modules/topbar/topbar.min.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
(function(window,document){"use strict";!function(){for(var lastTime=0,vendors=["ms","moz","webkit","o"],x=0;x<vendors.length&&!window.requestAnimationFrame;++x)window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);return lastTime=currTime+timeToCall,id}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(id){clearTimeout(id)})}();function repaint(){canvas.width=window.innerWidth,canvas.height=5*options.barThickness;var ctx=canvas.getContext("2d");ctx.shadowBlur=options.shadowBlur,ctx.shadowColor=options.shadowColor;var stop,lineGradient=ctx.createLinearGradient(0,0,canvas.width,0);for(stop in options.barColors)lineGradient.addColorStop(stop,options.barColors[stop]);ctx.lineWidth=options.barThickness,ctx.beginPath(),ctx.moveTo(0,options.barThickness/2),ctx.lineTo(Math.ceil(currentProgress*canvas.width),options.barThickness/2),ctx.strokeStyle=lineGradient,ctx.stroke()}var canvas,progressTimerId,fadeTimerId,currentProgress,showing,options={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},topbar={config:function(opts){for(var key in opts)options.hasOwnProperty(key)&&(options[key]=opts[key])},show:function(){var type,handler,elem;showing||(showing=!0,null!==fadeTimerId&&window.cancelAnimationFrame(fadeTimerId),canvas||((elem=(canvas=document.createElement("canvas")).style).position="fixed",elem.top=elem.left=elem.right=elem.margin=elem.padding=0,elem.zIndex=100001,elem.display="none",options.className&&canvas.classList.add(options.className),document.body.appendChild(canvas),type="resize",handler=repaint,(elem=window).addEventListener?elem.addEventListener(type,handler,!1):elem.attachEvent?elem.attachEvent("on"+type,handler):elem["on"+type]=handler),canvas.style.opacity=1,canvas.style.display="block",topbar.progress(0),options.autoRun&&function loop(){progressTimerId=window.requestAnimationFrame(loop),topbar.progress("+"+.05*Math.pow(1-Math.sqrt(currentProgress),2))}())},progress:function(to){return void 0===to||("string"==typeof to&&(to=(0<=to.indexOf("+")||0<=to.indexOf("-")?currentProgress:0)+parseFloat(to)),currentProgress=1<to?1:to,repaint()),currentProgress},hide:function(){showing&&(showing=!1,null!=progressTimerId&&(window.cancelAnimationFrame(progressTimerId),progressTimerId=null),function loop(){return 1<=topbar.progress("+.1")&&(canvas.style.opacity-=.05,canvas.style.opacity<=.05)?(canvas.style.display="none",void(fadeTimerId=null)):void(fadeTimerId=window.requestAnimationFrame(loop))}())}}; true&&"object"==typeof module.exports?module.exports=topbar: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return topbar}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}).call(this,window,document);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/public.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mux_videojs_kit_dist_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mux/videojs-kit/dist/index.css */ "./node_modules/@mux/videojs-kit/dist/index.css");
/* harmony import */ var _css_public_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/public.css */ "./css/public.css");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phoenix_html */ "../deps/phoenix_html/priv/static/phoenix_html.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phoenix */ "../deps/phoenix/priv/static/phoenix.js");
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phoenix_live_view */ "../deps/phoenix_live_view/priv/static/phoenix_live_view.js");
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phoenix_live_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mux_videojs_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mux/videojs-kit */ "./node_modules/@mux/videojs-kit/dist/index.js");
/* harmony import */ var _mux_videojs_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mux_videojs_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth */ "./js/auth.js");
/* harmony import */ var topbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! topbar */ "./node_modules/topbar/topbar.min.js");
/* harmony import */ var topbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(topbar__WEBPACK_IMPORTED_MODULE_8__);









console.log('loaded');
var regPassword = document.querySelector("#invite_password");
var showPassword = document.querySelector("#show_password_txt");

if (regPassword) {
  regPassword.addEventListener('keyup', _auth__WEBPACK_IMPORTED_MODULE_7__.validatePassword);
  showPassword.addEventListener('click', function (e) {
    return (0,_auth__WEBPACK_IMPORTED_MODULE_7__.toggleShowPassword)(e, regPassword, showPassword);
  });
}

var Hooks = {};
Hooks.HomeSplit = {
  mounted: function mounted() {}
};
Hooks.Registration = {
  mounted: function mounted() {
    this.el.addEventListener('keyup', _auth__WEBPACK_IMPORTED_MODULE_7__.validatePassword);
  }
};
var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
var liveSocket = new (phoenix_live_view__WEBPACK_IMPORTED_MODULE_5___default())("/live", phoenix__WEBPACK_IMPORTED_MODULE_4__.Socket, {
  hooks: Hooks,
  params: {
    _csrf_token: csrfToken
  },
  dom: {
    onBeforeElUpdated: function onBeforeElUpdated(from, to) {
      if (from.__x) {
        window.Alpine.clone(from.__x, to);
      }
    }
  }
}); // Show progress bar on live navigation and form submits

var progressTimeout;
topbar__WEBPACK_IMPORTED_MODULE_8___default().config({
  barThickness: 5,
  shadowColor: "rgba(0, 0, 0, .6)"
});
window.addEventListener("phx:page-loading-start", function () {
  clearTimeout(progressTimeout);
  progressTimeout = setTimeout((topbar__WEBPACK_IMPORTED_MODULE_8___default().show), 100);
});
window.addEventListener("phx:page-loading-stop", function () {
  clearTimeout(progressTimeout);
  topbar__WEBPACK_IMPORTED_MODULE_8___default().hide();
});
liveSocket.connect();
window.liveSocket = liveSocket;
})();

/******/ })()
;
//# sourceMappingURL=public.js.map