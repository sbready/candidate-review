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
    political_affiliation_id INTEGER references political_affiliations(id),
    facebook TEXT,
    twitter TEXT,
    instagram TEXT, 
    official_location TEXT, 
    phone TEXT, 
    policy TEXT,
    campaign_email TEXT,
    candidate_type_id INTEGER references election_type(id)
    federal_election_type_id INTEGER references federal_election_type(id)
    state_election_type_id INTEGER references state_election_type(id)
);

CREATE TABLE election_type (
    id serial primary key
    election_type TEXT
)
INSERT INTO election_type (id, election_type) values
(default, 'federal'), (default, 'state');

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
    stateid TEXT references states(state_abbrev)
);

CREATE TABLE photos (
    id serial primary key,
    user_id INTEGER references users(id),
    image_url TEXT
);

CREATE TABLE federal_election_type (
    id serial primary key,
    federal_election_type TEXT
);
INSERT INTO federal_election_type (id, federal_election_type) values
(default, 'Senate'), (default, 'House of Representatives');

CREATE TABLE state_election_type (
    id serial primary key,
    state_election_type TEXT
);
INSERT INTO state_election_type (id, state_election_type) values
(default, 'Governor'), (default, 'State Senate'), (default, 'State House of Representatives');

