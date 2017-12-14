update candidates
set  
    biography = $2, 
    website = $3, 
    political_affiliation_id = $4, 
    facebook = $5, 
    twitter = $6, 
    instagram = $7, 
    official_location = $8, 
    phone = $9, 
    policy = $10,
    campaign_email = $11, 
    candidate_type_id = $12, 
    federal_election_type_id = $13, 
    state_election_type_id = $14
where candidate_id = $1

returning *;