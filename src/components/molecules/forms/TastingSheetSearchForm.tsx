import { Dispatch, FC, SetStateAction, memo } from 'react'

import SearchColorRadios from '../SearchColorRadios'
import { SearchSelectBox } from '../../atoms'
import { useTastingSheetSearchForm } from '../../../hooks'
import { TastingSheetFilter } from '../../../types'

const TastingSheetSearchForm: FC<{
  setFilter: Dispatch<SetStateAction<TastingSheetFilter>>
}> = memo(({ setFilter }) => {
  const {
    onSubmit,
    color,
    onChangeColor,
    country,
    onChangeCountry,
    grape,
    onChangeGrape,
    grapeOptions,
    countries,
    onClickAllClear
  } = useTastingSheetSearchForm(setFilter)

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <SearchColorRadios selectedColor={color} onChange={onChangeColor} />
      <SearchSelectBox
        options={countries}
        id="country"
        label="国名"
        onChange={onChangeCountry}
        selectedOption={country}
      />
      <SearchSelectBox
        options={grapeOptions}
        id="grape"
        label="ぶどう品種"
        onChange={onChangeGrape}
        selectedOption={grape}
      />
      <button type="button" onClick={onClickAllClear} className="text-gray-400 text-left">
        クリア
      </button>
    </form>
  )
})

export default TastingSheetSearchForm
