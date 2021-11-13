const express = require('express')


//set express
const app = express()
app.use(express.json())

// route end point
app.get('/post/:id', (req, res) => {
    const id = req.params.id
    res.send(`the id is ${id}`)
})


// app.post('/', (req, res) => {
//     res.send('Request dengan method POST')
// })


// app.put('/', (req, res) => {
//     res.send('Request dengan method PUT')
// })


// app.delete('/', (req, res) => {
//     res.send('Request dengan method DELETE')
// })





//set server
const port = 3000
app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`)
})