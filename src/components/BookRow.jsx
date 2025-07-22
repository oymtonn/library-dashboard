import { Link } from 'react-router-dom';

const BookRow = ({ book }) => {
  const bookKey = book.key?.replace("/works/", "");

  return (
    <div className="book-row">
      <Link to={`/book/${bookKey}`}>
        <strong>{book.title}</strong>
      </Link>{" "}
      — {book.author_name?.[0] || "Unknown Author"}
      <span> | Year: {book.first_publish_year || "?"}</span>
      <span> | Editions: {book.edition_count || "?"}</span>
    </div>
  );
};

export default BookRow;
