'use strict'

const fs = require('fs')

const data = fs.readFileSync(process.argv[2]).toString()
const result = data.split('\n')
console.log(result.length-1)