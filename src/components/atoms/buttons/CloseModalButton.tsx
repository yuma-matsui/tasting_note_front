import { FC, memo } from 'react'

const CloseModalButton: FC<{ onClick: () => void }> = memo(({ onClick }) => (
  <button type="button" onClick={onClick}>
    いいえ
  </button>
))

export default CloseModalButton
