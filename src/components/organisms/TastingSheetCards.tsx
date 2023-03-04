import { FC, memo } from 'react'

import { TastingSheetListsProps } from '../../types'
import { TastingSheetCard } from '../molecules'

const TastingSheetCards: FC<TastingSheetListsProps> = memo(({ tastingSheets }) => (
  <ul className="list-none">
    {tastingSheets.map((tastingSheet) => (
      <TastingSheetCard key={tastingSheet.id} tastingSheet={tastingSheet} />
    ))}
  </ul>
))

export default TastingSheetCards
