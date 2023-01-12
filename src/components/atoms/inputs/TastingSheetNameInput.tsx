import { FC, memo } from 'react'
import { useTastingSheetContext, useTastingSheetOnChange } from '../../../hooks'
import { TastingSheetFormRegisterProps } from '../../../types'

const TastingSheetNameInput: FC<TastingSheetFormRegisterProps> = memo(({ register }) => {
  const { tastingSheet } = useTastingSheetContext()
  const { onChange } = useTastingSheetOnChange()

  return (
    <label htmlFor="name">
      シート名(任意)
      <input
        type="text"
        id="name"
        style={{ display: 'block' }}
        value={tastingSheet.name}
        {...register('name', { onChange })}
      />
    </label>
  )
})

export default TastingSheetNameInput
