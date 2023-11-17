const Sequelize = require('sequelize')

const dbConfig = {
  database: 'empresa',
  username: 'root',
  password: 'root',
  options: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  }
}

const connection = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig.options
  )

const conexao = connection.authenticate()
    .then(function(){
        console.log("Banco de dados conectado com sucesso")
    })
    .catch(function(error){
        console.log("Banco de dados não conectado", error)
    })