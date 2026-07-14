const macroTranslations = {
    nl: {
        title: "Voedingswaarden Berekenen",
        carbs: "Koolhydraten (in grammen):",
        protein: "Eiwitten (in grammen):",
        fats: "Vetten (in grammen):",
        summary: "Totale Energie-inname:",
        resultText: "Totaal berekend:"
    },
    en: {
        title: "Calculate Macro Nutrients",
        carbs: "Carbohydrates (in grams):",
        protein: "Proteins (in grams):",
        fats: "Fats (in grams):",
        summary: "Total Energy Intake:",
        resultText: "Total calculated:"
    }
};

function loadSavedMacros() {
    // Laad eerder opgeslagen macro's in de invoervelden
    document.getElementById('input-carbs').value = localStorage.getItem('savedCarbs') || 0;
    document.getElementById('input-protein').value = localStorage.getItem('savedProtein') || 0;
    document.getElementById('input-fats').value = localStorage.getItem('savedFats') || 0;
    
    updateLabels();
    calculateAndSaveMacros();
}

function updateLabels() {
    const t = macroTranslations[currentLang];
    document.getElementById('macros-title').innerText = t.title;
    document.getElementById('lbl-carbs').innerText = t.carbs;
    document.getElementById('lbl-protein').innerText = t.protein;
    document.getElementById('lbl-fats').innerText = t.fats;
    document.getElementById('lbl-summary-title').innerText = t.summary;
}

function calculateAndSaveMacros() {
    const carbs = parseFloat(document.getElementById('input-carbs').value) || 0;
    const protein = parseFloat(document.getElementById('input-protein').value) || 0;
    const fats = parseFloat(document.getElementById('input-fats').value) || 0;

    // Sla op in localStorage
    localStorage.setItem('savedCarbs', carbs);
    localStorage.setItem('savedProtein', protein);
    localStorage.setItem('savedFats', fats);

    // Berekening 
    const totalKcal = (carbs * 4) + (protein * 4) + (fats * 9);
    
    document.getElementById('total-calories-display').innerText = `${totalKcal} kcal`;
}

function pageLanguageChanged() {
    updateLabels();
}

document.addEventListener('DOMContentLoaded', loadSavedMacros);
