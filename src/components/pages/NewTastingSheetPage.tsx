import { FC } from 'react'
import { FORM_ITEMS } from '../../assets'
import { TastingSheetProvider } from '../../providers'
import { ConclusionSelectBoxes, NewTastingSheetSettingForm, PolymorphicForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewTastingSheetPage: FC = () => (
  <DefaultLayout>
    <TastingSheetProvider>
      <NewTastingSheetSettingForm />
      <hr />
      {FORM_ITEMS.map(({ type, white, red }) =>
        type !== 'まとめ' ? (
          <PolymorphicForm key={type} type={type} white={white} red={red} />
        ) : (
          <PolymorphicForm key={type} type={type} white={white} red={red}>
            <ConclusionSelectBoxes />
          </PolymorphicForm>
        )
      )}
    </TastingSheetProvider>
  </DefaultLayout>
)

export default NewTastingSheetPage
