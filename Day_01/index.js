// console.log("first node js porgram")


// const data = require('fs')
// const { log } = require('console')
// data.writeFileSync("one.text", "hello how are you?")
// const read = data.readFileSync("one.text", "UTF-8")
// console.log(read);



// const http = require('http');

// const hostname = '127.0.0.1'; 
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200; // OK
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, world!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
module.exports = {sum , diff};


 