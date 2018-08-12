import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import NotFound from './NotFound'
import PropTypes from 'prop-types'

class BookShelf extends React.Component {
  updateBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf) 
  }
propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }
