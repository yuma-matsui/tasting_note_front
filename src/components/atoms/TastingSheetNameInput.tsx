import { ChangeEvent, FC, memo, useState } from 'react'
import { useTastingSheetContext } from '../../hooks'

const TastingSheetNameInput: FC = memo(() => {
  const { setTastingSheet } = useTastingSheetContext()

  const [name, setName] = useState<string>('')
  const onChangeSheetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setTastingSheet((prev) => ({ ...prev, name }))
  }

  return (
    <label htmlFor="sheet_name">
      シート名(任意)
      <input type="text" id="sheet_name" style={{ display: 'block' }} value={name} onChange={onChangeSheetName} />
    </label>
  )
})

export default TastingSheetNameInput
