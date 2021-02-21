const okMsg = document.querySelector('.ok-msg');
let okText = document.createElement('span');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const emailText = document.querySelector('#email-text')

function sendEmail() {
    const fromName = document.querySelector('#fromName').value;
    const message = document.querySelector('#message').value;
    const email = document.querySelector('#email').value;

    let tempParams = {
        from_name: fromName,
        message: message,
        user_email: email,
    };

    if ((fromName && message) == '') {
        okText.classList.add('unvalid')
        okText.innerHTML = 'Preencha os campos para enviar a mensagem!'
        okMsg.append(okText);
        return
    }

    if (email.match(emailPattern)) {
        emailText.innerHTML = ''
    } else {
        emailText.classList.add('unvalid')
        emailText.innerHTML = 'E-mail inválido!'
        return
    }

    emailjs.send('service_5i68b1f', 'template_4kcjb5e', tempParams).then(function(res) {
        okText.classList.remove('unvalid')
        okText.classList.add('valid')
        okText.innerHTML = 'Obrigado pela mensagem!'
        okMsg.append(okText);
    })
}

const sendEmailBTN = document.querySelector('#send-email');

sendEmailBTN.addEventListener('click', sendEmail);

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
const contactBtn = document.querySelector('.email-btn');

setupBtn.addEventListener('click', function() {
    const setup = document.querySelector('.setup-container');
    setup.scrollIntoView();
})

projectBtn.addEventListener('click', function() {
    const project = document.querySelector('#meu-trabalho');
    project.scrollIntoView();
})

contactBtn.addEventListener('click', function() {
    const project = document.querySelector('.contact-container');
    project.scrollIntoView();
})

pedroBtn.addEventListener('click', function() {
    window.scrollTo(0,0);
})


