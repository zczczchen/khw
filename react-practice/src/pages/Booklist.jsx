import React from "react";
import { useState, useEffect } from "react";

function Booklist(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/categories/${props.categories.id}/magazines?[book_list_id=aycr]`
      );
      const result = await response.json();
      setBooks(result.categories);
    }
    getBooks();
  }, []);

  return (
    <div className='library-wrap'>
      <h2 className='category-name'>{props}</h2>
      <hr className='books-line' />
      <div className='books-wrap'>
        {books.map((book) => {
          const bid = book.bid;
          const covers = book.covers;
          const issue = book.issue;
          return (
            <div key={bid} className='books'>
              <img
                className='book-cover'
                src={covers.small.url}
                alt='book-cover'
              />
              <h3 className='book-title'>{issue}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Booklist;
