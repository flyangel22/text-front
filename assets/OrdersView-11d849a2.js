import{a4 as m,r as w,ao as f,a8 as l,ab as x,aa as o,j as u,aN as k,am as t,a9 as s,ah as i,a2 as d,an as n}from"./index-3860cfd7.js";import{V as y}from"./VContainer-472509fa.js";import{a as _,V}from"./VRow-709d85fd.js";/* empty css              */const b=t("h1",{class:"text-center"},"✦ 報名紀錄 ✦",-1),g=t("thead",{class:"bg-color"},[t("tr",null,[t("th",{class:"text-white"},"訂單編號"),t("th",{class:"text-white"},"活動名稱"),t("th",{class:"text-white"},"活動日期"),t("th",{class:"text-white"},"人數"),t("th",{class:"text-white"},"費用"),t("th",{class:"text-white"},"報名時間"),t("th",{class:"text-white"},"備註")])],-1),B={class:"dot-none"},C={class:"dot-none"},L={__name:"OrdersView",setup(S){const p=m(),h=w([]);return(async()=>{try{const{data:c}=await f.get("/orders");h.value.push(...c.result.map(r=>(r.total=r.cart.reduce((e,a)=>e+a.product.price*a.quantity,0),r)))}catch(c){p({text:c.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(c,r)=>(l(),x(y,null,{default:o(()=>[u(V,null,{default:o(()=>[u(_,{cols:"12"},{default:o(()=>[b]),_:1}),u(_,{cols:"12"},{default:o(()=>[u(k,null,{default:o(()=>[g,t("tbody",null,[(l(!0),s(d,null,i(h.value,e=>(l(),s("tr",{key:e._id,class:"h-8"},[t("td",null,n(e._id),1),t("td",null,[t("ul",null,[(l(!0),s(d,null,i(e.cart,a=>(l(),s("li",{key:a._id},n(a.product.name),1))),128))])]),t("td",null,[t("ul",B,[(l(!0),s(d,null,i(e.cart,a=>(l(),s("li",{key:a._id},n(a.product.date),1))),128))])]),t("td",null,[t("ul",C,[(l(!0),s(d,null,i(e.cart,a=>(l(),s("li",{key:a._id},n(a.quantity),1))),128))])]),t("td",null,"$"+n(e.total),1),t("td",null,n(new Date(e.date).toLocaleString()),1),t("td",null,n(e.note),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};
