import { FC, memo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../hooks'

const StartTastingButton: FC = memo(() => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const onClick = () => navigate('/tasting_sheets/new')

  const signedInPattern = 'sticky border-4 rounded-full border-yellow-200 text-yellow-200 bottom-2'

  return (
    <button type="button" onClick={onClick} className={`btn ${currentUser ? signedInPattern : ''}`}>
      テイスティングを始める
    </button>
  )
})

export default StartTastingButton
