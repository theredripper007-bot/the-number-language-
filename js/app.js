/* =====================================
   THE NUMBER LANGUAGE
   Main Application Controller
===================================== */
const numberDatabase = {

    1: {
        title: "The Origin",
        meaning:
            "Unity, beginning, creation and infinite potential.",
        geometry: "Circle"
    },

    3: {
        title: "The Trinity",
        meaning:
            "Balance between mind, body and spirit.",
        geometry: "Triangle"
    },

    7: {
        title: "The Seeker",
        meaning:
            "Wisdom, introspection, knowledge and spiritual awakening.",
        geometry: "Heptagon"
    },

    9: {
        title: "The Completion",
        meaning:
            "Fulfillment, enlightenment and universal compassion.",
        geometry: "Enneagon"
    }

};
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
