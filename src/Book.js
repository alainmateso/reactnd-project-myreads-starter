import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

const Book = ({ books, onChange }) => {
  return (
    
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.length ? (books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks
                      ? book.imageLinks.smallThumbnail
                      : book.previewLink})`
                  }}></div>
                <ShelfChanger
                  selectedOption={book.shelf ? book.shelf : "none"}
                  onChange={(e) => onChange(book, e.target.value)}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors ? book.authors.map((author) => (
                  <span key={author}>{author}<br /></span>
                )): 'No author'}
              </div>
            </div>
          </li>
        ))) : 'It appears this shelf is empty'}
      </ol>
    </div>
  )
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Book;
