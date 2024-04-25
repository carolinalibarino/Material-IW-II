function calcular(){
    var valora = prompt('Digite o valor de a ')
    var valorb = prompt('Digite o valor de b')
    var valorc = prompt('Digite o valor de c')

    novovalora= parseFloat(valora)
    novovalorb=parseFloat(valorb)
    novovalorc=parseFloat(valorc)

    delta = (novovalorb*novovalorb) - 4 * novovalora * novovalorc

    equacao.innerHTML = ("A equação atual é " + novovalora+"x²+"+novovalorb+"x+"+novovalorc+"=0")
    calculo.innerHTML = ("O cálculo realizado será Δ="+novovalora+"²-4 ."+novovalorb+"."+novovalorc)
    total.innerHTML = ("O valor calculado foi Δ= " +delta)
}