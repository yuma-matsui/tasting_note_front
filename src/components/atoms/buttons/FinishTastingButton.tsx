import { FC, memo } from 'react'

import { useOnClickOpenModal } from '../../../hooks'
import GoToAnotherPageButton from './GoToAnotherPageButton'

const FinishTastingButton: FC = memo(() => {
  const { onClickOpenModal } = useOnClickOpenModal({
    rightButton: <GoToAnotherPageButton to="/" text="はい" />,
    text: 'このまま記録せずに終了しますがよろしいですか？'
  })

  return (
    <button
      type="button"
      onClick={onClickOpenModal}
      className="
        text-gray-400
        mb-4
        block
        w-full
        text-right
        pr-3
      "
    >
      記録せずに終了する
    </button>
  )
})

export default FinishTastingButton
