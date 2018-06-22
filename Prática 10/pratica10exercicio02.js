function detalhes (tr){
    var info = { "line1": "Dicliplina: Web <br/> Aluno: Ana <br/> P1: 29 <br/> P2: 17 <br/> Total: 46",
                 "line2": "Dicliplina: Web <br/> Aluno: Eva <br/> P1: 27 <br/> P2: 17 <br/> Total: 44",
                 "line3": "Dicliplina: Web <br/> Aluno: Gil <br/> P1: 28 <br/> P2: 15 <br/> Total: 43",
                 "line4": "Dicliplina: Web <br/> Aluno: Ise <br/> P1: 25 <br/> P2: 15 <br/> Total: 40",
                 "line5": "Dicliplina: Web <br/> Aluno: Ive <br/> P1: 26 <br/> P2: 20 <br/> Total: 46",
                 "line6": "Média Web: 43,8",
                 "line7": "Dicliplina: Lógica de Programação <br/> Aluno: Ana <br/> P1: 29 <br/> P2: 17 <br/> Total: 46 ",
                 "line8": "Dicliplina: Lógica de Programação <br/> Aluno: Eva <br/> P1: 27 <br/> Total: 44 ",
                 "line9": "Dicliplina: Lógica de Programação <br/> Aluno: Gil <br/> P1: 28 <br/> P2: 15 <br/> Total: 43 ",
                 "line10": "Dicliplina: Lógica de Programação <br/> Aluno: Ise <br/> P1: 25 <br/> Total: 40 ",
                 "line11": "Dicliplina: Lógica de Programação <br/> Aluno: Ive <br/> P1: 26 <br/> P2: 20 <br/> Total: 46 ",
                 "line12": "Média Lógica de Programação: 43,8"}
        texto.innerHTML = info[tr];
    }
    function apagar (){
        texto.innerHTML = "";
    }