import{_ as u}from"./montreSvg.vue_vue_type_script_setup_true_lang.177d7972.js";import{d,w as f,o,c as a,a as i,F as x,r as h,u as w,s as k,b as y,e as l,f as v,m as C}from"./index.41134257.js";const E=i("h1",{class:"text-2xl text-white text-center"},"Si elle n'est pas command\xE9e, vous pouvez la modifier.",-1),g={class:"flex justify-evenly"},F=d({__name:"ListeView",props:{max:null},async setup(c){let e,n;const m=c,{data:_,error:r}=([e,n]=f(()=>{var t;return k.from("montre").select("*").limit((t=m.max)!=null?t:100)}),e=await e,n(),e);return r&&console.log("n'a pas pu r\xE9cup\xE9rer les montres",{error:r}),(t,B)=>{const p=y("router-link");return o(),a("section",null,[E,i("ul",g,[(o(!0),a(x,null,h(w(_),s=>(o(),a("li",{key:s.id},[l(p,{to:{name:"montre-edit-id",params:{id:s.id_montre}}},{default:v(()=>[l(u,C({class:"w-64"},s),null,16)]),_:2},1032,["to"])]))),128))])])}}});export{F as _};
