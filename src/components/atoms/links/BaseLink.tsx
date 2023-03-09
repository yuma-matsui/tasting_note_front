import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useCheckEditingForm, useOnClickOpenModal } from '../../../hooks'
import { BaseLinkProps } from '../../../types'
import GoToTopPageButton from '../buttons/GoToTopPageButton'

const BaseLink: FC<BaseLinkProps> = memo(({ logo }) => {
  const { isEditing } = useCheckEditingForm()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '記録の途中ですがよろしいですか？',
    rightButton: <GoToTopPageButton text="OK" />
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
