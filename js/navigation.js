/* =====================================
   THE NUMBER LANGUAGE
   Navigation Controller
===================================== */


document.addEventListener(

    "DOMContentLoaded",

    () => {


        initializeNavigation();


    }

);





function initializeNavigation(){


    const links =
    document.querySelectorAll(
        "nav a"
    );



    links.forEach(link => {



        link.addEventListener(

            "click",

            () => {


                console.log(

                "Navigating to:",
                link.href

                );


            }

        );



    });



}
/* =====================================
   COSMIC PAGE TRANSITIONS
===================================== */


document.querySelectorAll("a")
.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const href =
link.getAttribute("href");



if(
href &&
href.includes(".html")
){


const transition =
document.querySelector(".page-transition");



if(transition){


e.preventDefault();



transition.classList.add(
"active"
);



setTimeout(()=>{


window.location.href =
href;


},900);


}


}


});


});
