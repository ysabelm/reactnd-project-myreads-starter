import React from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired,
	}

	render() {
		const { book, changeShelf }= this.props
		// let currentShelf = 'none'
		// for (let item of books) {
		// 	if (item.id === book.id) {
		// 		currentShelf = item.shelf
		// 		break
		// 	}
		// }
		console.log(book.shelf)
		console.log('from bookshelf   ' +changeShelf)

		//const shelf = event.target.value

		return (
			<div className="book-shelf-changer">
				<select name='shelf' onChange={(event) => changeShelf(book, event)}
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

