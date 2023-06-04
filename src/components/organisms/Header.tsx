import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { HeaderLogo } from '../molecules'
import { BaseLink } from '../atoms'

const Header: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <header className="main-wrapper py-4">
      <BaseLink logo={<HeaderLogo />} isEditing={isEditing} />
    </header>
  )
})

export default Header
