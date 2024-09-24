const http = require("http")


const hotname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.end("Hello FER202")
    
})

server.listen(port, host_name, () => {
    console.log("Sever running")

})