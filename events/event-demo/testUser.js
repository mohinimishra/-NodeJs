const User = require('./user');

let user = new User();


user.on('userSaved', function (db) {
    console.log('User successfully saved');
    console.log('Total Users now', db.length)
    console.log('Total Users', db)
})

user.on('error', function (err) {
    console.log(err)
})

user.addUser({ 'name': 'mohini', age: 40 })