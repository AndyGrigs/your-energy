import{i as a,a as l}from"./vendor-BPZvktA6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();a.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",maxWidth:"432px",message:"Sorry, something went wrong."});const n=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),u={success:{iconUrl:n?"./img/success.svg":"/your-energy/img/success.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},error:{iconUrl:n?"./img/error.svg":"/your-energy/img/error.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040"}},c="https://your-energy.b.goit.study/api";l.defaults.baseURL=c;const g={404:"Exercises not found for the given filters.",409:"Filters are required to perform the search.",500:"Something went wrong while fetching exercises. Please try again later."},f={400:"Invalid request. Please check the exercise ID format.",404:"Exercise not found with the provided ID.",500:"Something went wrong while fetching the exercise. Please try again later."},p={400:"Invalid request. Please check the email format.",404:"Endpoint not found. Please try again later.",409:"You are already subscribed.",500:"Something went wrong on the server. Please try again later."},y={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn")};document.getElementById("exerciseModal"),document.getElementById("modalTitle"),document.getElementById("modalRating"),document.getElementById("modalImage"),document.getElementById("modalTarget"),document.getElementById("modalBodyPart"),document.getElementById("modalEquipment"),document.getElementById("modalPopular"),document.getElementById("modalCalories"),document.getElementById("modalDescription"),document.querySelectorAll(".star"),document.getElementById("favoriteButton"),document.querySelector(".close-button");export{f as a,p as c,g,u as i,y as r};
//# sourceMappingURL=refs-ywUYNeeh.js.map
