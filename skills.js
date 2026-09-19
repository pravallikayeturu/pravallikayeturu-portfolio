/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

    createParticles();

    animateSkillCards();

    animateLearningItems();

    animateAdditionalTags();

    updateYear();

});


/* ================= PARTICLES ================= */

function createParticles() {

    const container = document.getElementById("particles");

    if (!container) return;


    const particleCount = 35;


    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            6 + Math.random() * 8 + "s";


        particle.style.animationDelay =
            Math.random() * 6 + "s";


        particle.style.opacity =
            0.2 + Math.random() * 0.4;


        container.appendChild(particle);

    }

}


/* ================= SKILL CARD ANIMATION ================= */

function animateSkillCards() {

    const cards =
        document.querySelectorAll(".skill-card");


    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(35px)";


        setTimeout(() => {

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, index * 120);

    });

}


/* ================= LEARNING SECTION ================= */

function animateLearningItems() {

    const items =
        document.querySelectorAll(".flow-item");


    items.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform =
            "scale(0.85)";


        setTimeout(() => {

            item.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            item.style.opacity = "1";

            item.style.transform =
                "scale(1)";

        }, 700 + index * 150);

    });

}


/* ================= ADDITIONAL TAGS ================= */

function animateAdditionalTags() {

    const tags =
        document.querySelectorAll(
            ".additional-tags span"
        );


    tags.forEach((tag, index) => {

        tag.style.opacity = "0";

        tag.style.transform =
            "translateY(15px)";


        setTimeout(() => {

            tag.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            tag.style.opacity = "1";

            tag.style.transform =
                "translateY(0)";

        }, 1200 + index * 100);

    });

}


/* ================= CURRENT YEAR ================= */

function updateYear() {

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}