function media (){
    var num1 = parseInt(document.getElementById("num1").value);    
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);    
    var media = (num1 + num2 + num3) / 3;

    document.getElementById("resp").innerHTML = "Média: " + media; 
}