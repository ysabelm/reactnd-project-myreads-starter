import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props
    const shelfCategory = [
      { category: 'currentlyReading', title: 'Currently Reading' },
      { category: 'wantToRead', title: 'Want to Read' },
      { category: 'read', title: 'Read' }]

    return (
      <div className="list-books-content">
        {shelfCategory.map((shelf, index) => {
          const bookShelves = books.filter(book => book.shelf === shelf.category)
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={bookShelves}
                  changeShelf={changeShelf}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListBooks