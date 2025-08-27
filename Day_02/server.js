const server = require('http');

const port = 4000; 

server.createServer((req,res) => {
    res.write("This is my first server \n");
    res.end('Hello, world! \n')

}).listen(4000,()=>{
    console.log(`server started at ${port}`)
})
