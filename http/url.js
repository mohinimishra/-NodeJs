const http = require('http');
const url = require('url')

// let uri = "http://localhost:3000/about/?name=ashu&age=76";
// let parsedURI = url.parse(uri, true)
// console.log(parsedURI)

function reqHandler(req, res) {
    const uri = req.url;
    const method = req.method;

    console.log(req)
    // console.log(url)

    let paseUrl = url.parse(uri, true)
    console.log('parseUrl', paseUrl)

    let data = paseUrl.query.name
    res.write(data)
    res.end()
}

let server = http.createServer(reqHandler)
server.listen(3000)