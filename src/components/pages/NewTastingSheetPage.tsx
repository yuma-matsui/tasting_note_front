import { FC, memo, ReactElement } from 'react'

import { metaContents } from '../../assets'
import { useMultiStepForm, useTastingSheetForm, useTastingSheetLabels } from '../../hooks'
import { TastingSheetTimer } from '../atoms'
import { HeadMeta, NewTastingSheetSettingForm, StepsBar, TastingSheetBaseForm } from '../molecules'
import { TastingSheetDetailsTab } from '../organisms'
import { DefaultLayout, FormController } from '../templates'

const NewTastingSheetPage: FC = memo(() => {
  const { description, path, title } = metaContents.newSheet
  const { errors, getValues, handleSubmit, isSubmitting, isValid, onSubmit, register, tastingSheet } =
    useTastingSheetForm()
  const labels = useTastingSheetLabels(tastingSheet.color)

  const steps: ReactElement[] = [
    <NewTastingSheetSettingForm register={register} errors={errors} />,
    ...labels.map(({ items, options, type }) => (
      <TastingSheetBaseForm type={type} items={items} options={options} register={register} getValues={getValues} />
    )),
    <TastingSheetDetailsTab tastingSheet={tastingSheet} />
  ]
  const { currentStepIndex, getButtonText, isAppearanceStep, isFirstStep, isLastStep, onClickPageControl, step } =
    useMultiStepForm(steps)

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          {!isFirstStep && <TastingSheetTimer tastingSheet={tastingSheet} isLastStep={isLastStep} />}
          {!isFirstStep && !isLastStep && (
            <StepsBar currentStepIndex={currentStepIndex} color={getValues('tastingSheet.color')} />
          )}
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
    </HeadMeta>
  )
})

export default NewTastingSheetPage
