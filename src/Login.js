import React from 'react'
import {Container} from 'react-bootstrap'


var client_id = '62d6cd8dba1b449380eedadf191feb39'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`



export default function Login(){
    return (
    
    <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh"}}>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
    </Container>

    )
}

