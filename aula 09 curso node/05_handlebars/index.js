//Const para não declarar o mesmo valor duas vezes
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
//template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//conexão do banco

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//ROTAS
app.get('/cadastro', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {
    res.send('FORMULÁRIO RECEBIDO')
})


//Tem que ser a última parte do código/programa
app.listen(8081, function () {
    console.log("Servidor rodando em http://localhost:8081/")
})