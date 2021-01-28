const nav = document.querySelector('nav');

window.onscroll = function() {
    let top = window.scrollY;
    if (top >= 1) {
        nav.classList.add('bg-dark');
    } else {
        nav.classList.remove('bg-dark');
    }
}


const pedroBtn = document.querySelector('.navbar-brand');
const setupBtn = document.querySelector('#setup-btn');
const projectBtn = document.querySelector('#projects-btn');
const contactBtn = document.querySelector('#contact-btn');

setupBtn.addEventListener('click', function() {
    const setup = document.querySelector('.setup-container');
    setup.scrollIntoView();
})

projectBtn.addEventListener('click', function() {
    const project = document.querySelector('#meu-trabalho');
    project.scrollIntoView();
})

pedroBtn.addEventListener('click', function() {
    window.scrollTo(0,0);
})


