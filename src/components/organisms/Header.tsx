import { FC, memo } from 'react'

import { HeaderLink } from '../atoms'
import { useCheckEditingForm } from '../../hooks'

const Header: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <header className="border-b border-b-theme-red mb-8 py-2 sub-wrapper">
      <HeaderLink isEditing={isEditing} />
    </header>
  )
})

export default Header
