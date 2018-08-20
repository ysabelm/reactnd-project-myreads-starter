import React from 'react'
import BookShelf from './BookShelf.js'

// Dans component BookShelf, compléter par props

class ListBooks extends React.Component {
	
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<BookShelf />
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<BookShelf />
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<BookShelf />
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default ListBooks