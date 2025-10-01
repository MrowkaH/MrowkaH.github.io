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

// Modal initialization with zoom functionality
function initializeModal() {
    // Initialize all certificate modals
    const certificates = [
        { imgId: "myImg", modalId: "myModal", modalImgId: "img01" },
        { imgId: "myImg2", modalId: "myModal2", modalImgId: "img02" },
        { imgId: "myImg3", modalId: "myModal3", modalImgId: "img03" }
    ];

    // Initialize all finance project modals
    const financeImages = [
        { imgId: "financeImg1", modalId: "financeModal1", modalImgId: "financeModalImg1" },
        { imgId: "financeImg2", modalId: "financeModal2", modalImgId: "financeModalImg2" },
        { imgId: "financeImg3", modalId: "financeModal3", modalImgId: "financeModalImg3" },
        { imgId: "financeImg4", modalId: "financeModal4", modalImgId: "financeModalImg4" }
    ];

    // Combine all modals
    const allModals = [...certificates, ...financeImages];

    allModals.forEach(item => {
        const modal = document.getElementById(item.modalId);
        const img = document.getElementById(item.imgId);
        const modalImg = document.getElementById(item.modalImgId);
        const closeBtn = modal?.querySelector(".close");

        if (!modal || !img || !modalImg || !closeBtn) return;

        // Zoom and pan state
        let zoomLevel = 1;
        let isZoomed = false;
        let isDragging = false;
        let hasMoved = false;
        let startX = 0;
        let startY = 0;
        let translateX = 0;
        let translateY = 0;

        img.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.style.display = "block";
            modalImg.src = img.src;
            zoomLevel = 1;
            isZoomed = false;
            isDragging = false;
            hasMoved = false;
            translateX = 0;
            translateY = 0;
            modalImg.style.transform = 'scale(1) translate(0, 0)';
            modalImg.style.cursor = 'zoom-in';
        });

        // Zoom on modal image click
        modalImg.addEventListener("click", (e) => {
            if (hasMoved) {
                // If we moved during drag, don't toggle zoom
                hasMoved = false;
                return;
            }
            e.stopPropagation();
            
            if (!isZoomed) {
                // First click - zoom in
                const rect = modalImg.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                zoomLevel = 1.5;
                isZoomed = true;
                translateX = 0;
                translateY = 0;
                modalImg.style.transformOrigin = `${x}% ${y}%`;
                modalImg.style.transform = `scale(${zoomLevel}) translate(0, 0)`;
                modalImg.style.cursor = 'grab';
            } else {
                // Second click - zoom out
                zoomLevel = 1;
                isZoomed = false;
                translateX = 0;
                translateY = 0;
                modalImg.style.transform = 'scale(1) translate(0, 0)';
                modalImg.style.transformOrigin = 'center center';
                modalImg.style.cursor = 'zoom-in';
            }
        });

        // Pan functionality
        modalImg.addEventListener("mousedown", (e) => {
            if (!isZoomed) return;
            e.preventDefault();
            isDragging = true;
            hasMoved = false;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            modalImg.style.cursor = 'grabbing';
        });

        modalImg.addEventListener("mousemove", (e) => {
            if (!isDragging || !isZoomed) return;
            e.preventDefault();
            hasMoved = true;
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            modalImg.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
        });

        modalImg.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                modalImg.style.cursor = 'grab';
                // Image stays zoomed and in position
            }
        });

        modalImg.addEventListener("mouseleave", () => {
            if (isDragging) {
                isDragging = false;
                modalImg.style.cursor = 'grab';
                // Image stays zoomed and in position
            }
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            zoomLevel = 1;
            isZoomed = false;
            modalImg.style.transform = 'scale(1)';
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                zoomLevel = 1;
                isZoomed = false;
                modalImg.style.transform = 'scale(1)';
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

// Scroll to trading detail section
function scrollToStageDetail(stageNumber) {
    const targetId = `stage-detail-${stageNumber}`;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Add highlight animation
        targetElement.classList.add('highlight-pulse');
        setTimeout(() => {
            targetElement.classList.remove('highlight-pulse');
        }, 2000);
    }
}

// Initialize timeline click handlers
function initializeTimelineClicks() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach((point, index) => {
        const stageNumber = index + 1;
        
        point.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToStageDetail(stageNumber);
        });
        
        // Add cursor pointer style
        point.style.cursor = 'pointer';
    });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeModal();
    observeElements();
    observeSkillsSection();
    initializeTimelineClicks();

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
