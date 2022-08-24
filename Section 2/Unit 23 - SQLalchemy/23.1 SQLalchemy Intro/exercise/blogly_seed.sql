DROP DATABASE IF EXISTS blogly;
CREATE DATABASE blogly;

\c blogly

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  image_url VARCHAR(255) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
);

INSERT INTO users (first_name, last_name, image_url) VALUES 
    ('Patrick','Stewart', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagarticles.magzter.com%2Farticles%2F7185%2F295691%2F5b6d793871ca7%2FPatrick-Stewart-Actor-Star-Trek-Hollywood.jpg&f=1&nofb=1' ),
    ('Thor', 'Odinson', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.4PyRcZeDWie4DqO2iR62TwHaJ9%26pid%3DApi&f=1');

INSERT INTO users (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jane', 'Doe');

