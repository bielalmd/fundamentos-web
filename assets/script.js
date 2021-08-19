
// Case Sensitive = reconhece letras maiusculas e minusculas
// por tag: getElementByTagName()
// por Id: getElementById()
// por nome: getElementByName()
// por Clase: getElementsByClassName()
// por Seletor: querySelector()


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length <= 2) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = 'red'
        

    } else {

        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
        
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
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk){
        alert ('Formulario enviado com sucesso!')
    }else{
        alert ('Formulario incorreto!')
    }
}

function mapaZoom() {

    mapa.style.width = '700px'
    mapa.style.height = '500px'

}

function mapaNormal() {

    mapa.style.width = '350px'
    mapa.style.height = '250px'

}



  

