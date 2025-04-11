import{a as c}from"./vendor-M0pO2yrp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const E={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},l={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.querySelector(".close-button")},u="https://your-energy.b.goit.study/api";c.defaults.baseURL=u;const m={404:"Exercises not found for the given filters.",409:"Filters are required to perform the search.",500:"Something went wrong while fetching exercises. Please try again later."},x={400:"Invalid request. Please check the exercise ID format.",404:"Exercise not found with the provided ID.",500:"Something went wrong while fetching the exercise. Please try again later."},S={400:"Invalid request. Please check the email format.",404:"Endpoint not found. Please try again later.",409:"You are already subscribed.",500:"Something went wrong on the server. Please try again later."},g=async()=>{const{data:t}=await c.get("/quote");return t},d=()=>new Date().toISOString().split("T")[0],f=async()=>{try{const t=await g(),o=d(),r={...t,date:o};return localStorage.setItem("quoteOfTheDay",JSON.stringify(r)),r}catch(t){const{status:o}=t,r=m[o]||`Unexpected error (${t.message||"unknown"})`;throw{code:o,message:r}}};async function y(t,o){try{const r=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=d();let e,n,s;if(r!=null)e=r.date,a===e&&(n=r.author,s=r.quote);else{const i=await f();n=i.author,s=i.quote}t.textContent=s,o.textContent=n}catch(r){console.log("🚀 ~ error in getQuoteOfTheDay data rendering:",r)}}function h(t,o,r=!0){if(!o||o.length===0){t.innerHTML="";return}const a=o.map(e=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${r?`
            <button class="delete-button" aria-label="Delete workout">
              <img src="../img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${e._id}>Start ➔</button>
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
    </li>
    `).join("");t.innerHTML=a}const p=document.querySelector(".quote-day-card-text"),v=document.querySelector(".quote-day-card-author"),I=document.querySelector(".workout-list");function B(){l.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function w(){l.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function T(t,o){const r=t.findIndex(a=>a._id===o._id);r===-1?(t.push(o),w()):(t.splice(r,1),B()),localStorage.setItem("favorites",JSON.stringify(t))}async function q(){try{const t=localStorage.getItem("favorites"),o=JSON.parse(t);if(o&&o.length>0)h(I,o);else{const r=document.querySelector(".not-items-message");r.style.display="block"}}catch(t){console.log("🚀 ~ error in getFavoritesItems data rendering:",t)}}y(p,v);q();export{m as a,B as b,S as c,x as g,T as h,l as m,E as r,w as s};
//# sourceMappingURL=favorites-BSkPwvDC.js.map
