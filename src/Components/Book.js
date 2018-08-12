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
