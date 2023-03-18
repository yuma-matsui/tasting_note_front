import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

const GoToNewWinePageButton: FC = memo(() => {
  const navigate = useNavigate()
  const onClick = () => navigate('/wines/new')

  return (
    <button type="button" className="btn" onClick={onClick}>
      ワインの登録
    </button>
  )
})

export default GoToNewWinePageButton
