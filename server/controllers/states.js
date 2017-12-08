module.exports = {

    state_names( req, res ) {
        let state,
        status = 200
        
        req.app.get('db').state_names().then( ( obj ) => {
            state = obj
            res.status( status ).send( state )
        }).catch( err => {
            state = err
            status = 500
            res.status( status ).send( state )
        })

    }
}