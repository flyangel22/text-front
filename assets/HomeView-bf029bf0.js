import{_ as te}from"./logo1-bf84cae4.js";import{d as ce,S as pe,e as me,c as ge,a as ve,b as X,f as he,n as q,g as U}from"./navigation-43752ba7.js";import{r as R,ap as ae,aq as ne,w as ye,a3 as be,o as ie,b as le,ar as A,as as we,c as xe,a4 as Ce,at as Se,a8 as G,a9 as Y,am as B,j as T,V as k,aa as z,a2 as K,ai as Z,ah as Ee,ae as J,au as H,ab as _e,av as Be,aw as Te}from"./index-3860cfd7.js";import{P as Pe}from"./ProductCard-98e4b55c.js";import{V as Q}from"./VContainer-472509fa.js";import{V as Le}from"./VParallax-5323449f.js";import{V as Me,a as j}from"./VRow-709d85fd.js";/* empty css              */const Oe=""+new URL("../newprint12.mp4",import.meta.url).href,ze=""+new URL("../contact0.jpg",import.meta.url).href,Ie=""+new URL("../home2.jpg",import.meta.url).href,Re=""+new URL("../profile1.jpg",import.meta.url).href,Ae=""+new URL("../home4-4.jpg",import.meta.url).href,je=""+new URL("../home4-6.jpg",import.meta.url).href,$e=""+new URL("../service1-3.jpg",import.meta.url).href,Ne=""+new URL("../home4-5.jpg",import.meta.url).href,De=""+new URL("../home4-2.jpg",import.meta.url).href,He=""+new URL("../home4-3.jpg",import.meta.url).href,se=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function N(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function $(n,e){const u=["__proto__","constructor","prototype"];Object.keys(e).filter(l=>u.indexOf(l)<0).forEach(l=>{typeof n[l]>"u"?n[l]=e[l]:N(e[l])&&N(n[l])&&Object.keys(e[l]).length>0?e[l].__swiper__?n[l]=e[l]:$(n[l],e[l]):n[l]=e[l]})}function oe(n){return n===void 0&&(n={}),n.navigation&&typeof n.navigation.nextEl>"u"&&typeof n.navigation.prevEl>"u"}function re(n){return n===void 0&&(n={}),n.pagination&&typeof n.pagination.el>"u"}function de(n){return n===void 0&&(n={}),n.scrollbar&&typeof n.scrollbar.el>"u"}function ue(n){n===void 0&&(n="");const e=n.split(" ").map(l=>l.trim()).filter(l=>!!l),u=[];return e.forEach(l=>{u.indexOf(l)<0&&u.push(l)}),u.join(" ")}function Ve(n){return n===void 0&&(n=""),n?n.includes("swiper-wrapper")?n:`swiper-wrapper ${n}`:"swiper-wrapper"}function Fe(n){let{swiper:e,slides:u,passedParams:l,changedParams:r,nextEl:d,prevEl:c,scrollbarEl:p,paginationEl:i}=n;const w=r.filter(o=>o!=="children"&&o!=="direction"&&o!=="wrapperClass"),{params:s,pagination:g,navigation:C,scrollbar:x,virtual:E,thumbs:m}=e;let v,y,t,a,f,h,S,L;r.includes("thumbs")&&l.thumbs&&l.thumbs.swiper&&s.thumbs&&!s.thumbs.swiper&&(v=!0),r.includes("controller")&&l.controller&&l.controller.control&&s.controller&&!s.controller.control&&(y=!0),r.includes("pagination")&&l.pagination&&(l.pagination.el||i)&&(s.pagination||s.pagination===!1)&&g&&!g.el&&(t=!0),r.includes("scrollbar")&&l.scrollbar&&(l.scrollbar.el||p)&&(s.scrollbar||s.scrollbar===!1)&&x&&!x.el&&(a=!0),r.includes("navigation")&&l.navigation&&(l.navigation.prevEl||c)&&(l.navigation.nextEl||d)&&(s.navigation||s.navigation===!1)&&C&&!C.prevEl&&!C.nextEl&&(f=!0);const b=o=>{e[o]&&(e[o].destroy(),o==="navigation"?(e.isElement&&(e[o].prevEl.remove(),e[o].nextEl.remove()),s[o].prevEl=void 0,s[o].nextEl=void 0,e[o].prevEl=void 0,e[o].nextEl=void 0):(e.isElement&&e[o].el.remove(),s[o].el=void 0,e[o].el=void 0))};r.includes("loop")&&e.isElement&&(s.loop&&!l.loop?h=!0:!s.loop&&l.loop?S=!0:L=!0),w.forEach(o=>{if(N(s[o])&&N(l[o]))$(s[o],l[o]),(o==="navigation"||o==="pagination"||o==="scrollbar")&&"enabled"in l[o]&&!l[o].enabled&&b(o);else{const _=l[o];(_===!0||_===!1)&&(o==="navigation"||o==="pagination"||o==="scrollbar")?_===!1&&b(o):s[o]=l[o]}}),w.includes("controller")&&!y&&e.controller&&e.controller.control&&s.controller&&s.controller.control&&(e.controller.control=s.controller.control),r.includes("children")&&u&&E&&s.virtual.enabled&&(E.slides=u,E.update(!0)),r.includes("children")&&u&&s.loop&&(L=!0),v&&m.init()&&m.update(!0),y&&(e.controller.control=s.controller.control),t&&(e.isElement&&(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-pagination"),e.el.appendChild(i)),i&&(s.pagination.el=i),g.init(),g.render(),g.update()),a&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),e.el.appendChild(p)),p&&(s.scrollbar.el=p),x.init(),x.updateSize(),x.setTranslate()),f&&(e.isElement&&((!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-next"),d.innerHTML=e.hostEl.nextButtonSvg,e.el.appendChild(d)),(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-prev"),d.innerHTML=e.hostEl.prevButtonSvg,e.el.appendChild(c))),d&&(s.navigation.nextEl=d),c&&(s.navigation.prevEl=c),C.init(),C.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=l.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=l.allowSlidePrev),r.includes("direction")&&e.changeDirection(l.direction,!1),(h||L)&&e.loopDestroy(),(S||L)&&e.loopCreate(),e.update()}function ee(n,e){n===void 0&&(n={}),e===void 0&&(e=!0);const u={on:{}},l={},r={};$(u,ce),u._emitClasses=!0,u.init=!1;const d={},c=se.map(i=>i.replace(/_/,"")),p=Object.assign({},n);return Object.keys(p).forEach(i=>{typeof n[i]>"u"||(c.indexOf(i)>=0?N(n[i])?(u[i]={},r[i]={},$(u[i],n[i]),$(r[i],n[i])):(u[i]=n[i],r[i]=n[i]):i.search(/on[A-Z]/)===0&&typeof n[i]=="function"?e?l[`${i[2].toLowerCase()}${i.substr(3)}`]=n[i]:u.on[`${i[2].toLowerCase()}${i.substr(3)}`]=n[i]:d[i]=n[i])}),["navigation","pagination","scrollbar"].forEach(i=>{u[i]===!0&&(u[i]={}),u[i]===!1&&delete u[i]}),{params:u,passedParams:r,rest:d,events:l}}function qe(n,e){let{el:u,nextEl:l,prevEl:r,paginationEl:d,scrollbarEl:c,swiper:p}=n;oe(e)&&l&&r&&(p.params.navigation.nextEl=l,p.originalParams.navigation.nextEl=l,p.params.navigation.prevEl=r,p.originalParams.navigation.prevEl=r),re(e)&&d&&(p.params.pagination.el=d,p.originalParams.pagination.el=d),de(e)&&c&&(p.params.scrollbar.el=c,p.originalParams.scrollbar.el=c),p.init(u)}function Ue(n,e,u,l,r){const d=[];if(!e)return d;const c=i=>{d.indexOf(i)<0&&d.push(i)};if(u&&l){const i=l.map(r),w=u.map(r);i.join("")!==w.join("")&&c("children"),l.length!==u.length&&c("children")}return se.filter(i=>i[0]==="_").map(i=>i.replace(/_/,"")).forEach(i=>{if(i in n&&i in e)if(N(n[i])&&N(e[i])){const w=Object.keys(n[i]),s=Object.keys(e[i]);w.length!==s.length?c(i):(w.forEach(g=>{n[i][g]!==e[i][g]&&c(i)}),s.forEach(g=>{n[i][g]!==e[i][g]&&c(i)}))}else n[i]!==e[i]&&c(i)}),d}const Ge=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())};function W(n,e,u){n===void 0&&(n={});const l=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},d=(c,p)=>{Array.isArray(c)&&c.forEach(i=>{const w=typeof i.type=="symbol";p==="default"&&(p="container-end"),w&&i.children?d(i.children,p):i.type&&(i.type.name==="SwiperSlide"||i.type.name==="AsyncComponentWrapper")?l.push(i):r[p]&&r[p].push(i)})};return Object.keys(n).forEach(c=>{if(typeof n[c]!="function")return;const p=n[c]();d(p,c)}),u.value=e.value,e.value=l,{slides:l,slots:r}}function ke(n,e,u){if(!u)return null;const l=s=>{let g=s;return s<0?g=e.length+s:g>=e.length&&(g=g-e.length),g},r=n.value.isHorizontal()?{[n.value.rtlTranslate?"right":"left"]:`${u.offset}px`}:{top:`${u.offset}px`},{from:d,to:c}=u,p=n.value.params.loop?-e.length:0,i=n.value.params.loop?e.length*2:e.length,w=[];for(let s=p;s<i;s+=1)s>=d&&s<=c&&w.push(e[l(s)]);return w.map(s=>(s.props||(s.props={}),s.props.style||(s.props.style={}),s.props.swiperRef=n,s.props.style=r,A(s.type,{...s.props},s.children)))}const We={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(n,e){let{slots:u,emit:l}=e;const{tag:r,wrapperTag:d}=n,c=R("swiper"),p=R(null),i=R(!1),w=R(!1),s=R(null),g=R(null),C=R(null),x={value:[]},E={value:[]},m=R(null),v=R(null),y=R(null),t=R(null),{params:a,passedParams:f}=ee(n,!1);W(u,x,E),C.value=f,E.value=x.value;const h=()=>{W(u,x,E),i.value=!0};a.onAny=function(b){for(var o=arguments.length,_=new Array(o>1?o-1:0),P=1;P<o;P++)_[P-1]=arguments[P];l(b,..._)},Object.assign(a.on,{_beforeBreakpoint:h,_containerClasses(b,o){c.value=o}});const S={...a};if(delete S.wrapperClass,g.value=new pe(S),g.value.virtual&&g.value.params.virtual.enabled){g.value.virtual.slides=x.value;const b={cache:!1,slides:x.value,renderExternal:o=>{p.value=o},renderExternalUpdate:!1};$(g.value.params.virtual,b),$(g.value.originalParams.virtual,b)}ae(()=>{!w.value&&g.value&&(g.value.emitSlidesClasses(),w.value=!0);const{passedParams:b}=ee(n,!1),o=Ue(b,C.value,x.value,E.value,_=>_.props&&_.props.key);C.value=b,(o.length||i.value)&&g.value&&!g.value.destroyed&&Fe({swiper:g.value,slides:x.value,passedParams:b,changedParams:o,nextEl:m.value,prevEl:v.value,scrollbarEl:t.value,paginationEl:y.value}),i.value=!1}),ne("swiper",g),ye(p,()=>{be(()=>{Ge(g.value)})}),ie(()=>{s.value&&(qe({el:s.value,nextEl:m.value,prevEl:v.value,paginationEl:y.value,scrollbarEl:t.value,swiper:g.value},a),l("swiper",g.value))}),le(()=>{g.value&&!g.value.destroyed&&g.value.destroy(!0,!1)});function L(b){return a.virtual?ke(g,b,p.value):(b.forEach((o,_)=>{o.props||(o.props={}),o.props.swiperRef=g,o.props.swiperSlideIndex=_}),b)}return()=>{const{slides:b,slots:o}=W(u,x,E);return A(r,{ref:s,class:ue(c.value)},[o["container-start"],A(d,{class:Ve(a.wrapperClass)},[o["wrapper-start"],L(b),o["wrapper-end"]]),oe(n)&&[A("div",{ref:v,class:"swiper-button-prev"}),A("div",{ref:m,class:"swiper-button-next"})],de(n)&&A("div",{ref:t,class:"swiper-scrollbar"}),re(n)&&A("div",{ref:y,class:"swiper-pagination"}),o["container-end"]])}}},Xe={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(n,e){let{slots:u}=e,l=!1;const{swiperRef:r}=n,d=R(null),c=R("swiper-slide"),p=R(!1);function i(g,C,x){C===d.value&&(c.value=x)}ie(()=>{!r||!r.value||(r.value.on("_slideClass",i),l=!0)}),we(()=>{l||!r||!r.value||(r.value.on("_slideClass",i),l=!0)}),ae(()=>{!d.value||!r||!r.value||(typeof n.swiperSlideIndex<"u"&&(d.value.swiperSlideIndex=n.swiperSlideIndex),r.value.destroyed&&c.value!=="swiper-slide"&&(c.value="swiper-slide"))}),le(()=>{!r||!r.value||r.value.off("_slideClass",i)});const w=xe(()=>({isActive:c.value.indexOf("swiper-slide-active")>=0,isVisible:c.value.indexOf("swiper-slide-visible")>=0,isPrev:c.value.indexOf("swiper-slide-prev")>=0,isNext:c.value.indexOf("swiper-slide-next")>=0}));ne("swiperSlide",w);const s=()=>{p.value=!0};return()=>A(n.tag,{class:ue(`${c.value}`),ref:d,"data-swiper-slide-index":typeof n.virtualIndex>"u"&&r&&r.value&&r.value.params.loop?n.swiperSlideIndex:n.virtualIndex,onLoadCapture:s},n.zoom?A("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof n.zoom=="number"?n.zoom:void 0},[u.default&&u.default(w.value),n.lazy&&!p.value&&A("div",{class:"swiper-lazy-preloader"})]):[u.default&&u.default(w.value),n.lazy&&!p.value&&A("div",{class:"swiper-lazy-preloader"})])}};function fe(n,e,u,l){return n.params.createElements&&Object.keys(l).forEach(r=>{if(!u[r]&&u.auto===!0){let d=me(n.el,`.${l[r]}`)[0];d||(d=ge("div",l[r]),d.className=l[r],n.el.append(d)),u[r]=d,e[r]=d}}),u}function Ye(n){let{swiper:e,extendParams:u,on:l,emit:r}=n;u({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const d=m=>(Array.isArray(m)?m:[m]).filter(v=>!!v);function c(m){let v;return m&&typeof m=="string"&&e.isElement&&(v=e.el.querySelector(m),v)?v:(m&&(typeof m=="string"&&(v=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&v.length>1&&e.el.querySelectorAll(m).length===1&&(v=e.el.querySelector(m))),m&&!v?m:v)}function p(m,v){const y=e.params.navigation;m=d(m),m.forEach(t=>{t&&(t.classList[v?"add":"remove"](...y.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=v),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](y.lockClass))})}function i(){const{nextEl:m,prevEl:v}=e.navigation;if(e.params.loop){p(v,!1),p(m,!1);return}p(v,e.isBeginning&&!e.params.rewind),p(m,e.isEnd&&!e.params.rewind)}function w(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function g(){const m=e.params.navigation;if(e.params.navigation=fe(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let v=c(m.nextEl),y=c(m.prevEl);Object.assign(e.navigation,{nextEl:v,prevEl:y}),v=d(v),y=d(y);const t=(a,f)=>{a&&a.addEventListener("click",f==="next"?s:w),!e.enabled&&a&&a.classList.add(...m.lockClass.split(" "))};v.forEach(a=>t(a,"next")),y.forEach(a=>t(a,"prev"))}function C(){let{nextEl:m,prevEl:v}=e.navigation;m=d(m),v=d(v);const y=(t,a)=>{t.removeEventListener("click",a==="next"?s:w),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(t=>y(t,"next")),v.forEach(t=>y(t,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?E():(g(),i())}),l("toEdge fromEdge lock unlock",()=>{i()}),l("destroy",()=>{C()}),l("enable disable",()=>{let{nextEl:m,prevEl:v}=e.navigation;m=d(m),v=d(v),[...m,...v].filter(y=>!!y).forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),l("click",(m,v)=>{let{nextEl:y,prevEl:t}=e.navigation;y=d(y),t=d(t);const a=v.target;if(e.params.navigation.hideOnClick&&!t.includes(a)&&!y.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let f;y.length?f=y[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(f=t[0].classList.contains(e.params.navigation.hiddenClass)),r(f===!0?"navigationShow":"navigationHide"),[...y,...t].filter(h=>!!h).forEach(h=>h.classList.toggle(e.params.navigation.hiddenClass))}});const x=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),g(),i()},E=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),C()};Object.assign(e.navigation,{enable:x,disable:E,update:i,init:g,destroy:C})}function F(n){return n===void 0&&(n=""),`.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ke(n){let{swiper:e,extendParams:u,on:l,emit:r}=n;const d="swiper-pagination";u({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let c,p=0;const i=t=>(Array.isArray(t)?t:[t]).filter(a=>!!a);function w(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(t,a){const{bulletActiveClass:f}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${f}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${f}-${a}-${a}`)))}function g(t){const a=t.target.closest(F(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const f=X(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===f)return;const h=e.getSlideIndexByData(f),S=e.getSlideIndexByData(e.realIndex);h>e.slides.length-e.loopedSlides&&e.loopFix({direction:h>S?"next":"prev",activeSlideIndex:h,slideTo:!1}),e.slideToLoop(f)}else e.slideTo(f)}function C(){const t=e.rtl,a=e.params.pagination;if(w())return;let f=e.pagination.el;f=i(f);let h,S;const L=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,b=e.params.loop?Math.ceil(L/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,h=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(h=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,h=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const o=e.pagination.bullets;let _,P,V;if(a.dynamicBullets&&(c=ve(o[0],e.isHorizontal()?"width":"height",!0),f.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${c*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&S!==void 0&&(p+=h-(S||0),p>a.dynamicMainBullets-1?p=a.dynamicMainBullets-1:p<0&&(p=0)),_=Math.max(h-p,0),P=_+(Math.min(o.length,a.dynamicMainBullets)-1),V=(P+_)/2),o.forEach(M=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${a.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();M.classList.remove(...O)}),f.length>1)o.forEach(M=>{const O=X(M);O===h?M.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),a.dynamicBullets&&(O>=_&&O<=P&&M.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),O===_&&s(M,"prev"),O===P&&s(M,"next"))});else{const M=o[h];if(M&&M.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&o.forEach((O,I)=>{O.setAttribute("part",I===h?"bullet-active":"bullet")}),a.dynamicBullets){const O=o[_],I=o[P];for(let D=_;D<=P;D+=1)o[D]&&o[D].classList.add(...`${a.bulletActiveClass}-main`.split(" "));s(O,"prev"),s(I,"next")}}if(a.dynamicBullets){const M=Math.min(o.length,a.dynamicMainBullets+4),O=(c*M-c)/2-V*c,I=t?"right":"left";o.forEach(D=>{D.style[e.isHorizontal()?I:"top"]=`${O}px`})}}f.forEach((o,_)=>{if(a.type==="fraction"&&(o.querySelectorAll(F(a.currentClass)).forEach(P=>{P.textContent=a.formatFractionCurrent(h+1)}),o.querySelectorAll(F(a.totalClass)).forEach(P=>{P.textContent=a.formatFractionTotal(b)})),a.type==="progressbar"){let P;a.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const V=(h+1)/b;let M=1,O=1;P==="horizontal"?M=V:O=V,o.querySelectorAll(F(a.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${O})`,I.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(o.innerHTML=a.renderCustom(e,h+1,b),_===0&&r("paginationRender",o)):(_===0&&r("paginationRender",o),r("paginationUpdate",o)),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](a.lockClass)})}function x(){const t=e.params.pagination;if(w())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let f=e.pagination.el;f=i(f);let h="";if(t.type==="bullets"){let S=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>a&&(S=a);for(let L=0;L<S;L+=1)t.renderBullet?h+=t.renderBullet.call(e,L,t.bulletClass):h+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?h=t.renderFraction.call(e,t.currentClass,t.totalClass):h=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?h=t.renderProgressbar.call(e,t.progressbarFillClass):h=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],f.forEach(S=>{t.type!=="custom"&&(S.innerHTML=h||""),t.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(F(t.bulletClass)))}),t.type!=="custom"&&r("paginationRender",f[0])}function E(){e.params.pagination=fe(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(f=>he(f,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=i(a),a.forEach(f=>{t.type==="bullets"&&t.clickable&&f.classList.add(t.clickableClass),f.classList.add(t.modifierClass+t.type),f.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(f.classList.add(`${t.modifierClass}${t.type}-dynamic`),p=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&f.classList.add(t.progressbarOppositeClass),t.clickable&&f.addEventListener("click",g),e.enabled||f.classList.add(t.lockClass)}))}function m(){const t=e.params.pagination;if(w())return;let a=e.pagination.el;a&&(a=i(a),a.forEach(f=>{f.classList.remove(t.hiddenClass),f.classList.remove(t.modifierClass+t.type),f.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&f.removeEventListener("click",g)})),e.pagination.bullets&&e.pagination.bullets.forEach(f=>f.classList.remove(...t.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=i(a),a.forEach(f=>{f.classList.remove(t.horizontalClass,t.verticalClass),f.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?y():(E(),x(),C())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&C()}),l("snapIndexChange",()=>{C()}),l("snapGridLengthChange",()=>{x(),C()}),l("destroy",()=>{m()}),l("enable disable",()=>{let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{C()}),l("click",(t,a)=>{const f=a.target,h=i(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&h&&h.length>0&&!f.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&f===e.navigation.nextEl||e.navigation.prevEl&&f===e.navigation.prevEl))return;const S=h[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),h.forEach(L=>L.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),E(),x(),C()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:v,disable:y,render:x,update:C,init:E,destroy:m})}function Ze(n){let{swiper:e,extendParams:u,emit:l,once:r}=n;u({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(e.params.cssMode)return;const i=e.getTranslate();e.setTranslate(i),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function c(){if(e.params.cssMode)return;const{touchEventsData:i,touches:w}=e;i.velocities.length===0&&i.velocities.push({position:w[e.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:w[e.isHorizontal()?"currentX":"currentY"],time:q()})}function p(i){let{currentPos:w}=i;if(e.params.cssMode)return;const{params:s,wrapperEl:g,rtlTranslate:C,snapGrid:x,touchEventsData:E}=e,v=q()-E.touchStartTime;if(w<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(w>-e.maxTranslate()){e.slides.length<x.length?e.slideTo(x.length-1):e.slideTo(e.slides.length-1);return}if(s.freeMode.momentum){if(E.velocities.length>1){const b=E.velocities.pop(),o=E.velocities.pop(),_=b.position-o.position,P=b.time-o.time;e.velocity=_/P,e.velocity/=2,Math.abs(e.velocity)<s.freeMode.minimumVelocity&&(e.velocity=0),(P>150||q()-b.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=s.freeMode.momentumVelocityRatio,E.velocities.length=0;let y=1e3*s.freeMode.momentumRatio;const t=e.velocity*y;let a=e.translate+t;C&&(a=-a);let f=!1,h;const S=Math.abs(e.velocity)*20*s.freeMode.momentumBounceRatio;let L;if(a<e.maxTranslate())s.freeMode.momentumBounce?(a+e.maxTranslate()<-S&&(a=e.maxTranslate()-S),h=e.maxTranslate(),f=!0,E.allowMomentumBounce=!0):a=e.maxTranslate(),s.loop&&s.centeredSlides&&(L=!0);else if(a>e.minTranslate())s.freeMode.momentumBounce?(a-e.minTranslate()>S&&(a=e.minTranslate()+S),h=e.minTranslate(),f=!0,E.allowMomentumBounce=!0):a=e.minTranslate(),s.loop&&s.centeredSlides&&(L=!0);else if(s.freeMode.sticky){let b;for(let o=0;o<x.length;o+=1)if(x[o]>-a){b=o;break}Math.abs(x[b]-a)<Math.abs(x[b-1]-a)||e.swipeDirection==="next"?a=x[b]:a=x[b-1],a=-a}if(L&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(C?y=Math.abs((-a-e.translate)/e.velocity):y=Math.abs((a-e.translate)/e.velocity),s.freeMode.sticky){const b=Math.abs((C?-a:a)-e.translate),o=e.slidesSizesGrid[e.activeIndex];b<o?y=s.speed:b<2*o?y=s.speed*1.5:y=s.speed*2.5}}else if(s.freeMode.sticky){e.slideToClosest();return}s.freeMode.momentumBounce&&f?(e.updateProgress(h),e.setTransition(y),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating=!0,U(g,()=>{!e||e.destroyed||!E.allowMomentumBounce||(l("momentumBounce"),e.setTransition(s.speed),setTimeout(()=>{e.setTranslate(h),U(g,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(l("_freeModeNoMomentumRelease"),e.updateProgress(a),e.setTransition(y),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,U(g,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(a),e.updateActiveIndex(),e.updateSlidesClasses()}else if(s.freeMode.sticky){e.slideToClosest();return}else s.freeMode&&l("_freeModeNoMomentumRelease");(!s.freeMode.momentum||v>=s.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:d,onTouchMove:c,onTouchEnd:p}})}const Je={style:{width:"100vw",height:"100vh",margin:"0"}},Qe={style:{position:"relative",margin:"0"}},et=B("video",{src:Oe,autoplay:"",loop:"",style:{width:"100vw","object-fit":"cover",height:"100vh"}},null,-1),tt={class:"bg-mask"},at=B("div",{class:"title"},[B("img",{src:te,style:{scale:"80%"}})],-1),nt=B("div",{style:{"background-color":"#0e2a47ff",height:"600px",position:"relative"}},[B("img",{src:ze,style:{height:"300",width:"500px",position:"absolute",top:"18%",left:"30%"},"data-aos":"fade-down","data-aos-duration":"1500","data-aos-delay":"200"}),B("div",{style:{"border-style":"solid",padding:"10px","border-width":"1px",width:"400px",position:"absolute",bottom:"35%",right:"24%",color:"white"},"data-aos":"fade-left","data-aos-duration":"1500","data-aos-delay":"300"},[B("h1",null,"什麼是版畫?"),B("p",null," 版畫是一個統稱，指的是運用傳統印刷的技術所創作的藝術作品，具有間接性、複數性的特色，以印刷原理來分類的話，可以簡單的分成凸版、凹版、平版、孔版四個大類，各版種還可細分各種不同的製作技法。近代因電腦科技的發達，還多了數位版這一個分類。 ")])],-1),it=B("h1",null,"— 最新活動 —",-1),lt={class:"my-16"},st={style:{height:"300px",margin:"0",padding:"0"}},ot=B("div",{class:"d-flex flex-column fill-height justify-center align-center text-white","data-aos":"zoom-in","data-aos-duration":"1500","data-aos-delay":"300"},[B("h1",{class:"text-h4 font-weight-bold"}," 關於我們 ")],-1),rt={style:{"background-color":"#0e2a47ff",height:"600px",position:"relative"}},dt=B("img",{src:Re,style:{width:"400px",position:"absolute",top:"18%",right:"25%"},"data-aos":"fade-down","data-aos-duration":"1500","data-aos-delay":"200"},null,-1),ut=B("div",{style:{width:"500px",position:"absolute",bottom:"20%",left:"25%",color:"white"},"data-aos":"fade-right","data-aos-duration":"1500","data-aos-delay":"300"},[B("div",{class:"title my-4"},[B("img",{src:te})]),B("h3",null," 以版畫藝術推廣為主要目標，透過人生而具備的本能－「感受美」為基礎，追求更精神層面的互動。規劃以具跨領域、獨特性之觀念為主，版印表現方式為輔，進行藝文活動之規劃及推廣，藉此讓人文、城市與思維交織的美好得以體現。。 ")],-1),ft={style:{position:"relative",height:"1200px"}},ct={style:{"background-color":"#0e2a47ff",height:"500px"}},pt={methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},scrollToDown(){window.scrollTo({top:1e3,behavior:"smooth"})}}},Ct=Object.assign(pt,{__name:"HomeView",setup(n){const e=[Ye,Ze,Ke],u=Ce(),l=R([]);return(async()=>{try{const{data:r}=await Se.get("/products");l.value.push(...r.result)}catch(r){u({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(r,d)=>(G(),Y(K,null,[B("div",Je,[B("section",Qe,[et,B("div",tt,[at,T(k,{onClick:r.scrollToDown,icon:"mdi-chevron-down",variant:"text",size:"x-large",class:"chevrondown"},null,8,["onClick"])])])]),nt,T(Q,{class:"custom-container my-16 text-center","data-aos":"fade-down","data-aos-duration":"1500","data-aos-delay":"200"},{default:z(()=>[it,B("div",lt,[T(Z(We),{navigation:!0,slidesPerView:3,spaceBetween:10,freeMode:!0,loop:!0,modules:e,class:"mySwiper"},{default:z(()=>[(G(!0),Y(K,null,Ee(l.value,c=>(G(),_e(Z(Xe),{key:c._id},{default:z(()=>[T(j,{cols:"12"},{default:z(()=>[T(Pe,Be(Te(c)),null,16)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1}),B("div",st,[T(Le,{height:"300",src:Ie},{default:z(()=>[ot]),_:1})]),B("div",rt,[dt,ut,T(k,{class:"ms-2",color:"white",variant:"outlined",theme:"dark",size:"small",to:"/introduce",style:{position:"absolute",bottom:"15%",left:"45%"},"data-aos":"fade-right","data-aos-duration":"1500","data-aos-delay":"300"},{default:z(()=>[J(" More ")]),_:1})]),B("div",ft,[B("div",ct,[T(Q,{class:"custom-container text-center",style:{position:"absolute",left:"15%"},"data-aos":"fade-down","data-aos-duration":"1500","data-aos-delay":"200"},{default:z(()=>[T(Me,null,{default:z(()=>[T(j,{cols:"4"},{default:z(()=>[T(H,{src:Ae,cover:"",height:300})]),_:1}),T(j,{cols:"8"},{default:z(()=>[T(H,{src:je,cover:"",height:300})]),_:1}),T(j,{cols:"6"},{default:z(()=>[T(H,{src:$e,cover:"",height:300})]),_:1}),T(j,{cols:"6"},{default:z(()=>[T(H,{src:Ne,cover:"",height:300})]),_:1}),T(j,{cols:"8"},{default:z(()=>[T(H,{src:De,cover:"",height:400})]),_:1}),T(j,{cols:"4"},{default:z(()=>[T(H,{src:He,cover:"",height:400})]),_:1}),T(j,{cols:"12"},{default:z(()=>[T(k,{onClick:r.scrollToTop,"prepend-icon":"mdi-chevron-up",variant:"text",size:"x-large"},{default:z(()=>[J("回到頂部。")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])])],64))}});export{Ct as default};
