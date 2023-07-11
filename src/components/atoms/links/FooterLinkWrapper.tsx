import { FC, memo } from 'react'

import { useOnClickOpenModal } from '../../../hooks'
import { FooterLinkWrapperProps } from '../../../types'

const FooterLinkWrapper: FC<FooterLinkWrapperProps> = memo(({ defaultLink, isEditing, linkOnModal, text }) => {
  const { onClickOpenModal } = useOnClickOpenModal({
    rightButton: linkOnModal,
    text: '編集途中ですがよろしいですか？'
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
