require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , authControllers = require('./controllers/auth')

const app = express()

app.use( cors() )
app.use( bodyParser.json() )

massive(process.env.DB_CONNECTION).then( db => {
    app.set( 'db', db )
})

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 50000
    }
}))

//app.use(express.static(__dirname+ '/../build'))

app.use( passport.initialize() )
app.use( passport.session() )

passport.use( new Auth0Strategy ({

    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){

    const db = app.get( 'db' )
    let userData = profile._json,
        auth_id = userData.user_id.split('|')[1]

    db.find_user([auth_id]).then( user => {
        if ( user[0] ) {
            return done( null, user[0].id )
        } else {
            db.create_user([userData.name, userData.email, userData.picture, auth_id])
                .then( user => {
                    return done( null, user[0].id )
                })
        }
    })
}))

app.get('/auth', authControllers.get_auth)
app.get('/auth/callback', authControllers.get_auth_callback)
app.get('/auth/verify', authControllers.get_auth_verify)
app.get('auth/logout', authControllers.get_logout)

passport.serializeUser(function( ID, done ){
    done( null, ID )
})

passport.deserializeUser(function( ID, done ){
    const db = app.get('db')
    db.find_user_by_session([ID]).then( user => {
        done( null, user[0])
    })
})


app.listen(process.env.SERVER_PORT, () => {
    console.log(`╭∩╮（︶︿︶）╭∩╮: ${process.env.SERVER_PORT}`)
})