import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import BaseLink from '../atoms/links/BaseLink'
import { HeaderLogo } from '../molecules'

const Header: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <header className="border-b border-b-theme-red mb-8 py-2 sub-wrapper">
      <BaseLink logo={<HeaderLogo />} isEditing={isEditing} />
    </header>
  )
})

export default Header
