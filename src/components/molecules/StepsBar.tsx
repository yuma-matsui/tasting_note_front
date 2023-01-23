import { FC, memo } from 'react'

import { StepsBarProps, TastingSheetFormType } from '../../types'
import { formTitleFormat } from '../../utils'

const StepsBar: FC<StepsBarProps> = memo(({ currentStepIndex }) => {
  const steps: { name: TastingSheetFormType; condition: boolean }[] = [
    { name: 'appearance', condition: currentStepIndex >= 1 },
    { name: 'flavor', condition: currentStepIndex >= 2 },
    { name: 'taste', condition: currentStepIndex >= 3 },
    { name: 'conclusion', condition: currentStepIndex >= 4 }
  ]

  const setStepPrimary = (condition: boolean) => `step ${condition ? 'step-primary' : ''}`

  return (
    <ul className="steps">
      {steps.map(({ name, condition }) => (
        <li key={name} className={setStepPrimary(condition)}>
          {formTitleFormat(name)}
        </li>
      ))}
    </ul>
  )
})

export default StepsBar
