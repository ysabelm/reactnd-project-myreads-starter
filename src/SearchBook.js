import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import PropTypes from 'prop-types'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class SearchBook extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '', books: [] })
  }

  // Use the API to search new books
  searchNewBook = (query) => {
    if (!query) {
      this.clearQuery(query)
    } else {
      this.updateQuery(query)

      BooksAPI.search(query).then((books) => {
        if (books.error) {
          console.log(books.error)
        } else {
          books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
          this.setState({ books })
        }
      })
    }
  }

  render() {
    const { changeShelf } = this.props
    const { query, books } = this.state;
    let bookSearchResult

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      bookSearchResult = books.filter(book => match.test(book.title))
    } else {
      bookSearchResult = books
    }
    bookSearchResult.sort(sortBy('title'))

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
          {bookSearchResult.length > 0 && (
            <div>
              <div>
                <h3>Found {bookSearchResult.length} books</h3>
              </div>
              <ol className="books-grid">
                {bookSearchResult.map((book) => (
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