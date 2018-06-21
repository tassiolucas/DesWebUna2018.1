function verificar() {
    var numero = document.getElementById("numero").value;

    if (numero % 2 == 0) {
        document.getElementById("resposta").innerHTML += "O número informado é par!";
    } else {
        document.getElementById("resposta").innerHTML += "O número informado é impar!";
    }
}