import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useOnClickOpenModal } from '../../../hooks'
import { BaseLinkProps } from '../../../types'
import GoToAnotherPageButton from '../buttons/GoToAnotherPageButton'

const BaseLink: FC<BaseLinkProps> = memo(({ logo, isEditing }) => {
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '編集途中ですがよろしいですか？',
    rightButton: <GoToAnotherPageButton to="/" text="OK" />
  })

  return isEditing ? (
    <button type="button" onClick={onClickOpenModal}>
      {logo}
    </button>
  ) : (
    <Link to="/">{logo}</Link>
  )
})

export default BaseLink
