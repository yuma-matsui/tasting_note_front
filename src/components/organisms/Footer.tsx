import { FC, memo } from 'react'

import { useCheckEditingForm } from '../../hooks'
import { BaseLink } from '../atoms'
import { FooterLogo, FooterNavigation } from '../molecules'

const Footer: FC = memo(() => {
  const { isEditing } = useCheckEditingForm()

  return (
    <footer className="mt-6 main-wrapper">
      <div className="flex flex-col items-center pt-4 border-t">
        <BaseLink logo={<FooterLogo />} isEditing={isEditing} />
        <FooterNavigation />
        <p className="text-gray-700">&copy;2023 yuma-matsui</p>
      </div>
    </footer>
  )
})

export default Footer
