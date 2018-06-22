function sortear (){
var i = 0, vet1 = new Array (5), vet2 = new Array (5), acertos = 0;
    vet1[0] = parseInt(document.getElementById("num1").value);
    vet1[1] = parseInt(document.getElementById("num2").value);
    vet1[2] = parseInt(document.getElementById("num3").value);
    vet1[3] = parseInt(document.getElementById("num4").value);
    vet1[4] = parseInt(document.getElementById("num5").value);

    for (i = 0; i < 5; i++){
        document.getElementById("numeros").innerHTML += vet1[i] + "   ";
    }

    for (i = 0; i < 5; i++){
        vet2[i] = document.getElementById ("resultado");
        vet2[i].innerHTML += Math.floor ((Math.random () * 100) + 1) + "   ";
    }

    for (i = 0; i < 5; i++){
        if (vet1[i] == vet2[i]){
            acertos++;
        }
    }

    if (acertos < 3){
        document.getElementById("premio").innerHTML = "R$0,00"
    }
    else if (acertos == 3){
        document.getElementById("premio").innerHTML = "R$500.000"
    }
    else if (acertos == 4){
        document.getElementById("premio").innerHTML = "R$750.000"
    }
    else if (acertos == 5){
        document.getElementById("premio").innerHTML = "R$1.000.000"
    }
}