import { FC, memo } from 'react'

import { useAuthContext, useCheckEditingForm } from '../../hooks'
import { DeleteAccountButton, FooterLink, PrivacyPolicyLink, SignOutButton, TermOfServiceLink } from '../atoms'

const Footer: FC = memo(() => {
  const { currentUser } = useAuthContext()
  const { isEditing } = useCheckEditingForm()

  return (
    <footer className="flex flex-col items-center border-t border-gray-500 pt-4 mt-4">
      <FooterLink />
      {!isEditing && (
        <ul className="flex list-none">
          <li className="mr-4">
            <TermOfServiceLink />
          </li>
          <li>
            <PrivacyPolicyLink />
          </li>
          {currentUser && (
            <>
              <li>
                <SignOutButton />
              </li>
              <li>
                <DeleteAccountButton />
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
