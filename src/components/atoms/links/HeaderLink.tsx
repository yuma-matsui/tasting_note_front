import { FC, memo } from 'react'

import { HeaderLogo } from '../../molecules'
import BaseLink from './BaseLink'

const HeaderLink: FC = memo(() => <BaseLink logo={<HeaderLogo />} />)

export default HeaderLink
