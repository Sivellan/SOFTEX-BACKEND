let voto = 0
let contx = 0
let conty = 0
let contz = 0
let cont_branco = 0
let cont_nulo = 0
let sair = 1
    console.log('Pressione 889 para candidato x, 847 para o candidato y, 515 para o candidato z ou 0 para votar em branco')  
while (sair == 1){
    voto = Number(prompt('Informe seu voto : '))
    if (voto == 889){
        contx = contx + 1
         
    }else if(voto == 847){
        conty = conty + 1
       
    }else if (voto == 515){
        contz = contz + 1
    } else if (voto == 0){
        cont_branco = cont_branco + 1
    }  else {
        console.log("Voto inválido. Por favor, insira um número válido.")
        cont_nulo = cont_nulo+1
    }
    continuar = prompt("Deseja encerrar a votação? (s/n): ")
    if (continuar == 's'){
        sair = 0}         
}
console.log('Candidato x: '+ contx)    
console.log('Candidato y: '+ conty)
console.log('Candidato z: '+ contz)
console.log('Votos Brancos: '+ cont_branco)
console.log('Votos Nulos: '+ cont_nulo)
