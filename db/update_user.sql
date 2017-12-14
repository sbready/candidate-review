
update users
set name_first = $2, name_last = $3, email = $4, birthday = $5, gender = $6, user_type_id = 1, streetAddress = $8, streetAddress2 = $9, city_id = $10, state_id = $11, zip = $12, auth_id = $13
where id = $1

returning *;