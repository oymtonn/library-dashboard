import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { bookKey } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`https://openlibrary.org/works/${bookKey}.json`);
      const data = await res.json();
      setBook(data);
    };
    fetchBook();
  }, [bookKey]);

  if (!book) return <p>Loading book...</p>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p><strong>Description:</strong> {book.description?.value || book.description || "No description available."}</p>
      <p><strong>Subjects:</strong> {(book.subjects || []).join(', ')}</p>
      <p><strong>Created:</strong> {book.created?.value}</p>
    </div>
  );
};

export default BookDetail;
