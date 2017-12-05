module.exports = {

    update_user ( req, res ) {
        let user,
            status = 200
        
        db.find_user_by_session( [req.user] ).then( ( obj ) => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })


        let updatedInfo = req.body //req.body is this.state coming from axios call on front end
            , updatedUser = Object.assign( {}, user, updatedInfo )

        db.update_user( [...updatedUser] ).then( obj => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })

        !user.id && (status = 404)
        res.status( status ).send( user )
    }
}