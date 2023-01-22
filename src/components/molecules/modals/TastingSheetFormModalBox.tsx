import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTastingSheetContext } from '../../../hooks'
import { ModalBoxProps } from '../../../types'

const TastingSheetFormModalBox: FC<ModalBoxProps> = memo(({ id }) => {
  const { tastingSheet } = useTastingSheetContext()
  const navigate = useNavigate()

  const onClickConfirm = () => navigate('/')
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
            <button type="button" onClick={onClickDeny} className="btn">
              Googleでログインして記録する
            </button>
          </div>
        </div>
      </div>
    </>
  )
})

export default TastingSheetFormModalBox
