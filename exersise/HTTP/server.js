let http = require('http')
const { isAbsolute } = require('path')

function whenReqCome(incomingMsg, outgoingMsg) {

    console.log(incomingMsg.url)
    if (incomingMsg.url == "/") {
        outgoingMsg.end('hii! MM wlcm to my page')
    }
    else if (incomingMsg.url == "/about") {
        outgoingMsg.end("welcome here")
    } else {
        outgoingMsg.writeHead(404, { "Auth": "Hello Header" })
        outgoingMsg.write('Page not found')
        outgoingMsg.end()

    }
}

let server = http.createServer(whenReqCome)
server.listen(4000)