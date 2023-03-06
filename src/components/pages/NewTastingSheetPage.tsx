import { FC, memo, ReactElement } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, StepsBar, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout, FormController } from '../templates'
import { useMultiStepForm, useTastingSheetForm, useTastingSheetFormAllItems } from '../../hooks'
import { TastingSheetTimer } from '../atoms'

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
  const { step, onClickPageControl, isFirstStep, isAppearanceStep, isLastStep, getButtonText, currentStepIndex } =
    useMultiStepForm(steps)

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isFirstStep && <TastingSheetTimer isLastStep={isLastStep} />}
        {!isFirstStep && !isLastStep && <StepsBar currentStepIndex={currentStepIndex} />}
        <FormController
          onClick={onClickPageControl}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isAppearanceStep={isAppearanceStep}
          disabled={!isValid || isSubmitting}
          backButtonText={getButtonText('back')}
          nextButtonText={getButtonText('next')}
        >
          {step}
        </FormController>
      </form>
    </DefaultLayout>
  )
})

export default NewTastingSheetPage
