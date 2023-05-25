import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { BsExclamationTriangle } from 'react-icons/bs'

import { TastingSheetCardProps } from '../../types'
import { CardInsideLink, DeleteTastingSheetButton } from '../atoms'
import {
  useHasWineAndImage,
  useOnClickOpenModal,
  useTastingSheetCardColor,
  useTastingSheetStateForWine
} from '../../hooks'

const TastingSheetCard: FC<TastingSheetCardProps> = memo(({ tastingSheet }) => {
  const { bgColor, textColor } = useTastingSheetCardColor(tastingSheet)
  const { hasWine, hasWineImage, cardImage } = useHasWineAndImage(tastingSheet)
  const state = useTastingSheetStateForWine(tastingSheet)

  const { onClickOpenModal } = useOnClickOpenModal({
    text: '本当に削除してもよろしいですか？',
    rightButton: <DeleteTastingSheetButton id={tastingSheet.id} />
  })

  return (
    <div className={`card drop-shadow-lg relative ${bgColor}`}>
      <figure className="relative">
        <Link to={`/tasting_sheets/${tastingSheet.id}`}>
          <img src={cardImage} alt="wine" />
        </Link>
        {!hasWine && (
          <CardInsideLink text="テイスティングしたワインの登録は" to="/wines/new" textColor={textColor} state={state} />
        )}
        {tastingSheet.wine && !tastingSheet.wine.image && (
          <CardInsideLink
            text="ワイン画像の登録は"
            to={`/wines/edit/${tastingSheet.wine.id}`}
            textColor={textColor}
            state={tastingSheet.wine}
          />
        )}
      </figure>
      {!hasWineImage && <p className={`absolute top-2 left-2 ${textColor}`}>No Image</p>}
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
  )
})

export default TastingSheetCard
