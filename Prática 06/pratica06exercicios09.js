function conversao (){
    var temp = parseInt(document.getElementById("num").value);
    var celcius = (temp - 32) / 1.8;
    
    document.getElementById("resp").innerHTML = "Valor em Celcius: " + celcius +"°"; 
}