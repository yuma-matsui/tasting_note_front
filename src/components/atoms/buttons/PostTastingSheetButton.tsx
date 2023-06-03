import { FC, memo } from 'react'

import { useGetButtonClassName, usePostTastingSheet } from '../../../hooks'
import { PostTastingSheetButtonProps } from '../../../types'

const PostTastingSheetButton: FC<PostTastingSheetButtonProps> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color, false, '提出する')
  const { postTastingSheet } = usePostTastingSheet()

  const onClick = () => postTastingSheet(tastingSheet)

  return (
    <button type="button" onClick={onClick} className={className}>
      提出する
    </button>
  )
})

export default PostTastingSheetButton
