import { FC, memo } from 'react'

const WineImage: FC<{ filename: string }> = memo(({ filename }) => (
  <img src={`${process.env.REACT_APP_CF_DOMAIN}/${filename}`} alt="wine" className="mb-4" />
))

export default WineImage
