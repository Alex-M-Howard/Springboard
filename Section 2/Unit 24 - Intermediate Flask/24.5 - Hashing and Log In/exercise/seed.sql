DROP DATABASE IF EXISTS auth;
CREATE DATABASE auth;

\c auth;
DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

INSERT INTO users
  (username, password, email, first_name, last_name)
VALUES
  ('ForgetfulMemoryFoam', '$2b$12$Ef10fdwD34EWRG6c22rTFe5x6x3rrEpoaCZMkie.TANPDQ29p6V56', 'memory@forgotten.com', 'Alex', 'Howard'),
  ('JohnDoesItAll', '$2b$12$cOHISLi7gCsrTSzpjtTt2OCGts3Buw41iBMmzP7q1dXR2OYdwm2F2', 'jd@whoami.com', 'John', 'Doe'),
  ('JaneDoesnt', '$2b$12$A2M2MqS8c045bajvH3Q.TeHGrEjuCyPheO0.0uQ06uzR9Xj0dCTr2', 'jd@askjeeves.com', 'Jane', 'Doe');