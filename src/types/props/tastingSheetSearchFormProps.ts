import { Dispatch, SetStateAction } from 'react'

import TastingSheetFilter from '../tasting_sheet/tastingSheetFilter'

type TastingSheetSearchFormProps = {
  setFilter: Dispatch<SetStateAction<TastingSheetFilter>>
}

export default TastingSheetSearchFormProps
