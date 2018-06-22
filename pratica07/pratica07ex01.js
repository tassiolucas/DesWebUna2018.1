function limparTela () {
    var operandos = document.getElementById ("operandos");
    var resultado = document.getElementById ("resultado");
    operandos.style.display = "none";
    resultado.style.display = "none";
}
    
    function operandosCirculo () {
    limparTela ();
    var operandos = document.getElementById ("operandos");
    operandos.innerHTML = "Informe o raio: <input type='number' id='raio'>" +
    "<br/>" +
    
    "<button onclick='areaCirculo ()'>OK</button>";
    
    operandos.style.display = "block";
}
    function areaCirculo () {
    var raioSTR = document.getElementById ("raio").value;
    var raio = parseFloat (raioSTR);
    var area = 3.14 * Math.pow (raio, 2);
    var resultado = document.getElementById ("resultado");
    resultado.innerHTML = area;
    resultado.style.display = "block";
}
    
    function operandosRetangulo () {
    limparTela ();
    var operandos = document.getElementById ("operandos");
    operandos.innerHTML = "Informe a base: <input type='number' id='base'>" +
    "<br/>" +
    
    "Informe a altura: <input type='number' id='altura'>" +
    "<br/>" +
    "<button onclick='areaRetangulo ()'>OK</button>";
    operandos.style.display = "block";
    }
    function areaRetangulo () {
    var baseSTR = document.getElementById ("base").value;
    var alturaSTR = document.getElementById ("altura").value;
    var base = parseFloat (baseSTR);
    var altura = parseFloat (alturaSTR);
    var area = base * altura;
    var resultado = document.getElementById ("resultado");
    resultado.innerHTML = area;
    resultado.style.display = "block";
    }

    function operandosTriangulo () {
        limparTela ();
        var operandos = document.getElementById ("operandos");
        operandos.innerHTML = "Informe a base: <input type='number' id='base'>" +
        "<br/>" +
        
        "Informe a altura: <input type='number' id='altura'>" +
        "<br/>" +
        "<button onclick='areaTriangulo ()'>OK</button>";
        operandos.style.display = "block";
        }
        function areaTriangulo () {
        var baseSTR = document.getElementById ("base").value;
        var alturaSTR = document.getElementById ("altura").value;
        var base = parseFloat (baseSTR);
        var altura = parseFloat (alturaSTR);
        var area = (base * altura) / 2;
        var resultado = document.getElementById ("resultado");
        resultado.innerHTML = area;
        resultado.style.display = "block";
        }

    function operandosTrapezio () {
        limparTela ();
        var operandos = document.getElementById ("operandos");
        operandos.innerHTML = "Informe a base maior: <input type='number' id='bmaior'>" +
        "<br/>" +

        "Informe a base menor: <input type='number' id='bmenor'>" +
        "<br/>" +
            
        "Informe a altura: <input type='number' id='altura'>" +
        "<br/>" +
        "<button onclick='areaTrapezio ()'>OK</button>";
        operandos.style.display = "block";
        }
        function areaTrapezio () {
        var bmaiorSTR = document.getElementById ("bmaior").value;
        var bmenorSTR = document.getElementById ("bmenor").value;
        var alturaSTR = document.getElementById ("altura").value;
        var bmaior = parseFloat (bmaiorSTR);
        var bmenor = parseFloat (bmenorSTR);
        var altura = parseFloat (alturaSTR);
        var area = ((bmaior + bmenor) * altura) / 2 ;
        var resultado = document.getElementById ("resultado");
        resultado.innerHTML = area;
        resultado.style.display = "block";
        }