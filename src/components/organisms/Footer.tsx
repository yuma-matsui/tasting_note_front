import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { FooterLink } from '../atoms'
import { FooterNavigation } from '../molecules'

const Footer: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <footer className="mt-6 sub-wrapper">
      <div className="flex flex-col items-center pt-4 border-t drop-shadow-md">
        <FooterLink />
        {!isEditing && <FooterNavigation />}
        <p className="text-gray-700">&copy;2023 yuma-matsui</p>
      </div>
    </footer>
  )
})

export default Footer
