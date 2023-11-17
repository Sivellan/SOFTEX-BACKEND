const mostrartela = document.querySelector('.resultado')

function APICorreios(){
        fetch('https://viacep.com.br/ws/56320315/json/')
        .then(Response => Response.json())
        .then (cep =>{
            mostrartela.innerHTML = `
                    Bairro: ${cep.bairro}
                    Endereço: ${cep.logradouro}
                    Local: ${cep.localidade}
            `
        })
}

APICorreios()