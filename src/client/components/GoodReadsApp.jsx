import React, { Component } from 'react'
import { searchBooks } from '../service/bookService'
import Pagination from './Pagination'
import Header from './Header'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import BooksContainer from './BooksContainer'
const searchAPIDebounced = AwesomeDebouncePromise(searchBooks, 500)

const GoodReadsAppContainer = (props) => <div className="goodreads-app-container">{props.children}</div>

export default class GoodReadsApp extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      pageNo: 1,
      searchQuery: '',
      totalResults: 0,
      isLoading: false,
    }
  }

  getResults = async (pageNo) => {
    if (pageNo == this.state.pageNo) return
    this.setState({ isLoading: true })
    const booksResponse = await searchBooks(this.state.searchQuery, pageNo)
    const { results, totalResults } = booksResponse
    this.setState({ books: results, totalResults, isLoading: false, pageNo })
  }

  setSearchQuery = async (e) => {
    this.setState({ searchQuery: e.target.value, isLoading: true })
    const booksResponse = await searchAPIDebounced(e.target.value.trim(), this.state.pageNo)
    const { results, totalResults } = booksResponse
    this.setState({ books: results, totalResults, isLoading: false })
  }

  render() {
    return (
      <GoodReadsAppContainer>
        <Header searchQuery={this.state.searchQuery} setSearchQuery={this.setSearchQuery} />
        <BooksContainer
          books={this.state.books}
          searchQuery={this.state.searchQuery}
          isLoading={this.state.isLoading}
        />
        <Pagination
          totalResults={this.state.totalResults}
          books={this.state.books}
          pageNo={this.state.pageNo}
          getResults={this.getResults}
        />
      </GoodReadsAppContainer>
    )
  }
}
