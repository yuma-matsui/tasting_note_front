import { FC, memo } from 'react'

import { TastingSheetListsProps } from '../../types'
import { PaginationButtons, TastingSheetSearchForm } from '../molecules'
import TastingSheetCards from './TastingSheetCards'
import { useTastingSheetsPagination } from '../../hooks'

const TastingSheetLists: FC<TastingSheetListsProps> = memo(({ tastingSheets }) => {
  const { pageNumber, next, back, displayingTastingSheets, isFirstPage, isLastPage } =
    useTastingSheetsPagination(tastingSheets)

  return (
    <div className="flex flex-col">
      <h2>シート一覧</h2>
      <TastingSheetSearchForm />
      <p>
        シート件数：
        <span>{tastingSheets.length}件</span>
      </p>
      <TastingSheetCards tastingSheets={displayingTastingSheets} />
      <PaginationButtons
        pageNumber={pageNumber}
        back={back}
        next={next}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </div>
  )
})

export default TastingSheetLists
