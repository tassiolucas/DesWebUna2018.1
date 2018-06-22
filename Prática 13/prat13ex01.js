function validar(){
    var mensagemErro = "";
    
    if (document.getElementById ("nome").value == "") {
    mensagemErro += "Informe seu nome!";
    }
    if (document.getElementById ("email").value == "") {
    mensagemErro += "\nInforme seu e-mail!";
    }
    if (document.getElementById ("mensagem").value == "") {
    mensagemErro += "\nEscreva uma mensagem!";
    }
    if (mensagemErro == "") {
    return true;
    } 
    else {
    alert (mensagemErro);
    return false;
    }
}