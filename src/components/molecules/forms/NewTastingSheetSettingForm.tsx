import { FC, memo } from 'react'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { FormRegisterAndErrors } from '../../../types'
import { TastingSheetCheckBox, TastingSheetNameInput, TastingSheetSelectBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'

const NewTastingSheetSettingForm: FC<FormRegisterAndErrors> = memo(({ register, errors }) => (
  <TastingSheetFormWrapper title="setting">
    <TastingSheetNameInput register={register} errors={errors} />
    <TastingSheetSelectBox
      id="time"
      register={register}
      name="tastingSheet.time"
      options={TASTING_TIME}
      label="テイスティング時間"
    />
    <div>
      <p>ワインの色</p>
      {WINE_COLORS.map((color) => (
        <TastingSheetCheckBox
          key={color}
          id={color}
          value={color}
          register={register}
          name="tastingSheet.color"
          label={color === 'white' ? '白' : '赤'}
        />
      ))}
    </div>
  </TastingSheetFormWrapper>
))

export default NewTastingSheetSettingForm
