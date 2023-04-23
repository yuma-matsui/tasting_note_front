import { FC, memo } from 'react'

import { useAuthContext } from '../../../hooks'
import { DeleteAccountButton, PrivacyPolicyLink, SignOutButton, TermOfServiceLink } from '../../atoms'

const FooterNavigation: FC = memo(() => {
  const { currentUser } = useAuthContext()

  return (
    <nav className="my-4">
      <ul className="flex">
        <li>
          <TermOfServiceLink />
        </li>
        <li className="ml-4">
          <PrivacyPolicyLink />
        </li>
        {currentUser && (
          <>
            <li className="ml-4">
              <SignOutButton />
            </li>
            <li className="ml-4">
              <DeleteAccountButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  )
})

export default FooterNavigation
