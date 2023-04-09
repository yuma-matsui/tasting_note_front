import { FC, memo } from 'react'

import { TastingSheetApi } from '../../types'
import { TastingSheetCard } from '../molecules'

const TastingSheetCards: FC<{
  tastingSheets: TastingSheetApi[]
}> = memo(({ tastingSheets }) => (
  <ul className="list-none">
    {tastingSheets.map((tastingSheet) => (
      <TastingSheetCard key={tastingSheet.id} tastingSheet={tastingSheet} />
    ))}
  </ul>
))

export default TastingSheetCards
