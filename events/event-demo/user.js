
// function myEmeiter () {
//     this.on = function() {}
// }

// myEmeiter.prototype.emit = function() {

// }


// let emt = new myEmeiter();

const event = require('events');
const util = require('util');
const EventEmitter = event.EventEmitter;


let db = [{ name: 'testuser', age: 25 }]



function User() {


    // inherits its own property
    EventEmitter.call(this)

}

// inherits prototype eee
util.inherits(User, EventEmitter)




User.prototype.addUser = function (obj) {

    try {
        db.push(obj)
        this.emit('userSaved', db)
    } catch (error) {
        this.emit('error', error)
    }

}

module.exports = User;