"use strict";var g=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var G=g(function(qr,k){
function T(r,i,v,u,t){var e,a,n,c,q,o,p,f,y,x,z;if(x=i[0],!(x<=0))for(c=u[0],q=u[1],o=u[2],e=v[0],a=v[1],n=v[2],p=r[0],f=r[1],y=r[2],z=0;z<x;z++)y[o]=t(p[c],f[q]),c+=e,q+=a,o+=n}k.exports=T
});var B=g(function(or,w){
var S=require('@stdlib/strided-base-stride2offset/dist'),U=G();function V(r,i,v,u){var t,e;return e=i[0],t=[S(e,v[0]),S(e,v[1]),S(e,v[2])],U(r,i,v,t,u)}w.exports=V
});var d=g(function(xr,C){
function W(r,i,v,u,t,e){var a,n,c,q,o,p,f,y,x,z,R,j,A,N;if(A=i[0],!(A<=0))for(f=u[0],y=u[1],x=u[2],q=v[0],o=v[1],p=v[2],z=r[0],R=r[1],j=r[2],a=t[0],n=t[1],c=t[2],N=0;N<A;N++)c(j,x,e(a(z,f),n(R,y))),f+=q,y+=o,x+=p}C.exports=W
});var E=g(function(fr,D){
var l=require('@stdlib/strided-base-stride2offset/dist'),X=d();function Y(r,i,v,u,t){var e,a;return a=i[0],e=[l(a,v[0]),l(a,v[1]),l(a,v[2])],X(r,i,v,e,u,t)}D.exports=Y
});var J=g(function(yr,I){
var m=require('@stdlib/array-base-assert-is-accessor-array/dist'),F=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),H=require('@stdlib/array-base-getter/dist'),_=require('@stdlib/array-base-setter/dist'),s=require('@stdlib/array-dtype/dist'),$=B(),h=E();function rr(r,i,v,u){var t,e,a,n,c,q;return n=r[0],m(n)&&(t=F(s(n))),c=r[1],m(c)&&(e=F(s(c))),q=r[2],m(q)&&(a=Z(s(q))),t||e||a?(t=t||H(s(n)),e=e||H(s(c)),a=a||_(s(q)),h(r,i,v,[t,e,a],u)):$(r,i,v,u)}I.exports=rr
});var P=g(function(zr,M){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),K=require('@stdlib/array-base-accessor-getter/dist'),er=require('@stdlib/array-base-accessor-setter/dist'),L=require('@stdlib/array-base-getter/dist'),vr=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/array-dtype/dist'),ar=G(),ir=d();function tr(r,i,v,u,t){var e,a,n,c,q,o;return c=r[0],O(c)&&(e=K(b(c))),q=r[1],O(q)&&(a=K(b(q))),o=r[2],O(o)&&(n=er(b(o))),e||a||n?(e=e||L(b(c)),a=a||L(b(q)),n=n||vr(b(o)),ir(r,i,v,u,[e,a,n],t)):ar(r,i,v,u,t)}M.exports=tr
});var ur=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Q=J(),nr=P();ur(Q,"ndarray",nr);module.exports=Q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
