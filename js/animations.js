/* =====================================
   THE NUMBER LANGUAGE
   Interactive Number Archive
===================================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


initializeNumberArchive();


}

);







function initializeNumberArchive(){



const cards = document.querySelectorAll(

".number-card"

);



const modal = document.querySelector(

".number-modal"

);



const close = document.querySelector(

".modal-close"

);



const symbol = document.querySelector(

".modal-symbol"

);



const number = document.querySelector(

".modal-number"

);



const title = document.querySelector(

".modal-title"

);



const description = document.querySelector(

".modal-description"

);







const data = {


0:{
symbol:"∅",
title:"The Void",
text:"Infinite possibility before creation."
},


1:{
symbol:"✦",
title:"The Origin",
text:"The first expression of existence."
},


2:{
symbol:"☯",
title:"Duality",
text:"The balance between opposing forces."
},


3:{
symbol:"△",
title:"Creation",
text:"The energy of growth and expression."
},


4:{
symbol:"□",
title:"Foundation",
text:"Structure, order and stability."
},


5:{
symbol:"⌀",
title:"Transformation",
text:"Movement, change and evolution."
},


6:{
symbol:"✧",
title:"Harmony",
text:"Balance between energies."
},


7:{
symbol:"◇",
title:"Mystery",
text:"The hidden dimensions of reality."
},


8:{
symbol:"∞",
title:"Infinity",
text:"Cycles beyond beginning and end."
},


9:{
symbol:"⊙",
title:"Completion",
text:"The return to unity."
}


};








cards.forEach(card=>{


card.addEventListener(

"click",

()=>{


const id = card.dataset.number;


symbol.textContent =
data[id].symbol;


number.textContent =
id;


title.textContent =
data[id].title;


description.textContent =
data[id].text;



modal.style.display="flex";



}

);



});








close.addEventListener(

"click",

()=>{


modal.style.display="none";


}

);





modal.addEventListener(

"click",

(e)=>{


if(e.target===modal){


modal.style.display="none";


}


}


);



}
