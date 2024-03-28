/* Arquivo JS + alterar CSS */

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let darkbutton = document.querySelector('#darkbutton')

let lightbutton = document.querySelector('#lightbutton')

let pinkbutton = document.querySelector('#pinkbutton')

let yellowbutton = document.querySelector('#yellowbutton')

let bluebutton = document.querySelector('#bluebutton')

darkbutton.addEventListener('click', modoDark)
lightbutton.addEventListener('click', modoLight)
pinkbutton.addEventListener('click', modoPink)
yellowbutton.addEventListener('click', modoYellow)
bluebutton.addEventListener('click', modoBlue)


function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.add("light");
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
}

function modoPink(){
    event.preventDefault();
    console.log('modo pink');
    tela.classList.add("pink");
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
}

function modoYellow(){
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.add("yellow");
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
}

function modoBlue(){
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.add("blue");
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
}
