import{z as j,I as ze,c as v,bB as We,aU as U,aB as H,bC as I,aW as ye,E as w,p as B,L as Y,J as me,bn as Xe,t as p,ay as Je,bD as Qe,S as F,m as N,f as E,g as T,h as R,b as d,B as Z,$ as Ye,D as Ze,a0 as ge,a1 as et,bE as tt,b4 as D,i as Se,aR as be,aa as he,j as pe,k as Ce,b6 as nt,l as ke,b3 as we,aS as at,bb as lt,H as it,x as Ie,q as Ae,b8 as st,aV as Ve,ab as Pe,s as Le,v as Be,bF as rt,aG as ut,bc as ot,F as ue,be as oe,a2 as ce,X as ct,O as de,aQ as dt,bs as V,aw as Oe,n as vt,A as ft,bl as yt}from"./index-Btxrn7MJ.js";import{V as mt}from"./VDivider-C3Xre6YB.js";function gt(){const e=j(!1);return ze(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const ee=Symbol.for("vuetify:list");function Me(){const e=U(ee,{hasPrepend:j(!1),updateHasPrepend:()=>null}),i={hasPrepend:j(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return H(ee,i),e}function xe(){return U(ee,null)}const ne=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=I(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const s of ye(t))a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},Fe=e=>{const i=ne(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=I(a);const u=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:u})},in:(n,l,a)=>{let s=new Set;if(n!=null){const u=ye(n);u.length&&(s=i.in(u.slice(0,1),l,a))}return s},out:(n,l,a)=>i.out(n,l,a)}},St=e=>{const i=ne(e);return{activate:n=>{let{id:l,activated:a,children:s,...u}=n;return l=I(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...u})},in:i.in,out:i.out}},bt=e=>{const i=Fe(e);return{activate:n=>{let{id:l,activated:a,children:s,...u}=n;return l=I(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...u})},in:i.in,out:i.out}},ht={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},je={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},pt={open:je.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},ae=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=I(n),e&&!l){const s=Array.from(a.entries()).reduce((u,h)=>{let[y,m]=h;return m==="on"&&u.push(y),u},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},Te=e=>{const i=ae(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=I(a);const u=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:u})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},Ct=e=>{const i=ae(e);return{select:n=>{let{id:l,selected:a,children:s,...u}=n;return l=I(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...u})},in:i.in,out:i.out}},kt=e=>{const i=Te(e);return{select:n=>{let{id:l,selected:a,children:s,...u}=n;return l=I(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...u})},in:i.in,out:i.out}},wt=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:u}=t;n=I(n);const h=new Map(a),y=[n];for(;y.length;){const S=y.shift();a.set(S,l?"on":"off"),s.has(S)&&y.push(...s.get(S))}let m=u.get(n);for(;m;){const S=s.get(m),b=S.every(o=>a.get(o)==="on"),r=S.every(o=>!a.has(o)||a.get(o)==="off");a.set(m,b?"on":r?"off":"indeterminate"),m=u.get(m)}return e&&!l&&Array.from(a.entries()).reduce((b,r)=>{let[o,c]=r;return c==="on"&&b.push(o),b},[]).length===0?h:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},G=Symbol.for("vuetify:nested"),_e={id:j(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},It=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),At=e=>{let i=!1;const t=w(new Map),n=w(new Map),l=Y(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return St(e.mandatory);case"single-leaf":return bt(e.mandatory);case"independent":return ne(e.mandatory);case"single-independent":default:return Fe(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return kt(e.mandatory);case"leaf":return Ct(e.mandatory);case"independent":return ae(e.mandatory);case"single-independent":return Te(e.mandatory);case"classic":default:return wt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return pt;case"single":return ht;case"multiple":default:return je}}),h=Y(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),y=Y(e,"selected",e.selected,r=>s.value.in(r,t.value,n.value),r=>s.value.out(r,t.value,n.value));me(()=>{i=!0});function m(r){const o=[];let c=r;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const S=Xe("nested"),b={id:j(),root:{opened:l,activatable:p(e,"activatable"),selectable:p(e,"selectable"),activated:h,selected:y,selectedValues:v(()=>{const r=[];for(const[o,c]of y.value.entries())c==="on"&&r.push(o);return r}),register:(r,o,c)=>{o&&r!==o&&n.value.set(r,o),c&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(i)return;t.value.delete(r);const o=n.value.get(r);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(f=>f!==r))}n.value.delete(r),l.value.delete(r)},open:(r,o,c)=>{S.emit("click:open",{id:r,value:o,path:m(r),event:c});const f=u.value.open({id:r,value:o,opened:new Set(l.value),children:t.value,parents:n.value,event:c});f&&(l.value=f)},openOnSelect:(r,o,c)=>{const f=u.value.select({id:r,value:o,selected:new Map(y.value),opened:new Set(l.value),children:t.value,parents:n.value,event:c});f&&(l.value=f)},select:(r,o,c)=>{S.emit("click:select",{id:r,value:o,path:m(r),event:c});const f=s.value.select({id:r,value:o,selected:new Map(y.value),children:t.value,parents:n.value,event:c});f&&(y.value=f),b.root.openOnSelect(r,o,c)},activate:(r,o,c)=>{if(!e.activatable)return b.root.select(r,!0,c);S.emit("click:activate",{id:r,value:o,path:m(r),event:c});const f=a.value.activate({id:r,value:o,activated:new Set(h.value),children:t.value,parents:n.value,event:c});f&&(h.value=f)},children:t,parents:n}};return H(G,b),b.root},De=(e,i)=>{const t=U(G,_e),n=Symbol(Je()),l=v(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,u)=>t.root.open(l.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(l.value,s,u),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(s,u)=>t.root.activate(l.value,s,u),isActivated:v(()=>t.root.activated.value.has(I(l.value))),select:(s,u)=>t.root.select(l.value,s,u),isSelected:v(()=>t.root.selected.value.get(I(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),me(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&H(G,a),a},Vt=()=>{const e=U(G,_e);H(G,{...e,isGroupActivator:!0})},Pt=Qe({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Vt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Lt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:F,default:"$collapse"},expandIcon:{type:F,default:"$expand"},prependIcon:F,appendIcon:F,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...E()},"VListGroup"),ve=T()({name:"VListGroup",props:Lt(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=De(p(e,"value"),!0),s=v(()=>`v-list-group--id-${String(a.value)}`),u=xe(),{isBooted:h}=gt();function y(r){r.stopPropagation(),l(!n.value,r)}const m=v(()=>({onClick:y,class:"v-list-group__header",id:s.value})),S=v(()=>n.value?e.collapseIcon:e.expandIcon),b=v(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}));return R(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(Z,{defaults:b.value},{default:()=>[d(Pt,null,{default:()=>[t.activator({props:m.value,isOpen:n.value})]})]}),d(Ye,{transition:{component:Ze},disabled:!h.value},{default:()=>{var r;return[ge(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[et,n.value]])]}})]})),{isOpen:n}}}),Bt=B({opacity:[Number,String],...N(),...E()},"VListItemSubtitle"),Ot=T()({name:"VListItemSubtitle",props:Bt(),setup(e,i){let{slots:t}=i;return R(()=>d(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Mt=tt("v-list-item-title"),xt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...Se(),...N(),...be(),...he(),...pe(),...Ce(),...nt(),...E(),...ke(),...we({variant:"text"})},"VListItem"),fe=T()({name:"VListItem",directives:{Ripple:at},props:xt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=lt(e,t),s=v(()=>e.value===void 0?a.href.value:e.value),{activate:u,isActivated:h,select:y,isSelected:m,isIndeterminate:S,isGroupActivator:b,root:r,parent:o,openOnSelect:c}=De(s,!1),f=xe(),P=v(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||(r.activatable.value?h.value:m.value))}),_=v(()=>e.link!==!1&&a.isLink.value),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!f&&(r.selectable.value||r.activatable.value||e.value!=null))),O=v(()=>e.rounded||e.nav),M=v(()=>e.color??e.activeColor),K=v(()=>({color:P.value?M.value??e.baseColor:e.baseColor,variant:e.variant}));it(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&r.open(o.value,!0),g&&c(g)},{immediate:!0});const{themeClasses:q}=Ie(e),{borderClasses:z}=Ae(e),{colorClasses:W,colorStyles:X,variantClasses:L}=st(K),{densityClasses:C}=Ve(e),{dimensionStyles:x}=Pe(e),{elevationClasses:Re}=Le(e),{roundedClasses:$e}=Be(O),Ue=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=v(()=>({isActive:P.value,select:y,isSelected:m.value,isIndeterminate:S.value}));function le(g){var $;l("click",g),A.value&&(($=a.navigate)==null||$.call(a,g),!b&&(r.activatable.value?u(!h.value,g):(r.selectable.value||e.value!=null)&&y(!m.value,g)))}function He(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),le(g))}return R(()=>{const g=_.value?"a":e.tag,$=n.title||e.title!=null,Ke=n.subtitle||e.subtitle!=null,ie=!!(e.appendAvatar||e.appendIcon),qe=!!(ie||n.append),se=!!(e.prependAvatar||e.prependIcon),Q=!!(se||n.prepend);return f==null||f.updateHasPrepend(Q),e.activeColor&&rt("active-color",["color","base-color"]),ge(d(g,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Q&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},q.value,z.value,W.value,C.value,Re.value,Ue.value,$e.value,L.value,e.class],style:[X.value,x.value,e.style],href:a.href.value,tabindex:A.value?f?-2:0:void 0,onClick:le,onKeydown:A.value&&!_.value&&He},{default:()=>{var re;return[ot(A.value||P.value,"v-list-item"),Q&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(Z,{key:"prepend-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=n.prepend)==null?void 0:k.call(n,J.value)]}}):d(ue,null,[e.prependAvatar&&d(oe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ce,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[$&&d(Mt,{key:"title"},{default:()=>{var k;return[((k=n.title)==null?void 0:k.call(n,{title:e.title}))??e.title]}}),Ke&&d(Ot,{key:"subtitle"},{default:()=>{var k;return[((k=n.subtitle)==null?void 0:k.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(re=n.default)==null?void 0:re.call(n,J.value)]),qe&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(Z,{key:"append-defaults",disabled:!ie,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=n.append)==null?void 0:k.call(n,J.value)]}}):d(ue,null,[e.appendIcon&&d(ce,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(oe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[ut("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:h,isGroupActivator:b,isSelected:m,list:f,select:y}}}),Ft=B({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...E()},"VListSubheader"),jt=T()({name:"VListSubheader",props:Ft(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=ct(p(e,"color"));return R(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&d("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Tt=B({items:Array,returnObject:Boolean},"VListChildren"),Ge=T()({name:"VListChildren",props:Tt(),setup(e,i){let{slots:t}=i;return Me(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var b,r;let{children:s,props:u,type:h,raw:y}=a;if(h==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:u}))??d(mt,u,null);if(h==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:u}))??d(jt,u,null);const m={subtitle:t.subtitle?o=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...o,item:y})}:void 0,prepend:t.prepend?o=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...o,item:y})}:void 0,append:t.append?o=>{var c;return(c=t.append)==null?void 0:c.call(t,{...o,item:y})}:void 0,title:t.title?o=>{var c;return(c=t.title)==null?void 0:c.call(t,{...o,item:y})}:void 0},S=ve.filterProps(u);return s?d(ve,de({value:u==null?void 0:u.value},S),{activator:o=>{let{props:c}=o;const f={...u,...c,value:e.returnObject?y:u.value};return t.header?t.header({props:f}):d(fe,f,m)},default:()=>d(Ge,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):d(fe,de(u,{value:e.returnObject?y:u.value}),m)}))}}}),_t=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:dt}},"list-items");function te(e,i){const t=V(i,e.itemTitle,i),n=V(i,e.itemValue,t),l=V(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Oe(i,["children"]):i:void 0:V(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Ne(e,l):void 0,raw:i}}function Ne(e,i){const t=[];for(const n of i)t.push(te(e,n));return t}function Ut(e){const i=v(()=>Ne(e,e.items)),t=v(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?te(e,s):i.value.find(u=>e.valueComparator(s,u.value))||te(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:u}=s;return u}):a.map(s=>{let{value:u}=s;return u})}return{items:i,transformIn:n,transformOut:l}}function Dt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Gt(e,i){const t=V(i,e.itemType,"item"),n=Dt(i)?i:V(i,e.itemTitle),l=V(i,e.itemValue,void 0),a=V(i,e.itemChildren),s=e.itemProps===!0?Oe(i,["children"]):V(i,e.itemProps),u={title:n,value:l,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?Ee(e,a):void 0,raw:i}}function Ee(e,i){const t=[];for(const n of i)t.push(Gt(e,n));return t}function Nt(e){return{items:v(()=>Ee(e,e.items))}}const Et=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...It({selectStrategy:"single-leaf",openStrategy:"list"}),...Se(),...N(),...be(),...he(),...pe(),itemType:{type:String,default:"type"},..._t(),...Ce(),...E(),...ke(),...we({variant:"text"})},"VList"),Ht=T()({name:"VList",props:Et(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Nt(e),{themeClasses:l}=Ie(e),{backgroundColorClasses:a,backgroundColorStyles:s}=vt(p(e,"bgColor")),{borderClasses:u}=Ae(e),{densityClasses:h}=Ve(e),{dimensionStyles:y}=Pe(e),{elevationClasses:m}=Le(e),{roundedClasses:S}=Be(e),{children:b,open:r,parents:o,select:c}=At(e),f=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),P=p(e,"activeColor"),_=p(e,"baseColor"),A=p(e,"color");Me(),ft({VListGroup:{activeColor:P,baseColor:_,color:A,expandIcon:p(e,"expandIcon"),collapseIcon:p(e,"collapseIcon")},VListItem:{activeClass:p(e,"activeClass"),activeColor:P,baseColor:_,color:A,density:p(e,"density"),disabled:p(e,"disabled"),lines:p(e,"lines"),nav:p(e,"nav"),slim:p(e,"slim"),variant:p(e,"variant")}});const O=j(!1),M=w();function K(C){O.value=!0}function q(C){O.value=!1}function z(C){var x;!O.value&&!(C.relatedTarget&&((x=M.value)!=null&&x.contains(C.relatedTarget)))&&L()}function W(C){const x=C.target;if(!(!M.value||["INPUT","TEXTAREA"].includes(x.tagName))){if(C.key==="ArrowDown")L("next");else if(C.key==="ArrowUp")L("prev");else if(C.key==="Home")L("first");else if(C.key==="End")L("last");else return;C.preventDefault()}}function X(C){O.value=!0}function L(C){if(M.value)return yt(M.value,C)}return R(()=>d(e.tag,{ref:M,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,u.value,h.value,m.value,f.value,S.value,e.class],style:[s.value,y.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:K,onFocusout:q,onFocus:z,onKeydown:W,onMousedown:X},{default:()=>[d(Ge,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:c,focus:L,children:b,parents:o}}});export{Ht as V,fe as a,Ut as b,_t as m,gt as u};
