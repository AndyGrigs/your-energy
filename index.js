const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-B5bK_26z.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{i as E,c as B,g as q,r as k,m as o,s as P,a as I,h as R,b as $,d as A}from"./assets/favorites-DByst4lb.js";import{a as b,i as L}from"./assets/vendor-B5bK_26z.js";const z=async e=>{const{data:t}=await b.post("/subscription",{email:e});return t},U=async e=>{try{const{message:t}=await z(e);return L.show({...E.success,message:t,timeout:5e3}),t}catch(t){const{status:s}=t,n=B[s]||`Unexpected error (${t.message||"unknown"})`;throw L.show({...E.error,message:n}),{code:s,message:n}}},F=async e=>{const{data:t}=await b.get(`/exercises/${e}`);return t},O=async e=>{try{return await F(e)}catch(t){const{status:s}=t,n=q[s]||`Unexpected error (${t.message||"unknown"})`;throw{code:s,message:n}}};document.getElementById("exercise-cards-container");function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e){o.modalTitle.textContent=g(e.name),o.modalRatingValue.textContent=e.rating,o.modalImage.src=e.gifUrl,o.modalImage.alt=e.name,o.modalTarget.textContent=g(e.target),o.modalBodyPart.textContent=g(e.bodyPart),o.modalEquipment.textContent=g(e.equipment),o.modalPopular.textContent=e.popularity,o.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,o.modalDescription.textContent=e.description,o.stars.forEach((c,r)=>{r<Math.floor(e.rating)?c.classList.add("filled"):c.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]"),s=t.some(c=>c._id===e._id);console.log("exercise:",e),console.log("favorites:",t),console.log("isInFavorites:",s),s?P():I();const n=()=>R(t,e);o.favoriteButton.addEventListener("click",n),o.closeModalBtn.addEventListener("click",y);const a=c=>{c.target===o.modalExercises?y():c.target===o.modalRating&&p()};window.addEventListener("click",a),o.modalExercises._windowClickHandler=a,o.modalExercises._favoriteClickHandler=n,D(o.modalExercises),o.ratingButton.addEventListener("click",p)}function D(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function p(){o.modalExercises.classList.toggle("hidden"),o.modalExercises.classList.toggle("show"),o.modalRating.classList.toggle("hidden"),o.modalRating.classList.toggle("show")}function y(){o.modalExercises.classList.remove("show"),setTimeout(()=>{o.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",o.closeModalBtn.removeEventListener("click",y),o.favoriteButton.removeEventListener("click",o.modalExercises._favoriteClickHandler),o.ratingButton.removeEventListener("click",p),window.removeEventListener("click",o.modalExercises._windowClickHandler)}k.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const s=t.dataset.exerciseId;if(s)try{const n=await O(s);M(n)}catch(n){console.error("Error fetching exercise:",n)}}});const l=document.querySelector('[data-modal="rating"]'),d=l==null?void 0:l.querySelector("form"),w=d==null?void 0:d.querySelectorAll('input[name="rating"]'),H=d==null?void 0:d.querySelector(".rating-value"),v=l==null?void 0:l.querySelector("[data-modal-close]");w==null||w.forEach(e=>{e.addEventListener("change",()=>{H.textContent=e.value+".0"})});d==null||d.addEventListener("submit",j);function j(e){var r;e.preventDefault();const t=e.target,s=+((r=t.querySelector('[name="rating"]:checked'))==null?void 0:r.value)||0,n=t.querySelector('[name="email"]').value.trim(),a=t.querySelector('[name="comment"]').value.trim();if(!s||!n||!a){iziToast.error({message:"Будь ласка, заповніть всі поля"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){iziToast.error({message:"Введіть коректний email"});return}fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:s,email:n,comment:a})}).then(i=>{if(!i.ok)throw new Error("Не вдалося надіслати оцінку");x(),iziToast.success({message:"Дякуємо за вашу оцінку!"})}).catch(i=>{iziToast.error({message:i.message})})}v==null||v.addEventListener("click",x);function x(){l==null||l.classList.add("hidden"),p()}const V="modulepreload",J=function(e){return"/your-energy/"+e},C={},W=function(t,s,n){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(s.map(m=>{if(m=J(m),m in C)return;C[m]=!0;const h=m.endsWith(".css"),S=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${S}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":V,h||(u.as="script"),u.crossOrigin="",u.href=m,i&&u.setAttribute("nonce",i),document.head.appendChild(u),h)return new Promise((T,_)=>{u.addEventListener("load",T),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return a.then(r=>{for(const i of r||[])i.status==="rejected"&&c(i.reason);return t().catch(c)})};class Z{constructor({target:t,path:s="/animations/loader.json",size:n=80,color:a="#000"}){if(this.target=typeof t=="string"?document.querySelector(t):t,!this.target)throw new Error("Target element not found for Loader");this._path=s,this._size=n,this._color=a,this._loaded=!1,this.wrapper=document.createElement("div"),this.wrapper.style.cssText=`
      width: ${n}px;
      height: ${n}px;
      display: none;
      position: relative;
    `,this.animContainer=document.createElement("div"),this.animContainer.style.cssText=`
      width: 100%;
      height: 100%;
    `,this.wrapper.appendChild(this.animContainer),this.target.appendChild(this.wrapper)}async _init(){if(this._loaded)return;const{default:t}=await W(async()=>{const{default:n}=await import("./assets/vendor-B5bK_26z.js").then(a=>a.l);return{default:n}},__vite__mapDeps([0,1]));t.loadAnimation({container:this.animContainer,renderer:"svg",loop:!0,autoplay:!0,path:this._path}).addEventListener("DOMLoaded",()=>{this.animContainer.querySelectorAll("path").forEach(a=>a.setAttribute("fill",this._color))}),this._loaded=!0,await new Promise(n=>setTimeout(n,50))}async show(){await this._init(),this.wrapper.style.display="block"}hide(){this.wrapper.style.display="none"}}window.addEventListener("scroll",$);k.scrollToTopBtn.addEventListener("click",A);const f=document.querySelector("#subscribe-form");f&&f.addEventListener("submit",async e=>{e.preventDefault();try{const t=f.email.value;await U(t),f.reset()}catch(t){console.log(t)}});new Z({target:"#red-loader",size:50,color:"red"});document.getElementById("black-btn").addEventListener("click",async()=>{blackLoader.show(),await new Promise(e=>setTimeout(e,3e3)),blackLoader.hide()});
//# sourceMappingURL=index.js.map
