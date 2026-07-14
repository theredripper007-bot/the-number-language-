/* =====================================
   THE NUMBER LANGUAGE
   Animation Controller
===================================== */


document.addEventListener(

    "DOMContentLoaded",

    () => {


        revealElements();


    }

);






function revealElements(){


    const elements =

    document.querySelectorAll(

        "section, .number-card"

    );



    const observer =

    new IntersectionObserver(

        entries => {


            entries.forEach(entry => {



                if(entry.isIntersecting){



                    entry.target.classList.add(

                        "visible"

                    );



                }



            });



        },


        {

            threshold:0.15

        }


    );




    elements.forEach(element => {


        observer.observe(element);


    });



}
