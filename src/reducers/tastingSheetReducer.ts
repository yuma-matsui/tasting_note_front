import { Reducer } from 'react'
import { TastingSheet, TastingSheetReducerAction } from '../types'

const tastingSheetReducer: Reducer<TastingSheet, TastingSheetReducerAction> = (
  prevSheet,
  { type, payload: { name, value } }
) => {
  switch (type) {
    case 'time':
      return { ...prevSheet, [name]: Number(value) }
    default:
      return { ...prevSheet, [name]: value }
  }
}

export default tastingSheetReducer
