var obj = new Object ();
    obj.nome = prompt("Informe seu nome");
    obj.telefone = prompt("Informe seu telefone");
    obj.matricula = prompt("Informe sua matrícula");
    obj.curso = new Object();
    obj.curso.nome = prompt("Digite o nome do seu curso");
    obj.curso.campus = prompt("Digite o nome do seu campus");
    obj.curso.turno = prompt("Informe seu turno");
    
document.getElementById("obj").innerHTML += "Nome: " + obj.nome + "<br/>";
document.getElementById("obj").innerHTML += "Telefone: " + obj.telefone + "<br/>";
document.getElementById("obj").innerHTML += "Matrícula: "+ obj.matricula + "<br/><br/>"; 
document.getElementById("obj").innerHTML += "Curso: " + obj.curso.nome + "<br/>";
document.getElementById("obj").innerHTML += "Campus: " + obj.curso.campus + "<br/>";
document.getElementById("obj").innerHTML += "Turno: " + obj.curso.turno + "<br/>"; 

/* var obj = new Object ();
    obj.nome = prompt("Informe seu nome");
    obj["telefone"] = prompt("Informe seu telefone");
    obj["matricula"] = prompt("Informe sua matrícula");

    obj.curso = prompt("Digite o nome do seu curso");
    obj["campus"] = prompt("Digite o nome do seu campus");
    obj["turno"] = prompt("Informe seu turno");
    
document.write("Nome: " + obj["nome"] + "<br/>");
document.write("Telefone: " + obj.telefone + "<br/>");
document.write("Matrícula: "+ obj.matricula + "<br/><br/>"); 
document.write("Curso: " + obj["curso"] + "<br/>");
document.write("Campus: " + obj.campus + "<br/>");
document.write("Turno: " + obj.turno + "<br/>"); */