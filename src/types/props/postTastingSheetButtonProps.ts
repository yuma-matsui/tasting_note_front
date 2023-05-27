import { User } from 'firebase/auth'

import TastingSheet from '../tasting_sheet/tastingSheet'

type PostTastingSheetButtonProps = {
  tastingSheet: TastingSheet
  currentUser: User | null | undefined
}

export default PostTastingSheetButtonProps
