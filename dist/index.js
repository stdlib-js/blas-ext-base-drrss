"use strict";var E=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var A=E(function(W,z){
var R=require('@stdlib/constants-float64-max/dist'),B=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-abs2/dist'),j=require('@stdlib/math-base-special-sqrt/dist'),C=14916681462400413e-170,D=1997919072202235e131,_=44989137945431964e145,o=11113793747425387e-178;function G(a,i,f,l,q,m,d){var y,v,u,r,e,n,c,t,s,x,b,p;if(a<=0)return 0;for(x=l,b=d,y=!0,v=0,u=0,r=0,e=0,t=1,p=0;p<a;p++)s=B(i[x]-q[b]),s>D?(u+=g(s*o),y=!1):s<C?y&&(e+=g(s*_)):r+=s*s,x+=f,b+=m;return u>0?((r>0||r>R||r!==r)&&(u+=r*o*o),t=1/o,v=u):e>0?r>0||r>R||r!==r?(r=j(r),e=j(e)/_,e>r?(c=r,n=e):(c=e,n=r),t=1,v=n*n*(1+g(c/n))):(t=1/_,v=e):(t=1,v=r),j(v)*t}z.exports=G
});var M=E(function(X,L){
var F=require('@stdlib/strided-base-stride2offset/dist'),H=A();function I(a,i,f,l,q){var m=F(a,f),d=F(a,q);return H(a,i,f,m,l,q,d)}L.exports=I
});var k=E(function(Z,h){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=M(),K=A();J(T,"ndarray",K);h.exports=T
});var P=require("path").join,Q=require('@stdlib/utils-try-require/dist'),S=require('@stdlib/assert-is-error/dist'),U=k(),O,w=Q(P(__dirname,"./native.js"));S(w)?O=U:O=w;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
