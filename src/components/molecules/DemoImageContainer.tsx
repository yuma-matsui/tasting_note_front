import { FC, memo } from 'react'

const DemoImageContainer: FC<{
  text: string
  src: string
  alt: string
}> = memo(({ text, src, alt }) => (
  <div>
    <p className="mb-1">{text}</p>
    <img src={src} alt={alt} className="rounded-xl border-2 border-black" />
  </div>
))

export default DemoImageContainer
