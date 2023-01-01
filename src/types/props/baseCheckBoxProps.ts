import { ChangeEvent } from 'react'

type BaseCheckBoxProps = {
  type: string
  id: string
  label: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
  text?: string
}

export default BaseCheckBoxProps
