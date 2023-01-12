import { FC, memo } from 'react'
import { TASTING_TIME } from '../../../assets'
import { TastingSheetFormRegisterProps } from '../../../types'
import PolymorphicSelectBox from './PolymorphicSelectBox'

const TastingSheetTimeSelectBox: FC<TastingSheetFormRegisterProps> = memo(({ register }) => (
  <PolymorphicSelectBox
    label="テイスティング時間(分)"
    options={TASTING_TIME.map((time) => String(time))}
    name="time"
    register={register}
  />
))

export default TastingSheetTimeSelectBox
