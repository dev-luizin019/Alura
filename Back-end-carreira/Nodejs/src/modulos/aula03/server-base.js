import http from "http";

const PORT = 3000;

const rotas = {
    "/":"Curso de NodeJS",
    "/home": "Bem vindo"
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end(rotas[req.url])
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})