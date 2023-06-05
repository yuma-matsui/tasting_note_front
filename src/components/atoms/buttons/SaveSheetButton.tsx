import { FC, memo } from 'react'

import { TastingSheet } from '../../../types'
import { useGetButtonClassName, useOnClickOpenModal } from '../../../hooks'
import SignUpLink from '../links/SignUpLink'
import SignInLink from '../links/SignInLink'

const SaveSheetButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color)

  const { onClickOpenModal } = useOnClickOpenModal({
    text: 'ログインまたはサインアップを行います',
    leftButton: <SignUpLink tastingSheet={tastingSheet} />,
    rightButton: <SignInLink tastingSheet={tastingSheet} />
  })

  return (
    <button type="button" onClick={onClickOpenModal} className={className}>
      記録する
    </button>
  )
})

export default SaveSheetButton
