import { ChangeEvent, Dispatch } from 'react'

import { TastingSheetReducerAction } from '../../types'

const useTastingSheetCheckBoxOnChange = (dispatch: Dispatch<TastingSheetReducerAction>) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: e.target.name,
      payload: {
        value: e.target.value
      }
    })

  return { onChange }
}

export default useTastingSheetCheckBoxOnChange
