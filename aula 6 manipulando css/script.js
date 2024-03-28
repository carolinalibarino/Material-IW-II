/* Arquivo JS + alterar CSS */

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let darkbutton = document.querySelector('#darkbutton')

let lightbutton = document.querySelector('#lightbutton')

let pinkbutton = document.querySelector('#pinkbutton')

darkbutton.addEventListener('click', modoDark)
lightbutton.addEventListener('click', modoLight)
pinkbutton.addEventListener('click', modoPink)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.add("light");
    tela.classList.remove("dark");
    tela.classList.remove("pink");
}

function modoPink(){
    event.preventDefault();
    console.log('modo pink');
    tela.classList.add("pink");
    tela.classList.remove("dark");
    tela.classList.remove("light");
}
