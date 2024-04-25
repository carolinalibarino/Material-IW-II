
function transformar(){
    var valor_originalalt = document.getElementById ("altura").value;
    var valor_novoalt = valor_originalalt.replace(",",".");
    valor_novoalt = parseFloat(valor_novoalt);

    var valor_originalpeso = document.getElementById("peso").value;
    var valor_novopeso = valor_originalpeso.replace(",", ".");
    valor_novopeso = parseFloat(valor_novopeso);

    var imc = valor_novopeso/(valor_novoalt*valor_novoalt)

    document.getElementById("resultado").innerHTML = imc;
    //document.getElementById("diag").innerHTML = diag;

}


function mascimc() {
    if (imc < 20.0) {
        diag.innerHTML = 'Abaixo do normal'
    }
    else if (imc < 24.9 && imc > 20.0) {
        diag.innerHTML = 'Normal'
    }
    else if (imc > 25.0 && imc < 29.9) {
        diag.innerHTML = 'Obesidade Leve'
    }
    else if (imc < 39.9 && imc > 30.0) {
        diag.innerHTML = 'Obesidade  Moderada'
    }
    else (imc > 39.9); {
        diag.innerHTML = 'Obesidade Mórbida'
    }
}


function femimc() {
    if (imc < 19.0) {
        diag.innerHTML = 'Abaixo do normal'
    }
    else if (imc < 23.9 && imc > 19.0) {
        diag.innerHTML = 'Normal'
    }
    else if (imc > 24.0 && imc < 28.9) {
        diag.innerHTML = 'Obesidade Leve'
    }
    else if (imc < 38.9 && imc > 29.0) {
        diag.innerHTML =  'Obesidade  Moderada'
    }
    else (imc > 38.9); {
        diag.innerHTML = 'Obesidade Mórbida'
    }
}

function classificarIMC(sexo, imc) {
    if (sexo == "masculino") {
        return mascimc(imc);
    } else {
        return femimc(imc);
    }
}


function restaurar(){
    peso.value = ''
    altura.value = ''
    resultado.innerHTML = ''
    diag.innerHTML = ''
    sexo.value = ''
}
