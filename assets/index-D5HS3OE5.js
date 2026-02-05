(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-2/db.json")).json()).menu.map(r=>r.dropdown.length>0?`<li>
              <details>
                <summary class='capitalize'>${r.value}</summary>
                <ul class="p-2 bg-base-100 w-40 z-1">
                  ${r.dropdown.map(e=>`<li><a href='${e.link}'>${e.value}</a></li>`).join(" ")}
                </ul>
              </details>
            </li>`:` <li><a href=${r.link} class='capitalize'>${r.value}</a></li>`);document.querySelector(".menu-desktop").innerHTML=a.join(" ")}catch(s){console.log(s)}},c=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-2/db.json")).json()).slider.map(r=>`<swiper-slide class="relative">
            <div class="h-full">
              <a href=${r.url}>
                <img
                src=${r.image}
                class="w-full h-full"
                alt=""
              />
            <div class="absolute top-10 left-10">
              <div class="title" data-swiper-parallax="-300">${r.title}</div>
              
              <div class="text" data-swiper-parallax="-100">
                <p>
                  ${r.description}
                </p>
              </div>
              </div>
              </a> 
            </div>
          </swiper-slide>`);document.querySelector(".mySwiper").innerHTML=a.join(" ")}catch(s){console.log(s)}},n=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-2/db.json")).json()).products.map(r=>` <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src=${r.image}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${r.title}</h2>
              <p>${r.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>`);document.querySelector(".products").innerHTML=a.join(" ")}catch(s){console.log(s)}};o();c();n();
