// Default language: English (aligned with English CV for HSBC Software Engineer role)
let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pl' : 'en';
    updateLanguageDisplay();
    updateLangButtonText();
    document.documentElement.setAttribute('lang', currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

function initializeLanguage() {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    const savedLanguage = localStorage.getItem('language');
    if (paramLang === 'pl' || paramLang === 'en') {
        currentLanguage = paramLang;
        localStorage.setItem('language', currentLanguage);
    } else if (savedLanguage === 'pl' || savedLanguage === 'en') {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en';
    }
    updateLanguageDisplay();
    updateLangButtonText();
    document.documentElement.setAttribute('lang', currentLanguage);
}

function updateLanguageDisplay() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === currentLanguage ? '' : 'none';
    });
}

function updateLangButtonText() {
    const langButton = document.getElementById('lang-text');
    if (langButton) {
        langButton.textContent = currentLanguage === 'en' ? 'PL' : 'EN';
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu?.classList.toggle('active');
    hamburger?.classList.toggle('active');
}

function initializeModals() {
    const modalMappings = [
        { imgId: "certImg1", modalId: "certModal1", modalImgId: "certModalImg1" },
        { imgId: "certImg2", modalId: "certModal2", modalImgId: "certModalImg2" },
        { imgId: "certImg3", modalId: "certModal3", modalImgId: "certModalImg3" },
        { imgId: "equityPreviewImg", modalId: "equityModal", modalImgId: "equityModalImg" },
    ];

    modalMappings.forEach(item => {
        const modal = document.getElementById(item.modalId);
        const img = document.getElementById(item.imgId);
        const modalImg = document.getElementById(item.modalImgId);
        const closeBtn = modal?.querySelector(".close");

        if (!modal || !img || !modalImg || !closeBtn) return;

        let zoomLevel = 1;
        let isZoomed = false;
        let isDragging = false;
        let hasMoved = false;
        let startX = 0, startY = 0, translateX = 0, translateY = 0;

        img.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.style.display = "block";
            modalImg.src = img.src;
            zoomLevel = 1; isZoomed = false; isDragging = false; hasMoved = false;
            translateX = 0; translateY = 0;
            modalImg.style.transform = 'scale(1) translate(0, 0)';
            modalImg.style.transformOrigin = 'center center';
            modalImg.style.cursor = 'zoom-in';
        });

        modalImg.addEventListener("click", (e) => {
            if (hasMoved) { hasMoved = false; return; }
            e.stopPropagation();
            if (!isZoomed) {
                const rect = modalImg.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                zoomLevel = 1.5; isZoomed = true; translateX = 0; translateY = 0;
                modalImg.style.transformOrigin = `${x}% ${y}%`;
                modalImg.style.transform = `scale(${zoomLevel}) translate(0, 0)`;
                modalImg.style.cursor = 'grab';
            } else {
                zoomLevel = 1; isZoomed = false; translateX = 0; translateY = 0;
                modalImg.style.transform = 'scale(1) translate(0, 0)';
                modalImg.style.transformOrigin = 'center center';
                modalImg.style.cursor = 'zoom-in';
            }
        });

        modalImg.addEventListener("mousedown", (e) => {
            if (!isZoomed) return;
            e.preventDefault();
            isDragging = true; hasMoved = false;
            startX = e.clientX - translateX; startY = e.clientY - translateY;
            modalImg.style.cursor = 'grabbing';
        });

        modalImg.addEventListener("mousemove", (e) => {
            if (!isDragging || !isZoomed) return;
            e.preventDefault(); hasMoved = true;
            translateX = e.clientX - startX; translateY = e.clientY - startY;
            modalImg.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
        });

        modalImg.addEventListener("mouseup", () => {
            if (isDragging) { isDragging = false; modalImg.style.cursor = 'grab'; }
        });

        modalImg.addEventListener("mouseleave", () => {
            if (isDragging) { isDragging = false; modalImg.style.cursor = 'grab'; }
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            zoomLevel = 1; isZoomed = false;
            modalImg.style.transform = 'scale(1)';
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                zoomLevel = 1; isZoomed = false;
                modalImg.style.transform = 'scale(1)';
            }
        });
    });

    // Escape key closes open modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(m => {
                m.style.display = 'none';
            });
        }
    });
}

function initializeCopyButtons() {
    document.querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-copy');
            if (!text) return;
            navigator.clipboard?.writeText(text).then(() => {
                btn.classList.add('copied');
                const enSpan = btn.querySelector('[data-lang="en"]');
                const plSpan = btn.querySelector('[data-lang="pl"]');
                const origEn = enSpan ? enSpan.textContent : '';
                const origPl = plSpan ? plSpan.textContent : '';
                if (enSpan) enSpan.textContent = 'Copied!';
                if (plSpan) plSpan.textContent = 'Skopiowano!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    if (enSpan) enSpan.textContent = origEn;
                    if (plSpan) plSpan.textContent = origPl;
                }, 1600);
            });
        });
    });
}

function getCurrentLanguage() {
    return currentLanguage;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeModals();
    initializeCopyButtons();

    const hamburger = document.querySelector('.hamburger');
    hamburger?.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu')?.classList.remove('active');
            document.querySelector('.hamburger')?.classList.remove('active');
        });
    });
});

window.toggleLanguage = toggleLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.getCurrentLanguage = getCurrentLanguage;
