import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './Components/BookShelf'
import Book from './Components/Book'
import NotFound from './Components/NotFound'

class BooksApp extends React.Component {
  state = {
     allbooks: [],
     displayBooks: [],
     query: '',
     showSearchPage: false
  }
changeShelf = (book, shelf) =>{
   let books; 
   if (this.state.books.findIndex(i => i.id === book.id) > 0) { 
     books = this.state.books.map(i => {
     if (i.id === book.id) { 
       return {...book, shelf} 
    } else { return i }
       
   }) 
   } else { 
     books = [...this.state.books, {...book, shelf}] 
   } this.setState({books}) 

 BooksAPI.update(book, shelf).then((data) => {
   }) 
 }  
componentDidMount() { 
     	BooksAPI.getAll().then((books) => { 
     	this.setState({books:books})
        }) 
} 

  render() {
    return (
      <div className="app">
       <Route exact path="/search" render={() => ( 
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link> 
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
           
 <Route exact path="/" render={() => ( 
  <BookShelf books={this.state.books} onChangeShelf={(book, shelf) => 
  this.changeShelf(book, shelf)}
/> 

)}
/>
  <Route component={NotFound} />
</div> 
)
} 
} 
export default App
export default BooksApp
