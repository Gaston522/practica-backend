//importamos el http de node
const http = require('node:http');
const fs = require('node:fs');

//decimos que toma el puerto de la varianble de entorno o el puerto 300 por default
const desirePort = process.env.PORT ?? 3000;

//cada vez que resibe una peaticion
const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200 //ok
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>Bienvenido a mi página</h1>')
    } else if (req.url === '/imagen') {
        fs.readFile('./messi.png', (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.end('<h1>500 internal server error</h1>')
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data)
            }
        });
    }
}

//creamos el server
const server = http.createServer(processRequest);

//decimos que el server escuche el puerto
server.listen(desirePort, () => {
    console.log(`server listening on port http://localhost:${desirePort}`)
})