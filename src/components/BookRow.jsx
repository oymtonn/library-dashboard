import React from 'react';

const BookRow = ({ book }) => {
  return (
    <div className="book-row">
      <strong>{book.title}</strong> — {book.author_name?.[0] || "Unknown Author"}
      <span> | Year: {book.first_publish_year || "?"}</span>
      <span> | Editions: {book.edition_count || "?"}</span>
    </div>
  );
};

export default BookRow;
