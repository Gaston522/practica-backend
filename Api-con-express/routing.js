const http = require('node:http');

const desirePort = process.env.PORT ?? 1234;

const json = require('./plantel.json');

const processRequest = (req, res) => {
    const {method, url} = req;

    switch (method) {
        case 'GET':
            switch (url) {
                case '/plantel':{
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify(json));
                }

                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>404</h1>');
            }
    }
}

const server = http.createServer(processRequest);

server.listen(desirePort, () =>{
    console.log(`server listening on port http://localhost:${desirePort}`)
})