import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetButtonClassName, useTastingSheetStateForWine } from '../../../hooks'
import { TastingSheetApi } from '../../../types'

const GoToNewWinePageButton: FC<{
  tastingSheet: TastingSheetApi
}> = memo(({ tastingSheet }) => {
  const navigate = useNavigate()
  const state = useTastingSheetStateForWine(tastingSheet)
  const { className } = useGetButtonClassName(tastingSheet.color)

  const onClick = () => navigate('/wines/new', { state })

  return (
    <button type="button" onClick={onClick} className={`${className} block mx-auto`}>
      ワインの登録
    </button>
  )
})

export default GoToNewWinePageButton
