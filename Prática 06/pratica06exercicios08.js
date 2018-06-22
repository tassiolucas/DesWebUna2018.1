function volume (){
    var raio = parseInt(document.getElementById("raio").value);
    var vol = (4 * 3,14 *raio * raio * raio) / 3;

    document.getElementById("resp").innerHTML = "4 * 3,14 * "+ raio +"³ / 3 = " + vol + "cm³";
}