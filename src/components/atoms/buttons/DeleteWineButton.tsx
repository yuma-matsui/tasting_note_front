import { FC, memo } from 'react'

import { useDeleteWine } from '../../../hooks'
import { WineApi } from '../../../types'

const DeleteWineButton: FC<{ wine: WineApi }> = memo(({ wine }) => {
  const { onClickDeleteWine } = useDeleteWine(wine)

  return (
    <button type="button" onClick={onClickDeleteWine} className="text-theme-red">
      削除
    </button>
  )
})

export default DeleteWineButton
