/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ================= TYPING ANIMATION ================= */

const typingElement = document.getElementById("typing");
        const roles = [
    "Python Developer",
    "Machine Learning Enthusiast",
    "Data Science Enthusiast",
    "Software Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }


    const speed = deleting ? 60 : 100;


    setTimeout(
        typeEffect,
        speed
    );
}


if (typingElement) {

    typeEffect();

}


/* ================= PARTICLES ================= */

const particleContainer =
    document.getElementById("particles");


function createParticles() {

    if (!particleContainer) return;


    const particleCount =
        window.innerWidth < 768 ? 20 : 40;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add("particle");


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            5 + Math.random() * 10 + "s";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        particle.style.width =
            2 + Math.random() * 4 + "px";


        particle.style.height =
            particle.style.width;


        particleContainer.appendChild(
            particle
        );
    }
}


createParticles();


/* ================= GLASS CARD 3D EFFECT ================= */

const heroCard =
    document.getElementById("heroCard");


if (
    heroCard &&
    window.innerWidth > 768
) {

    heroCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroCard.getBoundingClientRect();


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


            heroCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        }
    );


    heroCard.addEventListener(
        "mouseleave",
        () => {

            heroCard.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";
        }
    );
}


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");


const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );
        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );
                }
            );
        });
}


/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem(
        "portfolioTheme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );


    if (themeToggle) {

        themeToggle.textContent = "☾";
    }
}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "portfolioTheme",
                isLight
                    ? "light"
                    : "dark"
            );


            themeToggle.textContent =
                isLight
                    ? "☾"
                    : "☀";
        }
    );
}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );
    }
);


/* ================= COUNTER ANIMATION ================= */

const counters =
    document.querySelectorAll(
        ".stat-number"
    );


let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(
        counter => {

            const target =
                Number(
                    counter.dataset.target
                );


            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.ceil(
                        target / 50
                    )
                );


            const timer =
                setInterval(
                    () => {

                        current += increment;


                        if (
                            current >= target
                        ) {

                            current = target;

                            clearInterval(
                                timer
                            );
                        }


                        counter.textContent =
                            current;

                    },
                    35
                );
        }
    );
}


/* ================= COUNTER OBSERVER ================= */

const statsSection =
    document.querySelector(
        ".stats-section"
    );


if (statsSection) {

    const statsObserver =
        new IntersectionObserver(
            entries => {

                if (
                    entries[0].isIntersecting
                ) {

                    startCounters();

                    statsObserver.disconnect();
                }

            },
            {
                threshold: 0.3
            }
        );


    statsObserver.observe(
        statsSection
    );
}


/* ================= SCROLL TO TOP ================= */

const scrollTop =
    document.getElementById(
        "scrollTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            scrollTop.classList.add(
                "show"
            );

        } else {

            scrollTop.classList.remove(
                "show"
            );
        }
    }
);


if (scrollTop) {

    scrollTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}