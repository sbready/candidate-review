select users.name_first, users.name_last, candidates.political_affiliation_id from users 
join candidates on candidates.candidate_id = users.id   

where candidates.candidate_type_id = $1
and (if $1 = 1 then candidates.federal_election_type_id = $2 else candidataes.state_election_type_id = $2)
and users.state_id = $3