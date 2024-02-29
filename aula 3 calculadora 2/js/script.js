var resultado = document.getElementById('resultado')

function peganome(){
    var nome = document.getElementById('nome').value
    console.log('Nome:', nome)
    resultado.innerHTML = nome
}


//teste calculadora
 
function peganum1(){
    var numero1 = document.getElementById('num1').value
    console.log('Número 1 é:', numero1)
}

 function peganum2(){
    var numero2 = document.getElementById('num2').value
     console.log('Número 2 é:', numero2)
 }


function soma(){
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)
    var somando = numero1+numero2
    console.log ('soma:', somando)
    result.innerHTML = somando
}

function sub(){
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)
    var subtraindo = numero1-numero2
    console.log ('sub:', subtraindo)
    result.innerHTML = subtraindo
    }
    
function mult(){
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)        
    var multiplicando = numero1*numero2
    console.log ('mult:', multiplicando)
    result.innerHTML = multiplicandos
}

function div(){
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)        
    var dividindo = numero1/numero2
    console.log ('mult:', dividindo)
    result.innerHTML = dividindo
}


var resultadocontas = document.getElementById('resultadodascontas')

































































// function pegasoma(){
//     var soma = num1+num2
//     console.log('A soma é:', soma)
// }

// function pegasub(){
//     var sub = num1-num2
//     console.log('A subtração é:', sub)
// }

// function pegamult(){
//     var mult = num1*num2
//     console.log('A multiplicação é:', mult)
// }

// function pegadiv(){
//     var div = num1/num2
//     console.log('A divisão é:', div)
// }

// function reasultadocontas(){
//     var nome = document.getElementById('').value
//     var resultadocontas = document.getElementById('resultadoontas')
//     console.log('Nome:', nome)
//     resultado.innerHTML = nome
// }

