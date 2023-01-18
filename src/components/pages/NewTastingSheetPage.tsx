import { FC, memo } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout } from '../templates'
import { useTastingSheetFormAllItems } from '../../hooks'

const NewTastingSheetPage: FC = memo(() => {
  const formItems = useTastingSheetFormAllItems()

  return (
    <DefaultLayout>
      <NewTastingSheetSettingForm />
      {formItems.map(({ type, items, options }) => (
        <TastingSheetBaseForm type={type} items={items} options={options} />
      ))}
      <TastingSheetConfirmationTab formItems={formItems} />
    </DefaultLayout>
  )
})

export default NewTastingSheetPage
