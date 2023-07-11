import { FC, memo } from 'react'

import { DemoImageContainerProps } from '../../types'

const DemoImageContainer: FC<DemoImageContainerProps> = memo(({ alt, src, text }) => (
  <div>
    <p className="mb-1">{text}</p>
    <img src={src} alt={alt} className="rounded-xl border-2 border-black" />
  </div>
))

export default DemoImageContainer
