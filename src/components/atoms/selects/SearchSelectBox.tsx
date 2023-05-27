import { FC, memo } from 'react'
import { SearchSelectBoxProps } from '../../../types'

const SearchSelectBox: FC<SearchSelectBoxProps> = memo(({ options, id, label, onChange, selectedOption }) => (
  <div className="form-control w-11/12 max-w-xs mb-4">
    <label htmlFor={id} className="label">
      <span className="label-text">{label}</span>
    </label>
    <select id={id} name={id} onChange={onChange} value={selectedOption} className="select select-bordered select-sm">
      {['指定なし', ...options].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
))

export default SearchSelectBox
