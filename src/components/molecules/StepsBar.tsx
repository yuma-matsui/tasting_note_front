import { FC, memo } from 'react'

import { StepsBarProps } from '../../types'

const StepsBar: FC<StepsBarProps> = memo(({ currentStepIndex }) => {
  const steps = [
    { name: 'Appearance', condition: currentStepIndex >= 1 },
    { name: 'Flavor', condition: currentStepIndex >= 2 },
    { name: 'Taste', condition: currentStepIndex >= 3 },
    { name: 'Conclusion', condition: currentStepIndex >= 4 }
  ]

  const setStepPrimary = (condition: boolean) => `step ${condition ? 'step-primary' : ''}`

  return (
    <ul className="steps">
      {steps.map(({ name, condition }) => (
        <li className={setStepPrimary(condition)}>{name}</li>
      ))}
    </ul>
  )
})

export default StepsBar
