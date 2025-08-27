// Project card loading logic
let path = './assets/projects.json'
const projectCon = document.getElementById("load_project")

fetch(path).then((res)=>res.json()).then((data)=>{
    toadd=``
    data.forEach((obj)=>{
        elem=`<div class="project-card">
                <div class="upper"><img src="${obj.img_source}"></div>
                <div class="lower">
                <h4>${obj.title}</h4>
                <p>${obj.desc}</p>
                </div>
                <div class="actions">
                    <a href="${obj.source_link}" target="_blank" class="project-btn source-btn">See Source</a>
                    <a href="${obj.live_link}" target="_blank" class="project-btn live-btn">See Live</a>
                </div>
                </div>`
        
        toadd+=elem;
    })
    projectCon.innerHTML=toadd
})
// Lottie animation setup
const animationPath = './assets/lottie/Programmer.json';
const container = document.getElementById('lottie-container');
const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
});

// Typewriter effect logic
const typingTextElement = document.getElementById('typing-text');
const texts = ["Web Developer", "ML Enthusiast", "Electronics Freak"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 75 : 150);
    }
}

document.addEventListener('DOMContentLoaded', type);

// Cursor follower effect
const cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', e => {
    cursorFollower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

// Dynamic navigation bar based on scroll position
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    if (window.scrollY < lastScrollY) {
        nav.classList.remove('nav-hidden');
    } else if (window.scrollY > 50) {
        nav.classList.add('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

// Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Hide nav menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

