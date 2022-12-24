import { ChangeEvent, FC, memo, useState } from 'react'
import { useTastingSheetContext } from '../../../../hooks'

const TastingSheetNameInput: FC = memo(() => {
  const { setTastingSheet } = useTastingSheetContext()

  const [sheetName, setSheetName] = useState<string>('')
  const onChangeSheetName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setSheetName(name)
    setTastingSheet((prev) => ({ ...prev, name }))
  }

  return (
    <label htmlFor="sheet-name">
      シート名(任意)
      <input type="text" id="sheet-name" style={{ display: 'block' }} value={sheetName} onChange={onChangeSheetName} />
    </label>
  )
})

export default TastingSheetNameInput
