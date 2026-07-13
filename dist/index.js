"use strict";var E=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var A=E(function(W,z){
var R=require('@stdlib/constants-float64-max/dist'),B=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-abs2/dist'),j=require('@stdlib/math-base-special-sqrt/dist'),C=14916681462400413e-170,D=1997919072202235e131,_=44989137945431964e145,o=11113793747425387e-178;function G(i,e,v,l,q,m,d){var y,t,n,r,a,f,c,u,s,x,b,p;if(i<=0)return 0;for(x=l,b=d,y=!0,t=0,n=0,r=0,a=0,u=1,p=0;p<i;p++)s=B(e[x]-q[b]),s>D?(n+=g(s*o),y=!1):s<C?y&&(a+=g(s*_)):r+=s*s,x+=v,b+=m;return n>0?((r>0||r>R||r!==r)&&(n+=r*o*o),u=1/o,t=n):a>0?r>0||r>R||r!==r?(r=j(r),a=j(a)/_,a>r?(c=r,f=a):(c=a,f=r),u=1,t=f*f*(1+g(c/f))):(u=1/_,t=a):(u=1,t=r),j(t)*u}z.exports=G
});var M=E(function(X,L){
var F=require('@stdlib/strided-base-stride2offset/dist'),H=A();function I(i,e,v,l,q){var m=F(i,v),d=F(i,q);return H(i,e,v,m,l,q,d)}L.exports=I
});var k=E(function(Z,h){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=M(),K=A();J(T,"ndarray",K);h.exports=T
});var P=require("path").join,Q=require('@stdlib/utils-try-require/dist'),S=require('@stdlib/assert-is-error/dist'),U=k(),O,w=Q(P(__dirname,"./native.js"));S(w)?O=U:O=w;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
