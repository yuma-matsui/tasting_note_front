import { FC, memo } from 'react'

const PaginationButtons: FC<{
  pageNumber: number
  back: () => void
  next: () => void
  isFirstPage: boolean
  isLastPage: boolean
}> = memo(({ pageNumber, back, next, isFirstPage, isLastPage }) => (
  <div className="btn-group">
    {!isFirstPage && (
      <button type="button" className="btn" onClick={back}>
        «
      </button>
    )}
    <span className="btn">{pageNumber}</span>
    {!isLastPage && (
      <button type="button" className="btn" onClick={next}>
        »
      </button>
    )}
  </div>
))

export default PaginationButtons
