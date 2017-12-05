CREATE TABLE users (
    id serial primary key INTEGER,
    name_first TEXT,
    name_last TEXT,
    email TEXT,
    age INTEGER,
    gender TEXT,
    user_type_id INTEGER references types(id),
    streetAddress TEXT, 
    streetAddress2 TEXT,
    city_id INTEGER references cities(id),
    state_id INTEGER references states(id),
    zip INTEGER,
    auth_id TEXT
);

CREATE TABLE types (
    id serial primary key INTEGER, 
    user_type TEXT
)
INSERT INTO types (user_type) values( "user", "candidate", "admin");


CREATE TABLE candidates (
    id serial primary key INTEGER,
    candidate_id INTEGER references users(id),
    biography TEXT,
    website TEXT,
    title TEXT,
    political_affiliation_id INTEGER references political_affiliations(id),
    facebook TEXT,
    twitter TEXT,
    instagram TEXT, 
    official_location TEXT, 
    phone TEXT
);

CREATE TABLE political_affiliations (
    id serial primary key INTEGER, 
    political_affiliation TEXT
)
INSERT INTO political_affiliations (political_affiliation) values( "Republican", "Democrat", "Libertarian", "Constitution", "Green", "Independent" )

CREATE TABLE states (
    id serial primary key INTEGER,
    state_name TEXT,
    state_abbrev TEXT
);

CREATE TABLE cities (
    id serial primary key INTEGER,
    city_name TEXT,
    county_name TEXT,
    stateid INTEGER references states(id)
):

CREATE TABLE photos (
    id serial primary key INTEGER,
    user_id INTEGER references users(id)
    image_url TEXT
);

