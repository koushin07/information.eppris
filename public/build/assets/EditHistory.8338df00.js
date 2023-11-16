import{B as m,o as b,b as p,d as s,t as i,u as o,z as n,W as d,X as _,C as f}from"./app.4da21ac3.js";const g=["onSubmit"],x={class:""},y={class:"px-4 py-5 bg-white sm:p-6"},v={class:"grid grid-cols-6 gap-6"},h={class:"col-span-6 sm:col-span-6"},w={class:"text-xl font-bold"},k={class:"col-span-6 flex flex-col"},U=s("span",{class:"text-sm text-slate-500"},"Returned Status",-1),q={class:"flex flex-row space-x-6 border-2 p-4 rounded-lg"},V={class:"col-span-6 sm:col-span-6 lg:col-span-2"},S=s("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Serviceable",-1),j={class:"col-span-6 sm:col-span-6 lg:col-span-2"},B=s("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Unserviceable",-1),E={class:"col-span-6 sm:col-span-6 lg:col-span-2"},M=s("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Poor",-1),C={class:"col-span-6 flex flex-col"},D=s("span",{class:"text-sm text-slate-500"},"Equipment Attribute",-1),F={class:"flex flex-col space-y-4 border-2 rounded-lg p-4"},N={class:"flex flex-row justify-around space-x-6"},R={class:"col-span-6 sm:col-span-6 lg:col-span-2 flex flex-col"},I=s("label",{for:"model_number",class:"block text-sm font-medium text-gray-700"},"Model Number",-1),O={class:"col-span-6 sm:col-span-3"},P=s("label",{for:"asset_id",class:"block text-sm font-medium text-gray-700"},"asset ID ",-1),W={class:"col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col"},z=s("label",{for:"serial_number",class:"block text-sm font-medium text-gray-700"},"Serial Number",-1),A={class:"flex flex-row justify-between space-x-6"},G={class:"flex flex-col col-span-6"},H={class:"col-span-6 sm:col-span-3 lg:col-span-2"},T=s("label",{for:"unit",class:"block text-sm font-medium text-gray-700"},"Unit ",-1),X={class:"col-span-6 sm:col-span-3"},J=s("label",{for:"code",class:"block text-sm font-medium text-gray-700"},"Code ",-1),K={class:"col-span-6 sm:col-span-3"},L=s("label",{for:"category",class:"block text-sm font-medium text-gray-700"},"Category",-1),Q={value:"none",selected:"",disabled:"",hidden:""},Y=s("option",null,"Water Rescue",-1),Z=s("option",null,"Fire and Rescue",-1),$=s("option",null,"Protective Gears",-1),ss=s("div",{class:"mr-7 flex justify-end"},[s("button",{type:"submit",class:"inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"}," return ")],-1),os={__name:"EditHistory",props:{body:Object},setup(a){const c=a,e=m({attrs:{code:"",category:"",unit:"",model_number:"",serial_number:"",asset_id:""},status:{serviceable:"",unserviceable:"",poor:""}});function u(){console.log(e),e.put("/api/partials/"+c.body.id,{onError:r=>{alert(Object.values(r))},onSuccess:()=>{Inertia.reload()}})}return(r,t)=>(b(),p("form",{onSubmit:f(u,["prevent"])},[s("div",x,[s("div",y,[s("div",v,[s("div",h,[s("span",w,i(o(e).name),1)]),s("div",k,[U,s("div",q,[s("div",V,[S,n(s("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[0]||(t[0]=l=>o(e).status.serviceable=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).status.serviceable]])]),s("div",j,[B,n(s("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[1]||(t[1]=l=>o(e).status.unserviceable=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).status.unserviceable]])]),s("div",E,[M,n(s("input",{type:"number",name:"model_number",id:"model_number","onUpdate:modelValue":t[2]||(t[2]=l=>o(e).status.poor=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).status.poor]])])])]),s("div",C,[D,s("div",F,[s("div",N,[s("div",R,[I,n(s("input",{type:"text",name:"model_number",id:"model_number","onUpdate:modelValue":t[3]||(t[3]=l=>o(e).attrs.model_number=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).attrs.model_number]])]),s("div",O,[P,n(s("input",{type:"number",name:"asset_id",id:"asset_id",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md","onUpdate:modelValue":t[4]||(t[4]=l=>o(e).attrs.asset_id=l),required:""},null,512),[[d,o(e).attrs.asset_id]])]),s("div",W,[z,n(s("input",{type:"text",name:"serial_number",id:"serial_number","onUpdate:modelValue":t[5]||(t[5]=l=>o(e).attrs.serial_number=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).attrs.serial_number]])])]),s("div",A,[s("div",G,[s("div",H,[T,n(s("input",{type:"number",name:"unit",id:"unit","onUpdate:modelValue":t[6]||(t[6]=l=>o(e).attrs.unit=l),required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[d,o(e).attrs.unit]])])]),s("div",X,[J,n(s("input",{type:"text",name:"code",id:"code",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md","onUpdate:modelValue":t[7]||(t[7]=l=>o(e).attrs.code=l),required:""},null,512),[[d,o(e).attrs.code]])])]),s("div",K,[L,n(s("select",{class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[8]||(t[8]=l=>o(e).attrs.category=l),required:""},[s("option",Q,i(o(e).attrs.category),1),Y,Z,$],512),[[_,o(e).attrs.category]])])])])])])]),ss],40,g))}};export{os as _};