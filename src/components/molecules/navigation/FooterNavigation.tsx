import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useAuthContext, useCheckEditingForm } from '../../../hooks'
import { DeleteAccountButton, FooterLinkWrapper, SignOutButton } from '../../atoms'

const FooterNavigation: FC = memo(() => {
  const { currentUser } = useAuthContext()
  const { isEditing } = useCheckEditingForm()

  return (
    <nav className="my-4">
      <ul className="flex flex-col items-center md:flex-row md:items-start text-sm">
        <li className="mb-2">
          <FooterLinkWrapper
            text="利用規約"
            defaultLink={<Link to="/tos">利用規約</Link>}
            linkOnModal={<Link to="/tos">はい</Link>}
            isEditing={isEditing}
          />
        </li>
        <li className="mb-2 md:ml-4">
          <FooterLinkWrapper
            text="プライバシーポリシー"
            defaultLink={<Link to="/pp">プライバシーポリシー</Link>}
            linkOnModal={<Link to="/pp">はい</Link>}
            isEditing={isEditing}
          />
        </li>
        {currentUser && (
          <>
            <li className="mb-2 md:ml-4">
              <FooterLinkWrapper
                text="ログアウト"
                defaultLink={<SignOutButton />}
                linkOnModal={<SignOutButton />}
                isEditing={isEditing}
              />
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
