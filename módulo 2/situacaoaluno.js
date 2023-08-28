/*Atividade operadores atribuições e ternários*/
let nota1 = Number(prompt('Informe a primeira nota: '))
let nota2 = Number(prompt('Informe a segunda nota: '))
let nota3 = Number(prompt('Informe a primeira nota: '))
let media = (nota1+nota2+nota3)/3
let situacao = media >= 7 ? 'Aprovado' : 'Reprovado'
alert('Você está ' + situacao)