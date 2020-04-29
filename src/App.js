import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
    searchResults: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          loading: false
        }))
      })
  }

  updateShelf = (selectedBook, newShelf) => {
    if (newShelf !== 'none') {
      BooksAPI.update(selectedBook, newShelf);
      return this.setState((prevState) => ({
        books: prevState.books.filter((item) =>
          item.id === selectedBook.id ? item.shelf = newShelf : item
        )
      }))
    }
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then((results) => {
        this.setState(() => ({
          searchResults: results,
          loading: false
        }))
      })
  }

  render() {
    const { loading, books, searchResults } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            loading={loading}
            books={books}
            updateShelf={this.updateShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            searchResults={searchResults}
            updateShelf={this.updateShelf}
            searchBooks={this.searchBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
