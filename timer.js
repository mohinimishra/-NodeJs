setTimeout(function () {
    console.log("hiii")
}, 0)

let counter = 1

let id = setInterval((a) => {

    if (counter == 5) {
        console.log('Inside if')
        clearInterval(id);
    }
    console.log('Every second', a)
    counter++;
}, 1000, 12);


console.log('Hey')

setImmediate(function () {
    console.log('I am immediate')
})


