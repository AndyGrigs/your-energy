import{i as a,c as m}from"./assets/error-messages-TZcQe9Wo.js";import{a as s,i as l,l as p}from"./assets/vendor-BPZvktA6.js";const y=async e=>{const{data:t}=await s.post("/subscription",{email:e});return t},w=async e=>{try{const{message:t}=await y(e);return l.show({...a.success,message:t,timeout:5e3}),t}catch(t){const{status:c}=t,i=m[c]||`Unexpected error (${t.message||"unknown"})`;throw l.show({...a.error,message:i}),{code:c,message:i}}},n={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn")};function b(){const e=window.innerHeight/4;window.scrollY>e?n.scrollToTopBtn.classList.remove("invisible"):n.scrollToTopBtn.classList.add("invisible")}function g(){window.scrollTo({top:0,behavior:"smooth"})}function h(){const e=document.getElementById("loader-overlay");e&&(e.style.display="flex")}function r(){const e=document.getElementById("loader-overlay");e&&(e.style.display="none")}function d(e){return new Promise(t=>setTimeout(t,e))}s.interceptors.request.use(e=>(h(),e),e=>(r(),Promise.reject(e)));s.interceptors.response.use(async e=>(await d(1e3),r(),e),async e=>(await d(1e3),r(),Promise.reject(e)));const v=document.getElementById("burger"),u=document.getElementById("mobileMenu"),T=document.getElementById("closeMenu");v.addEventListener("click",()=>{u.classList.add("active")});T.addEventListener("click",()=>{u.classList.remove("active")});window.addEventListener("scroll",b);n.scrollToTopBtn.addEventListener("click",g);const o=document.querySelector("#subscribe-form");o&&o.addEventListener("submit",async e=>{e.preventDefault();try{const t=o.email.value;await w(t),o.reset()}catch(t){console.log(t)}});p.loadAnimation({container:document.getElementById("loader"),renderer:"svg",loop:!0,autoplay:!0,path:"/animations/loader.json"});document.getElementById("load-btn").addEventListener("click",async()=>{try{const e=await s.get("https://jsonplaceholder.typicode.com/posts/1");console.log("Дані з API отримано: "+e.data.title)}catch(e){console.error("Помилка при запиті:",e)}});
//# sourceMappingURL=index.js.map
