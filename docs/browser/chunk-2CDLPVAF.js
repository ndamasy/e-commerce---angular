import{a as I}from"./chunk-CAEHU3XW.js";import{a as k,c as P,g as A,l as D}from"./chunk-4SK36FLV.js";import{$ as a,Ab as F,Ga as l,Ha as S,I as m,Ja as x,K as g,Ka as y,La as _,Mb as E,N as u,Na as b,Pa as L,Ta as M,Va as T,Z as f,ka as p,qa as h,ra as C,sa as n,ta as s,ua as v,ub as w}from"./chunk-7D4V6QGD.js";var N=(()=>{let e=class e{transform(r,i){return r.filter(o=>o.name.toLowerCase().includes(i.toLocaleLowerCase()))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=u({name:"categoSearch",type:e,pure:!0,standalone:!0});let t=e;return t})();var j=(t,e)=>e.id,z=t=>["/details",t];function B(t,e){if(t&1&&(n(0,"div",5)(1,"div",6),v(2,"img",7),n(3,"h3",8),l(4),s()()()),t&2){let c=e.$implicit;a(),p("routerLink",L(4,z,c.id)),a(),p("src",c.image,f)("alt",c.title),a(2),S(c.name)}}var Y=(()=>{let e=class e{constructor(){this._CategoriesService=m(I),this._CartService=m(F),this._ToastrService=m(E),this.text="",this.categryList=[]}ngOnInit(){this._CategoriesService.getAllCategries().subscribe({next:r=>{console.log(r),this.categryList=r.data},error:r=>{console.log(r)}})}addToCart(r){this._CartService.addProductToCart(r).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this._CartService.cartNumber=i.numOfCartItems}})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["app-categories"]],standalone:!0,features:[b],decls:11,vars:4,consts:[[1,"text-center","text-5xl","text-green-600","p-4","mb-16","mt-32"],[1,"flex","justify-center","pt-10","pb-16","items-center"],["for","search",1,"search"],["type","search",1,"rounded","border","w-2/4","px-3","py-2","my-2","border-zinc-300","ms-2",3,"ngModelChange","ngModel"],[1,"md:container","md:mx-auto","grid","grid-cols-6","gap-4"],[1,"p-2","card"],[3,"routerLink"],[3,"src","alt"],[1,"bg-green-500","rounded-md","p-2","mt-10","text-center","fs-2","lable-text"]],template:function(i,o){i&1&&(n(0,"section")(1,"h1",0),l(2,"All Categories"),s(),n(3,"div",1)(4,"label",2),l(5,"Search "),s(),n(6,"input",3),_("ngModelChange",function(d){return y(o.text,d)||(o.text=d),d}),s()(),n(7,"div",4),h(8,B,5,6,"div",5,j),M(10,"categoSearch"),s()()),i&2&&(a(6),x("ngModel",o.text),a(2),C(T(10,1,o.categryList,o.text)))},dependencies:[w,D,k,P,A,N]});let t=e;return t})();export{Y as CategoriesComponent};
