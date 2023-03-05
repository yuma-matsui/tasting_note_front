import { FC, memo } from 'react'

const BaseToast: FC<{ text: string; visible: boolean }> = memo(({ text, visible }) => (
  <div className={`toast toast-top toast-end ${visible ? '' : 'hidden'} `}>
    <div className="alert alert-success">
      <div>
        <span className="text-white">{text}</span>
      </div>
    </div>
  </div>
))

export default BaseToast
