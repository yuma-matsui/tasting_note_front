import { FC, memo } from 'react'
import { useTastingSheetContext } from '../../../../hooks'

const TastingSheetSettingSubmitButton: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()

  const onClick = () => console.log(tastingSheet)

  return <input type="submit" value="テイスティングをはじめる" onClick={onClick} />
})

export default TastingSheetSettingSubmitButton
