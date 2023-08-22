import{aH as x,a4 as w,a5 as C,ao as S,r as k,at as B,a8 as F,a9 as q,j as a,aa as s,aI as E,a2 as P,au as T,aJ as j,am as i,an as o,aE as D,ae as n,ai as u,aK as M,aL as N,V as m}from"./index-3860cfd7.js";import{c as R,a as U,u as $,b as I,V as A}from"./vee-validate.esm-ece12aee.js";import{V as H}from"./VContainer-472509fa.js";import{V as p,a as r}from"./VRow-709d85fd.js";/* empty css              */const J={class:"mb-5"},K={class:"line-height-medium"},L={class:"line-height-medium"},O={class:"line-height-medium"},X=i("h1",{class:"text-red"},"已下架",-1),ee={__name:"ProductView",setup(z){const _=x(),d=w(),v=C(),f=R({quantity:U().required("缺少人數").min(1,"最少為 1").max(5,"最多為 5")}),{isSubmitting:h,handleSubmit:g}=$({validationSchema:f,initialValues:{quantity:0}}),c=I("quantity"),y=g(async t=>{try{const{data:l}=await S.post("/users/cart",{product:e.value._id,quantity:t.quantity});v.cart=l.result}catch(l){d({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),e=k({_id:"",name:"",price:0,description:"",date:"",image:"",sell:!0,category:""});(async()=>{try{const{data:t}=await B.get("/products/"+_.params.id);e.value._id=t.result._id,e.value.name=t.result.name,e.value.date=t.result.date,e.value.price=t.result.price,e.value.description=t.result.description,e.value.image=t.result.image,e.value.sell=t.result.sell,e.value.category=t.result.category,document.title="TEXTURE 版畫工作室 | "+e.value.name}catch(t){d({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const V=t=>t==="工作坊"?"#7986CB":t==="展覽講座"?"#F06292":"#FFB74D";return(t,l)=>(F(),q(P,null,[a(H,{class:"custom-container"},{default:s(()=>[a(p,{class:"my-4"},{default:s(()=>[a(r,{cols:"12",md:"6",class:"pt-12"},{default:s(()=>[a(T,{src:e.value.image,width:"600px",class:"imgcenter"},null,8,["src"])]),_:1}),a(j,{vertical:""}),a(r,{cols:"12",md:"6",class:"pt-12 pl-8"},{default:s(()=>[a(p,null,{default:s(()=>[a(r,{cols:"9"},{default:s(()=>[i("h1",J,o(e.value.name),1)]),_:1}),a(r,{cols:"",class:"d-flex justify-end"},{default:s(()=>[a(D,{color:V(e.value.category),variant:"elevated",class:"mt-2",label:""},{default:s(()=>[n(o(e.value.category),1)]),_:1},8,["color"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[i("h3",K,"活動日期 : "+o(e.value.date),1),i("h3",L,"報名費用 : $"+o(e.value.price),1),i("pre",O,o(e.value.description),1)]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(A,{disabled:u(h),onSubmit:M(u(y),["prevent"])},{default:s(()=>[a(N,{variant:"outlined",modelValue:u(c).value.value,"onUpdate:modelValue":l[0]||(l[0]=b=>u(c).value.value=b),modelModifiers:{number:!0},type:"number",label:"人數",min:"0",max:"5","error-messages":u(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(m,{"prepend-icon":"mdi-cart",type:"submit",color:"#0e2a47ff",theme:"dark",block:""},{default:s(()=>[n("加入購物車 ")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(E,{"model-value":!e.value.sell,persistent:"",class:"align-center text-center justify-center"},{default:s(()=>[X,a(m,{to:"/"},{default:s(()=>[n("回上頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{ee as default};
