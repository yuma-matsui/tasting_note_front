import { FC, memo } from 'react'

import { TastingSheetFormType } from '../../types'
import { formTitleFormat } from '../../utils'
import WineColor from '../../types/tasting_sheet/wineColor'

const StepsBar: FC<{
  currentStepIndex: number
  color: WineColor
}> = memo(({ currentStepIndex, color }) => {
  const steps: { name: TastingSheetFormType; condition: boolean }[] = [
    { name: 'appearance', condition: currentStepIndex >= 1 },
    { name: 'flavor', condition: currentStepIndex >= 2 },
    { name: 'taste', condition: currentStepIndex >= 3 },
    { name: 'conclusion', condition: currentStepIndex >= 4 }
  ]

  const stepColor = color === 'red' ? 'step-error' : 'step-success'
  const setStepPrimary = (condition: boolean) => `step ${condition ? stepColor : ''} text-white`

  return (
    <ul className="steps mb-4">
      {steps.map(({ name, condition }) => (
        <li key={name} className={setStepPrimary(condition)}>
          <span className="text-black">{formTitleFormat(name)}</span>
        </li>
      ))}
    </ul>
  )
})

export default StepsBar
