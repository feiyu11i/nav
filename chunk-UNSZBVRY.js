import{a as H,b as X}from"./chunk-C7N4RGI4.js";import"./chunk-O2RWSA6V.js";import{d as Q}from"./chunk-WP57XBOG.js";import{q as P}from"./chunk-ZA7INENH.js";import{d as Y,e as Z,f as ee,g as te,h as ie,i as ne,j as ae,k as oe,l as re}from"./chunk-6NYZ5NIH.js";import"./chunk-T77HQOLD.js";import"./chunk-F64EADEB.js";import"./chunk-GG7TGWNH.js";import{F as y}from"./chunk-MPPOYWH4.js";import{a as W,b as R,c as j}from"./chunk-DHTFIZHD.js";import"./chunk-ODIBCRC2.js";import{a as J,b as q}from"./chunk-J4HDPVME.js";import{b as U}from"./chunk-47PZQV2C.js";import{$ as v,Hb as G,Jb as K,Mb as k,Wb as z}from"./chunk-RAH7ER6F.js";import{Ca as h,Cb as D,Cd as M,Da as _,Gc as w,Ib as C,Nd as B,Ob as l,Pd as $,Wd as V,ac as n,bc as a,cc as I,de as A,fe as F,gc as b,ie as m,jc as f,lc as p,nb as T,nd as N,od as O,qb as i,vb as S,wd as L,xc as o,yc as d,zc as g}from"./chunk-I7PWFW4W.js";function de(r,t){if(r&1){let e=b();n(0,"button",13),f("click",function(){h(e);let c=p(2);return _(c.handleSubmit())}),o(1),a()}if(r&2){let e=p(2);l("nzLoading",e.submitting),i(),g(" ",e.$t("_save")," ")}}function se(r,t){r&1&&(n(0,"div",14),o(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),a())}function ce(r,t){if(r&1&&I(0,"tag-list",20),r&2){let e=p().$implicit;l("data",e.tags)}}function me(r,t){if(r&1){let e=b();n(0,"tr")(1,"td",8),f("nzCheckedChange",function(c){let u=h(e).$implicit,x=p(2);return _(x.onItemChecked(u.extra.uuid,c))}),a(),n(2,"td")(3,"a",15),f("click",function(){let c=h(e),u=c.$implicit,x=c.index,le=p(2);return _(le.handleClick(u,x))}),o(4),a()(),n(5,"td"),o(6),a(),n(7,"td"),o(8),a(),n(9,"td"),I(10,"app-logo",16),a(),n(11,"td")(12,"a",17),o(13),a()(),n(14,"td"),C(15,ce,1,1,"tag-list",18),a(),n(16,"td")(17,"pre",19),o(18),a()(),n(19,"td",11),o(20),a(),n(21,"td"),o(22),a()()}if(r&2){let e=t.$implicit,s=p(2);i(),l("nzChecked",s.setOfCheckedId.has(e.extra.uuid)),i(3),d(s.$t("_handle")),i(2),d(s.typeMap[e.extra.type]),i(2),d(e.id),i(2),l("src",e.icon)("name",e.name),i(2),l("href",e.url,T),i(),d(e.name),i(2),l("ngIf",e.tags),i(3),d(e.desc),i(2),g(" ",e.breadcrumb," "),i(2),d(e.createdAt)}}function pe(r,t){if(r&1){let e=b();n(0,"div"),C(1,de,2,2,"button",3),n(2,"button",4),f("click",function(){h(e);let c=p();return _(c.getUserCollect())}),o(3),a(),n(4,"button",5),f("click",function(){h(e);let c=p();return _(c.batchDelete())}),o(5),a(),C(6,se,2,0,"div",6),n(7,"nz-table",7,0)(9,"thead")(10,"tr")(11,"th",8),f("nzCheckedChange",function(c){h(e);let u=p();return _(u.onAllChecked(c))}),a(),n(12,"th",9),o(13),a(),n(14,"th",9),o(15),a(),n(16,"th",9),o(17,"ID"),a(),n(18,"th",9),o(19),a(),n(20,"th",10),o(21),a(),n(22,"th",10),o(23),a(),n(24,"th",11),o(25),a(),n(26,"th",11),o(27),a(),n(28,"th"),o(29),a()()(),n(30,"tbody"),C(31,me,23,12,"tr",12),a()()()}if(r&2){let e=p();i(),l("ngIf",!e.isSelfDevelop),i(),l("nzLoading",e.submitting),i(),g(" ",e.$t("_refresh")," "),i(),l("nzLoading",e.submitting),i(),g(" ",e.$t("_del")," "),i(),l("ngIf",!e.isSelfDevelop),i(),l("nzData",e.dataList)("nzShowPagination",!1),i(4),l("nzChecked",e.checked),i(2),d(e.$t("_action")),i(2),d(e.$t("_type")),i(4),d(e.$t("_icon")),i(2),d(e.$t("_webName")),i(2),d(e.$t("_associatedLabels")),i(2),d(e.$t("_webDesc")),i(2),d(e.$t("_webTag")),i(2),d(e.$t("_createAt")),i(2),l("ngForOf",e.dataList)("ngForTrackBy",e.trackByItem)}}var E=class r{constructor(t,e){this.message=t;this.modal=e}$t=m;isSelfDevelop=V;submitting=!1;isPermission=!!B();dataList=[];authCode="";tagMap=A;typeMap={1:m("_add"),2:m("_edit"),3:m("_del")};setOfCheckedId=new Set;checked=!1;ngOnInit(){this.getUserCollect()}onAllChecked(t){this.dataList.forEach(e=>{t?this.setOfCheckedId.add(e.extra.uuid):this.setOfCheckedId.delete(e.extra.uuid)})}onItemChecked(t,e){e?this.setOfCheckedId.add(t):this.setOfCheckedId.delete(t)}batchDelete(){this.submitting||!this.setOfCheckedId.size||this.modal.info({nzTitle:m("_confirmDel"),nzOnOk:()=>{this.submitting=!0,k({data:this.dataList.filter(t=>this.setOfCheckedId.has(t.extra.uuid))}).then(t=>{this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1,this.setOfCheckedId.clear()})}})}handleDelete(t){this.submitting=!0,k({data:[this.dataList[t]]}).then(e=>{this.dataList=e.data?.data||[]}).finally(()=>{this.submitting=!1})}getUserCollect(){this.submitting=!0,K().then(t=>{this.isPermission=!0,this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||($(this.authCode),this.getUserCollect())}handleCreate(t,e){let s=this,{oneIndex:c,twoIndex:u,threeIndex:x}=P(t.parentId);v.emit("CREATE_WEB",{detail:t,oneIndex:c,twoIndex:u,threeIndex:x,isMove:!0}),v.emit("SET_CREATE_WEB",{detail:null,callback(){s.handleDelete(e)}})}handleDeleteWeb(t,e){this.modal.info({nzTitle:m("_confirmDel"),nzOnOk:()=>{Q(t.id)&&this.message.success(m("_delSuccess")),this.handleDelete(e)}})}handleUpdateWeb(t){v.emit("CREATE_WEB",{detail:t})}handleClick(t,e){t.extra.type===1?this.handleCreate(t,e):t.extra.type===3?this.handleDeleteWeb(t,e):t.extra.type===2&&this.handleUpdateWeb(t)}handleSubmit(){this.submitting||this.modal.info({nzTitle:m("_syncDataOut"),nzOkText:m("_confirmSync"),nzContent:m("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,G({message:"update db",content:JSON.stringify(F),path:M}).then(()=>{this.message.success(m("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(t,e){return e.id}static \u0275fac=function(e){return new(e||r)(S(z),S(y))};static \u0275cmp=D({type:r,selectors:[["user-collect"]],features:[w([z,y])],decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["nz-button","","nzType","primary","style","margin-right: 20px",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 color-red font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],[3,"nzCheckedChange","nzChecked"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",2,"margin-right","20px",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","color-red","font-bold"],[3,"click"],[3,"src","name"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],[3,"data"]],template:function(e,s){e&1&&(n(0,"nz-spin",1),C(1,pe,32,19,"div",2),a()),e&2&&(l("nzSpinning",s.submitting),i(),l("ngIf",s.isPermission))},dependencies:[L,N,O,q,J,j,R,W,U,re,ne,Y,ee,Z,oe,ie,ae,te,H,X],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{E as default};
