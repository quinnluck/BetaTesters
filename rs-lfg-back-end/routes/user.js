const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rslookingforgroup'
})



function handleError(err, message) {
    console.log(message + err)
    response.sendStatus(500)
    response.end()
    return
}

router.get('/users', (request, response) => {
    console.log("Fetching all users...")

    const queryString = "SELECT * FROM users;"
    pool.query(queryString, (err, rows, fields) => {
        if(err) {
            handleError(err, "failed to fetch all users.")
        }

        response.json(rows)
        response.end()
    })
    
})

router.get('/user/:id', (request, response) => {
    console.log("getting user with id: " + request.params.id)

    const queryString = `SELECT * FROM users WHERE user_id=${request.params.id}`
    pool.query(queryString, (err, rows, fields) => {
        if(err){
            handleError(err, "failed to fetch user")
        }
        console.log("fetched user successfully!")

        // to specify how json is returned, use map function.

        response.json(rows)
        response.end()
    })
})

router.put('/user', (request, response) => {
    console.log("trying to create a new user with variables: " + request.body.username + " " + request.body.combat_level)
    const queryString = `INSERT INTO users (username, combat_level) VALUES (?, ?);`
    
    pool.query(queryString, [request.body.username, request.body.combat_level], (err, results, fields) => {
        if(err){
            handleError(err, "failed to create user")
        }
        console.log("created user successfully with Id: " + results.insertId)

        response.end()
    })
})

router.post('/update/user', (request, response) => {
    console.log("trying to update a user with id: " + request.body.user_id)
    const queryString = "UPDATE users SET "
    if(request.body.username && request.body.combat_level) {
        queryString += `username = ${request.body.username}, combat_level = ${request.body.combat_level} `
    } else {
        if(request.body.username) {
           queryString += `username = ${request.body.username} `
        } 
        if(request.body.combat_level){
           queryString += `combat_level = ${request.body.combat_level} `
        }
    }
    
    queryString += ` WHERE user_id = ${request.body.user_id};`

    pool.query(queryString, (err, results, fields) => {
        if(err){
            handleError(err, "failed to update user")
        }
        console.log("updated user successfully with Id: " + results.insertId)

        response.end()
    })
})

router.delete('/user/:id', (request, response) => {
    console.log("Trying to delete user with id: " + request.params.id)
    const queryString = `DELETE FROM users WHERE user_id=${request.params.id}`

    pool.query(queryString, (err, results, fields) => {
        if(err){
            handleError(err, "failed to delete user")
        }

        console.log("successfully deleted user with Id: " + request.params.id)

        response.end()
    })
})

module.exports = router
