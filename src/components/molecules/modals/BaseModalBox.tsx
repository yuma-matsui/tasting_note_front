import { FC, memo } from 'react'

import { BaseModalBoxProps } from '../../../types'

const BaseModalBox: FC<BaseModalBoxProps> = memo(({ id, confirmationText, children }) => (
  <>
    <input type="checkbox" id={id} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <p>{confirmationText}</p>
        <div className="modal-action flex items-center">{children}</div>
      </div>
    </div>
  </>
))

export default BaseModalBox
