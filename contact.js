const cards =
    document.querySelectorAll(".contact-card");

const contactForm =
    document.getElementById("contactForm");

const responseMessage =
    document.getElementById("responseMessage");

const message =
    document.getElementById("message");

const charCount =
    document.getElementById("charCount");

const sendButton =
    document.getElementById("sendButton");

const buttonText =
    document.getElementById("buttonText");

const buttonIcon =
    document.getElementById("buttonIcon");

const typingText =
    document.getElementById("typingText");

const currentTime =
    document.getElementById("currentTime");

const year =
    document.getElementById("year");


/* ==========================================
   CONTACT CARD ANIMATION
========================================== */

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 180);

    });

});


/* ==========================================
   TYPING ANIMATION
========================================== */

const typingWords = [

    "Open to internship opportunities 🚀",

    "Interested in Java development ☕",

    "Let's build something together 💻",

    "Always learning. Always improving. 📚"

];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingAnimation() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1800
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                typingWords.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typingAnimation,
        deleting ? 50 : 80
    );

}


typingAnimation();


/* ==========================================
   CHARACTER COUNTER
========================================== */

message.addEventListener(
    "input",
    () => {

        charCount.textContent =
            message.value.length;

    }
);


/* ==========================================
   CONTACT FORM
========================================== */

contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const messageValue =
            message.value.trim();


        /* Validation */

        if (
            !name ||
            !email ||
            !subject ||
            !messageValue
        ) {

            responseMessage.textContent =
                "Please fill in all the fields.";

            responseMessage.style.color =
                "#dc2626";

            return;

        }


        /* Loading */

        sendButton.disabled = true;

        sendButton.classList.add(
            "loading"
        );

        buttonText.textContent =
            "Sending...";

        buttonIcon.textContent =
            "⏳";


        responseMessage.textContent =
            "";


        /*
            Demo submission.

            This currently simulates
            sending a message.
        */

        setTimeout(() => {


            responseMessage.textContent =
                `Thank you, ${name}! Your message has been received.`;

            responseMessage.style.color =
                "#16a34a";


            buttonText.textContent =
                "Message Sent";


            buttonIcon.textContent =
                "✓";


            contactForm.reset();


            charCount.textContent =
                "0";


            setTimeout(() => {

                sendButton.disabled =
                    false;

                sendButton.classList.remove(
                    "loading"
                );

                buttonText.textContent =
                    "Send Message";

                buttonIcon.textContent =
                    "➤";

            }, 2500);


        }, 1500);

    }
);


/* ==========================================
   CURRENT TIME
========================================== */

function updateTime() {

    const now =
        new Date();


    currentTime.textContent =
        "Local time: " +
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

}


updateTime();


setInterval(
    updateTime,
    1000
);


/* ==========================================
   DYNAMIC COPYRIGHT YEAR
========================================== */

year.textContent =
    new Date().getFullYear();