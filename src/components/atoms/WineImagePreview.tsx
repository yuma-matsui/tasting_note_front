import { FC, memo } from 'react'

const WineImagePreview: FC<{ imageFile: File }> = memo(({ imageFile }) => {
  const url = window.URL.createObjectURL(imageFile)

  return <img src={url} alt="Wine Preview" className="w-72 h-72 mt-3" />
})

export default WineImagePreview
