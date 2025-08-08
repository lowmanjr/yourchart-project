// --- DOM ELEMENTS CACHE ---
// It's good practice to cache DOM element lookups
const dom = {
    // Dashboard elements
    tableBody: document.getElementById('health-data-table'),
    filterContainer: document.getElementById('filter-container'),
    ageEl: document.getElementById('age'),
    bmiEl: document.getElementById('bmi'),
    currentWeightEl: document.getElementById('current-weight'),
    spo2El: document.getElementById('spo2'),
    pulseRateEl: document.getElementById('pulse-rate'),
    weightTrendEl: document.getElementById('weight-trend'),
    avgSleepEl: document.getElementById('avg-sleep'),
    // Modal elements
    modal: document.getElementById('metric-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalFactors: document.getElementById('modal-factors'),
    modalInsight: document.getElementById('modal-insight'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    // Log page elements
    dailyLogContainer: document.getElementById('daily-log-container'),
    weightChartCanvas: document.getElementById('weightChart')
};

// --- UTILITY FUNCTIONS ---
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

// --- PROFILE & DASHBOARD RENDERING ---
function renderProfile(data) {
    const { userProfile, weightLog, pulseOxLog, sleepLog } = data;
    if (!userProfile) return;

    const latestWeight = weightLog[weightLog.length - 1].weight;
    const firstWeight = weightLog[0].weight;
    const weightChange = latestWeight - firstWeight;
    const latestPulseOx = pulseOxLog[pulseOxLog.length - 1];

    const totalSleep = sleepLog.reduce((acc, log) => acc + log.duration, 0);
    const avgSleep = (totalSleep / sleepLog.length).toFixed(1);

    if (dom.ageEl) dom.ageEl.textContent = calculateAge(userProfile.birthDate);
    if (dom.currentWeightEl) dom.currentWeightEl.textContent = `${latestWeight} lbs`;
    if (dom.bmiEl) dom.bmiEl.textContent = calculateBMI(latestWeight, userProfile.heightInches);
    if (dom.avgSleepEl) dom.avgSleepEl.textContent = `${avgSleep} hrs`;
    if (dom.spo2El) dom.spo2El.textContent = `${latestPulseOx.spo2} %`;
    if (dom.pulseRateEl) dom.pulseRateEl.textContent = `${latestPulseOx.pulseRate} BPM`;

    if (dom.weightTrendEl && weightChange !== 0) {
        const trendSymbol = weightChange < 0 ? '↓' : '↑';
        const trendColor = weightChange < 0 ? 'text-green-600' : 'text-red-600';
        dom.weightTrendEl.className = `text-xs font-semibold ${trendColor}`;
        dom.weightTrendEl.innerHTML = `<span>${trendSymbol} ${Math.abs(weightChange).toFixed(1)} lbs</span>`;
    } else if (dom.weightTrendEl) {
        dom.weightTrendEl.innerHTML = '';
    }
}

function renderTable(healthData, filter = 'all') {
    if (!dom.tableBody) return;
    
    let filteredData = healthData;
    if (filter === 'bad-metrics') {
        filteredData = healthData.filter(item => item.isHigh[item.isHigh.length - 1]);
    } else if (filter !== 'all') {
        filteredData = healthData.filter(item => item.category === filter);
    }
    
    dom.tableBody.innerHTML = filteredData.map(item => {
        let trendHtml = '';
        if (item.trend === 'up') trendHtml = `<span class="trend-arrow trend-up">Worsening &uarr;</span>`;
        else if (item.trend === 'down') trendHtml = `<span class="trend-arrow trend-down">Improved &darr;</span>`;
        else if (item.trend === 'uturn') trendHtml = `<span class="trend-arrow trend-uturn">U-Turn &cap;</span>`;
        else if (item.trend === 'uturn_inv') trendHtml = `<span class="trend-arrow trend-uturn">Worsening &cup;</span>`;
        else trendHtml = `<span class="trend-arrow trend-stable">Stable &rarr;</span>`;
        
        const valuesHtml = item.values.map((value, index) => {
            const isHigh = item.isHigh[index];
            return `<td class="p-4 text-center"><span class="${isHigh ? 'font-bold text-red-600' : 'text-slate-700'}">${value}</span></td>`;
        }).join('');

        return `
            <tr class="border-b border-slate-200 hover:bg-slate-50 data-row" data-metric-id="${item.id}" role="button" tabindex="0">
                <td class="p-4 font-medium text-slate-800">${item.name}</td>
                ${valuesHtml}
                <td class="p-4 text-slate-600 text-sm">${item.range}</td>
                <td class="p-4">${trendHtml}</td>
            </tr>
        `;
    }).join('');
}


// --- DETAILED LOG RENDERING ---
function groupAllLogsByDate(data) {
    const { sleepLog, mealLog, exerciseLog, mealLibrary } = data;
    const logsByDate = {};

    const addToDate = (date, type, entry) => {
        if (!logsByDate[date]) {
            logsByDate[date] = { sleep: [], meals: [], exercise: [] };
        }
        logsByDate[date][type].push(entry);
    };

    sleepLog.forEach(log => addToDate(log.wakeDate, 'sleep', log));
    mealLog.forEach(log => {
        // Combine the log entry with the full meal data from the library
        const fullMealData = { ...mealLibrary[log.mealId], ...log };
        addToDate(log.date, 'meals', fullMealData);
    });
    exerciseLog.forEach(log => addToDate(log.date, 'exercise', log));
    
    return logsByDate;
}

function createLogEntryHTML(entry, type) {
    if (type === 'sleep') {
        return `
            <div class="log-entry">
                <div class="flex justify-between items-center">
                    <h4 class="text-lg font-semibold text-slate-800">Sleep</h4>
                    <p class="text-sm font-medium text-slate-500">${entry.duration} hours</p>
                </div>
                <p class="text-sm text-slate-600 mt-1"><strong>Details:</strong> ${entry.details}</p>
                <div class="analysis-section"><div class="good-point"><p class="font-semibold text-green-800">✅ Analysis</p><p class="text-sm text-green-700">A solid sleep duration is great for health and recovery.</p></div></div>
            </div>`;
    }
    if (type === 'meal') {
        const { analysis, name, type: mealType, ingredients, notes } = entry;
        const improvementsHtml = analysis.improvements.map(imp => `<div class="improvement-point"><p class="font-semibold text-amber-800">⚠️ Room for Improvement: ${imp.title}</p><p class="text-sm text-amber-700">${imp.text}</p></div>`).join('');
        const optimizationsHtml = analysis.optimizations.map(opt => `<li>${opt}</li>`).join('');
        return `
            <div class="log-entry">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-slate-800">${name}</h3>
                    <p class="text-sm font-medium text-slate-500">${mealType}</p>
                </div>
                <p class="text-sm text-slate-600 mt-1"><strong>Ingredients:</strong> ${ingredients}</p>
                ${notes ? `<p class="text-sm text-slate-500 mt-1"><em>Note: ${notes}</em></p>` : ''}
                <div class="analysis-section">
                    <div class="space-y-3">
                        <div class="good-point"><p class="font-semibold text-green-800">✅ What's Great:</p><p class="text-sm text-green-700">${analysis.good}</p></div>
                        ${improvementsHtml}
                        ${analysis.optimizations.length > 0 ? `<div><p class="font-semibold text-blue-800">💡 Optimization Plan:</p><ul class="list-disc list-inside text-sm text-blue-700 mt-1 space-y-1">${optimizationsHtml}</ul></div>` : ''}
                    </div>
                </div>
            </div>`;
    }
    if (type === 'exercise') {
        return `
            <div class="log-entry">
                <div class="flex justify-between items-center">
                    <h4 class="text-lg font-semibold text-slate-800">${entry.activity}</h4>
                    <p class="text-sm font-medium text-slate-500">${entry.duration}</p>
                </div>
                <p class="text-sm text-slate-600 mt-1"><strong>Details:</strong> ${entry.details}</p>
                <div class="analysis-section"><div class="good-point"><p class="font-semibold text-green-800">✅ Analysis</p><p class="text-sm text-green-700">${entry.analysis.good}</p></div></div>
            </div>`;
    }
    return '';
}


function renderDailyLogs(data) {
    if (!dom.dailyLogContainer) return;
    
    const logsByDate = groupAllLogsByDate(data);
    const sortedDates = Object.keys(logsByDate).sort((a, b) => new Date(b) - new Date(a));

    dom.dailyLogContainer.innerHTML = sortedDates.map(date => {
        const dayData = logsByDate[date];
        const sleepSummary = dayData.sleep.length > 0 ? `${dayData.sleep[0].duration} hrs` : 'No Log';
        const exerciseSummary = dayData.exercise.length > 0 ? `${dayData.exercise[0].activity}` : 'Rest Day';
        const mealCount = dayData.meals.length;

        const sleepHtml = dayData.sleep.map(log => createLogEntryHTML(log, 'sleep')).join('');
        const mealHtml = dayData.meals.map(meal => createLogEntryHTML(meal, 'meal')).join('');
        const exerciseHtml = dayData.exercise.map(log => createLogEntryHTML(log, 'exercise')).join('');

        return `
            <div class="border border-slate-200 rounded-lg">
                <div class="day-card-header p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 class="text-xl font-semibold text-slate-800">${new Date(date + "T12:00:00").toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
                    <div class="flex items-center gap-4 text-sm text-slate-500 mt-2 sm:mt-0">
                        <span>🌙 ${sleepSummary}</span>
                        <span>🍽️ ${mealCount} Meals</span>
                        <span>💪 ${exerciseSummary}</span>
                        <svg class="w-5 h-5 chevron-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
                <div class="day-card-details border-t border-slate-200">
                    <div class="p-4 space-y-4">
                        ${sleepHtml}
                        ${mealHtml}
                        ${exerciseHtml}
                    </div>
                </div>
            </div>`;
    }).join('');
}

function renderWeightChart(weightLog) {
    if (!dom.weightChartCanvas) return;
    const labels = weightLog.map(item => new Date(item.date + "T12:00:00").toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const dataPoints = weightLog.map(item => item.weight);

    new Chart(dom.weightChartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Weight (lbs)',
                data: dataPoints,
                fill: false,
                borderColor: '#2563eb',
                tension: 0.1,
                pointBackgroundColor: '#2563eb',
                pointRadius: 5
            }]
        },
        options: {
            scales: { y: { beginAtZero: false, title: { display: true, text: 'Weight (lbs)' } } },
            plugins: { legend: { display: false } }
        }
    });
}


// --- MODAL & INTERACTIVITY ---
function showModal(item) {
    if (!item) return;
    dom.modalTitle.textContent = item.name;
    dom.modalDescription.textContent = item.description || 'No description available.';
    dom.modalFactors.textContent = item.factors || 'No factors listed.';
    dom.modalInsight.textContent = item.insight || 'No specific insight for this metric.';
    dom.modal.classList.add('visible');
    document.addEventListener('keydown', handleEscKey);
}

function hideModal() {
    dom.modal.classList.remove('visible');
    document.removeEventListener('keydown', handleEscKey);
}

function handleEscKey(event) {
    if (event.key === 'Escape') {
        hideModal();
    }
}

function setupDashboardListeners(data) {
    // Filter buttons
    dom.filterContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            renderTable(data.healthData, e.target.dataset.filter);
        }
    });

    // Modal triggers (for click)
    dom.tableBody.addEventListener('click', (e) => {
        const row = e.target.closest('.data-row');
        if (row) {
            const metricId = row.dataset.metricId;
            const metricData = data.healthData.find(item => item.id === metricId);
            showModal(metricData);
        }
    });
    
    // Modal triggers (for keyboard)
    dom.tableBody.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const row = e.target.closest('.data-row');
            if (row) {
                e.preventDefault(); // Prevent space from scrolling page
                const metricId = row.dataset.metricId;
                const metricData = data.healthData.find(item => item.id === metricId);
                showModal(metricData);
            }
        }
    });

    // Modal closing
    dom.modal.addEventListener('click', (e) => { if (e.target === dom.modal) hideModal(); });
    dom.modalCloseBtn.addEventListener('click', hideModal);
}

function setupLogListeners() {
    // Accordion handler using event delegation
    dom.dailyLogContainer.addEventListener('click', (event) => {
        const header = event.target.closest('.day-card-header');
        if (!header) return; 

        const details = header.nextElementSibling;
        const icon = header.querySelector('.chevron-icon');
        details.classList.toggle('open');
        icon.classList.toggle('rotate-180');
    });

    // Open the first log entry by default
    const firstCardDetails = dom.dailyLogContainer.querySelector('.day-card-details');
    if (firstCardDetails) {
        firstCardDetails.classList.add('open');
        firstCardDetails.previousElementSibling.querySelector('.chevron-icon').classList.add('rotate-180');
    }
}


// --- INITIALIZATION ---
async function main() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Logic for Dashboard Page
        if (dom.tableBody) {
            renderProfile(data);
            renderTable(data.healthData);
            setupDashboardListeners(data);
        }

        // Logic for Log Page
        if (dom.dailyLogContainer) {
            renderWeightChart(data.weightLog);
            renderDailyLogs(data);
            setupLogListeners();
        }
    } catch (error) {
        console.error("Failed to load or process health data:", error);
        // Optionally display an error message to the user on the page
        document.body.innerHTML = `<div class="text-center p-8"><h1 class="text-2xl font-bold text-red-600">Error</h1><p class="text-slate-600">Could not load health data. Please check the console for details.</p></div>`;
    }
}

document.addEventListener('DOMContentLoaded', main);