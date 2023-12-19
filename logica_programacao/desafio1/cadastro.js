
    const nome = document.querySelector("#nome")

function busca(){
    let nomes = ['Fabio', 'Ana', 'Brenda','Alison', 'Robson', 'Alynne', 'Dayves','Jose', 'Paula', 'Maria']
    const valor = nome.value

    if(nomes.includes(valor)){
        alert("Nome " + valor +" encontrado")
    }else{
        alert("Nome não encontrado")          
    }
}