import { useEffect, useState } from "react";
import useFetchGenre from "../hooks/useFetchGenres";
import useFetchAuthors from "../hooks/useFetchAuthors";
import useFetchBooks from "../hooks/useFetchBooks";
import BookRow from "../components/bookRow";
import { useNavigate } from "react-router";

export default function MainPage() {
  const [randomGenre, setRandomGenre] = useState("");
  const [randomAuthor, setRandomAuthor] = useState("");

  const genres = useFetchGenre();
  const books = useFetchBooks();
  const authors = useFetchAuthors();
  const navigate = useNavigate();

  function handleNav() {
    // right now navigation works with randomized genre
    // TODO: handle so that uses params instead?
    navigate(`/filter/genre/${randomGenre}`);
  }

  // UseEffects
  //randomized genre, useeffect to only render once
  useEffect(() => {
    console.log("genres: ", genres);

    // Do not refresh randomgenre
    if (randomGenre !== "") return;

    if (genres.length > 0) {
      const idx = Math.floor(Math.random() * genres.length);
      setRandomGenre(genres[idx].genre);
    }
  }, [genres, randomGenre]);

  useEffect(() => {
    console.log("authors: ", authors);

    // Do not refresh randomgenre
    if (randomAuthor !== "") return;

    if (authors.length > 0) {
      const idx = Math.floor(Math.random() * authors.length);
      setRandomAuthor(authors[idx].name);
    }
  }, [authors, randomAuthor]);
  //==========================================================
  // filtering
  // TODO: move this to backend
  const booksByGenre = books.filter((book) => {
    const booksbygenre = book.genres.split(",").map((g) => g.trim());
    return booksbygenre.includes(randomGenre);
  });

  const booksByAuthor = books.filter((book) => {
    return book.author === randomAuthor;
  });

  return (
    <>
      <div className="book-carusel">
        <BookRow
          classWrapper={"all_books"}
          innerClass={"book_card"}
          onClick={handleNav}
          arr={booksByGenre}
          title={randomGenre}
          fallbackText={"No Books by this genre"}
        />
      </div>

      <div style={{ margin: 100 }} />

      <div className="book-carusel">
        <BookRow
          classWrapper={"all_books"}
          innerClass={"book_card"}
          onClick={handleNav}
          arr={booksByAuthor}
          title={randomAuthor}
          fallbackText={"No Books by this author"}
        />
      </div>
    </>
  );
}
