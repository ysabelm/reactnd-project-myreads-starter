import React from 'react'
import { Link } from 'react-router-dom'
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
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  // Use the API to search new books
  searchNewBook = (event) => {
    const query = event.target.value.trim()
    if (!query) {
      this.clearQuery()
    } else {
      this.updateQuery(query)

      BooksAPI.search(query).then((books) => {
        if (books.error) {
          console.log(books.error)
        } else {
          books.map(book => (this.props.searchedBooks.filter((b) => b.id === book.id).map(b => book.shelf === b.shelf)))
          this.setState({ books })
        }
      })
    }
  }

  render() {

    const { query, searchedBooks } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchNewBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchedBooks.length > 0 && (
            <div>
              <h3>Found {searchedBooks.length} books</h3>
              <ol className="books-grid">
                {searchedBooks.map((book) => (
                  <Book
                    Book={book}
                    books={books}
                    key={book.id}
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