// taks 1
const { log } = require('console')
const fs = require('fs')
fs.writeFileSync("hello.txt" ,"Hello Nodejs")
console.log(fs.readFileSync("hello.txt","UTF-8"));
fs.appendFileSync("hello.txt","  Pratice make prefect")
console.log(fs.readFileSync("hello.txt","UTF-8"));
