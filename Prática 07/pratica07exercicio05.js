var i, vet = new Array (3);
var obj = new Object ();

for (i = 0; i < vet.length; i++) {
    obj["nome"] = prompt("Digite seu nome.");
    obj["cnpj"] = prompt("Digite seu CNPJ.");
    obj["telefone"] = prompt("Digite seu telefone");
    vet[i] = "Nome: "+obj.nome+"<br/> CNPJ: "+obj.cnpj+"<br/> Telefone: "+obj.telefone+ "<br/><br/>";
}

for (i = 0 ; i < vet.length; i++) {
    document.getElementById ("dados").innerHTML += vet[i];
} 



