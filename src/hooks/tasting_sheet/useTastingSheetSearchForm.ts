import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'

import { COUNTRIES, GRAPES_RED, GRAPES_WHITE } from '../../assets'
import { TastingSheetFilter } from '../../types'

const useTastingSheetSearchForm = (setFilter: Dispatch<SetStateAction<TastingSheetFilter>>) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  const defaultValue = '指定なし'

  const [color, setColor] = useState(defaultValue)
  const [country, setCountry] = useState(defaultValue)
  const [grape, setGrape] = useState(defaultValue)

  const onChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'color') setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setColor(e.target.value)
    setGrape(defaultValue)
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
    setColor(defaultValue)
    setCountry(defaultValue)
    setGrape(defaultValue)
    setFilter({
      color: defaultValue,
      country: defaultValue,
      grape: defaultValue
    })
  }

  return {
    onSubmit,
    color,
    onChangeColor,
    country,
    onChangeCountry,
    grape,
    onChangeGrape,
    grapeOptions,
    countries: COUNTRIES,
    onClickAllClear
  }
}

export default useTastingSheetSearchForm
