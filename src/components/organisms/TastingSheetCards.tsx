import { FC, memo } from 'react'

import { TastingSheetApi } from '../../types'
import { TastingSheetCard } from '../molecules'

const TastingSheetCards: FC<{
  tastingSheets: TastingSheetApi[]
}> = memo(({ tastingSheets }) => (
  <ul className="list-none">
    {tastingSheets.map((tastingSheet) => (
      <li key={tastingSheet.id} className="mb-8">
        <TastingSheetCard tastingSheet={tastingSheet} />
      </li>
    ))}
  </ul>
))

export default TastingSheetCards
