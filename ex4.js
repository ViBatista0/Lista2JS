var custofab, imposto, distribuidor, total

custofab = parseFloat(prompt("Digite o custo de fábrica do veículo"))

imposto = 45 / 100 * custofab
distribuidor = 28 / 100 * custofab

total = custofab + imposto + distribuidor

document.write("O valor final do veículo é: R$ " + total)