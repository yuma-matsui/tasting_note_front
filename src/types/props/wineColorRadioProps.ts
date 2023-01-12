import { UseFormRegister } from 'react-hook-form'
import TastingSheetSettingFormInputs from '../tasting_sheet/tastingSheetSettingFormInputs'

type WineColorRadioProps = {
  color: string
  register: UseFormRegister<TastingSheetSettingFormInputs>
}

export default WineColorRadioProps
