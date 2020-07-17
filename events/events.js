const event = require('events');

const emitter = new event.EventEmitter();


emitter.setMaxListeners(20)

emitter.on('knock', function () {
    console.log("Who's Der")
})


emitter.on('knock', function () {
    console.log('I am node')
})

emitter.on('knock', () => console.log(3));
emitter.on('knock', () => console.log(4));
emitter.on('knock', () => console.log(5));
emitter.on('knock', () => console.log(6));
emitter.on('knock', () => console.log(7));
emitter.on('knock', () => console.log(8));
emitter.on('knock', () => console.log(9));
emitter.on('knock', () => console.log(10));
emitter.on('knock', () => console.log(11));


emitter.emit('knock');

emitter.once('mail', function () {
    console.log('Email sent')
})


emitter.emit('mail')
emitter.emit('mail')

function forPrice(name, price) {
    console.log(`Message sent to ${name} for Rs.${price}`)
}

function forOTP(name, otp) {
    console.log(`Message sent to ${name} for OTP.${otp}`)
}


emitter.on('sendMessage', forPrice);
emitter.on('sendMessage', forOTP)

emitter.emit('sendMessage', 'ashu', 23)

emitter.removeListener('sendMessage', forOTP);


emitter.removeAllListeners('sendMessage')

emitter.emit('sendMessage', 'ashu', 23)

