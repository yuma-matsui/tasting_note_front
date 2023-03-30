import { FC, memo } from 'react'

const WineImage: FC<{ filename: string }> = memo(({ filename }) => (
  <img src={`${process.env.REACT_APP_CF_DOMAIN}/${filename}`} alt="wine" className="w-72 h-72" />
))

export default WineImage
