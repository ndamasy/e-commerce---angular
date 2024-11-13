import './polyfills.server.mjs';
import{a as H,b as V,c as B}from"./chunk-H5FFYHP4.mjs";import{Aa as f,B as x,Ba as v,Ca as n,Da as c,E as _,Ea as p,F as d,Ha as y,I as g,Ja as A,Ka as F,L as C,Lb as j,P as b,Q as h,Ra as s,Sa as m,Ta as k,Ya as E,Za as I,_a as L,cb as M,ea as S,eb as O,ga as a,lc as $,sa as P,ua as u,ya as T,za as w}from"./chunk-DXSYFRZP.mjs";import"./chunk-VVCT4QZE.mjs";var U=(()=>{let t=class t{constructor(r){this._HttpClient=r}getAllProducts(){return this._HttpClient.get(`${H.baseUrl}/api/v1/products`)}};t.\u0275fac=function(i){return new(i||t)(_(j))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Y=(()=>{let t=class t{transform(r,i){return r.filter(l=>l.title.toLowerCase().includes(i.toLocaleLowerCase()))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=C({name:"product",type:t,pure:!0,standalone:!0});let e=t;return e})();var z=(e,t)=>t.id,G=e=>["/details",e],N=()=>[1,2,3,4,5];function R(e,t){e&1&&(n(0,"span"),p(1,"i",9),c())}function q(e,t){e&1&&(n(0,"span"),p(1,"i",10),c())}function J(e,t){if(e&1){let o=y();n(0,"div",2)(1,"div",3),p(2,"img",4),n(3,"h3",5),s(4),c(),n(5,"h4"),s(6),c(),n(7,"div",6)(8,"span"),s(9),c(),n(10,"div"),f(11,R,2,0,"span",null,w),P(13,q,2,0,"span"),n(14,"span",7),s(15),c()()()(),n(16,"button",8),A("click",function(){let i=b(o).$implicit,l=F();return h(l.addToCart(i.id))}),s(17," Add To Cart "),c()()}if(e&2){let o=t.$implicit;a(),u("routerLink",L(8,G,o.id)),a(),u("src",o.imageCover,S)("alt",o.title),a(2),m(o.category.name),a(2),m(o.title.split(" ",2).join(" ")),a(3),k("",o.price," EGP"),a(2),v(I(10,N).slice(0,o.ratingsAverage)),a(2),T(13,o.ratingsAverage%1!==0?13:-1),a(2),m(o.ratingsAverage)}}var at=(()=>{let t=class t{constructor(){this._AllProductsService=d(U),this._ToastrService=d(B),this._CartService=d(V),this.text="",this.boroductList=[]}ngOnInit(){this._AllProductsService.getAllProducts().subscribe({next:r=>{console.log(r.data),this.boroductList=r.data},error:r=>{console.log(r)}})}addToCart(r){this._CartService.addProductToCart(r).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this._CartService.cartNumber=i.numOfCartItems}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-product"]],standalone:!0,features:[E],decls:7,vars:3,consts:[[1,"text-center","text-5xl","text-green-600","p-4","mb-16","mt-20"],[1,"md:container","md:mx-auto","grid","grid-cols-6","gap-4"],[1,"p-2","card"],[3,"routerLink"],[3,"src","alt"],[1,"lable-text"],[1,"flex","justify-between"],[1,"text-slate-500"],[1,"rounded","bg-green-600","w-full","p-2","lable-text",3,"click"],[1,"fas","fa-star","text-amber-400"],[1,"fa-solid","fa-star-half-stroke","text-amber-400"]],template:function(i,l){i&1&&(n(0,"section")(1,"h2",0),s(2," All Products "),c(),n(3,"div",1),f(4,J,18,11,"div",2,z),M(6,"product"),c()()),i&2&&(a(4),v(O(6,0,l.boroductList,l.text)))},dependencies:[$,Y],styles:[".card[_ngcontent-%COMP%]{border-radius:5px;border:solid 1px #16A34A;transition:box-shadow .5s;overflow:hidden}.card[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #11bd1168}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translateY(120%);transition:transform .7s}.card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:translateY(0)}"]});let e=t;return e})();export{at as ProductComponent};
