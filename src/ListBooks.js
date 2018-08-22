import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    //changeShelf: PropTypes.func.isRequired
  }

  state = {}

  render() {
    const { books, shelves } = this.props

    return (
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <li key={books.shelf}>
            <BookShelf
              books={books}
              shelfTitle={shelf.title}
              shelves={shelves}
            //changeShelf={changeShelf}
            />
          </li>
        ))}
      </div>
    )
  }
}

export default ListBooks