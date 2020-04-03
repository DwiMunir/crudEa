import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationButton = (props) => {
  return (
    <Pagination
      className='d-flex justify-content-end container-fluid pb-0 mb-0'
    >
      <PaginationItem
        onClick={props.onPreviousPage}
        disabled={props.currentPage <= 1}
      >
        <PaginationLink first>
          Previous
        </PaginationLink>
      </PaginationItem>
      {props.paginationNumbers.map((item, index) => (
        <PaginationItem
          key={index}
          active={props.currentPage === item}
        >
          <PaginationLink
            id={item}
            onClick={(event) => props.onMovePage(event)}
          >
            {item}
          </PaginationLink>
        </PaginationItem>

      ))}
      <PaginationItem
        onClick={props.onNextPage}
        disabled={props.currentPage === props.paginationNumbers.length}
      >
        <PaginationLink last>
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

PaginationButton.propTypes = {
  currentPage: PropTypes.number,
  onPreviousPage: PropTypes.func,
  paginationNumbers: PropTypes.array,
  onNextPage: PropTypes.func,
  onMovePage: PropTypes.func

}
export default PaginationButton
