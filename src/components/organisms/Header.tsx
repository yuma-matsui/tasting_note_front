import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { BaseLink } from '../atoms'
import { HeaderLogo } from '../molecules'

const Header: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <header className="main-wrapper py-4">
      <BaseLink logo={<HeaderLogo />} isEditing={isEditing} />
    </header>
  )
})

export default Header
