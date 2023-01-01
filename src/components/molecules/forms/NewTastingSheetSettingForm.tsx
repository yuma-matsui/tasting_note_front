import { FC, memo } from 'react'

import { TastingSheetNameInput, TastingSheetSettingSubmitButton, TastingSheetTimeSelectBox } from '../../atoms'
import TastingSheetWineColorRadios from '../TastingSheetWineColorRadios'
import BaseForm from './BaseForm'

const NewTastingSheetSettingForm: FC = memo(() => (
  <>
    <h2>テイスティングシートの設定</h2>
    <BaseForm>
      <TastingSheetNameInput />
      <TastingSheetTimeSelectBox />
      <TastingSheetWineColorRadios />
      <TastingSheetSettingSubmitButton />
    </BaseForm>
  </>
))

export default NewTastingSheetSettingForm
