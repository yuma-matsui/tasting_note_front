/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { LinkProps } from '../../../types'
import { FooterLogo } from '../../molecules'

const FooterLink: FC<LinkProps> = memo(({ hasModal = false, modalId }) => (
  <div>
    {hasModal ? (
      <label htmlFor={modalId}>
        <FooterLogo />
      </label>
    ) : (
      <Link to="/">
        <FooterLogo />
      </Link>
    )}
  </div>
))

export default FooterLink
