const fs = require('fs')

let readStream = fs.createReadStream(__dirname + '/tst.txt');

let data = ''


readStream.on('data', function (chunk) {
    console.log(chunk.toString())
    data += chunk
});

readStream.on('end', function () {
    console.log('Reading done');
    // console.log(data);
})

readStream.on('error', function (err) {
    console.log('Error', err)
})