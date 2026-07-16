/* =====================================
   THE NUMBER LANGUAGE
   SCROLL ENGINE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

const hiddenElements =
document.querySelectorAll(
".reveal"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

hiddenElements.forEach(el=>{

observer.observe(el);

});

});
