// Hamburger menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Obsługa hamburgera
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
});

// Smooth scrolling dla linków anchor (jeśli masz takie linki)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Typing animation dla tytułu (jeśli chcesz użyć)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Intersection Observer dla animacji przy scrollowaniu (opcjonalnie)
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elementsToObserve = document.querySelectorAll(
        '.about-card, .project-card, .timeline-item, .cert-card, .skill-item, .interest-item'
    );
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Jeśli chcesz, żeby przyciski w hero działały jako buttony:
document.addEventListener('DOMContentLoaded', function() {
    const gamedevBtn = document.querySelector('.btn--primary');
    const financeBtn = document.querySelector('.btn--outline');
    if(gamedevBtn) {
        gamedevBtn.addEventListener('click', function() {
            window.location.href = 'gamedev.html';
        });
    }
    if(financeBtn) {
        financeBtn.addEventListener('click', function() {
            window.location.href = 'finance.html';
        });
    }
});

// Navbar scroll effect (opcjonalnie)
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
}
window.addEventListener('scroll', handleNavbarScroll);

// Inicjalizacja animacji po załadowaniu strony (opcjonalnie)
document.addEventListener('DOMContentLoaded', function() {
    observeElements();
});
