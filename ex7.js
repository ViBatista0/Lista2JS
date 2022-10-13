var raio, altura, volume

raio = parseFloat(prompt("Digite o raio da lata de óleo"))
altura = parseFloat(prompt("Digite a altura da lata"))

volume = Math.PI * (raio * raio) * altura

document.write("O volume da lata de óleo é: " + Math.round(volume) + "m³")