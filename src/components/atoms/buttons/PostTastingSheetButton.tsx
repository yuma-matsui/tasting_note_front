import { FC, memo } from 'react'

import { useAuthContext, useGetButtonClassName, useOnClickOpenModal, usePostTastingSheet } from '../../../hooks'
import { TastingSheet } from '../../../types'
import GoToAnotherPageButton from './GoToAnotherPageButton'
import SignInAndPostButton from './SignInAndPostButton'

const PostTastingSheetButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { currentUser } = useAuthContext()
  const { className } = useGetButtonClassName(tastingSheet.color)
  const { postTastingSheet } = usePostTastingSheet()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '記録せずに終了しますか？',
    leftButton: <GoToAnotherPageButton to="/" text="OK" />,
    rightButton: <SignInAndPostButton tastingSheet={tastingSheet} />
  })

  const onClick = currentUser ? () => postTastingSheet(tastingSheet) : onClickOpenModal

  return (
    <button type="button" onClick={onClick} className={className}>
      提出する
    </button>
  )
})

export default PostTastingSheetButton
