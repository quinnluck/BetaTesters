const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')

const app = express()

app.use(morgan('short'))

app.get('/', (request, response) => {
    console.log("responding to root route")
    response.send("Hello Root route!")
    response.end()
})

app.get('/users', (request, response) => {
    const user1 = {
        id: 1,
        name: "John Smith",
        occupation: "runescape player",
    }

    const user2 = {
        id: 2,
        name: "John Doe",
        occupation: "Computer Programmer",
    }
    console.log("responding to users route")
    response.json([user1, user2])
    response.end()
})

app.get('/user/:id', (request, response) => {
    console.log("getting user with id: " + request.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'betatesters'
    })

    const queryString = `SELECT * FROM users WHERE id=${request.params.id}`
    connection.query(queryString, (err, rows, fields) => {
        if(err){
            console.log("failed to fetch user: " + err)
            response.sendStatus(500)
            response.end()
            return
        }
        console.log("fetched user successfully!")

        // to specify how json is returned, use map function.

        response.json(rows)
        response.end()
    })
})

app.listen(4000, () => {
    console.log("server is listening on port 4000...")
})
