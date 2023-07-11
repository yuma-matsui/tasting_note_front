import { FC, memo } from 'react'

import { TASTING_TIME } from '../../../assets'
import { FormRegisterAndErrors } from '../../../types'
import { TastingSheetNameInput, TastingSheetTimeSelectBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import WineColorRadios from '../WineColorRadios'

const NewTastingSheetSettingForm: FC<FormRegisterAndErrors> = memo(({ errors, register }) => (
  <TastingSheetFormWrapper title="setting">
    <TastingSheetNameInput register={register} errors={errors} />
    <TastingSheetTimeSelectBox
      id="time"
      register={register}
      name="tastingSheet.time"
      options={TASTING_TIME}
      label="テイスティング時間（分）"
    />
    <WineColorRadios register={register} />
  </TastingSheetFormWrapper>
))

export default NewTastingSheetSettingForm
