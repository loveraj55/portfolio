// GSAP Scroll Animations
// Ensure GSAP is loaded before running this script

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
    gsap.from(".main img", { duration: 1, x: -200, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".maintext", { duration: 1, x: 200, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".serviceCard", { 
        scrollTrigger: ".serviceCard",
        duration: 1, 
        y: 50, 
        opacity: 0, 
        stagger: 0.3,
        ease: "power2.out"
    });
    gsap.from(".workCard", { 
        scrollTrigger: ".workCard",
        duration: 1, 
        scale: 0.8, 
        opacity: 0, 
        stagger: 0.3,
        ease: "power2.out"
    });
});

// Back-to-Top Button Animation
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        gsap.to(backToTopButton, { opacity: 1, scale: 1, duration: 0.5 });
    } else {
        gsap.to(backToTopButton, { opacity: 0, scale: 0, duration: 0.5 });
    }
});

backToTopButton.addEventListener('click', () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.inOut" });
});

// Dark Mode Toggle Animation
const darkModeButton = document.querySelector('.dark-mode-btn');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    gsap.to('body', { backgroundColor: document.body.classList.contains('dark-mode') ? "#121212" : "#0b0b2c", duration: 0.5 });
});

// Navbar Scroll Animation
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        gsap.to(navbar, { backgroundColor: "rgba(0, 0, 0, 0.8)", duration: 0.5 });
    } else {
        gsap.to(navbar, { backgroundColor: "rgba(0, 0, 0, 0.5)", duration: 0.5 });
    }
});

// Convert Service Section Links to Buttons (Including "All" Links)
document.querySelectorAll(".serviceCard a, .serviceAll a").forEach(link => {
    const button = document.createElement("button");
    button.innerText = link.innerText;
    button.classList.add("service-button");
    button.onclick = () => window.location.href = link.href;
    link.replaceWith(button);
});

// Button Styling (Optional CSS)
const style = document.createElement("style");
style.innerHTML = `
    .service-button {
        display: inline-block;
        padding: 12px 24px;
        background: linear-gradient(45deg, #ff6600, #f93d2d);
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
        margin-top: 20px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    .service-button:hover {
        background: linear-gradient(45deg, #f93d2d, #ff6600);
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
    }
`;
document.head.appendChild(style);
