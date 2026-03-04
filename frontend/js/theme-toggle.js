// Universal theme toggle script

function toggleDarkMode() {
    const html = document.documentElement;
    const enableDark = !html.classList.contains('dark');
    html.classList.toggle('dark', enableDark);
    html.classList.toggle('light', !enableDark);
    localStorage.setItem('darkMode', String(enableDark));
    updateToggleIcons();
}

function initializeDarkMode() {
    const setting = localStorage.getItem('darkMode');
    if (setting === null) {
        // First visit: persist light mode as the default.
        localStorage.setItem('darkMode', 'false');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    } else if (setting === 'true') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else if (setting === 'false') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
    updateToggleIcons();
}

function updateToggleIcons() {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        const iconDark = btn.querySelector('.icon-dark');
        const iconLight = btn.querySelector('.icon-light');
        if (iconDark && iconLight) {
            if (document.documentElement.classList.contains('dark')) {
                iconDark.classList.remove('hidden');
                iconLight.classList.add('hidden');
            } else {
                iconDark.classList.add('hidden');
                iconLight.classList.remove('hidden');
            }
        }
    });
}

// attach handlers and initialize theme; handle case when script is loaded after DOMContentLoaded
function _initializeThemeToggle() {
    initializeDarkMode();
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', toggleDarkMode);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _initializeThemeToggle);
} else {
    // DOM already ready
    _initializeThemeToggle();
}
