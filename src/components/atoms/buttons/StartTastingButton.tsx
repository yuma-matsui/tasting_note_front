import { FC, memo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useStartTastingButtonStyles } from '../../../hooks'

const StartTastingButton: FC = memo(() => {
  const navigate = useNavigate()
  const onClick = () => navigate('/tasting_sheets/new')
  const { text, className } = useStartTastingButtonStyles()

  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  )
})

export default StartTastingButton
