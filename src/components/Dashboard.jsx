import React, { useEffect, useState } from 'react';
import BookRow from './BookRow';
import SearchBar from './SearchBar';
import FilterSelect from './FilterSelect';
import { calculateStats } from '../utils/stats';    
import BookCharts from './BookCharts';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("science");
  const [filterYear, setFilterYear] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await res.json();
        setBooks(data.docs.slice(0, 50));
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchBooks();
  }, [query]);

  useEffect(() => {
    let temp = books;

    if (filterYear !== "All") {
      temp = temp.filter(book => book.first_publish_year === parseInt(filterYear));
    }

    setFilteredBooks(temp);
  }, [books, filterYear]);

  const uniqueYears = [...new Set(books.map(b => b.first_publish_year).filter(Boolean))];

  const stats = calculateStats(filteredBooks);

  const topBooks = books
  .filter(book => book.edition_count)
  .sort((a, b) => b.edition_count - a.edition_count)
  .slice(0, 5);

  for (var i = 0; i < 5; i++){
    console.log("Top editions: ", topBooks[i])
  }

  


  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <FilterSelect options={uniqueYears} setFilter={setFilterYear} />
      
      <div className="stats">
        <p>Total Books: {filteredBooks.length}</p>
        <p>Average Editions: {stats.meanEditions}</p>
        <p>Year Range: {stats.yearRange}</p>
      </div>

      <div className="book-list">
        {filteredBooks.slice(0, 10).map((book, index) => (
          <BookRow key={index} book={book} />
        ))}
      </div>
      <BookCharts books={filteredBooks} />

      
    </div>
  );
};

export default Dashboard;
