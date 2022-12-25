import AppearanceLabel from './appearanceLabel'
import AppearanceName from './appearanceName'
import AppearanceSubLabel from './appearanceSubLabel'

type AppearanceItem = {
  label: AppearanceLabel
  name: AppearanceName
  subLabel?: AppearanceSubLabel
}

export default AppearanceItem
