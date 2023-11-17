const express = require("express")

const app = express() 

app.use(express.json())

app.listen(3001,()=> {
    console.log("Servidor iniciado")
})

app.get("/", (req, res)=>{
    res.send(("Bem vindo..."))
})

app.get("/usuarios", (req, res)=>{
    res.send(("Rota de Usuarios..."))

})

app.get("/usuarios", (req,res)=>{

})
usuarios = []

app.post("/usuarios", (req, res)=>{
    const nome = req.body
    const idade = req.body
    const usuario = {nome, idade}
    console.log(nome,idade)
    usuarios.push(usuario)
      
})

app.get("/usuarios/s", (req, res) => {
    res.json(usuarios);
})


app.get("/cadastrar/:id", (req, res)=>{
    const id = req.params.id
    res.send(`Bem-Vindo Usuário ${id}`)
})
