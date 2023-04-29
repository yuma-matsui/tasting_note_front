import { FC, memo } from 'react'

import { useGetButtonClassName } from '../../../hooks'
import { TastingSheet } from '../../../types'

const ConfirmationAndBackButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color)

  return (
    <button type="button" className={className} onClick={() => window.location.reload()}>
      &lt;&lt;戻る
    </button>
  )
})

export default ConfirmationAndBackButton
