import { getBooks, addBook, updateBook, deleteBook } from './api';

import React, { useEffect, useState } from 'react';
import { getBooks } from './api';

const BookList = () => 
{
  const [books, setBooks] = useState([]);

  useEffect(() => 
  {
    const fetchBooks = async () => 
    {
      try 
      {
        const response = await getBooks();
        setBooks(response.data);
      } 
      
      catch (error) 
      {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (<li key={book.id}>{book.title}</li>))}
      </ul>
    </div>
  );
};

export default BookList;
