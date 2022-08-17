-- Introduction to Databases
-- Goals
-- Define what a database is & give examples
-- Describe and visualize a relational database
-- Introduce PostgreSQL
-- Create, list, and drop databases in PostgreSQL
-- Databases
-- Database
-- A database is a collection of data organized to be efficiently stored, accessed, and managed.

-- People will interchangeably use the term “database” to refer to database server software, the data records themselves, or the physical machine that is holding the data.

-- Databases in the Web Stack
-- A typical web stack is a client, server, and database.

-- Client (Frontend)

-- _images/client.svg
-- HTML/JS/CSS
-- jQuery
-- React
-- Angular
-- Vue
-- … and more!
 
-- Server (Backend)

-- _images/server.svg
-- Flask
-- Django
-- Ruby on Rails
-- Node.js/Express.js
-- Java Spring
-- … and more!
 
-- Database (Backend)

-- _images/database.svg
-- PostgreSQL
-- MySQL
-- SQLite
-- MongoDB
-- Cassandra
-- … and more!
-- Relational Databases
-- Model data as rows and columns of tabular data (like spreadsheets)
-- Key terms include:
-- RDBMS - Relational Database Management System, e.g. PostgreSQL, MySQL, Oracle
-- schema - a logical representation of a database including its tables
-- SQL - Structured Query Language, a human-readable language for querying
-- table (aka “relation”) - basically a spreadsheet, a set of columns and rows
-- column - a table attribute, e.g. “first_name”, “last_name”, or “company”
-- row - a table record with values for set for columns, e.g. “Matt, Lane, Rithm”
-- Nearly all relational DBs use SQL to modify/query data
-- How Do I Pronounce “SQL”?

-- Both “sequel” and “S-Q-L” are valid pronunciations.

-- Visualizing Relational Databases
-- Example 1: A Books Table
-- id	title	author	page_count
-- 1	The Design of Everyday Things	Don Norman	368
-- 2	Flatland	Edwin Abbott	96
-- 3	Power-Up: Unlocking Hidden Math in Video Games	Matt Lane	264
-- Example 2: A Movies Table
-- id	title	release_year	runtime	rating
-- 1	Star Wars: The Force Awakens	2015	136	PG-13
-- 2	Avatar	2009	160	PG-13
-- 3	Titanic	1997	194	PG-13
-- PostgreSQL
-- PostgreSQL is the Open Source RDBMS we’ll use here

-- Powerful
-- Popular
-- Follows the SQL standard closely
-- On its website, PosgreSQL describes itself as an ORDBMS, that is, an object relational database management system. However the distinction between these two isn’t important for us. If you’re curious, you can read about the difference.

-- Managing Databases
-- PostgreSQL Shell
-- PostgreSQL includes psql, a terminal-based program for issuing database commands.

-- $ psql my_database_name
-- psql (10.5)
-- Type "help" for help.

-- my_database_name=#
-- Create Databases
-- Each project will have a separate database

-- Creating a database:

-- $ createdb my_database_name
-- Good database names are short and straightforward, and in lower_snake_case.

-- Where Is That Database?
-- The database is not a file in your current directory

-- It’s a bunch of files/folders elsewhere on your computer

-- These aren’t human-readable (they’re optimized for speed!)

-- Saving your project in Git won’t save your database!

-- Seeding a Database
-- You can feed .sql scripts into the program psql:

-- $ psql < my_database.sql
-- This is often used to seed an empty database by building tables, filling in rows, or both.

-- Backing Up a Database
-- You can also make a backup of your database by “dumping it” to a file:

-- $ pg_dump -C -c -O my_database_name > backup.sql
-- This makes a file in the current directory, backup.sql

-- It contains all of the commands necessary to re-create the current database when seeding.

-- Dropping Databases
-- A database that is “dropped” is completely deleted (schema & data).

-- $ dropdb my_database_name
-- Common Commands
-- \l — List all databases
-- \c DB_NAME — connect to DB_NAME
-- \dt —- List all tables (in current db)
-- \d TABLE_NAME — Get details about TABLE_NAME (in current db)
-- \q — Quit psql (can also type <Control-D>)
-- SQL
-- SELECT * FROM people WHERE age > 21 AND id IS NOT NULL;

-- SQL (Structured Query Language) is a human-readable language for relational databases.
-- Strings in SQL:
-- case-sensitive: 'Bob' not same as 'bob'
-- single-quotes, not double, around strings.
-- Commands end with a semicolon.
-- SQL keywords are conventionally written in ALL IN CAPS but not required.
-- SELECT price FROM books same as select price from books
-- Types of SQL Statements
-- DDL: Data Definition Language
-- The commands to create, modify, or delete tables, columns & databases.

-- Examples: CREATE, ALTER, DROP

-- DML: Data Manipulation Language
-- The commands to create, read, modify, or delete rows.

-- Examples: SELECT, INSERT, UPDATE, DELETE





-- ########### QUERYING ###########
-- Intro
-- Goals
-- Learn core querying
-- Learn insertion, updating, and deletion
-- SQL DML
-- Data Manipulation Language
-- DML is a subset of SQL that involves querying and manipulating records in existing tables.

-- Most of the DML you’ll be doing will be related to CRUD operations on rows.

-- What’s CRUD?
-- Letter	Verb	SQL Commands
-- C	Create	INSERT INTO
-- R	Read	SELECT … FROM
-- U	Update	UPDATE … SET
-- D	Delete	DELETE FROM
-- SELECT
-- SELECT is the most flexible and powerful command in SQL

-- It selects rows (included summary data, roll-up data, etc) from table(s)

-- SELECT statements have subclauses, which are performed in this order:

-- #	Clause	Purpose	Required?
-- 1	FROM	Select and join together tables where data is	No
-- 2	WHERE	Decide which rows to use	No
-- 3	GROUP BY	Place rows into groups	No
-- 4	SELECT	Determine values of result	Yes
-- 5	HAVING	Determine which grouped results to keep	No
-- 6	ORDER BY	Sort output data	No
-- 7	LIMIT	Limit output to n rows	No
-- 8	OFFSET	Skip n rows at start of output	No
-- FROM
-- Determine which table(s) to use to get data:

-- all info from books table
-- SELECT *
--   FROM books;
-- You can get data from more than one table by “joining” them — we’ll discuss this later

-- WHERE
-- Filter which rows get included:

-- only books with price over $10
-- SELECT *
--   FROM books
--   WHERE price > 10;
-- GROUP BY
-- Reduce the amount of rows returned by grouping rows together:

-- group by author, show name & # books
-- SELECT author, COUNT(*)
--   FROM books
--   GROUP BY author;
-- SELECT
-- Only at this point do the SELECT values get calculated:

-- return only author name & count-of-books fields
-- SELECT author, COUNT(*)
--   FROM books
--   GROUP BY author;
-- HAVING
-- Decide which group(s), if grouped, to keep:

-- only show groups with more than 2 books
-- SELECT author, COUNT(*)
--   FROM books
--   GROUP BY author
--   HAVING COUNT(*) > 2;
-- ORDER BY
-- Arrange output in order (sort):

-- order results by author name (A → Z)
-- SELECT title, author, price
--   FROM books
--   ORDER BY author;
-- LIMIT
-- Only show n number of rows:

-- only show first 5 rows
-- SELECT title, author, price
--   FROM books
--   ORDER BY price
--   LIMIT 5;
-- OFFSET
-- Skip n number of rows. Used in combination with LIMIT to paginate results.

-- skip first row
-- SELECT title, author, price
--   FROM books
--   ORDER BY price
--   OFFSET 1;
-- Some Example SELECTs
-- -- Select all rows and all columns from the books table
-- SELECT * FROM books;

-- -- Select all rows and two columns from the books table
-- SELECT title, author FROM books;

-- -- Select ten rows and two columns from the books table
-- SELECT title, author FROM books LIMIT 10;

-- -- Select all columns from short books
-- SELECT * FROM books WHERE page_count < 150;
-- SQL Operators
-- Operators are used to build more complicated queries They involve reserved SQL keywords

-- These include IN, NOT IN, BETWEEN, AND, and OR

-- An example
-- -- basic WHERE clause
-- SELECT title FROM books WHERE author = 'J. K. Rowling';
-- -- basic IN clause
-- SELECT * FROM books WHERE id IN (1, 12, 30);
-- -- grab books of moderate length
-- SELECT title, author
--   FROM books
--   WHERE page_count BETWEEN 300 AND 500;
-- Another example
-- -- short, cheap books
-- SELECT title, author
--   FROM books
--   WHERE price < 10
--     AND page_count < 150;
-- -- new books or expensive books
-- SELECT title, author, publication_date, price
--   FROM books
--   WHERE publication_date > '01-01-2017'
--     OR price > 100;
-- -- books ordered by price
-- SELECT title, price
--   FROM books
--   ORDER BY price;
-- SQL Aggregates
-- Aggregates are used to combine multiple rows together to extract data

-- Common aggregate functions include COUNT, AVG, SUM, MIN, and MAX

-- An Example
-- -- count all books
-- SELECT COUNT(*) FROM books;
-- -- count all Kyle Simpson books
-- SELECT COUNT(*) FROM books WHERE author = 'Kyle Simpson';
-- -- find page count for longest book
-- SELECT MAX(page_count) FROM books;
-- -- find cheapest price
-- SELECT MIN(price) FROM books;
-- -- find total number of pages
-- SELECT SUM(page_count) FROM books;
-- -- find average price
-- SELECT AVG(price) FROM books;
-- GROUP BY
-- The GROUP BY and HAVING clauses are often used with aggregate functions

-- An example
-- -- how many books did each author write?
-- SELECT author, COUNT(*)
--   FROM books
--   GROUP BY author;
-- -- let's only consider authors with at least 2 books
-- SELECT author, COUNT(*)
--   FROM books
--   GROUP BY author
--   HAVING COUNT(*) > 1;
-- -- let's order our authors from most to least prolific
-- SELECT author, SUM(page_count) AS total
--   FROM books
--   GROUP BY author
--   ORDER BY total DESC;
-- Modifying Data
-- Creating data with INSERT
-- -- Inserting a new book with title and author
-- INSERT INTO books (title, author)
--   VALUES ('The Iliad', 'Homer');
-- -- Inserting several books with titles only
-- INSERT INTO books (title) VALUES
--   ('War and Peace'),
--   ('Emma'),
--   ('Treasure Island');
-- INSERT via SELECT

-- You can combine INSERT and SELECT to copy data from another table.

-- INSERT INTO books (title, author)
--   SELECT title, author
--     FROM some_other_table
--     WHERE price < 10;
-- Updating data with UPDATE
-- -- Matt is a prolific writer
-- UPDATE books SET author = 'Matt';
-- -- JK, not that prolific!
-- UPDATE books SET author = 'Jane Austen' WHERE title = 'Emma';
-- Deleting data with DELETE
-- -- delete Emma
-- DELETE FROM books WHERE title = 'Emma';
-- -- delete long books
-- DELETE FROM books WHERE num_pages > 200;
-- -- delete all books!
-- DELETE FROM books;


-- -- Relationships --
-- Data Example: Movies
-- id	title	studio
-- 1	Star Wars: The Force Awakens	Walt Disney Studios Motion Pictures
-- 2	Avatar	20th Century Fox
-- 3	Black Panther	Walt Disney Studios Motion Pictures
-- 4	Jurassic World	Universal Pictures
-- 5	Marvel’s The Avengers	Walt Disney Studios Motion Pictures
-- So much duplication!
-- What if we want other info about studios?
-- A Better Way
-- id	title	studio_id
-- 1	Star Wars: The Force Awakens	1
-- 2	Avatar	2
-- 3	Black Panther	1
-- 4	Jurassic World	3
-- 5	Marvel’s The Avengers	1
-- id	name	founded_in
-- 1	Walt Disney Studios Motion Pictures	1953-06-23
-- 2	20th Century Fox	1935-05-31
-- 3	Universal Pictures	1912-04-30
-- One-to-Many (1:M)
-- Our studio_id column provides us with a reference to the corresponding record in the studios table by its primary key.
-- Typically this is implemented with a foreign key constraint, which makes sure every studio_id exists somewhere in the studios table.
-- One-to-Many (1:M) in the sense that one studio has many movies, but each movie has one studio.
-- In this example, we can say movies is the referencing table, and studios is the referenced table.
-- The Foreign Key Constraint
-- Setting up a foreign key constraint with DDL:

-- CREATE TABLE studios
--   (id SERIAL PRIMARY KEY,
--    name TEXT,
--    founded_in TEXT);

-- CREATE TABLE movies
--   (id SERIAL PRIMARY KEY,
--    title TEXT,
--    studio_id INTEGER REFERENCES studios (id));
-- Constraints are specified by the DDL, but affect DML query behavior.

-- INSERT INTO studios (name, founded_in) VALUES
--   ('Walt Disney Studios Motion Pictures', '1953-06-23'),
--   ('20th Century Fox', '1935-05-31'),
--   ('Universal Pictures', '1912-04-30');
-- -- reference Disney's primary key
-- INSERT INTO movies (title, studio_id)
--   VALUES ('Star Wars: The Force Awakens', 1);
-- -- Throws an Foreign Key Constraint Error...
-- --  There is no studio with a primary key of 1000
-- INSERT INTO movies (title, studio_id)
--   VALUES ('Black Panther', 1000);
-- Deleting Data Examples
-- When trying to delete a studio…

-- We cannot delete it outright while movies still reference it.

-- DELETE FROM studios WHERE id=1;  -- error
-- Option 1: Clear out the studio_id columns of movies that reference it.

-- UPDATE movies SET studio_id=NULL WHERE studio_id=1;
-- DELETE FROM studios WHERE id=1;
-- Option 2: Delete the movies associated with that studio first.

-- DELETE FROM movies WHERE studio_id=1;
-- DELETE FROM studios WHERE id=1;
-- What are the trade-offs? We will revisit this when we look at how to implement each of the two options above in the DDL.

-- Joining Tables
-- JOIN Operation
-- The JOIN operation allows us to create a table in memory by combining information from different tables
-- Data from tables is matched according to a join condition
-- Most commonly, the join condition involves comparing a foreign key from one table and a primary key in another table
-- Setting Up the Data
-- CREATE TABLE studios
--   (id SERIAL PRIMARY KEY,
--    name TEXT,
--    founded_in TEXT);

-- CREATE TABLE movies
--   (id SERIAL PRIMARY KEY,
--    title TEXT,
--    release_year INTEGER,
--    runtime INTEGER,
--    rating TEXT,
--    studio_id INTEGER REFERENCES studios (id));
-- INSERT INTO studios
--   (name, founded_in)
-- VALUES
--   ('Walt Disney Studios Motion Pictures', '1953-06-23'),
--   ('20th Century Fox', '1935-05-31'),
--   ('Universal Pictures', '1912-04-30');
-- INSERT INTO movies
--   (title, release_year, runtime, rating, studio_id)
-- VALUES
--   ('Star Wars: The Force Awakens', 2015, 136, 'PG-13', 1),
--   ('Avatar', 2009, 160, 'PG-13', 2),
--   ('Black Panther', 2018, 140, 'PG-13', 1),
--   ('Jurassic World', 2015, 124, 'PG-13', 3),
--   ('Marvel’s The Avengers', 2012, 142, 'PG-13', 1);
-- Our First Join
-- SELECT title, name
--   FROM movies
--   JOIN studios
--     ON movies.studio_id = studios.id;
-- SELECT title, name
--   FROM movies
--   INNER JOIN studios
--     ON movies.studio_id = studios.id;
-- JOIN and INNER JOIN are the same, the INNER keyword is optional.

-- Types of Joins
-- There are two primary types of joins: inner and outer.

-- Inner

-- Only the rows that match the condition in both tables.

-- Outer

-- Left - All of the rows from the first table (left), combined with matching rows from the second table (right).

-- Right - The matching rows from the first table (left), combined with all the rows from the second table (right).

-- Full - All the rows from both tables (left and right).

-- Join Diagrams
-- _images/sql-joins.png
-- Joins in Practice
-- Practically speaking, you’ll mostly be using Inner Joins

-- Outer joins can be helpful when trying to find rows in one table with no match in another table (e.g. an independent movie with no studio)

-- Outer join example:

-- -- this query will include the indie movie
-- SELECT name FROM movies
--   LEFT JOIN studios
--     ON movies.studio_id = studios.id;
-- Many-to-Many
-- Movies Revisited
-- We’ve seen an example of a one-to-many relationship: one studio has many movies, and one movie belongs to one studio.
-- But not every relationship can be expressed in this way…
-- Consider actors: one movie has many different actors, but each actor also has roles in many different movies!
-- This is an example of a many-to-many relationship.
-- A many-to-many is just two one-to-manys back-to-back!
-- Setting Up Actors and Roles
-- -- We've already created the movies database
-- CREATE TABLE actors
--   (id SERIAL PRIMARY KEY,
--    first_name TEXT,
--    last_name TEXT,
--    birth_date TEXT);

-- CREATE TABLE roles
--   (id SERIAL PRIMARY KEY,
--    movie_id INTEGER REFERENCES movies (id),
--    actor_id INTEGER REFERENCES actors (id));
-- INSERT INTO actors
--   (first_name, last_name, birth_date)
-- VALUES
--   ('Scarlett', 'Johansson', '1984-11-22'),
--   ('Samuel L', 'Jackson', '1948-12-21'),
--   ('Kristen', 'Wiig', '1973-08-22');
-- INSERT INTO roles
--   (movie_id, actor_id)
-- VALUES
--   (1, 1),
--   (1, 2),
--   (3, 2);
-- Many-to-Many (M:N)
-- Let’s see what the movies, actors and roles tables look like!

-- id	title	release_year	runtime	rating
-- 1	Marvel’s The Avengers	2012	142	PG-13
-- 2	Avatar	2009	160	PG-13
-- 3	Star Wars: Episode I	1999	133	PG
-- id	first_name	last_name	birth_date
-- 1	Scarlett	Johansson	1984-11-22
-- 2	Samuel L	Jackson	1948-12-21
-- 3	Kristen	Wiig	1973-08-22
-- id	movie_id	actor_id
-- 1	1	1
-- 2	1	2
-- 3	3	2
-- Visualizing the Relationships
-- Check out this color-coded spreadsheet.

-- Join Tables
-- The roles table in our current schema is an example of a join table (aka an associative table aka a mapping table).
-- A join table serves as a way to connect two tables in a many-to-many relationship.
-- The join table consists of, at a minimum, two foreign key columns to the two other tables in the relationship.
-- It is completely valid to put other data in the join table (e.g. how much was an actor paid for the role).
-- Sometimes the join table has a nice name (when it has meaning on its own, e.g. roles), but you can also just call it table1_table2.
-- Querying a Many-to-Many
-- Connecting movies and actors:

-- SELECT * FROM movies
--   JOIN roles
--     ON movies.id = roles.movie_id
--   JOIN actors
--     ON roles.actor_id = actors.id;
-- Selecting certain columns, using table alias shorthand:

-- SELECT m.title, a.first_name, a.last_name
--   FROM movies m
--   JOIN roles r
--     ON m.id = r.movie_id
--   JOIN actors a
--     ON r.actor_id = a.id;
-- Get all the id, first name and last name of the actors that have been in more than one movie

-- SELECT a.id, a.first_name, a.last_name
--  FROM movies m
--  JOIN roles r
--    ON m.id = r.movie_id
--  JOIN actors a
--    ON r.actor_id = a.id
--  GROUP BY a.id, a.first_name, a.last_name
--  HAVING count(*) >= 2;
-- Your Turn!

--SCHEMA

-- DDL Basics
-- Creating and Dropping Databases
-- CREATE DATABASE yet_another_db;

-- DROP DATABASE yet_another_db;
-- Same as shell commands createdb and dropdb

-- Creating Tables
-- jane=# CREATE DATABASE library;
-- CREATE DATABASE

-- jane=# \c library
-- You are now connected to database "library" as user "jane".
-- library=#
-- CREATE TABLE books (
--   id SERIAL PRIMARY KEY,
--   title TEXT,
--   author TEXT,
--   price FLOAT,
--   page_count INTEGER,
--   publisher TEXT,
--   publication_date DATE
-- );
-- Inspecting Tables in PostgreSQL
-- Listing the tables in the database

-- library=# \dt
-- Listing the column names and types in a specific table

-- library=# \d+ books
-- Dropping Tables
-- DROP TABLE users;
-- Column Data Types
-- Integer
-- Integer numbers
-- Float
-- Floating-point numbers (you can specify the precision)
-- Text
-- Text Strings
-- Varchar
-- Text Strings, but limited to a certain size
-- Boolean
-- True or False
-- Date
-- Date (without time)
-- Timestamp
-- Date and time
-- Serial
-- Auto-incrementing numbers (used for primary keys)
-- Other Types

-- There are lots of other types, including specialized, less-common types for fixed-precision math (NUMERIC or DECIMAL), handling geospatial information, currency, and more!

-- NULL
-- NULL is a special value in SQL for “unknown”.

-- It’s not the same thing as 0 or an empty string!

-- NULL values are ok when you really might have missing/unknown data

-- But generally, they’re a pain, so it can be a good idea to make fields not nullable

-- Primary Keys
-- Every table should have a “primary key”, a unique way to identify rows

-- Primary keys must be:

-- Unique
-- Not Null
-- Primary keys should be:

-- Unchanging (it’s a pain when primary keys change)
-- Constraints
-- Constraints are a basic form of validation. The database can prevent basic types of unintended behavior.

-- Primary Key (every table must have a unique identifier)
-- Unique (prevent duplicates in the column)
-- Not Null (prevent null in the column)
-- Check (do a logical condition before inserting / updating)
-- Foreign Key (column values must reference values in another table)
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     phone_number TEXT UNIQUE,
--     password TEXT NOT NULL,
--     account_balance FLOAT CHECK (account_balance > 0)
-- );
-- Column Manipulation
-- Adding / Removing / Renaming columns

-- ALTER TABLE books ADD COLUMN in_paperback BOOLEAN;

-- ALTER TABLE books DROP COLUMN in_paperback;

-- ALTER TABLE books RENAME COLUMN page_count TO num_pages;
-- Structuring Relational Data
-- Modeling Our Movies Database
-- From our joins exercise involving movies, studios, actors, and roles, we can see that:

-- one studio has many movies
-- one actor has many roles
-- one movie has many actors
-- Before we write out the DDL, we’ll visualize this a few ways.

-- As A Spreadsheet
-- Check out this color-coded spreadsheet.

-- Crow’s Foot Notation
-- Preferably, we will draw diagrams with Crow’s Foot Notation, which is a standard way to represent schemas.


-- DDL for Movies
-- Let’s look at the DDL from the earlier example

-- CREATE TABLE studios (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   founded_in DATE
-- );
-- CREATE TABLE movies (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   release_year INTEGER,
--   runtime INTEGER,
--   rating TEXT,
--   studio_id INTEGER REFERENCES studios
-- );
-- Controlling Delete Behavior with DDL
-- CREATE TABLE movies (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   release_year INTEGER,
--   runtime INTEGER,
--   rating TEXT,
--   studio_id INTEGER REFERENCES studios ON DELETE SET NULL
-- );
-- CREATE TABLE movies (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   release_year INTEGER,
--   runtime INTEGER,
--   rating TEXT,
--   studio_id INTEGER REFERENCES studios ON DELETE CASCADE
-- );
-- Many-to-Many DDL
-- CREATE TABLE movies (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   release_year INTEGER NOT NULL,
--   runtime INTEGER NOT NULL,
--   rating TEXT NOT NULL
-- );
-- CREATE TABLE actors (
--   id SERIAL PRIMARY KEY,
--   first_name TEXT NOT NULL,
--   last_name TEXT,
--   birth_date DATE NOT NULL
-- );
-- CREATE TABLE roles (
--   id SERIAL PRIMARY KEY,
--   movie_id INTEGER REFERENCES movies ON DELETE CASCADE,
--   actor_id INTEGER REFERENCES actors ON DELETE CASCADE
-- );
-- Best Practices
-- Normalization
-- Normalization is a database design technique which organizes tables in a manner that reduces redundancy and dependency of data.

-- It divides larger tables to smaller tables and links them using relationships.

-- Normalization Bad Example
-- Consider the following products table. There are strings with multiple values in the color column, making it difficult to query.

-- products

-- id	color	price
-- 1	red, green	05.00
-- 2	yellow	10.00
-- Normalized Example
-- products

-- id	price
-- 1	05.00
-- 2	10.00
-- colors

-- id	color
-- 1	red
-- 2	green
-- 3	yellow
-- products_colors

-- id	color_id	product_id
-- 1	1	1
-- 2	2	1
-- 3	3	2
-- Another Bad Example
-- Consider the following purchases table. It’s bad because store_location is fully dependent on store_id.

-- purchases

-- customer_id	store_id	store_location
-- 1	1	New York
-- 1	3	Boston
-- 2	2	San Francisco
-- 3	1	New York
-- Normalized Example
-- stores

-- store_id	store_location
-- 1	New York
-- 3	Boston
-- 2	San Francisco
-- purchases

-- customer_id	store_id
-- 1	1
-- 1	3
-- 2	2
-- 3	1
-- Indexing
-- A database index is a special data structure that efficiently stores column values to speed up row retrieval via SELECT and WHERE (i.e. “read”) queries.

-- For instance, if you place an index on a username column in a users table, any query using username will execute faster since fewer rows have to be scanned due to the efficient structure.

-- Index Efficiency
-- In general, database software (including PostgreSQL) use tree-like data structures to store the data, which can retrieve values in logarithmic time O(lg(N)) instead of linear O(N) time.

-- Translation: If we have 1,000,000 rows and are looking for a single column value, instead of examining every row, we can examine approximately log2(1000000) ≈ 20 rows to get our answer, which is an incredible improvement!

-- Why Not Index Everything?
-- There is a tradeoff with indexing! For every indexed column, a copy of that column’s data has to be stored as a tree, which can take up a lot of space.

-- Also, every INSERT and UPDATE query becomes more expensive, since data in both the regular table AND the index have to be dealt with.

-- How to Create an Index in PostgreSQL
-- Indexing is part of DDL, but indexes can be created or dropped at any time. The more records in the database at the time of creation, the slower the indexing process will be.

-- CREATE INDEX index_name ON table_name (column_name);
-- You can also create a multi-column index, which is useful if you are constantly querying by two fields at once (e.g. first_name and last_name):

-- CREATE INDEX index_name ON table_name (column1_name, column2_name);
-- How to Drop an Index in PostgreSQL
-- Drop an index:

-- DROP INDEX full_name;
-- When to Index

-- Indexes are used in every PostgreSQL table by default on the primary key column.

-- In general, if you are building an application that is more read-heavy than write-heavy, indexes are your friend and can be safely placed on columns that are used frequently in queries to speed up performance.

-- However, there are other index types besides the default that may be more efficient for your data, so definitely read up on some PostgreSQL performance optimizations here and here.