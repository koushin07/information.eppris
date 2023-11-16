import{C as S}from"./ContentBox.b05d3d4e.js";import{L as O}from"./MunicipalityLayout.87377acb.js";import{H as P,B as U,a as u,D as V,c as z,g as j,R as H,U as h,r as m,o as p,d as n,f as g,b as x,q as C,t as d,F,k as L}from"./app.4da21ac3.js";import{B as A}from"./BorrowHistory.8d0213b9.js";import{_ as E}from"./UnfinishModal.697814e9.js";import{h as M}from"./moment.9709ab41.js";import{_ as N}from"./PersonInfoModal.015e8447.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PendingTransactions.6e546873.js";import"./Dropdown.f2c554b9.js";import"./eprris.ccf75d97.js";/* empty css                                                                          */import"./EditHistory.8338df00.js";import"./dialog.03b76927.js";import"./transition.11289989.js";const R={layout:O,components:{ContentBox:S,Head:P,BorrowHistory:A,UnifinishModal:E,PersonInfoModal:N},props:{provinces:Object,unfinish:Object},setup({unfinish:I}){const o=U({id:null,equipment_name:"",serial_number:null,unit:null,code:"",model_number:null,asset_id:null,quantity:null}),v=[{name:"subject"},{name:"equipment qty"},{name:"requested qty"},{name:"date"},{name:"pending request"},{name:"personnel"},{name:"action"}],a=async()=>{o.post(route("api.attrs"),{onError:t=>{alert(Object.values(t))},preserveScroll:!0,onFinish:()=>{r.value=!r.value}})},y=u(""),r=u(!1),b=u(!1),_=u(),f=u(),w=(t,s)=>{o.equipment_name=t,o.id=s,y.value=t,r.value=!r.value};V(_,t=>{h.Inertia.get(L().url.value,{date:t},{preserveState:!0})}),V(f,t=>{h.Inertia.get(L().url.value,{filter:t},{preserveState:!0})});const k=async(t,s,i,l,c)=>{await H.post("/api/accepted",{quantity:c,equipment:t,borrower_id:s,notif_id:i,municipality:l}).then(B=>{h.Inertia.reload()})},e=async(t,s,i,l,c)=>{console.log(c),await H.post("/api/deny",{quantity:c,equipment:t,borrower_id:s,notif_id:i,municipality:l}).then(B=>{h.Inertia.reload({only:["notifications"]})})};return{convertedIncident:Object.values(I.data).map(t=>t.incident),tableHeader:v,accept:k,deny:e,equipmentAttr:o,toggleForm:r,openForm:w,selectedEquipment:y,handleSubmit:a,toggleBorrowing:b,moment:M,date:_,filter:f,fullname:(t,s,i,l)=>{const c=t||"",B=s||"",D=i?i.charAt(0):"";return`${B} ${D} ${c} ${l||""}`}}}},G={class:"flex flex-col space-y-10"},J={class:"grid grid-cols-2 w-2/3 gap-2"},K={class:"table-auto w-full text-sm border-x text-gray-500 border-orange-200 dark:text-gray-400"},Q={class:"text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400"},T={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},W={scope:"row",class:"text-center p-4"},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},ne={class:"flex justify-center"},oe={class:"text-center"},ae={class:"flex justify-center"},se=n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})],-1);function re(I,o,v,a,y,r){const b=m("v-select"),_=m("Datepicker"),f=m("person-info-modal"),w=m("inertia-link"),k=m("Content-box");return p(),z(k,null,{default:j(()=>[n("div",G,[n("div",J,[g(b,{options:a.convertedIncident,modelValue:a.filter,"onUpdate:modelValue":o[0]||(o[0]=e=>a.filter=e),class:"w-full h-8 rounded cursor-pointer",placeholder:"Incident"},null,8,["options","modelValue"]),g(_,{modelValue:a.date,"onUpdate:modelValue":o[1]||(o[1]=e=>a.date=e),class:"w-full h-8 rounded",placeholder:"Input Date Here"},null,8,["modelValue"])]),n("table",K,[n("thead",Q,[n("tr",null,[(p(!0),x(F,null,C(a.tableHeader,(e,q)=>(p(),x("th",{scope:"col",class:"py-3 px-6",key:q},d(e.name),1))),128))])]),n("tbody",null,[(p(!0),x(F,null,C(v.unfinish.data,(e,q)=>(p(),x("tr",T,[n("td",W,d(e.incident),1),n("td",X,d(e.count),1),n("td",Y,d(e.authorize_quantity),1),n("td",Z,d(a.moment(e.created_at).format("LL")),1),n("td",ee,d(e.pendings),1),n("td",te,[n("div",ne,[g(f,{body:e},null,8,["body"])])]),n("td",oe,[n("div",ae,[g(w,{class:"text-blue-400 underline",href:"/municipality/partials/"+e.id,data:{incident:e.incident,summary:e.incident_summary},method:"get"},{default:j(()=>[se]),_:2},1032,["href","data"])])])]))),256))])])])]),_:1})}const qe=$(R,[["render",re]]);export{qe as default};