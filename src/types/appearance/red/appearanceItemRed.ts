import AppearanceItem from '../shared/appearanceItem'
import AppearanceCollectionRed from './appearanceCollectionRed'

type AppearanceItemRed = AppearanceItem & {
  collection: AppearanceCollectionRed
}

export default AppearanceItemRed
