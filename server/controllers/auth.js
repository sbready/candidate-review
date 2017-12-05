module.exports = {

    get_auth( req, res ) {
        passport.authenticate( 'auth0' )
    },

    get_auth_callback( req, res ) {
        passport.authenticate('auth0', {
            successRedirect: 'http://localhost:3005/',
            failureRedirect: 'http://localhost:3000/auth'
        })
    }, 

    get_auth_verify( req, res ) {
        let response = req.user,
            status = 200

        !response && ( response = "LOGIN REQUIRED", status = 403 )

        res.status( status ).send( response )
    }, 

    get_logout( req, res ) {
        req.logout()
        res.redirect('http://localhost:3000/#/')
    }
}