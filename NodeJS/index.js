const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send({message: "olá mundo"})
})

app.listen(3000)
