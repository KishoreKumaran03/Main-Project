// Universal theme toggle script

function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
    updateToggleIcons();
}

function initializeDarkMode() {
    const setting = localStorage.getItem('darkMode');
    if (setting === 'true') {
        document.documentElement.classList.add('dark');
    } else if (setting === 'false') {
        document.documentElement.classList.remove('dark');
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
