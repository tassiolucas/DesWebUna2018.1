function detalhes (tr){
    var info = { "line1": "Nome: Ana <br/> Nota P1: 29 <br/> Nota P2: 17 <br/> Nota T1: 27 <br/> Nota Total: 73 <br/> Faltas: 0",
                 "line2": "Nome: Gisele <br/> Nota P1: 28 <br/> Nota P2: 18 <br/> Nota T1: 24 <br/> Nota Total: 70 <br/> Faltas: 3",
                 "line3": "Nome: Jane <br/> Nota P1: 26 <br/> Nota P2: 20 <br/> Nota T1: 24 <br/> Nota Total: 70 <br/> Faltas: 1",
                 "line4": "Nome: Jorge <br/> Nota P1: 25 <br/> Nota P2: 19 <br/> Nota T1: 29 <br/> Nota Total: 73 <br/> Faltas: 0",
                 "line5": "Nome: Marina <br/> Nota P1: 30 <br/> Nota P2: 16 <br/> Nota T1: 27 <br/> Nota Total: 73 <br/> Faltas: 1",
                 "line6": "Média: 71,8"}
        texto.innerHTML = info[tr];
    }
