import{c as B,r as p,g as x}from"./assets/error-messages-Bd4pWVpB.js";import{i as y,a as f,l as S}from"./assets/vendor-M0pO2yrp.js";y.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",maxWidth:"432px",message:"Sorry, something went wrong."});const b=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),E={success:{iconUrl:b?"./img/success.svg":"/your-energy/img/success.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},error:{iconUrl:b?"./img/error.svg":"/your-energy/img/error.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040"}},M=async e=>{const{data:t}=await f.post("/subscription",{email:e});return t},F=async e=>{try{const{message:t}=await M(e);return y.show({...E.success,message:t,timeout:5e3}),t}catch(t){const{status:r}=t,n=B[r]||`Unexpected error (${t.message||"unknown"})`;throw y.show({...E.error,message:n}),{code:r,message:n}}};function q(){const e=window.innerHeight/4;window.scrollY>e?p.scrollToTopBtn.classList.remove("invisible"):p.scrollToTopBtn.classList.add("invisible")}function $(){window.scrollTo({top:0,behavior:"smooth"})}const H=async e=>{const{data:t}=await f.get("/filters",{params:e});return t},I=async e=>{const{data:t}=await f.get("/exercises",{params:e});return t},z=async e=>{try{return await I(e)}catch(t){const{status:r}=t,n=x[r]||`Unexpected error (${t.message||"unknown"})`;throw{code:r,message:n}}},s={filter:"Muscles",category:null,page:1,limit:12,keyword:""},A={"body parts":"bodypart",muscles:"muscles",equipment:"equipment"};function O(e,t){s.category=e,s.filter=t,s.page=1,s.keyword="";const r=document.getElementById("search-input");r&&(r.value="");const n=document.getElementById("current-category");n&&(n.textContent=` / ${j(e)}`),U()}async function U(){const e=document.getElementById("exercise-cards-container");e.innerHTML="<p>Loading exercises...</p>";try{const t=A[s.filter.toLowerCase()];if(!t){console.warn("❗ Невідомий фільтр:",s.filter);return}const r={[t]:s.category,keyword:s.keyword,page:s.page,limit:s.limit},o=(await z(r)).results;if(!o.length){e.innerHTML="<p>No exercises found.</p>";return}e.innerHTML=o.map(R).join("")}catch(t){e.innerHTML="<p>Error loading exercises.</p>",console.error("❌ Exercise loading error:",t.message)}}function R(e){return`
   <div class="workout-card ex-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          <button class="start-button">Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="../img/quote_icon_1.svg"
              width="24px"
              height="24px"
              alt="Running Icon"
            />
          </span>        
          <h3 class="workout-name">${e.name}</h3>
          <p class="workout-stats">
            Burned calories: ${e.burnedCalories} / ${e.time} min
            <br>
            Body part: ${e.bodyPart} <br>  Target: ${e.target}
          </p>
        </div>
      </div>
  `}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}const i=document.getElementById("exercise-cards-container"),D={muscles:"Muscles","body parts":"Body parts",equipment:"Equipment"};let d=[];function N(){document.querySelectorAll(".filter-btn").forEach(t=>{t.addEventListener("click",r=>{var o;const n=r.currentTarget.dataset.type.toLowerCase().trim();s.filter=n,s.page=1,s.category=null,s.keyword="",(o=document.querySelector(".filter-btn.active"))==null||o.classList.remove("active"),t.classList.add("active"),W(s.filter)})}),P()}async function P(){i.innerHTML="<p>Loading categories...</p>";try{d=(await H({page:1,limit:100})).results;const t=d.map(w).join("");i.innerHTML=t,h()}catch(e){console.error("❌ Категорії не завантажено:",e.message),i.innerHTML="<p>Error loading categories.</p>"}_()}function W(e){i.innerHTML="<p>Loading filtered categories...</p>";const t=D[e];if(!t){console.warn("❗ Невідомий фільтр:",e),i.innerHTML="<p>No filter selected.</p>";return}const r=d.filter(o=>o.filter.trim().toLowerCase()===t.toLowerCase());if(!r.length){i.innerHTML="<p>No categories found for this filter.</p>";return}const n=r.map(w).join("");i.innerHTML=n,h()}function h(){document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,r=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();O(t,r)})})}function w(e){return`
    <div class="category-card" 
     data-name="${e.name}" 
     data-type="${e.filter}" 
     data-id="${e.id}">
	 <div class="overlay"></div>
  <div class="category-card-bg" style="background-image: url('${e.imgURL}')">
    <div class="category-card-text">
      <h3 class="category-card-title">${T(e.name)}</h3>
      <p class="category-card-sub">${T(e.filter)}</p>
    </div>
  </div>
</div>

  `}function _(){const e=document.getElementById("search-input");e&&e.addEventListener("input",t=>{const r=t.target.value.trim().toLowerCase(),n=d.filter(v=>v.name.toLowerCase().startsWith(r));if(!n.length){i.innerHTML="<p>Нічого не знайдено.</p>";return}const o=n.map(w).join("");i.innerHTML=o,h()})}function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}const a=document.querySelector('[data-modal="rating"]'),c=a==null?void 0:a.querySelector("form"),g=c==null?void 0:c.querySelectorAll('input[name="rating"]'),X=c==null?void 0:c.querySelector(".rating-value"),m=a==null?void 0:a.querySelector("[data-modal-close]");g==null||g.forEach(e=>{e.addEventListener("change",()=>{X.textContent=e.value+".0"})});c==null||c.addEventListener("submit",Z);function Z(e){var L;e.preventDefault();const t=e.target,r=+((L=t.querySelector('[name="rating"]:checked'))==null?void 0:L.value)||0,n=t.querySelector('[name="email"]').value.trim(),o=t.querySelector('[name="comment"]').value.trim();if(!r||!n||!o){iziToast.error({message:"Будь ласка, заповніть всі поля"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){iziToast.error({message:"Введіть коректний email"});return}fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:r,email:n,comment:o})}).then(u=>{if(!u.ok)throw new Error("Не вдалося надіслати оцінку");k(),iziToast.success({message:"Дякуємо за вашу оцінку!"})}).catch(u=>{iziToast.error({message:u.message})})}m==null||m.addEventListener("click",k);function k(){a==null||a.classList.add("hidden")}const G=document.getElementById("burger"),C=document.getElementById("mobileMenu"),J=document.getElementById("closeMenu");document.addEventListener("DOMContentLoaded",()=>{N(),S.loadAnimation({container:document.getElementById("loader"),renderer:"svg",loop:!0,autoplay:!0,path:"/animations/loader.json"})});G.addEventListener("click",()=>{C.classList.add("active")});J.addEventListener("click",()=>{C.classList.remove("active")});window.addEventListener("scroll",q);p.scrollToTopBtn.addEventListener("click",$);const l=document.querySelector("#subscribe-form");l&&l.addEventListener("submit",async e=>{e.preventDefault();try{const t=l.email.value;await F(t),l.reset()}catch(t){console.log(t)}});document.getElementById("black-btn").addEventListener("click",async()=>{blackLoader.show(),await new Promise(e=>setTimeout(e,3e3)),blackLoader.hide()});
//# sourceMappingURL=index.js.map
