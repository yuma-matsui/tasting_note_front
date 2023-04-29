import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

const GoToAnotherPageButton: FC<{
  text: string
  to: string
}> = memo(({ text, to }) => {
  const navigate = useNavigate()
  const onClick = () => navigate(to)

  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
})

export default GoToAnotherPageButton
