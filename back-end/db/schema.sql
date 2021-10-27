DROP DATABASE IF EXISTS connect;
CREATE DATABASE connect;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL ,
    linkedin TEXT,
    twitter TEXT,
    email TEXT,
    display_name TEXT, 
    photo_url TEXT,
    phone_number NUMERIC,
    uid TEXT NOT NULL PRIMARY KEY
);


DROP TABLE IF EXISTS connections CASCADE;
CREATE TABLE connections(
    id SERIAL PRIMARY KEY,
    user1_id TEXT REFERENCES users (uid),
    user2_id TEXT REFERENCES users (uid)
);
