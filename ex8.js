
var tempo, velocidade, distancia, litros

tempo = parseFloat(prompt("Digite o tempo gasto na viagem em horas"))
velocidade = parseFloat(prompt("Digite a velocidade média"))

distancia = tempo * velocidade

litros = distancia / 12

document.write("Velocidade média: " + velocidade + "km/h" + "<br>") 
document.write("Tempo utilizado: " + tempo + "h" + "<br>" )
document.write("Distância percorrida: " + distancia + "km" + "<br>")
document.write("Litros gastos: " + litros + "l")