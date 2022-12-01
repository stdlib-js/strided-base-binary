// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;function l(e,t){return e[t]}function c(e,t){return e.get(t)}function _(e,t,r){e[t]=r}function p(e,t,r){e.set(r,t)}function s(e,t,r,n){var o,i,a,u,f,s;return(u=e[0]).get&&u.set&&(o=c),(f=e[1]).get&&f.set&&(i=c),(s=e[2]).get&&s.set&&(a=p),o||i||a?function(e,t,r,n,o){var i,a,u,f,l,c,_,p,s,d,b,y,g,v;if(!((g=t[0])<=0))for(_=(f=r[0])<0?(1-g)*f:0,p=(l=r[1])<0?(1-g)*l:0,s=(c=r[2])<0?(1-g)*c:0,d=e[0],b=e[1],y=e[2],i=n[0],a=n[1],u=n[2],v=0;v<g;v++)u(y,s,o(i(d,_),a(b,p))),_+=f,p+=l,s+=c}(e,t,r,[o=o||l,i=i||l,a=a||_],n):function(e,t,r,n){var o,i,a,u,f,l,c,_,p,s,d;if(!((s=t[0])<=0))for(u=(o=r[0])<0?(1-s)*o:0,f=(i=r[1])<0?(1-s)*i:0,l=(a=r[2])<0?(1-s)*a:0,c=e[0],_=e[1],p=e[2],d=0;d<s;d++)p[l]=n(c[u],_[f]),u+=o,f+=i,l+=a}(e,t,r,n)}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||f.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(s,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o){var i,a,u,f,s,d;return(f=e[0]).get&&f.set&&(i=c),(s=e[1]).get&&s.set&&(a=c),(d=e[2]).get&&d.set&&(u=p),i||a||u?function(e,t,r,n,o,i){var a,u,f,l,c,_,p,s,d,b,y,g,v,j;if(!((v=t[0])<=0))for(p=n[0],s=n[1],d=n[2],l=r[0],c=r[1],_=r[2],b=e[0],y=e[1],g=e[2],a=o[0],u=o[1],f=o[2],j=0;j<v;j++)f(g,d,i(a(b,p),u(y,s))),p+=l,s+=c,d+=_}(e,t,r,n,[i=i||l,a=a||l,u=u||_],o):function(e,t,r,n,o){var i,a,u,f,l,c,_,p,s,d,b;if(!((d=t[0])<=0))for(f=n[0],l=n[1],c=n[2],i=r[0],a=r[1],u=r[2],_=e[0],p=e[1],s=e[2],b=0;b<d;b++)s[c]=o(_[f],p[l]),f+=i,l+=a,c+=u}(e,t,r,n,o)}}),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).binary=t();
//# sourceMappingURL=index.js.map
