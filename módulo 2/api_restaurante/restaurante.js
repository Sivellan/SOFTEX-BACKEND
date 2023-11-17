const express = require("express")

const app = express() 

app.use(express.json())

app.listen(3001,()=> {
    console.log("Servidor iniciado")
})

app.get("/", (req, res)=>{
    res.send(("Bem vindo..."))
})

app.get("/restaurante", (req, res)=>{
    res.send(("Rota de restaurante..."))

})

app.get("/restaurante", (req,res)=>{

})
Pratos = [
    {
     Id: 1,
     Nome: 'File com fritas',
     Valor: '35'
     },
     {
     Id: 2,
     Nome: 'Bode Assado',
     Valor: '80'
     },
     {
     Id: 3,
     Nome: 'Picanha',
     Valor: '110'
     },
     {
    Id: 4,
    Nome: 'Lasanha Frango',
    Valor: '70'
    },
    {
    Id: 5,
    Nome: 'Lasanha Carne',
    Valor: '70'
    },
    ]



app.get("/restaurante/pratos", (req, res) => {
    res.json(Pratos);
})



