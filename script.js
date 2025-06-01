
// JavaScript dla Portfolio

// Funkcja przełączania zakładek
function showTab(tabName) {
    // Ukryj wszystkie zakładki
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Pokaż wybraną zakładkę
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Aktualizuj aktywny link w nawigacji
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Zamknij menu mobilne po kliknięciu
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    // Przewiń do góry strony
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Animacja załadowania umiejętności dla zakładek CV
    if (tabName !== 'home') {
        setTimeout(animateSkills, 300);
    }
}

// Animacja pasków umiejętności
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Hamburger menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scrolling dla linków anchor
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Typing animation dla tytułu
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

// Intersection Observer dla animacji przy scrollowaniu
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Jeśli to sekcja umiejętności, animuj paski
                if (entry.target.classList.contains('skills-grid')) {
                    setTimeout(animateSkills, 500);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Obserwuj elementy do animacji
    const elementsToObserve = document.querySelectorAll(
        '.about-card, .project-card, .timeline-item, .cert-card, .skill-item, .interest-item'
    );

    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
}

// Preloader
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
            <p>Ładowanie portfolio...</p>
        </div>
    `;

    // Style dla preloadera
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;

    document.body.appendChild(preloader);

    // Ukryj preloader po załadowaniu
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Funkcja do kopiowania emaila
function copyEmail() {
    const email = 'email@example.com';
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email skopiowany do schowka!');
    });
}

// Pokazywanie powiadomień
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        border-radius: 5px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animacja pojawienia się
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Ukrycie po 3 sekundach
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Funkcja do pobierania CV
function downloadCV(type) {
    showNotification(`Pobieranie CV ${type}...`);
    // Tutaj dodasz logikę pobierania pliku CV
}

// Progress bar dla czytania
function updateReadingProgress() {
    const article = document.querySelector('main');
    const scrollTop = window.pageYOffset;
    const scrollHeight = article.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 70px;
            left: 0;
            width: 0%;
            height: 3px;
            background: #3498db;
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = Math.min(progress, 100) + '%';
}

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(backToTop);

    // Pokaż/ukryj przycisk w zależności od pozycji scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
}

// Keyboard navigation
function handleKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC - zamknij mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }

        // Strzałki - nawigacja między zakładkami
        if (e.altKey) {
            const tabs = ['home', 'gamedev', 'finance', 'other'];
            const currentTab = document.querySelector('.tab-content.active');
            const currentIndex = tabs.indexOf(currentTab.id);

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                showTab(tabs[currentIndex - 1]);
            } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
                showTab(tabs[currentIndex + 1]);
            }
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Pokaż preloader
    showPreloader();

    // Ustaw domyślną zakładkę
    showTab('home');

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Reading progress
    window.addEventListener('scroll', updateReadingProgress);

    // Intersection Observer
    observeElements();

    // Back to top button
    createBackToTopButton();

    // Keyboard navigation
    handleKeyboardNavigation();

    // Typing animation dla tytułu na stronie głównej
    setTimeout(() => {
        const titleElement = document.querySelector('.hero-text h1');
        if (titleElement) {
            const originalText = titleElement.textContent;
            typeWriter(titleElement, originalText, 100);
        }
    }, 1500);

    // Dodaj animację CSS dla elementów
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        .back-to-top:hover {
            background: #2980b9;
            transform: translateY(-3px);
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loader {
            text-align: center;
            color: #333;
        }
    `;
    document.head.appendChild(style);
});

// Eksportuj funkcje dla użycia globalnego
window.showTab = showTab;
window.copyEmail = copyEmail;
window.downloadCV = downloadCV;
