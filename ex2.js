var validos, nulos, brancos, total, pv, pn, pb

validos = parseInt(prompt("Digite a quantidade de votos válidos"))
nulos = parseInt(prompt("Digite a quantidade de votos nulos"))
brancos = parseInt(prompt("Digite a quantidade de votos em branco"))

total = validos + nulos + brancos


pv = validos / 100 * total
pn = nulos / 100 * total
pb = brancos / 100 * total


document.write("O total de eleitores foi: " + total + "<br>")

document.write("A porcentagem de votos válidos é: " + pv + "%" + "<br>")
document.write("A porcentagem de votos nulos é: " + pn + "%" + "<br>")
document.write("A porcentagem de votos brancos é: " + pb + "%" + "<br>")
