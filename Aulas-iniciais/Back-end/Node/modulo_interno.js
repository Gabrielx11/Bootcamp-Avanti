const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type':'text/plain'}) // Especificando a resposta que quer ao startar o serviço || text/plain -> Entende o  serviço como texto
    response.end("Hello, World")  // Dar a resposta em texto
});

server.listen(8080, ()=>{    //  Porta que estará executando 
    console.log("Running server")

});