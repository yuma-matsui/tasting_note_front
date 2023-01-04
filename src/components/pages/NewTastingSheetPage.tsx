import { FC } from 'react'
import { TastingSheetConfirmationTab, TastingSheetForms } from '../organisms'
import { NewTastingSheetSettingForm } from '../molecules'
import { DefaultLayout } from '../templates'
import { useTastingSheetFormItems } from '../../hooks'

const NewTastingSheetPage: FC = () => {
  const { formItems } = useTastingSheetFormItems()

  return (
    <DefaultLayout>
      <NewTastingSheetSettingForm />
      <hr />
      <TastingSheetForms formItems={formItems} />
      <TastingSheetConfirmationTab formItems={formItems} />
    </DefaultLayout>
  )
}

export default NewTastingSheetPage
