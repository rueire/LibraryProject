--Procedure
DELIMITER //
CREATE PROCEDURE get_books()
BEGIN
    SELECT 
        b.id,
        b.title,
        a.name AS author,
        b.isbn,
        b.language,
        s.name AS series,
        b.release_year
    FROM book b
    LEFT JOIN author a ON a.id = b.author_id
    LEFT JOIN series s ON s.id = b.series_id;
END //
DELIMITER ;