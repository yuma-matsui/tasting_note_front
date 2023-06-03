import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { TastingSheet } from '../../../types'
import { useGetButtonClassName, useOnClickOpenModal } from '../../../hooks'

const SaveSheetButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color)

  const { onClickOpenModal } = useOnClickOpenModal({
    text: 'ログインまたはサインアップを行います',
    leftButton: (
      <Link to="/signin" state={tastingSheet}>
        ログイン
      </Link>
    ),
    rightButton: (
      <Link to="/signup" state={tastingSheet}>
        サインアップ
      </Link>
    )
  })

  return (
    <button type="button" onClick={onClickOpenModal} className={className}>
      記録する
    </button>
  )
})

export default SaveSheetButton
