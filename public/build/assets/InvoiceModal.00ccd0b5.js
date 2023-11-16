import{a as n,p as x,R as p,o,b as r,$ as m,d as s,f as e,g as a,u as l,F as f}from"./app.4da21ac3.js";/* empty css                                                                          */import"./moment.9709ab41.js";import{N as u,_ as w,U as b}from"./dialog.03b76927.js";import{e as c,f as g}from"./transition.11289989.js";const y={class:"page-content container mx-auto sm:px-4"},h=m('<div class="page-header text-blue-d2"><h1 class="page-title text-secondary-d1"> Invoice <small class="page-info"><i class="fa fa-angle-double-right text-80"></i> ID: #111-222 </small></h1><div class="page-tools"><div class="action-buttons"><a class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-white bg-gray-100 text-gray-800 hover:bg-gray-200 mx-1px text-95" href="#" data-title="Print"><i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i> Print </a><a class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-white bg-gray-100 text-gray-800 hover:bg-gray-200 mx-1px text-95" href="#" data-title="PDF"><i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i> Export </a></div></div></div><div class="container mx-auto sm:px-4 px-0"><div class="flex flex-wrap mt-4"><div class="w-full lg:w-full pr-4 pl-4"><div class="flex flex-wrap"><div class="w-full"><div class="text-center text-150"><i class="fa fa-book fa-2x text-success-m2 mr-1"></i><span class="text-default-d3">Bootdey.com</span></div></div></div><hr class="flex flex-wrap brc-default-l1 mx-n1 mb-4"><div class="flex flex-wrap"><div class="sm:w-1/2 pr-4 pl-4"><div><span class="text-sm text-grey-m2 align-middle">To:</span><span class="text-600 text-110 text-blue align-middle">Alex Doe</span></div><div class="text-grey-m2"><div class="my-1"> Street, City </div><div class="my-1"> State, Country </div><div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-gray-600"></i> <b class="text-600">111-111-111</b></div></div></div><div class="text-95 sm:w-1/2 pr-4 pl-4 self-start sm:flex justify-end"><hr class="sm:hidden"><div class="text-grey-m2"><div class="mt-1 mb-2 text-secondary-m1 text-600 text-125"> Invoice </div><div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #111-222</div><div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> Oct 12, 2019</div><div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-orange-400 text-black hover:bg-orange-500 rounded-full py-1 px-3 px-25">Unpaid</span></div></div></div></div><div class="mt-4"><div class="flex flex-wrap text-600 text-white bgc-default-tp1 py-25"><div class="hidden sm:block w-1/6">#</div><div class="w-3/4 sm:w-2/5 pr-4 pl-4">Description</div><div class="hidden sm:block w-1/3 sm:w-1/5 pr-4 pl-4">Qty</div><div class="hidden sm:block sm:w-1/5 pr-4 pl-4">Unit Price</div><div class="w-1/5">Amount</div></div><div class="text-95 text-secondary-d3"><div class="flex flex-wrap mb-2 sm:mb-0 py-25"><div class="hidden sm:block w-1/6">1</div><div class="w-3/4 sm:w-2/5 pr-4 pl-4">Domain registration</div><div class="hidden sm:block w-1/5">2</div><div class="hidden sm:block w-1/5 text-95">$10</div><div class="w-1/5 text-secondary-d2">$20</div></div><div class="flex flex-wrap mb-2 sm:mb-0 py-25 bgc-default-l4"><div class="hidden sm:block w-1/6">2</div><div class="w-3/4 sm:w-2/5 pr-4 pl-4">Web hosting</div><div class="hidden sm:block w-1/5">1</div><div class="hidden sm:block w-1/5 text-95">$15</div><div class="w-1/5 text-secondary-d2">$15</div></div><div class="flex flex-wrap mb-2 sm:mb-0 py-25"><div class="hidden sm:block w-1/6">3</div><div class="w-3/4 sm:w-2/5 pr-4 pl-4">Software development</div><div class="hidden sm:block w-1/5">--</div><div class="hidden sm:block w-1/5 text-95">$1,000</div><div class="w-1/5 text-secondary-d2">$1,000</div></div><div class="flex flex-wrap mb-2 sm:mb-0 py-25 bgc-default-l4"><div class="hidden sm:block w-1/6">4</div><div class="w-3/4 sm:w-2/5 pr-4 pl-4">Consulting</div><div class="hidden sm:block w-1/5">1 Year</div><div class="hidden sm:block w-1/5 text-95">$500</div><div class="w-1/5 text-secondary-d2">$500</div></div></div><div class="flex flex-wrap border-b-2 brc-default-l2"></div><div class="flex flex-wrap mt-3"><div class="w-full sm:w-3/5 pr-4 pl-4 text-grey-d2 text-95 mt-2 lg:mt-0"> Extra note such as company or payment information... </div><div class="w-full sm:w-2/5 pr-4 pl-4 text-grey text-90 order-first order-sm-last"><div class="flex flex-wrap my-2"><div class="w-3/5 text-right"> SubTotal </div><div class="w-2/5"><span class="text-120 text-secondary-d1">$2,250</span></div></div><div class="flex flex-wrap my-2"><div class="w-3/5 text-right"> Tax (10%) </div><div class="w-2/5"><span class="text-110 text-secondary-d1">$225</span></div></div><div class="flex flex-wrap my-2 items-center bgc-primary-l3 p-2"><div class="w-3/5 text-right"> Total Amount </div><div class="w-2/5"><span class="text-150 text-success-d3 opacity-2">$2,475</span></div></div></div></div><hr><div><span class="text-secondary-d1 text-105">Thank you for your business</span><a href="#" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-teal-500 text-white hover:bg-teal-600 btn-bold px-4 float-right mt-3 lg:mt-0">Pay Now</a></div></div></div></div></div>',2),_=[h],k={__name:"Invoice",setup(v){const i=n();return x(()=>{p.get("/api/invoice-data").then(t=>{console.log(t.data),i.value=t.data})}),(t,d)=>(o(),r("div",y,_))}},$=s("button",{class:"border-2 rounded px-2 w-fit py-1 text-sky-900 font-semibold border-sky-900"},"Export Inventory",-1),I=[$],C=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),D={class:"fixed inset-0 overflow-y-auto"},N={class:"flex min-h-full items-center justify-center p-4 text-center"},S=s("i",{class:"fa-solid fa-x text-lg"},null,-1),P=[S],F={__name:"InvoiceModal",setup(v){const i=n(!1);function t(){i.value=!1}function d(){i.value=!0}return(T,B)=>(o(),r(f,null,[s("div",{onClick:d},I),e(l(g),{appear:"",show:i.value,as:"template"},{default:a(()=>[e(l(u),{as:"div",onClose:t,class:"relative z-50"},{default:a(()=>[e(l(c),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[C]),_:1}),s("div",D,[s("div",N,[e(l(c),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(l(w),{class:"w-full transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[e(l(b),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 flex justify-end"},{default:a(()=>[s("button",{class:"grid mt-2 mr-2 place-content-center hover:scale-110 hover:text-orange-500",onClick:t},P)]),_:1}),e(k)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64))}};export{F as _};
