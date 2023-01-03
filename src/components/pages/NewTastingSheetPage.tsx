import { FC } from 'react'
import { TastingSheetProvider } from '../../providers'
import { NewTastingSheetSettingForm } from '../molecules'
import { TastingSheetForms } from '../organisms'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      <TastingSheetForms />
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
