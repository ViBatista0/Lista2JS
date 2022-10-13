var salario, reajuste, final

salario = parseFloat(prompt("Digite o seu salário"))
reajuste = parseFloat(prompt("Digite a porcentagem de reajuste"))

final = reajuste / 100 * salario

document.write("O salário sofreu um ajuste de: R$" + final + "<br>")

salario += final
document.write("O salário final é: R$" + salario)

