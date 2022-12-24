import { FC } from 'react'
import { useTastingSheetContext } from '../../../../hooks'

const TastingSheetSettingSubmitButton: FC = () => {
  const { tastingSheet } = useTastingSheetContext()

  const onClick = () => console.log(tastingSheet)

  return <input type="submit" value="テイスティングをはじめる" onClick={onClick} />
}

export default TastingSheetSettingSubmitButton
