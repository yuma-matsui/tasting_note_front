import { FC, memo, ReactElement } from 'react'
import { Link } from 'react-router-dom'

const DetailsPageBottomButtons: FC<{
  rightButton: ReactElement
}> = memo(({ rightButton }) => (
  <div className="flex justify-between items-center">
    <Link to="/" className="text-gray-400">
      戻る
    </Link>
    {rightButton}
  </div>
))

export default DetailsPageBottomButtons
