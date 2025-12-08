import { useEffect, useState } from "react";
import useFetchBooks from "./useFetchBooks"
import useFetchGenre from "./useFetchGenres";
// import { useNavigate } from "react-router";

export default function MainPage() {
    const [randomGenre, setRandomGenre] = useState("");
    const books = useFetchBooks();
    const genres = useFetchGenre();
    // const navigate = useNavigate();
    
    //randomized genre, useeffect to only render once
    useEffect(() => {
        // Do not refresh randomgenre 
        if (randomGenre !== "") return;

        if (genres.length > 0) {
            const idx = Math.floor(Math.random() * genres.length)
            setRandomGenre(genres[idx].genre)
        }
    },[genres]);

    // filter through books, split genres by comma, trim
    const filteredBooks = books.filter(book =>{
        const booksbygenre = book.genres.split(",").map(g => g.trim());
    // return books that include randomized genre
        return booksbygenre.includes(randomGenre);
    });

    function handleNav() {
        // navigate to the new page
        console.log('nav link to new page');
    };

    return (
        <div>
            <div className="genre-label-container" onClick={handleNav}>
                <h3>{randomGenre || 'Loading...'}</h3>
            </div>
            <div className="all_books">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div className="book_card" key={book.ISBN}>
                            <h3>{book.title}</h3>
                            <p>{book.author_name}</p>
                            <p>{book.release_year}</p>
                        </div>
                    ))
                ): (
                    <p>No Books with this genre</p>
                ) }
            </div>
        </div>
    )
}