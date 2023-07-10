import { FC, memo } from 'react'

import SearchColorRadios from '../SearchColorRadios'
import { SearchSelectBox } from '../../atoms'
import { useTastingSheetSearchForm } from '../../../hooks'
import { TastingSheetSearchFormProps } from '../../../types'

const TastingSheetSearchForm: FC<TastingSheetSearchFormProps> = memo(({ setFilter }) => {
  const {
    color,
    countries,
    country,
    grape,
    grapeOptions,
    onChangeColor,
    onChangeCountry,
    onChangeGrape,
    onClickAllClear,
    onSubmit
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
