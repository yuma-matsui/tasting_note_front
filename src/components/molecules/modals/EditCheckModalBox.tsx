/* eslint-disable jsx-a11y/label-has-associated-control */

import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { ModalBoxProps } from '../../../types'

const EditCheckModalBox: FC<ModalBoxProps> = memo(({ id }) => {
  const navigate = useNavigate()
  const onClick = () => navigate('/')

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="font-bold text-lg">記録の途中ですがよろしいですか</p>
          <div className="modal-action">
            <button type="button" onClick={onClick}>
              OK
            </button>
            <label htmlFor={id} className="btn">
              回答に戻る
            </label>
          </div>
        </div>
      </div>
    </>
  )
})

export default EditCheckModalBox
