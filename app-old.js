const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let output = {
            name: 'David',
            age: 25,
            url: req.url
        }

        res.write(JSON.stringify(output));
        // res.write('Hello World');
        res.end();
    })
    .listen(8080);

console.log('Listening to port 8080');