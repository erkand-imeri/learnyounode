const fs = require('fs')

const content = fs.readFile(process.argv[2], 'utf8', (error, data) => {
    console.log(data.toString().split('\n').length - 1)
})