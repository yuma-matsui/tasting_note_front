import { ChangeEvent } from 'react'

type SearchSelectBoxProps = {
  id: string
  label: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  selectedOption: string
}

export default SearchSelectBoxProps
