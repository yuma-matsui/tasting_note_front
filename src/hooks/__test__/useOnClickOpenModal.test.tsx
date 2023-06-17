import { renderHook } from '@testing-library/react'

import useOnClickOpenModal from '../useOnClickOpenModal'
import { ShowModalProps } from '../../types'

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
    text: 'test',
    rightButton: <p>test</p>
  }

  describe('onClickOpenModal', () => {
    test('実行時にshowModalが実行される', () => {
      const { onClickOpenModal } = setUp(props)
      onClickOpenModal()
      expect(mockShowModal).toHaveBeenCalledWith(props)
    })
  })
})
