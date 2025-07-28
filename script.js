// --- PERSONAL PROFILE DATA ---
const userProfile = {
    birthDate: "1992-12-22",
    heightInches: 75, // 6' 3"
    weightLbs: 190
};

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
    {
        date: "Night of July 27, 2025",
        duration: "8.5 hours",
        details: "Bedtime at 9:30 PM, woke up at 6:00 AM.",
        analysis: {
            good: "Getting 8.5 hours of sleep is fantastic for recovery, hormone regulation, and managing stress, all of which can indirectly influence cardiovascular health. A consistent sleep schedule is a powerful tool for improvement."
        }
    }
];

const mealLog = [
     {
        date: "Breakfast - July 28, 2025",
        name: "Breakfast Smoothie",
        ingredients: "Frozen fruit, kale, Naked vanilla protein powder, psyllium husk, skim milk, chia seeds, greek yogurt, almond butter, Trader Joe's oats, carrots.",
        analysis: {
            good: "This is a fantastic meal. It's packed with soluble fiber from the oats, chia seeds, and psyllium husk, which is ideal for lowering LDL. The fruits, vegetables, and almond butter add healthy fats and micronutrients.",
            improvements: [
                { title: "The Protein Powder", text: "The vanilla-flavored protein powder is a daily source of added sugar (5g per serving). Switching to an unflavored version is an easy optimization." },
                { title: "The Greek Yogurt", text: "This is a great addition for protein. However, be sure it's *plain* Greek yogurt. Flavored versions (like vanilla or honey) can be very high in added sugar, which would work against your goals." }
            ],
            optimizations: [
                "Switch to an unflavored protein powder.",
                "Ensure you're using plain, unsweetened Greek yogurt."
            ]
        }
    },
    {
        date: "Dinner - July 27 & 29, 2025",
        name: "Honey Glaze Salmon Sheet Pan",
        ingredients: "Salmon, broccoli, potatoes, olive oil, lemon, butter substitute, honey.",
        analysis: {
            good: "The foundation of this meal is excellent. Salmon provides healthy omega-3 fats, while broccoli and potatoes offer essential fiber and nutrients.",
            improvements: [
                { title: "The Butter Substitute", text: "The chosen butter substitute is high in saturated fat (3g/tbsp) due to its palm oil base. The ¼ cup in the recipe adds a significant amount of the exact fat we are trying to reduce to lower LDL." },
                { title: "The Honey Glaze", text: "The 2 tablespoons of honey add a substantial amount of sugar (~34g) to the dish. This can negatively impact the liver and contribute to LDL production." }
            ],
            optimizations: [
                "<strong>Eliminate the butter substitute entirely.</strong> Use 2-3 tbsp of olive oil for the whole dish instead.",
                "<strong>Replace the honey glaze.</strong> Rub the salmon with minced garlic, fresh herbs, and a squeeze of lemon to get great flavor without the added sugar."
            ]
        }
    }
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
const mealLogContainer = document.getElementById('meal-log-container');
const sleepLogContainer = document.getElementById('sleep-log-container');
const ageEl = document.getElementById('age');
const bmiEl = document.getElementById('bmi');

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
    if (ageEl) ageEl.textContent = calculateAge(userProfile.birthDate);
    if (bmiEl) bmiEl.textContent = calculateBMI(userProfile.weightLbs, userProfile.heightInches);
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

function renderSleepLog() {
    if (!sleepLogContainer) return;
    sleepLogContainer.innerHTML = '';
    sleepLog.forEach(log => {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <div class="flex justify-between items-center">
                <h4 class="text-lg font-semibold text-slate-800">${log.date}</h4>
                <p class="text-sm font-medium text-slate-500">Total Duration: ${log.duration}</p>
            </div>
            <p class="text-sm text-slate-600 mt-1"><strong>Details:</strong> ${log.details}</p>
            <div class="analysis-section">
                <h5 class="font-semibold text-slate-700 mb-2">Analysis</h5>
                <div class="good-point">
                    <p class="font-semibold text-green-800">✅ Excellent Duration & Consistency</p>
                    <p class="text-sm text-green-700">${log.analysis.good}</p>
                </div>
            </div>`;
        sleepLogContainer.appendChild(entry);
    });
}

function renderMealLog() {
    if (!mealLogContainer) return;
    mealLogContainer.innerHTML = '';
    mealLog.forEach(meal => {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        let improvementsHtml = meal.analysis.improvements.map(imp => `<div class="improvement-point"><p class="font-semibold text-amber-800">⚠️ Room for Improvement: ${imp.title}</p><p class="text-sm text-amber-700">${imp.text}</p></div>`).join('');
        let optimizationsHtml = meal.analysis.optimizations.map(opt => `<li>${opt}</li>`).join('');
        entry.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="text-xl font-semibold text-slate-800">${meal.name}</h3>
                <p class="text-sm font-medium text-slate-500">${meal.date}</p>
            </div>
            <p class="text-sm text-slate-600 mt-1"><strong>Ingredients:</strong> ${meal.ingredients}</p>
            <div class="analysis-section">
                <h4 class="font-semibold text-slate-700 mb-2">Analysis & Optimization Plan</h4>
                <div class="space-y-3">
                    <div class="good-point"><p class="font-semibold text-green-800">✅ What's Great:</p><p class="text-sm text-green-700">${meal.analysis.good}</p></div>
                    ${improvementsHtml}
                    <div><p class="font-semibold text-blue-800">💡 Optimization Plan for Next Time:</p><ul class="list-disc list-inside text-sm text-blue-700 mt-1 space-y-1">${optimizationsHtml}</ul></div>
                </div>
            </div>`;
        mealLogContainer.appendChild(entry);
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
// This runs when the page loads. It checks if it's the dashboard page before running dashboard-specific code.
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('health-data-table')) {
        renderProfile();
        renderTable();
        renderSleepLog();
        renderMealLog();

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