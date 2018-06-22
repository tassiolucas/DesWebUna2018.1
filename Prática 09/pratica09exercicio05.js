function detalhes (site) {
    var info = {"google": "A melhor máquina de busca da web!",
                "yahoo": "Muito boa também!",
                "about": "Um bom lugar para se visitar!"}
    mensagem.innerHTML = info[site];
}
function iniciar () {
    menu ('sites', 'visible');
    menu ('mensagem', 'visible');
    mensagem.innerHTML = "";
}
function menu (elemento, visibilidade){
    document.getElementById(elemento).style.visibility = visibilidade;
}