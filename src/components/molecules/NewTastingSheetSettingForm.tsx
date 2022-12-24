import { FC, memo } from 'react'
import { useTastingSheetContext } from '../../hooks'
import { BaseForm, TastingSheetNameInput, TastingSheetSettingSubmitButton, TastingSheetTimeSelectBox } from '../atoms'
import TastingSheetWineColorRadios from './TastingSheetWineColorRadios'

const NewTastingSheetSettingForm: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()

  const onClickCreateSheet = () => console.log(tastingSheet)

  return (
    <BaseForm>
      <h2>テイスティングシートの設定</h2>
      <TastingSheetNameInput />
      <TastingSheetTimeSelectBox />
      <TastingSheetWineColorRadios />
      <TastingSheetSettingSubmitButton onClick={onClickCreateSheet} />
    </BaseForm>
  )
})

export default NewTastingSheetSettingForm
