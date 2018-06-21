function verificar() {
    var numero = document.getElementById("numero").value;
    
    for (i=0; i < numero; i++) {
        if (i != 0 && i % 2 == 0) {
            document.getElementById("resposta").innerHTML += i + " ;";
        }
    }
    document.getElementById("resposta").innerHTML += numero.value + " ;";
}