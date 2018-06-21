function calcular() {
    var valorUm = document.getElementById("primeiroValor").value;
    var valorDois = document.getElementById("segundoValor").value;
    var valorTres = document.getElementById("terceiroValor").value;

    var codigoSelecao = document.getElementById("seletor").value;
    
    switch(codigoSelecao) {
        case "1":
            document.getElementById("resposta").innerHTML += (valorUm * valorDois);
        break;

        case "2":
            document.getElementById("resposta").innerHTML += ((valorUm * valorDois) / 2);
        break;

        case "3":
            document.getElementById("resposta").innerHTML += (3.14 * (valorUm * valorUm));
        break;

        case "4":
            document.getElementById("resposta").innerHTML += (((valorUm + valorDois) * valorTres) / 2);
        
        break;

        default:
        break;
    }
}

function selecao() {
    var selecao = document.getElementById("seletor").value;

    if (selecao == 1 || selecao == 2) {
        var display = document.getElementById("segundoCampo").style.display;
        if(display == "none") {
            document.getElementById("segundoCampo").style.display = 'none';
            document.getElementById("terceiroCampo").style.display = 'none';
        } else {
            document.getElementById("segundoCampo").style.display = 'block';
            document.getElementById("terceiroCampo").style.display = 'none';
        }
    } else if (selecao == 3) {
        var display = document.getElementById("segundoCampo").style.display;
        if(display == "none") {
            document.getElementById("segundoCampo").style.display = 'block';
            document.getElementById("terceiroCampo").style.display = 'none';
        } else {
            document.getElementById("segundoCampo").style.display = 'none';
            document.getElementById("terceiroCampo").style.display = 'none';
        }
    } else if (selecao == 4) {
        var display = document.getElementById("terceiroCampo").style.display;
        if (display == 'none') {
            document.getElementById("segundoCampo").style.display = 'block';
            document.getElementById("terceiroCampo").style.display = 'block';
        } else {
            document.getElementById("segundoCampo").style.display = 'none';
            document.getElementById("terceiroCampo").style.display = 'none';
        }
    }
}