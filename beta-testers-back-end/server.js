const express = require('express')
const app = express()
const morgan = require('morgan')

const userRouter = require('./routes/user.js')


app.use(morgan('short'))
app.use(express.static('./public'))
app.use(userRouter)


app.get('/', (request, response) => {
    console.log("responding to root route")
    response.send("Welcome to Beta Testers!")
    response.end()
})


app.listen(4000, () => {
    console.log("server is listening on port 4000...")
})
