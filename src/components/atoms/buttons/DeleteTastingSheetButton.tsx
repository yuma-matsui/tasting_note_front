import { FC, memo } from 'react'
import { BsExclamationTriangle } from 'react-icons/bs'

const DeleteTastingSheetButton: FC<{ id: number }> = memo(({ id }) => (
  <button type="button">
    <div className="flex items-center">
      <BsExclamationTriangle />
      <span className="ml-2">削除</span>
    </div>
  </button>
))

export default DeleteTastingSheetButton
