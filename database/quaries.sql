/*
quaries used for testing
*/

SELECT * FROM book;

SELECT * FROM book WHERE author_id = 1;

SELECT isbn FROM book where title = 'Salamavaras';

SELECT a.name FROM author a INNER JOIN book b ON a.id = b.author_id WHERE b.isbn = 9789511228387;

SELECT title FROM book WHERE isbn = 9789511228387;