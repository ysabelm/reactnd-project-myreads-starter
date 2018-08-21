// Barre de recherche (query)
// Button retour/link back vers App.js (main) --> installer router
// fetch API (voir dans Api l'utile): getAll Search Update
// Display les livres trouvés

import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import PropTypes from 'prop-types'


class SearchBook extends React.Component {
  static propTypes = {
    searchedBooks: PropTypes.array.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  // Use the API to search new books
  searchNewBook = (query) => {
    if(!query) {
      this.clearQuery()
    } else {
      this.updateQuery(query)

      BooksAPI.search(query).then((books) => {
        if(books.error) {
          console.log(books.error)
        } else {
          books.map(book => (this.props.searchedBooks.filter((b) => b.id === book.id).map(b => book.shelf === b.shelf)))
          this.setState({ books})
        }
      })
    }
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
  }
  

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/

export default SearchBook