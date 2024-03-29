let nome = document.getElementById('name')
let emailAddress = document.getElementById('email-address')
let phone = document.getElementById('phone')
let submitButton = document.getElementById('submit-button')
let form = document.getElementById('form-control')

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    validateForm()
})

function openMenu() {
    const links = document.querySelector('.links')
    const burger = document.querySelector('.burger')

    links.classList.toggle('active')
    burger.classList.toggle('open')
}

function validateForm() {
    let nomeValue = nome.value
    let emailAddressValue = emailAddress.value
    let phoneValue = phone.value

    let phoneF = phoneValue.replace((' ', '()', '-'), '')

    if (nomeValue === '') {
        setErrorFor(nome, "Can't be empty")
    } else {
        setSuccessFor(nome)
    }

    if (emailAddressValue === '') {
        setErrorFor(emailAddress, "Can't be empty")
    } else if (!isEmail(emailAddressValue)) {
        setErrorFor(emailAddress,  'Invalid email address')
    } else {
        setSuccessFor(emailAddress)
    }

    if (phoneValue === '') {
        setErrorFor(phone, "Can't be empty")
    } else if (phoneF.length < 16){
        setErrorFor(phone, "Invalid number")

    } else {
        setSuccessFor(phone)
    }
}

phone.addEventListener('input', () => {
    let lpmNumber = phone.value.replace(/\D/g, '').substring(0, 11);

    let numberArray = lpmNumber.split('')

    let numberF = ''

    if (numberArray.length > 0) {
        numberF += `( ${numberArray.slice(0,2).join('')} )`
    }

    if (numberArray.length > 2) {
        numberF += ` ${numberArray.slice(2, 7).join('')}`
    }
    if (numberArray.length > 7) {
        numberF += `-${numberArray.slice(7, 11).join('')}`
    }
    phone.value = numberF
})

function setSuccessFor(input) {
    let formControl = input.parentElement;

    formControl.className = 'form-input success'
}

function setErrorFor(input, mensagem) {
    let formControl = input.parentElement;
    let span = formControl.querySelector('span')

    formControl.className = 'form-input error'
    span.innerHTML = mensagem
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}