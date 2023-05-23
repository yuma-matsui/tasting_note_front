import { ChangeEvent } from 'react'

type SearchColorRadioProps = {
  color: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default SearchColorRadioProps
