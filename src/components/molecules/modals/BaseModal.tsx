import { FC, memo } from 'react'

import { BaseModalProps } from '../../../types'

const BaseModal: FC<BaseModalProps> = memo(({ text, leftButton, rightButton, visible }) => (
  <>
    <input type="checkbox" className="modal-toggle" checked={visible} onChange={() => {}} />
    <div className="modal">
      <div className="modal-box">
        <p>{text}</p>
        <div className="modal-action flex items-center">
          {leftButton}
          {rightButton}
        </div>
      </div>
    </div>
  </>
))

export default BaseModal
