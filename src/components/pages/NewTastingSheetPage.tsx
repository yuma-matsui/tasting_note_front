import { FC } from 'react'
import { AppearanceProvider, FlavorProvider, TastingSheetProvider } from '../../providers'
import { AppearanceForm, FlavorForm, NewTastingSheetSettingForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      <AppearanceProvider>
        <AppearanceForm />
      </AppearanceProvider>
      <hr />
      <FlavorProvider>
        <FlavorForm />
      </FlavorProvider>
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
