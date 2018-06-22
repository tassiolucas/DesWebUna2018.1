function detalhes (tr){
    var info = { "line1": "Dicliplina: Web <br/> Aluno: José da Silva <br/> P1: 30 <br/> P2: 10 <br/> Total: 40",
                 "line2": "Dicliplina: Web <br/> Aluno: Maria da Silva <br/> P1: 25 <br/> P2: 7 <br/> Total: 32",
                 "line3": "Dicliplina: Web <br/> Aluno: Ronildo Graves <br/> P1: 12 <br/> P2: 3 <br/> Total: 15",
                 "line4": "Dicliplina: Web <br/> Aluno: Joselita Santos <br/> P1: 15 <br/> P2: 8 <br/> Total: 23",
                 "line5": "Média Web: 27,5",
                 "line6": "Dicliplina: Lógica de Programação <br/> Aluno: José da Silva <br/> P1: 20 <br/> P2: 9 <br/> Total: 29 ",
                 "line7": "Dicliplina: Lógica de Programação <br/> Aluno: Maria da Silva <br/> P1: 32 <br/> Total: 32 ",
                 "line8": "Dicliplina: Lógica de Programação <br/> Aluno: Ronildo Graves <br/> P1: 18 <br/> P2: 5 <br/> Total: 23 ",
                 "line9": "Dicliplina: Lógica de Programação <br/> Aluno: Ronildo Campos <br/> P1: 35 <br/> Total: 35 ",
                 "line10": "Dicliplina: Lógica de Programação <br/> Aluno: Janaína Murtosa <br/> P1: 30 <br/> P2: 10 <br/> Total: 40 ",
                 "line11": "Média Lógica de Programação: 31,8"}
        texto.innerHTML = info[tr];
    }
function apagar (){
    texto.innerHTML = "";
}