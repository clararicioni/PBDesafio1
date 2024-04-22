function validarEmailSubscribe() {
    var emailinscricao = document.getElementById("inputEmail").value
    localStorage.setItem("emailinscricao", emailinscricao)
    var regex = /^([a-z\d\-]+)@([a-z\d-]+)\.([a-z]{2,8})$/
    if (emailinscricao !== "" && regex.test(emailinscricao)) {
        document.getElementById("txtResultadoSubscribe").innerHTML = "Email enviado com sucesso."
        var emailinscricaoGet = localStorage.getItem("emailinscricao")
        console.log("Email do usuário:", emailinscricaoGet)
        document.getElementById("txtResultadoSubscribe").style.color = "green"
    } else {
        document.getElementById("txtResultadoSubscribe").innerHTML = "Email inválido."
        document.getElementById("txtResultadoSubscribe").style.color = "#990f0f"
        document.getElementById("inputEmail").value = ""
        document.getElementById("inputEmail").focus()
    }
}
function validarEmail() {
    var email = document.getElementById("inputEA").value
    localStorage.setItem("email", email)
    var regex = /^([a-z\d\-]+)@([a-z\d-]+)\.([a-z]{2,8})$/
    if (email !== "" && regex.test(email)) {
        document.getElementById("txtResultadoEmail").innerHTML = "Email enviado com sucesso."
        var emailGet = localStorage.getItem("email")
        console.log("Email do usuário:", emailGet)
        document.getElementById("txtResultadoEmail").style.color = "green"
    } else {
        document.getElementById("txtResultadoEmail").innerHTML = "Email inválido."
        document.getElementById("txtResultadoEmail").style.color = "#990f0f"
        document.getElementById("inputEA").value = ""
        document.getElementById("inputEA").focus()
    }
}
function validarNome(){
    var firstName = document.getElementById("inputFN").value
    localStorage.setItem("firstName", firstName)
    var regexFN = /^[^\d]*$/
    if (regexFN.test(firstName)){
        document.getElementById("txtResultadoNome").innerHTML = ""
        var firstNameGet = localStorage.getItem("firstName")
        console.log("First Name:", firstNameGet)
    }else{
        document.getElementById("txtResultadoNome").innerHTML = "Os campos apagados estão inválidos."
        document.getElementById("txtResultadoNome").style.color = "#990f0f"
        document.getElementById("inputFN").value = ""
    }
    var lastName = document.getElementById("inputLN").value
    localStorage.setItem("lastName", lastName)
    if (regexFN.test(lastName)){
        document.getElementById("txtResultadoNome").innerHTML = ""
        var lastNameGet = localStorage.getItem("lastName")
        console.log("Last Name:", lastNameGet)
    }else{
        document.getElementById("txtResultadoNome").innerHTML = "Os campos apagados estão inválidos."
        document.getElementById("txtResultadoNome").style.color = "#990f0f"
        document.getElementById("inputLN").value = ""
    }
}
function enviarDados() {
    var message = document.getElementById("inputMessage").value
    localStorage.setItem("message", message)
    if (message==""){
        alert("Insira uma mensagem!!")
    }else{
        var messageGet = localStorage.getItem("message")
        console.log("Message:", messageGet)
    }   
}