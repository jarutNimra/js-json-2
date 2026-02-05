(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-1/db.json")).json()).menu.map(t=>t.dropdown.length>0?`<li>
              <details>
                <summary class='capitalize'>${t.value}</summary>
                <ul class="p-2 bg-base-100 w-40 z-1">
                  ${t.dropdown.map(e=>`<li><a href='${e.link}'>${e.value}</a></li>`).join(" ")}
                </ul>
              </details>
            </li>`:` <li><a href=${t.link} class='capitalize'>${t.value}</a></li>`);document.querySelector(".menu-desktop").innerHTML=a.join(" ")}catch(s){console.log(s)}},c=async()=>{try{let a=(await(await fetch("(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-1/db.json")).json()).menu.map(t=>t.dropdown.length>0?`<li>
              <details>
                <summary class='capitalize'>${t.value}</summary>
                <ul class="p-2 bg-base-100 w-40 z-1">
                  ${t.dropdown.map(e=>`<li><a href='${e.link}'>${e.value}</a></li>`).join(" ")}
                </ul>
              </details>
            </li>`:` <li><a href=${t.link} class='capitalize'>${t.value}</a></li>`);document.querySelector(".menu-desktop").innerHTML=a.join(" ")}catch(s){console.log(s)}},c=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-1/db.json")).json()).slider.map(t=>`<swiper-slide class="relative">
            <div class="h-full">
              <a href=${t.url}>
                <img
                src=${t.image}
                class="w-full h-full"
                alt=""
              />
            <div class="absolute top-10 left-10">
              <div class="title" data-swiper-parallax="-300">${t.title}</div>
              
              <div class="text" data-swiper-parallax="-100">
                <p>
                  ${t.description}
                </p>
              </div>
              </div>
              </a> 
            </div>
          </swiper-slide>`);document.querySelector(".mySwiper").innerHTML=a.join(" ")}catch(s){console.log(s)}},n=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-1/db.json")).json()).products.map(t=>` <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src=${t.image}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${t.title}</h2>
              <p>${t.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>`);document.querySelector(".products").innerHTML=a.join(" ")}catch(s){console.log(s)}};i();c();n();/db.json")).json()).slider.map(t=>`<swiper-slide class="relative">
            <div class="h-full">
              <a href=${t.url}>
                <img
                src=${t.image}
                class="w-full h-full"
                alt=""
              />
            <div class="absolute top-10 left-10">
              <div class="title" data-swiper-parallax="-300">${t.title}</div>
              
              <div class="text" data-swiper-parallax="-100">
                <p>
                  ${t.description}
                </p>
              </div>
              </div>
              </a> 
            </div>
          </swiper-slide>`);document.querySelector(".mySwiper").innerHTML=a.join(" ")}catch(s){console.log(s)}},n=async()=>{try{let a=(await(await fetch("https://jarutnimra.github.io/js-json-1/db.json")).json()).products.map(t=>` <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src=${t.image}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${t.title}</h2>
              <p>${t.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>`);document.querySelector(".products").innerHTML=a.join(" ")}catch(s){console.log(s)}};i();c();n();
