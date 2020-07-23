const http = require('http');
const fs = require('fs');

function reqHandler(req, res) {
    const url = req.url;
    const method = req.method;

    console.log(req)

    req.on('data', function (dt) {
        console.log('REq data ', dt.toString())
    })



    // How to send static content???
    // Check for method and url both
    // You cant directly access req body
    // How to pass dynamic data to html?


    if (url == '/') {
        fs.readFile(__dirname + '/UI/index.html', 'utf8', (err, data) => {
            if (err) {
                console.log('Error', err)
            } else {
                res.write(data);
                res.end()
            }
        })
    } else if (url == '/about') {
        fs.readFile(__dirname + '/UI/about.html', 'utf8', (err, data) => {
            if (err) {
                console.log('Error', err)
            } else {
                res.write(data);
                res.end()
            }
        })
    } else if (url == "/contact" && method == "GET") {
        fs.readFile(__dirname + '/UI/contact.html', 'utf8', (err, data) => {
            if (err) {
                console.log('Error', err)
            } else {
                res.write(data);
                res.end()
            }
        })
    } else if (url == '/contact' && method == "POST") {
        res.end('Successfully submitted')
    }
    else {
        res.writeHead(404);
        res.end('Page Not Found')
    }
}


let server = http.createServer(reqHandler);
server.listen(3000)
console.log('Server up n running on port 3000')