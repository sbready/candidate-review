
update users
set name_first = $2, name_last = $3, email = $4, age = $5, gender = $6, user_type_id = $7, streetAddress = $8, streetAddress2 = $9, city_id = $10, state_id = $11, zip = $12, auth_id = $13
where id = $1

returning *;