--Procedure
DELIMITER //
CREATE PROCEDURE get_books()
BEGIN
    SELECT 
        b.id,
        b.title,
        a.name AS author,
        b.isbn,
        b.language_code,
        s.name AS series,
        b.release_year
    FROM book b
    LEFT JOIN author a ON a.id = b.author_id
    LEFT JOIN series s ON s.id = b.series_id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE get_bookgenres()
BEGIN

select b.id, b.title, group_concat(g.genre separator ', ') as genres from book b
inner join book_genres bg on bg.book_id = b.id
inner join genres g on g.id = bg.genre_id
group by b.id;

END //
DELIMITER ;

