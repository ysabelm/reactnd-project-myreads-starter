import React from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		changeShelf: PropTypes.func.isRequired,
	}

	render() {
		const { book, changeShelf }= this.props
		
		return (
			<div className="book-shelf-changer">
				<select name='shelf' onChange={(event) => changeShelf(event, book)}
					defaultValue={book.shelf}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default BookShelfChanger

