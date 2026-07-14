const routineDatabase = {
    nl: {
        heading: "Jouw Unieke Schema voor Vandaag",
        muscleLabel: "Spiergroep van de dag:",
        routines: [
            { muscle: "Borst (Focus op Kracht)", exercises: ["Barbell Bench Press (4x6)", "Incline Dumbbell Press (3x8)", "Chest Dips (3x10)", "Cable Flyes (4x12)"] },
            { muscle: "Rug (Dikte & Wijdte)", exercises: ["Deadlift (3x5)", "Barbell Rows (4x8)", "Pull-ups (4x Max)", "Seated Cable Rows (3x10)"] },
            { muscle: "Benen (Quads Focus)", exercises: ["Barbell Squats (4x6)", "Leg Press (3x10)", "Leg Extensions (4x12)", "Walking Lunges (3x15 stappen)"] },
            { muscle: "Schouders & Nek", exercises: ["Overhead Press (4x8)", "Dumbbell Lateral Raises (4x12)", "Bent-over Rear Delt Flyes (3x15)", "Barbell Shrugs (3x12)"] },
            { muscle: "Armen (Biceps & Triceps)", exercises: ["Barbell Curls (3x10)", "Skull Crushers (3x10)", "Incline Dumbbell Curls (3x12)", "Tricep Overhead Extensions (4x12)"] },
            { muscle: "Hamstrings & Kuiten", exercises: ["Romanian Deadlifts (4x8)", "Lying Leg Curls (4x10)", "Standing Calf Raises (4x15)", "Seated Calf Raises (3x20)"] },
            { muscle: "Buikspieren & Core", exercises: ["Hanging Leg Raises (3x15)", "Ab Wheel Rollouts (3x12)", "Plank (3x 60 seconden)", "Russian Twists (3x40)"] },
            { muscle: "Volledig Lichaam (Conditioning)", exercises: ["Kettlebell Swings (4x20)", "Push-ups (4x20)", "Thrusters (3x12)", "Burpees (3x10)"] },
            { muscle: "Borst & Schouders (Push)", exercises: ["Incline Barbell Press (4x8)", "Dumbbell Shoulder Press (3x10)", "Decline Push-ups (3x15)", "Cable Lateral Raises (4x12)"] },
            { muscle: "Rug & Achterkant Schouders (Pull)", exercises: ["Lat Pulldowns (4x10)", "T-Bar Rows (3x8)", "Face Pulls (4x15)", "Hammer Curls (3x12)"] },
            { muscle: "Actief Herstel & Mobiliteit", exercises: ["20 minuten rustig stretchen", "Foam rolling van grote spiergroepen", "Wandelen in de buitenlucht (30 minuten)"] }
        ]
    },
    en: {
        heading: "Your Unique Workout for Today",
        muscleLabel: "Target Muscle Group:",
        routines: [
            { muscle: "Chest (Strength Focus)", exercises: ["Barbell Bench Press (4x6)", "Incline Dumbbell Press (3x8)", "Chest Dips (3x10)", "Cable Flyes (4x12)"] },
            { muscle: "Back (Thickness & Width)", exercises: ["Deadlift (3x5)", "Barbell Rows (4x8)", "Pull-ups (4x Max)", "Seated Cable Rows (3x10)"] },
            { muscle: "Legs (Quads Focus)", exercises: ["Barbell Squats (4x6)", "Leg Press (3x10)", "Leg Extensions (4x12)", "Walking Lunges (3x15 steps)"] },
            { muscle: "Shoulders & Traps", exercises: ["Overhead Press (4x8)", "Dumbbell Lateral Raises (4x12)", "Bent-over Rear Delt Flyes (3x15)", "Barbell Shrugs (3x12)"] },
            { muscle: "Arms (Biceps & Triceps)", exercises: ["Barbell Curls (3x10)", "Skull Crushers (3x10)", "Incline Dumbbell Curls (3x12)", "Tricep Overhead Extensions (4x12)"] },
            { muscle: "Hamstrings & Calves", exercises: ["Romanian Deadlifts (4x8)", "Lying Leg Curls (4x10)", "Standing Calf Raises (4x15)", "Seated Calf Raises (3x20)"] },
            { muscle: "Abs & Core Strength", exercises: ["Hanging Leg Raises (3x15)", "Ab Wheel Rollouts (3x12)", "Plank (3x 60 seconds)", "Russian Twists (3x40)"] },
            { muscle: "Full Body Conditioning", exercises: ["Kettlebell Swings (4x20)", "Push-ups (4x20)", "Thrusters (3x12)", "Burpees (3x10)"] },
            { muscle: "Chest & Shoulders (Push)", exercises: ["Incline Barbell Press (4x8)", "Dumbbell Shoulder Press (3x10)", "Decline Push-ups (3x15)", "Cable Lateral Raises (4x12)"] },
            { muscle: "Back & Rear Delts (Pull)", exercises: ["Lat Pulldowns (4x10)", "T-Bar Rows (3x8)", "Face Pulls (4x15)", "Hammer Curls (3x12)"] },
            { muscle: "Active Recovery & Mobility", exercises: ["20 minutes of deep stretching", "Foam rolling major muscle groups", "Outdoor walking (30 minutes)"] }
        ]
    }
};

function displayRoutine() {
    const lang = currentLang; 
    const today = new Date();
    
    // Kies elke dag een ander trainingsschema
    const dateSeed = today.getDate() + today.getMonth() + today.getFullYear();
    const availableRoutines = routineDatabase[lang].routines;
    const routineIndex = dateSeed % availableRoutines.length; 
    
    const todayData = availableRoutines[routineIndex];
    const labels = routineDatabase[lang];
    
    document.getElementById('page-routine-title').innerText = labels.heading;
    
    let html = `<h3>${labels.muscleLabel} <span style="color:#e43f5a;">${todayData.muscle}</span></h3><br><ul class="nutrition-list">`;
    
    todayData.exercises.forEach(ex => {
        html += `<li>${ex}</li>`;
    });
    
    html += `</ul>`;
    document.getElementById('routine-display').innerHTML = html;
}

function pageLanguageChanged() {
    displayRoutine();
}

document.addEventListener('DOMContentLoaded', displayRoutine);
