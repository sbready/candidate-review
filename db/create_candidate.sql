insert into candidates( candidate_id, biography, website, title, political_affiliation_id, facebook, twitter, instagram, official_location, phone ) 
    values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    returning*;

update users
set user_type_id = 2
where user_id = $1;

