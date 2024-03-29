import { FC, memo } from 'react'

import { PaginationButtonsProps } from '../../types'

const PaginationButtons: FC<PaginationButtonsProps> = memo(({ back, isFirstPage, isLastPage, next, pageNumber }) => (
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
