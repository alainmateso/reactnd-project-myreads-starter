import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'


class ListBooks extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Book
                  books={this.state.books}
                  shelf='currentlyReading'
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <Book
                  books={this.state.books}
                  shelf='wantToRead'
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Book
                  books={this.state.books}
                  shelf='read'
                />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'><button>Add a book</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
