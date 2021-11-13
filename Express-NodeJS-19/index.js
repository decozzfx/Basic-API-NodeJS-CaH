const express = require('express')
const routers = require('./custom_modul/router')


//set express
const app = express()
app.use(express.json())
app.use(routers)






//set server
const port = 3000
app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`)
})