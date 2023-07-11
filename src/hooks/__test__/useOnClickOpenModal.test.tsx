import { renderHook } from '@testing-library/react'

import { ShowModalProps } from '../../types'
import useOnClickOpenModal from '../useOnClickOpenModal'

const mockShowModal = jest.fn()
jest.mock('../context/useModalContext', () => () => ({
  showModal: mockShowModal
}))

const setUp = (props: ShowModalProps) => {
  const { result } = renderHook(() => useOnClickOpenModal(props))

  return {
    ...result.current
  }
}

describe('useOnClickOpenModal', () => {
  const props = {
    rightButton: <p>test</p>,
    text: 'test'
  }

  describe('onClickOpenModal', () => {
    test('実行時にshowModalが実行される', () => {
      const { onClickOpenModal } = setUp(props)
      onClickOpenModal()
      expect(mockShowModal).toHaveBeenCalledWith(props)
    })
  })
})
