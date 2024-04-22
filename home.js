function validarEmail() {
    var email = document.getElementById("inputEmail").value;
    localStorage.setItem("email", email);
    var regex = /^([a-z\d\-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;

    if (email !== "" && regex.test(email)) {
        document.getElementById("txtResultadoEmail").innerHTML = "Email enviado com sucesso.";
        var emailGet = localStorage.getItem("email");
        console.log("Email do usuário:", emailGet);
        document.getElementById("txtResultadoEmail").style.color = "green";
    } else {
        document.getElementById("txtResultadoEmail").innerHTML = "Email inválido.";
        document.getElementById("txtResultadoEmail").style.color = "#990f0f";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputEmail").focus()
    }
}
