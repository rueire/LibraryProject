
/*Create library, create tables
    Add more when project goes on
*/

CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

CREATE TABLE author(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE book(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    series_id INT,
    FOREIGN KEY (series_id) REFERENCES series(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    ISBN VARCHAR(20) UNIQUE,
    language VARCHAR(50) not null,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    release_year INT NOT NULL
);

CREATE TABLE series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

/*These to be added later when vision is more clear*/


-- -- all genres
-- CREATE TABLE genre (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) UNIQUE NOT NULL
-- );
-- --link books to genres
-- CREATE TABLE book_genre (
--     book_id INT,
--     genre_id INT,
--     PRIMARY KEY (book_id, genre_id),
--     FOREIGN KEY (book_id) REFERENCES book(id)
--         ON DELETE CASCADE,
--     FOREIGN KEY (genre_id) REFERENCES genre(id)
--         ON DELETE CASCADE
-- );

-- CREATE TABLE comic(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(50) NOT NULL,
--     ISBN VARCHAR(20) UNIQUE,
--     genre VARCHAR(20),
--     rating VARCHAR(50),
--     FOREIGN KEY (author) REFERENCES writer(id)
--         ON DELETE RESTRICT
--         ON UPDATE CASCADE
-- );