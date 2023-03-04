import { FC, memo } from 'react'
import { BsSearch } from 'react-icons/bs'

import { TastingSheetListsProps } from '../../types'
import TastingSheetCards from './TastingSheetCards'

const TastingSheetLists: FC<TastingSheetListsProps> = memo(({ tastingSheets }) => (
  <div>
    <h2>シート一覧</h2>
    <input type="text" placeholder="検索ワード" />
    <button type="button">
      <BsSearch className="rotate-90" />
    </button>
    <p>
      シート件数：
      <span>{tastingSheets.length}件</span>
    </p>
    <TastingSheetCards tastingSheets={tastingSheets} />
  </div>
))

export default TastingSheetLists
