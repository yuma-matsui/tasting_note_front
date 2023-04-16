import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useAuthContext, useCheckEditingForm, useOnClickAuth, useOnClickOpenModal } from '../../hooks'
import { DeleteAccountButton, FooterLink } from '../atoms'

const Footer: FC = memo(() => {
  const { currentUser } = useAuthContext()
  const { isEditing } = useCheckEditingForm()
  const { onClickSignOut } = useOnClickAuth()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    rightButton: <DeleteAccountButton />
  })

  return (
    <footer className="flex flex-col items-center border-t border-gray-500 pt-4 mt-4">
      <FooterLink />
      {!isEditing && (
        <ul className="flex list-none">
          <li className="mr-4">利用規約</li>
          <li>
            <Link to="/pp">プライバシーポリシー</Link>
          </li>
          {currentUser && (
            <>
              <li>
                <button type="button" onClick={onClickSignOut}>
                  ログアウト
                </button>
              </li>
              <li>
                <button type="button" onClick={onClickOpenModal} className="text-red-700">
                  アカウント削除
                </button>
              </li>
            </>
          )}
        </ul>
      )}
      <p>&copy; 2023 yuma-matsui</p>
    </footer>
  )
})

export default Footer
