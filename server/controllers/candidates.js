module.exports = {

    create_candidate ( req, res ) {
        console.log('made it to candidate create controller')
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

                db.create_candidate( [ req.user.id, biography, website, political_affiliation, facebook, twitter, instagram, official_location, phone, policy, campaign_email, election_type, federal_election_type, state_election_type] ).then( ( candidateData ) => {
                    res.status( status ).send( candidateData )
                })
            } else {
                res.status( 404 ).send( 'Candidate Already Created' )
        }}
    )},

    update_candidate ( req, res ) {
        console.log('made it to candidate update controller')
        let user,
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
            } = req.body
        
        const db = req.app.get('db')
        db.find_user_by_session( [req.user.id] ).then( ( obj ) => {
            user = obj[0]
            let updatedInfo = req.body //req.body is this.state coming from axios call on front end axios.put(url, body)
            , updatedCandidate = Object.assign( {}, updatedInfo )

        db.update_candidate( [req.user.id, ...Object.values(updatedCandidate)] ).then( obj => {
            res.status( status ).send( user )
        }).catch( err => console.log( err ) )
        }).catch( err => console.log( err ) )
    },


    find_candidate_pop ( req, res ) {
        console.log('made it to find candidate pop controller')
        let user,
            status = 200

        const db = req.app.get('db')

        db.find_state_id2( [req.params.state] ).then( ( state ) => {

            db.find_candidate_pop( [req.params.election_type, req.params.race_type, state[0].id] ).then( ( popArray ) => {
    
                res.status( status ).send( popArray )
            }).catch( err => console.log( err ) )
        })
       
    },

    // fetch_all_data ( req, res ) {
    //     console.log('made it to the fetch all controller')
    //     let status = 200

    //     const db = req.app.get('db')

    //     db.user_candidate_join( [req.params.id] ).then( ( userData ) => {
    //         res.status( status ).send( userData )
    //     })
    // }

    fetch_all_data ( req, res ) {
        console.log('made it to the fetch all controller')
        let status = 200

        const db = req.app.get('db')
        let promises = [
            db.user_candidate_join( [req.params.id] ).then( ( userData ) => userData),
            db.state_abbrev_byUser().then( ( stateData ) => stateData),
            db.political_affiliation().then( ( affiliationData ) => affiliationData),
            db.photos()
        ]
        Promise.all(promises).then( response => {
            // console.log('all response data', response[0], '\n\n', response[1], '\n\n', response[2])
            res.send(
                [
                    Object.assign({}, response[0][0], {
                        state_abbrev: response[1].filter( x => x.id === response[0][0].state_id)[0].state_abbrev,
                        political_affiliation: response[2].filter( x => {console.log('politics!', x, response[0][0].political_affiliation_id); return x.id === response[0][0].political_affiliation_id})[0].political_affiliation,
                        image_url: response[3].filter( x => {console.log('pixorz', x, response[0][0].id); x.user_id === response[0][0].id} )
                    })
                ]
            )
        })
    }
}