import { FC, memo } from 'react'

import { useOnClickOpenModal } from '../../../hooks'
import { FooterLinkWrapperProps } from '../../../types'

const FooterLinkWrapper: FC<FooterLinkWrapperProps> = memo(({ text, defaultLink, linkOnModal, isEditing }) => {
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '編集途中ですがよろしいですか？',
    rightButton: linkOnModal
  })

  return isEditing ? (
    <button type="button" onClick={onClickOpenModal}>
      {text}
    </button>
  ) : (
    defaultLink
  )
})

export default FooterLinkWrapper
