import useFetchBooks from "./useFetchBooks"

export default function FilterBooks() {
    const books = useFetchBooks();

    return (
    <div className="all_books">
        {books.map((book) => (
            <div className="book_card" key={book.ISBN}>
                <h3>{book.title}</h3>
                <p>{book.author_name}</p>
                <p>{book.release_year}</p>
            </div>
        ))}
    </div>)
}