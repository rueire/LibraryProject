import styles from "./bookPage.module.css";
import { useParams, useLocation } from "react-router-dom";
import useFetchBooks from "../hooks/useFetchBooks";

export default function BookPage() {
  const { isbn } = useParams();
  const location = useLocation();
  const bookFromState = location.state;
  const allBooks = useFetchBooks();

  const resolvedBook =
    bookFromState || allBooks.find((b) => String(b.ISBN) === String(isbn));
  const title = resolvedBook?.title || resolvedBook?.name || "Book Title";
  const author = resolvedBook?.author || resolvedBook?.Author || "Author Name";
  const displayISBN = resolvedBook?.ISBN || isbn || "";
  const release_year = resolvedBook?.release_year || "";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <p>{title}</p>
        </div>
        <div className={styles.bookInfo}>
          <h2 className={styles.bookTitle}>{title}</h2>
          <p className={styles.bookAuthor}>{author}</p>
          <p className={styles.bookISBN}>{displayISBN}</p>
          <p>{release_year}</p>
        </div>
      </div>
    </>
  );
}
