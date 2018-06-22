function conversao (){
    var num = parseInt(document.getElementById("input").value);

    document.getElementById("resp").innerHTML = 
    "Número " + num + " em decimal: " + num.toString (10) + "<br/><br/>" + 
    "Número " + num + " em binário: " + num.toString (2) + "<br/><br/>" +
    "Número " + num + " em octal: " + num.toString (8) + "<br/><br/>" +
    "Número " + num + " em hexadecimal: " + num.toString (16);   
}