import{i as p,a as m}from"./vendor-XxEN_XWt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();p.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",maxWidth:"432px",message:"Sorry, something went wrong."});const u=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),N={success:{iconUrl:u?"./img/success.svg":"/your-energy/img/success.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},error:{iconUrl:u?"./img/error.svg":"/your-energy/img/error.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040"}},f="https://your-energy.b.goit.study/api";m.defaults.baseURL=f;const h={404:"Exercises not found for the given filters.",409:"Filters are required to perform the search.",500:"Something went wrong while fetching exercises. Please try again later."},$={400:"Invalid request. Please check the exercise ID format.",404:"Exercise not found with the provided ID.",500:"Something went wrong while fetching the exercise. Please try again later."},_={400:"Invalid request. Please check the email format.",404:"Endpoint not found. Please try again later.",409:"You are already subscribed.",500:"Something went wrong on the server. Please try again later."},l={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},g={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.querySelector(".close-button")},s={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")};function v(){const e=window.innerHeight/4;window.scrollY>e?l.scrollToTopBtn.classList.remove("invisible"):l.scrollToTopBtn.classList.add("invisible")}function b(){window.scrollTo({top:0,behavior:"smooth"})}const w=()=>{const e=document.querySelectorAll(".nav-link"),o=window.location.pathname;e.forEach(t=>{t.getAttribute("href")===o?t.classList.add("active"):t.classList.remove("active")})},B=()=>{document.body.style.overflow="hidden"},k=()=>{document.body.style.overflow=""},E=()=>{s.backdrop.style.visibility="visible",s.backdrop.style.opacity=1,s.mobileMenu.style.transform="translateX(0%)",B()},T=e=>{e.target===s.backdrop&&c()},I=e=>{e.key==="Escape"&&s.mobileMenu.style.transform==="translateX(0%)"&&c()},S=()=>{c()},c=()=>{s.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{s.backdrop.style.opacity=0,s.backdrop.style.visibility="hidden",k()},300)},q=async()=>{const{data:e}=await m.get("/quote");return e},y=()=>new Date().toISOString().split("T")[0],L=async()=>{try{const e=await q(),o=y(),t={...e,date:o};return localStorage.setItem("quoteOfTheDay",JSON.stringify(t)),t}catch(e){const{status:o}=e,t=h[o]||`Unexpected error (${e.message||"unknown"})`;throw{code:o,message:t}}};async function x(e,o){try{const t=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=y();let r,n,i;if(t!=null&&t.date===a)n=t.author,i=t.quote;else{const d=await L();n=d.author,i=d.quote}e.textContent=i,o.textContent=n}catch(t){console.log("🚀 ~ error in getQuoteOfTheDay data rendering:",t)}}function O(e,o,t=!0){if(!o||o.length===0){e.innerHTML="";return}const a=o.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${t?`
            <button class="delete-button" aria-label="Delete workout">
              <img src="../img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${r._id}>Start ➔</button>
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
          <h3 class="workout-name">${r.name}</h3>
          <p class="workout-stats">
            Burned calories: ${r.burnedCalories} / ${r.time} min
            <br>
            Body part: ${r.bodyPart} <br>  Target: ${r.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");e.innerHTML=a}const D=document.querySelector(".quote-day-card-text"),F=document.querySelector(".quote-day-card-author"),M=document.querySelector(".workout-list");s.burgerButton.addEventListener("click",E);s.closeButton.addEventListener("click",c);s.backdrop.addEventListener("click",T);document.addEventListener("keydown",I);s.navLinks.forEach(e=>e.addEventListener("click",S));document.addEventListener("DOMContentLoaded",w());window.addEventListener("scroll",v);l.scrollToTopBtn.addEventListener("click",b);function C(){g.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function P(){g.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function j(e,o){const t=e.findIndex(a=>a._id===o._id);t===-1?(e.push(o),P()):(e.splice(t,1),C()),localStorage.setItem("favorites",JSON.stringify(e))}async function R(){try{const e=localStorage.getItem("favorites"),o=JSON.parse(e);if(o&&o.length>0)O(M,o);else{const t=document.querySelector(".not-items-message");t.style.display="block"}}catch(e){console.log("🚀 ~ error in getFavoritesItems data rendering:",e)}}x(D,F);R();export{h as a,C as b,_ as c,v as d,b as e,$ as g,j as h,N as i,g as m,l as r,P as s};
//# sourceMappingURL=favorites-BIEATI1K.js.map
