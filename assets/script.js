
// Case Sensitive = reconhece letras maiusculas e minusculas
// por tag: getElementByTagName()
// por Id: getElementById()
// por nome: getElementByName()
// por Clase: getElementsByClassName()
// por Seletor: querySelector()


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length <= 2) {
        txtNome.innerHTML = "Nome invalido"
        txt.style.color = 'red'

    } else {

        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = "red"

    } else {

        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = 'green'
    }
}

