import { FC, memo } from 'react'

import { WineApi } from '../../../types'
import { useDeleteWine } from '../../../hooks'

const DeleteWineButton: FC<{ wine: WineApi }> = memo(({ wine }) => {
  const { onClickDeleteWine } = useDeleteWine(wine)

  return (
    <button type="button" onClick={onClickDeleteWine} className="text-theme-red">
      削除
    </button>
  )
})

export default DeleteWineButton
