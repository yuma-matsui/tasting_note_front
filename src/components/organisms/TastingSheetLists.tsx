import { FC, memo } from 'react'
import { GrNote } from 'react-icons/gr'

import { useTastingSheetsPagination } from '../../hooks'
import { TastingSheetListsProps } from '../../types'
import { PaginationButtons } from '../molecules'
import TastingSheetCards from './TastingSheetCards'

const TastingSheetLists: FC<TastingSheetListsProps> = memo(({ onClickToggleSideBar, tastingSheets }) => {
  const { back, displayingTastingSheets, isFirstPage, isLastPage, isMoreThanFiveSheets, next, pageNumber } =
    useTastingSheetsPagination(tastingSheets)

  return (
    <div className="flex flex-col items-center">
      <h2 className="page-title">シート一覧</h2>
      <div className="w-full sm:w-96 mt-4">
        <div className="mb-4 flex justify-between">
          <button type="button" className="drawer-button" onClick={onClickToggleSideBar}>
            絞り込む
          </button>
          <p className="text-sm">
            シート件数：<span className="text-lg font-semibold">{tastingSheets.length}</span>件
          </p>
        </div>
        {displayingTastingSheets.length > 0 ? (
          <TastingSheetCards tastingSheets={displayingTastingSheets} />
        ) : (
          <div className="mt-10">
            <GrNote className="w-20 h-20 block mx-auto" />
            <p className="text-center mt-4 text-lg">一致するシートはありません</p>
          </div>
        )}
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
