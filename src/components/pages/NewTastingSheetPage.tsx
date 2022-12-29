import { FC } from 'react'
import { AppearanceProvider, TastingSheetProvider } from '../../providers'
import { NewTastingSheetAppearanceForm, NewTastingSheetSettingForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      <hr />

      <AppearanceProvider>
        <NewTastingSheetAppearanceForm />
      </AppearanceProvider>
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
