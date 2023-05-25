import { FC, memo } from 'react'

import { WineImageInputProps } from '../../../types'

const WineImageInput: FC<WineImageInputProps> = memo(({ onChangeImageFile }) => (
  <div className="wine-form-control">
    <label htmlFor="image" className="wine-form-label">
      <span className="wine-form-label-text">画像</span>
      <input
        id="image"
        type="file"
        accept="image/*"
        className="file-input file-input-sm file-input-bordered border-gray-700 w-full max-w-md leading-7"
        onChange={onChangeImageFile}
      />
    </label>
  </div>
))

export default WineImageInput
