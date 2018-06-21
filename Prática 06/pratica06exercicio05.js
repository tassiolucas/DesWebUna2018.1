function calcular() {
    var valInferior = document.getElementById("limiteInferior").value;
    var valSuperior = document.getElementById("limiteSuperior").value;

    valInferior = parseInt(valInferior);
    valSuperior = parseInt(valSuperior)

    var totalSoma = 0;
    
    for (var i = valInferior; i <= valSuperior; i++) {
        totalSoma = totalSoma + i;
    }

    document.getElementById("resposta").innerHTML += totalSoma;
}