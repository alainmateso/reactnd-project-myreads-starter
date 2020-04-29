import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './Book'
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery(query) {
    this.setState(() => ({
      query
    }));
    this.props.searchBooks(query)
  }

  render() {
    const { searchResults, updateShelf, loading } = this.props;
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className="close-search">
              Close
              </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) => this.updateQuery(e.target.value)}
              />

            </div>
          </div>
          <div className="search-books-results">
            {loading ? 'Loading...' :
              (
                this.state.query!== '' && searchResults.length ? (
                  <Book
                    books={searchResults.map((result) => result)}
                    onChange={updateShelf}
                  />
                ) : ''
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  searchResults: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  searchBooks: PropTypes.func.isRequired
}

export default SearchBooks;