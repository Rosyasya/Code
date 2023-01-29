const heroTitle = document.querySelector('.hero-title');
const footerButton = document.querySelector('.footer-form button');

window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 375) {
        heroTitle.innerHTML = '<span class="hero-title-green">CONSOLE</span> - for scaling native advertising campaigns, period';
    } else {
        heroTitle.innerHTML = '<span class="hero-title-green">CONSOLE</span> - the best tool for scaling native advertising campaigns, period';
    }
});

footerButton.addEventListener('click', e => {
    e.preventDefault();
});