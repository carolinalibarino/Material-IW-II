function salarios(){

    var salario = prompt('Digite o salário')
    var porcentagem = prompt('Digite a porcentagem do reajuste')
    var porcent = salario * (porcentagem/100)


    novosalario = parseFloat(salario)
    novaporcent = parseFloat(porcent)

    var total = novosalario + novaporcent

    menssagem.innerHTML = (funcionario + " recebeu um aumento")
    atual.innerHTML = ("O sálario atual é de R$" + salario)

    aumento.innerHTML = ("Com o aumento de " + porcentagem + " o saláro vai aumental R$" + porcent + " no proximo mês")
    fim.innerHTML = ("O novo salário de " + funcionario + " é de R$" + total)
}