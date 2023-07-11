import { FC, memo } from 'react'

import { useGetButtonClassName, useOnClickOpenModal } from '../../../hooks'
import { TastingSheet } from '../../../types'
import SignInLink from '../links/SignInLink'
import SignUpLink from '../links/SignUpLink'

const SaveSheetButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color)

  const { onClickOpenModal } = useOnClickOpenModal({
    leftButton: <SignUpLink tastingSheet={tastingSheet} />,
    rightButton: <SignInLink tastingSheet={tastingSheet} />,
    text: 'サインアップまたはログインを行います'
  })

  return (
    <button type="button" onClick={onClickOpenModal} className={className}>
      記録する
    </button>
  )
})

export default SaveSheetButton
