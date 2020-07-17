const http = require('http')
const fs = require('fs')



function whenReqCome(incomingMsg, outgoingMsg) {
    fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            outgoingMsg.write(data)
            outgoingMsg.end()
        }
    })
}

let server = http.createServer(whenReqCome)
server.listen(3000)
