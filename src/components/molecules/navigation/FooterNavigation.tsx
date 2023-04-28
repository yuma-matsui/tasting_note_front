import { FC, memo } from 'react'

import { useAuthContext } from '../../../hooks'
import { DeleteAccountButton, FooterLinkWrapper } from '../../atoms'

const FooterNavigation: FC = memo(() => {
  const { currentUser } = useAuthContext()

  return (
    <nav className="my-4">
      <ul className="flex flex-col items-center md:flex-row md:items-start text-sm">
        <li className="mb-2">
          <FooterLinkWrapper text="利用規約" />
        </li>
        <li className="mb-2 md:ml-4">
          <FooterLinkWrapper text="プライバシーポリシー" />
        </li>
        {currentUser && (
          <>
            <li className="mb-2 md:ml-4">
              <FooterLinkWrapper text="ログアウト" />
            </li>
            <li className="md:ml-4">
              <DeleteAccountButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  )
})

export default FooterNavigation
