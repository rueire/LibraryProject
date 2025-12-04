/*

INSERT querys
more to be added

OUTDATED! do not use as is!

*/

INSERT INTO author(name) VALUES();

INSERT INTO series(name) VALUES();

INSERT INTO book(title, subtitle, series_id, ISBN, language_code, author_id, release_year) VALUES();

INSERT INTO genres(genre) VALUES();

INSERT INTO book_genres(book_id, genre_id) VALUES();

-- INSERT INTO comic(title, ISBN, genre, rating) VALUES
-- ();
-- Examples:


INSERT INTO author(name) VALUES('Rick Riordan');

INSERT INTO series(name) VALUES('Percy Jackson and the Olympians');


INSERT INTO book(title, series_id, ISBN, language_code, author_id, release_year) 
VALUES('Salamavaras', 'Book 1', 1, 9789511228370, 'fi', 1, 2005);

INSERT INTO genres(genre) VALUES('Young Adult');
INSERT INTO genres(genre) VALUES('Fantasy');
INSERT INTO genres(genre) VALUES('Horror');
INSERT INTO genres(genre) VALUES('Romance');
INSERT INTO genres(genre) VALUES('LGTB');
INSERT INTO genres(genre) VALUES('Historical');
INSERT INTO genres(genre) VALUES('Self Help');
INSERT INTO genres(genre) VALUES('Mystery');
INSERT INTO genres(genre) VALUES('Adult Fiction');
INSERT INTO genres(genre) VALUES('Comedy');
INSERT INTO genres(genre) VALUES('Scifi');
INSERT INTO genres(genre) VALUES('Children');
INSERT INTO genres(genre) VALUES('Non-Fiction');
INSERT INTO genres(genre) VALUES('Thriller');
INSERT INTO genres(genre) VALUES('Adventure');
INSERT INTO genres(genre) VALUES('Mythology');


INSERT INTO book_genres(book_id, genre_id) VALUES(1, 2);
INSERT INTO book_genres(book_id, genre_id) VALUES(1, 16)