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