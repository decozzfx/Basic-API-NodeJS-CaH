const http = require('http')
const { hello } = require('./custom_module/helloworld')

//set header
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.write(hello)
    res.end
})

// set server
const hostName = 'localhost'
const port = 3000
server.listen(3000, hostName, () => {
    console.info(`Server running at http://${hostName}:${port}`)
})