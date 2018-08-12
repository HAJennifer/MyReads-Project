import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './Components/BookShelf'
import Book from './Components/Book'
import NotFound from './Components/NotFound'

class Apps extends React.Component {
  state = {
     books: [],
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
 updatesQuery = (query) => {
    this.setState(state => ({ query: query }));
    if(query !== '') {
      this.searchBooks(query);
    } else {
      this.setState({ displayBooks: [] });
    }
  }
	updateQuery = (query) => { 
    this.setState({query: query}) 
   	let displayBooks = [] 
    if (query) {
    BooksAPI.search(query).then(response => {
    if (response.length) { 
    displayBooks = response.map(i => { 
    const index = this.state.books.findIndex(c => c.id === i.id) 
    if( index >= 0 ) { 
    return this.state.books[index] 
    } else { 
      return i 
    } 
   }) 
   } 
   this.setState({displayBooks})
   }) 
   } else { this.setState({displayBooks }) 
    } 
    } 

  render() {
	const {query} = this.state 
    return (
      <div className="app">
       <Route exact path="/search" render={() => ( 
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link> 
              <div className="search-books-input-wrapper">
                 <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => 
		this.updateQuery(event.target.value)} /> 
              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid"> {this.state.displayBooks.map((book, k) => ( 
   		<Book key={k} book={book} onChangeBook={(book, shelf) => this.changeShelf(book,shelf)}/> 
   		))
		}
	    </ol>
            </div>
          </div>
       	  )} 
	/> 
           
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
export default Apps
