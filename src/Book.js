import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger';

const Book = ({ books, shelf, onChange }) => {
  const foundBooks = books.filter((b) => (b.shelf === shelf))
  return (
    
    <div className="bookshelf-books">
      <ol className="books-grid">
        {foundBooks.length ? (foundBooks.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <ShelfChanger
                  selectedOption={book.shelf ? book.shelf : "none"}
                  onChange={(e) => onChange(book, e.target.value)}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors.map((author) => (
                  <span key={author}>{author}<br /></span>
                ))}
              </div>
            </div>
          </li>
        ))) : 'No books found in this category'}
      </ol>
    </div>
  )
}

export default Book;
