import{g as n,a as c}from"./assets/refs-D9_6AxTM.js";import{a as s}from"./assets/vendor-DmlZq1pp.js";const i=async()=>{const{data:t}=await s.get("/quote");return t},u=()=>new Date().toISOString().split("T")[0],d=async()=>{try{const t=await i(),e=u(),o={...t,date:e};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(t){const{status:e}=t,o=n[e]||`Unexpected error (${t.message||"unknown"})`;throw{code:e,message:o}}};async function g(t,e){try{const o=await d(),r=o.author,a=o.quote;t.textContent=a,e.textContent=r,console.log(t)}catch(o){console.log("🚀 ~ error in getQuoteOfTheDay data rendering:",o)}}function l(t,e,o=!0){if(!e||e.length===0){t.innerHTML="";return}const r=e.map(a=>`
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
          <h3 class="workout-name">${a.name}</h3>
          <p class="workout-stats">
            Burned calories: ${a.burnedCalories} / ${a.time} min
            <br>
            Body part: ${a.bodyPart} <br>  Target: ${a.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");t.innerHTML=r}const h=async t=>{const{data:e}=await s.get(`/exercises/${t}`);return e},m=async t=>{try{return await h(t)}catch(e){const{status:o}=e,r=c[o]||`Unexpected error (${e.message||"unknown"})`;throw{code:o,message:r}}},y=document.querySelector(".quote-day-card-text"),f=document.querySelector(".quote-day-card-author"),w=document.querySelector(".workout-list");async function k(){try{let t=[];const e=localStorage.getItem("favorites"),o=JSON.parse(e);for(const r of o){const a=await m(r);t.push(a)}l(w,t)}catch(t){console.log("🚀 ~ error in getFavoritesItems data rendering:",t)}}g(y,f);const p="64f389465ae26083f39b17a2",_="64f389465ae26083f39b17a7",b="64f389465ae26083f39b17a4",v="64f389465ae26083f39b17a5",x=[p,_,b,v],q=JSON.stringify(x);localStorage.setItem("favorites",q);k();
//# sourceMappingURL=favorites.js.map
