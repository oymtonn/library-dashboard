export function calculateStats(books) {
    const editions = books
      .map(b => b.edition_count)
      .filter(n => typeof n === "number");
  
    const years = books
      .map(b => b.first_publish_year)
      .filter(n => typeof n === "number");
  
    const meanEditions = editions.length
      ? Math.round(editions.reduce((a, b) => a + b, 0) / editions.length)
      : "N/A";
  
    const yearRange = years.length
      ? `${Math.min(...years)}–${Math.max(...years)}`
      : "N/A";
  
    return { meanEditions, yearRange };
  }
  