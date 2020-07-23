let http = require('http')
let fs = require('fs')

function reqHandler(req, res) {
    let url = req.url
    if (url == '/') {
        fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
            if (err) {
                console.log("Error", err)
            }
            else {
                res.write(data)
                res.end()
            }
        })
    } else if (url == '/contact') {
        fs.readFile(__dirname + '/contact.html', 'utf8', (err, data) => {
            if (err) {
                console.log("Error", err)
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
}

let server = http.createServer(reqHandler)
server.listen(4000)


