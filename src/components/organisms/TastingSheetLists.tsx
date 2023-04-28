import { FC, memo } from 'react'

import { PaginationButtons } from '../molecules'
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
      <h2 className="text-xl mb-4">シート一覧</h2>
      <div>
        <div className="mx-1 mb-4 flex justify-between">
          <button type="button" className="text-gray-400 drawer-button" onClick={onClickToggleSideBar}>
            絞り込む
          </button>
          <p className="text-sm">
            シート件数：<span className="text-lg font-semibold">{tastingSheets.length}</span>件
          </p>
        </div>
        <TastingSheetCards tastingSheets={displayingTastingSheets} />
      </div>
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
