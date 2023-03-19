import { FC, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useTastingSheetContext, useTastingSheetStateForWine } from '../../../hooks'

const GoToNewWinePageButton: FC = memo(() => {
  const navigate = useNavigate()
  const { tastingSheetId } = useParams()
  const { tastingSheet } = useTastingSheetContext()
  const state = useTastingSheetStateForWine({
    ...tastingSheet,
    id: Number(tastingSheetId),
    createdAt: ''
  })

  const onClick = () => navigate('/wines/new', { state })

  return (
    <button type="button" className="btn" onClick={onClick}>
      ワインの登録
    </button>
  )
})

export default GoToNewWinePageButton
