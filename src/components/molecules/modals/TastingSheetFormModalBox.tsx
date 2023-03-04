import { FC, memo } from 'react'

import { ModalBoxProps } from '../../../types'
import { GoToTopPageButton, SignInAndPostButton } from '../../atoms'
import BaseModalBox from './BaseModalBox'

const TastingSheetFormModalBox: FC<ModalBoxProps> = memo(({ id }) => (
  <BaseModalBox id={id} confirmationText="記録せずに終了しますか？">
    <GoToTopPageButton text="OK" />
    <SignInAndPostButton />
  </BaseModalBox>
))

export default TastingSheetFormModalBox
