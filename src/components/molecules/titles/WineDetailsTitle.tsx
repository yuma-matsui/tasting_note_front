import { FC, memo } from 'react'

import { useOnClickOpenModal } from '../../../hooks'
import { WineApi } from '../../../types'
import { DeleteWineButton } from '../../atoms'

const WineDetailsTitle: FC<{ wine: WineApi }> = memo(({ wine }) => {
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '登録したワインを削除しますがよろしいですか？',
    rightButton: <DeleteWineButton wine={wine} />
  })

  return (
    <h2 className="page-title mb-4">
      {wine.name}
      <span className="text-gray-400 text-sm font-normal ml-2">
        <button type="button" onClick={onClickOpenModal}>
          削除
        </button>
      </span>
    </h2>
  )
})

export default WineDetailsTitle
