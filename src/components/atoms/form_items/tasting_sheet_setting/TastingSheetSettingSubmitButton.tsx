import { FC } from 'react'

type Props = {
  onClick: () => void
}

const TastingSheetSettingSubmitButton: FC<Props> = ({ onClick }) => (
  <input type="submit" value="テイスティングをはじめる" onClick={onClick} />
)

export default TastingSheetSettingSubmitButton
