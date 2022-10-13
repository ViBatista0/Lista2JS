var a, b, mediador

a = prompt("Digite um valor")
b = prompt("Digite outro valor")

mediador = b
b = a
a = mediador

document.write("Os valores foram trocados!" + "<br>")
document.write("Valor 1: " + a + "<br>")
document.write("Valor 2: " + b)