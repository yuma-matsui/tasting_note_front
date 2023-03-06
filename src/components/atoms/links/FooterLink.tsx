import { FC, memo } from 'react'

import { FooterLogo } from '../../molecules'
import BaseLink from './BaseLink'

const FooterLink: FC = memo(() => <BaseLink logo={<FooterLogo />} />)

export default FooterLink
