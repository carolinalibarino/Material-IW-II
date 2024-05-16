//selecionar o modo http do node 

var http = require('http')

//abrir um servidor http

http.createServer(function(req,res){
 res.end('2C vencedores SPF 2024')
}).listen(8081)

console.log('servidor rodando')