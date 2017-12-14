insert into candidates( candidate_id, biography, website, political_affiliation_id, facebook, twitter, instagram, official_location, phone, policy, campaign_email, candidate_type_id, federal_election_type_id, state_election_type_id ) 
    values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    returning *;

update users
set user_type_id = 2
where user_id = $1;

