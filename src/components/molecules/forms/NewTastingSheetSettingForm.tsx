import { FC, memo } from 'react'

import { TASTING_TIME, WINE_COLORS } from '../../../assets'
import { FormRegisterAndErrors } from '../../../types'
import { TastingSheetCheckBox, TastingSheetNameInput, TastingSheetSelectBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'

const NewTastingSheetSettingForm: FC<FormRegisterAndErrors> = memo(({ register, errors }) => (
  <TastingSheetFormWrapper title="setting">
    <TastingSheetNameInput register={register} errors={errors} />

    <div>
      <p>テイスティング時間</p>
      <TastingSheetSelectBox id="time" register={register} name="tastingSheet.time" options={TASTING_TIME} />
    </div>

    <div>
      <p>ワインの色</p>
      <div>
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
    </div>
  </TastingSheetFormWrapper>
))

export default NewTastingSheetSettingForm
