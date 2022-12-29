import AppearanceAllLabels from './appearanceAllLabels'
import AppearanceHeading from './appearanceHeading'
import AppearanceName from './appearanceName'
import AppearanceSubHeading from './appearanceSubHeading'

type AppearanceItem = {
  heading: AppearanceHeading
  name: AppearanceName
  subHeading?: AppearanceSubHeading
  labels: AppearanceAllLabels[]
}

export default AppearanceItem
