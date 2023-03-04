import { FC, memo } from 'react'

import { TastingSheetListsProps } from '../../types'
import { TastingSheetSearchForm } from '../molecules'
import TastingSheetCards from './TastingSheetCards'

const TastingSheetLists: FC<TastingSheetListsProps> = memo(({ tastingSheets }) => (
  <div>
    <h2>シート一覧</h2>
    <TastingSheetSearchForm />
    <p>
      シート件数：
      <span>{tastingSheets.length}件</span>
    </p>
    <TastingSheetCards tastingSheets={tastingSheets} />
  </div>
))

export default TastingSheetLists
