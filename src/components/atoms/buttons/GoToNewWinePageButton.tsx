import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTastingSheetStateForWine } from '../../../hooks'
import { TastingSheetApi } from '../../../types'

const GoToNewWinePageButton: FC<{
  tastingSheet: TastingSheetApi
}> = memo(({ tastingSheet }) => {
  const navigate = useNavigate()
  const state = useTastingSheetStateForWine(tastingSheet)

  const onClick = () => navigate('/wines/new', { state })

  return (
    <button type="button" className="btn" onClick={onClick}>
      ワインの登録
    </button>
  )
})

export default GoToNewWinePageButton
