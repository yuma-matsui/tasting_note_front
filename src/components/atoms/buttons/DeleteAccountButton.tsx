import { FC, memo } from 'react'
import { useOnClickAuth, useOnClickOpenModal } from '../../../hooks'

const DeleteAccountButton: FC = memo(() => {
  const { onClickDeleteAccount } = useOnClickAuth()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    rightButton: (
      <button type="button" onClick={onClickDeleteAccount} className="text-red-700">
        削除
      </button>
    )
  })

  return (
    <button type="button" onClick={onClickOpenModal} className="text-red-700">
      アカウント削除
    </button>
  )
})

export default DeleteAccountButton
