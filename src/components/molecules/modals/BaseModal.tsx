import { FC, memo } from 'react'
import { useModalContext } from '../../../hooks'

import { BaseModalProps } from '../../../types'

const BaseModalBox: FC<BaseModalProps> = memo(({ text, content, visible, closeText }) => {
  const { setVisible } = useModalContext()
  const onClickClose = () => setVisible(false)

  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={visible} onChange={() => {}} />
      <div className="modal">
        <div className="modal-box">
          <p>{text}</p>
          <div className="modal-action flex items-center">
            {closeText && (
              <button type="button" onClick={onClickClose}>
                {closeText}
              </button>
            )}
            {content}
          </div>
        </div>
      </div>
    </>
  )
})

export default BaseModalBox
