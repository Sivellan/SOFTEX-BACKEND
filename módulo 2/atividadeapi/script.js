const mostrartela = document.querySelector('.resultado')

function APIMenssagem(){
        fetch('https://api.chucknorris.io/jokes/random')
        .then(Response => Response.json())
        .then (menssagem =>{
            mostrartela.innerHTML = `
                    Mensagem: ${menssagem.value}
                    
            `
        })
}

APICorreios()