/**********core modules ******/



const fs = require('fs')
// console.log("start reading file")
// const file = fs.readFileSync("./mathlib.js","utf-8")
// console.log(file)
// console.log("finish reading file")

// console.log("start reading file")
//  fs.readFile("./mathlib.js","utf-8",(err,file)=> {
//      if(err) return console.log(err)
//     console.log(file)
//  })

// console.log("finish reading file")
const http = require("http")
// console.log(http)
const server = http.createServer((req,res) => {
    switch (req.url) {
        case "/":
            res.end("<h1 style='color:red'>home page</h1>")
            break;
        case "/products":
            res.end("<h1 style='color:red'>products page</h1>")
            break;
        default:
            res.end("<h1 style='color:red'>ERROR 404 PAGE NOT FOUND</h1>")
            break;
    }
})
server.listen(5000,()=>{
    console.log("server is running on port",5000)
})

