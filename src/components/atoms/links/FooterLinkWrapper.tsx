import { FC, ReactElement, memo } from 'react'

import { Link } from 'react-router-dom'
import SignOutButton from '../buttons/SignOutButton'
import { useCheckEditingForm, useOnClickOpenModal } from '../../../hooks'
import TermOfServiceLink from './TermOfServiceLink'
import PrivacyPolicyLink from './PrivacyPolicyLink'

const FooterLinkWrapper: FC<{
  text: '利用規約' | 'プライバシーポリシー' | 'ログアウト'
}> = memo(({ text }) => {
  const { isEditing } = useCheckEditingForm()

  let rightButton: ReactElement = <SignOutButton />
  let linkComponent: ReactElement = <SignOutButton />
  let to: string

  if (text === 'プライバシーポリシー') {
    to = '/pp'
    rightButton = <Link to={to}>はい</Link>
    linkComponent = <PrivacyPolicyLink />
  }

  if (text === '利用規約') {
    to = '/tos'
    rightButton = <Link to={to}>はい</Link>
    linkComponent = <TermOfServiceLink />
  }

  const { onClickOpenModal } = useOnClickOpenModal({
    text: '編集途中ですがよろしいですか？',
    rightButton
  })

  return isEditing ? (
    <button type="button" onClick={onClickOpenModal}>
      {text}
    </button>
  ) : (
    linkComponent
  )
})

export default FooterLinkWrapper
