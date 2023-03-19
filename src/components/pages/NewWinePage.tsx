import { FC } from 'react'

import { NewWineForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewWinePage: FC = () => (
  <DefaultLayout>
    <NewWineForm />
  </DefaultLayout>
)

export default NewWinePage
