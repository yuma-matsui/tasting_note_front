import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

const GoToTopPageButton: FC<{ text: string }> = memo(({ text }) => {
  const navigate = useNavigate()
  const onClick = () => navigate('/')

  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
})

export default GoToTopPageButton
