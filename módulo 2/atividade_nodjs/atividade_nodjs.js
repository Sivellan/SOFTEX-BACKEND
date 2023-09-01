/*Atividade operadores atribuições e ternários*/
let nota1 = Number(prompt('Informe a primeira nota: '))
let nota2 = Number(prompt('Informe a segunda nota: '))
let media = (nota1+nota2)/2
resta = (12 - media)
    if (media >= 7){
        alert('Você já foi aprovado')
    }
    else
        alert('Faltam ' + resta + ' pontos para você passar')