import { FC } from 'react'
import { Link } from 'react-router-dom'

const TastingStartButton: FC = () => (
  <Link to="/tasting_sheets/new">
    <button type="button">すぐに始める</button>
  </Link>
)

export default TastingStartButton
