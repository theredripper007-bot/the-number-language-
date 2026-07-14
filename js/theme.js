/* =====================================
   THE NUMBER LANGUAGE
   Theme Controller
===================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        loadTheme();


    }
);





function loadTheme(){


    const savedTheme =
    localStorage.getItem(
        "numberLanguageTheme"
    );



    if(savedTheme){


        document.body.dataset.theme =
        savedTheme;


    }


}






function changeTheme(theme){


    document.body.dataset.theme =
    theme;



    localStorage.setItem(

        "numberLanguageTheme",

        theme

    );


}
