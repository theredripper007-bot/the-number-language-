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
