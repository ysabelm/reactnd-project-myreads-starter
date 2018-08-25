import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (event, book) => {
    const shelf = event.target.value

    if (this.state.books) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      }
      )
    }
  }


  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <div className="list-books">
              <Header />
              <ListBooks
                books={books}
                changeShelf={this.changeShelf}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )} />

          <Route path='/search' render={({ history }) => (
            <SearchBook
              books={books}
              changeShelf={this.changeShelf}
            />
          )} />
        </Switch>


      </div>
    )
  }
}

export default BooksApp
