import { UseFormRegister } from 'react-hook-form'

import WineFormState from '../wine/wineFormState'
import WineUseFormName from '../wine/wineUseFormName'

type WineSelectBoxProps = {
  name: WineUseFormName
  label: string
  options: string[]
  register: UseFormRegister<WineFormState>
}

export default WineSelectBoxProps
