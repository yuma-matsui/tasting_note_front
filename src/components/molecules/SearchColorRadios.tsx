import { ChangeEvent, FC, memo } from 'react'

import { SearchColorRadio } from '../atoms'

const SearchColorRadios: FC<{
  selectedColor: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = memo(({ selectedColor, onChange }) => (
  <>
    {['white', 'red', '指定なし'].map((color) => (
      <SearchColorRadio key={color} color={color} checked={selectedColor === color} onChange={onChange} />
    ))}
  </>
))

export default SearchColorRadios
