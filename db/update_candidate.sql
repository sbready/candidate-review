update candidate
set candidate_id = $2, biography = $3, website = $4, title = $5, political_affiliation_id = $6, facebook = $7, twitter = $8, instagram = $9, official_location = $10, phone = $11
where id = $1