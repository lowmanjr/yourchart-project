// --- PERSONAL PROFILE DATA ---
const userProfile = {
    birthDate: "1992-12-22",
    heightInches: 75, // 6' 3"
};

const weightLog = [
    { date: "2025-07-28", weight: 190 },
    { date: "2025-07-29", weight: 185 },
    { date: "2025-07-30", weight: 186 },
    { date: "2025-07-31", weight: 186.6 }
];

const pulseOxLog = [
    { date: "2025-07-29", spo2: 95, pulseRate: 66 },
    { date: "2025-07-30", spo2: 97, pulseRate: 50 },
    { date: "2025-07-31", spo2: 97, pulseRate: 61 }
];

// --- LAB DATA ---
const healthData = [
    { category: 'cardiovascular', name: 'LDL Cholesterol', values: [138, 147, 149, 155.6], isHigh: [true, true, true, true], range: '< 100 mg/dL', trend: 'up', description: "Often called 'bad' cholesterol. LDL (Low-Density Lipoprotein) carries cholesterol to your arteries. High levels can lead to plaque buildup (atherosclerosis), increasing risk for heart disease.", factors: "Diet high in saturated and trans fats, lack of physical activity, genetics/family history, smoking, and excess body weight.", insight: "This example shows a consistently high and trending upward LDL. This is the primary area of concern and aligns with a potential family history." },
    { category: 'cardiovascular', name: 'HDL Cholesterol', values: [46, 60, 62, 46], isHigh: [false, false, false, false], range: '> 40 mg/dL', trend: 'uturn', description: "Often called 'good' cholesterol. HDL (High-Density Lipoprotein) helps remove excess cholesterol from your arteries, carrying it back to the liver for disposal.", factors: "Regular exercise (especially aerobic), healthy fats (olive oil, avocados), maintaining a healthy weight, moderate alcohol consumption, and genetics.", insight: "This example shows an HDL that improved and then returned to its lower baseline, suggesting lifestyle changes occurred during these periods." },
    { category: 'cardiovascular', name: 'Triglycerides', values: [78, 106, 78, 82], isHigh: [false, false, false, false], range: '< 150 mg/dL', trend: 'stable', description: "A type of fat found in your blood that your body uses for energy. High levels are often linked with high carbohydrate diets and can increase heart disease risk.", factors: "High intake of sugar and refined carbohydrates, excessive alcohol, high-calorie diets, lack of exercise, and certain medications.", insight: "These triglyceride levels have remained in an excellent, stable range for years, a major positive in this cardiovascular picture." },
    { category: 'cardiovascular', name: 'Chol/HDL Ratio', values: [4.3, 3.7, 3.7, 4.7], isHigh: [false, false, false, true], range: '< 4.4', trend: 'uturn_inv', description: "A ratio comparing your total cholesterol to your 'good' HDL cholesterol. It's used as another way to assess cardiovascular risk. A lower number is better.", factors: "This is a calculated value, so it's influenced by anything that affects Total Cholesterol and HDL levels.", insight: "This ratio worsened significantly in the latest test, driven entirely by the drop in HDL. This highlights the importance of raising HDL." },
    { category: 'cardiovascular', name: 'Total Cholesterol', values: [200, 226, 229, 218], isHigh: [true, true, true, true], range: '< 200 mg/dL', trend: 'stable', description: 'A measure of all cholesterol in your blood, including LDL, HDL, and VLDL.', factors: 'Diet, exercise, genetics, weight.', insight: 'The total cholesterol in this example remains borderline high, primarily driven by the high LDL.' },
    { category: 'cardiovascular', name: 'VLDL Cholesterol', values: [16, 19, 15.6, 16.4], isHigh: [false, false, false, false], range: '5 - 40 mg/dL', trend: 'stable', description: 'Very-Low-Density Lipoprotein, another "bad" cholesterol type strongly linked to triglycerides.', factors: 'High carbohydrate diets, sugar intake.', insight: 'The VLDL is stable and in a good range, consistent with the excellent triglyceride levels.' },
    { category: 'cardiovascular', name: 'Apolipoprotein B', values: ['N/A', 'N/A', 'N/A', 111], isHigh: [false, false, false, true], range: '< 90 mg/dL', trend: 'stable', description: 'A direct measure of the number of plaque-forming particles (like LDL and VLDL). Some consider it a more accurate risk marker than LDL alone.', factors: 'Same as LDL: diet, exercise, genetics.', insight: 'The 2025 result is high, confirming the picture shown by the high LDL and indicating a high number of atherogenic particles.' },
    { category: 'metabolic', name: 'Fasting Glucose', values: [104, 84, 84, 91], isHigh: [true, false, false, false], range: '65 - 99 mg/dL', trend: 'down', description: 'Measures your blood sugar level after an overnight fast. It is a key indicator for diabetes risk.', factors: 'Carbohydrate and sugar intake, exercise, stress, illness, and sleep.', insight: 'This is a huge success story. The data shows a successful reversal from the prediabetic range to a healthy, stable level.' },
    { category: 'metabolic', name: 'Hemoglobin A1c', values: ['N/A', 'N/A', 'N/A', '5.0%'], isHigh: [false, false, false, false], range: '4.0 - 6.0 %', trend: 'stable', description: 'Reflects your average blood sugar level over the past 2-3 months.', factors: 'Long-term diet and lifestyle, overall glucose control.', insight: 'The 2025 result is excellent and confirms great long-term blood sugar management.' },
    { category: 'general', name: 'WBC Count', values: [3.6, 4.2, 4.2, 3.7], isHigh: [true, false, false, true], range: '3.8 - 10.6', trend: 'stable', description: 'White Blood Cell count. These cells are the core of your immune system, fighting infection.', factors: 'Can be low due to viral infections, certain medications, or autoimmune conditions. Can also be a normal variant for some individuals.', insight: 'The WBC count has consistently been on the low end of normal or just below. This may just be a personal baseline.' }
];

// --- LIFESTYLE LOG DATA ---
const sleepLog = [
    { date: "2025-07-30", wakeDate: "2025-07-31", duration: 8.0 },
    { date: "2025-07-29", wakeDate: "2025-07-30", duration: 8.0 },
    { date: "2025-07-28", wakeDate: "2025-07-29", duration: 7.5 },
    { date: "2025-07-27", wakeDate: "2025-07-28", duration: 8.5 }
];

const dailyMeals = {
    breakfast: { type: "Breakfast", name: "Breakfast Smoothie", ingredients: "Berries, kale, vanilla protein, psyllium, skim milk, chia seeds, greek yogurt, almond butter, avocado, oats, carrots.", analysis: { good: "This is a fantastic meal. It's packed with soluble fiber (oats, chia, psyllium) and healthy monounsaturated fats (avocado, almond butter), which is ideal for lowering LDL and raising HDL.", improvements: [{ title: "The Protein Powder", text: "The vanilla-flavored protein powder is a daily source of added sugar (5g per serving)." }, { title: "The Greek Yogurt", text: "Ensure it's *plain* Greek yogurt, as flavored versions are high in sugar." }], optimizations: ["Switch to an unflavored protein powder.", "Ensure you're using plain, unsweetened Greek yogurt." ] } },
    snack1: { type: "Snack", name: "Bowl of Oats", ingredients: "Greek yogurt, almond butter, psyllium husk, vanilla protein powder, oats.", analysis: { good: "An excellent snack, high in soluble fiber from oats and psyllium husk to help lower LDL. The Greek yogurt and almond butter add valuable protein and healthy fats.", improvements: [{ title: "The Protein Powder", text: "The vanilla-flavored protein powder is a daily source of added sugar (5g per serving)." }], optimizations: [ "Switch to an unflavored protein powder to eliminate the added sugar." ] } },
    snack2: { type: "Snack", name: "Canned Fish", ingredients: "Sardines or Salmon in Olive Oil, Salt.", analysis: { good: "An A+ choice. Oily fish is a powerhouse of anti-inflammatory omega-3 fatty acids, which are excellent for raising HDL. They are also high in protein and calcium with zero added sugar.", improvements: [], optimizations: ["Keep this as a regular staple in your diet."] } },
    snack3: { type: "Snack", name: "Low Fat Cottage Cheese", ingredients: "Daisy Low Fat Cottage Cheese (1/2 serving).", analysis: { good: "This is a very good snack choice. It's high in protein which is great for satiety, has zero added sugar, and is made with simple, clean ingredients.", improvements: [{ title: "Saturated Fat Content", text: "A full serving has 1.5g of saturated fat. While your half-serving is very low (0.75g), it's a small trade-off for the creamy texture." }], optimizations: ["This is a solid choice. For a slightly more optimized option, non-fat plain Greek yogurt offers similar protein with 0g of saturated fat." ] } }
};

const mealLog = [
    // July 31
    { date: "2025-07-31", ...dailyMeals.breakfast }, { date: "2025-07-31", ...dailyMeals.snack1 }, { date: "2025-07-31", ...dailyMeals.snack2 },
    { date: "2025-07-31", type: "Lunch", name: "Pasta with Chicken (Leftovers)", ingredients: "Brown Rice/Quinoa Pasta, Caro Sugo Sauce, Chunk Chicken, Panko Breadcrumbs, Parmesan Cheese.", analysis: { good: "The foundation of this meal is excellent: whole-grain pasta, lean chicken, and a no-sugar-added sauce.", improvements: [{ title: "The Toppings", text: "Panko is a refined carb with low fiber. Using a 'good bit' of Parmesan can significantly increase the meal's saturated fat content."}], optimizations: ["Use Panko sparingly for texture, not as a main component.", "Treat Parmesan as a garnish (1-2 tbsp) to get the flavor without a large saturated fat impact."] } },
    // July 30
    { date: "2025-07-30", ...dailyMeals.breakfast }, { date: "2025-07-30", ...dailyMeals.snack1 }, { date: "2025-07-30", ...dailyMeals.snack2 }, { date: "2025-07-30", ...dailyMeals.snack3 },
    { date: "2025-07-30", type: "Dinner", name: "Pasta with Chicken", ingredients: "Brown Rice/Quinoa Pasta, Caro Sugo Sauce, Chunk Chicken, Panko Breadcrumbs, Parmesan Cheese.", analysis: { good: "The foundation of this meal is excellent: whole-grain pasta, lean chicken, and a no-sugar-added sauce.", improvements: [{ title: "The Toppings", text: "Panko is a refined carb with low fiber. Using a 'good bit' of Parmesan can significantly increase the meal's saturated fat content."}], optimizations: ["Use Panko sparingly for texture, not as a main component.", "Treat Parmesan as a garnish (1-2 tbsp) to get the flavor without a large saturated fat impact."] } },
    // July 29
    { date: "2025-07-29", ...dailyMeals.breakfast }, { date: "2025-07-29", ...dailyMeals.snack1 }, { date: "2025-07-29", ...dailyMeals.snack2 }, { date: "2025-07-29", ...dailyMeals.snack3 },
    { date: "2025-07-29", type: "Dinner", name: "Pasta with Chicken", ingredients: "Brown Rice/Quinoa Pasta, Caro Sugo Sauce, Chunk Chicken, Panko Breadcrumbs, Parmesan Cheese.", analysis: { good: "The foundation of this meal is excellent: whole-grain pasta, lean chicken, and a no-sugar-added sauce.", improvements: [{ title: "The Toppings", text: "Panko is a refined carb with low fiber. Using a 'good bit' of Parmesan can significantly increase the meal's saturated fat content."}], optimizations: ["Use Panko sparingly for texture, not as a main component.", "Treat Parmesan as a garnish (1-2 tbsp) to get the flavor without a large saturated fat impact."] } },
    // July 28
    { date: "2025-07-28", ...dailyMeals.breakfast }, { date: "2025-07-28", ...dailyMeals.snack1 }, { date: "2025-07-28", ...dailyMeals.snack2 }, { date: "2025-07-28", ...dailyMeals.snack3 },
    { date: "2025-07-28", type: "Dinner", name: "Honey Glaze Salmon Sheet Pan", ingredients: "Salmon, broccoli, potatoes, olive oil, lemon, butter substitute, honey.", analysis: { good: "The foundation of this meal is excellent. Salmon provides healthy omega-3 fats, while broccoli and potatoes offer essential fiber and nutrients.", improvements: [{ title: "The Butter Substitute", text: "The chosen butter substitute is high in saturated fat (3g/tbsp) due to its palm oil base, working against the goal of lowering LDL." }, { title: "The Honey Glaze", text: "The 2 tablespoons of honey add a substantial amount of sugar (~34g) to the dish." }], optimizations: ["<strong>Eliminate the butter substitute entirely.</strong> Use 2-3 tbsp of olive oil instead.", "<strong>Replace the honey glaze.</strong> Use minced garlic, fresh herbs, and lemon for flavor." ] } },
    // July 27
    { date: "2025-07-27", ...dailyMeals.breakfast }, { date: "2025-07-27", ...dailyMeals.snack1 }, { date: "2025-07-27", ...dailyMeals.snack2 }, { date: "2025-07-27", ...dailyMeals.snack3 },
    { date: "2025-07-27", type: "Dinner", name: "Honey Glaze Salmon Sheet Pan", ingredients: "Salmon, broccoli, potatoes, olive oil, lemon, butter substitute, honey.", analysis: { good: "The foundation of this meal is excellent. Salmon provides healthy omega-3 fats, while broccoli and potatoes offer essential fiber and nutrients.", improvements: [{ title: "The Butter Substitute", text: "The chosen butter substitute is high in saturated fat (3g/tbsp) due to its palm oil base, working against the goal of lowering LDL." }, { title: "The Honey Glaze", text: "The 2 tablespoons of honey add a substantial amount of sugar (~34g) to the dish." }], optimizations: ["<strong>Eliminate the butter substitute entirely.</strong> Use 2-3 tbsp of olive oil instead.", "<strong>Replace the honey glaze.</strong> Use minced garlic, fresh herbs, and lemon for flavor." ] } }
];

const exerciseLog = [
    { date: "2025-07-31", activity: "Swimming Laps", duration: "1 hour", details: "Consistent pace, approximately 1 mile.", analysis: { good: "Excellent choice for cardiovascular health. Swimming is a full-body, low-impact aerobic exercise that is highly effective for improving heart health and raising 'good' HDL cholesterol." } },
    { date: "2025-07-30", activity: "Hot Yoga", duration: "1 hour", details: "Vinyasa flow session.", analysis: { good: "Excellent for flexibility, strength, and stress reduction. Managing stress is an important component of overall cardiovascular health." } },
    { date: "2025-07-29", activity: "Gym Workout", duration: "1 hour", details: "Lower body resistance training.", analysis: { good: "A great session. Resistance training is excellent for building muscle, which boosts metabolism and improves insulin sensitivity. This perfectly complements your cardio work." } },
    { date: "2025-07-28", activity: "Swimming Laps", duration: "1 hour", details: "Approximately 1 mile.", analysis: { good: "Excellent choice for cardiovascular health. Swimming is a full-body, low-impact aerobic exercise that is highly effective for improving heart health and raising 'good' HDL cholesterol." } },
    { date: "2025-07-27", activity: "Gym Workout", duration: "1 hour", details: "Upper body resistance training (biceps and triceps).", analysis: { good: "Great for building and maintaining muscle mass, which is important for a healthy metabolism. A good complement to your lower body and cardio days." } }
];

// --- DOM ELEMENTS ---
const tableBody = document.getElementById('health-data-table');
const filterContainer = document.getElementById('filter-container');
const modal = document.getElementById('metric-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalFactors = document.getElementById('modal-factors');
const modalInsight = document.getElementById('modal-insight');
const modalCloseBtn = document.getElementById('modal-close-btn');
const dailyLogContainer = document.getElementById('daily-log-container');
const ageEl = document.getElementById('age');
const bmiEl = document.getElementById('bmi');
const currentWeightEl = document.getElementById('current-weight');
const spo2El = document.getElementById('spo2');
const pulseRateEl = document.getElementById('pulse-rate');
const weightTrendEl = document.getElementById('weight-trend');
const avgSleepEl = document.getElementById('avg-sleep');

// --- FUNCTIONS ---

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function calculateBMI(weightLbs, heightInches) {
    const bmi = (weightLbs / (heightInches * heightInches)) * 703;
    return bmi.toFixed(1);
}

function renderProfile() {
    const latestWeight = weightLog[weightLog.length - 1].weight;
    const firstWeight = weightLog[0].weight;
    const weightChange = latestWeight - firstWeight;
    const latestPulseOx = pulseOxLog[pulseOxLog.length - 1];
    
    const totalSleep = sleepLog.reduce((acc, log) => acc + log.duration, 0);
    const avgSleep = (totalSleep / sleepLog.length).toFixed(1);

    if (ageEl) ageEl.textContent = calculateAge(userProfile.birthDate);
    if (currentWeightEl) currentWeightEl.textContent = `${latestWeight} lbs`;
    if (bmiEl) bmiEl.textContent = calculateBMI(latestWeight, userProfile.heightInches);
    if (avgSleepEl) avgSleepEl.textContent = `${avgSleep} hrs`;
    if (spo2El) spo2El.textContent = `${latestPulseOx.spo2} %`;
    if (pulseRateEl) pulseRateEl.textContent = `${latestPulseOx.pulseRate} BPM`;

    if (weightTrendEl && weightChange !== 0) {
        const trendSymbol = weightChange < 0 ? '↓' : '↑';
        const trendColor = weightChange < 0 ? 'text-green-600' : 'text-red-600';
        weightTrendEl.className = `text-xs font-semibold ${trendColor}`;
        weightTrendEl.innerHTML = `<span>${trendSymbol} ${Math.abs(weightChange).toFixed(1)} lbs</span>`;
    }
}

function renderTable(filter = 'all') {
    if (!tableBody) return;
    tableBody.innerHTML = '';
    let filteredData = filter === 'all' ? healthData : (filter === 'bad-metrics' ? healthData.filter(item => item.isHigh[item.isHigh.length - 1]) : healthData.filter(item => item.category === filter));

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-slate-200 hover:bg-slate-50 data-row';
        row.dataset.category = item.category;
        row.addEventListener('click', () => showModal(item));
        let trendHtml = '';
        if (item.trend === 'up') trendHtml = `<span class="trend-arrow trend-up">Worsening &uarr;</span>`;
        else if (item.trend === 'down') trendHtml = `<span class="trend-arrow trend-down">Improved &darr;</span>`;
        else if (item.trend === 'uturn') trendHtml = `<span class="trend-arrow trend-uturn">U-Turn &cap;</span>`;
        else if (item.trend === 'uturn_inv') trendHtml = `<span class="trend-arrow trend-uturn">Worsening &cup;</span>`;
        else trendHtml = `<span class="trend-arrow trend-stable">Stable &rarr;</span>`;
        let valuesHtml = '';
        item.values.forEach((value, index) => {
            const isHigh = item.isHigh[index];
            valuesHtml += `<td class="p-4 text-center"><span class="${isHigh ? 'font-bold text-red-600' : 'text-slate-700'}">${value}</span></td>`;
        });
        row.innerHTML = `<td class="p-4 font-medium text-slate-800">${item.name}</td>${valuesHtml}<td class="p-4 text-slate-600 text-sm">${item.range}</td><td class="p-4">${trendHtml}</td>`;
        tableBody.appendChild(row);
    });
}

function renderDailyLogs() {
    if (!dailyLogContainer) return;
    
    const logsByDate = {};
    
    mealLog.forEach(log => {
        const date = log.date;
        if (!logsByDate[date]) logsByDate[date] = { meals: [], exercise: [] };
        logsByDate[date].meals.push(log);
    });

    exerciseLog.forEach(log => {
        const date = log.date;
        if (!logsByDate[date]) logsByDate[date] = { meals: [], exercise: [] };
        logsByDate[date].exercise.push(log);
    });

    const sortedDates = Object.keys(logsByDate).sort((a, b) => new Date(b) - new Date(a));
    
    dailyLogContainer.innerHTML = '';
    
    sortedDates.forEach(date => {
        const dayData = logsByDate[date];
        const dayCard = document.createElement('div');
        dayCard.className = 'border border-slate-200 rounded-lg';

        const exerciseSummary = dayData.exercise.length > 0 ? `${dayData.exercise[0].activity}` : 'Rest Day';
        const mealCount = dayData.meals.length;

        let mealHtml = dayData.meals.map(meal => {
             let improvementsHtml = meal.analysis.improvements.map(imp => `<div class="improvement-point"><p class="font-semibold text-amber-800">⚠️ Room for Improvement: ${imp.title}</p><p class="text-sm text-amber-700">${imp.text}</p></div>`).join('');
             let optimizationsHtml = meal.analysis.optimizations.map(opt => `<li>${opt}</li>`).join('');
             return `<div class="log-entry"><div class="flex justify-between items-center"><h3 class="text-lg font-semibold text-slate-800">${meal.name}</h3><p class="text-sm font-medium text-slate-500">${meal.type}</p></div><p class="text-sm text-slate-600 mt-1"><strong>Ingredients:</strong> ${meal.ingredients}</p><div class="analysis-section"><div class="space-y-3"><div class="good-point"><p class="font-semibold text-green-800">✅ What's Great:</p><p class="text-sm text-green-700">${meal.analysis.good}</p></div>${improvementsHtml.length > 0 ? improvementsHtml : ''}<div><p class="font-semibold text-blue-800">💡 Optimization Plan:</p><ul class="list-disc list-inside text-sm text-blue-700 mt-1 space-y-1">${optimizationsHtml}</ul></div></div></div></div>`
        }).join('');

        let exerciseHtml = dayData.exercise.map(log => `<div class="log-entry"><div class="flex justify-between items-center"><h4 class="text-lg font-semibold text-slate-800">${log.activity}</h4><p class="text-sm font-medium text-slate-500">${log.duration}</p></div><p class="text-sm text-slate-600 mt-1"><strong>Details:</strong> ${log.details}</p><div class="analysis-section"><div class="good-point"><p class="font-semibold text-green-800">✅ Analysis</p><p class="text-sm text-green-700">${log.analysis.good}</p></div></div></div>`).join('');

        dayCard.innerHTML = `
            <div class="day-card-header p-4 flex justify-between items-center">
                <h3 class="text-xl font-semibold text-slate-800">${new Date(date + "T00:00:00").toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
                <div class="flex items-center gap-4 text-sm text-slate-500">
                    <span>🍽️ ${mealCount} Meals</span>
                    <span>💪 ${exerciseSummary}</span>
                    <svg class="w-5 h-5 chevron-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
            <div class="day-card-details border-t border-slate-200">
                <div class="p-4">
                    ${mealHtml}
                    ${exerciseHtml}
                </div>
            </div>
        `;
        dailyLogContainer.appendChild(dayCard);
    });

    document.querySelectorAll('.day-card-header').forEach(header => {
        header.addEventListener('click', () => {
            const details = header.nextElementSibling;
            const icon = header.querySelector('.chevron-icon');
            details.classList.toggle('open');
            icon.classList.toggle('rotate-180');
        });
    });
}


function showModal(item) {
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description || 'No description available.';
    modalFactors.textContent = item.factors || 'No factors listed.';
    modalInsight.textContent = item.insight || 'No specific insight for this metric.';
    modal.classList.add('visible');
}

function hideModal() {
    modal.classList.remove('visible');
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('health-data-table')) {
        renderProfile();
        renderTable();
        renderDailyLogs();

        filterContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                renderTable(e.target.dataset.filter);
            }
        });

        modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
        modalCloseBtn.addEventListener('click', hideModal);
    }
});