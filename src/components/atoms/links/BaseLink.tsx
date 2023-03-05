import { FC, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useOnClickOpenModal } from '../../../hooks'
import { BaseLinkProps } from '../../../types'
import GoToTopPageButton from '../buttons/GoToTopPageButton'

const NEW_TASTING_SHEETS_PATH = '/tasting_sheets/new'

const BaseLink: FC<BaseLinkProps> = memo(({ logo }) => {
  const { pathname } = useLocation()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '記録の途中ですがよろしいですか？',
    content: <GoToTopPageButton text="OK" />,
    closeText: '回答にもどる'
  })

  return pathname === NEW_TASTING_SHEETS_PATH ? (
    <button type="button" onClick={onClickOpenModal}>
      {logo}
    </button>
  ) : (
    <Link to="/">{logo}</Link>
  )
})

export default BaseLink
