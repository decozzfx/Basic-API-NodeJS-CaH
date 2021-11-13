const express = require('express')


//set express
const app = express()
app.use(express.json())

// route end point
// app.post('/', (req, res) => {
//     res.send('Request dengan method POST')
// })


// app.put('/', (req, res) => {
//     res.send('Request dengan method PUT')
// })


// app.delete('/', (req, res) => {
//     res.send('Request dengan method DELETE')
// })

// get id
// app.get('/post/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`the id is ${id}`)
// })

app.get('/page-*', (req, res) => {
    const id = req.path
    res.send(`Route : ${id}`)
})






//set server
const port = 3000
app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`)
})