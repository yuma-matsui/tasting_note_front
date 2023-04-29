import { ChangeEvent, FC, memo } from 'react'

import { useGetSearchRadioLabel } from '../../../hooks'

const SearchColorRadio: FC<{
  color: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = memo(({ color, checked, onChange }) => {
  const label = useGetSearchRadioLabel(color)

  return (
    <label htmlFor={color} className="mr-2 label cursor-pointer">
      <input
        type="radio"
        id={color}
        name="color"
        value={color}
        checked={checked}
        onChange={onChange}
        className="radio radio-sm radio-primary"
      />
      <span className="label-text ml-1">{label}</span>
    </label>
  )
})

export default SearchColorRadio
