import { FC, memo } from 'react'
import { useOnClickAuth } from '../../../hooks'

const DeleteAccountButton: FC = memo(() => {
  const { onClickDeleteAccount } = useOnClickAuth()

  return (
    <button type="button" onClick={onClickDeleteAccount} className="text-red-700">
      削除
    </button>
  )
})

export default DeleteAccountButton
