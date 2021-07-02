var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

// event.target: referência ao objeto que enviou o evento

tabela.addEventListener("dblclick", function(event){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
});