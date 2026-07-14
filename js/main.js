// vertaalfunctie
const globalTranslations = {
    nl: {
        navRoutine: "Routine",
        navMacros: "Macro's",
        navNutrition: "Voeding",
        navProgress: "Progressie",
        appTitle: "Mijn Fitness Coach"
    },
    en: {
        navRoutine: "Routine",
        navMacros: "Macros",
        navNutrition: "Nutrition",
        navProgress: "Progress",
        appTitle: "My Fitness Coach"
    }
};

// Onthoudt de taalvoorkeur van de user
let currentLang = localStorage.getItem('appLanguage') || 'nl';

function initGlobal() {
    applyGlobalTranslations();
    highlightActiveNav();
}

function toggleLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    localStorage.setItem('appLanguage', currentLang);
    
    document.getElementById('btn-lang').innerText = currentLang === 'nl' ? 'EN' : 'NL';
    applyGlobalTranslations();
    
    if (typeof pageLanguageChanged === 'function') {
        pageLanguageChanged();
    }
}

function applyGlobalTranslations() {
    const t = globalTranslations[currentLang];
    
    if (document.getElementById('txt-title')) document.getElementById('txt-title').innerText = t.appTitle;
    if (document.getElementById('nav-routine')) document.getElementById('nav-routine').innerText = t.navRoutine;
    if (document.getElementById('nav-macros')) document.getElementById('nav-macros').innerText = t.navMacros;
    if (document.getElementById('nav-nutrition')) document.getElementById('nav-nutrition').innerText = t.navNutrition;
    if (document.getElementById('nav-progress')) document.getElementById('nav-progress').innerText = t.navProgress;
    
    const langBtn = document.getElementById('btn-lang');
    if (langBtn) {
        langBtn.innerText = currentLang === 'nl' ? 'EN' : 'NL';
    }
}

function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', initGlobal);
document.addEventListener('load', initGlobal);
