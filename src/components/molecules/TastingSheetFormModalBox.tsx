import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTastingSheetContext } from '../../hooks'
import { TastingSheetFormModalBoxProps } from '../../types'

const ModalBox: FC<TastingSheetFormModalBoxProps> = memo(({ id, isLastStep }) => {
  const { tastingSheet } = useTastingSheetContext()
  const navigate = useNavigate()

  const denyButtonText = isLastStep ? 'Googleでログインして記録する' : '回答へ戻る'

  const onClickConfirm = () => {
    if (isLastStep) navigate('/')
    window.location.reload()
  }

  const onClickDeny = () => {
    // APIリクエスト
    console.log(tastingSheet)
  }

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p className="py-4">記録せずに終了しますか</p>
          <div className="modal-action">
            <button type="button" onClick={onClickConfirm}>
              OK
            </button>
            {isLastStep ? (
              <button type="button" onClick={onClickDeny} className="btn">
                {denyButtonText}
              </button>
            ) : (
              <label htmlFor={id} className="btn">
                {denyButtonText}
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  )
})

export default ModalBox