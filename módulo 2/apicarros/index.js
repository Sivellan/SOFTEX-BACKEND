const express = require("express")

const app = express() 

app.use(express.json())

app.listen(3001,()=> {
    console.log("Servidor iniciado")
})

app.get("/", (req, res)=>{
    res.send(("Bem vindo..."))
})

app.get("/carros", (req, res)=>{
    res.send(("Rota de Carros..."))

})

app.get("/carros", (req,res)=>{

})
Carros = [
    {
     Id: 1,
     Modelo: 'Palio',
     Valor: '35000',
     Ano: 2010
    },
    {
     Id: 2,
     Modelo: 'Fiat',
     Valor: '30000',
     Ano: 2005
    },
    {
     Id: 3,
     Modelo: 'Gol',
     Valor: '48000',
     Ano: 2020
    }
    ]

app.post("/carros/cadastrar", (req, res)=>{
    const {id, modelo, valor, ano} = req.body
    res.send(id, modelo, valor, ano)
    Carros.push(id, modelo, valor, ano)
      
})

app.delete("/carros/excluir/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const indexParaExcluir = carros.findIndex(carro => carro.Id === id)

    if (indexParaExcluir !== -1){
        carros.splice(indexParaExcluir, 1)
        res.json({ message: "Carro excluído com sucesso" })
    } 

    else{
        res.status(404).json({ message: "Carro não encontrado" })
    }
})

app.get("/carros/listar", (req, res) => {
    res.json(Carros);
})


app.get("/cadastrar/:id", (req, res)=>{
    const id = req.params.id
    res.send(`Bem-Vindo Usuário ${id}`)
})
