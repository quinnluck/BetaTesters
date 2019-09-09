const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'betatesters'
})

function getDBConnection() {
    return pool
}

function handleError(err, message) {
    console.log(message + err)
    response.sendStatus(500)
    response.end()
    return
}

router.get('/users', (request, response) => {
    console.log("Fetching all users...")

    const queryString = "SELECT * FROM users;"
    getDBConnection().query(queryString, (err, rows, fields) => {
        if(err) {
            handleError(err, "failed to fetch all users.")
        }

        response.json(rows)
        response.end()
    })
    
})

router.get('/user/:id', (request, response) => {
    console.log("getting user with id: " + request.params.id)

    const queryString = `SELECT * FROM users WHERE id=${request.params.id}`
    getDBConnection().query(queryString, (err, rows, fields) => {
        if(err){
            handleError(err, "failed to fetch user")
        }
        console.log("fetched user successfully!")

        // to specify how json is returned, use map function.

        response.json(rows)
        response.end()
    })
})

router.post('/create_user', (request, response) => {
    console.log("trying to create a new user with variables: " + request.body.first_name + " " + request.body.last_name)
    const queryString = `INSERT INTO users (firstName, lastName) values (?, ?);`
    
    getDBConnection().query(queryString, [request.body.first_name, request.body.last_name], (err, results, fields) => {
        if(err){
            handleError(err, "failed to create user")
        }
        console.log("created user successfully with Id: " + results.insertId)

        response.end()

    })

    
})

module.exports = router