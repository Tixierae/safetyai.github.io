document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURATION ---
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const langToggle = document.getElementById('langToggle');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    // --- THEME LOGIC ---
    // 1. Check storage on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save to storage
        
        // Toggle Icons
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // --- LANGUAGE LOGIC ---
    // 1. Check storage on load. Default to 'en' if nothing saved.
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        // Check current setting
        const currentLang = html.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        // Set the attribute that CSS listens for
        html.setAttribute('data-lang', lang); 
        // Save to storage so it remembers on the next page
        localStorage.setItem('lang', lang); 
    }

    // --- MOBILE MENU ---
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

});