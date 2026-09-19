/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ================= SELECT ELEMENTS ================= */

const profileCard =
    document.querySelector(".profile-card");

const journeyItems =
    document.querySelectorAll(".journey-item");

const toolCards =
    document.querySelectorAll(".tool-card");

const educationCard =
    document.querySelector(".education-card");

const focusCard =
    document.querySelector(".focus-card");

const statementCard =
    document.querySelector(".statement-card");


/* ================= PROFILE CARD HOVER ================= */

if (profileCard) {

    profileCard.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 768) return;


        const rect =
            profileCard.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -4;


        const rotateY =
            ((x - centerX) / centerX) * 4;


        profileCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

}


/* ================= JOURNEY ANIMATION ================= */

journeyItems.forEach((item, index) => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(35px)";


    item.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";


    item.dataset.delay =
        index * 150;

});


/* ================= TOOL CARD ANIMATION ================= */

toolCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(35px)";


    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";


    card.dataset.delay =
        index * 120;

});


/* ================= OTHER CARD ANIMATION ================= */

const otherCards = [

    educationCard,
    focusCard,
    statementCard

];


otherCards.forEach((card) => {

    if (!card) return;


    card.style.opacity = "0";

    card.style.transform =
        "translateY(35px)";


    card.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


/* ================= SCROLL REVEAL ================= */

const animatedElements = [

    ...journeyItems,
    ...toolCards,
    ...otherCards.filter(Boolean)

];


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    const element =
                        entry.target;


                    const delay =
                        Number(
                            element.dataset.delay || 0
                        );


                    setTimeout(() => {

                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";

                    }, delay);


                    revealObserver.unobserve(
                        element
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= TOOL CARD HOVER ================= */

toolCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


/* ================= JOURNEY CARD HOVER ================= */

journeyItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
            "translateY(-8px)";

    });


    item.addEventListener("mouseleave", () => {

        item.style.transform =
            "translateY(0)";

    });

});


/* ================= EDUCATION HOVER ================= */

if (educationCard) {

    educationCard.addEventListener(
        "mouseenter",
        () => {

            educationCard.style.transform =
                "translateY(-7px)";

        }
    );


    educationCard.addEventListener(
        "mouseleave",
        () => {

            educationCard.style.transform =
                "translateY(0)";

        }
    );

}


/* ================= FOCUS CARD ================= */

if (focusCard) {

    focusCard.addEventListener(
        "mouseenter",
        () => {

            focusCard.style.transform =
                "translateY(-8px)";

        }
    );


    focusCard.addEventListener(
        "mouseleave",
        () => {

            focusCard.style.transform =
                "translateY(0)";

        }
    );

}


/* ================= STATEMENT CARD ================= */

if (statementCard) {

    statementCard.addEventListener(
        "mouseenter",
        () => {

            statementCard.style.transform =
                "translateY(-8px)";

        }
    );


    statementCard.addEventListener(
        "mouseleave",
        () => {

            statementCard.style.transform =
                "translateY(0)";

        }
    );

}


/* ================= ACTIVE NAVIGATION ================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


const homeLink =
    document.querySelector(".home-link");


if (
    homeLink &&
    currentPage === "about.html"
) {

    homeLink.style.color =
        "#64ffda";

}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= SMOOTH HOME NAVIGATION ================= */

if (homeLink) {

    homeLink.addEventListener(
        "click",
        () => {

            document.body.style.opacity =
                "0";

        }
    );

}