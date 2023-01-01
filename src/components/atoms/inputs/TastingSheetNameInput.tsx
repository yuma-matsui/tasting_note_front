import { FC, memo } from 'react'
import { useTastingSheetContext, useTastingSheetOnChange } from '../../../hooks'

const TastingSheetNameInput: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()
  const { onChange } = useTastingSheetOnChange()

  return (
    <label htmlFor="name">
      シート名(任意)
      <input
        type="text"
        name="name"
        id="name"
        style={{ display: 'block' }}
        value={tastingSheet.name}
        onChange={onChange}
      />
    </label>
  )
})

export default TastingSheetNameInput
