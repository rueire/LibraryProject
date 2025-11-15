/*

INSERT querys
more to be added

*/

INSERT INTO author(name) VALUES();

INSERT INTO series(name) VALUES();

INSERT INTO book(title, series_id, ISBN, 'language', author_id, release_year) VALUES();

INSERT INTO genres(genre) VALUES();

INSERT INTO book_genres(book_id, genre_id) VALUES();

-- INSERT INTO comic(title, ISBN, genre, rating) VALUES
-- ();



INSERT INTO author(name) VALUES('Rick Riordan');
INSERT INTO author(name) VALUES('June Hur');
INSERT INTO author(name) VALUES('ICE');
INSERT INTO author(name) VALUES('Elise Kova');

INSERT INTO series(name) VALUES('Percy Jackson and the Olympians');
INSERT INTO series(name) VALUES('Olympoksen sankarit');
INSERT INTO series(name) VALUES('Dawning');
INSERT INTO series(name) VALUES('Married to Magic');



INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Salamavaras',1, 9789511228370, 'Finnish', 1, 2005);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Hirviöidenmeri',1, 9789511228387, 'Finnish', 1, 2006);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Titaanien kirous',1, 9789511228394 , 'Finnish', 1, 2007);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Labyrinttitaistelu',1, 9789511231394 , 'Finnish', 1, 2008);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Jumalten sota',1, 9789511241010, 'Finnish', 1, 2009);


INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Eksynyt sankari',2, 9789511256380, 'Finnish', 1, 2010);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Merenjumalan poika',2, 9789511260837, 'Finnish', 1, 2011);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Athenen merkki',2, 9789511270133, 'Finnish', 1, 2012);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Haadeksen talo',2, 9789511279372, 'Finnish', 1, 2013);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Olympoksen veri',2, 9789511285533, 'Finnish', 1, 2014);

INSERT INTO book(title, ISBN, language, author_id, release_year) 
VALUES('A crane among wolves', 9781035420902, 'English', 2, 2024);

INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Dawning 1', 3, 9781174083352, 'English', 3, 2023);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Dawning 2', 3, 9781774083369, 'English', 3, 2023);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('Dawning 3', 3, 9781774083376, 'English', 3, 2023);

INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('A Duel with the Vampire Lord', 4, 9781949694406, 'English', 4, 2022);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('A Deal with the Elf King', 4, 9781949694284, 'English', 4, 2020);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('A Dance with the Fae Prince', 4, 9781949694338, 'English', 4, 2021);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('A Dawn with the Wolf Knight', 4, 9781398713666, 'English', 4, 2024);
INSERT INTO book(title, series_id, ISBN, language, author_id, release_year) 
VALUES('A Duet with the Siren Duke', 4, 9781398713635, 'English', 4, 2023);

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

INSERT INTO book_genres(book_id, genre_id) VALUES(2, 2);
INSERT INTO book_genres(book_id, genre_id) VALUES(2, 15);
INSERT INTO book_genres(book_id, genre_id) VALUES(2, 16);

INSERT INTO book_genres(book_id, genre_id) VALUES(3, 2);
INSERT INTO book_genres(book_id, genre_id) VALUES(3,16);

INSERT INTO book_genres(book_id, genre_id) VALUES(4, 2);
INSERT INTO book_genres(book_id, genre_id) VALUES(4, 15);
INSERT INTO book_genres(book_id, genre_id) VALUES(4, 16);

INSERT INTO book_genres(book_id, genre_id) VALUES(5, 2) ;
INSERT INTO book_genres(book_id, genre_id) VALUES(5, 15); 
INSERT INTO book_genres(book_id, genre_id) VALUES(5, 16);