import React from 'react'

class Book extends React.Component {
  state = {
    shelf: 'none'
  }
 componentDidMount() {
    const { book } = this.props;
    if(book.bookcase) {
      this.setState({ shelf: book.shelf })
    }
  }
 changeBookShelf = (event) => {
    this.setState({shelf: event.target.value})
    this.props.onChangeBook(this.props.book, event.target.value)
  }
