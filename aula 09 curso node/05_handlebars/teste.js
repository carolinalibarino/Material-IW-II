const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Contectado com sucesso!")
// }).catch(function(erro){
//     console.log('Erro: ' + erro)
// })

//npm install --save sequelize
//npm install --save mysql2

//Outro arquivo
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

//Executados apenas na primeira execução
// Postagem.sync(force = true)
// Usuario.sync(force = true)


//Insert de dados
// Postagem.create({
//     titulo: 'PRIMEIRA POSTAGEM',
//     conteudo: 'Conteúdo da primeira postagem bla bla bla...'
// })