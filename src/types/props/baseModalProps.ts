import { ReactElement } from 'react'

type BaseModalProps = {
  text: string
  content: ReactElement
  visible: boolean
  closeText: string | undefined
}

export default BaseModalProps
