import { ChangeEvent, FC, memo } from 'react'

const WineImageInput: FC<{
  onChangeImageFile: (e: ChangeEvent<HTMLInputElement>) => void
}> = memo(({ onChangeImageFile }) => (
  <label htmlFor="image">
    画像
    <input id="image" type="file" accept="image/*" className="block" onChange={onChangeImageFile} />
  </label>
))

export default WineImageInput
