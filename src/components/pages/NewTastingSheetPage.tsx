import { FC } from 'react'
import { TastingSheetForms } from '../organisms'
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
    </DefaultLayout>
  )
}

export default NewTastingSheetPage
