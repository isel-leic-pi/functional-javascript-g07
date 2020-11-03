'use strict'

const fs = require('fs')

fs.readFile(process.argv[2],'utf8',(err, buffer) => {
    if(err) console.log(err)
    
    const result = buffer.split('\n')
    console.log(result.length-1)
})
