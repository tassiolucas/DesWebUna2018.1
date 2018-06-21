function verificar() {
    var primeiroNumero = document.getElementById("primeiroNumero").value; segundoNumero = document.getElementById("segundoNumero").value;
    
    document.getElementById("resposta").innerHTML += " " + getBaseLog(primeiroNumero, segundoNumero);
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}