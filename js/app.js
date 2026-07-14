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
