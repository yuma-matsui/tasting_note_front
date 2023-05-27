import { FC, memo } from 'react'

import { useGetButtonClassName, useOnClickOpenModal, usePostTastingSheet } from '../../../hooks'
import { PostTastingSheetButtonProps } from '../../../types'
import GoToAnotherPageButton from './GoToAnotherPageButton'
import { SignInOrUpAndPostLinks } from '../../molecules'

const PostTastingSheetButton: FC<PostTastingSheetButtonProps> = memo(({ tastingSheet, currentUser }) => {
  const { className } = useGetButtonClassName(tastingSheet.color, false, '提出する')
  const { postTastingSheet } = usePostTastingSheet()
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '記録せずに終了しますか？',
    leftButton: <GoToAnotherPageButton to="/" text="OK" />,
    rightButton: <SignInOrUpAndPostLinks tastingSheet={tastingSheet} />
  })

  const onClick = currentUser ? () => postTastingSheet(tastingSheet) : onClickOpenModal

  return (
    <button type="button" onClick={onClick} className={className}>
      提出する
    </button>
  )
})

export default PostTastingSheetButton
