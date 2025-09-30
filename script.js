// Current language state
let currentLanguage = 'pl';

// Toggle language functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateLanguageDisplay();
    updateLangButtonText();
    document.documentElement.setAttribute('lang', currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

// Apply saved or default language on page load
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'pl';
    currentLanguage = savedLanguage;
    updateLanguageDisplay();
    updateLangButtonText();
    document.documentElement.setAttribute('lang', currentLanguage);
}

// Update visible elements based on current language
function updateLanguageDisplay() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === currentLanguage ? '' : 'none';
    });
}

// Update toggle button text
function updateLangButtonText() {
    const langButton = document.getElementById('lang-text');
    if (langButton) {
        langButton.textContent = currentLanguage === 'pl' ? 'EN' : 'PL';
    }
}

// Hamburger menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu?.classList.toggle('active');
    hamburger?.classList.toggle('active');
}

// Modal initialization
function initializeModal() {
    // Initialize all certificate modals
    const certificates = [
        { imgId: "myImg", modalId: "myModal", modalImgId: "img01" },
        { imgId: "myImg2", modalId: "myModal2", modalImgId: "img02" },
        { imgId: "myImg3", modalId: "myModal3", modalImgId: "img03" }
    ];

    certificates.forEach(cert => {
        const modal = document.getElementById(cert.modalId);
        const img = document.getElementById(cert.imgId);
        const modalImg = document.getElementById(cert.modalImgId);
        const closeBtn = modal?.querySelector(".close");

        if (!modal || !img || !modalImg || !closeBtn) return;

        img.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.style.display = "block";
            modalImg.src = img.src;
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
}

// Smooth scroll to element
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Typewriter effect
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

// Animate elements on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll(
        '.about-card, .project-card, .timeline-item, .cert-card, .skill-item, .interest-item, .course, .language-card'
    );
    elements.forEach(el => observer.observe(el));
}

// Tab switching
function switchTab(url) {
    window.location.href = url;
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '';
        navbar.style.backdropFilter = 'none';
    }
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        if (percentage) {
            bar.style.width = percentage + '%';
        }
    });
}

function observeSkillsSection() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    });

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
}

// Utility to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeModal();
    observeElements();
    observeSkillsSection();

    const hamburger = document.querySelector('.hamburger');
    hamburger?.addEventListener('click', toggleMobileMenu);

    const gamedevBtn = document.querySelector('.btn--primary');
    gamedevBtn?.addEventListener('click', () => switchTab('gamedev.html'));

    const financeBtn = document.querySelector('.btn--outline');
    financeBtn?.addEventListener('click', () => switchTab('finance.html'));
});

// Scroll event
window.addEventListener('scroll', handleNavbarScroll);

// Export globals
window.toggleLanguage = toggleLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.smoothScroll = smoothScroll;
window.switchTab = switchTab;
window.getCurrentLanguage = getCurrentLanguage;
