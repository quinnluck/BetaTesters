const express = require('express')
const bodyParser = require('body-parser')
const Request = require('request')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/player/:username', (request, response) => {
    console.log("Fetching runescape user info...")

    let usernameFormatted = request.params.username.split(' ').join('_')
    let rsUrl = 'https://secure.runescape.com/m=hiscore/index_lite.ws?player=' + usernameFormatted

    Request(rsUrl, function (error, res, body) {
        console.log("error: " + error)
        console.log("status code: " + res && res.statusCode)
        console.log("body: " + body)

        var stats = body.split('\n')
        // console.log(stats)
        var skills = stats.map(stat => {
            var skill = stat.split(',')
            return skill[1]
        }, {})

        response.json(body)
        response.end()
    })    
})

module.exports = router
