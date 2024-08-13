import{_ as H,am as O,M as u,r as Z,o as D,f as _,b as l,w as t,i as G,aw as J,F as Q,av as W,V as X,d as T,Z as y,ao as k,ax as R,ay as Y,I as ee,a as ae,aq as le,az as te,e as o,h as se,aA as oe,ar as re,aB as ne,aC as ue,aa as ie}from"./index-H5nSHe2R.js";import{c as de,a as q,d as me,u as ve,e as S}from"./vee-validate.esm-Bd_RcH4g.js";import{b as z}from"./route-block-B_A1xBdJ.js";import{V as pe,a as ge}from"./VDataTableServer-tjP3O-at.js";import{V as ce}from"./VForm-DoCnHMJ9.js";import{V as fe}from"./VTextarea-Cd2dUmjR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VDataTable-C0TuIkAp.js";import"./VList-CYUSQiv9.js";import"./ssrBoot-D0RtTzDF.js";const L={__name:"serve",setup(Ve){const{apiAuth:x}=W(),w=O(),U=u(null),n=u({open:!1,id:""}),$=r=>{r?(n.value.id=r._id,p.value.value=r.name,g.value.value=r.description,c.value.value=r.sell):n.value.id="",n.value.open=!0},A=()=>{n.value.open=!1,K(),U.value.deleteFileRecord()},N=de({name:q().required("業主名稱必填"),description:q().required("說明必填"),sell:me()}),{handleSubmit:j,isSubmitting:C,resetForm:K}=ve({validationSchema:N,initialValues:{name:"",description:"",sell:!0}}),p=S("name"),g=S("description"),c=S("sell"),v=u([]),I=u([]),h=j(async r=>{var e,d,a;if(!((e=v.value[0])!=null&&e.error)&&!(n.value.id.length===0&&v.value.length<1))try{const s=new FormData;s.append("name",r.name),s.append("description",r.description),s.append("sell",r.sell),v.value.length>0&&s.append("image",v.value[0].file),n.value.id===""?await x.post("/serve",s):await x.patch("/serve/"+n.value.id,s),w({text:n.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"blue"}}),A(),i(!0)}catch(s){console.log(s),w({text:((a=(d=s==null?void 0:s.response)==null?void 0:d.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),B=u(10),f=u([{key:"createdAt",order:"desc"}]),V=u(1),F=u([]),E=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"業務",align:"center",sortable:!0,key:"name"},{title:"新增",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"action"}],P=u(!0),M=u(0),b=u(""),i=async r=>{var e,d,a,s;r&&(V.value=1),P.value=!0;try{const{data:m}=await x.get("/serve/all",{params:{page:V.value,itemsPerPage:B.value,sortBy:((e=f.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((d=f.value[0])==null?void 0:d.order)||"desc",search:b.value}});F.value.splice(0,F.value.length,...m.result.data),M.value=m.result.total}catch(m){console.log(m),w({text:((s=(a=m==null?void 0:m.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}P.value=!1};return i(),(r,e)=>{const d=Z("vue-file-agent");return D(),_(Q,null,[l(G,{style:{"margin-bottom":"10vh"}},{default:t(()=>[l(X,null,{default:t(()=>[l(T,{cols:"12"},{default:t(()=>[l(T,{cols:"12",class:"d-flex justify-end"},{default:t(()=>[l(y,{color:"black",onClick:e[0]||(e[0]=a=>$(null))},{default:t(()=>[k("新增服務")]),_:1})]),_:1}),l(pe,{"items-per-page":B.value,"onUpdate:itemsPerPage":[e[4]||(e[4]=a=>B.value=a),e[7]||(e[7]=a=>i(!1))],"sort-by":f.value,"onUpdate:sortBy":[e[5]||(e[5]=a=>f.value=a),e[8]||(e[8]=a=>i(!1))],page:V.value,"onUpdate:page":[e[6]||(e[6]=a=>V.value=a),e[9]||(e[9]=a=>i(!1))],items:F.value,headers:E,loading:P.value,"items-length":M.value,search:b.value,hover:""},{top:t(()=>[l(R,{label:"搜尋",modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=a=>b.value=a),"append-icon":"mdi-magnify",onClickAppend:e[2]||(e[2]=a=>i(!0)),onKeydown:e[3]||(e[3]=Y(a=>i(!0),["enter"])),class:"custom-search"},null,8,["modelValue"])]),"item.image":t(({value:a})=>[l(ee,{src:a,height:"55px"},null,8,["src"])]),"item.sell":t(({value:a})=>[a?(D(),ae(ie,{key:0,icon:"mdi-check"})):le("",!0)]),"item.action":t(({item:a})=>[l(y,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:s=>$(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(J,{modelValue:n.value.open,"onUpdate:modelValue":e[15]||(e[15]=a=>n.value.open=a),persistent:"",width:"500"},{default:t(()=>[l(ce,{onSubmit:te(o(h),["prevent"]),disabled:o(C)},{default:t(()=>[l(se,null,{default:t(()=>[l(oe,null,{default:t(()=>[k(re(n.value.id?"編輯":"新增"),1)]),_:1}),l(ne,null,{default:t(()=>[l(R,{label:"名稱",modelValue:o(p).value.value,"onUpdate:modelValue":e[10]||(e[10]=a=>o(p).value.value=a),"error-messages":o(p).errorMessage.value},null,8,["modelValue","error-messages"]),l(ge,{label:"新增",modelValue:o(c).value.value,"onUpdate:modelValue":e[11]||(e[11]=a=>o(c).value.value=a),"error-messages":o(c).errorMessage.value},null,8,["modelValue","error-messages"]),l(fe,{label:"說明",modelValue:o(g).value.value,"onUpdate:modelValue":e[12]||(e[12]=a=>o(g).value.value=a),"error-messages":o(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(d,{modelValue:v.value,"onUpdate:modelValue":e[13]||(e[13]=a=>v.value=a),"raw-model-value":I.value,"onUpdate:rawModelValue":e[14]||(e[14]=a=>I.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:U},null,8,["modelValue","raw-model-value"])]),_:1}),l(ue,null,{default:t(()=>[l(y,{color:"red",loading:o(C),onClick:A},{default:t(()=>[k("取消")]),_:1},8,["loading"]),l(y,{color:"green",type:"submit",loading:o(C)},{default:t(()=>[k("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof z=="function"&&z(L);const Ue=H(L,[["__scopeId","data-v-e42e2386"]]);export{Ue as default};
