import{a as v,h as V,D as k,o as n,c as h,g as o,f as i,d as r,E as f,u as t,b as m,e as _,q as C,n as p,t as L,F as B,s as E,r as N}from"./app.4da21ac3.js";import{B as j,L as A,j as q,H as F,A as H}from"./combobox.d95f5ac2.js";import{f as S}from"./transition.11289989.js";const D=E("Equipment"),O={class:"relative mt-1"},T={class:"relative w-full cursor-default scrollbar overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"},z=r("i",{class:"fa-solid fa-chevron-down text-gray-400","aria-hidden":"true"},null,-1),R={key:0,class:"relative cursor-default select-none py-2 px-4 text-gray-700"},U=r("i",{class:"fa-solid fa-check","aria-hidden":"true"},null,-1),G=[U],M={__name:"EquipmentList",props:{contents:Object,modelValue:[Object,Array,String]},emits:["submit"],setup(y,{emit:x}){const g=y;let s=v([]),a=v(""),b=V(()=>a.value===""?g.contents:g.contents.filter(c=>c.name.toLowerCase().replace(/\s+/g,"").includes(a.value.toLowerCase().replace(/\s+/g,""))));return k(s,c=>{x("submit",s.value)}),(c,l)=>{const w=N("ComboboxLabel");return n(),h(t(H),{modelValue:t(s),"onUpdate:modelValue":l[2]||(l[2]=e=>f(s)?s.value=e:s=e),multiple:""},{default:o(()=>[i(w,null,{default:o(()=>[D]),_:1}),r("div",O,[r("div",T,[i(t(j),{class:"w-full py-2 pl-3 pr-10 border-2 bg-transparent rounded-lg focus:outline-none focus:ring-0",displayValue:e=>e.name,onChange:l[0]||(l[0]=e=>f(a)?a.value=e.target.value:a=e.target.value),placeholder:"Search Here...."},null,8,["displayValue"]),i(t(A),{class:"absolute inset-y-0 right-0 flex items-center pr-2"},{default:o(()=>[z]),_:1})]),i(t(S),{leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",onAfterLeave:l[1]||(l[1]=e=>f(a)?a.value="":a="")},{default:o(()=>[i(t(q),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:o(()=>[t(b).length===0&&t(a)!==""?(n(),m("div",R," Nothing found. ")):_("",!0),(n(!0),m(B,null,C(t(b),e=>(n(),h(t(F),{as:"template",key:e.id,value:e},{default:o(({selected:d,active:u})=>[r("li",{class:p(["relative cursor-default select-none py-2 pl-10 pr-4",{"bg-teal-600 text-white":u,"text-gray-900":!u}])},[r("span",{class:p(["block truncate",{"font-medium":d,"font-normal":!d}])},L(e.name),3),d?(n(),m("span",{key:0,class:p(["absolute inset-y-0 left-0 flex items-center pl-3",{"text-white":u,"text-teal-600":!u}])},G,2)):_("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])}}};export{M as _};