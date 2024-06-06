
//Const para não declarar o mesmo valor duas vezes
const express = require('express')

const app = express()

app.get('/',function(req, res){
    res.send('Bem vindo ao meu site!')
})

app.get('/show',function(req, res){
    res.send('SHOW!')
})

app.get('/blog',function(req, res){
    res.send('Blog informativo')
})

app.get('/sobre',function(req, res){
    res.send('Sobre nós')
})

app.get('/cadastro/:nome/:idade',function(req, res){
    res.send('Olá ' + req.params.nome + '\nSua idade: ' + req.params.idade)
})







//Tem que ser a última parte do código/programa
app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081/' )
})