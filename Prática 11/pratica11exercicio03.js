function mostrar (div) {
    var info = { "produtos": "<h3>Produtos</h3><br/>Moto<br/>Carro<br/>Ônibus",
                 "servicos": "<h3>Serviços</h3><br/>Aluguel<br/>Troca<br/>Venda",
                 "contato": "<h3>Contato</h3><br/>Telefone: +55 31 9 7843 5578",
                 "clientes": "<h3>Clientes</h3><br/>Ronildo Graves<br/>Janaína Murtosa<br/>Maria da Silva"}
        texto.innerHTML = info[div];
}
function apagar () {
    texto.innerHTML = "";
}