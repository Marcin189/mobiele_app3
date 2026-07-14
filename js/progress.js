const progressTranslations = {
    nl: {
        title: "Voortgang Registreren",
        weightLabel: "Huidig Gewicht (kg):",
        btnSave: "Log Gewicht",
        thDate: "Datum",
        thWeight: "Gewicht (kg)",
        alertEmpty: "Vul aanzienlijk een geldig gewicht in!"
    },
    en: {
        title: "Track Your Progress",
        weightLabel: "Current Weight (kg):",
        btnSave: "Log Weight",
        thDate: "Date",
        thWeight: "Weight (kg)",
        alertEmpty: "Please enter a valid weight measurement!"
    }
};

function initProgressPage() {
    updateProgressLabels();
    renderProgressTable();
}

function updateProgressLabels() {
    const t = progressTranslations[currentLang];
    document.getElementById('progress-title').innerText = t.title;
    document.getElementById('lbl-weight').innerText = t.weightLabel;
    document.getElementById('btn-save').innerText = t.btnSave;
    document.getElementById('th-date').innerText = t.thDate;
    document.getElementById('th-weight').innerText = t.thWeight;
}

function getStoredProgress() {
    const stored = localStorage.getItem('fitnessProgressLogs');
    return stored ? JSON.parse(stored) : [];
}

function submitWeight() {
    const weightInput = document.getElementById('input-weight');
    const weightVal = parseFloat(weightInput.value);
    
    if (!weightVal || weightVal <= 0) {
        alert(progressTranslations[currentLang].alertEmpty);
        return;
    }

    const currentLogs = getStoredProgress();
    const today = new Date().toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });

    // Nieuw log-item toevoegen aan de array
    currentLogs.push({ date: today, weight: weightVal });
    
    // Opslaan in local storage
    localStorage.setItem('fitnessProgressLogs', JSON.stringify(currentLogs));
    
    // Input leegmaken en tabel opnieuw opbouwen
    weightInput.value = "";
    renderProgressTable();
}

function renderProgressTable() {
    const logs = getStoredProgress();
    const tbody = document.getElementById('table-body-progress');
    
    // Maak tabel leeg
    tbody.innerHTML = "";
    
    // Vult de tabel met alle opgeslagen gewichtsmetingen. De nieuwste meting wordt als eerste getoond.
    for (let i = logs.length - 1; i >= 0; i--) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${logs[i].date}</td>
            <td><strong>${logs[i].weight} kg</strong></td>
        `;
        tbody.appendChild(row);
    }
}

function pageLanguageChanged() {
    updateProgressLabels();
    renderProgressTable();
}

document.addEventListener('DOMContentLoaded', initProgressPage);
