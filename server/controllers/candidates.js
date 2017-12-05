module.exports = {

    create_candidate ( req, res ) {
        let candidate, 
            status = 200
        
        db.find_user_by_session( req.user.id ).then( arr => {
            let { candidate_id, biography, website, title, political_affiliation_id, facebook, twitter, instagram, official_location, phone } = req.body // req.body comes from axios.post( url, body )

            if ( arr[0].user_type !== "Candidate" ) {

                db.create_candidate( [ candidate_id, biography, website, title, political_affiliation_id, facebook, twitter, instagram, official_location, phone ] ).then( ( candidateData ) => {
                    candidate = candidateData[0]
                    !candidate && ( status = 404 )
                    res.status( status ).send( candidate )
                })
            }}
        )},

    update_candidate ( req, res ) {
        let user,
            status = 200
        
        db.find_user_by_session( [req.user] ).then( ( obj ) => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })


        let updatedInfo = req.body //req.body is this.state coming from axios call on front end axios.put(url, body)
            , updatedCandidate = Object.assign( {}, user, updatedInfo )

        db.update_candidate( [...updatedCandidate] ).then( obj => {
            user = obj.data[0]
        }).catch( err => {
            user = err
        })

        !user.id && (status = 404)
        res.status( status ).send( user )
    }

}