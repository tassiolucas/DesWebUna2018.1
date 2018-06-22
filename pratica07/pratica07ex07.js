var mat = new Array ();
var obj = new Object ();
var l, c; 

for (l =0; l <= 2; l++){
    for (c = 0; c <= 3; c++){
        obj["marca"] = prompt ("Digite a marca do veículo");
        obj["ano"] = prompt ("Digite o ano do veículo");
        obj["preco"] = prompt ("Digite o preço do veículo")
        mat[l][c] = "Marca: "+obj.marca+"<br/> Ano: "+obj.ano+"<br/> Preço: "+obj.preco+ "<br/><br/>";
    }
}

for(l = 0; l <= 2 ; l++) {
    for (c = 0; c <= 3; c++){
        document.write (mat[l][c])
    }
}