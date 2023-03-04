import { FC, memo } from 'react'

import { ModalBoxProps } from '../../../types'
import { GoToTopPageButton, ModalCloseLabel } from '../../atoms'
import BaseModalBox from './BaseModalBox'

const EditCheckModalBox: FC<ModalBoxProps> = memo(({ id }) => (
  <BaseModalBox id={id} confirmationText="記録の途中ですがよろしいですか？">
    <ModalCloseLabel id={id} text="回答に戻る" />
    <GoToTopPageButton text="OK" />
  </BaseModalBox>
))

export default EditCheckModalBox
