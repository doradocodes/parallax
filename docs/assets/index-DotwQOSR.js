(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();window.onload=function(){window.scroll(0,500)};window.onscroll=function(){document.querySelectorAll("img").forEach(function(t,o){t.style.transform="translateX("+o**2*window.scrollY*.001+"px)",console.log(o,t.style.transform)})};document.querySelector("#app").innerHTML=`
  <img src="img/Layer%201.png" alt="">
  <img src="img/Layer%204.png" alt="">
  <img src="img/Layer%203.png" alt="">
  <img src="img/Layer%202.png" alt="">
`;
