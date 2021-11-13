const express = require('express')
const routers = express.Router()



//route end point
// router dasar
routers.get('/', (req, res) => {
    res.send('Request dengan method GET')
})

routers.post('/', (req, res) => {
    res.send('Request dengan method POST')
})


routers.put('/', (req, res) => {
    res.send('Request dengan method PUT')
})


routers.delete('/', (req, res) => {
    res.send('Request dengan method DELETE')
})

// routing dinamis
routers.get('/post/:id', (req, res) => {
    const id = req.params.id
    res.send(`the id is ${id}`)
})

// Regular expression pada routing
routers.get('/page-*', (req, res) => {
    const id = req.path
    res.send(`Route : ${id}`)
})

module.exports = routers