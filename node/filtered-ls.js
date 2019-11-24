const fs = require('fs')

const directory = process.argv[2]
const fileExt = process.argv[3]
var pattern = RegExp('\\.' + fileExt + '$');


fs.readdir(directory, (err, list) => {
   

const filteredFiles = list.filter((file) => pattern.test(file)) 

filteredFiles.forEach((file) => {
    console.log(file)
})

})

