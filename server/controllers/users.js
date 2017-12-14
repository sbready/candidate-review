module.exports = {

    update_user ( req, res ) {
        // console.log('made it to user controller function', req.body)
        let user,
            status = 200

        const db = req.app.get('db')
        
        db.find_user_by_session( [req.user.id] ).then( ( obj ) => {
            // console.log(obj)
            user = obj[0]
            let updatedInfo = req.body //req.body is this.state coming from axios call on front end
            , updatedUser = Object.assign( {}, user, updatedInfo )

            
            db.find_state_id( updatedUser.state ).then( (obj) => {
                // console.log(obj)
                updatedUser.state_id = obj[0] ? obj[0].id : null

                db.find_city_id( [updatedUser.city, updatedUser.state] ).then( (obj) => {
                    updatedUser.city_id = obj[0] ? obj[0].id : null
                    updatedUser.zip = updatedUser.zip || null

                    // console.log(updatedUser)
                    db.update_user( [...Object.values(updatedUser)] ).then( obj => {
                        user = obj[0]
                        // console.log(user)
                        !user.id && (status = 404)
                        res.status( status ).send( user )
                    }).catch( err => console.log(err) )
                })
            }) 
        }).catch( err => console.log(err) )   
    },

    check_new_user ( req, res ) {
        let response = req.user.state_id

        !response ? res.redirect('http://localhost:3000/#/addinfocatch')
                    :
                    res.redirect('http://localhost:3000/#/') 
    }




}