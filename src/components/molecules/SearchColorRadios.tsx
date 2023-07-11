import { FC, memo } from 'react'

import { SearchColorRadiosProps } from '../../types'
import { SearchColorRadio } from '../atoms'

const SearchColorRadios: FC<SearchColorRadiosProps> = memo(({ onChange, selectedColor }) => (
  <div className="mb-4 md:flex">
    {['white', 'red', '指定なし'].map((color) => (
      <SearchColorRadio key={color} color={color} checked={selectedColor === color} onChange={onChange} />
    ))}
  </div>
))

export default SearchColorRadios
