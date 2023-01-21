import { FC, memo, ReactElement } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout, FormController } from '../templates'
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
  const { step, onClickPageControl, isFirstStep, isLastStep, isAppearanceStep, isConclusionStep } =
    useMultiStepForm(steps)

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          onClick={onClickPageControl}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isAppearanceStep={isAppearanceStep}
          isConclusionStep={isConclusionStep}
          disabled={!isValid || isSubmitting}
        >
          {step}
        </FormController>
      </form>
    </DefaultLayout>
  )
})

export default NewTastingSheetPage
