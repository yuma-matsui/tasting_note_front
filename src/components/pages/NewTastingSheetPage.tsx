import { FC } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout } from '../templates'
import { TastingSheetProvider } from '../../providers'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      <TastingSheetBaseForm type="appearance" />
      <TastingSheetBaseForm type="flavor" />
      <TastingSheetBaseForm type="taste" />
      <TastingSheetBaseForm type="conclusion" />
      <TastingSheetConfirmationTab />
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
