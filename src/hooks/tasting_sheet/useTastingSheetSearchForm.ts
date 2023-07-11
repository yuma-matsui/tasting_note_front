import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'

import { COUNTRIES, GRAPES_RED, GRAPES_WHITE } from '../../assets'
import { TastingSheetFilter } from '../../types'
import { FILTER_DEFAULT_VALUE, initialFilter } from '../../utils'

const useTastingSheetSearchForm = (setFilter: Dispatch<SetStateAction<TastingSheetFilter>>) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  const [color, setColor] = useState(FILTER_DEFAULT_VALUE)
  const [country, setCountry] = useState(FILTER_DEFAULT_VALUE)
  const [grape, setGrape] = useState(FILTER_DEFAULT_VALUE)

  const onChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'color') setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setColor(e.target.value)
    setGrape(FILTER_DEFAULT_VALUE)
  }

  const onChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'country') setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setCountry(e.target.value)
  }

  const onChangeGrape = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'grape') setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setGrape(e.target.value)
  }

  let grapeOptions: string[] = [...GRAPES_WHITE, ...GRAPES_RED]
  if (color === 'red') grapeOptions = GRAPES_RED
  if (color === 'white') grapeOptions = GRAPES_WHITE

  const onClickAllClear = () => {
    setColor(FILTER_DEFAULT_VALUE)
    setCountry(FILTER_DEFAULT_VALUE)
    setGrape(FILTER_DEFAULT_VALUE)
    setFilter({
      ...initialFilter
    })
  }

  return {
    color,
    countries: COUNTRIES,
    country,
    grape,
    grapeOptions,
    onChangeColor,
    onChangeCountry,
    onChangeGrape,
    onClickAllClear,
    onSubmit
  }
}

export default useTastingSheetSearchForm
