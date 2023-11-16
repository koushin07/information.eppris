import{a as r,R as j,o as f,b as x,$ as X,B as N,p as Z,d as e,f as a,F as $,q as I,s as ee,t as g,e as M,g as _,r as q,v as te,x as se,j as O,i as A,u as l,z as V,W as E,U as T}from"./app.4da21ac3.js";/* empty css                                                                          */import{N as U,_ as B,U as D}from"./dialog.03b76927.js";import{e as S,f as F}from"./transition.11289989.js";import{_ as ne}from"./EquipmentList.141cc032.js";import{_ as oe}from"./ProvinceList.3d2bb4c3.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as ie}from"./QuantityModal.c58d5f9b.js";const le=()=>{const o=r(null),c=r(!1),t=r(!1);return{municipalities:o,notFound:t,loading:c,getLocalMunicipality:async i=>{c.value=!0,t.value&&(t.value=!1),await j.post("/api/equipment",i).then(d=>{console.log(d.data),c.value=!1,d.data.length===0&&(t.value=!0),o.value=d.data})},getRegionalMunicipality:async(i,d)=>{await j.post(`/api/cross/equipment/${i}/quantity/${d}`).then(v=>{o.value=v.data})}}},ae=()=>{const o=r([]);return{munis:o,setItem:(t,n,h,i)=>{let d=new Date(new Date().getTime()+6e5);t.expiration=d,t.equipment=n,t.status="pending",t.quantity_borrowing=h,o.value.push(t),window.localStorage.setItem("municipality",JSON.stringify(o.value)),i.value.push(t)}}},ce={},re={"aria-label":"Loading...",class:"grid place-content-center py-10 h-full w-full",role:"status"},de=X('<svg class="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256"><line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>',1),ue=[de];function pe(o,c){return f(),x("div",re,ue)}const _e=R(ce,[["render",pe]]),me={props:{equipments:Object,provinces:Object,incident:String},emits:["submitted"],components:{EquipmentList:ne,ProvinceList:oe,Loading:_e,QuantityModal:ie},setup({incident:o,provinces:c,equipments:t},{emit:n}){const h=r(""),{municipalities:i,getLocalMunicipality:d,loading:v,notFound:m}=le();ae();const s=r([]),u=r(!1),P=r({}),Q=r(!1),b=r({equipments:[],provinces:[]}),z=[{name:"EQUIPMENT"},{name:"MUNICIPALITY"},{name:"AVAILABLE"},{name:"ADDRESS"},{name:"CONTRACT NUMBER"},{name:"ACTION"}],w=N({equipment:"",municipality_id:null,quantity:null,incidents:"",incident_summary:"",date:""}),H=async p=>{p.value=p,b.value.equipments=p.name},W=async()=>{b.value.equipments.length!==0&&b.value.provinces.length!==0&&await d(b.value)},J=(p,k)=>{console.log("this is muni",k),console.log("this is qty",p),w.equipment=k.equipment,w.quantity=p.value,w.municipality_id=k.municipality_id,n("submitted",w)},Y=async(p,k,K)=>{console.log("this is equipment ",P.value),i.value=Object.values(i.value).filter(L=>L.municipality_id!==p.municipality_id),console.log(o),await j.post("/api/request",{equipment:b.value.equipments,municipality_id:p.municipality_id,quantity:k.value,incidents:o,person:K}).then(L=>{console.log(L)})};console.log(c);const C=Object.values(c).map(p=>p.province),G=Object.values(t).map(p=>p.name);return console.log("converted ",C),Z(()=>{}),{tableHeader:z,convertedProvince:C,convertedEquipment:G,select2:h,submit:J,show:Q,search:W,loading:v,selectAll:s,selectClick:u,notFound:m,getEquipment:H,municipalities:i,form:w,handleRequest:Y,requests:b}}},y=o=>(te("data-v-4c00f27a"),o=o(),se(),o),fe={class:"flex flex-col h-full"},xe={class:"grid grid-rows-2 gap-2"},ye={class:"my-1"},ve=y(()=>e("label",{class:"text-sm w-full"},"Equipment",-1)),he={class:"my-1"},ge=y(()=>e("label",{class:"text-sm"},"Province",-1)),be={class:"flex justify-end mt-2"},we={class:"grid grid-flow-row lg:grid-flow-col gap-10 pt-6"},ke={class:"lg:col-span-4 flex flex-col z-0 justify-between"},qe={class:"flex flex-col overflow-hidden h-[280px]"},je=y(()=>e("span",{class:"text-lg font-semibold font-sans text-center"},"Municipalities",-1)),$e={class:"flex flex-col justify-between overflow-y-auto rounded-lg p-4 space-y-2 scrollbar"},Se={class:"flex flex-row lg:flex-col justify-between pr-2 border-b pb-2 border-red-200 last:border-transparent"},Le={class:"table-auto w-full text-sm text-gray-500 dark:text-gray-400"},Ce={class:"text-xs text-gray-700 text-center uppercase bg-header dark:bg-gray-700 dark:text-gray-400"},Ie={key:0,class:""},Me={key:0,class:"max-h-full even:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Ve=y(()=>e("td",{scope:"row",class:"p-4 text-center"},null,-1)),Ee=y(()=>e("td",{scope:"row",class:"text-center"},null,-1)),Ne={class:"text-center"},Oe=y(()=>e("td",{class:"text-center"},null,-1)),Ae=y(()=>e("td",{class:"text-center"},null,-1)),Te=y(()=>e("td",{class:"text-center"},null,-1)),Ue={scope:"row",class:"p-4 text-center"},Be={scope:"row",class:"text-center"},De={class:"text-center"},Fe={class:"text-center"},Re={class:"text-center"},Pe={class:"text-center"},Qe=y(()=>e("button",{class:"border-2 px-2"}," Request ",-1)),ze={key:0,class:"grid place-content-center py-10"},He=y(()=>e("span",{class:"text-lg font-bold text-gray-600 text-center"}," Nothing Found",-1)),We=y(()=>e("span",{class:"text-xs font-semibold text-gray-600"}," Try Changing Quantity",-1)),Je=[He,We];function Ye(o,c,t,n,h,i){const d=q("v-select"),v=q("Loading"),m=q("Quantity-modal");return f(),x("div",fe,[e("div",xe,[e("div",ye,[ve,a(d,{multiple:"",options:n.convertedEquipment,modelValue:n.requests.equipments,"onUpdate:modelValue":c[0]||(c[0]=s=>n.requests.equipments=s),label:"name"},null,8,["options","modelValue"])]),e("div",he,[ge,a(d,{multiple:"",options:n.convertedProvince,modelValue:n.requests.provinces,"onUpdate:modelValue":c[1]||(c[1]=s=>n.requests.provinces=s),label:"name"},null,8,["options","modelValue"])])]),e("div",be,[e("button",{onClick:c[2]||(c[2]=(...s)=>n.search&&n.search(...s)),class:"px-3 bg-button w-fit text-center text-white tracking-wider py-2 rounded"},"Search")]),e("div",we,[e("div",ke,[e("div",qe,[je,e("div",$e,[e("div",Se,[e("table",Le,[e("thead",Ce,[e("tr",null,[(f(!0),x($,null,I(n.tableHeader,(s,u)=>(f(),x("th",{scope:"col",class:"py-3 px-6",key:u},[ee(g(s.name!=="SELECT ALL"?s.name:"")+" ",1),s.name==="SELECT ALL"?(f(),x("button",Ie,g(s.name),1)):M("",!0)]))),128))])]),e("tbody",null,[n.loading?(f(),x("tr",Me,[Ve,Ee,e("td",Ne,[a(v)]),Oe,Ae,Te])):(f(!0),x($,{key:1},I(n.municipalities,(s,u)=>(f(),x("tr",{class:"max-h-full even:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:u},[e("td",Ue,g(s.equipment),1),e("td",Be,g(s.municipality),1),e("td",De,g(s.quantity),1),e("td",Fe,g(s.owner_address),1),e("td",Re,g(s.owner_contact),1),e("td",Pe,[a(m,{placeholder:"Quantity",muni:s,onSubmit:n.submit},{trigger:_(()=>[Qe]),_:2},1032,["muni","onSubmit"])])]))),128))])])]),n.notFound?(f(),x("div",ze,Je)):M("",!0)])])])])])}const Ge=R(me,[["render",Ye],["__scopeId","data-v-4c00f27a"]]),Ke=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Xe={class:"fixed h-full inset-0 overflow-y-auto"},Ze={class:"flex min-h-full items-center justify-center p-4 text-center"},et=e("i",{class:"fa-solid fa-x text-lg"},null,-1),tt=[et],st={class:"flex flex-col gap-22",style:{"font-family":"Arial, sans-serif"}},nt={class:"flex justify-end"},ot={class:"flex flx-col justify-between mt-11 border-b"},it={class:"flex flex-col box-content w-full"},lt={class:"flex flex-row justify-between"},at={class:"flex flex-col box-content p-3 h-full w-full"},ct=e("div",{class:"mt-4"},null,-1),Mt={__name:"newIncident",props:{add:Boolean,incident:String,incident_summary:String,equipments:Object,provinces:Object},emits:["request"],setup(o,{emit:c}){O(),r(""),r(""),r(new Date().toLocaleString());const t=N({incidents:"",incident_summary:"",date:new Date().toLocaleString()}),n=r(!1);function h(){t.post("/municipality/new-incident",{preserveScroll:!0,onSuccess:()=>{T.Inertia.reload(),i()}})}function i(){n.value=!1}function d(){n.value=!0}return(v,m)=>{const s=q("Datepicker");return f(),x($,null,[e("div",{onClick:d},[A(v.$slots,"trigger")]),a(l(F),{appear:"",show:n.value,as:"template"},{default:_(()=>[a(l(U),{as:"div",onClose:i,class:"relative z-50"},{default:_(()=>[a(l(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[Ke]),_:1}),e("div",Xe,[e("div",Ze,[a(l(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:_(()=>[a(l(B),{class:"w-[1000px] transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:_(()=>[a(l(D),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:_(()=>[e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:i},tt)]),_:1}),e("div",st,[e("div",nt,[a(s,{modelValue:l(t).date,"onUpdate:modelValue":m[0]||(m[0]=u=>l(t).date=u),"show-now-button":""},null,8,["modelValue"])]),e("div",ot,[e("div",it,[e("div",lt,[V(e("input",{"onUpdate:modelValue":m[1]||(m[1]=u=>l(t).incidents=u),class:"focus:outline-none text-2xl font-bold tracking-wider placeholder-stone-300",placeholder:"Write your Subject Here"},null,512),[[E,l(t).incidents]])])])]),e("div",at,[V(e("textarea",{"onUpdate:modelValue":m[2]||(m[2]=u=>l(t).incident_summary=u),class:"focus:outline-none rounded active:outline-none text-sm placeholder-stone-300",placeholder:"Brief Summary"},null,512),[[E,l(t).incident_summary]])]),e("div",{class:"flex flex-row justify-end"},[e("button",{onClick:h,class:"bg-orange-400 text-white rounded px-2 py-1 text-lg"},"Create")])]),ct]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}},rt=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),dt={class:"fixed h-full inset-0 overflow-y-auto"},ut={class:"flex min-h-full items-center justify-center p-4 text-center"},pt=e("i",{class:"fa-solid fa-x text-lg"},null,-1),_t=[pt],mt={class:"flex flex-col gap-22",style:{"font-family":"Arial, sans-serif"}},ft={class:"flex flx-row justify-between mt-11 border-b"},xt={class:"flex flex-col box-content"},yt=["value"],vt=["value"],ht={class:"flex flex-col mt-11"},gt={class:"flex flex-row space-x-10"},bt={class:"relative z-0 mb-6 w-full group"},wt=e("div",{class:"mt-4"},null,-1),Vt={__name:"AddIncident",props:{detail:String,incident:String,incident_summary:String,equipments:Object,provinces:Object},emits:["request"],setup(o,{emit:c}){const t=o;O();const n=r(""),h=r("");t.incident&&(n.value=t.incident),t.incident_summary&&(h.value=t.incident_summary);const i=r(!1);function d(s){console.log("this is form ",s),j.post("/api/new-request",{equipment:s.equipment,detail:t.detail,quantity:s.quantity,municipality_id:s.municipality_id}).then(u=>{T.Inertia.reload()})}function v(){i.value=!1}function m(){i.value=!0}return(s,u)=>(f(),x($,null,[e("div",{onClick:m},[A(s.$slots,"trigger")]),a(l(F),{appear:"",show:i.value,as:"template"},{default:_(()=>[a(l(U),{as:"div",onClose:v,class:"relative z-50"},{default:_(()=>[a(l(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[rt]),_:1}),e("div",dt,[e("div",ut,[a(l(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:_(()=>[a(l(B),{class:"w-fit transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:_(()=>[a(l(D),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:_(()=>[e("button",{class:"grid place-content-center hover:scale-110 hover:text-orange-500",onClick:v},_t)]),_:1}),e("div",mt,[e("div",ft,[e("div",xt,[e("input",{disabled:"",value:t.incident,class:"focus:outline-none text-2xl font-bold tracking-wider placeholder-stone-300",placeholder:"Write your Incident Here"},null,8,yt),e("input",{class:"focus:outline-none text-sm placeholder-stone-300",value:t.incident_summary,placeholder:"Brief Summary",disabled:""},null,8,vt)])]),e("div",ht,[e("div",gt,[e("div",bt,[a(Ge,{onSubmitted:d,equipments:t.equipments,provinces:t.provinces,incident:t.incident},null,8,["equipments","provinces","incident"])])])])]),wt]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}};export{Ge as L,Mt as _,Vt as a};
