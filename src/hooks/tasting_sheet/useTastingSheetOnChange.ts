import { ChangeEvent } from 'react'
import { InputOrSelect } from '../../types'

import useTastingSheetContext from './useTastingSheetContext'

const useTastingSheetOnChange = <T>() => {
  const { dispatch } = useTastingSheetContext()

  const onChange = (e: ChangeEvent<InputOrSelect<T>>) =>
    dispatch({
      type: e.target.name,
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    })

  return { onChange }
}

export default useTastingSheetOnChange
