insert into users( name_first, name_last, email, gender, user_type_id, auth_id )
    values($1, $2, $3, $4, 1, $5)
    returning*;
