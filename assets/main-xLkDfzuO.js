const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-hIPR2DWz.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{i as h,a as w}from"./vendor-hIPR2DWz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();h.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",maxWidth:"432px",message:"Sorry, something went wrong."});const R=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),v={success:{iconUrl:R?"./img/success.svg":"/your-energy/img/success.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},error:{iconUrl:R?"./img/error.svg":"/your-energy/img/error.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040"}},ee="https://your-energy.b.goit.study/api";w.defaults.baseURL=ee;const te=async e=>{const{data:t}=await w.post("/subscription",{email:e});return t},H={404:"Exercises not found for the given filters.",409:"Filters are required to perform the search.",500:"Something went wrong while fetching exercises. Please try again later."},oe={400:"Invalid request. Please check the body.",404:"Exercise not found. Please ensure the exercise ID is correct.",409:"Rating update conflict. The rating already exists with this email.",500:"Something went wrong while updating the rating. Please try again later."},ne={400:"Invalid request. Please check the exercise ID format.",404:"Exercise not found with the provided ID.",500:"Something went wrong while fetching the exercise. Please try again later."},re={404:"Filters not found. Please check the filters configuration.",500:"Something went wrong while fetching filters. Please try again later."},se={400:"Invalid request. Please check the email format.",404:"Endpoint not found. Please try again later.",409:"You are already subscribed.",500:"Something went wrong on the server. Please try again later."},ae=async e=>{try{const{message:t}=await te(e);return h.show({...v.success,message:t,timeout:5e3}),t}catch(t){const{status:o}=t,n=se[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},k={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},a={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.getElementById("closeModalBtn")},g={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")},I={paginationContainer:document.getElementById("pagination")},d={cardsContainer:document.querySelector(".cards-container"),filterButtons:document.querySelectorAll(".filter-btn"),sectionTitle:document.querySelector(".home-title"),sectionSubTitle:document.querySelector(".current-category-name"),searchInput:document.querySelector(".search")};function ie(){const e=window.innerHeight/4;window.scrollY>e?k.scrollToTopBtn.classList.remove("invisible"):k.scrollToTopBtn.classList.add("invisible")}function ce(){window.scrollTo({top:0,behavior:"smooth"})}const le=e=>{const t=e.getAttribute("href");return new URL(t).pathname},de=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(o=>{le(o)===t?o.classList.add("active"):o.classList.remove("active")})},ue=()=>{document.body.style.overflow="hidden"},me=()=>{document.body.style.overflow=""},ge=()=>{g.backdrop.style.visibility="visible",g.backdrop.style.opacity=1,g.mobileMenu.style.transform="translateX(0%)",ue()},he=e=>{e.target===g.backdrop&&S()},pe=e=>{e.key==="Escape"&&g.mobileMenu.style.transform==="translateX(0%)"&&S()},fe=()=>{S()},S=()=>{g.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{g.backdrop.style.opacity=0,g.backdrop.style.visibility="hidden",me()},300)},ye=()=>window.innerWidth<768?{categoryLimit:9,exerciseLimit:8}:{categoryLimit:12,exerciseLimit:10},{categoryLimit:U,exerciseLimit:j}=ye(),ve=async e=>{const{data:t}=await w.get("/filters",{params:e});return t},we=async e=>{try{return await ve(e)}catch(t){const{status:o}=t,n=re[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},Ee="modulepreload",be=function(e){return"/your-energy/"+e},F={},Le=function(t,o,n){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(o.map(l=>{if(l=be(l),l in F)return;F[l]=!0;const u=l.endsWith(".css"),y=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${y}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Ee,u||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise(($,L)=>{m.addEventListener("load",$),m.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return r.then(i=>{for(const c of i||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class z{constructor({path:t=new URL("/your-energy/animations/loader.json",import.meta.url).href,size:o=200,color:n,timeout:r=1e3}={}){this._path=t,this._defaultSize=o,this._defaultColor=n??getComputedStyle(document.documentElement).getPropertyValue("--text-color").trim(),this._defaultTimeout=r??null,this._loadPromise=null,this._instances=new Map}async _loadLottie(){return this._loadPromise||(this._loadPromise=Le(()=>import("./vendor-hIPR2DWz.js").then(t=>t.l),__vite__mapDeps([0,1])).then(t=>t.default)),this._loadPromise}_resolveTarget(t){return typeof t=="string"?document.getElementById(t):t}async show(t,{size:o,color:n,timeout:r}={}){const s=this._resolveTarget(t);if(!s)throw new Error("Target not found");if(this._instances.has(s))return;const i=o??this._defaultSize,c=n??this._defaultColor,l=r??this._defaultTimeout;getComputedStyle(s).position==="static"&&(s.style.position="relative");const y=document.createElement("div");y.classList="loader-wrapper",y.style.cssText=`
			width: ${i}px;
			height: ${i}px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			z-index: 10;
		`;const m=document.createElement("div");m.style.cssText="width: 100%; height: 100%;",y.appendChild(m),s.appendChild(y);const L=(await this._loadLottie()).loadAnimation({container:m,renderer:"svg",loop:!0,autoplay:!0,path:this._path});L.addEventListener("DOMLoaded",()=>{m.querySelectorAll("path").forEach(Z=>Z.setAttribute("fill",c))}),this._instances.set(s,{wrapper:y,animation:L,timeout:l}),l&&await new Promise(M=>setTimeout(M,l))}async hide(t){const o=this._resolveTarget(t);if(!o||!this._instances.has(o))return;const{wrapper:n,animation:r,timeout:s}=this._instances.get(o);r.destroy(),n.remove(),this._instances.delete(o)}}const N=({totalPages:e,onPageChange:t,query:o})=>{const n=o.page;if(I.paginationContainer.innerHTML="",e<=1)return;const r=(c,l)=>{const u=document.createElement("button");return u.textContent=l,u.classList.add("page-button"),l===n?u.classList.add("active"):u.addEventListener("click",()=>t(l)),u},s=Math.max(1,n-2),i=Math.min(e,n+2);for(let c=s;c<=i;c+=1)I.paginationContainer.appendChild(r(o,c))},J=()=>{I.paginationContainer.innerHTML=""},E=e=>e.charAt(0).toUpperCase()+e.slice(1),V=e=>e.replace(/\s+/g,""),xe=async e=>{const{data:t}=await w.get("/exercises",{params:e});return t},ke=async(e,t)=>{const{data:o}=await w.patch(`/exercises/${e}/rating`,{...t});return o},Ce=async e=>{const{data:t}=await w.get(`/exercises/${e}`);return t},Se=async e=>{try{return await xe(e)}catch(t){const{status:o}=t,n=H[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},Te=async(e,t)=>{try{const o=await ke(e,t);return h.show({...v.success,message:"Your rating has been successfully added"}),o}catch(o){const{status:n}=o,r=oe[n]||`Unexpected error (${o.message||"unknown"})`;throw h.show({...v.error,message:r}),{code:n,message:r}}},Be=async e=>{try{return await Ce(e)}catch(t){const{status:o}=t,n=ne[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},Ie=e=>`${Math.floor(e)}.0`;async function P(e,t){d.cardsContainer.innerHTML="",J();try{t&&(e.keyword=t),await b.show(d.cardsContainer.id);const o=await Se(e);await b.hide(d.cardsContainer.id);const{page:n,perPage:r,totalPages:s,results:i}=o;if(i.length<=0){d.cardsContainer.innerHTML='<p class="text-for-n-data">No exercises found for this filter.</p>';return}qe(i),N({totalPages:s,query:e,onPageChange:l=>{const u={...e,page:l};P(u)}})}catch{d.cardsContainer.innerHTML=""}finally{await b.hide(d.cardsContainer.id)}}const qe=async e=>{W(!0);const t=e.map(Pe).join("");d.cardsContainer.innerHTML=t};function Pe(e){return`
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${Ie(e.rating)}</span>
          <img class="star-icon"
              src="./img/star.svg"
              width="18"
              height="18"
              alt="Star Icon"
          >
        </div>

        <button class="start-button" type="button" data-exercise-id="${e._id}">
          Start <img class="start-icon"
              src="./img/arrow-right.svg"
              width="16"
              height="16"
              alt="Arrow right Icon"
            >
        </button>
      </div>

      <div class="workout-body">
        <img class="running-icon"
              src="./img/runner.svg"
              width="24"
              height="24"
              alt="Running Man Icon"
        >

        <h3 class="workout-name">${E(e.name)}</h3>
      </div>

      <div class="workout-stats">
        <div class="workout-stats-item stats-calories">
        <p class="workout-stats-text">Burned calories:</p>
          <span class="workout-stats-value">${e.burnedCalories} / ${e.time} min</span>
        </div>
        <div class="workout-stats-item stats-part">
        <p class="workout-stats-text">Body part:</p><span class="workout-stats-value">${E(e.bodyPart)}</span></div>
        <div class="workout-stats-item stats-target"><p class="workout-stats-text">Target:</p><span class="workout-stats-value">${E(e.target)}</span></div>
      </div>
    </li>
  `}const D=e=>{e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(!t)return;const o=document.querySelector(".filter-btn.active").textContent,n={[V(o).toLowerCase()]:d.sectionSubTitle.textContent.toLowerCase(),page:1,limit:j};P(n,t)},b=new z({size:200}),_=async e=>{d.cardsContainer.innerHTML="",J();try{await b.show(d.cardsContainer.id);const t=await we(e);await b.hide(d.cardsContainer.id);const{page:o,perPage:n,totalPages:r,results:s}=t;if(s.length<=0){d.cardsContainer.innerHTML='<p class="text-for-n-data not-items-message">No categories found for this filter.</p>';return}_e(s),N({totalPages:r,query:e,onPageChange:c=>{const l={...e,page:c};_(l)}})}catch{d.cardsContainer.innerHTML=""}},_e=async e=>{d.sectionTitle.textContent="Exercises",d.sectionSubTitle.textContent="",W(!1);const t=e.map(Me).join("");d.cardsContainer.innerHTML=t,$e()},$e=()=>{document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,o=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();Re(t,o)})})},Me=e=>`
		<li
			class="category-card"
			data-name="${e.name}"
			data-type="${e.filter}"
			data-id="${e.id}"
			style="
				background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url('${e.imgURL}');
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			"
		>
			<div class="category-card-text">
				<h3 class="category-card-title">${E(e.name)}</h3>
				<p class="category-card-sub">${e.filter}</p>
			</div>
		</li>

 	 `,Re=(e,t,o)=>{d.searchInput.value="",d.sectionTitle.textContent="Exercises /",d.sectionSubTitle.textContent=`${E(e)}`;const n={[V(t)]:e,page:1,limit:j};P(n)},W=e=>{const t=d.searchInput;t.style.display=e?"block":"none",e?t.addEventListener("submit",D):t.removeEventListener("submit",D)},Fe=()=>{De();const t={filter:document.querySelector(".filter-btn.active").textContent.trim(),page:1,limit:U};_(t)},De=()=>{d.filterButtons.forEach(e=>{e.addEventListener("click",Oe)})},Oe=e=>{const t=e.target;Ae(t);const n={filter:t.textContent.trim(),page:1,limit:U};_(n)},Ae=e=>{d.filterButtons.forEach(t=>t.classList.remove("active")),e.classList.add("active")};function He(e,t,o=!0){if(!t||t.length===0){e.innerHTML="";return}const n=t.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${o?`
            <button class="delete-button js-delete-button" aria-label="Delete workout" data-exercise-id=${r._id}>
              <img src="./img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${r._id}>Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="./img/quote_icon_1.svg"
              width="24"
              height="24"
              alt="Running Icon"
            >
          </span>
          <h3 class="workout-name">${r.name}</h3>
          <p class="workout-stats">
            Burned calories: ${r.burnedCalories} / ${r.time} min
            <br>
            Body part: ${r.bodyPart} <br>  Target: ${r.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");e.innerHTML=n}const Ue=document.querySelector(".workout-list");function Q(){a.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function X(){a.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function je(e,t){const o=e.findIndex(n=>n._id===t._id);o===-1?(e.push(t),X()):(e.splice(o,1),Q()),localStorage.setItem("favorites",JSON.stringify(e))}function ze(e){const t=e.target.closest(".js-delete-button").dataset.exerciseId,o=localStorage.getItem("favorites"),r=JSON.parse(o).filter(s=>s._id!==t);localStorage.setItem("favorites",JSON.stringify(r)),G()}async function G(){try{const e=localStorage.getItem("favorites"),t=JSON.parse(e);if(He(Ue,t),t&&t.length>0)document.querySelectorAll(".js-delete-button").forEach(o=>{o.addEventListener("click",n=>{ze(n)})});else{const o=document.querySelector(".not-items-message");o.style.display="block"}}catch{}}function x(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ne(e){a.modalRating.exerciseData=e,a.modalTitle.textContent=x(e.name),a.modalRatingValue.textContent=e.rating,a.modalImage.src=e.gifUrl,a.modalImage.alt=e.name,a.modalTarget.textContent=x(e.target),a.modalBodyPart.textContent=x(e.bodyPart),a.modalEquipment.textContent=x(e.equipment),a.modalPopular.textContent=e.popularity,a.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,a.modalDescription.textContent=e.description,a.stars.forEach((s,i)=>{i<Math.floor(e.rating)?s.classList.add("filled"):s.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]");t.some(s=>s._id===e._id)?X():Q();const n=()=>je(t,e);a.favoriteButton.addEventListener("click",n),a.closeModalBtn.addEventListener("click",q);const r=s=>{s.target===a.modalExercises?q():s.target===a.modalRating&&C()};window.addEventListener("click",r),a.modalExercises._windowClickHandler=r,a.modalExercises._favoriteClickHandler=n,Je(a.modalExercises),a.ratingButton.addEventListener("click",C)}function Je(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function C(){a.modalExercises.classList.toggle("hidden"),a.modalExercises.classList.toggle("show"),a.modalRating.classList.toggle("hidden"),a.modalRating.classList.toggle("show")}function q(){a.modalExercises.classList.remove("show"),setTimeout(()=>{a.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",a.closeModalBtn.removeEventListener("click",q),a.favoriteButton.removeEventListener("click",a.modalExercises._favoriteClickHandler),a.ratingButton.removeEventListener("click",C),window.removeEventListener("click",a.modalExercises._windowClickHandler),a.modalTitle.textContent="",a.modalRatingValue.textContent="",a.modalImage.src="",a.modalImage.alt="",a.modalTarget.textContent="",a.modalBodyPart.textContent="",a.modalEquipment.textContent="",a.modalPopular.textContent="",a.modalCalories.textContent="",a.modalDescription.textContent=""}k.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const o=t.dataset.exerciseId;if(o)try{const n=await Be(o);Ne(n)}catch(n){console.error("Error fetching exercise:",n)}finally{}}});const p=document.querySelector('[data-modal="rating"]'),f=p==null?void 0:p.querySelector("form"),T=f==null?void 0:f.querySelectorAll('input[name="rating"]'),Ve=f==null?void 0:f.querySelector(".rating-value"),B=p==null?void 0:p.querySelector("[data-modal-close]");T==null||T.forEach(e=>{e.addEventListener("change",()=>{Ve.textContent=e.value+".0"})});f==null||f.addEventListener("submit",We);async function We(e){var i;e.preventDefault();const t=e.target,o=+((i=t.querySelector('[name="rating"]:checked'))==null?void 0:i.value)||0,n=t.querySelector('[name="email"]').value.trim(),r=t.querySelector('[name="comment"]').value.trim();if(!o||!n||!r){h.error({title:"Please fiil in all fields"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){h.error({title:"Type valid email"});return}try{const c=a.modalRating.exerciseData;if(!c)throw new Error("Exercise data is not available.");const l=c._id,y=await Te(l,{rate:o,email:n,review:r});K()}catch{}finally{}}B==null||B.addEventListener("click",K);function K(){p==null||p.classList.add("hidden"),C()}const Qe="your-energy",Xe="1.0.0",Ge="module",Ke={dev:"vite",build:"vite build --base=/your-energy/",preview:"vite preview"},Ye={glob:"^11.0.0",postcss:"^8.4.41","postcss-sort-media-queries":"^5.2.0",vite:"^5.4.6"},Ze="Andriy <andygrigs88@gmail.com>",et="ISC",tt="/your-energy",ot={axios:"^1.8.4",izitoast:"^1.4.0","lottie-web":"^5.12.2","vite-plugin-full-reload":"^1.2.0","vite-plugin-html-inject":"^1.1.2"},nt={name:Qe,private:!0,version:Xe,type:Ge,scripts:Ke,devDependencies:Ye,author:Ze,license:et,homepage:tt,dependencies:ot},O=`${window.location.origin}${nt.homepage}`,rt=document.querySelectorAll('a[href^="/"]');function st(){O&&rt.forEach(e=>{const t=e.getAttribute("href"),o=`${O}${t}`;e.href=new URL(o)})}const at=async()=>{const{data:e}=await w.get("/quote");return e},Y=()=>new Date().toISOString().split("T")[0],it=async()=>{try{const e=await at(),t=Y(),o={...e,date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(e){const{status:t}=e,o=H[t]||`Unexpected error (${e.message||"unknown"})`;throw{code:t,message:o}}},A=new z({size:200,color:"#f4f4f4"});async function ct(){document.querySelector(".quote-day-card-content");const e=document.querySelector(".quote-day-card-text"),t=document.querySelector(".quote-day-card-author");try{const o=JSON.parse(localStorage.getItem("quoteOfTheDay"));await A.show(e.parentElement);const n=Y();let r,s;if(o!=null&&o.date===n)r=o.author,s=o.quote;else{const i=await it();r=i.author,s=i.quote}e.textContent=s,t.textContent=r}catch{}finally{await A.hide(e.parentElement)}}function lt(){st(),document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;(t==="/your-energy/"||t==="/")&&Fe(),(t==="/favorites"||t==="/your-energy/favorites")&&G()}),ct();const e=document.querySelector("#subscribe-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();try{const o=e.email.value;await ae(o),e.reset()}catch(o){console.log(o)}}),g.burgerButton.addEventListener("click",ge),g.closeButton.addEventListener("click",S),g.backdrop.addEventListener("click",he),document.addEventListener("keydown",pe),g.navLinks.forEach(t=>t.addEventListener("click",fe)),document.addEventListener("DOMContentLoaded",de()),window.addEventListener("scroll",ie),k.scrollToTopBtn.addEventListener("click",ce)}lt();
//# sourceMappingURL=main-xLkDfzuO.js.map
