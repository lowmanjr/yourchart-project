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

const sleepLog = [
    { duration: 8.0 }, { duration: 8.0 }, { duration: 7.5 }, { duration: 8.5 }
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

// --- DOM ELEMENTS ---
const tableBody = document.getElementById('health-data-table');
const filterContainer = document.getElementById('filter-container');
const modal = document.getElementById('metric-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalFactors = document.getElementById('modal-factors');
const modalInsight = document.getElementById('modal-insight');
const modalCloseBtn = document.getElementById('modal-close-btn');
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