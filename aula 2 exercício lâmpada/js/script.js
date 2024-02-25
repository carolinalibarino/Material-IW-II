const ligar = document.getElementById('ligar')

const desligar = document.getElementById('desligar')

const restaurar = document.getElementById('restaurar')

const lampada = document.getElementById('lamp')

const unico = document.getElementById('unico')

const texto = document.getElementById ('texto')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna true ou false

}

//teste botão unico

function unicolig(){
    return lampada.src.indexOf('ligada') > -1
}

function unicodeslig(){
    return lampada.src.indexOf('quebrada') > -1
}
//

function lampligada(){
    if(!estaquebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = "A lâmpada está ligada"
    }

}

function lampdesligada(){
    if(!estaquebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = "A lâmpada está desligada"
    }

}

function lampquebrada(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = "A lâmpada está quebrada"
}

function lamprestaurar(){
    if(estaquebrada()){
        lampada.src = "img/desligada.jpg"
    }

}

//teste botão unico

function botaounicolig(){
    if(!unicolig()){
        lampada.src = "img/ligada.jpg"
    }

}

function botaounicolig(){
    lampada.src = "img/ligada.jpg"
}

function botaounicodeslig(){
    lampada.src = "img/desligada.jpg"
}

function botaounicodeslig(){
    if(!unicodeslig()){
        lampada.src = "img/desligada.jpg"
    }
}


ligar.addEventListener('click',lampligada)
desligar.addEventListener('click',lampdesligada)
restaurar.addEventListener('click',lamprestaurar)

lampada.addEventListener('mouseover',lampligada)
lampada.addEventListener('mouseleave',lampdesligada)
lampada.addEventListener('dblclick',lampquebrada)
   

//teste botão unico

unico.addEventListener('click',botaounicolig)
unico.addEventListener('dblclick', botaounicodeslig)