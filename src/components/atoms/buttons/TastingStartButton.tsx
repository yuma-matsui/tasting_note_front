import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

const TastingStartButton: FC = memo(() => (
  <Link to="/tasting_sheets/new">
    <button type="button">すぐに始める</button>
  </Link>
))

export default TastingStartButton
