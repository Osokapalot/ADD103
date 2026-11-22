// Shared Light/Dark DOM theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('batteryTheme');
if (savedTheme === 'light') document.body.classList.add('light-theme');
if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', document.body.classList.contains('light-theme') ? 'true' : 'false');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const lightMode = document.body.classList.contains('light-theme');
    themeToggle.setAttribute('aria-pressed', String(lightMode));
    localStorage.setItem('batteryTheme', lightMode ? 'light' : 'dark');
  });
}
