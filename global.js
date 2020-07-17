// console.log(global.global)

// console.log(global.process.env.LOGNAME)

process.env.myName = "Mohini" // update variable in env
// console.log(global.process);

console.log(process.pid);

process.title = "myProcess"


console.log(process.title);

// There is env object in process, where we can store our runtime variables
// console.log(process.env)

console.log(process.platform);


// Methods

// cwd() // curent working directory

console.log(process.cwd())


// console.log(process.exit())

// console.log(process.kill(pid, signal))


console.log(process.memoryUsage())



// __dir

console.log(__dirname);

// file is executing

console.log(__filename);


process.on('exit', function () {
    console.log("ending process")
})

process.on('uncaughtException', function (err) {
    console.log('Exception fired')
    console.log(err)
    console.log(err.stack)
})
