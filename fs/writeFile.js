const fs = require('fs');


// fs.writeFileSync(__dirname + '/write.txt', "Hi again")


fs.writeFile(__dirname + '/write.txt', "Hello I am here", function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('Sucess')
    }
})

fs.appendFile(__dirname + '/write.txt', " Adding something more", function (err, dt) {
    if (err) {
        console.log(err);
    } else {
        console.log('Appended');
    }
})