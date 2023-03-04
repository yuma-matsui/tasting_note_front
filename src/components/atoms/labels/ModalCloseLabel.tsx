import { FC, memo } from 'react'
import { ModalCloseLabelProps } from '../../../types'

const ModalCloseLabel: FC<ModalCloseLabelProps> = memo(({ id, text }) => <label htmlFor={id}>{text}</label>)

export default ModalCloseLabel
