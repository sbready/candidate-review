require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , S3 = require('./S3.js')
    , authControllers = require('./controllers/auth')
    , usersControllers = require('./controllers/users')
    , candidatesControllers = require('./controllers/candidates')

const app = express()

app.use( cors() )
app.use( bodyParser.json() )

S3(app)

massive(process.env.DB_CONNECTION).then( db => {
    app.set( 'db', db )
})

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000 //10min
    }
}))

//app.use(express.static(__dirname+ '/../build'))


//passport and session
app.use( passport.initialize() )
app.use( passport.session() )

passport.use( new Auth0Strategy ({

    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){

    const db = app.get( 'db' )

    //Google Auth Start
    let userData = profile._json,
        auth_id = userData.user_id.split('|')[1]

    db.find_user([auth_id]).then( user => {
        if ( user[0] ) {
            return done( null, user[0].id )
        } else {
            db.create_user([userData.given_name, userData.family_name, userData.email, userData.gender, auth_id])
                .then( user => {
                    return done( null, user[0].id )
                })
        }
    })
    //Google Auth End

}))

//authentication endpoints - complete
app.get('/auth', authControllers.get_auth) // authenticate auth0
app.get('/auth/callback', authControllers.get_auth_callback) // set session
app.get('/auth/verify', authControllers.get_auth_verify) // verify logged in user and session
app.get('/auth/logout', authControllers.get_logout) // logout

//users endpoints
app.put('/users/update_user', usersControllers.update_user) // update user table

//candidates endpoints
app.post('/candidates/create_candidate', candidatesControllers.create_candidate) // create candidate row
app.put('/candidates/update_candidate', candidatesControllers.update_candidate) // update candidate table
// app.get('/candidates/candidate_profile', candidatesControllers.candidate_profile) //gets candidate data to populate candidate profile page



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