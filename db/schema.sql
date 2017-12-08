CREATE TABLE users (
    id serial primary key,
    name_first TEXT,
    name_last TEXT,
    email TEXT,
    birthday TEXT,
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
    id serial primary key, 
    user_type TEXT
);
INSERT INTO types (id, user_type) values
(default, 'user'), (default, 'candidate'), (default, 'admin');


CREATE TABLE candidates (
    id serial primary key,
    candidate_id INTEGER references users(id),
    biography TEXT,
    website TEXT,
    title TEXT,
    political_affiliation_id INTEGER references political_affiliations(id),
    facebook TEXT,
    twitter TEXT,
    instagram TEXT, 
    official_location TEXT, 
    phone TEXT, 
    policy TEXT
);

CREATE TABLE political_affiliations (
    id serial primary key, 
    political_affiliation TEXT
);
INSERT INTO political_affiliations (id, political_affiliation) values(default, 'Republican'), (default, 'Democrat'), (default, 'Libertarian'), (default, 'Constitution'), (default, 'Green'), (default, 'Independent');

CREATE TABLE states (
    id serial primary key,
    state_name TEXT,
    state_abbrev TEXT
);

CREATE TABLE cities (
    id serial primary key,
    city_name TEXT,
    county_name TEXT,
    stateid INTEGER references states(state_abbrev)
);

CREATE TABLE photos (
    id serial primary key,
    user_id INTEGER references users(id),
    image_url TEXT
);

