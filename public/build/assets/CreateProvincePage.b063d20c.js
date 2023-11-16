import{_ as c}from"./InputError.b2670c17.js";import{_ as f,a as p}from"./TextInput.15c040d1.js";import{_ as u}from"./PrimaryButton.8929cc5e.js";import{B as _,b as w,d as a,f as s,g as b,n as v,C as g,r as i,o as V,s as y}from"./app.4da21ac3.js";import{_ as x}from"./ProvinceList.3d2bb4c3.js";import{A as P}from"./AdminLayout.48f23481.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import"./combobox.d95f5ac2.js";import"./transition.11289989.js";import"./Dropdown.f2c554b9.js";import"./eprris.ccf75d97.js";const B={layout:P,components:{InputError:c,InputLabel:f,PrimaryButton:u,TextInput:p,ProvinceList:x},setup(){let m=_({name:"",email:"",password:"",password_confirmation:"",terms:!1});return{form:m,submit:()=>{console.log("sbumit as prov"),m.post(route("register"),{onSuccess:()=>m.reset("password","password_confirmation")})}}}},k={class:"mt-4"},C={class:"mt-4"},E={class:"mt-4"},L={class:"flex items-center justify-end mt-4"},N=y(" Register New Province ");function q(m,e,T,o,U,A){const t=i("InputLabel"),l=i("TextInput"),n=i("InputError"),d=i("PrimaryButton");return V(),w("form",{onSubmit:e[4]||(e[4]=g((...r)=>o.submit&&o.submit(...r),["prevent"]))},[a("div",null,[s(t,{for:"name",value:"Province Name"}),s(l,{id:"email",type:"text",class:"mt-1 block w-full",modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.name=r),required:"",autocomplete:"username"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o.form.errors.name},null,8,["message"])]),a("div",k,[s(t,{for:"email",value:"Email"}),s(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o.form.errors.email},null,8,["message"])]),a("div",C,[s(t,{for:"password",value:"Password"}),s(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o.form.errors.password},null,8,["message"])]),a("div",E,[s(t,{for:"password_confirmation",value:"Confirm Password"}),s(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o.form.password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=r=>o.form.password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o.form.errors.password_confirmation},null,8,["message"])]),a("div",L,[s(d,{class:v(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:b(()=>[N]),_:1},8,["class","disabled"])])],32)}const O=I(B,[["render",q]]);export{O as default};
