import { FC, memo } from 'react'
import { TastingSheetApi } from '../../../types'

const TastingSheetListsTitle: FC<{ tastingSheets: TastingSheetApi[] }> = memo(({ tastingSheets }) => (
  <div>
    <h2 className="text-center">シート一覧</h2>
    <p className="text-right">
      シート件数：
      <span>{tastingSheets.length}件</span>
    </p>
  </div>
))

export default TastingSheetListsTitle
