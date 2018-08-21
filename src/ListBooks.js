import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {}

	render() {
    const { books } = this.props;
    
		return (
				<div className="list-books-content">
					<div>
              <BookShelf
                title='Currently Reading'
                books = {books}
                shelf='currentlyReading'
                //changeShelf={changeShelf}
              />
              <BookShelf
              title='Want to Read'
              books = {books}
              shelf='wantToRead'
              //changeShelf={changeShelf}
              />
              <BookShelf
              title='Read'
              books = {books}
              shelf='read'
              //changeShelf={changeShelf}
              />
						</div>
					</div>
		)
	}

}

export default ListBooks