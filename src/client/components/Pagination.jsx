import React from 'react'
import classNames from 'classnames'
import { getTotalPages } from '../common/utils'

const getPaginatedElements = (pageNo, totalResults) => {
  const totalPages = getTotalPages(totalResults)
  const lowerLimit = Math.max(pageNo - 3, 1)
  const upperLimit = Math.min(pageNo + 3, totalPages)
  let list = []
  for (let i = lowerLimit; i <= upperLimit; i++) {
    list.push(i)
  }
  return list
}

const Pagination = ({ books, totalResults, pageNo, getResults }) => {
  const paginatedElements = getPaginatedElements(pageNo, totalResults)

  const getPreviousPageResults = () => {
    const previousPageNo = pageNo - 1
    if (previousPageNo < 1) return
    getResults(previousPageNo)
  }

  const getNextPageResults = () => {
    const nextPageNo = pageNo + 1
    const totalPages = getTotalPages(totalResults)
    if (nextPageNo > totalPages) return
    getResults(nextPageNo)
  }

  return (
    <div className="pagination">
      {books.length > 0 && (
        <>
          <div>
            <div className="page-field clickable" onClick={getPreviousPageResults}>
              &lt;&lt; Previous
            </div>
            {paginatedElements.map((p, i) => {
              return (
                <div
                  className={classNames({ 'page-field': true, clickable: p != pageNo, current: p == pageNo })}
                  onClick={() => getResults(p)}
                  key={i}
                >
                  {p}
                </div>
              )
            })}
            <div className="page-field clickable" onClick={getNextPageResults}>
              Next &gt;&gt;
            </div>
          </div>
          <div>Results {totalResults}</div>
        </>
      )}
    </div>
  )
}

export default Pagination
