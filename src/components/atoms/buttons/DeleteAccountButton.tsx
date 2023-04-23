import { FC, memo } from 'react'

import { useOnClickAuth, useOnClickOpenModal } from '../../../hooks'

const DeleteAccountButton: FC = memo(() => {
  const { onClickDeleteAccount } = useOnClickAuth()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    rightButton: (
      <button type="button" onClick={onClickDeleteAccount} className="text-theme-red">
        削除
      </button>
    )
  })

  return (
    <button type="button" onClick={onClickOpenModal} className="text-theme-pink">
      アカウント削除
    </button>
  )
})

export default DeleteAccountButton
