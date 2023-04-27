import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { FooterLink } from '../atoms'
import { FooterNavigation } from '../molecules'

const Footer: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <footer className="mt-6 main-wrapper">
      <div className="flex flex-col items-center pt-4 border-t">
        <FooterLink />
        {!isEditing && <FooterNavigation />}
        <p className={`text-gray-700 ${isEditing ? 'mt-2' : ''}`}>&copy;2023 yuma-matsui</p>
      </div>
    </footer>
  )
})

export default Footer
