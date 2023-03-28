import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { BsExclamationTriangle } from 'react-icons/bs'

import defaultImage from '../../assets/images/wineGlass.jpg'
import { TastingSheetCardProps } from '../../types'
import { DeleteTastingSheetButton } from '../atoms'
import { useOnClickOpenModal, useTastingSheetCardColor, useTastingSheetStateForWine } from '../../hooks'

const TastingSheetCard: FC<TastingSheetCardProps> = memo(({ tastingSheet }) => {
  const { bgColor, textColor } = useTastingSheetCardColor(tastingSheet)
  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    rightButton: <DeleteTastingSheetButton id={tastingSheet.id} />
  })
  const state = useTastingSheetStateForWine(tastingSheet)
  const cardImage = tastingSheet.wine?.image
    ? `${process.env.REACT_APP_CF_DOMAIN}/${tastingSheet.wine.image}`
    : defaultImage

  return (
    <li className="mb-4">
      <div className={`card w-96 shadow-xl relative ${bgColor}`}>
        <figure>
          <Link to={`/tasting_sheets/${tastingSheet.id}`}>
            <img src={cardImage} alt="wine" />
          </Link>
        </figure>
        {!tastingSheet.wine?.image && <p className={`absolute top-2 left-2 ${textColor}`}>No Image</p>}
        {!tastingSheet.wine && (
          <p className="absolute top-1/2 text-gray-700">
            テイスティングしたワイン・画像の登録は
            <span>
              <Link to="/wines/new" state={state} className={`${textColor} text-lg font-bold`}>
                こちら
              </Link>
              から
            </span>
          </p>
        )}
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
