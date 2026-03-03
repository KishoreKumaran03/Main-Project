/* ============================================================
   dashboard.js — All interactive logic for EasyViz Dashboard
   ============================================================ */

// ── AI Insights Panel Toggle ──────────────────────────────────
function toggleAIInsights() {
    const panel = document.getElementById('aiInsightsPanel');
    const icon = document.getElementById('expandIcon');
    const isExpanded = panel.style.maxHeight !== 'none' && panel.style.maxHeight !== '';

    if (isExpanded) {
        panel.style.maxHeight = '0px';
        icon.textContent = 'expand_less';
    } else {
        panel.style.maxHeight = '500px';
        icon.textContent = 'expand_more';
    }
}

// ── Time Range Selector ───────────────────────────────────────
document.querySelectorAll('.timeRangeBtn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.timeRangeBtn').forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        });
        this.classList.remove('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        this.classList.add('bg-primary', 'text-white');

        const range = this.dataset.range;
        console.log('Selected time range:', range);

        // Here you could filter data based on the selected range.
        // For now, this is a visual update — API integration can be added later.
        if (range === 'custom') {
            alert('Custom date picker would open here');
        }
    });
});

// ── Chart Bar Tooltip Triggers ────────────────────────────────
document.querySelectorAll('.chart-bar').forEach(bar => {
    bar.addEventListener('mouseenter', function () {
        const tooltip = this.querySelector('.tooltip-trigger');
        if (tooltip) tooltip.style.opacity = '1';
        if (tooltip) tooltip.style.visibility = 'visible';
    });
    bar.addEventListener('mouseleave', function () {
        const tooltip = this.querySelector('.tooltip-trigger');
        if (tooltip) tooltip.style.opacity = '0';
        if (tooltip) tooltip.style.visibility = 'hidden';
    });
});

// ── Export Functions ──────────────────────────────────────────
function exportPDF() {
    alert('📄 Generating PDF report...\nIn production: Using jsPDF + html2canvas libraries\nWould include: Charts, KPIs, Insights, Recommendations');
    console.log('Export to PDF initiated');
}

function exportCSV() {
    const csvData = 'Month,Revenue,Profit %\nJanuary,₹3,40,000,18.2%\nFebruary,₹4,20,000,20.5%\nMarch,₹5,85,200,24.1%\nApril,₹3,90,000,19.8%\nMay,₹4,50,000,21.0%\nJune,₹6,00,000,25.4%\nJuly,₹5,20,000,22.8%\nAugust,₹4,80,000,19.5%\nSeptember,₹4,80,000,19.2%\nOctober,₹5,10,000,22.0%\nNovember,₹4,95,000,21.5%\nDecember,₹5,50,000,23.8%';
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData));
    element.setAttribute('download', 'revenue_report.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    alert('✅ CSV file downloaded: revenue_report.csv');
}

function exportPNG() {
    alert('🖼️ Exporting chart as PNG...\nIn production: Using html2canvas library\nWould capture: Revenue & Profit Trend chart');
    console.log('Export to PNG initiated');
}

function exportWithAI() {
    alert('✨ Exporting PDF with AI Summary...\nIncluding:\n- Revenue peaked in June (₹6L)\n- Festive months +18% average uplift\n- April dip anomaly detected\n- Recommendations for Q1');
    console.log('Export with AI summary initiated');
}

// ── Filter Functions ──────────────────────────────────────────
function filterByRegion(region) {
    alert('🗺️ Filtering by Region: ' + region.toUpperCase() + '\n\nIn production: Would update all charts & KPIs');
    console.log('Filtered by region:', region);
}

function filterByCategory(category) {
    alert('📦 Filtering by Category: ' + category.toUpperCase() + '\n\nIn production: Would recalculate metrics for ' + category);
    console.log('Filtered by category:', category);
}

function filterBySegment(segment) {
    alert('💼 Filtering by Segment: ' + segment.toUpperCase() + '\n\nIn production: Would show segment-specific analysis');
    console.log('Filtered by segment:', segment);
}

function resetFilters() {
    alert('♻️ All filters reset!\n\nShowing complete dashboard data');
    console.log('Filters reset');
}

// ── Month Drill-Down ──────────────────────────────────────────
function drillDownMonth(month) {
    alert('📊 Opening detailed breakdown for ' + month + '...\n\nIn production: Modal would show:\n- Daily revenue data\n- Top 10 clients\n- Product category breakdown\n- Regional contribution');
    console.log('Drill-down for month:', month);
}

// Add click handlers to month bars for drill-down
document.querySelectorAll('.chart-bar').forEach((bar, index) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    bar.style.cursor = 'pointer';
    bar.addEventListener('click', function (e) {
        if (!e.target.closest('.tooltip-trigger')) {
            drillDownMonth(months[index]);
        }
    });
});

// ── Explain Chart ─────────────────────────────────────────────
function explainChart() {
    const explanation = `
📊 REVENUE & PROFIT TREND ANALYSIS

Why does the pattern look like this?

1. JUNE PEAK (₹6L - 95% bar height)
   → Enterprise deals typically close at Q2-end
   → Tax planning season in India creates procurement surge
   → Large clients finalize budgets before fiscal year-end

2. FESTIVE UPLIFT (Oct-Dec: ₹5-5.5L range)
   → Diwali season (Oct-Nov) drives retail & corporate gifting
   → Year-end holiday shopping and parties
   → Inventory clearance before New Year

3. APRIL ANOMALY (₹3.9L - 80% bar, then drops)
   → Post-Q4 inventory clearance (seasonal dip)
   → Businesses cut spending after year-end splurge
   → Summer slowdown in many sectors

4. PROFIT LINE (Orange curve)
   → Starts high (20%+) but declines through July
   → Dips in Feb-Mar due to festive season competition
   → Recovers in Oct-Nov when margins improve

📈 INSIGHT: Revenue peaks align with Indian fiscal/festive calendars, not just business demand.
    `;
    alert(explanation);
}

// ── Comparison Mode Toggle ────────────────────────────────────
let comparisonMode = false;
function toggleComparison() {
    comparisonMode = !comparisonMode;
    const btn = document.getElementById('comparisonBtn');

    if (comparisonMode) {
        btn.classList.remove('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        btn.classList.add('bg-primary', 'text-white');
        alert('🔄 Comparison Mode ON\n\nNow showing: This Year vs Last Year\n- Solid lines = Current Year\n- Dotted lines = Last Year\n\nIn production: Would overlay previous year data for side-by-side comparison');
    } else {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
        alert('🔄 Comparison Mode OFF\n\nShowing current year data only');
    }
    console.log('Comparison mode:', comparisonMode);
}

// ── Dashboard Customization Modal ─────────────────────────────
function openDashboardSettings() {
    const modal = document.getElementById('dashboardSettingsModal');
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
}

function closeDashboardSettings() {
    const modal = document.getElementById('dashboardSettingsModal');
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}

function saveDashboardSettings() {
    const selectedWidgets = Array.from(document.querySelectorAll('.dashboardWidget:checked')).map(cb => cb.value);
    alert('✅ Dashboard customization saved!\n\nActive widgets:\n' + selectedWidgets.join(', ') + '\n\nIn production:\n- Would persist to localStorage\n- Apply show/hide CSS classes\n- Drag-and-drop reordering available');
    console.log('Saved widgets:', selectedWidgets);
    closeDashboardSettings();
}

// Close dashboard settings modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('dashboardSettingsModal');
    if (modal && e.target === modal) {
        closeDashboardSettings();
    }
});

// ── Donut Chart Hover Effects ─────────────────────────────────
const categoryData = {
    electronics: { name: 'Electronics', value: '₹13.4L', percent: '50%', growth: '+18%' },
    furniture: { name: 'Furniture', value: '₹8.0L', percent: '30%', growth: '+12%' },
    others: { name: 'Others', value: '₹5.3L', percent: '20%', growth: '+8%' }
};

function hoverCategory(category) {
    const data = categoryData[category];

    // Update center text
    document.getElementById('centerValue').textContent = data.value;
    document.getElementById('centerLabel').textContent = data.name + ' (' + data.percent + ')';

    // Fade other segments
    document.querySelectorAll('.donut-segment').forEach(segment => {
        segment.style.strokeOpacity = '0.2';
        segment.style.strokeWidth = '2.5';
    });

    // Highlight hovered segment
    document.querySelector('.donut-' + category).style.strokeOpacity = '1';
    document.querySelector('.donut-' + category).style.strokeWidth = '3.5';
    document.querySelector('.donut-' + category).style.filter = 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))';
}

function resetCategory() {
    document.getElementById('centerValue').textContent = '100%';
    document.getElementById('centerLabel').textContent = 'Total Sales';

    // Reset all segments
    document.querySelectorAll('.donut-segment').forEach(segment => {
        segment.style.strokeOpacity = '0.8';
        segment.style.strokeWidth = '2.5';
        segment.style.filter = 'none';
    });
}

// ── Category Drill-Down Modal ─────────────────────────────────
function drillDownCategory(categoryName) {
    const modal = document.getElementById('categoryDrillDownModal');
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';

    // Update modal title
    document.getElementById('drillDownTitle').textContent = categoryName + ' Deep Dive';

    // Populate content based on chosen category
    if (categoryName === 'Electronics') {
        document.getElementById('drillDownContent').innerHTML = `
            <div class="space-y-4">
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">📱 Top Products</p>
                    <div class="space-y-2">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Smartphones</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹6.2L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Laptops</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹4.1L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Accessories</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹3.1L</span>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">📈 Monthly Breakdown</p>
                    <div class="space-y-1 text-sm">
                        <div class="flex justify-between"><span>Jan-Mar</span><span class="font-bold">₹3.2L</span></div>
                        <div class="flex justify-between"><span>Apr-Jun</span><span class="font-bold">₹4.1L</span></div>
                        <div class="flex justify-between"><span>Jul-Sep</span><span class="font-bold">₹3.5L</span></div>
                        <div class="flex justify-between"><span>Oct-Dec</span><span class="font-bold">₹2.6L</span></div>
                    </div>
                </div>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p class="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">💡 Growth Trend</p>
                    <p class="text-sm text-blue-800 dark:text-blue-200">Electronics segment shows +18% growth with strong momentum in Q2-Q3. Smartphones lead with 46% of segment revenue.</p>
                </div>
            </div>
        `;
    } else if (categoryName === 'Furniture') {
        document.getElementById('drillDownContent').innerHTML = `
            <div class="space-y-4">
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">🛋️ Top Products</p>
                    <div class="space-y-2">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Office Chairs</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹3.5L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Desks</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹2.8L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Cabinets</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹1.7L</span>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">📈 Monthly Breakdown</p>
                    <div class="space-y-1 text-sm">
                        <div class="flex justify-between"><span>Jan-Mar</span><span class="font-bold">₹1.8L</span></div>
                        <div class="flex justify-between"><span>Apr-Jun</span><span class="font-bold">₹2.2L</span></div>
                        <div class="flex justify-between"><span>Jul-Sep</span><span class="font-bold">₹2.1L</span></div>
                        <div class="flex justify-between"><span>Oct-Dec</span><span class="font-bold">₹1.9L</span></div>
                    </div>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p class="text-sm font-bold text-green-900 dark:text-green-300 mb-2">💡 Growth Trend</p>
                    <p class="text-sm text-green-800 dark:text-green-200">Furniture shows steady +12% growth. Office segment (chairs & desks) accounts for 76% of category revenue. Strong Q2 performance.</p>
                </div>
            </div>
        `;
    } else {
        document.getElementById('drillDownContent').innerHTML = `
            <div class="space-y-4">
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">📦 Top Products</p>
                    <div class="space-y-2">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Home Appliances</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹2.1L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Smart Devices</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹2.0L</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 dark:text-slate-300">Misc Items</span>
                            <span class="font-bold text-slate-900 dark:text-white">₹1.2L</span>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <p class="text-sm font-bold text-slate-900 dark:text-white mb-3">📈 Monthly Breakdown</p>
                    <div class="space-y-1 text-sm">
                        <div class="flex justify-between"><span>Jan-Mar</span><span class="font-bold">₹1.2L</span></div>
                        <div class="flex justify-between"><span>Apr-Jun</span><span class="font-bold">₹1.4L</span></div>
                        <div class="flex justify-between"><span>Jul-Sep</span><span class="font-bold">₹1.3L</span></div>
                        <div class="flex justify-between"><span>Oct-Dec</span><span class="font-bold">₹1.4L</span></div>
                    </div>
                </div>
                <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p class="text-sm font-bold text-orange-900 dark:text-orange-300 mb-2">💡 Growth Trend</p>
                    <p class="text-sm text-orange-800 dark:text-orange-200">Others category shows +8% growth. Diverse product mix with balanced quarterly revenue. Growing smart device segment.</p>
                </div>
            </div>
        `;
    }
}

function closeCategoryDrillDown() {
    const modal = document.getElementById('categoryDrillDownModal');
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}

// Close drill-down modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('categoryDrillDownModal');
    if (modal && e.target === modal) {
        closeCategoryDrillDown();
    }
});

// ── Sidebar Collapse ──────────────────────────────────────────
const SIDEBAR_AUTO_COLLAPSE_BREAKPOINT = 1024;

function updateSidebarToggleButton() {
    const toggleBtn = document.getElementById('sidebarRailToggle');
    const toggleIcon = document.getElementById('sidebarRailToggleIcon');
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    if (!toggleBtn || !toggleIcon) return;

    toggleIcon.textContent = isCollapsed ? 'chevron_right' : 'chevron_left';
    toggleBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
}

function syncSidebarForScreenSize() {
    if (window.innerWidth < SIDEBAR_AUTO_COLLAPSE_BREAKPOINT) {
        document.body.classList.add('sidebar-collapsed');
    } else {
        document.body.classList.remove('sidebar-collapsed');
    }
    updateSidebarToggleButton();
}

function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    updateSidebarToggleButton();
}

// Dark mode handling has been moved to js/theme-toggle.js.  Use the universal
// theme-toggle-btn class and the shared script for toggling and persistence.

// ── Active Navigation Link ────────────────────────────────────
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    let activePage = 'dashboard'; // default for dashboard

    if (currentPage.includes('dashboard-final.html')) {
        activePage = 'dashboard';
    } else if (currentPage.includes('projects_tab.html')) {
        activePage = 'projects';
    } else if (currentPage.includes('Data-conversion')) {
        activePage = 'analytics';
    }

    navLinks.forEach(link => {
        link.classList.remove('active', 'bg-slate-100', 'dark:bg-slate-800', 'text-primary', 'font-semibold');
        if (link.getAttribute('data-page') === activePage) {
            link.classList.add('active', 'bg-slate-100', 'dark:bg-slate-800', 'text-primary', 'font-semibold');
        }
    });
}

// ── Initialisation ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    initializeDarkMode();
    setActiveNavLink();
});

// Also run synchronously for cases where the script loads after DOMContentLoaded
initializeDarkMode();
setActiveNavLink();
syncSidebarForScreenSize();
window.addEventListener('resize', syncSidebarForScreenSize);
