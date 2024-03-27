let nome = document.getElementById('name')
let emailAddress = document.getElementById('email-address')
let phone = document.getElementById('phone')
let submitButton = document.getElementById('submit-button')
let form = document.getElementById('form-control')

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    validateForm()
})

// phone.addEventListener('input', () => {
//     let phoneValue = phone.value;

//     limparNumero = phoneValue.replace(/\D/g, "").substring(0, 11);
//       //Remove
//     phoneValue = limparNumero
// })

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

    if (nomeValue === '') {
        setErrorFor(nome, "Can't be empty")
    } else {
        setSuccessFor(nome)
    }

    if (emailAddressValue === '') {
        setErrorFor(emailAddress, "Can't be empty")
    } else {
        setSuccessFor(emailAddress)
    }

    if (phoneValue === '') {
        setErrorFor(phone, "Can't be empty")
    } else {
        setSuccessFor(phone)
    }
}

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