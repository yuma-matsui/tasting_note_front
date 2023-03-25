import { FC, memo } from 'react'

import { WineApi } from '../../types'
import { WineForm } from '../molecules'
import { DefaultLayout } from '../templates'

const EditWinePage: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <DefaultLayout>
    <WineForm wine={wine} />
  </DefaultLayout>
))

export default EditWinePage
