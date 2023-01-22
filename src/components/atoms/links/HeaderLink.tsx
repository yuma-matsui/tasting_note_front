/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { LinkProps } from '../../../types'
import { HeaderLogo } from '../../molecules'

const HeaderLink: FC<LinkProps> = memo(({ hasModal, modalId }) => (
  <div>
    {hasModal ? (
      <label htmlFor={modalId}>
        <HeaderLogo />
      </label>
    ) : (
      <Link to="/">
        <HeaderLogo />
      </Link>
    )}
  </div>
))

export default HeaderLink
