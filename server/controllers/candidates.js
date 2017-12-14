module.exports = {

    create_candidate ( req, res ) {
        console.log('made it to candidate create controller')
        console.log(req.body)
        let user,
            candidate, 
            status = 200,
            { 
                biography, 
                website, 
                political_affiliation, 
                facebook, 
                twitter, 
                instagram, 
                official_location, 
                phone, 
                policy, 
                campaign_email, 
                election_type, 
                federal_election_type,
                state_election_type
            } = req.body // req.body comes from axios.post( url, body )
            
            const db = req.app.get('db')
            
        db.find_user_by_session( [req.user.id] ).then( ( obj ) => {
                
            if ( obj[0].user_type_id !== 2 ) {

                db.create_candidate( [ req.user.id, biography, website, political_affiliation_id, facebook, twitter, instagram, official_location, phone, policy, campaign_email, election_type, federal_election_type, state_election_type] ).then( ( candidateData ) => {
                    candidate = candidateData[0]
                    !candidate && ( status = 404 )
                    res.status( status ).send( candidate )
                })
            } else {
                res.status( 404 ).send( 'Candidate Already Created' )
        }}
    )},

    update_candidate ( req, res ) {
        console.log('made it to candidate update controller')
        let user,
            status = 200
        
        const db = req.app.get('db')

        db.find_user_by_session( [req.user] ).then( ( obj ) => {
            user = obj[0]
            let updatedInfo = req.body //req.body is this.state coming from axios call on front end axios.put(url, body)
            , updatedCandidate = Object.assign( {}, user, updatedInfo )

        console.log(updatedCandidate)

        db.update_candidate( [...Object.values(updatedCandidate)] ).then( obj => {
            user = obj[0]
            !user.id && (status = 404)
            res.status( status ).send( user )
        }).catch( err => console.log( err ) )
        }).catch( err => console.log( err ) )
    }






}