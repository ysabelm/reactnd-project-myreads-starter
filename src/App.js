import React from 'react'
import { Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import './App.css'

import Header from './Header'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (event, book) => {
    const bookShelf = event.target.value

    if (this.state.books) {
      BooksAPI.update(book, bookShelf).then(() => {
        book.bookShelf = bookShelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      }
    )
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route path='/search' render={({ history }) => (
          <SearchBook />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} />
        )} />

        <div className="open-search">
          <Link
            to={{ pathname: '/search' }}
            onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
