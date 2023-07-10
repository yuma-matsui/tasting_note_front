import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useOnClickOpenModal } from '../../../hooks'
import { BaseLinkProps } from '../../../types'
import GoToAnotherPageButton from '../buttons/GoToAnotherPageButton'

const BaseLink: FC<BaseLinkProps> = memo(({ isEditing, logo }) => {
  const { onClickOpenModal } = useOnClickOpenModal({
    rightButton: <GoToAnotherPageButton to="/" text="OK" />,
    text: '編集途中ですがよろしいですか？'
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
