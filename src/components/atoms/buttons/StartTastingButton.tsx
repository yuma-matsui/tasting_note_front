import { useNavigate } from 'react-router-dom'

const StartTastingButton = () => {
  const navigate = useNavigate()
  const onClick = () => navigate('/tasting_sheets/new')

  return (
    <button type="button" onClick={onClick}>
      テイスティングを始める
    </button>
  )
}

export default StartTastingButton
