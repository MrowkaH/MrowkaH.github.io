// Language toggle functionality
let currentLanguage = 'pl';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    
    // Update all elements with data-lang attributes
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === currentLanguage) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
   document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const img = document.getElementById("myImg");
  const modalImg = document.getElementById("img01");
  const closeBtn = document.querySelector(".close");

  img.addEventListener("click", (e) => {
    e.stopPropagation(); // Zapobiega zamknięciu od razu po otwarciu
    modal.style.display = "block";
    modalImg.src = img.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Zamknięcie po kliknięciu poza obrazem
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


    // Update language toggle button text
    const langButton = document.getElementById('lang-text');
    if (langButton) {
        langButton.textContent = currentLanguage === 'pl' ? 'EN' : 'PL';
    }
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Store language preference in localStorage
    localStorage.setItem('language', currentLanguage);
}

// Initialize language on page load
function initializeLanguage() {
    // Get saved language preference or default to 'pl'
    const savedLanguage = localStorage.getItem('language') || 'pl';
    currentLanguage = savedLanguage;
    
    // Apply the saved language
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === currentLanguage) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
    
    // Update language toggle button text
    const langButton = document.getElementById('lang-text');
    if (langButton) {
        langButton.textContent = currentLanguage === 'pl' ? 'EN' : 'PL';
    }
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage);
}

// Hamburger menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initializeLanguage();
    
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation buttons
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
    
    // Initialize animations
    observeElements();
});

// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Typewriter effect function
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

// Intersection Observer for animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elementsToObserve = document.querySelectorAll(
        '.about-card, .project-card, .timeline-item, .cert-card, .skill-item, .interest-item, .course, .language-card'
    );
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Tab switching function for SPA behavior
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

// Event listeners for scroll effects
window.addEventListener('scroll', handleNavbarScroll);

// Loading animation for skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        if (percentage) {
            bar.style.width = percentage + '%';
        }
    });
}

// Initialize skill bar animation when in view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
});

// Observe skills section
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// Utility function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Export functions for global use
window.toggleLanguage = toggleLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.smoothScroll = smoothScroll;
window.switchTab = switchTab;
window.getCurrentLanguage = getCurrentLanguage;
