import React from 'react'

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <h3>GoodReads App</h3>
      <div className="search-input-container">
        <input type="search" placeholder="Search Books" onChange={setSearchQuery} value={searchQuery} />
      </div>
    </div>
  )
}

export default Header
