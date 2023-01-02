import { ChangeEvent } from 'react'

type BaseSelectBoxProps = {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}

export default BaseSelectBoxProps
