import { FC, memo } from 'react'

import { FooterLink } from '../atoms'
import { FooterNavigation } from '../molecules'

const Footer: FC = memo(() => (
  <footer className="mt-6 main-wrapper">
    <div className="flex flex-col items-center pt-4 border-t">
      <FooterLink />
      <FooterNavigation />
      <p className="text-gray-700">&copy;2023 yuma-matsui</p>
    </div>
  </footer>
))

export default Footer
