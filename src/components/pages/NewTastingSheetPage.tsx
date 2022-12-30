import { FC } from 'react'
import { AppearanceProvider, FlavorProvider, TastingSheetProvider } from '../../providers'
import { NewTastingSheetAppearanceForm, NewTastingSheetFlavorForm, NewTastingSheetSettingForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      <AppearanceProvider>
        <NewTastingSheetAppearanceForm />
      </AppearanceProvider>
      <hr />
      <FlavorProvider>
        <NewTastingSheetFlavorForm />
      </FlavorProvider>
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
