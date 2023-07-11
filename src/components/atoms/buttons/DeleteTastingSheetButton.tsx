import { FC, memo } from 'react'

import { useDeleteTastingSheet } from '../../../hooks'

const DeleteTastingSheetButton: FC<{ id: number }> = memo(({ id }) => {
  const { onClickDelete } = useDeleteTastingSheet(id)

  return (
    <button type="button" onClick={onClickDelete} className="text-theme-red">
      削除
    </button>
  )
})

export default DeleteTastingSheetButton
