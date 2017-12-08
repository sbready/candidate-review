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
    , statesControllers = require('./controllers/states')
    // , citiesjson = require('./citiesjson')


const app = express()

app.use(cors())
app.use(bodyParser.json())

S3(app)

massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000 //10min
    }
}))

//app.use(express.static(__dirname+ '/../build'))


//passport and session
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({

    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db')

    //Google Auth Start
    let userData = profile._json,
        auth_id = userData.user_id.split('|')[1]

    db.find_user([auth_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([userData.given_name, userData.family_name, userData.email, userData.gender, auth_id])
                .then(user => {
                    return done(null, user[0].id)
                })
        }
    })
    //Google Auth End

}))

//authentication endpoints - complete
app.get('/auth', passport.authenticate('auth0')) // authenticate auth0
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3005/addinfocatch',
    failureRedirect: 'http://localhost:3000/auth'
    })) // set session
app.get('/auth/verify', function ( req, res ) {
    let response = req.user,
        status = 200
    !response && ( response = "LOGIN REQUIRED", status = 403 )
    res.status( status ).send( response )
    })  // verify logged in user and session
app.get('/auth/logout', function( req, res ) {
    req.logout()
    res.redirect('http://localhost:3000/#/')
    }) // logout



//users endpoints
app.put('/api/update_user', usersControllers.update_user) // update user table

//candidates endpoints
app.post('/api/create_candidate', candidatesControllers.create_candidate) // create candidate row
app.put('/api/update_candidate', candidatesControllers.update_candidate) // update candidate table
// app.get('/candidates/candidate_profile', candidatesControllers.candidate_profile) //gets candidate data to populate candidate profile page

//states endpoints
app.get('/api/state_names', statesControllers.state_names)



passport.serializeUser(function (ID, done) {
    done(null, ID)
})

passport.deserializeUser(function (ID, done) {
    const db = app.get('db')
    db.find_user_by_session([ID]).then(user => {
        done(null, user[0])
    })
})


app.listen(process.env.SERVER_PORT, () => {
    console.log(`╭∩╮（︶︿︶）╭∩╮: ${process.env.SERVER_PORT}`)
})