import { FC, memo } from 'react'
import { BaseForm, TastingSheetNameInput, TastingSheetSettingSubmitButton, TastingSheetTimeSelectBox } from '../atoms'
import TastingSheetWineColorRadios from './TastingSheetWineColorRadios'

const NewTastingSheetSettingForm: FC = memo(() => (
  <BaseForm>
    <h2>テイスティングシートの設定</h2>
    <TastingSheetNameInput />
    <TastingSheetTimeSelectBox />
    <TastingSheetWineColorRadios />
    <TastingSheetSettingSubmitButton />
  </BaseForm>
))

export default NewTastingSheetSettingForm
