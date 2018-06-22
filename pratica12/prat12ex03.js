function mascaraData (objeto, evento) {
if (evento.keyCode == 8 || evento.keyCode == 46) {
    return true;
}
if (evento.keyCode < 48 || evento.keyCode > 57) {
    alert ("Informe apenas números!");
    return false;
}
if (objeto.value.length == 10) {
    return false;
    }
    if ((objeto.value.length == 2) || (objeto.value.length == 5)) {
    objeto.value = objeto.value + '/';
    }
    return true;
    }
function verificarFormulario() {
    var mensagemErro = "";
        
    if (document.getElementById ("login").value == "") {
    mensagemErro = "Informe o login.";
}
    if (document.getElementById ("email").value == "") {
    mensagemErro = "\nInforme o e-mail.";
}
    if (document.getElementById ("data").value == "") {
    mensagemErro += "\nInforme a data de nascimento.";
}
    if (document.getElementById ("senha1").value == "") {
    mensagemErro += "\nEscolha uma senha.";
}
    if (document.getElementById ("senha2").value == "") {
    mensagemErro += "\nConfirme sua senha.";
}
    if (document.getElementById ("senha2").value != document.getElementById("senha1").value) {
    mensagemErro += "\nSenhas diferentes.";
}
    if (document.getElementById ("sexo").value == "") {
    mensagemErro += "\nInforme o sexo.";
}
    if (document.getElementById ("cidade").value == "") {
    mensagemErro += "\nInforme sua cidade.";
}
    if (document.getElementById ("homepage").value == "") {
    mensagemErro += "\nInforme a home-page.";
}
    if ((document.getElementById ("musica").value == "") && (document.getElementById ("esporte").value == "") && (document.getElementById ("moda").value == "")) {
    mensagemErro += "\nInforme seu(s) interesses(s).";
}
if (mensagemErro == "") {
    return true;
    } else {
    alert (mensagemErro);
    return false;
    }
} 
function limpar() {
    document.getElementById ("login").value == "";
    document.getElementById ("email").value == "";
    document.getElementById ("data").value == "";
    document.getElementById ("senha1").value == "";
    document.getElementById ("senha2").value == "";
    document.getElementById ("sexo").value == "";
    document.getElementById ("cidade").value == "";
    document.getElementById ("homepage").value == "";
    document.getElementById ("musica").value == "";
    document.getElementById ("esporte").value == "";
    document.getElementById ("moda").value == "";
}  