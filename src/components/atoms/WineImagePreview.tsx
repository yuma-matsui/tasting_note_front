import { FC, memo } from 'react'

const WineImagePreview: FC<{ imageFile: File }> = memo(({ imageFile }) => {
  const url = window.URL.createObjectURL(imageFile)

  return <img src={url} alt="Wine Preview" className="mb-4 max-w-md" />
})

export default WineImagePreview
