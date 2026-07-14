/* =====================================
   THE NUMBER LANGUAGE
   Main Application Controller
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("THE NUMBER LANGUAGE initialized");

    initializeUniverse();

    initializeParticles();

});



/* =====================================
   UNIVERSE
===================================== */

function initializeUniverse() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

}



/* =====================================
   COSMIC PARTICLE ENGINE
===================================== */

function initializeParticles() {

    const particleContainer =
        document.querySelector(".particles");

    if (!particleContainer) return;

    particleContainer.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const particle = document.createElement("span");

        particle.className = "cosmic-particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particleContainer.appendChild(particle);

    }

}
