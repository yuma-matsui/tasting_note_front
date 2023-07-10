import { ChangeEvent } from 'react'

type SearchColorRadioProps = {
  checked: boolean
  color: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default SearchColorRadioProps
