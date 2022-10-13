var pretacao, valor, taxa, tempo

valor = parseFloat(prompt("Digite o valor parcelado"))
taxa = parseFloat(prompt("Digite qual a porcentagem da taxa"))
tempo = parseFloat(prompt("Digite quantos dias está atrasado"))


pretacao = valor + (valor * taxa / 100) * tempo

document.write("O valor final da prestação é: R$" + pretacao)