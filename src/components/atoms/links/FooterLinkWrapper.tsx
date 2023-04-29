import { FC, ReactElement, memo } from 'react'

import { useCheckEditingForm, useOnClickOpenModal } from '../../../hooks'

const FooterLinkWrapper: FC<{
  text: string
  defaultLink: ReactElement
  linkOnModal: ReactElement
}> = memo(({ text, defaultLink, linkOnModal }) => {
  const { isEditing } = useCheckEditingForm()
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
