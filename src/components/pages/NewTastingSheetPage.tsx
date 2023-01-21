import { FC, memo, ReactElement } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout, TastingSheetFormStepButtons } from '../templates'
import { useMultiStepForm, useTastingSheetForm, useTastingSheetFormAllItems } from '../../hooks'

const NewTastingSheetPage: FC = memo(() => {
  const formItems = useTastingSheetFormAllItems()
  const { handleSubmit, isValid, isSubmitting, onSubmit, register, errors, lessThanTwoItems, getValues } =
    useTastingSheetForm()

  const steps: ReactElement[] = [
    <NewTastingSheetSettingForm register={register} errors={errors} />,
    ...formItems.map(({ type, items, options }) => (
      <TastingSheetBaseForm
        type={type}
        items={items}
        options={options}
        register={register}
        lessThanTwoItems={lessThanTwoItems}
        getValues={getValues}
      />
    )),
    <TastingSheetConfirmationTab formItems={formItems} />
  ]
  const { step, next, back, isFirstStep, isLastStep } = useMultiStepForm(steps)

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TastingSheetFormStepButtons
          back={back}
          next={next}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          disabled={!isValid || isSubmitting}
        >
          {step}
        </TastingSheetFormStepButtons>
      </form>
    </DefaultLayout>
  )
})

export default NewTastingSheetPage
