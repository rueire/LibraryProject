import styles from "./BookRow.module.css";

export default function BookRow({
  // classWrapper,
  // innerClass,
  arr,
  title,
  onClickTitle,
  onClickBook,
  fallbackText,
}) {
  return (
    <div className={styles.rowContainer}>
      <div className="genre-label-container" onClick={onClickTitle}>
        <h3>{title || "Loading..."}</h3>
      </div>
      <div className={styles.allBooks}>
        {arr.length > 0 ? (
          arr.map((book) => (
            <div
              className={styles.bookCard}
              key={book.ISBN}
              onClick={() => onClickBook && onClickBook(book)}
            >
              <h3>{book.title}</h3>
              <p>{book.release_year}</p>
            </div>
          ))
        ) : (
          <p>{fallbackText}</p>
        )}
      </div>
    </div>
  );
}
