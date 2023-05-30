import { FC, memo } from 'react'

import { SearchColorRadio } from '../atoms'
import { SearchColorRadiosProps } from '../../types'

const SearchColorRadios: FC<SearchColorRadiosProps> = memo(({ selectedColor, onChange }) => (
  <div className="mb-4 md:flex">
    {['white', 'red', '指定なし'].map((color) => (
      <SearchColorRadio key={color} color={color} checked={selectedColor === color} onChange={onChange} />
    ))}
  </div>
))

export default SearchColorRadios
