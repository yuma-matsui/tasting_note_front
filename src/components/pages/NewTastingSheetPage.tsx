import { FC } from 'react'
import { TastingSheetConfirmationTab } from '../organisms'
import { AppearanceForm, ConclusionForm, FlavorForm, NewTastingSheetSettingForm, TasteForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <NewTastingSheetSettingForm />
    <hr />
    <AppearanceForm />
    <FlavorForm />
    <TasteForm />
    <ConclusionForm />
    <TastingSheetConfirmationTab />
  </DefaultLayout>
)

export default NewTastingSheetPage
