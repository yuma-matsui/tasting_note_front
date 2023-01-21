import { useNavigate } from 'react-router-dom'
import { useTastingSheetContext } from '../../../hooks'
import { initialTastingSheet } from '../../../utils'

const StartTastingButton = () => {
  const { setTastingSheet } = useTastingSheetContext()
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/tasting_sheets/new')
    setTastingSheet({ ...initialTastingSheet })
  }

  return (
    <button type="button" onClick={onClick}>
      テイスティングを始める
    </button>
  )
}

export default StartTastingButton
