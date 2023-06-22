import { FC, memo } from 'react'

import { BaseModalProps } from '../../../types'

const BaseModal: FC<BaseModalProps> = memo(({ text, leftButton, rightButton, visible }) => (
  <>
    <input type="checkbox" className="modal-toggle" checked={visible} readOnly />
    {visible && (
      <div className="modal">
        <div className="modal-box mx-0">
          <p>{text}</p>
          <div className="modal-action flex items-center">
            {leftButton}
            {rightButton}
          </div>
        </div>
      </div>
    )}
  </>
))

export default BaseModal
