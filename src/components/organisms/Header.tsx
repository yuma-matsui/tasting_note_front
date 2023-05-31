import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import BaseLink from '../atoms/links/BaseLink'
import { HeaderLogo } from '../molecules'

const Header: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <header className="mb-8 main-wrapper py-4">
      <BaseLink logo={<HeaderLogo />} isEditing={isEditing} />
    </header>
  )
})

export default Header
