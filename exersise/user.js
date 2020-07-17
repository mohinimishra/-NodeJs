let event = require('events')
let util = require('util')

let Person = function (name, age) {
    this.name = name,
        this.age = age
}

util.inherits(Person, event.EventEmitter)

let MM = new Person('MM', 24)
let Ashu = new Person('Ashu', 25)
let Mohini = new Person('Mohini', 26)

let personArray = [MM, Mohini, Ashu]

personArray.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(`${person.name} said : Hii I,m ${person.age} years old. ${msg}`)
    })
})

MM.emit('speak', "welcom")
Ashu.emit('speak', "welcom")
Mohinim.emit('speak', "welcom")
