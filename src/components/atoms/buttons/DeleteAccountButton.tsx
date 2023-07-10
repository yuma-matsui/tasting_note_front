import { FC, memo } from 'react'

import { useOnClickAuth, useOnClickOpenModal } from '../../../hooks'

const DeleteAccountButton: FC = memo(() => {
  const { onClickDeleteAccount } = useOnClickAuth()
  const { onClickOpenModal } = useOnClickOpenModal({
    rightButton: (
      <button type="button" onClick={onClickDeleteAccount} className="text-theme-red">
        削除
      </button>
    ),
    text: '本当に削除してもよろしいですか？'
  })

  return (
    <button type="button" onClick={onClickOpenModal} className="text-gray-400">
      アカウント削除
    </button>
  )
})

export default DeleteAccountButton
