import { FC, memo, ReactElement } from 'react'

import { NewTastingSheetSettingForm, StepsBar, TastingSheetBaseForm } from '../molecules'
import { DefaultLayout, FormController } from '../templates'
import { useMultiStepForm, useTastingSheetForm, useTastingSheetLabels } from '../../hooks'
import { TastingSheetTimer } from '../atoms'
import { TastingSheetDetailsTab } from '../organisms'

const NewTastingSheetPage: FC = memo(() => {
  const { handleSubmit, isValid, isSubmitting, onSubmit, register, errors, lessThanTwoItems, getValues, tastingSheet } =
    useTastingSheetForm()
  const labels = useTastingSheetLabels(tastingSheet.color)

  const steps: ReactElement[] = [
    <NewTastingSheetSettingForm register={register} errors={errors} />,
    ...labels.map(({ type, items, options }) => (
      <TastingSheetBaseForm
        type={type}
        items={items}
        options={options}
        register={register}
        lessThanTwoItems={lessThanTwoItems}
        getValues={getValues}
      />
    )),
    <TastingSheetDetailsTab tastingSheet={tastingSheet} />
  ]
  const { step, onClickPageControl, isFirstStep, isAppearanceStep, isLastStep, getButtonText, currentStepIndex } =
    useMultiStepForm(steps)

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        {!isFirstStep && <TastingSheetTimer tastingSheet={tastingSheet} isLastStep={isLastStep} />}
        {!isFirstStep && !isLastStep && <StepsBar currentStepIndex={currentStepIndex} />}
        <FormController
          onClick={onClickPageControl}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isAppearanceStep={isAppearanceStep}
          disabled={!isValid || isSubmitting}
          backButtonText={getButtonText('back')}
          nextButtonText={getButtonText('next')}
          tastingSheet={tastingSheet}
        >
          {step}
        </FormController>
      </form>
    </DefaultLayout>
  )
})

export default NewTastingSheetPage
