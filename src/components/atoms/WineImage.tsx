import { FC, memo } from 'react'

const WineImage: FC<{ filename: string }> = memo(({ filename }) => (
  <img src={`${process.env.REACT_APP_CF_DOMAIN}/${filename}`} alt="wine" className="mb-4 max-w-md mx-auto" />
))

export default WineImage
