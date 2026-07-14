const nutritionData = {
    nl: {
        title: "Beste Voeding voor Spieropbouw & Herstel",
        categories: [
            {
                name: "Complexe Koolhydraten (Energie)",
                items: [
                    "Havermout (Rijk aan vezels, trage afgifte van energie)",
                    "Zilvervliesrijst & Volkoren pasta (Ideaal voor herstel na training)",
                    "Zoete aardappelen (Bomvol vitaminen en makkelijk verteerbaar)",
                    "Quinoa (Bevat daarnaast ook essentiële aminozuren)"
                ]
            },
            {
                name: "Hoogwaardige Eiwitten (Spierherstel)",
                items: [
                    "Kipfilet & Kalkoen (Zeer mager, puur eiwit)",
                    "Mager rundergehakt of biefstuk (Bevat natuurlijke creatine en ijzer)",
                    "Magere kwark of Skyr (Perfecte caseïne-eiwitten voor de nacht)",
                    "Eieren (De gouden standaard qua biologische waarde)",
                    "Tofu / Tempé / Linzen (Beste plantaardige eiwitbronnen)"
                ]
            },
            {
                name: "Gezonde Vetten (Hormoonhuishouding)",
                items: [
                    "Avocado (Gezonde enkelvoudig onverzadigde vetten)",
                    "Ongezouten noten (Amandelen, walnoten, cashews)",
                    "Extra Vierge Olijfolie (Goed voor koken en salades)",
                    "Vette vis zoals Zalm (Rijk aan essentiële Omega-3 vetzuren)"
                ]
            }
        ]
    },
    en: {
        title: "Best Food for Muscle Building & Recovery",
        categories: [
            {
                name: "Complex Carbohydrates (Energy)",
                items: [
                    "Oats (Rich in fiber, slow-releasing energy source)",
                    "Brown rice & Whole-grain pasta (Perfect for post-workout recovery)",
                    "Sweet potatoes (Packed with vitamins and complex carbs)",
                    "Quinoa (Contains carbohydrates as well as essential amino acids)"
                ]
            },
            {
                name: "High-Quality Proteins (Muscle Repair)",
                items: [
                    "Chicken breast & Turkey (Very lean, high protein yield)",
                    "Lean beef (Contains natural creatine and iron)",
                    "Low-fat Quark or Skyr (Slow-digesting casein proteins for nighttime)",
                    "Whole eggs (The gold standard of biological protein value)",
                    "Tofu / Tempeh / Lentils (Excellent plant-based protein alternatives)"
                ]
            },
            {
                name: "Healthy Fats (Hormone Support)",
                items: [
                    "Avocados (Healthy monounsaturated fatty acids)",
                    "Unsalted nuts (Almonds, walnuts, cashews)",
                    "Extra Virgin Olive Oil (Great for low-heat cooking & dressings)",
                    "Fatty fish like Salmon (Incredibly rich in Omega-3 fatty acids)"
                ]
            }
        ]
    }
};

function renderNutritionAdvice() {
    const data = nutritionData[currentLang];
    document.getElementById('nutrition-main-title').innerText = data.title;
    
    let html = "";
    
    data.categories.forEach(cat => {
        html += `
            <div class="nutrition-section">
                <h3>${cat.name}</h3>
                <ul class="nutrition-list">
        `;
        
        cat.items.forEach(item => {
            html += `<li>${item}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
    });
    
    document.getElementById('nutrition-container').innerHTML = html;
}

function pageLanguageChanged() {
    renderNutritionAdvice();
}

document.addEventListener('DOMContentLoaded', renderNutritionAdvice);
