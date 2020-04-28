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

  updateShelf(book, shelf) {
    if (shelf !== 'none') {
      BooksAPI.update(book, shelf);
      return this.setState((prevState) => ({
        books: prevState.books.filter((item) =>
          item.id === book.id ? { ...item, shelf } : item
        )
      }))
    }
  }

  render() {
    const { loading, books } = this.state;
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
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
