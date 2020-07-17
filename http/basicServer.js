const http = require('http');

function whenReqComes(incomingMsg, outGoingMsg) {

    console.log(incomingMsg.url)
    console.log(incomingMsg.method)
    console.log(incomingMsg.headers['user-agent'])
    console.log(incomingMsg)
    console.log(outGoingMsg)



    outGoingMsg.end('Hello World')
}

let server = http.createServer(whenReqComes);

server.listen(5000)