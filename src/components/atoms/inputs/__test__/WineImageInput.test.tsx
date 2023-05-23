import { fireEvent, render, screen } from '@testing-library/react'

import { WineImageInputProps } from '../../../../types'
import WineImageInput from '../WineImageInput'

const setUp = ({ onChangeImageFile }: WineImageInputProps) => {
  const utils = render(<WineImageInput onChangeImageFile={onChangeImageFile} />)

  return {
    ...utils,
    input: screen.getByLabelText('画像')
  }
}

describe('WineImageInput', () => {
  const props = {
    onChangeImageFile: jest.fn()
  }

  it('"画像"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('画像')).toBeInTheDocument()
  })

  it('画像が選択された時にpropsに与えた関数が実行される', () => {
    const { input } = setUp(props)
    fireEvent.change(input)

    expect(props.onChangeImageFile).toHaveBeenCalled()
  })
})
