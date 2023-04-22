import { FC, memo } from 'react'

import { useGetButtonClassName, useOnClickOpenModal } from '../../../hooks'
import { TastingSheet } from '../../../types'

const ConfirmationAndBackButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet)
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '記録の途中ですがよろしいですか？',
    rightButton: (
      <button type="button" onClick={() => window.location.reload()}>
        はい
      </button>
    )
  })

  return (
    <button type="button" className={className} onClick={onClickOpenModal}>
      &lt;&lt;戻る
    </button>
  )
})

export default ConfirmationAndBackButton
