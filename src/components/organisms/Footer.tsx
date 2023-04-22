import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { FooterLink } from '../atoms'
import { FooterNavigation } from '../molecules'

const Footer: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <footer>
      <FooterLink />
      {!isEditing && <FooterNavigation />}
      <p className="text-gray-700">&copy;2023 yuma-matsui</p>
    </footer>
  )
})

export default Footer
