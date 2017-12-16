select * from users
join candidates on candidates.candidate_id = users.id

where users.id = $1

