import { FC, memo } from 'react'

import useDeleteWine from '../../../hooks/api/useDeleteWine'
import { WineApi } from '../../../types'

const DeleteWineButton: FC<{ wine: WineApi }> = memo(({ wine }) => {
  const { onClickDeleteWine } = useDeleteWine(wine)

  return (
    <button type="button" onClick={onClickDeleteWine}>
      削除
    </button>
  )
})

export default DeleteWineButton
