import { ChangeEvent } from 'react'

type BaseCheckBoxProps = {
  label: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled: boolean
}

export default BaseCheckBoxProps
