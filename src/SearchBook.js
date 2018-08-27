import React from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from "./BooksAPI"
import PropTypes from 'prop-types'
import Book from './Book'


class SearchBook extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }


  searchNewBook = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query })

      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        } 
        books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
          this.setState({ books })
        
      })
    }
  }

  render() {
    const { changeShelf } = this.props
    const { query, books } = this.state;
    let searchResult = books
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      searchResult = books.filter(book => match.test(book.title))
    } else {
      searchResult = books
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={event => this.searchNewBook(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchResult.length > 0 && (
            <div>
              <div>
                <h3>Found {books.length} books</h3>
              </div>
              <ol className="books-grid">
                {books.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBook