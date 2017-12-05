CREATE TABLE users (
    id serial primary key INTEGER,
    name_first TEXT,
    name_last TEXT,
    age INTEGER,
    gender TEXT,
    user_type TEXT,
    streetAddress TEXT, 
    city TEXT,
    stateName TEXT,
    zip INTEGER
);

CREATE TABLE candidates (
    id serial primary key INTEGER,
    candidate_id INTEGER,
    biography TEXT,
    website TEXT,
    title TEXT,
    facebook TEXT,
    twitter TEXT,
    instagram TEXT, 
    email TEXT,
    official_location TEXT, 
    phone text
);

CREATE TABLE states (
    id serial primary key INTEGER,
    state_id INTEGER,
    state_name TEXT,
    state_abbrev TEXT
);

CREATE TABLE cities (
    id serial primary key INTEGER,
    city_name TEXT,
    county_name TEXT,
    state_name TEXT
):

CREATE TABLE photos (
    id serial primary key INTEGER,
    user_id INTEGER
    image_url TEXT
);

