import React from 'react'
import BookCard from './BookCard'

const Loader = () => (
  <div className="loader-container">
    <div className="loader" />
  </div>
)

const NoResultText = ({ searchQuery }) => {
  return (
    <div className="no-results-text">
      {searchQuery.length ? (
        <p>Sorry. No books available in the name {searchQuery}</p>
      ) : (
        <p>Please enter book name to search</p>
      )}
    </div>
  )
}

const BooksContainer = ({ books, searchQuery, isLoading }) => {
  return (
    <div className="books-container">
      {isLoading ? (
        <Loader />
      ) : books.length ? (
        books.map((book, i) => <BookCard {...book} key={i} />)
      ) : (
        <NoResultText searchQuery={searchQuery} />
      )}
    </div>
  )
}

export default BooksContainer
