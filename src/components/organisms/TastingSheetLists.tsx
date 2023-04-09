import { FC, memo } from 'react'

import { PaginationButtons, TastingSheetListsTitle } from '../molecules'
import TastingSheetCards from './TastingSheetCards'
import { TastingSheetApi } from '../../types'
import { useTastingSheetsPagination } from '../../hooks'

const TastingSheetLists: FC<{
  tastingSheets: TastingSheetApi[]
  onClickToggleSideBar: () => void
}> = memo(({ tastingSheets, onClickToggleSideBar }) => {
  const { pageNumber, next, back, displayingTastingSheets, isFirstPage, isLastPage, isMoreThanFiveSheets } =
    useTastingSheetsPagination(tastingSheets)

  return (
    <div className="flex flex-col items-center">
      <TastingSheetListsTitle tastingSheets={tastingSheets} />
      <button type="button" className="btn drawer-button" onClick={onClickToggleSideBar}>
        絞り込む
      </button>
      <TastingSheetCards tastingSheets={displayingTastingSheets} />
      {isMoreThanFiveSheets && (
        <PaginationButtons
          pageNumber={pageNumber}
          back={back}
          next={next}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
      )}
    </div>
  )
})

export default TastingSheetLists
