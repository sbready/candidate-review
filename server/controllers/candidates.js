module.exports = {

    update_candidate ( req, res ) {
        let user,
            status = 200
        
        db.find_user_by_session( [req.user] ).then( ( obj ) => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })


        let updatedInfo = req.body //req.body is this.state coming from axios call on front end
            , updatedCandidate = Object.assign( {}, user, updatedInfo )

        db.update_candidate( [...updatedUser] ).then( obj => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })

        !user.id && (status = 404)
        res.status( status ).send( user )
    }

}