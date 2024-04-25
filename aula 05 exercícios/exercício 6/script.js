function conta(){
    var nomeproduto = prompt('Digite o nome do produto')
    var valor= prompt('Digite o valor do produto')
    var dinheiro= prompt('Digite o dinheiro:')
    var troco = dinheiro - valor
    menssagem.innerHTML = ("Você podera comprar " + nomeproduto + " por: R$" + valor)
    totalproduto.innerHTML=("Você deu R$" + dinheiro)
    trc.innerHTML=("Seu troco é de R$" + troco)

}