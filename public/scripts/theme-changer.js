document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        updateThemeText(isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Check local storage for the user's theme preference
    const storedTheme = localStorage.getItem('dark-mode');
    if (storedTheme !== null) {
        body.classList.toggle('dark-mode', JSON.parse(storedTheme));
        updateThemeText(JSON.parse(storedTheme));
    }

    function updateThemeText(isDarkMode) {
        const themeText = isDarkMode ? 'Light Mode' : 'Dark Mode';
        themeToggle.querySelector('.theme-toggle__text').textContent = themeText;
    }
});
