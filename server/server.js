const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId : '62d6cd8dba1b449380eedadf191feb39',
        clientSecret: '05ced4cf5a15486d946ac9a71aa4aea2'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)