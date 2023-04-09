import { ChangeEvent, FC, memo } from 'react'

const SearchColorRadio: FC<{
  color: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = memo(({ color, checked, onChange }) => {
  let label = '指定なし'
  if (color === 'white') label = '白'
  if (color === 'red') label = '赤'

  return (
    <label htmlFor={color} className="ml-3">
      <input type="radio" id={color} name="color" value={color} checked={checked} onChange={onChange} />
      {label}
    </label>
  )
})

export default SearchColorRadio
