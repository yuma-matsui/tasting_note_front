import { ChangeEvent } from 'react'

type SearchColorRadiosProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  selectedColor: string
}

export default SearchColorRadiosProps
