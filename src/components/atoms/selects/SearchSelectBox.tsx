import { ChangeEvent, FC, memo } from 'react'

const SearchSelectBox: FC<{
  options: string[]
  id: string
  label: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  selectedOption: string
}> = memo(({ options, id, label, onChange, selectedOption }) => (
  <label htmlFor={id} className="block">
    {label}
    <select id={id} name={id} onChange={onChange} className="ml-3" value={selectedOption}>
      {['指定なし', ...options].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default SearchSelectBox
