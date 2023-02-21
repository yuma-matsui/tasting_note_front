import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const StartTastingButton = memo(() => {
  const navigate = useNavigate()
  const onClick = () => navigate('/tasting_sheets/new')

  return (
    <button type="button" onClick={onClick}>
      テイスティングを始める
    </button>
  )
})

export default StartTastingButton
