import{p as g,bb as A,aN as F,bc as I,d as B,u as U,bd as N,be as R,c as _,i as $,bf as j,bg as a,bh as u,j as l,k as c}from"./index-8d03ecdb.js";const D=g({...A(),...F(I(),["inline"])},"VCheckbox"),z=B()({name:"VCheckbox",inheritAttrs:!1,props:D(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:r,slots:t}=d;const s=U(e,"modelValue"),{isFocused:n,focus:i,blur:b}=N(e),m=R(),V=_(()=>e.id||`checkbox-${m}`);return $(()=>{const[p,k]=j(r),[h,M]=a.filterProps(e),[v,q]=u.filterProps(e);return l(a,c({class:["v-checkbox",e.class]},p,h,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:V.value,focused:n.value,style:e.style}),{...t,default:o=>{let{id:x,messagesId:f,isDisabled:P,isReadonly:C}=o;return l(u,c(v,{id:x.value,"aria-describedby":f.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:b}),t)}})}),{}}});export{z as V};
