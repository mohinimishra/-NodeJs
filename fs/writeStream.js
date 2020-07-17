const fs = require('fs');

let data = "Hello I am JSOn kumar sonbhadra, chirapunji se aaye the bum bum krne gye"

let writeStream = fs.createWriteStream(__dirname + '/writeStream.txt', { autoClose: false });


writeStream.write(data);


writeStream.on('close', function () {
    console.log('Done writing')
})


writeStream.on('error', function (err) {
    console.log(err);
})