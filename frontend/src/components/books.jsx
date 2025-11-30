import { useState, useEffect } from "react";

export default function FetchBooks() {
    // const url = "http://localhost:8000";

    const [fetchedAllWords, setFetchedAllWords] = useState([]);

    useEffect(() => {
        const AllBooks = async () => {
            try {
                const response = await fetch("/books");
                if (response.ok) {
                    const data = await response.json();
                    //just data would be books object!
                    setFetchedAllWords(data.books);
                }
            } catch (err) {
                console.error("caught: ", err)
            }
        };
        AllBooks();
    }, [])

    //Netflix -like card system
    return (
        <div className="all_books">
            {fetchedAllWords.map((book) => (
                <div className="book_card" key={book.ISBN}>
                    <h3>{book.title}</h3>
                    <p>{book.author_name}</p>
                    <p>{book.release_year}</p>
                </div>
            ))}
        </div>
    )
}
