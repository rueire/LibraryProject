import useFetchBooks from "../components/useFetchBooks"

export default function FilterBooks({genre}) {
    const books = useFetchBooks();

    // filter through books, split genres by comma, trim
    const filteredBooks = books.filter(book => {
        const booksbygenre = book.genres.split(",").map(g => g.trim());
        // return books that include randomized genre
        return booksbygenre.includes(genre);

    });

    return (
        <div className="all_books">
            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <div className="book_card" key={book.ISBN}>
                        <h3>{book.title}</h3>
                        <p>{book.author_name}</p>
                        <p>{book.release_year}</p>
                    </div>
                ))
            ) : (
                <p>No Books with this genre</p>
            )}
        </div>
    )
}