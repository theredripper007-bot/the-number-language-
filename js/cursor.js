/* =====================================
   THE NUMBER LANGUAGE
   LIVING CURSOR
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.createElement("div");
    cursor.className = "living-cursor";

    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    const interactive =
        document.querySelectorAll(
            "a, button, .number-card, .collection-card"
        );

    interactive.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-active");

        });

    });

});
