import{B as p,a as x,o as n,b as a,d as e,F as _,q as m,t as r,C as v,z as i,W as c,e as y}from"./app.4da21ac3.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const h={props:{borrowings:Array},setup(){const l=p({id:null,equipment:"",serviceable:null,unusable:null,poor:null}),t=x(0);return{status:l,quantity:t,openBorrowing:(u,b,s)=>{console.log(s),t.value=s,l.id=b,l.equipment=u},submitStatus:async()=>{console.log(t.value),t.value>=l.serviceable+l.poor+l.unusable?l.post(route("municipality.history.store")):alert(`only ${t.value} equipment you lent`)}}}},w={class:"grid grid-cols-5 gap-5 place-content-center"},q={class:"flex flex-col z-0 justify-between col-span-2"},B={class:"flex flex-col overflow-hidden h-[480px]"},S={class:"flex flex-col justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar"},j=["onClick"],k={class:"grid grid-cols-1 text-start"},V={class:"font-bold text-base text-gray-700 uppercase"},z={class:"flex flex-row space-x-2"},C={class:"text-xs text-gray-700 uppercase text-end"},U={class:"text-xs text-gray-700 uppercase"},F={class:"flex flex-col z-0 h-full justify-between col-span-3"},D={class:"flex flex-col overflow-hidden h-full"},M={class:"flex flex-row justify-between"},N={class:"font-bold text-2xl font-sans antialiased capitalize"},A={class:"grid gap-10 h-full w-full"},E={class:"grid grid-cols-2 gap-10"},H={class:"flex flex-col"},L=e("label",{class:"text-sm font-bold"},"Serviceable",-1),P={class:"flex flex-col"},T=e("label",{class:"text-sm font-bold"},"Poor",-1),W={class:"flex flex-col"},G=e("label",{class:"text-sm font-bold"},"Unusable",-1),I=e("div",{class:"flex justify-end col-span-2"},[e("button",{type:"submit",class:"bg-orange-500 px-11 py-2 rounded-xl hover:bg-orange-700"},"save")],-1);function J(l,t,d,o,u,b){return n(),a("div",w,[e("div",q,[e("div",B,[e("div",S,[(n(!0),a(_,null,m(d.borrowings,(s,f)=>(n(),a("button",{key:f,onClick:K=>o.openBorrowing(s.equipment_name,s.id,s.quantity),class:"flex flex-col border-b p-4 hover:bg-slate-200 border-grey-200 last:border-transparent"},[e("div",k,[e("span",V,r(s.name),1),e("div",z,[e("span",C,r(s.quantity),1),e("span",U,r(s.equipment_name),1)])])],8,j))),128))])])]),e("div",F,[e("div",D,[o.status.id?(n(),a("form",{key:0,onSubmit:t[3]||(t[3]=v((...s)=>o.submitStatus&&o.submitStatus(...s),["prevent"])),class:"flex flex-col animate-fade-in-down justify-between overflow-y-auto border-2 rounded-lg space-y-2 scrollbar p-5"},[e("div",M,[e("h1",N,r(o.status.equipment),1)]),e("div",A,[e("div",E,[e("div",H,[L,i(e("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=s=>o.status.serviceable=s),class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,512),[[c,o.status.serviceable]])]),e("div",P,[T,i(e("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=s=>o.status.poor=s),class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,512),[[c,o.status.poor]])]),e("div",W,[G,i(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=s=>o.status.unusable=s),class:"border-b-2 border-0 px-2 py-1 focus:ring-0 focus:border-b-blue-600"},null,512),[[c,o.status.unusable]])])]),I])],32)):y("",!0)])])])}const R=g(h,[["render",J]]);export{R as B};
