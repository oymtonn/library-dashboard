import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell
} from 'recharts';

const BookCharts = ({ books }) => {
  const yearData = {};
  books.forEach((book) => {
    const year = book.first_publish_year;
    if (year) {
      yearData[year] = (yearData[year] || 0) + 1;
    }
  });

  const yearChartData = Object.entries(yearData)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year - b.year)
    .slice(0, 10);

  const editionData = books
    .filter(book => typeof book.edition_count === "number" && book.edition_count > 0)
    .sort((a, b) => b.edition_count - a.edition_count)
    .slice(0, 5)
    .map(book => ({
      name: book.title,
      value: book.edition_count
    }));

  const pieColors = ['#82ca9d', '#8884d8', '#ffc658', '#ff8042', '#8dd1e1'];

  return (
    <div className="charts">
      <h3>Books by Year</h3>
      <BarChart width={500} height={300} data={yearChartData}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>

      <h3>Top 5 Books by Edition Count</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={editionData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#82ca9d"
          label
        >
          {editionData.map((_, index) => (
            <Cell key={index} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default BookCharts;
