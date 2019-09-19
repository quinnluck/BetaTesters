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

router.get('/groups', (request, response) => {
    console.log("Fetching all groups...")

    const queryString = "SELECT * FROM rs_group;"
    pool.query(queryString, (err, rows, fields) => {
        if(err) {
            handleError(err, "failed to fetch all groups.")
        }

        response.json(rows)
        response.end()
    })
})

router.get('/group/:id', (request, response) => {
    console.log("Fetching group with id: " + request.params.id)

    const queryString = `SELECT * FROM rs_group WHERE group_id = ${request.params.id}`
    pool.query(queryString, (err, rows, fields) => {
        if(err){
            handleError(err, "failed to fetch group with id: " + request.params.id)
        }

        response.json(rows)
        response.end()
    })
})

router.put('/group', (request, response) => {
    console.log("Trying to createa group...")

    const queryString = `INSERT INTO rs_group (host_username, name) VALUES (?, ?);`
    pool.query(queryString, [request.body.host_username, request.body.name], (err, results, fields) => {
        if(err) {
            handleError(err, "failed to create group with variables: " + request.body.host_username + " " + request.body.name)
        }

        console.log("Group successfully created with id: " + results.insertId)
        response.end()
    })
})

router.post('/update/group', (request, response) => {
    console.log("Trying to update group with id: " + request.body.group_id)

    const queryString = "UPDATE rs_group SET "
    if(request.body.host_username && request.body.name){
        queryString += `host_username = ${request.body.host_username}, name = ${reuqest.body.name} `
    } else {
        if(request.body.host_username){
            queryString += `host_username = ${request.body.host_username} `
        }
        if(request.body.name) {
            queryString += `name = ${request.body.name} `
        }
    }
    queryString += `WHERE group_id = ${request.body.group_id}`

    pool.query(queryString, (err, results, fields) => {
        if(err){
            handleError(err, "failed to update group with id: " + request.body.group_id)
        }

        console.log("Group successfully updated with id: " + results.insertId)
        response.end()
    })
})

router.delete('/group/:id', (request, response) => {
    console.log("Trying to delete group with id " + request.params.id)

    const queryString = `DELETE FROM rs_group WHERE group_id = ${request.params.id}`
    pool.query(queryString, (err, results, fields) => {
        if(err){
            handleError(err, "failed to delete group with id: " + request.params.id)
        }

        console.log("Group successfully deleted with id: " + request.params.id)
        response.end()
    })
})

module.exports = router
