import { FC, memo } from 'react'
import { BsExclamationTriangle } from 'react-icons/bs'

import defaultImage from '../../assets/images/wineGlass.jpg'
import { TastingSheetCardProps } from '../../types'
import { DeleteTastingSheetButton } from '../atoms'
import { useOnClickOpenModal } from '../../hooks'

const TastingSheetCard: FC<TastingSheetCardProps> = memo(({ tastingSheet }) => {
  const bgColor = tastingSheet.color === 'red' ? 'bg-red-600' : 'bg-emerald-500'
  const textColor = tastingSheet.color === 'red' ? 'text-red-700' : 'text-emerald-500'
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    content: <DeleteTastingSheetButton id={tastingSheet.id} />,
    closeText: 'いいえ'
  })

  return (
    <li className="mb-4">
      <div className={`card w-96 shadow-xl relative ${bgColor}`}>
        <figure>
          <img src={defaultImage} alt="wine" />
        </figure>
        <p className={`absolute top-2 left-2 ${textColor}`}>No Image</p>
        <div className="card-body text-white">
          <h2 className="card-title">{tastingSheet.name}</h2>
          <p>{tastingSheet.createdAt}</p>
          <div className="card-actions justify-end">
            <div className="flex items-center">
              <BsExclamationTriangle />
              <button type="button" onClick={onClickOpenModal}>
                削除
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
})

export default TastingSheetCard