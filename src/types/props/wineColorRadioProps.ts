import { ChangeEvent } from 'react'

type WineColorRadioProps = {
  color: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default WineColorRadioProps
