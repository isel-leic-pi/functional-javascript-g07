'use strict'

const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]
const extension = '.' + process.argv[3]

module.exports = function(filePath,extension,cb){
    fs.readdir(filePath,'utf8',(err, data) => {
        if(err) return cb(err)
        
        data = data.filter(function(x){
            return path.extname(x)==='.' + extension
        })
        cb(null,data)
      
    })
}



    

    
