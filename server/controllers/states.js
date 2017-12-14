module.exports = {

    state_names( req, res ) {
        let state,
            status = 200

        const db = req.app.get('db')
        
        db.state_names().then( ( obj ) => {
            state = obj
            res.status( status ).send( state )
        }).catch( err => {
            state = err
            status = 500
            res.status( status ).send( state )
        })

    },

    state_abbrev( req, res ) {
        let state_abbrev,
            status = 200

        const db = req.app.get('db')
        
        db.state_abbrev().then( ( obj ) => {
            state_abbrev = obj
            res.status( status ).send( state_abbrev )
        }).catch( err => {
            state_abbrev = err
            status = 500
            res.status( status ).send( state_abbrev )
        })
    }



    
}