import{_ as f}from"./eprris.ccf75d97.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,b as i,d as r,f as l,g as d,u as t,L as b,i as _,v,x as g,a as x,c as h,H as y,E as n,n as c}from"./app.4da21ac3.js";import w from"./ResgisterAsMunicipality.04b97978.js";import k from"./RegisterAsProvince.cf70fa59.js";import"./InputError.b2670c17.js";import"./TextInput.15c040d1.js";import"./PrimaryButton.8929cc5e.js";const $=s=>(v("data-v-03df099f"),s=s(),g(),s),F={class:"min-h-screen flex flex-col bg-slate-50 sm:justify-center items-center pt-6 sm:pt-0"},L=$(()=>r("img",{src:f,class:"w-full"},null,-1)),B={class:"w-full bg-white sm:max-w-md mt-6 px-6 py-4 bg-whiteoverflow-hidden sm:rounded-lg cstm-shadow"},C={__name:"GuestLayout",setup(s){return(e,p)=>(o(),i("div",F,[r("div",null,[l(t(b),{href:"/"},{default:d(()=>[L]),_:1})]),r("div",B,[_(e.$slots,"default",{},void 0,!0)])]))}},I=m(C,[["__scopeId","data-v-03df099f"]]),S={class:"nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4",id:"tabs-tabFill",role:"tablist"},A={key:0},G={key:1},P={__name:"Register",props:{municipalities:Array,provinces:Array},setup(s){let e=x(!0);return(p,a)=>(o(),h(I,null,{default:d(()=>[l(t(y),{title:"Register"}),r("ul",S,[r("li",{class:"nav-item flex-auto text-center",role:"presentation",onClick:a[0]||(a[0]=u=>n(e)?e.value=!t(e):e=!t(e))},[r("a",{class:c([{"border-b-orange-500":t(e)},"cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-gray-100 focus:border-transparent"]),id:"tabs-home-tabFill","data-bs-toggle":"pill","data-bs-target":"#tabs-homeFill",role:"tab","aria-controls":"tabs-homeFill","aria-selected":"true"},"Municipality",2)]),r("li",{class:"nav-item flex-auto text-center",role:"presentation",onClick:a[1]||(a[1]=u=>n(e)?e.value=!t(e):e=!t(e))},[r("a",{class:c([{"border-b-orange-500":!t(e)},"cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-gray-100 focus:border-transparent"]),id:"tabs-profile-tabFill","data-bs-toggle":"pill","data-bs-target":"#tabs-profileFill",role:"tab","aria-controls":"tabs-profileFill","aria-selected":"false"}," Province",2)])]),t(e)?(o(),i("div",A,[l(w,{provinces:s.provinces},null,8,["provinces"])])):(o(),i("div",G,[l(k,{provinces:s.provinces},null,8,["provinces"])]))]),_:1}))}};export{P as default};