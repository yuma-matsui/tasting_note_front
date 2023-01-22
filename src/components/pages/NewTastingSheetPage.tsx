import { FC, memo, ReactElement } from 'react'

import { TastingSheetConfirmationTab } from '../organisms'
import { NewTastingSheetSettingForm, TastingSheetBaseForm } from '../molecules'
import { FormController, LogoOnlyLayout } from '../templates'
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
  const { step, onClickPageControl, isFirstStep, isLastStep, getButtonText } = useMultiStepForm(steps)

  return (
    <LogoOnlyLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          onClick={onClickPageControl}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          disabled={!isValid || isSubmitting}
          backButtonText={getButtonText('back')}
          nextButtonText={getButtonText('next')}
        >
          {step}
        </FormController>
      </form>
    </LogoOnlyLayout>
  )
})

export default NewTastingSheetPage
