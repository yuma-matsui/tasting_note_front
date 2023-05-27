import { FC, memo } from 'react'

import { HeaderLogo } from '../../molecules'
import BaseLink from './BaseLink'

const HeaderLink: FC<{
  isEditing: boolean
}> = memo(({ isEditing }) => <BaseLink logo={<HeaderLogo />} isEditing={isEditing} />)

export default HeaderLink
