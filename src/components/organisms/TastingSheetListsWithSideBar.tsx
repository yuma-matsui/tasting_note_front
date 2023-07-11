import { FC, memo } from 'react'

import { useFilteredTastingSheets, useToggleSideBar } from '../../hooks'
import { TastingSheetApi } from '../../types'
import { TastingSheetSearchForm } from '../molecules'
import TastingSheetLists from './TastingSheetLists'
import TastingSheetSearchSideBar from './TastingSheetSearchSideBar'

const TastingSheetListsWithSideBar: FC<{
  tastingSheets: TastingSheetApi[]
}> = memo(({ tastingSheets }) => {
  const { filteredTastingSheets, setFilter } = useFilteredTastingSheets(tastingSheets)
  const { isOpen, onClickToggleSideBar } = useToggleSideBar()

  return (
    <TastingSheetSearchSideBar
      sideBarContent={<TastingSheetSearchForm setFilter={setFilter} />}
      visible={isOpen}
      onClickToggleSideBar={onClickToggleSideBar}
    >
      <TastingSheetLists tastingSheets={filteredTastingSheets} onClickToggleSideBar={onClickToggleSideBar} />
    </TastingSheetSearchSideBar>
  )
})

export default TastingSheetListsWithSideBar
