import { FC } from 'react'

type Props = {
  onClick: () => void
}

const TastingSheetSettingSubmitButton: FC<Props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    テイスティングをはじめる
  </button>
)

export default TastingSheetSettingSubmitButton
