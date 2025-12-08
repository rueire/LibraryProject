import { useState, useEffect } from "react";

export default function useFetchBooks() {
    const [fetchedBooks, setFetchedBooks] = useState([]);

    useEffect(() => {
        const AllBooks = async () => {
            try {
                const response = await fetch("/books");
                if (response.ok) {
                    const data = await response.json();
                    //just data would be books object!
                    setFetchedBooks(data.books);
                }
            } catch (err) {
                console.error("caught: ", err)
            }
        };
        AllBooks();
    }, [])
    return fetchedBooks;
}
