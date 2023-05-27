import { ChangeEvent } from 'react'

type SearchSelectBoxProps = {
  options: string[]
  id: string
  label: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  selectedOption: string
}

export default SearchSelectBoxProps
