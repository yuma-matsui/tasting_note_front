import { FC, memo } from 'react'
import { TASTING_TIME } from '../../../assets'
import PolymorphicSelectBox from './PolymorphicSelectBox'

const TastingSheetTimeSelectBox: FC = memo(() => (
  <PolymorphicSelectBox label="テイスティング時間(分)" name="time" options={TASTING_TIME.map((time) => String(time))} />
))

export default TastingSheetTimeSelectBox
