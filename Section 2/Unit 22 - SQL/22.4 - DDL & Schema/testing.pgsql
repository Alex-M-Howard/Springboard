-- CREATE TABLE posts (
--     title TEXT,
--     username TEXT,
--     link TEXT
-- )
DROP DATABASE testing;
CREATE DATABASE testing;
\c testing;

CREATE TABLE subreddits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER DEFAULT 1,
    is_private BOOLEAN DEFAULT false
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);