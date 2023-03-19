import { UseFormRegister } from 'react-hook-form'

import WineFormState from '../wine/wineFormState'
import WineUseFormName from '../wine/wineUseFormName'

type WineSelectBoxProps = {
  name: WineUseFormName
  register: UseFormRegister<WineFormState>
  options: string[]
  label: string
}

export default WineSelectBoxProps
