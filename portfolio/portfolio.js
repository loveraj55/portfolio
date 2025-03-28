// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Contact Form Validation
document.getElementById('Submit').addEventListener('click', function () {
    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const message = document.getElementById('Message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Message sent successfully!');
    }
});

// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;';
document.querySelector('nav').prepend(menuToggle);

menuToggle.addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Dark Mode';
darkModeBtn.className = 'dark-mode-btn';
document.body.prepend(darkModeBtn);

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', function () {
    backToTop.classList.toggle('visible', window.scrollY > 200);
});

backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
