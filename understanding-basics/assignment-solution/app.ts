const http = require('http');

let users: string[] = ['User'];
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<html lang="en">');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Some greeting!</h1></body>');
        res.write('<form action="/create-user" method="POST"><label>Username<input type="text" name="username"></label><button type="submit">Send</button></form>');
        res.write('<form action="/users" method="POST"><button type="submit">Users</button></form>');
        res.write('</html>');
        return res.end();
    }
    if(req.url === '/users') {
        res.write('<html lang="en">');
        res.write('<head><title>Assignment 1</title></head>');
        users.map((user, index) => {
            res.write(`<body><ul><li>${user} ${index + 1}</li></ul></body>`);
        })
        res.write('</html>');
        return res.end();
    }
    if(req.url === '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk: Buffer) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const parsedValue = parsedBody.split('=')[1];
            console.log(parsedValue);
            users.push(parsedValue);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);
console.log('Listening on port 3000...')
