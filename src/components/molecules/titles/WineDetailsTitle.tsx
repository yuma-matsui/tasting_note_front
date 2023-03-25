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
    <h3>
      {wine.name}
      <span className="text-red-400">
        <button type="button" onClick={onClickOpenModal}>
          削除
        </button>
      </span>
    </h3>
  )
})

export default WineDetailsTitle
