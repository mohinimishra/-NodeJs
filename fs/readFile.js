const fs = require('fs');

// synchronous and asynchronous

console.log('Program starts')

// console.log(__dirname)

// let data = fs.readFileSync(__dirname + '/test.txt', { encoding: 'utf-8' })

fs.readFile(__dirname + '/test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


// console.log(data)


console.log('Prgram Ends')