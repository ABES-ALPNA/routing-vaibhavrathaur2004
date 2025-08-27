const server = require('http');

const port = 3000; 

server.createServer((req,res) => {
    
    if(req.url === "/"){
        res.write("This is Home Page")
    }
    else if(req.url === "/about"){
        res.write("This is About Page")
    }
    else if(req.url === "/contact"){
        res.write("This is Contact Page")
    }
    else {
        res.write(" 404 Page is not found ")
    }

    res.end()

}).listen(3000,()=>{
    console.log(`server started at ${port}`)
})
