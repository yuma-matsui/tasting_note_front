import { render } from '@testing-library/react'

import { WineMemoTextAreaProps } from '../../../../types'
import WineMemoTextArea from '../WineMemoTextArea'

const setUp = ({ register }: WineMemoTextAreaProps) => {
  const utils = render(<WineMemoTextArea register={register} />)

  return {
    ...utils
  }
}

describe('WineMemoTextArea', () => {
  const props = {
    register: jest.fn()
  }

  it('"メモ"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('メモ')).toBeInTheDocument()
  })

  it('"任意"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('任意')).toBeInTheDocument()
  })

  it('registerが実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalledWith('wine.memo')
  })
})
