document.addEventListener("DOMContentLoaded", () => {

    /* =============================================
       MOBILE NAVBAR
    ============================================= */

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");


    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            hamburger.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =============================================
       TOUR EXPANSION
       Only one card can remain open
    ============================================= */

    const tourCards =
        document.querySelectorAll(".tour-card");


    tourCards.forEach((card) => {

        const toggleButton =
            card.querySelector(".view-tour-btn");


        if (!toggleButton) {
            return;
        }


        toggleButton.addEventListener("click", () => {

            const isCurrentlyOpen =
                card.classList.contains("active");


            /* Close every card */

            tourCards.forEach((otherCard) => {

                otherCard.classList.remove("active");


                const otherButton =
                    otherCard.querySelector(
                        ".view-tour-btn"
                    );


                if (otherButton) {

                    otherButton.textContent =
                        "View Tour";

                }

            });


            /* Open clicked card if it was closed */

            if (!isCurrentlyOpen) {

                card.classList.add("active");

                toggleButton.textContent =
                    "Close Tour";

            }

        });

    });

});