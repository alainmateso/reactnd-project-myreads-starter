import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Book from './Book';
import { bookShelves } from './bookShelves';



class ListBooks extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    const { updateShelf, loading, books } = this.props;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {loading ? 'Loading...' : (
            <div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    {bookShelves.map(({ name, value }) => (
                      <div key={value}>
                        <h2 className="bookshelf-title">{name}</h2>
                        <Book
                          books={books}
                          shelf={value}
                          onChange={updateShelf}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ListBooks;
