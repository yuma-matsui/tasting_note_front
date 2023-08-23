import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetButtonClassName } from '../../../hooks'
import { TastingSheet } from '../../../types'

const FinishTastingButton: FC<{
  color: TastingSheet['color']
}> = memo(({ color }) => {
  const { className } = useGetButtonClassName(color)
  const navigate = useNavigate()

  return (
    <button type="button" onClick={() => navigate('/')} className={className}>
      終了する
    </button>
  )
})

export default FinishTastingButton
