import{_,u as f,c as v,r as V,o as l,a as k,w as a,b as t,V as g,d as n,e as x,f as C,g as h,F as w,h as b,i as B,j as I,n as L}from"./index-LLS26ABI.js";import{V as r,a as o,b as F}from"./VList-DnDcCP3k.js";import"./ssrBoot-YQgTLui-.js";const R={__name:"admin",setup($){const s=f(),c=I(),u=[{to:"/admin/products",text:"業績管理"},{to:"/admin/serve",text:"服務內容管理"},{to:"/",text:"回首頁"}],i=v(()=>`https://api.multiavatar.com/${s.account}.png`),d=()=>{s.logout(),c.push("/")};return(p,j)=>{const m=V("router-view");return l(),k(B,{fluid:"",class:"full-background"},{default:a(()=>[t(b,{class:"main-card"},{default:a(()=>[t(g,null,{default:a(()=>[t(n,{cols:"2",class:"sidebar"},{default:a(()=>[t(r,{class:"nav-link"},{default:a(()=>[t(o,{"prepend-avatar":i.value,title:x(s).account},null,8,["prepend-avatar","title"])]),_:1}),t(F),t(r,{class:"nav-link"},{default:a(()=>[(l(),C(w,null,h(u,e=>t(o,{key:e.to,to:e.to,title:e.text,class:L({"selected-item":p.$route.path===e.to})},null,8,["to","title","class"])),64)),t(o,{onClick:d,title:"登出",class:"logout-item"})]),_:1})]),_:1}),t(n,{cols:"10",class:"main-content"},{default:a(()=>[t(m)]),_:1})]),_:1})]),_:1})]),_:1})}}},E=_(R,[["__scopeId","data-v-242d2c05"]]);export{E as default};
