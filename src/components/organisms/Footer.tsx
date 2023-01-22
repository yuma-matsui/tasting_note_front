import { FC, memo } from 'react'

import { HeaderFooterProps } from '../../types'
import { FooterLink } from '../atoms'

const Footer: FC<HeaderFooterProps> = memo(({ logoOnly = false, modalId }) => (
  <footer className="flex flex-col items-center border-t border-gray-500 pt-4 mt-4">
    <FooterLink hasModal={logoOnly} modalId={modalId} />
    {!logoOnly && (
      <ul className="flex list-none">
        <li className="mr-4">利用規約</li>
        <li>プライバシーポリシー</li>
      </ul>
    )}
    <p>&copy; 2022 yuma-matsui</p>
  </footer>
))

export default Footer
