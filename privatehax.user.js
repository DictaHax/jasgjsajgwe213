// ==UserScript==
// @name         PRIVATEHAX MACRO
// @namespace    https://github.com/DictaHax/
// @version      1.1
// @description  Inject PRIVATEHAX macro for agar.io
// @match        *://agar.io/*
// @run-at       document-end
// @author       DictaHax
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
  function inject() {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/gh/DictaHax/jasgjsajgwe213@main/shitfucn.js";
    s.onload = () => console.log("PRIVATEHAX loaded ✅");
    document.head.appendChild(s);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
