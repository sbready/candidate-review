update candidates
set candidate_id = $2, biography = $3, website = $4, political_affiliation_id = $5, facebook = $6, twitter = $7, instagram = $8, official_location = $9, phone = $10, campaign_email = $11, election_type_id = $12
where id = $1