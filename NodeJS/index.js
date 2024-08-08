const express = require('express')

const app = express()
app.use(express.json())

const users = [
    {id:1, name: "João"},
    {id:2, name: "David"},
]

app.get('/usuarios', (req, res)=>{
    res.json(users)
})

app.post('/usuarios', (req, res)=>{
    const name = req.body.name
    const id = users.length+1

    const newUser = {id, name}
    users.push(newUser)
    res.status(201).json(newUser)
})

app.get('/', (req, res) =>{
    res.send({message: "olá mundo"})
})

app.listen(3002)
