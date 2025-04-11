import{g as i}from"./assets/error-messages-Bd4pWVpB.js";import{a as l}from"./assets/vendor-M0pO2yrp.js";const d=async()=>{const{data:t}=await l.get("/quote");return t},u=()=>new Date().toISOString().split("T")[0],g=async()=>{try{const t=await d(),e=u(),o={...t,date:e};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(t){const{status:e}=t,o=i[e]||`Unexpected error (${t.message||"unknown"})`;throw{code:e,message:o}}};async function h(t,e){try{const o=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=u(),r=o.date;let s,n;if(a===r)s=o.author,n=o.quote;else{const c=await g();s=c.author,n=c.quote}t.textContent=n,e.textContent=s}catch(o){console.log("🚀 ~ error in getQuoteOfTheDay data rendering:",o)}}function y(t,e,o=!0){if(!e||e.length===0){t.innerHTML="";return}const a=e.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${o?`
            <button class="delete-button" aria-label="Delete workout">
              <img src="../img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
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
          <h3 class="workout-name">${r.name}</h3>
          <p class="workout-stats">
            Burned calories: ${r.burnedCalories} / ${r.time} min
            <br>
            Body part: ${r.bodyPart} <br>  Target: ${r.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");t.innerHTML=a}const m=document.querySelector(".quote-day-card-text"),p=document.querySelector(".quote-day-card-author"),w=document.querySelector(".workout-list");async function f(){try{const t=localStorage.getItem("favorites"),e=JSON.parse(t);if(e&&e.length>0)y(w,e);else{const o=document.querySelector(".not-items-message");o.style.display="block"}}catch(t){console.log("🚀 ~ error in getFavoritesItems data rendering:",t)}}h(m,p);f();
//# sourceMappingURL=favorites.js.map
