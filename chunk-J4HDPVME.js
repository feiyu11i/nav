import{R as V,S as W,ba as G}from"./chunk-RAH7ER6F.js";import{Ba as $,Cb as j,Db as M,Ib as g,K as b,Ob as O,Pc as P,Qb as d,R as x,Tc as B,W as I,Wc as h,Xb as m,Xc as R,ac as r,bc as p,cc as w,ea as N,fa as D,ga as l,lc as z,mc as E,na as T,nc as F,q as _,qb as s,r as C,s as y,td as U,vb as c,w as v,wc as k,x as f,xc as L,yc as A}from"./chunk-I7PWFW4W.js";var Z=["*"];function q(i,a){i&1&&(r(0,"span",2),w(1,"i",3)(2,"i",3)(3,"i",3)(4,"i",3),p())}function J(i,a){}function K(i,a){if(i&1&&(r(0,"div",6),L(1),p()),i&2){let t=z(2);s(),A(t.nzTip)}}function Q(i,a){if(i&1&&(r(0,"div")(1,"div",4),g(2,J,0,0,"ng-template",5)(3,K,2,1,"div",6),p()()),i&2){let t=z(),u=k(1);s(),d("ant-spin-rtl",t.dir==="rtl")("ant-spin-spinning",t.isLoading)("ant-spin-lg",t.nzSize==="large")("ant-spin-sm",t.nzSize==="small")("ant-spin-show-text",t.nzTip),s(),O("ngTemplateOutlet",t.nzIndicator||u),s(),m(t.nzTip?3:-1)}}function X(i,a){if(i&1&&(r(0,"div",7),F(1),p()),i&2){let t=z();d("ant-spin-blur",t.isLoading)}}var H="spin",zn=(()=>{let i,a=[],t=[];return class S{static{let o=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[W()],v(null,null,i,{kind:"field",name:"nzIndicator",static:!1,private:!1,access:{has:n=>"nzIndicator"in n,get:n=>n.nzIndicator,set:(n,e)=>{n.nzIndicator=e}},metadata:o},a,t),o&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})}nzConfigService;cdr;directionality;_nzModuleName=H;nzIndicator=f(this,a,null);nzSize=(f(this,t),"default");nzTip=null;nzDelay=0;nzSimple=!1;nzSpinning=!0;destroy$=new _;spinning$=new C(this.nzSpinning);delay$=new y(1);isLoading=!1;dir="ltr";constructor(o,n,e){this.nzConfigService=o,this.cdr=n,this.directionality=e}ngOnInit(){this.delay$.pipe(N(this.nzDelay),I(),D(n=>n===0?this.spinning$:this.spinning$.pipe(x(e=>b(e?n:0)))),l(this.destroy$)).subscribe(n=>{this.isLoading=n,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(H).pipe(l(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(l(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(o){let{nzSpinning:n,nzDelay:e}=o;n&&this.spinning$.next(this.nzSpinning),e&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(n){return new(n||S)(c(V),c(B),c(G))};static \u0275cmp=j({type:S,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,e){n&2&&d("ant-spin-nested-loading",!e.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",R],nzSimple:[2,"nzSimple","nzSimple",h],nzSpinning:[2,"nzSpinning","nzSpinning",h]},exportAs:["nzSpin"],features:[$],ngContentSelectors:Z,decls:4,vars:2,consts:[["defaultTemplate",""],[1,"ant-spin-container",3,"ant-spin-blur"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,e){n&1&&(E(),g(0,q,5,0,"ng-template",null,0,P)(2,Q,4,12,"div")(3,X,2,2,"div",1)),n&2&&(s(2),m(e.isLoading?2:-1),s(),m(e.nzSimple?-1:3))},dependencies:[U],encapsulation:2})}})(),un=(()=>{class i{static \u0275fac=function(u){return new(u||i)};static \u0275mod=M({type:i});static \u0275inj=T({})}return i})();export{zn as a,un as b};
