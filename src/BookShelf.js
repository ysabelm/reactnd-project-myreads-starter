import React from 'react'
//import * as BooksAPI from './BooksAPI'
import Book from './Book'


// Se connecter à l'api: Use get (BookId) to obtenir les keys/values
// don't forget to delete one book
// remplacer les titres, auteurs et vignettes par {Books.name, Books.author...}
// voir pour select --> component ou non? pour des motifs de state
// update API vs state...
// props ?



class BookShelf extends React.Component {

  render() {

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book
            
          />
        </ol>
      </div>
    )
  }
}

export default BookShelf