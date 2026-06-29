/* ------------------------------
   LIVE TYPING ANIMATION
--------------------------------*/
const textArray = [
    "Cyber Security Analyst",
    "Ethical Hacker",
    "Blue Team Enthusiast",
    "Vulnerability Assessment Specialist"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 2000;

const typingElement = document.getElementById("typing");

function typeText() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetween);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);

/* ------------------------------
   SCROLL REVEAL
--------------------------------*/
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});

/* ------------------------------
   ACTIVE NAVBAR
--------------------------------*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    /* 🔥 FIX FOR CONTACT (BOTTOM OF PAGE) */
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        current = "contact";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});



/* ------------------------------
   🔥 LIVE CYBER PARTICLES (UNCHANGED)
--------------------------------*/
particlesJS("home", {
    particles: {
        number: {
            value: 60,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#00e5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00e5ff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            out_mode: "out"
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
