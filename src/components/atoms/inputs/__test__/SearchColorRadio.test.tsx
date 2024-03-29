import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchColorRadioProps from '../../../../types/props/searchColorRadioProps'
import SearchColorRadio from '../SearchColorRadio'

const mockLabel = 'mock label'
jest.mock('../../../../hooks/useGetSearchRadioLabel', () => () => mockLabel)

const setUp = ({ checked, color, onChange }: SearchColorRadioProps) => {
  const utils = render(<SearchColorRadio color={color} checked={checked} onChange={onChange} />)

  return {
    ...utils,
    radio: screen.getByRole('radio')
  }
}

describe('SearchColorRadio', () => {
  let props: SearchColorRadioProps
  const initialProps: SearchColorRadioProps = {
    checked: false,
    color: 'red',
    onChange: jest.fn()
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  it('useGetSearchRadioLabelで受けとった値が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(mockLabel)).toBeInTheDocument()
  })

  it('クリックされた時にonChange関数が呼ばれる', () => {
    const { radio } = setUp(props)
    userEvent.click(radio)

    expect(props.onChange).toHaveBeenCalled()
  })

  describe('checked', () => {
    it('falseの場合にcheckedがfalseになる', () => {
      const { radio } = setUp(props)
      expect(radio).not.toBeChecked()
    })

    it('trueの場合にcheckedがtrueになる', () => {
      props.checked = true
      const { radio } = setUp(props)
      expect(radio).toBeChecked()
    })
  })
})
