/* Calculando o IMC*/
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura*altura);

    var cpfValido = validaCPF(true);
    var nomeValido = validaNome(true);
    var pesoValido = validaPeso(true);
    var alturaValida = validaAltura(true);
    

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.style.backgroundColor = "lightcoral";
        paciente.style.fontColor = "red";
    }

    if (alturaValida && pesoValido) {
        tdImc.textContent = calculaImc(peso,altura); 
    }

}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura); 
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000 && !peso == ""){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 1.0 && altura < 3.0 && !altura == ""){
        return true;
    } else{
        return false;
    }
}

function validaNome(nome){
    if(!nome == ""){
        return true;
    } else{
        return false;
    }
}

function validaCPF(cpf){
    if(!cpf == ""){
        return true;
    } else{
        return false;
    }
}






