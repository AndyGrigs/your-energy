import{g as i}from"./assets/error-messages-Bd4pWVpB.js";import{a as l}from"./assets/vendor-M0pO2yrp.js";const d=async()=>{const{data:t}=await l.get("/quote");return t},u=()=>new Date().toISOString().split("T")[0],g=async()=>{try{const t=await d(),o=u(),e={...t,date:o};return localStorage.setItem("quoteOfTheDay",JSON.stringify(e)),e}catch(t){const{status:o}=t,e=i[o]||`Unexpected error (${t.message||"unknown"})`;throw{code:o,message:e}}};async function h(t,o){try{const e=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=u();let r,s,n;if(e!=null)r=e.date,a===r&&(s=e.author,n=e.quote);else{const c=await g();s=c.author,n=c.quote}t.textContent=n,o.textContent=s}catch(e){console.log("🚀 ~ error in getQuoteOfTheDay data rendering:",e)}}function y(t,o,e=!0){if(!o||o.length===0){t.innerHTML="";return}const a=o.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${e?`
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
    `).join("");t.innerHTML=a}const m=document.querySelector(".quote-day-card-text"),p=document.querySelector(".quote-day-card-author"),f=document.querySelector(".workout-list");async function w(){try{const t=localStorage.getItem("favorites"),o=JSON.parse(t);if(o&&o.length>0)y(f,o);else{const e=document.querySelector(".not-items-message");e.style.display="block"}}catch(t){console.log("🚀 ~ error in getFavoritesItems data rendering:",t)}}h(m,p);w();
//# sourceMappingURL=favorites.js.map
