import { FC, memo } from 'react'

import { FooterLogo } from '../../molecules'
import BaseLink from './BaseLink'

const FooterLink: FC<{
  isEditing: boolean
}> = memo(({ isEditing }) => <BaseLink logo={<FooterLogo />} isEditing={isEditing} />)

export default FooterLink
