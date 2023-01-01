import { FC } from 'react'
import { FORM_ITEMS } from '../../assets'
import { TastingSheetProvider } from '../../providers'
import { NewTastingSheetSettingForm, PolymorphicForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      {FORM_ITEMS.map(({ type, white, red }) => (
        <PolymorphicForm key={type} type={type} white={white} red={red} />
      ))}
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
