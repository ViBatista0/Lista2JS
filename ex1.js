var ano, dia, mes, idade

ano = parseInt(prompt("Digite a sua idade em anos"));
mes = parseInt(prompt("Digite os meses adicionais"));
dia = parseInt(prompt("Digite os dias adicionais"));

ano *= 365
mes *= 30

idade = ano + mes + dia

document.write("Sua idade expressa em dias é: " + idade)
