select users.name_first, users.name_last, candidates.political_affiliation_id, users.id from users 
join candidates on candidates.candidate_id = users.id   

where candidates.candidate_type_id = $1
and users.state_id = $3
and ( ($1 = 1 and candidates.federal_election_type_id = $2 ) or ( $1 = 2 and candidates.state_election_type_id = $2)) 
