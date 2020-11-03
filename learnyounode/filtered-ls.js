'use strict'

const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(filePath,'utf8',(err, list) => {
    if(err) console.log(err)
    
    list.forEach(x => {
        if(path.extname(x)===extension){
            console.log(x)
        }
    })
})
