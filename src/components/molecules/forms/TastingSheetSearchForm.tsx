import { FC, memo } from 'react'
import { BsSearch } from 'react-icons/bs'

const TastingSheetSearchForm: FC = memo(() => (
  <>
    <input type="text" placeholder="検索ワード" />
    <button type="button">
      <BsSearch className="rotate-90" />
    </button>
  </>
))

export default TastingSheetSearchForm
