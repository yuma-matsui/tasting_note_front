import { TastingSheetApi } from '../../types'
import defaultImage from '../../assets/images/wineGlass.jpg'

const useHasWineAndImage = (tastingSheet: TastingSheetApi) => {
  const hasWine = tastingSheet.wine !== null
  const hasWineImage = tastingSheet.wine && tastingSheet.wine.image

  const cardImage = tastingSheet.wine?.image
    ? `${process.env.REACT_APP_CF_DOMAIN}/${tastingSheet.wine.image}`
    : defaultImage

  return {
    hasWine,
    hasWineImage,
    cardImage
  }
}

export default useHasWineAndImage
