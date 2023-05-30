import { ChangeEvent } from 'react'

type SearchColorRadiosProps = {
  selectedColor: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default SearchColorRadiosProps
