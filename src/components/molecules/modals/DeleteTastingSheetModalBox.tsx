import { FC, memo } from 'react'

import BaseModalBox from './BaseModalBox'
import { DeleteTastingSheetModalBoxProps } from '../../../types'
import { DeleteTastingSheetButton, ModalCloseLabel } from '../../atoms'

const DeleteTastingSheetModalBox: FC<DeleteTastingSheetModalBoxProps> = memo(({ id, tastingSheetId }) => (
  <BaseModalBox id={id} confirmationText="本当に削除してもよろしいですか？">
    <ModalCloseLabel id={id} text="いいえ" />
    <DeleteTastingSheetButton id={tastingSheetId} />
  </BaseModalBox>
))

export default DeleteTastingSheetModalBox
