BEGIN;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
INSERT INTO users(name,password,email) VALUES ('rawand',1234,'rawandgaradh@gmail.com');
COMMIT;