/* =====================================
   THE NUMBER LANGUAGE
   Main Application Controller
===================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        console.log(
            "THE NUMBER LANGUAGE initialized"
        );


        initializeUniverse();



    }
);





function initializeUniverse(){


    const loader =
    document.querySelector(".loader");


    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";


            setTimeout(()=>{


                loader.style.display="none";


            },1000);


        },2000);


    }



}
// Existing app.js code


// Existing functions


// Existing events




/* =====================================
   THE NUMBER LANGUAGE
   COSMIC PARTICLE ENGINE
===================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const particleContainer =
document.querySelector(".particles");



if(!particleContainer)
return;



for(let i=0;i<120;i++){


let particle =
document.createElement("span");



particle.className =
"cosmic-particle";



particle.style.left =
Math.random()*100+"%";



particle.style.top =
Math.random()*100+"%";



particle.style.animationDelay =
Math.random()*10+"s";



particle.style.animationDuration =
(5+Math.random()*10)+"s";



particleContainer.appendChild(
particle
);


}



});
