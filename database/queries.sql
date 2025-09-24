/*
quaries used for testing
*/

SELECT * FROM book;

SELECT * FROM book WHERE author_id = 1;

SELECT isbn FROM book where title = 'Salamavaras';

SELECT a.name FROM author a INNER JOIN book b ON a.id = b.author_id WHERE b.isbn = 9789511228387;

SELECT title FROM book WHERE isbn = 9789511228387;

-- names instead of id numbers
SELECT b.id, b.title, a.name AS author, b.isbn, b.language, s.name AS series, b.release_year
FROM book b
INNER JOIN author a ON a.id = b.author_id
INNER JOIN series s ON s.id = b.series_id;


/*
for later

ALTER TABLE book 
ADD COLUMN series_id INT NULL 
AFTER title;

*/
