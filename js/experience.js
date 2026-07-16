/* =====================================
   THE NUMBER LANGUAGE
   EXPERIENCE ENGINE
===================================== */

class ExperienceEngine {

    constructor() {

        this.mouse = {
            x: 0,
            y: 0
        };

        this.scroll = 0;

        this.page = document.body.dataset.page || "home";

        this.init();

    }

    init() {

        console.log("🌌 Experience Engine Started");

        this.trackMouse();

        this.trackScroll();

    }

    trackMouse() {

        document.addEventListener("mousemove", (event) => {

            this.mouse.x = event.clientX;

            this.mouse.y = event.clientY;

        });

    }

    trackScroll() {

        window.addEventListener("scroll", () => {

            this.scroll = window.scrollY;

        });

    }

}

window.experience =
new ExperienceEngine();
