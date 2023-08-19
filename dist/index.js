"use strict";var p=function(r,q){return function(){return q||r((q={exports:{}}).exports,q),q.exports}};var R=p(function(tr,O){
function Q(r,q,u,x){var n,a,i,t,e,v,c,y,f,z,o;if(z=q[0],!(z<=0))for(n=u[0],a=u[1],i=u[2],n<0?t=(1-z)*n:t=0,a<0?e=(1-z)*a:e=0,i<0?v=(1-z)*i:v=0,c=r[0],y=r[1],f=r[2],o=0;o<z;o++)f[v]=x(c[t],y[e]),t+=n,e+=a,v+=i}O.exports=Q
});var k=p(function(ur,j){
function T(r,q,u,x,n){var a,i,t,e,v,c,y,f,z,o,g,N,s,l;if(s=q[0],!(s<=0))for(e=u[0],v=u[1],c=u[2],e<0?y=(1-s)*e:y=0,v<0?f=(1-s)*v:f=0,c<0?z=(1-s)*c:z=0,o=r[0],g=r[1],N=r[2],a=x[0],i=x[1],t=x[2],l=0;l<s;l++)t(N,z,n(a(o,y),i(g,f))),y+=e,f+=v,z+=c}j.exports=T
});var D=p(function(nr,C){
var S=require('@stdlib/array-base-assert-is-accessor-array/dist'),w=require('@stdlib/array-base-accessor-getter/dist'),U=require('@stdlib/array-base-accessor-setter/dist'),B=require('@stdlib/array-base-getter/dist'),V=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/array-dtype/dist'),W=R(),X=k();function Y(r,q,u,x){var n,a,i,t,e,v;return t=r[0],S(t)&&(n=w(b(t))),e=r[1],S(e)&&(a=w(b(e))),v=r[2],S(v)&&(i=U(b(v))),n||a||i?(n=n||B(b(t)),a=a||B(b(e)),i=i||V(b(v)),X(r,q,u,[n,a,i],x)):W(r,q,u,x)}C.exports=Y
});var F=p(function(xr,E){
function Z(r,q,u,x,n){var a,i,t,e,v,c,y,f,z,o,g;if(o=q[0],!(o<=0))for(e=x[0],v=x[1],c=x[2],a=u[0],i=u[1],t=u[2],y=r[0],f=r[1],z=r[2],g=0;g<o;g++)z[c]=n(y[e],f[v]),e+=a,v+=i,c+=t}E.exports=Z
});var I=p(function(cr,H){
function _(r,q,u,x,n,a){var i,t,e,v,c,y,f,z,o,g,N,s,l,G;if(l=q[0],!(l<=0))for(f=x[0],z=x[1],o=x[2],v=u[0],c=u[1],y=u[2],g=r[0],N=r[1],s=r[2],i=n[0],t=n[1],e=n[2],G=0;G<l;G++)e(s,o,a(i(g,f),t(N,z))),f+=v,z+=c,o+=y}H.exports=_
});var M=p(function(qr,L){
var m=require('@stdlib/array-base-assert-is-accessor-array/dist'),J=require('@stdlib/array-base-accessor-getter/dist'),$=require('@stdlib/array-base-accessor-setter/dist'),K=require('@stdlib/array-base-getter/dist'),d=require('@stdlib/array-base-setter/dist'),A=require('@stdlib/array-dtype/dist'),h=F(),rr=I();function er(r,q,u,x,n){var a,i,t,e,v,c;return e=r[0],m(e)&&(a=J(A(e))),v=r[1],m(v)&&(i=J(A(v))),c=r[2],m(c)&&(t=$(A(c))),a||i||t?(a=a||K(A(e)),i=i||K(A(v)),t=t||d(A(c)),rr(r,q,u,x,[a,i,t],n)):h(r,q,u,x,n)}L.exports=er
});var vr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=D(),ir=M();vr(P,"ndarray",ir);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
