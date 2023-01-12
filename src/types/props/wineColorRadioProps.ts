import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormInputs from '../tasting_sheet/tastingSheetFormInputs'

type WineColorRadioProps = {
  color: string
  register: UseFormRegister<TastingSheetFormInputs>
}

export default WineColorRadioProps
