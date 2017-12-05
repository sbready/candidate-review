insert into users( user_name, email, img, auth_id ) /* params will change based on finished schema*/
    values($1, $2, $3, $4)
    returning*;