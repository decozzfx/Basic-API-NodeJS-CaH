const http = require('http')
const { hello } = require('./custom_module/helloworld')

//set header
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write(JSON.stringify(hello)) // menangkap file JSON
    res.end
})

// set server
const hostName = '127.0.0.1'
const port = 3000
server.listen(3000, hostName, () => {
    console.info(`Server running at http://${hostName}:${port}`)
})