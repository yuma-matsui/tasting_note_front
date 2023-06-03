import { FC, memo } from 'react'
import { HiBackward } from 'react-icons/hi2'

import { useGetButtonClassName } from '../../../hooks'
import { TastingSheet } from '../../../types'

const ConfirmationAndBackButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet.color, false, '戻る')

  return (
    <button type="button" className={className} onClick={() => window.location.reload()}>
      <div className="flex items-center justify-center">
        <HiBackward className="mr-2" />
        <span>戻る</span>
      </div>
    </button>
  )
})

export default ConfirmationAndBackButton
